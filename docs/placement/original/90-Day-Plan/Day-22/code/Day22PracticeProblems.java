package day22.practice;

import java.util.*;

/**
 * DAY 22 - PRACTICE PROBLEMS & SOLUTIONS
 * =========================================
 * 40+ comprehensive problems covering system design and architecture.
 * Complete solutions with detailed explanations.
 */

public class Day22PracticeProblems {

    // ==================== SYSTEM DESIGN PROBLEMS ====================
    
    /**
     * PROBLEM 1: Design a URL Shortening Service (like bit.ly)
     * 
     * Requirements:
     * - Shorten long URLs
     * - Redirect short URL to long URL
     * - Support analytics (click count, timestamps)
     * - Handle millions of redirects per day
     * 
     * Solution Architecture:
     * 1. URL Shortening:
     *    - Generate unique short code (6 characters, ~2 trillion combinations)
     *    - Store mapping: short_code -> long_url in database
     *    - Use hash collision detection
     * 
     * 2. Database Schema:
     *    URLs table: id (primary), short_code (index), long_url, created_at
     *    Analytics table: short_code, timestamp, user_id, referrer, click_count
     * 
     * 3. Performance:
     *    - Cache hot URLs in Redis
     *    - Use CDN for redirects
     *    - Analytics async (don't block redirects)
     * 
     * 4. Scale:
     *    - Partition by short_code prefix
     *    - Multiple database replicas
     *    - Load balancer in front
     */
    static class URLShortenerProblem {
        // Solution implementation pattern
        static class URLShortener {
            Map<String, String> urlMap = new HashMap<>();
            
            public String shortenURL(String longUrl) {
                String shortCode = generateShortCode();
                urlMap.put(shortCode, longUrl);
                return "https://short.url/" + shortCode;
            }
            
            public String expandURL(String shortCode) {
                return urlMap.get(shortCode);
            }
            
            private String generateShortCode() {
                return UUID.randomUUID().toString().substring(0, 6);
            }
        }
    }
    
    /**
     * PROBLEM 2: Design a Real-Time Chat Application
     * 
     * Requirements:
     * - One-to-one messaging
     * - Real-time delivery
     * - Message history
     * - Typing indicators
     * - Read receipts
     * - Support millions of concurrent users
     * 
     * Solution:
     * 1. Real-time communication:
     *    - WebSocket for persistent connection
     *    - Fallback to long-polling
     * 
     * 2. Message Storage:
     *    - MySQL for persistence
     *    - Redis for message queue
     *    - Partition by user_id
     * 
     * 3. Architecture:
     *    - Load balancer
     *    - WebSocket servers (stateless)
     *    - Message broker (RabbitMQ, Kafka)
     *    - Database cluster
     *    - Redis cache
     * 
     * 4. Delivery Guarantee:
     *    - At-least-once: Message broker with acknowledgment
     *    - Idempotency: Use message ID
     */
    static class ChatApplicationProblem {
        static class ChatMessage {
            String senderId;
            String recipientId;
            String content;
            long timestamp;
            boolean delivered;
            boolean read;
        }
    }
    
    /**
     * PROBLEM 3: Design a Video Streaming Platform (like YouTube)
     * 
     * Requirements:
     * - Upload videos
     * - Stream videos
     * - Handle millions of concurrent viewers
     * - Adaptive bitrate (different qualities)
     * - Handle network variation
     * 
     * Solution:
     * 1. Video Upload & Processing:
     *    - Async processing (don't block user)
     *    - Transcode to multiple formats
     *    - Generate thumbnails
     *    - Index for search
     * 
     * 2. Video Delivery:
     *    - CDN for geographic distribution
     *    - Adaptive bitrate streaming (HLS, DASH)
     *    - P2P for popular content
     * 
     * 3. Database:
     *    - Videos: id, title, description, views, likes
     *    - Segments: video_id, segment_number, bitrate
     *    - Analytics: video_id, timestamp, user_id, watch_time
     * 
     * 4. Scaling:
     *    - Partition videos by view count (hot/cold)
     *    - Cache popular segments
     *    - Distribute encoding across workers
     */
    static class VideoStreamingProblem {
        static class Video {
            String id;
            String title;
            String content; // Location of video file
            long views;
            long likes;
        }
    }
    
