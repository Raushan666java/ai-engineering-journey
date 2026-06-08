# Week 3: Day 3-7 - GraphQL, Microservices & API Gateway

## 🎯 Day 3: GraphQL Fundamentals

### 3.1 Introduction to GraphQL

GraphQL is a query language for APIs that provides a complete and understandable description of the data in your API.

#### Key Benefits

1. **Precise Data Fetching** - Request exactly what you need
2. **Single Request** - Get multiple resources in one query
3. **Strongly Typed** - Type system defines API capabilities
4. **Introspection** - Query the schema for documentation
5. **Real-time Updates** - Built-in subscriptions

#### GraphQL vs REST

| Feature | REST | GraphQL |
|---------|------|---------|
| Data Fetching | Multiple endpoints | Single endpoint |
| Over-fetching | Common | Eliminated |
| Under-fetching | Requires multiple requests | Single query |
| Versioning | URL/Header versioning | Schema evolution |
| Documentation | Swagger/OpenAPI | Self-documenting |
| Caching | HTTP caching | Custom caching |

### 3.2 GraphQL Schema Definition

```graphql
# Type Definitions
type User {
  id: ID!
  username: String!
  email: String!
  fullName: String
  posts: [Post!]!
  followers: [User!]!
  following: [User!]!
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
  likes: Int!
  tags: [String!]!
  published: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Comment {
  id: ID!
  content: String!
  author: User!
  post: Post!
  createdAt: DateTime!
}

# Custom Scalars
scalar DateTime
scalar JSON

# Input Types
input CreatePostInput {
  title: String!
  content: String!
  tags: [String!]
  published: Boolean = false
}

input UpdatePostInput {
  title: String
  content: String
  tags: [String!]
  published: Boolean
}

input PostFilters {
  authorId: ID
  tags: [String!]
  published: Boolean
  dateFrom: DateTime
  dateTo: DateTime
}

# Enums
enum SortOrder {
  ASC
  DESC
}

enum PostSortField {
  CREATED_AT
  UPDATED_AT
  LIKES
  TITLE
}

# Query Root Type
type Query {
  # User queries
  user(id: ID!): User
  users(limit: Int = 10, offset: Int = 0): [User!]!
  me: User
  
  # Post queries
  post(id: ID!): Post
  posts(
    filters: PostFilters
    sortBy: PostSortField = CREATED_AT
    sortOrder: SortOrder = DESC
    limit: Int = 20
    offset: Int = 0
  ): PostConnection!
  
  # Search
  search(query: String!, type: SearchType!): [SearchResult!]!
}

# Mutation Root Type
type Mutation {
  # User mutations
  register(input: RegisterInput!): AuthPayload!
  login(input: LoginInput!): AuthPayload!
  updateProfile(input: UpdateProfileInput!): User!
  
  # Post mutations
  createPost(input: CreatePostInput!): Post!
  updatePost(id: ID!, input: UpdatePostInput!): Post!
  deletePost(id: ID!): Boolean!
  likePost(id: ID!): Post!
  unlikePost(id: ID!): Post!
  
  # Comment mutations
  addComment(postId: ID!, content: String!): Comment!
  deleteComment(id: ID!): Boolean!
  
  # Social mutations
  followUser(userId: ID!): User!
  unfollowUser(userId: ID!): User!
}

# Subscription Root Type
type Subscription {
  postCreated: Post!
  postUpdated(postId: ID!): Post!
  commentAdded(postId: ID!): Comment!
  notificationReceived: Notification!
}

# Connection Types (for pagination)
type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type PostEdge {
  node: Post!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

# Union Types
union SearchResult = User | Post | Comment

# Interface
interface Node {
  id: ID!
}

# Authentication
type AuthPayload {
  token: String!
  user: User!
}

input RegisterInput {
  username: String!
  email: String!
  password: String!
  fullName: String
}

input LoginInput {
  email: String!
  password: String!
}
```

### 3.3 GraphQL Queries

#### Basic Query

```graphql
query GetUser {
  user(id: "123") {
    id
    username
    email
    fullName
  }
}
```

