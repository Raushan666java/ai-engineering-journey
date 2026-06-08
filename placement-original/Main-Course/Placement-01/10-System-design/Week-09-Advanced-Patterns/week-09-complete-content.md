# Week 9: Advanced Patterns - Complete Content

> **Master Service Mesh, API Gateway, GraphQL, Serverless, and modern architectural patterns**

## 📚 Week Overview

**Duration**: 7 days  
**Difficulty**: Expert  
**Prerequisites**: Weeks 1-8 completed

### Learning Objectives

By the end of this week, you will:
- ✅ Implement API Gateway patterns
- ✅ Understand Service Mesh architecture
- ✅ Build GraphQL APIs
- ✅ Master Backend for Frontend (BFF) pattern
- ✅ Design Serverless architectures
- ✅ Implement Strangler Fig pattern
- ✅ Master advanced microservices patterns

---

## 🎯 Day 1: API Gateway Pattern

### 1.1 API Gateway Implementation

```python
import asyncio
from typing import Dict, Callable, List
from dataclasses import dataclass
import time

@dataclass
class Route:
    """API Route definition"""
    path: str
    service_url: str
    methods: List[str]
    auth_required: bool = True
    rate_limit: int = 100  # requests per minute

class APIGateway:
    """Production API Gateway with routing, auth, rate limiting"""
    
    def __init__(self):
        self.routes: Dict[str, Route] = {}
        self.middleware: List[Callable] = []
        self.rate_limiter = RateLimiter()
        self.auth_service = AuthService("secret-key")
        self.circuit_breakers: Dict[str, CircuitBreaker] = {}
    
    def register_route(self, route: Route):
        """Register a route"""
        self.routes[route.path] = route
        # Create circuit breaker for service
        self.circuit_breakers[route.service_url] = CircuitBreaker(failure_threshold=5)
    
    def use_middleware(self, middleware: Callable):
        """Add middleware"""
        self.middleware.append(middleware)
    
    async def handle_request(self, method: str, path: str, headers: Dict, body: Dict) -> tuple:
        """Handle incoming request"""
        
        # 1. Find route
        route = self.routes.get(path)
        if not route:
            return {"error": "Not found"}, 404
        
        # 2. Check method
        if method not in route.methods:
            return {"error": "Method not allowed"}, 405
        
        # 3. Authentication
        if route.auth_required:
            token = headers.get("Authorization", "").replace("Bearer ", "")
            if not token:
                return {"error": "Unauthorized"}, 401
            
            try:
                user = self.auth_service.verify_token(token)
            except Exception as e:
                return {"error": str(e)}, 401
        
        # 4. Rate Limiting
        user_id = user.get("user_id", "anonymous") if route.auth_required else "anonymous"
        if not self.rate_limiter.allow_request(user_id, route.rate_limit):
            return {"error": "Rate limit exceeded"}, 429
        
        # 5. Execute middleware
        context = {"user": user if route.auth_required else None, "route": route}
        for middleware in self.middleware:
            result = await middleware(context, headers, body)
            if result:  # Middleware can short-circuit
                return result
        
        # 6. Forward to service with circuit breaker
        try:
            circuit_breaker = self.circuit_breakers[route.service_url]
            response = await circuit_breaker.call(
                self._forward_request,
                route.service_url,
                method,
                body
            )
            return response, 200
        except Exception as e:
            return {"error": f"Service unavailable: {str(e)}"}, 503
    
    async def _forward_request(self, service_url: str, method: str, body: Dict) -> Dict:
        """Forward request to microservice"""
        # Simulate service call
        await asyncio.sleep(0.05)
        return {
            "status": "success",
            "service": service_url,
            "method": method,
            "data": body
        }

class RateLimiter:
    """Simple rate limiter"""
    def __init__(self):
        self.requests = {}
    
    def allow_request(self, user_id: str, limit: int) -> bool:
        current_minute = int(time.time() / 60)
        key = f"{user_id}:{current_minute}"
        
        if key not in self.requests:
            self.requests[key] = 0
        
        if self.requests[key] < limit:
            self.requests[key] += 1
            return True
        return False

# Demo: API Gateway
async def demo_api_gateway():
    print("🚪 API Gateway Demo\n")
    
    gateway = APIGateway()
    
    # Register routes
    gateway.register_route(Route(
        path="/api/users",
        service_url="http://user-service:8001",
        methods=["GET", "POST"],
        auth_required=True,
        rate_limit=100
    ))
    
    gateway.register_route(Route(
        path="/api/products",
        service_url="http://product-service:8002",
        methods=["GET"],
        auth_required=False,
        rate_limit=1000
    ))
    
    # Logging middleware
    async def logging_middleware(context, headers, body):
        print(f"📝 Request to {context['route'].path}")
        return None  # Continue
    
    gateway.use_middleware(logging_middleware)
    
    # Test requests
    auth = AuthService("secret-key")
    token = auth.generate_access_token("user_123", ["user"])
    
    # Successful request
    print("1️⃣ Authenticated Request:")
    response, status = await gateway.handle_request(
        method="GET",
        path="/api/users",
        headers={"Authorization": f"Bearer {token}"},
        body={}
    )
    print(f"   Status: {status}")
    print(f"   Response: {response}\n")
    
    # Unauthenticated request to protected route
    print("2️⃣ Unauthenticated Request:")
    response, status = await gateway.handle_request(
        method="GET",
        path="/api/users",
        headers={},
        body={}
    )
    print(f"   Status: {status}")
    print(f"   Response: {response}\n")
    
    # Request to public route
    print("3️⃣ Public Route Request:")
    response, status = await gateway.handle_request(
        method="GET",
        path="/api/products",
        headers={},
        body={}
    )
    print(f"   Status: {status}")
    print(f"   Response: {response}")

asyncio.run(demo_api_gateway())
```

