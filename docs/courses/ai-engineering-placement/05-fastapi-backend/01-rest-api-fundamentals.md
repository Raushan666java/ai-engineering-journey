<!-- Clear Language: Keep sentences under 50 words -->
# REST API Fundamentals — HTTP, Resources, and Design Principles


## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand REST architectural constraints and HTTP protocol fundamentals |
| LO2 | Design resource-oriented APIs with proper URL structure and naming conventions |
| LO3 | Implement HTTP methods (GET, POST, PUT, PATCH, DELETE) with correct status codes |
| LO4 | Handle request/response formats including JSON, headers, and content negotiation |
| LO5 | Apply pagination, filtering, sorting, and HATEOAS principles |
| LO6 | Implement API versioning, error handling, and documentation standards |


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | REST Constraints | Stateless, cacheable, uniform interface, layered system |
| 1.2 | HTTP Methods and Status Codes | CRUD mapping, 2xx/3xx/4xx/5xx semantics |
| 1.3 | URL Design | Nouns over verbs, plural resources, nesting |
| 1.4 | Request/Response Formats | JSON, content negotiation, headers |
| 1.5 | Pagination and Filtering | Cursor-based, offset, query parameters |
| 1.6 | Error Handling | Consistent error responses, problem details |
| 1.7 | API Versioning | URL, header, query strategies |
| 1.8 | Documentation | OpenAPI/Swagger, contracts |


## Chapter Roadmap

```mermaid
flowchart LR
    A[REST Constraints] --> B[HTTP Methods]
    B --> C[URL Design]
    C --> D[JSON Formats]
    D --> E[Pagination]
    E --> F[Error Handling]
    F --> G[Versioning]
    G --> H[OpenAPI Docs]
```text


## Introduction

REST APIs are the backbone of every AI engineering system — from serving model predictions to orchestrating multi-service ML pipelines. Whether you're building a FastAPI endpoint for real-time inference or integrating with third-party AI services, understanding HTTP semantics, resource design, and error handling is non-negotiable. This chapter gives you the principles and patterns to design APIs that are scalable, maintainable, and developer-friendly.


## Prerequisites

- Basic Python knowledge (variables, functions, classes)
- Familiarity with HTTP concepts (GET, POST, status codes)
- Terminal/command line usage
- Reference: Module 04 (Python Fundamentals) for syntax review


## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory


### 1.1 REST Constraints

REST (Representational State Transfer) defines six architectural constraints that guide API design.

**Uniform Interface**: Resources are identified in requests, manipulated through representations, self-descriptive messages, and HATEOAS (hypermedia as the engine of application state).

**Stateless**: Each request contains all information needed to process it. No client context stored on the server between requests. Session state is kept client-side.

**Cacheable**: Responses must define themselves as cacheable or not. Caching improves performance and reduces server load.

**Client-Server**: Separation of concerns — clients handle UI, servers handle data storage and business logic.

**Layered System**: Architecture can have multiple layers (gateway, load balancer, API, database). Each layer only knows about the immediate layer.

**Code on Demand** (optional): Servers can extend client functionality by transferring executable code.



## Examples

```python

## Stateless request example — all context in the request
import requests


## Each request carries authentication and all necessary data
response = requests.get(
    "https://api.example.com/users/42",
    headers={
        "Authorization": "Bearer eyJhbGci...",
        "Accept": "application/json"
    }
)

## Server does not need to remember previous interactions
```text



## Overview

### 1.2 HTTP Methods and Status Codes

Every REST API maps CRUD operations to HTTP methods.

| Method | CRUD | Idempotent | Safe | Body |
|--------|------|------------|------|------|
| GET | Read | Yes | Yes | No |
| POST | Create | No | No | Yes |
| PUT | Replace | Yes | No | Yes |
| PATCH | Partial Update | No | No | Yes |
| DELETE | Delete | Yes | No | No |

**Status code categories**:

| Range | Category | Examples |
|-------|----------|---------|
| 2xx | Success | 200 OK, 201 Created, 204 No Content |
| 3xx | Redirection | 301 Moved, 304 Not Modified |
| 4xx | Client Error | 400 Bad Request, 401 Unauthorized, 404 Not Found, 409 Conflict, 422 Validation, 429 Too Many |
| 5xx | Server Error | 500 Internal, 502 Bad Gateway, 503 Service Unavailable |

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: str

users_db = {}

