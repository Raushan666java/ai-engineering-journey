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
- **Chapter 56 (`56-interview-java.md`):** 1700 lines, 45 Q&As — OOP, Collections, Concurrency, JVM, Java 8+, Generics, Error handling, Performance.
- **Chapter 57 (`57-interview-spring.md`):** 7297 lines, 50 Q&As — DI/IoC, MVC, Data, Security, AOP, Cloud, Reactor, etc.
- **Chapter 58 (`58-interview-rest-api.md`):** 6476 lines, 25 Q&As — REST constraints, HATEOAS, JWT, versioning, OpenAPI, testing.
- **Chapter 59 (`59-interview-databases.md`):** 25 Q&As — JDBC vs JPA, Hibernate, N+1, transactions, locking, Flyway, NoSQL, indexing, sharding, TestContainers.
- **Chapter 60 (`60-interview-microservices.md`):** 25 Q&As — decomposition, sync/async, gateway, discovery, Kafka, saga, CQRS, circuit breaker, K8s, OAuth2.
- **Encoding fix:** Stripped UTF-8 BOM from 212 course files; fixed Windows-1252 bytes in 2 files.
- **Nav fix:** Added ai-agent-engineer course (9 files) to `mkdocs.yml` so pages show on GitHub Pages.
- **Phase 0 hands-on:** Built 10 code files in `scratch/phase0/` — Redis cache/queue, pub/sub, FastAPI docs, JWT rotation, rate limiting, idempotency, API versioning, WebSocket echo + agent streaming.
- **Trending dashboard:** Deployed live at `/trending/` with GH Action for daily snapshot.

### Blocked
- (none)

## Next Steps
- (none — all planned work complete)
