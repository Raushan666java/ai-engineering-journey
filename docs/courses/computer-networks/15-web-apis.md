# Chapter 15: Web APIs and Application Protocols

## Learning Objectives

![Web APIs and Application Protocols](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch15-web-apis.png)

1. Design RESTful APIs with appropriate resource modeling, HTTP methods, and status codes.
2. Explain the WebSocket protocol and its use in real-time applications.
3. Compare gRPC and REST for different application requirements.
4. Describe GraphQL query structure and its advantages over REST for certain use cases.
5. Analyze the role of WebRTC in peer-to-peer communication.

## 15.1 RESTful APIs

Representational State Transfer (REST) is an architectural style for designing networked applications introduced by Roy Fielding in his 2000 PhD dissertation. RESTful APIs use HTTP methods as verbs operating on resources identified by URLs. The core idea: everything is a resource, and each resource has a unique identifier (URI) and a set of operations defined by HTTP methods.

### 15.1.1 REST Architectural Constraints (Six Constraints)

REST defines six architectural constraints. A system satisfying all six is "RESTful."

**Real-World Analogy: Library Catalog System**

A library catalog is a perfect analogy for REST:
- **Books/resources** are identifiable by ISBN (unique URI)
- **Library rules** define how you interact with books (uniform interface)
- **You browse** the catalog independently; the librarian doesn't remember your past visits (stateless)
- **Catalog cards** include location information (HATEOAS links)
- **Floors/departments** are independent layers (layered system)

**The Six Constraints:**

| # | Constraint | Description | Library Analogy |
|---|-----------|-------------|-----------------|
| 1 | Client-Server | Separation of concerns: UI (client) and data (server) evolve independently | Patron (client) and catalog (server) are separate systems |
| 2 | Stateless | Each request contains all information needed; no server-side session | Patron shows library card each visit; librarian doesn't remember past visits |
| 3 | Cacheable | Responses must declare cacheability to eliminate unnecessary requests | Popular books kept at front desk (cache) rather than fetched from storage each time |
| 4 | Uniform Interface | Resources identified in requests, representation manipulation through representations, self-descriptive messages, HATEOAS | All books have ISBNs, all follow same checkout procedure, catalog cards link to related sections |
| 5 | Layered System | Client cannot tell if directly connected to end server or intermediary | Patron talks to front desk, which retrieves from stacks → patron unaware of the layers |
| 6 | Code on Demand (optional) | Server can extend client functionality by transferring executable code (e.g., JavaScript) | Library provides a self-checkout kiosk app (code) to run at home |

**Numbered Steps: REST API Call Flow**

1. Client identifies the resource URI (e.g., `GET /books/9780141036144`)
2. Client sends an HTTP request with the method, headers, and optional body
3. Server validates the request (authentication, authorization, input validation)
4. Server processes the request: queries database, computes response
5. Server sets caching headers (`Cache-Control`, `ETag`)
6. Server returns HTTP status code, headers, and optional body
7. Client interprets the status code, caches the response if appropriate
8. Client may follow HATEOAS links for related operations

**Pseudocode: REST Request Lifecycle**

```
FUNCTION handleRequest(request):
  // Step 1: Parse HTTP method and URI
  method = request.method   // GET, POST, PUT, DELETE, PATCH
  uri = request.uri         // e.g., /users/42
  headers = request.headers
  body = request.body

  // Step 2: Authenticate
  IF NOT authenticate(headers.Authorization):
    RETURN 401 Unauthorized

  // Step 3: Authorize
  IF NOT authorize(method, uri, user):
    RETURN 403 Forbidden

  // Step 4: Validate input
  IF NOT validateRequest(method, uri, body):
    RETURN 400 Bad Request

  // Step 5: Check cache (for safe methods)
  IF method IN {GET, HEAD, OPTIONS}:
    etag = computeETag(uri)
    IF headers."If-None-Match" == etag:
      RETURN 304 Not Modified

  // Step 6: Process and generate response
  resource = executeQuery(method, uri, body)
  status = mapStatus(method, resource)
  responseBody = serialize(resource)

  // Step 7: Add HATEOAS links
  responseBody.links = generateLinks(uri, user)

  // Step 8: Set cache headers
  responseHeaders = {
    "Cache-Control": "max-age=3600, private",
    "ETag": computeETag(uri)
  }

  RETURN (status, responseHeaders, responseBody)
```

**Dry Run Trace Table: REST API Call Flow**

| Step | Client Action | Server State | Cache State | Status Code | Description |
|------|--------------|-------------|-------------|-------------|-------------|
| 1 | `GET /books` | Requests list | Empty | → | Client wants all books |
| 2 | Validate auth token | `user=alice, role=reader` | Empty | 200 | Token valid, authorized |
| 3 | Execute `SELECT * FROM books` | 1200 books found | Empty | → | Query returns results |
| 4 | Serialize as JSON | 1200 items | Empty | → | Format response |
| 5 | Add HATEOAS links | `rel: "self"` URLs per book | Empty | → | Self-referencing links |
| 6 | Set `Cache-Control: max-age=300` | Headers set | Populated | 200 OK | Cached for 5 min |
| 7 | Return response | Complete | `{data, cache: 300s}` | 200 | Client receives and caches |

**Complexity Analysis:**

| Metric | Complexity | Why |
|--------|-----------|-----|
| Request validation | O(1) | Fixed set of checks (auth token parse, URI pattern match) |
| Resource lookup (indexed) | O(log n) | Database index seek for primary key query |
| Resource lookup (unindexed) | O(n) | Full table scan → always index your API query fields |
| Response serialization | O(k) | k = number of fields in resource; linear in object size |
| HATEOAS link generation | O(1) | Fixed number of relationship links per resource type |
| Rate limit check | O(1) | Redis/Token bucket counter increment |

**Why REST complexity matters:** REST's simplicity (plain HTTP, stateless requests) means per-request overhead is O(1) for most operations. The bottleneck is nearly always the database query, not the REST framework itself. This predictability is why REST dominates web APIs.

### 15.1.2 Resource Modeling & URL Design

Resources are nouns representing entities. URL design maps the domain model to a navigable hierarchy.

**Real-World Analogy: Library Bookshelf Layout**

A library organizes books by:
- Collection (`/fiction`, `/non-fiction`)
- Author (`/fiction/fantasy/tolkien`, `/fiction/scifi/asimov`)
- Specific book (`/fiction/fantasy/tolkien/lotr`)

**REST URL Design Principles:**

| Principle | Good Example | Bad Example | Rationale |
|-----------|-------------|-------------|-----------|
| Nouns, not verbs | `GET /orders` | `GET /getOrders` | Verbs belong in HTTP methods |
| Plural nouns | `GET /users` | `GET /user` | Collections are plural |
| Hierarchical | `/users/42/orders` | `/orders?userId=42` | Reflects ownership |
| Consistent casing | `/order-items` | `/orderItems` or `/order_items` | Pick kebab-case and stay consistent |
| Filter via query | `GET /orders?status=active` | `GET /orders/status/active` | Filters are query params, not path segments |
| Version prefix | `/v1/users` | `/users?v=1` | URI versioning is most discoverable |

**Numbered Steps: Designing a Resource Hierarchy**

1. Identify domain entities: User, Order, Product, Category
2. Establish ownership relationships: User → Order → OrderItem, Category → Product
3. Map entities to URL paths reflecting ownership
4. Choose collection names (plural, lowercase, kebab-case)
5. Add query parameters for filtering, sorting, pagination
6. Add sub-resources for related entities
7. Design actions as sub-resources with POST

**Pseudocode: URL Router**

```
FUNCTION routeRequest(method, uri, body):
  pattern = "^(/v\d+)?/(?P<resource>\w+)(/(?P<id>\d+))?(/(?P<subresource>\w+))?(/(?P<subid>\d+))?"
  match = regexMatch(uri, pattern)

  IF NOT match:
    RETURN 404 Not Found

  resource = match.resource
  id = match.id
  subresource = match.subresource
  subid = match.subid

  // Route to handler based on resource + method
  handler = lookupHandler(resource, method)
  IF NOT handler:
    RETURN 405 Method Not Allowed

  RETURN handler(id, subresource, subid, body, uri.queryParams)
```

**A&D Table: URL Design Choices**

| Choice | Advantage | Disadvantage |
|--------|-----------|-------------|
| `/users/42` (path param) | Clean, bookmarkable, semantic | Fixed hierarchy, hard to compose |
| `?userId=42` (query param) | Flexible, composable | Less semantic, can get messy |
| `/v1/users` (URI version) | Most discoverable, cache-friendly | URL pollution, hard to maintain multiple versions |
| `Accept: version=2` (header) | Clean URLs, no pollution | Hidden from casual inspection, harder to test |
| `?version=2` (query param) | Simple to implement | Pollutes URLs, not cache-friendly |
| Plural (`/users`) | Semantic consistency | Slightly longer URIs |
| Singular (`/user`) | Shorter | Inconsistent with collection semantics |

### 15.1.3 HTTP Methods Deep Dive

HTTP methods (verbs) define the operation to perform on a resource.

**Real-World Analogy: Library Operations**

| HTTP Method | Library Operation | Description |
|-------------|-------------------|-------------|
| GET | Browse the shelves | Read book info; no changes |
| POST | Donate a new book | Create a new catalog entry |
| PUT | Replace a damaged book entirely | Full replacement of a resource |
| PATCH | Update a book's status to "checked out" | Partial modification |
| DELETE | Remove a book from circulation | Delete a resource |

**Method Semantics:**

**GET → Retrieve a resource**
- Safe: yes (no side effects)
- Idempotent: yes (repeating returns same result)
- Payload: body optional in request, body in response
- Cacheable: yes
- Status codes: 200 OK, 304 Not Modified, 404 Not Found, 400 Bad Request

```
GET /books/9780141036144 HTTP/1.1
Host: library.example.com
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 312
Cache-Control: max-age=3600
ETag: "abc123"

{"isbn":"9780141036144","title":"1984","author":"George Orwell","year":1949}
```

**POST → Create a resource or submit data**
- Safe: no (creates resources)
- Idempotent: no (multiple POSTs create multiple resources)
- Payload: body in request, body in response (created resource)
- Cacheable: no (responses to POST are not cacheable by default)
- Status codes: 201 Created, 200 OK, 400 Bad Request, 409 Conflict

