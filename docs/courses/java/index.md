# Java & Spring Boot — Complete University Textbook

## Course Description

This comprehensive textbook covers **Java 21+** and **Spring Boot 4.x** through the lens of modern enterprise development. Students will master the entire Java ecosystem—from foundational language concepts and JVM internals through Spring Boot, microservices, reactive programming, cloud-native deployment, and AI-powered systems.

The curriculum is designed for a single purpose: to prepare you to build, test, deploy, and scale **production-grade enterprise applications with Java and Spring Boot**. Each chapter builds on the previous, following the university textbook template: Learning Objectives, Theory with code examples, Summary, and Exercises (Review Questions, Application Problems, Challenge Problems).

## Course Structure

The course is organized into thirteen parts, each building on the last:

| Part | Chapters | Focus |
|------|----------|-------|
| 0 | P1–P6 | Java Foundations — syntax, OOP, collections, I/O, generics, streams |
| I | 1–6 | Core Java Deep Dive — JVM, concurrency, NIO, modules, functional, performance |
| II | 7–8 | Build Tools — Maven, Gradle |
| III | 9–14 | Spring Boot Fundamentals — DI, auto-config, properties, Actuator, logging |
| IV | 15–18 | Spring Web — REST APIs, validation, documentation, file handling |
| V | 19–24 | Spring Data & Persistence — JDBC, JPA/Hibernate, Spring Data JPA, migrations, NoSQL, transactions |
| VI | 25–28 | Spring Security — authentication, JWT/OAuth2, method security, Keycloak |
| VII | 29–33 | Testing — JUnit 5, Mockito, Spring Boot test, Testcontainers, security/perf testing |
| VIII | 34–37 | Messaging & Async — @Async/events, RabbitMQ, Kafka, event-driven architecture |
| IX | 38–43 | Microservices & Spring Cloud — service discovery, gateway, resilience, config, tracing |
| X | 44–46 | Reactive Spring — Project Reactor, WebFlux, R2DBC |
| XI | 47–51 | Modern Spring Ecosystem — AI, GraphQL, Batch, Integration, Modulith |
| XII | 52–55 | Production & DevOps — Docker, Kubernetes, CI/CD, observability |
| XIII | 56–66 | Interview Preparation — Java, Spring Boot, 10 industry-specific Q&A |

## Chapter Listing

### Part 0: Java Foundations for Spring Boot

| # | Chapter | Topics |
|---|---------|--------|
| P1 | [Java Syntax & Fundamentals](p1-java-syntax.md) | Java history, JDK/JRE/JVM, primitive types, operators, control flow, arrays, strings, var, record, switch expressions, pattern matching, text blocks |
| P2 | [Object-Oriented Programming in Java](p2-java-oop.md) | Classes & objects, constructors, encapsulation, inheritance, polymorphism, abstract classes, interfaces, sealed classes, records, enums, annotations |
| P3 | [Java Collections Framework](p3-java-collections.md) | List, Set, Map, Queue, Deque, Comparable/Comparator, Collections utility, Streams API, Optional, Collectors, parallel streams |
| P4 | [Exception Handling & I/O](p4-exceptions-io.md) | Checked/unchecked exceptions, try-with-resources, custom exceptions, java.io, java.nio, serialization, file I/O, buffering |
| P5 | [Generics, Annotations & Reflection](p5-generics-reflection.md) | Generic classes/methods, wildcards, type erasure, custom annotations, annotation processing, reflection API, runtime introspection |
| P6 | [Lambda Expressions & Functional Programming](p6-lambdas-streams.md) | Functional interfaces, method references, lambda syntax, Stream pipeline, map/filter/reduce, Optional, CompletableFuture basic |

### Part I: Core Java Deep Dive

| # | Chapter | Topics |
|---|---------|--------|
| 01 | [JVM Architecture & Memory Management](01-jvm-memory.md) | Class loading, JVM memory areas, garbage collection (G1, ZGC), heap/stack, bytecode, JIT compilation, tuning flags, memory leaks |
| 02 | [Multithreading & Concurrency](02-concurrency.md) | Thread lifecycle, synchronized, locks, atomic classes, Concurrent Collections, ExecutorService, ForkJoinPool, virtual threads (Project Loom) |
| 03 | [Java NIO & Networking](03-nio-networking.md) | Channels, buffers, selectors, non-blocking I/O, async file I/O, TCP/UDP networking, HTTP client |
| 04 | [Java Modules (JPMS) & Packaging](04-jpms-packaging.md) | Module system, requires/exports, module graphs, jlink, jpackage, multi-module projects, migration strategies |
| 05 | [Functional Programming in Practice](05-functional-deep.md) | Advanced streams, custom collectors, monad patterns, functional interfaces deep, function composition, lazy evaluation |
| 06 | [Performance Tuning & Profiling](06-performance.md) | Profiling tools (JMC, JProfiler), heap analysis, thread dumps, benchmarking (JMH), GC tuning, performance anti-patterns |