---

## 🎯 Day 2: Backend for Frontend (BFF)

### 2.1 BFF Pattern Implementation

```python
class BFFService:
    """Backend for Frontend - Different APIs for different clients"""
    
    def __init__(self):
        self.user_service = UserService()
        self.product_service = ProductService()
        self.order_service = OrderService()
        self.analytics_service = AnalyticsService()
    
    async def get_mobile_home(self, user_id: str) -> Dict:
        """Optimized API for mobile app home screen"""
        # Fetch data in parallel
        user, featured_products, recent_orders, notifications = await asyncio.gather(
            self.user_service.get_user(user_id),
            self.product_service.get_featured(limit=5),  # Fewer for mobile
            self.order_service.get_recent(user_id, limit=3),
            self.user_service.get_notifications(user_id, limit=5)
        )
        
        # Return mobile-optimized payload
        return {
            "user": {
                "name": user["name"],
                "avatar": user["avatar_thumbnail"],  # Small thumbnail
                "points": user["loyalty_points"]
            },
            "featured_products": [
                {
                    "id": p["id"],
                    "name": p["name"],
                    "price": p["price"],
                    "image": p["thumbnail_url"],  # Smaller images
                    "rating": p["rating"]
                }
                for p in featured_products
            ],
            "recent_orders": [
                {
                    "id": o["id"],
                    "status": o["status"],
                    "total": o["total"],
                    "date": o["created_at"]
                }
                for o in recent_orders
            ],
            "notifications_count": len(notifications)
        }
    
    async def get_web_home(self, user_id: str) -> Dict:
        """Rich API for web application"""
        # Fetch more data for desktop
        user, featured_products, categories, recent_orders, \
        recommendations, notifications = await asyncio.gather(
            self.user_service.get_user(user_id),
            self.product_service.get_featured(limit=20),  # More for web
            self.product_service.get_categories(),
            self.order_service.get_recent(user_id, limit=10),
            self.product_service.get_recommendations(user_id),
            self.user_service.get_notifications(user_id, limit=20)
        )
        
        # Return web-optimized payload with more detail
        return {
            "user": user,  # Full user object
            "featured_products": featured_products,  # Full product details
            "categories": categories,
            "recent_orders": recent_orders,
            "recommendations": recommendations,
            "notifications": notifications,
            "analytics": await self.analytics_service.get_user_stats(user_id)
        }
    
    async def get_admin_dashboard(self, admin_id: str) -> Dict:
        """Admin-specific dashboard"""
        metrics, recent_users, flagged_orders, system_health = await asyncio.gather(
            self.analytics_service.get_business_metrics(),
            self.user_service.get_recent_signups(limit=50),
            self.order_service.get_flagged_orders(),
            self.analytics_service.get_system_health()
        )
        
        return {
            "metrics": metrics,
            "recent_users": recent_users,
            "flagged_orders": flagged_orders,
            "system_health": system_health
        }

# Mock services
class UserService:
    async def get_user(self, user_id: str):
        await asyncio.sleep(0.01)
        return {
            "id": user_id, "name": "John Doe", "email": "john@example.com",
            "avatar_thumbnail": "thumb.jpg", "loyalty_points": 1250
        }
    
    async def get_notifications(self, user_id: str, limit: int):
        await asyncio.sleep(0.01)
        return [{"id": i, "message": f"Notification {i}"} for i in range(limit)]
    
    async def get_recent_signups(self, limit: int):
        await asyncio.sleep(0.01)
        return [{"id": i, "name": f"User {i}"} for i in range(limit)]

class ProductService:
    async def get_featured(self, limit: int):
        await asyncio.sleep(0.02)
        return [
            {"id": i, "name": f"Product {i}", "price": 99.99, 
             "thumbnail_url": "thumb.jpg", "rating": 4.5}
            for i in range(limit)
        ]
    
    async def get_categories(self):
        await asyncio.sleep(0.01)
        return ["Electronics", "Clothing", "Home"]
    
    async def get_recommendations(self, user_id: str):
        await asyncio.sleep(0.015)
        return [{"id": i, "name": f"Recommended {i}"} for i in range(10)]

class OrderService:
    async def get_recent(self, user_id: str, limit: int):
        await asyncio.sleep(0.015)
        return [
            {"id": i, "status": "delivered", "total": 199.99, "created_at": "2025-10-20"}
            for i in range(limit)
        ]
    
    async def get_flagged_orders(self):
        await asyncio.sleep(0.01)
        return [{"id": i, "reason": "High value"} for i in range(5)]

class AnalyticsService:
    async def get_user_stats(self, user_id: str):
        await asyncio.sleep(0.01)
        return {"total_orders": 15, "total_spent": 2500}
    
    async def get_business_metrics(self):
        await asyncio.sleep(0.02)
        return {"revenue": 1000000, "orders": 5000, "users": 10000}
    
    async def get_system_health(self):
        await asyncio.sleep(0.01)
        return {"status": "healthy", "uptime": "99.9%"}

# Demo
async def demo_bff():
    print("📱 Backend for Frontend (BFF) Demo\n")
    
    bff = BFFService()
    
    # Mobile client
    print("1️⃣ Mobile App Home Screen:")
    start = time.time()
    mobile_data = await bff.get_mobile_home("user_123")
    print(f"   Response time: {(time.time() - start)*1000:.2f}ms")
    print(f"   Payload size: ~{len(str(mobile_data))} bytes")
    print(f"   Featured products: {len(mobile_data['featured_products'])}")
    
    # Web client
    print("\n2️⃣ Web Application Home:")
    start = time.time()
    web_data = await bff.get_web_home("user_123")
    print(f"   Response time: {(time.time() - start)*1000:.2f}ms")
    print(f"   Payload size: ~{len(str(web_data))} bytes")
    print(f"   Featured products: {len(web_data['featured_products'])}")
    
    # Admin client
    print("\n3️⃣ Admin Dashboard:")
    start = time.time()
    admin_data = await bff.get_admin_dashboard("admin_001")
    print(f"   Response time: {(time.time() - start)*1000:.2f}ms")
    print(f"   Metrics: {admin_data['metrics']}")

asyncio.run(demo_bff())
```