@app.post("/users", status_code=201)
def create_user(user: UserCreate):
    user_id = len(users_db) + 1
    users_db[user_id] = user.model_dump()
    return {"id": user_id, **user.model_dump()}

@app.get("/users/{user_id}")
def get_user(user_id: int):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    return {"id": user_id, **users_db[user_id]}

@app.delete("/users/{user_id}", status_code=204)
def delete_user(user_id: int):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    del users_db[user_id]
```text

**Best practices**: Always use the correct status code. Never return 200 for errors. Use 201 for resource creation. Use 204 for successful deletions. Use 422 for validation errors and 409 for conflicts.


### 1.3 URL Design

REST APIs use nouns (resources) not verbs (actions) in URLs.

```mermaid
flowchart LR
    A[/users] --> B[GET: List users]
    A --> C[POST: Create user]
    A --> D[/users/42]
    D --> E[GET: Get user]
    D --> F[PUT: Replace user]
    D --> G[PATCH: Partial update]
    D --> H[DELETE: Remove user]
    D --> I[/users/42/orders]
```text

**URL conventions**:

```python

## Good — plural nouns, nested resources
GET    /users                    # List users
GET    /users/42                 # Get user 42
POST   /users                    # Create user
PUT    /users/42                 # Replace user 42
PATCH  /users/42                 # Partial update
DELETE /users/42                 # Delete user 42
GET    /users/42/orders          # List user's orders
GET    /users/42/orders/5        # Get order 5 for user 42


## Bad — verbs in URL, inconsistent casing
GET    /getUser                  # Verb in URL
POST   /createUser               # Verb
GET    /UserList                 # PascalCase
POST   /api/v1/get_user_profile  # Snake_case + verb
```text

**Naming rules**:
- Plural nouns (`/users` not `/user`)
- Lowercase with hyphens (`/order-items` not `/orderItems`)
- No file extensions (`.json`, `.php`)
- Use query parameters for filtering, sorting
- Nest resources for relationships (max 3 levels)



## Overview

### 1.4 Request/Response Formats

JSON is the standard data format for REST APIs.

```python
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

app = FastAPI()


## Content negotiation — client specifies desired format
@app.get("/users/{user_id}")
async def get_user(user_id: int, request: Request):
    accept = request.headers.get("accept", "application/json")

    # Server-driven content negotiation
    if "application/xml" in accept:
        return JSONResponse(
            content={"error": "XML format not supported"},
            status_code=406
        )

    user = {"id": user_id, "name": "Alice", "email": "alice@example.com"}
    return JSONResponse(content=user)


## Standard headers for REST APIs

## Request:  Accept: application/json

##           Authorization: Bearer <token>

##           Content-Type: application/json

##           If-None-Match: "abc123"


## Response: Content-Type: application/json

##           ETag: "abc123"

##           Cache-Control: private, max-age=60

##           X-Request-ID: req_abc123
```text

**Common headers**:

| Header | Direction | Purpose |
|--------|-----------|---------|
| Content-Type | Request/Response | Media type of body |
| Accept | Request | Acceptable response media types |
| Authorization | Request | Authentication credentials |
| Cache-Control | Response | Caching directives |
| ETag | Response | Entity tag for caching |
| X-Request-ID | Both | Correlation ID for debugging |
| RateLimit-Remaining | Response | API rate limit info |



## Overview

### 1.5 Pagination and Filtering

REST APIs must handle large collections efficiently.

**Cursor-based pagination** (recommended):

```python
from typing import Optional

@app.get("/users")
def list_users(
    cursor: Optional[str] = None,
    limit: int = 20,
    sort: str = "created_at",
    order: str = "desc"
):
    query = "SELECT * FROM users"

    if cursor:
        decoded = decode_cursor(cursor)
        if order == "desc":
            query += f" WHERE created_at < '{decoded}'"
        else:
            query += f" WHERE created_at > '{decoded}'"

    query += f" ORDER BY {sort} {order} LIMIT {limit + 1}"
    results = db.execute(query)
    has_more = len(results) > limit

    return {
        "data": results[:limit],
        "pagination": {
            "next_cursor": encode_cursor(results[-1]["created_at"]) if has_more else None,
            "has_more": has_more,
            "limit": limit
        }
    }
