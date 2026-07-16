# Testcontainers & Integration Testing
> **Previous:** [Spring Boot Testing](31-spring-boot-test.md) | **Next:** [Security & Performance Testing](33-security-perf-test.md)

## Learning Objectives

By the end of this chapter, you will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/java/32-testcontainers/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/java/32-testcontainers/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/java/32-testcontainers/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/java/32-testcontainers/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/java/32-testcontainers/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/java/32-testcontainers/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


1.  Understand the Testcontainers architecture and how it manages container lifecycles
2.  Use `GenericContainer` with the JUnit 5 `@Testcontainers` / `@Container` extension
3.  Manage container lifecycles: start/stop, reusable containers, singleton patterns
4.  Configure database containers (PostgreSQL, MySQL, MSSQL, Oracle) with init scripts
5.  Use the JDBC tc driver (`jdbc:tc:postgresql://`) for zero-config database testing
6.  Apply `@DynamicPropertySource` to inject dynamic container connection details
7.  Implement wait strategies (`Wait.forLogMessage`, `Wait.forHttp`, `Wait.forListeningPort`)
8.  Integrate middleware containers: Kafka, Redpanda, RabbitMQ, Redis, Elasticsearch, LocalStack
9.  Customize containers with `withEnv`, `withExposedPorts`, `withCommand`, `withNetwork`, `withStartupTimeout`, `withCopyFileToContainer`
10. Isolate containers with `Network.newNetwork` and container aliases
11. Compose multi-container topologies with `DockerComposeContainer`
12. Auto-configure connection details with `@ServiceConnection` (Spring Boot 3.1+)
13. Enable reusable containers with `withReuse` and `.testcontainers.properties`

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Testcontainers â†’ disposable containers for integration tests | PostgreSQL, Redis, Kafka, and more as throwaway containers |
| Container Lifecycle â†’ automatic start/stop with JUnit 5 | `@Container` annotation manages container lifecycle |
| Dynamic Properties â†’ inject container connection details | `DynamicPropertySource` to override `application.properties` |

---
## Chapter Roadmap

```mermaid
flowchart TD
    A[Testcontainers] --> B[Setup]
    A --> C[Containers]
    A --> D[Integration]
    B --> B1[Testcontainers dependency]
    B --> B2[@Testcontainers annotation]
    C --> C1[PostgreSQL / MySQL]
    C --> C2[Redis / Kafka]
    D --> D1[DynamicPropertySource]
    D --> D2[Reuse containers]
```

---
## Concept Comparison Table

| Concept | Description | Key Difference |
|---------|-------------|----------------|
| H2 Embedded | In-memory DB for test | Fast but not production-like SQL |
| Testcontainers PostgreSQL | Real PostgreSQL container | Production parity, slower startup |
| Redis (embedded) | Lightweight in-memory | Not suitable for Redis module testing |
| Testcontainers Redis | Real Redis container | Full Redis features including modules |

---
## Quick Reference

| Element | Purpose | Example |
|---------|---------|---------|
| `@Container` | JUnit Jupiter extension for container | `@Container PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>()` |
| `@Testcontainers` | Enables container lifecycle management | Class-level annotation |
| `DynamicPropertySource` | Injects container properties | `@DynamicPropertySource static void props(...)` |
| `withReuse(true)` | Reuses containers across test runs | Speeds up local development |

---
## Cross-Application Matrix

| Domain | Application | Use Case |
|--------|-------------|----------|
| Database Migration Testing | Testcontainers + Flyway | Validate SQL migrations against real DB |
| Integration Testing | Testcontainers + Kafka | Test event-driven flows with real message broker |
| Cache Testing | Testcontainers + Redis | Verify cache eviction and TTL behavior |

---
## Chapter Quiz

1. What annotation marks a container field to be managed by Testcontainers? **Answer:** `@Container`
2. How do you pass container connection details to the Spring context? **Answer:** `@DynamicPropertySource` method
3. Which method enables container reuse between test runs? **Answer:** `container.withReuse(true)`

---

## 1. Testcontainers Architecture

![Testcontainers Architecture](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/32-testcontainers.png)

Testcontainers is a Java library that wraps Docker containers inside your test lifecycle. Instead of mocking a database or running a heavy local install, you spin up a disposable container per test suite ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â identical to production, every time.

### 1.1 How It Works


```
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€™ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‚Â
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡               Test Suite                      ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ…â€™ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‚Â    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  @Testcontainers  (JUnit 5 Extension) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  @Container                           ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  PostgreSQLContainer postgres = ...    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬ÂÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‚Â¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‹Å“    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡             ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡ start()                         ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡             ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â¼                                 ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ…â€™ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‚Â    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡       Docker Daemon (local/remote)    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  Pulls image ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ Creates container     ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  Exposes port ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ Waits for readiness  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬ÂÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‹Å“    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡             ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡                                 ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡             ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡ jdbc:postgresql://localhost:54321ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡             ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â¼                                 ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ…â€™ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‚Â    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡      Spring Boot ApplicationContext    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  DataSource ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ HikariCP ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ JPA/HibernateÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  Queries hit the real PostgreSQL      ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡  ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬ÂÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‹Å“    ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬Å¡
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬ÂÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ‹Å“
```

```java
// Minimal Testcontainers dependency (Maven)
// pom.xml
/*
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>testcontainers</artifactId>
    <version>1.20.4</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>postgresql</artifactId>
    <version>1.20.4</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>1.20.4</version>
    <scope>test</scope>
</dependency>
*/
```

### 1.2 Core Abstractions


Testcontainers has a layered architecture:

| Layer | Class | Purpose |
|-------|-------|---------|
| Base | `DockerClientFactory` | Creates Docker Java client, checks Docker availability |
| Container | `GenericContainer` | Any Docker image, manual configuration |
| Specialized | `PostgreSQLContainer`, `KafkaContainer`, etc. | Pre-configured with sensible defaults |
| Orchestration | `DockerComposeContainer` | Manages docker-compose.yml in tests |
| Lifecycle | `@Testcontainers` / `@Container` | JUnit 5 extension hooks |

```java
// Every Testcontainers test starts by checking Docker availability
// This happens once per JVM, cached in DockerClientFactory
boolean dockerAvailable = DockerClientFactory.instance().isDockerAvailable();
System.out.println("Docker available: " + dockerAvailable);
```

> [!TIP]
> Container reuse (`withReuse(true)`) dramatically speeds up local development â†’ containers stay running between test runs.

> [!WARNING]
> Testcontainers requires a Docker runtime. CI environments must have Docker installed and configured.

---

## 2. GenericContainer ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â The Universal Container

`GenericContainer` is the most flexible container type. Use it when there is no specialized container for your image.

### 2.1 Basic Usage


