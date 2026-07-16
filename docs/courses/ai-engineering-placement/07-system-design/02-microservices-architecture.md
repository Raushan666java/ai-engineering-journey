# Microservices Architecture — Design, Communication, and Patterns

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand microservices principles and advantages over monoliths |
| LO2 | Design services based on bounded contexts |
| LO3 | Implement inter-service communication with REST and gRPC |
| LO4 | Use API Gateway for routing, auth, and aggregation |
| LO5 | Handle distributed data and transactions (Saga pattern) |
| LO6 | Apply observability: logging, metrics, distributed tracing |

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/07-system-design/02-microservices-architecture/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/07-system-design/02-microservices-architecture/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/07-system-design/02-microservices-architecture/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/07-system-design/02-microservices-architecture/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/07-system-design/02-microservices-architecture/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/07-system-design/02-microservices-architecture/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | Monolith vs Microservices | Trade-offs, decomposition strategies |
| 2.2 | Domain-Driven Design | Bounded contexts, aggregates, events |
| 2.3 | Service Communication | REST, gRPC, GraphQL, message queues |
| 2.4 | API Gateway | Routing, authentication, rate limiting |
| 2.5 | Service Discovery | DNS, Consul, Kubernetes DNS, client-side |
| 2.6 | Data Management | Database per service, Saga pattern |
| 2.7 | Observability | Logging, metrics, distributed tracing |
| 2.8 | Deployment Patterns | Blue-green, canary, feature flags |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Monolith vs Microservices] --> B[DDD]
    B --> C[Communication]
    C --> D[API Gateway]
    D --> E[Discovery]
    E --> F[Data Management]
    F --> G[Observability]
    G --> H[Deployment]
```

## 2.1 Monolith vs Microservices

**Monolith**: Single deployment unit. Simple development, testing, and deployment. Becomes hard to maintain as it grows.

**Microservices**: Independent services, each with its own database, deployable separately.

| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| Deployment | Single unit | Independent services |
| Scaling | Everything | Per service |
| Development | Simple initially | Complex coordination |
| Testing | End-to-end easy | Integration testing required |
| Team autonomy | Low | High |
| Operational overhead | Low | High |

**When to choose microservices**: Large team (10+), complex domain, need for independent scaling, polyglot technology stack.

**When NOT to choose**: Small team, simple application, early-stage startup, no clear service boundaries.

## 2.2 Domain-Driven Design

DDD helps identify service boundaries.

**Bounded Context**: A boundary within which a particular domain model applies. Each microservice should align with one bounded context.

**Aggregate**: A cluster of domain objects treated as a single unit. Changes within an aggregate are atomic.

**Ubiquitous Language**: Common language shared by developers and domain experts.

```python
# Order bounded context
class Order:
    def __init__(self, order_id, user_id, items, total):
        self.order_id = order_id
        self.user_id = user_id
        self.items = items
        self.total = total
        self.status = "pending"

    def confirm(self):
        self.status = "confirmed"
        # Emit domain event
        DomainEvents.raise(OrderConfirmed(self.order_id))
```

## 2.3 Service Communication

**Synchronous**: REST (HTTP), gRPC, GraphQL. Simple but creates coupling.

```python
# REST communication
import requests

def get_user_orders(user_id):
    response = requests.get(f"http://order-service/users/{user_id}/orders")
    return response.json()

# gRPC (protocol buffers)
# service OrderService {
#   rpc GetUserOrders (UserRequest) returns (OrderList);
# }
```

**Asynchronous**: Message queues (RabbitMQ, Kafka), event-driven. Loose coupling.

```python
# Event-driven communication
class OrderService:
    def create_order(self, order_data):
        order = Order.create(order_data)
        event = OrderCreatedEvent(order.id, order.user_id, order.total)
        message_bus.publish("order.created", event)

class NotificationService:
    def on_order_created(self, event):
        send_email(event.user_id, f"Order {event.order_id} confirmed")
