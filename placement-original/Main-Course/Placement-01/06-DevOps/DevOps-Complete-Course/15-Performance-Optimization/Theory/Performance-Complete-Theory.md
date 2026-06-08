# ⚡ Performance Optimization - Complete Theory

## 📋 Performance Fundamentals

### What is Performance Optimization?
Performance optimization is the process of improving system efficiency, speed, and resource utilization to deliver better user experience and reduce operational costs.

### Key Performance Metrics
- **Latency**: Response time for individual requests
- **Throughput**: Number of requests processed per unit time
- **Resource Utilization**: CPU, memory, disk, network usage
- **Availability**: System uptime percentage
- **Scalability**: Ability to handle increased load

### Performance Testing Types
- **Load Testing**: Normal expected load
- **Stress Testing**: Beyond normal capacity
- **Spike Testing**: Sudden load increases
- **Volume Testing**: Large amounts of data
- **Endurance Testing**: Extended periods

## 🖥️ Application Performance Optimization

### Code-Level Optimization
```python
# Inefficient code example
def get_user_orders_slow(user_id):
    user = db.query("SELECT * FROM users WHERE id = %s", user_id)
    orders = []
    for order_id in user.order_ids:
        order = db.query("SELECT * FROM orders WHERE id = %s", order_id)
        orders.append(order)
    return orders

# Optimized version
def get_user_orders_fast(user_id):
    # Single query with JOIN
    return db.query("""
        SELECT o.* FROM orders o
        JOIN users u ON u.id = o.user_id
        WHERE u.id = %s
    """, user_id)

# Caching implementation
import redis
import json
from functools import wraps

redis_client = redis.Redis(host='localhost', port=6379, db=0)

def cache_result(expiration=3600):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Create cache key
            cache_key = f"{func.__name__}:{hash(str(args) + str(kwargs))}"
            
            # Try to get from cache
            cached_result = redis_client.get(cache_key)
            if cached_result:
                return json.loads(cached_result)
            
            # Execute function and cache result
            result = func(*args, **kwargs)
            redis_client.setex(cache_key, expiration, json.dumps(result))
            return result
        return wrapper
    return decorator

@cache_result(expiration=1800)
def get_user_profile(user_id):
    return db.query("SELECT * FROM users WHERE id = %s", user_id)
```

### Database Optimization
```sql
-- Index optimization
-- Before: Slow query
SELECT * FROM orders WHERE customer_id = 123 AND order_date > '2023-01-01';

-- Create appropriate indexes
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);
CREATE INDEX idx_orders_status ON orders(status);

-- Query optimization
-- Inefficient query
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.customer_id
GROUP BY u.id, u.name;

-- Optimized query with conditions
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.customer_id
WHERE u.active = true
  AND (o.created_at > '2023-01-01' OR o.id IS NULL)
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 0;

-- Connection pooling configuration
-- PostgreSQL connection pool
max_connections = 100
shared_buffers = 256MB
effective_cache_size = 1GB
work_mem = 4MB
maintenance_work_mem = 64MB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
default_statistics_target = 100
```

### Caching Strategies
```python
# Multi-level caching implementation
import memcache
import redis
from django.core.cache import cache

class MultiLevelCache:
    def __init__(self):
        self.l1_cache = {}  # In-memory cache
        self.l2_cache = redis.Redis(host='localhost', port=6379, db=0)  # Redis
        self.l3_cache = memcache.Client(['127.0.0.1:11211'])  # Memcached
    
    def get(self, key):
        # Try L1 cache (fastest)
        if key in self.l1_cache:
            return self.l1_cache[key]
        
        # Try L2 cache (Redis)
        value = self.l2_cache.get(key)
        if value:
            self.l1_cache[key] = json.loads(value)
            return self.l1_cache[key]
        
        # Try L3 cache (Memcached)
        value = self.l3_cache.get(key)
        if value:
            self.l2_cache.setex(key, 3600, json.dumps(value))
            self.l1_cache[key] = value
            return value
        
        return None
    
    def set(self, key, value, ttl=3600):
        # Set in all cache levels
        self.l1_cache[key] = value
        self.l2_cache.setex(key, ttl, json.dumps(value))
        self.l3_cache.set(key, value, time=ttl)

# CDN configuration for static assets
# Nginx configuration for caching
server {
    listen 80;
    server_name example.com;
    
    # Static file caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary Accept-Encoding;
        gzip_static on;
    }
    
    # API response caching
    location /api/ {
        proxy_pass http://backend;
        proxy_cache api_cache;
        proxy_cache_valid 200 302 10m;
        proxy_cache_valid 404 1m;
        add_header X-Cache-Status $upstream_cache_status;
    }
}

# Cache configuration
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=api_cache:10m max_size=10g 
                 inactive=60m use_temp_path=off;
```

