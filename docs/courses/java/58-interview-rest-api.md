# REST API Interview Q&A

> **Previous:** [Spring Framework Interview Q&amp;A](./57-interview-spring.md) | **Next:** [Databases Interview Q&amp;A](./59-interview-databases.md)

This chapter covers 25 essential REST API interview questions from REST constraints and HTTP semantics through versioning, error handling, security, caching, testing, and HATEOAS. Each answer includes complete, compilable code examples targeting senior-level backend interviews.

![REST API Interview Topics - Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/58-interview-rest-api.png)


<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/58-interview-rest-api/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/hero.svg" alt="Chapter Banner: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/handwritten-notes.svg" alt="Handwritten Notes: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/sticky-notes.svg" alt="Sticky Notes: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/visual-explanation.svg" alt="Visual Explanation: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/architecture.svg" alt="Architecture: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/workflow.svg" alt="Workflow: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/mindmap.svg" alt="Mind Map: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/comparison.svg" alt="Comparison: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/cheatsheet.svg" alt="Cheat Sheet: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/interview-quiz.svg" alt="Quiz Card: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/58-interview-rest-api/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/58-interview-rest-api/social-card.svg" alt="Social Card: REST API Interview Q&A" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->

## Chapter at a Glance

| Topic | Key Focus | Key Questions |
|-------|----------|--------------|
| Core Concepts | Foundational understanding | Definitions, contrasts, trade-offs |
| Code Examples | Compilable, runnable solutions | Real interview scenarios |
| Best Practices | Production-ready patterns | Pitfalls to avoid |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Core Concepts] --> B[Code Examples]
    B --> C[Edge Cases]
    C --> D[Best Practices]
```

### Q1: What are the six constraints of REST? How do they affect API design?


> **Pro Tip:** In interviews, always start with the "why" before the "how." Explaining the reasoning behind a design choice is more valuable than reciting syntax.

> **Remember:** Code readability matters in interviews. Write clean, well-structured code with meaningful variable names.


**Answer:** REST (Representational State Transfer) has six architectural constraints defined by Roy Fielding: Uniform Interface, Stateless, Cacheable, Client-Server, Layered System, and Code on Demand (optional). These constraints create scalable, loosely coupled, and independently deployable services.

```java
// === 1. Uniform Interface ===
// Resources identified by URIs, manipulated through representations
// Self-descriptive messages, HATEOAS for state transitions

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;

@RestController
@RequestMapping("/api/orders")
class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Uniform interface: GET retrieves representation of resource
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {
        return orderService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // POST creates new resource, returns 201 with Location header
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order saved = orderService.save(order);
        return ResponseEntity
            .created(URI.create("/api/orders/" + saved.getId()))
            .body(saved);
    }

    // PUT replaces entire resource (idempotent)
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id,
                                             @RequestBody Order order) {
        return ResponseEntity.ok(orderService.update(id, order));
    }

    // PATCH partial update (non-idempotent if not full replacement)
    @PatchMapping("/{id}")
    public ResponseEntity<Order> partialUpdate(@PathVariable Long id,
                                               @RequestBody Map<String, Object> changes) {
        return ResponseEntity.ok(orderService.partialUpdate(id, changes));
    }

    // DELETE removes resource
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

// === 2. Stateless ===
/*
Each request contains ALL information needed to process it.
No server-side session state. Authentication token in every request:

GET /api/orders
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
*/

// Stateless filter → extracts user from token on every request
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

@Component
class StatelessAuthFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String token = httpRequest.getHeader("Authorization");

        // Extract and validate JWT token on EVERY request (no session)
        if (token != null && token.startsWith("Bearer ")) {
            String userId = extractUserId(token);
            // Set user context for this request only
            UserContext.set(userId);
        }

        try {
            chain.doFilter(request, response);
        } finally {
            UserContext.clear(); // Clean up after request completes
        }
    }

    private String extractUserId(String token) {
        return "user-123";
    }
}

// ThreadLocal for request-scoped user context (stateless-friendly)
class UserContext {
    private static final ThreadLocal<String> currentUser = new ThreadLocal<>();

    public static void set(String userId) { currentUser.set(userId); }
    public static String get() { return currentUser.get(); }
    public static void clear() { currentUser.remove(); }
}

// === 3. Cacheable ===
/*
Responses must explicitly indicate cacheability via Cache-Control headers.
GET and HEAD are cacheable by default; POST, PUT, PATCH, DELETE are not.
*/

@GetMapping("/{id}")
public ResponseEntity<Order> getOrderCached(@PathVariable Long id) {
    return orderService.findById(id)
        .map(order -> ResponseEntity.ok()
            .cacheControl(CacheControl.maxAge(30, TimeUnit.SECONDS)
                .mustRevalidate())
            .eTag("\"" + order.getVersion() + "\"")
            .body(order))
        .orElse(ResponseEntity.notFound().build());
}

// === 4. Client-Server ===
/*
Separation of concerns: client handles UI, server handles data storage.
Enables independent evolution of client and server.
*/

// === 5. Layered System ===
/*
Client cannot tell if it's talking directly to server or to intermediary
(load balancer, cache, API gateway, proxy). Enables scalability.
*/

// === 6. Code on Demand (optional) ===
/*
Server can transfer executable code to client (e.g., JavaScript applets).
Rarely used in modern REST APIs (more common in web apps).
*/

// === REST constraint violations ===
/*
Violation                      Example                      Fix
────────────────────────────────────────────────────────────────────
Not stateless                 Storing auth in session      Use JWT tokens
Not uniform interface         /api/getOrder?id=123         GET /api/orders/123
Not cacheable                 No Cache-Control headers     Add caching headers
Ignoring layered system       Direct DB access from web    Service layer + proxy
*/
```

REST constraints create loosely coupled, evolvable systems. The uniform interface constraint is the most impactful → it standardizes how clients interact with resources. Statelessness enables horizontal scaling but requires token-based auth on every request. Cacheability dramatically improves performance for read-heavy APIs.

### Q2: What is the difference between POST and PUT? When should you use PATCH?


**Answer:** POST creates resources (non-idempotent, server-generated ID). PUT replaces the entire resource (idempotent, client-specified identifier). PATCH applies partial modifications (can be non-idempotent). POST is for creation with unknown URL; PUT for full replacement at a known URL; PATCH for partial updates.

```java
// === POST: Create (non-idempotent) ===
/*
Each POST with same body creates a NEW resource with a different ID.
Returns 201 Created with Location header.
*/

@PostMapping("/api/orders")
public ResponseEntity<Order> createOrder(@Valid @RequestBody CreateOrderRequest request) {
    Order order = new Order();
    order.setCustomerId(request.customerId());
    order.setItems(request.items());
    order.setTotal(request.total());
    order.setStatus("CREATED");
    order.setCreatedAt(LocalDateTime.now());

    Order saved = orderService.save(order);

    return ResponseEntity
        .created(URI.create("/api/orders/" + saved.getId()))
        .body(saved);
}

// Client sends:             Server response:
// POST /api/orders          201 Created
// {"customerId": 123,       Location: /api/orders/456
//  "total": 99.99}          {"id": 456, ...}

// === PUT: Full replacement (idempotent) ===
/*
Same PUT with same body produces the same resource state.
Returns 200 OK (or 201 if created at that URL).
*/

@PutMapping("/api/orders/{id}")
public ResponseEntity<Order> replaceOrder(@PathVariable Long id,
                                          @Valid @RequestBody ReplaceOrderRequest request) {
    // idempotent → calling this 5 times with same body = same result
    Order order = orderService.findById(id)
        .orElse(new Order());

    order.setCustomerId(request.customerId());
    order.setItems(request.items());
    order.setTotal(request.total());

    // PUT replaces ALL fields → missing fields become null/default
    Order saved = orderService.save(order);
    return ResponseEntity.ok(saved);
}

// Idempotency demonstration:
/*
PUT /api/orders/456           PUT /api/orders/456
{"customerId": 123,           {"customerId": 123,
 "total": 99.99}               "total": 99.99}
                               → Same result both times

BUT:
PUT /api/orders/456           PUT /api/orders/456
{"total": 99.99}              {"total": 99.99, "customerId": 123
                              → DIFFERENT → "customerId" is now null
                                 (because PUT replaces the whole resource)
*/

// === PATCH: Partial update (may be non-idempotent) ===
/*
PATCH with JSON Patch (RFC 6902) or Merge Patch (RFC 7396).
Merge Patch is simpler → send only the fields you want to change.
*/

@PatchMapping("/api/orders/{id}")
public ResponseEntity<Order> partialUpdateOrder(
        @PathVariable Long id,
        @RequestBody Map<String, Object> updates) {

    Order order = orderService.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Order " + id));

    // Apply only provided fields
    if (updates.containsKey("status")) {
        order.setStatus((String) updates.get("status"));
    }
    if (updates.containsKey("total")) {
        order.setTotal((Double) updates.get("total"));
    }
    // Other fields remain unchanged

    Order saved = orderService.save(order);
    return ResponseEntity.ok(saved);
}

// Client sends:             Effect:
// PATCH /api/orders/456     Only "status" field changes
// {"status": "SHIPPED"}     All other fields remain as-is

// === JSON Patch (RFC 6902) → more expressive ===
/*
PATCH /api/orders/456
Content-Type: application/json-patch+json

[
    {"op": "replace", "path": "/status", "value": "SHIPPED"},
    {"op": "add", "path": "/tags/-", "value": "priority"},
    {"op": "remove", "path": "/discountCode"}
]

// Operations: add, remove, replace, move, copy, test
*/

// === Summary ===
/*
Method   Idempotent  Safe   Use Case                Response
──────────────────────────────────────────────────────────────
GET      Yes         Yes    Retrieve resource       200 OK
POST     No          No     Create (unknown URL)    201 Created
PUT      Yes         No     Replace entire resource 200 OK / 201
PATCH    Maybe       No     Partial update          200 OK
DELETE   Yes         No     Remove resource         204 No Content
HEAD     Yes         Yes    Headers only            200 OK
OPTIONS  Yes         Yes    Allowed methods         200 OK
*/
```

POST creates, PUT replaces fully, PATCH updates partially. The idempotency guarantee of PUT makes it safe for retry logic. For PATCH, use JSON Merge Patch for simple cases and JSON Patch (RFC 6902) for complex operations. Always include idempotency keys for POST operations that trigger payments or critical actions.

### Q3: HTTP status codes → how do you choose the right ones?


**Answer:** HTTP status codes communicate the result of a request. 2xx for success, 3xx for redirection, 4xx for client errors, 5xx for server errors. Choosing correctly is critical for API usability and proper client behavior. Common pattern: 200 for GET success, 201 for creation, 204 for deletion, 400 for bad input, 401/403 for auth issues, 404 for not found, 409 for conflicts, 422 for validation errors, 429 for rate limiting, 500 for unexpected errors.

```java
// === 2xx Success codes ===

// 200 OK → Standard success for GET, PUT, PATCH
@GetMapping("/api/orders/{id}")
public ResponseEntity<Order> getOrder(@PathVariable Long id) {
    return orderService.findById(id)
        .map(order -> ResponseEntity.ok()
            .eTag("\"" + order.getVersion() + "\"")
            .body(order))
        .orElse(ResponseEntity.notFound().build());
}

// 201 Created → After successful resource creation (POST)
@PostMapping("/api/orders")
public ResponseEntity<Order> createOrder(@RequestBody Order order) {
    Order saved = orderService.save(order);
    return ResponseEntity
        .created(URI.create("/api/orders/" + saved.getId()))
        .body(saved);
}

// 202 Accepted → Request accepted but processing not complete (async)
@PostMapping("/api/reports")
public ResponseEntity<ReportStatus> requestReport(@RequestBody ReportRequest request) {
    String reportId = reportService.scheduleReport(request);
    return ResponseEntity
        .accepted()
        .body(new ReportStatus(reportId, "PENDING",
            URI.create("/api/reports/" + reportId + "/status")));
}

// 204 No Content → Successful delete or update with no response body
@DeleteMapping("/api/orders/{id}")
public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
    orderService.delete(id);
    return ResponseEntity.noContent().build();
}

// === 3xx Redirection ===

// 301 Moved Permanently → Resource has new permanent URL
@GetMapping("/api/old-orders/{id}")
public ResponseEntity<Void> redirectPermanent(@PathVariable Long id) {
    return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY)
        .location(URI.create("/api/orders/" + id))
        .build();
}

// 303 See Other → Redirect to status resource (after POST)
@PostMapping("/api/orders/async")
public ResponseEntity<Void> createOrderAsync(@RequestBody Order order) {
    String jobId = orderService.startAsyncCreation(order);
    return ResponseEntity.status(HttpStatus.SEE_OTHER)
        .location(URI.create("/api/jobs/" + jobId))
        .build();
}

// 304 Not Modified → Cached resource still valid (ETag)
@GetMapping("/api/orders/{id}")
public ResponseEntity<Order> getOrderConditional(
        @PathVariable Long id,
        @RequestHeader(value = "If-None-Match", required = false) String ifNoneMatch) {

    Order order = orderService.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Order " + id));

    String currentEtag = "\"" + order.getVersion() + "\"";

    if (ifNoneMatch != null && ifNoneMatch.equals(currentEtag)) {
        return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
    }

    return ResponseEntity.ok()
        .eTag(currentEtag)
        .body(order);
}

// === 4xx Client errors ===

// 400 Bad Request → Malformed request syntax
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<ProblemDetail> handleValidation(MethodArgumentNotValidException ex) {
    ProblemDetail pd = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
    pd.setTitle("Validation Failed");
    pd.setDetail("Request body contains invalid fields");

    Map<String, List<String>> errors = new HashMap<>();
    ex.getBindingResult().getFieldErrors().forEach(fe ->
        errors.computeIfAbsent(fe.getField(), k -> new ArrayList<>()).add(fe.getDefaultMessage()));
    pd.setProperty("errors", errors);

    return ResponseEntity.badRequest().body(pd);
}

// 401 Unauthorized → Missing or invalid authentication
@ExceptionHandler(AuthenticationException.class)
public ResponseEntity<ProblemDetail> handleUnauthorized(AuthenticationException ex) {
    ProblemDetail pd = ProblemDetail.forStatusAndDetail(
        HttpStatus.UNAUTHORIZED, ex.getMessage());
    pd.setTitle("Authentication Required");
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
        .header("WWW-Authenticate", "Bearer realm=\"api\"")
        .body(pd);
}

// 403 Forbidden → Authenticated but not authorized
@ExceptionHandler(AccessDeniedException.class)
public ResponseEntity<ProblemDetail> handleForbidden(AccessDeniedException ex) {
    ProblemDetail pd = ProblemDetail.forStatusAndDetail(
        HttpStatus.FORBIDDEN, "Insufficient permissions");
    pd.setTitle("Access Denied");
    return ResponseEntity.status(HttpStatus.FORBIDDEN).body(pd);
}

// 404 Not Found → Resource doesn't exist
@ExceptionHandler(ResourceNotFoundException.class)
public ResponseEntity<ProblemDetail> handleNotFound(ResourceNotFoundException ex) {
    ProblemDetail pd = ProblemDetail.forStatusAndDetail(
        HttpStatus.NOT_FOUND, ex.getMessage());
    pd.setTitle("Resource Not Found");
    pd.setProperty("resourceId", ex.getResourceId());
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(pd);
}

// 405 Method Not Allowed → Wrong HTTP method
// Spring Boot returns this automatically when no mapping exists

// 409 Conflict → Resource state conflicts with request
@ExceptionHandler(ConcurrentModificationException.class)
public ResponseEntity<ProblemDetail> handleConflict(RuntimeException ex) {
    ProblemDetail pd = ProblemDetail.forStatusAndDetail(
        HttpStatus.CONFLICT, "Resource was modified by another request");
    pd.setTitle("Conflict");
    return ResponseEntity.status(HttpStatus.CONFLICT).body(pd);
}

// 410 Gone → Resource was intentionally removed (different from 404)
@GetMapping("/api/orders/v1/{id}")
public ResponseEntity<Void> orderDeprecated(@PathVariable Long id) {
    return ResponseEntity.status(HttpStatus.GONE)
        .header("Deprecation", "true")
        .build();
}

// 415 Unsupported Media Type → Wrong Content-Type
// Spring Boot returns this automatically when consumes doesn't match

// 422 Unprocessable Entity → Semantic validation error
@ExceptionHandler(BusinessValidationException.class)
public ResponseEntity<ProblemDetail> handleUnprocessable(BusinessValidationException ex) {
    ProblemDetail pd = ProblemDetail.forStatusAndDetail(
        HttpStatus.UNPROCESSABLE_ENTITY, ex.getMessage());
    pd.setTitle("Business Validation Failed");
    pd.setProperty("code", ex.getErrorCode());
    return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(pd);
}

// 429 Too Many Requests → Rate limit exceeded
@Component
class RateLimitFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        String apiKey = httpRequest.getHeader("X-API-Key");
        if (isRateLimited(apiKey)) {
            httpResponse.setStatus(429);
            httpResponse.setHeader("Retry-After", "60");
            httpResponse.getWriter().write("Rate limit exceeded");
            return;
        }
        chain.doFilter(request, response);
    }
    private boolean isRateLimited(String key) { return false; }
}

// === 5xx Server errors ===

// 500 Internal Server Error → Unexpected server failure
@ExceptionHandler(Exception.class)
public ResponseEntity<ProblemDetail> handleUnexpected(Exception ex) {
    // Log full error internally but return generic message
    log.error("Unexpected error", ex);
    ProblemDetail pd = ProblemDetail.forStatusAndDetail(
        HttpStatus.INTERNAL_SERVER_ERROR, "An unexpected error occurred");
    pd.setTitle("Internal Server Error");
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(pd);
}

// 502 Bad Gateway → Upstream service returned error
// 503 Service Unavailable → Server temporarily overloaded
// 504 Gateway Timeout → Upstream service timed out

// === Status code decision flow ===
/*
Request received
├─ Parse error?                         → 400 Bad Request
├─ Authentication missing/invalid?       → 401 Unauthorized
├─ Authenticated but forbidden?          → 403 Forbidden
├─ Resource doesn't exist?               → 404 Not Found
├─ Method not allowed?                   → 405 Method Not Allowed
├─ Content-Type unsupported?             → 415 Unsupported Media Type
├─ Validation error (semantic)?          → 422 Unprocessable Entity
├─ Concurrent modification?              → 409 Conflict
├─ Rate limited?                         → 429 Too Many Requests
├─ Request succeeds
│  ├─ GET / HEAD → 200 OK
│  ├─ POST (created) → 201 Created
│  ├─ PUT / PATCH (updated) → 200 OK
│  ├─ DELETE (no body) → 204 No Content
│  └─ Async accepted → 202 Accepted
└─ Server error?                         → 500 Internal Server Error
*/
```

Choose status codes to enable correct client behavior without inspecting the response body. Use 201 for creation, 202 for async acceptance, 204 for successful empty responses, 400 for bad syntax, 422 for bad semantics, 409 for conflicts, 429 for rate limits. Never expose 5xx details to clients → log internally, return generic messages.
### Q4: RESTful URL design → what are the best practices?


**Answer:** Good REST URLs use nouns (not verbs), plural collection names, hierarchical paths for sub-resources, query parameters for filtering/sorting/pagination, and avoid deep nesting (max 2-3 levels). URLs should represent resources, not actions. Use kebab-case for multi-word resources.

```java
// === âœ… GOOD URL design ===
/*
Collection:        GET    /api/orders
Single item:       GET    /api/orders/{id}
Sub-resource:      GET    /api/orders/{id}/items
Single sub-item:   GET    /api/orders/{id}/items/{itemId}
Related:           GET    /api/orders/{id}/payments
Filtering:         GET    /api/orders?status=SHIPPED&customerId=123
Sorting:           GET    /api/orders?sort=-createdAt,-id
Pagination:        GET    /api/orders?page=0&size=20
Field selection:   GET    /api/orders?fields=id,status,total
Search:            GET    /api/orders/search?q=keyword
*/

// === âŒ BAD URL design ===
/*
getAllOrders        → GET    /api/getAllOrders           (verb in URL)
getOrder            → GET    /api/getOrder?id=123        (verb + query param)
createOrder         → POST   /api/createOrder            (verb in URL)
updateOrder         → PUT    /api/updateOrder            (verb in URL)
deleteOrder         → GET    /api/deleteOrder?id=123     (wrong method + verb)
Orders              → GET    /api/Orders                 (capital letter)
order-service       → GET    /api/order-service          (kebab is OK, but misleading)
allOrdersCamelCase  → GET    /api/allOrdersCamelCase     (camelCase in URLs)
api/orders/list     → GET    /api/orders/list            (redundant nesting)
api/orders/detail   → GET    /api/orders/detail          (redundant nesting)
api/orders/customer → GET    /api/orders/customer/123/orders  (deep nesting)
*/

// === Controller implementing good URL design ===
import org.springframework.data.domain.*;
import org.springframework.data.web.PagedModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
class OrderApiController {
    private final OrderService orderService;
    private final OrderItemService itemService;
    private final PaymentService paymentService;

    public OrderApiController(OrderService orderService,
                               OrderItemService itemService,
                               PaymentService paymentService) {
        this.orderService = orderService;
        this.itemService = itemService;
        this.paymentService = paymentService;
    }

    // GET /api/orders → collection with filtering, sorting, pagination
    @GetMapping
    public PagedModel<OrderSummary> listOrders(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Long customerId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "-createdAt") String sort) {

        Pageable pageable = PageRequest.of(page, size, parseSort(sort));
        return orderService.findAll(status, customerId, pageable);
    }

    // GET /api/orders/{id} → single resource
    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return orderService.findById(id);
    }

    // GET /api/orders/{id}/items → sub-resource collection
    @GetMapping("/{id}/items")
    public List<OrderItem> getOrderItems(@PathVariable Long id) {
        return itemService.findByOrderId(id);
    }

    // GET /api/orders/{id}/items/{itemId} → single sub-resource
    @GetMapping("/{id}/items/{itemId}")
    public OrderItem getOrderItem(@PathVariable Long id, @PathVariable Long itemId) {
        return itemService.findByOrderIdAndItemId(id, itemId);
    }

    // GET /api/orders/search → dedicated search endpoint
    @GetMapping("/search")
    public List<Order> searchOrders(@RequestParam String q,
                                    @RequestParam(defaultValue = "0") int page) {
        return orderService.search(q, page);
    }

    private Sort parseSort(String sortParam) {
        String[] parts = sortParam.split(",");
        List<Sort.Order> orders = new ArrayList<>();
        for (String part : parts) {
            if (part.startsWith("-")) {
                orders.add(Sort.Order.desc(part.substring(1)));
            } else {
                orders.add(Sort.Order.asc(part));
            }
        }
        return Sort.by(orders);
    }
}

// === Naming conventions ===
/*
Concept             Good                  Bad
────────────────────────────────────────────────────
Collection          /api/orders           /api/OrdersList
Single resource     /api/orders/123       /api/order?id=123
Sub-resource        /api/orders/123/items /api/getOrderItems?orderId=123
Actions             POST /api/orders/pay  POST /api/orders/123/pay
                    Body: {orderId: 123}  Body: {method: "credit"}
Relationships       /api/orders/123/      /api/orders/123/
                    payments              getPaymentsForOrder
Filtering           ?status=SHIPPED       ?action=filter&by=status
Sorting             ?sort=-createdAt      ?sortBy=createdAt&order=desc
Pagination          ?page=0&size=20       ?offset=0&limit=20
Versioning          /api/v1/orders        /api/orders?version=1

Resource naming rules:
1. Use lowercase, kebab-case: order-items (not OrderItems, orderItems)
2. Use plural nouns: /api/orders (not /api/order)
3. Use query params for filtering/sorting: ?status=SHIPPED
4. Keep hierarchies shallow: /api/customers/123/orders (not /api/.../.../...)
5. Use verbs only for non-CRUD actions: /api/orders/123/cancel
6. Never use file extensions: /api/orders/123.json → /api/orders/123 (use Accept header)
*/
```

Good URLs are self-documenting and consistent. Use plural nouns for collections, path parameters for identities, query parameters for filtering. Keep nesting to 2-3 levels max → deeper hierarchies suggest poor resource modeling. Use actions as sub-resources (e.g., /api/orders/123/cancel) only for operations that don't map to standard CRUD.
### Q5: REST API versioning → what strategies exist?


**Answer:** Four main API versioning strategies: URI path versioning (/v1/orders), query parameter (?v=1), custom header (Accept: application/vnd.company.v1+json), and content negotiation (Accept header media type versioning). URI versioning is most common for public APIs. Content negotiation is most RESTful but harder to consume.

```java
// === 1. URI path versioning (most common) ===
/*
GET /api/v1/orders/123
GET /api/v2/orders/123

Pros: Explicit, easy to route, cache-friendly
Cons: URI changes, violates REST principle of "resource identity"
*/

// V1 controller
@RestController
@RequestMapping("/api/v1/orders")
class OrderV1Controller {
    @GetMapping
    public List<OrderV1> listOrders() {
        return orderService.findAllV1();
    }
}

// V2 controller (added customer details)
@RestController
@RequestMapping("/api/v2/orders")
class OrderV2Controller {
    @GetMapping
    public List<OrderV2> listOrders() {
        return orderService.findAllV2();
    }
}

// Global prefix configuration (application.yml)
/*
server:
  servlet:
    context-path: /api/v1
*/

// === 2. Query parameter versioning ===
/*
GET /api/orders?version=1
GET /api/orders?version=2

Pros: Same URI, easy for clients to change
Cons: Caching issues, pollutes query params, less discoverable
*/

@GetMapping("/api/orders")
public ResponseEntity<?> listOrders(
        @RequestParam(name = "version", defaultValue = "1") int version) {
    if (version == 1) {
        return ResponseEntity.ok(orderService.findAllV1());
    } else if (version == 2) {
        return ResponseEntity.ok(orderService.findAllV2());
    }
    return ResponseEntity.badRequest().body("Unsupported version: " + version);
}

// === 3. Custom header versioning ===
/*
GET /api/orders
X-API-Version: 1

Pros: Clean URL, no URI pollution
Cons: Harder to test in browser, requires custom header
*/

@GetMapping("/api/orders")
public ResponseEntity<?> listOrdersByHeader(
        @RequestHeader("X-API-Version") Optional<String> version) {
    if (version.isEmpty() || version.get().equals("1")) {
        return ResponseEntity.ok(orderService.findAllV1());
    }
    return ResponseEntity.ok(orderService.findAllV2());
}

// === 4. Content negotiation (Accept header) ===
/*
GET /api/orders
Accept: application/vnd.company.orders-v1+json

Pros: Most RESTful, clean URI, leverages HTTP semantics
Cons: Complex client implementation, verbose headers
*/

@GetMapping(value = "/api/orders",
            produces = "application/vnd.company.orders-v1+json")
public List<OrderV1> listOrdersV1() {
    return orderService.findAllV1();
}

@GetMapping(value = "/api/orders",
            produces = "application/vnd.company.orders-v2+json")
public List<OrderV2> listOrdersV2() {
    return orderService.findAllV2();
}

// === Versioning strategy comparison ===
/*
Strategy           URI Path     Query Param   Custom Header   Accept Header
───────────────────────────────────────────────────────────────────────────────
Caching            Good         Poor          Good            Good
Browser testing    Easy         Easy          Hard            Hard
RESTful purity     Low          Low           Medium          High
Client effort      Low          Low           Medium          High
Default version    Current      Latest        Latest          Latest
URL change?        Yes          No            No              No
Documentation      Per-version  Single        Single          Single

Recommendations:
- Public APIs: URI path versioning (most practical)
- Internal APIs: Accept header versioning (most RESTful)
- Rapid iteration: Custom header (no URL changes)
- Avoid: Query parameter (caching issues, non-standard)
*/

// === Deprecation handling ===
@GetMapping("/api/v1/orders")
public ResponseEntity<List<OrderV1>> listOrdersV1() {
    return ResponseEntity.ok()
        .header("Deprecation", "true")
        .header("Sunset", "Sat, 31 Dec 2025 23:59:59 GMT")
        .header("Link", "</api/v2/orders>; rel=\"successor-version\"")
        .body(orderService.findAllV1());
}