#### Nested Query

```graphql
query GetUserWithPosts {
  user(id: "123") {
    id
    username
    posts {
      id
      title
      content
      likes
      comments {
        id
        content
        author {
          username
        }
      }
    }
  }
}
```

#### Query with Variables

```graphql
query GetPosts($filters: PostFilters, $limit: Int) {
  posts(filters: $filters, limit: $limit) {
    edges {
      node {
        id
        title
        author {
          username
        }
        tags
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

# Variables
{
  "filters": {
    "published": true,
    "tags": ["technology", "tutorial"]
  },
  "limit": 10
}
```

#### Aliases and Fragments

```graphql
query GetMultipleUsers {
  john: user(id: "1") {
    ...userFields
  }
  jane: user(id: "2") {
    ...userFields
  }
}

fragment userFields on User {
  id
  username
  email
  posts {
    id
    title
  }
}
```

### 3.4 GraphQL Mutations

```graphql
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    content
    author {
      username
    }
    createdAt
  }
}

# Variables
{
  "input": {
    "title": "Getting Started with GraphQL",
    "content": "GraphQL is amazing...",
    "tags": ["graphql", "api", "tutorial"],
    "published": true
  }
}
```

### 3.5 GraphQL Subscriptions

```graphql
subscription OnPostCreated {
  postCreated {
    id
    title
    author {
      username
    }
  }
}

subscription OnCommentAdded($postId: ID!) {
  commentAdded(postId: $postId) {
    id
    content
    author {
      username
    }
  }
}
```

### 3.6 Implementation with Python & Strawberry

```python
import strawberry
from typing import List, Optional
from datetime import datetime
from strawberry.types import Info

# Types
@strawberry.type
class User:
    id: strawberry.ID
    username: str
    email: str
    full_name: Optional[str] = None
    created_at: datetime
    
    @strawberry.field
    async def posts(self, info: Info) -> List["Post"]:
        # Fetch user's posts from database
        return await get_user_posts(self.id)
    
    @strawberry.field
    async def followers(self, info: Info) -> List["User"]:
        return await get_user_followers(self.id)

@strawberry.type
class Post:
    id: strawberry.ID
    title: str
    content: str
    author_id: strawberry.ID
    tags: List[str]
    published: bool
    likes: int
    created_at: datetime
    updated_at: datetime
    
    @strawberry.field
    async def author(self, info: Info) -> User:
        return await get_user_by_id(self.author_id)
    
    @strawberry.field
    async def comments(self, info: Info) -> List["Comment"]:
        return await get_post_comments(self.id)

@strawberry.type
class Comment:
    id: strawberry.ID
    content: str
    post_id: strawberry.ID
    author_id: strawberry.ID
    created_at: datetime
    
    @strawberry.field
    async def author(self, info: Info) -> User:
        return await get_user_by_id(self.author_id)
    
    @strawberry.field
    async def post(self, info: Info) -> Post:
        return await get_post_by_id(self.post_id)

# Input Types
@strawberry.input
class CreatePostInput:
    title: str
    content: str
    tags: List[str]
    published: bool = False

@strawberry.input
class UpdatePostInput:
    title: Optional[str] = None
    content: Optional[str] = None
    tags: Optional[List[str]] = None
    published: Optional[bool] = None

@strawberry.input
class PostFilters:
    author_id: Optional[strawberry.ID] = None
    tags: Optional[List[str]] = None
    published: Optional[bool] = None

# Query Resolvers
@strawberry.type
class Query:
    @strawberry.field
    async def user(self, id: strawberry.ID) -> Optional[User]:
        return await get_user_by_id(id)
    
    @strawberry.field
    async def users(
        self,
        limit: int = 10,
        offset: int = 0
    ) -> List[User]:
        return await get_users(limit, offset)
    
    @strawberry.field
    async def post(self, id: strawberry.ID) -> Optional[Post]:
        return await get_post_by_id(id)
    
    @strawberry.field
    async def posts(
        self,
        filters: Optional[PostFilters] = None,
        limit: int = 20,
        offset: int = 0
    ) -> List[Post]:
        return await get_posts(filters, limit, offset)
    
    @strawberry.field
    async def me(self, info: Info) -> Optional[User]:
        user_id = info.context.get("user_id")
        if not user_id:
            return None
        return await get_user_by_id(user_id)

# Mutation Resolvers
@strawberry.type
class Mutation:
    @strawberry.mutation
    async def create_post(
        self,
        info: Info,
        input: CreatePostInput
    ) -> Post:
        user_id = info.context.get("user_id")
        if not user_id:
            raise Exception("Unauthorized")
        
        post = await create_post_in_db(
            author_id=user_id,
            title=input.title,
            content=input.content,
            tags=input.tags,
            published=input.published
        )
        return post
    
    @strawberry.mutation
    async def update_post(
        self,
        info: Info,
        id: strawberry.ID,
        input: UpdatePostInput
    ) -> Post:
        user_id = info.context.get("user_id")
        post = await get_post_by_id(id)
        
        if not post or post.author_id != user_id:
            raise Exception("Unauthorized")
        
        updated_post = await update_post_in_db(id, input)
        return updated_post
    
    @strawberry.mutation
    async def delete_post(
        self,
        info: Info,
        id: strawberry.ID
    ) -> bool:
        user_id = info.context.get("user_id")
        post = await get_post_by_id(id)
        
        if not post or post.author_id != user_id:
            raise Exception("Unauthorized")
        
        return await delete_post_from_db(id)
    
    @strawberry.mutation
    async def like_post(
        self,
        info: Info,
        id: strawberry.ID
    ) -> Post:
        user_id = info.context.get("user_id")
        await add_like_to_post(post_id=id, user_id=user_id)
        return await get_post_by_id(id)

# Subscription Resolvers
@strawberry.type
class Subscription:
    @strawberry.subscription
    async def post_created(self) -> Post:
        # Subscribe to Redis pub/sub or message queue
        async for post in subscribe_to_post_created():
            yield post
    
    @strawberry.subscription
    async def comment_added(self, post_id: strawberry.ID) -> Comment:
        async for comment in subscribe_to_comments(post_id):
            yield comment

# Create GraphQL schema
schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
    subscription=Subscription
)

# FastAPI Integration
from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter

app = FastAPI()

graphql_app = GraphQLRouter(
    schema,
    context_getter=get_context
)

app.include_router(graphql_app, prefix="/graphql")

async def get_context() -> dict:
    # Get user from JWT token
    return {"user_id": "123"}
```

