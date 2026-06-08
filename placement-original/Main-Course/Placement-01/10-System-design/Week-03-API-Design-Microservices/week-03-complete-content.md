# Week 3: API Design & Microservices Architecture

## Course Information
- **Week**: 3 of 10
- **Duration**: 7 days
- **Difficulty**: Intermediate
- **Prerequisites**: Week 1 (Fundamentals), Week 2 (Core Building Blocks)

---

## 📋 Week Overview

This week focuses on designing robust APIs and understanding microservices architecture. You'll learn how to create scalable, maintainable APIs and break down monolithic applications into microservices.

### Learning Objectives

By the end of this week, you will be able to:

1. ✅ Design RESTful APIs following best practices
2. ✅ Implement GraphQL APIs for flexible data querying
3. ✅ Build API gateways for microservices
4. ✅ Design inter-service communication patterns
5. ✅ Implement service discovery and load balancing
6. ✅ Apply API versioning and documentation strategies
7. ✅ Design authentication and authorization for APIs
8. ✅ Implement rate limiting and throttling

---

## 📚 Daily Breakdown

### Day 1: RESTful API Design
- REST principles and constraints
- Resource naming conventions
- HTTP methods and status codes
- HATEOAS and API maturity levels
- **Hands-on**: Design a RESTful API for e-commerce

### Day 2: Advanced API Patterns
- Pagination, filtering, and sorting
- Bulk operations and batch requests
- API versioning strategies
- Error handling and validation
- **Hands-on**: Implement advanced API features

### Day 3: GraphQL & Advanced API Patterns
- GraphQL fundamentals
- Schema design and resolvers
- Queries, mutations, and subscriptions
- gRPC for high-performance APIs
- **Hands-on**: Build a GraphQL API

### Day 4: Microservices Fundamentals
- Microservices architecture overview
- Service boundaries and decomposition
- Domain-Driven Design (DDD) basics
- Monolith to microservices migration
- **Hands-on**: Design microservices architecture

### Day 5: Inter-Service Communication
- Synchronous vs asynchronous communication
- REST, gRPC, and message queues
- Service mesh patterns
- Circuit breakers and resilience
- **Hands-on**: Implement service communication

### Day 6: API Gateway & Service Discovery
- API Gateway patterns
- Service registry and discovery
- Load balancing strategies
- Authentication and authorization
- **Hands-on**: Build an API Gateway

### Day 7: API Security & Observability
- OAuth 2.0 and OpenID Connect
- JWT and token management
- Rate limiting and throttling
- API monitoring and logging
- **Hands-on**: Implement API security

---

## 🎯 Day 1: RESTful API Design

### 1.1 REST Principles

REST (Representational State Transfer) is an architectural style for designing networked applications.

#### Core Principles

1. **Client-Server Architecture**
   - Separation of concerns
   - Independent evolution
   - Scalability

2. **Statelessness**
   - Each request contains all necessary information
   - No server-side session state
   - Improved scalability

3. **Cacheability**
   - Responses must define themselves as cacheable or not
   - Improves performance and scalability

4. **Uniform Interface**
   - Resource identification through URIs
   - Resource manipulation through representations
   - Self-descriptive messages
   - HATEOAS (Hypermedia as the Engine of Application State)

5. **Layered System**
   - Client doesn't know if connected to end server
   - Allows for load balancers, proxies, caches

6. **Code on Demand (Optional)**
   - Server can extend client functionality
   - JavaScript execution

### 1.2 Resource Naming Conventions

#### Best Practices

```
✅ GOOD EXAMPLES:
GET    /users                    # Get all users
GET    /users/123                # Get specific user
POST   /users                    # Create user
PUT    /users/123                # Update entire user
PATCH  /users/123                # Partial update
DELETE /users/123                # Delete user

GET    /users/123/orders         # Get user's orders
GET    /users/123/orders/456     # Get specific order
POST   /users/123/orders         # Create order for user

GET    /products?category=electronics&sort=price
GET    /products?page=2&limit=20

❌ BAD EXAMPLES:
GET    /getUsers                 # Don't use verbs
GET    /user                     # Use plural nouns
GET    /Users                    # Use lowercase
POST   /createUser               # Verb in URL
GET    /users/123/delete         # Use DELETE method instead
```

#### Resource Hierarchy

```
/organizations/{orgId}
  /departments/{deptId}
    /employees/{empId}
      /projects/{projectId}
```