---

## 🎯 Day 3: GraphQL Federation

### 3.1 GraphQL Server

```python
from typing import Optional, List
from dataclasses import dataclass

@dataclass
class User:
    id: str
    name: str
    email: str

@dataclass
class Product:
    id: str
    name: str
    price: float
    seller_id: str

@dataclass
class Order:
    id: str
    user_id: str
    product_ids: List[str]
    total: float

class GraphQLResolver:
    """GraphQL resolver with federation"""
    
    def __init__(self):
        # Mock data stores
        self.users = {
            "1": User("1", "Alice", "alice@example.com"),
            "2": User("2", "Bob", "bob@example.com")
        }
        self.products = {
            "1": Product("1", "Laptop", 999.99, "1"),
            "2": Product("2", "Mouse", 29.99, "1"),
            "3": Product("3", "Keyboard", 79.99, "2")
        }
        self.orders = {
            "1": Order("1", "1", ["1", "2"], 1029.98),
            "2": Order("2", "2", ["3"], 79.99)
        }
    
    # Query resolvers
    def get_user(self, user_id: str) -> Optional[User]:
        """Resolve: user(id: String!): User"""
        return self.users.get(user_id)
    
    def get_product(self, product_id: str) -> Optional[Product]:
        """Resolve: product(id: String!): Product"""
        return self.products.get(product_id)
    
    def get_order(self, order_id: str) -> Optional[Order]:
        """Resolve: order(id: String!): Order"""
        return self.orders.get(order_id)
    
    def search_products(self, query: str, min_price: float = 0, max_price: float = float('inf')) -> List[Product]:
        """Resolve: searchProducts(query: String!, minPrice: Float, maxPrice: Float): [Product]"""
        results = []
        for product in self.products.values():
            if query.lower() in product.name.lower():
                if min_price <= product.price <= max_price:
                    results.append(product)
        return results
    
    # Nested resolvers (GraphQL auto-resolves relationships)
    def resolve_order_user(self, order: Order) -> Optional[User]:
        """Resolve: Order.user: User"""
        return self.get_user(order.user_id)
    
    def resolve_order_products(self, order: Order) -> List[Product]:
        """Resolve: Order.products: [Product]"""
        return [self.get_product(pid) for pid in order.product_ids]
    
    def resolve_product_seller(self, product: Product) -> Optional[User]:
        """Resolve: Product.seller: User"""
        return self.get_user(product.seller_id)
    
    # Mutation resolvers
    def create_order(self, user_id: str, product_ids: List[str]) -> Order:
        """Resolve: createOrder(userId: String!, productIds: [String!]!): Order"""
        total = sum(
            self.products[pid].price 
            for pid in product_ids 
            if pid in self.products
        )
        order_id = str(len(self.orders) + 1)
        order = Order(order_id, user_id, product_ids, total)
        self.orders[order_id] = order
        return order

# GraphQL Schema (SDL)
GRAPHQL_SCHEMA = """
type User {
  id: ID!
  name: String!
  email: String!
}

type Product {
  id: ID!
  name: String!
  price: Float!
  seller: User!
}

type Order {
  id: ID!
  user: User!
  products: [Product!]!
  total: Float!
}

type Query {
  user(id: ID!): User
  product(id: ID!): Product
  order(id: ID!): Order
  searchProducts(query: String!, minPrice: Float, maxPrice: Float): [Product!]!
}

type Mutation {
  createOrder(userId: ID!, productIds: [ID!]!): Order!
}
"""

# Demo: GraphQL queries
def demo_graphql():
    print("🔷 GraphQL API Demo\n")
    
    resolver = GraphQLResolver()
    
    # Query 1: Get user with nested data
    print("1️⃣ Query: Get user")
    user = resolver.get_user("1")
    print(f"   {user}\n")
    
    # Query 2: Search products
    print("2️⃣ Query: Search products")
    products = resolver.search_products("Laptop", min_price=0, max_price=1000)
    for product in products:
        seller = resolver.resolve_product_seller(product)
        print(f"   {product.name} - ${product.price} (Seller: {seller.name})")
    
    # Query 3: Get order with nested user and products
    print("\n3️⃣ Query: Get order with nested data")
    order = resolver.get_order("1")
    user = resolver.resolve_order_user(order)
    products = resolver.resolve_order_products(order)
    print(f"   Order {order.id}")
    print(f"   User: {user.name}")
    print(f"   Products: {[p.name for p in products]}")
    print(f"   Total: ${order.total}")
    
    # Mutation: Create order
    print("\n4️⃣ Mutation: Create new order")
    new_order = resolver.create_order("2", ["1", "3"])
    print(f"   Created order {new_order.id}")
    print(f"   Total: ${new_order.total}")

demo_graphql()
```