## 🏗️ Infrastructure Performance Optimization

### Server Optimization
```bash
# CPU optimization
# Check CPU usage
top
htop
sar -u 1 10

# CPU affinity for critical processes
taskset -c 0,1 nginx
echo "2" > /proc/irq/24/smp_affinity  # Bind interrupt to specific CPU

# Memory optimization
# Check memory usage
free -h
vmstat 1 10
cat /proc/meminfo

# Optimize swap usage
echo 10 > /proc/sys/vm/swappiness  # Reduce swap usage
echo 1 > /proc/sys/vm/drop_caches  # Clear page cache

# Disk I/O optimization
# Check disk performance
iostat -x 1 10
iotop

# Optimize file system
# Use appropriate file system (ext4, xfs, btrfs)
mount -o noatime,nodiratime /dev/sda1 /data

# SSD optimization
echo noop > /sys/block/sda/queue/scheduler
echo 1 > /sys/block/sda/queue/rotational
```

### Network Optimization
```bash
# Network tuning parameters
# /etc/sysctl.conf
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_rmem = 4096 87380 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.tcp_congestion_control = bbr
net.core.netdev_max_backlog = 5000
net.ipv4.tcp_window_scaling = 1

# Apply settings
sysctl -p

# Network monitoring
netstat -i
ss -tuln
iftop
nethogs
```

### Load Balancing Configuration
```nginx
# Nginx load balancer optimization
upstream backend {
    least_conn;  # Load balancing method
    
    server backend1.example.com:8080 weight=3 max_fails=3 fail_timeout=30s;
    server backend2.example.com:8080 weight=2 max_fails=3 fail_timeout=30s;
    server backend3.example.com:8080 weight=1 max_fails=3 fail_timeout=30s;
    
    # Health check
    keepalive 32;
}

server {
    listen 80;
    
    # Connection optimization
    keepalive_timeout 65;
    keepalive_requests 100;
    
    # Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    
    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        # Connection pooling
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # Timeouts
        proxy_connect_timeout 5s;
        proxy_send_timeout 10s;
        proxy_read_timeout 10s;
        
        # Rate limiting
        limit_req zone=api burst=20 nodelay;
    }
}
```

## 🐳 Container Performance Optimization

### Docker Optimization
```dockerfile
# Optimized Dockerfile
FROM node:18-alpine AS builder

# Use specific versions
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

WORKDIR /app

# Copy only necessary files
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./

USER nodejs

# Optimize Node.js
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=512"

EXPOSE 3000

CMD ["node", "dist/server.js"]
```

### Kubernetes Resource Optimization
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: optimized-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: optimized-app
  template:
    metadata:
      labels:
        app: optimized-app
    spec:
      containers:
      - name: app
        image: myapp:latest
        
        # Resource limits and requests
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        
        # Probes for health checking
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 3
        
        # Environment optimization
        env:
        - name: NODE_ENV
          value: "production"
        - name: NODE_OPTIONS
          value: "--max-old-space-size=512"

---
# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: optimized-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: optimized-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 50
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
```

## 📊 Performance Monitoring and Analysis

### Application Performance Monitoring
```python
# Custom performance monitoring
import time
import psutil
import logging
from functools import wraps

class PerformanceMonitor:
    def __init__(self):
        self.metrics = {}
        self.logger = logging.getLogger('performance')
    
    def measure_execution_time(self, func_name=None):
        def decorator(func):
            @wraps(func)
            def wrapper(*args, **kwargs):
                start_time = time.time()
                start_memory = psutil.Process().memory_info().rss
                
                try:
                    result = func(*args, **kwargs)
                    return result
                finally:
                    end_time = time.time()
                    end_memory = psutil.Process().memory_info().rss
                    
                    execution_time = end_time - start_time
                    memory_used = end_memory - start_memory
                    
                    name = func_name or func.__name__
                    self.logger.info(f"{name}: {execution_time:.4f}s, Memory: {memory_used/1024/1024:.2f}MB")
                    
                    # Store metrics
                    if name not in self.metrics:
                        self.metrics[name] = []
                    self.metrics[name].append({
                        'execution_time': execution_time,
                        'memory_used': memory_used,
                        'timestamp': time.time()
                    })
            
            return wrapper
        return decorator
    
    def get_performance_report(self):
        report = {}
        for func_name, measurements in self.metrics.items():
            if measurements:
                times = [m['execution_time'] for m in measurements]
                report[func_name] = {
                    'avg_time': sum(times) / len(times),
                    'min_time': min(times),
                    'max_time': max(times),
                    'call_count': len(times)
                }
        return report

# Usage
monitor = PerformanceMonitor()

@monitor.measure_execution_time()
def expensive_operation():
    time.sleep(0.1)  # Simulate work
    return "result"
