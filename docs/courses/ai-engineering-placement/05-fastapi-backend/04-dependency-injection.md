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

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/05-fastapi-backend/04-dependency-injection/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/05-fastapi-backend/04-dependency-injection/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/05-fastapi-backend/04-dependency-injection/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/05-fastapi-backend/04-dependency-injection/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/05-fastapi-backend/04-dependency-injection/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/05-fastapi-backend/04-dependency-injection/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

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
# Without DI — hard to test, tightly coupled
def get_user(user_id: int):
    db = Database()  # Created inside — cannot mock
    return db.query("SELECT * FROM users WHERE id = ?", user_id)

# With DI — dependencies injected
def get_user(user_id: int, db: Database = Depends(get_db)):
    return db.query("SELECT * FROM users WHERE id = ?", user_id)
# db is injected — can be replaced with mock in tests
```

**IoC principle**: Instead of components creating their dependencies, an external injector (FastAPI's DI system) provides them. This inverts the control flow.

## 4.2 FastAPI Depends

The `Depends()` function declares a dependency in a path operation.

```python
from fastapi import FastAPI, Depends, Header, HTTPException
from typing import Optional

app = FastAPI()

# Simple dependency — a callable
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

# Dependency as a function with its own dependencies
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

# Class with __call__ — instance can be used as dependency
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

# Generator dependency — yields the resource, cleans up after
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
# After response, db.close() is called automatically

# Multiple resources
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

# Factory function that returns a dependency
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

# Create configured dependencies
small_pagination = get_pagination(default_limit=10, max_limit=50)
large_pagination = get_pagination(default_limit=100, max_limit=5000)

@app.get("/items")
async def list_items(pagination: dict = Depends(small_pagination)):
    return pagination

@app.get("/logs")
async def list_logs(pagination: dict = Depends(large_pagination)):
    return pagination

# Dependency with role-based access control
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

# Level 1: Database
def get_db():
    db = Database()
    try:
        yield db
    finally:
        db.close()

# Level 2: Current user (depends on db)
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

# Level 3: Admin user (depends on current user)
async def get_admin_user(
    user: dict = Depends(get_current_user)
):
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

# Endpoint — only needs the final dependency
@app.get("/admin/users")
async def admin_list_users(admin: dict = Depends(get_admin_user)):
    # admin comes from get_admin_user -> get_current_user -> get_db
    return {"admin": admin["name"], "users": [{"id": 1}]}

# Trace the dependency chain:
# /admin/users -> get_admin_user(Depends(get_current_user(Depends(get_db))))
```

**Dependency graph resolution**: FastAPI builds the dependency graph and calls each dependency in order. Results are cached within a request — if two dependencies both depend on `get_db`, it is called only once.

## 4.7 Global Dependencies

Apply dependencies to entire routers or the whole application.

```python
from fastapi import FastAPI, Depends, APIRouter, HTTPException, Header

app = FastAPI()

# Router-level dependencies
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

# App-level dependencies
app = FastAPI(dependencies=[Depends(add_request_id)])

async def add_request_id(request: Request, call_next):
    request_id = str(uuid.uuid4())
    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    return response

# Conditional dependencies
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

# Real dependency
async def get_db():
    db = RealDatabase()
    try:
        yield db
    finally:
        db.close()

@app.get("/users")
async def list_users(db = Depends(get_db)):
    return db.query("SELECT * FROM users")

# Test setup with override
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

# Isolated override using context
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

# Override with different return types
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
  <div class="tp-qa-answer"><p>The dependency function uses yield instead of return. Code before yield runs on request start (setup), the yielded value is injected into the endpoint, and code after yield runs after response is sent (cleanup). The finally block ensures cleanup even on exceptions. Perfect for database sessions where you need to close after each request.</p></div>
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

> **Next**: [Authentication and Authorization](05-authentication-and-authz.md)
