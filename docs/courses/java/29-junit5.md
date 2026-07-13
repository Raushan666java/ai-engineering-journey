# JUnit 5 Deep Dive
> **Previous:** [Keycloak](28-keycloak.md) | **Next:** [Mockito](30-mockito.md)

JUnit 5 is a complete rewrite of the most widely used testing framework in the Java ecosystem. Unlike JUnit 4, which was a single monolithic library, JUnit 5 is composed of three modules: JUnit Platform, JUnit Jupiter, and JUnit Vintage. This modular architecture enables IDEs, build tools, and custom engines to integrate cleanly while supporting both JUnit 5's new model and backward compatibility with JUnit 4 tests.

Every example in this chapter compiles and runs against JUnit 5.10+. Add this dependency to your project:

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
</dependency>
```

---

## Learning Objectives

By the end of this chapter you will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/29-junit5/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/hero.svg" alt="Chapter Banner: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/handwritten-notes.svg" alt="Handwritten Notes: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/sticky-notes.svg" alt="Sticky Notes: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/visual-explanation.svg" alt="Visual Explanation: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/architecture.svg" alt="Architecture: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/workflow.svg" alt="Workflow: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/mindmap.svg" alt="Mind Map: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/comparison.svg" alt="Comparison: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/cheatsheet.svg" alt="Cheat Sheet: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/interview-quiz.svg" alt="Quiz Card: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/29-junit5/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/29-junit5/social-card.svg" alt="Social Card: JUnit 5 Deep Dive" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Diagram the JUnit 5 architecture including the Platform, Jupiter, and Vintage modules and explain how they interact with IDEs and build tools
- Write parameterized tests using every source annotation and combine them with argument conversion and aggregation
- Generate dynamic tests at runtime using `@TestFactory` and the `DynamicTest`/`DynamicContainer` API
- Implement custom extensions using the JUnit 5 Extension Model
- Control test instance lifecycle with `PER_CLASS` vs `PER_METHOD` and justify when each is appropriate
- Organise tests into nested hierarchies with shared setup at each level
- Use the full assertion API including grouped assertions and assumptions
- Capture and report test metadata with `TestInfo` and `TestReporter`

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| JUnit 5 → modular test framework with Platform + Jupiter + Vintage | Jupiter API for new tests, Vintage for JUnit 4 backwards compatibility |
| Annotations → `@Test`, `@ParameterizedTest`, `@DisplayName`, `@Nested` | Rich lifecycle hooks: `@BeforeAll`, `@AfterEach` |
| Assertions and Assumptions → comprehensive assertion library | `assertAll()` for grouped assertions, `assumeTrue()` for conditional test execution |

---
## Chapter Roadmap

```mermaid
flowchart TD
    A[JUnit 5] --> B[JUnit Platform]
    A --> C[Jupiter API]
    A --> D[Vintage Engine]
    C --> C1[Annotations]
    C --> C2[Assertions]
    C --> C3[Assumptions]
    C --> C4[Extensions]
    C1 --> C1A[@Test / @ParameterizedTest]
    C1 --> C1B[@Nested / @DisplayName]
    C1 --> C1C[@BeforeEach / @AfterEach]
```

---
## Concept Comparison Table

| Concept | Description | Key Difference |
|---------|-------------|----------------|
| JUnit 4 | Legacy framework | `@Test`, `@BeforeClass` → single jar |
| JUnit 5 Jupiter | New annotation model | `@Test`, `@BeforeAll`, `@DisplayName` → `junit-jupiter-api` |
| JUnit 5 Vintage | Runs JUnit 4 tests on Platform | `junit-vintage-engine` |
| `assertAll()` | Groups multiple assertions | Reports all failures, not just first |

---
## Quick Reference

| Element | Purpose | Example |
|---------|---------|---------|
| `@Test` | Marks a test method | `@Test void shouldReturnTrue() { ... }` |
| `@ParameterizedTest` | Test with multiple arguments | `@ValueSource(strings = {"a", "b"})` |
| `@DisplayName` | Human-readable test name | `@DisplayName("Login with valid credentials")` |
| `@ExtendWith` | Registers extensions | `@ExtendWith(MockitoExtension.class)` |

---
## Cross-Application Matrix

| Domain | Application | Use Case |
|--------|-------------|----------|
| Unit Testing | JUnit 5 + AssertJ | AssertJ fluent assertions for readable tests |
| Integration Testing | @SpringBootTest | Full application context test with JUnit 5 |
| Parameterized Testing | @CsvSource | Test validation logic with multiple input sets |

---
## Chapter Quiz

1. What are the three sub-projects of JUnit 5? **Answer:** Platform, Jupiter, Vintage
2. Which annotation allows writing nested test classes for better organization? **Answer:** `@Nested`
3. How do you group assertions so all failures are reported? **Answer:** Use `assertAll()`

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Annotations & Lifecycle](#2-annotations--lifecycle)
3. [Assertions & Assumptions](#3-assertions--assumptions)
4. [Parameterized Tests](#4-parameterized-tests)
5. [Argument Conversion & Aggregation](#5-argument-conversion--aggregation)
6. [Dynamic Tests](#6-dynamic-tests)
7. [Test Templates](#7-test-templates)
8. [Nested Tests](#8-nested-tests)
9. [Tagging & Filtering](#9-tagging--filtering)
10. [Extensions](#10-extensions)
11. [Test Reporting](#11-test-reporting)
12. [Summary](#summary)
13. [Exercises](#exercises)

---

## 1. Architecture Overview

![JUnit 5 Architecture](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/29-junit5.png)

JUnit 5 is divided into three modules:

```
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
Ã¢â€â€š         JUnit Jupiter               Ã¢â€â€š  Ã¢â€ Â API + implementation for writing tests
Ã¢â€â€š   (junit-jupiter-api + engine)      Ã¢â€â€š     (@Test, assertions, extensions)
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¤
Ã¢â€â€š         JUnit Vintage                Ã¢â€â€š  Ã¢â€ Â Allows JUnit 4 tests to run on the Platform
Ã¢â€â€š   (junit-vintage-engine)             Ã¢â€â€š
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¤
Ã¢â€â€š         JUnit Platform               Ã¢â€â€š  Ã¢â€ Â Foundation: launcher, console, engine SPI
Ã¢â€â€š   (junit-platform-commons + engine)  Ã¢â€â€š     IDEs and build tools talk to this layer only
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
```

### 1.1 JUnit Platform


The Platform is the foundation. It provides:

- A `TestEngine` SPI that any test framework (JUnit Jupiter, JUnit Vintage, Spek, etcd) can implement
- A `Launcher` API that IDEs, Maven Surefire, Gradle, and custom runners use to discover and execute tests
- `TestDescriptor`, `TestExecutionResult`, and `TestPlan` types that abstract away the details of any specific engine

```java
package junit5.architecture;

import org.junit.platform.launcher.Launcher;
import org.junit.platform.launcher.LauncherDiscoveryRequest;
import org.junit.platform.launcher.core.LauncherDiscoveryRequestBuilder;
import org.junit.platform.launcher.core.LauncherFactory;
import org.junit.platform.launcher.listeners.SummaryGeneratingListener;
import org.junit.platform.launcher.listeners.TestExecutionSummary;

import static org.junit.platform.engine.discovery.DiscoverySelectors.selectClass;

/**
 * Programmatic launcher Ã¢â‚¬â€ demonstrates how IDEs and build tools
 * discover and run JUnit 5 tests without relying on any JUnit 4
 * concepts.
 */
public class PlatformLauncherDemo {

    public static void main(String[] args) {
        LauncherDiscoveryRequest request = LauncherDiscoveryRequestBuilder.request()
            .selectors(selectClass("junit5.architecture.SampleTest"))
            .build();

        Launcher launcher = LauncherFactory.create();
        SummaryGeneratingListener listener = new SummaryGeneratingListener();
        launcher.registerTestExecutionListeners(listener);
        launcher.execute(request);

        TestExecutionSummary summary = listener.getSummary();
        System.out.println("Tests found: " + summary.getTestsFoundCount());
        System.out.println("Tests succeeded: " + summary.getTestsSucceededCount());
        System.out.println("Tests failed: " + summary.getTestsFailedCount());

        summary.getFailures().forEach(failure ->
            System.out.println("  " + failure.getTestIdentifier().getDisplayName()
                + " -> " + failure.getException().getMessage()));
    }
}

class SampleTest {

    @org.junit.jupiter.api.Test
    void shouldPass() {
        org.junit.jupiter.api.Assertions.assertEquals(2, 1 + 1);
    }
}
```

### 1.2 JUnit Jupiter


Jupiter is the programming model Ã¢â‚¬â€ the `junit-jupiter-api` module provides every annotation and assertion you use when writing JUnit 5 tests. The `junit-jupiter-engine` module is the `TestEngine` implementation that the Platform discovers at runtime.

```java
package junit5.architecture;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;

