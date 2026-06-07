# 📌 **CASE STUDY 2: SOCIAL MEDIA PLATFORM**
## Twitter/Facebook-like System Design

---

## 🎯 **PROBLEM STATEMENT**
Design a social media platform that can handle millions of users posting content, following others, and consuming personalized feeds in real-time.

---

## 📋 **REQUIREMENTS ANALYSIS**

### **Functional Requirements**
- ✅ User registration and authentication
- ✅ Post creation (text, images, videos)
- ✅ Follow/unfollow users
- ✅ Personalized timeline/feed
- ✅ Like, comment, and share posts
- ✅ Real-time notifications
- ✅ Search posts and users
- ✅ Direct messaging
- ✅ Content moderation

### **Non-Functional Requirements**
- ✅ **Performance**: <200ms feed load, <50ms post creation
- ✅ **Scalability**: Handle 1B+ posts, 500M+ users
- ✅ **Availability**: 99.9% uptime
- ✅ **Consistency**: Eventual consistency for feeds
- ✅ **Real-time**: Sub-second notification delivery
- ✅ **Storage**: Petabyte-scale data storage

---

## 📊 **CAPACITY ESTIMATION**

### **User Base & Activity**
```
Total users: 500M
Daily active users: 200M (40%)
Monthly active users: 400M

Posts per day: 500M
- Original posts: 300M
- Reposts/shares: 200M

Reads per day: 10B (50 reads per DAU)
Follows per user: 200 average
```

### **Storage Estimation**
```
Post record: ~1KB
- Text: 280 chars (560 bytes UTF-8)
- Metadata: 200 bytes
- Media URLs: 240 bytes

Daily storage: 500M posts × 1KB = 500 GB
Annual storage: 500 GB × 365 = 182.5 TB
5-year storage: 182.5 TB × 5 = 912.5 TB

User data: 500M users × 2KB = 1 TB
Relationships: 500M × 200 × 16 bytes = 1.6 TB
```

### **Bandwidth Estimation**
```
Post creation: 1KB per post
Feed loading: 50KB per feed (20 posts × 2.5KB)
Media delivery: 80% of bandwidth

Daily bandwidth:
- Post creation: 500M × 1KB = 500 GB
- Feed loading: 10B × 50KB = 500 TB
- Media: 2 PB (estimated)
- Total: ~2.5 PB/day
```

---

## 🏗️ **HIGH-LEVEL ARCHITECTURE**

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT APPLICATIONS                       │
│  Web App │ Mobile App │ Desktop App │ API Clients           │
└─────────────────────────────────────────────────────────────┘
                                 │
                    ┌────────────────────┐
                    │   API GATEWAY      │
                    │  (Rate Limiting,   │
                    │   Authentication)  │
                    └────────────────────┘
                                 │
                    ┌────────────────────┐
                    │   LOAD BALANCER    │
                    └────────────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                                 │
        ┌───────▼──────┐                 ┌────────▼───────┐
        │  WEB SERVERS │                 │ PUSH SERVICE  │
        │  (REST APIs) │                 │ (WebSocket)   │
        └──────────────┘                 └───────────────┘
                │                                 │
                ▼                                 ▼
        ┌─────────────────────────────────────────────────┐
        │              APPLICATION SERVERS                │
        │  User Service │ Post Service │ Feed Service     │
        │  Social Graph │ Search Service │ Media Service  │
        └─────────────────────────────────────────────────┘
                        │
            ┌───────────┼───────────┐
            │           │           │
    ┌───────▼────┐ ┌────▼────┐ ┌────▼────┐
    │   REDIS    │ │  CASSANDRA │ │ POSTGRES │
    │ (Cache)    │ │ (Timeline)│ │ (Users)  │
    └────────────┘ └──────────┘ └─────────┘
            │           │           │
            ▼           ▼           ▼
    ┌─────────────────────────────────────────────────┐
    │              MESSAGE QUEUE                      │
    │  Kafka (Fanout) │ RabbitMQ (Tasks)              │
    └─────────────────────────────────────────────────┘
                        │
            ┌───────────┼───────────┐
            │           │           │
    ┌───────▼────┐ ┌────▼────┐ ┌────▼────┐
    │ BACKGROUND │ │ ANALYTICS │ │ MEDIA     │
    │ WORKERS    │ │ SERVICE   │ │ PROCESSING│
    └────────────┘ └───────────┘ └───────────┘
