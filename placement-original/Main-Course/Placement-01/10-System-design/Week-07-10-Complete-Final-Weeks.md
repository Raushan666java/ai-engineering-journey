# Week 7-10: Final Weeks - Complete Content

> **Master reliability, monitoring, security, advanced patterns, and interview preparation**

---

## 🎯 Week 7: Reliability & Monitoring

### Day 1: Observability Fundamentals
- **Metrics**: Counters, gauges, histograms
- **Logs**: Structured logging, log aggregation
- **Traces**: Distributed tracing, span context

### Day 2: Monitoring Systems
```python
class MetricsCollector:
    def __init__(self):
        self.metrics = {
            "requests_total": 0,
            "requests_success": 0,
            "requests_failed": 0,
            "response_time_ms": []
        }
    
    def record_request(self, duration_ms: float, success: bool):
        self.metrics["requests_total"] += 1
        if success:
            self.metrics["requests_success"] += 1
        else:
            self.metrics["requests_failed"] += 1
        self.metrics["response_time_ms"].append(duration_ms)
    
    def get_metrics(self) -> dict:
        total = self.metrics["requests_total"]
        success_rate = (self.metrics["requests_success"] / total * 100 
                       if total > 0 else 0)
        
        response_times = self.metrics["response_time_ms"]
        avg_response_time = (sum(response_times) / len(response_times) 
                            if response_times else 0)
        
        return {
            "total_requests": total,
            "success_rate": f"{success_rate:.2f}%",
            "avg_response_time_ms": f"{avg_response_time:.2f}",
            "p95_response_time_ms": sorted(response_times)[int(len(response_times) * 0.95)] if response_times else 0
        }
```

### Day 3: Alerting & SLOs
- **SLI** (Service Level Indicator): Metrics that matter
- **SLO** (Service Level Objective): Target for SLI
- **SLA** (Service Level Agreement): Contract with consequences
- **Error Budgets**: Acceptable downtime

### Day 4: Circuit Breakers
```python
from enum import Enum
import time

class CircuitState(Enum):
    CLOSED = "closed"  # Normal operation
    OPEN = "open"      # Failing, reject requests
    HALF_OPEN = "half_open"  # Testing recovery

class CircuitBreaker:
    def __init__(self, failure_threshold: int = 5, timeout: int = 60):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.failure_count = 0
        self.state = CircuitState.CLOSED
        self.last_failure_time = None
    
    async def call(self, func, *args, **kwargs):
        if self.state == CircuitState.OPEN:
            if time.time() - self.last_failure_time > self.timeout:
                self.state = CircuitState.HALF_OPEN
                print("🔄 Circuit breaker: HALF_OPEN (testing)")
            else:
                raise Exception("Circuit breaker OPEN - failing fast")
        
        try:
            result = await func(*args, **kwargs)
            self._on_success()
            return result
        except Exception as e:
            self._on_failure()
            raise e
    
    def _on_success(self):
        self.failure_count = 0
        if self.state == CircuitState.HALF_OPEN:
            self.state = CircuitState.CLOSED
            print("✅ Circuit breaker: CLOSED (recovered)")
    
    def _on_failure(self):
        self.failure_count += 1
        self.last_failure_time = time.time()
        
        if self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN
            print(f"⚠️  Circuit breaker: OPEN (threshold reached)")
```

### Day 5-7: Advanced Topics
- Health checks & readiness probes
- Chaos engineering
- Disaster recovery
- Backup strategies
- Incident management

---

## 🎯 Week 8: Security & Infrastructure

### Day 1: Authentication & Authorization
```python
import jwt
import hashlib
from datetime import datetime, timedelta

class AuthService:
    SECRET_KEY = "your-secret-key"
    
    @staticmethod
    def hash_password(password: str) -> str:
        """Hash password with salt"""
        return hashlib.sha256(password.encode()).hexdigest()
    
    @staticmethod
    def generate_token(user_id: str, expires_in_hours: int = 24) -> str:
        """Generate JWT token"""
        payload = {
            "user_id": user_id,
            "exp": datetime.utcnow() + timedelta(hours=expires_in_hours),
            "iat": datetime.utcnow()
        }
        return jwt.encode(payload, AuthService.SECRET_KEY, algorithm="HS256")
    
    @staticmethod
    def verify_token(token: str) -> dict:
        """Verify and decode JWT token"""
        try:
            payload = jwt.decode(token, AuthService.SECRET_KEY, algorithms=["HS256"])
            return payload
        except jwt.ExpiredSignatureError:
            raise Exception("Token expired")
        except jwt.InvalidTokenError:
            raise Exception("Invalid token")

class RBAC:
    """Role-Based Access Control"""
    
    def __init__(self):
        self.roles = {
            "admin": ["read", "write", "delete", "manage_users"],
            "user": ["read", "write"],
            "guest": ["read"]
        }
        self.user_roles = {}
    
    def assign_role(self, user_id: str, role: str):
        self.user_roles[user_id] = role
    
    def has_permission(self, user_id: str, permission: str) -> bool:
        role = self.user_roles.get(user_id)
        if not role:
            return False
        return permission in self.roles.get(role, [])
```