```
POST /books HTTP/1.1
Host: library.example.com
Content-Type: application/json

{"isbn":"9780451524935","title":"1984","author":"George Orwell","year":1949}

HTTP/1.1 201 Created
Location: /books/9780451524935
Content-Type: application/json

{"isbn":"9780451524935","title":"1984","author":"George Orwell","year":1949,"id":"new-uuid-123"}
```

**PUT → Replace a resource entirely**
- Safe: no (modifies state)
- Idempotent: yes (same PUT N times = same state as 1 PUT)
- Payload: full resource body in request, body in response
- Cacheable: no
- Status codes: 200 OK, 201 Created (if new), 204 No Content, 400 Bad Request

```
PUT /books/9780451524935 HTTP/1.1
Host: library.example.com
Content-Type: application/json

{"isbn":"9780451524935","title":"Nineteen Eighty-Four","author":"George Orwell","year":1949}

HTTP/1.1 200 OK
ETag: "def456"
{"isbn":"9780451524935","title":"Nineteen Eighty-Four","author":"George Orwell","year":1949}
```

**PATCH → Partially update a resource**
- Safe: no (modifies state)
- Idempotent: no (by default; depends on patch format)
- Payload: partial resource body (or patch instructions) in request, body in response
- Cacheable: no
- Status codes: 200 OK, 204 No Content, 400 Bad Request, 422 Unprocessable Entity

```
PATCH /books/9780451524935 HTTP/1.1
Host: library.example.com
Content-Type: application/json-patch+json

[{"op":"replace","path":"/year","value":1950}]

HTTP/1.1 200 OK
ETag: "ghi789"
{"isbn":"9780451524935","title":"Nineteen Eighty-Four","author":"George Orwell","year":1950}
```

**DELETE → Remove a resource**
- Safe: no (destructive)
- Idempotent: yes (DELETE of deleted resource returns same status)
- Payload: no body in request, no body in response typically
- Cacheable: no
- Status codes: 204 No Content, 200 OK, 404 Not Found (if already deleted)

```
DELETE /books/9780451524935 HTTP/1.1
Host: library.example.com

HTTP/1.1 204 No Content
```

**Dry Run Trace Table: Method Behavior**

| Operation | Request | Database State Before | Database State After | Status |
|-----------|---------|----------------------|---------------------|--------|
| GET /books/1 | → | `{id:1, title:"A"}` | `{id:1, title:"A"}` | 200 OK |
| GET /books/1 (repeat) | → | `{id:1, title:"A"}` | `{id:1, title:"A"}` | 200 OK (same) |
| POST /books body={title:"B"} | `{title:"B"}` | 1 book (A) | 2 books (A, B) | 201 Created, new id |
| POST /books body={title:"B"}(repeat) | `{title:"B"}` | 2 books (A, B) | 3 books (A, B, B2) | 201 Created, different id |
| PUT /books/1 body={title:"C",...} | Full resource | `{id:1, title:"A"}` | `{id:1, title:"C"}` | 200 OK |
| PUT /books/1 (repeat, same body) | Same body | `{id:1, title:"C"}` | `{id:1, title:"C"}` | 200 OK (same state) |
| PATCH /books/1 `{"year":2000}` | Partial | `{id:1, title:"C", year:1950}` | `{id:1, title:"C", year:2000}` | 200 OK |
| PATCH /books/1 `{"year":2000}` (repeat) | Same patch | `{id:1, title:"C", year:2000}` | `{id:1, title:"C", year:2000}` | 200 OK (same because value same) |
| DELETE /books/1 | → | `{id:1, title:"C"}` | Empty | 204 No Content |
| DELETE /books/1 (repeat) | → | Empty | Empty | 404 Not Found |

**HTTP Methods Comparison Table:**

| Method | RFC | Safe | Idempotent | Cacheable | Request Body | Response Body | Use Case |
|--------|-----|------|-----------|-----------|-------------|--------------|----------|
| GET | RFC 7231 | Yes | Yes | Yes | Optional | Yes | Retrieve data |
| HEAD | RFC 7231 | Yes | Yes | Yes | No | No | Get headers only |
| POST | RFC 7231 | No | No | No | Yes | Yes | Create, submit, action |
| PUT | RFC 7231 | No | Yes | No | Yes | Optional | Full replacement |
| DELETE | RFC 7231 | No | Yes | No | Optional | Optional | Remove resource |
| PATCH | RFC 5789 | No | No | No | Yes | Optional | Partial update |
| OPTIONS | RFC 7231 | Yes | Yes | No | No | Yes | Get allowed methods |

### 15.1.4 HTTP Status Code Families

HTTP status codes are three-digit integers grouped into five families. The first digit indicates the response class.

**Real-World Analogy: Library Transaction Status**

| Family | Library Equivalent | Meaning |
|--------|-------------------|---------|
| 1xx | "One moment, processing..." | Informational, request received |
| 2xx | "Here's your book." | Success, operation completed |
| 3xx | "That book is now in the reference section." | Redirection, further action needed |
| 4xx | "You don't have a library card." | Client error, bad request |
| 5xx | "The catalog system is down." | Server error, backend failure |

**Status Code Family Table:**

| Family | Range | Category | Meaning | Example |
|--------|-------|----------|---------|---------|
| 1xx | 100â€“199 | Informational | Request received, continuing | 101 Switching Protocols |
| 2xx | 200â€“299 | Success | Action received, understood, accepted | 200 OK, 201 Created, 204 No Content |
| 3xx | 300â€“399 | Redirection | Further action needed | 301 Moved, 304 Not Modified |
| 4xx | 400â€“499 | Client Error | Request contains bad syntax or cannot be fulfilled | 404 Not Found, 401 Unauthorized |
| 5xx | 500â€“599 | Server Error | Server failed to fulfill a valid request | 500 Internal Server Error |

**Common Status Codes with Usage:**

| Code | Name | When to Use | Response Body |
|------|------|-------------|--------------|
| 200 | OK | GET, PUT, PATCH succeeded | Resource representation |
| 201 | Created | POST succeeded (new resource) | Resource + Location header |
| 202 | Accepted | Async operation accepted | Status URL or tracking ID |
| 204 | No Content | DELETE succeeded, or PUT with no body needed | Empty |
| 301 | Moved Permanently | Resource URL changed permanently | New URL in Location header |
| 304 | Not Modified | Conditional GET; resource unchanged | Empty |
| 400 | Bad Request | Malformed syntax, missing fields | Error details |
| 401 | Unauthorized | Authentication missing or failed | Auth challenge |
| 403 | Forbidden | Authenticated but not allowed | Error message |
| 404 | Not Found | Resource does not exist | Error message |
| 405 | Method Not Allowed | Wrong HTTP method for resource | Allow header |
| 409 | Conflict | Resource state conflict (e.g., duplicate) | Conflict details |
| 415 | Unsupported Media Type | Wrong Content-Type | Expected type |
| 422 | Unprocessable Entity | Validation failed | Validation errors |
| 429 | Too Many Requests | Rate limit exceeded | Retry-After header |
| 500 | Internal Server Error | Unexpected server failure | Error reference |
| 502 | Bad Gateway | Upstream service failed | Error details |
| 503 | Service Unavailable | Temporary overload/maintenance | Retry-After header |

### 15.1.5 CRUD with HTTP Mapping

CRUD (Create, Read, Update, Delete) maps naturally to HTTP methods.

| CRUD Operation | HTTP Method | URL Pattern | Request Body | Response | Status Code |
|---------------|-------------|-------------|-------------|----------|-------------|
| Create | POST | `/resources` | Resource data (no id) | Created resource with id | 201 Created |
| Read (all) | GET | `/resources` | → | Array of resources | 200 OK |
| Read (one) | GET | `/resources/{id}` | → | Single resource | 200 OK |
| Update (full) | PUT | `/resources/{id}` | Full resource data | Updated resource | 200 OK |
| Update (partial) | PATCH | `/resources/{id}` | Partial data/patch ops | Updated resource | 200 OK |
| Delete | DELETE | `/resources/{id}` | → | Empty body | 204 No Content |

**Important: REST â‰  CRUD.** REST is about resources and their state transfers, not just database operations. A `cancel` action on an order could be `POST /orders/{id}/cancel` instead of `PATCH /orders/{id}` `{status:"cancelled"}`. Design resources around business actions, not table rows.

**Pseudocode: CRUD Controller**

```
// Create
FUNCTION createUser(request):
  userData = parseBody(request)
  IF NOT validate(userData):
    RETURN 422 Unprocessable Entity
  IF emailExists(userData.email):
    RETURN 409 Conflict
  user.id = generateUUID()
  db.insert("users", userData)
  response.body = serialize(userData)
  response.headers.Location = "/users/" + user.id
  RETURN 201 Created

// Read
FUNCTION getUser(userId):
  user = db.find("users", userId)
  IF NOT user:
    RETURN 404 Not Found
  RETURN 200 OK with serialize(user)

// Update (full replacement)
FUNCTION replaceUser(userId, newData):
  IF NOT db.exists("users", userId):
    RETURN 404 Not Found
  db.update("users", userId, newData)  // replaces all fields
  RETURN 200 OK with serialize(newData)

// Partial update
FUNCTION patchUser(userId, patchData):
  IF NOT db.exists("users", userId):
    RETURN 404 Not Found
  existing = db.find("users", userId)
  merged = merge(existing, patchData)
  db.update("users", userId, merged)
  RETURN 200 OK with serialize(merged)

// Delete
FUNCTION deleteUser(userId):
  IF NOT db.exists("users", userId):
    RETURN 404 Not Found
  db.delete("users", userId)
  RETURN 204 No Content
```

**Edge Cases in CRUD with HTTP:**

| Edge Case | Scenario | Behavior | Status Code |
|-----------|----------|----------|-------------|
| Duplicate create | POST same data twice | Second creates different resource (POST not idempotent) | 201 (different URI) |
| Idempotent update | PUT same data N times | Same final state after each call | 200 (same response) |
| Partial update race | Two concurrent PATCHes | Last write wins; possible data loss | 200 (may need optimistic locking) |
| Delete non-existent | DELETE on already deleted | No error → DELETE is idempotent | 204 or 404 |
| Missing resource | GET/PUT/PATCH/DELETE on nonexistent id | Returns error | 404 |
| Validation failure | POST with missing required field | Returns validation details | 422 |

### 15.1.6 Statelessness