```

---

## 🔧 **DATA MODEL DESIGN**

### **User Data (PostgreSQL)**
```sql
-- Users table
CREATE TABLE users (
    user_id BIGINT PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    display_name VARCHAR(100),
    bio TEXT,
    profile_picture_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE,
    follower_count INT DEFAULT 0,
    following_count INT DEFAULT 0
);

-- User relationships (follows)
CREATE TABLE follows (
    follower_id BIGINT NOT NULL,
    followee_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, followee_id),
    FOREIGN KEY (follower_id) REFERENCES users(user_id),
    FOREIGN KEY (followee_id) REFERENCES users(user_id)
);

-- Indexes for performance
CREATE INDEX idx_follows_follower ON follows(follower_id);
CREATE INDEX idx_follows_followee ON follows(followee_id);
CREATE INDEX idx_users_username ON users(username);
```

### **Posts Data (Cassandra - Time Series)**
```sql
-- Posts table (wide column store)
CREATE TABLE posts (
    user_id BIGINT,
    post_id TIMEUUID,
    content TEXT,
    media_urls SET<TEXT>,
    created_at TIMESTAMP,
    like_count INT,
    repost_count INT,
    reply_count INT,
    PRIMARY KEY ((user_id), post_id)
) WITH CLUSTERING ORDER BY (post_id DESC);

-- Timeline feeds (materialized view)
CREATE TABLE user_timeline (
    user_id BIGINT,
    post_id TIMEUUID,
    author_id BIGINT,
    content TEXT,
    created_at TIMESTAMP,
    PRIMARY KEY ((user_id), post_id)
) WITH CLUSTERING ORDER BY (post_id DESC);
```

### **Interactions (Cassandra)**
```sql
-- Likes
CREATE TABLE likes (
    post_id TIMEUUID,
    user_id BIGINT,
    created_at TIMESTAMP,
    PRIMARY KEY ((post_id), user_id)
);

-- Comments/Replies
CREATE TABLE replies (
    post_id TIMEUUID,
    reply_id TIMEUUID,
    user_id BIGINT,
    content TEXT,
    created_at TIMESTAMP,
    PRIMARY KEY ((post_id), reply_id)
) WITH CLUSTERING ORDER BY (reply_id DESC);
```

---

## 📨 **FEED GENERATION SYSTEM**

### **Timeline Construction Algorithm**

#### **Approach 1: Pull Model (Read-Time Fanout)**
```python
class PullModelFeed:
    def __init__(self, db_client, cache_client):
        self.db = db_client
        self.cache = cache_client

    def get_feed(self, user_id: int, page: int = 1, limit: int = 20) -> List[Post]:
        """Generate feed by pulling from followed users"""

        # Get user's following list (cached)
        following = self.cache.get(f"following:{user_id}")
        if not following:
            following = self.db.get_following(user_id)
            self.cache.set(f"following:{user_id}", following, ttl=3600)

        # Get recent posts from each followed user
        all_posts = []
        for followed_user in following:
            user_posts = self.db.get_recent_posts(followed_user, limit=10)
            all_posts.extend(user_posts)

        # Sort by creation time and paginate
        sorted_posts = sorted(all_posts, key=lambda p: p.created_at, reverse=True)
        start_idx = (page - 1) * limit
        end_idx = start_idx + limit

        return sorted_posts[start_idx:end_idx]
```

#### **Approach 2: Push Model (Write-Time Fanout)**
```python
class PushModelFeed:
    def __init__(self, db_client, queue_client):
        self.db = db_client
        self.queue = queue_client

    def create_post(self, user_id: int, content: str) -> Post:
        """Create post and fan out to followers' timelines"""

        # Create the post
        post = self.db.create_post(user_id, content)

        # Get followers asynchronously
        self._fanout_to_followers(post)

        return post

    def _fanout_to_followers(self, post: Post):
        """Asynchronously add post to all followers' timelines"""

        # Queue fanout task
        self.queue.publish('feed_fanout', {
            'post_id': post.id,
            'user_id': post.user_id,
            'followers': self.db.get_follower_ids(post.user_id)
        })