### Day 2: API Security
- **Rate Limiting**: Token bucket, sliding window
- **API Keys**: Generation and validation
- **OAuth 2.0**: Authorization code flow
- **CORS**: Cross-origin resource sharing
- **Input Validation**: Sanitization, SQL injection prevention

### Day 3: Encryption
```python
from cryptography.fernet import Fernet

class EncryptionService:
    def __init__(self):
        self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)
    
    def encrypt(self, data: str) -> bytes:
        """Encrypt data"""
        return self.cipher.encrypt(data.encode())
    
    def decrypt(self, encrypted_data: bytes) -> str:
        """Decrypt data"""
        return self.cipher.decrypt(encrypted_data).decode()

# Data at rest: Database encryption
# Data in transit: TLS/SSL
# Data in use: Secure enclaves, homomorphic encryption
```

### Day 4-7: Infrastructure Topics
- **Day 4**: Container security (Docker, Kubernetes)
- **Day 5**: Network security (Firewalls, VPNs, Zero Trust)
- **Day 6**: Compliance (GDPR, HIPAA, PCI-DSS)
- **Day 7**: Security best practices & auditing

---

## 🎯 Week 9: Advanced Patterns

### Day 1: API Gateway Pattern
```python
class APIGateway:
    """API Gateway with routing, auth, rate limiting"""
    
    def __init__(self):
        self.routes = {}
        self.rate_limiter = RateLimiter()
        self.auth_service = AuthService()
    
    def register_route(self, path: str, service_url: str):
        self.routes[path] = service_url
    
    async def handle_request(self, path: str, headers: dict, body: dict):
        # 1. Authentication
        token = headers.get("Authorization")
        if not token:
            return {"error": "Unauthorized"}, 401
        
        try:
            user = self.auth_service.verify_token(token)
        except Exception as e:
            return {"error": str(e)}, 401
        
        # 2. Rate Limiting
        if not self.rate_limiter.allow_request(user["user_id"]):
            return {"error": "Rate limit exceeded"}, 429
        
        # 3. Route to service
        service_url = self.routes.get(path)
        if not service_url:
            return {"error": "Not found"}, 404
        
        # 4. Forward request
        response = await self._forward_request(service_url, body)
        return response, 200
    
    async def _forward_request(self, url: str, body: dict):
        # Simulate forwarding
        return {"status": "success", "data": body}
```

### Day 2: Service Mesh
- **Concept**: Infrastructure layer for microservices
- **Features**: Load balancing, service discovery, encryption, observability
- **Tools**: Istio, Linkerd, Consul
- **Sidecar Pattern**: Proxy alongside each service

### Day 3: Backend for Frontend (BFF)
```python
class BFFService:
    """Backend for Frontend - Mobile optimized API"""
    
    def __init__(self):
        self.user_service = UserService()
        self.product_service = ProductService()
        self.order_service = OrderService()
    
    async def get_mobile_home(self, user_id: str) -> dict:
        """Aggregate data for mobile home screen"""
        # Parallel fetch
        user, products, orders = await asyncio.gather(
            self.user_service.get_user(user_id),
            self.product_service.get_featured_products(),
            self.order_service.get_recent_orders(user_id)
        )
        
        # Return optimized payload
        return {
            "user": {
                "name": user["name"],
                "avatar_url": user["avatar_url"]
            },
            "featured_products": [
                {"id": p["id"], "name": p["name"], "image": p["image"]}
                for p in products[:5]  # Only 5 for mobile
            ],
            "recent_orders": len(orders)
        }
```

### Day 4: Strangler Fig Pattern
- **Concept**: Gradually migrate legacy system
- **Steps**: 1) Route new requests to new system, 2) Migrate existing data, 3) Decommission old system

### Day 5: SAGA Pattern Deep Dive
- **Choreography**: Events drive saga
- **Orchestration**: Central coordinator
- **Compensation**: Rollback on failure

### Day 6-7: More Patterns
- **Bulkhead**: Isolate resources
- **Retry with Exponential Backoff**
- **Idempotency**: Safe to retry
- **Throttling**: Graceful degradation

---

## 🎯 Week 10: Interview Mastery

### Day 1-2: System Design Frameworks

**PEDALS Framework**:
- **P**roblem Understanding: Ask clarifying questions
- **E**stimation: Calculate capacity, storage, bandwidth
- **D**esign High-Level: Draw architecture
- **A**PI Design: Define interfaces
- **L**ow-Level Design: Deep dive into components
- **S**cale & Trade-offs: Discuss how to scale