---

## 🎯 Day 4: Service Mesh (Istio Concepts)

### 4.1 Service Mesh Sidecar Pattern

```python
class ServiceMeshSidecar:
    """Sidecar proxy for service mesh"""
    
    def __init__(self, service_name: str):
        self.service_name = service_name
        self.metrics = MetricsCollector()
        self.circuit_breaker = CircuitBreaker()
        self.retry_policy = RetryPolicy(max_retries=3)
    
    async def intercept_outbound(self, target_service: str, request: Dict) -> Dict:
        """Intercept outbound request"""
        # 1. Collect metrics
        start_time = time.time()
        
        # 2. Add tracing headers
        request["headers"] = request.get("headers", {})
        request["headers"]["x-trace-id"] = str(uuid.uuid4())
        request["headers"]["x-span-id"] = str(uuid.uuid4())
        
        # 3. Apply traffic policies
        try:
            # Retry with circuit breaker
            response = await self.retry_policy.execute(
                lambda: self.circuit_breaker.call(
                    self._make_request,
                    target_service,
                    request
                )
            )
            
            # Record success metrics
            duration = (time.time() - start_time) * 1000
            self.metrics.increment_counter("requests_total", labels={
                "source": self.service_name,
                "destination": target_service,
                "status": "success"
            })
            self.metrics.observe_histogram("request_duration_ms", duration)
            
            return response
            
        except Exception as e:
            # Record failure metrics
            self.metrics.increment_counter("requests_total", labels={
                "source": self.service_name,
                "destination": target_service,
                "status": "error"
            })
            raise e
    
    async def intercept_inbound(self, request: Dict) -> Dict:
        """Intercept inbound request"""
        # 1. Extract tracing context
        trace_id = request.get("headers", {}).get("x-trace-id")
        
        # 2. Enforce mTLS (mutual TLS)
        # In production: verify client certificate
        
        # 3. Apply rate limiting
        # In production: check rate limits
        
        # 4. Forward to application
        return request
    
    async def _make_request(self, target_service: str, request: Dict) -> Dict:
        """Make actual HTTP request"""
        await asyncio.sleep(0.01)  # Simulate network call
        return {"status": "success", "data": f"Response from {target_service}"}

# Demo: Service Mesh
async def demo_service_mesh():
    print("🕸️  Service Mesh Sidecar Demo\n")
    
    # Create sidecars for two services
    order_sidecar = ServiceMeshSidecar("order-service")
    payment_sidecar = ServiceMeshSidecar("payment-service")
    
    # Order service calls payment service
    print("1️⃣ Order Service → Payment Service:")
    request = {
        "method": "POST",
        "body": {"amount": 99.99, "currency": "USD"}
    }
    
    response = await order_sidecar.intercept_outbound("payment-service", request)
    print(f"   Response: {response}")
    print(f"   Metrics: {order_sidecar.metrics.get_summary()}")

asyncio.run(demo_service_mesh())
```