```java
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.containers.wait.strategy.Wait;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.junit.jupiter.api.Test;

@Testcontainers
class GenericContainerExampleTest {

    @Container
    GenericContainer<?> redis = new GenericContainer<>("redis:7-alpine")
        .withExposedPorts(6379);

    @Test
    void testRedisConnection() {
        String host = redis.getHost();
        Integer port = redis.getMappedPort(6379);
        System.out.println("Redis running at: " + host + ":" + port);

        // Use Jedis or Lettuce to connect
        // Jedis jedis = new Jedis(host, port);
        // jedis.set("key", "value");
        // assertEquals("value", jedis.get("key"));
    }
}
```

### 2.2 Container Lifecycle


When `@Testcontainers` is active, the extension manages start/stop:

- `@Container` static fields ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ container starts once for the entire test class (shared)
- `@Container` instance fields ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ container starts before each test (isolated)

```java
@Testcontainers
class LifecycleTest {

    // STATIC ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â shared across all tests in the class
    @Container
    static GenericContainer<?> shared = new GenericContainer<>("nginx:alpine")
        .withExposedPorts(80);

    // INSTANCE ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â created fresh for each test method
    @Container
    GenericContainer<?> isolated = new GenericContainer<>("nginx:alpine")
        .withExposedPorts(80);

    @Test
    void testOne() {
        System.out.println(shared.getMappedPort(80));  // Same port every test
        System.out.println(isolated.getMappedPort(80)); // Different port each test
    }

    @Test
    void testTwo() {
        System.out.println(shared.getMappedPort(80));  // Same as testOne
        System.out.println(isolated.getMappedPort(80)); // Different from testOne
    }
}
```

### 2.3 Manual Start/Stop Without @Testcontainers


You can control the lifecycle manually ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â useful when containers must start before the Spring context.

```java
import org.testcontainers.containers.GenericContainer;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

class ManualLifecycleTest {

    static GenericContainer<?> nginx = new GenericContainer<>("nginx:alpine")
        .withExposedPorts(80);

    @BeforeAll
    static void startContainer() {
        nginx.start();
    }

    @AfterAll
    static void stopContainer() {
        nginx.stop();
    }

    @Test
    void test() {
        System.out.println("Nginx running on port: " + nginx.getMappedPort(80));
    }
}
```

---

## 3. Database Containers

Testcontainers provides specialized subclasses for every major database. They pre-configure the driver class, default credentials, and the JDBC URL pattern.

### 3.1 PostgreSQLContainer


```java
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@Testcontainers
class PostgreSQLTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @Test
    void testConnection() {
        String jdbcUrl = postgres.getJdbcUrl();
        String username = postgres.getUsername();
        String password = postgres.getPassword();

        System.out.println("JDBC: " + jdbcUrl);
        // jdbc:postgresql://localhost:54321/testdb

        try (var conn = java.sql.DriverManager.getConnection(jdbcUrl, username, password);
             var stmt = conn.createStatement();
             var rs = stmt.executeQuery("SELECT version()")) {

            rs.next();
            System.out.println("PostgreSQL version: " + rs.getString(1));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
```

### 3.2 MySQLContainer


```java
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.utility.DockerImageName;

@Testcontainers
class MySQLTest {

    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.4")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @Test
    void testMySQL() {
        System.out.println("MySQL JDBC: " + mysql.getJdbcUrl());
        // jdbc:mysql://localhost:54410/testdb
    }
}
```

**MySQL notes:**
- MySQL 8+ requires explicit image name tag ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â do not use `mysql:latest`
- Use `withCommand("--default-authentication-plugin=mysql_native_password")` for legacy auth
- On Apple Silicon, add `?permuteDNS=false` to the JDBC URL

### 3.3 MSSQLServerContainer


```java
import org.testcontainers.containers.MSSQLServerContainer;

@Testcontainers
class MSSQLTest {

    @Container
    static MSSQLServerContainer<?> mssql = new MSSQLServerContainer<>("mcr.microsoft.com/mssql/server:2022-latest")
        .acceptLicense();

    @Test
    void testMSSQL() {
        System.out.println("MSSQL JDBC: " + mssql.getJdbcUrl());
        System.out.println("Password: " + mssql.getPassword()); // Auto-generated SA password
    }
}
```

**MSSQL notes:**
- You **must** call `acceptLicense()` to agree to the EULA
- Image is ~1.5GB ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â pull once, cache forever
- `getPassword()` returns the auto-generated SA password (32 chars)

### 3.4 OracleContainer


Oracle's image is not publicly available on Docker Hub. You must build it from Oracle's GitHub repository.

```java
import org.testcontainers.containers.OracleContainer;
import org.testcontainers.utility.DockerImageName;

@Testcontainers
class OracleTest {

    // Requires: docker pull gvenzl/oracle-free:23-slim-faststart
    @Container
    static OracleContainer oracle = new OracleContainer(
        DockerImageName.parse("gvenzl/oracle-free:23-slim-faststart")
    );

    @Test
    void testOracle() {
        System.out.println("Oracle JDBC: " + oracle.getJdbcUrl());
        // jdbc:oracle:thin:@localhost:49161:XE
        System.out.println("Username: " + oracle.getUsername());   // system
        System.out.println("Password: " + oracle.getPassword());   // oracle
    }
}
```

### 3.5 Init Scripts


You can execute SQL scripts automatically when the container starts.

```java
@Testcontainers
class InitScriptTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test")
        .withInitScript("init-test-data.sql");
}

// src/test/resources/init-test-data.sql
/*
CREATE TABLE items (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

INSERT INTO items (name, price) VALUES ('Widget', 9.99);
INSERT INTO items (name, price) VALUES ('Gadget', 24.99);
INSERT INTO items (name, price) VALUES ('Doohickey', 4.99);
*/
```

**Multiple scripts:** Use `withCopyFileToContainer` for complex setups:

```java
@Container
static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
    .withCopyFileToContainer(
        MountableFile.forClasspathResource("schema.sql"),
        "/docker-entrypoint-initdb.d/01-schema.sql"
    )
    .withCopyFileToContainer(
        MountableFile.forClasspathResource("seed.sql"),
        "/docker-entrypoint-initdb.d/02-seed.sql"
    );
```

### 3.6 JDBC URL with the tc Driver


Testcontainers provides a JDBC URL scheme that automatically starts a container when the DataSource connects. No `@Container` annotation needed.

```properties
# application-test.properties
# The "tc:" prefix tells Testcontainers to auto-start a container
spring.datasource.url=jdbc:tc:postgresql:16-alpine:///testdb
spring.datasource.driver-class-name=org.testcontainers.jdbc.ContainerDatabaseDriver
spring.datasource.username=test
spring.datasource.password=test
```

