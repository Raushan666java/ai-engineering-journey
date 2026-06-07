# 🚀 TWITTER-LIKE SOCIAL NETWORK - SYSTEM DESIGN

## 📋 Table of Contents
1. [Requirements](#requirements)
2. [Capacity Estimation](#capacity-estimation)
3. [High-Level Architecture](#high-level-architecture)
4. [Database Design](#database-design)
5. [API Design](#api-design)
6. [Feed Generation Algorithm](#feed-generation-algorithm)
7. [Scalability & Performance](#scalability--performance)
8. [Trade-offs & Optimizations](#trade-offs--optimizations)

---

## 1. Requirements

### Functional Requirements
- **User Management**: Create account, follow/unfollow users
- **Tweet Creation**: Post tweets (280 chars), like, retweet, reply
- **Timeline Generation**: 
  - Home timeline (tweets from followed users)
  - User timeline (specific user's tweets)
- **Notifications**: Likes, retweets, new followers, mentions
- **Search**: Search tweets, users, hashtags
- **Trending Topics**: Display trending hashtags

### Non-Functional Requirements
- **High Availability**: 99.9% uptime
- **Low Latency**: Timeline generation < 200ms
- **Scalability**: Handle 500M users, 400M tweets/day
- **Consistency**: Eventually consistent (acceptable for social media)
- **Read-Heavy**: 100:1 read-to-write ratio

---

## 2. Capacity Estimation

### Traffic Estimates
- **Daily Active Users (DAU)**: 200M users
- **Tweets per day**: 400M tweets
- **Average follows per user**: 200
- **Timeline requests**: 2B requests/day (10 per user)

### Storage Estimates
- **Tweet**: 280 chars × 2 bytes = 560 bytes + metadata = 1 KB
- **Daily storage**: 400M × 1 KB = 400 GB/day
- **5-year storage**: 400 GB × 365 × 5 = 730 TB
- **User data**: 500M × 1 KB = 500 GB
- **Media storage** (images/videos): ~10 TB/day

### Bandwidth Estimates
- **Incoming**: 400M tweets/day = 4630 tweets/sec × 1 KB = 4.6 MB/s
- **Outgoing**: 2B timeline requests/day × 20 tweets/timeline × 1 KB = 463 MB/s

### Cache Estimates
- **Hot tweets** (20% generating 80% traffic): 80M tweets × 1 KB = 80 GB
- **User cache**: 20M active users × 1 KB = 20 GB
- **Total cache**: ~100 GB (easily fits in memory)

---

## 3. High-Level Architecture

```
┌─────────────┐
│   Clients   │ (Web, Mobile, API)
└──────┬──────┘
       │
┌──────▼──────────────────────────────────────────────┐
│              Load Balancer (HAProxy/Nginx)          │
└──────┬──────────────────────────────────────────────┘
       │
┌──────▼──────────────────────────────────────────────┐
│         Application Servers (Microservices)         │
│  ┌────────────┐  ┌─────────────┐  ┌──────────────┐ │
│  │ User Svc   │  │ Tweet Svc   │  │Timeline Svc  │ │
│  └────────────┘  └─────────────┘  └──────────────┘ │
│  ┌────────────┐  ┌─────────────┐  ┌──────────────┐ │
│  │ Follow Svc │  │ Search Svc  │  │ Notif Svc    │ │
│  └────────────┘  └─────────────┘  └──────────────┘ │
└──────┬──────────────────┬──────────────────┬────────┘
       │                  │                  │
┌──────▼───────┐  ┌───────▼────────┐  ┌─────▼────────┐
│  Redis Cache │  │  Cassandra DB  │  │ Elasticsearch│
│ (Timeline,   │  │ (Tweets, Users)│  │  (Search)    │
│  Hot Tweets) │  └────────────────┘  └──────────────┘
└──────────────┘          │
                  ┌───────▼────────┐
                  │  PostgreSQL    │
                  │ (Relationships)│
                  └────────────────┘
                          │
                  ┌───────▼────────┐
                  │  Object Store  │
                  │  (S3/CDN)      │
                  │ (Media files)  │
                  └────────────────┘
```

### Components
1. **Load Balancer**: Distributes traffic across application servers
2. **User Service**: Authentication, profile management
3. **Tweet Service**: Create, retrieve, delete tweets
4. **Timeline Service**: Generate home and user timelines
5. **Follow Service**: Manage follow/unfollow relationships (graph)
6. **Search Service**: Full-text search on tweets, users
7. **Notification Service**: Push notifications, email alerts
8. **Redis Cache**: Hot data, timeline cache
9. **Cassandra**: Main data store (tweets, users)
10. **PostgreSQL**: Follow relationships (graph)
11. **Elasticsearch**: Search indexing
12. **S3/CDN**: Media storage and delivery

---

## 4. Database Design

### 4.1 Cassandra Schema (Main Data Store)

#### Users Table
```sql
CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    username TEXT,
    email TEXT,
    password_hash TEXT,
    display_name TEXT,
    bio TEXT,
    profile_image_url TEXT,
    created_at TIMESTAMP,
    verified BOOLEAN
);
CREATE INDEX ON users(username);
CREATE INDEX ON users(email);
```

#### Tweets Table (Wide Column Store)
```sql
CREATE TABLE tweets (
    tweet_id UUID PRIMARY KEY,
    user_id UUID,
    content TEXT,
    created_at TIMESTAMP,
    like_count INT,
    retweet_count INT,
    reply_count INT,
    media_urls LIST<TEXT>,
    hashtags LIST<TEXT>,
    mentions LIST<UUID>
);
CREATE INDEX ON tweets(user_id, created_at);
```

#### User Timeline (Materialized View)
```sql
CREATE TABLE user_timeline (
    user_id UUID,
    tweet_id UUID,
    created_at TIMESTAMP,
    PRIMARY KEY (user_id, created_at, tweet_id)
) WITH CLUSTERING ORDER BY (created_at DESC);
```

### 4.2 PostgreSQL Schema (Relationships)

#### Follows Table
```sql
CREATE TABLE follows (
    follower_id UUID NOT NULL,
    followee_id UUID NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (follower_id, followee_id)
);

CREATE INDEX idx_follower ON follows(follower_id);
CREATE INDEX idx_followee ON follows(followee_id);

-- Optimize for graph queries
CREATE INDEX idx_follower_followee ON follows(follower_id, followee_id);
```

#### Likes Table
```sql
CREATE TABLE likes (
    user_id UUID NOT NULL,
    tweet_id UUID NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, tweet_id)
);

CREATE INDEX idx_tweet_likes ON likes(tweet_id);
```

#### Retweets Table
```sql
CREATE TABLE retweets (
    user_id UUID NOT NULL,
    tweet_id UUID NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, tweet_id)
);

CREATE INDEX idx_tweet_retweets ON retweets(tweet_id);
```

### 4.3 Redis Cache Schema

```
Keys:
- timeline:{user_id} → List of tweet IDs (ZSET sorted by timestamp)
- tweet:{tweet_id} → Tweet JSON (STRING)
- user:{user_id} → User JSON (STRING)
- hot_tweets → Top 1000 trending tweets (ZSET by score)
- trending_hashtags → Top 20 hashtags (ZSET by count)

TTL:
- timeline:{user_id}: 10 minutes
- tweet:{tweet_id}: 1 hour (hot tweets), 5 minutes (normal)
- user:{user_id}: 30 minutes
```

---

## 5. API Design

### 5.1 User APIs

#### POST /api/v1/users/register
**Request:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```
**Response:** `201 Created` with user object

#### POST /api/v1/users/{userId}/follow
**Request:**
```json
{
  "followeeId": "uuid-of-user-to-follow"
}
```
**Response:** `200 OK`

### 5.2 Tweet APIs

#### POST /api/v1/tweets
**Request:**
```json
{
  "content": "This is my tweet #awesome",
  "mediaUrls": ["https://cdn.example.com/image1.jpg"]
}
```
**Response:** `201 Created` with tweet object

#### GET /api/v1/tweets/{tweetId}
**Response:**
```json
{
  "tweetId": "uuid",
  "userId": "uuid",
  "content": "Tweet content",
  "createdAt": "2024-01-15T10:30:00Z",
  "likeCount": 150,
  "retweetCount": 30,
  "replyCount": 10
}
```

#### POST /api/v1/tweets/{tweetId}/like
**Response:** `200 OK`

### 5.3 Timeline APIs

#### GET /api/v1/timeline/home?page=1&pageSize=20
**Description:** Home timeline (tweets from followed users)
**Response:**
```json
{
  "tweets": [ /* array of tweet objects */ ],
  "nextPage": 2,
  "hasMore": true
}
```

#### GET /api/v1/timeline/user/{userId}?page=1&pageSize=20
**Description:** User timeline (specific user's tweets)
**Response:** Same as home timeline

### 5.4 Search APIs

#### GET /api/v1/search/tweets?q=machine+learning&page=1
**Response:**
```json
{
  "results": [ /* array of tweet objects */ ],
  "total": 1523,
  "page": 1
}
```

---

## 6. Feed Generation Algorithm

### 6.1 Fan-Out on Write (Push Model)

**When user posts a tweet:**
```python
def post_tweet(user_id, content):
    # 1. Save tweet to database
    tweet_id = save_tweet(user_id, content)
    
    # 2. Get all followers
    followers = get_followers(user_id)  # Graph query
    
    # 3. Fan-out: Add tweet to each follower's timeline cache
    for follower_id in followers:
        redis.zadd(f"timeline:{follower_id}", 
                   {tweet_id: timestamp})
        redis.expire(f"timeline:{follower_id}", 600)  # 10 min TTL
    
    # 4. Update trending hashtags
    extract_and_update_hashtags(content)
    
    return tweet_id
```

**Pros:** Fast read (timeline already computed)
**Cons:** Slow write (celebrities with millions of followers)

### 6.2 Fan-Out on Read (Pull Model)

**When user requests timeline:**
```python
def get_home_timeline(user_id, page_size=20):
    # 1. Check cache
    cached_timeline = redis.zrange(f"timeline:{user_id}", 0, page_size-1)
    if cached_timeline:
        return get_tweets(cached_timeline)
    
    # 2. Get following list
    following = get_following(user_id)  # Graph query
    
    # 3. Fetch recent tweets from each followed user
    tweets = []
    for followee_id in following:
        user_tweets = get_recent_tweets(followee_id, limit=100)
        tweets.extend(user_tweets)
    
    # 4. Sort by timestamp and paginate
    tweets.sort(key=lambda t: t['created_at'], reverse=True)
    timeline = tweets[:page_size]
    
    # 5. Cache result
    cache_timeline(user_id, timeline)
    
    return timeline
```

**Pros:** No write overhead
**Cons:** Slow read (compute on demand)

### 6.3 Hybrid Approach (Recommended)

```python
def post_tweet(user_id, content):
    tweet_id = save_tweet(user_id, content)
    follower_count = get_follower_count(user_id)
    
    if follower_count < 10000:
        # Regular user: Fan-out on write
        followers = get_followers(user_id)
        for follower_id in followers:
            add_to_timeline_cache(follower_id, tweet_id)
    else:
        # Celebrity: Don't fan-out, mark as hot
        redis.zadd("hot_tweets", {tweet_id: timestamp})
    
    return tweet_id

def get_home_timeline(user_id, page_size=20):
    # 1. Get pre-computed timeline from cache
    regular_tweets = get_cached_timeline(user_id)
    
    # 2. Get tweets from celebrity accounts user follows
    celebrity_following = get_celebrity_following(user_id)
    celebrity_tweets = []
    for celeb_id in celebrity_following:
        celebrity_tweets.extend(
            get_recent_tweets(celeb_id, limit=20)
        )
    
    # 3. Merge and sort
    all_tweets = regular_tweets + celebrity_tweets
    all_tweets.sort(key=lambda t: t['created_at'], reverse=True)
    
    return all_tweets[:page_size]
```

---

## 7. Scalability & Performance

### 7.1 Sharding Strategy

#### Tweets Sharding (Cassandra)
```
Partition Key: user_id
Clustering Key: created_at DESC

Rationale: Most queries are "get tweets by user", 
natural data locality
```

#### Follows Sharding (PostgreSQL)
```
Shard by follower_id (hash-based)

Example with 8 shards:
- shard_id = hash(follower_id) % 8

Benefits:
- "Get following list" queries hit single shard
- "Get followers" requires scatter-gather (acceptable)
```

### 7.2 Caching Strategy

**Multi-Level Cache:**
```
L1: Application-level cache (LRU, 1 GB per server)
L2: Redis cluster (100 GB)
L3: Database (Cassandra)
```

**Cache Invalidation:**
- Timeline: TTL-based (10 minutes)
- Tweets: Write-through cache
- User profiles: Write-through + 30 min TTL

### 7.3 Database Optimization

**Cassandra:**
- Replication Factor: 3
- Read Consistency: ONE (fast, eventually consistent)
- Write Consistency: QUORUM (ensure durability)

**PostgreSQL (Follows):**
- Read replicas: 5 replicas for read scaling
- Connection pooling: 500 connections per server
- Prepared statements for common queries

### 7.4 CDN for Media

```
Flow:
1. User uploads image → API server
2. API server → S3 bucket
3. S3 → CloudFront CDN
4. Tweet stores CDN URL
5. Clients fetch from CDN (geo-distributed)
```

---

## 8. Trade-offs & Optimizations

### 8.1 Consistency vs. Availability

**Choice:** Eventual Consistency

**Trade-offs:**
- ✅ High availability (tolerate partition failures)
- ✅ Low latency (no coordination overhead)
- ⚠️ User might see stale data (acceptable for social media)

**Example:** Like count might be off by a few for a few seconds

### 8.2 Fan-Out Optimization

**Problem:** Celebrities with 100M followers → 100M writes per tweet

**Solution:** Hybrid approach
- Don't fan-out for celebrities
- Compute celebrity tweets on read (merged with cached timeline)
- Cache celebrity tweet lists aggressively

### 8.3 Graph Query Optimization

**Problem:** "Get followers" is expensive for large graphs

**Optimizations:**
1. **Denormalization:**
   ```sql
   ALTER TABLE users ADD COLUMN follower_count INT;
   ALTER TABLE users ADD COLUMN following_count INT;
   ```

2. **Graph Database (Neo4j) for complex queries:**
   ```cypher
   // Find mutual follows
   MATCH (user1)-[:FOLLOWS]->(mutual)<-[:FOLLOWS]-(user2)
   WHERE user1.id = $user1_id AND user2.id = $user2_id
   RETURN mutual
   ```

3. **Adjacency List in Redis:**
   ```
   followers:{user_id} → Set of follower IDs
   following:{user_id} → Set of following IDs
   ```

### 8.4 Search Optimization

**Elasticsearch:**
```json
{
  "mappings": {
    "properties": {
      "content": {
        "type": "text",
        "analyzer": "standard"
      },
      "hashtags": {
        "type": "keyword"
      },
      "created_at": {
        "type": "date"
      }
    }
  }
}
```

**Indexing Pipeline:**
```
Tweet Created → Kafka → Logstash → Elasticsearch
```

**Query:**
```json
GET /tweets/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "content": "machine learning" } }
      ],
      "filter": [
        { "range": { "created_at": { "gte": "now-7d" } } }
      ]
    }
  },
  "sort": [ { "created_at": "desc" } ]
}
```

### 8.5 Rate Limiting

**Redis-based sliding window:**
```python
def rate_limit(user_id, action, limit, window_seconds):
    key = f"rate_limit:{user_id}:{action}"
    now = time.time()
    
    # Remove old entries
    redis.zremrangebyscore(key, 0, now - window_seconds)
    
    # Count requests in window
    count = redis.zcard(key)
    
    if count >= limit:
        return False  # Rate limited
    
    # Add current request
    redis.zadd(key, {now: now})
    redis.expire(key, window_seconds)
    
    return True

# Usage
if not rate_limit(user_id, "post_tweet", limit=100, window_seconds=3600):
    return error("Rate limit exceeded: 100 tweets per hour")
```

---

## 🎯 Key Takeaways

1. **Graph Algorithms in Action:**
   - Follow relationships = Directed graph
   - Timeline generation = Graph traversal (BFS from followed users)
   - Trending topics = Weighted graph (hashtag co-occurrence)

2. **Union-Find for Communities:**
   - Detect connected components in user network
   - Recommend users from same component

3. **Scalability:**
   - Horizontal scaling with sharding
   - Multi-level caching
   - Hybrid fan-out strategy

4. **Trade-offs:**
   - Eventual consistency for availability
   - Denormalization for read performance
   - Celebrity special handling

---

**Author:** Day 37 System Design Study  
**Date:** 2024  
**Status:** ✅ Production-Ready Architecture

