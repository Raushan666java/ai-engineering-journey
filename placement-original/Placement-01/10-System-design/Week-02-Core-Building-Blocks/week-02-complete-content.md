# 📚 **WEEK 2: CORE BUILDING BLOCKS**
## Database Design, Caching, Load Balancing & Message Queues

---

## 🎯 **LEARNING OBJECTIVES**
By the end of this week, you will be able to:
- Design scalable database architectures with proper indexing and sharding
- Implement multi-level caching strategies for optimal performance
- Configure load balancers for high availability and scalability
- Design asynchronous systems using message queues
- Choose appropriate data storage solutions for different use cases

---

## 📋 **WEEK 2 ROADMAP**

### **Day 1-2: Database Design & Scaling**
- Database architecture patterns
- Indexing strategies
- Sharding and partitioning
- Replication and consistency
- NoSQL vs SQL trade-offs

### **Day 3-4: Caching Strategies**
- Cache-aside, write-through, write-behind patterns
- Redis, Memcached, CDN caching
- Cache invalidation strategies
- Cache consistency and performance

### **Day 5-6: Load Balancing**
- Load balancing algorithms
- Session persistence and sticky sessions
- Health checks and failover
- Global load balancing (DNS, Anycast)

### **Day 7: Message Queues & Async Processing**
- Message queue patterns
- Event-driven architecture
- Asynchronous communication
- Dead letter queues and error handling

---

## 🗄️ **DATABASE DESIGN & SCALING**

### **1. Database Architecture Patterns**

#### **Single Database (Monolithic)**
```
┌─────────────────┐
│   Application   │
│                 │
│  ┌────────────┐ │
│  │  Database  │ │
│  └────────────┘ │
└─────────────────┘
```
**Pros**: Simple, ACID compliance
**Cons**: Single point of failure, scaling challenges

#### **Read Replicas**
```
┌─────────────────┐    ┌─────────────────┐
│   Application   │────│   Master DB     │
│                 │    └─────────────────┘
└─────────────────┐              │
                 │              ▼
                 │    ┌─────────────────┐
                 └────│   Read Replica  │
                      │   (Read-Only)   │
                      └─────────────────┘
```
**Use Case**: Read-heavy applications (90% reads, 10% writes)

#### **Multi-Master Replication**
```
┌─────────────────┐    ┌─────────────────┐
│   Application   │────│   Master DB 1   │
│                 │    └─────────────────┘
└─────────────────┐              │
                 │              │
                 │    ┌─────────────────┐
                 └────│   Master DB 2   │
                      └─────────────────┘
```
**Use Case**: High availability, global applications

#### **Database Sharding**
```
┌─────────────────┐
│   Shard Router  │
└─────────────────┘
         │
    ┌────┼────┐
    │         │
┌───▼──┐   ┌───▼──┐
│Shard 1│   │Shard 2│
└───────┘   └───────┘
```

### **2. Indexing Strategies**

#### **B-Tree Index (Default)**
```sql
-- Single column index
CREATE INDEX idx_users_email ON users(email);

-- Composite index
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Partial index
CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;
```

#### **Hash Index (Equality Only)**
```sql
CREATE INDEX idx_users_email_hash ON users USING HASH (email);
```
**Best for**: Exact match queries (=)

#### **GIN Index (PostgreSQL)**
```sql
-- For arrays and full-text search
CREATE INDEX idx_posts_tags ON posts USING GIN (tags);
CREATE INDEX idx_posts_content ON posts USING GIN (to_tsvector('english', content));
```

#### **BRIN Index (Block Range INdex)**
```sql
-- For large tables with correlated data
CREATE INDEX idx_logs_timestamp ON logs USING BRIN (created_at);
```

### **3. Database Sharding Strategies**

#### **Range-Based Sharding**
```python
def get_shard(user_id: int) -> str:
    """Shard by user ID ranges"""
    if user_id < 1000000:
        return "shard_1"
    elif user_id < 2000000:
        return "shard_2"
    else:
        return "shard_3"
```

