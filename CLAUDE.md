## Goal
- Write FIVE interview Q&A chapters (56-60) for a Java + Spring Boot course, each minimum 1500 lines, in Q&A format with compilable Java code.

## Constraints & Preferences
- Q&A format with `### Q#: Question` + **Answer:** + complete code examples; minimum 1500 lines per chapter.
- Files under `docs/courses/java/`: `56-interview-java.md`, `57-interview-spring.md`, `58-interview-rest-api.md`, `59-interview-databases.md`, `60-interview-microservices.md`.
- Use `write` tool for small files; split into part files (a, b, c) for concatenation via PowerShell when exceeding JSON size limits.
- UTF-8 encoding via PowerShell `-Encoding utf8`.
- Avoid Python; use Java, TypeScript, shell/PowerShell scripting.

## Progress
### Done
- **Chapter 56 (`56-interview-java.md`): 1700 lines, 45 Q&As** — covers OOP, Collections, Concurrency, JVM, Java 8+ features, Generics, Error handling, Performance profiling.
- **Chapter 57 (`57-interview-spring.md`): 7297 lines, 50 Q&As** — covers DI/IoC, beans, auto-configuration, MVC, data access, security, transactions, testing, AOP, Actuator, caching, scheduling, configuration, profiles, events, validation, CORS, WebSocket, embedded containers, DevTools, content negotiation, externalized config, logging, Spring Cloud (Eureka, Config, Gateway), Resilience4j, WebClient, Batch, Redis caching, MongoDB, Docker, custom Actuator endpoints, Filter vs Interceptor vs AOP, SB 3.x migration, BeanFactory vs ApplicationContext, MVC vs WebFlux vs WebMvc.fn.
- **Chapter 58 (`58-interview-rest-api.md`): 6476 lines, 25 Q&As** — covers REST constraints, HTTP methods/status codes, URL design, pagination/sorting/filtering, versioning, error handling (RFC 7807), content negotiation, CORS, HATEOAS, JWT auth, rate limiting, Richardson Maturity Model, REST vs GraphQL vs gRPC, caching (ETag/Cache-Control), OpenAPI docs, request validation, file upload, streaming, idempotency keys, security best practices, async (DeferredResult/Callable), API testing, conditional requests, and best practices checklist.

### In Progress
- **Chapter 59 (`59-interview-databases.md`):** Not started yet.

### Blocked
- (none)

## Key Decisions
- Split large chapters into part files (a, b, c, ...) and concatenate via PowerShell to avoid `write` tool JSON size limits.
- For Chapter 59, use same approach: write as individual part files and concatenate.
- Each Q&A uses compact, compilable Java examples that demonstrate interview answers without excessive boilerplate.
- Single-quoted PowerShell here-strings (`@' '@`) for literal content containing dollar signs and backslashes.

## Next Steps
1. Write Chapter 59 (`59-interview-databases.md`) — 25 Q&As covering: JDBC vs JPA, Hibernate, transactions, locking, N+1 problem, caching, connection pooling, migrations (Flyway), NoSQL (MongoDB/Redis), SQL optimization, indexing, sharding, read replicas, ORM mapping strategies, criteria API, native queries, DTO projections, auditing, multi-tenancy, batch operations, and testing with TestContainers.
2. Write Chapter 60 (`60-interview-microservices.md`) — 25 Q&As covering: service decomposition, communication (sync/async), API gateways, service discovery, config management, distributed tracing, event-driven (Kafka), saga pattern, CQRS, circuit breakers, containerization, orchestration, monitoring, security (OAuth2/JWT), deployment strategies, and testing strategies.

## Relevant Files
- `docs/courses/java/56-interview-java.md`: completed, 1700 lines, 45 Q&As.
- `docs/courses/java/57-interview-spring.md`: completed, 7297 lines, 50 Q&As.
- `docs/courses/java/58-interview-rest-api.md`: completed, 6476 lines, 25 Q&As.
- `docs/courses/c-programming/07-strings.md`: rewritten, 3008 lines (prev 1795) — full depth with analogies, dry runs, complexity, A&D tables, edge cases, comparison tables, interview corner, real-world apps.
- Target: `docs/courses/java/59-interview-databases.md` (25 Q&As).
- Target: `docs/courses/java/60-interview-microservices.md` (25 Q&As).