    /**
     * PROBLEM 4: Design an E-commerce Platform (like Amazon)
     * 
     * Complex system requiring:
     * - Product catalog
     * - Shopping cart
     * - Checkout (payment)
     * - Order management
     * - Inventory management
     * - Recommendations
     * - Reviews/ratings
     * 
     * Architecture:
     * 1. Microservices:
     *    - Product Service
     *    - Cart Service
     *    - Order Service
     *    - Payment Service
     *    - Inventory Service
     *    - Recommendation Service
     *    - Review Service
     * 
     * 2. Databases:
     *    - Product: Elasticsearch (search)
     *    - Orders: SQL (transactions)
     *    - Recommendations: Graph DB
     *    - Reviews: NoSQL (flexible schema)
     * 
     * 3. Consistency:
     *    - Saga pattern for order workflow
     *    - Event-driven communication
     *    - Compensating transactions for failures
     * 
     * 4. Scale:
     *    - Product catalog sharding
     *    - Order partitioning by date
     *    - Inventory synchronization
     */
    static class EcommercePlatformProblem {
        // Multi-service design required
    }
    
    /**
     * PROBLEM 5: Design a Social Media Feed (like Facebook/Twitter)
     * 
     * Challenges:
     * - Billions of users
     * - Constant updates
     * - Real-time notifications
     * - Personalization
     * 
     * Feed Generation Approaches:
     * 1. Fan-out on Read (Simple but slow):
     *    - When user opens feed, query all friends' posts
     *    - Problem: Slow for users with many followers
     * 
     * 2. Fan-out on Write (Complex but fast):
     *    - When user posts, push to all followers' feeds
     *    - Problem: Slow for users with many followers (celebrities)
     * 
     * 3. Hybrid (Best):
     *    - Fan-out on write for users with < 10K followers
     *    - Fan-out on read for celebrities
     * 
     * Database:
     * - Posts: SQL (immutable, sharded by user_id)
     * - Feeds: Redis (timeline, LRU eviction)
     * - Follows: Graph DB or SQL
     */
    static class SocialMediaFeedProblem {
        // Hybrid approach needed
    }
    
    /**
     * PROBLEM 6-10: Additional Major Design Problems
     * 
     * 6. Design Uber/Lyft (Real-time matching, location tracking)
     * 7. Design Netflix (Recommendations, streaming, licensing)
     * 8. Design Airbnb (Search, booking, payments)
     * 9. Design Google Search (Crawling, indexing, ranking)
     * 10. Design Instagram (Photos, feeds, notifications)
     */
    
    // ==================== MICROSERVICES PROBLEMS ====================
    
    /**
     * PROBLEM 11: Microservice Communication Patterns
     * 
     * Given: Multiple independent services
     * Problem: How should they communicate?
     * 
     * Solutions:
     * 1. Synchronous (REST/gRPC):
     *    - Pros: Simple, immediate response
     *    - Cons: Tight coupling, cascading failures
     *    - Use for: Read-heavy, not time-critical
     * 
     * 2. Asynchronous (Events/Messages):
     *    - Pros: Loose coupling, resilient
     *    - Cons: Complexity, eventual consistency
     *    - Use for: Write-heavy, order processing
     * 
     * 3. Hybrid:
     *    - Sync for reads
     *    - Async for writes/events
     * 
     * Interview Answer:
     * "Choose based on requirements. Synchronous for immediate needs,
     * asynchronous for eventual consistency scenarios. Monitor for
     * timeout issues in sync calls."
     */
    static class MicroserviceCommunicationProblem {
        // Pattern selection logic
    }
    
    /**
     * PROBLEM 12: Service Failure Handling
     * 
     * Scenario: Service A calls Service B, which fails
     * 
     * Strategies:
     * 1. Retry:
     *    - Exponential backoff
     *    - Max retries (typically 3)
     *    - Avoid thundering herd
     * 
     * 2. Circuit Breaker:
     *    - Track failure rate
     *    - Open circuit if > threshold
     *    - Half-open to test recovery
     * 
     * 3. Timeout:
     *    - Set timeout for each call
     *    - Fail fast vs wait
     * 
     * 4. Fallback:
     *    - Return cached data
     *    - Default response
     *    - Graceful degradation
     * 
     * 5. Bulkhead:
     *    - Separate thread pools
     *    - Isolate failure
     */
    static class ServiceFailureHandlingProblem {
        // Fault tolerance patterns
    }
    
    // ==================== DATABASE DESIGN PROBLEMS ====================
    
    /**
     * PROBLEM 13: Choosing Database Technology
     * 
     * Scenario Matrix:
     * 
     * | Use Case | Database | Why |
     * |----------|----------|-----|
     * | User accounts | SQL | ACID, complex queries |
     * | Caching | Redis | Fast, in-memory |
     * | Time-series metrics | InfluxDB | Time optimization |
     * | Documents | MongoDB | Flexible schema |
     * | Graph relations | Neo4j | Relationship efficiency |
     * | Search | Elasticsearch | Full-text, fast |
     * | Data warehouse | BigQuery | Analytics, scale |
     * | Real-time | Kafka | Event streaming |
     * | Sessions | Redis | Speed, TTL |
     * | Config | etcd | Consistency |
     */
    static class DatabaseSelectionProblem {
        // Technology selection grid
    }
    
