# 🔗 STAGE 1D — Microservices Design

> **Level:** Advanced | **Duration:** 1–2 Weeks

---

## 📋 Topics

1. Monolith vs Microservices
2. When to Use Microservices
3. Service Communication Patterns
4. API Gateway Pattern
5. Laravel + Python Microservice Architecture
6. Docker Compose Multi-Service Setup

---

## 1. Monolith vs Microservices

### Monolith
```
One Application → One Database → One Deployment
✅ Simple to develop, test, deploy
❌ Hard to scale individual features
❌ One bug can crash everything
```

### Microservices
```
Auth Service    → Auth DB
Product Service → Product DB
AI Service      → Vector DB
Notification    → Redis
✅ Scale independently
✅ Use different languages/frameworks
❌ Complex infrastructure
❌ Network overhead
```

### Decision Matrix

| Factor | Monolith | Microservices |
|--------|----------|---------------|
| Team size < 5 | ✅ | ❌ |
| Simple CRUD | ✅ | ❌ |
| AI + SaaS features | ❌ | ✅ |
| Independent scaling | ❌ | ✅ |
| Time to market | ✅ Faster | ❌ Slower |

---

## 2. When to Use Microservices

**Use microservices when:**
- Different parts need different tech (Laravel for web, Python for AI)
- Parts need independent scaling (AI processing vs CRUD)
- Teams need to deploy independently
- You need fault isolation

**Your use case (AI SaaS):**
```
Laravel SaaS (PHP) → Handles users, billing, dashboard
AI Scraper (Python) → Handles scraping, embeddings, AI
Both communicate via REST API or message queue
```

---

## 3. Communication Patterns

### Synchronous (HTTP/REST)
```php
// Laravel calls Python microservice
$response = Http::timeout(30)->post('http://ai-service:8000/scrape', [
    'url' => $request->url,
    'tenant_id' => tenant('id'),
]);

$result = $response->json();
```

### Asynchronous (Message Queue)
```
Laravel → Publish message to Redis/RabbitMQ → Python worker consumes
```

```php
// Laravel publishes event
Redis::publish('scrape:requests', json_encode([
    'url' => $url,
    'tenant_id' => tenant('id'),
    'callback_url' => route('api.scrape.callback'),
]));
```

```python
# Python consumes
import redis
r = redis.Redis()
pubsub = r.pubsub()
pubsub.subscribe('scrape:requests')

for message in pubsub.listen():
    data = json.loads(message['data'])
    result = scrape_and_analyze(data['url'])
    requests.post(data['callback_url'], json=result)
```

### Event-Driven (Best for AI + SaaS)
```
Laravel → Event Bus (Redis) → AI Service processes → Webhook back
```

---

## 4. API Gateway Pattern

```
Client → Nginx (API Gateway/Reverse Proxy)
            ├── /api/*          → Laravel (port 8080)
            ├── /ai/*           → FastAPI (port 8000)
            ├── /ws/*           → WebSocket server
            └── /static/*       → CDN/Static files
```

### Nginx Config
```nginx
upstream laravel {
    server laravel-app:8080;
}

upstream ai_service {
    server ai-service:8000;
}

server {
    listen 80;
    server_name api.yoursaas.com;

    location /api/ {
        proxy_pass http://laravel;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /ai/ {
        proxy_pass http://ai_service;
        proxy_set_header Host $host;
        proxy_read_timeout 120s;
    }
}
```

---

## 5. Docker Compose Multi-Service

```yaml
version: '3.8'

services:
  # Laravel SaaS Application
  laravel:
    build: ./laravel-app
    ports:
      - "8080:8080"
    depends_on:
      - mysql
      - redis
    environment:
      DB_HOST: mysql
      REDIS_HOST: redis
      AI_SERVICE_URL: http://ai-service:8000

  # Python AI Microservice
  ai-service:
    build: ./ai-service
    ports:
      - "8000:8000"
    depends_on:
      - redis
    environment:
      REDIS_HOST: redis
      HF_API_KEY: ${HF_API_KEY}

  # Database
  mysql:
    image: mysql:8.0
    volumes:
      - mysql_data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: saas

  # Cache & Queue
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

  # Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - laravel
      - ai-service

volumes:
  mysql_data:
```

---

## 6. Service Discovery & Health Checks

```python
# Python AI Service health check
@app.get("/health")
def health():
    return {"status": "healthy", "version": "1.0.0"}
```

```php
// Laravel checks AI service health
public function checkAIService(): bool
{
    try {
        $response = Http::timeout(5)->get('http://ai-service:8000/health');
        return $response->successful();
    } catch (\Exception $e) {
        return false;
    }
}
```

---

## 🎯 Practice Tasks
- [ ] Create Laravel + FastAPI Docker Compose setup
- [ ] Implement HTTP communication between services
- [ ] Set up Nginx reverse proxy
- [ ] Build async communication with Redis pub/sub
- [ ] Implement health check endpoints

---

*Next: [React & Next.js →](../frontend/01_REACT_NEXTJS.md)*