```text

**Offset-based pagination** (simpler, but inconsistent under writes):

```python
@app.get("/products")
def list_products(offset: int = 0, limit: int = 20):
    results = db.execute(
        "SELECT * FROM products ORDER BY id LIMIT ? OFFSET ?",
        (limit, offset)
    )
    total = db.execute("SELECT COUNT(*) FROM products")[0][0]
    return {
        "data": results,
        "pagination": {
            "offset": offset,
            "limit": limit,
            "total": total,
            "next_offset": offset + limit if offset + limit < total else None
        }
    }
```text

**Filtering and sorting**:

```python
@app.get("/orders")
def list_orders(
    status: Optional[str] = None,
    min_total: Optional[float] = None,
    sort: str = "-created_at"  # - prefix for desc
):
    query = "SELECT * FROM orders WHERE 1=1"
    params = []

    if status:
        query += " AND status = ?"
        params.append(status)
    if min_total:
        query += " AND total >= ?"
        params.append(min_total)

    order_col = sort.lstrip("-")
    order_dir = "DESC" if sort.startswith("-") else "ASC"
    query += f" ORDER BY {order_col} {order_dir}"

    return db.execute(query, params)
```text


### 1.6 Error Handling

Consistent error responses are crucial for API usability.

```python
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse

app = FastAPI()


## RFC 7807 Problem Details format
class ProblemDetail(Exception):
    def __init__(self, status: int, title: str, detail: str, type: str = "about:blank"):
        self.status = status
        self.title = title
        self.detail = detail
        self.type = type
        self.instance = None

@app.exception_handler(ProblemDetail)
async def problem_detail_handler(request: Request, exc: ProblemDetail):
    return JSONResponse(
        status_code=exc.status,
        content={
            "type": exc.type,
            "title": exc.title,
            "status": exc.status,
            "detail": exc.detail,
            "instance": str(request.url)
        }
    )


## Usage
@app.get("/users/{user_id}")
def get_user(user_id: int):
    if user_id <= 0:
        raise ProblemDetail(400, "Bad Request", "User ID must be positive")
    user = find_user(user_id)
    if user is None:
        raise ProblemDetail(404, "Not Found", f"User {user_id} not found")
    return user
```text

**Error response structure**:

```json
{
  "type": "https://api.example.com/errors/validation-error",
  "title": "Validation Error",
  "status": 422,
  "detail": "The request body contains invalid fields",
  "instance": "/api/v1/users",
  "errors": [
    {
      "field": "email",
      "message": "Must be a valid email address",
      "code": "invalid_format"
    }
  ]
}
```text



## Overview

### 1.7 API Versioning

APIs evolve over time. Versioning prevents breaking changes for existing clients.

| Strategy | Example | Pros | Cons |
|----------|---------|------|------|
| URL Path | `/api/v1/users` | Explicit, easy to route | URL pollution |
| Header | `Accept: application/vnd.myapp.v1+json` | Clean URLs | Hard to test |
| Query | `/api/users?version=1` | Simple | Cache issues |
| Content Negotiation | `Accept: application/json;version=1` | RESTful | Complex clients |

```python
from fastapi import FastAPI, APIRouter


## URL path versioning
v1_router = APIRouter(prefix="/api/v1")
v2_router = APIRouter(prefix="/api/v2")

@v1_router.get("/users")
def list_users_v1():
    return [{"id": 1, "name": "Alice", "email": "alice@example.com"}]

@v2_router.get("/users")
def list_users_v2():
    return [{"id": 1, "name": "Alice", "email": "alice@example.com", "phone": "+1234567890"}]

app = FastAPI()
app.include_router(v1_router)
app.include_router(v2_router)
```text

**Deprecation strategy**: Support at least two versions simultaneously. Return `Sunset` and `Deprecation` headers on old versions with migration timeline.



## Overview

### 1.8 Documentation with OpenAPI

OpenAPI (formerly Swagger) is the industry standard for REST API documentation.

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="Users API",
    description="RESTful API for user management",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

class UserCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="User's full name")
    email: str = Field(..., description="User's email address", examples=["user@example.com"])
    age: int = Field(ge=0, le=150, default=0)

@app.post(
    "/users",
    summary="Create a new user",
    description="Creates a user with the provided information and returns the created resource",
    response_model=UserCreate,
    status_code=201,
    tags=["Users"]
)
def create_user(user: UserCreate):
    return user
```text

FastAPI auto-generates OpenAPI specs from Python type hints. Every endpoint appears in `/docs` (Swagger UI) and `/redoc` (ReDoc) automatically.

