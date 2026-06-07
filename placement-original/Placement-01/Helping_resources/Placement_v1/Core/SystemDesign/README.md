# 🏗️ System Design

## Learning Path

### [Low Level Design (LLD)](LLD/) (1.5 weeks)
**Object-Oriented Design:**
- SOLID principles application
- Design patterns (Singleton, Factory, Observer, Strategy)
- UML diagrams, class relationships
- **Practice Problems:**
  - Parking Lot System
  - Library Management System
  - Deck of Cards
  - Chess Game

### [High Level Design (HLD)](HLD/) (1.5 weeks)
**Scalability Concepts:**
- Load balancing, horizontal vs vertical scaling
- Database scaling (sharding, replication)
- Caching strategies (Redis, Memcached)
- Message queues (Kafka, RabbitMQ)
- **System Examples:**
  - URL Shortener (like bit.ly)
  - Chat System (like WhatsApp)
  - News Feed (like Facebook)
  - Video Streaming (like YouTube)

### [Practice](Practice/) (Ongoing)
**Weekly Practice:**
- 2 LLD problems
- 1 HLD system design
- 1 mock design interview

**System Design Template:**
1. **Requirements Gathering**
   - Functional requirements
   - Non-functional requirements
   - Scale estimation

2. **High-Level Architecture**
   - Major components
   - Data flow
   - API design

3. **Detailed Design**
   - Database schema
   - Algorithm details
   - Technology choices

4. **Scale & Optimize**
   - Bottleneck identification
   - Scaling strategies
   - Monitoring & alerting

## Common System Designs

### Beginner Level
1. **URL Shortener**
   - Requirements: Shorten URLs, redirect, analytics
   - Components: Web server, database, cache
   - Scale: 100M URLs/day

2. **Pastebin**
   - Requirements: Store text, generate URLs
   - Components: Web server, database, object storage
   - Scale: 1M pastes/day

### Intermediate Level
3. **Chat System**
   - Requirements: Real-time messaging, group chat
   - Components: WebSocket servers, message queue, database
   - Scale: 1M active users

4. **News Feed System**
   - Requirements: Post creation, feed generation
   - Components: Post service, feed service, notification service
   - Scale: 10M active users

### Advanced Level
5. **Video Streaming Platform**
   - Requirements: Upload, encode, stream videos
   - Components: CDN, encoding service, metadata database
   - Scale: 100M videos, 1B views/day

6. **Distributed Cache**
   - Requirements: Get/put operations, consistency
   - Components: Cache nodes, consistent hashing, replication
   - Scale: 1M QPS

## Interview Preparation

### LLD Interview (45 minutes)
- **Time Breakdown:**
  - Requirements clarification (5 min)
  - Class design (20 min)
  - Code implementation (15 min)
  - Discussion & optimization (5 min)

### HLD Interview (45 minutes)
- **Time Breakdown:**
  - Requirements gathering (10 min)
  - High-level design (15 min)
  - Detailed design (15 min)
  - Scale & optimize (5 min)

### Key Skills to Demonstrate
- **Problem-solving approach:** Structured thinking
- **Communication:** Clear explanation of design choices
- **Trade-offs:** Understanding of different approaches
- **Scalability:** Handling growth and bottlenecks
- **Real-world knowledge:** Industry best practices

## Resources
- **Books:** Designing Data-Intensive Applications, System Design Interview
- **Websites:** High Scalability, Engineering blogs (Uber, Netflix, Facebook)
- **YouTube:** Gaurav Sen, Tech Dummies
- **Practice:** Pramp, InterviewBit System Design