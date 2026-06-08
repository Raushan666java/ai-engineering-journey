# 📌 **CASE STUDY 1: URL SHORTENER (TinyURL/Bitly)**
## Complete System Design with Implementation

---

## 🎯 **PROBLEM STATEMENT**
Design a URL shortening service like TinyURL or Bitly that converts long URLs into short, shareable links.

---

## 📋 **REQUIREMENTS ANALYSIS**

### **Functional Requirements**
- ✅ Shorten long URLs to 6-8 character short URLs
- ✅ Redirect short URLs to original URLs
- ✅ Custom aliases (optional premium feature)
- ✅ URL expiration (configurable time periods)
- ✅ Analytics (click tracking, geographic data)
- ✅ User accounts (optional for basic version)
- ✅ RESTful API for integration

### **Non-Functional Requirements**
- ✅ **Performance**: <50ms redirect latency, <200ms shorten latency
- ✅ **Scalability**: Handle 100M URLs shortened per month
- ✅ **Availability**: 99.9% uptime
- ✅ **Durability**: URLs should work for at least 5 years
- ✅ **Security**: Prevent malicious URLs, rate limiting
- ✅ **Analytics**: Track clicks, referrers, geographic data

---

## 📊 **CAPACITY ESTIMATION**

### **Traffic Analysis**
```
Monthly URL shortenings: 100M
Daily URL shortenings: 100M / 30 = 3.33M
Hourly URL shortenings: 3.33M / 24 = 139K
Peak hourly: 139K * 2 = 278K (assuming 2x peak factor)

Read/Write Ratio: 10:1 (10 redirects per shortening)
Daily redirects: 3.33M * 10 = 33.3M
Hourly redirects: 33.3M / 24 = 1.39M
Peak redirects: 1.39M * 2 = 2.78M
```

### **Storage Estimation**
```
URL record size: ~500 bytes
- Original URL: 200 bytes
- Short code: 8 bytes
- Created timestamp: 8 bytes
- User ID: 8 bytes
- Metadata: 284 bytes

Monthly storage: 100M * 500 bytes = 50 GB
Annual storage: 50 GB * 12 = 600 GB
5-year storage: 600 GB * 5 = 3 TB
```

### **Bandwidth Estimation**
```
Shorten request: 1KB (URL + metadata)
Redirect request: 0.5KB (short code)
Response: 2KB average

Daily bandwidth:
- Shorten: 3.33M * 3KB = 10 GB
- Redirect: 33.3M * 2.5KB = 83 GB
- Total: ~100 GB/day
```

---

## 🏗️ **HIGH-LEVEL ARCHITECTURE**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Clients   │────│   Load Balancer │────│  Application    │
│                 │    │                 │    │   Servers       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                          │
                                                          ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Redis Cache   │    │   Database      │    │   Analytics     │
│   (Hot URLs)    │    │   (URLs)        │    │   Service       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                          │
                                                          ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Message Queue │    │   Background    │    │   CDN           │
│   (Kafka)       │    │   Workers       │    │   (Optional)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 🔧 **API DESIGN**

### **REST API Endpoints**

```http
# Shorten URL
POST /api/v1/shorten
Content-Type: application/json

{
  "original_url": "https://www.example.com/very/long/url/that/needs/shortening",
  "custom_alias": "my-link",  // optional
  "expires_in": "30d"         // optional: 1h, 1d, 7d, 30d, never
}

Response:
{
  "short_url": "https://short.ly/abc123",
  "short_code": "abc123",
  "expires_at": "2025-11-29T10:00:00Z"
}

# Redirect to original URL
GET /api/v1/{short_code}

# Get URL analytics
GET /api/v1/analytics/{short_code}
Authorization: Bearer {token}

Response:
{
  "total_clicks": 1250,
  "clicks_by_country": {
    "US": 450,
    "IN": 320,
    "UK": 180
  },
  "clicks_by_referrer": {
    "twitter.com": 400,
    "facebook.com": 300
  },
  "daily_clicks": [
    {"date": "2025-10-01", "clicks": 45},
    {"date": "2025-10-02", "clicks": 52}
  ]
}

# Update URL (premium)
PUT /api/v1/{short_code}
Authorization: Bearer {token}

{
  "original_url": "https://new-url.com",
  "expires_in": "60d"
}

# Delete URL
DELETE /api/v1/{short_code}
Authorization: Bearer {token}
```