```

| Pattern | Pros | Cons |
|---------|------|------|
| Request/Response | Simple, easy to debug | Coupling, latency |
| Event-driven | Loose coupling, scalable | Eventual consistency, debugging hard |
| Command Query (CQRS) | Optimized reads/writes | Complexity |

## 2.4 API Gateway

Single entry point for all clients. Routes requests to appropriate services.

```python
class APIGateway:
    def __init__(self):
        self.routes = {
            "/users": "user-service",
            "/orders": "order-service",
            "/products": "product-service",
        }

    def handle_request(self, request):
        service = self.find_service(request.path)
        if not service:
            return 404
        # Add auth, rate limiting, logging
        response = forward_to_service(service, request)
        return response
```

**Gateway responsibilities**:
- Request routing
- Authentication/authorization
- Rate limiting
- Request/response transformation
- Aggregation (combine multiple service responses)
- Circuit breaking

## 2.5 Service Discovery

Services need to find each other's locations (host:port).

**Server-side**: Load balancer (ALB, Nginx) knows service locations. Client hits load balancer.

**Client-side**: Client queries a service registry (Consul, etcd, K8s DNS) to get service locations, then picks one.

```python
class ServiceRegistry:
    def __init__(self):
        self.services = {}

    def register(self, name, host, port):
        self.services[name] = {"host": host, "port": port}

    def discover(self, name):
        return self.services.get(name)
```

## 2.6 Data Management

**Database per service**: Each service owns its data. No shared databases.

**Saga pattern**: Distributed transaction across services using a sequence of local transactions with compensating actions on failure.

```python
# Choreography-based Saga
class OrderSaga:
    def create_order(self, order_data):
        try:
            order = order_service.create(order_data)
            payment = payment_service.charge(order.user_id, order.total)
            inventory = inventory_service.reserve(order.items)
            notification = notification_service.send_confirmation(order)
            return order
        except PaymentFailed:
            order_service.cancel(order.id)
            raise
        except InventoryShortage:
            payment_service.refund(order.user_id, order.total)
            order_service.cancel(order.id)
            raise
```

## 2.7 Observability

**Logging**: Structured logs (JSON), correlation IDs across services.

```python
import logging
import json

class StructuredLogger:
    def info(self, message, **kwargs):
        log_entry = {"message": message, "level": "info", **kwargs}
        print(json.dumps(log_entry))
```

**Metrics**: Request rate, error rate, latency (Prometheus metrics).

**Distributed tracing**: Trace a request across multiple services (Jaeger, Zipkin).

```mermaid
flowchart LR
    A[Gateway] --> B[User Service: 5ms]
    A --> C[Order Service: 20ms]
    C --> D[Payment Service: 100ms]
    C --> E[Inventory Service: 15ms]
    A --> F[Product Service: 8ms]
```

## 2.8 Deployment Patterns

| Pattern | Description | Risk |
|---------|-------------|------|
| Blue-Green | Two environments, switch traffic | Low |
| Canary | Gradual traffic shift | Very low |
| Rolling | Incremental replacement | Low |
| Feature Flags | Toggle functionality | Minimal |

---

## TypeScript Parallel

```typescript
interface ServiceDefinition {
  name: string;
  port: number;
  endpoints: string[];
  dependencies: string[];
}

class MicroserviceOrchestrator {
  private services: Map<string, ServiceDefinition> = new Map();

  register(def: ServiceDefinition): void {
    this.services.set(def.name, def);
  }

  getService(name: string): ServiceDefinition | undefined {
    return this.services.get(name);
  }