#### **Hash-Based Sharding**
```python
def get_shard(user_id: int, num_shards: int = 4) -> str:
    """Consistent hashing for even distribution"""
    shard_id = user_id % num_shards
    return f"shard_{shard_id + 1}"
```

#### **Directory-Based Sharding**
```python
class ShardDirectory:
    def __init__(self):
        self.directory = {}  # entity_id -> shard_id
        self.shards = ["shard_1", "shard_2", "shard_3", "shard_4"]

    def get_shard(self, entity_id: str) -> str:
        if entity_id in self.directory:
            return self.directory[entity_id]

        # Assign to least loaded shard
        shard = self._get_least_loaded_shard()
        self.directory[entity_id] = shard
        return shard
```

### **4. CAP Theorem in Practice**

| Database | Consistency | Availability | Partition Tolerance |
|----------|-------------|--------------|-------------------|
| PostgreSQL | ✅ Strong | ❌ Limited | ❌ Limited |
| MongoDB | ⚠️ Eventual | ✅ High | ✅ Strong |
| Cassandra | ⚠️ Eventual | ✅ High | ✅ Strong |
| Redis | ⚠️ Eventual | ✅ High | ❌ Limited |

---

## 🚀 **CACHING STRATEGIES**

### **1. Cache Patterns**

#### **Cache-Aside (Lazy Loading)**
```python
class CacheAsidePattern:
    def __init__(self, cache, database):
        self.cache = cache
        self.db = database

    def get_user(self, user_id):
        # Try cache first
        user = self.cache.get(f"user:{user_id}")
        if user:
            return user

        # Cache miss - fetch from DB
        user = self.db.get_user(user_id)
        if user:
            self.cache.set(f"user:{user_id}", user, ttl=3600)

        return user

    def update_user(self, user_id, user_data):
        # Update database first
        self.db.update_user(user_id, user_data)

        # Invalidate cache
        self.cache.delete(f"user:{user_id}")
```

#### **Write-Through Cache**
```python
class WriteThroughPattern:
    def update_user(self, user_id, user_data):
        # Update cache first
        self.cache.set(f"user:{user_id}", user_data, ttl=3600)

        # Then update database
        self.db.update_user(user_id, user_data)
```

#### **Write-Behind (Write-Back) Cache**
```python
class WriteBehindPattern:
    def __init__(self):
        self.pending_writes = []

    def update_user(self, user_id, user_data):
        # Update cache immediately
        self.cache.set(f"user:{user_id}", user_data, ttl=3600)

        # Queue database write
        self.pending_writes.append({
            'user_id': user_id,
            'data': user_data,
            'timestamp': time.time()
        })

        # Flush to database asynchronously
        self._flush_pending_writes_async()
```

### **2. Cache Invalidation Strategies**

#### **Time-To-Live (TTL)**
```python
# Automatic expiration
cache.set("user:123", user_data, ttl=3600)  # 1 hour
```

#### **Version-Based Invalidation**
```python
class VersionedCache:
    def get_user(self, user_id):
        version = self.cache.get(f"user:{user_id}:version") or 0
        user = self.cache.get(f"user:{user_id}:v{version}")

        if not user:
            user = self.db.get_user(user_id)
            version = self._increment_version(user_id)
            self.cache.set(f"user:{user_id}:v{version}", user, ttl=3600)

        return user

    def update_user(self, user_id, user_data):
        self.db.update_user(user_id, user_data)
        self._increment_version(user_id)
```

#### **Event-Based Invalidation**
```python
class EventDrivenCache:
    def __init__(self):
        self.pubsub = redis.pubsub()

    def invalidate_user_cache(self, user_id):
        # Publish invalidation event
        self.redis.publish('cache_invalidation', f"user:{user_id}")

    def listen_for_invalidations(self):
        self.pubsub.subscribe('cache_invalidation')

        for message in self.pubsub.listen():
            if message['type'] == 'message':
                cache_key = message['data']
                self.cache.delete(cache_key)
```

### **3. Multi-Level Caching**