```java
// With tc driver, no container declaration needed in test
@SpringBootTest
@ActiveProfiles("test")
class TcDriverTest {

    @Autowired
    private DataSource dataSource;

    @Test
    void testTcDriver() throws Exception {
        try (var conn = dataSource.getConnection()) {
            var meta = conn.getMetaData();
            System.out.println("Connected to: " + meta.getDatabaseProductName());
            // Connected to: PostgreSQL
        }
    }
}
```

**TC URL format:**

```
jdbc:tc:{image}:{tag}://{host}/{database}?{params}
jdbc:tc:postgresql:16-alpine:///testdb
jdbc:tc:mysql:8.4:///testdb?TC_REUSABLE=true
jdbc:tc:mssql-server:2022-latest:///testdb
```

### 3.7 @DynamicPropertySource


The preferred pattern for Spring Boot integration: inject container connection details into the `Environment` before the context loads.

```java
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

@SpringBootTest
@Testcontainers
class DynamicPropertySourceTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
        registry.add("spring.flyway.enabled", () -> "true");
    }

    @Autowired
    private DataSource dataSource;

    @Test
    void testDataSource() throws Exception {
        try (var conn = dataSource.getConnection()) {
            assertFalse(conn.isClosed());
            assertTrue(conn.isValid(5));
        }
    }
}
```

**Important:** The method must be `static` and accept a `DynamicPropertyRegistry`. It runs before the `ApplicationContext` is created.

---

## 4. Wait Strategies

Containers take time to start. Wait strategies define when a container is "ready."

### 4.1 Wait.forListeningPort


The simplest strategy ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â waits for the container to open a TCP port.

```java
@Container
static GenericContainer<?> nginx = new GenericContainer<>("nginx:alpine")
    .withExposedPorts(80)
    .waitingFor(Wait.forListeningPort());
```

### 4.2 Wait.forLogMessage


Waits for a specific log message. This is the most reliable strategy for databases.

```java
@Container
static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
    .waitingFor(Wait.forLogMessage(".*database system is ready to accept connections.*\\n", 2));

@Container
static GenericContainer<?> kafka = new GenericContainer<>("confluentinc/cp-kafka:7.6.0")
    .withExposedPorts(9092)
    .waitingFor(Wait.forLogMessage(".*started \\(kafka.server.KafkaServer\\).*\\n", 1));
```

### 4.3 Wait.forHttp


Waits for an HTTP endpoint to return a successful status code.

```java
@Container
static GenericContainer<?> app = new GenericContainer<>("my-app:latest")
    .withExposedPorts(8080)
    .waitingFor(Wait.forHttp("/actuator/health")
        .forStatusCode(200)
        .forStatusCodePredicate(code -> code >= 200 && code < 400));

@Container
static GenericContainer<?> elasticsearch = new GenericContainer<>("elasticsearch:8.14.0")
    .withExposedPorts(9200)
    .waitingFor(Wait.forHttp("/_cluster/health")
        .forStatusCode(200));
```

### 4.4 Custom Wait Strategies


```java
import org.testcontainers.containers.wait.strategy.AbstractWaitStrategy;
import java.time.Duration;

@Container
static GenericContainer<?> custom = new GenericContainer<>("my-service:1.0")
    .withExposedPorts(8080)
    .waitingFor(new AbstractWaitStrategy() {
        @Override
        protected void waitUntilReady() {
            // Custom logic: poll a file, check a process, etc.
            var executor = container.getDockerClient()
                .execCreateCmd(container.getContainerId())
                .withCmd("test", "-f", "/tmp/ready");
            // ...
        }
    });
```

### 4.5 Startup Timeout


```java
@Container
static GenericContainer<?> slow = new GenericContainer<>("slow-image:latest")
    .withExposedPorts(8080)
    .waitingFor(Wait.forLogMessage(".*ready.*\\n", 1))
    .withStartupTimeout(Duration.ofMinutes(5));  // Default is 60 seconds
```

---

## 5. Middleware Containers

Testcontainers provides specialized containers for common middleware services.

### 5.1 KafkaContainer


```java
import org.testcontainers.containers.KafkaContainer;
import org.testcontainers.utility.DockerImageName;

@Testcontainers
class KafkaTest {

    @Container
    static KafkaContainer kafka = new KafkaContainer(
        DockerImageName.parse("confluentinc/cp-kafka:7.6.0")
    );

    @Test
    void testKafkaProduceConsume() {
        String bootstrapServers = kafka.getBootstrapServers();
        System.out.println("Kafka bootstrap: " + bootstrapServers);
        // localhost:49011 (KafkaContainer exposes on port 9092 mapped to random)

        // Use Spring Kafka or Kafka client to test
        // Properties props = new Properties();
        // props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        // ...
    }
}
```

```java
// Kafka with KRaft (no Zookeeper)
@Container
static KafkaContainer kafka = new KafkaContainer(
    DockerImageName.parse("confluentinc/cp-kafka:7.6.0")
)
    .withEnv("KAFKA_NODE_ID", "1")
    .withEnv("KAFKA_PROCESS_ROLES", "broker,controller");
```

### 5.2 RedpandaContainer


Redpanda is Kafka-compatible without Zookeeper ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â lighter and faster.

```java
import org.testcontainers.redpanda.RedpandaContainer;

@Testcontainers
class RedpandaTest {

    @Container
    static RedpandaContainer redpanda = new RedpandaContainer(
        "docker.redpanda.com/redpandadata/redpanda:v24.1.1"
    );

    @Test
    void testRedpanda() {
        String bootstrapServers = redpanda.getBootstrapServers();
        System.out.println("Redpanda bootstrap: " + bootstrapServers);

        // Identical Kafka API ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â just swap the bootstrap URL
    }
}

// Spring Boot Kafka test with Redpanda and @DynamicPropertySource
@SpringBootTest
@Testcontainers
class KafkaSpringTest {

    @Container
    static RedpandaContainer redpanda = new RedpandaContainer(
        "docker.redpanda.com/redpandadata/redpanda:v24.1.1"
    );

    @DynamicPropertySource
    static void kafkaProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.kafka.bootstrap-servers", redpanda::getBootstrapServers);
    }

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @Test
    void testSendAndReceive() throws Exception {
        // Arrange
        String topic = "test-topic";
        String payload = "hello-testcontainers";

        // Act
        kafkaTemplate.send(topic, payload).get(5, TimeUnit.SECONDS);

        // Assert ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â use a test consumer or EmbeddedKafkaBroker
    }
}
```

### 5.3 RabbitMQContainer