```

#### **Approach 3: Hybrid Model (Smart Fanout)**
```python
class HybridFeed:
    def __init__(self):
        self.pull_model = PullModelFeed()
        self.push_model = PushModelFeed()

    def get_feed(self, user_id: int, page: int = 1) -> List[Post]:
        """Use different strategies based on follower count"""

        follower_count = self._get_follower_count(user_id)

        if follower_count < 1000:
            # Small audience - use push model
            return self.push_model.get_feed(user_id, page)
        elif follower_count < 100000:
            # Medium audience - use hybrid approach
            return self._get_hybrid_feed(user_id, page)
        else:
            # Large audience - use pull model with caching
            return self.pull_model.get_feed(user_id, page)

    def _get_hybrid_feed(self, user_id: int, page: int) -> List[Post]:
        """Combine push and pull for medium-sized audiences"""
        # Implementation combines both approaches
        pass
```

### **Feed Ranking Algorithm**
```python
class FeedRanker:
    def rank_posts(self, posts: List[Post], user_id: int) -> List[Post]:
        """Rank posts based on relevance"""

        ranked_posts = []
        for post in posts:
            score = self._calculate_score(post, user_id)
            ranked_posts.append((post, score))

        # Sort by score (descending)
        ranked_posts.sort(key=lambda x: x[1], reverse=True)

        return [post for post, score in ranked_posts]

    def _calculate_score(self, post: Post, user_id: int) -> float:
        """Calculate relevance score for a post"""

        base_score = 1.0

        # Recency factor (newer posts score higher)
        hours_old = (time.time() - post.created_at.timestamp()) / 3600
        recency_score = 1.0 / (1.0 + hours_old / 24)  # Half-life of 24 hours

        # Engagement factor
        engagement_score = min(10.0, (post.like_count + post.repost_count * 2) / 100)

        # Author authority (followers, verification)
        author_score = min(5.0, post.author.follower_count / 10000)
        if post.author.is_verified:
            author_score *= 1.5

        # Personalization (interactions with author)
        interaction_score = self._get_interaction_score(user_id, post.author_id)

        # Content relevance (hashtags, topics user follows)
        content_score = self._get_content_relevance(post, user_id)

        total_score = (base_score +
                      recency_score * 0.3 +
                      engagement_score * 0.25 +
                      author_score * 0.2 +
                      interaction_score * 0.15 +
                      content_score * 0.1)

        return total_score
```

---

## 🔍 **SEARCH SYSTEM**

### **Real-Time Search Architecture**
```python
class SearchService:
    def __init__(self, elasticsearch_client, redis_client):
        self.es = elasticsearch_client
        self.cache = redis_client

    def search_posts(self, query: str, user_id: int = None,
                    filters: dict = None) -> List[Post]:
        """Search posts with real-time indexing"""

        # Check cache first
        cache_key = f"search:{hash(query)}:{user_id}"
        cached_results = self.cache.get(cache_key)
        if cached_results:
            return cached_results

        # Build Elasticsearch query
        es_query = self._build_search_query(query, filters)

        # Execute search
        results = self.es.search(
            index="posts",
            body=es_query,
            size=50
        )

        # Cache results for 5 minutes
        self.cache.set(cache_key, results, ttl=300)

        return results

    def _build_search_query(self, query: str, filters: dict) -> dict:
        """Build Elasticsearch query with filters"""

        must_clauses = []

        # Text search
        if query:
            must_clauses.append({
                "multi_match": {
                    "query": query,
                    "fields": ["content^2", "hashtags", "mentions"],
                    "fuzziness": "AUTO"
                }
            })

        # Date filters
        if filters.get('since'):
            must_clauses.append({
                "range": {
                    "created_at": {"gte": filters['since']}
                }
            })

        # User filters
        if filters.get('from_user'):
            must_clauses.append({
                "term": {"user_id": filters['from_user']}
            })

        return {
            "query": {
                "bool": {
                    "must": must_clauses
                }
            },
            "sort": [
                {"_score": "desc"},
                {"created_at": "desc"}
            ]
        }

    def index_post(self, post: Post):
        """Index post for search"""
        doc = {
            "post_id": post.id,
            "user_id": post.user_id,
            "content": post.content,
            "hashtags": self._extract_hashtags(post.content),
            "mentions": self._extract_mentions(post.content),
            "created_at": post.created_at,
            "like_count": post.like_count,
            "repost_count": post.repost_count
        }

        self.es.index(index="posts", id=post.id, body=doc)