### 3.7 GraphQL Best Practices

#### 1. Use Relay Cursor Connections

```graphql
type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
}

type PostEdge {
  cursor: String!
  node: Post!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}
```

#### 2. Implement DataLoader for N+1 Problem

```python
from strawberry.dataloader import DataLoader

async def load_users(keys: List[int]) -> List[User]:
    # Batch load users in single query
    users = await db.query(User).filter(User.id.in_(keys)).all()
    user_map = {user.id: user for user in users}
    return [user_map.get(key) for key in keys]

user_loader = DataLoader(load_fn=load_users)

@strawberry.field
async def author(self, info: Info) -> User:
    return await info.context["user_loader"].load(self.author_id)
```

#### 3. Error Handling

```python
from strawberry.types import Info
import strawberry

@strawberry.type
class Error:
    message: str
    code: str
    field: Optional[str] = None

@strawberry.type
class PostResult:
    post: Optional[Post] = None
    errors: List[Error] = strawberry.field(default_factory=list)

@strawberry.mutation
async def create_post(
    self,
    info: Info,
    input: CreatePostInput
) -> PostResult:
    try:
        # Validation
        if len(input.title) < 5:
            return PostResult(errors=[
                Error(
                    message="Title must be at least 5 characters",
                    code="VALIDATION_ERROR",
                    field="title"
                )
            ])
        
        post = await create_post_in_db(input)
        return PostResult(post=post)
        
    except Exception as e:
        return PostResult(errors=[
            Error(message=str(e), code="INTERNAL_ERROR")
        ])
```

---

## 🎯 Day 4-5: Microservices Architecture