```java
import org.testcontainers.containers.RabbitMQContainer;

@Testcontainers
class RabbitMQTest {

    @Container
    static RabbitMQContainer rabbitmq = new RabbitMQContainer("rabbitmq:3.13-management");

    @Test
    void testRabbitMQ() {
        String amqpUrl = rabbitmq.getAmqpUrl();
        String httpUrl = rabbitmq.getHttpUrl();
        System.out.println("AMQP: " + amqpUrl);
        System.out.println("Management: " + httpUrl);

        // amqp://guest:guest@localhost:32789/
        // http://guest:guest@localhost:32788/api/
    }

    @Test
    void testWithQueueDeclare() throws Exception {
        var factory = new com.rabbitmq.client.ConnectionFactory();
        factory.setUri(rabbitmq.getAmqpUrl());

        try (var connection = factory.newConnection();
             var channel = connection.createChannel()) {

            channel.queueDeclare("test-queue", false, false, false, null);
            channel.basicPublish("", "test-queue", null, "Hello".getBytes());

            var delivery = channel.basicGet("test-queue", true);
            assertNotNull(delivery);
            assertEquals("Hello", new String(delivery.getBody()));
        }
    }
}
```

### 5.4 RedisContainer


```java
import org.testcontainers.containers.GenericContainer;

@Testcontainers
class RedisTest {

    @Container
    static GenericContainer<?> redis = new GenericContainer<>("redis:7-alpine")
        .withExposedPorts(6379);

    @Test
    void testRedis() {
        String host = redis.getHost();
        Integer port = redis.getMappedPort(6379);

        // Use Lettuce or Jedis
        // RedisClient client = RedisClient.create("redis://" + host + ":" + port);
        // StatefulRedisConnection<String, String> conn = client.connect();
    }
}

// Spring Data Redis test
@SpringBootTest
@Testcontainers
class RedisSpringTest {

    @Container
    static GenericContainer<?> redis = new GenericContainer<>("redis:7-alpine")
        .withExposedPorts(6379);

    @DynamicPropertySource
    static void redisProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.data.redis.host", redis::getHost);
        registry.add("spring.data.redis.port", () -> redis.getMappedPort(6379).toString());
    }

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Test
    void testRedisOperations() {
        redisTemplate.opsForValue().set("test:key", "testcontainers");
        assertEquals("testcontainers", redisTemplate.opsForValue().get("test:key"));
    }
}
```

### 5.5 ElasticsearchContainer


```java
import org.testcontainers.containers.wait.strategy.Wait;
import org.testcontainers.elasticsearch.ElasticsearchContainer;

@Testcontainers
class ElasticsearchTest {

    @Container
    static ElasticsearchContainer elasticsearch = new ElasticsearchContainer(
        "docker.elastic.co/elasticsearch/elasticsearch:8.14.0"
    )
        .withPassword("elastic")
        .withEnv("xpack.security.enabled", "false")
        .withEnv("discovery.type", "single-node");

    @Test
    void testElasticsearch() {
        String httpUrl = elasticsearch.getHttpHostAddress();
        System.out.println("Elasticsearch: " + httpUrl);
        // localhost:49210

        // Use Elasticsearch client
        // var client = new RestClientBuilder(HttpHost.create(httpUrl)).build();
    }
}

// Spring Data Elasticsearch
@SpringBootTest
@Testcontainers
class ElasticsearchSpringTest {

    @Container
    static ElasticsearchContainer elastic = new ElasticsearchContainer(
        "docker.elastic.co/elasticsearch/elasticsearch:8.14.0"
    )
        .withEnv("xpack.security.enabled", "false")
        .withEnv("discovery.type", "single-node");

    @DynamicPropertySource
    static void esProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.elasticsearch.uris", () -> {
            var host = elastic.getHttpHostAddress();
            return "http://" + host;
        });
    }

    @Autowired
    private ElasticsearchOperations operations;

    @Test
    void testIndex() {
        var doc = Map.of("title", "Testcontainers Guide", "content", "Integration testing with Docker");
        IndexQuery query = new IndexQueryBuilder()
            .withId("1")
            .withObject(doc)
            .build();
        operations.index(query, IndexCoordinates.of("articles"));
    }
}
```

### 5.6 LocalStackContainer (AWS)


LocalStack emulates AWS services locally ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â S3, SQS, SNS, DynamoDB, and more.

```java
import org.testcontainers.containers.localstack.LocalStackContainer;
import org.testcontainers.utility.DockerImageName;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import java.net.URI;

@Testcontainers
class LocalStackTest {

    @Container
    static LocalStackContainer localstack = new LocalStackContainer(
        DockerImageName.parse("localstack/localstack:3.4")
    )
        .withServices(
            LocalStackContainer.Service.S3,
            LocalStackContainer.Service.SQS,
            LocalStackContainer.Service.DYNAMODB
        );

    @Test
    void testS3() {
        var endpoint = localstack.getEndpointOverride(LocalStackContainer.Service.S3);
        var credentials = StaticCredentialsProvider.create(
            AwsBasicCredentials.create(localstack.getAccessKey(), localstack.getSecretKey())
        );

        try (var s3 = S3Client.builder()
            .endpointOverride(endpoint)
            .credentialsProvider(credentials)
            .region(Region.US_EAST_1)
            .build()) {

            s3.createBucket(b -> b.bucket("test-bucket"));
            s3.putObject(b -> b.bucket("test-bucket").key("test.txt"),
                software.amazon.awssdk.core.sync.RequestBody.fromString("Hello LocalStack!"));

            var response = s3.getObjectAsBytes(b -> b.bucket("test-bucket").key("test.txt"));
            assertEquals("Hello LocalStack!", response.asUtf8String());
        }
    }

    @Test
    void testSQSCreateQueue() {
        var endpoint = localstack.getEndpointOverride(LocalStackContainer.Service.SQS);
        var credentials = StaticCredentialsProvider.create(
            AwsBasicCredentials.create(localstack.getAccessKey(), localstack.getSecretKey())
        );

        try (var sqs = software.amazon.awssdk.services.sqs.SqsClient.builder()
            .endpointOverride(endpoint)
            .credentialsProvider(credentials)
            .region(Region.US_EAST_1)
            .build()) {

            var queueUrl = sqs.createQueue(b -> b.queueName("test-queue")).queueUrl();
            assertNotNull(queueUrl);
        }
    }
}
```

**LocalStack with @DynamicPropertySource for Spring Cloud AWS:**

```java
@SpringBootTest
@Testcontainers
class AwsSpringTest {

    @Container
    static LocalStackContainer localstack = new LocalStackContainer(
        DockerImageName.parse("localstack/localstack:3.4")
    )
        .withServices(LocalStackContainer.Service.S3, LocalStackContainer.Service.SQS);

    @DynamicPropertySource
    static void awsProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.cloud.aws.credentials.access-key", localstack::getAccessKey);
        registry.add("spring.cloud.aws.credentials.secret-key", localstack::getSecretKey);
        registry.add("spring.cloud.aws.region.static", () -> "us-east-1");
        registry.add("spring.cloud.aws.s3.endpoint",
            () -> localstack.getEndpointOverride(LocalStackContainer.Service.S3).toString());
        registry.add("spring.cloud.aws.sqs.endpoint",
            () -> localstack.getEndpointOverride(LocalStackContainer.Service.SQS).toString());
    }

    @Autowired
    private S3Client s3Client;

    @Test
    void testS3WithSpring() {
        s3Client.createBucket(b -> b.bucket("spring-bucket"));
        var buckets = s3Client.listBuckets();
        assertTrue(buckets.hasBuckets());
    }
}
```

