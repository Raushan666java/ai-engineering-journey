<!-- Clear Language: Keep sentences under 50 words -->
# Dependency Injection — Reusable Components and FastAPI DI System

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand dependency injection principles and FastAPI's DI system |
| LO2 | Create reusable dependency functions for database sessions, auth, and config |
| LO3 | Use dependency scoping (callable, class, generator) for resource management |
| LO4 | Implement parameterized dependencies with factory patterns |
| LO5 | Combine and override dependencies for testing |
| LO6 | Apply global dependencies with include_router and app-wide DI |

## Introduction

FastAPI is the modern Python framework for building AI APIs. Its async support, automatic documentation, and type safety make it ideal for serving ML models at scale. This module covers production-grade API development.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding dependency injection is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how dependency injection works in practice.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | DI Fundamentals | Inversion of control, dependency injection benefits |
| 4.2 | FastAPI Depends | The Depends() function, callable dependencies |
| 4.3 | Class-based Dependencies | Stateful dependencies, __init__ pattern |
| 4.4 | Generator Dependencies | Resource lifecycle with yield |
| 4.5 | Parameterized Dependencies | Factory functions, configurable dependencies |
| 4.6 | Sub-dependencies | Dependency chains, DI graph |
| 4.7 | Global Dependencies | Router-level and app-level dependencies |
| 4.8 | Testing with Overrides | Override dependencies for unit tests |

## Chapter Roadmap

```mermaid
flowchart LR
    A[DI Concepts] --> B[Depends() function]
    B --> C[Class Dependencies]
    C --> D[Generator Dependencies]
    D --> E[Parameterized DI]
    E --> F[Sub-dependencies]
    F --> G[Global DI]
    G --> H[Testing Overrides]
```

## 4.1 Dependency Injection Fundamentals

Dependency injection (DI) is a design pattern where objects receive their dependencies from an external source rather than creating them internally.

**Benefits**:
- **Testability**: Replace real dependencies with mocks in tests
- **Reusability**: Share database sessions, auth logic across endpoints
- **Separation**: Business logic separated from infrastructure concerns
- **Lifecycle management**: Automatic setup/cleanup of resources

```python

## Without DI — hard to test, tightly coupled
def get_user(user_id: int):
    db = Database()  # Created inside — cannot mock
    return db.query("SELECT * FROM users WHERE id = ?", user_id)

## With DI — dependencies injected
def get_user(user_id: int, db: Database = Depends(get_db)):
    return db.query("SELECT * FROM users WHERE id = ?", user_id)

## db is injected — can be replaced with mock in tests
```