Statelessness means each request from client to server must contain all information needed to understand and process the request. The server does not store any session context between requests.

**Real-World Analogy: Library Checkout vs. Restaurant**

| System | Analogy | Behavior |
|--------|---------|----------|
| **Stateless (REST)** | Library: you show your card each time | Server doesn't remember past requests |
| **Stateful** | Restaurant: waiter remembers your table, drink order | Server maintains session state |

**Numbered Steps: Stateless Authentication Flow**

1. Client sends credentials (username + password or API key) with every request
2. Server validates credentials independently → no session lookup needed
3. Server processes request and returns response
4. Client receives response → no session cookie is set
5. Client sends next request with same credentials (typically via JWT in Authorization header)
6. Server re-validates → no memory of step 2

**Stateless vs. Stateful Comparison:**

| Aspect | Stateless (REST) | Stateful (Session-based) |
|--------|-----------------|------------------------|
| Scalability | Linear → any server handles any request | Complex → session affinity (sticky sessions) needed |
| Visibility | Each request is self-describing | Server state hidden from client |
| Reliability | No single point of failure for session data | Session server failure breaks all active sessions |
| Performance | Larger per-request payload (auth + context) | Smaller payload but session lookup overhead |
| Caching | Highly cacheable (no session dependency) | Cache unfriendly (depends on server state) |
| Example | JWT token in Authorization header | Session cookie + server-side session store |

**The Statelessness Tradeoff:**

```
Advantages:
  - Horizontal scaling: any server handles any request (no session affinity)
  - Visibility: monitoring can examine a single request fully
  - Reliability: no session store to fail
  - Cacheability: responses independent of server state

Disadvantages:
  - Larger requests: auth tokens and context in every request
  - Shifted responsibility: client manages state
  - Chatty: no multi-step transactions within a single request
```

### 15.1.7 HATEOAS

Hypermedia as the Engine of Application State (HATEOAS) means API responses contain links to navigate related resources, making the API self-discoverable.

**Real-World Analogy: Library Catalog Cards**

A library catalog card doesn't just give you the book title → it includes links to:
- The author's other works (`rel: "author"`)
- Related subjects (`rel: "subject"`)
- Where the book is shelved (`rel: "location"`)
- Whether it's available (`rel: "availability"`)

This is HATEOAS: the response tells you what you can do next.

**Expanded HATEOAS Example:**

```json
GET /orders/123

{
  "orderId": 123,
  "total": 59.98,
  "status": "shipped",
  "items": [
    {"productId": 456, "name": "Wireless Mouse", "quantity": 1, "price": 29.99}
  ],
  "_links": {
    "self": {"href": "/orders/123", "method": "GET"},
    "cancel": {"href": "/orders/123/cancel", "method": "POST"},
    "tracking": {"href": "/orders/123/tracking", "method": "GET"},
    "customer": {"href": "/users/42", "method": "GET"},
    "payment": {"href": "/orders/123/payment", "method": "GET"},
    "return": {"href": "/orders/123/return", "method": "POST"}
  }
}
```

**HATEOAS Link Format:**

| Attribute | Description | Example |
|-----------|-------------|---------|
| `rel` | Relationship type | `"self"`, `"next"`, `"author"` |
| `href` | Target URI | `"/users/42"` |
| `method` | HTTP method to use | `"GET"`, `"POST"`, `"DELETE"` |
| `title` (optional) | Human-readable label | `"View customer profile"` |

**Pseudocode: HATEOAS Link Generator**

```
FUNCTION generateLinks(resource, userRole):
  links = []
  links.add(rel="self", href="/" + resource.type + "/" + resource.id, method="GET")

  // Role-based links
  IF userRole == "admin":
    links.add(rel="delete", href="/" + resource.type + "/" + resource.id, method="DELETE")
    links.add(rel="update", href="/" + resource.type + "/" + resource.id, method="PUT")

  // State-based links
  IF resource.status == "active" AND resource.type == "order":
    links.add(rel="cancel", href="/orders/" + resource.id + "/cancel", method="POST")
  IF resource.status == "shipped":
    links.add(rel="tracking", href="/orders/" + resource.id + "/tracking", method="GET")

  // Relationship links
  FOR each relatedResource IN resource.relations:
    links.add(rel=relatedResource.type, href="/" + relatedResource.type + "/" + relatedResource.id, method="GET")

  RETURN links
```

**A&D Table: HATEOAS**

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Discoverability | Client navigates without docs | Increases response size |
| Decoupling | Server changes URL structure independently | Client must handle links, not hardcode URLs |
| Dynamic navigation | Links change based on state (e.g., "cancel" only shown for active orders) | More complex server logic |
| Real-world adoption | GitHub API, Stripe API use it | Most APIs use minimal HATEOAS; full HATEOAS is rare (Level 3 Richardson Maturity Model) |

**Edge Cases in HATEOAS:**

| Edge Case | Problem | Solution |
|-----------|---------|----------|
| Expired links | Link target resource deleted | Return 404 with link to parent collection |
| Permission change | Link visible but user loses permission mid-session | Link shown, but 403 on actual request |
| Circular references | Order→Customer→Order | Limit link depth; show top-level only |
| Version mismatch | Links point to different API version | Base URLs respect version prefix |

### 15.1.8 Caching (ETag, Cache-Control)

Caching reduces server load and improves response time by reusing previous responses.

**Real-World Analogy: Library Reserve Shelf**

The library keeps popular books at the front desk (cache) rather than fetching them from the stacks each time. The librarian checks:
- "Is this book on the reserve shelf?" (Cache hit?)
- "Has the book been updated since last time?" (ETag validation)
- "How long can I keep this on reserve?" (Cache-Control max-age)

**Cache-Control Directives:**

| Directive | Meaning | Example |
|-----------|---------|---------|
| `public` | Any cache may store (CDN, browser, proxy) | `Cache-Control: public, max-age=3600` |
| `private` | Only browser cache may store (no CDN/proxy) | `Cache-Control: private, max-age=600` |
| `no-cache` | Must revalidate with server before using cached copy | `Cache-Control: no-cache` |
| `no-store` | Must not cache at all | `Cache-Control: no-store` |
| `max-age=<seconds>` | Maximum time cached response is fresh | `Cache-Control: max-age=3600` |
| `s-maxage=<seconds>` | Overrides max-age for shared caches (CDN) | `Cache-Control: public, s-maxage=3600` |
| `must-revalidate` | Once stale, must revalidate before reuse | `Cache-Control: must-revalidate` |

**ETag (Entity Tag):**

ETag is a hash-based validator. The server computes an ETag for each resource. The client sends `If-None-Match` with the stored ETag; the server returns 304 Not Modified if unchanged.

**Numbered Steps: Conditional Request with ETag**

1. Client sends `GET /books/123`
2. Server computes `ETag: "a1b2c3"` (hash of resource state)
3. Server returns `200 OK` with `ETag: "a1b2c3"`, `Cache-Control: public, max-age=3600`
4. Client caches: `{data, etag: "a1b2c3", expires: now+3600s}`
5. After 3600 seconds, client sends `GET /books/123 If-None-Match: "a1b2c3"`
6. Server re-computes ETag from current state
7. If unchanged: server returns `304 Not Modified` (empty body)
8. If changed: server returns `200 OK` with new data and new `ETag: "d4e5f6"`

**Dry Run Trace Table: Caching Decision Flow**

| Step | Client State | Request | Cache State | Server State | Result |
|------|-------------|---------|-------------|-------------|--------|
| 1 | No cache | `GET /books/1` | Empty | fresh data | → |
| 2 | → | Request sent | Empty | → | → |
| 3 | Wait for response | → | Empty | Computes ETag "abc" | → |
| 4 | Receive: `200 OK, ETag: "abc", max-age=300` | Done | Stores `{data, etag: "abc", expires: T+300}` | → | Cache populated |
| 5 | (Before expiry) | `GET /books/1` | Fresh (T+50 &lt; T+300) | → | Cache HIT: return cached |
| 6 | (After expiry) | `GET /books/1 If-None-Match: "abc"` | Stale (T+310 > T+300) | Compares ETag | Conditional request |
| 7 | Receive: `304 Not Modified` | Done | Refreshes to T+300 | Unchanged | Cache refreshed |
| 8 | (Later) | `GET /books/1 If-None-Match: "abc"` | Stale | Data changed, ETag="def" | → |
| 9 | Receive: `200 OK, ETag: "def", max-age=300` | Done | Updates `{data, etag: "def", expires: T+300}` | Updated | Cache updated |

**C++ Caching Middleware Implementation:**

```cpp
#include <unordered_map>
#include <string>
#include <chrono>
#include <functional>
#include <iostream>

struct CacheEntry {
    std::string data;
    std::string etag;
    std::chrono::steady_clock::time_point expiresAt;
};

class CachingMiddleware {
private:
    std::unordered_map<std::string, CacheEntry> cache;
    std::hash<std::string> hasher;

    std::string computeETag(const std::string& resourceState) {
        return std::to_string(hasher(resourceState));
    }

    CachePolicy getCachePolicy(const std::string& method) {
        // GET and HEAD are cacheable; POST, PUT, PATCH, DELETE invalidate
        if (method == "GET" || method == "HEAD") {
            return CachePolicy::READ;
        }
        return CachePolicy::INVALIDATE;
    }

public:
    enum class CachePolicy { READ, INVALIDATE, BYPASS };

    struct Response {
        int statusCode;
        std::string body;
        std::string etag;
        bool fromCache;
    };

    Response handleRequest(
        const std::string& method,
        const std::string& url,
        const std::string& ifNoneMatch,
        const std::string& requestBody,
        std::function<Response()> upstream
    ) {
        if (getCachePolicy(method) == CachePolicy::INVALIDATE) {
            cache.erase(url);
            return upstream();
        }

        // Check cache
        auto it = cache.find(url);
        if (it != cache.end()) {
            CacheEntry& entry = it->second;
            auto now = std::chrono::steady_clock::now();

            if (now < entry.expiresAt) {
                // Fresh cache hit
                std::cout << "[CACHE HIT] Fresh: " << url << std::endl;
                return {200, entry.data, entry.etag, true};
            }

            // Stale → conditional request
            std::cout << "[CACHE] Stale, revalidating: " << url << std::endl;
            if (!ifNoneMatch.empty() && ifNoneMatch == entry.etag) {
                // Client sent If-None-Match → use it
                Response serverResp = upstream();
                if (serverResp.statusCode == 304) {
                    entry.expiresAt = std::chrono::steady_clock::now()
                        + std::chrono::seconds(300);
                    return {200, entry.data, entry.etag, true};
                }
                // Resource changed
                if (!serverResp.etag.empty()) {
                    cache[url] = {serverResp.body, serverResp.etag,
                        std::chrono::steady_clock::now() + std::chrono::seconds(300)};
                }
                return serverResp;
            }
        }

        // Cache miss → fetch from upstream
        std::cout << "[CACHE MISS] " << url << std::endl;
        Response serverResp = upstream();
        if (serverResp.statusCode == 200 && !serverResp.etag.empty()) {
            cache[url] = {serverResp.body, serverResp.etag,
                std::chrono::steady_clock::now() + std::chrono::seconds(300)};
        }
        serverResp.fromCache = false;
        return serverResp;
    }
};

// Usage example
int main() {
    CachingMiddleware cache;

    auto upstream = []() {
        return CachingMiddleware::Response{
            200,
            "{\"id\":1,\"name\":\"Book A\"}",
            "etag123",
            false
        };
    };

    auto r1 = cache.handleRequest("GET", "/books/1", "", "", upstream);
    std::cout << "Response 1: status=" << r1.statusCode
              << " fromCache=" << r1.fromCache << std::endl;

    auto r2 = cache.handleRequest("GET", "/books/1",
        "etag123", "", upstream);
    std::cout << "Response 2: status=" << r2.statusCode
              << " fromCache=" << r2.fromCache << std::endl;

    return 0;
}
```