### Part II: Build Tools & Project Setup

| # | Chapter | Topics |
|---|---------|--------|
| 07 | [Maven Deep Dive](07-maven.md) | POM structure, lifecycle & phases, plugins, dependency management, profiles, multi-module projects, BOM, custom plugins, best practices |
| 08 | [Gradle Deep Dive](08-gradle.md) | Build scripts (Groovy/Kotlin), tasks, plugins, dependency configuration, multi-project builds, build cache, Gradle wrapper, composite builds |

### Part III: Spring Boot Fundamentals

| # | Chapter | Topics |
|---|---------|--------|
| 09 | [Introduction to Spring & Spring Boot](09-spring-intro.md) | Spring ecosystem history, IoC principle, Spring Boot philosophy, project initialization (Spring Initializr), directory structure, starters, parent POM, main class, embedded server |
| 10 | [Dependency Injection & IoC Container](10-di-container.md) | ApplicationContext, @Component/@Service/@Repository/@Controller, @Bean, @Autowired, @Qualifier, @Primary, scope, lifecycle callbacks, profiles, conditional beans |
| 11 | [Auto-Configuration & Starters](11-auto-configuration.md) | @EnableAutoConfiguration, @Conditional annotations, auto-configuration classes, custom starters, spring.factories, auto-config ordering |
| 12 | [Application Properties & Configuration](12-configuration.md) | application.yml/properties, @ConfigurationProperties, @Value, @PropertySource, YAML profiles, external configuration, relaxed binding, config tree |
| 13 | [Actuator, DevTools & Monitoring](13-actuator-devtools.md) | Actuator endpoints, health indicators, metrics, info contributors, custom endpoints, DevTools features, live reload, remote debugging |
| 14 | [Logging, Error Handling & Internationalization](14-logging-error-i18n.md) | Logback/Log4j2 configuration, SLF4J, structured logging, @ControllerAdvice, ExceptionHandler, MessageSource, i18n, locale resolution |

### Part IV: Spring Web

| # | Chapter | Topics |
|---|---------|--------|
| 15 | [REST API Development with Spring MVC](15-rest-api.md) | @RestController, @RequestMapping, request/response handling, content negotiation, HTTP methods/status, HATEOAS, API versioning, REST best practices |
| 16 | [Request Validation, Error Handling & Binding](16-validation.md) | Bean Validation (Jakarta), @Valid/@Validated, custom validators, error responses, @InitBinder, property editors, DTOs, request params vs path variables |
| 17 | [API Documentation with OpenAPI/Swagger](17-openapi.md) | SpringDoc OpenAPI, annotations, Swagger UI, security schemas, API versioning in docs, request/response examples |
| 18 | [File Upload, Download & Streaming](18-file-handling.md) | MultipartFile, file upload configuration, download with Resource, streaming responses, large file handling, progress tracking |

### Part V: Spring Data & Persistence

| # | Chapter | Topics |
|---|---------|--------|
| 19 | [JDBC, Connection Pooling & JOOQ](19-jdbc-jooq.md) | JDBC core, DataSource, HikariCP, JdbcTemplate, NamedParameterJdbcTemplate, JOOQ DSL, code generation, type-safe queries |
| 20 | [JPA & Hibernate Deep Dive](20-jpa-hibernate.md) | Entity mapping, @Table/@Column, relationships (@OneToMany, @ManyToMany), cascade types, fetching strategies, inheritance mapping, @MappedSuperclass, 2nd-level cache, Hibernate types |
| 21 | [Spring Data JPA](21-spring-data-jpa.md) | Repository pattern, JpaRepository, query methods, @Query, @Modifying, Specifications, QueryDSL, auditing, pagination & sorting, projections |
| 22 | [Database Migrations (Flyway & Liquibase)](22-migrations.md) | Schema versioning, migration scripts, rollback strategies, environment management, testing migrations |
| 23 | [Spring Data for NoSQL](23-nosql.md) | MongoDB (repositories, aggregations, geo), Redis (RedisTemplate, repositories), Elasticsearch (indexing, search) |
| 24 | [Transaction Management](24-transactions.md) | @Transactional, propagation, isolation levels, rollback rules, TransactionTemplate, distributed transactions (JTA, Saga), pessimistic/optimistic locking |