### 1.3 HTTP Methods

| Method | Purpose | Idempotent | Safe |
|--------|---------|------------|------|
| GET | Retrieve resource | Yes | Yes |
| POST | Create resource | No | No |
| PUT | Replace resource | Yes | No |
| PATCH | Partial update | No | No |
| DELETE | Remove resource | Yes | No |
| HEAD | Get headers only | Yes | Yes |
| OPTIONS | Get allowed methods | Yes | Yes |

#### Detailed Examples

```javascript
// GET - Retrieve resources
GET /api/v1/users
Response: 200 OK
{
  "data": [
    {"id": 1, "name": "John", "email": "john@example.com"},
    {"id": 2, "name": "Jane", "email": "jane@example.com"}
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 20
  }
}

// POST - Create resource
POST /api/v1/users
Content-Type: application/json
{
  "name": "Alice",
  "email": "alice@example.com",
  "role": "user"
}
Response: 201 Created
Location: /api/v1/users/3
{
  "id": 3,
  "name": "Alice",
  "email": "alice@example.com",
  "role": "user",
  "created_at": "2024-01-15T10:30:00Z"
}

// PUT - Replace entire resource
PUT /api/v1/users/3
Content-Type: application/json
{
  "name": "Alice Smith",
  "email": "alice.smith@example.com",
  "role": "admin"
}
Response: 200 OK
{
  "id": 3,
  "name": "Alice Smith",
  "email": "alice.smith@example.com",
  "role": "admin",
  "updated_at": "2024-01-15T11:00:00Z"
}

// PATCH - Partial update
PATCH /api/v1/users/3
Content-Type: application/json
{
  "role": "moderator"
}
Response: 200 OK
{
  "id": 3,
  "name": "Alice Smith",
  "email": "alice.smith@example.com",
  "role": "moderator",
  "updated_at": "2024-01-15T11:30:00Z"
}

// DELETE - Remove resource
DELETE /api/v1/users/3
Response: 204 No Content
```

### 1.4 HTTP Status Codes

#### Success Codes (2xx)

```
200 OK                  - Successful GET, PUT, PATCH
201 Created             - Successful POST
202 Accepted            - Request accepted for processing
204 No Content          - Successful DELETE or no response body
206 Partial Content     - Partial GET (range requests)
```

#### Redirection Codes (3xx)

```
301 Moved Permanently   - Resource permanently moved
302 Found               - Temporary redirect
304 Not Modified        - Cached resource still valid
```

#### Client Error Codes (4xx)

```
400 Bad Request         - Invalid request format
401 Unauthorized        - Authentication required
403 Forbidden           - Authenticated but not authorized
404 Not Found           - Resource doesn't exist
405 Method Not Allowed  - HTTP method not supported
409 Conflict            - Resource conflict
422 Unprocessable Entity - Validation errors
429 Too Many Requests   - Rate limit exceeded
```

#### Server Error Codes (5xx)

```
500 Internal Server Error - Generic server error
502 Bad Gateway           - Invalid response from upstream
503 Service Unavailable   - Server temporarily unavailable
504 Gateway Timeout       - Upstream server timeout
```

### 1.5 Error Response Format

#### Standard Error Response

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format",
        "value": "invalid-email"
      },
      {
        "field": "age",
        "message": "Must be at least 18",
        "value": 15
      }
    ],
    "timestamp": "2024-01-15T12:00:00Z",
    "request_id": "abc123"
  }
}
```

### 1.6 API Maturity Levels (Richardson Maturity Model)

#### Level 0: The Swamp of POX (Plain Old XML)
```
POST /api
{
  "method": "getUser",
  "params": {"userId": 123}
}
```

#### Level 1: Resources
```
POST /api/users
GET /api/users/123
```

#### Level 2: HTTP Verbs
```
GET    /api/users/123
POST   /api/users
PUT    /api/users/123
DELETE /api/users/123
```

#### Level 3: Hypermedia Controls (HATEOAS)
```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "_links": {
    "self": {"href": "/api/users/123"},
    "orders": {"href": "/api/users/123/orders"},
    "edit": {"href": "/api/users/123", "method": "PUT"},
    "delete": {"href": "/api/users/123", "method": "DELETE"}
  }
}
```

### 1.7 Practical Implementation

#### Python FastAPI Example

```python
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="E-Commerce API", version="1.0.0")