---


## Visual Analogy

Think of a REST API like a **restaurant menu**:

- **API** = The menu itself — it lists everything you can order and how to order it. The kitchen (server) is hidden behind the menu.
- **Endpoints** = Menu items — `/users` is the "User Salad", `/orders/42` is "Order #42 Special". Each dish is a resource you can interact with.
- **HTTP methods** = How you order — GET means "show me the menu" (read), POST means "I want to order this new dish" (create), PUT means "replace my entire order", PATCH means "just change the side dish", DELETE means "cancel that order".
- **Status codes** = The waiter's response — 200 "Here's your food", 201 "New dish coming right up", 404 "We don't have that", 500 "The kitchen caught fire".
- **Stateless** = No reservations needed — each order is self-contained. You don't need to be a regular; the waiter treats every order the same.

This helps because REST is about **predictability** — just like a restaurant menu lets you know exactly what to expect, a well-designed API lets any client know exactly how to interact with your service without surprises.


## TypeScript Parallel

```typescript
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    nextCursor: string | null;
    hasMore: boolean;
    limit: number;
  };
}

class ApiClient {
  constructor(private baseUrl: string) {}

  async get<T>(path: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);
    if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    const res = await fetch(url.toString());
    if (!res.ok) throw new ApiError(res.status, await res.json());
    return res.json();
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new ApiError(res.status, await res.json());
    return res.json();
  }
}

class ApiError extends Error {
  constructor(public status: number, public body: any) {
    super(`API Error ${status}: ${body?.detail || body?.message}`);
  }
}
```text

---


## Summary

- REST defines six constraints: uniform interface, stateless, cacheable, client-server, layered system, code on demand
- HTTP methods map to CRUD: GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove)
- Status codes communicate results: 2xx success, 3xx redirect, 4xx client error, 5xx server error
- URLs use plural nouns, lowercase with hyphens, and nest resources for relationships
- Standard REST APIs use JSON for request/response bodies with proper content type headers
- Cursor-based pagination is preferred over offset-based for consistency under data changes
- Consistent error responses using RFC 7807 Problem Details improve client developer experience
- API versioning via URL path is the most common and explicit strategy for public APIs
- OpenAPI/Swagger provides machine-readable API documentation with auto-generated client SDKs
- FastAPI leverages Python type hints to auto-generate OpenAPI specs without extra effort


## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Resource naming | Plural nouns (`/users`) | Singular or verbs (`/getUser`) |
| Status codes | Correct codes (201 for create, 204 for delete) | Always 200 OK with error in body |
| Pagination | Cursor-based for consistency | Offset-based for real-time data |
| Error format | Consistent JSON structure | Inconsistent error shapes |
| Versioning | URL path (`/api/v1/`) | No versioning at all |
| Documentation | Auto-generated OpenAPI | Outdated docs in wiki |
| Filtering | Query parameters | POST for search queries |


## Interview Q&A