```

### Load Testing with Artillery
```yaml
# artillery-config.yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120
      arrivalRate: 50
      name: "Ramp up load"
    - duration: 300
      arrivalRate: 100
      name: "Sustained load"
  payload:
    path: "users.csv"
    fields:
      - "username"
      - "password"

scenarios:
  - name: "User login and browse"
    weight: 70
    flow:
      - post:
          url: "/api/login"
          json:
            username: "{{ username }}"
            password: "{{ password }}"
          capture:
            - json: "$.token"
              as: "authToken"
      - get:
          url: "/api/profile"
          headers:
            Authorization: "Bearer {{ authToken }}"
      - think: 5
      - get:
          url: "/api/products"
          headers:
            Authorization: "Bearer {{ authToken }}"

  - name: "Anonymous browsing"
    weight: 30
    flow:
      - get:
          url: "/"
      - think: 3
      - get:
          url: "/products"
      - think: 2
      - get:
          url: "/about"
```

### Performance Testing with K6
```javascript
// k6-performance-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('errors');

export let options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up
    { duration: '5m', target: 100 }, // Stay at 100 users
    { duration: '2m', target: 200 }, // Ramp up to 200 users
    { duration: '5m', target: 200 }, // Stay at 200 users
    { duration: '2m', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests under 500ms
    http_req_failed: ['rate<0.1'],    // Error rate under 10%
    errors: ['rate<0.1'],             // Custom error rate under 10%
  },
};

export default function() {
  // Login
  let loginResponse = http.post('http://localhost:3000/api/login', {
    username: 'testuser',
    password: 'password123'
  });
  
  let loginSuccess = check(loginResponse, {
    'login status is 200': (r) => r.status === 200,
    'login response time < 200ms': (r) => r.timings.duration < 200,
  });
  
  errorRate.add(!loginSuccess);
  
  if (loginSuccess) {
    let token = loginResponse.json('token');
    
    // Get user profile
    let profileResponse = http.get('http://localhost:3000/api/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    check(profileResponse, {
      'profile status is 200': (r) => r.status === 200,
      'profile response time < 100ms': (r) => r.timings.duration < 100,
    });
  }
  
  sleep(1);
}

export function handleSummary(data) {
  return {
    'performance-report.html': htmlReport(data),
    'performance-summary.json': JSON.stringify(data),
  };
}
```

## 🔧 Performance Optimization Tools

### Profiling Tools
```bash
# Application profiling
# Node.js profiling
node --prof app.js
node --prof-process isolate-*.log > processed.txt

# Python profiling
python -m cProfile -o profile.stats app.py
python -c "import pstats; pstats.Stats('profile.stats').sort_stats('cumulative').print_stats()"

# Java profiling
java -XX:+FlightRecorder -XX:StartFlightRecording=duration=60s,filename=profile.jfr MyApp

# System profiling
perf record -g ./myapp
perf report

# Memory profiling
valgrind --tool=memcheck --leak-check=full ./myapp
```

### Monitoring Stack
```yaml
# Prometheus configuration for performance monitoring
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'application'
    static_configs:
      - targets: ['app:3000']
    metrics_path: /metrics
    scrape_interval: 5s

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

rule_files:
  - "performance_rules.yml"

# Performance alerting rules
groups:
- name: performance.rules
  rules:
  - alert: HighResponseTime
    expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 0.5
    for: 2m
    labels:
      severity: warning
    annotations:
      summary: "High response time detected"
      description: "95th percentile response time is {{ $value }}s"

  - alert: HighCPUUsage
    expr: 100 - (avg by(instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "High CPU usage"
      description: "CPU usage is {{ $value }}% on {{ $labels.instance }}"

  - alert: HighMemoryUsage
    expr: (1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100 > 90
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "High memory usage"
      description: "Memory usage is {{ $value }}% on {{ $labels.instance }}"
```

## 🎯 Best Practices

### Performance Optimization Strategy
1. **Measure First**: Establish baseline metrics
2. **Identify Bottlenecks**: Use profiling and monitoring
3. **Optimize Systematically**: Focus on biggest impact areas
4. **Test Changes**: Validate improvements with load testing
5. **Monitor Continuously**: Track performance over time

### Common Performance Anti-patterns
- **Premature Optimization**: Optimizing before measuring
- **Over-Engineering**: Complex solutions for simple problems
- **Ignoring Caching**: Not implementing appropriate caching layers
- **Database N+1 Queries**: Multiple queries instead of joins
- **Blocking Operations**: Synchronous operations in async environments

### Performance Culture
- Make performance a team responsibility
- Include performance requirements in user stories
- Regular performance reviews and optimization sprints
- Performance budgets for features
- Continuous performance testing in CI/CD