---

## 6. Container Customization

### 6.1 Environment Variables


```java
@Container
static GenericContainer<?> app = new GenericContainer<>("my-app:latest")
    .withEnv("SPRING_PROFILES_ACTIVE", "test")
    .withEnv("JAVA_OPTS", "-Xmx256m -Xms256m")
    .withEnv("DB_URL", "jdbc:postgresql://db:5432/mydb");

// withEnv is varargs:
.withEnv("KEY1", "VALUE1", "KEY2", "VALUE2")
```

### 6.2 Exposed Ports


```java
@Container
static GenericContainer<?> app = new GenericContainer<>("my-app:latest")
    .withExposedPorts(8080, 8443, 9090);  // Multiple ports

// Dynamic vs fixed port mapping:
// Use withExposedPorts for dynamic allocation
// Use .setPortBindings for fixed host ports:
// .setPortBindings(Arrays.asList("8080:8080", "8443:8443"))
```

### 6.3 Command Override


```java
@Container
static GenericContainer<?> mysql = new GenericContainer<>("mysql:8.4")
    .withCommand("--default-authentication-plugin=mysql_native_password",
                 "--character-set-server=utf8mb4",
                 "--collation-server=utf8mb4_unicode_ci");

@Container
static GenericContainer<?> postgres = new GenericContainer<>("postgres:16-alpine")
    .withCommand("postgres", "-c", "max_connections=200", "-c", "shared_buffers=256MB");
```

### 6.4 Network Configuration


```java
import org.testcontainers.containers.Network;

Network network = Network.newNetwork();

@Container
static GenericContainer<?> app = new GenericContainer<>("my-app:latest")
    .withNetwork(network)
    .withNetworkAliases("app")
    .withExposedPorts(8080);

@Container
static PostgreSQLContainer<?> db = new PostgreSQLContainer<>("postgres:16-alpine")
    .withNetwork(network)
    .withNetworkAliases("db")
    .withDatabaseName("mydb");
```

### 6.5 Copy Files Into Container


```java
import org.testcontainers.utility.MountableFile;

@Container
static GenericContainer<?> app = new GenericContainer<>("my-app:latest")
    .withCopyFileToContainer(
        MountableFile.forClasspathResource("application-test.yml"),
        "/app/config/application.yml"
    )
    .withCopyFileToContainer(
        MountableFile.forHostPath("../common/truststore.jks"),
        "/etc/ssl/certs/truststore.jks"
    );
```

### 6.6 Working Directory and User


```java
@Container
static GenericContainer<?> app = new GenericContainer<>("my-app:latest")
    .withWorkingDirectory("/app")
    .withCreateContainerCmdModifier(cmd -> cmd.withUser("1000:1000"));
```

---

## 7. Network Isolation

Networks let containers communicate by alias, avoiding `localhost` confusion.

### 7.1 Creating a Network


```java
Network network = Network.newNetwork();

// Or with specific driver:
Network bridge = Network.builder()
    .driver("bridge")
    .build();

// Or with subnet:
Network custom = Network.builder()
    .driver("bridge")
    .createNetworkCmdModifier(cmd -> cmd
        .withName("test-net")
        .withIpam(new Ipam().withConfigurator(
            List.of(new IpamConfig().withSubnet("172.20.0.0/16"))
        ))
    )
    .build();
```

### 7.2 Container Aliases


```java
@Testcontainers
class NetworkIsolationTest {

    static Network network = Network.newNetwork();

    @Container
    static PostgreSQLContainer<?> db = new PostgreSQLContainer<>("postgres:16-alpine")
        .withNetwork(network)
        .withNetworkAliases("database")  // Other containers reach it via hostname "database"
        .withDatabaseName("orders")
        .withUsername("test")
        .withPassword("test");

    @Container
    static GenericContainer<?> redis = new GenericContainer<>("redis:7-alpine")
        .withNetwork(network)
        .withNetworkAliases("cache")
        .withExposedPorts(6379);

    @Test
    void testNetworkCommunication() {
        // From within the application container:
        // database:5432 (PostgreSQL via alias)
        // cache:6379    (Redis via alias)
        System.out.println("DB host: " + db.getHost() + ":" + db.getMappedPort(5432));
        System.out.println("Redis host: " + redis.getHost() + ":" + redis.getMappedPort(6379));
    }
}
```

### 7.3 Composing Containers Together


```java
@Testcontainers
class ComposedServiceTest {

    static Network network = Network.newNetwork();

    @Container
    static PostgreSQLContainer<?> db = new PostgreSQLContainer<>("postgres:16-alpine")
        .withNetwork(network)
        .withNetworkAliases("db");

    @Container
    static GenericContainer<?> app = new GenericContainer<>("my-app:latest")
        .withNetwork(network)
        .withNetworkAliases("app")
        .withExposedPorts(8080)
        .withEnv("SPRING_DATASOURCE_URL",
                 "jdbc:postgresql://db:5432/testdb")   // References "db" alias
        .withEnv("SPRING_DATASOURCE_USERNAME", "test")
        .withEnv("SPRING_DATASOURCE_PASSWORD", "test")
        .dependsOn(db);  // Start db first

    @Test
    void testEndToEnd() {
        Integer mappedPort = app.getMappedPort(8080);
        var restTemplate = new org.springframework.web.client.RestTemplate();
        String response = restTemplate.getForObject(
            "http://localhost:" + mappedPort + "/api/health",
            String.class
        );
        assertNotNull(response);
    }
}
```

---

## 8. Docker-Compose Integration

For multi-service topologies, `DockerComposeContainer` manages a `docker-compose.yml` file.

### 8.1 Basic Compose Container


```yaml
# src/test/resources/docker-compose-test.yml
version: '3.8'
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: testdb
      POSTGRES_USER: test
      POSTGRES_PASSWORD: test
    ports:
      - "5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379"

  kafka:
    image: confluentinc/cp-kafka:7.6.0
    ports:
      - "9092"
    environment:
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
```

