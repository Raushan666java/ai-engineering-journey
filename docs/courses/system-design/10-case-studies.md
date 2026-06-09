# Chapter 10: Case Studies: Designing Large-Scale Applications

---

## Learning Objectives

- Apply all previously learned concepts (Scaling, Caching, DBs, MQs) to a real-world problem
- Identify and address the unique bottlenecks of different application types
- Design a high-level architecture for a URL Shortener and a Rate Limiter
- Evaluate the trade-offs of specific technology choices in a case study context

---

## Theory

### The Anatomy of a System Design Answer
When designing a real-world system, you must follow a structured approach to ensure all "non-functional" requirements are met. This chapter applies the **Four-Phase Process** (introduced in Chapter 1) to two classic problems.

### Problem 1: URL Shortener (e.g., Bitly)
**Core Challenges:**
- **Read-to-Write Ratio:** Extremely high (millions of redirects for every few thousand links created).
- **Latency:** Redirects must be near-instant.
- **Uniqueness:** No two long URLs should result in the same short URL if possible (or at least, each short URL must be unique).

### Problem 2: API Rate Limiter
**Core Challenges:**
- **Performance:** Checking the rate limit should not add significant latency to the actual API call.
- **Accuracy:** The limit should be strictly enforced across a distributed cluster of API servers.
- **Distributed State:** The "counter" for each user must be synchronized.

---

## Examples

### Case Study 1: Designing a URL Shortener
1. **Requirements:** Support 100M short links/month. Expiry after 1 year. Low latency.
2. **Estimation:** 100M links * 500 bytes per entry = 50GB storage per month. 600GB/year.
3. **High-Level Design:**
   - **Write Path:** Client -> LB -> App Server -> Key Generation Service (KGS) -> NoSQL DB (e.g., MongoDB/Cassandra).
   - **Read Path:** Client -> LB -> App Server -> Cache (Redis) -> NoSQL DB.
4. **Deep Dive (KGS):** Instead of calculating a hash for every URL (which might collide), we use a **Key Generation Service**. It pre-generates 1 million unique strings (e.g., `aB3d5x`) and stores them in a separate database. When a new URL comes, the App Server just "grabs" one available key. This is extremely fast and guarantees uniqueness.

### Case Study 2: Designing a Distributed Rate Limiter
1. **Requirements:** Limit users to 100 requests per minute.
2. **Algorithm Selection:** **Token Bucket** is preferred for its simplicity and ability to handle bursts.
3. **Architecture:**
   - Every API request goes through a middleware.
   - The middleware checks a **Redis** counter for that `user_id`.
   - If `count < 100`, increment Redis and allow the call. Else, return `429 Too Many Requests`.
4. **Optimization:** To avoid a network hop to Redis for every single call, each API server can "reserve" a batch of 10 tokens from Redis and track them locally. This reduces Redis traffic by 10x.

---

## Summary

- Case studies are the ultimate test of system design knowledge.
- For URL shorteners, pre-generating keys (KGS) solves the collision and latency problems.
- NoSQL is often preferred for URL shorteners due to its simple key-value nature and horizontal scalability.
- For Rate Limiters, Redis is the industry standard for storing distributed counters.
- Token Bucket and Leaky Bucket are the two most common algorithms for rate limiting.
- Performance in a rate limiter is achieved by local batching of tokens.

---

## Exercises

### Review Questions
1. Why is a relational database (SQL) less ideal than a NoSQL database for a URL shortener at massive scale?
2. Explain how a "Key Generation Service" avoids hash collisions.
3. What is the difference between a "Fixed Window" and a "Sliding Window" rate limiting algorithm?
4. How does a Rate Limiter prevent DDoS attacks?

### Application Problems
1. **Capacity Planning:** A URL shortener needs to store 10 billion links. If each link takes 100 bytes, calculate the total storage. If you use a NoSQL database that replicas data 3 times, what is the final storage requirement?
2. **Algorithm Design:** You are building a Rate Limiter for a legacy system that cannot handle sudden bursts of traffic. Would you use "Token Bucket" or "Leaky Bucket"? Why?
3. **Deep Dive:** In the URL Shortener design, if the Redis cache has a 90% hit ratio, how does that affect the overall average latency of a redirect? Assume Redis takes 1ms and DB takes 100ms.

### Challenge Problem
**Designing a Trending Topic System:** Design a system like "Twitter Trends" that identifies the top 10 most used hashtags in the last 60 minutes.
- How do you handle the massive volume of incoming tweets (100k/sec)?
- How do you "slide" the 60-minute window every second?
- Which data structure would you use to keep track of hashtag counts? (Hint: Consider **Count-Min Sketch** for estimation or a **Distributed MapReduce** for exact counts).
- How do you ensure the system is available even if one data center fails?