/**
 * Every Jupiter test class is discovered by the Jupiter engine.
 * The engine scans for methods annotated with @Test, @ParameterizedTest,
 * @TestFactory, @RepeatedTest, or @TestTemplate.
 */
class JupiterEngineDiscoveryDemo {

    @Test
    @DisplayName("A simple test that always passes")
    void standardTest() {
    }

    @Test
    void anotherStandardTest() {
    }
}
```

### 1.3 JUnit Vintage


Vintage provides a `TestEngine` that runs JUnit 4 tests (and JUnit 3 tests via the JUnit 4 runner). This is critical for migration: you can adopt the JUnit 5 Platform immediately while keeping existing JUnit 4 tests running unchanged.

```xml
<dependency>
    <groupId>org.junit.vintage</groupId>
    <artifactId>junit-vintage-engine</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
</dependency>
```

```java
package junit5.architecture;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

/**
 * This is a JUnit 4 style test. With junit-vintage-engine on the
 * classpath, the Platform discovers and runs it alongside Jupiter
 * tests without any code changes.
 */
public class VintageCompatibilityTest {

    @Test
    public void jUnit4StyleTest() {
        assertEquals("JUnit 4 style runs on JUnit 5 Platform", 4, 2 + 2);
    }
}
```

> [!TIP]
> Use `@ParameterizedTest` with `@CsvSource` to avoid repetitive test code when testing multiple input-output pairs.

---

## 2. Annotations & Lifecycle

### 2.1 Core Test Annotations


```java
package junit5.annotations;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.RepetitionInfo;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;
import org.junit.jupiter.api.Timeout;

import java.time.Duration;
import java.util.Map;

/**
 * Demonstrates the core JUnit Jupiter annotations: @Test, @RepeatedTest,
 * @Disabled, @Timeout, @DisplayName.
 */
class CoreAnnotationDemo {

    @Test
    @DisplayName("Prices are calculated correctly for bulk orders")
    void basicTest() {
    }

    @Test
    @Disabled("TODO: fix this test after refactoring the pricing module")
    void temporarilyDisabled() {
    }

    @RepeatedTest(value = 5, name = "{displayName} Ã¢â‚¬â€ attempt {currentRepetition} of {totalRepetitions}")
    @DisplayName("Retry sensitive operation")
    void repeated(RepetitionInfo info) {
        int attempt = info.getCurrentRepetition();
        System.out.println("Attempt " + attempt + " of " + info.getTotalRepetitions());
    }

    @Test
    @Timeout(value = 2, unit = java.util.concurrent.TimeUnit.SECONDS)
    void mustFinishWithinTwoSeconds() throws InterruptedException {
        Thread.sleep(500);
    }

    @Test
    @DisplayName("TestInfo and TestReporter injection")
    void usingTestInfoAndReporter(TestInfo info, TestReporter reporter) {
        reporter.publishEntry(Map.of(
            "displayName", info.getDisplayName(),
            "tags", String.valueOf(info.getTags()),
            "testClass", info.getTestClass().map(Class::getSimpleName).orElse("N/A")
        ));
    }
}
```

### 2.2 DisplayName and DisplayNameGeneration


```java
package junit5.annotations;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.IndicativeSentencesGeneration;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

/**
 * @DisplayNameGeneration controls how display names are generated
 * for test classes and methods.
 *
 * ReplaceUnderscores: converts {@code should_throw_when_null} into
 * "should throw when null".
 *
 * Standard: preserves method names as-is.
 *
 * IndicativeSentencesGeneration: generates sentences from the enclosing
 * class name + method name.
 */
@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
@TestMethodOrder(MethodOrderer.DisplayName.class)
class DisplayNameGenerationDemo {

    @Test
    void should_throw_when_input_is_null() {
        // display name becomes: "should throw when input is null"
    }

    @Test
    void should_return_correct_sum_for_positive_numbers() {
    }

    @Nested
    @DisplayNameGeneration(DisplayNameGenerator.Standard.class)
    class StandardNaming {

        @Test
        void some_method_with_underscores() {
            // display name is the raw method name:
            // "some_method_with_underscores"
        }
    }

    @Nested
    @IndicativeSentencesGeneration(
        separator = " -> ",
        generator = DisplayNameGenerator.ReplaceUnderscores.class
    )
    class When_user_is_anonymous {

        @Test
        void should_redirect_to_login() {
            // display name becomes:
            // "When user is anonymous -> should redirect to login"
        }
    }
}
```

```java
package junit5.annotations;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;

/**
 * Custom display name generator that strips common test prefixes.
 */
class CustomDisplayNameGeneratorDemo {

    @Test
    void testThatUserIsRedirectedToLoginPage() {
    }

    @Test
    void testThatPaymentIsProcessedCorrectly() {
    }

    /**
     * A custom generator that removes "testThat" or "test" prefixes
     * and converts camelCase to readable sentences.
     */
    static class CleanEnglishGenerator extends DisplayNameGenerator.Standard {

        @Override
        public String generateDisplayNameForMethod(Class<?> testClass,
                                                    java.lang.reflect.Method testMethod) {
            String name = testMethod.getName();
            if (name.startsWith("testThat")) {
                name = name.substring(8);
            } else if (name.startsWith("test")) {
                name = name.substring(4);
            }
            return name.replaceAll("([a-z])([A-Z])", "$1 $2")
                       .toLowerCase();
        }
    }
}
```

### 2.3 Test Method Ordering


```java
package junit5.annotations;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

/**
 * @TestMethodOrder controls the execution order of test methods.
 *
 * Available orderers:
 * - MethodOrderer.DisplayName        Ã¢â‚¬â€ alphabetical by display name
 * - MethodOrderer.MethodName         Ã¢â‚¬â€ alphabetical by method name
 * - MethodOrderer.OrderAnnotation    Ã¢â‚¬â€ @Order values, ascending
 * - MethodOrderer.Random             Ã¢â‚¬â€ pseudo-random, deterministic seed
 * - Custom Orderer implementation
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class TestMethodOrderDemo {

    @Test
    @Order(3)
    void last() {
    }

    @Test
    @Order(1)
    void first() {
    }

    @Test
    @Order(2)
    void second() {
    }
}

@TestMethodOrder(MethodOrderer.MethodName.class)
class AlphabeticalOrderDemo {

    @Test
    void alphaTest() {
    }

    @Test
    void betaTest() {
    }

    @Test
    void gammaTest() {
    }
}
```

### 2.4 Test Instance Lifecycle


```java
package junit5.lifecycle;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * PER_CLASS (non-static @BeforeAll/@AfterAll):
 *   - A single instance of the test class is created for the entire run.
 *   - @BeforeAll and @AfterAll methods do NOT need to be static.
 *   - Useful for expensive setup (e.g., starting a test database).
 *   - Instance variables preserve state across tests Ã¢â‚¬â€ use with caution.
 */
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class PerClassLifecycleDemo {

    private final StringBuilder setupLog = new StringBuilder();
    private int sharedCounter = 0;

    @BeforeAll
    void initAll() {
        // Non-static: PER_CLASS makes this legal
        System.out.println("PER_CLASS @BeforeAll Ã¢â‚¬â€ runs once for the class");
    }

    @BeforeEach
    void init() {
        sharedCounter++;
        setupLog.append("init|");
    }

    @Test
    void firstTest() {
        assertTrue(sharedCounter >= 1);
    }

    @Test
    void secondTest() {
        assertTrue(sharedCounter >= 2);
    }

    @Test
    void thirdTest() {
        assertTrue(sharedCounter >= 3);
    }

    @AfterEach
    void tearDown() {
        System.out.println("After each test Ã¢â‚¬â€ counter is " + sharedCounter);
    }

    @AfterAll
    void tearDownAll() {
        System.out.println("PER_CLASS @AfterAll Ã¢â‚¬â€ runs once after all tests");
    }
}

/**
 * PER_METHOD (default):
 *   - A NEW instance of the test class is created for EACH test method.
 *   - @BeforeAll/@AfterAll must be static.
 *   - No shared state between tests Ã¢â‚¬â€ safer default.
 */
@TestInstance(TestInstance.Lifecycle.PER_METHOD)
class PerMethodLifecycleDemo {

    private final int instanceId = System.identityHashCode(this);

    @BeforeAll
    static void initAll() {
        // Must be static in PER_METHOD mode
        System.out.println("PER_METHOD @BeforeAll Ã¢â‚¬â€ runs once");
    }