**IoC principle**: Instead of components creating their dependencies, an external injector (FastAPI's DI system) provides them. This inverts the control flow.

## 4.2 FastAPI Depends

The `Depends()` function declares a dependency in a path operation.

```python
from fastapi import FastAPI, Depends, Header, HTTPException
from typing import Optional

app = FastAPI()

## Simple dependency — a callable
async def common_parameters(
    skip: int = 0,
    limit: int = 100,
):
    return {"skip": skip, "limit": limit}

@app.get("/items")
async def list_items(params: dict = Depends(common_parameters)):
    return {"items": [{"id": 1}], **params}

@app.get("/users")
async def list_users(params: dict = Depends(common_parameters)):
    return {"users": [{"id": 1}], **params}

## Dependency as a function with its own dependencies
async def get_token_header(x_token: str = Header(...)):
    if x_token != "secret-token":
        raise HTTPException(status_code=403, detail="Invalid token")
    return x_token

@app.get("/protected")
async def protected_route(token: str = Depends(get_token_header)):
    return {"message": "Access granted", "token": token}
```

**How Depends works**: FastAPI calls the dependency function before the path operation, injects the return value as the parameter, and handles exceptions from the dependency. If a dependency raises HTTPException, FastAPI returns it without executing the endpoint.

## 4.3 Class-based Dependencies

Use classes for stateful dependencies that need initialization.

```python
from fastapi import FastAPI, Depends
from typing import Optional

app = FastAPI()

class PaginationParams:
    def __init__(self, skip: int = 0, limit: int = 100):
        self.skip = skip
        self.limit = limit

    @property
    def offset(self) -> int:
        return self.skip

class AuthChecker:
    def __init__(self, required_role: Optional[str] = None):
        self.required_role = required_role

    async def __call__(self, authorization: str = Depends(get_token_header)):
        # __call__ makes the class instance usable with Depends()
        if self.required_role == "admin" and "admin" not in authorization:
            raise HTTPException(status_code=403, detail="Admin access required")
        return authorization

@app.get("/items")
async def list_items(pagination: PaginationParams = Depends(PaginationParams)):
    return {"offset": pagination.offset, "limit": pagination.limit}

## Class with __call__ — instance can be used as dependency
admin_checker = AuthChecker(required_role="admin")

@app.get("/admin/data")
async def admin_data(auth: str = Depends(admin_checker)):
    return {"secret": "admin data"}
```

**When to use class dependencies**:
- Need to initialize from configuration or parameters
- Dependency has complex internal state
- Want to encapsulate related logic in a single unit
- Need the same dependency configured differently for different routes

## 4.4 Generator Dependencies

Generator dependencies use `yield` to separate setup from cleanup — perfect for database sessions.

```python
from fastapi import FastAPI, Depends
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker
from typing import Generator

DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

## Generator dependency — yields the resource, cleans up after
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/users")
async def list_users(db: Session = Depends(get_db)):
    # db is available here
    users = db.execute("SELECT * FROM users").fetchall()
    return {"users": users}

## After response, db.close() is called automatically

## Multiple resources
async def get_redis():
    redis = await create_redis_connection()
    try:
        yield redis
    finally:
        await redis.close()

@app.get("/cache/{key}")
async def get_cache(key: str, redis=Depends(get_redis)):
    value = await redis.get(key)
    return {"key": key, "value": value}
```

**Lifecycle**: The code before `yield` runs on request, the value is injected into the endpoint, and the code after `yield` runs after the response is sent. Exceptions in the endpoint also trigger cleanup.

## 4.5 Parameterized Dependencies

Create dependency factories that accept parameters.

```python
from fastapi import FastAPI, Depends, HTTPException, Query
from typing import Optional, Callable

app = FastAPI()

## Factory function that returns a dependency
def get_pagination(
    default_limit: int = 100,
    max_limit: int = 1000
) -> Callable:
    async def pagination_dependency(
        skip: int = Query(0, ge=0),
        limit: int = Query(default_limit, ge=1, le=max_limit),
    ):
        return {"skip": skip, "limit": limit}
    return pagination_dependency

## Create configured dependencies
small_pagination = get_pagination(default_limit=10, max_limit=50)
large_pagination = get_pagination(default_limit=100, max_limit=5000)

@app.get("/items")
async def list_items(pagination: dict = Depends(small_pagination)):
    return pagination

@app.get("/logs")
async def list_logs(pagination: dict = Depends(large_pagination)):
    return pagination

## Dependency with role-based access control
def require_role(role: str):
    async def role_dependency(user: dict = Depends(get_current_user)):
        if user.get("role") != role:
            raise HTTPException(status_code=403, detail=f"{role} role required")
        return user
    return role_dependency

@app.get("/admin")
async def admin_dashboard(user: dict = Depends(require_role("admin"))):
    return {"dashboard": "admin", "user": user}

@app.get("/moderator")
async def mod_dashboard(user: dict = Depends(require_role("moderator"))):
    return {"dashboard": "moderator", "user": user}
```

**Use cases for parameterized dependencies**:
- Pagination with different limits per endpoint
- Role-based access control with specific roles
- Database session with different configurations
- Feature flag checks per endpoint group

## 4.6 Sub-dependencies

Dependencies can depend on other dependencies — FastAPI resolves the entire graph.

```python
from fastapi import FastAPI, Depends, HTTPException, Header
from typing import Optional

app = FastAPI()

## Level 1: Database
def get_db():
    db = Database()
    try:
        yield db
    finally:
        db.close()

## Level 2: Current user (depends on db)
async def get_current_user(
    db = Depends(get_db),
    authorization: str = Header(None)
):
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing authorization")
    token = authorization.replace("Bearer ", "")
    user = await db.query("SELECT * FROM users WHERE token = ?", token)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid token")
    return user

## Level 3: Admin user (depends on current user)
async def get_admin_user(
    user: dict = Depends(get_current_user)
):
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

## Endpoint — only needs the final dependency
@app.get("/admin/users")
async def admin_list_users(admin: dict = Depends(get_admin_user)):
    # admin comes from get_admin_user -> get_current_user -> get_db
    return {"admin": admin["name"], "users": [{"id": 1}]}

## Trace the dependency chain:

## /admin/users -> get_admin_user(Depends(get_current_user(Depends(get_db))))
```

**Dependency graph resolution**: FastAPI builds the dependency graph and calls each dependency in order. Results are cached within a request — if two dependencies both depend on `get_db`, it is called only once.

## 4.7 Global Dependencies

Apply dependencies to entire routers or the whole application.

```python
from fastapi import FastAPI, Depends, APIRouter, HTTPException, Header

app = FastAPI()

## Router-level dependencies
router = APIRouter(
    prefix="/api/v1",
    tags=["API"],
    dependencies=[Depends(verify_api_key)]
)

@router.get("/users")
async def list_users():
    return {"users": [{"id": 1}]}

@router.get("/items")
async def list_items():
    return {"items": [{"id": 1}]}

## App-level dependencies
app = FastAPI(dependencies=[Depends(add_request_id)])

async def add_request_id(request: Request, call_next):
    request_id = str(uuid.uuid4())
    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    return response

## Conditional dependencies
class FeatureFlag:
    def __init__(self, feature_name: str):
        self.feature_name = feature_name

    async def __call__(self):
        if not is_feature_enabled(self.feature_name):
            raise HTTPException(status_code=404, detail="Feature not found")
        return True

new_feature = FeatureFlag("new_dashboard")

@app.get("/new-dashboard", dependencies=[Depends(new_feature)])
async def new_dashboard():
    return {"message": "New dashboard — feature flagged"}
```

**Global dependency scope options**:

| Scope | Implementation | Applies To |
|-------|----------------|------------|
| Endpoint | `Depends()` in function signature | Single endpoint |
| Router | `APIRouter(dependencies=[...])` | All router endpoints |
| App | `FastAPI(dependencies=[...])` | All application endpoints |
| Conditional | Custom logic in dependency | Based on runtime conditions |

## 4.8 Testing with Overrides

FastAPI allows overriding dependencies in tests.

```python
from fastapi import FastAPI, Depends
from fastapi.testclient import TestClient
import pytest

app = FastAPI()

## Real dependency
async def get_db():
    db = RealDatabase()
    try:
        yield db
    finally:
        db.close()

@app.get("/users")
async def list_users(db = Depends(get_db)):
    return db.query("SELECT * FROM users")

## Test setup with override
@pytest.fixture
def test_app():
    app.dependency_overrides[get_db] = get_test_db
    yield app
    app.dependency_overrides.clear()

@pytest.fixture
def client(test_app):
    return TestClient(test_app)

def test_list_users(client):
    response = client.get("/users")
    assert response.status_code == 200
    assert len(response.json()) == 2  # Test data

## Isolated override using context
from contextlib import contextmanager

@contextmanager
def override_dependency(original, mock):
    app.dependency_overrides[original] = mock
    try:
        yield
    finally:
        del app.dependency_overrides[original]

def test_specific_override():
    mock_db = MockDatabase()
    with override_dependency(get_db, lambda: mock_db):
        client = TestClient(app)
        response = client.get("/users")
        assert response.status_code == 200

## Override with different return types
async def get_mock_user():
    return {"id": 1, "name": "Test User", "role": "admin"}

app.dependency_overrides[get_current_user] = get_mock_user
```

**Testing best practices**:
- Always clear overrides after each test
- Use fixtures for consistent override setup
- Override only the dependencies that need mocking
- Test with both real and mocked dependencies

---

## TypeScript Parallel

```typescript
import express from "express";

interface Database {
  query(sql: string): Promise<any[]>;
}

// Dependency injection container
class DIContainer {
  private registry = new Map<string, any>();

  register<T>(name: string, factory: (...args: any[]) => T): void {
    this.registry.set(name, factory);
  }

  resolve<T>(name: string): T {
    const factory = this.registry.get(name);
    if (!factory) throw new Error(`Dependency ${name} not found`);
    return factory();
  }
}

const container = new DIContainer();
container.register<Database>("db", () => new RealDatabase());

// Route handler with injected dependency
app.get("/users", async (req, res) => {
  const db = container.resolve<Database>("db");
  const users = await db.query("SELECT * FROM users");
  res.json(users);
});
```

---

## Summary

- Dependency injection inverts control — components receive dependencies externally
- FastAPI's Depends() automatically resolves and injects dependency return values
- Class-based dependencies use __init__ for configuration and __call__ for processing
- Generator dependencies (yield) manage resource lifecycle with automatic cleanup
- Parameterized dependencies expose factory functions for reusable, configurable DI
- Sub-dependencies form chains — FastAPI resolves the entire graph efficiently
- Global dependencies apply to routers or entire app for cross-cutting concerns
- Dependency overrides enable easy testing with mock resources
- Dependencies are cached per request — same dependency called once even if multiple endpoints use it
- Raise HTTPException in dependencies for automatic auth/validation error handling

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Database sessions | Generator dependency with yield/close | Manual session management |
| Authentication | Dependency that returns user object | Auth logic in each endpoint |
| Pagination | Parameterized pagination dependency | Duplicating pagination code |
| Testing | dependency_overrides for mocks | Integration tests only |
| Configuration | Class dependency with config injection | Global variables |
| Resource cleanup | Generator dependency (yield pattern) | Manual cleanup in each endpoint |
| Cross-cutting | Router-level dependencies | Adding to every endpoint |

## Interview Q&A

<details class="tp-qa-card" data-qid="fastapi-s04-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: What is dependency injection and why use it?</summary>
  <div class="tp-qa-answer"><p>Dependency injection is a pattern where objects receive their dependencies from an external source. Benefits: improved testability (replace with mocks), reusability (share logic across endpoints), separation of concerns (business vs infrastructure), and automatic lifecycle management (setup/cleanup).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: How does the generator dependency pattern work?</summary>
<div class="tp-qa-answer"><p>The dependency function uses yield instead of return. Code before yield runs on request start (setup), the yielded value is injected into the endpoint,.
and code after yield runs after response is sent (cleanup). The finally block ensures cleanup even on exceptions. Perfect for database sessions where you need to close after each request.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: How do you override dependencies for testing?</summary>
  <div class="tp-qa-answer"><p>Use app.dependency_overrides dictionary: app.dependency_overrides[original_function] = mock_function. Always clear after each test: app.dependency_overrides.clear(). Use fixtures to manage overrides consistently. This replaces real dependencies (database, auth) with mocks without changing endpoint code.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: What is a sub-dependency?</summary>
  <div class="tp-qa-answer"><p>A dependency that itself depends on other dependencies. FastAPI resolves the dependency graph automatically. Example: get_admin_user depends on get_current_user which depends on get_db. The graph is resolved depth-first, and each unique dependency is called only once per request.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: How do you add dependencies to all routes in a router?</summary>
  <div class="tp-qa-answer"><p>Pass the dependencies parameter to APIRouter: router = APIRouter(dependencies=[Depends(verify_api_key)]). This applies to all routes in that router. You can also use app = FastAPI(dependencies=[...]) for app-wide dependencies applied to every endpoint.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: When would you use a class-based dependency?</summary>
  <div class="tp-qa-answer"><p>When you need configuration (constructor parameters), state (internal counters/caches), or encapsulation of complex logic. Class dependencies are initialized once (singleton per app) or per request. Use __call__ method for the dependency to be invoked per request.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: How does FastAPI cache dependencies within a request?</summary>
  <div class="tp-qa-answer"><p>FastAPI uses a dependency cache per request. If multiple endpoints or sub-dependencies depend on the same function, it is called only once. The cached result is reused throughout that request. This prevents duplicate database connections or duplicate user lookups.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: Can a dependency modify the request or response?</summary>
  <div class="tp-qa-answer"><p>Yes. Dependencies can read request headers, cookies, or path parameters and raise HTTPException to reject requests. For response modification, use middleware instead. Dependencies are primarily for providing computed values (user objects, db sessions) and enforcing preconditions (auth, rate limiting).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: What happens if a dependency raises an exception?</summary>
  <div class="tp-qa-answer"><p>If a dependency raises HTTPException, FastAPI returns that error response immediately without executing the endpoint. If it raises any other exception, FastAPI returns a 500 Internal Server Error (or custom exception handler). Dependencies are perfect for auth validation — raise 401/403 and the endpoint never executes.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s04-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How do you create a dependency that requires parameters?</summary>
  <div class="tp-qa-answer"><p>Use a factory function that takes parameters and returns a dependency callable. Example: def require_role(role: str): async def check_role(user=Depends(get_current_user)): ...; return check_role. Then use: Depends(require_role("admin")). The factory is evaluated at definition time, not per request.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What function declares a dependency in FastAPI?

a) Inject()
b) Depends()
c) Dependency()
d) Provide()