```python
class MultiLevelCache:
    def __init__(self):
        self.l1_cache = RedisCache()  # Local Redis (fastest)
        self.l2_cache = Memcached()   # Remote Memcached
        self.l3_cache = CDNCache()    # CDN (slowest but global)

    def get(self, key):
        # Level 1: Local cache
        value = self.l1_cache.get(key)
        if value:
            return value

        # Level 2: Remote cache
        value = self.l2_cache.get(key)
        if value:
            # Backfill L1 cache
            self.l1_cache.set(key, value, ttl=300)
            return value

        # Level 3: CDN/origin
        value = self.l3_cache.get(key)
        if value:
            # Backfill L2 and L1
            self.l2_cache.set(key, value, ttl=3600)
            self.l1_cache.set(key, value, ttl=300)

        return value
```

---

## ⚖️ **LOAD BALANCING**

### **1. Load Balancing Algorithms**

#### **Round Robin**
```python
class RoundRobinLB:
    def __init__(self, servers):
        self.servers = servers
        self.current = 0

    def get_server(self):
        server = self.servers[self.current]
        self.current = (self.current + 1) % len(self.servers)
        return server
```

#### **Weighted Round Robin**
```python
class WeightedRoundRobinLB:
    def __init__(self, servers_with_weights):
        self.servers = []
        for server, weight in servers_with_weights.items():
            self.servers.extend([server] * weight)
        self.current = 0

    def get_server(self):
        server = self.servers[self.current]
        self.current = (self.current + 1) % len(self.servers)
        return server

# Usage
lb = WeightedRoundRobinLB({
    'server1': 3,  # 30% load
    'server2': 7   # 70% load
})
```

#### **Least Connections**
```python
class LeastConnectionsLB:
    def __init__(self, servers):
        self.servers = {server: 0 for server in servers}

    def get_server(self):
        # Find server with least connections
        server = min(self.servers, key=self.servers.get)
        self.servers[server] += 1
        return server

    def release_connection(self, server):
        if server in self.servers:
            self.servers[server] = max(0, self.servers[server] - 1)
```

#### **IP Hash**
```python
class IPHashLB:
    def __init__(self, servers):
        self.servers = servers

    def get_server(self, client_ip):
        # Hash client IP to server
        hash_value = hash(client_ip)
        server_index = hash_value % len(self.servers)
        return self.servers[server_index]
```

### **2. Session Persistence**

#### **Sticky Sessions**
```nginx
# Nginx configuration
upstream backend {
    ip_hash;  # Sticky sessions based on client IP
    server backend1.example.com;
    server backend2.example.com;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### **Session Store Approach**
```python
class SessionStoreLB:
    def __init__(self, redis_client):
        self.redis = redis_client
        self.servers = ['server1', 'server2', 'server3']

    def get_server_for_session(self, session_id):
        # Check if session is already assigned to a server
        server = self.redis.get(f"session:{session_id}")
        if server:
            return server

        # Assign to least loaded server
        server = self._get_least_loaded_server()
        self.redis.setex(f"session:{session_id}", 3600, server)
        return server
```

### **3. Health Checks**

```python
class HealthChecker:
    def __init__(self, servers):
        self.servers = servers
        self.healthy_servers = set(servers)

    def check_health(self):
        """Periodically check server health"""
        for server in self.servers:
            if self._is_healthy(server):
                self.healthy_servers.add(server)
            else:
                self.healthy_servers.discard(server)

    def _is_healthy(self, server):
        """Check if server is responding"""
        try:
            response = requests.get(f"http://{server}/health", timeout=5)
            return response.status_code == 200
        except:
            return False

    def get_healthy_servers(self):
        return list(self.healthy_servers)
```

---

## 📨 **MESSAGE QUEUES & ASYNC PROCESSING**

### **1. Message Queue Patterns**

#### **Point-to-Point (Queue)**
```
Producer ──► Queue ──► Consumer
```

#### **Publish-Subscribe (Topic)**
```
Producer ──► Topic ──┬──► Consumer 1
                     ├──► Consumer 2
                     └──► Consumer 3
```

#### **Request-Reply**
```
Client ──► Request Queue ──► Server
    ◄── Response Queue ◄── Server