**Python Caching Middleware Implementation:**

```python
import hashlib
import time
from functools import wraps
from typing import Optional, Dict, Callable, Any

class CacheEntry:
    def __init__(self, data: str, etag: str, max_age: int = 300):
        self.data = data
        self.etag = etag
        self.expires_at = time.time() + max_age

    def is_fresh(self) -> bool:
        return time.time() < self.expires_at

class CachingMiddleware:
    def __init__(self):
        self._cache: Dict[str, CacheEntry] = {}

    @staticmethod
    def _compute_etag(data: str) -> str:
        return hashlib.md5(data.encode()).hexdigest()

    def _should_invalidate(self, method: str) -> bool:
        return method.upper() in ("POST", "PUT", "PATCH", "DELETE")

    def handle(
        self,
        method: str,
        url: str,
        if_none_match: Optional[str],
        upstream: Callable[[], Dict[str, Any]]
    ) -> Dict[str, Any]:
        if self._should_invalidate(method):
            self._cache.pop(url, None)
            return upstream()

        entry = self._cache.get(url)
        if entry is not None:
            if entry.is_fresh():
                print(f"[CACHE HIT] Fresh: {url}")
                return {"status": 200, "body": entry.data,
                        "etag": entry.etag, "from_cache": True}

            # Stale → try conditional request
            if if_none_match and if_none_match == entry.etag:
                resp = upstream()
                if resp.get("status") == 304:
                    entry.expires_at = time.time() + 300
                    return {"status": 200, "body": entry.data,
                            "etag": entry.etag, "from_cache": True, "revalidated": True}
                if resp.get("etag"):
                    self._cache[url] = CacheEntry(resp["body"], resp["etag"])
                return resp

        # Cache miss
        print(f"[CACHE MISS] {url}")
        resp = upstream()
        if resp.get("status") == 200:
            etag = resp.get("etag") or self._compute_etag(resp.get("body", ""))
            self._cache[url] = CacheEntry(resp["body"], etag)
            resp["etag"] = etag
        resp["from_cache"] = False
        return resp


# Simulated usage
def make_upstream(body: str, etag: Optional[str] = None):
    def upstream():
        return {"status": 200, "body": body, "etag": etag}
    return upstream

cache = CachingMiddleware()
r1 = cache.handle("GET", "/books/1", None, make_upstream('{"id":1}', "v1"))
print(f"First call - from_cache: {r1['from_cache']}")  # False

r2 = cache.handle("GET", "/books/1", "v1", make_upstream('{"id":1}', "v1"))
print(f"Second call - from_cache: {r2['from_cache']}")  # True (fresh hit)
```

**Complexity Analysis of Caching:**

| Operation | Complexity | Why |
|-----------|-----------|-----|
| Cache lookup (hash map) | O(1) | Direct hash table access by URL key |
| ETag computation | O(n) | n = response size; full hash of response body |
| Cache invalidation | O(1) | Hash map erase by URL key |
| Freshness check | O(1) | Single timestamp comparison |
| Conditional request | O(n) + O(1) | Hash computation (n) + comparison (1) |
| Cache eviction (LRU) | O(1) | Doubly-linked list + hash map |

**Why O(1) cache lookup matters:** In a system handling 10,000 requests/second, a cache hit reduces response time from ~50ms (database query) to ~1ms (memory read). The 50x speedup is directly attributable to O(1) hash map lookup.

**A&D Table: Caching with ETag vs Cache-Control**

| Strategy | Pros | Cons | Best For |
|----------|------|------|----------|
| Cache-Control: no-store | Guarantees fresh data | No performance gain | Sensitive data, real-time |
| Cache-Control: max-age=3600 | Simple, reduces server load | Data may be stale for up to 1 hour | Blog posts, product catalog |
| ETag + 304 revalidation | Always fresh data, saves bandwidth when unchanged | Requires extra server computation on revalidation | Rapidly changing data |
| ETag + Cache-Control combined | Both freshness window + revalidation | Slightly more complex | Most APIs |

**Edge Cases in Caching:**

| Edge Case | Description | Solution |
|-----------|-------------|----------|
| Cache invalidation after write | PUT/PATCH updates resource; stale cache served | Invalidate cache on mutating methods |
| Concurrent writes | Two clients PATCH same resource simultaneously | Use ETag in If-Match header for optimistic locking |
| Private vs public data | User-specific data cached in shared CDN | Use `Cache-Control: private` |
| Stale CDN cache | CDN serves outdated content | Use `s-maxage` < `max-age`, purge API, or versioned URLs |
| Cache stampede | N clients miss cache simultaneously, hammering DB | Lock/mutex on cache miss (dogpile effect prevention) |

### 15.1.9 Rate Limiting

Rate limiting controls how many requests a client can make within a time window, preventing abuse and ensuring fair usage.

**Real-World Analogy: Library Computer Terminal Policy**

The library limits computer usage:
- 30 minutes per session per patron
- Must wait 10 minutes between sessions
- Librarians get unlimited access
- The timer resets daily

**Algorithm: Token Bucket**

Token bucket is the most common rate-limiting algorithm. A bucket holds tokens; each request consumes a token. Tokens refill at a fixed rate.

**Pseudocode: Token Bucket Rate Limiter**

```
CLASS TokenBucket:
  capacity          // max tokens (burst limit)
  refillRate        // tokens per second
  tokens            // current token count
  lastRefillTime    // timestamp of last refill

  FUNCTION allowRequest():
    refill()
    IF tokens > 0:
      tokens = tokens - 1
      RETURN True
    ELSE:
      RETURN False

  FUNCTION refill():
    now = currentTime()
    elapsed = now - lastRefillTime
    newTokens = elapsed * refillRate
    tokens = min(capacity, tokens + newTokens)
    lastRefillTime = now
```

**Numbered Steps: Rate Limiting Flow**

1. Client sends request `GET /api/books`
2. Server extracts client identity from API key or IP address
3. Rate limiter looks up the client's token bucket (or creates one)
4. Token bucket checks: tokens > 0?
5. If yes: consume 1 token, forward request to handler
6. If no: return `429 Too Many Requests` with `Retry-After` header
7. Tokens refill at fixed rate (e.g., 10 tokens/second) regardless of consumption

**Python Implementation: Token Bucket Rate Limiter**

```python
import time
from threading import Lock
from typing import Dict

class TokenBucket:
    def __init__(self, capacity: int, refill_rate: float):
        self.capacity = capacity
        self.refill_rate = refill_rate
        self.tokens = capacity
        self.last_refill = time.monotonic()
        self.lock = Lock()

    def _refill(self):
        now = time.monotonic()
        elapsed = now - self.last_refill
        new_tokens = elapsed * self.refill_rate
        self.tokens = min(self.capacity, self.tokens + new_tokens)
        self.last_refill = now

    def allow(self) -> bool:
        with self.lock:
            self._refill()
            if self.tokens >= 1:
                self.tokens -= 1
                return True
            return False

    def wait_time(self) -> float:
        """Seconds until next token is available."""
        with self.lock:
            self._refill()
            if self.tokens >= 1:
                return 0.0
            return (1 - self.tokens) / self.refill_rate


class RateLimiter:
    def __init__(self, default_capacity: int = 100, default_rate: float = 10.0):
        self.buckets: Dict[str, TokenBucket] = {}
        self.default_capacity = default_capacity
        self.default_rate = default_rate

    def get_bucket(self, client_id: str) -> TokenBucket:
        if client_id not in self.buckets:
            self.buckets[client_id] = TokenBucket(
                self.default_capacity, self.default_rate)
        return self.buckets[client_id]

    def check(self, client_id: str) -> Dict:
        bucket = self.get_bucket(client_id)
        allowed = bucket.allow()
        return {
            "allowed": allowed,
            "remaining": max(0, int(bucket.tokens)),
            "retry_after": bucket.wait_time() if not allowed else 0
        }


# Usage
limiter = RateLimiter(default_capacity=10, default_rate=1.0)  # 10 burst, 1/sec refill
client = "user_42"
for i in range(15):
    result = limiter.check(client)
    status = "ALLOWED" if result["allowed"] else "DENIED"
    print(f"Request {i+1}: {status} | Remaining: {result['remaining']}")
    if not result["allowed"]:
        print(f"  Retry after: {result['retry_after']:.2f}s")
```

**Dry Run Trace Table: Rate Limiter**