### 4.1 Microservices Fundamentals

#### What are Microservices?

Microservices architecture structures an application as a collection of loosely coupled services that:
- Are independently deployable
- Are organized around business capabilities
- Can be written in different languages
- Use different data storage technologies
- Communicate via APIs

#### Monolith vs Microservices

**Monolithic Architecture:**
```
┌─────────────────────────────────────┐
│         Monolithic Application      │
│                                     │
│  ┌──────────┐  ┌──────────┐       │
│  │   UI     │  │ Business │       │
│  │  Layer   │  │  Logic   │       │
│  └──────────┘  └──────────┘       │
│                                     │
│  ┌──────────────────────────────┐  │
│  │     Data Access Layer        │  │
│  └──────────────────────────────┘  │
│                                     │
│  ┌──────────────────────────────┐  │
│  │      Single Database         │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

**Microservices Architecture:**
```
                ┌─────────────┐
                │ API Gateway │
                └──────┬──────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ┌────▼────┐    ┌───▼────┐    ┌───▼────┐
   │ User    │    │Product │    │ Order  │
   │Service  │    │Service │    │Service │
   └────┬────┘    └───┬────┘    └───┬────┘
        │             │              │
   ┌────▼────┐    ┌───▼────┐    ┌───▼────┐
   │User DB  │    │Product │    │Order   │
   │         │    │  DB    │    │  DB    │
   └─────────┘    └────────┘    └────────┘
```

### 4.2 Service Decomposition Strategies

#### 1. Decompose by Business Capability

```
E-Commerce System:
├── User Management Service
│   ├── Authentication
│   ├── Profile management
│   └── Preferences
├── Product Catalog Service
│   ├── Product listings
│   ├── Search
│   └── Categories
├── Inventory Service
│   ├── Stock management
│   ├── Warehouse operations
│   └── Suppliers
├── Order Management Service
│   ├── Order creation
│   ├── Order tracking
│   └── Order history
├── Payment Service
│   ├── Payment processing
│   ├── Refunds
│   └── Billing
└── Notification Service
    ├── Email
    ├── SMS
    └── Push notifications
```

#### 2. Decompose by Subdomain (DDD)

```
Core Domain:
├── Order Processing
├── Payment Processing
└── Inventory Management

Supporting Subdomains:
├── User Management
├── Notification Service
└── Reporting Service

Generic Subdomains:
├── Authentication
├── Logging
└── Monitoring
```

### 4.3 Microservice Communication Patterns

#### 1. Synchronous Communication (HTTP/REST)

```python
# Product Service
from fastapi import FastAPI, HTTPException
import httpx

app = FastAPI()

@app.get("/products/{product_id}")
async def get_product(product_id: int):
    return {"id": product_id, "name": "Product", "price": 99.99}

# Order Service - Calls Product Service
@app.post("/orders")
async def create_order(order_data: dict):
    product_id = order_data["product_id"]
    
    # Synchronous call to Product Service
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(
                f"http://product-service:8000/products/{product_id}",
                timeout=5.0
            )
            product = response.json()
        except httpx.TimeoutException:
            raise HTTPException(status_code=504, detail="Product service timeout")
        except httpx.HTTPError:
            raise HTTPException(status_code=503, detail="Product service unavailable")
    
    # Create order with product info
    order = {
        "id": 1,
        "product": product,
        "quantity": order_data["quantity"],
        "total": product["price"] * order_data["quantity"]
    }
    
    return order
```

#### 2. Asynchronous Communication (Message Queue)

```python
# Using RabbitMQ/Redis for async communication

# Order Service - Publishes event
import aio_pika
import json

async def publish_order_created_event(order_data: dict):
    connection = await aio_pika.connect_robust("amqp://localhost")
    channel = await connection.channel()
    
    exchange = await channel.declare_exchange(
        "orders",
        aio_pika.ExchangeType.TOPIC
    )
    
    message = aio_pika.Message(
        body=json.dumps(order_data).encode(),
        content_type="application/json"
    )
    
    await exchange.publish(
        message,
        routing_key="order.created"
    )
    
    await connection.close()