<details class="tp-qa-card" data-qid="fastapi-s04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Depends()</strong></p></div></details>

**Q2**: Which dependency pattern manages resource cleanup?

a) Class-based
b) Generator (yield)
c) Sub-dependency
d) Global dependency

<details class="tp-qa-card" data-qid="fastapi-s04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Generator (yield)</strong></p></div></details>

**Q3**: How do you override a dependency in tests?

a) app.override()
b) app.dependency_overrides[func] = mock
c) app.test_mode = True
d) mock_dependency()

<details class="tp-qa-card" data-qid="fastapi-s04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) app.dependency_overrides[func] = mock</strong></p></div></details>

**Q4**: Are dependencies cached within a single request?

a) Yes, same dependency called once
b) No, called every time
c) Only for async dependencies
d) Only for generator dependencies

<details class="tp-qa-card" data-qid="fastapi-s04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Yes, same dependency called once</strong></p></div></details>

**Q5**: What applies a dependency to all routes in a router?

a) @router.use()
b) APIRouter(dependencies=[...])
c) @router.middleware()
d) Router.dependencies()

<details class="tp-qa-card" data-qid="fastapi-s04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) APIRouter(dependencies=[...])</strong></p></div></details>

## Exercises

**Easy** — Create a dependency that extracts and validates a pagination parameters (skip, limit, sort) from query parameters. Use it in three different endpoints.