```java
import org.testcontainers.containers.DockerComposeContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import java.io.File;

@Testcontainers
class DockerComposeTest {

    @Container
    static DockerComposeContainer<?> environment =
        new DockerComposeContainer<>(new File("src/test/resources/docker-compose-test.yml"))
            .withExposedService("postgres", 5432)
            .withExposedService("redis", 6379)
            .withExposedService("kafka", 9092);

    @Test
    void testServicesAreRunning() {
        String postgresHost = environment.getServiceHost("postgres", 5432);
        Integer postgresPort = environment.getServicePort("postgres", 5432);
        System.out.println("PostgreSQL: " + postgresHost + ":" + postgresPort);

        String redisHost = environment.getServiceHost("redis", 6379);
        Integer redisPort = environment.getServicePort("redis", 6379);
        System.out.println("Redis: " + redisHost + ":" + redisPort);

        String kafkaHost = environment.getServiceHost("kafka", 9092);
        Integer kafkaPort = environment.getServicePort("kafka", 9092);
        System.out.println("Kafka: " + kafkaHost + ":" + kafkaPort);
    }
}
```

### 8.2 Service Instances


When docker-compose uses `replicas` or multiple service instances, access them by index.

```yaml
# docker-compose-multi.yml
version: '3.8'
services:
  app:
    image: my-app:latest
    ports:
      - "8080"
    deploy:
      replicas: 3
```

```java
@Container
static DockerComposeContainer<?> environment =
    new DockerComposeContainer<>(new File("src/test/resources/docker-compose-multi.yml"))
        .withExposedService("app", 1, 8080)   // First instance
        .withExposedService("app", 2, 8080);  // Second instance
```

### 8.3 Custom Docker Compose File Names


```java
@Container
static DockerComposeContainer<?> environment =
    new DockerComposeContainer<>(new File("docker-compose.integration.yml"))
        .withLocalCompose(true);
```

### 8.4 Scaling Services


```java
@Container
static DockerComposeContainer<?> environment =
    new DockerComposeContainer<>(new File("docker-compose.yml"))
        .withTailChildContainers(true)  // Show logs from all containers
        .withEnv("COMPOSE_PROJECT_NAME", "test-" + UUID.randomUUID());  // Unique project
```

---

## 9. Testcontainers for Spring Boot

### 9.1 @ServiceConnection (Spring Boot 3.1+)


Spring Boot 3.1 introduced `@ServiceConnection` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â no more `@DynamicPropertySource` boilerplate for standard containers.

```java
@SpringBootTest
@Testcontainers
class ServiceConnectionTest {

    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");

    // @ServiceConnection on PostgreSQLContainer auto-configures:
    //   spring.datasource.url
    //   spring.datasource.username
    //   spring.datasource.password
    //   spring.datasource.driver-class-name
    // Just inject and use:

    @Autowired
    private DataSource dataSource;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Test
    void testQuery() {
        Integer result = jdbcTemplate.queryForObject("SELECT 1", Integer.class);
        assertEquals(1, result);
    }
}
```

### 9.2 @ServiceConnection with Connection Factories


Works with any service that has a connection factory:

```java
@SpringBootTest
@Testcontainers
class KafkaServiceConnectionTest {

    @Container
    @ServiceConnection
    static KafkaContainer kafka = new KafkaContainer(
        DockerImageName.parse("confluentinc/cp-kafka:7.6.0")
    );

    // @ServiceConnection auto-configures spring.kafka.bootstrap-servers

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @Test
    void testKafka() throws Exception {
        kafkaTemplate.send("test-topic", "hello-spring").get(5, TimeUnit.SECONDS);
    }
}
```

```java
@SpringBootTest
@Testcontainers
class RedisServiceConnectionTest {

    @Container
    @ServiceConnection
    static GenericContainer<?> redis = new GenericContainer<>("redis:7-alpine")
        .withExposedPorts(6379);

    // @ServiceConnection auto-configures spring.data.redis.host + spring.data.redis.port

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Test
    void testRedis() {
        redisTemplate.opsForValue().set("greeting", "Hello from Testcontainers!");
        assertEquals("Hello from Testcontainers!", redisTemplate.opsForValue().get("greeting"));
    }
}
```

**How @ServiceConnection works under the hood:**

```java
// Simplified ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â each container type registers a ConnectionFactory bean
// PostgreSQLContainer ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ PostgresContainerConnectionDetails
// KafkaContainer ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ KafkaContainerConnectionDetails
// GenericContainer ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ GenericContainerConnectionDetails (via @DynamicPropertySource or manual)

// PostgreSQLContainer registers:
@Bean
PostgresContainerConnectionDetails postgresContainerConnectionDetails(
        PostgreSQLContainer<?> container) {
    return () -> container;
}

// Which produces:
//   ContainerDataSourceConnectionDetails
//   (auto-configures the DataSource)
```

### 9.3 JDBC with tc Driver (Revisited for Spring Boot)


The tc JDBC driver is the simplest approach for database-only tests:

```java
@SpringBootTest(properties = {
    "spring.datasource.url=jdbc:tc:postgresql:16-alpine:///testdb",
    "spring.datasource.driver-class-name=org.testcontainers.jdbc.ContainerDatabaseDriver",
    "spring.datasource.username=test",
    "spring.datasource.password=test",
    "spring.jpa.generate-ddl=true"
})
class TcDriverSpringTest {

    @Autowired
    private JpaRepository<User, Long> userRepository;

    @Test
    void testEntityPersistence() {
        User user = new User(null, "alice", "alice@example.com");
        User saved = userRepository.save(user);
        assertNotNull(saved.getId());

        Optional<User> found = userRepository.findById(saved.getId());
        assertTrue(found.isPresent());
        assertEquals("alice", found.get().getUsername());
    }
}
```

**TC URL parameters:**

| Parameter | Description |
|-----------|-------------|
| `TC_REUSABLE=true` | Enable container reuse |
| `TC_IMAGE_TAG=16-alpine` | Override image tag |
| `TC_INITSCRIPT=init.sql` | Run init script |
| `TC_DAEMON=true` | Don't wait for ready |
| `TC_MY_CNF=my.cnf` | MySQL config file |

---

## 10. Reusable Containers

### 10.1 withReuse


By default, Testcontainers destroys every container after the test JVM exits. `withReuse` keeps the container running across test runs ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â dramatically faster local development.

```java
@Container
static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
    .withReuse(true);  // Container survives JVM restarts
```

**Important:** Reuse requires configuration. Without it, `withReuse` is silently ignored.

### 10.2 .testcontainers.properties


Create this file at `~/.testcontainers.properties` or `~/.testcontainers/.testcontainers.properties`:

```properties
# Global reuse enable ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â required for withReuse to work
testcontainers.reuse.enable=true

# Docker host override (optional)
docker.host=unix:///var/run/docker.sock

# Ryuk configuration (optional)
ryuk.container.privileged=true

# Image pull timeout (optional, default 120s)
tc.image.pull.timeout=180000
```