<details class="tp-qa-card" data-qid="fastapi-s01-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: What are the six constraints of REST?</summary>
  <div class="tp-qa-answer"><p>Uniform interface, stateless, cacheable, client-server, layered system, and optional code on demand. These constraints ensure scalability, modifiability, and visibility in distributed systems.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: What is the difference between PUT and PATCH?</summary>
  <div class="tp-qa-answer"><p>PUT replaces the entire resource — omitted fields are cleared. PATCH applies partial updates only to specified fields. PUT is idempotent; PATCH may not be. Use PATCH for partial updates to avoid accidentally clearing unset fields.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: How does REST achieve statelessness?</summary>
  <div class="tp-qa-answer"><p>Each request contains all information needed to process it — authentication, context, and parameters. Server does not store client session state. Session state is kept client-side (e.g., JWT tokens, cookies). This enables horizontal scaling since any server can handle any request.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: What status code should a POST request return on success?</summary>
  <div class="tp-qa-answer"><p>201 Created for resource creation. Include the Location header with the URL of the newly created resource. Use 200 OK only if the POST does not create a resource (e.g., search). Use 202 Accepted for async operations that will complete later.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: Why is cursor-based pagination better than offset-based?</summary>
  <div class="tp-qa-answer"><p>Cursor-based pagination is stable under data changes — adding or removing items between pages does not affect pagination results. Offset-based can skip or duplicate items when data changes between requests. Cursor also performs better on large datasets since the database can use index-based lookups instead of scanning and skipping rows.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: What is HATEOAS and when should you use it?</summary>
  <div class="tp-qa-answer"><p>HATEOAS (Hypermedia as the Engine of Application State) means API responses include links to related operations, allowing clients to navigate the API dynamically. Example: GET /users/42 returns the user data plus links to their orders and profile edit. Valuable for public APIs with diverse clients, but adds payload size. Not necessary for internal microservices.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: How do you handle concurrent updates in REST APIs?</summary>
  <div class="tp-qa-answer"><p>Use optimistic locking with ETags. Client includes If-Match header with the ETag from the last GET. Server checks ETag before update — if mismatch, returns 412 Precondition Failed. Client must re-fetch and retry. This prevents lost updates without requiring locks.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: What are the best practices for API versioning?</summary>
  <div class="tp-qa-answer"><p>Use URL path versioning (/api/v1/) for public APIs — it is explicit, easy to route, and cache-friendly. Support at least two versions simultaneously. Provide a migration window of 6+ months. Use Sunset and Deprecation HTTP headers to communicate timelines. Never break existing clients without warning.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: What is content negotiation in REST?</summary>
  <div class="tp-qa-answer"><p>Content negotiation allows client and server to agree on the format of data exchanged. Client sends Accept header (e.g., Accept: application/json) and server responds in the format it supports. If server cannot fulfill the requested format, it returns 406 Not Acceptable.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s01-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: What makes an API truly RESTful vs REST-like?</summary>
  <div class="tp-qa-answer"><p>Truly RESTful APIs satisfy all six constraints including HATEOAS. Most "REST" APIs are actually REST-like — they use HTTP methods and JSON but omit hypermedia. For practical purposes, REST-like APIs that follow resource naming, proper HTTP methods, and status codes are acceptable. Full HATEOAS adds complexity that most clients do not utilize.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>


## Chapter Quiz

**Q1**: Which HTTP method is idempotent and safe?

a) POST
b) PATCH
c) GET
d) DELETE

<details class="tp-qa-card" data-qid="fastapi-s01-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) GET</strong></p></div></details>

**Q2**: What status code indicates a resource was successfully created?

a) 200 OK
b) 201 Created
c) 202 Accepted
d) 204 No Content

<details class="tp-qa-card" data-qid="fastapi-s01-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 201 Created</strong></p></div></details>

**Q3**: Which pagination method is most stable under data changes?

a) Offset-based
b) Page-based
c) Cursor-based
d) Limit-based

<details class="tp-qa-card" data-qid="fastapi-s01-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Cursor-based</strong></p></div></details>

**Q4**: What should a REST error response include?

a) Stack trace
b) Consistent structured error
c) Server internal details
d) Raw exception message

<details class="tp-qa-card" data-qid="fastapi-s01-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Consistent structured error</strong></p></div></details>

**Q5**: Which is a REST constraint?

a) Server-side sessions
b) Stateful communication
c) Uniform interface
d) Client-side rendering

<details class="tp-qa-card" data-qid="fastapi-s01-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Uniform interface</strong></p></div></details>


### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding fastapi backend is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to fastapi backend.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: fastapi backend concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In fastapi backend, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]

## Exercises

**Easy** — Design REST endpoints for a library system with books, authors, and members. Define URL patterns, HTTP methods, and expected status codes for each operation.

**Medium** — Implement a FastAPI application with CRUD endpoints for a `Task` resource. Include proper status codes, validation, and error handling. Test with curl or httpx.

**Medium** — Add cursor-based pagination to a `GET /products` endpoint. Include filtering by category and sorting by price. Test with large datasets.

**Hard** — Build a complete REST API for an e-commerce platform with products, orders, and users. Implement HATEOAS links, ETag-based concurrency control, rate limiting headers, and RFC 7807 problem details for errors.

**Hard** — Design and implement an API versioning strategy. Create v1 and v2 of a `/users` endpoint where v2 adds phone number and removes deprecated fields. Implement deprecation headers and a 6-month migration simulation.

---


## Common Mistakes

1. Using verbs in URLs (`/getUser`) instead of plural nouns (`/users`) — REST resources are nouns, HTTP methods are the verbs
2. Returning 200 OK for error responses — always use appropriate 4xx/5xx status codes so clients can handle errors programmatically
3. Ignoring idempotency — POST is not idempotent, so retrying it creates duplicates; use PUT for idempotent operations
4. Using offset-based pagination for real-time data — offsets skip/duplicate items when data changes between requests; use cursor-based pagination
5. Missing content-type headers — always set `Content-Type: application/json` on requests and responses