// === Version migration example ===
/*
V1 response:
{
    "id": 1,
    "customerName": "John Doe",
    "orderDate": "2024-01-15",
    "total": 99.99
}

V2 response (added fields):
{
    "id": 1,
    "customer": {
        "id": 123,
        "name": "John Doe",
        "email": "john@example.com"
    },
    "orderDate": "2024-01-15T10:30:00Z",
    "total": {
        "amount": 99.99,
        "currency": "USD"
    },
    "items": [
        {"productId": 456, "name": "Widget", "quantity": 2}
    ]
}

Migration approach:
1. Announce deprecation well in advance (>6 months for public APIs)
2. Keep old version running alongside new version
3. Provide migration guide for each breaking change
4. Use sunset header to inform clients of removal dates
5. Monitor usage metrics per version to know when to sunset
*/
```

URI path versioning is the most practical choice for public APIs → it's explicit, easy to route, cache-friendly, and simple for clients. Content negotiation is theoretically more RESTful but adds client complexity. Always provide deprecation headers and migration guides when retiring versions.
### Q6: How do you implement pagination, sorting, and filtering?


**Answer:** Spring Data provides Pageable and Sort abstractions for pagination and sorting. Combine with Spring Data JPA Specifications or Querydsl for dynamic filtering. Use cursor-based pagination for real-time data and offset-based for stable data. Always validate sort properties to prevent injection attacks.

```java
// === 1. Offset-based pagination (Spring Data Page) ===
import org.springframework.data.domain.*;
import org.springframework.data.web.PagedModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
class OrderPaginationController {
    private final OrderRepository repository;

    public OrderPaginationController(OrderRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public PagedModel<Order> listOrders(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "-createdAt") String sort) {

        // Validate and parse sort parameters
        Pageable pageable = PageRequest.of(page, Math.min(size, 100),
            Sort.by(parseSortParams(sort)));

        Page<Order> result = repository.findAll(pageable);

        // PagedModel wraps Page with HAL links
        return new PagedModel<>(result);
    }

    // Safe sort parser → only allows known fields
    private List<Sort.Order> parseSortParams(String sortParam) {
        Set<String> allowedFields = Set.of(
            "id", "createdAt", "total", "status", "customerName");
        List<Sort.Order> orders = new ArrayList<>();

        for (String part : sortParam.split(",")) {
            if (part.isBlank()) continue;
            boolean desc = part.startsWith("-");
            String field = desc ? part.substring(1) : part;

            if (allowedFields.contains(field)) {
                orders.add(desc
                    ? Sort.Order.desc(field)
                    : Sort.Order.asc(field));
            }
        }
        return orders;
    }
}

// Response format:
/*
{
    "content": [...],
    "page": {
        "size": 20,
        "number": 0,
        "totalElements": 150,
        "totalPages": 8
    }
}
*/

// === 2. Cursor-based pagination (keyset pagination) ===
/*
Better for real-time data (new items inserted frequently).
Uses a WHERE clause instead of OFFSET → O(1) not O(n).
*/

@GetMapping("/api/events")
public List<Event> listEvents(
        @RequestParam(required = false) String cursor,
        @RequestParam(defaultValue = "20") int limit) {

    limit = Math.min(limit, 100);

    if (cursor == null) {
        // First page → get most recent
        return eventRepository.findFirstByOrderByIdDesc(
            PageRequest.of(0, limit));
    } else {
        Long cursorId = Long.parseLong(cursor);
        // Get items BEFORE the cursor
        return eventRepository.findByIdLessThanOrderByIdDesc(
            cursorId, PageRequest.of(0, limit));
    }
}

// Repository for cursor pagination
interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findFirstByOrderByIdDesc(Pageable pageable);
    List<Event> findByIdLessThanOrderByIdDesc(Long cursor, Pageable pageable);
}

// Response with next cursor:
/*
{
    "data": [...],
    "nextCursor": "1450",  // ID of the last item in this page
    "hasMore": true
}
*/

// === 3. Filtering with JPA Specifications ===
import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
class OrderFilterController {
    private final OrderRepository repository;

    @GetMapping
    public List<Order> filterOrders(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) LocalDate fromDate,
            @RequestParam(required = false) LocalDate toDate,
            @RequestParam(required = false) Double minTotal,
            @RequestParam(required = false) Long customerId) {

        Specification<Order> spec = Specification.where(null);

        if (status != null) {
            spec = spec.and((root, query, cb) ->
                cb.equal(root.get("status"), status));
        }
        if (fromDate != null) {
            spec = spec.and((root, query, cb) ->
                cb.greaterThanOrEqualTo(root.get("createdAt"), fromDate));
        }
        if (toDate != null) {
            spec = spec.and((root, query, cb) ->
                cb.lessThanOrEqualTo(root.get("createdAt"), toDate));
        }
        if (minTotal != null) {
            spec = spec.and((root, query, cb) ->
                cb.greaterThanOrEqualTo(root.get("total"), minTotal));
        }
        if (customerId != null) {
            spec = spec.and((root, query, cb) ->
                cb.equal(root.get("customerId"), customerId));
        }

        return repository.findAll(spec, Sort.by(Sort.Direction.DESC, "createdAt"));
    }

    // Advanced filtering with search/filter objects
    @GetMapping("/search")
    public Page<Order> searchOrders(@RequestBody OrderSearchCriteria criteria,
                                    Pageable pageable) {
        return repository.findAll(criteria.toSpecification(), pageable);
    }
}

// Filter criteria class
class OrderSearchCriteria {
    private String status;
    private LocalDate fromDate;
    private LocalDate toDate;
    private Double minTotal;
    private Double maxTotal;
    private Long customerId;
    private String searchTerm;

    public Specification<Order> toSpecification() {
        return Specification.where(null)
            .and(like("status", status))
            .and(dateBetween("createdAt", fromDate, toDate))
            .and(greaterThan("total", minTotal))
            .and(lessThan("total", maxTotal))
            .and(equal("customerId", customerId))
            .and(searchAllFields(searchTerm));
    }

    private Specification<Order> like(String field, String value) {
        return value == null ? Specification.where(null) :
            (root, query, cb) -> cb.like(
                cb.lower(root.get(field)), "%" + value.toLowerCase() + "%");
    }

    private Specification<Order> equal(String field, Object value) {
        return value == null ? Specification.where(null) :
            (root, query, cb) -> cb.equal(root.get(field), value);
    }

    private Specification<Order> dateBetween(String field,
            LocalDate from, LocalDate to) {
        if (from == null && to == null) return Specification.where(null);
        return (root, query, cb) -> {
            List<jakarta.persistence.criteria.Predicate> predicates
                = new ArrayList<>();
            if (from != null) {
                predicates.add(cb.greaterThanOrEqualTo(
                    root.get(field), from));
            }
            if (to != null) {
                predicates.add(cb.lessThanOrEqualTo(
                    root.get(field), to));
            }
            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }

    private Specification<Order> greaterThan(String field, Double value) {
        return value == null ? Specification.where(null) :
            (root, query, cb) -> cb.greaterThanOrEqualTo(
                root.get(field), value);
    }

    private Specification<Order> lessThan(String field, Double value) {
        return value == null ? Specification.where(null) :
            (root, query, cb) -> cb.lessThanOrEqualTo(
                root.get(field), value);
    }

    private Specification<Order> searchAllFields(String term) {
        if (term == null) return Specification.where(null);
        return (root, query, cb) -> cb.or(
            cb.like(cb.lower(root.get("customerName")),
                "%" + term.toLowerCase() + "%"),
            cb.like(root.get("status"), "%" + term + "%"),
            cb.like(root.get("id").as(String.class), "%" + term + "%")
        );
    }

    // Getters and setters...
}

// === 4. Pagination types comparison ===
/*
Feature            Offset-based           Cursor-based
─────────────────────────────────────────────────────────
Performance        O(n) for large OFFSET  O(1) always
Consistency        Page numbers shift     Stable (items don't move)
                    when new items added
Real-time data     Poor → pages drift     Excellent
Back/forward nav   Easy (page numbers)    Harder (cursor needed)
Random access      Yes (page #150)        No (must iterate)
Use case           Admin panels,          Infinite scroll,
                    stable data             real-time feeds
*/

// === 5. Sort injection prevention ===
/*
Always validate sort fields against a whitelist:
- SQL injection via sort parameter: ?sort=createdAt;DROP TABLE orders
- Field exposure via unused sort fields: ?sort=passwordHash
- Performance attacks via: ?sort=nested.field.that.does.join.to.everything
*/

// Whitelist validation approach
@Component
class SortValidator {
    private static final Map<String, Set<String>> ALLOWED_SORTS = Map.of(
        "orders", Set.of("id", "createdAt", "total", "status", "customerName"),
        "customers", Set.of("id", "name", "email", "createdAt")
    );

    public Sort validate(String entity, String sortParam) {
        Set<String> allowed = ALLOWED_SORTS.getOrDefault(entity, Set.of());
        List<Sort.Order> orders = new ArrayList<>();
        for (String part : sortParam.split(",")) {
            boolean desc = part.startsWith("-");
            String field = desc ? part.substring(1) : part;
            if (allowed.contains(field)) {
                orders.add(desc ? Sort.Order.desc(field) : Sort.Order.asc(field));
            }
        }
        return Sort.by(orders);
    }
}
```

Offset-based pagination works for most cases but degrades at high offsets. Cursor-based is better for real-time feeds and infinite scroll. Always whitelist sort fields to prevent injection and unintended joins. For complex filtering, use Specifications, Querydsl, or a dedicated search service.
### Q7: How do you implement error handling with Problem Details (RFC 7807)?


**Answer:** RFC 7807 standardizes error responses with a "problem details" JSON format (type, title, status, detail, instance). Spring Boot 3.x natively supports ProblemDetail via ResponseEntity and @ControllerAdvice. This replaces custom error DTOs and makes API errors consistent and machine-readable.

```java
// === ProblemDetail structure ===
/*
{
    "type": "https://api.example.com/errors/order-not-found",
    "title": "Order Not Found",
    "status": 404,
    "detail": "Order with ID 123 was not found",
    "instance": "/api/orders/123",
    "timestamp": "2024-01-15T10:30:00Z",
    "errorCode": "ORDER_404",
    "resourceId": "123"
}
*/

// === Global exception handler ===
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import java.net.URI;
import java.time.Instant;

@RestControllerAdvice
class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    // Handle validation errors (400)
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatusCode status,
            WebRequest request) {

        ProblemDetail pd = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
        pd.setType(URI.create("https://api.example.com/errors/validation"));
        pd.setTitle("Validation Failed");
        pd.setDetail("Request contains invalid fields");
        pd.setProperty("timestamp", Instant.now());

        Map<String, List<String>> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(fe ->
            errors.computeIfAbsent(fe.getField(), k -> new ArrayList<>())
                .add(fe.getDefaultMessage()));

        ex.getBindingResult().getGlobalErrors().forEach(ge ->
            errors.computeIfAbsent(ge.getObjectName(), k -> new ArrayList<>())
                .add(ge.getDefaultMessage()));

        pd.setProperty("errors", errors);

        return ResponseEntity.badRequest().body(pd);
    }

    // Handle missing request body (400)
    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(
            HttpMessageNotReadableException ex,
            HttpHeaders headers,
            HttpStatusCode status,
            WebRequest request) {

        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.BAD_REQUEST, "Malformed JSON request body");
        pd.setType(URI.create("https://api.example.com/errors/malformed-json"));
        pd.setTitle("Malformed Request");
        pd.setProperty("timestamp", Instant.now());

        return ResponseEntity.badRequest().body(pd);
    }

    // Handle type mismatch (e.g., /orders/abc when id is Long)
    @Override
    protected ResponseEntity<Object> handleTypeMismatch(
            TypeMismatchException ex,
            HttpHeaders headers,
            HttpStatusCode status,
            WebRequest request) {

        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.BAD_REQUEST,
            "Invalid parameter '" + ex.getPropertyName() + "': expected " +
            ex.getRequiredType().getSimpleName());
        pd.setTitle("Type Mismatch");
        pd.setProperty("parameter", ex.getPropertyName());
        pd.setProperty("expectedType", ex.getRequiredType().getSimpleName());

        return ResponseEntity.badRequest().body(pd);
    }
}

// === Custom exceptions with structured ProblemDetail ===
class ResourceNotFoundException extends RuntimeException {
    private final String resourceType;
    private final String resourceId;

    public ResourceNotFoundException(String resourceType, String resourceId) {
        super(resourceType + " with ID '" + resourceId + "' not found");
        this.resourceType = resourceType;
        this.resourceId = resourceId;
    }

    public String getResourceType() { return resourceType; }
    public String getResourceId() { return resourceId; }
}

class BusinessValidationException extends RuntimeException {
    private final String errorCode;
    private final Map<String, Object> details;

    public BusinessValidationException(String errorCode, String message,
                                        Map<String, Object> details) {
        super(message);
        this.errorCode = errorCode;
        this.details = details;
    }

    public String getErrorCode() { return errorCode; }
    public Map<String, Object> getDetails() { return details; }
}

// === Handler for custom exceptions ===
@RestControllerAdvice
class CustomExceptionHandler {

    private static final URI ERROR_BASE = URI.create("https://api.example.com/errors/");

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleResourceNotFound(ResourceNotFoundException ex) {
        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.NOT_FOUND, ex.getMessage());
        pd.setType(ERROR_BASE.resolve("/" + ex.getResourceType() + "-not-found"));
        pd.setTitle(ex.getResourceType() + " Not Found");
        pd.setProperty("resourceType", ex.getResourceType());
        pd.setProperty("resourceId", ex.getResourceId());
        pd.setProperty("timestamp", Instant.now());
        return pd;
    }

    @ExceptionHandler(BusinessValidationException.class)
    public ProblemDetail handleBusinessValidation(BusinessValidationException ex) {
        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.UNPROCESSABLE_ENTITY, ex.getMessage());
        pd.setType(ERROR_BASE.resolve("/" + ex.getErrorCode().toLowerCase()));
        pd.setTitle("Business Rule Violation");
        pd.setProperty("errorCode", ex.getErrorCode());
        pd.setProperty("details", ex.getDetails());
        pd.setProperty("timestamp", Instant.now());
        return pd;
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ProblemDetail handleAccessDenied(AccessDeniedException ex) {
        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.FORBIDDEN, "You do not have permission to access this resource");
        pd.setType(ERROR_BASE.resolve("/access-denied"));
        pd.setTitle("Access Denied");
        pd.setProperty("timestamp", Instant.now());
        return pd;
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ProblemDetail handleDataIntegrity(DataIntegrityViolationException ex) {
        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.CONFLICT, "Operation would violate data integrity constraints");
        pd.setType(ERROR_BASE.resolve("/data-integrity"));
        pd.setTitle("Data Integrity Violation");
        pd.setProperty("timestamp", Instant.now());
        return pd;
    }

    @ExceptionHandler(HttpMediaTypeNotAcceptableException.class)
    public ProblemDetail handleNotAcceptable() {
        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.NOT_ACCEPTABLE,
            "Requested media type is not supported");
        pd.setTitle("Not Acceptable");
        pd.setType(ERROR_BASE.resolve("/not-acceptable"));
        return pd;
    }

    @ExceptionHandler(Exception.class)
    public ProblemDetail handleUnexpected(Exception ex) {
        log.error("Unexpected error", ex);
        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.INTERNAL_SERVER_ERROR, "An unexpected error occurred");
        pd.setType(ERROR_BASE.resolve("/internal-error"));
        pd.setTitle("Internal Server Error");
        pd.setProperty("correlationId", java.util.UUID.randomUUID().toString());
        pd.setProperty("timestamp", Instant.now());
        return pd;
    }
}

// === Testing error responses ===
/*
@Test
void testNotFoundReturnsProblemDetail() throws Exception {
    mockMvc.perform(get("/api/orders/99999")
            .accept(MediaType.APPLICATION_PROBLEM_JSON))
        .andExpect(status().isNotFound())
        .andExpect(jsonPath("$.title").value("Order Not Found"))
        .andExpect(jsonPath("$.status").value(404))
        .andExpect(jsonPath("$.type").value("https://api.example.com/errors/order-not-found"));
}

@Test
void testValidationReturnsFieldErrors() throws Exception {
    mockMvc.perform(post("/api/orders")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"total\": -10}"))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$.title").value("Validation Failed"))
        .andExpect(jsonPath("$.errors.total").exists());
}
*/

// === Common error response formats compared ===
/*
Format               Example                                RFC
──────────────────────────────────────────────────────────────────
Problem Details      {type, title, status, detail,          RFC 7807
(RFC 7807)            instance, properties}

JSON:API Errors      {errors: [{status, title, detail,      RFC 6901
                      source: {pointer}}]}

OData Error          {error: {code, message, target,        OData v4
                      details: [{code, message, target}]}}

GraphQL Errors       {errors: [{message, locations,         GraphQL Spec
                      path, extensions}]}

Custom (no standard) {"error": "Not found", "code": 404}    None
*/
```

RFC 7807 Problem Details provides a consistent, extensible error format across your entire API. Spring Boot 3.x makes it the default error mechanism. Use custom error types for different error categories and include correlation IDs for debugging. Always test error responses in integration tests.
### Q8: How do you implement content negotiation in a REST API?


**Answer:** Content negotiation lets clients choose response format (JSON, XML, CSV) via the Accept header and specify request format via Content-Type. Spring Boot auto-negotiates based on Accept header and registered HttpMessageConverters. You can also use URL suffixes (.json, .xml) or query parameters. Always use Accept header → that's what HTTP designed.

```java
// === 1. Content negotiation via Accept header (standard) ===
/*
Client requests JSON:
GET /api/orders/123
Accept: application/json

Client requests XML:
GET /api/orders/123
Accept: application/xml

Client requests custom media type:
Accept: application/vnd.company.orders-v2+json
*/

// === Configuration ===
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
class ContentNegotiationConfig implements WebMvcConfigurer {

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
            // Accept header negotiation (enabled by default)
            .favorParameter(false)
            // Don't use URL suffix (.json, .xml)
            .favorPathExtension(false)
            // Ignore Accept header when not provided
            .ignoreAcceptHeader(false)
            // Default to JSON if no Accept header
            .defaultContentType(MediaType.APPLICATION_JSON)
            // Register supported media types
            .mediaType("json", MediaType.APPLICATION_JSON)
            .mediaType("xml", MediaType.APPLICATION_XML)
            .mediaType("csv", new MediaType("text", "csv"));
    }
}

// === 2. Content negotiation via query parameter ===
/*
GET /api/orders/123?format=json
GET /api/orders/123?format=xml

Configured with:
.favorParameter(true)
.parameterName("format")
*/

// === 3. Same endpoint, different representations ===
@RestController
@RequestMapping("/api/orders")
class OrderContentNegotiationController {
    private final OrderService orderService;

    // Both methods map to same URL path
    // Spring selects based on Accept header + produces attribute

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Order getOrderJson(@PathVariable Long id) {
        return orderService.findById(id);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_XML_VALUE)
    public Order getOrderXml(@PathVariable Long id) {
        return orderService.findById(id);
    }

    @GetMapping(value = "/{id}", produces = "text/csv")
    public String getOrderCsv(@PathVariable Long id) {
        Order order = orderService.findById(id);
        return String.format("%d,%s,%.2f,%s",
            order.getId(), order.getCustomerName(),
            order.getTotal(), order.getStatus());
    }

    @GetMapping(value = "/export", produces = "text/csv")
    public ResponseEntity<InputStreamResource> exportOrdersCsv() {
        List<Order> orders = orderService.findAll(0, 10000);

        StringBuilder csv = new StringBuilder("id,customer,total,status\n");
        orders.forEach(o -> csv.append(String.format("%d,%s,%.2f,%s\n",
            o.getId(), o.getCustomerName(), o.getTotal(), o.getStatus())));

        byte[] bytes = csv.toString().getBytes(StandardCharsets.UTF_8);
        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=orders.csv")
            .contentLength(bytes.length)
            .contentType(new MediaType("text", "csv"))
            .body(new InputStreamResource(new ByteArrayInputStream(bytes)));
    }
}

// === 4. Custom serialization per version ===
import com.fasterxml.jackson.annotation.*;

// V1 serialization → flat fields
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
class OrderV1Representation {
    private Long id;
    private String customerName;
    private Double total;
    private String status;

    public OrderV1Representation(Order order) {
        this.id = order.getId();
        this.customerName = order.getCustomerName();
        this.total = order.getTotal();
        this.status = order.getStatus();
    }
    // getters...
}

// V2 serialization → nested objects
@JsonInclude(JsonInclude.Include.NON_NULL)
class OrderV2Representation {
    private Long id;
    private CustomerSummary customer;
    private MoneyAmount total;
    private String status;
    private Instant createdAt;

    public OrderV2Representation(Order order) {
        this.id = order.getId();
        this.customer = new CustomerSummary(
            order.getCustomerId(), order.getCustomerName());
        this.total = new MoneyAmount(order.getTotal(), "USD");
        this.status = order.getStatus();
        this.createdAt = order.getCreatedAt();
    }
    // getters...
}

class CustomerSummary {
    private Long id;
    private String name;
    public CustomerSummary(Long id, String name) { this.id = id; this.name = name; }
    public Long getId() { return id; }
    public String getName() { return name; }
}

class MoneyAmount {
    private Double amount;
    private String currency;
    public MoneyAmount(Double amount, String currency) {
        this.amount = amount; this.currency = currency;
    }
    public Double getAmount() { return amount; }
    public String getCurrency() { return currency; }
}

// === 5. HttpMessageConverter customization ===
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.*;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.http.converter.xml.MappingJackson2XmlHttpMessageConverter;
import java.util.List;

@Configuration
class HttpMessageConverterConfig implements WebMvcConfigurer {

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        // JSON converter with custom ObjectMapper
        MappingJackson2HttpMessageConverter jsonConverter =
            new MappingJackson2HttpMessageConverter();
        jsonConverter.setObjectMapper(customObjectMapper());

        // XML converter
        MappingJackson2XmlHttpMessageConverter xmlConverter =
            new MappingJackson2XmlHttpMessageConverter();

        // CSV converter
        converters.add(jsonConverter);
        converters.add(xmlConverter);
        converters.add(new CsvMessageConverter());
    }

    private com.fasterxml.jackson.databind.ObjectMapper customObjectMapper() {
        com.fasterxml.jackson.databind.ObjectMapper mapper =
            new com.fasterxml.jackson.databind.ObjectMapper();
        mapper.registerModule(new com.fasterxml.jackson.datatype.jsr310.JavaTimeModule());
        mapper.disable(
            com.fasterxml.jackson.databind.SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        mapper.enable(
            com.fasterxml.jackson.databind.SerializationFeature.INDENT_OUTPUT);
        return mapper;
    }
}

// === 6. Best practices ===
/*
1. Always use Accept header for content negotiation (not URL suffix)
2. Default to JSON (most widely supported)
3. Register custom converters for non-standard formats
4. Include Content-Type in response headers
5. Use Vary: Accept header for caching proxies
6. Consider using versioned media types for API versioning:
   application/vnd.company.orders-v1+json
   application/vnd.company.orders-v2+json
7. Return 406 Not Acceptable if requested format is not supported
8. Test content negotiation in integration tests

// application.yml configuration:
spring:
  contentnegotiation:
    favor-parameter: false
    favor-path-extension: false
    media-types:
      json: application/json
      xml: application/xml
      csv: text/csv
*/
```

Content negotiation decouples resource representation from resource identity. Always use the Accept header. Support JSON as minimum; add XML for enterprise clients. Use versioned media types (application/vnd.company.v1+json) for API versioning. Return 406 for unsupported formats.
### Q9: CORS → what is it and how do you configure it?


**Answer:** CORS (Cross-Origin Resource Sharing) controls which origins can access your API from browser-based applications. Browsers enforce same-origin policy by default. CORS headers (Access-Control-Allow-Origin, Allow-Methods, Allow-Headers) tell the browser which cross-origin requests are permitted. Spring Boot provides @CrossOrigin annotation and WebMvcConfigurer for global configuration.

```java
// === 1. Global CORS configuration (recommended) ===
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.*;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
class CorsGlobalConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("https://myapp.com", "https://admin.myapp.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
            .allowedHeaders("Authorization", "Content-Type", "X-Requested-With",
                "Accept", "Origin", "X-API-Key")
            .exposedHeaders("X-RateLimit-Remaining", "X-RateLimit-Reset",
                "ETag", "Link")
            .allowCredentials(true)
            .maxAge(3600);  // Preflight cache duration (seconds)
    }
}

// === 2. Per-controller @CrossOrigin annotation ===
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/public")
@CrossOrigin(origins = "*", maxAge = 3600)
class PublicApiController {
    // All origins allowed → for public APIs
}

@RestController
@RequestMapping("/api/internal")
@CrossOrigin(origins = "https://internal.company.com",
             allowedHeaders = {"Authorization", "X-Internal-Token"},
             allowCredentials = "true")
class InternalApiController {
    // Restricted to specific origin only
}

// === 3. CORS with different configurations per path ===
@Configuration
class CorsPathSpecificConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Public API → open to all
        registry.addMapping("/api/public/**")
            .allowedOrigins("*")
            .allowedMethods("GET")
            .allowedHeaders("*");

        // Partner API → specific origins
        registry.addMapping("/api/partners/**")
            .allowedOrigins("https://partner1.com", "https://partner2.com")
            .allowedMethods("GET", "POST")
            .allowedHeaders("Authorization", "Content-Type")
            .maxAge(1800);

        // Internal API → company domains only
        registry.addMapping("/api/internal/**")
            .allowedOrigins("https://app.company.com", "https://admin.company.com")
            .allowedMethods("*")  // All methods
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(3600);

        // Admin API → additional restrictions
        registry.addMapping("/api/admin/**")
            .allowedOrigins("https://admin.company.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("Authorization", "Content-Type", "X-CSRF-Token")
            .exposedHeaders("X-CSRF-Token")
            .allowCredentials(true);
    }
}

// === 4. CORS filter (alternative to WebMvcConfigurer) ===
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.context.annotation.Bean;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;

@Configuration
class CorsFilterConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        return new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                String path = request.getRequestURI();

                if (path.startsWith("/api/public")) {
                    CorsConfiguration config = new CorsConfiguration();
                    config.setAllowedOrigins(List.of("*"));
                    config.setAllowedMethods(List.of("GET", "POST"));
                    config.setAllowedHeaders(List.of("*"));
                    return config;
                }

                if (path.startsWith("/api/internal")) {
                    CorsConfiguration config = new CorsConfiguration();
                    config.setAllowedOrigins(List.of("https://app.company.com"));
                    config.setAllowedMethods(List.of("*"));
                    config.setAllowedHeaders(List.of("*"));
                    config.setAllowCredentials(true);
                    return config;
                }

                return null;  // Let other configs handle it
            }
        };
    }
}

// === 5. CORS error handling ===
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
class CorsErrorHandler {

    @ExceptionHandler(org.springframework.web.cors.CorsUtils.class)
    public ProblemDetail handleCorsError() {
        return ProblemDetail.forStatusAndDetail(
            HttpStatus.FORBIDDEN,
            "CORS policy does not allow this request origin");
    }
}

// === 6. CORS preflight (OPTIONS) ===
/*
Browser sends preflight OPTIONS request for "non-simple" requests:
- Methods other than GET, HEAD, POST
- Custom headers (Authorization, X-Custom-Header)
- Content-Type other than application/x-www-form-urlencoded,
  multipart/form-data, or text/plain
- Request with credentials (cookies, authorization headers)

Example preflight:
OPTIONS /api/orders
Origin: https://myapp.com
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: Authorization

Example response:
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Max-Age: 3600
*/

// === 7. CORS with Spring Security ===
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@EnableWebSecurity
class SecurityConfig {

    @Bean
    public org.springframework.security.web.SecurityFilterChain filterChain(
            HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .csrf(csrf -> csrf.disable())  // Disable CSRF for REST APIs
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/**").authenticated()
            );
        return http.build();
    }

    private CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of(
            "https://myapp.com", "https://admin.myapp.com"));
        configuration.setAllowedMethods(List.of(
            "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);
        return source;
    }
}

// === 8. CORS best practices ===
/*
1. Never use allowedOrigins("*") with allowCredentials(true)
   → this is forbidden by browsers and returns an error

2. Keep allowed origins specific to your deployed domains
   → Don't allow localhost in production
   → Use environment-specific configuration:
     @Value("${app.cors.allowed-origins}")

3. Cache preflight responses with maxAge for performance
   → 3600 seconds (1 hour) is a good default

4. Expose custom response headers via exposedHeaders
   → ETag, Link, X-RateLimit-*, X-Request-Id

5. Test CORS with curl:
   curl -H "Origin: https://evil.com" -H "Access-Control-Request-Method: GET" \
        -X OPTIONS -v https://api.example.com/api/orders

6. For development environments, use a configuration class that
   conditionally enables permissive CORS:
   @Profile("dev") @Configuration class DevCorsConfig { ... }
*/

// === Dev profile CORS (permissive) ===
@Profile("dev")
@Configuration
class DevCorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("*")
            .allowedHeaders("*")
            .exposedHeaders("*")
            .maxAge(0);  // Don't cache preflight in dev
    }
}

