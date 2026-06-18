# Chapter 8: Microservices and API Design

---
## Learning Objectives

- Compare monolithic and microservice architectures using a structured decision framework including trade-offs in scalability, deployment, and organizational alignment
- Apply Domain-Driven Design principles including bounded contexts and ubiquitous language to decompose a system into microservices
- Design and implement API gateways with routing, authentication, rate limiting, and response aggregation
- Construct RESTful APIs following resource-oriented naming, pagination, filtering, and HATEOAS conventions
- Implement gRPC services with Protocol Buffers, unary and streaming RPCs, and bidirectional streaming
- Analyze GraphQL's resolver-based query model and address the N+1 problem with batching and dataloader patterns
- Apply distributed transaction patterns including the Saga pattern with choreography and orchestration variants

---
## Theory

![Microservices Patterns Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/08-microservices-apis.png)

### Monolith vs Microservices

A **monolith** is a single deployable unit containing all application logic. A **microservice architecture** decomposes the application into independently deployable services, each owning a specific business capability.

| Aspect | Monolith | Microservices |
|---|---|---|
| Deployment | Single artifact | N independent services |
| Scaling | Scale entire application | Scale individual services |
| Team coupling | Tight (merge conflicts) | Loose (per-service teams) |
| Technology stack | Uniform | Polyglot (per-service choice) |
| Testing | Simple integration tests | Service-level + contract tests |
| Development speed | Slows as codebase grows | Independent service velocity |
| Operational complexity | Low (one process) | High (N processes, discovery, monitoring) |
| Data management | Single database | Database per service (eventual consistency) |

**When to choose monolith:** Early-stage product, small team (< 10 engineers), simple domain, limited operational resources.

**When to choose microservices:** Large engineering org, distinct subdomains, need to scale components independently, different tech requirements per service.

**Modular Monolith as intermediate:** Start with a monolith but enforce strict module boundaries (package/module per bounded context). Extract modules into microservices when they prove they need independent scaling or team ownership.

### Bounded Contexts (Domain-Driven Design)

Domain-Driven Design (DDD) provides the conceptual toolkit for decomposing a system. The core concept is the **bounded context** -- a logical boundary within which a particular domain model applies.

```
E-commerce bounded contexts:
  Product Catalog:    products, categories, inventory (Catalog Team)
  Order Management:   orders, line items, shipments (Orders Team)
  Payment:            payments, refunds, transactions (Payments Team)
  Customer:           users, addresses, preferences (Customer Team)
```

**Ubiquitous Language:** Within each bounded context, the team develops a shared language. The same word may mean different things in different contexts:

```
"Customer" in Order Management:  billing address, order history
"Customer" in Recommendation:    browsing patterns, click-through rate
"Customer" in Support:           tickets, satisfaction score
```

**Context Mapping** defines relationships between contexts: Partnership (shared goal), Shared Kernel (shared library), Customer-Supplier (API contract), Conformist (downstream conforms), Anti-Corruption Layer (translation layer), Open Host Service (well-defined protocol).

### API Gateway Pattern

An API gateway is a single entry point for all client requests. It handles cross-cutting concerns and routes requests to appropriate services.

```
Client -> API Gateway -> Service A, Service B, Service C
```

**Gateway Responsibilities:**

- **Routing:** Map requests to services based on URL path, headers, or domain. `/api/users/*` -> User Service.
- **Authentication:** Validate tokens (JWT, OAuth2) before forwarding to services.
- **Rate Limiting:** Enforce per-client or per-IP request limits (token bucket, sliding window).
- **Aggregation:** Combine responses from multiple services. A product detail page may need Product, Review, and Inventory data.

```python
async def get_product_detail(product_id):
    product = await call_service(ProductService, f"/products/{product_id}")
    reviews = await call_service(ReviewService, f"/reviews?product_id={product_id}")
    inventory = await call_service(InventoryService, f"/inventory/{product_id}")
    return {**product, "reviews": reviews, "stock": inventory['available']}
```

- **Protocol Translation:** Convert between protocols (HTTP/1.1 -> gRPC).
- **Resilience:** Circuit breaker for failing downstream services.

### RESTful API Design

#### Resource Naming

Resources are nouns, not verbs. Use plural nouns for collections.

```
Good:  GET /users, GET /users/{id}, POST /users
Good:  PUT /users/{id}, PATCH /users/{id}, DELETE /users/{id}
Bad:   GET /getUser, POST /createUser

Nested: GET /users/{id}/orders
         GET /users/{id}/orders/{order_id}
```

#### HATEOAS

Responses include links guiding clients to related actions.