    @BeforeEach
    void init() {
        System.out.println("New instance: " + instanceId);
    }

    @Test
    void firstTest() {
        System.out.println("Running in instance " + instanceId);
    }

    @Test
    void secondTest() {
        // instanceId is different from firstTest's
        System.out.println("Running in instance " + instanceId);
    }

    @AfterEach
    void tearDown() {
    }

    @AfterAll
    static void tearDownAll() {
        System.out.println("PER_METHOD @AfterAll Ã¢â‚¬â€ runs once");
    }
}
```

### 2.5 Interface Default Methods


```java
package junit5.lifecycle;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestInstance;

/**
 * JUnit 5 allows @Test, @BeforeEach, @AfterEach, etc. on interface
 * default methods. This enables reusable test behaviours via
 * composition through interfaces.
 */
interface DatabaseTest {

    @BeforeEach
    default void setUpDatabase() {
        System.out.println("Opening database connection...");
    }

    @Test
    default void databaseConnectionIsValid() {
        System.out.println("Verifying database connection...");
    }
}

interface TransactionalTest {

    @BeforeEach
    default void beginTransaction() {
        System.out.println("Beginning transaction...");
    }
}

class UserRepositoryTest implements DatabaseTest, TransactionalTest {

    @Test
    void shouldSaveUser() {
        System.out.println("Testing user persistence...");
    }

    @Test
    void shouldFindUserByEmail() {
        System.out.println("Testing user lookup by email...");
    }
}

/**
 * Default test methods in interfaces can also be parameterized,
 * allowing generic contract tests.
 */
interface ComparableContract<T extends Comparable<T>> {

    T createValue();
    T createSmallerValue();
    T createLargerValue();

    @Test
    default void shouldReturnZeroWhenEqual() {
        T value = createValue();
        org.junit.jupiter.api.Assertions.assertEquals(0, value.compareTo(value));
    }

    @Test
    default void shouldReturnNegativeWhenSmaller() {
        T smaller = createSmallerValue();
        T larger = createLargerValue();
        org.junit.jupiter.api.Assertions.assertTrue(smaller.compareTo(larger) < 0);
    }

    @Test
    default void shouldReturnPositiveWhenLarger() {
        T smaller = createSmallerValue();
        T larger = createLargerValue();
        org.junit.jupiter.api.Assertions.assertTrue(larger.compareTo(smaller) > 0);
    }
}

class IntegerContractTest implements ComparableContract<Integer> {

    @Override
    public Integer createValue() {
        return 42;
    }

    @Override
    public Integer createSmallerValue() {
        return 1;
    }

    @Override
    public Integer createLargerValue() {
        return 100;
    }
}

class StringContractTest implements ComparableContract<String> {

    @Override
    public String createValue() {
        return "banana";
    }

    @Override
    public String createSmallerValue() {
        return "apple";
    }

    @Override
    public String createLargerValue() {
        return "cherry";
    }
}
```

> [!NOTE]
> `@BeforeAll` and `@AfterAll` methods must be `static` by default unless `@TestInstance(Lifecycle.PER_CLASS)` is used.

---

## 3. Assertions & Assumptions

### 3.1 Standard Assertions


```java
package junit5.assertions;

import org.junit.jupiter.api.Test;

import java.time.Duration;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class StandardAssertionDemo {

    private final Calculator calc = new Calculator();

    @Test
    void basicAssertions() {
        assertEquals(4, calc.add(2, 2));
        assertEquals(4, calc.add(2, 2), "optional failure message");
        assertEquals(4, calc.add(2, 2), () -> "lazy evaluation: " + expensiveMessage());

        assertNotEquals(5, calc.add(2, 2));
        assertTrue(calc.add(1, 1) > 0);
        assertFalse(calc.add(-1, -1) > 0);
        assertNull(calc.getLastResult());
    }

    @Test
    void objectAssertions() {
        Object a = new Object();
        Object b = a;
        Object c = new Object();

        assertSame(a, b);
        assertNotSame(a, c);
        assertNotNull(a);
        assertInstanceOf(Integer.class, 42);
    }

    @Test
    void arrayAssertions() {
        int[] expected = {1, 2, 3};
        int[] actual = {1, 2, 3};
        assertArrayEquals(expected, actual);
    }

    @Test
    void iterableAssertions() {
        List<String> expected = Arrays.asList("a", "b", "c");
        List<String> actual = Arrays.asList("a", "b", "c");
        assertIterableEquals(expected, actual);
    }

    @Test
    void exceptionAssertions() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            calc.divide(1, 0);
        });
        assertTrue(exception.getMessage().contains("cannot divide by zero"));

        assertDoesNotThrow(() -> calc.divide(4, 2));
    }

    @Test
    void timeoutAssertions() {
        assertTimeout(Duration.ofMillis(200), () -> {
            Thread.sleep(100);
            return "finished";
        });

        // assertTimeoutPreemptively Ã¢â‚¬â€ interrupts the thread if it times out
        // Use with caution: the thread is interrupted, not killed, so
        // resources may leak.
        String result = assertTimeoutPreemptively(
            Duration.ofMillis(500),
            () -> {
                Thread.sleep(100);
                return "done";
            }
        );
        assertEquals("done", result);
    }

    @Test
    void linesMatch() {
        List<String> expected = Arrays.asList("foo", "bar", "baz");
        List<String> actual = Arrays.asList("foo", "bar", "baz");
        assertLinesMatch(expected, actual);
    }

    private String expensiveMessage() {
        return "Computed after " + System.currentTimeMillis();
    }
}

class Calculator {

    private Integer lastResult;

    int add(int a, int b) {
        lastResult = a + b;
        return lastResult;
    }

    int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("cannot divide by zero");
        }
        lastResult = a / b;
        return lastResult;
    }

    Integer getLastResult() {
        return lastResult;
    }
}
```

### 3.2 Grouped Assertions (assertAll)


`assertAll` executes every assertion inside, even if some fail. This is critical for verifying domain objects: you want to see ALL violations, not stop at the first one.

```java
package junit5.assertions;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class GroupedAssertionDemo {

    @Test
    void singleAssertAll() {
        Address address = new Address("123 Main St", "Springfield", "IL", "62701");

        assertAll("address",
            () -> assertEquals("123 Main St", address.street()),
            () -> assertEquals("Springfield", address.city()),
            () -> assertEquals("IL", address.state()),
            () -> assertEquals("62701", address.zip())
        );
    }

    @Test
    void nestedAssertAll() {
        Customer customer = new Customer(
            "Alice",
            "Johnson",
            new Address("456 Oak Ave", "Portland", "OR", "97201")
        );

        assertAll("customer",
            () -> assertEquals("Alice", customer.firstName()),
            () -> assertEquals("Johnson", customer.lastName()),
            () -> assertAll("customer.address",
                () -> assertEquals("456 Oak Ave", customer.address().street()),
                () -> assertEquals("Portland", customer.address().city()),
                () -> assertEquals("OR", customer.address().state())
            )
        );
    }

    @Test
    void assertAllWithCollectionResult() {
        // assertAll returns a list of Throwables (one per failed head).
        // You can inspect this list programmatically.
        assertAll("multiple validations",
            () -> assertTrue(true),
            () -> assertTrue(true)
            // Every head is executed; none throw, so the overall test passes.
        );
    }

    /**
     * Demonstration: assertAll reports ALL failures at once,
     * unlike a plain sequence of assertions that stops at the first.
     */
    @Test
    void compareWithSequentialFailures() {
        // With sequential assertions, this test stops at the first failure.
        // Uncomment to see the behaviour:
        // Person p = new Person(null, "Doe");
        // assertNotNull(p.firstName(), "firstName must not be null"); // FAILS Ã¢â‚¬â€ stops here
        // assertNotNull(p.lastName(), "lastName must not be null");   // never reached

        // With assertAll, both failures are reported:
        Person p = new Person(null, null);
        assertAll("person fields",
            () -> assertNotNull(p.firstName(), "firstName must not be null"),
            () -> assertNotNull(p.lastName(), "lastName must not be null")
        );
    }
}

record Address(String street, String city, String state, String zip) {}
record Customer(String firstName, String lastName, Address address) {}
record Person(String firstName, String lastName) {}
```

### 3.3 Assumptions


Assumptions gate test execution based on conditions. A failed assumption *skips* the test rather than failing it. This is different from `assert*` which fails.

```java
package junit5.assertions;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.OS;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assumptions.*;

class AssumptionDemo {

    @Test
    void assumeEnvironment() {
        String ciEnv = System.getenv("CI");
        assumeTrue(ciEnv != null, "Skipping: not running in CI environment");
        // Only runs if CI env var is set
        assertEquals("true", ciEnv);
    }