---

## 🗄️ **DATABASE SCHEMA**

### **Primary Tables**

```sql
-- URLs table
CREATE TABLE urls (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    short_code VARCHAR(10) UNIQUE NOT NULL,
    original_url TEXT NOT NULL,
    user_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NULL,
    is_active BOOLEAN DEFAULT TRUE,
    click_count INT DEFAULT 0,

    INDEX idx_short_code (short_code),
    INDEX idx_user_id (user_id),
    INDEX idx_created_at (created_at),
    INDEX idx_expires_at (expires_at)
);

-- Users table (optional for basic version)
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_premium BOOLEAN DEFAULT FALSE
);

-- Click analytics table
CREATE TABLE url_clicks (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    short_code VARCHAR(10) NOT NULL,
    clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    referrer VARCHAR(500),
    country_code VARCHAR(2),
    city VARCHAR(100),

    INDEX idx_short_code (short_code),
    INDEX idx_clicked_at (clicked_at),
    INDEX idx_country_code (country_code)
);

-- Custom aliases table (premium feature)
CREATE TABLE custom_aliases (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    short_code VARCHAR(10) UNIQUE NOT NULL,
    user_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (short_code) REFERENCES urls(short_code),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### **Database Choice & Sharding Strategy**

**Primary Database**: PostgreSQL or MySQL
- ACID compliance for URL uniqueness
- Complex queries for analytics
- JSON support for metadata

**Sharding Strategy**:
- **Hash-based sharding** on `short_code`
- **Range-based sharding** on `created_at` for analytics
- **Consistent hashing** for dynamic scaling

---

## ⚡ **SHORT CODE GENERATION**

### **Approach 1: Counter-Based (Distributed)**
```python
import redis
import base64

class URLShortener:
    def __init__(self):
        self.redis = redis.Redis(host='localhost', port=6379)
        self.base62_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    def generate_short_code(self) -> str:
        """Generate unique short code using distributed counter"""
        counter = self.redis.incr('url_counter')
        return self._encode_base62(counter)

    def _encode_base62(self, num: int) -> str:
        """Convert number to base62 string"""
        if num == 0:
            return self.base62_chars[0]

        base62 = []
        while num > 0:
            base62.append(self.base62_chars[num % 62])
            num //= 62

        return ''.join(reversed(base62)).zfill(6)

    def shorten_url(self, original_url: str) -> str:
        """Main shortening function"""
        short_code = self.generate_short_code()

        # Check for collisions (rare but possible)
        while self.redis.exists(f'url:{short_code}'):
            short_code = self.generate_short_code()

        # Store in Redis and DB
        self.redis.setex(f'url:{short_code}', 86400, original_url)  # 24h cache
        self._save_to_database(short_code, original_url)

        return short_code
```

### **Approach 2: MD5 Hash + Collision Handling**
```python
import hashlib
import random

class URLShortenerMD5:
    def generate_short_code(self, original_url: str) -> str:
        """Generate short code using MD5 hash"""
        hash_value = hashlib.md5(original_url.encode()).hexdigest()
        short_code = hash_value[:6]  # Take first 6 characters

        # Check for collision
        if self._code_exists(short_code):
            # Append random characters until unique
            while self._code_exists(short_code):
                random_suffix = ''.join(random.choices(
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                    k=2
                ))
                short_code = hash_value[:4] + random_suffix

        return short_code
```

### **Approach 3: Pre-generated Keys Pool**
```python
class URLShortenerPool:
    def __init__(self):
        self.key_pool = self._generate_key_pool()

    def _generate_key_pool(self) -> list:
        """Pre-generate all possible 6-character combinations"""
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        keys = []

        # Generate all combinations (62^6 = 56.8 billion)
        # In practice, generate in batches
        for i in range(1000000):  # Generate 1M keys
            key = ""
            num = i
            for _ in range(6):
                key = chars[num % 62] + key
                num //= 62
            keys.append(key.zfill(6))

        random.shuffle(keys)
        return keys

    def get_short_code(self) -> str:
        """Get next available short code from pool"""
        if not self.key_pool:
            self.key_pool = self._generate_key_pool()

        return self.key_pool.pop()
