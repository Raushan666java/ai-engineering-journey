# Spring Boot Testing
> **Previous:** [Mockito](30-mockito.md) | **Next:** [Testcontainers](32-testcontainers.md)

Spring Boot provides first-class support for testing at every level of the application: unit tests with mocked slices, integration tests with the full application context, and end-to-end tests via HTTP clients. The testing layer builds on JUnit 5 and Mockito, adding Spring-specific annotations, test slices, and utilities that simplify wiring, configuration, and verification of Spring-managed components.

Add this dependency:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

This single starter pulls in JUnit 5, Mockito, AssertJ, Hamcrest, JSON Assert, and the Spring Test framework.

---

## Learning Objectives

![Spring Boot Testing](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/ch31-spring-boot-test.png)

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/31-spring-boot-test/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/hero.svg" alt="Chapter Banner: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/handwritten-notes.svg" alt="Handwritten Notes: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/sticky-notes.svg" alt="Sticky Notes: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/visual-explanation.svg" alt="Visual Explanation: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/architecture.svg" alt="Architecture: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/workflow.svg" alt="Workflow: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/mindmap.svg" alt="Mind Map: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/comparison.svg" alt="Comparison: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/cheatsheet.svg" alt="Cheat Sheet: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/interview-quiz.svg" alt="Quiz Card: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/31-spring-boot-test/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/31-spring-boot-test/social-card.svg" alt="Social Card: Spring Boot Testing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


By the end of this chapter you will be able to:

- Bootstrap a full Spring application context for integration testing using `@SpringBootTest`
- Configure the web environment (`MOCK`, `RANDOM_PORT`, `DEFINED_PORT`, `NONE`) and choose the appropriate mode for each test scenario
- Write integration tests using `TestRestTemplate` for REST endpoints and `WebTestClient` for WebFlux
- Apply test slices (`@WebMvcTest`, `@DataJpaTest`, `@JsonTest`, `@RestClientTest`, `@WebFluxTest`, `@DataMongoTest`, `@DataRedisTest`, `@DataLdapTest`, `@DataNeo4jTest`) to load only the necessary Spring configuration
- Replace real Spring beans with `@MockBean` and `@SpyBean` for focused slice tests
- Configure test-specific properties using `@TestPropertySource`, `@DynamicPropertySource`, and `@ActiveProfiles`
- Capture application output with `@OutputCaptureExtension`

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Spring Boot Testing → full integration test support | `@SpringBootTest` loads the full application context |
| Test Slices → focused test contexts for specific layers | `@WebMvcTest`, `@DataJpaTest`, `@JsonTest` |
| TestConfiguration → override beans for testing | `@TestConfiguration` + `@Bean` for test-specific wiring |

---
## Chapter Roadmap

```mermaid
flowchart TD
    A[Spring Boot Testing] --> B[@SpringBootTest]
    A --> C[Test Slices]
    A --> D[Utilities]
    B --> B1[Full context]
    B --> B2[WebEnvironment modes]
    C --> C1[@WebMvcTest]
    C --> C2[@DataJpaTest]
    C --> C3[@JsonTest]
    D --> D1[TestRestTemplate]
    D --> D2[TestPropertyValues]
```

---
## Concept Comparison Table

| Concept | Description | Key Difference |
|---------|-------------|----------------|
| `@SpringBootTest` | Full application context | Slowest, most comprehensive |
| `@WebMvcTest` | Web layer only (controllers) | Fast, mocks services |
| `@DataJpaTest` | JPA/DB layer only | Fast, in-memory DB, rolls back transactions |
| `@JsonTest` | JSON serialization only | Fastest slice, auto-configures Jackson/Gson |

---
## Quick Reference

| Element | Purpose | Example |
|---------|---------|---------|
| `@SpringBootTest` | Full integration test | `@SpringBootTest(webEnvironment = RANDOM_PORT)` |
| `@AutoConfigureMockMvc` | Auto-configures MockMvc | `mockMvc.perform(get("/api"))` |
| `TestRestTemplate` | Integration test HTTP client | `restTemplate.getForEntity(url, String.class)` |
| `@Sql` | Loads SQL scripts before/after test | `@Sql("/test-data.sql")` |

---
## Cross-Application Matrix

| Domain | Application | Use Case |
|--------|-------------|----------|
| REST API Testing | `@SpringBootTest` + TestRestTemplate | Full HTTP integration test with random port |
| Repository Testing | `@DataJpaTest` | Validate JPA queries against embedded database |
| Controller Security | `@WebMvcTest` + Security | Test authorization rules in isolation |

---
## Chapter Quiz

1. Which annotation loads the full application context for integration tests? **Answer:** `@SpringBootTest`
2. What is the fastest Spring Boot test slice? **Answer:** `@JsonTest` → only tests JSON serialization
3. How do you make `MockMvc` available in a `@WebMvcTest`? **Answer:** It is auto-configured; inject via `@Autowired`

---

## Table of Contents