### Part VI: Spring Security

| # | Chapter | Topics |
|---|---------|--------|
| 25 | [Authentication & Authorization](25-auth-authz.md) | SecurityFilterChain, authentication providers, UserDetailsService, password encoding, session management, remember-me, security contexts |
| 26 | [JWT, OAuth2 & OIDC](26-jwt-oauth2.md) | JWT structure, token generation/validation, OAuth2 flows (authorization code, client credentials), resource server, client registration, social login (Google, GitHub) |
| 27 | [Method Security, CORS & CSRF](27-method-cors-csrf.md) | @PreAuthorize/@PostAuthorize, @Secured, method security expressions, CORS configuration, CSRF protection, CSP headers |
| 28 | [Keycloak & Identity Federation](28-keycloak.md) | Keycloak setup, realm/client/users, adapters, token exchange, identity brokering, user federation, fine-grained authorization |

### Part VII: Testing

| # | Chapter | Topics |
|---|---------|--------|
| 29 | [JUnit 5 Deep Dive](29-junit5.md) | Architecture, annotations, assertions, assumptions, parameterized tests, dynamic tests, extensions, test lifecycle, reporting |
| 30 | [Mockito & Mocking Frameworks](30-mockito.md) | Mock creation, stubbing, verification, argument matchers, spy, @InjectMocks, BDDMockito, Answer interfaces, best practices |
| 31 | [Spring Boot Testing](31-spring-boot-test.md) | @SpringBootTest, slicing tests (@WebMvcTest, @DataJpaTest), test configuration, @MockBean, TestRestTemplate, WebTestClient, test properties |
| 32 | [Testcontainers & Integration Testing](32-testcontainers.md) | Container lifecycle, database containers, Kafka/Redis/Elasticsearch containers, reusable containers, docker-compose integration, network isolation |
| 33 | [Security Testing & Performance Testing](33-security-perf-test.md) | @WithMockUser, security test annotations, OAuth2 test support, JMeter/Gatling, profiling under load, stress testing, chaos testing |

### Part VIII: Messaging & Async

| # | Chapter | Topics |
|---|---------|--------|
| 34 | [Async Processing & Spring Events](34-async-events.md) | @Async, @EnableAsync, ThreadPoolTaskExecutor, application events, @EventListener, @TransactionalEventListener, Event publishing, async error handling |
| 35 | [RabbitMQ](35-rabbitmq.md) | AMQP, exchanges/queues/bindings, @RabbitListener, RabbitTemplate, dead-letter queues, retry, publisher confirms, reliable delivery |
| 36 | [Apache Kafka](36-kafka.md) | Topics/partitions, producers/consumers, @KafkaListener, KafkaTemplate, consumer groups, offset management, exactly-once semantics, Schema Registry, KStreams |
| 37 | [Event-Driven Architecture & SAGA](37-event-driven-saga.md) | Domain events, event sourcing, CQRS, choreography vs orchestration, Axon Framework, saga orchestration with Kafka compensating transactions |

### Part IX: Microservices & Spring Cloud

| # | Chapter | Topics |
|---|---------|--------|
| 38 | [Microservices Architecture Principles](38-microservices-principles.md) | Bounded context, domain-driven design, service decomposition, inter-service communication, data ownership, service mesh concepts |
| 39 | [Service Discovery & Load Balancing](39-discovery.md) | Netflix Eureka, Spring Cloud LoadBalancer, service registration, health checks, client-side vs server-side LB |
| 40 | [API Gateway (Spring Cloud Gateway)](40-gateway.md) | Route configuration, predicates, filters, circuit breaker integration, rate limiting, WebFlux-based gateway, security at gateway |
| 41 | [Resilience & Circuit Breakers (Resilience4j)](41-resilience.md) | Circuit breaker patterns, retry, rate limiter, time limiter, bulkhead, metrics, actuator integration |
| 42 | [Distributed Configuration](42-config.md) | Spring Cloud Config Server/Client, native/backend repos, encryption, refresh scope, @RefreshScope, bus refresh with RabbitMQ/Kafka |
| 43 | [Distributed Tracing & Observability](43-tracing.md) | Spring Cloud Sleuth, Micrometer tracing, OpenTelemetry, Zipkin, distributed logging, correlation IDs, Grafana Tempo |

### Part X: Reactive Spring