# Models
class Product(BaseModel):
    id: Optional[int] = None
    name: str
    description: str
    price: float
    category: str
    stock: int
    created_at: Optional[datetime] = None

class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    category: str
    stock: int

class ProductUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    category: Optional[str] = None
    stock: Optional[int] = None

# In-memory database
products_db = {}
next_id = 1

# Endpoints
@app.get("/api/v1/products", response_model=List[Product])
async def get_products(
    category: Optional[str] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    page: int = 1,
    limit: int = 20
):
    """Get all products with optional filtering"""
    filtered_products = list(products_db.values())
    
    if category:
        filtered_products = [p for p in filtered_products if p.category == category]
    if min_price:
        filtered_products = [p for p in filtered_products if p.price >= min_price]
    if max_price:
        filtered_products = [p for p in filtered_products if p.price <= max_price]
    
    # Pagination
    start = (page - 1) * limit
    end = start + limit
    
    return filtered_products[start:end]

@app.get("/api/v1/products/{product_id}", response_model=Product)
async def get_product(product_id: int):
    """Get a specific product"""
    if product_id not in products_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Product {product_id} not found"
        )
    return products_db[product_id]

@app.post("/api/v1/products", response_model=Product, status_code=status.HTTP_201_CREATED)
async def create_product(product: ProductCreate):
    """Create a new product"""
    global next_id
    
    new_product = Product(
        id=next_id,
        **product.dict(),
        created_at=datetime.utcnow()
    )
    
    products_db[next_id] = new_product
    next_id += 1
    
    return new_product

@app.put("/api/v1/products/{product_id}", response_model=Product)
async def update_product(product_id: int, product: ProductCreate):
    """Replace a product entirely"""
    if product_id not in products_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Product {product_id} not found"
        )
    
    updated_product = Product(
        id=product_id,
        **product.dict(),
        created_at=products_db[product_id].created_at
    )
    
    products_db[product_id] = updated_product
    return updated_product

@app.patch("/api/v1/products/{product_id}", response_model=Product)
async def partial_update_product(product_id: int, product: ProductUpdate):
    """Partially update a product"""
    if product_id not in products_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Product {product_id} not found"
        )
    
    stored_product = products_db[product_id]
    update_data = product.dict(exclude_unset=True)
    
    updated_product = stored_product.copy(update=update_data)
    products_db[product_id] = updated_product
    
    return updated_product

@app.delete("/api/v1/products/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_product(product_id: int):
    """Delete a product"""
    if product_id not in products_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Product {product_id} not found"
        )
    
    del products_db[product_id]
    return None
```

### 1.8 Hands-on Exercise

**Task**: Design a RESTful API for a library management system

Requirements:
1. Books (CRUD operations)
2. Authors (with books relationship)
3. Members (library members)
4. Borrowing system
5. Search and filtering
6. Pagination

**Deliverables**:
- API endpoint documentation
- Request/response examples
- Error handling
- Status codes mapping

---

## 🎯 Day 2: Advanced API Patterns

### 2.1 Pagination Strategies

#### Offset-Based Pagination

```javascript
// Request
GET /api/v1/products?page=2&limit=20

// Response
{
  "data": [...],
  "meta": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "total_pages": 8
  },
  "links": {
    "first": "/api/v1/products?page=1&limit=20",
    "prev": "/api/v1/products?page=1&limit=20",
    "self": "/api/v1/products?page=2&limit=20",
    "next": "/api/v1/products?page=3&limit=20",
    "last": "/api/v1/products?page=8&limit=20"
  }
}
```

#### Cursor-Based Pagination

```javascript
// Better for real-time data and large datasets
GET /api/v1/posts?cursor=eyJpZCI6MTIzfQ&limit=20

{
  "data": [...],
  "meta": {
    "next_cursor": "eyJpZCI6MTQzfQ",
    "has_more": true
  }
}
```

#### Keyset Pagination

```javascript
// Most efficient for large datasets
GET /api/v1/users?after_id=1000&limit=20

{
  "data": [...],
  "meta": {
    "after_id": 1020,
    "has_more": true
  }
}
```

### 2.2 Filtering and Sorting

#### URL Query Parameters

```javascript
// Filtering
GET /api/v1/products?category=electronics&price_min=100&price_max=500

// Sorting
GET /api/v1/products?sort=price          // Ascending
GET /api/v1/products?sort=-price         // Descending
GET /api/v1/products?sort=category,price // Multiple fields

// Field selection
GET /api/v1/products?fields=id,name,price