For project-specific settings, put it in the project root:

```properties
# project-root/.testcontainers.properties
testcontainers.reuse.enable=true
```

### 10.3 Reusable Containers in CI (Ryuk)


Ryuk is Testcontainers' resource reaper ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â it kills containers after the JVM exits. In CI, Ryuk is essential to prevent orphan containers.

```java
// Ryuk runs automatically. To disable (e.g., when debugging in CI):
@Testcontainers(disabledWithoutDocker = true)
class CiTest {
    // ...
}
```

```properties
# CI .testcontainers.properties
testcontainers.reuse.enable=false   # Don't reuse ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â fresh each CI run

# If Ryuk causes issues (uncommon):
# testcontainers.ryuk.disabled=true
```

### 10.4 Singleton Container Pattern


For maximum reuse, manage a singleton container manually:

```java
// AbstractIntegrationTest.java
public abstract class AbstractIntegrationTest {

    private static final PostgreSQLContainer<?> POSTGRES;

    static {
        POSTGRES = new PostgreSQLContainer<>("postgres:16-alpine")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");
        POSTGRES.start();

        // Set system properties so Spring picks them up
        System.setProperty("spring.datasource.url", POSTGRES.getJdbcUrl());
        System.setProperty("spring.datasource.username", POSTGRES.getUsername());
        System.setProperty("spring.datasource.password", POSTGRES.getPassword());
    }
}

// Concrete test
@SpringBootTest
class UserRepositoryTest extends AbstractIntegrationTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void testSave() {
        User user = userRepository.save(new User(null, "bob", "bob@test.com"));
        assertNotNull(user.getId());
    }
}
```

### 10.5 Hybrid Mode: Reuse Locally, Fresh in CI


```java
@Container
static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");

static {
    // Enable reuse only when running locally (not in CI)
    boolean isCi = Boolean.parseBoolean(System.getenv("CI"));
    if (!isCi) {
        postgres.withReuse(true);
    }
}
```

> [!NOTE]
> `DynamicPropertySource` methods must be `static` and accept a `DynamicPropertyRegistry` parameter.

---

## 11. Complete Example ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Full Spring Boot Integration Test

A complete, real-world example tying everything together.

### 11.1 Application Code


```java
// src/main/java/com/example/demo/order/Order.java
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String customerEmail;

    @Column(nullable = false)
    private BigDecimal total;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    public Order() {}

    public Order(String customerEmail, BigDecimal total) {
        this.customerEmail = customerEmail;
        this.total = total;
        this.status = OrderStatus.PENDING;
        this.createdAt = LocalDateTime.now();
    }

    // Getters and setters omitted for brevity
}

enum OrderStatus {
    PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED
}
```

```java
// src/main/java/com/example/demo/order/OrderRepository.java
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomerEmail(String email);
    List<Order> findByStatus(OrderStatus status);
    long countByStatus(OrderStatus status);
}
```

```java
// src/main/java/com/example/demo/order/OrderService.java
@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(String customerEmail, BigDecimal total) {
        if (total.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Total must be positive");
        }
        Order order = new Order(customerEmail, total);
        return orderRepository.save(order);
    }

    public Order confirmOrder(Long id) {
        Order order = orderRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Order not found: " + id));
        if (order.getStatus() != OrderStatus.PENDING) {
            throw new IllegalStateException("Only PENDING orders can be confirmed");
        }
        order.setStatus(OrderStatus.CONFIRMED);
        return orderRepository.save(order);
    }

    @Transactional(readOnly = true)
    public long countPendingOrders() {
        return orderRepository.countByStatus(OrderStatus.PENDING);
    }
}
```

### 11.2 Integration Test


```java
// src/test/java/com/example/demo/order/OrderServiceIntegrationTest.java
package com.example.demo.order;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.context.junit.jupiter.EnabledIf;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.math.BigDecimal;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Testcontainers
class OrderServiceIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
        .withDatabaseName("orderdb")
        .withUsername("test")
        .withPassword("test")
        .withReuse(true);

    @DynamicPropertySource
    static void setupDatabase(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
        registry.add("spring.jpa.hibernate.ddl-auto", () -> "create-drop");
    }

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderRepository orderRepository;

    @BeforeEach
    void cleanUp() {
        orderRepository.deleteAll();
    }

    @Test
    void createOrder_ShouldPersistAndReturnOrder() {
        Order order = orderService.createOrder("alice@example.com", new BigDecimal("49.99"));

        assertNotNull(order.getId());
        assertEquals("alice@example.com", order.getCustomerEmail());
        assertEquals(new BigDecimal("49.99"), order.getTotal());
        assertEquals(OrderStatus.PENDING, order.getStatus());
        assertNotNull(order.getCreatedAt());
    }

    @Test
    void createOrder_WithNegativeTotal_ShouldThrow() {
        assertThrows(IllegalArgumentException.class, () ->
            orderService.createOrder("bob@example.com", new BigDecimal("-10.00")));
    }

    @Test
    void confirmOrder_ShouldUpdateStatus() {
        Order order = orderService.createOrder("carol@example.com", new BigDecimal("99.99"));

        Order confirmed = orderService.confirmOrder(order.getId());

        assertEquals(OrderStatus.CONFIRMED, confirmed.getStatus());
    }

    @Test
    void confirmOrder_NonPending_ShouldThrow() {
        Order order = orderService.createOrder("dave@example.com", new BigDecimal("10.00"));
        orderService.confirmOrder(order.getId());

        assertThrows(IllegalStateException.class, () ->
            orderService.confirmOrder(order.getId()));
    }

    @Test
    void confirmOrder_NotFound_ShouldThrow() {
        assertThrows(RuntimeException.class, () ->
            orderService.confirmOrder(99999L));
    }

    @Test
    void countPendingOrders_ShouldReturnCorrectCount() {
        orderService.createOrder("a@x.com", new BigDecimal("10.00"));
        orderService.createOrder("b@x.com", new BigDecimal("20.00"));
        orderService.createOrder("c@x.com", new BigDecimal("30.00"));

        assertEquals(3, orderService.countPendingOrders());
    }

    @Test
    void findByCustomerEmail_ShouldReturnMatchingOrders() {
        orderService.createOrder("alice@example.com", new BigDecimal("10.00"));
        orderService.createOrder("alice@example.com", new BigDecimal("20.00"));
        orderService.createOrder("bob@example.com", new BigDecimal("30.00"));

        List<Order> aliceOrders = orderService.findByCustomerEmail("alice@example.com");
        assertEquals(2, aliceOrders.size());
    }
}
```

### 11.3 Kafka + Database Combined Test