@app.post("/orders")
async def create_order(order_data: dict):
    order = create_order_in_db(order_data)
    
    # Publish event asynchronously
    await publish_order_created_event({
        "order_id": order["id"],
        "product_id": order["product_id"],
        "quantity": order["quantity"],
        "user_id": order["user_id"]
    })
    
    return order

# Notification Service - Subscribes to events
async def consume_order_events():
    connection = await aio_pika.connect_robust("amqp://localhost")
    channel = await connection.channel()
    
    exchange = await channel.declare_exchange(
        "orders",
        aio_pika.ExchangeType.TOPIC
    )
    
    queue = await channel.declare_queue("notification_queue", durable=True)
    await queue.bind(exchange, routing_key="order.*")
    
    async with queue.iterator() as queue_iter:
        async for message in queue_iter:
            async with message.process():
                order_data = json.loads(message.body)
                
                if message.routing_key == "order.created":
                    await send_order_confirmation_email(order_data)
                elif message.routing_key == "order.shipped":
                    await send_shipping_notification(order_data)

# Start consumer
import asyncio
asyncio.create_task(consume_order_events())
```

#### 3. Event Sourcing Pattern

```python
from typing import List
from datetime import datetime
from enum import Enum

class EventType(str, Enum):
    ORDER_CREATED = "order.created"
    ORDER_PAID = "order.paid"
    ORDER_SHIPPED = "order.shipped"
    ORDER_DELIVERED = "order.delivered"
    ORDER_CANCELLED = "order.cancelled"

class Event:
    def __init__(self, event_type: EventType, aggregate_id: str, data: dict):
        self.event_type = event_type
        self.aggregate_id = aggregate_id
        self.data = data
        self.timestamp = datetime.utcnow()
        self.version = 1

class EventStore:
    def __init__(self):
        self.events: List[Event] = []
    
    async def append(self, event: Event):
        """Append event to store"""
        self.events.append(event)
        await self.publish_event(event)
    
    async def get_events(self, aggregate_id: str) -> List[Event]:
        """Get all events for an aggregate"""
        return [e for e in self.events if e.aggregate_id == aggregate_id]
    
    async def publish_event(self, event: Event):
        """Publish event to message queue"""
        # Publish to RabbitMQ/Kafka
        pass

class OrderAggregate:
    def __init__(self, order_id: str):
        self.order_id = order_id
        self.status = None
        self.total = 0
        self.version = 0
    
    def apply_event(self, event: Event):
        """Apply event to update state"""
        if event.event_type == EventType.ORDER_CREATED:
            self.status = "created"
            self.total = event.data["total"]
        elif event.event_type == EventType.ORDER_PAID:
            self.status = "paid"
        elif event.event_type == EventType.ORDER_SHIPPED:
            self.status = "shipped"
        
        self.version += 1
    
    async def rebuild_from_events(self, events: List[Event]):
        """Rebuild aggregate state from events"""
        for event in events:
            self.apply_event(event)
    
    async def create_order(self, order_data: dict, event_store: EventStore):
        """Create order command"""
        event = Event(
            event_type=EventType.ORDER_CREATED,
            aggregate_id=self.order_id,
            data=order_data
        )
        
        self.apply_event(event)
        await event_store.append(event)

# Usage
event_store = EventStore()
order = OrderAggregate("order-123")

# Create order
await order.create_order({
    "product_id": "prod-456",
    "quantity": 2,
    "total": 199.98
}, event_store)

# Rebuild state from events
events = await event_store.get_events("order-123")
new_order_instance = OrderAggregate("order-123")
await new_order_instance.rebuild_from_events(events)
```

### 4.4 Service Mesh Pattern

#### What is a Service Mesh?

A service mesh is an infrastructure layer that handles service-to-service communication, providing:
- Load balancing
- Service discovery
- Circuit breaking
- Retry logic
- Observability
- Security (mTLS)

#### Popular Service Mesh Solutions

1. **Istio**
2. **Linkerd**
3. **Consul**

#### Example: Circuit Breaker Pattern

```python
from enum import Enum
from datetime import datetime, timedelta
from typing import Callable, Any