  getDependencyGraph(): Map<string, string[]> {
    const graph = new Map<string, string[]>();
    for (const [name, def] of this.services) {
      graph.set(name, def.dependencies);
    }
    return graph;
  }
}
```

---

## Summary

- Microservices decompose applications into independently deployable services with their own databases
- Domain-Driven Design helps identify service boundaries using bounded contexts
- Services communicate synchronously (REST, gRPC) or asynchronously (events, queues)
- API Gateway provides a single entry point with routing, auth, and rate limiting
- Service discovery enables services to find each other via registries or DNS
- Database per service ensures loose coupling; Saga pattern handles distributed transactions
- Observability requires structured logging, metrics, and distributed tracing
- Deployment strategies (blue-green, canary) minimize risk during releases
- Microservices increase operational complexity but improve team autonomy and scalability
- Not every application needs microservices — start with monolith, decompose when necessary

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Service boundaries | Bounded contexts from DDD | Splitting by technical layers |
| Communication | Prefer async/events for cross-service | Synchronous calls in chains |
| API Gateway | Use managed gateway (Kong, AWS) | Building from scratch |
| Data | Database per service | Shared database microservices |
| Transactions | Saga pattern | Distributed transactions (2PC) |
| Debugging | Correlation IDs + tracing | Disconnected logs |
| Deployment | Blue-green with feature flags | Big bang releases |

## Interview Q&A

<details class="tp-qa-card" data-qid="sysdes-s02-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: Monolith vs Microservices trade-offs?</summary>
  <div class="tp-qa-answer"><p>Monolith: simpler development/testing, harder to scale and maintain as it grows. Microservices: independent scaling and deployment, but higher operational complexity, network latency, and debugging difficulty.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: What is a bounded context in DDD?</summary>
  <div class="tp-qa-answer"><p>A boundary within which a domain model applies. Each microservice should align with one bounded context. Within a context, terms have specific meanings; between contexts, translation may be needed.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: What is the Saga pattern?</summary>
  <div class="tp-qa-answer"><p>Saga manages distributed transactions across services via a sequence of local transactions with compensating actions on failure. Choreography-based (services react to events) or orchestrator-based (central coordinator).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: What does an API Gateway do?</summary>
  <div class="tp-qa-answer"><p>Single entry point: request routing, authentication, rate limiting, request/response transformation, API aggregation, circuit breaking, and cross-cutting concerns.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: How do services discover each other?</summary>
  <div class="tp-qa-answer"><p>Client-side: services register with a registry (Consul, etcd), clients query the registry. Server-side: load balancer (ALB, Nginx) knows service locations. K8s uses DNS-based discovery.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: Why database per service?</summary>
  <div class="tp-qa-answer"><p>Ensures loose coupling — services own their data schema and can choose the best database type. No shared schema changes across teams. Prevents one service from directly accessing another's data.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: What is distributed tracing?</summary>
  <div class="tp-qa-answer"><p>Tracking a request across multiple services. Each service adds a span with timing information. A trace ID correlates all spans. Tools: Jaeger, Zipkin, OpenTelemetry.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: When should you NOT use microservices?</summary>
  <div class="tp-qa-answer"><p>Small team (< 10), simple CRUD applications, early-stage startups needing fast iteration, when service boundaries are unclear, or when operational expertise is limited.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: Async vs sync communication?</summary>
  <div class="tp-qa-answer"><p>Sync (REST/gRPC): simple, real-time, but creates coupling and cascading failures. Async (events/queues): loose coupling, resilient, handles bursts, but eventual consistency and harder debugging.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s02-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How do you decompose a monolith into microservices?</summary>
  <div class="tp-qa-answer"><p>Identify bounded contexts via DDD. Start with the most independent module. Extract it as a service with its own database. Set up communication (API/events). Repeat incrementally. Use strangler fig pattern.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What DDD concept defines service boundaries?

a) Entity
b) Value Object
c) Bounded Context
d) Aggregate

<details class="tp-qa-card" data-qid="sysdes-s02-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Bounded Context</strong></p></div></details>

**Q2**: Which pattern handles distributed transactions?

a) 2PC
b) Saga
c) CQRS
d) Event Sourcing

<details class="tp-qa-card" data-qid="sysdes-s02-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Saga</strong></p></div></details>

**Q3**: What does an API Gateway NOT typically do?

a) Authentication
b) Business logic
c) Rate limiting
d) Request routing

<details class="tp-qa-card" data-qid="sysdes-s02-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Business logic</strong></p></div></details>

**Q4**: Which communication pattern has loose coupling?

a) REST
b) gRPC
c) Events
d) GraphQL

<details class="tp-qa-card" data-qid="sysdes-s02-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Events</strong></p></div></details>

**Q5**: What is the strangler fig pattern?

a) A database migration strategy
b) Incrementally replacing a monolith with microservices
c) A load balancing algorithm
d) A caching strategy

<details class="tp-qa-card" data-qid="sysdes-s02-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Incrementally replacing a monolith with microservices</strong></p></div></details>

## Exercises

**Easy** — List and explain 5 signs that a monolith should be decomposed into microservices.

**Medium** — Design an API Gateway for a system with user, order, product, and payment services. Show routing rules, authentication flow, and rate limiting.

**Medium** — Design a Saga for a ride-booking system: book ride, charge payment, notify driver, notify passenger. Include compensating transactions.

**Hard** — Design a complete microservices architecture for an e-commerce platform. Show service boundaries, communication patterns, data storage, and deployment strategy.

**Hard** — Implement an event-driven notification system: UserService publishes UserRegistered, OrderService publishes OrderPlaced, NotificationService subscribes and sends email/SMS. Use a message broker.

## Service Mesh

A service mesh handles inter-service communication at the infrastructure layer.

```mermaid
flowchart LR
    subgraph Without Mesh
        S1[Service A] -->|HTTP| S2[Service B]
    end
    subgraph With Mesh
        SA[Service A] --> PA[Proxy Sidecar]
        PA --> PB[Proxy Sidecar]
        PB --> SB[Service B]
    end