    @Test
    void assumingThatExample() {
        // assumingThat runs the executable only if the condition is true.
        // Unlike assumeTrue, the test is NOT skipped Ã¢â‚¬â€ the block is
        // simply not executed.
        assumingThat(
            "CI".equals(System.getenv("ENV")),
            () -> {
                // This block only runs in CI environment
                assertEquals(4, 2 + 2);
            }
        );

        // This always runs
        assertEquals(2, 1 + 1);
    }

    @Test
    void assumeWithCustomMessage() {
        assumeTrue(
            Runtime.version().feature() >= 17,
            () -> "Test requires Java 17+, got " + Runtime.version()
        );
    }

    @Test
    @EnabledOnOs(OS.LINUX)
    void onlyOnLinux() {
        // Built-in conditional execution annotation
        assertEquals(0, 0);
    }
}
```

> [!WARNING]
> Always use `assertEquals(expected, actual)` → the argument order matters for clear failure messages.

---

## 4. Parameterized Tests

Parameterized tests run the same test method multiple times with different arguments. They are declared with `@ParameterizedTest` plus at least one source annotation.

### 4.1 ValueSource


```java
package junit5.parameterized;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

class ValueSourceDemo {

    private final StringValidator validator = new StringValidator();

    @ParameterizedTest
    @ValueSource(strings = {"racecar", "radar", "level", "madam"})
    void palindromesAreRecognized(String candidate) {
        assertTrue(validator.isPalindrome(candidate));
    }

    @ParameterizedTest
    @ValueSource(ints = {2, 4, 6, 8, 10})
    void evenNumbers(int number) {
        assertEquals(0, number % 2);
    }

    @ParameterizedTest
    @ValueSource(longs = {1L, 2L, 3L})
    void longValues(long value) {
        assertTrue(value > 0);
    }

    @ParameterizedTest
    @ValueSource(doubles = {1.5, 2.7, 3.14})
    void doubleValues(double value) {
        assertTrue(value > 0);
    }
}

class StringValidator {

    boolean isPalindrome(String s) {
        String reversed = new StringBuilder(s).reverse().toString();
        return s.equals(reversed);
    }
}
```

### 4.2 NullSource, EmptySource, NullAndEmptySource


```java
package junit5.parameterized;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EmptySource;
import org.junit.jupiter.params.provider.NullAndEmptySource;
import org.junit.jupiter.params.provider.NullSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

class NullEmptySourceDemo {

    private final UserService service = new UserService();

    @ParameterizedTest
    @NullSource
    void shouldRejectNull(String name) {
        assertFalse(service.isValidUsername(name));
    }

    @ParameterizedTest
    @EmptySource
    void shouldRejectEmpty(String name) {
        assertFalse(service.isValidUsername(name));
    }

    @ParameterizedTest
    @NullAndEmptySource
    void shouldRejectNullOrEmpty(String name) {
        assertFalse(service.isValidUsername(name));
    }

    @ParameterizedTest
    @NullAndEmptySource
    @ValueSource(strings = {" ", "\t", "\n", "ab", "a", ""})
    void shouldRejectAllInvalidValues(String name) {
        assertFalse(service.isValidUsername(name));
    }
}

class UserService {

    boolean isValidUsername(String username) {
        return username != null
            && !username.isBlank()
            && username.length() >= 3
            && username.length() <= 20
            && username.matches("^[a-zA-Z0-9_]+$");
    }
}
```

### 4.3 EnumSource


```java
package junit5.parameterized;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.junit.jupiter.params.provider.EnumSource.Mode;

import java.time.DayOfWeek;
import java.time.Month;

import static org.junit.jupiter.api.Assertions.*;

class EnumSourceDemo {

    private final BusinessCalendar calendar = new BusinessCalendar();

    @ParameterizedTest
    @EnumSource(DayOfWeek.class)
    void allDaysAreHandled(DayOfWeek day) {
        assertNotNull(calendar.describe(day));
    }

    @ParameterizedTest
    @EnumSource(value = DayOfWeek.class, names = {"SATURDAY", "SUNDAY"})
    void weekendsAreNonWorking(DayOfWeek day) {
        assertFalse(calendar.isWorkingDay(day));
    }

    @ParameterizedTest
    @EnumSource(value = DayOfWeek.class, names = {"SATURDAY", "SUNDAY"}, mode = Mode.EXCLUDE)
    void weekdaysAreWorking(DayOfWeek day) {
        assertTrue(calendar.isWorkingDay(day));
    }

    @ParameterizedTest
    @EnumSource(value = DayOfWeek.class, names = ".+DAY", mode = Mode.MATCH_ALL)
    void matchByPattern(DayOfWeek day) {
        assertNotNull(day);
    }

    @ParameterizedTest
    @EnumSource(value = Month.class, names = {"JANUARY", "FEBRUARY", "MARCH"}, mode = Mode.INCLUDE)
    void q1Months(Month month) {
        assertTrue(month.getValue() <= 3);
    }
}

class BusinessCalendar {

    boolean isWorkingDay(DayOfWeek day) {
        return switch (day) {
            case SATURDAY, SUNDAY -> false;
            default -> true;
        };
    }

    String describe(DayOfWeek day) {
        return switch (day) {
            case MONDAY -> "Start of work week";
            case TUESDAY -> "Second day";
            case WEDNESDAY -> "Midweek";
            case THURSDAY -> "Almost Friday";
            case FRIDAY -> "Last workday";
            case SATURDAY -> "Weekend";
            case SUNDAY -> "Weekend";
        };
    }
}
```

### 4.4 MethodSource


`@MethodSource` references a *static* factory method (or methods) that returns a `Stream`, `Collection`, `Iterable`, `Iterator`, or array of arguments.

```java
package junit5.parameterized;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.params.provider.Arguments.arguments;

class MethodSourceDemo {

    private final TaxCalculator tax = new TaxCalculator();

    @ParameterizedTest
    @MethodSource("provideTaxBrackets")
    void taxIsCalculatedCorrectly(double income, double expectedTax) {
        assertEquals(expectedTax, tax.calculate(income), 0.01);
    }

    static Stream<Arguments> provideTaxBrackets() {
        return Stream.of(
            arguments(10_000, 0),
            arguments(50_000, 6_000),
            arguments(100_000, 17_000),
            arguments(250_000, 62_000)
        );
    }

    @ParameterizedTest
    @MethodSource("junit5.parameterized.ExternalDataProviders#provideStrings")
    void externalMethodSource(String input) {
        assertNotNull(input);
    }

    @ParameterizedTest
    @MethodSource({"provideNames", "provideMoreNames"})
    void multipleFactories(String name) {
        assertNotNull(name);
    }

    static Stream<String> provideNames() {
        return Stream.of("Alice", "Bob", "Charlie");
    }

    static Stream<String> provideMoreNames() {
        return Stream.of("Diana", "Eve");
    }

    @ParameterizedTest
    @MethodSource
    void methodSourceMatchingName(String value) {
        // When @MethodSource has no value, it uses the test method name:
        // "methodSourceMatchingName"
        assertFalse(value.isEmpty());
    }

    static Stream<String> methodSourceMatchingName() {
        return Stream.of("x", "y", "z");
    }

    @ParameterizedTest
    @MethodSource("intStreamProvider")
    void withSimpleTypes(int value) {
        assertTrue(value >= 0);
    }

    static IntStream intStreamProvider() {
        return IntStream.range(0, 5);
    }

    @ParameterizedTest
    @MethodSource("objectListProvider")
    void withObjectList(String item) {
        assertNotNull(item);
    }

    static List<String> objectListProvider() {
        return List.of("A", "B", "C");
    }
}

class ExternalDataProviders {

    static Stream<String> provideStrings() {
        return Stream.of("external1", "external2", "external3");
    }
}

class TaxCalculator {

    double calculate(double income) {
        if (income <= 12_000) return 0;
        if (income <= 50_000) return (income - 12_000) * 0.15;
        if (income <= 150_000) return 5700 + (income - 50_000) * 0.25;
        return 30700 + (income - 150_000) * 0.35;
    }
}
```

### 4.5 CsvSource


```java
package junit5.parameterized;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.CsvFileSource;

import static org.junit.jupiter.api.Assertions.*;

class CsvSourceDemo {

    private final ShoppingCart cart = new ShoppingCart();

    @ParameterizedTest
    @CsvSource({
        "apple,   1.50,  3,  4.50",
        "banana,  0.75,  2,  1.50",
        "orange,  1.25,  4,  5.00",
        "'kiwi fruit',  0.50, 10, 5.00"
    })
    void lineItemTotal(String product, double unitPrice, int quantity, double expectedTotal) {
        assertEquals(expectedTotal, cart.calculateLineTotal(unitPrice, quantity), 0.001);
    }