// === Prod profile CORS (restrictive) ===
@Profile("prod")
@Configuration
class ProdCorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins(
                "https://app.example.com",
                "https://admin.example.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
            .allowedHeaders("Authorization", "Content-Type")
            .allowCredentials(true)
            .maxAge(3600);
    }
}
```

CORS is a browser-enforced security mechanism. Configure it globally via WebMvcConfigurer for consistency. Never combine `allowedOrigins("*")` with `allowCredentials(true)`. Use different CORS configurations per profile (permissive for dev, restrictive for prod). Test with curl OPTIONS requests before relying on browser behavior.
### Q10: What is HATEOAS and do you need it?


**Answer:** HATEOAS (Hypermedia As The Engine Of Application State) means API responses include links that tell clients what actions are available next. Clients navigate the API through hypermedia links instead of hardcoded URL paths. Spring HATEOAS provides Link, EntityModel, CollectionModel, and RepresentationModel to build hypermedia responses. While theoretically elegant, most real-world APIs use HATEOAS sparingly or skip it entirely.

```java
// === 1. Simple HATEOAS response ===
/*
{
    "id": 1,
    "customerName": "Alice",
    "total": 250.00,
    "status": "PENDING",
    "_links": {
        "self": { "href": "https://api.example.com/orders/1" },
        "cancel": { "href": "https://api.example.com/orders/1/cancel" },
        "items": { "href": "https://api.example.com/orders/1/items" }
    }
}
*/

// === 2. Spring HATEOAS setup ===
import org.springframework.hateoas.*;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@RestController
@RequestMapping("/api/orders")
class OrderHateoasController {
    private final OrderService orderService;

    // Single order with links
    @GetMapping("/{id}")
    public EntityModel<Order> getOrder(@PathVariable Long id) {
        Order order = orderService.findById(id);

        EntityModel<Order> model = EntityModel.of(order);
        model.add(linkTo(methodOn(OrderHateoasController.class)
            .getOrder(id)).withSelfRel());
        model.add(linkTo(methodOn(OrderHateoasController.class)
            .getOrderItems(id)).withRel("items"));

        if ("PENDING".equals(order.getStatus())) {
            model.add(linkTo(methodOn(OrderHateoasController.class)
                .cancelOrder(id)).withRel("cancel"));
        }
        if ("SHIPPED".equals(order.getStatus())) {
            model.add(linkTo(methodOn(OrderHateoasController.class)
                .trackOrder(id)).withRel("track"));
        }

        return model;
    }

    // List of orders with pagination links
    @GetMapping
    public CollectionModel<EntityModel<Order>> getOrders(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {

        List<Order> orders = orderService.findAll(page, size);
        long total = orderService.count();

        List<EntityModel<Order>> orderModels = orders.stream()
            .map(order -> EntityModel.of(order,
                linkTo(methodOn(OrderHateoasController.class)
                    .getOrder(order.getId())).withSelfRel()))
            .collect(Collectors.toList());

        CollectionModel<EntityModel<Order>> model =
            CollectionModel.of(orderModels);

        // Pagination links
        model.add(linkTo(methodOn(OrderHateoasController.class)
            .getOrders(page, size)).withSelfRel());
        if (page > 0) {
            model.add(linkTo(methodOn(OrderHateoasController.class)
                .getOrders(page - 1, size)).withRel("prev"));
        }
        if ((page + 1) * size < total) {
            model.add(linkTo(methodOn(OrderHateoasController.class)
                .getOrders(page + 1, size)).withRel("next"));
        }
        model.add(linkTo(methodOn(OrderHateoasController.class)
            .getOrders(0, size)).withRel("first"));
        model.add(linkTo(methodOn(OrderHateoasController.class)
            .getOrders((int)(total / size), size)).withRel("last"));

        return model;
    }

    @GetMapping("/{id}/items")
    public CollectionModel<EntityModel<OrderItem>> getOrderItems(
            @PathVariable Long id) {
        List<OrderItem> items = orderService.findItemsByOrderId(id);
        return CollectionModel.of(items.stream()
            .map(item -> EntityModel.of(item))
            .collect(Collectors.toList()),
            linkTo(methodOn(OrderHateoasController.class)
                .getOrderItems(id)).withSelfRel());
    }

    @PostMapping("/{id}/cancel")
    public EntityModel<Order> cancelOrder(@PathVariable Long id) {
        Order order = orderService.cancel(id);
        EntityModel<Order> model = EntityModel.of(order);
        model.add(linkTo(methodOn(OrderHateoasController.class)
            .getOrder(id)).withSelfRel());
        model.add(linkTo(methodOn(OrderHateoasController.class)
            .getOrder(id)).withRel("status"));
        return model;
    }

    @GetMapping("/{id}/track")
    public EntityModel<TrackingInfo> trackOrder(@PathVariable Long id) {
        TrackingInfo info = orderService.getTracking(id);
        return EntityModel.of(info,
            linkTo(methodOn(OrderHateoasController.class)
                .trackOrder(id)).withSelfRel());
    }
}

// === 3. RepresentationModel for domain objects ===
import org.springframework.hateoas.RepresentationModel;

class OrderModel extends RepresentationModel<OrderModel> {
    private Long id;
    private String customerName;
    private Double total;
    private String status;
    private Instant createdAt;

    public OrderModel(Order order) {
        this.id = order.getId();
        this.customerName = order.getCustomerName();
        this.total = order.getTotal();
        this.status = order.getStatus();
        this.createdAt = order.getCreatedAt();
    }
    // getters...
}

// Using RepresentationModel subclasses
@GetMapping("/{id}/model")
public OrderModel getOrderAsModel(@PathVariable Long id) {
    OrderModel model = new OrderModel(orderService.findById(id));
    model.add(linkTo(methodOn(OrderHateoasController.class)
        .getOrderAsModel(id)).withSelfRel());
    return model;
}

// === 4. HATEOAS with different media types ===
/*
HATEOAS link formats by media type:

application/hal+json (most common):
{
    "_links": {
        "self": { "href": "/orders/1" },
        "items": { "href": "/orders/1/items" }
    },
    "id": 1,
    "customerName": "Alice"
}

application/json (custom _links):
{
    "_links": {
        "self": "/orders/1",
        "cancel": "/orders/1/cancel"
    },
    "id": 1,
    "customerName": "Alice"
}

application/vnd.siren+json:
{
    "class": ["order"],
    "properties": { "id": 1, "customerName": "Alice" },
    "links": [
        { "rel": ["self"], "href": "/orders/1" },
        { "rel": ["items"], "href": "/orders/1/items" }
    ],
    "actions": [
        { "name": "cancel", "href": "/orders/1/cancel", "method": "POST" }
    ]
}
*/

// === 5. Real-world HATEOAS tradeoffs ===
/*
Arguments FOR HATEOAS:
1. Clients discover endpoints dynamically → no hardcoded URLs
2. API evolution without breaking clients (move URLs, change structure)
3. Self-documenting responses show what's possible
4. Reduces client-side state machines (server tells what's next)

Arguments AGAINST HATEOAS:
1. Increases response size (links can be large)
2. Adds parsing complexity for clients
3. Most clients hardcode URLs anyway
4. API versioning is still needed for structural changes
5. Performance overhead (link generation)
6. Low adoption in practice (Google, Stripe, Twitter don't use it)

When to use HATEOAS:
- Public APIs where clients need discovery
- Workflow-driven APIs (order processing, approval flows)
- REST purist / Richardson Maturity Model Level 3
- Hypermedia clients (rare)

When to skip HATEOAS:
- Internal/microservice APIs (fixed contract)
- Performance-sensitive APIs
- Mobile clients (bandwidth matters)
- Simple CRUD APIs

// Minimal HATEOAS for real projects:
// Just self links and pagination links → skip action links
@GetMapping("/{id}")
public EntityModel<Order> getOrderMinimal(@PathVariable Long id) {
    Order order = orderService.findById(id);
    return EntityModel.of(order,
        linkTo(methodOn(OrderController.class).getOrderMinimal(id))
            .withSelfRel());
}
*/
```

HATEOAS is a REST maturity level L3 concept. Most real APIs provide minimal hypermedia (self links, pagination links) without full action-discovery HATEOAS. Use it for workflow-driven APIs where available actions change based on state. Skip it for simple CRUD or performance-critical APIs. The pragmatic approach: add self links and pagination, skip action links.
### Q11: How do you secure a REST API with authentication?


**Answer:** REST APIs use stateless authentication → every request carries credentials. Common approaches: Basic Auth (simple, insecure alone), Bearer tokens (JWT), API keys (server-to-server), and OAuth2 (delegated auth). Spring Security + JWT is the standard pattern. Never use session-based auth (cookies) for REST APIs → it's stateful and breaks scaling.

```java
// === 1. Basic Authentication (simple but less secure) ===
/*
Authorization: Basic base64(username:password)

Configured in application.yml:
spring:
  security:
    user:
      name: admin
      password: secret
      roles: ADMIN
*/

@Configuration
@EnableWebSecurity
class BasicAuthSecurityConfig {

    @Bean
    public SecurityFilterChain basicAuthFilterChain(HttpSecurity http)
            throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(sm ->
                sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated())
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public UserDetailsService users() {
        return new InMemoryUserDetailsManager(
            User.withUsername("admin")
                .password(passwordEncoder().encode("secret"))
                .roles("ADMIN").build(),
            User.withUsername("user")
                .password(passwordEncoder().encode("password"))
                .roles("USER").build()
        );
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

// === 2. JWT Bearer Token Auth (most common pattern) ===
/*
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwicm9sZSI6IkFETUlOIn0.xxx

JWT structure:
Header: { "alg": "HS256", "typ": "JWT" }
Payload: { "sub": "user123", "roles": ["ADMIN"], "exp": 1700000000 }
Signature: HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
*/

// === JWT utility ===
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
class JwtTokenProvider {
    private final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private final long validityMs = 3600_000; // 1 hour

    public String createToken(String username, List<String> roles) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + validityMs);

        return Jwts.builder()
            .setSubject(username)
            .claim("roles", roles)
            .setIssuedAt(now)
            .setExpiration(validity)
            .signWith(key)
            .compact();
    }

    public String getUsername(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(key).build()
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }

    public List<String> getRoles(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(key).build()
            .parseClaimsJws(token)
            .getBody()
            .get("roles", List.class);
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build()
                .parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
}

// === JWT Authentication Filter ===
@Component
class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String token = extractToken(request);

        if (token != null && jwtTokenProvider.validateToken(token)) {
            String username = jwtTokenProvider.getUsername(token);
            List<String> roles = jwtTokenProvider.getRoles(token);

            List<SimpleGrantedAuthority> authorities = roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

            UsernamePasswordAuthenticationToken auth =
                new UsernamePasswordAuthenticationToken(
                    username, null, authorities);
            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        filterChain.doFilter(request, response);
    }

    private String extractToken(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            return header.substring(7);
        }
        return null;
    }
}

// === JWT Security Config ===
@Configuration
@EnableWebSecurity
class JwtSecurityConfig {
    private final JwtAuthenticationFilter jwtFilter;

    JwtSecurityConfig(JwtAuthenticationFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public SecurityFilterChain jwtFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(sm ->
                sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/users/{userId}/**")
                    .access("hasRole('ADMIN') or #userId == authentication.name")
                .anyRequest().authenticated())
            .addFilterBefore(jwtFilter,
                UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}

// === 3. Auth controller (login/signup) ===
@RestController
@RequestMapping("/api/auth")
class AuthController {
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authManager;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        Authentication authentication = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.username(), request.password()));

        String username = authentication.getName();
        List<String> roles = authentication.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.toList());

        String token = jwtTokenProvider.createToken(username, roles);

        return ResponseEntity.ok(new AuthResponse(token, "Bearer",
            jwtTokenProvider.getValidityMs() / 1000, username, roles));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(
            @RequestHeader("Authorization") String authHeader) {
        // Validate current token, issue new one
        String oldToken = authHeader.substring(7);
        if (!jwtTokenProvider.validateToken(oldToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String username = jwtTokenProvider.getUsername(oldToken);
        List<String> roles = jwtTokenProvider.getRoles(oldToken);

        // Only refresh if token is still valid
        String newToken = jwtTokenProvider.createToken(username, roles);
        return ResponseEntity.ok(new AuthResponse(newToken, "Bearer",
            jwtTokenProvider.getValidityMs() / 1000, username, roles));
    }
}

record AuthRequest(String username, String password) {}
record AuthResponse(String token, String type, long expiresIn,
                    String username, List<String> roles) {}

// === 4. API Key auth (server-to-server) ===
@Component
class ApiKeyFilter extends OncePerRequestFilter {
    private static final String API_KEY_HEADER = "X-API-Key";

    // In production, load from secure store
    private final Map<String, String> apiKeys = Map.of(
        "service-a", "key-abc-123",
        "service-b", "key-def-456"
    );

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        if (request.getRequestURI().startsWith("/api/internal")) {
            String apiKey = request.getHeader(API_KEY_HEADER);
            String serviceName = getServiceNameForApiKey(apiKey);

            if (serviceName == null) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Invalid API key");
                return;
            }

            // Create authentication with service identity
            SimpleGrantedAuthority authority =
                new SimpleGrantedAuthority("ROLE_SERVICE");
            UsernamePasswordAuthenticationToken auth =
                new UsernamePasswordAuthenticationToken(
                    serviceName, null, List.of(authority));
            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        filterChain.doFilter(request, response);
    }

    private String getServiceNameForApiKey(String key) {
        return apiKeys.entrySet().stream()
            .filter(e -> e.getValue().equals(key))
            .map(Map.Entry::getKey)
            .findFirst()
            .orElse(null);
    }
}

// === 5. Authentication test helper ===
/*
@Test
void testJwtAuth() throws Exception {
    String token = jwtTokenProvider.createToken("testuser",
        List.of("ROLE_USER"));

    mockMvc.perform(get("/api/orders")
            .header("Authorization", "Bearer " + token))
        .andExpect(status().isOk());

    mockMvc.perform(get("/api/orders"))
        .andExpect(status().isUnauthorized());
}

@Test
void testAdminOnly() throws Exception {
    String userToken = jwtTokenProvider.createToken("user",
        List.of("ROLE_USER"));
    String adminToken = jwtTokenProvider.createToken("admin",
        List.of("ROLE_ADMIN"));

    mockMvc.perform(get("/api/admin/users")
            .header("Authorization", "Bearer " + userToken))
        .andExpect(status().isForbidden());

    mockMvc.perform(get("/api/admin/users")
            .header("Authorization", "Bearer " + adminToken))
        .andExpect(status().isOk());
}

@Test
void testInvalidToken() throws Exception {
    mockMvc.perform(get("/api/orders")
            .header("Authorization", "Bearer invalid-token"))
        .andExpect(status().isUnauthorized());
}

@Test
void testExpiredToken() throws Exception {
    String token = Jwts.builder()
        .setSubject("test")
        .setExpiration(new Date(System.currentTimeMillis() - 1000))
        .signWith(Keys.secretKeyFor(SignatureAlgorithm.HS256))
        .compact();

    mockMvc.perform(get("/api/orders")
            .header("Authorization", "Bearer " + token))
        .andExpect(status().isUnauthorized());
}

@Test
void testMissingToken() throws Exception {
    mockMvc.perform(get("/api/auth/login")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"username\": \"admin\", \"password\": \"admin\"}"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.token").exists());
}
*/

// === 6. Authentication best practices ===
/*
1. Always use HTTPS → never send tokens over HTTP
2. Keep tokens short-lived (15-60 minutes)
3. Use refresh tokens for longer sessions
4. Store tokens securely (httpOnly cookies for web, secure storage for mobile)
5. Never store tokens in localStorage (XSS vulnerable)
6. Implement token revocation (blacklist) for logout
7. Rate-limit login endpoints to prevent brute force
8. Log all authentication failures for audit
9. Include token ID (jti) for individual token revocation
10. Use strong signing keys (HS256 with 256+ bit key or RS256 with key pair)

Security headers for auth:
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Cache-Control: no-store
Pragma: no-cache
*/
```

JWT Bearer tokens in the Authorization header are the standard for REST API auth. Stateless, scalable, and cross-platform. Use OAuth2 for third-party access delegation. Never use session cookies in REST APIs. Always use HTTPS, short token expiry, and proper token validation.
### Q12: How do you implement rate limiting in a REST API?


**Answer:** Rate limiting protects your API from abuse and ensures fair usage. Common strategies: token bucket (burst traffic), leaking bucket (smoothing), fixed window (simple, boundary issue), sliding window (accurate). Spring Boot doesn't have built-in rate limiting → implement with interceptors, Bucket4j library, or API gateway. Always return 429 Too Many Requests with Retry-After header.

```java
// === 1. Bucket4j rate limiting (token bucket algorithm) ===
import io.github.bucket4j.*;
import java.time.Duration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
class RateLimitingService {
    // Per-API-key rate limiters
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    public Bucket resolveBucket(String apiKey) {
        return buckets.computeIfAbsent(apiKey, this::createNewBucket);
    }

    private Bucket createNewBucket(String apiKey) {
        // Default: 10 requests per minute, burst up to 20
        Bandwidth limit = Bandwidth.classic(20, Refill.greedy(10, Duration.ofMinutes(1)));
        return Bucket.builder().addLimit(limit).build();
    }

    public boolean tryConsume(String apiKey) {
        return resolveBucket(apiKey).tryConsume(1);
    }

    public long getAvailableTokens(String apiKey) {
        return resolveBucket(apiKey).getAvailableTokens();
    }
}

// === 2. Rate limiting per tier ===
@Component
class TieredRateLimitingService {
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    // Different limits per pricing tier
    enum Tier {
        FREE(5, 10),       // 5 req/min, burst 10
        BASIC(30, 60),     // 30 req/min, burst 60
        PRO(100, 200),     // 100 req/min, burst 200
        ENTERPRISE(1000, 2000); // 1000 req/min, burst 2000

        final int requestsPerMinute;
        final int burstCapacity;

        Tier(int rps, int burst) {
            this.requestsPerMinute = rps;
            this.burstCapacity = burst;
        }
    }

    public Bucket createBucket(Tier tier) {
        return Bucket.builder()
            .addLimit(Bandwidth.classic(tier.burstCapacity,
                Refill.greedy(tier.requestsPerMinute, Duration.ofMinutes(1))))
            .build();
    }

    public Bucket getBucket(String clientId, Tier tier) {
        return buckets.computeIfAbsent(clientId, k -> createBucket(tier));
    }

    // Multiple limits per bucket (e.g., per minute AND per day)
    public Bucket createMultiLimitBucket(Tier tier) {
        Bandwidth perMinute = Bandwidth.classic(tier.burstCapacity,
            Refill.greedy(tier.requestsPerMinute, Duration.ofMinutes(1)));
        Bandwidth perDay = Bandwidth.classic(50000,
            Refill.greedy(50000, Duration.ofDays(1)));

        return Bucket.builder()
            .addLimit(perMinute)
            .addLimit(perDay)  // 50000 req/day hard cap
            .build();
    }
}

// === 3. Rate limiting interceptor ===
@Component
class RateLimitInterceptor extends HandlerInterceptor {
    private final RateLimitingService rateLimitingService;

    @Override
    public boolean preHandle(HttpServletRequest request,
            HttpServletResponse response, Object handler) throws IOException {

        // Extract client identifier (API key, IP, or user principal)
        String clientId = getClientId(request);

        if (!rateLimitingService.tryConsume(clientId)) {
            Bucket bucket = rateLimitingService.resolveBucket(clientId);

            response.setStatus(429);
            response.setHeader("Retry-After",
                String.valueOf(60)); // seconds
            response.setHeader("X-RateLimit-Limit", "10");
            response.setHeader("X-RateLimit-Remaining",
                String.valueOf(bucket.getAvailableTokens()));
            response.setHeader("X-RateLimit-Reset",
                String.valueOf(System.currentTimeMillis() / 1000 + 60));
            response.setContentType(MediaType.APPLICATION_PROBLEM_JSON_VALUE);

            ProblemDetail pd = ProblemDetail.forStatusAndDetail(
                HttpStatus.TOO_MANY_REQUESTS,
                "Rate limit exceeded. Try again in 60 seconds.");
            pd.setTitle("Too Many Requests");
            pd.setProperty("retryAfter", 60);

            response.getWriter().write(
                new com.fasterxml.jackson.databind.ObjectMapper()
                    .writeValueAsString(pd));
            return false;
        }

        // Add rate limit headers to every response
        Bucket bucket = rateLimitingService.resolveBucket(clientId);
        response.setHeader("X-RateLimit-Limit", "10");
        response.setHeader("X-RateLimit-Remaining",
            String.valueOf(bucket.getAvailableTokens()));
        response.setHeader("X-RateLimit-Reset",
            String.valueOf(System.currentTimeMillis() / 1000 + 60));

        return true;
    }

    private String getClientId(HttpServletRequest request) {
        // Try API key first
        String apiKey = request.getHeader("X-API-Key");
        if (apiKey != null && !apiKey.isEmpty()) {
            return apiKey;
        }
        // Fall back to authenticated user
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            return auth.getName();
        }
        // Finally, use IP address
        return request.getRemoteAddr();
    }
}

// === 4. Register interceptor ===
@Configuration
class RateLimitConfig implements WebMvcConfigurer {
    private final RateLimitInterceptor rateLimitInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(rateLimitInterceptor)
            .addPathPatterns("/api/**")
            .excludePathPatterns("/api/public/**")
            .excludePathPatterns("/api/health/**");
    }
}

// === 5. Per-endpoint rate limits ===
@Component
class EndpointRateLimitingService {
    private final Map<String, Map<String, Bucket>> endpointBuckets = new ConcurrentHashMap<>();

    public Bucket getEndpointBucket(String endpoint, String clientId) {
        return endpointBuckets
            .computeIfAbsent(endpoint, k -> new ConcurrentHashMap<>())
            .computeIfAbsent(clientId, k -> createEndpointBucket(endpoint));
    }

    private Bucket createEndpointBucket(String endpoint) {
        // Different limits per endpoint
        if (endpoint.contains("/login")) {
            return Bucket.builder()
                .addLimit(Bandwidth.classic(5,
                    Refill.greedy(5, Duration.ofMinutes(1))))
                .build();
        }
        if (endpoint.contains("/search")) {
            return Bucket.builder()
                .addLimit(Bandwidth.classic(20,
                    Refill.greedy(20, Duration.ofMinutes(1))))
                .build();
        }
        // Default
        return Bucket.builder()
            .addLimit(Bandwidth.classic(100,
                Refill.greedy(100, Duration.ofMinutes(1))))
            .build();
    }
}

// === 6. Annotated rate limiting ===
import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@interface RateLimit {
    int requestsPerMinute() default 60;
}

@Aspect
@Component
class RateLimitAspect {
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    @Around("@annotation(rateLimit)")
    public Object enforceRateLimit(ProceedingJoinPoint joinPoint,
            RateLimit rateLimit) throws Throwable {

        String clientId = getClientId();
        Bucket bucket = buckets.computeIfAbsent(
            clientId + "_" + joinPoint.getSignature().getName(),
            k -> Bucket.builder()
                .addLimit(Bandwidth.classic(rateLimit.requestsPerMinute(),
                    Refill.greedy(rateLimit.requestsPerMinute(),
                        Duration.ofMinutes(1))))
                .build());

        if (!bucket.tryConsume(1)) {
            throw new RateLimitExceededException(
                "Rate limit of " + rateLimit.requestsPerMinute()
                + " req/min exceeded");
        }

        return joinPoint.proceed();
    }

    private String getClientId() {
        Authentication auth = SecurityContextHolder.getContext()
            .getAuthentication();
        return auth != null ? auth.getName() : "anonymous";
    }
}

// === 7. API Gateway rate limiting (alternative) ===
/*
In Spring Cloud Gateway, rate limiting is built-in:
spring:
  cloud:
    gateway:
      routes:
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter:
                  replenishRate: 100
                  burstCapacity: 200
                  requestedTokens: 1
                key-resolver: "#{@userKeyResolver}"

@Bean
public KeyResolver userKeyResolver() {
    return exchange -> Mono.just(
        exchange.getRequest().getRemoteAddress().getAddress().getHostAddress()
    );
}
*/

// === 8. Bucket4j with Redis for distributed rate limiting ===
import io.github.bucket4j.distributed.proxy.*;
import io.github.bucket4j.redis.lettuce.*;
import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;

@Component
class RedisRateLimitingService {
    private final RedisClient redisClient;
    private final ProxyManager<String> proxyManager;

    public RedisRateLimitingService() {
        this.redisClient = RedisClient.create("redis://localhost:6379");
        StatefulRedisConnection<String, byte[]> connection =
            redisClient.connect(new byte[].class);

        this.proxyManager = Bucket4j.extension(RedisExtension.class)
            .proxyManagerForRedis(connection.async());
    }

