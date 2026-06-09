# Chapter 3: Caching Strategies and Patterns

---

## Learning Objectives

- Explain the principles of the Caching Hierarchy and the "Locality of Reference"
- Compare different caching patterns: Cache-aside, Read-through, and Write-through
- Identify common cache eviction policies (LRU, LFU, FIFO)
- Discuss the challenges of Cache Invalidation and "Thundering Herd" problems

---

## Theory

### The Power of Caching
Caching is the process of storing copies of data in a temporary storage location (a cache) so that future requests for that data can be served faster. It relies on the principle of **Locality of Reference**: data accessed recently is likely to be accessed again soon (temporal locality), and data near recently accessed data is also likely to be accessed (spatial locality).

### Caching Patterns
1. **Cache-aside (Lazy Loading):** The application first checks the cache. If the data is missing (cache miss), it fetches it from the database and manually writes it to the cache.
2. **Read-through:** The application treats the cache as the main data store. If a miss occurs, the cache library itself fetches data from the database and updates itself transparently.
3. **Write-through:** Every write to the database must also go through the cache. This ensures the cache is never stale but adds latency to write operations.
4. **Write-behind (Write-back):** Data is written only to the cache. The cache then asynchronously flushes the data to the database in batches. This is very fast but risks data loss if the cache crashes before flushing.

### Cache Eviction Policies
Since cache memory is limited (often RAM), we must decide what to remove when it's full:
- **Least Recently Used (LRU):** Removes the item that hasn't been accessed for the longest time.
- **Least Frequently Used (LFU):** Removes items that are accessed the least often.
- **FIFO (First In, First Out):** Removes the oldest item, regardless of how often it's accessed.

---

## Examples

### Example 1: Implementing Cache-aside with Redis
In a Python application, you might use Redis to store user profiles.
```python
import redis
import json

r = redis.Redis(host='localhost', port=6379)

def get_user(user_id):
    # Try to get from cache
    cached_user = r.get(f"user:{user_id}")
    if cached_user:
        return json.loads(cached_user)
    
    # Cache miss: get from DB
    user = db.query(f"SELECT * FROM users WHERE id={user_id}")
    
    # Update cache (with 1 hour expiry)
    r.setex(f"user:{user_id}", 3600, json.dumps(user))
    return user
```
This demonstrates the "Lazy Loading" approach where the cache is only populated on demand.

### Example 2: The Thundering Herd Problem
Imagine a celebrity with 50M followers tweets. Their profile is cached. Suddenly, the cache expires. At that exact microsecond, 1M users refresh their feed. All 1M requests see a cache miss and hit the database simultaneously. This "Thundering Herd" can crash the database. A common fix is to use **locking** (only one request goes to the DB, others wait) or **probabilistic early expiration**.

---

## Summary

- Caching significantly reduces latency and database load by keeping data in fast memory.
- Locality of Reference is the fundamental reason why caching works in real-world applications.
- Cache-aside is the most common pattern for its simplicity and robustness.
- Eviction policies like LRU are essential for managing limited cache capacity.
- Cache invalidation ("naming things and cache invalidation") remains one of the hardest problems in computer science.

---

## Exercises

### Review Questions
1. Explain the difference between temporal and spatial locality.
2. What are the risks of using the "Write-behind" pattern?
3. How does a TTL (Time-To-Live) help with cache consistency?
4. Why is a cache hit ratio important, and how is it calculated?

### Application Problems
1. **Policy Selection:** You are caching a news site. Front-page articles are accessed millions of times, while old archives are accessed once a month. Which eviction policy (LRU vs LFU) is better here?
2. **Consistency Design:** A user changes their password. If you use a Cache-aside pattern, how do you ensure the old password is not served from the cache? Describe two approaches.
3. **Multi-tier Caching:** Design a system that uses both a Local Cache (on the app server) and a Distributed Cache (Redis). What are the advantages of this "L1/L2" setup?

### Challenge Problem
**Cache Stampede:** Your system uses a 5-minute TTL for a complex dashboard query that takes 10 seconds to compute. Every 5 minutes, you experience a "latency spike" for all users. Propose a solution that uses **Background Refresh** or **Soft Expiration** to ensure users never experience this 10-second delay.