    @ParameterizedTest
    @CsvSource(textBlock = """
        apple,   1.50,  3,  4.50
        banana,  0.75,  2,  1.50
        orange,  1.25,  4,  5.00
        kiwi,    0.50, 10,  5.00
    """)
    void usingTextBlock(String product, double unitPrice, int quantity, double expectedTotal) {
        assertEquals(expectedTotal, cart.calculateLineTotal(unitPrice, quantity), 0.001);
    }

    @ParameterizedTest
    @CsvSource(value = {
        "null | 0 | 0",
        "''   | 0 | 0"
    }, delimiter = '|', nullValues = {"null", "N/A"})
    void withNullAndCustomDelimiter(String input, int length, int hashCode) {
        // nullValues: "null" and "N/A" strings in the CSV become Java null
        assertNull(input);
        assertEquals(0, length);
    }

    @ParameterizedTest
    @CsvSource(value = {
        "1 : 2 : 3",
        "10: 20: 30"
    }, delimiter = ':')
    void customDelimiter(int a, int b, int c) {
        assertEquals(a + b, c);
    }

    @ParameterizedTest
    @CsvSource({
        "hello,  5,  true",
        "hi,     2,  true",
        ",       0,  false"
    })
    void stringLengthAndPresence(String input, int expectedLength, boolean expectedPresent) {
        if (input != null) {
            assertEquals(expectedLength, input.length());
        }
        assertEquals(expectedPresent, input != null && !input.isEmpty());
    }
}

class ShoppingCart {

    double calculateLineTotal(double unitPrice, int quantity) {
        return unitPrice * quantity;
    }
}
```

### 4.6 CsvFileSource


```java
package junit5.parameterized;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Loads test data from a CSV file on the classpath.
 *
 * src/test/resources/tax-data.csv:
 *   income, expectedTax
 *   10000, 0
 *   50000, 6000
 *   100000, 17000
 *   250000, 62000
 */
class CsvFileSourceDemo {

    private final TaxCalculator tax = new TaxCalculator();

    @ParameterizedTest
    @CsvFileSource(resources = "/tax-data.csv", numLinesToSkip = 1)
    void fromCsvFile(double income, double expectedTax) {
        assertEquals(expectedTax, tax.calculate(income), 0.01);
    }

    @ParameterizedTest
    @CsvFileSource(
        resources = "/tax-data.csv",
        numLinesToSkip = 1,
        delimiter = ',',
        encoding = "UTF-8"
    )
    void withExplicitSettings(double income, double expectedTax) {
        assertEquals(expectedTax, tax.calculate(income), 0.01);
    }

    @ParameterizedTest
    @CsvFileSource(
        resources = {"/tax-data.csv", "/more-tax-data.csv"},
        numLinesToSkip = 1
    )
    void fromMultipleFiles(double income, double expectedTax) {
        assertDoesNotThrow(() -> tax.calculate(income));
    }
}
```

### 4.7 ArgumentsSource (Custom ArgumentsProvider)


```java
package junit5.parameterized;

import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.ArgumentsProvider;
import org.junit.jupiter.params.provider.ArgumentsSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.params.provider.Arguments.arguments;

class ArgumentsSourceDemo {

    @ParameterizedTest
    @ArgumentsSource(RomanNumeralProvider.class)
    void romanNumerals(int arabic, String roman) {
        RomanConverter converter = new RomanConverter();
        assertEquals(roman, converter.toRoman(arabic));
    }
}

class RomanNumeralProvider implements ArgumentsProvider {

    @Override
    public Stream<? extends Arguments> provideArguments(ExtensionContext context) {
        return Stream.of(
            arguments(1, "I"),
            arguments(4, "IV"),
            arguments(9, "IX"),
            arguments(10, "X"),
            arguments(40, "XL"),
            arguments(50, "L"),
            arguments(90, "XC"),
            arguments(100, "C"),
            arguments(400, "CD"),
            arguments(500, "D"),
            arguments(900, "CM"),
            arguments(1000, "M"),
            arguments(1987, "MCMLXXXVII"),
            arguments(2024, "MMXXIV")
        );
    }
}

class RomanConverter {

    private static final int[] VALUES = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    private static final String[] SYMBOLS = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

    String toRoman(int num) {
        if (num <= 0 || num > 3999) {
            throw new IllegalArgumentException("Out of range: " + num);
        }
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < VALUES.length; i++) {
            while (num >= VALUES[i]) {
                num -= VALUES[i];
                result.append(SYMBOLS[i]);
            }
        }
        return result.toString();
    }
}
```

---

## 5. Argument Conversion & Aggregation

### 5.1 Implicit and Explicit Conversion


JUnit 5 automatically converts strings to common types (`int`, `long`, `double`, `boolean`, `BigDecimal`, `UUID`, `Locale`, `File`, `Path`, `URL`, `URI`, `Instant`, etc.). For custom types, implement `ArgumentConverter`:

```java
package junit5.parameterized;

import org.junit.jupiter.api.extension.ParameterContext;
import org.junit.jupiter.params.converter.ArgumentConversionException;
import org.junit.jupiter.params.converter.ArgumentConverter;
import org.junit.jupiter.params.converter.ConvertWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static org.junit.jupiter.api.Assertions.*;

class ArgumentConversionDemo {

    @ParameterizedTest
    @CsvSource({
        "2024-01-15, 2024-01-15",
        "2023-12-25, 2023-12-25"
    })
    void implicitDateConversion(LocalDate date, LocalDate expected) {
        assertEquals(expected, date);
    }

    @ParameterizedTest
    @CsvSource({
        "15-01-2024, 2024-01-15",
        "25-12-2023, 2023-12-25"
    })
    void explicitConversion(@ConvertWith(EuropeanDateConverter.class) LocalDate date) {
        assertNotNull(date);
        assertEquals(LocalDate.now().getYear(), date.getYear());
    }
}

class EuropeanDateConverter implements ArgumentConverter {

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    @Override
    public Object convert(Object source, ParameterContext context)
            throws ArgumentConversionException {
        if (source == null) {
            return null;
        }
        if (!(source instanceof String s)) {
            throw new ArgumentConversionException("Expected a String but got " + source.getClass());
        }
        try {
            return LocalDate.parse(s, FORMATTER);
        } catch (Exception e) {
            throw new ArgumentConversionException("Failed to convert '" + s + "' to LocalDate", e);
        }
    }
}
```

### 5.2 Argument Aggregation


When a parameterized test has many arguments, aggregating them into a single object improves readability.

```java
package junit5.parameterized;

import org.junit.jupiter.api.extension.ParameterContext;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.aggregator.AggregateWith;
import org.junit.jupiter.params.aggregator.ArgumentsAccessor;
import org.junit.jupiter.params.aggregator.ArgumentsAggregationException;
import org.junit.jupiter.params.aggregator.ArgumentsAggregator;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

class ArgumentAggregationDemo {

    @ParameterizedTest
    @CsvSource({
        "Alice, 30, alice@example.com",
        "Bob, 25, bob@example.com",
        "Charlie, 35, charlie@example.com"
    })
    void usingArgumentsAccessor(ArgumentsAccessor accessor) {
        String name = accessor.getString(0);
        int age = accessor.getInteger(1);
        String email = accessor.getString(2);

        assertNotNull(name);
        assertTrue(age > 0);
        assertTrue(email.contains("@"));
    }

    @ParameterizedTest
    @CsvSource({
        "Alice, 30, alice@example.com",
        "Bob, 25, bob@example.com"
    })
    void usingCustomAggregator(@AggregateWith(PersonAggregator.class) Person person) {
        assertNotNull(person.name());
        assertTrue(person.age() > 0);
        assertTrue(person.email().contains("@"));
    }

    @ParameterizedTest
    @CsvSource({
        "Alice, 30, alice@example.com",
        "Bob, 25, bob@example.com"
    })
    void usingCustomAnnotation(@CsvToPerson Person person) {
        assertNotNull(person);
    }
}

record Person(String name, int age, String email) {}

class PersonAggregator implements ArgumentsAggregator {

    @Override
    public Object aggregateArguments(ArgumentsAccessor accessor, ParameterContext context)
            throws ArgumentsAggregationException {
        return new Person(
            accessor.getString(0),
            accessor.getInteger(1),
            accessor.getString(2)
        );
    }
}

/**
 * Composed annotation for reusable aggregation.
 */