| Time (s) | Request # | Bucket State (tokens) | Refill | Consumed | Allowed? |
|----------|-----------|----------------------|--------|----------|----------|
| 0.0 | 1 | 10 | → | 9 | Yes |
| 0.1 | 2 | 9 | → | 8 | Yes |
| 0.2 | 3 | 8 | → | 7 | Yes |
| 0.3 | 4 | 7 | → | 6 | Yes |
| 0.4 | 5 | 6 | → | 5 | Yes |
| 0.5 | 6 | 5 | → | 4 | Yes |
| 0.6 | 7 | 4 | → | 3 | Yes |
| 0.7 | 8 | 3 | → | 2 | Yes |
| 0.8 | 9 | 2 | → | 1 | Yes |
| 0.9 | 10 | 1 | → | 0 | Yes (last token) |
| 1.0 | 11 | 0 | +1 (1s elapsed * 1/sec) | 0 → after refill: consumed | Yes |
| 1.1 | 12 | 0 | → | 0 | No (429) |
| 2.0 | 12 (retry) | 0 | +1 (1 more second elapsed) | 0 → consumed | Yes |

**Complexity Analysis:**

| Operation | Complexity | Why |
|-----------|-----------|-----|
| Token bucket lookup | O(1) | Hash map by client ID |
| Token refill | O(1) | Arithmetic: `tokens += elapsed * rate` |
| Allow check | O(1) | Single comparison and decrement |
| Rate limiter memory | O(c) | c = number of active clients; bounded by LRU eviction |
| Cleanup of stale buckets | O(c) | Periodic scan; tunable interval |

**Why O(1) matters for rate limiting:** Rate limiting runs on EVERY request. At 50,000 requests/sec, O(1) per request means 50,000 operations/second. O(n) would make rate limiting the bottleneck rather than the guard.

**A&D Table: Rate Limiting Algorithms**

| Algorithm | Pros | Cons | Best For |
|-----------|------|------|----------|
| Token Bucket | Allows bursts, smooth refill | Memory per client | General purpose |
| Leaky Bucket | Fixed processing rate, smooth output | No burst flexibility | Queue processing |
| Fixed Window | Simple, easy to implement | Traffic spikes at window boundaries | Simple rate limits |
| Sliding Window Log | Precise, no boundary spikes | O(n) memory per window | Strict rate guarantees |
| Sliding Window Counter | Good precision, O(1) memory | Slightly complex | Most production systems |

**Edge Cases in Rate Limiting:**

| Edge Case | Description | Solution |
|-----------|-------------|----------|
| Burst traffic at window boundary | Fixed window: all requests flood last millisecond | Sliding window counter or token bucket |
| Distributed rate limiting | Multiple servers share one rate limit | Centralized Redis (atomic INCR + EXPIRE) |
| Rate limit header sync | Client sees different remaining count across servers | Synchronize counter in Redis cluster |
| VIP/whitelist clients | Some clients need higher limits | Configurable per-client bucket capacity |
| Retry-After accuracy | Client needs exact wait time | Return precise float seconds |

**C++ Token Bucket Implementation:**

```cpp
#include <unordered_map>
#include <chrono>
#include <mutex>
#include <iostream>

class TokenBucket {
private:
    double capacity;
    double refillRate;
    double tokens;
    std::chrono::steady_clock::time_point lastRefill;
    std::mutex mtx;

    void refill() {
        auto now = std::chrono::steady_clock::now();
        auto elapsed = std::chrono::duration<double>(now - lastRefill).count();
        tokens = std::min(capacity, tokens + elapsed * refillRate);
        lastRefill = now;
    }

public:
    TokenBucket(double cap, double rate)
        : capacity(cap), refillRate(rate),
          tokens(cap), lastRefill(std::chrono::steady_clock::now()) {}

    bool allow() {
        std::lock_guard<std::mutex> lock(mtx);
        refill();
        if (tokens >= 1.0) {
            tokens -= 1.0;
            return true;
        }
        return false;
    }

    double waitTime() {
        std::lock_guard<std::mutex> lock(mtx);
        refill();
        if (tokens >= 1.0) return 0.0;
        return (1.0 - tokens) / refillRate;
    }
};

class RateLimiter {
private:
    std::unordered_map<std::string, TokenBucket> buckets;
    std::mutex globalMtx;
    double defaultCap;
    double defaultRate;

public:
    RateLimiter(double cap, double rate) : defaultCap(cap), defaultRate(rate) {}

    bool check(const std::string& clientId) {
        std::lock_guard<std::mutex> lock(globalMtx);
        auto it = buckets.find(clientId);
        if (it == buckets.end()) {
            it = buckets.emplace(clientId,
                TokenBucket(defaultCap, defaultRate)).first;
        }
        return it->second.allow();
    }
};

int main() {
    RateLimiter limiter(10, 1.0);

    for (int i = 0; i < 15; i++) {
        bool allowed = limiter.check("user_42");
        std::cout << "Request " << (i+1) << ": "
                  << (allowed ? "ALLOWED" : "DENIED") << std::endl;
    }
    return 0;
}
```

### 15.1.10 API Versioning

APIs evolve. Versioning lets you introduce breaking changes without disrupting existing clients.

**Real-World Analogy: Library Edition Numbers**

Books have editions. A 2nd edition may have:
- Different chapter organization (breaking change)
- Updated content (new fields)
- Same ISBN meaning different content (backward incompatible)

Libraries keep both editions on shelves during transition.

**Versioning Strategies:**

| Strategy | Mechanism | Example | Cache-Friendly | Discoverability |
|----------|-----------|---------|---------------|----------------|
| URI prefix | Path segment includes version | `/v1/users`, `/v2/users` | Yes (different URLs) | High (visible in URL) |
| Custom header | HTTP header specifies version | `Accept: application/vnd.myapp.v2+json` | No (same URL) | Low (hidden) |
| Query parameter | Query param includes version | `/users?version=2` | No (same URL with different param) | Medium |
| Content negotiation | Accept header media type | `Accept: application/vnd.myapp.v2+json` | Varies | Medium |

**Numbered Steps: API Version Migration**

1. Release v1 of API with `/v1/users`
2. Clients adopt v1; production traffic flows
3. Develop v2 with breaking changes (e.g., renamed fields, removed endpoints)
4. Deploy v2 alongside v1: `/v1/users` and `/v2/users` both serve traffic
5. Announce deprecation of v1 with sunset date (e.g., 6 months)
6. Monitor v1 traffic decreasing, v2 traffic increasing
7. After sunset date, remove v1 code and redirect `/v1/*` to 410 Gone

**Pseudocode: Version Router**

```
FUNCTION routeByVersion(uri):
  version = extractVersion(uri)  // /v2/users -> "v2"
  resourcePath = stripVersion(uri)  // /v2/users -> /users

  SWITCH version:
    CASE "v1":
      RETURN v1Handlers.process(resourcePath)
    CASE "v2":
      RETURN v2Handlers.process(resourcePath)
    CASE "latest":
      RETURN v2Handlers.process(resourcePath)
    DEFAULT:
      RETURN 400 Bad Request, "Unknown API version: " + version
```

**A&D Table: Versioning Strategies**