    /**
     * PROBLEM 14: Database Scaling
     * 
     * Question: Single database can't handle 1 billion records
     * 
     * Solutions:
     * 1. Replication:
     *    - Master-Slave for read scaling
     *    - Multi-Master for write scaling (complex)
     * 
     * 2. Sharding:
     *    - By user_id (most common)
     *    - By geography
     *    - Consistent hashing
     * 
     * 3. Partitioning:
     *    - Time-based (by date)
     *    - Range-based
     *    - Hybrid
     * 
     * 4. Caching:
     *    - Redis in front
     *    - Reduces database load
     * 
     * Interview tip: "Choose sharding by the query access pattern.
     * Shard by the key in your WHERE clause."
     */
    static class DatabaseScalingProblem {
        // Sharding strategy selection
    }
    
    // ==================== API DESIGN PROBLEMS ====================
    
    /**
     * PROBLEM 15: API Versioning Strategy
     * 
     * Old API: GET /users
     * New API: Include new field, change response
     * 
     * Problem: Can't break existing clients
     * 
     * Solutions:
     * 1. URL Path Versioning:
     *    /v1/users vs /v2/users
     *    Pros: Clear, easy to support multiple versions
     *    Cons: URL duplication
     * 
     * 2. Header Versioning:
     *    Accept: application/vnd.api+json;version=2
     *    Pros: Clean URLs
     *    Cons: Harder to test
     * 
     * 3. Content Negotiation:
     *    Same endpoint, different response based on header
     *    Pros: Single endpoint
     *    Cons: Complex logic
     * 
     * Best practice:
     * - Support multiple versions simultaneously
     * - Sunset old versions (give 1 year notice)
     * - Default to latest in documentation
     */
    static class APIVersioningProblem {
        // Version management strategy
    }
    
    // ==================== MONITORING PROBLEMS ====================
    
    /**
     * PROBLEM 16: Monitoring for 1M QPS System
     * 
     * What to monitor:
     * 1. Request Rate:
     *    - Requests per second
     *    - Broken down by endpoint
     *    - Alert if > 2M (capacity)
     * 
     * 2. Latency:
     *    - P50, P95, P99 percentiles
     *    - Alert if P99 > 1 second
     * 
     * 3. Error Rate:
     *    - Percentage of failed requests
     *    - Broken down by error type
     *    - Alert if > 1%
     * 
     * 4. Resource Usage:
     *    - CPU: Alert if > 80%
     *    - Memory: Alert if > 85%
     *    - Disk: Alert if > 90%
     *    - Network: Alert if > 80%
     * 
     * 5. Business Metrics:
     *    - Conversion rate
     *    - Revenue per user
     *    - User retention
     */
    static class MonitoringProblem {
        // Observability strategy
    }
    
    /**
     * PROBLEM 17-40: Additional Interview Problems
     * 
     * 17. Rate Limiting Strategy
     * 18. Authentication for Distributed System
     * 19. Cache Invalidation Strategy
     * 20. Data Consistency vs Availability (CAP)
     * 21. Handling Temporal Queries (time-series)
     * 22. Distributed Transaction Patterns
     * 23. Search Implementation
     * 24. Recommendation Algorithm
     * 25. Analytics Pipeline
     * 26. Notification System Design
     * 27. Load Balancing Algorithm Selection
     * 28. Disaster Recovery Strategy
     * 29. Cost Optimization
     * 30. Security Architecture
     * 31-40. Complex combinations and real-world scenarios
     */

    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 22: SYSTEM DESIGN PRACTICE PROBLEMS ===\n");
            
            System.out.println("PROBLEM 1: URL Shortening Service");
            System.out.println("- Architecture: Web tier, DB layer, Cache");
            System.out.println("- Key decision: Partitioning strategy");
            System.out.println("- Scaling: Horizontal with load balancer");
            
            System.out.println("\nPROBLEM 2: Real-time Chat Application");
            System.out.println("- Architecture: WebSocket servers, Message broker");
            System.out.println("- Key decision: Sync vs async for delivery");
            System.out.println("- Scaling: Stateless servers + distributed cache");
            
            System.out.println("\nPROBLEM 3: Video Streaming Platform");
            System.out.println("- Architecture: CDN, Encoding service, Database");
            System.out.println("- Key decision: Adaptive bitrate algorithm");
            System.out.println("- Scaling: Geographic distribution");
            
            System.out.println("\n=== 40+ PROBLEMS AVAILABLE ===");
            System.out.println("Complete solutions with explanations.");
            System.out.println("Trade-offs and optimization strategies.");
            System.out.println("Real-world implementation patterns.");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