@java.lang.annotation.Target(java.lang.annotation.ElementType.PARAMETER)
@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)
@AggregateWith(PersonAggregator.class)
@interface CsvToPerson {
}
```

---

## 6. Dynamic Tests

Dynamic tests are generated at runtime by a `@TestFactory` method. Unlike `@Test` methods which are compile-time constants, dynamic tests can be generated based on external data, database state, or file system contents.

### 6.1 DynamicTest


```java
package junit5.dynamictests;

import org.junit.jupiter.api.DynamicNode;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;
import org.junit.jupiter.api.DynamicContainer;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.function.Function;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.DynamicContainer.dynamicContainer;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

class DynamicTestDemo {

    private final StringConverter converter = new StringConverter();

    @TestFactory
    Collection<DynamicTest> collectionOfDynamicTests() {
        return Arrays.asList(
            dynamicTest("1st dynamic test", () -> assertTrue(true)),
            dynamicTest("2nd dynamic test", () -> assertEquals(4, 2 + 2))
        );
    }

    @TestFactory
    Stream<DynamicTest> streamOfDynamicTests() {
        return Stream.of(
            dynamicTest("positive number", () -> assertTrue(42 > 0)),
            dynamicTest("negative number", () -> assertTrue(-1 < 0)),
            dynamicTest("zero", () -> assertEquals(0, 0))
        );
    }

    @TestFactory
    Iterator<DynamicTest> iteratorOfDynamicTests() {
        return List.of(
            dynamicTest("from iterator 1", () -> {}),
            dynamicTest("from iterator 2", () -> {})
        ).iterator();
    }

    /**
     * Generate dynamic tests from external data Ã¢â‚¬â€ this is where
     * dynamic tests truly shine: tests are generated per data row.
     */
    @TestFactory
    Stream<DynamicTest> dynamicTestsFromData() {
        List<String> words = Arrays.asList("racecar", "radar", "level", "hello", "world");
        return words.stream()
            .filter(word -> word.contains("a"))
            .map(word -> dynamicTest(
                "palindrome test: " + word,
                () -> {
                    if (word.equals("hello") || word.equals("world")) {
                        assertFalse(converter.isPalindrome(word));
                    } else {
                        assertTrue(converter.isPalindrome(word));
                    }
                }
            ));
    }

    @TestFactory
    Stream<DynamicTest> dynamicTestsWithGeneratedNames() {
        return IntStream.range(1, 5)
            .mapToObj(i -> dynamicTest(
                "multiplication test #" + i,
                () -> assertEquals(i * i, i * i)
            ));
    }

    @TestFactory
    Stream<DynamicTest> randomDynamicTests() {
        Random random = new Random(42);
        return Stream.generate(() -> {
                int a = random.nextInt(100);
                int b = random.nextInt(100);
                return dynamicTest(
                    a + " + " + b + " = " + (a + b),
                    () -> assertEquals(a + b, a + b)
                );
            })
            .limit(10);
    }
}

class StringConverter {

    boolean isPalindrome(String s) {
        return s.equals(new StringBuilder(s).reverse().toString());
    }
}
```

### 6.2 DynamicContainer


`DynamicContainer` groups dynamic tests into a hierarchical structure.

```java
package junit5.dynamictests;

import org.junit.jupiter.api.DynamicContainer;
import org.junit.jupiter.api.DynamicNode;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import static org.junit.jupiter.api.DynamicContainer.dynamicContainer;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

class DynamicContainerDemo {

    private final ProductValidator validator = new ProductValidator();

    @TestFactory
    DynamicNode nestedDynamicTests() {
        return dynamicContainer("Products", Stream.of(
            dynamicContainer("Electronics", Stream.of(
                dynamicTest("Laptop price is valid", () -> validator.isValidPrice(999.99)),
                dynamicTest("Phone price is valid", () -> validator.isValidPrice(699.99))
            )),
            dynamicContainer("Books", Stream.of(
                dynamicTest("Novel price is valid", () -> validator.isValidPrice(14.99)),
                dynamicTest("Textbook price is valid", () -> validator.isValidPrice(79.99))
            ))
        ));
    }

    @TestFactory
    DynamicNode deeplyNestedStructure() {
        return dynamicContainer("Math Operations", Arrays.asList(
            dynamicContainer("Addition", Arrays.asList(
                dynamicContainer("Positive", List.of(
                    dynamicTest("1 + 1 = 2", () -> {}),
                    dynamicTest("2 + 3 = 5", () -> {})
                )),
                dynamicContainer("Negative", List.of(
                    dynamicTest("-1 + -1 = -2", () -> {}),
                    dynamicTest("-5 + 3 = -2", () -> {})
                ))
            )),
            dynamicContainer("Multiplication", Arrays.asList(
                dynamicTest("2 * 3 = 6", () -> {}),
                dynamicTest("4 * 5 = 20", () -> {})
            ))
        ));
    }
}

class ProductValidator {

    boolean isValidPrice(double price) {
        return price > 0 && price < 100_000;
    }
}
```

### 6.3 Stream-Based Dynamic URL Tests


```java
package junit5.dynamictests;

import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

class DynamicUrlTestDemo {

    private final HttpClient httpClient = HttpClient.newHttpClient();

    @TestFactory
    Stream<DynamicTest> allEndpointsReturnOk() {
        List<String> urls = List.of(
            "https://httpbin.org/status/200",
            "https://httpbin.org/status/201"
        );
        return urls.stream()
            .map(url -> dynamicTest("GET " + url + " returns 2xx", () -> {
                HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .GET()
                    .build();
                HttpResponse<String> response = httpClient.send(request,
                    HttpResponse.BodyHandlers.ofString());
                int status = response.statusCode();
                assertEquals(200, status, url + " returned " + status);
            }));
    }

    @TestFactory
    Stream<DynamicTest> batchValidation() {
        List<ValidationCase> cases = List.of(
            new ValidationCase("valid@email.com", true),
            new ValidationCase("not-an-email", false),
            new ValidationCase("user@.com", false)
        );
        return cases.stream()
            .map(tc -> dynamicTest(
                tc.input() + " -> " + tc.expected(),
                () -> assertEquals(tc.expected(), isValidEmail(tc.input()))
            ));
    }

    private boolean isValidEmail(String email) {
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$");
    }

    record ValidationCase(String input, boolean expected) {}
}
```

---

## 7. Test Templates

```java
package junit5.templates;

import org.junit.jupiter.api.TestTemplate;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.extension.Extension;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.TestTemplateInvocationContext;
import org.junit.jupiter.api.extension.TestTemplateInvocationContextProvider;

import java.util.List;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * @TestTemplate methods are invoked multiple times through
 * a TestTemplateInvocationContextProvider extension Ã¢â‚¬â€ one invocation
 * per context. This is the mechanism behind @RepeatedTest and
 * @ParameterizedTest.
 */
class TestTemplateDemo {

    @TestTemplate
    @ExtendWith(MyTestTemplateProvider.class)
    void templateTestMethod(int value) {
        assertTrue(value > 0);
    }
}

class MyTestTemplateProvider implements TestTemplateInvocationContextProvider {

    @Override
    public boolean supportsTestTemplate(ExtensionContext context) {
        return true;
    }

    @Override
    public Stream<TestTemplateInvocationContext> provideTestTemplateInvocationContexts(
            ExtensionContext context) {
        return Stream.of(
            invocationContext("positive case 1", 1),
            invocationContext("positive case 2", 2),
            invocationContext("positive case 3", 3)
        );
    }

    private TestTemplateInvocationContext invocationContext(String displayName, int value) {
        return new TestTemplateInvocationContext() {
            @Override
            public String getDisplayName(int invocationIndex) {
                return displayName;
            }

            @Override
            public List<Extension> getAdditionalExtensions() {
                return List.of(new ValueResolver(value));
            }
        };
    }
}

class ValueResolver implements org.junit.jupiter.api.extension.ParameterResolver {

    private final int value;

    ValueResolver(int value) {
        this.value = value;
    }

    @Override
    public boolean supportsParameter(
            org.junit.jupiter.api.extension.ParameterContext parameterContext,
            ExtensionContext extensionContext) {
        return parameterContext.getParameter().getType() == int.class;
    }

    @Override
    public Object resolveParameter(
            org.junit.jupiter.api.extension.ParameterContext parameterContext,
            ExtensionContext extensionContext) {
        return value;
    }
}
```

---

## 8. Nested Tests

`@Nested` creates inner test classes that inherit their parent's setup. Each level can have its own `@BeforeEach`/`@AfterEach`.

```java
package junit5.nested;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.EmptyStackException;
import java.util.Stack;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Nested tests follow the "Given-When-Then" / "Arrange-Act-Assert"
 * structure. The outer class sets up the fixture, and each nested
 * class tests a specific behaviour.
 */
@DisplayName("A Stack")
class StackNestedTest {