| Strategy | Pros | Cons |
|----------|------|------|
| URI prefix | Most explicit; cache-friendly; easy to route | URL pollution; duplicated code if versions share logic |
| Header-based | Clean URLs; no duplication of endpoints | Hidden from casual inspection; harder to test via browser |
| Query parameter | Simple to implement | Same URL with different content breaks caches; not RESTful (version isn't a query) |

**Edge Cases in Versioning:**

| Edge Case | Problem | Solution |
|-----------|---------|----------|
| Client sticks to old version | Security patches on v1 | Security backports with deprecation deadline |
| Parallel code maintenance | Two code paths for v1 and v2 | Use adapter layer; share business logic |
| Version in HATEOAS links | Links returned in v1 should stay in v1 | Generate links with correct version prefix |
| Default version | What if client omits version? | Route to latest stable; add warning header |

### 15.1.11 OpenAPI / Swagger

OpenAPI (formerly Swagger) is a specification for describing REST APIs using a standard YAML or JSON format. It provides a machine-readable contract that enables code generation, documentation, and testing.

**Real-World Analogy: Library Subject Index**

A library subject index card doesn't just list the book → it describes:
- Where to find it (endpoints)
- What format it's in (paperback, hardcover → request/response formats)
- Who can check it out (authentication)
- Related topics (links to other endpoints)

**OpenAPI Example (YAML):**

```yaml
openapi: "3.0.3"
info:
  title: Library API
  version: "1.0.0"
  description: API for managing library books and patrons

paths:
  /books:
    get:
      summary: List all books
      parameters:
        - name: author
          in: query
          schema:
            type: string
      responses:
        "200":
          description: A list of books
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Book"

    post:
      summary: Add a new book
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/BookInput"
      responses:
        "201":
          description: Book created
          headers:
            Location:
              schema:
                type: string

  /books/{bookId}:
    get:
      summary: Get a book by ID
      parameters:
        - name: bookId
          in: path
          required: true
            schema:
              type: integer
      responses:
        "200":
          description: A single book
        "404":
          description: Book not found

components:
  schemas:
    Book:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        author:
          type: string
        isbn:
          type: string

    BookInput:
      type: object
      required:
        - title
        - author
      properties:
        title:
          type: string
        author:
          type: string
        isbn:
          type: string
```

**OpenAPI Ecosystem Tools:**

| Tool | Purpose |
|------|---------|
| Swagger UI | Interactive API documentation explorer |
| Swagger Editor | Browser-based OpenAPI editor with live preview |
| Swagger Codegen | Generate client SDKs in 40+ languages from spec |
| OpenAPI Generator | Alternative codegen with more language support |
| Postman | Import OpenAPI spec to create collections |
| Redoc | Beautiful API documentation from OpenAPI |

### 15.1.12 REST API Implementation

**Python Implementation: REST Server with FastAPI-Style Pattern**

```python
import json
import hashlib
import time
from typing import Optional, Dict, List
from urllib.parse import urlparse, parse_qs

# Simulated database
class Database:
    def __init__(self):
        self._data: Dict[str, list] = {
            "books": [
                {"id": 1, "title": "1984", "author": "George Orwell",
                 "isbn": "9780451524935", "year": 1949},
                {"id": 2, "title": "Brave New World", "author": "Aldous Huxley",
                 "isbn": "9780060850524", "year": 1932},
            ]
        }
        self._counters = {"books": 3}

    def list_all(self, resource: str) -> list:
        return self._data.get(resource, [])

    def find_by_id(self, resource: str, rid: int) -> Optional[dict]:
        for item in self._data.get(resource, []):
            if item["id"] == rid:
                return item
        return None

    def create(self, resource: str, data: dict) -> dict:
        new_item = dict(data)
        new_item["id"] = self._counters.get(resource, 1)
        self._counters[resource] = new_item["id"] + 1
        self._data.setdefault(resource, []).append(new_item)
        return new_item

    def replace(self, resource: str, rid: int, data: dict) -> Optional[dict]:
        items = self._data.get(resource, [])
        for i, item in enumerate(items):
            if item["id"] == rid:
                replacement = dict(data)
                replacement["id"] = rid
                items[i] = replacement
                return replacement
        return None

    def update(self, resource: str, rid: int, data: dict) -> Optional[dict]:
        items = self._data.get(resource, [])
        for i, item in enumerate(items):
            if item["id"] == rid:
                items[i].update(data)
                return items[i]
        return None

    def delete(self, resource: str, rid: int) -> bool:
        items = self._data.get(resource, [])
        for i, item in enumerate(items):
            if item["id"] == rid:
                items.pop(i)
                return True
        return False


class RESTRequest:
    def __init__(self, method: str, path: str, headers: dict = None,
                 body: str = ""):
        self.method = method.upper()
        parsed = urlparse(path)
        self.path = parsed.path
        self.query_params = parse_qs(parsed.query)
        self.headers = headers or {}
        self.body = body

    def json(self) -> dict:
        return json.loads(self.body) if self.body else {}


class RESTResponse:
    def __init__(self, status: int, body: any = None,
                 headers: dict = None):
        self.status = status
        self.body = json.dumps(body) if body is not None else ""
        self.headers = headers or {}
        self.headers["Content-Type"] = "application/json"


class RESTRouter:
    def __init__(self):
        self._routes: Dict[str, Dict[str, callable]] = {}
        self.db = Database()

    def _etag(self, data: str) -> str:
        return hashlib.md5(data.encode()).hexdigest()[:8]

    def _parse_path(self, path: str) -> tuple:
        parts = path.strip("/").split("/")
        if len(parts) >= 1:
            resource = parts[0]
            rid = int(parts[1]) if len(parts) > 1 and parts[1].isdigit() else None
            return resource, rid
        return None, None

    def _add_hateoas(self, data: dict, resource: str) -> dict:
        if isinstance(data, dict) and "id" in data:
            rid = data["id"]
            data["_links"] = {
                "self": {"href": f"/{resource}/{rid}", "method": "GET"},
                "update": {"href": f"/{resource}/{rid}", "method": "PUT"},
                "delete": {"href": f"/{resource}/{rid}", "method": "DELETE"},
            }
        return data

    def handle(self, request: RESTRequest) -> RESTResponse:
        print(f"[REQUEST] {request.method} {request.path}")

        resource, rid = self._parse_path(request.path)

        if not resource or resource not in self.db._data:
            return RESTResponse(404, {"error": f"Resource /{resource} not found"})

        if_none_match = request.headers.get("If-None-Match", "")

        if request.method == "GET":
            if rid:
                item = self.db.find_by_id(resource, rid)
                if not item:
                    return RESTResponse(404, {"error": "Not found"})
                body_str = json.dumps(item)
                etag = self._etag(body_str)
                if if_none_match == etag:
                    return RESTResponse(304)
                item = self._add_hateoas(item, resource)
                return RESTResponse(200, item, {"ETag": etag,
                    "Cache-Control": "public, max-age=3600"})
            items = [self._add_hateoas(i, resource)
                     for i in self.db.list_all(resource)]
            return RESTResponse(200, items)

        elif request.method == "POST":
            data = request.json()
            if not data:
                return RESTResponse(400, {"error": "Empty body"})
            created = self.db.create(resource, data)
            created = self._add_hateoas(created, resource)
            return RESTResponse(201, created,
                {"Location": f"/{resource}/{created['id']}"})

        elif request.method == "PUT":
            if not rid:
                return RESTResponse(400, {"error": "ID required in path"})
            data = request.json()
            if not data:
                return RESTResponse(400, {"error": "Empty body"})
            replaced = self.db.replace(resource, rid, data)
            if not replaced:
                return RESTResponse(404, {"error": "Not found"})
            replaced = self._add_hateoas(replaced, resource)
            return RESTResponse(200, replaced)

        elif request.method == "PATCH":
            if not rid:
                return RESTResponse(400, {"error": "ID required in path"})
            data = request.json()
            if not data:
                return RESTResponse(400, {"error": "Empty body"})
            updated = self.db.update(resource, rid, data)
            if not updated:
                return RESTResponse(404, {"error": "Not found"})
            updated = self._add_hateoas(updated, resource)
            return RESTResponse(200, updated)

        elif request.method == "DELETE":
            if not rid:
                return RESTResponse(400, {"error": "ID required in path"})
            if self.db.delete(resource, rid):
                return RESTResponse(204)
            return RESTResponse(404, {"error": "Not found"})

        return RESTResponse(405, {"error": "Method not allowed"})


# Simulated request flow
router = RESTRouter()
requests = [
    RESTRequest("GET", "/books"),
    RESTRequest("GET", "/books/1"),
    RESTRequest("POST", "/books", body=json.dumps(
        {"title": "Fahrenheit 451", "author": "Ray Bradbury",
         "isbn": "9781451673319", "year": 1953})),
    RESTRequest("PUT", "/books/1", body=json.dumps(
        {"title": "Nineteen Eighty-Four", "author": "George Orwell",
         "isbn": "9780451524935", "year": 1949})),
    RESTRequest("PATCH", "/books/2", body=json.dumps({"year": 1931})),
    RESTRequest("DELETE", "/books/3"),
]

for req in requests:
    resp = router.handle(req)
    print(f"[RESPONSE] {resp.status}: {resp.body[:80] if resp.body else '(empty)'}")
```

**C++ REST Client Implementation:**

```cpp
#include <iostream>
#include <string>
#include <map>
#include <sstream>
#include <functional>
#include <curl/curl.h>  // Requires libcurl

class RestClient {
private:
    std::string baseUrl;
    std::map<std::string, std::string> defaultHeaders;
    struct curl_slist* headersList;

    static size_t writeCallback(void* contents, size_t size,
                                size_t nmemb, std::string* output) {
        size_t totalSize = size * nmemb;
        output->append(static_cast<char*>(contents), totalSize);
        return totalSize;
    }

    std::string buildUrl(const std::string& endpoint) {
        return baseUrl + endpoint;
    }

    void setHeaders(CURL* curl) {
        headersList = nullptr;
        for (const auto& [key, value] : defaultHeaders) {
            std::string header = key + ": " + value;
            headersList = curl_slist_append(headersList, header.c_str());
        }
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headersList);
    }

public:
    struct Response {
        int statusCode;
        std::string body;
        std::map<std::string, std::string> headers;
    };

    RestClient(const std::string& base)
        : baseUrl(base), headersList(nullptr) {
        defaultHeaders["Accept"] = "application/json";
        defaultHeaders["Content-Type"] = "application/json";
        defaultHeaders["User-Agent"] = "REST-Client-CPP/1.0";
        curl_global_init(CURL_GLOBAL_ALL);
    }

    ~RestClient() {
        curl_global_cleanup();
    }

    Response get(const std::string& endpoint,
                 const std::map<std::string, std::string>& params = {},
                 const std::string& ifNoneMatch = "") {
        CURL* curl = curl_easy_init();
        std::string responseBody;
        std::string url = buildUrl(endpoint);

        // Build query string
        if (!params.empty()) {
            url += "?";
            for (const auto& [key, value] : params) {
                url += key + "=" + value + "&";
            }
            url.pop_back(); // Remove trailing &
        }

        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPGET, 1L);
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &responseBody);
        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);

        if (!ifNoneMatch.empty()) {
            defaultHeaders["If-None-Match"] = ifNoneMatch;
        }
        setHeaders(curl);

        CURLcode res = curl_easy_perform(curl);
        Response response;
        response.body = responseBody;

        if (res == CURLE_OK) {
            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.statusCode);
        } else {
            response.statusCode = 0;
            response.body = "CURL error: " + std::string(curl_easy_strerror(res));
        }

        curl_slist_free_all(headersList);
        defaultHeaders.erase("If-None-Match");
        curl_easy_cleanup(curl);
        return response;
    }

    Response post(const std::string& endpoint, const std::string& body) {
        CURL* curl = curl_easy_init();
        std::string responseBody;
        std::string url = buildUrl(endpoint);

        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_POST, 1L);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body.c_str());
        curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, body.length());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &responseBody);
        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);

        setHeaders(curl);

        CURLcode res = curl_easy_perform(curl);
        curl_slist_free_all(headersList);
        Response response;
        response.body = responseBody;
        if (res == CURLE_OK) {
            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.statusCode);
        } else {
            response.statusCode = 0;
            response.body = "CURL error: " + std::string(curl_easy_strerror(res));
        }
        curl_easy_cleanup(curl);
        return response;
    }

    Response put(const std::string& endpoint, const std::string& body) {
        CURL* curl = curl_easy_init();
        std::string responseBody;
        std::string url = buildUrl(endpoint);

        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body.c_str());
        curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, body.length());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &responseBody);
        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);

        setHeaders(curl);

        CURLcode res = curl_easy_perform(curl);
        curl_slist_free_all(headersList);
        Response response;
        response.body = responseBody;
        if (res == CURLE_OK) {
            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.statusCode);
        } else {
            response.statusCode = 0;
            response.body = "CURL error: " + std::string(curl_easy_strerror(res));
        }
        curl_easy_cleanup(curl);
        return response;
    }

    Response del(const std::string& endpoint) {
        CURL* curl = curl_easy_init();
        std::string responseBody;
        std::string url = buildUrl(endpoint);

        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "DELETE");
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &responseBody);
        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);

        setHeaders(curl);

        CURLcode res = curl_easy_perform(curl);
        curl_slist_free_all(headersList);
        Response response;
        response.body = responseBody;
        if (res == CURLE_OK) {
            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.statusCode);
        } else {
            response.statusCode = 0;
            response.body = "CURL error: " + std::string(curl_easy_strerror(res));
        }
        curl_easy_cleanup(curl);
        return response;
    }
};

// Usage example
int main() {
    RestClient client("https://api.example.com");

    // GET with caching
    auto r1 = client.get("/v1/books/1");
    std::cout << "GET /books/1 -> " << r1.statusCode << ": "
              << r1.body.substr(0, 100) << std::endl;

    // Follow up with conditional GET
    auto r2 = client.get("/v1/books/1", {}, "etag_from_r1");
    std::cout << "Conditional GET -> " << r2.statusCode << std::endl;

    // POST
    auto r3 = client.post("/v1/books",
        R"({"title":"Dune","author":"Frank Herbert","isbn":"9780441172719"})");
    std::cout << "POST /v1/books -> " << r3.statusCode << std::endl;

    // DELETE
    auto r4 = client.del("/v1/books/3");
    std::cout << "DELETE /v1/books/3 -> " << r4.statusCode << std::endl;

    return 0;
}
```

### 15.1.13 REST vs SOAP vs GraphQL vs gRPC Comparison

**Real-World Analogy: Ordering at Different Restaurants**

| Paradigm | Restaurant Analogy |
|----------|-------------------|
| **REST** | Buffet: you walk to each station (resource), pick what you want |
| **SOAP** | Fine dining with a strict protocol: you must use the correct fork for each course, follow exact etiquette |
| **GraphQL** | Customizable meal: tell the chef exactly what ingredients you want, they prepare exactly that |
| **gRPC** | Fast-food drive-through: predefined combos (protobuf schema), fast, efficient, multiple lanes |

**Comparison Table:**

| Aspect | REST | SOAP | GraphQL | gRPC |
|--------|------|------|---------|------|
| **Protocol** | HTTP/1.1, HTTP/2 | HTTP, SMTP, JMS | HTTP | HTTP/2 |
| **Message format** | JSON, XML, plain text | XML (SOAP envelope) | JSON | Protocol Buffers (binary) |
| **Interface definition** | OpenAPI (optional) | WSDL (required) | Schema Definition Language (SDL) | .proto files (required) |
| **Transport** | HTTP | HTTP, TCP, message queues | HTTP | HTTP/2 |
| **State** | Stateless | Stateless or stateful | Stateless | Stateless |
| **Caching** | Native HTTP caching | No built-in caching | Limited (single endpoint) | No built-in caching |
| **Streaming** | Limited (SSE, chunked) | No | Subscriptions (via WS) | Native (unary, server, client, bidirectional) |
| **Typing** | Loose (JSON dynamic) | Strong (XSD schemas) | Strong (SDL types) | Strong (protobuf) |
| **Client generation** | OpenAPI codegen | WSDL codegen | GraphQL Codegen | protoc compiler |
| **Performance** | Moderate | Slow (XML parsing) | Variable (query complexity) | Best (binary, multiplexed) |
| **Tooling maturity** | Excellent | Excellent | Good | Good |
| **Learning curve** | Low | High | Medium | Medium |
| **Use case** | Public APIs, web services | Enterprise, banking, strict contracts | Mobile apps, flexible UIs | Microservices, internal services |

**When to Use Which:**

| Scenario | Best Choice | Why |
|----------|-------------|-----|
| Public web API | REST | Universal HTTP support, cacheable, simple |
| Enterprise integration with contracts | SOAP | Formal contracts (WSDL), ACID transactions, WS-* standards |
| Mobile app with varied UIs | GraphQL | Client controls data shape, reduces over-fetching |
| Internal microservices communication | gRPC | Fast binary serialization, HTTP/2 streaming, typed contracts |
| Real-time data feeds | gRPC streaming | Native bidirection streaming over HTTP/2 |
| Simple CRUD API | REST | Straightforward, well-understood by all clients |

### 15.1.14 Interview Corner

**Q1: What is the difference between PUT and PATCH?**

PUT replaces the entire resource. PATCH applies a partial update. PUT is idempotent; PATCH is not necessarily idempotent (depends on the patch format). PUT sends the full resource representation; PATCH sends only the changes.

```
PUT /users/42  {"name":"Alice","email":"a@b.com","age":30}
  → Entire resource replaced. Repeating the same PUT yields the same state.

PATCH /users/42  {"age": 31}
  → Only the age field changes. Repeating JSON Merge Patch with {"age":31}
    is idempotent. But PATCH with {"op":"increment","path":"/age","value":1}
    is NOT idempotent (age increases each time).
```

**Q2: What does idempotency mean in HTTP methods?**

An idempotent method produces the same server state regardless of how many times it's applied. GET, PUT, DELETE, HEAD, OPTIONS, TRACE are idempotent. POST and PATCH are not (by default). Idempotency is critical for retry safety: if a client doesn't receive a response, it can safely retry GET/PUT/DELETE without side effects.

**Q3: Explain HATEOAS and its role in REST.**

HATEOAS (Hypermedia as the Engine of Application State) means API responses include links to navigate related resources. This allows clients to discover the API dynamically without hardcoding URLs. A Level 3 (Richardson Maturity Model) REST API uses HATEOAS. In practice, most APIs are Level 2 (HTTP methods + resources), and few achieve Level 3.

**Q4: What are the six REST constraints?**

1. Client-Server: separation of concerns
2. Stateless: each request contains all context
3. Cacheable: responses declare cacheability
4. Uniform Interface: standard resource identification, manipulation through representations, self-descriptive messages, HATEOAS
5. Layered System: intermediaries transparent to client
6. Code on Demand (optional): server sends executable code

**Q5: URI versioning vs header versioning vs query versioning: which is best?**

URI versioning (`/v1/resource`) is most common → visible in URLs, cache-friendly, easy to route. Header versioning keeps URLs clean but is opaque. Query versioning (`?version=1`) is simple but pollutes URLs and breaks caching. For public APIs, URI versioning is recommended; for internal APIs, header versioning can be acceptable.

**Q6: How does REST handle state if it's stateless?**

Statelessness refers to the server not storing client session state. Application state is maintained on the client and transferred to the server with each request (usually via tokens, authentication headers, and request parameters). The server never stores "this client was here before" context.

**Q7: What is the Richardson Maturity Model?**

| Level | Name | Description |
|-------|------|-------------|
| 0 | The Swamp of POX | Uses HTTP as a tunnel; single URI, single method (POST) |
| 1 | Resources | Multiple URIs (individual resources) but single method |
| 2 | HTTP Verbs | URIs + proper HTTP methods (GET/POST/PUT/DELETE) + status codes |
| 3 | Hypermedia Controls | Level 2 + HATEOAS links for API discoverability |

Most public APIs operate at Level 2. Achieving Level 3 is rare but is "true REST" per Fielding's definition.

### 15.1.15 Applications in Real Systems

**GitHub REST API** (`https://api.github.com`)

GitHub's API is a textbook REST implementation:
```
GET /repos/:owner/:repo          → Repository details
GET /repos/:owner/:repo/issues   → List issues
POST /repos/:owner/:repo/issues  → Create issue
PATCH /repos/:owner/:repo/issues/:number  → Update issue
GET /repos/:owner/:repo/pulls    → List pull requests
```

Key practices:
- HATEOAS: responses include `_links` with `rel: "self"`, `"html"`, `"comments"`
- Pagination: `Link` header with `rel="next"`, `rel="last"`
- Rate limiting: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` headers
- ETag caching: responses include `ETag`; conditional requests return `304 Not Modified`
- Versioning: `Accept: application/vnd.github.v3+json`

**Stripe API** (`https://api.stripe.com`)

Stripe's API demonstrates resource-oriented design:
```
POST /v1/customers            → Create customer
GET /v1/customers/:id         → Retrieve customer
POST /v1/charges              → Create charge (payment)
POST /v1/refunds              → Refund a charge
GET /v1/balance               → Retrieve account balance
```

Key practices:
- Idempotency keys: `Idempotency-Key` header ensures safe retries
- Expansion: `?expand[]=customer` to include related resources inline
- Pagination: cursor-based with `?starting_after=...`
- Object-oriented: all resources are JSON objects with `object` type field

**AWS REST APIs**

AWS services expose REST APIs with signature-based authentication:
```
GET /?Action=DescribeInstances&Version=2016-11-15  → List EC2 instances
PUT /{bucket}/{key}                                 → Upload S3 object
GET /{bucket}/{key}                                 → Download S3 object
```

Key practices:
- Query-based actions: some APIs use `?Action=...` (REST-RPC hybrid)
- Signature V4: HMAC-SHA256 signed requests for authentication
- S3 REST: fully RESTful with `GET/PUT/DELETE /bucket/key`
- Versioning in API and S3: both URI and action parameter versioning

## 15.2 WebSockets

WebSocket (RFC 6455) provides full-duplex communication over a single TCP connection after an HTTP upgrade handshake. The protocol is designed for real-time applications such as chat, live updates, and gaming.

**Handshake:**
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Response:
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

**Frame format:**

| FIN | RSV | Opcode | Mask | Length | Masking Key | Payload |
|-----|-----|--------|------|--------|-------------|---------|
| 1 b | 3 b | 4 b    | 1 b  | 7/7+16/7+64 b | 0 or 4 B | Variable |

Opcode types: 1 (text), 2 (binary), 8 (close), 9 (ping), 10 (pong).

Clients mask payload data; servers do not. Close frames carry a status code (1000 normal, 1001 going away, 1002 protocol error, 1003 unsupported data).

## 15.3 gRPC

gRPC uses Protocol Buffers for interface definition and HTTP/2 for transport. It supports four service types:

- **Unary**: single request, single response (like REST).
- **Server streaming**: single request, stream of responses.
- **Client streaming**: stream of requests, single response.
- **Bidirectional streaming**: independent streams of requests and responses.

### 15.3.1 Protocol Buffers Definition

```protobuf
service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc ListUsers (ListUsersRequest) returns (stream User);
  rpc UpdateUser (stream UpdateRequest) returns (UpdateResponse);
}

message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
}
```

gRPC performance advantages over JSON-based REST: binary serialization is faster and more compact; HTTP/2 multiplexing eliminates head-of-line blocking; streaming reduces latency for real-time data.

## 15.4 GraphQL

GraphQL (Facebook, 2015) is a query language and server runtime for APIs. Clients specify the exact data they need, reducing over-fetching and under-fetching common in REST.

### 15.4.1 Query Structure

```graphql
{
  user(id: 123) {
    name
    email
    orders {
      id
      total
      items {
        name
        price
      }
    }
  }
}
```

### 15.4.2 Schema Definition

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  orders: [Order!]!
}