---

## 🎯 Day 5: Serverless Architecture

### 5.1 Serverless Function Pattern

```python
from typing import Callable
import json

class ServerlessFunction:
    """Serverless function wrapper"""
    
    def __init__(self, handler: Callable):
        self.handler = handler
        self.metrics = MetricsCollector()
    
    async def invoke(self, event: Dict, context: Dict) -> Dict:
        """Invoke function with AWS Lambda-like interface"""
        start_time = time.time()
        
        try:
            # Parse event
            body = json.loads(event.get("body", "{}"))
            headers = event.get("headers", {})
            query_params = event.get("queryStringParameters", {})
            
            # Invoke handler
            result = await self.handler(body, headers, query_params, context)
            
            # Record metrics
            duration = (time.time() - start_time) * 1000
            self.metrics.increment_counter("invocations", labels={"status": "success"})
            self.metrics.observe_histogram("duration_ms", duration)
            
            # Return response
            return {
                "statusCode": 200,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps(result)
            }
            
        except Exception as e:
            # Record error
            duration = (time.time() - start_time) * 1000
            self.metrics.increment_counter("invocations", labels={"status": "error"})
            self.metrics.observe_histogram("duration_ms", duration)
            
            return {
                "statusCode": 500,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"error": str(e)})
            }

# Example serverless functions
async def create_user_handler(body: Dict, headers: Dict, query: Dict, context: Dict) -> Dict:
    """Create user function"""
    name = body.get("name")
    email = body.get("email")
    
    # Simulate database write
    await asyncio.sleep(0.01)
    
    user_id = f"user_{int(time.time())}"
    return {
        "user_id": user_id,
        "name": name,
        "email": email,
        "created_at": time.time()
    }

async def process_payment_handler(body: Dict, headers: Dict, query: Dict, context: Dict) -> Dict:
    """Process payment function"""
    amount = body.get("amount")
    currency = body.get("currency", "USD")
    
    # Simulate payment processing
    await asyncio.sleep(0.02)
    
    return {
        "payment_id": f"pay_{int(time.time())}",
        "amount": amount,
        "currency": currency,
        "status": "completed"
    }

# Demo: Serverless functions
async def demo_serverless():
    print("⚡ Serverless Functions Demo\n")
    
    # Create functions
    create_user_fn = ServerlessFunction(create_user_handler)
    process_payment_fn = ServerlessFunction(process_payment_handler)
    
    # Invoke create user
    print("1️⃣ Invoke: Create User")
    event = {
        "body": json.dumps({"name": "Alice", "email": "alice@example.com"}),
        "headers": {"Authorization": "Bearer token123"}
    }
    context = {"request_id": "req_123", "function_name": "create-user"}
    
    response = await create_user_fn.invoke(event, context)
    print(f"   Status: {response['statusCode']}")
    print(f"   Response: {response['body']}")
    
    # Invoke process payment
    print("\n2️⃣ Invoke: Process Payment")
    event = {
        "body": json.dumps({"amount": 99.99, "currency": "USD"})
    }
    context = {"request_id": "req_124", "function_name": "process-payment"}
    
    response = await process_payment_fn.invoke(event, context)
    print(f"   Status: {response['statusCode']}")
    print(f"   Response: {response['body']}")
    
    # Show metrics
    print("\n3️⃣ Function Metrics:")
    print(f"   Create User: {create_user_fn.metrics.get_summary()}")
    print(f"   Process Payment: {process_payment_fn.metrics.get_summary()}")

asyncio.run(demo_serverless())
```