## Revision Notes

- REST has 6 constraints: uniform interface, stateless, cacheable, client-server, layered system, code on demand
- HTTP methods map to CRUD: GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE (remove)
- Status codes: 2xx success, 3xx redirect, 4xx client error, 5xx server error
- URLs use plural nouns, lowercase with hyphens, max 3 levels of nesting
- Cursor-based pagination is stable under writes; offset-based is simpler but inconsistent
- RFC 7807 Problem Details provides a consistent error response structure
- API versioning via URL path (`/api/v1/`) is the most explicit and common strategy
- OpenAPI/Swagger auto-generates documentation from FastAPI type hints


## Summary

REST APIs define how distributed systems communicate through six architectural constraints. HTTP methods map directly to CRUD operations with specific idempotency and safety guarantees. Proper URL design uses plural nouns and consistent naming conventions. Status codes communicate results precisely — 201 for creation, 204 for deletion, 422 for validation errors. Pagination should use cursors for consistency, and errors should follow RFC 7807 Problem Details. FastAPI's type-hint-driven approach auto-generates OpenAPI documentation, making API design and documentation a single step.


## Placement Section


### Top 10 Interview Questions

#### Google Style
1. Design a REST API for a global ride-sharing service with millions of drivers and riders. How do you handle versioning, pagination, and rate limiting at scale?
2. Explain how HATEOAS works and why most production APIs choose not to implement it fully

#### Amazon Style
1. A client retries a failed POST request and creates duplicate records. How do you redesign the API to prevent this while maintaining backward compatibility?
2. Your API serves 50,000 RPS. How do you design the pagination, filtering, and sorting endpoints to handle this load without database bottlenecks?

#### Microsoft Style
1. Two teams are building microservices that share a user resource. How do you ensure API consistency and prevent breaking changes across teams?
2. Explain how you would implement API versioning with a deprecation strategy for a platform with 10,000 active API consumers

#### NVIDIA Style
1. An ML inference API needs to return streaming responses for long-running generation tasks. How do you design the HTTP interface for streaming while maintaining REST conventions?
2. A model serving API must handle requests ranging from 1KB text to 50MB image payloads. How do you design the endpoint structure and content negotiation?

#### AI Startup Style
1. You're building an API that wraps multiple LLM providers (OpenAI, Anthropic, local models). How do you design a unified REST interface that abstracts provider differences?
2. Your startup needs to ship a REST API MVP in one week. What do you implement first and what do you deliberately skip?


### Resume Tips
- List "REST API Design" under Technical Skills alongside FastAPI, OpenAPI, and HTTP protocol knowledge
- Project example: "Designed and implemented a RESTful API with 15 endpoints, cursor-based pagination, and RFC 7807 error handling using FastAPI"
- Mention API-specific metrics: "Achieved 99.9% uptime serving 10K RPS with proper status code handling and rate limiting"


### Interview Day Checklist
- [ ] Can explain all 6 REST constraints without notes
- [ ] Can draw the HTTP method ↔ CRUD mapping with idempotency/safety columns from memory
- [ ] Can design a REST API for a given domain (e.g., bookstore, task manager) in under 5 minutes
- [ ] Can explain the difference between PUT and PATCH with a concrete example
- [ ] Can describe cursor-based pagination implementation from memory

> **Next**: [FastAPI Basics](02-fastapi-basics.md)


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 45-60 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to FastAPI Backend fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master rest api fundamentals?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of rest api fundamentals helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding rest api fundamentals at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of rest api fundamentals like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply rest api fundamentals concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of rest api fundamentals?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply rest api fundamentals in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (18 minutes)
**Day 2**: Complete exercises and practice (18 minutes)
**Day 3**: Review flashcards and take quiz (9 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of FastAPI Backend?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering FastAPI Backend, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Inference Workflow

1. **Input Validation**: Sanitize and validate incoming requests
2. **Preprocessing**: Transform input to model-ready format
3. **Model Execution**: Run inference with optimized runtime
4. **Postprocessing**: Format model output for consumption
5. **Response**: Return results with metadata and timing
6. **Monitoring**: Log requests, responses, and latency

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