// Combined
GET /api/v1/products?category=electronics&sort=-price&fields=id,name,price&page=1&limit=20
```

#### Advanced Filtering (GraphQL-like)

```javascript
POST /api/v1/products/search
{
  "filters": {
    "category": {"eq": "electronics"},
    "price": {
      "gte": 100,
      "lte": 500
    },
    "in_stock": true,
    "tags": {"contains": "gaming"}
  },
  "sort": ["-price", "name"],
  "page": 1,
  "limit": 20
}
```

### 2.3 Bulk Operations

#### Batch Create

```javascript
POST /api/v1/products/batch
Content-Type: application/json

{
  "operations": [
    {"name": "Product 1", "price": 10.99},
    {"name": "Product 2", "price": 20.99},
    {"name": "Product 3", "price": 30.99}
  ]
}

Response: 201 Created
{
  "results": [
    {"id": 1, "status": "created"},
    {"id": 2, "status": "created"},
    {"id": null, "status": "failed", "error": "Duplicate name"}
  ],
  "summary": {
    "total": 3,
    "succeeded": 2,
    "failed": 1
  }
}
```

#### Batch Update

```javascript
PATCH /api/v1/products/batch
{
  "updates": [
    {"id": 1, "price": 12.99},
    {"id": 2, "price": 22.99}
  ]
}
```

#### Batch Delete

```javascript
DELETE /api/v1/products/batch
{
  "ids": [1, 2, 3, 4, 5]
}

Response: 200 OK
{
  "deleted": [1, 2, 3],
  "failed": [
    {"id": 4, "error": "Not found"},
    {"id": 5, "error": "Cannot delete active product"}
  ]
}
```

### 2.4 API Versioning Strategies

#### 1. URI Versioning (Most Common)

```
GET /api/v1/products
GET /api/v2/products
GET /api/v3/products
```

**Pros**: Clear, easy to implement, easy to route
**Cons**: URI proliferation, harder to maintain

#### 2. Header Versioning

```
GET /api/products
Accept: application/vnd.company.api+json;version=1

GET /api/products
Accept: application/vnd.company.api+json;version=2
```

**Pros**: Clean URIs, follows REST principles
**Cons**: Less visible, harder to test

#### 3. Query Parameter Versioning

```
GET /api/products?version=1
GET /api/products?version=2
```

**Pros**: Simple, flexible
**Cons**: Can clutter URLs, less RESTful

#### 4. Content Negotiation

```
GET /api/products
Accept: application/vnd.company.api.v1+json

GET /api/products
Accept: application/vnd.company.api.v2+json
```

**Pros**: Pure REST, flexible
**Cons**: Complex, requires custom media types

### 2.5 Comprehensive Error Handling

```python
from enum import Enum
from typing import Optional, List, Dict, Any
from pydantic import BaseModel

class ErrorCode(str, Enum):
    # Client Errors (4xx)
    BAD_REQUEST = "BAD_REQUEST"
    UNAUTHORIZED = "UNAUTHORIZED"
    FORBIDDEN = "FORBIDDEN"
    NOT_FOUND = "NOT_FOUND"
    METHOD_NOT_ALLOWED = "METHOD_NOT_ALLOWED"
    CONFLICT = "CONFLICT"
    VALIDATION_ERROR = "VALIDATION_ERROR"
    RATE_LIMIT_EXCEEDED = "RATE_LIMIT_EXCEEDED"
    
    # Server Errors (5xx)
    INTERNAL_ERROR = "INTERNAL_ERROR"
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"
    DATABASE_ERROR = "DATABASE_ERROR"

class ErrorDetail(BaseModel):
    field: Optional[str] = None
    message: str
    code: Optional[str] = None
    value: Optional[Any] = None

class ErrorResponse(BaseModel):
    error: Dict[str, Any]
    
    @classmethod
    def create(
        cls,
        code: ErrorCode,
        message: str,
        details: Optional[List[ErrorDetail]] = None,
        status_code: int = 400,
        request_id: Optional[str] = None
    ):
        return {
            "error": {
                "code": code.value,
                "message": message,
                "details": [d.dict() for d in details] if details else [],
                "status_code": status_code,
                "request_id": request_id,
                "timestamp": datetime.utcnow().isoformat()
            }
        }

