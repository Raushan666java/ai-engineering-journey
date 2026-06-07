# 🔧 Microservices - Complete Deep Dive

## Monolith vs Microservices

### Monolithic Architecture
```
Single Application:
[UI + Business Logic + Data Access + Database]

Pros:
✅ Simple to develop
✅ Easy to test
✅ Easy to deploy
✅ No network overhead

Cons:
❌ Tight coupling
❌ Hard to scale
❌ Technology lock-in
❌ Long deployment cycles
```

### Microservices Architecture
```
Multiple Services:
[User Service] [Order Service] [Payment Service]
      ↓              ↓                ↓
   [User DB]     [Order DB]      [Payment DB]

Pros:
✅ Independent deployment
✅ Technology flexibility
✅ Scalability
✅ Fault isolation

Cons:
❌ Complex infrastructure
❌ Network latency
❌ Data consistency
❌ Testing difficulty
```

---

## When to Use Microservices

### Use Microservices When:
```
✅ Large team (50+ developers)
✅ Multiple products/features
✅ Different scaling needs
✅ Frequent deployments
✅ Technology diversity needed

Example: Netflix, Amazon, Uber
```

### Stay Monolithic When:
```
✅ Small team (< 10 developers)
✅ Simple application
✅ Startup/MVP phase
✅ Uniform scaling needs
✅ Limited resources

Example: Early-stage startups
```

---

## Service Decomposition

### By Business Capability
```
E-commerce System:

User Management Service
- Registration
- Authentication
- Profile management

Product Catalog Service
- Product listing
- Search
- Inventory

Order Service
- Cart management
- Order placement
- Order tracking

Payment Service
- Payment processing
- Refunds
- Billing
```

### By Subdomain (DDD)
```
Bounded Contexts:

Identity Context
- Users, Roles, Permissions

Shopping Context
- Products, Cart, Wishlist

Fulfillment Context
- Orders, Shipping, Tracking

Billing Context
- Payments, Invoices, Subscriptions
```

---

## Communication Patterns

### Synchronous (REST/gRPC)
```python
# REST API call
import requests

def get_user(user_id):
    response = requests.get(f'http://user-service/users/{user_id}')
    return response.json()

def create_order(order_data):
    user = get_user(order_data['user_id'])  # Sync call
    # Process order
    
Pros: Simple, immediate response
Cons: Tight coupling, cascading failures
```

### Asynchronous (Message Queue)
```python
# Event-driven
def create_order(order_data):
    # Save order
    order = db.save(order_data)
    
    # Publish event
    event_bus.publish('order.created', {
        'order_id': order.id,
        'user_id': order.user_id
    })
    
    return order

# Other services subscribe
def on_order_created(event):
    send_confirmation_email(event['user_id'])
    update_inventory(event['order_id'])
    
Pros: Loose coupling, resilient
Cons: Eventual consistency, complexity
```

---

## Service Discovery

### Client-Side Discovery
```
Client → Service Registry (Consul/Eureka)
       → Get service instances
       → Call service directly

Pros: No extra hop
Cons: Client complexity
```

### Server-Side Discovery
```
Client → Load Balancer
       → Service Registry
       → Route to service

Pros: Simple client
Cons: Extra network hop

Example: Kubernetes Service
```

---

## API Gateway Pattern

### Purpose
```
Single entry point for all clients

Client → API Gateway → [Service 1, Service 2, Service 3]

Responsibilities:
- Routing
- Authentication
- Rate limiting
- Request/response transformation
- Caching
- Load balancing
```

### Implementation
```python
# API Gateway (FastAPI)
from fastapi import FastAPI, Header
import httpx

app = FastAPI()

@app.get("/api/users/{user_id}")
async def get_user(user_id: int, token: str = Header()):
    # Authentication
    if not verify_token(token):
        return {"error": "Unauthorized"}
    
    # Rate limiting
    if not check_rate_limit(token):
        return {"error": "Rate limit exceeded"}
    
    # Route to service
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"http://user-service:8001/users/{user_id}"
        )
        return response.json()
```

---

## Data Management

### Database per Service
```
User Service → User DB
Order Service → Order DB
Payment Service → Payment DB

Pros:
✅ Loose coupling
✅ Independent scaling
✅ Technology choice

Cons:
❌ No ACID transactions
❌ Data duplication
❌ Complex queries
```

### Saga Pattern (Distributed Transactions)
```python
# Choreography-based Saga
def create_order(order_data):
    # Step 1: Create order
    order = order_service.create(order_data)
    event_bus.publish('order.created', order)
    
    # Step 2: Reserve inventory (async)
    @subscribe('order.created')
    def reserve_inventory(order):
        try:
            inventory_service.reserve(order.items)
            event_bus.publish('inventory.reserved', order)
        except:
            event_bus.publish('inventory.failed', order)
    
    # Step 3: Process payment (async)
    @subscribe('inventory.reserved')
    def process_payment(order):
        try:
            payment_service.charge(order.total)
            event_bus.publish('payment.completed', order)
        except:
            event_bus.publish('payment.failed', order)
            # Compensate: Release inventory
            inventory_service.release(order.items)
```