```json
{
  "id": 42,
  "name": "Alice",
  "_links": {
    "self": { "href": "/users/42" },
    "orders": { "href": "/users/42/orders" },
    "profile": { "href": "/users/42/profile" }
  }
}
```

#### Pagination

Cursor-based (recommended for large datasets):
```
GET /users?cursor=eyJsYXN0X2lkIjogNDJ9&limit=20
Response: {"data": [...], "next_cursor": "...", "has_more": true}
```

Offset-based (simpler, O(n^2) for deep pages):
```
GET /users?offset=0&limit=20
Response: {"data": [...], "total": 1000, "offset": 0, "limit": 20}
```

#### Filtering and Sorting

```
GET /users?status=active&role=admin
GET /users?sort=created_at:desc,name:asc
GET /orders?created_at[gte]=2024-01-01&created_at[lte]=2024-12-31
```

### gRPC

gRPC is a high-performance RPC framework using Protocol Buffers for serialization and HTTP/2 for transport.

#### Protocol Buffers

```protobuf
syntax = "proto3";

service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc ListUsers (ListUsersRequest) returns (stream User);
  rpc UpdateUser (stream UpdateUserRequest) returns (User);
  rpc Chat (stream ChatMessage) returns (stream ChatMessage);
}

message GetUserRequest { string user_id = 1; }
message User {
  string user_id = 1;
  string name = 2;
  string email = 3;
  int32 age = 4;
  repeated string roles = 5;
}
```

#### Streaming Patterns

1. **Unary RPC:** Client sends one request, server returns one response. Like traditional HTTP.
2. **Server Streaming:** Client sends one request, server returns a stream. `ListUsers({}) -> User{...}, User{...}`
3. **Client Streaming:** Client sends a stream, server returns one response. `UpdateUser -> UpdateUser -> User{count: 2}`
4. **Bidirectional Streaming:** Both sides send independent streams. Chat application pattern.

#### gRPC vs REST

| Aspect | REST | gRPC |
|---|---|---|
| Transport | HTTP/1.1 or 2 | HTTP/2 (mandatory) |
| Serialization | JSON (text) | Protobuf (binary) |
| Schema | Implicit (OpenAPI optional) | Required (proto files) |
| Streaming | SSE, WebSocket | Native (4 patterns) |
| Browser support | Native | Requires gRPC-web proxy |
| Payload size | Larger | ~30% of JSON size |

### GraphQL

GraphQL is a query language and runtime for APIs. Clients request exactly the data they need.

#### Schema and Resolvers

```graphql
type Query {
  user(id: ID!): User
  users(limit: Int, offset: Int): [User!]!
}

type User {
  id: ID!
  name: String!
  email: String!
  posts(limit: Int): [Post!]!
  followers: [User!]!
}
```

Each field maps to a **resolver** function:

```javascript
const resolvers = {
  Query: {
    user: (_, { id }) => db.users.findById(id),
    users: (_, { limit, offset }) => db.users.findAll(limit, offset)
  },
  User: {
    posts: (user, { limit }) => db.posts.findByAuthor(user.id, limit)
  }
};
```

#### The N+1 Problem

A query for 100 users with their posts triggers 1 query for users + 100 queries for posts = 101 database queries.

```graphql
query { users(limit: 100) { name posts(limit: 10) { title } } }
```

**Solution -- Dataloader:** Batch individual requests into a single query.

```javascript
const postLoader = new DataLoader(async (userIds) => {
  const posts = await db.posts.findByUserIds(userIds, { limit: 10 });
  return userIds.map(id => posts.filter(p => p.userId === id));
});
```

Now 100 queries become 1 batch query (`WHERE user_id IN (...)`).

### Service Mesh

A service mesh handles inter-service communication at the infrastructure layer via sidecar proxies.

```
Without mesh: Service A -> direct HTTP -> Service B
With mesh:    Service A -> Envoy proxy -> Envoy proxy -> Service B
```

**Istio Architecture:**

- **Data plane:** Envoy sidecar proxies intercept all traffic between services.
- **Control plane (Istiod):** Pilot (service discovery + traffic management), Citadel (mTLS certificates), Galley (config validation).

**Features:**
- **mTLS:** Automatic mutual TLS between services without application changes.
- **Traffic splitting:** Route % of traffic between versions (canary deployments).

```yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts: [reviews]
  http:
  - route:
    - destination: { host: reviews, subset: v1 }
      weight: 90
    - destination: { host: reviews, subset: v2 }
      weight: 10
```

### Distributed Transactions

#### Two-Phase Commit (2PC)

2PC coordinates transactions across multiple resources with two phases:

```
Phase 1 (Prepare):
  Coordinator -> Service A: "Can you commit?"
  Coordinator -> Service B: "Can you commit?"
  Service A -> Coordinator: "Ready" (holds locks)
  Service B -> Coordinator: "Ready"

Phase 2 (Commit):
  Coordinator -> Service A: "Commit"
  Coordinator -> Service B: "Commit"
```

**Problems:** Blocking (locks held during Phase 1), coordinator SPOF, two round-trip latency. Not suitable for microservices.

#### Saga Pattern

A saga is a sequence of local transactions with compensating transactions for rollback.

**Choreography-based:** Each service listens for events and decides what to do next.

```
Saga: Create Order
  1. Order Service: create order (PENDING) -> publish OrderCreated
  2. Payment Service: on OrderCreated -> charge -> publish PaymentProcessed
  3. Inventory Service: on PaymentProcessed -> reserve -> publish InventoryReserved
  4. Shipping Service: on InventoryReserved -> create shipment -> publish Shipped
  5. Order Service: on Shipped -> confirm order

On PaymentFailed:
  -> Order Service: cancel order (compensation)
```

**Orchestration-based:** A dedicated orchestrator coordinates the saga.

```python
class OrderSagaOrchestrator:
    async def create_order(self, order_data):
        try:
            order = await self.order_service.create_order(order_data)
            payment = await self.payment_service.charge(order.id, order.total)
            inventory = await self.inventory_service.reserve(order.id, order.items)
            shipment = await self.shipping_service.create(order.id, order.address)
            await self.order_service.confirm(order.id)
        except PaymentError:
            await self.order_service.cancel(order.id)
        except InventoryError:
            await self.payment_service.refund(order.id, order.total)
            await self.order_service.cancel(order.id)
```

| Aspect | Choreography | Orchestration |
|---|---|---|
| Coupling | Loose (event-based) | Tighter (orchestrator knows all services) |
| Complexity | Harder to trace flow | Centralized flow control |
| Failure handling | Distributed compensation | Centralized in orchestrator |
| Scalability | High | Limited by orchestrator |

### Idempotency Keys

An idempotency key ensures retrying a request produces the same result as the original.

```
Client retry flow:
  POST /payments  Idempotency-Key: PAY-42-abc123
  First attempt: 200 OK (payment processed)
  Network timeout: client retries with same key
  Second attempt: 200 OK (same result, no duplicate)
```

```python
def process_payment(request):
    key = request.headers.get('Idempotency-Key')
    existing = cache.get(f"idempotency:{key}")
    if existing:
        return existing['response']
    result = payment_gateway.charge(request.amount)
    cache.set(f"idempotency:{key}", {'response': result}, ex=86400)
    return result
```

### Service Versioning

**URI versioning:** `GET /api/v1/users/42`, `GET /api/v2/users/42`

**Header versioning:** `Accept: application/vnd.myapp.v1+json`

**Semantic versioning (gRPC):** `package users.v1;`

**Backward compatibility rules:**
- Adding a field: compatible
- Removing a field: breaking
- Renaming a field: breaking
- Changing a field type: breaking

### Contract Testing (Pact)

Consumer-driven contract testing verifies API compatibility.

**Consumer side:**
```python
@pact.given('user exists') \
    .upon_receiving('a request for a user') \
    .with_request('GET', '/users/42') \
    .will_respond_with(200, body={'id': 42, 'name': 'Alice'})
result = user_client.get_user(42)
assert result == expected
```

**Provider side:** Pact replays consumer contracts against the actual provider and fails if contracts are not satisfied.

---
## Examples

### Example 1: Netflix SOA

Netflix migrated from a monolithic DVD-rental application to cloud-based SOA with hundreds of microservices.

**Decomposed services:** User Service, Content Service, Recommendation Service, Search Service, Playback Service, Billing Service, Notification Service.

**Zuul API Gateway:** All external requests pass through Zuul which handles authentication, rate limiting, routing, and metrics collection.

**Hystrix Circuit Breaker:** Each service call is wrapped in a Hystrix command. If a service fails (error rate exceeds threshold), the circuit opens and subsequent calls fail fast instead of timing out.

```
Service A -> Hystrix -> Service B
  200 OK -> circuit closed
  5 timeouts -> circuit open (fast-fail for 30s)
  half-open -> trial request -> circuit closed (if successful)
```

**Key lesson:** Netflix's initial boundaries were too fine-grained, causing excessive inter-service latency. Later iterations coarsened boundaries.

### Example 2: Uber Domain-Oriented Microservices

Uber's evolution: monolith (2014) -> 2200 microservices (2017) -> domain-oriented design (2018+).

**Domain abstraction groups services into domains with well-defined API gateways:**