# Usage Example
@app.post("/api/v1/users")
async def create_user(user: UserCreate):
    try:
        # Validation
        if not is_valid_email(user.email):
            raise HTTPException(
                status_code=422,
                detail=ErrorResponse.create(
                    code=ErrorCode.VALIDATION_ERROR,
                    message="Validation failed",
                    details=[
                        ErrorDetail(
                            field="email",
                            message="Invalid email format",
                            value=user.email
                        )
                    ],
                    status_code=422
                )
            )
        
        # Check if user exists
        if user_exists(user.email):
            raise HTTPException(
                status_code=409,
                detail=ErrorResponse.create(
                    code=ErrorCode.CONFLICT,
                    message="User already exists",
                    status_code=409
                )
            )
        
        # Create user
        new_user = create_user_in_db(user)
        return new_user
        
    except DatabaseError as e:
        raise HTTPException(
            status_code=500,
            detail=ErrorResponse.create(
                code=ErrorCode.DATABASE_ERROR,
                message="Database operation failed",
                status_code=500
            )
        )
```

### 2.6 Rate Limiting Implementation

```python
from fastapi import Request, HTTPException
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

# Initialize limiter
limiter = Limiter(key_func=get_remote_address)

# Add to FastAPI app
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Apply rate limits
@app.get("/api/v1/products")
@limiter.limit("100/minute")  # 100 requests per minute
async def get_products(request: Request):
    return {"products": []}

@app.post("/api/v1/orders")
@limiter.limit("10/minute")  # 10 requests per minute for writes
async def create_order(request: Request, order: OrderCreate):
    return {"order_id": 123}

# Dynamic rate limiting based on user tier
def get_rate_limit(request: Request) -> str:
    user = get_current_user(request)
    
    if user.tier == "premium":
        return "1000/minute"
    elif user.tier == "basic":
        return "100/minute"
    else:
        return "10/minute"

@app.get("/api/v1/data")
@limiter.limit(get_rate_limit)
async def get_data(request: Request):
    return {"data": []}
```

### 2.7 API Documentation with OpenAPI

```python
from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import List, Optional

app = FastAPI(
    title="E-Commerce API",
    description="A comprehensive API for e-commerce operations",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_tags=[
        {
            "name": "products",
            "description": "Operations with products",
        },
        {
            "name": "orders",
            "description": "Order management",
        }
    ]
)

class Product(BaseModel):
    """Product model with complete information"""
    id: int = Field(..., description="Unique product identifier", example=1)
    name: str = Field(..., description="Product name", example="Laptop")
    price: float = Field(..., gt=0, description="Product price in USD", example=999.99)
    category: str = Field(..., description="Product category", example="electronics")
    
    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "name": "Laptop",
                "price": 999.99,
                "category": "electronics"
            }
        }

@app.get(
    "/api/v1/products/{product_id}",
    response_model=Product,
    tags=["products"],
    summary="Get a product by ID",
    description="Retrieve detailed information about a specific product using its ID",
    responses={
        200: {
            "description": "Product found successfully",
            "content": {
                "application/json": {
                    "example": {
                        "id": 1,
                        "name": "Laptop",
                        "price": 999.99,
                        "category": "electronics"
                    }
                }
            }
        },
        404: {
            "description": "Product not found",
            "content": {
                "application/json": {
                    "example": {
                        "error": {
                            "code": "NOT_FOUND",
                            "message": "Product 123 not found"
                        }
                    }
                }
            }
        }
    }
)
async def get_product(product_id: int):
    """
    Get a product by its ID.
    
    - **product_id**: The unique identifier of the product
    
    Returns the complete product information including:
    - Product name and description
    - Current price
    - Category and tags
    - Stock availability
    """
    return {"id": product_id, "name": "Laptop", "price": 999.99, "category": "electronics"}