    public boolean tryConsume(String clientId, long tokens) {
        BucketConfiguration config = Bucket4j.configurationBuilder()
            .addLimit(Bandwidth.classic(100,
                Refill.greedy(100, Duration.ofMinutes(1))))
            .build();

        Bucket bucket = proxyManager.builder()
            .build(clientId, config);

        return bucket.tryConsume(tokens);
    }
}

// === 9. Rate limit test ===
/*
@Test
void testRateLimiting() throws Exception {
    // Send 11 requests as anonymous user (IP-based)
    for (int i = 0; i < 10; i++) {
        mockMvc.perform(get("/api/public/products"))
            .andExpect(status().isOk());
    }

    // 11th request should be rate limited
    mockMvc.perform(get("/api/public/products"))
        .andExpect(status().isTooManyRequests())
        .andExpect(header().exists("Retry-After"))
        .andExpect(header().exists("X-RateLimit-Remaining"))
        .andExpect(jsonPath("$.title").value("Too Many Requests"));
}

// Integration test with Redis-backed rate limiting
@Test
void testDistributedRateLimiting() {
    // This would be tested via a test container with Redis
    // Rate limit is shared across all instances
}
*/

// === 10. Rate limiting response headers ===
/*
All rate-limited API responses should include:
X-RateLimit-Limit: 10          (max requests per window)
X-RateLimit-Remaining: 3      (requests left in current window)
X-RateLimit-Reset: 1712774400 (Unix timestamp when window resets)

When rate limited (429):
Retry-After: 60               (seconds to wait)
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1712774400

Response body (Problem Details):
{
    "type": "https://api.example.com/errors/rate-limit",
    "title": "Too Many Requests",
    "status": 429,
    "detail": "Rate limit of 10 requests per minute exceeded. Try again in 45 seconds.",
    "retryAfter": 45
}
*/
```

Rate limiting is essential for production APIs. Use the token bucket algorithm (Bucket4j) for burst handling. Return 429 Too Many Requests with Retry-After and X-RateLimit-* headers. Use Redis for distributed rate limiting across instances. Different rate limits per endpoint, per tier, and per client. Always log rate limit violations.
### Q13: Explain the Richardson Maturity Model.


**Answer:** The Richardson Maturity Model (RMM) defines four levels of REST API maturity from Level 0 (plain XML/HTTP) to Level 3 (hypermedia). Most practical APIs reach Level 2 (resources + HTTP verbs). Level 3 (HATEOAS) is rarely implemented. The model helps evaluate how well an API follows REST principles.

```java
// === Level 0: The Swamp of POX (Plain Old XML) ===
/*
Single endpoint, single method (POST). All actions via payload.

Example:
POST /api/ordersService
Body: <createOrder><customer>Alice</customer><total>250</total></createOrder>
Response: <order><id>1</id><status>CREATED</status></order>

POST /api/ordersService
Body: <getOrder><id>1</id></getOrder>
Response: <order><id>1</id><customer>Alice</customer><total>250</total></order>

POST /api/ordersService
Body: <updateOrder><id>1</id><status>SHIPPED</status></updateOrder>
Response: <order><id>1</id><status>SHIPPED</status></order>

Characteristics:
- Single URL endpoint
- Only POST method
- Action encoded in payload (SOAP-like)
- No HTTP semantics used
- Essentially RPC over HTTP
*/

// === Level 1: Resources ===
/*
Multiple endpoints, one per resource. Still only POST.

Post /api/orders
Body: <create><customer>Alice</customer><total>250</total></create>
Response: <order><id>1</id><status>CREATED</status></order>

POST /api/orders/1
Body: <get/>
Response: <order><id>1</id>...</order>

POST /api/orders/1
Body: <cancel/>
Response: <order><id>1</id><status>CANCELLED</status></order>

Characteristics:
- Proper resource URLs (orders, orders/1)
- Still only POST
- Actions via payload
- Resources identified correctly but HTTP verbs wrong
*/

// === Level 2: HTTP Verbs ===
/*
Full use of HTTP methods → GET, POST, PUT, PATCH, DELETE.
Status codes used correctly.

@RestController
@RequestMapping("/api/orders")
class Level2OrderController {
    private final OrderService orderService;

    // GET → read resource
    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return orderService.findById(id);
    }

    // POST → create
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Order createOrder(@RequestBody @Valid CreateOrderRequest request) {
        return orderService.create(request);
    }

    // PUT → full replacement
    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id,
                             @RequestBody @Valid UpdateOrderRequest request) {
        return orderService.replace(id, request);
    }

    // PATCH → partial update
    @PatchMapping("/{id}")
    public Order patchOrder(@PathVariable Long id,
                            @RequestBody Map<String, Object> updates) {
        return orderService.partialUpdate(id, updates);
    }

    // DELETE → remove
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable Long id) {
        orderService.delete(id);
    }
}

// Correct status codes:
/*
GET /orders           → 200 OK
GET /orders/999       → 404 Not Found
POST /orders          → 201 Created
PUT /orders/1         → 200 OK
DELETE /orders/1      → 204 No Content
PATCH /orders/1       → 200 OK
POST (validation)     → 400 Bad Request
Rate limit exceeded   → 429 Too Many Requests
Auth failure          → 401 Unauthorized
Insufficient role     → 403 Forbidden
Conflict              → 409 Conflict
*/

// === Level 3: Hypermedia (HATEOAS) ===
/*
Responses include links describing available actions.
Clients navigate via links, not hardcoded URLs.

@GetMapping("/{id}")
public EntityModel<Order> getOrder(@PathVariable Long id) {
    Order order = orderService.findById(id);
    EntityModel<Order> model = EntityModel.of(order);

    model.add(linkTo(methodOn(Level2OrderController.class)
        .getOrder(id)).withSelfRel());

    if (order.getStatus().equals("PENDING")) {
        model.add(linkTo(methodOn(Level2OrderController.class)
            .updateOrder(id, null)).withRel("update"));
        model.add(linkTo(methodOn(OrderController.class)
            .cancelOrder(id)).withRel("cancel"));
    }

    if (order.getStatus().equals("SHIPPED")) {
        model.add(linkTo(methodOn(OrderController.class)
            .getTracking(id)).withRel("track"));
    }

    return model;
}

// Level 3 response:
/*
{
    "id": 1,
    "customerName": "Alice",
    "total": 250.00,
    "status": "PENDING",
    "_links": {
        "self": { "href": "/api/orders/1" },
        "update": { "href": "/api/orders/1" },
        "cancel": { "href": "/api/orders/1/cancel" },
        "items": { "href": "/api/orders/1/items" }
    }
}

Client advantage: no need to know URLs → just follow links.
If server changes URL structure, clients still work.
Server controls the possible transitions.
*/
```

// === Summary comparison ===
/*
┌─────────┬─────────────────────────────────────┬────────────────┐
│ Level   │ What You Do                         │ Adoption       │
├─────────┼─────────────────────────────────────┼────────────────┤
│ L0 (POX)│ Single URL, all POST, RPC-style     │ Legacy/SOAP    │
│ L1 (Res)│ Multiple resource URLs, still POST  │ Rare, legacy   │
│ L2 (Ver)│ Resources + HTTP verbs + status     │ 95% of APIs    │
│ L3 (Hyp)│ L2 + hypermedia links in responses  │ <5% of APIs    │
└─────────┴─────────────────────────────────────┴────────────────┘
*/

// === Identifying RMM level ===
@Test
void testRmmLevel() {
    // L0 check: same URL for all operations
    boolean singleEndpoint = apiEndpoints.size() == 1;
    boolean onlyPost = allHttpMethodsAre("POST");
    int l0 = singleEndpoint && onlyPost ? 0 : -1;

    // L1 check: resource-based URLs
    boolean resourceUrls = apiEndpoints.stream()
        .allMatch(e -> e.matches("/api/\\w+(/\\d+)?"));
    boolean stillOnlyPost = allHttpMethodsAre("POST");
    int l1 = resourceUrls && stillOnlyPost ? 1 : -1;

    // L2 check: proper HTTP methods + status codes
    boolean hasGetPostPutDelete = apiEndpoints.stream()
        .flatMap(e -> e.getMethods().stream())
        .collect(Collectors.toSet())
        .containsAll(Set.of("GET", "POST", "PUT", "DELETE"));
    boolean correctStatusCodes = statusCodesMatchHttpMethod();
    int l2 = hasGetPostPutDelete && correctStatusCodes ? 2 : -1;

    // L3 check: hypermedia links in responses
    boolean hasLinks = responseSamples.stream()
        .allMatch(r -> r.contains("_links") || r.contains("links") ||
                       r.contains("href"));
    int l3 = hasLinks ? 3 : -1;

    int rmmLevel = Stream.of(l3, l2, l1, l0)
        .filter(l -> l >= 0)
        .findFirst()
        .orElse(0);

    System.out.println("API achieves RMM Level: " + rmmLevel);
}
```

Most practical APIs target Level 2 (resources + HTTP verbs + status codes). Level 3 (hypermedia) adds discoverability but increases complexity. Don't jump to L3 unless you have hypermedia clients. The model is descriptive, not prescriptive → build at the level that serves your consumers.
### Q14: How does REST compare to GraphQL and gRPC?


**Answer:** REST, GraphQL, and gRPC are three major API styles with different tradeoffs. REST (resource-oriented, HTTP) is the most universal. GraphQL (query language, single endpoint) excels at flexible data fetching. gRPC (protobuf, HTTP/2) wins on performance and typed contracts. Choose based on your clients, performance needs, and team expertise.

```java
// === 1. REST API example ===
/*
REST: resource-oriented, multiple endpoints, fixed response structure.

GET /api/orders/1 → { id, customer, total, status, items, ... }

Pros:
- Universal, works everywhere
- Cacheable via HTTP caching
- Simple to understand and debug
- Rich ecosystem of tools
- Evolution through versioning

Cons:
- Over-fetching (get more data than needed)
- Under-fetching (need multiple requests)
- Many endpoints to manage
- Fixed response structure per endpoint
- Versioning is painful long-term
*/

@RestController
@RequestMapping("/api/orders")
class RestOrderController {
    // Fixed response → always returns full order
    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return orderService.findById(id);
    }

    // Client needs customer too → separate request
    @GetMapping("/{id}/customer")
    public Customer getOrderCustomer(@PathVariable Long id) {
        return orderService.findCustomerByOrderId(id);
    }
}

// === 2. GraphQL API example ===
/*
GraphQL: single endpoint, client specifies exact fields.

POST /graphql
Body: { "query": "{ order(id: 1) { id total status } }" }
      → Client gets only id, total, status (no over-fetching)

Body: { "query": "{ order(id: 1) { id items { name price } } }" }
      → Client gets order WITH items in ONE request (no under-fetching)

Body: { "query": "{ order(id: 1) { id } customer(id: 2) { name } }" }
      → Multiple resources in one request

Pros:
- Client controls response shape (no over/under-fetching)
- Single endpoint
- Strongly typed schema (SDL)
- Great for complex UIs and mobile (bandwidth)
- Introspection (auto-documentation)
- No versioning needed (evolve schema with deprecations)

Cons:
- Complex server implementation
- N+1 problem (naive resolver performance)
- Caching is hard (POST-based, dynamic queries)
- Query complexity can hurt (depth, breadth)
- Rate limiting is harder (variable cost per query)
- Overkill for simple CRUD
*/

// Spring Boot GraphQL (spring-graphql)
@Controller
class OrderGraphQlController {

    @QueryMapping
    public Order order(@Argument Long id) {
        return orderService.findById(id);
    }

    @QueryMapping
    public List&lt;Order&gt; orders(@Argument int page, @Argument int size) {
        return orderService.findAll(page, size);
    }

    @MutationMapping
    public Order createOrder(@Argument CreateOrderInput input) {
        return orderService.create(input);
    }

    @SchemaMapping(typeName = "Order", field = "customer")
    public Customer customer(Order order) {
        return customerService.findById(order.getCustomerId());
    }

    @SchemaMapping(typeName = "Order", field = "items")
    public List&lt;OrderItem&gt; items(Order order) {
        return orderService.findItemsByOrderId(order.getId());
    }

    // Batch loading to prevent N+1
    @BatchMapping(typeName = "Order", field = "items")
    public Map&lt;Order, List<OrderItem&gt;> items(List&lt;Order&gt; orders) {
        List&lt;Long&gt; ids = orders.stream().map(Order::getId).toList();
        List&lt;OrderItem&gt; allItems = orderService.findItemsByOrderIds(ids);
        return allItems.stream()
            .collect(Collectors.groupingBy(item ->
                orders.stream()
                    .filter(o -> o.getId().equals(item.getOrderId()))
                    .findFirst().orElseThrow()));
    }
}

// GraphQL schema (schema.graphqls)
/*
type Query {
    order(id: Long!): Order
    orders(page: Int, size: Int): [Order]
}

type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    cancelOrder(id: Long!): Order!
}

type Order {
    id: Long!
    customerName: String!
    total: Float!
    status: String!
    customer: Customer
    items: [OrderItem]
}

type Customer {
    id: Long!
    name: String!
    email: String!
}

type OrderItem {
    id: Long!
    name: String!
    price: Float!
    quantity: Int!
}

input CreateOrderInput {
    customerId: Long!
    items: [OrderItemInput]
}

input OrderItemInput {
    productId: Long!
    quantity: Int!
}
*/

// === 3. gRPC API example ===
/*
gRPC: binary protocol with protobuf, HTTP/2, code generation.

// orders.proto
service OrderService {
    rpc GetOrder (GetOrderRequest) returns (Order);
    rpc ListOrders (ListOrdersRequest) returns (ListOrdersResponse);
    rpc CreateOrder (CreateOrderRequest) returns (Order);
    rpc StreamOrders (Empty) returns (stream Order);  // Server streaming
}

message GetOrderRequest { int64 id = 1; }
message Order {
    int64 id = 1;
    string customer_name = 2;
    double total = 3;
    string status = 4;
    repeated OrderItem items = 5;
}

Pros:
- Fast (binary protobuf, HTTP/2, small payloads)
- Strongly typed (code generation from .proto)
- Streaming built-in (unary, server, client, bidirectional)
- Polyglot (generate clients in any language)
- Perfect for microservices communication

Cons:
- Less browser support (needs gRPC-web)
- Harder debugging (binary format)
- No caching (POST-based)
- Complex setup (proto compilation, tooling)
- Overkill for simple CRUD
*/

// gRPC Java client (compile proto → generated stub)
/*
class OrderGrpcClient {
    private final OrderServiceGrpc.OrderServiceBlockingStub stub;

    public Order getOrder(long id) {
        GetOrderRequest request = GetOrderRequest.newBuilder()
            .setId(id).build();
        return stub.getOrder(request);
    }

    public void streamOrders() {
        stub.streamOrders(Empty.newBuilder().build())
            .forEachRemaining(order -> {
                System.out.println("Received: " + order.getId());
            });
    }
}
*/

// === 4. Decision framework ===
/*
                     REST           GraphQL          gRPC
───────────────────────────────────────────────────────────
Transport           HTTP/1.1       HTTP/1.1+       HTTP/2
Data format         JSON (XML)     JSON            Protobuf
Caching             Native (304)   Custom          Not built-in
Streaming           SSE/Chunked    Subscriptions   Native
Typed contract      Manual         Schema (SDL)    Proto
Code generation     Optional       Tools           Mandatory
Browser support     Native         Native          gRPC-web
Tooling             Any client     Apollo/Relay    Generated clients
Learning curve      Low            Medium          High
Performance         Good           Good            Excellent
Payload size        Medium         Smallest        Small

Choose REST if:
- Public API with diverse clients
- Need HTTP caching
- Simple CRUD operations
- Team knows HTTP well

Choose GraphQL if:
- Complex frontend data requirements
- Mobile clients (bandwidth sensitive)
- Multiple data sources to aggregate
- Rapid frontend iteration (no backend changes for new fields)

Choose gRPC if:
- Microservice-to-microservice communication
- High-performance requirements
- Real-time streaming needed
- Polyglot environment (auto-generate clients)
- Internal APIs only (not browser-facing)

// Hybrid approach is common:
// Public API → REST
// Frontend-Gateway → GraphQL (aggregates REST services)
// Service-to-Service → gRPC
*/

// === 5. Spring Boot comparison endpoints ===
@RestController
@RequestMapping("/api/compare")
class ApiComparisonController {

    @GetMapping("/rest/orders/{id}")
    public Order restGetOrder(@PathVariable Long id) {
        return orderService.findById(id);
    }

    // GraphQL endpoint (single query endpoint)
    @PostMapping("/graphql")
    public Object graphql(@RequestBody String query) {
        // Usually handled by spring-graphql starter
        return graphQlService.execute(query);
    }

    // gRPC equivalent (handled by separate server or transcoding)
    // Spring supports gRPC via grpc-spring-boot-starter
}

// === 6. When NOT to use each ===

/*
Don't use REST when:
- Clients need highly flexible data shapes
- Network bandwidth is critical (mobile)
- Real-time streaming required
- Hundreds of services communicating

Don't use GraphQL when:
- Simple CRUD with fixed responses
- HTTP caching is required
- Query complexity is unpredictable
- Team size is small (more implementation work)

Don't use gRPC when:
- API is directly consumed by browsers
- Wide ecosystem/tooling compatibility needed
- Team is new to proto definitions
- HTTP caching is important
- Quick iteration on API contract
*/
```

Choose the right protocol for the job: REST for public APIs, GraphQL for flexible frontends, gRPC for microservice-internal communication. Many large systems use all three → REST for external, GraphQL for frontend gateway, gRPC for service mesh. Don't over-engineer: REST is the safest default.
### Q15: How do you implement caching in a REST API (ETag, Cache-Control)?


**Answer:** HTTP caching reduces server load and latency. Two levels: client-side (Cache-Control header tells browsers/proxies to cache) and server-side (ETag for conditional requests → 304 Not Modified avoids resending data). Spring supports both via WebMvcConfigurer and Servlet filters. Always set Cache-Control for GET responses and use ETags for validation.

```java
// === 1. ETag → conditional GET ===
/*
ETag is a hash (or version identifier) of the resource.
Server returns ETag in response header.
Client sends If-None-Match with previous ETag.
Server returns 304 Not Modified if resource unchanged.

Request 1:
GET /api/orders/1
Response:
200 OK
ETag: "a1b2c3d4"
Body: { order data }

Request 2 (cached):
GET /api/orders/1
If-None-Match: "a1b2c3d4"
Response:
304 Not Modified
Body: (empty → client uses cached version)
*/

// === 2. Spring ETag filter ===
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.ShallowEtagHeaderFilter;

@Configuration
class ETagConfig {

    // Shallow ETag → auto-calculated from response body
    @Bean
    public FilterRegistrationBean&lt;ShallowEtagHeaderFilter&gt; shallowEtagFilter() {
        FilterRegistrationBean&lt;ShallowEtagHeaderFilter&gt; registration =
            new FilterRegistrationBean&lt;>();
        registration.setFilter(new ShallowEtagHeaderFilter());
        registration.addUrlPatterns("/api/*");
        registration.setName("etagFilter");
        return registration;
    }
}

// === 3. Deep ETag → calculated from business logic ===
@Component
class DeepEtagService {

    public String generateEtag(Order order) {
        // Use content hash for strong ETag
        String content = order.getId() + "|" + order.getVersion() +
            "|" + order.getUpdatedAt().toString();
        return "\"" + DigestUtils.md5DigestAsHex(
            content.getBytes(StandardCharsets.UTF_8)) + "\"";
    }

    public String generateEtag(List&lt;Order&gt; orders) {
        String content = orders.stream()
            .map(o -> o.getId() + ":" + o.getVersion())
            .collect(Collectors.joining("|"));
        return "\"" + DigestUtils.md5DigestAsHex(
            content.getBytes(StandardCharsets.UTF_8)) + "\"";
    }
}

// === 4. Conditional request handling ===
@RestController
@RequestMapping("/api/orders")
class CachingOrderController {
    private final OrderService orderService;
    private final DeepEtagService etagService;

    @GetMapping("/{id}")
    public ResponseEntity&lt;Order&gt; getOrder(@PathVariable Long id,
            @RequestHeader(value = "If-None-Match", required = false)
                String ifNoneMatch) {

        Order order = orderService.findById(id);
        String etag = etagService.generateEtag(order);

        // If client has current version, return 304
        if (etag.equals(ifNoneMatch)) {
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED)
                .eTag(etag)
                .build();
        }

        return ResponseEntity.ok()
            .eTag(etag)
            .body(order);
    }

    @GetMapping
    public ResponseEntity&lt;List<Order&gt;> getOrders(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestHeader(value = "If-None-Match", required = false)
                String ifNoneMatch) {

        List&lt;Order&gt; orders = orderService.findAll(page, size);
        String etag = etagService.generateEtag(orders);

        if (etag.equals(ifNoneMatch)) {
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED)
                .eTag(etag)
                .build();
        }

        return ResponseEntity.ok()
            .eTag(etag)
            .cacheControl(CacheControl.maxAge(30, TimeUnit.SECONDS)
                .cachePublic())
            .body(orders);
    }
}

// === 5. Cache-Control headers ===
/*
Cache-Control directives:
-----------------------
max-age=3600              → Cache for 1 hour
s-maxage=3600             → Shared cache (CDN) max age
no-cache                  → Must revalidate before using cached
no-store                  → Never cache (sensitive data)
public                    → Can be cached by any cache (CDN, proxy)
private                   → Only browser can cache (not CDN)
must-revalidate           → Must check server if cache expired
proxy-revalidate          → Same for proxy caches
immutable                 → Never needs revalidation (static assets)
stale-while-revalidate=60 → Serve stale while fetching fresh

Examples:
// Sensitive data → never cache
Cache-Control: no-store
// Public data → cache 5 minutes, CDN cache 1 minute
Cache-Control: max-age=300, s-maxage=60, public
// Dynamic data → check freshness before use
Cache-Control: no-cache, private
// Static data → cache forever (with immutable)
Cache-Control: max-age=31536000, immutable

// Spring CacheControl builder
CacheControl cc1 = CacheControl.maxAge(1, TimeUnit.HOURS).cachePublic();
CacheControl cc2 = CacheControl.noCache();
CacheControl cc3 = CacheControl.noStore();
CacheControl cc4 = CacheControl.maxAge(0).mustRevalidate();
CacheControl cc5 = CacheControl.maxAge(365, TimeUnit.DAYS).cachePublic()
    .cachePrivate(); // Private takes precedence
*/

// === 6. Cache annotations in controller ===
@RestController
@RequestMapping("/api/products")
class ProductController {

    // Public catalog → cache aggressively
    @GetMapping("/{id}")
    @CacheControl(maxAge = 300, policy = CacheControl.Policy.PUBLIC)
    public Product getProduct(@PathVariable Long id) {
        return productService.findById(id);
    }

    // Search results → shorter cache
    @GetMapping
    @CacheControl(maxAge = 60, policy = CacheControl.Policy.PUBLIC)
    public List&lt;Product&gt; searchProducts(
            @RequestParam String query) {
        return productService.search(query);
    }

    // User-specific data → private cache only
    @GetMapping("/recommendations")
    @CacheControl(maxAge = 600, policy = CacheControl.Policy.PRIVATE)
    public List&lt;Product&gt; getRecommendations(
            Authentication auth) {
        return productService.getRecommendations(auth.getName());
    }
}

// === 7. Server-side caching with Spring Cache ===
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Caching;

@Service
class OrderService {
    private final OrderRepository orderRepository;

    @Cacheable(value = "orders", key = "#id", unless = "#result == null")
    public Order findById(Long id) {
        return orderRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Order", id));
    }

    @Cacheable(value = "orders", key = "'all:' + #page + ':' + #size",
              unless = "#result.isEmpty()")
    public List&lt;Order&gt; findAll(int page, int size) {
        return orderRepository.findAll(PageRequest.of(page, size))
            .getContent();
    }

    @Caching(evict = {
        @CacheEvict(value = "orders", key = "#result.id"),
        @CacheEvict(value = "orders", key = "'all:*'", allEntries = true)
    })
    @Transactional
    public Order create(CreateOrderRequest request) {
        return orderRepository.save(new Order(request));
    }

    @Caching(evict = {
        @CacheEvict(value = "orders", key = "#id"),
        @CacheEvict(value = "orders", key = "'all:*'", allEntries = true)
    })
    @Transactional
    public void delete(Long id) {
        orderRepository.deleteById(id);
    }
}

// === 8. Conditional PUT/PATCH (preventing lost updates) ===
@PutMapping("/{id}")
public ResponseEntity&lt;Order&gt; updateOrder(@PathVariable Long id,
        @RequestBody @Valid UpdateOrderRequest request,
        @RequestHeader(value = "If-Match", required = false)
            String ifMatch) {

    Order current = orderService.findById(id);
    String currentEtag = etagService.generateEtag(current);

    // Enforce optimistic locking via If-Match
    if (ifMatch != null && !currentEtag.equals(ifMatch)) {
        return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED)
            .header("X-Error", "Resource modified by another user")
            .build();
    }

    Order updated = orderService.update(id, request);
    String newEtag = etagService.generateEtag(updated);

    return ResponseEntity.ok()
        .eTag(newEtag)
        .body(updated);
}

// === 9. Testing caching ===
/*
@Test
void testEtagCaching() throws Exception {
    ResultActions firstRequest = mockMvc.perform(get("/api/orders/1"))
        .andExpect(status().isOk())
        .andExpect(header().exists("ETag"));

    String etag = firstRequest.andReturn().getResponse()
        .getHeader("ETag");

    // Second request with If-None-Match → 304
    mockMvc.perform(get("/api/orders/1")
            .header("If-None-Match", etag))
        .andExpect(status().isNotModified())
        .andExpect(content().string(""));  // No body
}

@Test
void testCacheControlHeaders() throws Exception {
    mockMvc.perform(get("/api/products")
            .accept(MediaType.APPLICATION_JSON))
        .andExpect(header().string("Cache-Control",
            containsString("max-age")));
}

@Test
void testIfMatchOptimisticLocking() throws Exception {
    String etag = mockMvc.perform(get("/api/orders/1"))
        .andReturn().getResponse().getHeader("ETag");

    // Update with correct ETag → success
    mockMvc.perform(put("/api/orders/1")
            .header("If-Match", etag)
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"status\": \"SHIPPED\"}"))
        .andExpect(status().isOk());

    // Update with wrong ETag → 412
    mockMvc.perform(put("/api/orders/1")
            .header("If-Match", "\"wrong-etag\"")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"status\": \"SHIPPED\"}"))
        .andExpect(status().isPreconditionFailed());
}
*/

// === 10. Cache best practices ===
/*
1. Always set Cache-Control on GET responses
   - no-store for sensitive data (auth tokens, personal info)
   - public + max-age for public content
   - private for user-specific data

2. Use ETags for efficient conditional GETs
   - Shallow ETag (response hash) for simple cases
   - Deep ETag (business logic hash) for performance

3. Use If-Match for optimistic locking on writes
   - Prevents lost updates (last writer wins)
   - Return 412 Precondition Failed on conflict

4. Cache invalidation strategy
   - Evict on write (PUT, PATCH, DELETE)
   - Use Spring @CacheEvict on mutations
   - Consider TTL for cache consistency

5. Don't cache:
   - Error responses (4xx, 5xx)
   - Auth-related requests
   - Real-time data
   - User-specific data in public caches

6. CDN caching strategy:
   - Set s-maxage for CDN-specific TTL
   - Use Cache-Tag header for CDN purge
   - Vary: Accept-Encoding, Accept (for content negotiation)

// Production cache configuration
@GetMapping("/api/products/{id}")
public ResponseEntity&lt;Product&gt; getProductCached(@PathVariable Long id) {
    Product product = productService.findById(id);
    return ResponseEntity.ok()
        .cacheControl(CacheControl.maxAge(1, TimeUnit.HOURS)
            .sMaxAge(30, TimeUnit.MINUTES)
            .cachePublic()
            .staleWhileRevalidate(5, TimeUnit.MINUTES))
        .eTag(etagService.generateEtag(product))
        .body(product);
}
*/
```

Caching is the most impactful performance optimization for REST APIs. Use ETags for conditional requests (returns 304 with empty body), Cache-Control headers for client/CDN caching, and Spring @Cacheable for server-side caching. Combine all three for maximum benefit. Match cache invalidation granularity to your data change patterns.
### Q16: How do you document a REST API with OpenAPI/Swagger?


**Answer:** OpenAPI (formerly Swagger) is the industry standard for REST API documentation. Springdoc openapi-ui auto-generates OpenAPI 3.0 docs from annotations, controller signatures, and model classes. The generated spec provides interactive API documentation (Swagger UI), client SDK generation, and API validation. Always document request/response schemas, error responses, and auth requirements.

```java
// === 1. Springdoc OpenAPI setup ===
/*
pom.xml:
<dependency>
    <groupId>org.springdoc&lt;/groupId&gt;
    <artifactId>springdoc-openapi-starter-webmvc-ui&lt;/artifactId&gt;
    <version>2.5.0&lt;/version&gt;
</dependency>

After adding dependency:
- Swagger UI available at: /swagger-ui.html
- OpenAPI spec at: /v3/api-docs
- Auto-generates from annotations
*/

// === 2. OpenAPI configuration ===
import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.*;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.security.*;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import io.swagger.v3.oas.models.media.*;
import io.swagger.v3.oas.models.responses.ApiResponses;

@Configuration
class OpenApiConfig {

    @Bean
    public OpenAPI customOpenApi() {
        return new OpenAPI()
            .info(new Info()
                .title("Order Management API")
                .description("REST API for managing orders, customers, and products. " +
                    "Provides full CRUD operations with pagination, filtering, and " +
                    "hypermedia links.")
                .version("2.0.0")
                .contact(new Contact()
                    .name("API Support")
                    .email("api@company.com")
                    .url("https://developer.company.com"))
                .license(new License()
                    .name("Apache 2.0")
                    .url("https://www.apache.org/licenses/LICENSE-2.0")))
            .addServersItem(new Server()
                .url("https://api.company.com/v2")
                .description("Production server"))
            .addServersItem(new Server()
                .url("https://staging-api.company.com/v2")
                .description("Staging server"))
            .addServersItem(new Server()
                .url("http://localhost:8080")
                .description("Local development"))
            .externalDocs(new ExternalDocumentation()
                .description("Full API documentation wiki")
                .url("https://wiki.company.com/api"))
            .schemaRequirement("BearerAuth", new SecurityScheme()
                .type(SecurityScheme.Type.HTTP)
                .scheme("bearer")
                .bearerFormat("JWT")
                .description("Enter JWT token obtained from /api/auth/login"))
            .schemaRequirement("ApiKeyAuth", new SecurityScheme()
                .type(SecurityScheme.Type.APIKEY)
                .in(SecurityScheme.In.HEADER)
                .name("X-API-Key")
                .description("API key for service-to-service communication"));
    }

    // Group APIs by version or domain
    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
            .group("public")
            .displayName("Public API")
            .pathsToMatch("/api/public/**")
            .build();
    }

    @Bean
    public GroupedOpenApi orderApi() {
        return GroupedOpenApi.builder()
            .group("orders")
            .displayName("Order Management")
            .pathsToMatch("/api/orders/**")
            .build();
    }

    @Bean
    public GroupedOpenApi adminApi() {
        return GroupedOpenApi.builder()
            .group("admin")
            .displayName("Admin API")
            .pathsToMatch("/api/admin/**")
            .addOpenApiCustomizer(openApi -> openApi
                .info(new Info().title("Admin API").version("1.0")))
            .build();
    }

    // All APIs
    @Bean
    public GroupedOpenApi allApi() {
        return GroupedOpenApi.builder()
            .group("all")
            .displayName("All Endpoints")
            .pathsToMatch("/api/**")
            .build();
    }
}

// === 3. Annotating controllers ===
import io.swagger.v3.oas.annotations.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.media.*;
import io.swagger.v3.oas.annotations.responses.*;
import io.swagger.v3.oas.annotations.security.*;

@RestController
@RequestMapping("/api/orders")
@Tag(name = "Orders", description = "Order management endpoints")
class OrderDocController {
    private final OrderService orderService;

    @Operation(
        summary = "Get order by ID",
        description = "Retrieves a single order with full details including " +
            "items, customer summary, and payment status. Supports " +
            "conditional GET via ETag.",
        tags = {"orders", "read"},
        operationId = "getOrder"
    )
    @ApiResponses({
        @ApiResponse(
            responseCode = "200",
            description = "Order found successfully",
            headers = {
                @Header(name = "ETag", description = "Version identifier",
                    schema = @Schema(type = "string")),
                @Header(name = "Cache-Control",
                    description = "Caching directives",
                    schema = @Schema(type = "string"))
            },
            content = @Content(
                mediaType = "application/json",
                schema = @Schema(implementation = Order.class),
                examples = @ExampleObject(
                    name = "order-example",
                    summary = "Example order response",
                    value = """
                        {
                            "id": 1,
                            "customerName": "Alice Johnson",
                            "total": 250.00,
                            "status": "PENDING",
                            "items": [
                                {"id": 1, "name": "Widget", "price": 50.00, "quantity": 5}
                            ]
                        }
                    """
                )
            )
        ),
        @ApiResponse(
            responseCode = "304",
            description = "Not modified → ETag matches cached version",
            headers = @Header(name = "ETag",
                schema = @Schema(type = "string"))
        ),
        @ApiResponse(
            responseCode = "401",
            description = "Missing or invalid authentication"
        ),
        @ApiResponse(
            responseCode = "404",
            description = "Order not found",
            content = @Content(
                mediaType = "application/problem+json",
                schema = @Schema(implementation = ProblemDetail.class)
            )
        ),
        @ApiResponse(
            responseCode = "429",
            description = "Rate limit exceeded"
        )
    })
    @SecurityRequirement(name = "BearerAuth")
    @GetMapping("/{id}")
    public ResponseEntity&lt;Order&gt; getOrder(
            @Parameter(description = "Order ID", required = true,
                example = "123")
            @PathVariable Long id,
            @Parameter(hidden = true)
            @RequestHeader(value = "If-None-Match", required = false)
                String ifNoneMatch) {
        // implementation...
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Create a new order")
    @ApiResponses({
        @ApiResponse(responseCode = "201", description = "Order created",
            content = @Content(schema = @Schema(implementation = Order.class))),
        @ApiResponse(responseCode = "400", description = "Validation error"),
        @ApiResponse(responseCode = "409", description = "Conflict")
    })
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Order createOrder(
            @RequestBody(description = "Order creation request",
                required = true,
                content = @Content(
                    schema = @Schema(implementation = CreateOrderRequest.class),
                    examples = @ExampleObject(
                        name = "create-example",
                        value = """
                            {
                                "customerId": 1,
                                "items": [
                                    {"productId": 10, "quantity": 2}
                                ]
                            }
                            """
                    )
                ))
            @Valid @RequestBody CreateOrderRequest request) {
        return orderService.create(request);
    }

    @Operation(summary = "List orders with pagination")
    @GetMapping
    @Parameters({
        @Parameter(name = "page", description = "Page number (0-indexed)",
            example = "0", schema = @Schema(type = "integer", minimum = "0")),
        @Parameter(name = "size", description = "Page size",
            example = "20", schema = @Schema(type = "integer", maximum = "100")),
        @Parameter(name = "sort", description = "Sort field, e.g. 'createdAt,desc'",
            example = "createdAt,desc"),
        @Parameter(name = "status", description = "Filter by status",
            schema = @Schema(implementation = OrderStatus.class))
    })
    public Page&lt;Order&gt; listOrders(
            @Parameter(hidden = true) Pageable pageable,
            @RequestParam(required = false) String status) {
        return orderService.findAll(pageable, status);
    }
}

// === 4. Annotating models ===
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Order entity representing a customer purchase")
class Order {
    @Schema(description = "Unique identifier", example = "1",
        accessMode = Schema.AccessMode.READ_ONLY)
    private Long id;

    @Schema(description = "Customer full name", example = "Alice Johnson",
        minLength = 1, maxLength = 100)
    private String customerName;

    @Schema(description = "Order total amount", example = "250.00",
        minimum = "0.01")
    private Double total;

    @Schema(description = "Order status",
        allowableValues = {"PENDING", "CONFIRMED", "SHIPPED", "DELIVERED",
                           "CANCELLED"},
        example = "PENDING")
    private String status;

    @Schema(description = "Order creation timestamp",
        example = "2024-01-15T10:30:00Z",
        pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'")
    private Instant createdAt;

    @Schema(description = "Order items", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    private List&lt;OrderItem&gt; items;

    @Schema(hidden = true)  // Hide internal fields
    private int version;
}

@Schema(description = "Request to create a new order")
record CreateOrderRequest(
    @Schema(description = "Customer ID", example = "1", requiredMode = REQUIRED)
    Long customerId,

    @Schema(description = "Order items", requiredMode = REQUIRED,
        minLength = 1)
    @NotEmpty List&lt;@Valid OrderItemRequest&gt; items
) {}

@Schema(description = "An item within an order")
record OrderItemRequest(
    @Schema(description = "Product ID", example = "10", requiredMode = REQUIRED)
    Long productId,

    @Schema(description = "Quantity", example = "2", minimum = "1",
        requiredMode = REQUIRED)
    @Min(1) int quantity
) {}

// === 5. Error schema documentation ===
@Schema(description = "Standard error response per RFC 7807")
class ApiError {
    @Schema(description = "Error type URI", example = "https://api.example.com/errors/validation")
    private String type;

    @Schema(description = "Short error title", example = "Validation Failed")
    private String title;

    @Schema(description = "HTTP status code", example = "400")
    private int status;

    @Schema(description = "Detailed error message", example = "Request body has invalid fields")
    private String detail;

    @Schema(description = "Request URI that caused the error", example = "/api/orders")
    private String instance;

    @Schema(description = "Field-level validation errors")
    private Map&lt;String, List<String&gt;> errors;
}

// === 6. application.yml configuration ===
/*
springdoc:
  api-docs:
    path: /v3/api-docs
    enabled: true
  swagger-ui:
    path: /swagger-ui.html
    enabled: true
    operations-sorter: method
    tags-sorter: alpha
    display-request-duration: true
    try-it-out-enabled: true
    filter: true
    syntax-highlight:
      theme: monokai
  packages-to-scan: com.example.api
  paths-to-match: /api/**
  cache:
    disabled: true
  show-actuator: true
  default-consumes-media-type: application/json
  default-produces-media-type: application/json
*/

// === 7. Security in Swagger UI ===
/*
Swagger UI allows testing authenticated endpoints:

1. Click "Authorize" button
2. Enter JWT token in Bearer Auth field
3. All subsequent requests include:
   Authorization: Bearer &lt;token&gt;

Configured via:
.securityRequirement(new SecurityRequirement().addList("BearerAuth"))

For OAuth2 flow:
@Bean
public OpenAPI oauth2OpenApi() {
    return new OpenAPI()
        .components(new Components()
            .addSecuritySchemes("oauth2", new SecurityScheme()
                .type(SecurityScheme.Type.OAUTH2)
                .flows(new OAuthFlows()
                    .authorizationCode(new OAuthFlow()
                        .authorizationUrl("https://auth.company.com/oauth/authorize")
                        .tokenUrl("https://auth.company.com/oauth/token")
                        .scopes(new Scopes()
                            .addString("read:orders", "Read orders")
                            .addString("write:orders", "Create/update orders")
                            .addString("admin", "Admin access"))))));
}
*/

// === 8. Testing OpenAPI generation ===
/*
@Test
void testOpenApiSpecGenerates() throws Exception {
    mockMvc.perform(get("/v3/api-docs")
            .accept(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.openapi").value("3.0.1"))
        .andExpect(jsonPath("$.info.title").value("Order Management API"))
        .andExpect(jsonPath("$.paths./api/orders/{id}").exists())
        .andExpect(jsonPath("$.paths./api/orders/{id}.get.operationId")
            .value("getOrder"));
}

@Test
void testSwaggerUiLoads() throws Exception {
    mockMvc.perform(get("/swagger-ui.html"))
        .andExpect(status().isFound())
        .andExpect(header().string("Location", containsString("swagger-ui")));
}
*/

// === 9. Documenting file upload ===
@Operation(summary = "Upload order attachment")
@PostMapping(value = "/{id}/attachments", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
public Attachment uploadAttachment(
        @PathVariable Long id,
        @Parameter(description = "File to upload", required = true,
            content = @Content(mediaType = MediaType.APPLICATION_OCTET_STREAM_VALUE))
        @RequestParam("file") MultipartFile file) {
    return orderService.addAttachment(id, file);
}
```

OpenAPI is essential for production APIs. Springdoc auto-generates the spec from annotations → add descriptive text, examples, and response codes. Document error responses (Problem Details schema), auth requirements (Bearer, API key), and pagination parameters. Group endpoints by domain for manageable docs. Provide examples for request/response bodies.
### Q17: How do you validate request bodies and parameters?


**Answer:** Spring Boot uses Bean Validation (Jakarta Validation) annotations for request validation. Combine @Valid on request bodies with validation annotations on DTO fields. Use @Validated for grouped validation, custom validators for complex rules, and @ControllerAdvice for consistent error responses. Always validate at the boundary → never trust client input.

```java
// === 1. Basic bean validation ===
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;
import java.time.LocalDate;

// Request DTO with validation rules
record CreateOrderRequest(
    @NotNull(message = "Customer ID is required")
    Long customerId,

    @NotBlank(message = "Customer name is required")
    @Size(min = 2, max = 100, message = "Name must be 2-100 characters")
    String customerName,

    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,

    @NotNull(message = "Total is required")
    @Positive(message = "Total must be positive")
    @DecimalMin(value = "0.01", message = "Minimum order is 0.01")
    @DecimalMax(value = "100000", message = "Maximum order is 100,000")
    Double total,

    @NotNull(message = "Order date is required")
    @PastOrPresent(message = "Order date cannot be in the future")
    LocalDate orderDate,

    @NotNull(message = "Items list is required")
    @Size(min = 1, message = "At least one item is required")
    @NotEmpty
    List&lt;@Valid OrderItemRequest&gt; items,

    @Pattern(regexp = "^[A-Z]{2,10}$",
        message = "Currency must be 2-10 uppercase letters")
    String currency,

    @Valid  // Nested validation
    ShippingAddress shippingAddress
) {}

record OrderItemRequest(
    @NotNull(message = "Product ID is required")
    Long productId,

    @Min(value = 1, message = "Minimum quantity is 1")
    @Max(value = 999, message = "Maximum quantity is 999")
    int quantity,

    @PositiveOrZero(message = "Discount cannot be negative")
    Double discount
) {}

record ShippingAddress(
    @NotBlank(message = "Street is required")
    @Size(max = 200)
    String street,

    @NotBlank(message = "City is required")
    String city,

    @NotBlank(message = "ZIP code is required")
    @Pattern(regexp = "\\d{5}(-\\d{4})?",
        message = "Invalid ZIP code format")
    String zipCode,

    @NotBlank(message = "Country is required")
    @Size(min = 2, max = 2, message = "Country must be ISO 2-letter code")
    String country
) {}

// === 2. Controller validation ===
@RestController
@RequestMapping("/api/orders")
@Validated  // Enables validation on method-level parameters
class ValidatingOrderController {

    // Validate request body → @Valid triggers validation
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Order createOrder(
            @RequestBody @Valid CreateOrderRequest request) {
        return orderService.create(request);
    }

    // Validate path variables and query parameters
    @GetMapping("/{id}")
    public Order getOrder(
            @PathVariable @Min(1) Long id,
            @RequestParam(defaultValue = "false") @AssertFalse
                boolean includeDeleted) {
        return orderService.findById(id);
    }

    // Custom validation on a group
    @PutMapping("/{id}")
    public Order updateOrder(
            @PathVariable Long id,
            @RequestBody @Validated(UpdateGroup.class) @Valid
                UpdateOrderRequest request) {
        return orderService.update(id, request);
    }

    // Multiple parameter validation
    @GetMapping("/search")
    public List&lt;Order&gt; searchOrders(
            @RequestParam @NotBlank @Size(min = 3) String query,
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "20") @Min(1) @Max(100) int size,
            @RequestParam(required = false) @PastOrPresent
                LocalDate fromDate,
            @RequestParam(required = false) @FutureOrPresent
                LocalDate toDate) {
        return orderService.search(query, page, size, fromDate, toDate);
    }
}

// === 3. Validation groups ===
interface CreateGroup {}
interface UpdateGroup {}
interface DeleteGroup {}

// Different rules for create vs update
record SaveOrderRequest(
    @Null(groups = CreateGroup.class,
        message = "ID must be null for new orders")
    @NotNull(groups = UpdateGroup.class,
        message = "ID is required for updates")
    Long id,

    @NotBlank(groups = {CreateGroup.class, UpdateGroup.class})
    String customerName,

    @NotNull(groups = CreateGroup.class)
    Double total,

    @Null(groups = CreateGroup.class,
        message = "Status must be set by server on create")
    @NotBlank(groups = UpdateGroup.class)
    String status
) {}

// Using groups in controller
@PostMapping
public Order create(@RequestBody @Validated(CreateGroup.class)
                        @Valid SaveOrderRequest request) {
    return orderService.create(request);
}

@PutMapping("/{id}")
public Order update(@RequestBody @Validated(UpdateGroup.class)
                        @Valid SaveOrderRequest request) {
    return orderService.update(request);
}

// === 4. Custom validator ===
import jakarta.validation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = DateRangeValidator.class)
@interface ValidDateRange {
    String message() default "End date must be after start date";
    Class&lt;?>[] groups() default {};
    Class&lt;? extends Payload&gt;[] payload() default {};
}

// Cross-field validation on the DTO
record DateRangeRequest(
    @NotNull LocalDate startDate,
    @NotNull LocalDate endDate
) {}

class DateRangeValidator
        implements ConstraintValidator&lt;ValidDateRange, DateRangeRequest&gt; {

    @Override
    public boolean isValid(DateRangeRequest value,
            ConstraintValidatorContext context) {
        if (value == null || value.startDate() == null || value.endDate() == null) {
            return true; // @NotNull handles null
        }

        boolean valid = value.endDate().isAfter(value.startDate());
        if (!valid) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(
                    "End date must be after start date")
                .addPropertyNode("endDate")
                .addConstraintViolation();
        }
        return valid;
    }
}

// === 5. Enum validator ===
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EnumValidator.class)
@interface ValidEnum {
    String message() default "Invalid value";
    Class&lt;? extends Enum<?&gt;>[] enumClass();
    Class&lt;?>[] groups() default {};
    Class&lt;? extends Payload&gt;[] payload() default {};
}

class EnumValidator implements ConstraintValidator&lt;ValidEnum, String&gt; {
    private Set&lt;String&gt; allowedValues;

    @Override
    public void initialize(ValidEnum annotation) {
        allowedValues = Arrays.stream(annotation.enumClass()[0].getEnumConstants())
            .map(Enum::name)
            .collect(Collectors.toSet());
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) return true;
        return allowedValues.contains(value);
    }
}

enum OrderStatus { PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED }

// Usage:
record UpdateStatusRequest(
    @ValidEnum(enumClass = OrderStatus.class,
        message = "Status must be one of: PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED")
    String status
) {}

// === 6. Programmatic validation ===
@Component
class OrderValidationService {

    private final Validator validator;

    public OrderValidationService() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        this.validator = factory.getValidator();
    }

    public void validateOrder(Order order) {
        Set&lt;ConstraintViolation<Order&gt;> violations = validator.validate(order);
        if (!violations.isEmpty()) {
            Map&lt;String, String&gt; errors = new HashMap&lt;>();
            violations.forEach(v ->
                errors.put(v.getPropertyPath().toString(), v.getMessage()));
            throw new ValidationException(
                "Order validation failed: " + errors);
        }
    }

    // Validate specific groups
    public void validateForCreate(CreateOrderRequest request) {
        Set&lt;ConstraintViolation<CreateOrderRequest&gt;> violations =
            validator.validate(request, CreateGroup.class);
        if (!violations.isEmpty()) {
            throw new ConstraintViolationException(violations);
        }
    }
}

// === 7. Global validation error handling ===
@RestControllerAdvice
class ValidationExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ProblemDetail handleValidationErrors(
            MethodArgumentNotValidException ex) {

        ProblemDetail pd = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
        pd.setType(URI.create("https://api.example.com/errors/validation"));
        pd.setTitle("Validation Failed");
        pd.setDetail("Request contains invalid fields");

        Map&lt;String, List<String&gt;> errors = new HashMap&lt;>();

        // Field-level errors
        ex.getBindingResult().getFieldErrors().forEach(fe -> {
            errors.computeIfAbsent(fe.getField(), k -> new ArrayList&lt;>())
                .add(fe.getDefaultMessage());
        });

        // Global errors
        ex.getBindingResult().getGlobalErrors().forEach(ge -> {
            errors.computeIfAbsent(ge.getObjectName(), k -> new ArrayList&lt;>())
                .add(ge.getDefaultMessage());
        });

        pd.setProperty("errors", errors);
        pd.setProperty("timestamp", Instant.now());

        return pd;
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ProblemDetail handleConstraintViolation(
            ConstraintViolationException ex) {

        ProblemDetail pd = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
        pd.setTitle("Validation Failed");
        pd.setDetail("Parameter validation failed");

        Map&lt;String, String&gt; errors = new HashMap&lt;>();
        ex.getConstraintViolations().forEach(v ->
            errors.put(v.getPropertyPath().toString(), v.getMessage()));

        pd.setProperty("errors", errors);
        return pd;
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ProblemDetail handleMissingParam(
            MissingServletRequestParameterException ex) {

        return ProblemDetail.forStatusAndDetail(
            HttpStatus.BAD_REQUEST,
            "Required parameter '" + ex.getParameterName() +
            "' of type " + ex.getParameterType() + " is missing");
    }

    @ExceptionHandler(BindException.class)
    public ProblemDetail handleBindException(BindException ex) {
        ProblemDetail pd = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
        pd.setTitle("Binding Failed");
        pd.setDetail("Failed to bind request parameters");

        Map&lt;String, String&gt; errors = new HashMap&lt;>();
        ex.getFieldErrors().forEach(fe ->
            errors.put(fe.getField(), fe.getDefaultMessage()));
        pd.setProperty("errors", errors);
        return pd;
    }
}

// === 8. Testing validation ===
/*
@Test
void testValidationErrors() throws Exception {
    mockMvc.perform(post("/api/orders")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{}"))  // Empty body → all fields invalid
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$.title").value("Validation Failed"))
        .andExpect(jsonPath("$.errors.customerId").exists())
        .andExpect(jsonPath("$.errors.customerName").exists())
        .andExpect(jsonPath("$.errors.total").exists());
}

@Test
void testMinMaxValidation() throws Exception {
    mockMvc.perform(post("/api/orders")
            .contentType(MediaType.APPLICATION_JSON)
            .content("""
                {
                    "customerId": 1,
                    "customerName": "Al",
                    "total": -5,
                    "items": []
                }
                """))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$.errors.customerName[0]")
            .value("Name must be 2-100 characters"))
        .andExpect(jsonPath("$.errors.total[0]")
            .value("Total must be positive"))
        .andExpect(jsonPath("$.errors.items[0]")
            .value("At least one item is required"));
}

@Test
void testEnumValidation() throws Exception {
    mockMvc.perform(put("/api/orders/1/status")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"status\": \"INVALID\"}"))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$.errors.status").exists());
}
*/

// === 9. Best practices ===
/*
1. Validate at the boundary → every public endpoint validates input
2. Use DTOs with validation annotations (not entity classes)
3. Custom validators for cross-field validation (date ranges, conditional rules)
4. Return field-level error messages (not "invalid request")
5. Use validation groups for create vs update (ID required on update, not create)
6. Consistent error response format (Problem Details + field errors)
7. Validate path variables and query parameters too (not just bodies)
8. Sanitize string inputs in addition to validation
9. Log validation failures for monitoring
10. Document validation rules in OpenAPI schema

// Conditional validation example (custom annotation)
@Target(TYPE)
@Retention(RUNTIME)
@Constraint(validatedBy = ConditionalValidator.class)
@interface ConditionalValid {
    // Only validate if some condition is met
}
*/
```

Bean Validation is the standard approach. Combine javax/jakarta validation annotations on DTOs, @Valid on controller parameters, and @Validated for method-level validation. Add custom validators for cross-field rules (@ValidDateRange). Handle validation errors with @ControllerAdvice returning Problem Details with individual field errors. Never trust client input.
### Q18: How do you handle file uploads in a REST API?


**Answer:** File uploads use multipart/form-data content type. Spring Boot handles multipart requests via MultipartFile. Configure max file size in application.yml. Store files locally, on cloud storage (S3), or in a database (not recommended). Validate file type, size, and content. Stream large files to avoid memory issues. Return file metadata and download URLs.

```java
// === 1. Basic file upload ===
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/files")
class FileUploadController {
    private final FileStorageService storageService;

    @PostMapping("/upload")
    public ResponseEntity&lt;FileMetadata&gt; uploadFile(
            @RequestParam("file") MultipartFile file) {

        // Validate immediately
        if (file.isEmpty()) {
            throw new FileValidationException("File is empty");
        }

        FileMetadata metadata = storageService.store(file);

        return ResponseEntity
            .created(URI.create("/api/files/" + metadata.getId()))
            .body(metadata);
    }

    // Multiple files
    @PostMapping("/upload/multiple")
    public ResponseEntity&lt;List<FileMetadata&gt;> uploadMultiple(
            @RequestParam("files") List&lt;MultipartFile&gt; files) {

        if (files.isEmpty()) {
            throw new FileValidationException("No files provided");
        }

        List&lt;FileMetadata&gt; metadata = files.stream()
            .peek(f -> { if (f.isEmpty())
                throw new FileValidationException("File is empty: " +
                    f.getOriginalFilename()); })
            .map(storageService::store)
            .collect(Collectors.toList());

        return ResponseEntity.ok(metadata);
    }

    // File download
    @GetMapping("/{id}")
    public ResponseEntity&lt;Resource&gt; downloadFile(@PathVariable String id) {
        FileData fileData = storageService.load(id);

        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(fileData.contentType()))
            .contentLength(fileData.size())
            .header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + fileData.filename() + "\"")
            .body(fileData.resource());
    }

    // Inline display (image in browser)
    @GetMapping("/{id}/inline")
    public ResponseEntity&lt;Resource&gt; displayInline(@PathVariable String id) {
        FileData fileData = storageService.load(id);

        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(fileData.contentType()))
            .contentLength(fileData.size())
            .header(HttpHeaders.CONTENT_DISPOSITION,
                "inline")
            .body(fileData.resource());
    }
}

// === 2. File storage service ===
@Service
class FileStorageService {
    private final Path uploadDir = Path.of("uploads");

    public FileMetadata store(MultipartFile file) {
        try {
            // Generate unique filename
            String originalName = file.getOriginalFilename();
            String extension = getExtension(originalName);
            String storedName = UUID.randomUUID() + extension;

            // Save to disk
            Files.createDirectories(uploadDir);
            Path targetPath = uploadDir.resolve(storedName);
            file.transferTo(targetPath.toFile());

            // Return metadata
            return new FileMetadata(
                storedName,
                originalName,
                file.getContentType(),
                file.getSize(),
                Instant.now());
        } catch (IOException e) {
            throw new FileStorageException("Failed to store file", e);
        }
    }

    public FileData load(String id) {
        try {
            Path filePath = uploadDir.resolve(id);
            Resource resource = new UrlResource(filePath.toUri());

            if (!resource.exists() || !resource.isReadable()) {
                throw new ResourceNotFoundException("File", id);
            }

            // In production, load metadata from database
            return new FileData(
                resource,
                Files.probeContentType(filePath),
                Files.size(filePath),
                id  // filename for download
            );
        } catch (IOException e) {
            throw new FileStorageException("Failed to load file", e);
        }
    }

    private String getExtension(String filename) {
        if (filename == null || !filename.contains(".")) {
            return "";
        }
        return filename.substring(filename.lastIndexOf("."));
    }
}

record FileMetadata(String id, String originalName, String contentType,
                    long size, Instant uploadedAt) {}
record FileData(Resource resource, String contentType, long size,
                String filename) {}

// === 3. File validation ===
@Component
class FileValidator {
    // Allowed MIME types by category
    private static final Set&lt;String&gt; ALLOWED_IMAGE_TYPES = Set.of(
        "image/jpeg", "image/png", "image/gif", "image/webp");
    private static final Set&lt;String&gt; ALLOWED_DOCUMENT_TYPES = Set.of(
        "application/pdf", "text/plain", "application/msword",
        "application/vnd.openxmlformats-officedocument" +
            ".wordprocessingml.document");
    private static final Set&lt;String&gt; ALLOWED_SPREADSHEET_TYPES = Set.of(
        "text/csv", "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument" +
            ".spreadsheetml.sheet");

    private static final long MAX_IMAGE_SIZE = 5 * 1024 * 1024;      // 5MB
    private static final long MAX_DOCUMENT_SIZE = 20 * 1024 * 1024;  // 20MB
    private static final long MAX_VIDEO_SIZE = 100 * 1024 * 1024;    // 100MB

    public void validate(MultipartFile file, FileCategory category) {
        if (file.isEmpty()) {
            throw new FileValidationException("File is empty");
        }

        // Validate MIME type
        String contentType = file.getContentType();
        if (contentType == null || !isAllowedType(contentType, category)) {
            throw new FileValidationException(
                "File type " + contentType + " is not allowed for " + category);
        }

        // Validate size
        long maxSize = getMaxSize(category);
        if (file.getSize() > maxSize) {
            throw new FileValidationException(
                "File size " + file.getSize() + " exceeds maximum " + maxSize);
        }

        // Validate extension matches content type (basic security check)
        String filename = file.getOriginalFilename();
        if (filename != null && !isExtensionSafe(filename, contentType)) {
            throw new FileValidationException(
                "File extension does not match content type");
        }
    }

    private boolean isAllowedType(String contentType, FileCategory category) {
        return switch (category) {
            case IMAGE -> ALLOWED_IMAGE_TYPES.contains(contentType);
            case DOCUMENT -> ALLOWED_DOCUMENT_TYPES.contains(contentType);
            case SPREADSHEET -> ALLOWED_SPREADSHEET_TYPES.contains(contentType);
        };
    }

    private long getMaxSize(FileCategory category) {
        return switch (category) {
            case IMAGE -> MAX_IMAGE_SIZE;
            case DOCUMENT -> MAX_DOCUMENT_SIZE;
            case SPREADSHEET -> MAX_VIDEO_SIZE;
        };
    }

    private boolean isExtensionSafe(String filename, String contentType) {
        // Map content types to expected extensions
        Map&lt;String, List<String&gt;> typeExtensions = Map.of(
            "image/jpeg", List.of("jpg", "jpeg", "jpe"),
            "image/png", List.of("png"),
            "image/gif", List.of("gif"),
            "application/pdf", List.of("pdf"),
            "text/csv", List.of("csv"),
            "text/plain", List.of("txt")
        );

        List&lt;String&gt; expectedExtensions = typeExtensions.get(contentType);
        if (expectedExtensions == null) return true;  // Unknown mapping, skip check

        String ext = getExtension(filename).toLowerCase();
        return expectedExtensions.contains(ext);
    }

    private String getExtension(String filename) {
        int dotIndex = filename.lastIndexOf('.');
        return dotIndex == -1 ? "" : filename.substring(dotIndex + 1);
    }
}

enum FileCategory { IMAGE, DOCUMENT, SPREADSHEET }

// === 4. Configuration ===
/*
application.yml:
spring:
  servlet:
    multipart:
      enabled: true
      max-file-size: 20MB
      max-request-size: 50MB
      file-size-threshold: 2KB
      location: ${java.io.tmpdir}
      resolve-lazily: false

app:
  file:
    upload-path: uploads
    allowed-image-types: image/jpeg,image/png,image/gif,image/webp
    allowed-document-types: application/pdf,text/plain
    max-image-size: 5242880
    max-document-size: 20971520
*/

@ConfigurationProperties(prefix = "app.file")
class FileUploadProperties {
    private Path uploadPath = Path.of("uploads");
    private List&lt;String&gt; allowedImageTypes = List.of(
        "image/jpeg", "image/png");
    private long maxImageSize = 5_242_880; // 5MB

    // getters/setters...
}

// === 5. Async file processing ===
@Service
class AsyncFileProcessor {
    private final FileStorageService storageService;
    private final FileValidator fileValidator;

    @Async
    public CompletableFuture&lt;ProcessedFile&gt; processFile(MultipartFile file,
            FileCategory category) {
        fileValidator.validate(file, category);
        FileMetadata metadata = storageService.store(file);

        // Perform async processing (thumbnail generation, virus scan, etc.)
        ProcessedFile processed = new ProcessedFile(
            metadata, generateThumbnail(file), scanForViruses(file));

        return CompletableFuture.completedFuture(processed);
    }

    private String generateThumbnail(MultipartFile file) {
        // Thumbnail generation logic
        return "thumbnail-" + file.getOriginalFilename();
    }

    private boolean scanForViruses(MultipartFile file) {
        // Anti-virus scan
        return true;
    }
}

// === 6. Large file streaming ===
@GetMapping("/{id}/stream")
public ResponseEntity&lt;StreamingResponseBody&gt; streamFile(
        @PathVariable String id) {

    FileData fileData = storageService.load(id);

    StreamingResponseBody stream = outputStream -> {
        try (InputStream inputStream = fileData.resource().getInputStream()) {
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
        }
    };

    return ResponseEntity.ok()
        .contentType(MediaType.parseMediaType(fileData.contentType()))
        .contentLength(fileData.size())
        .header(HttpHeaders.CONTENT_DISPOSITION,
            "attachment; filename=\"" + fileData.filename() + "\"")
        .body(stream);
}

// === 7. S3 cloud storage ===
@Service
class S3FileStorageService {
    private final software.amazon.awssdk.services.s3.S3Client s3Client;
    private final String bucketName = "myapp-uploads";

    public FileMetadata store(MultipartFile file) {
        try {
            String key = UUID.randomUUID() + "-" +
                sanitizeFilename(file.getOriginalFilename());

            PutObjectRequest request = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .contentType(file.getContentType())
                .contentLength(file.getSize())
                .build();

            s3Client.putObject(request,
                software.amazon.awssdk.core.sync.RequestBody.fromBytes(
                    file.getBytes()));

            return new FileMetadata(key, file.getOriginalFilename(),
                file.getContentType(), file.getSize(), Instant.now());
        } catch (IOException e) {
            throw new FileStorageException("Failed to upload to S3", e);
        }
    }

    public URL generateDownloadUrl(String key) {
        // Generate presigned URL for secure download
        GetObjectRequest getRequest = GetObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();

        return s3Client.utilities()
            .getPresignedUrl(builder -> builder
                .getObjectRequest(getRequest)
                .duration(Duration.ofHours(1)));
    }

    private String sanitizeFilename(String filename) {
        return filename.replaceAll("[^a-zA-Z0-9.-]", "_");
    }
}

// === 8. Testing file upload ===
/*
@Test
void testFileUpload() throws Exception {
    MockMultipartFile file = new MockMultipartFile(
        "file",
        "test.pdf",
        "application/pdf",
        "test file content".getBytes());

    mockMvc.perform(multipart("/api/files/upload")
            .file(file))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.originalName").value("test.pdf"))
        .andExpect(jsonPath("$.size").isNumber());
}

@Test
void testEmptyFileReturnsError() throws Exception {
    MockMultipartFile file = new MockMultipartFile(
        "file", "", "", new byte[0]);

    mockMvc.perform(multipart("/api/files/upload")
            .file(file))
        .andExpect(status().isBadRequest());
}

@Test
void testUnsupportedFileType() throws Exception {
    MockMultipartFile file = new MockMultipartFile(
        "file", "virus.exe", "application/x-msdownload",
        "malicious".getBytes());

    mockMvc.perform(multipart("/api/files/upload")
            .file(file))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$.title").value("Validation Failed"));
}

@Test
void testFileDownload() throws Exception {
    // Upload first
    MockMultipartFile file = new MockMultipartFile(
        "file", "test.txt", "text/plain", "content".getBytes());
    String result = mockMvc.perform(multipart("/api/files/upload")
            .file(file))
        .andExpect(status().isCreated())
        .andReturn().getResponse().getContentAsString();

    String fileId = JsonPath.read(result, "$.id");

    // Download
    mockMvc.perform(get("/api/files/" + fileId))
        .andExpect(status().isOk())
        .andExpect(header().string("Content-Disposition",
            containsString("attachment")))
        .andExpect(content().string("content"));
}
*/

// === 9. Error handling ===
class FileValidationException extends RuntimeException {
    public FileValidationException(String message) {
        super(message);
    }
}

class FileStorageException extends RuntimeException {
    public FileStorageException(String message, Throwable cause) {
        super(message, cause);
    }
}

// === 10. Best practices ===
/*
1. Validate files BEFORE storing (type, size, content check)
2. Store files outside the application directory
3. Generate unique filenames (UUID + extension) to prevent collisions
4. Never trust original filename → sanitize it
5. Use presigned URLs for cloud storage access
6. Implement file type whitelist (not blacklist)
7. Scan uploads for malware
8. Set reasonable file size limits
9. Clean up failed uploads (stale files)
10. Log all uploads with metadata
11. Implement rate limiting on upload endpoints
12. Consider async processing for large files
*/
```

File uploads require careful validation and secure storage. Validate file type (MIME whitelist), size, and extension before storing. Use UUID-based filenames to prevent path traversal. Stream large files to avoid memory issues. For production, use cloud storage (S3) with presigned URLs for secure access. Set multipart limits based on your use case.
### Q19: How do you implement streaming responses in a REST API?


**Answer:** Streaming sends large responses incrementally without loading everything into memory. Spring Boot supports several streaming approaches: StreamingResponseBody (byte streaming), ResponseBodyEmitter (object streaming), Server-Sent Events (SSE), and text/event-stream. Choose based on whether you need real-time pushes (SSE) or efficient large-data transfer (streaming).

```java
// === 1. StreamingResponseBody → raw byte streaming ===
/*
Best for: Large file downloads, CSV/JSON export, database cursors
Protocol: HTTP chunked transfer encoding
Client receives data as it's written
*/

@RestController
@RequestMapping("/api/export")
class StreamingExportController {

    // Stream CSV with 10 million rows (no memory overhead)
    @GetMapping("/orders/csv")
    public ResponseEntity&lt;StreamingResponseBody&gt; exportOrdersCsv() {
        StreamingResponseBody stream = outputStream -> {
            try (Writer writer = new OutputStreamWriter(
                    outputStream, StandardCharsets.UTF_8)) {

                // Header
                writer.write("id,customer,total,status,date\n");

                // Stream data → one row at a time via cursor
                orderService.streamAllOrders().forEach(order -> {
                    try {
                        writer.write(String.format("%d,%s,%.2f,%s,%s\n",
                            order.getId(),
                            escapeCsv(order.getCustomerName()),
                            order.getTotal(),
                            order.getStatus(),
                            order.getCreatedAt()));
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });
            }
        };

        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType("text/csv"))
            .header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=orders.csv")
            .body(stream);
    }

    // Stream large JSON array
    @GetMapping("/orders/json-stream")
    public ResponseEntity&lt;StreamingResponseBody&gt; exportOrdersJson() {
        ObjectMapper mapper = new ObjectMapper();

        StreamingResponseBody stream = outputStream -> {
            try (JsonGenerator generator = mapper.getFactory()
                    .createGenerator(outputStream)) {

                generator.writeStartArray();

                orderService.streamAllOrders().forEach(order -> {
                    try {
                        generator.writeStartObject();
                        generator.writeNumberField("id", order.getId());
                        generator.writeStringField("customer",
                            order.getCustomerName());
                        generator.writeNumberField("total",
                            order.getTotal());
                        generator.writeStringField("status",
                            order.getStatus());
                        generator.writeEndObject();
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });

                generator.writeEndArray();
            }
        };

        return ResponseEntity.ok()
            .contentType(MediaType.APPLICATION_NDJSON)  // Newline-delimited JSON
            .body(stream);
    }

    private String escapeCsv(String value) {
        if (value.contains(",") || value.contains("\"") ||
            value.contains("\n")) {
            return "\"" + value.replace("\"", "\"\"") + "\"";
        }
        return value;
    }
}

// === 2. Database cursor streaming ===
/*
Use Spring Data JPA's Stream to return a Java Stream.
Spring manages the database cursor, reading one row at a time.

@Service
class OrderService {
    @Transactional(readOnly = true)
    public Stream&lt;Order&gt; streamAllOrders() {
        return orderRepository.streamAllBy();
    }
}

// Repository
interface OrderRepository extends JpaRepository&lt;Order, Long&gt; {
    @QueryHints(@QueryHint(name = "org.hibernate.fetchSize", value = "100"))
    @QueryHint(name = "org.hibernate.cacheable", value = "false")
    Stream&lt;Order&gt; streamAllBy();
}
*/

// === 3. ResponseBodyEmitter → stream objects ===
/*
Best for: Pushing objects as they become available
Spring serializes each object independently
*/

@RestController
@RequestMapping("/api/stream")
class ObjectStreamingController {

    @GetMapping("/orders")
    public ResponseEntity&lt;ResponseBodyEmitter&gt; streamOrders() {
        ResponseBodyEmitter emitter = new ResponseBodyEmitter();

        // In a real app, use @Async or CompletableFuture
        executorService.execute(() -> {
            try {
                orderService.streamAllOrders().forEach(order -> {
                    try {
                        emitter.send(order);  // Serializes each object
                    } catch (IOException e) {
                        emitter.completeWithError(e);
                    }
                });
                emitter.complete();
            } catch (Exception e) {
                emitter.completeWithError(e);
            }
        });

        return ResponseEntity.ok()
            .contentType(MediaType.APPLICATION_JSON)
            .body(emitter);
    }

    // Custom timeout handling
    @GetMapping("/orders/timed")
    public ResponseBodyEmitter streamOrdersWithTimeout() {
        // Timeout after 30 seconds
        ResponseBodyEmitter emitter = new ResponseBodyEmitter(30_000L);

        emitter.onTimeout(() -> {
            System.out.println("Stream timed out");
            emitter.complete();
        });

        emitter.onError(throwable -> {
            System.err.println("Stream error: " + throwable.getMessage());
            emitter.completeWithError(throwable);
        });

        emitter.onCompletion(() -> {
            System.out.println("Stream completed");
        });

        asyncService.streamData(emitter);
        return emitter;
    }
}

// === 4. Server-Sent Events (SSE) ===
/*
Best for: Real-time updates, notifications, live dashboards
Client uses EventSource API (native in browsers)
Single-direction: server → client only
Auto-reconnects on connection loss
*/

@RestController
@RequestMapping("/api/sse")
class SseController {

    // Basic SSE endpoint → pushes events
    @GetMapping("/orders/updates")
    public SseEmitter streamOrderUpdates() {
        SseEmitter emitter = new SseEmitter(60_000L); // 60s timeout

        sseService.register(emitter);

        emitter.onCompletion(() -> sseService.unregister(emitter));
        emitter.onTimeout(() -> sseService.unregister(emitter));

        return emitter;
    }

    // SSE with event types
    @GetMapping("/orders/events")
    public SseEmitter streamOrderEvents() {
        SseEmitter emitter = new SseEmitter();

        // Send initialization event
        try {
            emitter.send(SseEmitter.event()
                .name("connected")
                .data("{\"message\": \"You are connected to order events\"}")
                .id("0"));
        } catch (IOException e) {
            emitter.completeWithError(e);
        }

        // Register for future events
        orderEventService.registerListener(event -> {
            try {
                emitter.send(SseEmitter.event()
                    .name(event.type())
                    .data(event.payload())
                    .id(String.valueOf(event.sequence()))
                    .reconnectTime(3000));  // Client reconnects after 3s
            } catch (IOException e) {
                emitter.completeWithError(e);
            }
        });

        return emitter;
    }
}

// === 5. SSE service with event broadcasting ===
@Service
class SseService {
    private final List&lt;SseEmitter&gt; emitters =
        new CopyOnWriteArrayList&lt;>();

    public void register(SseEmitter emitter) {
        emitters.add(emitter);
        System.out.println("SSE client connected. Total: " +
            emitters.size());
    }

    public void unregister(SseEmitter emitter) {
        emitters.remove(emitter);
        System.out.println("SSE client disconnected. Total: " +
            emitters.size());
    }

    // Broadcast event to all connected clients
    @Async
    public void broadcast(String eventName, String data) {
        List&lt;SseEmitter&gt; deadEmitters = new ArrayList&lt;>();

        emitters.forEach(emitter -> {
            try {
                emitter.send(SseEmitter.event()
                    .name(eventName)
                    .data(data));
            } catch (IOException e) {
                deadEmitters.add(emitter);
            }
        });

        emitters.removeAll(deadEmitters);
    }

    // Send specific event
    public void sendEvent(String clientId, String eventName,
                          String data) {
        // In a real app, map clientId to emitter
    }
}

// === 6. SSE client example (JavaScript) ===
/*
const eventSource = new EventSource('/api/sse/orders/events');

eventSource.addEventListener('connected', (event) => {
    console.log('Connected:', event.data);
});

eventSource.addEventListener('order.created', (event) => {
    const order = JSON.parse(event.data);
    console.log('New order:', order.id);
});

eventSource.addEventListener('order.updated', (event) => {
    const order = JSON.parse(event.data);
    console.log('Order updated:', order.id);
});

eventSource.addEventListener('error', (event) => {
    console.error('SSE error:', event);
    // EventSource auto-reconnects
});

// Clean up
// eventSource.close();
*/

// === 7. Streaming large result sets ===
@Service
class LargeDatasetStreamingService {

    // Paginated streaming using Spring Data cursor
    @Transactional(readOnly = true)
    public void processLargeDataset(Consumer&lt;Order&gt; processor) {
        try (Stream&lt;Order&gt; stream = orderRepository.streamAllBy()) {
            stream.forEach(processor);
        }
        // Stream is automatically closed
    }

    // Batch streaming with commit intervals
    @Transactional(readOnly = true)
    public void streamWithBatches(int batchSize) {
        Pageable pageable = PageRequest.of(0, batchSize);
        Page&lt;Order&gt; page;

        do {
            page = orderRepository.findAllBy(pageable);
            page.getContent().forEach(this::processOrder);

            // Clear Hibernate session to free memory
            entityManager.clear();

            pageable = pageable.next();
        } while (page.hasNext());
    }

    private void processOrder(Order order) {
        // Business logic
    }
}

// === 8. Chunked transfer encoding (low-level) ===
/*
Response with chunked encoding continues writing data
until the connection is closed. Client reads as chunks arrive.

HTTP/1.1 200 OK
Content-Type: text/csv
Transfer-Encoding: chunked

1a
id,customer,total
1e
1,Alice,250.00
22
2,Bob,150.00
0
*/

// === 9. Testing streaming ===
/*
@Test
void testStreamingResponse() throws Exception {
    MvcResult result = mockMvc.perform(get("/api/export/orders/csv"))
        .andExpect(status().isOk())
        .andExpect(header().string("Content-Disposition",
            containsString("attachment")))
        .andExpect(request().asyncStarted())
        .andReturn();

    // Wait for async result
    mockMvc.perform(asyncDispatch(result))
        .andExpect(content().contentType("text/csv"))
        .andExpect(content().string(containsString("id,customer")));
}

@Test
void testSseEmitter() throws Exception {
    MvcResult result = mockMvc.perform(get("/api/sse/orders/updates"))
        .andExpect(status().isOk())
        .andExpect(request().asyncStarted())
        .andReturn();

    // Send an SSE event
    sseService.broadcast("test", "{\"message\": \"hello\"}");

    mockMvc.perform(asyncDispatch(result))
        .andExpect(content().string(
            containsString("event:test")));
}
*/

// === 10. Streaming best practices ===
/*
1. Use StreamingResponseBody for large binary/text data
2. Use SseEmitter for real-time event notifications
3. Configure timeouts appropriately (SseEmitter constructor)
4. Handle client disconnects (IOException → complete emitter)
5. Use database cursors for streaming large datasets
6. Set fetch size hints (100-500) in JPA queries
7. Clear Hibernate session periodically to free memory
8. Monitor number of active SSE connections
9. Consider backpressure for fast producers
10. Use compression for text-based streams

// Error handling for SSE
@ExceptionHandler(IOException.class)
public void handleSseError(IOException e) {
    // Client disconnected → log and ignore
    log.warn("SSE client disconnected: {}", e.getMessage());
}
*/
```

Streaming is essential for large datasets and real-time updates. Use StreamingResponseBody for file/data exports (CSV, JSON arrays). Use SseEmitter (Server-Sent Events) for real-time pushes to browser clients. Always handle client disconnects gracefully. Use database cursors (Stream<Order>) for memory-efficient large data processing.
### Q20: How do you implement idempotency keys for safe retries?


**Answer:** Idempotency ensures that multiple identical requests produce the same result as a single request. Clients send a unique idempotency key (e.g., UUID) in the Idempotency-Key header. The server stores the key and result of the first request. Subsequent requests with the same key return the stored result without re-execution. Essential for payment APIs and any mutation endpoint.

```java
// === 1. Idempotency key flow ===
/*
Client:                         Server:
POST /api/payments              Check if idempotency key exists
Idempotency-Key: uuid-xxx        → No: Execute, store result, return 201
                                  → Yes: Return stored result, return 200

Implementation decisions:
- Store: Redis (recommended) or database
- TTL: 24 hours (configurable)
- Response includes stored status code
- Key is unique per client + endpoint
- Locking prevents concurrent duplicates
*/

// === 2. Idempotency annotation ===
import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@interface Idempotent {
    /** TTL in seconds for the idempotency record */
    int ttlSeconds() default 86400;  // 24 hours
    /** Header name for idempotency key */
    String headerName() default "Idempotency-Key";
}

// === 3. Idempotency service ===
@Service
class IdempotencyService {
    private final StringRedisTemplate redisTemplate;
    private static final String KEY_PREFIX = "idempotency:";

    public Optional&lt;IdempotencyRecord&gt; getRecord(String key) {
        String json = redisTemplate.opsForValue()
            .get(KEY_PREFIX + key);
        if (json == null) return Optional.empty();

        try {
            return Optional.of(objectMapper.readValue(
                json, IdempotencyRecord.class));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    public boolean tryLock(String key, Duration ttl) {
        // Atomic set-if-absent with TTL
        return Boolean.TRUE.equals(
            redisTemplate.opsForValue()
                .setIfAbsent(KEY_PREFIX + "lock:" + key,
                    "locked", ttl));
    }

    public void unlock(String key) {
        redisTemplate.delete(KEY_PREFIX + "lock:" + key);
    }

    public void saveRecord(IdempotencyRecord record, Duration ttl) {
        try {
            String json = objectMapper.writeValueAsString(record);
            redisTemplate.opsForValue()
                .set(KEY_PREFIX + record.key(), json, ttl);
        } catch (Exception e) {
            throw new RuntimeException(
                "Failed to save idempotency record", e);
        }
    }
}

record IdempotencyRecord(
    String key,
    int statusCode,
    String responseBody,
    Map&lt;String, String&gt; responseHeaders,
    Instant createdAt
) {}

// === 4. Idempotency interceptor ===
@Component
class IdempotencyInterceptor extends HandlerInterceptor {
    private final IdempotencyService idempotencyService;
    private static final Duration LOCK_TIMEOUT = Duration.ofSeconds(5);

    @Override
    public boolean preHandle(HttpServletRequest request,
            HttpServletResponse response, Object handler) throws IOException {

        // Only apply to POST, PUT, PATCH, DELETE
        String method = request.getMethod();
        if (!Set.of("POST", "PUT", "PATCH", "DELETE")
                .contains(method.toUpperCase())) {
            return true;
        }

        String idempotencyKey = request.getHeader("Idempotency-Key");
        if (idempotencyKey == null || idempotencyKey.isBlank()) {
            return true;  // Idempotency not enforced for non-critical ops
        }

        // Validate key format
        if (!isValidUuid(idempotencyKey)) {
            response.setStatus(400);
            response.getWriter().write(
                "{\"error\": \"Invalid Idempotency-Key format. Must be a UUID.\"}");
            return false;
        }

        // Check if result exists
        Optional&lt;IdempotencyRecord&gt; existing =
            idempotencyService.getRecord(idempotencyKey);
        if (existing.isPresent()) {
            IdempotencyRecord record = existing.get();
            response.setStatus(record.statusCode());
            response.setHeader("Idempotent-Replayed", "true");
            record.responseHeaders().forEach(
                (k, v) -> response.setHeader(k, v));
            response.getWriter().write(record.responseBody());
            return false;  // Skip controller → already processed
        }

        // Try to acquire lock for this key
        if (!idempotencyService.tryLock(idempotencyKey, LOCK_TIMEOUT)) {
            response.setStatus(409);
            response.getWriter().write(
                "{\"error\": \"Request with this idempotency key is " +
                "currently being processed\"}");
            return false;
        }

        // Store key in request attribute for response interception
        request.setAttribute("idempotencyKey", idempotencyKey);
        request.setAttribute("idempotencyTtl",
            extractTtl(request));

        return true;
    }

    private boolean isValidUuid(String key) {
        try {
            UUID.fromString(key);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

    private Duration extractTtl(HttpServletRequest request) {
        String ttlHeader = request.getHeader("Idempotency-TTL");
        if (ttlHeader != null) {
            try {
                return Duration.ofSeconds(Long.parseLong(ttlHeader));
            } catch (NumberFormatException ignored) {}
        }
        return Duration.ofSeconds(86400);  // Default 24h
    }
}

// === 5. Response wrapper filter ===
@Component
class IdempotencyResponseFilter extends OncePerRequestFilter {
    private final IdempotencyService idempotencyService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String key = (String) request.getAttribute("idempotencyKey");
        if (key == null) {
            filterChain.doFilter(request, response);
            return;
        }

        // Wrap response to capture body
        ContentCachingResponseWrapper responseWrapper =
            new ContentCachingResponseWrapper(response);

        try {
            filterChain.doFilter(request, responseWrapper);

            // Save idempotency record on success (2xx)
            if (responseWrapper.getStatus() >= 200 &&
                responseWrapper.getStatus() &lt; 300) {

                Duration ttl = (Duration)
                    request.getAttribute("idempotencyTtl");

                Map&lt;String, String&gt; headers = new HashMap&lt;>();
                headers.put("Content-Type",
                    responseWrapper.getContentType());

                IdempotencyRecord record = new IdempotencyRecord(
                    key,
                    responseWrapper.getStatus(),
                    new String(responseWrapper.getContentAsByteArray(),
                        StandardCharsets.UTF_8),
                    headers,
                    Instant.now()
                );

                idempotencyService.saveRecord(record, ttl);
            }
        } finally {
            // Ensure lock is released
            idempotencyService.unlock(key);
            responseWrapper.copyBodyToResponse();
        }
    }
}

// === 6. Idempotent endpoint example ===
@RestController
@RequestMapping("/api/payments")
class PaymentController {

    @Idempotent(ttlSeconds = 86400)
    @PostMapping
    public ResponseEntity&lt;PaymentResponse&gt; createPayment(
            @RequestBody @Valid CreatePaymentRequest request) {

        // Idempotency is handled by the interceptor/filter
        // Controller always executes business logic
        Payment payment = paymentService.process(request);

        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(new PaymentResponse(payment));
    }

    @Idempotent
    @PostMapping("/refund")
    public ResponseEntity&lt;RefundResponse&gt; refundPayment(
            @RequestBody @Valid RefundRequest request) {

        Refund refund = paymentService.refund(request);
        return ResponseEntity.ok(new RefundResponse(refund));
    }
}

// === 7. Idempotency with database (non-Redis) ===
@Entity
@Table(name = "idempotency_records",
       uniqueConstraints = @UniqueConstraint(columnNames = "idempotency_key"))
class IdempotencyRecordEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "idempotency_key", nullable = false, length = 64)
    private String idempotencyKey;

    @Column(name = "status_code", nullable = false)
    private int statusCode;

    @Column(name = "response_body", columnDefinition = "TEXT")
    private String responseBody;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;
}

interface IdempotencyRecordRepository
        extends JpaRepository&lt;IdempotencyRecordEntity, String&gt; {
    Optional&lt;IdempotencyRecordEntity&gt; findByIdempotencyKey(String key);
    void deleteByExpiresAtBefore(Instant now);

    @Modifying
    @Query("DELETE FROM IdempotencyRecordEntity e WHERE e.expiresAt &lt; :now")
    void deleteExpired(@Param("now") Instant now);
}

// === 8. Testing idempotency ===
/*
@Test
void testIdempotencyKey() throws Exception {
    String idempotencyKey = UUID.randomUUID().toString();

    // First request → should execute
    MvcResult first = mockMvc.perform(
            post("/api/payments")
                .header("Idempotency-Key", idempotencyKey)
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"amount\": 100, \"currency\": \"USD\"}"))
        .andExpect(status().isCreated())
        .andReturn();

    String firstBody = first.getResponse().getContentAsString();

    // Second request with same key → should return cached result
    MvcResult second = mockMvc.perform(
            post("/api/payments")
                .header("Idempotency-Key", idempotencyKey)
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"amount\": 100, \"currency\": \"USD\"}"))
        .andExpect(status().isOk())  // Note: 200, not 201
        .andExpect(header().string("Idempotent-Replayed", "true"))
        .andReturn();

    String secondBody = second.getResponse().getContentAsString();
    assertEquals(firstBody, secondBody);
}

@Test
void testConcurrentIdempotentRequests() throws Exception {
    String idempotencyKey = UUID.randomUUID().toString();

    // Send two identical requests concurrently
    CompletableFuture&lt;MvcResult&gt; req1 = CompletableFuture.supplyAsync(() -> {
        try {
            return mockMvc.perform(
                    post("/api/payments")
                        .header("Idempotency-Key", idempotencyKey)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"amount\": 100}"))
                .andReturn();
        } catch (Exception e) { throw new RuntimeException(e); }
    });

    CompletableFuture&lt;MvcResult&gt; req2 = CompletableFuture.supplyAsync(() -> {
        try {
            return mockMvc.perform(
                    post("/api/payments")
                        .header("Idempotency-Key", idempotencyKey)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"amount\": 100}"))
                .andReturn();
        } catch (Exception e) { throw new RuntimeException(e); }
    });

    MvcResult result1 = req1.get();
    MvcResult result2 = req2.get();

    // One succeeds (201), the other either replays (200) or gets conflict (409)
    assertTrue(result1.getResponse().getStatus() == 201 ||
               result1.getResponse().getStatus() == 200);
    assertTrue(result2.getResponse().getStatus() == 201 ||
               result2.getResponse().getStatus() == 200);
}

@Test
void testInvalidIdempotencyKey() throws Exception {
    mockMvc.perform(
            post("/api/payments")
                .header("Idempotency-Key", "not-a-uuid")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"amount\": 100}"))
        .andExpect(status().isBadRequest());
}
*/

// === 9. Best practices ===
/*
1. Always return the same response for the same key (including status code)
2. Use UUID v4 for idempotency keys (secure random)
3. Store records with TTL (24h default, configurable)
4. Use Redis for distributed idempotency (atomic ops)
5. Implement locking for concurrent requests with same key
6. Include Idempotent-Replayed header on replayed responses
7. Return 409 Conflict if same key is being processed concurrently
8. Validate idempotency key format (must be UUID)
9. Clean up expired records (scheduled job)
10. Log idempotency key usage for audit

// Idempotency key consumer contract:
// 1. Generate UUID before sending request
// 2. Retry with same key on network failure
// 3. Never reuse a key for a different request
// 4. Expect Idempotent-Replayed: true on retries
*/
```

Idempotency keys prevent duplicate processing on retries. Store results with TTL in Redis. Use atomic locks to handle concurrent requests with the same key. Return stored results on replay (including original status code). This is critical for payment processing, order creation, and any operation that shouldn't execute twice.
### Q21: What are REST API security best practices?


**Answer:** REST API security covers authentication, authorization, transport security, input validation, rate limiting, and auditing. Use HTTPS exclusively. Implement the principle of least privilege for every endpoint. Never expose internal details. Validate everything at the boundary. Log security-relevant events. Defense in depth → multiple layers of security.

```java
// === 1. Transport security (HTTPS) ===
/*
Always enforce HTTPS:
- Redirect HTTP → HTTPS
- HSTS header: Strict-Transport-Security: max-age=31536000; includeSubDomains
- Use TLS 1.2+ (disable TLS 1.0, 1.1, SSLv3)
- Strong cipher suites only
- Valid certificate from trusted CA

application.yml:
server:
  ssl:
    enabled: true
    key-store: classpath:keystore.p12
    key-store-password: ${SSL_KEY_PASSWORD}
    key-store-type: PKCS12
    key-alias: api
    enabled-protocols: TLSv1.2,TLSv1.3
    ciphers: TLS_AES_256_GCM_SHA384,TLS_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
  http2:
    enabled: true
*/

// === 2. HSTS and HTTPS redirect ===
@Configuration
class HstsConfig implements WebMvcConfigurer {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {
        http
            .requiresChannel(channel -> channel
                .anyRequest().requiresSecure())
            .headers(headers -> headers
                .httpStrictTransportSecurity(hsts -> hsts
                    .includeSubDomains(true)
                    .maxAgeInSeconds(31536000)
                    .preload(true))
                .xssProtection(xss -> xss
                    .block(true))
                .contentTypeOptions(Customizer.withDefaults())
                .frameOptions(frame -> frame.deny())
                .contentSecurityPolicy(csp -> csp
                    .policyDirectives("default-src 'self'")));
        return http.build();
    }
}

// === 3. Security headers ===
/*
All responses should include:
X-Content-Type-Options: nosniff          (prevents MIME sniffing)
X-Frame-Options: DENY                    (prevents clickjacking)
Strict-Transport-Security: max-age=31536000; includeSubDomains
Cache-Control: no-store                  (prevents sensitive data caching for auth)
Content-Security-Policy: default-src 'self'
X-XSS-Protection: 1; mode=block

For public/cacheable endpoints:
Cache-Control: public, max-age=300
Vary: Accept-Encoding, Accept
*/

// === 4. Authentication: JWT validation with Spring Security ===
// (Full implementation in Q11)

// === 5. Authorization: Method-level security ===
import org.springframework.security.access.prepost.*;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
class AdminController {

    @GetMapping("/users")
    public List&lt;User&gt; listUsers() {
        return userService.findAll();
    }

    @PreAuthorize("hasPermission(#userId, 'USER', 'WRITE')")
    @PutMapping("/users/{userId}")
    public User updateUser(@PathVariable Long userId,
                           @RequestBody UpdateUserRequest request) {
        return userService.update(userId, request);
    }

    @PreAuthorize("#username == authentication.name")
    @GetMapping("/users/{username}/profile")
    public UserProfile getOwnProfile(@PathVariable String username) {
        return userService.findByUsername(username);
    }

    // Complex authorization expression
    @PreAuthorize("hasRole('ADMIN') or " +
        "(hasRole('MANAGER') and #request.department == " +
        "authentication.principal.department)")
    @PostMapping("/reports")
    public Report createReport(@RequestBody ReportRequest request) {
        return reportService.create(request);
    }
}

// === 6. Input validation and sanitization ===
@Component
class InputSanitizer {

    public String sanitize(String input) {
        if (input == null) return null;
        // Remove potential XSS payloads
        return input
            .replaceAll("<script[^>]*>.*?</script>", "")
            .replaceAll("on\\w+\\s*=\\s*\"[^\"]*\"", "")
            .replaceAll("javascript:", "")
            .replaceAll("<[^>]*>", "");  // Strip HTML tags
    }

    // Encode for safe storage/output
    public String encodeForOutput(String input) {
        return StringEscapeUtils.escapeHtml4(input);
    }
}

// === 7. Rate limiting (implemented in Q12) ===
/*
Every mutation endpoint must be rate-limited.
Login endpoints: 5 req/min per IP
General API: 60 req/min per API key
Search: 10 req/min per user
*/

// === 8. Audit logging ===
@Aspect
@Component
class AuditLogger {
    private static final Logger log = LoggerFactory.getLogger("AUDIT");

    @Around("@annotation(auditable)")
    public Object logAudit(ProceedingJoinPoint pjp,
                           Auditable auditable) throws Throwable {
        String method = pjp.getSignature().toShortString();
        String user = SecurityContextHolder.getContext()
            .getAuthentication().getName();
        String args = Arrays.toString(pjp.getArgs());

        log.info("AUDIT: User={} Action={} Args={}",
            user, method, args);

        long start = System.currentTimeMillis();
        try {
            Object result = pjp.proceed();
            long duration = System.currentTimeMillis() - start;
            log.info("AUDIT: User={} Action={} Status=SUCCESS Duration={}ms",
                user, method, duration);
            return result;
        } catch (Exception e) {
            long duration = System.currentTimeMillis() - start;
            log.warn("AUDIT: User={} Action={} Status=FAILURE " +
                "Duration={}ms Error={}",
                user, method, duration, e.getMessage());
            throw e;
        }
    }
}

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@interface Auditable {}

// === 9. SQL injection prevention ===
/*
1. Always use parameterized queries (never concatenation)
   âœ… jdbcTemplate.query("SELECT * FROM users WHERE id = ?", id)
   âŒ jdbcTemplate.query("SELECT * FROM users WHERE id = " + id)

2. Use JPA/Spring Data → built-in parameter binding
   @Query("SELECT u FROM User u WHERE u.email = :email")
   User findByEmail(@Param("email") String email)

3. Validate sort parameters (prevent injection via sort)
   @GetMapping("/users")
   public List&lt;User&gt; getUsers(
           @SortDefault(sort = "id", direction = ASC) Sort sort) {
       // Spring validates sort property names
       return repository.findAll(sort);
   }
*/

// === 10. Input size limits ===
@Configuration
class InputSizeConfig implements WebMvcConfigurer {

    @Override
    public void configureAsyncSupport(AsyncSupportConfigurer configurer) {
        configurer.setDefaultTimeout(30000);
    }

    // application.yml
    /*
    spring:
      servlet:
        multipart:
          max-file-size: 10MB
          max-request-size: 20MB
      jackson:
        max-string-length: 10000  # Prevent large string DoS
        max-nesting-depth: 20
    */
}

// === 11. CORS (implemented in Q9) ===
/*
Only allow specific origins. Never use CORS for internal APIs.
*/

// === 12. Security checklist ===
/*
Transport:
â˜ HTTPS everywhere (HSTS preload)
â˜ TLS 1.2+ only
â˜ Strong cipher suites
â˜ HTTP/2 enabled

Authentication:
â˜ JWT with short expiry (15-60 min)
â˜ Refresh tokens for long sessions
â˜ Password hashing (bcrypt/scrypt)
â˜ MFA for admin endpoints

Authorization:
â˜ Method-level @PreAuthorize
â˜ Principle of least privilege
â˜ IDOR prevention (verify ownership)
â˜ Role hierarchy

Input:
â˜ Bean validation on all DTOs
â˜ SQL injection prevention (parameterized queries)
â˜ XSS sanitization
â˜ Size limits on all inputs

Output:
â˜ No stack traces in production
â˜ No internal IDs in responses
â˜ Consistent error format
â˜ Security headers on all responses

Operations:
â˜ Rate limiting on all endpoints
â˜ Audit logging for mutations
â˜ IP allowlisting for admin
â˜ Request logging (method, path, user, duration, status)
â˜ Secret rotation (API keys, JWT secrets, DB passwords)
â˜ Dependency vulnerability scanning

Infrastructure:
â˜ WAF (Web Application Firewall)
â˜ DDoS protection
â˜ API Gateway for unified security
â˜ Container security scanning
â˜ Secrets management (Vault, AWS Secrets Manager)
â˜ Regular penetration testing
*/

// === 13. Security testing ===
/*
@Test
void testNoSensitiveDataInErrors() throws Exception {
    mockMvc.perform(get("/api/orders/0"))
        .andExpect(status().isNotFound())
        .andExpect(jsonPath("$.detail")
            .value(not(containsString("Stack trace"))))
        .andExpect(jsonPath("$.detail")
            .value(not(containsString("SQL"))));
}

@Test
void testSecurityHeaders() throws Exception {
    mockMvc.perform(get("/api/orders/1"))
        .andExpect(header().string("X-Content-Type-Options", "nosniff"))
        .andExpect(header().string("X-Frame-Options", "DENY"))
        .andExpect(header().string("Strict-Transport-Security",
            containsString("max-age=31536000")));
}

@Test
void testSqlInjectionPrevented() throws Exception {
    mockMvc.perform(get("/api/users/search")
            .param("query", "'; DROP TABLE users; --"))
        .andExpect(status().isOk());  // Should not throw error
}

@Test
void testXssPrevented() throws Exception {
    mockMvc.perform(post("/api/orders")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"customerName\": \"<script>alert('xss')&lt;/script&gt;\"}"))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.customerName")
            .value(not(containsString("<script>"))));
}
*/

// === 14. Production security configuration ===
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
class ProductionSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // Transport security
            .requiresChannel(channel ->
                channel.anyRequest().requiresSecure())

            // Authentication
            .sessionManagement(sm ->
                sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .oauth2ResourceServer(oauth2 ->
                oauth2.jwt(Customizer.withDefaults()))

            // Authorization
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/internal/**")
                    .hasAuthority("SCOPE_internal")
                .anyRequest().authenticated())

            // Security headers
            .headers(headers -> headers
                .httpStrictTransportSecurity(hsts ->
                    hsts.includeSubDomains(true).maxAgeInSeconds(31536000))
                .xssProtection(xss -> xss.block(true))
                .contentTypeOptions(Customizer.withDefaults())
                .frameOptions(frame -> frame.deny()))

            // CSRF disabled for REST (stateless)
            .csrf(csrf -> csrf.disable())

            // Rate limiting via custom filter
            .addFilterBefore(new RateLimitFilter(),
                BasicAuthenticationFilter.class)

            // CORS
            .cors(cors -> cors.configurationSource(corsConfig()));

        return http.build();
    }

    private CorsConfigurationSource corsConfig() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("https://app.example.com"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        config.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);
        return source;
    }
}
```

Security is layered: HTTPS + HSTS for transport, JWT/OAuth2 for auth, @PreAuthorize for authorization, bean validation for input, rate limiting for abuse prevention, and audit logging for accountability. Every layer is necessary → one missed layer becomes the weakest link. Test security headers, injection vectors, and error information leakage.
### Q22: How do you handle async requests in REST (DeferredResult / Callable)?


**Answer:** Spring Boot provides three async options: Callable (offload to thread pool), DeferredResult (response from external thread), and WebAsyncTask (timeout handling). These free up the servlet container thread while processing continues, improving scalability. Use DeferredResult when the response comes from a queue or event. Use Callable for simple offloading of blocking operations.

```java
// === 1. Callable → simple thread offloading ===
/*
Request arrives → Servlet thread creates Callable → Thread pool runs → Servlet thread returns to pool → Callable result is written to response
*/

@RestController
@RequestMapping("/api/async")
class AsyncCallableController {
    private final OrderService orderService;

    @GetMapping("/orders/{id}")
    public Callable&lt;Order&gt; getOrderAsync(@PathVariable Long id) {
        // Servlet thread returns immediately
        // Framework runs Callable in async thread pool
        return () -> {
            Thread.sleep(100);  // Simulate slow operation
            return orderService.findById(id);
        };
    }

    // Multiple async calls in parallel
    @GetMapping("/dashboard")
    public Callable&lt;DashboardDto&gt; getDashboard() {
        return () -> {
            CompletableFuture&lt;List<Order&gt;> ordersFuture =
                CompletableFuture.supplyAsync(
                    () -> orderService.findAll(0, 10));
            CompletableFuture&lt;List<Customer&gt;> customersFuture =
                CompletableFuture.supplyAsync(
                    () -> customerService.findAll(0, 10));
            CompletableFuture&lt;Stats&gt; statsFuture =
                CompletableFuture.supplyAsync(
                    () -> statsService.getSummary());

            // Wait for all three
            CompletableFuture.allOf(
                ordersFuture, customersFuture, statsFuture).join();

            return new DashboardDto(
                ordersFuture.get(),
                customersFuture.get(),
                statsFuture.get());
        };
    }
}

// === 2. DeferredResult → response from external source ===
/*
Request arrives → Servlet thread creates DeferredResult and returns → DeferredResult is set by another thread → Response is written
Useful for: message queue listeners, long polling, webSocket events
*/

@RestController
@RequestMapping("/api/deferred")
class DeferredResultController {

    // In-memory queue of pending requests
    private final Queue&lt;DeferredResult<Order&gt;> pendingRequests =
        new ConcurrentLinkedQueue&lt;>();

    @GetMapping("/orders/wait")
    public DeferredResult&lt;Order&gt; waitForNextOrder() {
        // Default timeout: 30 seconds
        DeferredResult&lt;Order&gt; result = new DeferredResult&lt;>(30_000L);

        // Timeout handler
        result.onTimeout(() -> {
            pendingRequests.remove(result);
            result.setErrorResult(
                ResponseEntity.status(HttpStatus.REQUEST_TIMEOUT)
                    .body("No new orders within 30 seconds"));
        });

        // Error handler
        result.onError(throwable -> {
            pendingRequests.remove(result);
            result.setErrorResult(
                ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: " + throwable.getMessage()));
        });

        // Completion handler
        result.onCompletion(() -> {
            pendingRequests.remove(result);
            System.out.println("Request completed. Queue size: " +
                pendingRequests.size());
        });

        pendingRequests.add(result);
        return result;
    }

    // Called when new order is created
    public void notifyNewOrder(Order order) {
        DeferredResult&lt;Order&gt; result = pendingRequests.poll();
        if (result != null) {
            result.setResult(order);  // Triggers response
        }
    }

    // Alternative: DeferredResult with error handling
    @GetMapping("/orders/{id}/status-stream")
    public DeferredResult&lt;OrderStatus&gt; streamStatus(@PathVariable Long id) {
        DeferredResult&lt;OrderStatus&gt; result = new DeferredResult&lt;>(60_000L);

        orderStatusService.registerCallback(id, newStatus -> {
            if (!result.isSetOrExpired()) {
                result.setResult(newStatus);
            }
        });

        result.onTimeout(() -> {
            orderStatusService.unregisterCallback(id);
        });

        return result;
    }
}

// === 3. WebAsyncTask → with timeout/callback management ===
@GetMapping("/orders/export")
public WebAsyncTask&lt;String&gt; exportOrders() {
    WebAsyncTask&lt;String&gt; task = new WebAsyncTask&lt;>(
        30_000L,  // Timeout
        () -> {
            // Long-running export
            return orderExportService.generateReport();
        });

    task.onTimeout(() -> {
        log.warn("Export timed out");
        return "Export timed out";
    });

    task.onError(() -> {
        log.error("Export failed");
        return "Export failed";
    });

    return task;
}

// === 4. Async controller with CompletableFuture ===
@RestController
@RequestMapping("/api/future")
class FutureController {
    private final OrderService orderService;
    private final CustomerService customerService;
    private final InventoryService inventoryService;

    @GetMapping("/order-summary/{id}")
    public CompletableFuture&lt;OrderSummary&gt; getOrderSummary(
            @PathVariable Long id) {

        CompletableFuture&lt;Order&gt; orderFuture =
            CompletableFuture.supplyAsync(
                () -> orderService.findById(id));
        CompletableFuture&lt;Customer&gt; customerFuture =
            orderFuture.thenCompose(order ->
                CompletableFuture.supplyAsync(
                    () -> customerService.findById(
                        order.getCustomerId())));
        CompletableFuture&lt;List<InventoryStatus&gt;> inventoryFuture =
            orderFuture.thenCompose(order ->
                CompletableFuture.supplyAsync(
                    () -> inventoryService.checkAvailability(
                        order.getItemIds())));

        return CompletableFuture
            .allOf(customerFuture, inventoryFuture)
            .thenApply(v -> new OrderSummary(
                orderFuture.join(),
                customerFuture.join(),
                inventoryFuture.join()));
    }

    // With exception handling
    @GetMapping("/user/{id}/recommendations")
    public CompletableFuture&lt;ResponseEntity<?&gt;> getRecommendations(
            @PathVariable Long id) {

        return CompletableFuture
            .supplyAsync(() -> recommendationService
                .generate(id))
            .thenApply(ResponseEntity::ok)
            .exceptionally(ex -> {
                log.error("Failed to generate recommendations", ex);
                return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ProblemDetail.forStatusAndDetail(
                        HttpStatus.INTERNAL_SERVER_ERROR,
                        "Could not generate recommendations"));
            });
    }
}

// === 5. Async configuration ===
@Configuration
@EnableAsync
class AsyncConfig implements AsyncConfigurer {

    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);
        executor.setMaxPoolSize(50);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("async-");
        executor.setRejectedExecutionHandler(
            new ThreadPoolExecutor.CallerRunsPolicy());
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(30);
        executor.initialize();
        return executor;
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return (ex, method, params) ->
            log.error("Async error in {}: {}",
                method.getName(), ex.getMessage(), ex);
    }
}

// === 6. MVC async configuration ===
@Configuration
class MvcAsyncConfig implements WebMvcConfigurer {

    @Override
    public void configureAsyncSupport(AsyncSupportConfigurer configurer) {
        configurer
            .setDefaultTimeout(30_000L)  // 30 seconds default timeout
            .setTaskExecutor(mvcAsyncExecutor())
            .registerCallableInterceptors(
                new CallableProcessingInterceptor() {
                    @Override
                    public &lt;T> void beforeConcurrentHandling(
                            NativeWebRequest request,
                            Callable&lt;T> task) {
                        log.debug("Starting async request: {}",
                            request.getRequestURI());
                    }

                    @Override
                    public &lt;T> void afterConcurrentHandling(
                            NativeWebRequest request,
                            Callable&lt;T> task) {
                        log.debug("Async request completed: {}",
                            request.getRequestURI());
                    }
                });
    }

    @Bean
    public ThreadPoolTaskExecutor mvcAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(25);
        executor.setQueueCapacity(50);
        executor.setThreadNamePrefix("mvc-async-");
        executor.initialize();
        return executor;
    }
}

// === 7. Testing async endpoints ===
/*
@Test
void testCallableAsync() throws Exception {
    MvcResult result = mockMvc.perform(
            get("/api/async/orders/1"))
        .andExpect(request().asyncStarted())
        .andExpect(request().asyncResult(
            hasProperty("id", is(1L))))
        .andReturn();

    mockMvc.perform(asyncDispatch(result))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1));
}

@Test
void testDeferredResultWithTimeout() throws Exception {
    MvcResult result = mockMvc.perform(
            get("/api/deferred/orders/wait"))
        .andExpect(request().asyncStarted())
        .andReturn();

    // Simulate new order arriving after 100ms
    Thread.sleep(100);
    Order newOrder = new Order();
    newOrder.setId(999L);
    deferredResultController.notifyNewOrder(newOrder);

    mockMvc.perform(asyncDispatch(result))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(999));
}

@Test
void testDeferredResultTimeout() throws Exception {
    MvcResult result = mockMvc.perform(
            get("/api/deferred/orders/wait"))
        .andExpect(request().asyncStarted())
        .andReturn();

    // Wait for timeout (configured as 30s, but we can mock)
    // In real test, use shorter timeout constructor
    mockMvc.perform(asyncDispatch(result))
        .andExpect(status().isRequestTimeout());
}
*/

// === 8. When to use each ===
/*
Callable:
- Simple offloading of blocking operations
- Response comes from same request processing
- No need for external notification

DeferredResult:
- Response from message queue, event, or external system
- Long polling (wait for events)
- Manual timeout and error control
- Multiple requests waiting for single event

WebAsyncTask:
- Need timeout handling with fallback
- Need both onTimeout and onError callbacks
- Legacy migration support

CompletableFuture:
- Complex orchestration of multiple async calls
- Need to combine/chain async operations
- Exception handling per stage

// Performance considerations:
// Without async: 1 request = 1 servlet thread for entire duration
// With async:    Servlet thread released during wait
//               More concurrent requests with same thread pool

// Default MVC async thread pool (SimpleAsyncTaskExecutor):
// - Creates new thread per task (no pooling)
// - Always configure a proper ThreadPoolTaskExecutor

// Tomcat configuration for async:
server:
  tomcat:
    max-threads: 200  # Servlet container threads
    max-connections: 10000
    accept-count: 100
  servlet:
    async:
      timeout: 30000
*/
```

Async request processing frees servlet container threads during long operations. Use Callable for simple offloading, DeferredResult for event-driven responses (queues, long polling), and CompletableFuture for complex orchestration. Always configure a proper thread pool → the default SimpleAsyncTaskExecutor creates unbounded threads. Test async endpoints with asyncDispatch().
### Q23: How do you test REST APIs?


**Answer:** REST API testing spans three levels: unit tests (controller logic), integration tests (full request/response cycle with MockMvc), and contract tests (API compatibility). Use MockMvc for web layer tests, TestRestTemplate for full integration tests, and REST Assured or WebTestClient for advanced scenarios. Always test success paths, validation errors, auth failures, edge cases, and error responses.

```java
// === 1. MockMvc → controller layer tests ===
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.BDDMockito.*;

@WebMvcTest(OrderController.class)
class OrderControllerTest {
    @Autowired private MockMvc mockMvc;
    @MockBean private OrderService orderService;
    @MockBean private OrderRepository orderRepository;

    @Test
    void getOrder_ShouldReturnOrder() throws Exception {
        Order order = new Order(1L, "Alice", 250.00, "PENDING");
        given(orderService.findById(1L)).willReturn(order);

        mockMvc.perform(get("/api/orders/{id}", 1L)
                .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.customerName").value("Alice"))
            .andExpect(jsonPath("$.total").value(250.00))
            .andExpect(jsonPath("$.status").value("PENDING"));
    }

    @Test
    void getOrder_NotFound_ShouldReturn404() throws Exception {
        given(orderService.findById(anyLong()))
            .willThrow(new ResourceNotFoundException("Order", "999"));

        mockMvc.perform(get("/api/orders/{id}", 999L)
                .accept(MediaType.APPLICATION_PROBLEM_JSON))
            .andExpect(status().isNotFound())
            .andExpect(jsonPath("$.title").value("Order Not Found"))
            .andExpect(jsonPath("$.status").value(404));
    }

    @Test
    void createOrder_ShouldReturn201() throws Exception {
        Order created = new Order(1L, "Alice", 250.00, "PENDING");
        given(orderService.create(any(CreateOrderRequest.class)))
            .willReturn(created);

        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {
                        "customerId": 1,
                        "customerName": "Alice",
                        "total": 250.00,
                        "items": [{"productId": 10, "quantity": 2}]
                    }
                    """))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").exists())
            .andExpect(jsonPath("$.customerName").value("Alice"));
    }

    @Test
    void createOrder_ValidationError_ShouldReturn400() throws Exception {
        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {
                        "customerId": null,
                        "customerName": "",
                        "total": -100
                    }
                    """))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.title").value("Validation Failed"))
            .andExpect(jsonPath("$.errors.customerId").exists())
            .andExpect(jsonPath("$.errors.customerName").exists())
            .andExpect(jsonPath("$.errors.total").exists());
    }

    @Test
    void deleteOrder_ShouldReturn204() throws Exception {
        willDoNothing().given(orderService).delete(1L);

        mockMvc.perform(delete("/api/orders/{id}", 1L))
            .andExpect(status().isNoContent());
    }

    @Test
    void getOrders_WithPagination_ShouldReturnPage() throws Exception {
        List&lt;Order&gt; orders = List.of(
            new Order(1L, "Alice", 100.00, "PENDING"),
            new Order(2L, "Bob", 200.00, "CONFIRMED"));
        given(orderService.findAll(anyInt(), anyInt()))
            .willReturn(orders);

        mockMvc.perform(get("/api/orders")
                .param("page", "0")
                .param("size", "20"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(2)))
            .andExpect(jsonPath("$[0].id").value(1))
            .andExpect(jsonPath("$[1].id").value(2));
    }
}

// === 2. @SpringBootTest → full integration tests ===
/*
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class OrderIntegrationTest {
    @Autowired private TestRestTemplate restTemplate;
    @Autowired private OrderRepository orderRepository;

    @BeforeEach
    void setUp() {
        orderRepository.deleteAll();
        orderRepository.save(new Order(null, "Alice", 250.00, "PENDING"));
    }

    @Test
    void testFullCrudCycle() {
        // Create
        CreateOrderRequest request = new CreateOrderRequest(
            1L, "Bob", 150.00,
            List.of(new OrderItemRequest(10L, 3)));

        ResponseEntity&lt;Order&gt; createResponse = restTemplate.postForEntity(
            "/api/orders", request, Order.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        Long orderId = createResponse.getBody().getId();

        // Read
        ResponseEntity&lt;Order&gt; getResponse = restTemplate.getForEntity(
            "/api/orders/" + orderId, Order.class);
        assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(getResponse.getBody().getCustomerName()).isEqualTo("Bob");

        // Update
        UpdateOrderRequest update = new UpdateOrderRequest("Bob", "SHIPPED");
        restTemplate.put("/api/orders/" + orderId, update);

        // Verify update
        ResponseEntity&lt;Order&gt; verifyResponse = restTemplate.getForEntity(
            "/api/orders/" + orderId, Order.class);
        assertThat(verifyResponse.getBody().getStatus()).isEqualTo("SHIPPED");

        // Delete
        restTemplate.delete("/api/orders/" + orderId);

        // Verify delete
        ResponseEntity&lt;Order&gt; afterDelete = restTemplate.getForEntity(
            "/api/orders/" + orderId, Order.class);
        assertThat(afterDelete.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    void testAuthentication() {
        // Without auth → 401
        ResponseEntity&lt;String&gt; response = restTemplate.getForEntity(
            "/api/admin/users", String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);

        // With valid token → 200
        String token = obtainAccessToken("admin", "admin");
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);

        ResponseEntity&lt;List&gt; authResponse = restTemplate.exchange(
            "/api/admin/users", HttpMethod.GET,
            new HttpEntity&lt;>(headers), List.class);
        assertThat(authResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void testRateLimiting() {
        String token = obtainAccessToken("user", "password");
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity&lt;?> entity = new HttpEntity<&gt;(headers);

        // Send requests until rate limited
        IntStream.range(0, 11).forEach(i -> {
            ResponseEntity&lt;?> response = restTemplate.exchange(
                "/api/orders", HttpMethod.GET, entity, String.class);
            if (i &lt; 10) {
                assertThat(response.getStatusCode())
                    .isEqualTo(HttpStatus.OK);
            } else {
                assertThat(response.getStatusCode())
                    .isEqualTo(HttpStatus.TOO_MANY_REQUESTS);
            }
        });
    }

    private String obtainAccessToken(String username, String password) {
        AuthRequest request = new AuthRequest(username, password);
        ResponseEntity&lt;AuthResponse&gt; response = restTemplate.postForEntity(
            "/api/auth/login", request, AuthResponse.class);
        return response.getBody().token();
    }
}
*/

// === 3. @DataJpaTest → repository layer tests ===
/*
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
class OrderRepositoryTest {
    @Autowired private OrderRepository orderRepository;
    @Autowired private TestEntityManager entityManager;

    @Test
    void testFindByCustomerName() {
        entityManager.persist(new Order(null, "Alice", 100.00, "PENDING"));
        entityManager.persist(new Order(null, "Alice", 200.00, "SHIPPED"));
        entityManager.persist(new Order(null, "Bob", 150.00, "PENDING"));

        List&lt;Order&gt; aliceOrders = orderRepository
            .findByCustomerName("Alice");
        assertThat(aliceOrders).hasSize(2);
    }

    @Test
    void testPagination() {
        IntStream.range(0, 25).forEach(i ->
            entityManager.persist(
                new Order(null, "User" + i, 100.0, "PENDING")));

        Page&lt;Order&gt; page = orderRepository.findAll(
            PageRequest.of(0, 10));
        assertThat(page.getContent()).hasSize(10);
        assertThat(page.getTotalPages()).isEqualTo(3);
    }
}
*/

// === 4. REST Assured → expressive API testing ===
/*
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class OrderRestAssuredTest {
    @LocalServerPort private int port;

    @BeforeEach
    void setUp() {
        baseURI = "http://localhost";
        port = this.port;
        basePath = "/api";
    }

    @Test
    void testGetOrder() {
        given()
            .pathParam("id", 1)
        .when()
            .get("/orders/{id}")
        .then()
            .statusCode(200)
            .body("id", equalTo(1))
            .body("customerName", not(emptyString()))
            .body("status", anyOf(
                is("PENDING"), is("SHIPPED"), is("DELIVERED")));
    }

    @Test
    void testCreateOrder() {
        String requestBody = """
            {
                "customerId": 1,
                "customerName": "Alice",
                "total": 250.00,
                "items": [{"productId": 10, "quantity": 2}]
            }
            """;

        given()
            .contentType("application/json")
            .body(requestBody)
        .when()
            .post("/orders")
        .then()
            .statusCode(201)
            .body("id", notNullValue())
            .body("status", equalTo("PENDING"))
            .header("Location", notNullValue());
    }

    @Test
    void testValidationError() {
        given()
            .contentType("application/json")
            .body("{}")
        .when()
            .post("/orders")
        .then()
            .statusCode(400)
            .body("title", equalTo("Validation Failed"))
            .body("errors", hasKey("customerName"))
            .body("errors", hasKey("customerId"));
    }
}
*/

// === 5. Contract tests with Spring Cloud Contract ===
/*
// contracts/shouldCreateOrder.groovy
Contract.make {
    description "should create a valid order"
    request {
        method POST()
        url "/api/orders"
        headers {
            contentType applicationJson()
        }
        body """
        {
            "customerId": 1,
            "customerName": "Alice",
            "total": 250.00
        }
        """
    }
    response {
        status CREATED()
        headers {
            contentType applicationJson()
        }
        body([
            id: anyNumber(),
            customerName: "Alice",
            total: 250.00,
            status: "PENDING"
        ])
    }
}
*/

// === 6. Parameterized tests ===
@ParameterizedTest
@CsvSource({
    "1, 200, OK",
    "99999, 404, Not Found",
    "-1, 400, Bad Request"
})
void testGetOrderStatusCodes(Long id, int expectedStatus,
        String expectedReason) throws Exception {
    mockMvc.perform(get("/api/orders/{id}", id))
        .andExpect(status().is(expectedStatus));
}

// === 7. Testing security scenarios ===
@Test
void testAuthorizationScenarios() throws Exception {
    // Unauthenticated → 401
    mockMvc.perform(get("/api/orders"))
        .andExpect(status().isUnauthorized());

    // USER role → allowed for read
    String userToken = createToken("user", "ROLE_USER");
    mockMvc.perform(get("/api/orders")
            .header("Authorization", "Bearer " + userToken))
        .andExpect(status().isOk());

    // USER role → forbidden for admin
    mockMvc.perform(get("/api/admin/users")
            .header("Authorization", "Bearer " + userToken))
        .andExpect(status().isForbidden());

    // ADMIN role → allowed
    String adminToken = createToken("admin", "ROLE_ADMIN");
    mockMvc.perform(get("/api/admin/users")
            .header("Authorization", "Bearer " + adminToken))
        .andExpect(status().isOk());

    // Expired token → 401
    String expiredToken = createExpiredToken("user");
    mockMvc.perform(get("/api/orders")
            .header("Authorization", "Bearer " + expiredToken))
        .andExpect(status().isUnauthorized());
}

// === 8. Testing error scenarios ===
@Test
void testErrorScenarios() throws Exception {
    // Invalid JSON → 400
    mockMvc.perform(post("/api/orders")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{invalid json"))
        .andExpect(status().isBadRequest());

    // Wrong content type → 415
    mockMvc.perform(post("/api/orders")
            .contentType(MediaType.TEXT_PLAIN)
            .content("hello"))
        .andExpect(status().isUnsupportedMediaType());

    // Missing body → 400
    mockMvc.perform(post("/api/orders")
            .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isBadRequest());

    // Method not allowed → 405
    mockMvc.perform(patch("/api/orders"))
        .andExpect(status().isMethodNotAllowed());

    // SQL injection attempt → still works safely
    mockMvc.perform(get("/api/orders/search")
            .param("query", "'; DROP TABLE orders; --"))
        .andExpect(status().isOk());
}

// === 9. Performance/load tests with simulated data ===
@Test
void testBulkCreate() {
    List&lt;CreateOrderRequest&gt; requests = IntStream.range(0, 100)
        .mapToObj(i -> new CreateOrderRequest(
            (long) (i % 10),
            "User" + i,
            100.0 + i,
            List.of(new OrderItemRequest((long) (i % 20), 1))))
        .collect(Collectors.toList());

    StopWatch watch = new StopWatch();
    watch.start("bulk-create");

    List&lt;ResponseEntity<Order&gt;> responses = requests.stream()
        .map(req -> restTemplate.postForEntity(
            "/api/orders", req, Order.class))
        .collect(Collectors.toList());

    watch.stop();
    System.out.println("Created 100 orders in " +
        watch.getTotalTimeMillis() + "ms");

    assertThat(responses).allMatch(
        r -> r.getStatusCode() == HttpStatus.CREATED);
}

// === 10. Test summary ===
/*
Testing Layer        Tool                What it tests
─────────────────────────────────────────────────────────
Unit (Controller)   MockMvc             Logic, status codes, response body,
                                        validation, error handling
Unit (Service)      JUnit + Mockito     Business logic, exception handling
Integration         TestRestTemplate    Full request/response cycle, DB,
                                        auth, middleware
Repository          @DataJpaTest        Queries, pagination, constraints
API Contract        Spring Cloud        Provider/consumer compatibility
                    Contract
Load Test           JMeter, Gatling     Performance under load
Security            OWASP ZAP           Injection, XSS, auth bypass

Test every endpoint for:
- 200/201 success
- 400 validation errors
- 401/403 auth/authorization failures
- 404 resource not found
- 405 method not allowed
- 409 conflict
- 415 unsupported media type
- 429 rate limit
- 500 server errors

// Coverage target:
// - Controller: 100% of endpoints tested
// - Service: 80%+ business logic coverage
// - Repository: All custom queries tested
// - Integration: All critical user journeys
*/
```

Test your REST API at every level. MockMvc for fast controller tests with validation and error scenarios. TestRestTemplate for full integration tests that exercise the entire stack. Always test security (auth, authorization, IDOR). Include performance tests for critical endpoints. Use parameterized tests for status codes and edge cases. Every endpoint needs a success test AND failure tests.
### Q24: What are REST conditional requests and how do they work?


**Answer:** Conditional requests use HTTP headers to make the server check a condition before executing the request. They prevent unnecessary data transfer (GET) and lost updates (PUT/PATCH/DELETE). Two groups: Last-Modified/If-Modified-Since (time-based) and ETag/If-None-Match-If-Match (content-based). Essential for caching and optimistic concurrency.

```java
// === 1. Conditional GET → 304 Not Modified ===
/*
Client has cached version. Asks: "Has this changed?"

Request:
GET /api/orders/1
If-None-Match: "abc123"    (ETag from previous response)
If-Modified-Since: Mon, 15 Jan 2024 10:30:00 GMT

Response (unchanged):
304 Not Modified
(No body → client uses cached version)

Response (changed):
200 OK
ETag: "def456"
Body: { new data }
*/

// === 2. Conditional mutation → 412 Precondition Failed ===
/*
Client wants to update but: "Has someone else changed it first?"

Request:
PUT /api/orders/1
If-Match: "abc123"    (ETag from previous GET)
Body: { updated data }

Response (conflict):
412 Precondition Failed
Body: { current state with new ETag }

Response (success):
200 OK
ETag: "def456"
Body: { updated data }
*/

// === 3. Full implementation ===
@RestController
@RequestMapping("/api/orders")
class ConditionalRequestController {
    private final OrderService orderService;
    private final DeepEtagService etagService;

    // Conditional GET
    @GetMapping("/{id}")
    public ResponseEntity&lt;Order&gt; getOrder(
            @PathVariable Long id,
            @RequestHeader("If-None-Match") Optional&lt;String&gt; ifNoneMatch,
            @RequestHeader("If-Modified-Since") Optional&lt;Date&gt; ifModifiedSince) {

        // Load current state
        Order order = orderService.findById(id);
        String currentEtag = etagService.generateEtag(order);
        Instant lastModified = order.getUpdatedAt();

        // Check ETag (strong comparison)
        if (ifNoneMatch.isPresent() &&
            ifNoneMatch.get().equals(currentEtag)) {
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED)
                .eTag(currentEtag)
                .lastModified(lastModified.toEpochMilli())
                .build();
        }

        // Check Last-Modified
        if (ifModifiedSince.isPresent()) {
            long ifModifiedSinceMs = ifModifiedSince.get().getTime();
            long lastModifiedMs = lastModified.toEpochMilli();

            // Allow 1-second tolerance for second-level precision
            if (lastModifiedMs &lt;= ifModifiedSinceMs + 1000) {
                return ResponseEntity.status(HttpStatus.NOT_MODIFIED)
                    .eTag(currentEtag)
                    .lastModified(lastModifiedMs)
                    .build();
            }
        }

        // Return full response
        return ResponseEntity.ok()
            .eTag(currentEtag)
            .lastModified(lastModified.toEpochMilli())
            .body(order);
    }

    // Conditional update (optimistic locking)
    @PutMapping("/{id}")
    public ResponseEntity&lt;Order&gt; updateOrder(
            @PathVariable Long id,
            @RequestBody @Valid UpdateOrderRequest request,
            @RequestHeader("If-Match") Optional&lt;String&gt; ifMatch) {

        // Get current state
        Order current = orderService.findById(id);
        String currentEtag = etagService.generateEtag(current);

        // Validate precondition
        if (ifMatch.isPresent() && !ifMatch.get().equals(currentEtag)) {
            return ResponseEntity
                .status(HttpStatus.PRECONDITION_FAILED)
                .header("X-Error",
                    "Resource modified by another user since last read")
                .eTag(currentEtag)  // Send current ETag so client can retry
                .body(current);     // Send current state
        }

        // If-Match is absent → update anyway (no locking)
        Order updated = orderService.update(id, request);
        String newEtag = etagService.generateEtag(updated);

        return ResponseEntity.ok()
            .eTag(newEtag)
            .body(updated);
    }

    // Conditional delete
    @DeleteMapping("/{id}")
    public ResponseEntity&lt;Void&gt; deleteOrder(
            @PathVariable Long id,
            @RequestHeader("If-Match") Optional&lt;String&gt; ifMatch) {

        if (ifMatch.isPresent()) {
            Order current = orderService.findById(id);
            String currentEtag = etagService.generateEtag(current);

            if (!ifMatch.get().equals(currentEtag)) {
                return ResponseEntity
                    .status(HttpStatus.PRECONDITION_FAILED)
                    .eTag(currentEtag)
                    .build();
            }
        }

        orderService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // Conditional GET for list (pagination-aware)
    @GetMapping
    public ResponseEntity&lt;List<Order&gt;> getOrders(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestHeader("If-None-Match") Optional&lt;String&gt; ifNoneMatch) {

        List&lt;Order&gt; orders = orderService.findAll(page, size);
        String listEtag = etagService.generateEtag(orders);

        if (ifNoneMatch.isPresent() &&
            ifNoneMatch.get().equals(listEtag)) {
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED)
                .eTag(listEtag)
                .build();
        }

        return ResponseEntity.ok()
            .eTag(listEtag)
            .body(orders);
    }
}

// === 4. ETag service with strong/weak comparison ===
/*
Strong ETag: "abc123" → byte-for-byte identical
Weak ETag: W/"abc123" → semantically equivalent (not byte-identical)

Use strong ETag for:
- Conditional mutations (PUT/PATCH/DELETE with If-Match)
- Exact content caching

Use weak ETag for:
- Content that's semantically equivalent but byte-different
- Dynamic content with timestamps or formatting differences
*/

@Service
class EtagService {

    public String generateStrong(Order order) {
        String content = order.getId() + "|" + order.getVersion() +
            "|" + order.getUpdatedAt().toString() +
            "|" + order.getStatus();
        return "\"" + DigestUtils.md5DigestAsHex(
            content.getBytes()) + "\"";
    }

    public String generateWeak(Order order) {
        // Weak ETag tolerates minor formatting differences
        String content = order.getId() + "|" + order.getVersion() +
            "|" + order.getStatus();
        return "W/\"" + DigestUtils.md5DigestAsHex(
            content.getBytes()) + "\"";
    }

    public String generateListEtag(List&lt;Order&gt; orders) {
        String content = orders.stream()
            .map(o -> o.getId() + ":" + o.getVersion())
            .collect(Collectors.joining("|"));
        return "\"" + DigestUtils.md5DigestAsHex(
            content.getBytes()) + "\"";
    }
}

// === 5. Request header combinations ===
/*
If-None-Match + If-Modified-Since (GET):
- If both present, If-None-Match takes precedence
- Server checks both; if any says unchanged → 304

If-Match (PUT/PATCH/DELETE):
- Required for optimistic locking
- Without it, server may accept the update (last-writer-wins)

If-Unmodified-Since (alternative to If-Match):
- Time-based: "don't update if changed after this date"
- Less precise than ETag (second-level precision)
- Use when ETag is not available

If-Range (partial content):
- "Send the range if unchanged, or send full content"
- Used with Range header for resumable downloads
*/

// === 6. Testing conditional requests ===
/*
@Test
void testConditionalGet_NotModified() throws Exception {
    // First request → get ETag
    MvcResult first = mockMvc.perform(get("/api/orders/1"))
        .andExpect(status().isOk())
        .andExpect(header().exists("ETag"))
        .andReturn();

    String etag = first.getResponse().getHeader("ETag");

    // Second request with If-None-Match → 304
    mockMvc.perform(get("/api/orders/1")
            .header("If-None-Match", etag))
        .andExpect(status().isNotModified())
        .andExpect(content().string(""));
}

@Test
void testConditionalPut_Conflict() throws Exception {
    // Get current ETag
    MvcResult getResult = mockMvc.perform(get("/api/orders/1"))
        .andExpect(status().isOk())
        .andReturn();
    String originalEtag = getResult.getResponse().getHeader("ETag");

    // Someone else updates the order
    orderService.update(1L, new UpdateOrderRequest(null, "SHIPPED"));

    // Our update with old ETag → 412
    mockMvc.perform(put("/api/orders/1")
            .header("If-Match", originalEtag)
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"status\": \"CANCELLED\"}"))
        .andExpect(status().isPreconditionFailed())
        .andExpect(header().exists("ETag"))  // New ETag sent
        .andExpect(jsonPath("$.status").value("SHIPPED"));  // Current state
}

@Test
void testConditionalDelete() throws Exception {
    String etag = mockMvc.perform(get("/api/orders/1"))
        .andReturn().getResponse().getHeader("ETag");

    // Delete with valid ETag → success
    mockMvc.perform(delete("/api/orders/1")
            .header("If-Match", etag))
        .andExpect(status().isNoContent());
}

@Test
void testIfModifiedSince() throws Exception {
    Instant futureDate = Instant.now().plusSeconds(3600);

    mockMvc.perform(get("/api/orders/1")
            .header("If-Modified-Since",
                Date.from(futureDate).toGMTString()))
        .andExpect(status().isNotModified());
}
*/

// === 7. Conditional request decision flow ===
/*
GET /resource
├─ Has If-None-Match?
│  ├─ Yes → ETag matches? → Yes → 304 (cached)
│  │                       → No  → 200 (fresh data)
│  └─ No → Has If-Modified-Since?
│          ├─ Yes → Not modified since? → Yes → 304
│          │                           → No → 200
│          └─ No → 200 (always serve)

PUT /resource
├─ Has If-Match?
│  ├─ Yes → ETag matches? → Yes → 200 (update)
│  │                       → No → 412 (conflict)
│  └─ No → Has If-Unmodified-Since?
│          ├─ Yes → Not modified since? → Yes → 200
│          │                           → No → 412
│          └─ No → 200 (last-writer-wins, no locking)

DELETE /resource
├─ Has If-Match?
│  ├─ Yes → ETag matches? → Yes → 204 (deleted)
│  │                       → No → 412 (conflict)
│  └─ No → 204 (no locking)
*/
```

Conditional requests are the foundation of HTTP caching and optimistic concurrency. Use ETag + If-None-Match for efficient caching (304). Use If-Match for safe updates (prevents lost updates, 412 Precondition Failed). Always include both ETag and Last-Modified headers. Test all conditional scenarios: not modified (304), conflict (412), and normal success (200).
### Q25: REST API design → complete best practices checklist


**Answer:** A well-designed REST API follows consistent conventions, uses HTTP properly, handles errors gracefully, and considers consumers first. This answer provides a comprehensive checklist of REST API best practices covering URL design, HTTP semantics, error handling, security, performance, documentation, and evolution.

```java
// === 1. URL design ===
/*
â˜ Use nouns for resources (not verbs): /orders NOT /getOrders
â˜ Use plural nouns: /orders NOT /order
â˜ Use kebab-case: /order-history NOT /orderHistory
â˜ Lowercase only: /api/orders NOT /api/Orders
â˜ Nest related resources: /orders/1/items
â˜ Use query parameters for filtering, sorting, pagination
â˜ Avoid deep nesting (max 3 levels): /a/b/c
  âŒ /orders/1/customers/2/payments/3
  âœ… /orders/1/payments?customerId=2
â˜ Version through URL prefix or header:
  /v1/orders or Accept: application/vnd.company.v1+json
â˜ Use IDs in path, not in body for updates:
  PUT /orders/1 NOT PUT /orders with id in body
*/

// Good URL examples
@RestController
@RequestMapping("/api/v1/orders")
class WellDesignedController {
    // Collection resource
    @GetMapping
    public Page&lt;OrderSummary&gt; listOrders() { return null; }

    // Single resource
    @GetMapping("/{id}")
    public Order getOrder() { return null; }

    // Nested resource (sub-resource)
    @GetMapping("/{id}/items")
    public List&lt;OrderItem&gt; getItems() { return null; }

    // Sub-resource item
    @GetMapping("/{orderId}/items/{itemId}")
    public OrderItem getItem() { return null; }

    // Action as sub-resource (with POST for state changes)
    @PostMapping("/{id}/cancel")
    public Order cancelOrder() { return null; }

    @PostMapping("/{id}/payments")
    public Payment createPayment() { return null; }

    // Filtering via query parameters
    @GetMapping("/search")
    public List&lt;Order&gt; searchOrders(
            @RequestParam String query,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) LocalDate fromDate) {
        return null;
    }
}

// === 2. HTTP methods ===
/*
â˜ GET: Read resources (safe, idempotent, cacheable)
â˜ POST: Create resources (not safe, not idempotent)
â˜ PUT: Full replacement (idempotent)
â˜ PATCH: Partial update (not idempotent in practice)
â˜ DELETE: Remove resource (idempotent)
â˜ HEAD: Get headers only (safe, no body)
â˜ OPTIONS: Get allowed methods

// PUT vs PATCH:
// PUT replaces entire resource (send ALL fields)
// PATCH applies partial modifications (send only changed fields)

@PutMapping("/users/{id}")
public User replaceUser(@PathVariable Long id,
                         @RequestBody @Valid ReplaceUserRequest request) {
    // All fields required → replaces entire user
    return userService.replace(id, request);
}

@PatchMapping("/users/{id}")
public User patchUser(@PathVariable Long id,
                       @RequestBody Map&lt;String, Object&gt; updates) {
    // Only changed fields → apply partial update
    return userService.partialUpdate(id, updates);
}
*/

// === 3. HTTP status codes → use them correctly ===
/*
200 OK: Successful GET, PUT, PATCH
201 Created: Successful POST (include Location header)
204 No Content: Successful DELETE
301 Moved Permanently: Resource moved (new URL in Location)
302 Found: Temporary redirect
304 Not Modified: Conditional GET → ETag matches
400 Bad Request: Validation failure, malformed request
401 Unauthorized: Missing or invalid authentication
403 Forbidden: Authenticated but not authorized
404 Not Found: Resource doesn't exist
405 Method Not Allowed: Wrong HTTP method for URL
406 Not Acceptable: Requested format not available
409 Conflict: Resource state conflict (e.g., duplicate)
412 Precondition Failed: If-Match ETag doesn't match
415 Unsupported Media Type: Wrong Content-Type
422 Unprocessable Entity: Semantic validation error
429 Too Many Requests: Rate limit exceeded
500 Internal Server Error: Unexpected server error
501 Not Implemented: Feature not available
503 Service Unavailable: Temporary maintenance/overload
*/

// Status code utility
class HttpStatusUtil {
    public static ResponseEntity&lt;?> created(String location, Object body) {
        return ResponseEntity.created(URI.create(location)).body(body);
    }

    public static ResponseEntity&lt;?> conflict(String message) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
            .body(Map.of("error", message));
    }

    public static ResponseEntity&lt;?> validationFailed(Map<String, List<String&gt;> errors) {
        ProblemDetail pd = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
        pd.setTitle("Validation Failed");
        pd.setProperty("errors", errors);
        return ResponseEntity.badRequest().body(pd);
    }
}

// === 4. Error handling best practices ===
/*
â˜ Use RFC 7807 Problem Details for all errors
â˜ Include error type URL for documentation
â˜ Never expose stack traces or internal details
â˜ Return field-level validation errors
â˜ Use consistent error format across all endpoints
â˜ Include correlation ID for debugging
â˜ Log all errors with sufficient context
â˜ Handle unexpected exceptions gracefully (500)
*/

// === 5. Security checklist ===
/*
â˜ HTTPS everywhere (enforce with redirect)
â˜ HSTS header with preload
â˜ Authentication: JWT Bearer tokens
â˜ Authorization: @PreAuthorize, role/permission-based
â˜ Input validation on all endpoints
â˜ Rate limiting on all mutation endpoints
â˜ CORS: specific origins only (never * with credentials)
â˜ Security headers: X-Content-Type-Options, X-Frame-Options, CSP
â˜ No sensitive data in URLs (passwords, tokens)
â˜ Audit logging for all mutations
â˜ API key rotation policy
â˜ Regular dependency vulnerability scanning
*/

// === 6. Performance checklist ===
/*
â˜ Pagination for all list endpoints (default page size: 20, max: 100)
â˜ ETag support for conditional GET (304 Not Modified)
â˜ Cache-Control headers on GET responses
â˜ Server-side caching (@Cacheable) for expensive operations
â˜ Gzip compression on responses
â˜ Database indexes on queried columns
â˜ N+1 query prevention (JOIN FETCH, EntityGraph)
â˜ Async processing for long operations (DeferredResult)
â˜ Streaming for large datasets
â˜ Connection pooling configuration
â˜ Request size limits (multipart, JSON body)
*/

// === 7. Documentation checklist ===
/*
â˜ OpenAPI 3.0 specification auto-generated
â˜ Every endpoint has summary and description
â˜ Request/response schemas documented
â˜ All possible status codes documented per endpoint
â˜ Authentication method documented
â˜ Rate limit headers documented
â˜ Pagination parameters documented
â˜ Error response format documented
â˜ Examples for common request/response pairs
â˜ API changelog / version history
*/

// === 8. API evolution checklist ===
/*
â˜ Version from day 1 (/v1/ prefix)
â˜ Never remove fields from responses (add new ones only)
â˜ Make new fields optional initially
â˜ Document deprecations in response headers:
  Deprecation: true
  Sunset: Sat, 1 Jan 2025 00:00:00 GMT
  Link: &lt;/v2/orders&gt;; rel="successor-version"

â˜ Provide migration guides for breaking changes
â˜ Keep old version running for minimum 6 months after deprecation
â˜ Use HATEOAS for optional discoverability
â˜ Test backward compatibility automatically
â˜ Maintain API changelog
*/

// === 9. Pagination best practices ===
/*
Page-based (most common):
GET /api/orders?page=0&size=20
Response: { content: [...], totalPages: 5, totalElements: 100, size: 20, number: 0 }

Cursor-based (for real-time data):
GET /api/orders?cursor=id_100&limit=20
Response: { data: [...], nextCursor: "id_120", hasMore: true }

â˜ Always return total count for page-based pagination
â˜ Set sensible defaults (page=0, size=20)
â˜ Enforce maximum page size (size &lt;= 100)
â˜ Include pagination links/headers
â˜ Use stable sorting for consistent pagination
*/

@GetMapping
public ResponseEntity&lt;Page<Order&gt;> getOrders(Pageable pageable) {
    if (pageable.getPageSize() > 100) {
        pageable = PageRequest.of(
            pageable.getPageNumber(), 100, pageable.getSort());
    }
    return ResponseEntity.ok()
        .cacheControl(CacheControl.maxAge(30, TimeUnit.SECONDS).cachePublic())
        .body(orderService.findAll(pageable));
}

// === 10. Complete checklist → concise ===
/*
DESIGN
â˜ Nouns, plural, kebab-case for URLs
â˜ Correct HTTP methods (GET/POST/PUT/PATCH/DELETE)
â˜ Correct status codes (every endpoint)
â˜ Consistent naming conventions
â˜ HATEOAS optional (self links recommended)

ERRORS
â˜ RFC 7807 Problem Details
â˜ Field-level validation errors
â˜ Correlation IDs
â˜ No stack traces in production

SECURITY
â˜ HTTPS + HSTS
â˜ JWT authentication
â˜ Method-level authorization
â˜ Input validation (Bean Validation)
â˜ Rate limiting
â˜ CORS whitelist
â˜ Security headers
â˜ Audit logging

PERFORMANCE
â˜ Pagination (default 20, max 100)
â˜ ETag + Cache-Control
â˜ Database indexes
â˜ Gzip compression
â˜ Connection pooling

DOCUMENTATION
â˜ OpenAPI 3.0
â˜ Examples for all endpoints
â˜ Error response documentation
â˜ Auth documentation

EVOLUTION
â˜ API versioning
â˜ Backward-compatible changes
â˜ Deprecation headers
â˜ Migration guides
â˜ Changelog
*/

// === 11. Request tracing ===
// Every request should have a unique trace ID for debugging
@Component
class RequestTracingFilter extends OncePerRequestFilter {
    private static final String TRACE_HEADER = "X-Trace-Id";

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String traceId = request.getHeader(TRACE_HEADER);
        if (traceId == null || traceId.isBlank()) {
            traceId = UUID.randomUUID().toString();
        }

        response.setHeader(TRACE_HEADER, traceId);
        MDC.put("traceId", traceId);

        try {
            filterChain.doFilter(request, response);
        } finally {
            MDC.remove("traceId");
        }
    }
}

// === 12. API specification skeleton (OAS 3.0) ===
/*
openapi: 3.0.3
info:
  title: Order Management API
  version: 2.0.0
  description: REST API for managing orders, customers, and products.
servers:
  - url: https://api.company.com/v2
    description: Production
paths:
  /orders:
    get:
      summary: List orders with pagination
      parameters:
        - name: page
          in: query
          schema: { type: integer, default: 0 }
        - name: size
          in: query
          schema: { type: integer, default: 20, maximum: 100 }
        - name: status
          in: query
          schema: { type: string }
      responses:
        '200':
          description: Paginated list of orders
          headers:
            ETag: { schema: { type: string } }
            Cache-Control: { schema: { type: string } }
          content:
            application/json:
              schema:
                type: array
                items: { $ref: '#/components/schemas/Order' }
    post:
      summary: Create a new order
      requestBody:
        required: true
        content:
          application/json:
            schema: { $ref: '#/components/schemas/CreateOrderRequest' }
      responses:
        '201':
          description: Order created
          headers:
            Location: { schema: { type: string } }
          content:
            application/json:
              schema: { $ref: '#/components/schemas/Order' }
        '400':
          description: Validation error
          content:
            application/problem+json:
              schema: { $ref: '#/components/schemas/ProblemDetails' }
        '429':
          description: Rate limit exceeded
          headers:
            Retry-After: { schema: { type: integer } }
*/
```

A great REST API feels obvious to consumers. Use HTTP as designed → correct methods, status codes, and headers. Validate everything. Document everything. Cache aggressively on reads, lock safely on writes. Version early. The best REST APIs look simple because they handle complexity consistently and predictably. When in doubt, follow the HTTP specification → it was designed for exactly this.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Interface | Contract without state | Multiple inheritance of type | API contracts |
| Abstract Class | Partial implementation | Single inheritance, shared state | Template method pattern |
| Record | Transparent data carrier | Auto-generated methods | DTOs, value objects |

## Quick Reference

| Topic | Key Points | Interview Frequency |
|-------|-----------|-------------------|
| **OOP** | Encapsulation, Inheritance, Polymorphism, Abstraction | Every interview |
| **Collections** | List, Set, Map, Queue, Deque | 9/10 interviews |
| **Concurrency** | synchronized, volatile, Locks, CompletableFuture | 7/10 senior interviews |
| **Java 8+** | Lambdas, Streams, Optional, CompletableFuture | 8/10 interviews |

## Cross-Application Matrix

| Skill | Junior (0-2yr) | Mid (3-5yr) | Senior (6-9yr) | Staff (10+) |
|-------|---------------|-------------|----------------|-------------|
| OOP & Design Patterns | Define and identify | Apply and combine | Evaluate and refactor | Create and teach |
| Collections | Basic usage | Performance trade-offs | Concurrent collections | Custom implementations |
| Concurrency | Syntax knowledge | Write thread-safe code | Debug deadlocks | Design concurrent systems |

## Chapter Quiz

1. What is the difference between equals() and == in Java?
   - A) They are identical
   - B) equals() compares values, == compares references
   - C) == compares values, equals() compares references
   - D) equals() is for primitives, == is for objects

<details>
<summary>Answer</summary>
**B) equals() compares logical equality (overridable), == compares reference equality.**
</details>

2. Which collection guarantees insertion order?
   - A) HashMap
   - B) TreeMap
   - C) LinkedHashMap
   - D) HashSet

<details>
<summary>Answer</summary>
**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.
</details>

3. What keyword prevents a method from being overridden?
   - A) static
   - B) final
   - C) private
   - D) abstract

<details>
<summary>Answer</summary>
**B) final.** A final method cannot be overridden by subclasses.
</details>