```

---

## 🚀 **REDIRECT SERVICE**

### **High-Performance Redirect Implementation**

```python
from flask import Flask, redirect, abort
import redis
import psycopg2

app = Flask(__name__)
redis_client = redis.Redis(host='localhost', port=6379)
db_conn = psycopg2.connect("dbname=urlshortener user=postgres")

@app.route('/<short_code>')
def redirect_url(short_code):
    """Handle URL redirection with caching"""

    # 1. Check cache first (Redis)
    cached_url = redis_client.get(f'url:{short_code}')
    if cached_url:
        # Update click count asynchronously
        redis_client.incr(f'clicks:{short_code}')
        return redirect(cached_url.decode('utf-8'), code=302)

    # 2. Check database
    with db_conn.cursor() as cursor:
        cursor.execute("""
            SELECT original_url, expires_at, is_active
            FROM urls
            WHERE short_code = %s
        """, (short_code,))

        result = cursor.fetchone()
        if not result:
            abort(404, "URL not found")

        original_url, expires_at, is_active = result

        # Check if URL is active and not expired
        if not is_active:
            abort(410, "URL is no longer active")

        if expires_at and expires_at < datetime.now():
            abort(410, "URL has expired")

        # Cache the URL for future requests
        redis_client.setex(f'url:{short_code}', 3600, original_url)  # 1 hour

        # Update click count
        cursor.execute("""
            UPDATE urls SET click_count = click_count + 1
            WHERE short_code = %s
        """, (short_code,))

        db_conn.commit()

        return redirect(original_url, code=302)

@app.route('/api/v1/shorten', methods=['POST'])
def shorten_url():
    """API endpoint to shorten URLs"""
    data = request.get_json()
    original_url = data.get('original_url')

    if not original_url:
        return jsonify({'error': 'original_url is required'}), 400

    # Validate URL format
    if not is_valid_url(original_url):
        return jsonify({'error': 'Invalid URL format'}), 400

    # Generate short code
    shortener = URLShortener()
    short_code = shortener.shorten_url(original_url)

    short_url = f"https://short.ly/{short_code}"

    return jsonify({
        'short_url': short_url,
        'short_code': short_code
    })
```

---

## 📈 **ANALYTICS & MONITORING**

### **Click Tracking Implementation**

```python
def track_click(short_code: str, request):
    """Track click analytics asynchronously"""

    # Extract metadata
    ip_address = request.remote_addr
    user_agent = request.headers.get('User-Agent', '')
    referrer = request.headers.get('Referer', '')

    # Get geographic data (using IP geolocation service)
    geo_data = get_geo_data(ip_address)
    country_code = geo_data.get('country_code', 'Unknown')
    city = geo_data.get('city', 'Unknown')

    # Store in database asynchronously
    analytics_data = {
        'short_code': short_code,
        'ip_address': ip_address,
        'user_agent': user_agent,
        'referrer': referrer,
        'country_code': country_code,
        'city': city,
        'clicked_at': datetime.now()
    }

    # Send to message queue for processing
    kafka_producer.send('url_clicks', analytics_data)
```

### **Analytics Dashboard**

```python
@app.route('/api/v1/analytics/<short_code>')
def get_analytics(short_code):
    """Get URL analytics"""

    # Verify ownership (for authenticated users)
    user_id = get_current_user_id()
    if not verify_url_ownership(short_code, user_id):
        abort(403, "Access denied")

    with db_conn.cursor(cursor_factory=RealDictCursor) as cursor:
        # Total clicks
        cursor.execute("""
            SELECT COUNT(*) as total_clicks
            FROM url_clicks
            WHERE short_code = %s
        """, (short_code,))
        total_clicks = cursor.fetchone()['total_clicks']

        # Clicks by country
        cursor.execute("""
            SELECT country_code, COUNT(*) as clicks
            FROM url_clicks
            WHERE short_code = %s
            GROUP BY country_code
            ORDER BY clicks DESC
            LIMIT 10
        """, (short_code,))
        clicks_by_country = dict(cursor.fetchall())

        # Daily clicks for last 30 days
        cursor.execute("""
            SELECT DATE(clicked_at) as date, COUNT(*) as clicks
            FROM url_clicks
            WHERE short_code = %s AND clicked_at >= CURRENT_DATE - INTERVAL '30 days'
            GROUP BY DATE(clicked_at)
            ORDER BY date
        """, (short_code,))
        daily_clicks = cursor.fetchall()

        return jsonify({
            'total_clicks': total_clicks,
            'clicks_by_country': clicks_by_country,
            'daily_clicks': daily_clicks
        })