```

### 2.8 Hands-on Exercise

**Task**: Implement advanced API features for a blog platform

Requirements:
1. Pagination with cursor-based approach
2. Advanced filtering (by author, tags, date range)
3. Sorting by multiple fields
4. Bulk operations for posts
5. API versioning
6. Comprehensive error handling
7. Rate limiting
8. OpenAPI documentation

---

## 📝 Practice Problems

### Problem 1: E-Commerce API Design
Design a complete RESTful API for an e-commerce platform with:
- Product catalog
- Shopping cart
- Order management
- User reviews
- Wishlist

### Problem 2: Rate Limiting Strategy
Implement a multi-tier rate limiting system with:
- Anonymous users: 10 req/min
- Registered users: 100 req/min
- Premium users: 1000 req/min
- Different limits for different endpoints

### Problem 3: API Versioning Migration
Create a migration plan from API v1 to v2 with:
- Backward compatibility
- Deprecation warnings
- Client notification strategy

---

## 📚 Additional Resources

### Books
- "REST API Design Rulebook" by Mark Masse
- "RESTful Web APIs" by Leonard Richardson
- "API Design Patterns" by JJ Geewax

### Online Resources
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines)
- [Google API Design Guide](https://cloud.google.com/apis/design)
- [Swagger/OpenAPI Specification](https://swagger.io/specification/)

### Tools
- Postman - API testing
- Swagger UI - API documentation
- Insomnia - API client
- API Blueprint - API design

---

## ✅ Day 1-2 Checklist

- [ ] Understand REST principles and constraints
- [ ] Master resource naming conventions
- [ ] Implement proper HTTP methods and status codes
- [ ] Design pagination strategies
- [ ] Implement filtering and sorting
- [ ] Create bulk operation endpoints
- [ ] Apply API versioning
- [ ] Implement comprehensive error handling
- [ ] Add rate limiting
- [ ] Generate API documentation

---

## 🎯 Day 3: GraphQL & Advanced API Patterns

### 3.1 GraphQL Fundamentals

```python
from typing import Optional, List, Dict
from dataclasses import dataclass
import asyncio

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
    category: str

@dataclass
class Order:
    id: str
    user_id: str
    product_ids: List[str]
    total: float

class GraphQLResolver:
    """GraphQL resolver implementation"""
    
    def __init__(self):
        # Mock data
        self.users = {
            "1": User("1", "Alice", "alice@example.com"),
            "2": User("2", "Bob", "bob@example.com")
        }
        self.products = {
            "1": Product("1", "Laptop", 999.99, "electronics"),
            "2": Product("2", "Book", 29.99, "books")
        }
        self.orders = {
            "1": Order("1", "1", ["1", "2"], 1029.98)
        }
    
    # Query resolvers
    def get_user(self, user_id: str) -> Optional[User]:
        return self.users.get(user_id)
    
    def get_products(self, category: Optional[str] = None) -> List[Product]:
        products = list(self.products.values())
        if category:
            products = [p for p in products if p.category == category]
        return products
    
    def get_user_orders(self, user_id: str) -> List[Order]:
        return [o for o in self.orders.values() if o.user_id == user_id]
    
    # Nested resolvers (GraphQL automatically resolves relationships)
    def resolve_order_user(self, order: Order) -> Optional[User]:
        return self.get_user(order.user_id)
    
    def resolve_order_products(self, order: Order) -> List[Product]:
        return [self.get_product(pid) for pid in order.product_ids if pid in self.products]

# GraphQL Schema (SDL)
GRAPHQL_SCHEMA = """
type User {
  id: ID!
  name: String!
  email: String!
  orders: [Order!]!
}

type Product {
  id: ID!
  name: String!
  price: Float!
  category: String!
}

type Order {
  id: ID!
  user: User!
  products: [Product!]!
  total: Float!
}

type Query {
  user(id: ID!): User
  products(category: String): [Product!]!
}
"""

# Demo: GraphQL queries
def demo_graphql():
    print("🔷 GraphQL API Demo\n")
    
    resolver = GraphQLResolver()
    
    # Query 1: Get user with nested orders
    print("1️⃣ Query: Get user with orders")
    user = resolver.get_user("1")
    if user:
        orders = resolver.get_user_orders(user.id)
        print(f"User: {user.name}")
        print(f"Orders: {len(orders)}")
        for order in orders:
            products = resolver.resolve_order_products(order)
            print(f"  Order {order.id}: ${order.total} ({len(products)} items)")
    
    # Query 2: Get products by category
    print("\n2️⃣ Query: Get electronics products")
    electronics = resolver.get_products("electronics")
    for product in electronics:
        print(f"  {product.name}: ${product.price}")

demo_graphql()
```

### 3.2 REST vs GraphQL Comparison

| Feature | REST | GraphQL |
|---------|------|---------|
| **Data Fetching** | Multiple endpoints, over/under-fetching | Single query, exact data needed |
| **Versioning** | URL versioning needed | Schema evolution |
| **Documentation** | Manual/OpenAPI | Self-documenting schema |
| **Caching** | HTTP caching | Application-level caching |
| **Real-time** | Polling/WebSockets | Subscriptions |
| **Learning Curve** | Lower | Higher |
| **Performance** | Multiple round trips | Single round trip |

---

## 🎯 Day 4: Microservices Fundamentals

### 4.1 Service Boundaries & Domain-Driven Design

```python
from typing import List, Dict
from dataclasses import dataclass

