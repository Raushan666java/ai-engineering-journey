# 🏢 System Design: Amazon E-Commerce Platform

## 📋 Table of Contents
1. [Problem Statement](#problem-statement)
2. [Requirements](#requirements)
3. [Capacity Estimation](#capacity-estimation)
4. [High-Level Design](#high-level-design)
5. [Database Design](#database-design)
6. [API Design](#api-design)
7. [Detailed Component Design](#detailed-component-design)
8. [Scalability & Performance](#scalability--performance)
9. [Trade-offs & Alternatives](#trade-offs--alternatives)

---

## 🎯 Problem Statement

Design a large-scale e-commerce platform like Amazon that supports:
- Product catalog with search and filtering
- Shopping cart and checkout
- Order management
- Payment processing
- Inventory management
- User reviews and ratings
- Recommendation system
- Seller platform

**Scale**: 500M users, 100M daily active users, 50M products

---

## 📊 Requirements

### Functional Requirements
1. **User Management**
   - User registration, login, profile management
   - Address management
   - Wishlist functionality

2. **Product Catalog**
   - Browse products by category
   - Search products with filters
   - View product details, images, specifications
   - Product variants (size, color, etc.)

3. **Shopping Cart**
   - Add/remove items
   - Update quantities
   - Save for later
   - Apply coupons

4. **Order Management**
   - Place orders
   - Track shipments
   - Order history
   - Returns and refunds

5. **Payment**
   - Multiple payment methods
   - Payment processing
   - Transaction history

6. **Reviews & Ratings**
   - Submit reviews
   - Rate products
   - Helpful votes on reviews

7. **Recommendations**
   - Personalized product suggestions
   - "Frequently bought together"
   - "Customers who bought this also bought"

### Non-Functional Requirements
1. **Scalability**: Handle millions of concurrent users
2. **Availability**: 99.99% uptime (High Availability)
3. **Consistency**: Strong consistency for inventory, eventual for reviews
4. **Performance**: <200ms response time for search, <500ms for checkout
5. **Security**: PCI-DSS compliance for payments, data encryption
6. **Reliability**: No order loss, accurate inventory

---

## 🔢 Capacity Estimation

### Traffic Estimates
- **DAU**: 100M daily active users
- **Orders/day**: 10M orders
- **Peak traffic**: 3x average (holiday season)
- **Read:Write ratio**: 100:1 (mostly browsing)

### Storage Estimates
- **Products**: 50M products × 10KB = 500GB
- **Product Images**: 50M × 5 images × 500KB = 125TB
- **Users**: 500M × 2KB = 1TB
- **Orders**: 10M orders/day × 5KB × 365 days = 18TB/year
- **Reviews**: 100M reviews × 1KB = 100GB

### Bandwidth Estimates
- **Product search**: 1M requests/sec × 10KB = 10GB/s
- **Images**: 500K requests/sec × 100KB = 50GB/s
- **API calls**: ~5M QPS average, 15M QPS peak

### Cache Estimates
- **Hot products**: Top 10K products × 10KB = 100MB
- **User sessions**: 10M active × 5KB = 50GB
- **Search results**: Cache top 100K queries × 50KB = 5GB

---

## 🏗️ High-Level Design

```
┌─────────────┐
│   Clients   │
│ Web/Mobile  │
└──────┬──────┘
       │
┌──────▼──────────────────────────────────────────────┐
│           CDN (CloudFront)                          │
│  Static Content: Images, CSS, JS                    │
└──────┬──────────────────────────────────────────────┘
       │
┌──────▼──────────────────────────────────────────────┐
│      Load Balancer (ELB/ALB)                        │
│      SSL Termination, Rate Limiting                 │
└──────┬──────────────────────────────────────────────┘
       │
┌──────▼──────────────────────────────────────────────┐
│           API Gateway (Kong/AWS API GW)             │
│  Authentication, Rate Limiting, Routing             │
└──────┬──────────────────────────────────────────────┘
       │
       ├─────────────────┬─────────────┬──────────────┐
       │                 │             │              │
┌──────▼───────┐  ┌─────▼─────┐ ┌─────▼────┐  ┌─────▼──────┐
│   User       │  │  Product  │ │  Order   │  │  Payment   │
│   Service    │  │  Service  │ │  Service │  │  Service   │
└──────┬───────┘  └─────┬─────┘ └─────┬────┘  └─────┬──────┘
       │                 │             │              │
┌──────▼─────────────────▼─────────────▼──────────────▼──────┐
│                    Message Queue                            │
│         (Kafka/RabbitMQ/AWS SQS/SNS)                       │
└──────┬──────────────────────────────────────────────────────┘
       │
       ├─────────────────┬─────────────┬──────────────┐
       │                 │             │              │
┌──────▼───────┐  ┌─────▼─────┐ ┌─────▼────┐  ┌─────▼──────┐
│ Notification │  │ Analytics │ │  Email   │  │  Search    │
│   Service    │  │  Service  │ │  Service │  │ Indexer    │
└──────────────┘  └───────────┘ └──────────┘  └────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                              │
├──────────────┬────────────────┬───────────────┬─────────────┤
│   Primary    │   Read         │   Cache       │   Search    │
│   Database   │   Replicas     │   (Redis)     │ (Elastic)   │
│  (MySQL/     │   (Multi-AZ)   │  Session/Cart │  Product    │
│  Postgres)   │                │  Hot Data     │  Catalog    │
└──────────────┴────────────────┴───────────────┴─────────────┘

┌─────────────────────────────────────────────────────────────┐
│              Object Storage (S3/GCS)                         │
│  Product Images, Videos, Documents                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 💾 Database Design

### Tables

#### 1. Users
```sql
CREATE TABLE users (
    user_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE,
    is_seller BOOLEAN DEFAULT FALSE,
    INDEX idx_email (email),
    INDEX idx_phone (phone)
);
```

#### 2. Addresses
```sql
CREATE TABLE addresses (
    address_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    country VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20),
    is_default BOOLEAN DEFAULT FALSE,
    address_type ENUM('shipping', 'billing'),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    INDEX idx_user_id (user_id)
);
```

#### 3. Products
```sql
CREATE TABLE products (
    product_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    seller_id BIGINT NOT NULL,
    category_id INT NOT NULL,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    brand VARCHAR(100),
    price DECIMAL(10, 2) NOT NULL,
    discount_percent DECIMAL(5, 2) DEFAULT 0,
    stock_quantity INT NOT NULL DEFAULT 0,
    avg_rating DECIMAL(3, 2) DEFAULT 0,
    total_reviews INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    INDEX idx_seller (seller_id),
    INDEX idx_category (category_id),
    INDEX idx_price (price),
    INDEX idx_rating (avg_rating),
    FULLTEXT INDEX idx_title_desc (title, description)
);
```

#### 4. Product_Variants
```sql
CREATE TABLE product_variants (
    variant_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_id BIGINT NOT NULL,
    sku VARCHAR(100) UNIQUE NOT NULL,
    attributes JSON, -- {"size": "L", "color": "Red"}
    price DECIMAL(10, 2),
    stock_quantity INT DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    INDEX idx_product (product_id),
    INDEX idx_sku (sku)
);
```

#### 5. Orders
```sql
CREATE TABLE orders (
    order_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    order_status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    total_amount DECIMAL(10, 2) NOT NULL,
    discount_amount DECIMAL(10, 2) DEFAULT 0,
    tax_amount DECIMAL(10, 2) DEFAULT 0,
    shipping_amount DECIMAL(10, 2) DEFAULT 0,
    payment_method VARCHAR(50),
    payment_status ENUM('pending', 'completed', 'failed', 'refunded'),
    shipping_address_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (shipping_address_id) REFERENCES addresses(address_id),
    INDEX idx_user (user_id),
    INDEX idx_status (order_status),
    INDEX idx_created (created_at)
);
```

#### 6. Order_Items
```sql
CREATE TABLE order_items (
    order_item_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    variant_id BIGINT,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (variant_id) REFERENCES product_variants(variant_id),
    INDEX idx_order (order_id),
    INDEX idx_product (product_id)
);
```

#### 7. Shopping_Cart
```sql
CREATE TABLE shopping_cart (
    cart_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    variant_id BIGINT,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (variant_id) REFERENCES product_variants(variant_id),
    UNIQUE KEY unique_cart_item (user_id, product_id, variant_id),
    INDEX idx_user (user_id)
);
```

#### 8. Reviews
```sql
CREATE TABLE reviews (
    review_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    order_id BIGINT,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    content TEXT,
    helpful_count INT DEFAULT 0,
    verified_purchase BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    INDEX idx_product (product_id),
    INDEX idx_user (user_id),
    INDEX idx_rating (rating)
);
```

#### 9. Inventory_Logs
```sql
CREATE TABLE inventory_logs (
    log_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_id BIGINT NOT NULL,
    variant_id BIGINT,
    quantity_change INT NOT NULL,
    reason ENUM('sale', 'restock', 'return', 'damage', 'adjustment'),
    reference_id BIGINT, -- order_id or other reference
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (variant_id) REFERENCES product_variants(variant_id),
    INDEX idx_product (product_id),
    INDEX idx_created (created_at)
);
```

### Database Sharding Strategy

**Shard by User ID**:
- Users, Addresses, Orders → Shard by `user_id`
- Products, Inventory → Shard by `product_id`
- Shopping Cart → Shard by `user_id`

**Reasoning**: Most queries are user-centric (orders, cart) or product-centric (search, details)

---

## 🔌 API Design

### User APIs
```http
POST   /api/v1/users/register
POST   /api/v1/users/login
GET    /api/v1/users/{userId}
PUT    /api/v1/users/{userId}
POST   /api/v1/users/{userId}/addresses
GET    /api/v1/users/{userId}/addresses
```

### Product APIs
```http
GET    /api/v1/products                  # List with pagination & filters
GET    /api/v1/products/{productId}
GET    /api/v1/products/search?q={query}&category={cat}&minPrice={min}&maxPrice={max}
POST   /api/v1/products                  # Seller only
PUT    /api/v1/products/{productId}
DELETE /api/v1/products/{productId}
```

### Cart APIs
```http
GET    /api/v1/cart
POST   /api/v1/cart/items
PUT    /api/v1/cart/items/{itemId}
DELETE /api/v1/cart/items/{itemId}
DELETE /api/v1/cart                      # Clear cart
```

### Order APIs
```http
POST   /api/v1/orders                    # Checkout
GET    /api/v1/orders/{orderId}
GET    /api/v1/users/{userId}/orders
PUT    /api/v1/orders/{orderId}/cancel
GET    /api/v1/orders/{orderId}/track
POST   /api/v1/orders/{orderId}/return
```

### Payment APIs
```http
POST   /api/v1/payments/process
GET    /api/v1/payments/{paymentId}
POST   /api/v1/payments/{paymentId}/refund
```

### Review APIs
```http
POST   /api/v1/products/{productId}/reviews
GET    /api/v1/products/{productId}/reviews
PUT    /api/v1/reviews/{reviewId}
DELETE /api/v1/reviews/{reviewId}
POST   /api/v1/reviews/{reviewId}/helpful
```

### Recommendation APIs
```http
GET    /api/v1/recommendations/personalized
GET    /api/v1/products/{productId}/similar
GET    /api/v1/products/{productId}/frequently-bought-together
```

---

## 🔧 Detailed Component Design

### 1. Product Search Service

**Technology**: Elasticsearch

**Features**:
- Full-text search on title, description
- Faceted search (category, price, rating, brand)
- Auto-complete suggestions
- Fuzzy matching for typos
- Search ranking based on relevance, popularity

**Indexing Strategy**:
```json
{
  "product_id": 123,
  "title": "Apple iPhone 15 Pro",
  "description": "Latest iPhone with A17 Pro chip",
  "category": ["Electronics", "Mobile Phones"],
  "brand": "Apple",
  "price": 999.99,
  "rating": 4.5,
  "num_reviews": 1234,
  "in_stock": true,
  "tags": ["5g", "ios", "smartphone"]
}
```

**Search Query Example**:
```json
{
  "query": {
    "bool": {
      "must": [
        { "multi_match": { "query": "iphone", "fields": ["title^3", "description"] } }
      ],
      "filter": [
        { "range": { "price": { "gte": 500, "lte": 1500 } } },
        { "term": { "in_stock": true } }
      ]
    }
  },
  "aggs": {
    "brands": { "terms": { "field": "brand" } },
    "price_ranges": { "range": { "field": "price", "ranges": [...] } }
  }
}
```

### 2. Inventory Management

**Challenge**: Prevent overselling during concurrent orders

**Solution**: Distributed Lock with Redis

```java
public boolean reserveInventory(long productId, int quantity) {
    String lockKey = "inventory:lock:" + productId;
    String stockKey = "inventory:stock:" + productId;
    
    // Acquire distributed lock
    boolean acquired = redisTemplate.opsForValue()
        .setIfAbsent(lockKey, "locked", 5, TimeUnit.SECONDS);
    
    if (!acquired) {
        return false; // Another process is updating
    }
    
    try {
        int currentStock = Integer.parseInt(
            redisTemplate.opsForValue().get(stockKey)
        );
        
        if (currentStock >= quantity) {
            redisTemplate.opsForValue().decrement(stockKey, quantity);
            
            // Async update to DB
            inventoryService.updateStockAsync(productId, -quantity);
            
            return true;
        }
        
        return false;
    } finally {
        redisTemplate.delete(lockKey);
    }
}
```

**Fallback**: If Redis fails, use database row-level locking:
```sql
BEGIN TRANSACTION;
SELECT stock_quantity FROM products WHERE product_id = ? FOR UPDATE;
UPDATE products SET stock_quantity = stock_quantity - ? WHERE product_id = ? AND stock_quantity >= ?;
COMMIT;
```

### 3. Order Processing Workflow

**Saga Pattern** for distributed transactions:

```
1. Create Order (Pending)
   ↓
2. Reserve Inventory
   ↓ (success)      ↓ (failure)
3. Process Payment   Cancel Order
   ↓ (success)      ↓ (failure)
4. Confirm Order    Rollback Inventory
   ↓
5. Send Confirmation
   ↓
6. Update Analytics
```

**Implementation with Kafka**:
```java
// Order Service
public void createOrder(Order order) {
    order.setStatus("PENDING");
    orderRepository.save(order);
    
    // Publish event
    OrderCreatedEvent event = new OrderCreatedEvent(order);
    kafkaTemplate.send("order-created", event);
}

// Inventory Service (Consumer)
@KafkaListener(topics = "order-created")
public void handleOrderCreated(OrderCreatedEvent event) {
    boolean reserved = inventoryService.reserve(event.getItems());
    
    if (reserved) {
        kafkaTemplate.send("inventory-reserved", new InventoryReservedEvent(event.getOrderId()));
    } else {
        kafkaTemplate.send("inventory-failed", new InventoryFailedEvent(event.getOrderId()));
    }
}

// Payment Service (Consumer)
@KafkaListener(topics = "inventory-reserved")
public void handleInventoryReserved(InventoryReservedEvent event) {
    boolean paid = paymentService.process(event.getOrderId());
    
    if (paid) {
        kafkaTemplate.send("payment-completed", new PaymentCompletedEvent(event.getOrderId()));
    } else {
        // Trigger compensation
        kafkaTemplate.send("payment-failed", new PaymentFailedEvent(event.getOrderId()));
    }
}
```

### 4. Recommendation System

**Approaches**:

**A. Collaborative Filtering**:
- User-based: Find similar users, recommend what they bought
- Item-based: Find similar products based on user interactions

**B. Content-Based Filtering**:
- Recommend products similar to what user viewed/bought
- Based on product attributes (category, brand, price range)

**C. Hybrid Approach**:

```java
public List<Product> getRecommendations(Long userId) {
    // 1. Get user's purchase history
    List<Product> purchasedProducts = orderService.getUserProducts(userId);
    
    // 2. Collaborative filtering
    List<Product> collaborative = collaborativeFilteringService
        .getSimilarUserPurchases(userId, 10);
    
    // 3. Content-based
    List<Product> contentBased = contentBasedService
        .getSimilarProducts(purchasedProducts, 10);
    
    // 4. Trending products
    List<Product> trending = productService.getTrendingProducts(10);
    
    // 5. Merge with weights and dedup
    return mergeRecommendations(
        collaborative, 0.5,
        contentBased, 0.3,
        trending, 0.2
    );
}
```

**Real-time personalization** with Apache Spark:
- Process user click stream data
- Update user profiles in real-time
- Generate recommendations using MLlib

### 5. Caching Strategy

**Cache Layers**:

1. **CDN** (CloudFront):
   - Product images, videos
   - Static assets (CSS, JS)
   - TTL: 7 days

2. **Application Cache** (Redis):
   - Hot products (Top 10K)
   - Search results (Top 100K queries)
   - User sessions
   - TTL: 1 hour to 24 hours

3. **Database Query Cache**:
   - Product details
   - User profiles
   - TTL: 5 minutes

**Cache Invalidation**:
- Write-through cache for product updates
- Pub/Sub pattern for cache invalidation across servers
- Cache aside for less frequently updated data

**Example**:
```java
public Product getProduct(Long productId) {
    String cacheKey = "product:" + productId;
    
    // Try L1 cache (local)
    Product product = localCache.get(cacheKey);
    if (product != null) return product;
    
    // Try L2 cache (Redis)
    product = redisCache.get(cacheKey);
    if (product != null) {
        localCache.put(cacheKey, product);
        return product;
    }
    
    // Fetch from DB
    product = productRepository.findById(productId);
    
    // Update caches
    redisCache.set(cacheKey, product, 1, TimeUnit.HOURS);
    localCache.put(cacheKey, product);
    
    return product;
}
```

### 6. Rate Limiting

**Strategy**: Token Bucket Algorithm

**Rules**:
- Anonymous users: 100 requests/minute
- Authenticated users: 1000 requests/minute
- Search API: 50 requests/minute per user
- Order placement: 10 orders/hour per user

**Implementation**:
```java
@RateLimiter(limit = 1000, window = 1, unit = TimeUnit.MINUTES)
public List<Product> searchProducts(String query) {
    // Implementation
}
```

**Redis-based implementation**:
```java
public boolean allowRequest(String userId, String endpoint) {
    String key = "rate_limit:" + userId + ":" + endpoint;
    long currentCount = redisTemplate.opsForValue().increment(key);
    
    if (currentCount == 1) {
        redisTemplate.expire(key, 60, TimeUnit.SECONDS);
    }
    
    return currentCount <= 1000;
}
```

---

## ⚡ Scalability & Performance

### Horizontal Scaling

1. **Stateless Services**:
   - All services are stateless
   - Session stored in Redis
   - Easy to add more instances

2. **Database Scaling**:
   - **Read Replicas**: 5-10 read replicas per primary
   - **Sharding**: Shard by user_id and product_id
   - **Connection Pooling**: HikariCP with max 50 connections per instance

3. **Async Processing**:
   - Order confirmation emails
   - Inventory updates
   - Analytics events
   - Review moderation

### Performance Optimizations

1. **Database**:
   - Proper indexing on frequently queried columns
   - Denormalization for read-heavy tables
   - Materialized views for complex aggregations
   - Connection pooling

2. **API**:
   - Response compression (gzip)
   - Pagination for list endpoints
   - Field selection (?fields=id,name,price)
   - API versioning for backward compatibility

3. **Search**:
   - Elasticsearch with 3 replica shards
   - Search result caching
   - Query DSL optimization

4. **Images**:
   - Multiple sizes (thumbnail, medium, large)
   - Lazy loading
   - WebP format for modern browsers
   - Image CDN

### Monitoring & Alerting

**Metrics**:
- Request latency (p50, p95, p99)
- Error rates (4xx, 5xx)
- Database query time
- Cache hit rates
- Queue lag

**Tools**:
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Tracing**: Jaeger for distributed tracing
- **Alerting**: PagerDuty for critical alerts

---

## 🔄 Trade-offs & Alternatives

### 1. Strong vs Eventual Consistency

**Strong Consistency** (Chosen for):
- Inventory management (prevent overselling)
- Payment transactions
- Order status

**Eventual Consistency** (Acceptable for):
- Product reviews and ratings
- User activity logs
- Recommendation updates

### 2. SQL vs NoSQL

**SQL (PostgreSQL/MySQL)** for:
- Transactional data (orders, payments)
- Complex queries with joins
- ACID guarantees

**NoSQL (MongoDB/DynamoDB)** for:
- Product catalog (flexible schema for variants)
- User sessions
- Shopping cart (temporary data)

### 3. Synchronous vs Asynchronous

**Synchronous**:
- Critical path: Order creation, payment
- Real-time: Search, product details

**Asynchronous**:
- Email notifications
- Inventory adjustments
- Analytics pipeline
- Review moderation

### 4. Monolith vs Microservices

**Microservices** (Chosen):
- ✅ Independent scaling
- ✅ Team autonomy
- ✅ Technology flexibility
- ❌ Increased complexity
- ❌ Network latency
- ❌ Distributed transactions

### 5. Single Region vs Multi-Region

**Multi-Region** for global scale:
- Lower latency for users worldwide
- Higher availability (disaster recovery)
- Data residency compliance
- Complexity in data synchronization

**Trade-off**: Increased cost and complexity vs better user experience

---

## 🎓 Interview Discussion Points

1. **How do you handle flash sales with limited inventory?**
   - Use Redis for real-time inventory
   - Queue system for order processing
   - Pre-sell with reservation system

2. **How do you prevent duplicate orders on double-click?**
   - Idempotency tokens in API
   - Unique constraint on order_id
   - Frontend debouncing

3. **How do you handle product recommendations at scale?**
   - Batch processing with Spark
   - Pre-compute recommendations
   - Cache results in Redis
   - Real-time updates with Kafka streams

4. **How do you ensure payment reliability?**
   - Idempotent payment processing
   - Retry mechanism with exponential backoff
   - Webhook for payment confirmation
   - Reconciliation job

5. **How do you handle returns and refunds?**
   - Saga pattern for compensation
   - Inventory adjustment
   - Payment gateway refund API
   - Order status tracking

---

## 📚 References

- **Amazon Architecture**: https://aws.amazon.com/architecture/
- **Microservices Patterns**: https://microservices.io/patterns/
- **System Design Primer**: https://github.com/donnemartin/system-design-primer
- **Elasticsearch Best Practices**: https://www.elastic.co/guide/

---

## ✅ Checklist for Interview

- [ ] Clarify requirements (functional & non-functional)
- [ ] Estimate capacity (traffic, storage, bandwidth)
- [ ] Design high-level architecture
- [ ] Design database schema
- [ ] Define APIs
- [ ] Discuss scalability strategies
- [ ] Identify bottlenecks
- [ ] Discuss trade-offs
- [ ] Address security concerns
- [ ] Plan monitoring and alerting