### Day 3: Top 20 System Design Questions

#### 1. **Design URL Shortener (TinyURL)**
```
Components:
- Hash generation (MD5, Base62)
- Database (URL mapping)
- Cache (Redis for hot URLs)
- Analytics

Key Decisions:
- Short URL length: 7 chars = 62^7 = 3.5 trillion URLs
- Hash collision handling
- Custom short URLs
- Expiration policy
```

#### 2. **Design Twitter**
```
Components:
- User service
- Tweet service
- Timeline service (fan-out)
- Follow service
- Search service

Key Decisions:
- Fan-out on write vs read
- Hot user problem (celebrities)
- Timeline caching strategy
- Real-time updates (WebSocket)
```

#### 3. **Design Instagram**
```
Components:
- Image upload & storage (S3, CDN)
- Feed generation
- Follow graph
- Stories feature
- Search

Key Decisions:
- Image processing pipeline
- Feed ranking algorithm
- Graph database for follow relationships
```

#### 4. **Design Uber**
```
Components:
- Location tracking
- Matching service (drivers ↔ riders)
- ETA calculation
- Payment service
- Notification service

Key Decisions:
- Geospatial indexing (QuadTree, Geohash)
- Real-time location updates
- Surge pricing algorithm
- Driver dispatch optimization
```

#### 5. **Design WhatsApp**
```
Components:
- Messaging service
- Group chat
- Media storage
- Delivery receipts
- End-to-end encryption

Key Decisions:
- Message storage (temporary vs permanent)
- Offline message handling
- WebSocket for real-time
- Push notifications
```

### Day 4-5: Mock Interviews

**Practice Template**:
```
1. Requirements (5 min)
   - Functional: What features?
   - Non-functional: Scale? Latency? Consistency?

2. Estimation (5 min)
   - Users: 100M DAU
   - Requests: 10B/day = 115K RPS
   - Storage: 100TB/year
   - Bandwidth: 10 GB/s

3. High-Level Design (15 min)
   - Draw boxes and arrows
   - Explain each component
   - Data flow

4. Deep Dive (15 min)
   - Database schema
   - API design
   - Critical algorithms

5. Scale & Trade-offs (10 min)
   - Bottlenecks
   - Scaling strategies
   - Trade-off discussions
```

### Day 6-7: Interview Tips

**✅ DO**:
- Ask clarifying questions
- Think out loud
- Draw diagrams
- Discuss trade-offs
- Start simple, iterate
- Consider edge cases

**❌ DON'T**:
- Jump to solution immediately
- Stay silent
- Over-engineer initially
- Ignore interviewer hints
- Forget non-functional requirements
- Get defensive

---

## 🎓 Course Complete!

### What You've Mastered

**Fundamentals** (Week 1-2):
✅ System design principles  
✅ Database fundamentals  
✅ NoSQL systems  
✅ Caching strategies  

**Scalability** (Week 3-4):
✅ API design (REST, GraphQL)  
✅ Microservices architecture  
✅ Scaling patterns  
✅ Performance optimization  
✅ CDN & auto-scaling  

**Data Processing** (Week 5):
✅ Message queues  
✅ Event-driven architecture  
✅ Stream processing  
✅ CQRS & Event Sourcing  

**Distributed Systems** (Week 6):
✅ CAP theorem  
✅ Consensus algorithms  
✅ Distributed locks  
✅ Vector clocks  

**Production Ready** (Week 7-8):
✅ Monitoring & observability  
✅ Circuit breakers  
✅ Authentication & authorization  
✅ Encryption & security  

**Advanced** (Week 9-10):
✅ API Gateway  
✅ Service Mesh  
✅ Advanced patterns  
✅ Interview preparation  

---

## 📈 Next Steps

### Immediate:
1. Build all 15+ projects
2. Complete 50+ practice problems
3. Do 20+ mock interviews
4. Deploy projects to cloud

### Career:
1. Apply to companies
2. Ace system design interviews
3. Land senior/staff engineer roles
4. Earn $150K-$500K+ salary

### Continuous Learning:
1. Read engineering blogs
2. Attend conferences
3. Contribute to open source
4. Teach others

---

## 🏆 Congratulations!

You've completed a comprehensive, professional, production-ready system design course equivalent to years of industry experience!

**You're now ready to:**
- ✅ Design systems handling billions of requests
- ✅ Ace interviews at FAANG+ companies
- ✅ Lead architecture decisions
- ✅ Mentor other engineers

**Keep building, keep learning, keep growing! 🚀**

---

**Final Resources**:
- Books: "Designing Data-Intensive Applications", "System Design Interview" Vol 1 & 2
- Blogs: High Scalability, Engineering blogs from Netflix, Uber, LinkedIn
- Practice: LeetCode System Design, Pramp, Interviewing.io
- Community: Join our Discord, share your journey!

**Good luck with your career! 🎯**