---

## Circuit Breaker Pattern

### Purpose
Prevent cascading failures

### Implementation
```python
from enum import Enum
import time

class CircuitState(Enum):
    CLOSED = "closed"      # Normal operation
    OPEN = "open"          # Failing, reject requests
    HALF_OPEN = "half_open"  # Testing recovery

class CircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=60):
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.state = CircuitState.CLOSED
        self.last_failure_time = None
    
    def call(self, func, *args, **kwargs):
        if self.state == CircuitState.OPEN:
            if time.time() - self.last_failure_time > self.timeout:
                self.state = CircuitState.HALF_OPEN
            else:
                raise Exception("Circuit breaker is OPEN")
        
        try:
            result = func(*args, **kwargs)
            self.on_success()
            return result
        except Exception as e:
            self.on_failure()
            raise e
    
    def on_success(self):
        self.failure_count = 0
        self.state = CircuitState.CLOSED
    
    def on_failure(self):
        self.failure_count += 1
        self.last_failure_time = time.time()
        
        if self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN

# Usage
breaker = CircuitBreaker()

def get_user(user_id):
    return breaker.call(
        lambda: requests.get(f'http://user-service/users/{user_id}')
    )
```

---

## Service Mesh

### What is Service Mesh?
```
Infrastructure layer for service-to-service communication

Features:
- Load balancing
- Service discovery
- Circuit breaking
- Retries
- Timeouts
- Distributed tracing
- Metrics collection

Popular: Istio, Linkerd, Consul
```

### Architecture
```
Service A → Sidecar Proxy → Sidecar Proxy → Service B
            (Envoy)          (Envoy)

Control Plane (Istio):
- Configuration
- Service discovery
- Certificate management
```

---

## Monitoring & Observability

### Three Pillars

#### 1. Metrics
```python
from prometheus_client import Counter, Histogram

request_count = Counter('requests_total', 'Total requests')
request_duration = Histogram('request_duration_seconds', 'Request duration')

@app.get("/users/{user_id}")
def get_user(user_id: int):
    request_count.inc()
    with request_duration.time():
        return db.get_user(user_id)
```

#### 2. Logs
```python
import logging
import json

logger = logging.getLogger(__name__)

def get_user(user_id: int, request_id: str):
    logger.info(json.dumps({
        "event": "get_user",
        "user_id": user_id,
        "request_id": request_id,
        "timestamp": time.time()
    }))
```

#### 3. Traces
```python
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

def get_user(user_id: int):
    with tracer.start_as_current_span("get_user"):
        user = db.get_user(user_id)
        
        with tracer.start_as_current_span("get_orders"):
            orders = order_service.get_orders(user_id)
        
        return {"user": user, "orders": orders}
```

---

## Deployment Strategies

### Blue-Green Deployment
```
Blue (v1.0) ← 100% traffic
Green (v2.0) ← 0% traffic

Switch:
Blue (v1.0) ← 0% traffic
Green (v2.0) ← 100% traffic

Rollback: Switch back to Blue
```

### Canary Deployment
```
v1.0 ← 90% traffic
v2.0 ← 10% traffic (canary)

Monitor canary:
- Error rate
- Latency
- Business metrics

If successful:
v1.0 ← 0% traffic
v2.0 ← 100% traffic
```

---

## Security

### Authentication & Authorization
```python
# JWT-based authentication
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer

security = HTTPBearer()

def verify_token(credentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY)
        return payload
    except:
        raise HTTPException(status_code=401)

@app.get("/users/{user_id}")
def get_user(user_id: int, user = Depends(verify_token)):
    if user['id'] != user_id and 'admin' not in user['roles']:
        raise HTTPException(status_code=403)
    return db.get_user(user_id)
```

### Service-to-Service Authentication
```
mTLS (Mutual TLS):
Service A → Certificate → Service B
         ← Certificate ←

Both services verify each other's identity
```

---

## Summary

### Key Takeaways
- Start monolithic, evolve to microservices
- Decompose by business capability
- Use async communication when possible
- Implement circuit breakers
- Monitor everything
- Automate deployment

### Microservices Checklist
- [ ] Service boundaries defined
- [ ] API gateway implemented
- [ ] Service discovery configured
- [ ] Circuit breakers in place
- [ ] Distributed tracing enabled
- [ ] Centralized logging
- [ ] Automated deployment
- [ ] Health checks configured

---

**Next**: [07_Security_Complete.md](./07_Security_Complete.md)