```

---

## 🔒 **SECURITY & RATE LIMITING**

### **Security Measures**

```python
def is_valid_url(url: str) -> bool:
    """Validate URL format and safety"""
    try:
        parsed = urlparse(url)
        # Check scheme
        if parsed.scheme not in ['http', 'https']:
            return False

        # Check for malicious patterns
        malicious_patterns = [
            'javascript:', 'data:', 'vbscript:',
            '<script', 'onclick=', 'onload='
        ]

        for pattern in malicious_patterns:
            if pattern.lower() in url.lower():
                return False

        return True
    except:
        return False

def check_rate_limit(user_id: str, action: str) -> bool:
    """Rate limiting implementation"""
    key = f'rate_limit:{user_id}:{action}'
    current_count = redis_client.get(key)

    if current_count and int(current_count) >= 100:  # 100 requests per hour
        return False

    # Increment counter with 1-hour expiry
    redis_client.incr(key)
    redis_client.expire(key, 3600)

    return True
```

### **Rate Limiting Strategies**
- **Fixed Window**: Count requests in fixed time windows
- **Sliding Window**: More accurate, tracks exact timestamps
- **Token Bucket**: Allows burst traffic while maintaining average rate
- **Leaky Bucket**: Smooths traffic to constant rate

---

## ⚖️ **TRADE-OFFS & OPTIMIZATIONS**

### **Key Trade-offs**

| Decision | Pros | Cons | Our Choice |
|----------|------|------|------------|
| **Short code length** | More combinations, less collisions | Longer URLs, harder to remember | 6-8 chars (balance) |
| **Database choice** | SQL: ACID, complex queries<br>NoSQL: Scalability, performance | SQL: Scaling challenges<br>NoSQL: Eventual consistency | SQL for consistency |
| **Caching strategy** | Redis: Fast lookups<br>CDN: Global distribution | Redis: Memory limits<br>CDN: Cost, complexity | Both (Redis + CDN) |
| **Analytics granularity** | Detailed: Better insights<br>Summary: Better performance | Detailed: Storage costs<br>Summary: Less insights | Detailed with aggregation |

### **Performance Optimizations**

1. **Multi-level Caching**
   - Browser cache (short TTL)
   - CDN edge cache
   - Application cache (Redis)
   - Database cache

2. **Database Optimizations**
   - Indexing on frequently queried columns
   - Read replicas for analytics
   - Connection pooling
   - Query optimization

3. **Asynchronous Processing**
   - Click tracking via message queues
   - Analytics processing in background
   - Email notifications for premium users

---

## 🚨 **BOTTLENECKS & SOLUTIONS**

### **Identified Bottlenecks**

| Bottleneck | Impact | Solution |
|------------|--------|----------|
| **Database writes** | High latency for shortening | Async writes, batch inserts |
| **Cache misses** | Increased DB load | Better cache policies, pre-warming |
| **Analytics queries** | Slow dashboard loads | Aggregation tables, read replicas |
| **Rate limiting** | False positives | Distributed rate limiting, Redis |
| **URL validation** | Performance overhead | Async validation, caching results |

### **Scaling Challenges**

1. **Hot URLs**: Viral links causing cache thrashing
   - **Solution**: Dedicated cache for top 1% URLs, CDN integration

2. **Geographic Distribution**: Users worldwide
   - **Solution**: Multi-region deployment, geo-based routing

3. **Peak Traffic**: Events causing 10x normal traffic
   - **Solution**: Auto-scaling, circuit breakers, graceful degradation

---

## 🔄 **ALTERNATIVE APPROACHES**

### **Approach 1: Hash-based Shortening**
- **Pros**: No collision handling needed, deterministic
- **Cons**: Predictable codes, potential security issues
- **Use case**: Public URLs where predictability is OK

### **Approach 2: UUID-based**
- **Pros**: Guaranteed uniqueness, no collisions
- **Cons**: Long codes (36 characters), not user-friendly
- **Use case**: Internal systems, APIs

### **Approach 3: Custom Dictionary**
- **Pros**: Shorter codes, memorable words
- **Cons**: Limited combinations, collision management
- **Use case**: Premium features, branded URLs

---

## 📱 **MOBILE & API INTEGRATION**

### **Mobile App Integration**
```javascript
// React Native example
const shortenURL = async (longURL) => {
  try {
    const response = await fetch('https://api.short.ly/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      },
      body: JSON.stringify({
        original_url: longURL,
        expires_in: '7d'
      })
    });

    const data = await response.json();
    return data.short_url;
  } catch (error) {
    console.error('Error shortening URL:', error);
  }
};
```

### **Browser Extension**
```javascript
// Chrome extension content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'shortenURL') {
    fetch('https://api.short.ly/v1/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ original_url: request.url })
    })
    .then(response => response.json())
    .then(data => sendResponse({ shortURL: data.short_url }))
    .catch(error => sendResponse({ error: error.message }));
  }
  return true; // Keep message channel open
});
```

---

## 📊 **MONITORING & METRICS**

### **Key Metrics to Track**
- **Performance**: Response time, throughput, error rate
- **Usage**: URLs shortened, redirects, active users
- **System Health**: CPU, memory, disk usage
- **Business**: Revenue, user engagement, conversion rates

### **Monitoring Tools**
- **Application**: New Relic, DataDog, AppDynamics
- **Infrastructure**: Prometheus, Grafana, Nagios
- **Logging**: ELK Stack, Splunk
- **Alerting**: PagerDuty, OpsGenie

---

## 🎯 **INTERVIEW QUESTIONS**

### **Beginner Level**
1. How would you design a URL shortener?
2. How do you generate unique short codes?
3. How do you handle collisions?

### **Intermediate Level**
1. How do you scale the system to handle millions of requests?
2. How do you implement analytics?
3. How do you ensure high availability?

### **Advanced Level**
1. How do you handle database sharding?
2. How do you implement rate limiting at scale?
3. How do you prevent abuse and malicious URLs?

---

## 🚀 **DEPLOYMENT & INFRASTRUCTURE**

### **Infrastructure Setup**
```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    image: url-shortener-web
    ports:
      - "3000:3000"
    environment:
      - REDIS_URL=redis://redis:6379
      - DB_URL=postgresql://db:5432/urlshortener
    depends_on:
      - redis
      - db

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: urlshortener
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### **Cloud Deployment Options**
- **AWS**: EC2 + RDS + ElastiCache + CloudFront
- **Google Cloud**: App Engine + Cloud SQL + Memorystore + CDN
- **Azure**: App Service + Database + Cache + CDN