```

### **2. Message Queue Implementation**

#### **Simple Queue with Redis**
```python
import redis
import json

class RedisQueue:
    def __init__(self, name):
        self.redis = redis.Redis()
        self.name = name

    def enqueue(self, message):
        """Add message to queue"""
        self.redis.lpush(self.name, json.dumps(message))

    def dequeue(self):
        """Remove and return message from queue"""
        _, message = self.redis.brpop(self.name, timeout=0)
        return json.loads(message) if message else None

    def size(self):
        """Get queue size"""
        return self.redis.llen(self.name)
```

#### **Producer Example**
```python
class EmailService:
    def __init__(self, queue):
        self.queue = queue

    def send_welcome_email(self, user_email):
        """Queue email for sending"""
        message = {
            'type': 'welcome_email',
            'email': user_email,
            'template': 'welcome.html',
            'priority': 'normal'
        }
        self.queue.enqueue(message)
```

#### **Consumer Example**
```python
class EmailWorker:
    def __init__(self, queue):
        self.queue = queue

    def process_emails(self):
        """Process email queue"""
        while True:
            message = self.queue.dequeue()
            if message:
                self._send_email(message)

    def _send_email(self, message):
        """Send actual email"""
        if message['type'] == 'welcome_email':
            # Send welcome email
            print(f"Sending welcome email to {message['email']}")
```

### **3. Dead Letter Queue (DLQ)**

```python
class MessageProcessor:
    def __init__(self, main_queue, dlq, max_retries=3):
        self.main_queue = main_queue
        self.dlq = dlq
        self.max_retries = max_retries

    def process_message(self, message):
        """Process message with retry logic"""
        retry_count = message.get('retry_count', 0)

        try:
            self._process(message)
        except Exception as e:
            retry_count += 1

            if retry_count < self.max_retries:
                # Retry with backoff
                message['retry_count'] = retry_count
                delay = 2 ** retry_count  # Exponential backoff
                time.sleep(delay)
                self.main_queue.enqueue(message)
            else:
                # Move to DLQ
                self.dlq.enqueue({
                    'original_message': message,
                    'error': str(e),
                    'failed_at': time.time()
                })
```

### **4. Event-Driven Architecture**

```python
class EventBus:
    def __init__(self):
        self.handlers = {}

    def subscribe(self, event_type, handler):
        """Subscribe to event type"""
        if event_type not in self.handlers:
            self.handlers[event_type] = []
        self.handlers[event_type].append(handler)

    def publish(self, event):
        """Publish event to all subscribers"""
        event_type = event['type']
        if event_type in self.handlers:
            for handler in self.handlers[event_type]:
                try:
                    handler(event)
                except Exception as e:
                    print(f"Handler error: {e}")

# Usage
event_bus = EventBus()

# Subscribe to events
event_bus.subscribe('user_registered', send_welcome_email)
event_bus.subscribe('user_registered', create_user_profile)
event_bus.subscribe('user_registered', log_registration)

# Publish event
event_bus.publish({
    'type': 'user_registered',
    'user_id': 123,
    'email': 'user@example.com'
})
```

---

## 🏗️ **SYSTEM DESIGN EXAMPLES**

### **Example 1: E-commerce Platform**

```python
class EcommerceSystem:
    def __init__(self):
        self.db = PostgreSQLCluster()
        self.cache = RedisCluster()
        self.queue = KafkaCluster()
        self.lb = LoadBalancer()

    def place_order(self, user_id, items):
        """Handle order placement with all components"""

        # 1. Check inventory (cached)
        for item in items:
            available = self.cache.get(f"inventory:{item['id']}")
            if not available or available < item['quantity']:
                raise ValueError("Insufficient inventory")

        # 2. Calculate total (database query)
        total = self.db.calculate_order_total(items)

        # 3. Create order (database write)
        order_id = self.db.create_order(user_id, items, total)

        # 4. Update inventory (async)
        self.queue.publish('inventory_update', {
            'order_id': order_id,
            'items': items
        })

        # 5. Send confirmation email (async)
        self.queue.publish('email', {
            'type': 'order_confirmation',
            'user_id': user_id,
            'order_id': order_id
        })

        return order_id