---

## 🎯 Day 6: Strangler Fig Pattern

### 6.1 Gradual Migration

```python
class StranglerFacade:
    """Facade for migrating from legacy to new system"""
    
    def __init__(self):
        self.legacy_system = LegacySystem()
        self.new_system = NewSystem()
        self.migration_config = {
            "users": {"percentage": 30, "migrated": False},
            "orders": {"percentage": 50, "migrated": False},
            "products": {"percentage": 100, "migrated": True}
        }
    
    async def handle_request(self, entity: str, operation: str, data: Dict) -> Dict:
        """Route request to legacy or new system based on migration status"""
        config = self.migration_config.get(entity, {"percentage": 0, "migrated": False})
        
        # Check if fully migrated
        if config["migrated"]:
            print(f"   ✅ Routing to NEW system (100% migrated)")
            return await self.new_system.handle(entity, operation, data)
        
        # Check migration percentage
        import random
        if random.random() * 100 < config["percentage"]:
            print(f"   🔄 Routing to NEW system ({config['percentage']}% traffic)")
            return await self.new_system.handle(entity, operation, data)
        else:
            print(f"   🕰️  Routing to LEGACY system")
            return await self.legacy_system.handle(entity, operation, data)
    
    def update_migration_percentage(self, entity: str, percentage: int):
        """Gradually increase traffic to new system"""
        if entity in self.migration_config:
            self.migration_config[entity]["percentage"] = percentage
            if percentage >= 100:
                self.migration_config[entity]["migrated"] = True

class LegacySystem:
    """Old monolithic system"""
    async def handle(self, entity: str, operation: str, data: Dict) -> Dict:
        await asyncio.sleep(0.05)  # Slower
        return {"source": "legacy", "entity": entity, "operation": operation, "data": data}

class NewSystem:
    """New microservices system"""
    async def handle(self, entity: str, operation: str, data: Dict) -> Dict:
        await asyncio.sleep(0.01)  # Faster
        return {"source": "new", "entity": entity, "operation": operation, "data": data}

# Demo: Strangler Fig pattern
async def demo_strangler_fig():
    print("🌱 Strangler Fig Pattern Demo\n")
    
    facade = StranglerFacade()
    
    # Test with different migration percentages
    print("1️⃣ Users (30% migrated):")
    for i in range(5):
        response = await facade.handle_request("users", "create", {"name": f"User {i}"})
    
    print("\n2️⃣ Orders (50% migrated):")
    for i in range(5):
        response = await facade.handle_request("orders", "create", {"total": 99.99})
    
    print("\n3️⃣ Products (100% migrated):")
    for i in range(5):
        response = await facade.handle_request("products", "create", {"name": f"Product {i}"})
    
    # Increase migration percentage
    print("\n4️⃣ Increasing user migration to 70%:")
    facade.update_migration_percentage("users", 70)
    for i in range(5):
        response = await facade.handle_request("users", "create", {"name": f"User {i}"})

asyncio.run(demo_strangler_fig())
```