---

## 📈 **COST ESTIMATION**

### **Monthly Costs (100M URLs)**
- **Compute**: $500 (EC2 instances)
- **Database**: $300 (RDS PostgreSQL)
- **Cache**: $100 (ElastiCache Redis)
- **Storage**: $50 (S3 for analytics)
- **CDN**: $200 (CloudFront)
- **Monitoring**: $100 (CloudWatch)
- **Total**: ~$1,250/month

### **Scaling Costs**
- **1B URLs**: ~$3,000/month
- **10B URLs**: ~$15,000/month

---

## 🎉 **CONCLUSION**

The URL shortener is a perfect system design example because it covers:
- **Scale**: Millions of requests
- **Performance**: Sub-second responses
- **Data**: Storage and retrieval patterns
- **Caching**: Multi-level caching strategies
- **Analytics**: Real-time data processing
- **Security**: Input validation and rate limiting

**Key Takeaways**:
1. Start with requirements analysis
2. Estimate capacity early
3. Design for scale from day one
4. Use appropriate data structures and algorithms
5. Implement proper caching and database strategies
6. Monitor and optimize continuously

---

## 🛠️ **IMPLEMENTATION CHECKLIST**

- [ ] Requirements gathering and analysis
- [ ] Capacity estimation calculations
- [ ] API design and documentation
- [ ] Database schema design
- [ ] Short code generation algorithm
- [ ] Caching strategy implementation
- [ ] Rate limiting and security
- [ ] Analytics and monitoring
- [ ] Testing and deployment
- [ ] Performance optimization

**Ready to implement? Start with the API design and work your way through each component!** 🚀