```

---

## 📡 **REAL-TIME NOTIFICATIONS**

### **WebSocket Implementation**
```python
class NotificationService:
    def __init__(self):
        self.connections = {}  # user_id -> websocket connections
        self.redis = redis.Redis()

    def connect_user(self, user_id: int, websocket):
        """Handle user connection"""
        if user_id not in self.connections:
            self.connections[user_id] = set()

        self.connections[user_id].add(websocket)

        # Subscribe to user's notification channel
        self.redis.subscribe(f"notifications:{user_id}")

    def disconnect_user(self, user_id: int, websocket):
        """Handle user disconnection"""
        if user_id in self.connections:
            self.connections[user_id].discard(websocket)

            if not self.connections[user_id]:
                del self.connections[user_id]

    def send_notification(self, user_id: int, notification: dict):
        """Send notification to user"""

        # Store in database for offline users
        self._store_notification(user_id, notification)

        # Send real-time if user is online
        if user_id in self.connections:
            for websocket in self.connections[user_id]:
                try:
                    websocket.send_json(notification)
                except Exception as e:
                    print(f"Failed to send notification: {e}")

        # Publish to Redis for scaling
        self.redis.publish(f"notifications:{user_id}", json.dumps(notification))

    def _store_notification(self, user_id: int, notification: dict):
        """Store notification for offline delivery"""
        # Implementation for persistent storage
        pass
```

### **Notification Types**
```python
NOTIFICATION_TYPES = {
    'like': {
        'template': '{username} liked your post',
        'priority': 'low'
    },
    'follow': {
        'template': '{username} started following you',
        'priority': 'medium'
    },
    'reply': {
        'template': '{username} replied to your post',
        'priority': 'high'
    },
    'mention': {
        'template': '{username} mentioned you in a post',
        'priority': 'high'
    },
    'repost': {
        'template': '{username} reposted your post',
        'priority': 'medium'
    }
}
```

---

## 📊 **ANALYTICS & MONITORING**

### **Real-Time Metrics**
```python
class AnalyticsService:
    def __init__(self):
        self.redis = redis.Redis()
        self.metrics = {}

    def track_event(self, event_type: str, user_id: int, metadata: dict = None):
        """Track user events for analytics"""

        event = {
            'event_type': event_type,
            'user_id': user_id,
            'timestamp': time.time(),
            'metadata': metadata or {}
        }

        # Store in Redis for real-time processing
        self.redis.lpush('analytics_events', json.dumps(event))

        # Update real-time counters
        self._update_counters(event)

    def _update_counters(self, event: dict):
        """Update real-time counters"""

        event_type = event['event_type']
        user_id = event['user_id']

        # Daily active users
        today = time.strftime('%Y-%m-%d')
        self.redis.pfadd(f'dau:{today}', user_id)

        # Event counters
        self.redis.incr(f'events:{event_type}:{today}')

        # User engagement
        if event_type in ['like', 'reply', 'repost']:
            self.redis.incr(f'engagement:{user_id}:{today}')

    def get_realtime_stats(self) -> dict:
        """Get real-time platform statistics"""

        today = time.strftime('%Y-%m-%d')

        return {
            'daily_active_users': self.redis.pfcount(f'dau:{today}'),
            'posts_today': int(self.redis.get(f'events:post:{today}') or 0),
            'likes_today': int(self.redis.get(f'events:like:{today}') or 0),
            'replies_today': int(self.redis.get(f'events:reply:{today}') or 0),
            'reposts_today': int(self.redis.get(f'events:repost:{today}') or 0)
        }

    def get_user_analytics(self, user_id: int) -> dict:
        """Get user-specific analytics"""

        today = time.strftime('%Y-%m-%d')

        return {
            'posts_count': self._get_user_posts_count(user_id),
            'followers_count': self._get_followers_count(user_id),
            'engagement_today': int(self.redis.get(f'engagement:{user_id}:{today}') or 0),
            'impressions_today': self._calculate_impressions(user_id, today)
        }