@dataclass
class BoundedContext:
    name: str
    entities: List[str]
    services: List[str]
    responsibilities: List[str]

class DomainModel:
    """Domain-Driven Design bounded contexts"""
    
    def __init__(self):
        self.contexts: Dict[str, BoundedContext] = {}
    
    def define_context(self, name: str, entities: List[str], 
                      services: List[str], responsibilities: List[str]):
        """Define a bounded context"""
        self.contexts[name] = BoundedContext(name, entities, services, responsibilities)
    
    def get_context_relationships(self) -> Dict[str, List[str]]:
        """Analyze relationships between contexts"""
        relationships = {}
        
        for name, context in self.contexts.items():
            related = []
            
            # Check shared entities
            for other_name, other_context in self.contexts.items():
                if name != other_name:
                    shared_entities = set(context.entities) & set(other_context.entities)
                    if shared_entities:
                        related.append(f"Shared entities with {other_name}: {shared_entities}")
            
            relationships[name] = related
        
        return relationships

# Example: E-commerce domain
def demo_ddd():
    print("🏗️  Domain-Driven Design - Bounded Contexts\n")
    
    domain = DomainModel()
    
    # Define bounded contexts
    domain.define_context(
        "User Management",
        entities=["User", "Profile", "Address"],
        services=["UserService", "AuthService"],
        responsibilities=["User registration", "Authentication", "Profile management"]
    )
    
    domain.define_context(
        "Product Catalog",
        entities=["Product", "Category", "Inventory"],
        services=["ProductService", "CatalogService"],
        responsibilities=["Product management", "Category organization", "Inventory tracking"]
    )
    
    domain.define_context(
        "Order Processing",
        entities=["Order", "OrderItem", "Payment"],
        services=["OrderService", "PaymentService"],
        responsibilities=["Order creation", "Payment processing", "Order fulfillment"]
    )
    
    # Show contexts
    for name, context in domain.contexts.items():
        print(f"📦 {name}")
        print(f"   Entities: {', '.join(context.entities)}")
        print(f"   Services: {', '.join(context.services)}")
        print(f"   Responsibilities: {', '.join(context.responsibilities)}\n")
    
    # Show relationships
    relationships = domain.get_context_relationships()
    print("🔗 Context Relationships:")
    for context, related in relationships.items():
        if related:
            print(f"   {context}:")
            for rel in related:
                print(f"     • {rel}")

demo_ddd()
```

---

## 🎯 Day 5: Inter-Service Communication

### 5.1 Synchronous vs Asynchronous Patterns

```python
import asyncio
from typing import Dict, Callable, List
import time

class SynchronousClient:
    """REST-style synchronous communication"""
    
    async def call_service(self, service_url: str, endpoint: str, data: Dict = None) -> Dict:
        """Make synchronous HTTP call"""
        # Simulate HTTP request
        await asyncio.sleep(0.05)  # Network latency
        return {"status": "success", "service": service_url, "data": data}

class AsyncMessageQueue:
    """Message queue for async communication"""
    
    def __init__(self):
        self.queues: Dict[str, List[Dict]] = {}
        self.subscribers: Dict[str, List[Callable]] = {}
    
    async def publish(self, queue_name: str, message: Dict):
        """Publish message asynchronously"""
        if queue_name not in self.queues:
            self.queues[queue_name] = []
        
        message["timestamp"] = time.time()
        self.queues[queue_name].append(message)
        
        # Notify subscribers
        if queue_name in self.subscribers:
            for subscriber in self.subscribers[queue_name]:
                asyncio.create_task(subscriber(message))
    
    async def subscribe(self, queue_name: str, handler: Callable):
        """Subscribe to queue"""
        if queue_name not in self.subscribers:
            self.subscribers[queue_name] = []
        self.subscribers[queue_name].append(handler)