1. [@SpringBootTest Ã¢â‚¬â€ Full Context Testing](#1-springboottest--full-context-testing)
2. [Web Environment Modes](#2-web-environment-modes)
3. [TestRestTemplate](#3-testresttemplate)
4. [WebTestClient](#4-webtestclient)
5. [Slicing Tests](#5-slicing-tests)
6. [MockBean and SpyBean](#6-mockbean-and-spybean)
7. [Test Configuration](#7-test-configuration)
8. [Output Capture](#8-output-capture)
9. [Summary](#9-summary)
10. [Exercises](#10-exercises)

---

## 1. @SpringBootTest Ã¢â‚¬â€ Full Context Testing

`@SpringBootTest` starts the full Spring application context Ã¢â‚¬â€ all beans, auto-configuration, and external configuration Ã¢â‚¬â€ just as if the application were running normally.

```java
package springboot.fullcontext;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

import javax.sql.DataSource;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @SpringBootTest loads the complete application context.
 * By default it searches for a @SpringBootApplication class
 * in the current package and its ancestors.
 */
@SpringBootTest
class ApplicationContextTest {

    @Autowired
    private ApplicationContext applicationContext;

    @Test
    void contextLoads() {
        assertThat(applicationContext).isNotNull();
    }

    @Test
    void allExpectedBeansArePresent() {
        assertThat(applicationContext.containsBean("dataSource")).isTrue();
        assertThat(applicationContext.containsBean("entityManagerFactory")).isTrue();
        assertThat(applicationContext.containsBean("transactionManager")).isTrue();
    }

    @Test
    void customBeansAreRegistered() {
        assertThat(applicationContext.getBeanNamesForType(GreetingService.class))
            .containsExactly("greetingService");
    }
}

// ---- Production Code ----

@Service
class GreetingService {

    private final GreetingRepository repository;

    GreetingService(GreetingRepository repository) {
        this.repository = repository;
    }

    String greet(String name) {
        return "Hello, " + name + "!" + (repository.isSpecial(name) ? " You're special!" : "");
    }
}

interface GreetingRepository {
    boolean isSpecial(String name);
}

@SpringBootApplication
class TestApplication {
    public static void main(String[] args) {
        SpringApplication.run(TestApplication.class, args);
    }
}
```

### 1.1 Custom Context Configuration

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/1-1-custom-context-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/1-1-custom-context-configuration-handwritten.svg" alt="Handwritten: 1.1 Custom Context Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/1-1-custom-context-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/1-1-custom-context-configuration-diagram.svg" alt="Diagram: 1.1 Custom Context Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/1-1-custom-context-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/1-1-custom-context-configuration-sticky.svg" alt="Sticky Note: 1.1 Custom Context Configuration" width="30%">
</a>


```java
package springboot.fullcontext;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.ContextConfiguration;

/**
 * Use @ContextConfiguration to specify explicit configuration classes
 * instead of relying on automatic @SpringBootApplication discovery.
 */
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@ContextConfiguration(classes = {TestDatabaseConfig.class, GreetingService.class})
class CustomContextTest {

    @Autowired
    private GreetingService greetingService;

    @Test
    void customContext() {
        assertThat(greetingService).isNotNull();
    }
}

@Configuration
class TestDatabaseConfig {

    @Bean
    DataSource dataSource() {
        return new org.springframework.jdbc.datasource.DriverManagerDataSource(
            "jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1");
    }

    @Bean
    GreetingRepository greetingRepository() {
        return name -> name.equals("admin");
    }
}
```

### 1.2 Context Caching

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/1-2-context-caching-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/1-2-context-caching-handwritten.svg" alt="Handwritten: 1.2 Context Caching" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/1-2-context-caching-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/1-2-context-caching-diagram.svg" alt="Diagram: 1.2 Context Caching" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/1-2-context-caching-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/1-2-context-caching-sticky.svg" alt="Sticky Note: 1.2 Context Caching" width="30%">
</a>


```java
package springboot.fullcontext;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

/**
 * Spring caches the application context between tests.
 * If two tests use the same configuration, the context is reused.
 * A context is identified by its @SpringBootTest properties,
 * @ActiveProfiles, @ContextConfiguration classes, and command-line args.
 *
 * Context caching dramatically reduces test execution time
 * in large test suites. Contexts are evicted by:
 * - @DirtiesContext
 * - Different @ActiveProfiles
 * - Different property values
 * - Different test slice annotations
 */
@SpringBootTest
class ContextCachingTest {

    @Autowired
    private ApplicationContext ctx;

    @Test
    void testA() {
        // Uses the same context as testB
    }

    @Test
    void testB() {
        // Shares context with testA
    }
}

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class DirtyContextTest {

    @Autowired
    private ApplicationContext ctx;

    @Test
    void eachTestGetsFreshContext() {
        // Every test method gets a brand-new ApplicationContext
    }

    @Test
    void freshContextAgain() {
        // Seed data, mocks, etc. are reset
    }
}
```

> [!TIP]
> Use test slices like `@WebMvcTest` and `@DataJpaTest` instead of `@SpringBootTest` for faster, more focused tests.

> [!WARNING]
> Avoid `@SpringBootTest` in unit tests → it starts the full context and dramatically slows down your test suite.

---

## 2. Web Environment Modes

`@SpringBootTest(webEnvironment = ...)` controls how the web server is started:

- `MOCK` Ã¢â‚¬â€ loads a mock web environment (MockMvc), no real server
- `RANDOM_PORT` Ã¢â‚¬â€ starts the real server on a random available port
- `DEFINED_PORT` Ã¢â‚¬â€ starts the real server on the configured port
- `NONE` Ã¢â‚¬â€ loads the context without any web environment

```java
package springboot.webenv;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

/**
 * MOCK Ã¢â‚¬â€ starts a mock Servlet environment without a real server.
 * This is the default. Use @AutoConfigureMockMvc to inject MockMvc.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class MockWebEnvironmentTest {

    @Autowired
    private org.springframework.test.web.servlet.MockMvc mockMvc;

    @MockBean
    private GreetingService greetingService;

    @Test
    void mockMvcWorks() throws Exception {
        when(greetingService.greet("Alice")).thenReturn("Hello, Alice!");

        var request = org.springframework.test.web.servlet.request.MockMvcRequestBuilders
            .get("/greet?name=Alice");
        mockMvc.perform(request)
            .andExpect(org.springframework.test.web.servlet.result.MockMvcResultMatchers
                .status().isOk())
            .andExpect(org.springframework.test.web.servlet.result.MockMvcResultMatchers
                .content().string("Hello, Alice!"));
    }
}

/**
 * RANDOM_PORT Ã¢â‚¬â€ real server on a random port. Use TestRestTemplate
 * or WebTestClient as the HTTP client.
 */
@SpringBootTest(
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
class RandomPortTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @MockBean
    private GreetingService greetingService;

    @Test
    void realServerResponds() {
        when(greetingService.greet("Bob")).thenReturn("Hi, Bob!");

        String response = restTemplate.getForObject(
            "http://localhost:" + port + "/greet?name=Bob",
            String.class
        );

        assertThat(response).isEqualTo("Hi, Bob!");
    }

    @Test
    void testRestTemplateInjectsPortAutomatically() {
        when(greetingService.greet("Carol")).thenReturn("Hello Carol");

        // TestRestTemplate configured with RANDOM_PORT auto-resolves
        // relative URLs without needing LocalServerPort
        String response = restTemplate.getForObject(
            "/greet?name=Carol", String.class);
        assertThat(response).isEqualTo("Hello Carol");
    }
}

/**
 * DEFINED_PORT Ã¢â‚¬â€ real server on the configured port (e.g., server.port=8080).
 * Use caution in CI Ã¢â‚¬â€ port conflicts cause failures.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class DefinedPortTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void usesConfiguredPort() {
        // Uses server.port from application.properties (or 8080 default)
        String response = restTemplate.getForObject(
            "/greet?name=Dave", String.class);
        assertThat(response).contains("Dave");
    }
}

/**
 * NONE Ã¢â‚¬â€ no web environment at all. Use for testing services,
 * repositories, and non-web components in a full context.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class NoWebEnvironmentTest {

    @Autowired
    private GreetingService greetingService;

    @MockBean
    private GreetingRepository greetingRepository;

    @Test
    void serviceLayerOnly() {
        when(greetingRepository.isSpecial("Eve")).thenReturn(true);

        String result = greetingService.greet("Eve");

        assertThat(result).contains("special");
    }
}

@RestController
class GreetingController {

    private final GreetingService greetingService;

    GreetingController(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/greet")
    String greet(@RequestParam String name) {
        return greetingService.greet(name);
    }
}
```

### 2.1 LocalServerPort

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/2-1-localserverport-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/2-1-localserverport-handwritten.svg" alt="Handwritten: 2.1 LocalServerPort" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/2-1-localserverport-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/2-1-localserverport-diagram.svg" alt="Diagram: 2.1 LocalServerPort" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/2-1-localserverport-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/2-1-localserverport-sticky.svg" alt="Sticky Note: 2.1 LocalServerPort" width="30%">
</a>


```java
package springboot.webenv;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @LocalServerPort injects the actual port the server started on.
 * Essential when using RANDOM_PORT mode.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class LocalServerPortTest {

    @LocalServerPort
    private int port;

    @Test
    void portIsInjected() {
        assertThat(port).isGreaterThan(0);
        System.out.println("Server running on port: " + port);
    }
}
```

---

## 3. TestRestTemplate

`TestRestTemplate` is a convenience wrapper around Spring's `RestTemplate`, pre-configured for integration testing. It is automatically available when using `@SpringBootTest` with `RANDOM_PORT` or `DEFINED_PORT`.

### 3.1 Basic REST Template Operations

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/3-1-basic-rest-template-operations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/3-1-basic-rest-template-operations-handwritten.svg" alt="Handwritten: 3.1 Basic REST Template Operations" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/3-1-basic-rest-template-operations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/3-1-basic-rest-template-operations-diagram.svg" alt="Diagram: 3.1 Basic REST Template Operations" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/3-1-basic-rest-template-operations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/3-1-basic-rest-template-operations-sticky.svg" alt="Sticky Note: 3.1 Basic REST Template Operations" width="30%">
</a>


```java
package springboot.testresttemplate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TestRestTemplateTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void getForEntity() {
        ResponseEntity<String> response = restTemplate.getForEntity(
            "/greet?name=Alice", String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).contains("Alice");
    }

    @Test
    void getForEntityWithHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/json");
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
            "/greet?name=Bob",
            HttpMethod.GET,
            entity,
            String.class
        );

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void postForEntity() {
        var newGreeting = new GreetingRequest("Carol", "formal");

        ResponseEntity<GreetingResponse> response = restTemplate.postForEntity(
            "/greet/custom",
            newGreeting,
            GreetingResponse.class
        );

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody().message()).contains("Carol");
    }

    @Test
    void exchangeWithCustomHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth("test-token");

        var body = new GreetingRequest("Dave", "casual");
        HttpEntity<GreetingRequest> request = new HttpEntity<>(body, headers);

        ResponseEntity<GreetingResponse> response = restTemplate.exchange(
            "/greet/custom",
            HttpMethod.POST,
            request,
            GreetingResponse.class
        );

        assertThat(response.getStatusCode().is2xxSuccessful()).isTrue();
    }

    @Test
    void getForObject() {
        String response = restTemplate.getForObject(
            "/greet?name=Eve", String.class);
        assertThat(response).contains("Eve");
    }

    @Test
    void postForObject() {
        var request = new GreetingRequest("Frank", "polite");
        GreetingResponse response = restTemplate.postForObject(
            "/greet/custom", request, GreetingResponse.class);
        assertThat(response.message()).contains("Frank");
    }

    @Test
    void deleteRequest() {
        restTemplate.delete("/greet/42");
        // No body expected Ã¢â‚¬â€ verify via subsequent GET or service mock
    }

    @Test
    void putRequest() {
        var update = new GreetingRequest("Grace", "updated");
        restTemplate.put("/greet/42", update);
    }

    @Test
    void errorHandling() {
        ResponseEntity<String> response = restTemplate.getForEntity(
            "/greet?name=", String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }
}

record GreetingRequest(String name, String style) {}
record GreetingResponse(String message) {}
```

### 3.2 TestRestTemplate with Basic Auth

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/3-2-testresttemplate-with-basic-auth-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/3-2-testresttemplate-with-basic-auth-handwritten.svg" alt="Handwritten: 3.2 TestRestTemplate with Basic Auth" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/3-2-testresttemplate-with-basic-auth-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/3-2-testresttemplate-with-basic-auth-diagram.svg" alt="Diagram: 3.2 TestRestTemplate with Basic Auth" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/3-2-testresttemplate-with-basic-auth-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/3-2-testresttemplate-with-basic-auth-sticky.svg" alt="Sticky Note: 3.2 TestRestTemplate with Basic Auth" width="30%">
</a>


```java
package springboot.testresttemplate;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AuthenticatedRestTemplateTest {

    @Test
    void withBasicAuth() {
        // TestRestTemplate supports basic auth out of the box
        TestRestTemplate authTemplate = new TestRestTemplate(
            "admin", "password");

        ResponseEntity<String> response = authTemplate.getForEntity(
            "/admin/dashboard", String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void withoutAuth() {
        var restTemplate = new TestRestTemplate();

        ResponseEntity<String> response = restTemplate.getForEntity(
            "/admin/dashboard", String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    void customHttpClient() {
        // TestRestTemplate can be configured with a custom HttpClient
        // for advanced scenarios (SSL, proxies, connection pooling)
    }
}
```

---

## 4. WebTestClient

`WebTestClient` is a reactive HTTP client designed for testing WebFlux endpoints. It also works with MVC endpoints when used with `@AutoConfigureWebTestClient`.

### 4.1 Basic WebTestClient Usage

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-1-basic-webtestclient-usage-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-1-basic-webtestclient-usage-handwritten.svg" alt="Handwritten: 4.1 Basic WebTestClient Usage" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-1-basic-webtestclient-usage-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-1-basic-webtestclient-usage-diagram.svg" alt="Diagram: 4.1 Basic WebTestClient Usage" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-1-basic-webtestclient-usage-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-1-basic-webtestclient-usage-sticky.svg" alt="Sticky Note: 4.1 Basic WebTestClient Usage" width="30%">
</a>


```java
package springboot.webtestclient;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * WebTestClient works with both WebFlux and MVC applications.
 * It provides a fluent DSL for defining requests and assertions.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient
class WebTestClientTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    void getRequest() {
        webTestClient.get()
            .uri("/greet?name=Alice")
            .exchange()
            .expectStatus().isOk()
            .expectBody(String.class)
            .value(body -> assertThat(body).contains("Alice"));
    }

    @Test
    void postRequest() {
        var request = new GreetingRequest("Bob", "formal");

        webTestClient.post()
            .uri("/greet/custom")
            .bodyValue(request)
            .exchange()
            .expectStatus().isCreated()
            .expectBody(GreetingResponse.class)
            .value(response -> assertThat(response.message()).contains("Bob"));
    }

    @Test
    void getWithQueryParams() {
        webTestClient.get()
            .uri(uriBuilder -> uriBuilder
                .path("/greet")
                .queryParam("name", "Carol")
                .queryParam("style", "polite")
                .build())
            .exchange()
            .expectStatus().isOk();
    }

    @Test
    void getWithHeaders() {
        webTestClient.get()
            .uri("/greet?name=Dave")
            .header("Accept-Language", "fr-FR")
            .exchange()
            .expectStatus().isOk();
    }
}
```

### 4.2 WebTestClient with JSON Path

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-2-webtestclient-with-json-path-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-2-webtestclient-with-json-path-handwritten.svg" alt="Handwritten: 4.2 WebTestClient with JSON Path" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-2-webtestclient-with-json-path-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-2-webtestclient-with-json-path-diagram.svg" alt="Diagram: 4.2 WebTestClient with JSON Path" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-2-webtestclient-with-json-path-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-2-webtestclient-with-json-path-sticky.svg" alt="Sticky Note: 4.2 WebTestClient with JSON Path" width="30%">
</a>


```java
package springboot.webtestclient;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient
class WebTestClientJsonTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    void jsonPathAssertions() {
        webTestClient.get()
            .uri("/api/users/1")
            .exchange()
            .expectStatus().isOk()
            .expectBody()
            .jsonPath("$.id").isEqualTo(1)
            .jsonPath("$.name").isEqualTo("Alice")
            .jsonPath("$.email").isEqualTo("alice@example.com")
            .jsonPath("$.roles").isArray()
            .jsonPath("$.roles.length()").isEqualTo(2);
    }

    @Test
    void jsonPathListAssertions() {
        webTestClient.get()
            .uri("/api/users")
            .exchange()
            .expectStatus().isOk()
            .expectBody()
            .jsonPath("$").isArray()
            .jsonPath("$[0].name").isEqualTo("Alice")
            .jsonPath("$[1].name").isEqualTo("Bob");
    }

    @Test
    void postWithJsonPath() {
        var newUser = new CreateUserRequest("Charlie", "charlie@example.com");

        webTestClient.post()
            .uri("/api/users")
            .bodyValue(newUser)
            .exchange()
            .expectStatus().isCreated()
            .expectBody()
            .jsonPath("$.name").isEqualTo("Charlie")
            .jsonPath("$.id").isNumber();
    }
}

record CreateUserRequest(String name, String email) {}
```

### 4.3 WebTestClient for WebFlux

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-3-webtestclient-for-webflux-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-3-webtestclient-for-webflux-handwritten.svg" alt="Handwritten: 4.3 WebTestClient for WebFlux" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-3-webtestclient-for-webflux-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-3-webtestclient-for-webflux-diagram.svg" alt="Diagram: 4.3 WebTestClient for WebFlux" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/4-3-webtestclient-for-webflux-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/4-3-webtestclient-for-webflux-sticky.svg" alt="Sticky Note: 4.3 WebTestClient for WebFlux" width="30%">
</a>


```java
package springboot.webtestclient;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.test.web.reactive.server.WebTestClient;

/**
 * @WebFluxTest is the reactive equivalent of @WebMvcTest.
 * It loads only WebFlux controllers and related infrastructure.
 */
@WebFluxTest(controllers = ReactiveGreetingController.class)
class WebFluxTestClientTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    void reactiveEndpoint() {
        webTestClient.get()
            .uri("/reactive/greet?name=Dave")
            .exchange()
            .expectStatus().isOk()
            .expectBody(String.class)
            .isEqualTo("Hello, Dave!");
    }
}

@RestController
class ReactiveGreetingController {

    @GetMapping("/reactive/greet")
    String greet(@RequestParam String name) {
        return "Hello, " + name + "!";
    }
}
```

---

## 5. Slicing Tests

Test slices load only a subset of the application context Ã¢â‚¬â€ just the beans needed for a specific layer. This makes slice tests faster and more focused than `@SpringBootTest`.

### 5.1 @WebMvcTest Ã¢â‚¬â€ Testing Controllers Only

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-1-webmvctest-testing-controllers-only-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-1-webmvctest-testing-controllers-only-handwritten.svg" alt="Handwritten: 5.1 @WebMvcTest Ã¢â‚¬â€ Testing Controllers Only" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-1-webmvctest-testing-controllers-only-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-1-webmvctest-testing-controllers-only-diagram.svg" alt="Diagram: 5.1 @WebMvcTest Ã¢â‚¬â€ Testing Controllers Only" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-1-webmvctest-testing-controllers-only-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-1-webmvctest-testing-controllers-only-sticky.svg" alt="Sticky Note: 5.1 @WebMvcTest Ã¢â‚¬â€ Testing Controllers Only" width="30%">
</a>


```java
package springboot.slices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * @WebMvcTest auto-configures MockMvc and only scans
 * @Controller, @ControllerAdvice, and WebMvc-related beans.
 * Services, repositories, and other beans are NOT loaded.
 */
@WebMvcTest(UserController.class)
class WebMvcSliceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void getUserReturnsOk() throws Exception {
        User user = new User(1L, "Alice", "alice@example.com");
        given(userService.findById(1L)).willReturn(java.util.Optional.of(user));

        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Alice"))
            .andExpect(jsonPath("$.email").value("alice@example.com"));
    }

    @Test
    void getUserReturns404() throws Exception {
        given(userService.findById(99L)).willReturn(java.util.Optional.empty());

        mockMvc.perform(get("/api/users/99"))
            .andExpect(status().isNotFound());
    }

    @Test
    void createUser() throws Exception {
        given(userService.create(anyString(), anyString()))
            .willReturn(new User(2L, "Bob", "bob@example.com"));

        String json = """
            {"name": "Bob", "email": "bob@example.com"}
            """;

        mockMvc.perform(post("/api/users")
                .contentType("application/json")
                .content(json))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.name").value("Bob"));
    }

    @Test
    void validationFailure() throws Exception {
        String json = """
            {"name": "", "email": "invalid"}
            """;

        mockMvc.perform(post("/api/users")
                .contentType("application/json")
                .content(json))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.errors").exists());
    }
}

@RestController
@RequestMapping("/api/users")
class UserController {

    private final UserService userService;

    UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    ResponseEntity<User> getUser(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    ResponseEntity<User> createUser(@Valid @RequestBody CreateUserDto dto) {
        User user = userService.create(dto.name(), dto.email());
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}

record User(Long id, String name, String email) {}
record CreateUserDto(String name, @Email String email) {}

interface UserService {
    java.util.Optional<User> findById(Long id);
    User create(String name, String email);
}

@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    ResponseEntity<Map<String, Object>> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, Object> errors = new java.util.HashMap<>();
        errors.put("errors", ex.getBindingResult().getFieldErrors()
            .stream().map(fe -> Map.of(fe.getField(), fe.getDefaultMessage()))
            .toList());
        return ResponseEntity.badRequest().body(errors);
    }
}
```

### 5.2 @DataJpaTest Ã¢â‚¬â€ Testing Repositories Only

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-2-datajpatest-testing-repositories-only-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-2-datajpatest-testing-repositories-only-handwritten.svg" alt="Handwritten: 5.2 @DataJpaTest Ã¢â‚¬â€ Testing Repositories Only" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-2-datajpatest-testing-repositories-only-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-2-datajpatest-testing-repositories-only-diagram.svg" alt="Diagram: 5.2 @DataJpaTest Ã¢â‚¬â€ Testing Repositories Only" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-2-datajpatest-testing-repositories-only-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-2-datajpatest-testing-repositories-only-sticky.svg" alt="Sticky Note: 5.2 @DataJpaTest Ã¢â‚¬â€ Testing Repositories Only" width="30%">
</a>


```java
package springboot.slices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @DataJpaTest configures an in-memory database (H2 by default),
 * scans @Entity classes, and configures JPA repositories.
 * It does NOT load services, controllers, or other beans.
 *
 * Transactions are rolled back after each test by default.
 */
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
class DataJpaSliceTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    void findByName() {
        UserEntity saved = entityManager.persistAndFlush(
            new UserEntity(null, "Alice", "alice@example.com"));

        java.util.Optional<UserEntity> found = userRepository.findByEmail("alice@example.com");

        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("Alice");
    }

    @Test
    void findAllByActive() {
        entityManager.persist(new UserEntity(null, "User1", "u1@x.com"));
        entityManager.persist(new UserEntity(null, "User2", "u2@x.com"));
        entityManager.flush();

        List<UserEntity> all = userRepository.findAll();
        assertThat(all).hasSize(2);
    }

    @Test
    void customQuery() {
        entityManager.persistAndFlush(new UserEntity(null, "Bob", "bob@x.com"));

        List<UserEntity> results = userRepository.searchByName("Bob");
        assertThat(results).hasSize(1);
    }

    @Test
    void transactionRollback() {
        // Each test is rolled back Ã¢â‚¬â€ no data leaks between tests
        userRepository.save(new UserEntity(null, "Temp", "temp@x.com"));
        assertThat(userRepository.count()).isEqualTo(1);
    }

    @Test
    void testEntityManager() {
        UserEntity user = new UserEntity(null, "Carol", "carol@x.com");
        UserEntity managed = entityManager.persistFlushFind(user);

        assertThat(managed.getId()).isNotNull();
        assertThat(managed.getEmail()).isEqualTo("carol@x.com");
    }
}

@Entity
@Table(name = "users")
class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    public UserEntity() {}

    public UserEntity(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}

interface UserRepository extends JpaRepository<UserEntity, Long> {
    java.util.Optional<UserEntity> findByEmail(String email);

    @Query("SELECT u FROM UserEntity u WHERE u.name LIKE %:name%")
    List<UserEntity> searchByName(@Param("name") String name);
}
```

### 5.3 @JsonTest Ã¢â‚¬â€ Testing Serialization

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-3-jsontest-testing-serialization-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-3-jsontest-testing-serialization-handwritten.svg" alt="Handwritten: 5.3 @JsonTest Ã¢â‚¬â€ Testing Serialization" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-3-jsontest-testing-serialization-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-3-jsontest-testing-serialization-diagram.svg" alt="Diagram: 5.3 @JsonTest Ã¢â‚¬â€ Testing Serialization" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-3-jsontest-testing-serialization-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-3-jsontest-testing-serialization-sticky.svg" alt="Sticky Note: 5.3 @JsonTest Ã¢â‚¬â€ Testing Serialization" width="30%">
</a>


```java
package springboot.slices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.json.JsonContent;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @JsonTest auto-configures Jackson (or Gson) and provides
 * JacksonTester for testing JSON serialization/deserialization.
 * It does NOT load any other beans.
 */
@JsonTest
class JsonSliceTest {

    @Autowired
    private JacksonTester<UserDto> json;

    @Test
    void serializeUserDto() throws Exception {
        UserDto user = new UserDto(
            1L,
            "Alice",
            "alice@example.com",
            LocalDate.of(2024, 1, 15)
        );

        JsonContent<UserDto> content = json.write(user);

        assertThat(content).hasJsonPathNumberValue("$.id");
        assertThat(content).hasJsonPathStringValue("$.name");
        assertThat(content).extractingJsonPathStringValue("$.name")
            .isEqualTo("Alice");
        assertThat(content).extractingJsonPathStringValue("$.email")
            .isEqualTo("alice@example.com");
        assertThat(content).hasJsonPathStringValue("$.createdAt");
    }

    @Test
    void deserializeUserDto() throws Exception {
        String jsonContent = """
            {
                "id": 2,
                "name": "Bob",
                "email": "bob@example.com",
                "createdAt": "2024-06-01"
            }
            """;

        UserDto user = json.parseObject(jsonContent);

        assertThat(user.id()).isEqualTo(2L);
        assertThat(user.name()).isEqualTo("Bob");
        assertThat(user.email()).isEqualTo("bob@example.com");
        assertThat(user.createdAt()).isEqualTo(LocalDate.of(2024, 6, 1));
    }

    @Test
    void nullFieldsAreOmitted() throws Exception {
        UserDto user = new UserDto(null, null, "test@x.com", null);

        JsonContent<UserDto> content = json.write(user);

        assertThat(content).doesNotHaveJsonPath("$.id");
        assertThat(content).hasJsonPathStringValue("$.email");
    }
}

record UserDto(Long id, String name, String email, LocalDate createdAt) {}
```

### 5.4 @RestClientTest Ã¢â‚¬â€ Testing REST Clients

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-4-restclienttest-testing-rest-clients-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-4-restclienttest-testing-rest-clients-handwritten.svg" alt="Handwritten: 5.4 @RestClientTest Ã¢â‚¬â€ Testing REST Clients" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-4-restclienttest-testing-rest-clients-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-4-restclienttest-testing-rest-clients-diagram.svg" alt="Diagram: 5.4 @RestClientTest Ã¢â‚¬â€ Testing REST Clients" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-4-restclienttest-testing-rest-clients-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-4-restclienttest-testing-rest-clients-sticky.svg" alt="Sticky Note: 5.4 @RestClientTest Ã¢â‚¬â€ Testing REST Clients" width="30%">
</a>


```java
package springboot.slices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.MockRestServiceServer;

import static org.springframework.test.web.client.match.MockRestRequestMatchers.*;
import static org.springframework.test.web.client.response.MockRestResponseCreators.*;
import static org.assertj.core.api.Assertions.assertThat;

/**
 * @RestClientTest auto-configures a MockRestServiceServer bound to
 * the specified REST client bean. It is used for testing classes
 * that use RestTemplate to call external APIs.
 */
@RestClientTest(UserApiClient.class)
class RestClientSliceTest {

    @Autowired
    private UserApiClient client;

    @Autowired
    private MockRestServiceServer server;

    @Test
    void getUserById() {
        server.expect(requestTo("/api/users/1"))
            .andExpect(method(org.springframework.http.HttpMethod.GET))
            .andRespond(withSuccess("""
                {"id":1,"name":"Alice","email":"alice@example.com"}
                """, MediaType.APPLICATION_JSON));

        UserDto user = client.findById(1L);

        assertThat(user.name()).isEqualTo("Alice");
        server.verify();
    }

    @Test
    void getUsers() {
        server.expect(requestTo("/api/users"))
            .andExpect(method(org.springframework.http.HttpMethod.GET))
            .andRespond(withSuccess("""
                [{"id":1,"name":"Alice","email":"a@x.com"},
                  {"id":2,"name":"Bob","email":"b@x.com"}]
                """, MediaType.APPLICATION_JSON));

        var users = client.findAll();

        assertThat(users).hasSize(2);
        server.verify();
    }

    @Test
    void serverError() {
        server.expect(requestTo("/api/users/999"))
            .andRespond(withServerError());

        java.util.Optional<UserDto> result = client.findByIdOptional(999L);
        assertThat(result).isEmpty();
    }

    @Test
    void createUser() {
        server.expect(requestTo("/api/users"))
            .andExpect(method(org.springframework.http.HttpMethod.POST))
            .andRespond(withCreatedEntity(
                org.springframework.web.util.UriComponentsBuilder
                    .fromUriString("/api/users/3").build().toUri()));

        Long id = client.create("Carol", "carol@x.com");
        assertThat(id).isEqualTo(3L);
        server.verify();
    }
}

class UserApiClient {

    private final RestTemplate restTemplate;
    private final String baseUrl = "https://api.example.com";

    UserApiClient(RestTemplateBuilder builder) {
        this.restTemplate = builder.rootUri(baseUrl).build();
    }

    UserDto findById(Long id) {
        return restTemplate.getForObject("/api/users/{id}", UserDto.class, id);
    }

    List<UserDto> findAll() {
        return java.util.Arrays.asList(
            restTemplate.getForObject("/api/users", UserDto[].class));
    }

    java.util.Optional<UserDto> findByIdOptional(Long id) {
        try {
            return java.util.Optional.ofNullable(findById(id));
        } catch (Exception e) {
            return java.util.Optional.empty();
        }
    }

    Long create(String name, String email) {
        var response = restTemplate.postForEntity(
            "/api/users",
            new CreateUserDto(name, email),
            Void.class
        );
        String location = response.getHeaders().getLocation().toString();
        return Long.parseLong(location.substring(location.lastIndexOf('/') + 1));
    }
}
```

### 5.5 @DataMongoTest

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-5-datamongotest-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-5-datamongotest-handwritten.svg" alt="Handwritten: 5.5 @DataMongoTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-5-datamongotest-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-5-datamongotest-diagram.svg" alt="Diagram: 5.5 @DataMongoTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-5-datamongotest-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-5-datamongotest-sticky.svg" alt="Sticky Note: 5.5 @DataMongoTest" width="30%">
</a>


```java
package springboot.slices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @DataMongoTest configures an embedded MongoDB instance,
 * scans @Document classes, and auto-configures MongoRepository beans.
 */
@DataMongoTest
class MongoSliceTest {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private ProductRepository productRepository;

    @Test
    void saveAndFind() {
        ProductEntity product = new ProductEntity("Laptop", "Electronics", 999.99);
        ProductEntity saved = productRepository.save(product);

        assertThat(saved.getId()).isNotNull();

        ProductEntity found = productRepository.findById(saved.getId()).orElseThrow();
        assertThat(found.getName()).isEqualTo("Laptop");
    }

    @Test
    void findByCategory() {
        mongoTemplate.save(new ProductEntity("Phone", "Electronics", 699.99));
        mongoTemplate.save(new ProductEntity("Book", "Education", 14.99));

        var results = productRepository.findByCategory("Electronics");
        assertThat(results).hasSize(1);
    }
}

@Document(collection = "products")
class ProductEntity {

    @Id
    private String id;
    private String name;
    private String category;
    private double price;

    public ProductEntity() {}

    public ProductEntity(String name, String category, double price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public String getCategory() { return category; }
    public double getPrice() { return price; }
}

interface ProductRepository extends MongoRepository<ProductEntity, String> {
    List<ProductEntity> findByCategory(String category);
}
```

### 5.6 @DataRedisTest

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-6-dataredistest-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-6-dataredistest-handwritten.svg" alt="Handwritten: 5.6 @DataRedisTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-6-dataredistest-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-6-dataredistest-diagram.svg" alt="Diagram: 5.6 @DataRedisTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-6-dataredistest-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-6-dataredistest-sticky.svg" alt="Sticky Note: 5.6 @DataRedisTest" width="30%">
</a>


```java
package springboot.slices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.redis.DataRedisTest;
import org.springframework.data.redis.core.RedisTemplate;

/**
 * @DataRedisTest configures an embedded Redis server,
 * scans @RedisHash classes, and auto-configures Redis repositories.
 */
@DataRedisTest
class RedisSliceTest {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Autowired
    private SessionRepository sessionRepository;

    @Test
    void saveAndRetrieve() {
        Session session = new Session("sess-1", "alice", java.time.Instant.now());
        sessionRepository.save(session);

        Session found = sessionRepository.findById("sess-1").orElseThrow();
        assertThat(found.getUserId()).isEqualTo("alice");
    }

    @Test
    void deleteSession() {
        Session session = new Session("sess-2", "bob", java.time.Instant.now());
        sessionRepository.save(session);

        sessionRepository.deleteById("sess-2");
        assertThat(sessionRepository.findById("sess-2")).isEmpty();
    }
}

@RedisHash("sessions")
class Session {

    @Id
    private String id;
    private String userId;
    private java.time.Instant createdAt;

    public Session() {}

    public Session(String id, String userId, java.time.Instant createdAt) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
    }

    public String getId() { return id; }
    public String getUserId() { return userId; }
    public java.time.Instant getCreatedAt() { return createdAt; }
}

interface SessionRepository extends org.springframework.data.repository.CrudRepository<Session, String> {}
```

### 5.7 @DataLdapTest

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-7-dataldaptest-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-7-dataldaptest-handwritten.svg" alt="Handwritten: 5.7 @DataLdapTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-7-dataldaptest-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-7-dataldaptest-diagram.svg" alt="Diagram: 5.7 @DataLdapTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-7-dataldaptest-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-7-dataldaptest-sticky.svg" alt="Sticky Note: 5.7 @DataLdapTest" width="30%">
</a>


```java
package springboot.slices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.ldap.DataLdapTest;
import org.springframework.ldap.core.LdapTemplate;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @DataLdapTest configures an embedded LDAP server,
 * scans @Entry classes, and configures LDAP repositories.
 */
@DataLdapTest
class LdapSliceTest {

    @Autowired
    private LdapTemplate ldapTemplate;

    @Test
    void ldapContextLoads() {
        assertThat(ldapTemplate).isNotNull();
    }
}
```

### 5.8 @DataNeo4jTest

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-8-dataneo4jtest-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-8-dataneo4jtest-handwritten.svg" alt="Handwritten: 5.8 @DataNeo4jTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-8-dataneo4jtest-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-8-dataneo4jtest-diagram.svg" alt="Diagram: 5.8 @DataNeo4jTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/5-8-dataneo4jtest-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/5-8-dataneo4jtest-sticky.svg" alt="Sticky Note: 5.8 @DataNeo4jTest" width="30%">
</a>


```java
package springboot.slices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.neo4j.DataNeo4jTest;

/**
 * @DataNeo4jTest configures an embedded Neo4j instance and
 * scans @Node classes and Neo4j repositories.
 */
@DataNeo4jTest
class Neo4jSliceTest {

    @Autowired
    private PersonRepository personRepository;

    @Test
    void contextLoads() {
        assertThat(personRepository).isNotNull();
    }
}

@Node("Person")
class PersonNode {

    @Id
    private Long id;
    private String name;

    public PersonNode() {}

    public PersonNode(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getName() { return name; }
}

interface PersonRepository extends org.springframework.data.neo4j.repository.Neo4jRepository<PersonNode, Long> {}
```

---

## 6. MockBean and SpyBean

`@MockBean` and `@SpyBean` add mocks or spies to the Spring `ApplicationContext`. Any bean of the matching type in the context is replaced by the mock.

### 6.1 @MockBean

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-1-mockbean-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-1-mockbean-handwritten.svg" alt="Handwritten: 6.1 @MockBean" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-1-mockbean-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-1-mockbean-diagram.svg" alt="Diagram: 6.1 @MockBean" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-1-mockbean-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-1-mockbean-sticky.svg" alt="Sticky Note: 6.1 @MockBean" width="30%">
</a>


```java
package springboot.mockbean;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

/**
 * @MockBean creates a Mockito mock and registers it in the
 * Spring ApplicationContext, replacing any existing bean of
 * the same type.
 *
 * The mock is RESET after each test method Ã¢â‚¬â€ stubs and
 * interaction data are cleared automatically.
 */
@SpringBootTest
class MockBeanTest {

    @Autowired
    private OrderService orderService;

    @MockBean
    private PaymentGateway paymentGateway;

    @MockBean
    private InventoryClient inventoryClient;

    @MockBean
    private NotificationService notificationService;

    @Test
    void successfulOrder() {
        // Given
        when(inventoryClient.checkStock("LAPTOP", 1)).thenReturn(true);
        when(paymentGateway.charge(anyString(), eq(999.99))).thenReturn(true);

        // When
        OrderResult result = orderService.placeOrder(
            new OrderRequest("LAPTOP", 1, "card-123"));

        // Then
        assertThat(result.success()).isTrue();
        verify(paymentGateway).charge("card-123", 999.99);
        verify(inventoryClient).reserve("LAPTOP", 1);
        verify(notificationService).sendOrderConfirmation(anyString());
    }

    @Test
    void outOfStock() {
        // Given
        when(inventoryClient.checkStock("LAPTOP", 1)).thenReturn(false);

        // When
        OrderResult result = orderService.placeOrder(
            new OrderRequest("LAPTOP", 1, "card-123"));

        // Then
        assertThat(result.success()).isFalse();
        assertThat(result.error()).contains("Out of stock");

        verify(paymentGateway, never()).charge(anyString(), anyDouble());
        verify(notificationService, never()).sendOrderConfirmation(anyString());
    }

    @Test
    void paymentDeclined() {
        // Given
        when(inventoryClient.checkStock("LAPTOP", 1)).thenReturn(true);
        when(paymentGateway.charge(anyString(), eq(999.99))).thenReturn(false);

        // When
        OrderResult result = orderService.placeOrder(
            new OrderRequest("LAPTOP", 1, "card-123"));

        // Then
        assertThat(result.success()).isFalse();
        assertThat(result.error()).contains("Payment declined");

        // Verify inventory was reserved but rolled back
        verify(inventoryClient).reserve("LAPTOP", 1);
        verify(notificationService).sendPaymentFailed("card-123");
    }
}

@Service
class OrderService {

    private final PaymentGateway paymentGateway;
    private final InventoryClient inventoryClient;
    private final NotificationService notificationService;

    OrderService(PaymentGateway paymentGateway, InventoryClient inventoryClient,
                 NotificationService notificationService) {
        this.paymentGateway = paymentGateway;
        this.inventoryClient = inventoryClient;
        this.notificationService = notificationService;
    }

    OrderResult placeOrder(OrderRequest request) {
        if (!inventoryClient.checkStock(request.productCode(), request.quantity())) {
            return new OrderResult(false, "Out of stock: " + request.productCode());
        }

        double total = 999.99; // simplified
        inventoryClient.reserve(request.productCode(), request.quantity());

        if (!paymentGateway.charge(request.paymentToken(), total)) {
            notificationService.sendPaymentFailed(request.paymentToken());
            return new OrderResult(false, "Payment declined");
        }

        notificationService.sendOrderConfirmation("order-" + System.currentTimeMillis());
        return new OrderResult(true, null);
    }
}

record OrderRequest(String productCode, int quantity, String paymentToken) {}
record OrderResult(boolean success, String error) {}

interface PaymentGateway {
    boolean charge(String token, double amount);
}

interface InventoryClient {
    boolean checkStock(String productCode, int quantity);
    void reserve(String productCode, int quantity);
}

interface NotificationService {
    void sendOrderConfirmation(String orderId);
    void sendPaymentFailed(String token);
}
```

### 6.2 @SpyBean

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-2-spybean-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-2-spybean-handwritten.svg" alt="Handwritten: 6.2 @SpyBean" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-2-spybean-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-2-spybean-diagram.svg" alt="Diagram: 6.2 @SpyBean" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-2-spybean-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-2-spybean-sticky.svg" alt="Sticky Note: 6.2 @SpyBean" width="30%">
</a>


```java
package springboot.mockbean;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

/**
 * @SpyBean wraps a real bean in a Mockito spy.
 * Real methods are called by default, but specific methods
 * can be stubbed using doReturn/when.
 */
@SpringBootTest
class SpyBeanTest {

    @Autowired
    private AuditService auditService;

    @SpyBean
    private AuditLogger auditLogger;

    @Test
    void spyPreservesRealBehaviour() {
        // The real auditLogger.log() is called
        auditService.recordEvent("user-login", "alice");

        verify(auditLogger).log(anyString());
    }

    @Test
    void spyWithStubbedMethod() {
        doThrow(new RuntimeException("Audit system unavailable"))
            .when(auditLogger).log(contains("CRITICAL"));

        // Non-critical logs still work through the real method
        auditService.recordEvent("INFO", "normal event");

        // Critical logs throw because we stubbed log()
        org.junit.jupiter.api.Assertions.assertThrows(RuntimeException.class,
            () -> auditService.recordEvent("CRITICAL", "server error"));
    }

    @Test
    void spyVerifyInteractions() {
        auditService.recordEvent("login", "bob");
        auditService.recordEvent("logout", "bob");

        verify(auditLogger, times(2)).log(anyString());
    }
}

@Service
class AuditService {

    private final AuditLogger auditLogger;

    AuditService(AuditLogger auditLogger) {
        this.auditLogger = auditLogger;
    }

    void recordEvent(String level, String message) {
        auditLogger.log("[" + level + "] " + message);
    }
}

@Component
class AuditLogger {

    void log(String message) {
        // Real implementation writes to a database or file
        System.out.println("AUDIT: " + message);
    }
}
```

### 6.3 DirtiesContext Ã¢â‚¬â€ Resetting Between Tests

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-3-dirtiescontext-resetting-between-tests-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-3-dirtiescontext-resetting-between-tests-handwritten.svg" alt="Handwritten: 6.3 DirtiesContext Ã¢â‚¬â€ Resetting Between Tests" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-3-dirtiescontext-resetting-between-tests-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-3-dirtiescontext-resetting-between-tests-diagram.svg" alt="Diagram: 6.3 DirtiesContext Ã¢â‚¬â€ Resetting Between Tests" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/6-3-dirtiescontext-resetting-between-tests-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/6-3-dirtiescontext-resetting-between-tests-sticky.svg" alt="Sticky Note: 6.3 DirtiesContext Ã¢â‚¬â€ Resetting Between Tests" width="30%">
</a>


```java
package springboot.mockbean;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.DirtiesContext;

import static org.mockito.Mockito.when;

/**
 * Normally, @MockBean mocks are reset after each test method.
 * However, if a test modifies the context in ways that affect
 * other beans (e.g., replacing a bean entirely, or using
 * a different configuration), use @DirtiesContext to force
 * context recreation.
 */
@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class DirtiesContextTest {

    @MockBean
    private ConfigService configService;

    @Test
    void testOne() {
        when(configService.get("feature-flag")).thenReturn("enabled");
    }

    @Test
    void testTwo() {
        // configService mock is fresh Ã¢â‚¬â€ no leftover stubs
        // Even without @DirtiesContext, @MockBean is reset automatically
        // This annotation is only needed for edge cases involving
        // bean definitions or singleton bean state
    }
}

interface ConfigService {
    String get(String key);
}
```

---

## 7. Test Configuration

### 7.1 @TestConfiguration

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-1-testconfiguration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-1-testconfiguration-handwritten.svg" alt="Handwritten: 7.1 @TestConfiguration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-1-testconfiguration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-1-testconfiguration-diagram.svg" alt="Diagram: 7.1 @TestConfiguration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-1-testconfiguration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-1-testconfiguration-sticky.svg" alt="Sticky Note: 7.1 @TestConfiguration" width="30%">
</a>


```java
package springboot.testconfig;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.test.context.ContextConfiguration;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @TestConfiguration defines additional beans or overrides
 * for the test context. Unlike @Configuration, it is NOT
 * picked up by component scanning Ã¢â‚¬â€ it must be imported
 * explicitly or defined as an inner class.
 */
@SpringBootTest
@ContextConfiguration(classes = TestConfig.class)
class TestConfigurationTest {

    @Autowired
    private RateLimiter rateLimiter;

    @Autowired
    private CacheManager cacheManager;

    @Test
    void testBeansAreLoaded() {
        assertThat(rateLimiter).isNotNull();
        assertThat(cacheManager).isNotNull();
    }
}

@TestConfiguration
class TestConfig {

    @Bean
    @Primary
    RateLimiter testRateLimiter() {
        return new RateLimiter(1000); // high limit for tests
    }

    @Bean
    CacheManager testCacheManager() {
        return new CacheManager(50); // small cache for tests
    }
}

class RateLimiter {

    private final int maxRequests;

    RateLimiter(int maxRequests) {
        this.maxRequests = maxRequests;
    }

    boolean allowRequest() {
        return maxRequests > 0;
    }

    int getMaxRequests() { return maxRequests; }
}

class CacheManager {

    private final int maxSize;

    CacheManager(int maxSize) {
        this.maxSize = maxSize;
    }

    int getMaxSize() { return maxSize; }
}
```

### 7.2 @TestPropertySource

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-2-testpropertysource-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-2-testpropertysource-handwritten.svg" alt="Handwritten: 7.2 @TestPropertySource" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-2-testpropertysource-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-2-testpropertysource-diagram.svg" alt="Diagram: 7.2 @TestPropertySource" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-2-testpropertysource-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-2-testpropertysource-sticky.svg" alt="Sticky Note: 7.2 @TestPropertySource" width="30%">
</a>


```java
package springboot.testconfig;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @TestPropertySource adds specific property values to the test
 * Environment. These take precedence over application.properties
 * and can be overridden by @DynamicPropertySource.
 */
@SpringBootTest
@TestPropertySource(properties = {
    "app.feature.payments=true",
    "app.feature.notifications=false",
    "app.limit=100"
})
class TestPropertySourceTest {

    @Value("${app.feature.payments}")
    private boolean paymentsEnabled;

    @Value("${app.feature.notifications}")
    private boolean notificationsEnabled;

    @Value("${app.limit}")
    private int limit;

    @Test
    void propertiesAreSet() {
        assertThat(paymentsEnabled).isTrue();
        assertThat(notificationsEnabled).isFalse();
        assertThat(limit).isEqualTo(100);
    }
}

/**
 * Properties from @TestPropertySource can be loaded from files.
 */
@SpringBootTest
@TestPropertySource(locations = "/test-config.properties")
class FileBasedPropertyTest {

    @Value("${test.server.url}")
    private String serverUrl;

    @Test
    void propertyFromFile() {
        assertThat(serverUrl).isEqualTo("http://localhost:9999");
    }
}
```

### 7.3 @DynamicPropertySource

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-3-dynamicpropertysource-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-3-dynamicpropertysource-handwritten.svg" alt="Handwritten: 7.3 @DynamicPropertySource" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-3-dynamicpropertysource-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-3-dynamicpropertysource-diagram.svg" alt="Diagram: 7.3 @DynamicPropertySource" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-3-dynamicpropertysource-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-3-dynamicpropertysource-sticky.svg" alt="Sticky Note: 7.3 @DynamicPropertySource" width="30%">
</a>


```java
package springboot.testconfig;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @DynamicPropertySource is used when property values must be
 * determined at runtime Ã¢â‚¬â€ for example, the port of a test
 * container (Testcontainers), or the URL of a random resource.
 *
 * The method must be static and accept a DynamicPropertyRegistry.
 */
@SpringBootTest
class DynamicPropertySourceTest {

    private static int redisPort = 6379; // In real usage, from Testcontainers

    @Value("${redis.host}")
    private String redisHost;

    @Value("${redis.port}")
    private int port;

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("redis.host", () -> "localhost");
        registry.add("redis.port", () -> String.valueOf(redisPort));
        registry.add("app.test-timeout", () -> "5000");
    }

    @Test
    void dynamicPropertiesAreSet() {
        assertThat(redisHost).isEqualTo("localhost");
        assertThat(port).isEqualTo(6379);
    }
}

/**
 * Realistic example with Testcontainers integration.
 *
 * @DynamicPropertySource is the standard way to inject
 * Testcontainers connection parameters into the Spring context.
 */
@SpringBootTest
@Testcontainers
class PostgresDynamicPropertyTest {

    @Container
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:15-alpine");

    @DynamicPropertySource
    static void configureDatabase(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }

    @Autowired
    private javax.sql.DataSource dataSource;

    @Test
    void connectsToTestcontainersDb() throws Exception {
        try (var conn = dataSource.getConnection()) {
            assertThat(conn.isValid(2)).isTrue();
        }
    }
}
```

### 7.4 @ActiveProfiles

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-4-activeprofiles-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-4-activeprofiles-handwritten.svg" alt="Handwritten: 7.4 @ActiveProfiles" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-4-activeprofiles-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-4-activeprofiles-diagram.svg" alt="Diagram: 7.4 @ActiveProfiles" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-4-activeprofiles-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-4-activeprofiles-sticky.svg" alt="Sticky Note: 7.4 @ActiveProfiles" width="30%">
</a>


```java
package springboot.testconfig;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @ActiveProfiles activates the specified bean definition profiles
 * for the test context. Beans annotated with @Profile("test")
 * are loaded; those with @Profile("!test") are excluded.
 */
@SpringBootTest
@ActiveProfiles("test")
class ActiveProfilesTest {

    @Autowired
    private Environment env;

    @Autowired
    private DataInitializer dataInitializer;

    @Test
    void testProfileIsActive() {
        assertThat(env.getActiveProfiles()).contains("test");
    }

    @Test
    void testBeansAreLoaded() {
        assertThat(dataInitializer).isNotNull();
    }
}

@Profile("test")
@Component
class DataInitializer {

    private final DataSource dataSource;

    DataInitializer(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @PostConstruct
    void init() {
        System.out.println("Loading test data...");
    }
}

@Profile("!test")
@Component
class ProductionInitializer {
    // Only loaded when "test" is NOT active
}
```

### 7.5 Test Slice Auto-Configuration

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-5-test-slice-auto-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-5-test-slice-auto-configuration-handwritten.svg" alt="Handwritten: 7.5 Test Slice Auto-Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-5-test-slice-auto-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-5-test-slice-auto-configuration-diagram.svg" alt="Diagram: 7.5 Test Slice Auto-Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/7-5-test-slice-auto-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/7-5-test-slice-auto-configuration-sticky.svg" alt="Sticky Note: 7.5 Test Slice Auto-Configuration" width="30%">
</a>


```java
package springboot.testconfig;

import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.test.autoconfigure.OverrideAutoConfiguration;
import org.springframework.boot.test.autoconfigure.core.AutoConfigureCache;
import org.springframework.boot.test.autoconfigure.filter.TypeExcludeFilters;
import org.springframework.boot.test.context.SpringBootTestContextBootstrapper;
import org.springframework.test.context.BootstrapWith;

/**
 * Each test slice annotation is itself composed of meta-annotations
 * that configure auto-configuration, filtering, and type exclusion.
 *
 * For example, @WebMvcTest is composed of:
 *
 * @BootstrapWith(SpringBootTestContextBootstrapper.class)
 * @OverrideAutoConfiguration(enabled = false)
 * @TypeExcludeFilters(WebMvcTypeExcludeFilter.class)
 * @AutoConfigureCache
 * @AutoConfigureMockMvc
 * @AutoConfigureWebClient
 * @ImportAutoConfiguration
 *
 * Understanding the composition helps when creating custom
 * test slices or combining multiple slices.
 */
class SliceCompositionTest {

    @Test
    void sliceAnnotationsAreMetaAnnotated() {
        // This test documents that slice annotations are
        // composed of smaller building blocks
    }
}
```

> [!NOTE]
> Inner `@TestConfiguration` classes override beans from the main config; use them to replace real services with mocks.

---

## 8. Output Capture

### 8.1 @OutputCaptureExtension

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/8-1-outputcaptureextension-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/8-1-outputcaptureextension-handwritten.svg" alt="Handwritten: 8.1 @OutputCaptureExtension" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/8-1-outputcaptureextension-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/8-1-outputcaptureextension-diagram.svg" alt="Diagram: 8.1 @OutputCaptureExtension" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/8-1-outputcaptureextension-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/8-1-outputcaptureextension-sticky.svg" alt="Sticky Note: 8.1 @OutputCaptureExtension" width="30%">
</a>


```java
package springboot.output;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.system.CapturedOutput;
import org.springframework.boot.test.system.OutputCaptureExtension;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @OutputCaptureExtension captures all System.out and System.err
 * output during the test. Injected via CapturedOutput parameter.
 */
@ExtendWith(OutputCaptureExtension.class)
class OutputCaptureTest {

    @Test
    void captureStdout(CapturedOutput output) {
        System.out.println("Hello, test!");

        assertThat(output).contains("Hello");
        assertThat(output).contains("test");
    }

    @Test
    void captureStderr(CapturedOutput output) {
        System.err.println("ERROR: something went wrong");

        assertThat(output).contains("ERROR");
        assertThat(output).contains("went wrong");
    }

    @Test
    void captureLoggedOutput(CapturedOutput output) {
        // If SLF4J is configured to log to console,
        // log messages are also captured
        org.slf4j.LoggerFactory.getLogger("test").info("Log message");

        assertThat(output).contains("Log message");
    }

    @Test
    void outputIsIsolated(CapturedOutput output) {
        // Output from previous tests does NOT leak into this one
        assertThat(output).doesNotContain("Hello, test!");
    }

    @Test
    void multipleLines(CapturedOutput output) {
        System.out.println("Line 1");
        System.out.println("Line 2");
        System.out.println("Line 3");

        String all = output.getAll();
        assertThat(all).contains("Line 1\nLine 2\nLine 3");
    }

    @Test
    void outputWithoutAnnotation(CapturedOutput output) {
        // Without @ExtendWith(OutputCaptureExtension.class),
        // CapturedOutput parameter injection would fail.
        // The annotation must be present at the class or method level.
    }
}
```

### 8.2 Using OutputCapture in @SpringBootTest

<a href="../../../assets/images/diagrams/java/31-spring-boot-test/8-2-using-outputcapture-in-springboottest-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/8-2-using-outputcapture-in-springboottest-handwritten.svg" alt="Handwritten: 8.2 Using OutputCapture in @SpringBootTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/8-2-using-outputcapture-in-springboottest-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/8-2-using-outputcapture-in-springboottest-diagram.svg" alt="Diagram: 8.2 Using OutputCapture in @SpringBootTest" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/31-spring-boot-test/8-2-using-outputcapture-in-springboottest-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/31-spring-boot-test/8-2-using-outputcapture-in-springboottest-sticky.svg" alt="Sticky Note: 8.2 Using OutputCapture in @SpringBootTest" width="30%">
</a>


```java
package springboot.output;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.system.CapturedOutput;
import org.springframework.boot.test.system.OutputCaptureExtension;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * OutputCapture works with Spring Boot integration tests too.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class SpringBootOutputCaptureTest {

    @Autowired
    private GreetingService greetingService;

    @Test
    void serviceLogsOutput(CapturedOutput output) {
        greetingService.greet("Alice");

        assertThat(output).contains("Greeting Alice");
    }
}
```

---

## 9. Summary

This chapter covered the complete Spring Boot testing framework, from full-context integration tests with `@SpringBootTest` to focused slice tests that load only the beans needed for a specific layer.

`@SpringBootTest` was introduced as the primary annotation for loading the full application context. The four web environment modes Ã¢â‚¬â€ `MOCK` (simulated web environment with MockMvc), `RANDOM_PORT` (real server on a dynamic port), `DEFINED_PORT` (real server on a fixed port), and `NONE` (no web environment) Ã¢â‚¬â€ were demonstrated with concrete examples. The `@LocalServerPort` annotation was shown for accessing the dynamically assigned port.

`TestRestTemplate` was covered in detail with `getForEntity`, `postForEntity`, `exchange` with custom headers and request bodies, and basic authentication support. `WebTestClient` provided a reactive alternative with its fluent DSL, JSON Path assertions, and compatibility with both WebFlux and MVC applications.

Test slices were the major focus: `@WebMvcTest` for controllers with MockMvc, `@DataJpaTest` for JPA repositories with `TestEntityManager`, `@JsonTest` for JSON serialization with `JacksonTester`, `@RestClientTest` for REST clients with `MockRestServiceServer`, `@WebFluxTest` for reactive controllers, and the full family of data slices (`@DataMongoTest`, `@DataRedisTest`, `@DataLdapTest`, `@DataNeo4jTest`).

`@MockBean` and `@SpyBean` were shown for introducing mock objects into the Spring context, replacing real beans with controlled doubles. The automatic reset of mocks between tests and the use of `@DirtiesContext` for managing context state were explained.

Test configuration options included `@TestConfiguration` for defining test-specific beans, `@TestPropertySource` for inline and file-based property overrides, `@DynamicPropertySource` for runtime-determined properties (with a Testcontainers example), and `@ActiveProfiles` for activating Spring profiles in tests.

Finally, `@OutputCaptureExtension` with `CapturedOutput` was demonstrated for capturing and asserting on stdout, stderr, and logged output during test execution.

---

## 10. Exercises

### Exercise 1: Full Context Test

Create a `PaymentService` that coordinates `FraudDetection`, `BankGateway`, and `ReceiptService`. Write a `@SpringBootTest` that:

- Uses `RANDOM_PORT` web environment
- Uses `TestRestTemplate` to verify the REST endpoint
- Uses `@MockBean` for all three dependencies
- Tests successful payment, fraud rejection, and bank failure

### Exercise 2: MockMvc Controller Test

Create a `ProductController` with CRUD endpoints. Write `@WebMvcTest` tests that:

- Test `GET /api/products/{id}` returns 200 and 404
- Test `POST /api/products` with valid and invalid JSON bodies
- Test `DELETE /api/products/{id}` returns 204
- Verify that validation errors return structured error responses
- Use `@MockBean` for the `ProductService` dependency

### Exercise 3: DataJpa Repository Test

Create a `CustomerRepository` extending `JpaRepository` with custom queries:
- `findByLastName(String lastName)`
- `findByEmail(String email)`
- `@Query` that finds customers by the first letter of their last name
- `@Modifying` query to activate a customer

Write `@DataJpaTest` tests that verify each query.

### Exercise 4: JSON Test

Create a `Transaction` record with fields: id, amount, currency, timestamp, status, description. Write `@JsonTest` tests that:

- Serialise a Transaction and assert JSON Path values
- Deserialise a JSON string and assert record fields
- Test null field handling
- Test date/time format consistency
- Test currency enum serialisation

### Exercise 5: RestClientTest

Create a `WeatherApiClient` that calls an external weather API using `RestTemplate`. Write `@RestClientTest` tests that:

- Mock a successful response and verify the client parses it correctly
- Mock a 404 and verify the client returns `Optional.empty()`
- Mock a timeout and verify the client handles it gracefully
- Verify the correct URL and HTTP method are used
- Verify request headers (e.g., API key, Accept header)

### Exercise 6: DynamicPropertySource with Testcontainers

Set up a `@SpringBootTest` that uses Testcontainers to start a PostgreSQL container. Use `@DynamicPropertySource` to inject the datasource URL, username, and password. Write a test that:
- Verifies the database connection works
- Saves and retrieves an entity using `JpaRepository`
- Verifies the correct PostgreSQL version is running

### Exercise 7: ActiveProfiles

Create three profile-specific configurations:
- `@Profile("dev")` Ã¢â‚¬â€ uses H2 in-memory database, verbose logging
- `@Profile("test")` Ã¢â‚¬â€ uses H2, minimal logging, mock mail server
- `@Profile("prod")` Ã¢â‚¬â€ uses PostgreSQL, WARN logging, real mail server

Write a `@SpringBootTest` with `@ActiveProfiles("test")` that verifies the correct beans are injected.

### Exercise 8: Output Capture

Write a `LoggingService` that logs messages at INFO, WARN, and ERROR levels. Test with `@OutputCaptureExtension` that:

- INFO messages appear in the captured output
- ERROR messages appear in both the output and the error stream
- The log message format matches a regex pattern
- Log output is isolated between test methods

### Exercise 9: DataMongoTest

Create a `MovieRepository` extending `MongoRepository` with methods:
- `findByDirector(String director)`
- `findByReleaseYearBetween(int from, int to)`
- `findByTitleContainingIgnoreCase(String keyword)`

Write `@DataMongoTest` tests that verify each method. Use `MongoTemplate` for direct document operations.

### Exercise 10: Complete Integration Test Suite

Build a complete test suite for a `BlogController` with the following test types:

1. `@WebMvcTest` Ã¢â‚¬â€ test controller validation, error handling, response format
2. `@DataJpaTest` Ã¢â‚¬â€ test `PostRepository` queries, pagination, and sorting
3. `@JsonTest` Ã¢â‚¬â€ test `PostDto` serialization with comments, tags, and timestamps
4. `@RestClientTest` Ã¢â‚¬â€ test `ExternalCommentClient` that fetches comments from an external service
5. `@SpringBootTest(RANDOM_PORT)` Ã¢â‚¬â€ end-to-end test with `TestRestTemplate` using `@MockBean` for external dependencies
6. `@SpringBootTest` with Testcontainers Ã¢â‚¬â€ test the full stack with a real PostgreSQL database
7. `@OutputCaptureExtension` Ã¢â‚¬â€ verify that blog operations log the correct audit trail