```java
@SpringBootTest
@Testcontainers
class OrderEventIntegrationTest {

    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");

    @Container
    @ServiceConnection
    static RedpandaContainer redpanda = new RedpandaContainer(
        "docker.redpanda.com/redpandadata/redpanda:v24.1.1"
    );

    @Autowired
    private OrderService orderService;

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    @Test
    void orderCreated_ShouldPublishKafkaEvent() throws Exception {
        Order order = orderService.createOrder("alice@x.com", new BigDecimal("15.00"));

        // Verify Kafka message was sent
        // (In real tests, use a test consumer or EmbeddedKafka)
        assertNotNull(order.getId());
    }
}
```

---

## Summary

- **Testcontainers architecture** wraps Docker containers inside JUnit tests. The `DockerClientFactory` manages the Docker connection; specialized containers pre-configure services.
- **GenericContainer** is the universal container type. Use it for any Docker image without a specialized container.
- **`@Testcontainers`** / **`@Container`** is the JUnit 5 extension. Static fields share one container per class; instance fields create one per test.
- **Lifecycle** defaults to start-on-annotation, stop-after-class. Use manual `start()`/`stop()` for programmatic control and singleton patterns.
- **Database containers** (`PostgreSQLContainer`, `MySQLContainer`, `MSSQLServerContainer`, `OracleContainer`) pre-set credentials, driver, and JDBC URL. Use `withInitScript` for schema setup.
- **JDBC tc driver** (`jdbc:tc:postgresql://`) auto-starts containers from the JDBC URL ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â no `@Container` needed.
- **`@DynamicPropertySource`** injects container connection details into the Spring `Environment` before context creation.
- **Wait strategies** (`Wait.forListeningPort`, `Wait.forLogMessage`, `Wait.forHttp`) ensure containers are ready before tests execute.
- **Middleware containers** (`KafkaContainer`, `RedpandaContainer`, `RabbitMQContainer`, `GenericContainer` for Redis, `ElasticsearchContainer`, `LocalStackContainer`) handle complex service configuration automatically.
- **Container customization** (`withEnv`, `withExposedPorts`, `withCommand`, `withNetwork`, `withStartupTimeout`, `withCopyFileToContainer`) covers every Docker configuration need.
- **Network isolation** with `Network.newNetwork` and `withNetworkAliases` creates isolated communication between containers.
- **`DockerComposeContainer`** manages docker-compose.yml files directly in tests, supporting service instances and multi-container setups.
- **`@ServiceConnection`** (Spring Boot 3.1+) auto-configures connection details for standard containers, replacing `@DynamicPropertySource` boilerplate.
- **Reusable containers** (`withReuse`, `.testcontainers.properties`, Ryuk) dramatically speed up local development by keeping containers alive across test runs.

---

## Exercises

1. **GenericContainer:** Create a test that starts a `generic-container` from the `nginx:alpine` image. Use `@Testcontainers` and `@Container`. Verify the container is running by checking `getMappedPort(80)`. Implement wait strategies: first using `Wait.forListeningPort()`, then `Wait.forHttp("/")`. Compare startup times.

2. **Database Container:** Write a test using `PostgreSQLContainer` with `@DynamicPropertySource`. Create a `users` table, insert a row, and query it back. Use `withInitScript` for the table creation. Then convert the test to use `@ServiceConnection` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â remove the `@DynamicPropertySource` method.

3. **TC JDBC Driver:** Configure `spring.datasource.url=jdbc:tc:postgresql:16-alpine:///testdb` in test properties. Write a `@SpringBootTest` that injects `JdbcTemplate` and runs `SELECT 1`. Do NOT declare any `@Container` fields. Explain how the tc driver starts the container automatically.

4. **Multiple Database Containers:** Write a test that runs both `PostgreSQLContainer` and `MySQLContainer` simultaneously. Create tables in both, insert data, and verify you can query both databases in the same test method. Use `@DynamicPropertySource` to configure two separate `DataSource` beans.

5. **Wait Strategies:** Given a custom Docker image that logs "Service ready on port 8080" when healthy, configure a `GenericContainer` with `Wait.forLogMessage`. Then configure an HTTP wait strategy against `/health`. Measure the difference in startup time between the two strategies.

6. **Kafka Test:** Write a test using `KafkaContainer` that produces a message and consumes it with a Kafka `Consumer`. Then convert the test to use `RedpandaContainer` and verify the same behavior works. Use `@DynamicPropertySource` to inject `spring.kafka.bootstrap-servers` into a `@SpringBootTest`.

7. **Redis Test:** Write a `@SpringBootTest` with a `GenericContainer` running `redis:7-alpine`. Use `@ServiceConnection` to auto-configure Redis connection. Test `set`, `get`, `expire`, and `delete` operations using `RedisTemplate<String, String>`.

8. **LocalStack S3 Test:** Write a test using `LocalStackContainer` with S3 service enabled. Create a bucket, upload an object, download it, and assert the content matches. Use `S3Client` from the AWS SDK. Then write a second test that does the same with SQS.

9. **Container Customization:** Start a `mysql:8.4` container with custom MySQL configuration: set `max_connections=50`, enable `general_log`, and set `character-set-server=utf8mb4`. Use `withCommand` and `withEnv`. Verify the settings took effect by querying MySQL system variables.

10. **Network Isolation:** Create a `Network` and two containers on it: `postgres:16-alpine` with alias `db`, and a custom application image with alias `app`. Configure the app container to connect to `jdbc:postgresql://db:5432/testdb`. Verify the app container can resolve and connect to the database container by hostname.

11. **Docker-Compose:** Create a `docker-compose.yml` with `postgres` and `redis` services. Write a test using `DockerComposeContainer` that starts both services, verifies they are running, and tests that a Spring Boot application can connect to both when their connection details are extracted.

12. **Reusable Containers:** Configure `.testcontainers.properties` to enable reuse. Use `withReuse(true)` on a `PostgreSQLContainer`. Run your test suite twice and observe the startup time difference. Then write a CI configuration that disables reuse. Explain the role of Ryuk in both scenarios.

13. **Singleton Container:** Implement an `AbstractDatabaseTest` base class that starts a `PostgreSQLContainer` in a `static` block and sets `System.setProperty` values. Write three test classes that extend it and verify they share the same container. How does this pattern differ from `@Container` on a static field?

14. **Chaos with Testcontainers:** Write a test that uses a `GenericContainer` running a custom application. Use `withCommand` to simulate a slow startup (add `sleep 30` before the entrypoint). Set `withStartupTimeout(Duration.ofSeconds(15))` and verify the test fails with a timeout exception.

15. **Complete Integration Test:** Build a full Spring Boot test that uses `PostgreSQLContainer` (with `@ServiceConnection`), `RedpandaContainer` (with `@ServiceConnection`), and `GenericContainer` for Redis. Write a service that processes orders and publishes events to Kafka. Test the entire flow with assertions on the database state and Kafka messages.