```

### **Example 2: Social Media Feed**

```python
class SocialMediaFeed:
    def __init__(self):
        self.db = CassandraCluster()  # For timeline data
        self.cache = RedisCluster()   # For hot data
        self.queue = RabbitMQ()       # For fanout

    def post_content(self, user_id, content):
        """Post content to followers' feeds"""

        # 1. Store post in database
        post_id = self.db.save_post(user_id, content)

        # 2. Get followers
        followers = self.cache.get(f"followers:{user_id}")
        if not followers:
            followers = self.db.get_followers(user_id)
            self.cache.set(f"followers:{user_id}", followers, ttl=3600)

        # 3. Fan out to followers' timelines (async)
        for follower_id in followers:
            self.queue.publish(f"timeline:{follower_id}", {
                'post_id': post_id,
                'user_id': user_id,
                'content': content,
                'timestamp': time.time()
            })

    def get_feed(self, user_id, page=1):
        """Get user's feed with caching"""

        cache_key = f"feed:{user_id}:{page}"

        # Try cache first
        feed = self.cache.get(cache_key)
        if feed:
            return feed

        # Cache miss - fetch from database
        feed = self.db.get_timeline(user_id, page=page, limit=20)

        # Cache for 5 minutes
        self.cache.set(cache_key, feed, ttl=300)

        return feed
```

---

## 📊 **PERFORMANCE OPTIMIZATION**

### **Database Optimization Techniques**

| Technique | Use Case | Example |
|-----------|----------|---------|
| **Indexing** | Frequent queries | `CREATE INDEX idx_user_email ON users(email)` |
| **Partitioning** | Large tables | `PARTITION BY RANGE (created_at)` |
| **Connection Pooling** | High concurrency | PgBouncer, HikariCP |
| **Read Replicas** | Read-heavy load | Master-Slave replication |
| **Caching** | Hot data | Redis, Memcached |

### **Cache Performance Metrics**

```python
class CacheMetrics:
    def __init__(self):
        self.hits = 0
        self.misses = 0
        self.requests = 0

    def record_hit(self):
        self.hits += 1
        self.requests += 1

    def record_miss(self):
        self.misses += 1
        self.requests += 1

    @property
    def hit_rate(self):
        return self.hits / self.requests if self.requests > 0 else 0

    @property
    def miss_rate(self):
        return self.misses / self.requests if self.requests > 0 else 0
```

### **Load Balancer Metrics**

```python
class LoadBalancerMetrics:
    def __init__(self):
        self.server_metrics = {}

    def record_request(self, server, response_time, success=True):
        if server not in self.server_metrics:
            self.server_metrics[server] = {
                'requests': 0,
                'successes': 0,
                'failures': 0,
                'total_response_time': 0
            }

        metrics = self.server_metrics[server]
        metrics['requests'] += 1
        metrics['total_response_time'] += response_time

        if success:
            metrics['successes'] += 1
        else:
            metrics['failures'] += 1

    def get_server_stats(self, server):
        metrics = self.server_metrics.get(server, {})
        if not metrics['requests']:
            return {'avg_response_time': 0, 'success_rate': 0}

        return {
            'avg_response_time': metrics['total_response_time'] / metrics['requests'],
            'success_rate': metrics['successes'] / metrics['requests']
        }
```

---

## 🔧 **HANDS-ON EXERCISES**

### **Exercise 1: Database Sharding**
Design and implement a sharding strategy for a user database with 100M users.

**Requirements:**
- Even distribution of users
- Minimal cross-shard queries
- Support for rebalancing

```python
class UserShardManager:
    def __init__(self, num_shards=4):
        self.num_shards = num_shards
        self.shard_map = {}  # user_id -> shard_id

    def get_shard(self, user_id: int) -> int:
        """Implement your sharding logic here"""
        # TODO: Implement consistent hashing or range-based sharding
        pass

    def add_shard(self):
        """Handle adding new shards"""
        # TODO: Implement shard rebalancing
        pass