type Order {
  id: ID!
  total: Float!
  items: [OrderItem!]!
}

type Query {
  user(id: ID!): User
  users: [User!]!
}

type Mutation {
  createUser(name: String!, email: String!): User!
}
```

GraphQL uses a single endpoint; the client specifies the data structure. Security concerns: complex queries can overload the server (depth limiting, query complexity analysis, rate limiting). Data loading efficiency requires batching (DataLoader pattern) to avoid N+1 query problems.

## 15.5 Server-Sent Events

SSE enables servers to push events to clients over HTTP. The client opens a connection; the server sends data as text/event-stream:

```
data: {"message": "Hello"}
\n\n
data: {"message": "World"}
\n\n
```

SSE is simpler than WebSockets (HTTP only, unidirectional server→client, automatic reconnection) but suitable for notifications, live feeds, and status updates.

## 15.6 WebRTC

WebRTC (Web Real-Time Communication, W3C/IETF) enables peer-to-peer audio, video, and data transfer between browsers without plugins.

**Architecture:**

- **Signaling**: SDP exchange via the application server (WebRTC does not define the signaling protocol; SIP, XMPP, or custom WebSocket signaling are used).
- **NAT traversal**: STUN (Session Traversal Utilities for NAT) discovers public IP and port; TURN (Traversal Using Relays around NAT) relays traffic when direct connection fails; ICE (Interactive Connectivity Establishment) coordinates STUN and TURN candidates.
- **DTLS-SRTP**: encrypts media streams. DTLS (Datagram TLS) provides key agreement; SRTP (Secure Real-time Transport Protocol) encrypts audio/video packets.
- **DataChannel**: SCTP over DTLS enables reliable/unreordered data streams.

## 15.7 API Gateways

An API gateway is a reverse proxy that sits between clients and backend services. It handles:

- Request routing (path-based or header-based)
- Authentication and authorization (OAuth2, JWT validation)
- Rate limiting (token bucket, leaky bucket per client)
- Caching (response cache for idempotent requests)
- Load balancing across service instances
- Request/response transformation (XML↔JSON)
- Monitoring and analytics (latency, error rates)

Common API gateways: Kong, NGINX, AWS API Gateway, Envoy, Traefik.

## ðŸ’¡ Pro Tips

- **REST â‰  CRUD**: Not every resource needs all four CRUD operations. Design resources around business actions. For example, `POST /orders/{id}/cancel` is more expressive than `PATCH /orders/{id}` with `{status: "cancelled"}`.
- **gRPC streaming is cheaper than polling**: For real-time feeds, use gRPC server streaming instead of REST polling. One persistent gRPC stream replaces hundreds of REST GET requests, reducing both latency and server load.
- **GraphQL query complexity limits are mandatory**: Without depth/width limiting, a single malicious query like `{users{posts{comments{user{posts{...}}}}}` can bring down your server. Always enforce max depth (5â€“7) and query cost analysis.
- **WebRTC needs a TURN server**: STUN works for 80â€“90% of NAT types, but symmetric NAT requires TURN relay. Always deploy a TURN server (coturn) for production WebRTC applications.
- **ETag + Cache-Control for production**: Never rely on one alone. Cache-Control gives you a freshness window, ETag provides validation when stale. Together they minimize both bandwidth and server load.
- **Rate limit at the gateway, not each service**: Centralized rate limiting at the API gateway (Kong, Envoy) ensures consistent enforcement. Per-service rate limiting creates gaps and inconsistent user experience.

## One-Sentence Takeaways

- RESTful APIs model resources as nouns and HTTP methods as verbs, using status codes for results.
- WebSocket provides full-duplex communication over a single TCP connection after an HTTP upgrade.
- gRPC uses Protocol Buffers and HTTP/2 for efficient binary streaming with four service types.
- GraphQL lets clients specify exact data needs, solving over-fetching and under-fetching.
- SSE provides simple unidirectional server push over HTTP.
- WebRTC enables peer-to-peer audio/video/data between browsers via ICE/STUN/TURN.

## Concept Comparison Table

| Protocol | Transport | Message Format | Streaming | Use Case |
|----------|-----------|----------------|-----------|----------|
| REST (HTTP/1.1) | TCP | JSON/XML | No | CRUD APIs, web services |
| WebSocket | TCP (upgraded) | Binary/Text | Full-duplex | Chat, live updates, gaming |
| gRPC | HTTP/2 | Protocol Buffers | Unary/Server/Client/Bidi | Microservices, real-time |
| GraphQL | HTTP | JSON (query string) | No (subscriptions via WS) | Flexible data fetching |
| SSE | HTTP | Text/event-stream | Server→Client | Notifications, feeds |
| WebRTC | UDP (DTLS) | Binary (media/data) | Peer-to-peer | Voice, video, file sharing |

## Quick Reference: RESTful API Design Cheat Sheet

| Operation | HTTP Method | Endpoint | Status Code | Idempotent |
|-----------|-------------|----------|-------------|------------|
| List | GET | /resources | 200 | Yes |
| Read | GET | /resources/{id} | 200 | Yes |
| Create | POST | /resources | 201 | No |
| Replace | PUT | /resources/{id} | 200 | Yes |
| Partial update | PATCH | /resources/{id} | 200 | No |
| Delete | DELETE | /resources/{id} | 204 | Yes |

## Cross-Application Matrix

| Application | Recommended API | Why |
|-------------|-----------------|-----|
| CRUD microservice | REST | Simple, well-understood, cacheable |
| Real-time chat | WebSocket | Low latency, full-duplex |
| Internal microservices | gRPC | Fast binary serialization, streaming |
| Mobile app with flexible UI | GraphQL | Client-specified fields, reduce payload |
| Server → browser notifications | SSE | Simple, auto-reconnect, HTTP-only |
| P2P video conference | WebRTC | Direct browser-to-browser media |

## Chapter Quiz

1. **Which HTTP method is idempotent?**
   - a) POST
   - b) PATCH
   - c) PUT âœ“
   - d) Both a and b

2. **What does WebSocket use for the initial handshake?**
   - a) UDP upgrade
   - b) HTTP upgrade âœ“
   - c) TLS directly
   - d) DNS query

3. **Which gRPC service type allows independent streams in both directions?**
   - a) Unary
   - b) Server streaming
   - c) Bidirectional streaming âœ“
   - d) Client streaming

4. **Which WebRTC component relays traffic when direct P2P fails?**
   - a) STUN
   - b) TURN âœ“
   - c) ICE
   - d) SDP

5. **What prevents malicious deep queries in GraphQL?**
   - a) Rate limiting
   - b) Query complexity analysis âœ“
   - c) JWT validation
   - d) DataLoader

6. **Which Cache-Control directive prevents any caching?**
   - a) `no-cache`
   - b) `no-store` âœ“
   - c) `private`
   - d) `must-revalidate`

7. **What status code does a conditional GET return when the resource has NOT changed?**
   - a) 200 OK
   - b) 204 No Content âœ“
   - c) 304 Not Modified
   - d) 412 Precondition Failed

8. **Which rate limiting algorithm allows burst traffic?**
   - a) Fixed window
   - b) Token bucket âœ“
   - c) Leaky bucket
   - d) Sliding window log

**Answers:** 1-c, 2-b, 3-c, 4-b, 5-b, 6-b, 7-c, 8-b

## Summary

RESTful APIs model resources as nouns with HTTP methods as verbs, leveraging status codes for result communication. The six REST constraints (client-server, stateless, cacheable, uniform interface, layered system, code on demand) define the architectural style. HTTP methods (GET/POST/PUT/DELETE/PATCH) have distinct semantics for safety and idempotency. Caching with ETag and Cache-Control dramatically improves performance. Rate limiting with token bucket algorithms protects against abuse. WebSockets provide full-duplex communication for real-time applications. gRPC uses Protocol Buffers and HTTP/2 for efficient binary streaming. GraphQL enables flexible client-driven queries. SSE offers simple server push. WebRTC enables browser-based peer-to-peer media. API gateways centralize cross-cutting concerns.

## Exercises

### Review Questions

1. What is the difference between PUT and PATCH in REST?
2. How does a WebSocket connection differ from a long-lived HTTP connection?
3. What advantage does gRPC streaming have over REST polling?
4. How does GraphQL solve the over-fetching problem common in REST?
5. What role does ICE play in WebRTC connection establishment?
6. Explain how ETag-based conditional requests reduce bandwidth usage.
7. Compare token bucket and fixed window rate limiting algorithms.
8. Why is POST not idempotent? Give a concrete example.

### Application Problems

9. Design a RESTful API for a library system with books, authors, members, and loans. Define the resource URIs, HTTP methods, request bodies, and response format for each operation.
10. A real-time collaborative document editor needs to synchronize changes across multiple users. Compare WebSockets, SSE, and gRPC streaming for this use case. Justify your recommendation.
11. An API gateway receives 10,000 requests per second. Each request requires authentication (database lookup), rate limiting (Redis check), and routing to one of 20 backend services. Compute the average latency added by the gateway if authentication takes 2 ms, rate limiting takes 0.5 ms, and routing takes 0.1 ms. What is the gateway's throughput capacity?

### Challenge Problems

12. **Design a real-time collaborative whiteboard protocol.** The whiteboard supports: (a) 10 simultaneous users, (b) vector drawing (lines, rectangles, circles), (c) undo/redo per user, and (d) cursor position sharing. Design the protocol using WebRTC DataChannel for peer-to-peer communication with a fallback to a WebSocket relay for users behind symmetric NAT. Define the message format (including CRDT or OT for conflict resolution), the signaling process, and the fallback mechanism. Analyze the bandwidth requirements for smooth real-time drawing at 60 updates per second per user.

13. **Design an HTTP caching strategy for a news API.** The API serves articles that are updated on average every 4 hours. Breaking news articles are updated every 5 minutes. User-specific feeds should not be cached by CDN. Design the Cache-Control and ETag strategy for each type of endpoint, considering: (a) article list endpoint, (b) single article endpoint, (c) breaking news endpoint, (d) user feed endpoint. Explain how you'd handle cache invalidation when an editor publishes an update.

14. **Implement a rate limiting design for a public API.** The API has three tiers: free (10 req/min), pro (100 req/min), and enterprise (10000 req/min). Design the distributed rate limiter using Redis. Include: (a) the data structure choice, (b) Lua script for atomic operations, (c) the token bucket parameters for each tier, (d) how you'd handle rate limit headers, and (e) graceful degradation when Redis is unavailable.