| # | Chapter | Topics |
|---|---------|--------|
| 44 | [Project Reactor & Reactive Streams](44-reactor.md) | Reactive Streams spec, Flux/Mono, publishers/subscribers, operators, back-pressure, Schedulers, error handling, testing with StepVerifier |
| 45 | [Spring WebFlux](45-webflux.md) | Reactive controllers, functional endpoints, WebClient, SSE, reactive security, RSocket, performance characteristics |
| 46 | [R2DBC & Reactive Data Access](46-r2dbc.md) | R2DBC drivers, @Query reactive, R2dbcRepository, reactive transactions, vs JPA comparison, performance tuning |

### Part XI: Modern Spring Ecosystem

| # | Chapter | Topics |
|---|---------|--------|
| 47 | [Spring AI](47-spring-ai.md) | AI SDK integration, vector stores, embeddings, LLM agents, RAG with pgvector, prompt engineering, tool calling, multi-agent orchestration |
| 48 | [Spring GraphQL](48-graphql.md) | GraphQL schema, @QueryMapping/@MutationMapping, DataLoader, subscriptions, GraphiQL, security, batching, pagination |
| 49 | [Spring Batch](49-batch.md) | Job/Step/Chunk, readers/processors/writers, partitioning, job repositories, scheduling with Quartz, restart & skip, large-scale batch optimizations |
| 50 | [Spring Integration](50-integration.md) | Enterprise Integration Patterns (EIP), channels, gateways, transformers, routers, adapters (JMS, FTP, file, mail), DSL configuration |
| 51 | [Spring Modulith](51-modulith.md) | Modular monolith, module structure, verification, testing modules, event-driven integration, documentation generation, migration to microservices |

### Part XII: Production & DevOps

| # | Chapter | Topics |
|---|---------|--------|
| 52 | [Docker & Containerization](52-docker.md) | Dockerfile optimization, multi-stage builds, layering, Docker Compose, Spring Boot layered JARs, container health checks, .dockerignore |
| 53 | [Kubernetes Deployment](53-kubernetes.md) | Pods, services, ConfigMaps, secrets, deployments, probes, Helm charts, Spring Boot on Kubernetes, K8s native service discovery, auto-scaling |
| 54 | [CI/CD for Spring Boot](54-cicd.md) | GitHub Actions/GitLab CI, build pipelines, artifact publishing, container registry, automated deployment, database migration in CI, approval gates |
| 55 | [Observability (Micrometer, Prometheus, Grafana)](55-observability.md) | Micrometer metrics, Prometheus scraping, Grafana dashboards, custom metrics, alerting rules, structured logging with ELK/Loki, SLI/SLO/SLA |

### Part XIII: Interview Preparation

| # | Chapter | Focus |
|---|---------|-------|
| 56 | [Core Java Interview Q&A](56-interview-java.md) | 100+ interview questions on Java fundamentals, OOP, collections, streams, concurrency, JVM, memory management, Java 21+ features |
| 57 | [Spring Boot & Microservices Interview Q&A](57-interview-spring.md) | 100+ interview questions on Spring Boot, DI, JPA, security, testing, microservices, Spring Cloud, reactive |
| 58 | [Healthcare Interview Q&A](58-interview-healthcare.md) | Interview questions for Java/Spring Boot roles in healthcare and health-tech |
| 59 | [Finance Interview Q&A](59-interview-finance.md) | Interview questions for Java/Spring Boot roles in fintech and financial services |
| 60 | [Education Interview Q&A](60-interview-education.md) | Interview questions for Java/Spring Boot roles in edtech and education |
| 61 | [Logistics Interview Q&A](61-interview-logistics.md) | Interview questions for Java/Spring Boot roles in logistics and supply chain |
| 62 | [HR Interview Q&A](62-interview-hr.md) | Interview questions for Java/Spring Boot roles in HR technology |
| 63 | [Marketing Interview Q&A](63-interview-marketing.md) | Interview questions for Java/Spring Boot roles in marketing and adtech |
| 64 | [Customer Service Interview Q&A](64-interview-customer-service.md) | Interview questions for Java/Spring Boot roles in customer support platforms |
| 65 | [Real Estate Interview Q&A](65-interview-real-estate.md) | Interview questions for Java/Spring Boot roles in real estate and property technology |
| 66 | [Manufacturing Interview Q&A](66-interview-manufacturing.md) | Interview questions for Java/Spring Boot roles in manufacturing and industrial |

## Supplementary Resources

- [Java 21+ Official Documentation](https://docs.oracle.com/en/java/)
- [Spring Boot Official Reference](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- [Spring Guides](https://spring.io/guides)
- [Baeldung Tutorials](https://www.baeldung.com)
- [Spring Academy](https://spring.academy)