**Medium** — Implement a generator dependency for SQLAlchemy database sessions. Create endpoints that use the session and verify automatic cleanup on both success and exceptions.

**Medium** — Build a role-based auth system with dependencies: get_current_user (extracts user from JWT), require_role("admin") (factory that checks role), and get_organization (extracts org from user context). Chain them in an admin endpoint.

**Hard** — Create a full DI system for a multi-tenant SaaS API: TenantResolver dependency (extracts tenant from subdomain/header), DatabaseSession (returns tenant-specific DB connection), RateLimiter (per-tenant rate limits). Test with dependency overrides.

**Hard** — Implement a caching dependency: Cache(ttl=300) that checks Redis before executing the endpoint, and cache the response after. Use generator pattern for the cache connection lifecycle. Test with mock Redis.

---

## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of Dependency Injection — Reusable Components and FastAPI DI System in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates Dependency Injection — Reusable Components and FastAPI DI System.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding Dependency Injection — Reusable Components and FastAPI DI System. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on Dependency Injection — Reusable Components and FastAPI DI System from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare Dependency Injection — Reusable Components and FastAPI DI System with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on Dependency Injection — Reusable Components and FastAPI DI System.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does Dependency Injection — Reusable Components and FastAPI DI System behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of Dependency Injection — Reusable Components and FastAPI DI System run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of Dependency Injection — Reusable Components and FastAPI DI System that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name Dependency Injection — Reusable Components and FastAPI DI System explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using Dependency Injection — Reusable Components and FastAPI DI System").
- Add a bullet describing a project that applies Dependency Injection — Reusable Components and FastAPI DI System to real data, with numbers.
- Mention the tools and libraries you used alongside Dependency Injection — Reusable Components and FastAPI DI System (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of Dependency Injection — Reusable Components and FastAPI DI System and one real-world analogy.
- Prepare one STAR story about debugging a Dependency Injection — Reusable Components and FastAPI DI System-related production issue.
- Review complexity and edge cases for the classic Dependency Injection — Reusable Components and FastAPI DI System interview problem.
- Have questions ready: how does the team apply Dependency Injection — Reusable Components and FastAPI DI System in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** Dependency Injection — Reusable Components and FastAPI DI System builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for Dependency Injection — Reusable Components and FastAPI DI System before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for Dependency Injection — Reusable Components and FastAPI DI System is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Dependency Injection — Reusable Components and FastAPI DI System in production. — **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the Dependency Injection — Reusable Components and FastAPI DI System chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers Dependency Injection — Reusable Components and FastAPI DI System is Chapter ___ of this module. — Answer: check the module's table of contents.
2. The time complexity of the standard approach to Dependency Injection — Reusable Components and FastAPI DI System is ___. — Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing Dependency Injection — Reusable Components and FastAPI DI System is ___. — Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug Dependency Injection — Reusable Components and FastAPI DI System issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to Dependency Injection — Reusable Components and FastAPI DI System in the next chapter is ___. — Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving Dependency Injection — Reusable Components and FastAPI DI System that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of Dependency Injection — Reusable Components and FastAPI DI System is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain Dependency Injection — Reusable Components and FastAPI DI System in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for Dependency Injection — Reusable Components and FastAPI DI System and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of Dependency Injection — Reusable Components and FastAPI DI System on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain Dependency Injection — Reusable Components and FastAPI DI System to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of Dependency Injection — Reusable Components and FastAPI DI System from memory before opening the chapter — active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered Dependency Injection — Reusable Components and FastAPI DI System when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining Dependency Injection — Reusable Components and FastAPI DI System twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own Dependency Injection — Reusable Components and FastAPI DI System snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of Dependency Injection — Reusable Components and FastAPI DI System listed in the Chapter at a Glance table.
- **Story**: link Dependency Injection — Reusable Components and FastAPI DI System to a familiar story — the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of Dependency Injection — Reusable Components and FastAPI DI System by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain Dependency Injection — Reusable Components and FastAPI DI System to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of Dependency Injection — Reusable Components and FastAPI DI System
- The classic textbook chapter on Dependency Injection — Reusable Components and FastAPI DI System (check the Research References below)
- Two blog posts from engineers who debugged real Dependency Injection — Reusable Components and FastAPI DI System problems in production
- The repository of the open-source project that implements Dependency Injection — Reusable Components and FastAPI DI System

## Related Topics

- The previous chapter in this module (see table of contents) — foundational for Dependency Injection — Reusable Components and FastAPI DI System
- The next chapter (see Next Topic below) — builds on Dependency Injection — Reusable Components and FastAPI DI System
- The system design chapters in Module 07 — how Dependency Injection — Reusable Components and FastAPI DI System fits into production architectures
- The interview preparation module — how Dependency Injection — Reusable Components and FastAPI DI System is asked in screening rounds
- The capstone project — where Dependency Injection — Reusable Components and FastAPI DI System is applied end-to-end

## FAQs

1. **Do I need to memorize all of Dependency Injection — Reusable Components and FastAPI DI System, or understand the big picture?** — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is Dependency Injection — Reusable Components and FastAPI DI System asked in interviews?** — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- Dependency Injection — Reusable Components and FastAPI DI System is a core requirement for the rest of this module — do not skip the examples.
- Always analyze complexity (time and space) when working with Dependency Injection — Reusable Components and FastAPI DI System.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- Dependency Injection — Reusable Components and FastAPI DI System emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.
- The tools used for Dependency Injection — Reusable Components and FastAPI DI System today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about Dependency Injection — Reusable Components and FastAPI DI System — it shows genuine interest, not just cramming.
- The library/tooling ecosystem around Dependency Injection — Reusable Components and FastAPI DI System changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing Dependency Injection — Reusable Components and FastAPI DI System.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- Dependency Injection — Reusable Components and FastAPI DI System appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding Dependency Injection — Reusable Components and FastAPI DI System helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs.
- In production ML, the Dependency Injection — Reusable Components and FastAPI DI System concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, Dependency Injection — Reusable Components and FastAPI DI System skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply Dependency Injection — Reusable Components and FastAPI DI System to a dataset of 10 million records? — Batching and vectorization.

## Analogies

- **Dependency Injection — Reusable Components and FastAPI DI System is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm — build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the Dependency Injection — Reusable Components and FastAPI DI System skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="05fastapibackend-04dependencyinjection-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What function declares a dependency in FastAPI?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Depends()</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="05fastapibackend-04dependencyinjection-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which dependency pattern manages resource cleanup?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Generator (yield)</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="05fastapibackend-04dependencyinjection-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    How do you override a dependency in tests?
  </summary>
  <div class="tp-qa-answer">
    <p>b) app.dependency_overrides[func] = mock</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="05fastapibackend-04dependencyinjection-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Are dependencies cached within a single request?
  </summary>
  <div class="tp-qa-answer">
    <p>a) Yes, same dependency called once</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="05fastapibackend-04dependencyinjection-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What applies a dependency to all routes in a router?
  </summary>
  <div class="tp-qa-answer">
    <p>b) APIRouter(dependencies=[...])</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for Dependency Injection — Reusable Components and FastAPI DI System (linked in Further Reading)