class CircuitState(Enum):
    CLOSED = "closed"      # Normal operation
    OPEN = "open"          # Failing, reject requests
    HALF_OPEN = "half_open"  # Testing if service recovered

class CircuitBreaker:
    def __init__(
        self,
        failure_threshold: int = 5,
        timeout: int = 60,
        expected_exception: Exception = Exception
    ):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.expected_exception = expected_exception
        
        self.failure_count = 0
        self.last_failure_time = None
        self.state = CircuitState.CLOSED
    
    def call(self, func: Callable, *args, **kwargs) -> Any:
        """Execute function through circuit breaker"""
        if self.state == CircuitState.OPEN:
            if self._should_attempt_reset():
                self.state = CircuitState.HALF_OPEN
            else:
                raise Exception("Circuit breaker is OPEN")
        
        try:
            result = func(*args, **kwargs)
            self._on_success()
            return result
        except self.expected_exception as e:
            self._on_failure()
            raise e
    
    def _on_success(self):
        """Handle successful call"""
        self.failure_count = 0
        self.state = CircuitState.CLOSED
    
    def _on_failure(self):
        """Handle failed call"""
        self.failure_count += 1
        self.last_failure_time = datetime.utcnow()
        
        if self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN
    
    def _should_attempt_reset(self) -> bool:
        """Check if enough time has passed to attempt reset"""
        return (
            self.last_failure_time and
            datetime.utcnow() - self.last_failure_time >= timedelta(seconds=self.timeout)
        )

# Usage
import httpx

circuit_breaker = CircuitBreaker(
    failure_threshold=3,
    timeout=30,
    expected_exception=httpx.HTTPError
)

async def call_external_service(product_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"http://product-service/products/{product_id}")
        return response.json()

@app.get("/products/{product_id}")
async def get_product(product_id: int):
    try:
        result = circuit_breaker.call(
            call_external_service,
            product_id
        )
        return result
    except Exception as e:
        # Fallback to cached data or return error
        return get_product_from_cache(product_id)
```

---

## 🎯 Day 6-7: API Gateway & Service Discovery

### 6.1 API Gateway Pattern

#### Purpose
- Single entry point for all clients
- Request routing
- Authentication and authorization
- Rate limiting
- Request/response transformation
- Caching
- Monitoring and logging

#### API Gateway Implementation

```python
from fastapi import FastAPI, Request, HTTPException, Depends
from fastapi.responses import JSONResponse
import httpx
from typing import Dict, Optional
import redis
import jwt
from datetime import datetime, timedelta

app = FastAPI(title="API Gateway")

# Service registry
SERVICES = {
    "user": "http://user-service:8001",
    "product": "http://product-service:8002",
    "order": "http://order-service:8003",
    "payment": "http://payment-service:8004"
}

# Redis for caching
redis_client = redis.Redis(host='localhost', port=6379, db=0)

# Rate limiting storage
rate_limit_storage: Dict[str, list] = {}

# Middleware for authentication
async def verify_token(request: Request):
    """Verify JWT token"""
    auth_header = request.headers.get("Authorization")
    
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid token")
    
    token = auth_header.split(" ")[1]
    
    try:
        payload = jwt.decode(token, "SECRET_KEY", algorithms=["HS256"])
        request.state.user = payload
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

# Rate limiting middleware
def rate_limit(max_requests: int = 100, window: int = 60):
    """Rate limiting decorator"""
    def decorator(func):
        async def wrapper(request: Request, *args, **kwargs):
            # Get client identifier (IP or user ID)
            client_id = request.client.host
            if hasattr(request.state, "user"):
                client_id = request.state.user.get("user_id", client_id)
            
            current_time = datetime.utcnow()
            key = f"rate_limit:{client_id}"
            
            # Get request history
            if key not in rate_limit_storage:
                rate_limit_storage[key] = []
            
            # Remove old requests outside window
            rate_limit_storage[key] = [
                timestamp for timestamp in rate_limit_storage[key]
                if current_time - timestamp < timedelta(seconds=window)
            ]
            
            # Check if limit exceeded
            if len(rate_limit_storage[key]) >= max_requests:
                raise HTTPException(
                    status_code=429,
                    detail="Rate limit exceeded"
                )
            
            # Add current request
            rate_limit_storage[key].append(current_time)
            
            return await func(request, *args, **kwargs)
        
        return wrapper
    return decorator