```

**Istio features**:

```yaml
# Traffic management
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
    - reviews
  http:
    - match:
        - headers:
            end-user:
              exact: jason
      route:
        - destination:
            host: reviews
            subset: v2
    - route:
        - destination:
            host: reviews
            subset: v1
```

**Service mesh capabilities**:
- Traffic splitting (canary, blue-green)
- Mutual TLS between services
- Circuit breaking and retries
- Distributed tracing
- Metrics collection
- Access policies

## Chaos Engineering

Test system resilience by intentionally injecting failures.

```python
class ChaosExperiment:
    def __init__(self, name: str, probability: float = 0.1):
        self.name = name
        self.probability = probability

    def inject_latency(self, service: str, delay_ms: int):
        """Add artificial latency to service calls."""
        if random.random() < self.probability:
            time.sleep(delay_ms / 1000)
            logger.warning(f"Injected {delay_ms}ms latency to {service}")

    def kill_service(self, service: str):
        """Simulate service failure."""
        if random.random() < self.probability:
            raise ServiceUnavailable(f"Chaos: killed {service}")

    def corrupt_response(self, response: dict) -> dict:
        """Corrupt response data."""
        if random.random() < self.probability:
            response["data"] = "CORRUPTED"
        return response

chaos = ChaosExperiment("api-failure", 0.05)
```

**Principles of chaos engineering**:
- Start with a steady-state hypothesis
- Introduce realistic variables
- Run experiments in production (or staging)
- Automate experiments to run continuously
- Minimize blast radius

## Event Sourcing and CQRS

**Event Sourcing**: Store events as the source of truth, not current state.

```python
class EventStore:
    def __init__(self):
        self.events = []

    def append(self, event: dict):
        self.events.append(event)

    def get_events(self, aggregate_id: str) -> list[dict]:
        return [e for e in self.events if e["aggregate_id"] == aggregate_id]

    def replay(self, aggregate_id: str) -> dict:
        state = {}
        for event in self.get_events(aggregate_id):
            state.update(event["data"])
        return state
```

**CQRS** (Command Query Responsibility Segregation):

```python
class CommandHandler:
    def handle_create_order(self, command):
        # Write model — validates business rules
        event = OrderCreatedEvent(command.user_id, command.items)
        event_store.append(event)

class QueryHandler:
    def get_order_summary(self, user_id):
        # Read model — optimized denormalized view
        return read_db.query(
            "SELECT * FROM order_summaries WHERE user_id = ?", user_id
        )
```

## Microservices Migration Patterns

| Pattern | Description | Risk |
|---------|-------------|------|
| Strangler Fig | Incrementally replace monolith pieces | Low |
| Anti-Corruption Layer | Translate between old and new systems | Medium |
| Branch by Abstraction | Abstract before extracting | Low |
| Parallel Run | Run old + new, compare results | Medium |
| Feature Toggle | Toggle between old and new | Low |
| Database View | Use DB views to separate schemas | Medium |

---

> **Next**: [Message Queues](03-message-queues.md)