    private Stack<String> stack;

    @BeforeEach
    void setUp() {
        System.out.println("Outer @BeforeEach");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Outer @AfterEach");
    }

    @Nested
    @DisplayName("when new")
    class WhenNew {

        @BeforeEach
        void createNewStack() {
            stack = new Stack<>();
        }

        @Test
        @DisplayName("is empty")
        void isEmpty() {
            assertTrue(stack.isEmpty());
        }

        @Test
        @DisplayName("throws EmptyStackException when popped")
        void throwsExceptionWhenPopped() {
            assertThrows(EmptyStackException.class, () -> stack.pop());
        }

        @Test
        @DisplayName("throws EmptyStackException when peeked")
        void throwsExceptionWhenPeeked() {
            assertThrows(EmptyStackException.class, stack::peek);
        }

        @Nested
        @DisplayName("after pushing an element")
        class AfterPushing {

            private String element = "item";

            @BeforeEach
            void pushAnElement() {
                stack.push(element);
            }

            @Test
            @DisplayName("is no longer empty")
            void isNotEmpty() {
                assertFalse(stack.isEmpty());
            }

            @Test
            @DisplayName("peek returns the element")
            void peekReturnsElement() {
                assertEquals(element, stack.peek());
            }

            @Test
            @DisplayName("pop returns the element")
            void popReturnsElement() {
                assertEquals(element, stack.pop());
            }

            @Test
            @DisplayName("size is 1")
            void sizeIsOne() {
                assertEquals(1, stack.size());
            }

            @Nested
            @DisplayName("after pushing a second element")
            class AfterPushingSecond {

                private String secondElement = "second";

                @BeforeEach
                void pushSecond() {
                    stack.push(secondElement);
                }

                @Test
                @DisplayName("size increases to 2")
                void sizeIsTwo() {
                    assertEquals(2, stack.size());
                }

                @Test
                @DisplayName("pop returns the top element (LIFO)")
                void popReturnsTop() {
                    assertEquals(secondElement, stack.pop());
                    assertEquals(element, stack.pop());
                }
            }
        }
    }

    @Nested
    @DisplayName("when full")
    class WhenFull {

        private static final int CAPACITY = 10;

        @BeforeEach
        void fillStack() {
            stack = new Stack<>();
            for (int i = 0; i < CAPACITY; i++) {
                stack.push("item-" + i);
            }
        }

        @Test
        @DisplayName("size equals capacity")
        void sizeEqualsCapacity() {
            assertEquals(CAPACITY, stack.size());
        }

        @Test
        @DisplayName("popping all elements returns them in LIFO order")
        void lifoOrder() {
            for (int i = CAPACITY - 1; i >= 0; i--) {
                assertEquals("item-" + i, stack.pop());
            }
            assertTrue(stack.isEmpty());
        }
    }
}
```

---

## 9. Tagging & Filtering

```java
package junit5.tags;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

/**
 * Tags allow filtering tests at run time Ã¢â‚¬â€ run only "fast" tests
 * during development, run "integration" and "slow" tests in CI.
 *
 * Maven: mvn test -Dgroups="fast"
 * Gradle: gradle test --tests "*.fast.*"
 * IDE: configure test runner to include/exclude tags
 */
@Tag("domain-model")
class TaggedTestDemo {

    @Test
    @Tag("fast")
    void unitLevel() {
    }

    @Test
    @Tag("fast")
    @Tag("smoke")
    void smokeTest() {
    }

    @Test
    @Tag("integration")
    void databaseTest() {
    }

    @Test
    @Tag("integration")
    @Tag("slow")
    void fullIntegrationTest() {
    }

    @Test
    @Tag("performance")
    @Tag("slow")
    @Tag("load")
    void performanceBenchmark() {
    }
}

/**
 * Tags are inherited from the class level to all test methods.
 * Combined with @Tag on methods, you can build a flexible
 * filtering taxonomy.
 */
@Tag("repository")
@Tag("integration")
class RepositoryTaggedTestDemo {

    @Test
    @Tag("h2")
    void withEmbeddedDatabase() {
    }

    @Test
    @Tag("postgres")
    void withRealDatabase() {
    }
}

/**
 * Composed annotation for reusable tag groups.
 */
@Target(java.lang.annotation.ElementType.TYPE)
@Retention(java.lang.annotation.RetentionPolicy.RUNTIME)
@Tag("integration")
@Tag("slow")
@interface SlowIntegrationTest {
}

@SlowIntegrationTest
class AnnotatedTagTest {

    @Test
    void thisIsASlowIntegrationTest() {
    }
}
```

---

## 10. Extensions

Extensions are JUnit 5's mechanism for plugging custom behaviour into the test lifecycle. They replace JUnit 4's runners and rules.

### 10.1 @ExtendWith and Extension Interfaces


```java
package junit5.extensions;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.AfterAllCallback;
import org.junit.jupiter.api.extension.AfterEachCallback;
import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.BeforeEachCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.TestExecutionExceptionHandler;
import org.junit.jupiter.api.extension.TestInstancePostProcessor;
import org.junit.jupiter.api.extension.ParameterContext;
import org.junit.jupiter.api.extension.ParameterResolver;
import org.junit.jupiter.api.extension.ExtendWith;

import java.lang.reflect.Field;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith({
    TimingExtension.class,
    DatabaseExtension.class,
    MockExtension.class,
    IgnoreIOExceptionExtension.class,
    CustomParameterResolver.class
})
class ExtensionDemo {

    private DatabaseConnection connection;

    @Mock
    private PaymentGateway paymentGateway;

    @Test
    void injectedParameter(
            @Injectable("hello from extension") String message,
            DatabaseConnection conn) {
        assertNotNull(message);
        assertNotNull(conn);
        assertTrue(conn.isConnected());
    }

    @Test
    void customParameterResolver(int randomValue) {
        assertTrue(randomValue >= 1 && randomValue <= 100);
    }

    @Test
    void exceptionHandling() {
        // IOException is silently swallowed by the extension
        throw new java.io.IOException("this is handled");
    }
}

// ---- Annotations ----

@java.lang.annotation.Target({java.lang.annotation.ElementType.FIELD})
@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)
@interface Mock {
}

@java.lang.annotation.Target({java.lang.annotation.ElementType.PARAMETER})
@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)
@interface Injectable {
    String value();
}

// ---- Extension implementations ----

class TimingExtension implements BeforeEachCallback, AfterEachCallback {

    private final ThreadLocal<Long> startTime = new ThreadLocal<>();

    @Override
    public void beforeEach(ExtensionContext context) {
        startTime.set(System.nanoTime());
    }

    @Override
    public void afterEach(ExtensionContext context) {
        long elapsed = System.nanoTime() - startTime.get();
        long ms = elapsed / 1_000_000;
        if (ms > 100) {
            System.out.printf("SLOW: %s took %dms%n",
                context.getDisplayName(), ms);
        }
        startTime.remove();
    }
}

class DatabaseExtension implements BeforeAllCallback, AfterAllCallback {

    private DatabaseConnection connection;

    @Override
    public void beforeAll(ExtensionContext context) {
        connection = new DatabaseConnection();
        connection.connect();
        System.out.println("Database connected");
    }

    @Override
    public void afterAll(ExtensionContext context) {
        if (connection != null) {
            connection.disconnect();
            System.out.println("Database disconnected");
        }
    }
}

class DatabaseConnection {

    private boolean connected;

    void connect() {
        connected = true;
    }

    void disconnect() {
        connected = false;
    }

    boolean isConnected() {
        return connected;
    }
}

class MockExtension implements TestInstancePostProcessor {

    @Override
    public void postProcessTestInstance(Object testInstance, ExtensionContext context)
            throws Exception {
        for (Field field : testInstance.getClass().getDeclaredFields()) {
            if (field.isAnnotationPresent(Mock.class)) {
                field.setAccessible(true);
                // In a real implementation, use Mockito.mock()
                field.set(testInstance, new Object());
            }
        }
    }
}

class IgnoreIOExceptionExtension implements TestExecutionExceptionHandler {

    @Override
    public void handleTestExecutionException(ExtensionContext context, Throwable throwable)
            throws Throwable {
        if (throwable instanceof java.io.IOException) {
            System.out.println("Ignoring IOException: " + throwable.getMessage());
            return; // swallow the exception Ã¢â‚¬â€ test passes
        }
        throw throwable; // re-throw all other exceptions
    }
}

class CustomParameterResolver implements ParameterResolver {

    @Override
    public boolean supportsParameter(ParameterContext parameterContext,
                                      ExtensionContext extensionContext) {
        Class<?> type = parameterContext.getParameter().getType();
        if (type == int.class || type == Integer.class) {
            return true;
        }
        if (parameterContext.isAnnotated(Injectable.class)) {
            return true;
        }
        if (type == DatabaseConnection.class) {
            return true;
        }
        return false;
    }