---

## 🎯 Day 7: Advanced Patterns Summary

### Pattern Comparison

```python
def print_pattern_comparison():
    patterns = [
        {
            "name": "API Gateway",
            "use_case": "Single entry point for microservices",
            "benefits": ["Centralized auth", "Rate limiting", "Request routing"],
            "challenges": ["Single point of failure", "Latency overhead"]
        },
        {
            "name": "BFF",
            "use_case": "Client-specific APIs (mobile, web, admin)",
            "benefits": ["Optimized payloads", "Reduced round trips", "Client autonomy"],
            "challenges": ["Code duplication", "More services to maintain"]
        },
        {
            "name": "GraphQL",
            "use_case": "Flexible data fetching",
            "benefits": ["No over/under-fetching", "Strong typing", "Single endpoint"],
            "challenges": ["Query complexity", "Caching harder", "Learning curve"]
        },
        {
            "name": "Service Mesh",
            "use_case": "Service-to-service communication",
            "benefits": ["Observability", "Traffic control", "Security (mTLS)"],
            "challenges": ["Complexity", "Resource overhead", "Debugging"]
        },
        {
            "name": "Serverless",
            "use_case": "Event-driven, sporadic workloads",
            "benefits": ["Auto-scaling", "Pay-per-use", "No server management"],
            "challenges": ["Cold starts", "Vendor lock-in", "Debugging"]
        },
        {
            "name": "Strangler Fig",
            "use_case": "Migrating from legacy to new system",
            "benefits": ["Gradual migration", "Low risk", "Can roll back"],
            "challenges": ["Dual maintenance", "Complexity", "Long timeline"]
        }
    ]
    
    print("📊 Advanced Patterns Comparison\n")
    for pattern in patterns:
        print(f"🔹 {pattern['name']}")
        print(f"   Use Case: {pattern['use_case']}")
        print(f"   Benefits: {', '.join(pattern['benefits'])}")
        print(f"   Challenges: {', '.join(pattern['challenges'])}\n")

print_pattern_comparison()
```

---

## 📚 Week 9 Summary

### What You've Mastered

✅ **API Gateway** - Routing, auth, rate limiting  
✅ **BFF Pattern** - Client-specific optimizations  
✅ **GraphQL** - Flexible data fetching  
✅ **Service Mesh** - Sidecar, observability, mTLS  
✅ **Serverless** - Event-driven functions  
✅ **Strangler Fig** - Legacy migration  

### When to Use Each Pattern

| Pattern | Best For |
|---------|----------|
| API Gateway | Microservices entry point |
| BFF | Multiple client types (mobile, web) |
| GraphQL | Complex data requirements |
| Service Mesh | Large microservices architecture |
| Serverless | Event-driven, variable load |
| Strangler Fig | Legacy system migration |

### Next: Week 10 - Interview Mastery! 🎯

**Congratulations on completing Week 9! 🎉**