# Demo: Communication patterns
async def demo_communication_patterns():
    print("📨 Inter-Service Communication Patterns\n")
    
    sync_client = SynchronousClient()
    mq = AsyncMessageQueue()
    
    # Synchronous call
    print("1️⃣ Synchronous call:")
    start = time.time()
    result = await sync_client.call_service("user-service", "/api/users/123")
    duration = (time.time() - start) * 1000
    print(f"   Result: {result}")
    print(f"   Duration: {duration:.0f}ms\n")
    
    # Asynchronous messaging
    print("2️⃣ Asynchronous messaging:")
    
    # Subscribe to events
    async def order_handler(message):
        print(f"   📧 Order event received: {message['event']}")
    
    await mq.subscribe("orders", order_handler)
    
    # Publish event
    await mq.publish("orders", {"event": "order_created", "order_id": "123"})
    
    # Wait for async processing
    await asyncio.sleep(0.1)

asyncio.run(demo_communication_patterns())
```

---

## 🎯 Day 6: API Gateway & Service Discovery

### 6.1 API Gateway Implementation

```python
class APIGateway:
    """Simple API Gateway"""
    
    def __init__(self):
        self.routes = {}
        self.services = {}
    
    def register_service(self, name: str, instances: List[Dict]):
        """Register service instances"""
        self.services[name] = instances
    
    def add_route(self, path: str, service: str):
        """Add route mapping"""
        self.routes[path] = service
    
    async def handle_request(self, path: str, method: str) -> Dict:
        """Route request to appropriate service"""
        service_name = None
        for route_path, svc in self.routes.items():
            if path.startswith(route_path):
                service_name = svc
                break
        
        if not service_name or service_name not in self.services:
            return {"error": "Service not found"}
        
        # Load balance across instances
        instances = self.services[service_name]
        instance = instances[0]  # Simple round-robin
        
        # Forward request
        return await self._forward_to_service(instance, path, method)
    
    async def _forward_to_service(self, instance: Dict, path: str, method: str) -> Dict:
        """Forward to service instance"""
        await asyncio.sleep(0.01)
        return {"service": instance["name"], "path": path, "method": method}

# Demo
async def demo_api_gateway():
    print("🚪 API Gateway Demo\n")
    
    gateway = APIGateway()
    
    # Register services
    gateway.register_service("user-service", [
        {"name": "user-1", "host": "10.0.1.10"}
    ])
    
    # Add routes
    gateway.add_route("/api/users", "user-service")
    
    # Handle request
    response = await gateway.handle_request("/api/users/123", "GET")
    print(f"Response: {response}")

asyncio.run(demo_api_gateway())
```

---

## 🎯 Day 7: API Security & Observability

### 7.1 JWT Authentication

```python
import jwt
from datetime import datetime, timedelta

class AuthService:
    """JWT-based authentication"""
    
    def __init__(self, secret: str = "secret"):
        self.secret = secret
    
    def generate_token(self, user_id: str, roles: List[str] = None) -> str:
        """Generate JWT token"""
        payload = {
            "user_id": user_id,
            "roles": roles or [],
            "exp": datetime.utcnow() + timedelta(hours=1),
            "iat": datetime.utcnow()
        }
        return jwt.encode(payload, self.secret, algorithm="HS256")
    
    def verify_token(self, token: str) -> Optional[Dict]:
        """Verify JWT token"""
        try:
            return jwt.decode(token, self.secret, algorithms=["HS256"])
        except:
            return None

# Demo
auth = AuthService()
token = auth.generate_token("user_123", ["user"])
print(f"Token: {token}")

user_data = auth.verify_token(token)
print(f"Verified: {user_data}")
```

### 7.2 API Monitoring

```python
class APIMonitor:
    """API observability"""
    
    def __init__(self):
        self.requests = []
    
    def record_request(self, method: str, path: str, status: int, duration: float):
        """Record API request"""
        self.requests.append({
            "method": method,
            "path": path,
            "status": status,
            "duration": duration,
            "timestamp": time.time()
        })
    
    def get_metrics(self) -> Dict:
        """Get API metrics"""
        if not self.requests:
            return {}
        
        total = len(self.requests)
        errors = len([r for r in self.requests if r["status"] >= 400])
        avg_duration = sum(r["duration"] for r in self.requests) / total
        
        return {
            "total_requests": total,
            "error_rate": errors / total * 100,
            "avg_response_time": avg_duration
        }

# Demo
monitor = APIMonitor()
monitor.record_request("GET", "/api/users", 200, 0.05)
monitor.record_request("POST", "/api/orders", 201, 0.08)
monitor.record_request("GET", "/api/products", 500, 2.1)

print("API Metrics:", monitor.get_metrics())
```

---

**Week 3 Complete! 🎉**