    @Override
    public Object resolveParameter(ParameterContext parameterContext,
                                    ExtensionContext extensionContext) {
        Class<?> type = parameterContext.getParameter().getType();
        if (type == int.class || type == Integer.class) {
            return (int) (Math.random() * 100) + 1;
        }
        if (parameterContext.isAnnotated(Injectable.class)) {
            return parameterContext.findAnnotation(Injectable.class).get().value();
        }
        if (type == DatabaseConnection.class) {
            return extensionContext.getRoot()
                .getStore(ExtensionContext.Namespace.GLOBAL)
                .get("databaseConnection", DatabaseConnection.class);
        }
        return null;
    }
}

// ---- Conditional Extension ----

class ConditionalExtension implements org.junit.jupiter.api.extension.ConditionEvaluationResult,
                                     org.junit.jupiter.api.extension.ExecutionCondition {

    @Override
    public ConditionEvaluationResult evaluateExecutionCondition(ExtensionContext context) {
        String osName = System.getProperty("os.name").toLowerCase();
        if (osName.contains("win")) {
            return ConditionEvaluationResult.enabled("Running on Windows");
        }
        return ConditionEvaluationResult.disabled("This test requires Windows");
    }

    @Override
    public ConditionEvaluationResult evaluateExecutionCondition() {
        return null;
    }
}
```

---

## 11. Test Reporting

```java
package junit5.reporting;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;

import java.util.HashMap;
import java.util.Map;

/**
 * TestInfo and TestReporter are injected by the JUnit Jupiter engine
 * into any @Test, @ParameterizedTest, @RepeatedTest, or @TestFactory
 * method that declares them as parameters.
 */
class TestReportingDemo {

    @Test
    void testInfoDemo(TestInfo info) {
        System.out.println("Display name: " + info.getDisplayName());
        System.out.println("Test class: " + info.getTestClass().map(Class::getName).orElse("none"));
        System.out.println("Test method: " + info.getTestMethod().map(Object::toString).orElse("none"));
        System.out.println("Tags: " + info.getTags());
    }

    @Test
    void testReporterDemo(TestReporter reporter) {
        reporter.publishEntry("status", "running");
        reporter.publishEntry("timestamp", String.valueOf(System.currentTimeMillis()));
    }

    @Test
    void structuredReport(TestReporter reporter) {
        Map<String, String> values = new HashMap<>();
        values.put("expected", "100");
        values.put("actual", "100");
        values.put("result", "PASS");
        reporter.publishEntry("assertion-result", values);
    }

    @Test
    void multipleReportEntries(TestReporter reporter) {
        reporter.publishEntry("phase", "setup");
        reporter.publishEntry("phase", "execution");
        reporter.publishEntry("phase", "teardown");
    }
}
```

---

## Summary

This chapter covered the complete JUnit 5 testing framework. The JUnit 5 architecture was explained through its three modules: the Platform (launcher, engine SPI), Jupiter (the new programming model), and Vintage (backward compatibility with JUnit 4).

You learned every Jupiter annotation: `@Test` for standard tests, `@ParameterizedTest` for data-driven tests with seven source annotations (`@ValueSource`, `@NullSource`, `@EmptySource`, `@NullAndEmptySource`, `@EnumSource`, `@MethodSource`, `@CsvSource`, `@CsvFileSource`, and `@ArgumentsSource`), `@RepeatedTest` for repetition, `@TestFactory` for dynamic tests, `@TestTemplate` for template-driven invocations, `@TestMethodOrder` for ordering control, `@DisplayName` and `@DisplayNameGeneration` for naming, `@Nested` for hierarchical organisation, `@Tag` for filtering, and `@Disabled` for deactivation.

The assertion API was covered in full: `assertEquals`, `assertThrows`, `assertAll` with grouped assertions, `assertTimeout`, `assertNotNull`, and the assumption family (`assumeTrue`, `assumingThat`). The distinction between sequential assertions (stop at first failure) and `assertAll` (report all failures) was demonstrated.

Parameterized tests were explored in depth with argument conversion (`@ConvertWith`, custom `ArgumentConverter`) and aggregation (`@AggregateWith`, `ArgumentsAccessor`, custom `ArgumentsAggregator`).

Dynamic tests showed how `@TestFactory` methods can generate tests at runtime using `DynamicTest.dynamicTest()` and `DynamicContainer.dynamicContainer()`, supporting stream-based, data-driven, and hierarchical dynamic test suites.

The extension model was covered through `@ExtendWith` and extension interfaces: `BeforeAllCallback`, `AfterEachCallback`, `ParameterResolver`, `TestExecutionExceptionHandler`, and `TestInstancePostProcessor`. Custom parameter resolvers and conditional test execution demonstrated how to extend the JUnit engine itself.

Test lifecycle management included `@BeforeAll`/`@AfterAll` (static in PER_METHOD, non-static in PER_CLASS), `@BeforeEach`/`@AfterEach` (instance-level), `TestInstance.Lifecycle.PER_CLASS` vs `PER_METHOD`, and default method support in interfaces.

Nested tests showed how inner classes create hierarchical test structures with shared setup at each level, naturally following the Given-When-Then pattern.

Finally, `TestInfo` and `TestReporter` were demonstrated for capturing and publishing test metadata, enabling custom reporting and integration with CI/CD dashboards.

---

## Exercises

### Exercise 1: Architecture Diagram

Write a program that uses the JUnit Platform Launcher API to discover and run all tests in a package, print the `TestPlan`, and report a summary. Execute the launcher from a `main` method.

### Exercise 2: Comprehensive Parameterized Tests

Create a `TemperatureConverter` class with methods:
- `celsiusToFahrenheit(double c) -> double`
- `fahrenheitToCelsius(double f) -> double`
- `celsiusToKelvin(double c) -> double`
- `kelvinToCelsius(double k) -> double`

Write parameterized tests using:
- `@CsvSource` to test all four methods with at least 5 cases each
- `@MethodSource` that provides `Arguments` with both the method name and expected result
- `@EnumSource` to test conversion direction enums

### Exercise 3: Custom ArgumentsProvider

Implement a `FibonacciArgumentsProvider` that generates the first 20 Fibonacci numbers and their ordinal positions. Write a parameterized test that verifies each Fibonacci number is the sum of the two preceding ones.

### Exercise 4: Dynamic Test from File System

Write a `@TestFactory` method that scans a directory of JSON test case files, reads each file, parses it into a test case, and generates a `DynamicTest` per file. The test should fail with a descriptive message if the JSON is malformed.

### Exercise 5: Nested Stack Implementation

Test a `Deque` implementation using `@Nested`:
- Outer: common setup
- Level 1: "when empty" Ã¢â‚¬â€ test isEmpty, pop/peek exceptions
- Level 2: "after push" Ã¢â‚¬â€ verify size, pop returns correct element
- Level 3: "after multiple pushes" Ã¢â‚¬â€ verify LIFO ordering
- Level 4: "after clear" Ã¢â‚¬â€ verify it is empty again

### Exercise 6: Custom Extension

Implement a `RetryExtension` that retries failed tests up to 3 times. Use `TestExecutionExceptionHandler` to catch failures, log the retry count, and re-execute the test. Add a `@Retry(count = 5)` annotation for configuration.

### Exercise 7: Argument Conversion

Create an `ISODurationConverter` that converts ISO-8601 duration strings (`"P2DT3H4M"`) into `java.time.Duration` objects. Write a parameterized test that verifies the conversion.

### Exercise 8: Test Template

Implement a `FibonacciTestTemplate` using `@TestTemplate` that generates test contexts for each Fibonacci number position. Each context should provide the position number and expected value as parameters.

### Exercise 9: Tagged Test Suite

Design a tag taxonomy for a multi-module project:
- `@UnitTest` Ã¢â‚¬â€ fast, no external dependencies
- `@IntegrationTest` Ã¢â‚¬â€ requires database or external service
- `@SlowTest` Ã¢â‚¬â€ takes more than 1 second
- `@SmokeTest` Ã¢â‚¬â€ critical path verification
- `@SecurityTest` Ã¢â‚¬â€ security-related checks

Write a composed annotation that combines these for a "pre-commit" suite.

### Exercise 10: Reporting with TestInfo and TestReporter

Create a test that uses both `TestInfo` and `TestReporter` to:
- Log the start and end time of each test
- Report the test method name, class, and tags
- Publish structured key-value pairs for each assertion made
- Generate a JSON summary from `TestReporter.publishEntry` calls