- The classic paper or textbook chapter introducing Dependency Injection — Reusable Components and FastAPI DI System (see References below)
- The standard library reference for Dependency Injection — Reusable Components and FastAPI DI System-related functions
- Engineering blog posts from companies running Dependency Injection — Reusable Components and FastAPI DI System in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of Dependency Injection — Reusable Components and FastAPI DI System code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on Dependency Injection — Reusable Components and FastAPI DI System

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in Dependency Injection — Reusable Components and FastAPI DI System code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes — most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the Dependency Injection — Reusable Components and FastAPI DI System example code.

## Mock Interview Section

**Round 1 — Screening (15 min)**
- Explain Dependency Injection — Reusable Components and FastAPI DI System in 60 seconds.
- Write a minimal working example of Dependency Injection — Reusable Components and FastAPI DI System.
- What is the complexity of your example?

**Round 2 — Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 — Behavioral + System (30 min)**
- Tell me about a time you debugged a Dependency Injection — Reusable Components and FastAPI DI System problem in a project.
- How would you design a system where Dependency Injection — Reusable Components and FastAPI DI System is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for Dependency Injection — Reusable Components and FastAPI DI System.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core Dependency Injection — Reusable Components and FastAPI DI System logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain Dependency Injection — Reusable Components and FastAPI DI System without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses Dependency Injection — Reusable Components and FastAPI DI System daily in their data pipeline — the chapter's examples mirror their code.
- **E-commerce**: Dependency Injection — Reusable Components and FastAPI DI System patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: Dependency Injection — Reusable Components and FastAPI DI System principles apply to transaction validation and fraud detection flows.
- **ML platform**: Dependency Injection — Reusable Components and FastAPI DI System shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect Dependency Injection — Reusable Components and FastAPI DI System to the business outcome, not just the code.

## Next Topic

[Authentication and Authorization — JWT, OAuth2, and RBAC](05-authentication-and-authz.md)

## Limitations

- Dependency Injection — Reusable Components and FastAPI DI System, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of Dependency Injection — Reusable Components and FastAPI DI System depends on input size and distribution — always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