```

### **Exercise 2: Multi-Level Cache**
Implement a multi-level caching system with TTL and invalidation.

```python
class MultiLevelCache:
    def __init__(self):
        self.l1_cache = {}  # In-memory
        self.l2_cache = {}  # Redis-like
        self.l3_cache = {}  # Database-like

    def get(self, key):
        """Implement cache hierarchy lookup"""
        # TODO: Check L1, then L2, then L3
        pass

    def set(self, key, value, ttl=None):
        """Implement cache hierarchy storage"""
        # TODO: Store in all levels with appropriate TTL
        pass

    def invalidate(self, key):
        """Implement cache invalidation across levels"""
        # TODO: Remove from all cache levels
        pass
```

### **Exercise 3: Load Balancer**
Implement a load balancer with health checks and different algorithms.

```python
class LoadBalancer:
    def __init__(self, servers):
        self.servers = servers
        self.healthy_servers = set(servers)
        self.algorithm = 'round_robin'  # or 'least_connections', 'ip_hash'

    def get_server(self, client_ip=None):
        """Implement load balancing algorithm"""
        # TODO: Implement chosen algorithm
        pass

    def mark_unhealthy(self, server):
        """Mark server as unhealthy"""
        # TODO: Remove from healthy servers
        pass

    def mark_healthy(self, server):
        """Mark server as healthy"""
        # TODO: Add to healthy servers
        pass
```

---

## 📚 **ADDITIONAL RESOURCES**

### **Books**
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "Database Internals" by Alex Petrov
- "Redis in Action" by Josiah Carlson

### **Online Courses**
- Database Design & Management (Coursera)
- Distributed Systems (MIT 6.824)
- System Design Interview (educative.io)

### **Tools to Practice**
- PostgreSQL, MongoDB, Redis
- Apache Kafka, RabbitMQ
- Nginx, HAProxy
- Docker, Kubernetes

---

## 🎯 **WEEK 2 QUIZ**

### **Multiple Choice Questions**

1. **Which caching pattern updates cache and database simultaneously?**
   - A) Cache-Aside
   - B) Write-Through
   - C) Write-Behind
   - D) Cache-Only

2. **What does CAP theorem state?**
   - A) You can have at most two of Consistency, Availability, Partition Tolerance
   - B) Database performance depends on CPU, RAM, Storage
   - C) Applications should be Containerized, Automated, Portable
   - D) Systems should be Scalable, Available, Performant

3. **Which load balancing algorithm ensures session persistence?**
   - A) Round Robin
   - B) Least Connections
   - C) IP Hash
   - D) Random

### **Short Answer Questions**

1. Explain the difference between database sharding and partitioning.
2. When would you choose eventual consistency over strong consistency?
3. Describe how a CDN works as part of a caching strategy.

### **Design Questions**

1. Design a caching strategy for a social media feed system.
2. How would you handle database failover in a multi-region setup?
3. Design a message queue system for order processing in an e-commerce platform.

---

## 🚀 **PROJECT ASSIGNMENT**

### **Distributed Cache System**
Build a distributed caching system with the following features:

**Requirements:**
- Multiple cache nodes
- Consistent hashing for key distribution
- Cache replication
- Automatic failover
- RESTful API for get/set operations

**Bonus Features:**
- Cache analytics and monitoring
- TTL support
- Cache warming
- Integration with existing applications

**Deliverables:**
- Complete source code
- Docker configuration
- Performance benchmarks
- Documentation

---

## 🎉 **CONCLUSION**

Week 2 covered the core building blocks that form the foundation of scalable systems:

- **Database Design**: Proper schema design, indexing, and scaling strategies
- **Caching**: Multi-level caching patterns and invalidation strategies
- **Load Balancing**: Algorithms, session management, and health checks
- **Message Queues**: Asynchronous processing and event-driven architecture

**Key Takeaways:**
1. Choose the right database for your consistency requirements
2. Implement caching at multiple levels for optimal performance
3. Use load balancers to distribute traffic and ensure high availability
4. Leverage message queues for decoupling and asynchronous processing

**Next Week**: API Design, Microservices, and Service Communication! 🚀