```

---

## 🔒 **CONTENT MODERATION**

### **Automated Moderation System**
```python
class ContentModerator:
    def __init__(self):
        self.sensitive_words = self._load_sensitive_words()
        self.ml_model = self._load_ml_model()

    def moderate_content(self, content: str, user_id: int) -> ModerationResult:
        """Moderate content using multiple techniques"""

        # Rule-based filtering
        rule_violations = self._check_rules(content)

        # ML-based classification
        ml_score = self._classify_content(content)

        # User history check
        user_risk = self._assess_user_risk(user_id)

        # Combine scores
        final_score = (rule_violations * 0.4 +
                      ml_score * 0.4 +
                      user_risk * 0.2)

        if final_score > 0.8:
            action = 'block'
        elif final_score > 0.6:
            action = 'review'
        else:
            action = 'allow'

        return ModerationResult(
            action=action,
            score=final_score,
            reasons=self._get_reasons(rule_violations, ml_score, user_risk)
        )

    def _check_rules(self, content: str) -> float:
        """Rule-based content checking"""
        violations = 0

        # Check for sensitive words
        content_lower = content.lower()
        for word in self.sensitive_words:
            if word in content_lower:
                violations += 1

        # Check for excessive caps
        caps_ratio = sum(1 for c in content if c.isupper()) / len(content)
        if caps_ratio > 0.8:
            violations += 0.5

        # Check for spam patterns
        if self._is_spam_pattern(content):
            violations += 1

        return min(violations / 5.0, 1.0)  # Normalize to 0-1

    def _classify_content(self, content: str) -> float:
        """ML-based content classification"""
        # Use pre-trained model for toxicity/hate speech detection
        return self.ml_model.predict_proba([content])[0][1]  # Toxicity probability
```

---

## 🚀 **SCALING CHALLENGES & SOLUTIONS**

### **Hot User Problem**
**Problem**: Celebrity users with millions of followers cause fanout storms.

**Solutions**:
```python
class HotUserHandler:
    def __init__(self):
        self.hot_user_threshold = 100000  # 100K followers

    def is_hot_user(self, user_id: int) -> bool:
        """Check if user is considered 'hot'"""
        follower_count = self._get_follower_count(user_id)
        return follower_count >= self.hot_user_threshold

    def handle_hot_user_post(self, post: Post):
        """Special handling for hot user posts"""

        # Don't fanout immediately
        # Instead, use pull-based approach for hot users
        self._mark_post_for_lazy_fanout(post)

        # Send push notifications only to highly engaged followers
        engaged_followers = self._get_engaged_followers(post.user_id)
        self._send_notifications_selectively(post, engaged_followers)

    def _get_engaged_followers(self, user_id: int) -> List[int]:
        """Get followers who frequently interact"""
        # Query based on recent engagement metrics
        pass
```

### **Timeline Inconsistency**
**Problem**: Users see different content on different devices.

**Solutions**:
- Use timeline versioning
- Implement cursor-based pagination
- Cache timeline snapshots

### **Real-Time Latency**
**Problem**: Maintaining low latency for real-time features.

**Solutions**:
- WebSocket connection pooling
- Regional edge servers
- Message deduplication
- Connection multiplexing

---

## 📊 **PERFORMANCE OPTIMIZATION**

### **Caching Strategy**
```python
class SocialMediaCache:
    def __init__(self):
        self.user_cache = RedisCache()      # User profiles, relationships
        self.feed_cache = RedisCache()      # Timeline feeds
        self.content_cache = RedisCache()   # Posts, comments
        self.search_cache = RedisCache()    # Search results

    def get_user_feed(self, user_id: int, page: int) -> List[Post]:
        """Multi-level feed caching"""

        cache_key = f"feed:{user_id}:{page}"

        # L1: In-memory cache (application level)
        feed = self.feed_cache.get(cache_key)
        if feed:
            return feed

        # L2: Distributed cache (Redis)
        feed = self._get_from_redis(cache_key)
        if feed:
            # Backfill L1 cache
            self.feed_cache.set(cache_key, feed, ttl=60)  # 1 minute
            return feed

        # Cache miss - generate feed
        feed = self._generate_feed(user_id, page)

        # Cache in both levels
        self.feed_cache.set(cache_key, feed, ttl=60)
        self._set_in_redis(cache_key, feed, ttl=300)  # 5 minutes

        return feed