```
Rider Domain:    rider-service, rider-verification, rider-payment-methods
Driver Domain:   driver-service, driver-onboarding, driver-vehicles
Trip Domain:     trip-service, dispatching, pricing, surge
Marketplace:     matching, supply-demand forecasting
Payments Domain: payment-processing, payouts, invoicing
```

Cross-domain communication goes through gateways. Rider Gateway cannot directly call Payments Gateway; it routes through the domain boundary.

### Example 3: Order Saga Implementation

A complete e-commerce order saga with orchestration:

```python
class OrderSaga:
    async def execute(self, order_data):
        try:
            order = await self.step_create_order(order_data)
            payment = await self.step_reserve_payment(order.id, order.total)
            inventory = await self.step_reserve_inventory(order.id, order.items)
            shipment = await self.step_create_shipment(order.id, order.address)
            await self.step_confirm_order(order.id)
            return {"status": "success", "order_id": order.id}
        except StepFailedError as e:
            await self.compensate(e.step)
            return {"status": "failed", "reason": str(e)}

    async def compensate(self, failed_step):
        steps = [self._cancel_order, self._release_payment,
                 self._release_inventory, self._cancel_shipment]
        for step in steps[:self._step_index(failed_step)]:
            await step()
```

---
## Summary

- Microservices decompose applications into independently deployable services aligned to business capabilities; the modular monolith is a pragmatic starting point
- Bounded contexts from DDD provide the conceptual boundary for services, with explicit context maps governing inter-service relationships
- API gateways centralize cross-cutting concerns (auth, rate limiting, routing) while enabling response aggregation and protocol translation
- REST APIs use resource-oriented naming (plural nouns), consistent pagination, and filtering conventions; HATEOAS decouples clients from URL structure
- gRPC with Protobuf offers 4 communication patterns with compact binary serialization and built-in code generation
- GraphQL's resolver-based model gives clients control over response shape but requires dataloader to avoid the N+1 query problem
- Service meshes (Istio) offload networking concerns to sidecar proxies, providing mTLS and traffic splitting without application changes
- Two-Phase Commit is unsuitable for microservices; the Saga pattern with compensating transactions is the standard alternative
- Choreography-based sagas use events for loose coupling; orchestration-based sagas centralize flow control
- Idempotency keys enable safe retries; contract testing (Pact) validates consumer-provider compatibility

---
## Exercises

### Review Questions

1. A team of 8 engineers is building a ride-sharing application with three subdomains (Rider, Driver, Payments). Would you recommend monolith or microservices? Justify.

2. In gRPC, explain why Protobuf fields are numbered rather than named in the wire format. How does numbering enable backward-compatible schema evolution?

3. An API changed `GET /orders` response from `order_id` (integer) to `orderId` (string). Is this breaking? Explain using contract testing principles.

4. In a service mesh with Istio, explain the flow from Service A to Service B with mTLS enabled.

### Application Problems

1. **Design an API for document collaboration.** Design REST endpoints for: workspaces, documents, collaborators, comments, document version history. Use proper resource naming, nested resources, pagination, and filtering. Include request/response for 5 endpoints.

2. **Saga design for hotel booking:** Steps: Reservation (block room), Payment (charge deposit), Loyalty (award points), Notification (send confirmation). Design both choreography and orchestration versions. Show event flow for success and for payment failure with compensations.

3. **API Gateway rate limiting:** Sliding window, 100 req/min. Client sends 100 requests at t=0, 10 at t=30s, 50 at t=65s. Walk through each decision with window size 60s.

### Challenge Problem

**Design a Microservice Architecture for a Stock Trading Platform**

1 million trades/day, 5M users, 100K concurrent traders. Order types: market, limit, stop-loss. Real-time order book (sub-100ms). 99.99% uptime for trading engine.

**Deliverables:**

1. **Service decomposition:** Identify at least 10 bounded contexts. For each: service name, responsibility, data store (with justification), key APIs (REST or gRPC with rationale).

2. **Order saga:** Design the market order saga (validation -> risk check -> order book match -> trade capture -> portfolio update -> notification). Show orchestration, compensations, and failure modes.

3. **Idempotency design:** An order may be retried by the client. Design the idempotency mechanism: key generation, storage (data store, TTL), deduplication logic, what happens when the same order hits three different services.

4. **Versioning strategy:** Order Service adds a new required field (`time_in_force`). Existing clients don't send it. Design the migration: API versioning approach, backward-compatibility, rollout timeline, deprecation schedule.

5. **Contract testing pipeline:** Design CI/CD pipeline preventing breaking API changes from deploying. Tools, test order, failure handling, process for introducing breaking changes across services.

---