# Request routing
async def route_request(
    service_name: str,
    path: str,
    method: str = "GET",
    body: Optional[dict] = None,
    headers: Optional[dict] = None
):
    """Route request to appropriate microservice"""
    if service_name not in SERVICES:
        raise HTTPException(status_code=404, detail="Service not found")
    
    service_url = SERVICES[service_name]
    url = f"{service_url}{path}"
    
    async with httpx.AsyncClient() as client:
        try:
            if method == "GET":
                response = await client.get(url, headers=headers, timeout=10.0)
            elif method == "POST":
                response = await client.post(url, json=body, headers=headers, timeout=10.0)
            elif method == "PUT":
                response = await client.put(url, json=body, headers=headers, timeout=10.0)
            elif method == "DELETE":
                response = await client.delete(url, headers=headers, timeout=10.0)
            else:
                raise HTTPException(status_code=405, detail="Method not allowed")
            
            return response.json()
        
        except httpx.TimeoutException:
            raise HTTPException(status_code=504, detail=f"{service_name} service timeout")
        except httpx.HTTPError as e:
            raise HTTPException(status_code=503, detail=f"{service_name} service unavailable")

# Gateway endpoints
@app.get("/api/users/{user_id}")
@rate_limit(max_requests=100, window=60)
async def get_user(user_id: int, request: Request, user=Depends(verify_token)):
    """Route to user service"""
    return await route_request(
        service_name="user",
        path=f"/users/{user_id}",
        method="GET",
        headers={"Authorization": request.headers.get("Authorization")}
    )

@app.get("/api/products")
async def get_products(request: Request):
    """Route to product service with caching"""
    cache_key = "products:all"
    
    # Check cache
    cached = redis_client.get(cache_key)
    if cached:
        return JSONResponse(content=cached.decode())
    
    # Fetch from service
    result = await route_request(
        service_name="product",
        path="/products",
        method="GET"
    )
    
    # Cache result
    redis_client.setex(cache_key, 300, str(result))  # Cache for 5 minutes
    
    return result

@app.post("/api/orders")
@rate_limit(max_requests=10, window=60)
async def create_order(
    request: Request,
    order_data: dict,
    user=Depends(verify_token)
):
    """Create order - orchestrate multiple services"""
    # 1. Get product info
    product = await route_request(
        service_name="product",
        path=f"/products/{order_data['product_id']}",
        method="GET"
    )
    
    # 2. Create order
    order = await route_request(
        service_name="order",
        path="/orders",
        method="POST",
        body=order_data,
        headers={"Authorization": request.headers.get("Authorization")}
    )
    
    # 3. Process payment
    payment = await route_request(
        service_name="payment",
        path="/payments",
        method="POST",
        body={
            "order_id": order["id"],
            "amount": order["total"]
        },
        headers={"Authorization": request.headers.get("Authorization")}
    )
    
    return {
        "order": order,
        "payment": payment
    }

# Health check
@app.get("/health")
async def health_check():
    """Check gateway and all services health"""
    health_status = {"gateway": "healthy", "services": {}}
    
    for service_name, service_url in SERVICES.items():
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(f"{service_url}/health", timeout=5.0)
                health_status["services"][service_name] = "healthy" if response.status_code == 200 else "unhealthy"
        except:
            health_status["services"][service_name] = "unhealthy"
    
    return health_status
```

### 6.2 Service Discovery

#### Service Registry Pattern

```python
from typing import Dict, List
from datetime import datetime, timedelta
import asyncio