```

### **Database Optimization**
```sql
-- Optimized queries with proper indexing

-- Get user feed efficiently
SELECT p.* FROM posts p
INNER JOIN follows f ON p.user_id = f.followee_id
WHERE f.follower_id = $1
  AND p.created_at > $2  -- Cursor-based pagination
ORDER BY p.created_at DESC
LIMIT 20;

-- Get trending posts
SELECT p.*, COUNT(l.post_id) as likes
FROM posts p
LEFT JOIN likes l ON p.post_id = l.post_id
WHERE p.created_at > NOW() - INTERVAL '24 hours'
GROUP BY p.post_id
ORDER BY likes DESC, p.created_at DESC
LIMIT 50;
```

---

## 🔧 **IMPLEMENTATION CONSIDERATIONS**

### **API Rate Limiting**
```python
class APIRateLimiter:
    def __init__(self):
        self.redis = redis.Redis()

    def check_limit(self, user_id: int, endpoint: str) -> bool:
        """Check if user has exceeded rate limit"""

        limits = {
            'create_post': {'rpm': 30, 'burst': 10},  # 30 posts per minute
            'get_feed': {'rpm': 60, 'burst': 20},     # 60 feed requests per minute
            'search': {'rpm': 30, 'burst': 10}         # 30 searches per minute
        }

        limit = limits.get(endpoint, {'rpm': 60, 'burst': 20})

        key = f"ratelimit:{user_id}:{endpoint}"
        current = int(self.redis.get(key) or 0)

        if current >= limit['burst']:
            return False

        # Increment counter with expiration
        self.redis.incr(key)
        self.redis.expire(key, 60)  # 1 minute window

        return True
```

### **Data Partitioning Strategy**
```python
class DataPartitioner:
    def __init__(self, num_shards: int = 64):
        self.num_shards = num_shards

    def get_user_shard(self, user_id: int) -> int:
        """Determine shard for user data"""
        return user_id % self.num_shards

    def get_post_shard(self, post_id: str) -> int:
        """Determine shard for post data"""
        # Use hash of post ID for even distribution
        return hash(post_id) % self.num_shards

    def get_timeline_shard(self, user_id: int) -> int:
        """Timeline shard based on user ID"""
        return user_id % self.num_shards
```

---

## 📈 **MONITORING & ALERTS**

### **Key Metrics to Monitor**
- **User Engagement**: DAU/MAU, session duration, posts per user
- **Performance**: Feed load time, post creation latency, API response times
- **System Health**: CPU/memory usage, database connections, queue depth
- **Business Metrics**: Revenue, user growth, content moderation actions

### **Alert Conditions**
```python
ALERT_RULES = {
    'high_latency': {
        'metric': 'feed_load_time_p95',
        'threshold': 500,  # ms
        'operator': '>',
        'severity': 'critical'
    },
    'low_availability': {
        'metric': 'api_success_rate',
        'threshold': 99.5,  # %
        'operator': '<',
        'severity': 'critical'
    },
    'queue_backlog': {
        'metric': 'feed_fanout_queue_depth',
        'threshold': 10000,
        'operator': '>',
        'severity': 'warning'
    }
}
```

---

## 🎯 **CONCLUSION**

The social media platform case study demonstrates:

- **Scale**: Handling billions of posts and users
- **Complexity**: Real-time feeds, notifications, search
- **Data Patterns**: Time-series data, graph relationships
- **Performance**: Multi-level caching, database optimization
- **Real-time**: WebSocket connections, message queues

**Key Architectural Decisions**:
1. **Cassandra** for timeline data (write-heavy, time-series)
2. **PostgreSQL** for user data (ACID requirements)
3. **Redis** for caching and real-time features
4. **Kafka** for event streaming and fanout
5. **Elasticsearch** for search functionality

**Success Metrics**:
- Feed load time < 200ms
- Post creation < 50ms
- 99.9% availability
- Support for 500M+ users

This architecture serves as the foundation for most modern social media platforms! 🚀