class ServiceRegistry:
    def __init__(self):
        self.services: Dict[str, List[dict]] = {}
        self.heartbeat_timeout = 30  # seconds
    
    async def register(
        self,
        service_name: str,
        service_url: str,
        metadata: dict = None
    ):
        """Register a service instance"""
        if service_name not in self.services:
            self.services[service_name] = []
        
        service_instance = {
            "url": service_url,
            "metadata": metadata or {},
            "registered_at": datetime.utcnow(),
            "last_heartbeat": datetime.utcnow(),
            "healthy": True
        }
        
        self.services[service_name].append(service_instance)
        print(f"Registered {service_name} at {service_url}")
    
    async def deregister(self, service_name: str, service_url: str):
        """Deregister a service instance"""
        if service_name in self.services:
            self.services[service_name] = [
                s for s in self.services[service_name]
                if s["url"] != service_url
            ]
    
    async def heartbeat(self, service_name: str, service_url: str):
        """Update service heartbeat"""
        if service_name in self.services:
            for service in self.services[service_name]:
                if service["url"] == service_url:
                    service["last_heartbeat"] = datetime.utcnow()
                    service["healthy"] = True
    
    async def get_service(self, service_name: str) -> List[dict]:
        """Get all healthy instances of a service"""
        if service_name not in self.services:
            return []
        
        # Filter healthy services
        healthy_services = [
            s for s in self.services[service_name]
            if self._is_healthy(s)
        ]
        
        return healthy_services
    
    def _is_healthy(self, service: dict) -> bool:
        """Check if service is healthy based on heartbeat"""
        last_heartbeat = service["last_heartbeat"]
        time_since_heartbeat = (datetime.utcnow() - last_heartbeat).total_seconds()
        return time_since_heartbeat < self.heartbeat_timeout
    
    async def health_check_loop(self):
        """Periodically check service health"""
        while True:
            await asyncio.sleep(10)
            
            for service_name, instances in self.services.items():
                for instance in instances:
                    if not self._is_healthy(instance):
                        instance["healthy"] = False
                        print(f"Service {service_name} at {instance['url']} is unhealthy")

# Global registry
service_registry = ServiceRegistry()

# Service registration endpoint
@app.post("/registry/register")
async def register_service(service_data: dict):
    await service_registry.register(
        service_name=service_data["name"],
        service_url=service_data["url"],
        metadata=service_data.get("metadata")
    )
    return {"status": "registered"}

@app.post("/registry/heartbeat")
async def service_heartbeat(service_data: dict):
    await service_registry.heartbeat(
        service_name=service_data["name"],
        service_url=service_data["url"]
    )
    return {"status": "acknowledged"}

@app.get("/registry/services/{service_name}")
async def discover_service(service_name: str):
    services = await service_registry.get_service(service_name)
    return {"services": services}

# Start health check loop
@app.on_event("startup")
async def startup_event():
    asyncio.create_task(service_registry.health_check_loop())
```

---

## 📝 Week 3 Summary

### Key Concepts Covered

1. **RESTful API Design**
   - REST principles and constraints
   - Resource naming and HTTP methods
   - Status codes and error handling

2. **Advanced API Patterns**
   - Pagination strategies
   - Filtering and sorting
   - Bulk operations
   - API versioning

3. **GraphQL**
   - Schema definition
   - Queries, mutations, subscriptions
   - Resolvers and DataLoader

4. **Microservices**
   - Service decomposition
   - Communication patterns
   - Event sourcing
   - Circuit breakers

5. **API Gateway**
   - Request routing
   - Authentication
   - Rate limiting
   - Service orchestration

6. **Service Discovery**
   - Service registry
   - Health checks
   - Load balancing

---

## ✅ Week 3 Checklist

- [ ] Design RESTful APIs following best practices
- [ ] Implement pagination, filtering, and sorting
- [ ] Create GraphQL schemas and resolvers
- [ ] Decompose monolith into microservices
- [ ] Implement inter-service communication
- [ ] Build circuit breaker pattern
- [ ] Create API gateway with routing
- [ ] Implement service discovery
- [ ] Add authentication and rate limiting
- [ ] Complete hands-on projects

---

**Next**: [Week 4: Scalability & Performance →](../Week-04-Scalability-Performance/week-04-complete-content.md)