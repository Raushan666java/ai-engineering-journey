# System Design Interview Preparation Guide

> **Your Complete Guide to Acing System Design Interviews at Top Tech Companies**

## 📋 Overview

This guide provides a structured approach to preparing for system design interviews, with proven strategies used by successful candidates at FAANG+ companies.

---

## 🎯 What to Expect

### Interview Format

**Duration**: 45-60 minutes

**Structure**:
1. **Clarification (5-10 min)** - Ask questions, define scope
2. **High-Level Design (10-15 min)** - Draw architecture diagram
3. **Deep Dive (15-20 min)** - Discuss components in detail
4. **Scaling & Trade-offs (10-15 min)** - Handle edge cases, scale
5. **Q&A (5 min)** - Answer interviewer questions

### What Interviewers Look For

#### ✅ Technical Skills
- System design knowledge
- Understanding of trade-offs
- Knowledge of technologies
- Scalability awareness

#### ✅ Communication
- Clear articulation
- Structured thinking
- Active listening
- Asking good questions

#### ✅ Problem-Solving
- Breaking down complex problems
- Handling ambiguity
- Creative solutions
- Analytical thinking

---

## 📚 The PEDALS Framework

A proven framework for tackling any system design question:

### **P** - Problem Understanding
Ask clarifying questions to understand requirements

### **E** - Estimation
Calculate capacity, storage, bandwidth needs

### **D** - Design High-Level
Create the overall architecture

### **A** - API Design
Define key interfaces and contracts

### **L** - Low-Level Design
Deep dive into critical components

### **S** - Scale & Trade-offs
Discuss how to scale and trade-off decisions

---

## 🎓 Step-by-Step Approach

### Step 1: Clarify Requirements (5-10 minutes)

#### Functional Requirements
**Questions to Ask:**
- What are the core features we need to support?
- Who are the users? How many?
- What are the key use cases?
- Any specific constraints?

**Example (Design Twitter):**
```
✅ "Should users be able to post tweets?"
✅ "Do we need to support following/followers?"
✅ "Should we implement a timeline/feed?"
✅ "Do we need real-time notifications?"
✅ "What about direct messaging?"
```

#### Non-Functional Requirements
- **Availability**: 99.9%? 99.99%?
- **Consistency**: Strong or eventual?
- **Latency**: What's acceptable?
- **Scale**: How many users? Requests per second?

**Template:**
```markdown
## Functional Requirements
1. Users can [action]
2. Users can [action]
3. System should [capability]

## Non-Functional Requirements
- Availability: 99.99%
- Consistency: Eventual
- Latency: <200ms for reads
- Scale: 100M users, 10K writes/sec
```

### Step 2: Back-of-Envelope Estimation (5 minutes)

#### Traffic Estimation
```
Daily Active Users (DAU): 100M
Requests per user per day: 50
Total daily requests: 100M × 50 = 5B

Requests per second (avg): 5B / (24 × 3600) = 57,870 RPS
Peak RPS (3x): 173,610 RPS
```

#### Storage Estimation
```
New posts per day: 10M
Average post size: 1KB
Media (20% have images, avg 200KB): 2M × 200KB = 400GB

Daily storage: 10M × 1KB + 400GB ≈ 410GB
Annual storage: 410GB × 365 ≈ 150TB
5-year storage: 750TB
```

#### Bandwidth Estimation
```
Incoming (writes): 410GB / (24 × 3600) = 4.7 MB/s
Outgoing (reads, 100:1 ratio): 470 MB/s
```

**Estimation Template:**
```python
class SystemEstimation:
    def __init__(self):
        self.dau = 100_000_000  # Daily Active Users
        self.requests_per_user = 50
        self.post_size = 1024  # bytes
        self.posts_per_day = 10_000_000
        
    def traffic(self):
        total_requests = self.dau * self.requests_per_user
        avg_rps = total_requests / (24 * 3600)
        peak_rps = avg_rps * 3
        return {"avg_rps": avg_rps, "peak_rps": peak_rps}
    
    def storage(self):
        daily = self.posts_per_day * self.post_size
        monthly = daily * 30
        yearly = daily * 365
        return {"daily": daily, "yearly": yearly}
```

### Step 3: High-Level Design (10-15 minutes)

#### Start Simple
```
┌─────────┐     ┌─────────┐     ┌──────────┐
│ Client  │────→│  Server │────→│ Database │
└─────────┘     └─────────┘     └──────────┘
```

#### Add Components Progressively
```
                      ┌─────────────┐
                      │Load Balancer│
                      └──────┬──────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
         ┌────▼────┐    ┌───▼────┐    ┌───▼────┐
         │ Server 1│    │Server 2│    │Server 3│
         └────┬────┘    └───┬────┘    └───┬────┘
              │             │              │
              └─────────────┼──────────────┘
                           │
                    ┌──────▼──────┐
                    │   Database  │
                    │   (Master)  │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
         ┌────▼────┐  ┌───▼────┐  ┌───▼────┐
         │ Slave 1 │  │Slave 2 │  │Slave 3 │
         └─────────┘  └────────┘  └────────┘
```

#### Critical Components to Discuss
- **Load Balancer**: Distribute traffic
- **Application Servers**: Business logic
- **Databases**: Data persistence
- **Cache**: Improve performance
- **CDN**: Static content delivery
- **Message Queue**: Async processing

### Step 4: Define APIs (5 minutes)

#### RESTful API Example
```
POST   /api/v1/posts
GET    /api/v1/posts/{id}
GET    /api/v1/users/{id}/feed
POST   /api/v1/users/{id}/follow
DELETE /api/v1/users/{id}/follow
```

#### Request/Response Examples
```json
// POST /api/v1/posts
Request:
{
  "user_id": "123",
  "content": "Hello world",
  "media_urls": ["https://cdn.example.com/image.jpg"]
}

Response:
{
  "post_id": "456",
  "created_at": "2024-01-15T10:30:00Z",
  "status": "published"
}
```

### Step 5: Deep Dive (15-20 minutes)

#### Focus on Critical Components

**Example: Feed Generation**

```python
class FeedGenerator:
    """
    Discuss:
    1. Pull vs Push model
    2. Caching strategy
    3. Ranking algorithm
    """
    
    def generate_feed(self, user_id: str, page_size: int = 20):
        # Check cache first
        cached_feed = self.cache.get(f"feed:{user_id}")
        if cached_feed:
            return cached_feed
        
        # Get user's following list
        following = self.get_following(user_id)
        
        # Fetch recent posts from following
        posts = self.get_posts_from_users(
            following,
            limit=page_size * 2  # Fetch extra for ranking
        )
        
        # Rank posts
        ranked_posts = self.rank_posts(posts, user_id)
        
        # Cache result
        self.cache.set(
            f"feed:{user_id}",
            ranked_posts[:page_size],
            ttl=300  # 5 minutes
        )
        
        return ranked_posts[:page_size]
```

**Discussion Points:**
- Why this approach?
- What are alternatives?
- How does it scale?
- What are the trade-offs?

### Step 6: Scale & Optimize (10-15 minutes)

#### Bottlenecks to Address

**1. Database Bottleneck**
```
Problem: Single database can't handle load

Solutions:
✅ Sharding: Partition by user_id
✅ Replication: Read replicas for reads
✅ Caching: Redis for hot data
✅ Indexing: Optimize queries
```

**2. Hot Users Problem**
```
Problem: Celebrity users have millions of followers

Solutions:
✅ Separate cache for hot users
✅ Pre-compute feeds asynchronously
✅ Dedicated infrastructure
✅ Rate limiting
```

**3. Global Scale**
```
Problem: Users distributed globally

Solutions:
✅ Multi-region deployment
✅ CDN for static content
✅ Edge caching
✅ Geo-routing
```

---

## 📝 Common Interview Questions

### Easy Questions (Entry Level)

#### 1. Design URL Shortener (TinyURL)
**Key Points:**
- Short URL generation (hash or base62)
- Database schema
- Redirection logic
- Analytics tracking

**Expected Discussion:**
- Hash collisions
- Custom short URLs
- Expiration handling
- Cache strategy

#### 2. Design Pastebin
**Key Points:**
- Text storage
- URL generation
- Expiration
- Syntax highlighting

**Expected Discussion:**
- Storage optimization
- Access control
- Rate limiting

#### 3. Design Parking Lot System
**Key Points:**
- Slot management
- Entry/exit tracking
- Payment processing
- Availability checking

### Medium Questions (Mid-Senior Level)

#### 4. Design Twitter
**Key Points:**
- User management
- Tweet posting
- Timeline generation (fan-out)
- Follow/followers
- Notifications

**Expected Discussion:**
- Feed generation (push vs pull)
- Hot user problem
- Timeline caching
- Real-time updates

#### 5. Design Instagram
**Key Points:**
- Photo upload/storage
- Feed generation
- Stories feature
- Comments/likes
- Search functionality

**Expected Discussion:**
- Image storage (S3, CDN)
- Feed ranking algorithm
- Sharding strategy
- Real-time features

#### 6. Design Uber
**Key Points:**
- Location tracking
- Matching drivers/riders
- ETA calculation
- Payment processing
- Trip history

**Expected Discussion:**
- Geo-spatial indexing
- Real-time updates (WebSocket)
- Surge pricing
- Fraud detection

#### 7. Design WhatsApp
**Key Points:**
- Messaging
- Group chats
- Media sharing
- Delivery receipts
- End-to-end encryption

**Expected Discussion:**
- Message storage
- Delivery guarantees
- Offline messages
- Push notifications

### Hard Questions (Senior+ Level)

#### 8. Design YouTube
**Key Points:**
- Video upload/processing
- Video streaming
- Recommendations
- Comments
- Subscriptions

**Expected Discussion:**
- Video encoding pipeline
- CDN strategy
- Adaptive bitrate streaming
- Recommendation algorithm
- Storage optimization

#### 9. Design Netflix
**Key Points:**
- Video catalog
- Streaming service
- Recommendations
- Content delivery
- Subtitle support

**Expected Discussion:**
- Multi-bitrate encoding
- CDN architecture
- Recommendation engine
- DRM and security
- Global distribution

#### 10. Design Google Search
**Key Points:**
- Web crawling
- Indexing
- Query processing
- Ranking algorithm
- Caching

**Expected Discussion:**
- Distributed crawling
- Inverted index
- PageRank algorithm
- Query optimization
- Personalization

---

## 🎯 Interview Preparation Checklist

### 4 Weeks Before Interview

#### Week 1: Foundations
- [ ] Review system design fundamentals
- [ ] Study CAP theorem deeply
- [ ] Practice capacity estimation
- [ ] Review common architectures
- [ ] Study 3-5 case studies

#### Week 2: Core Concepts
- [ ] Deep dive into databases
- [ ] Master caching strategies
- [ ] Understand load balancing
- [ ] Study message queues
- [ ] Practice API design

#### Week 3: Practice
- [ ] Solve 10+ system design problems
- [ ] Draw diagrams for each solution
- [ ] Practice estimations
- [ ] Do 3-5 mock interviews
- [ ] Get feedback

#### Week 4: Polish
- [ ] Review weak areas
- [ ] Practice whiteboarding
- [ ] Time yourself (45 min)
- [ ] Prepare questions to ask
- [ ] Review company systems

### Day Before Interview
- [ ] Review key concepts
- [ ] Practice common questions
- [ ] Prepare materials (whiteboard, markers)
- [ ] Get good sleep
- [ ] Relax and stay confident

---

## 💡 Pro Tips

### Communication Tips

#### ✅ DO:
- Think out loud
- Ask clarifying questions
- Explain your reasoning
- Discuss trade-offs
- Admit what you don't know
- Draw diagrams
- Engage with interviewer

#### ❌ DON'T:
- Jump to solution immediately
- Assume requirements
- Ignore interviewer hints
- Get defensive
- Use buzzwords without understanding
- Complicate unnecessarily
- Give up easily

### Technical Tips

#### ✅ DO:
- Start simple, iterate
- Consider multiple approaches
- Discuss pros and cons
- Think about scale
- Consider edge cases
- Use concrete numbers
- Design for failure

#### ❌ DON'T:
- Over-engineer initially
- Forget non-functional requirements
- Ignore latency/throughput
- Skip estimation
- Forget about monitoring
- Ignore security
- Design perfect system

---

## 🎓 Practice Resources

### Online Platforms
1. **LeetCode** - System Design Section
2. **Pramp** - Free mock interviews
3. **Interviewing.io** - Practice with engineers
4. **Exponent** - Interview prep platform

### Mock Interview Scripts

#### Script 1: Solo Practice (45 min)
```
0-5 min:   Read question, clarify requirements
5-10 min:  Perform estimations
10-25 min: Draw high-level design
25-40 min: Deep dive into components
40-45 min: Discuss scaling and trade-offs
```

#### Script 2: With Partner
```
1. Take turns being interviewer/candidate
2. Use timer strictly
3. Give honest feedback
4. Record and review
5. Discuss improvements
```

### Questions to Practice

**Week 1:**
- URL Shortener
- Pastebin
- Key-Value Store

**Week 2:**
- Rate Limiter
- Notification System
- News Feed

**Week 3:**
- Twitter
- Instagram
- Uber

**Week 4:**
- YouTube
- Netflix
- Dropbox

---

## 📊 Evaluation Rubric

### What Gets You Hired

#### Strong Performance (Hire)
- ✅ Clear communication
- ✅ Structured approach
- ✅ Good trade-off analysis
- ✅ Handles scale well
- ✅ Asks great questions
- ✅ Deep technical knowledge
- ✅ Collaborative

#### Average Performance (Maybe)
- ⚠️ Basic design works
- ⚠️ Some gaps in knowledge
- ⚠️ Limited scale discussion
- ⚠️ Needs prompting
- ⚠️ Functional but not optimal

#### Weak Performance (No Hire)
- ❌ Can't design basic system
- ❌ Poor communication
- ❌ No consideration of scale
- ❌ Doesn't ask questions
- ❌ Fundamental gaps
- ❌ Defensive attitude

---

## 🚀 Final Preparation

### Night Before
1. Review this guide
2. Practice one easy problem
3. Prepare questions about company
4. Relax and get good sleep

### Day Of Interview
1. Arrive 10 min early (or test video setup)
2. Have water nearby
3. Whiteboard/paper ready
4. Stay calm and confident
5. Enjoy the conversation!

---

## 📞 Need More Help?

- 💬 **Discord Community**: Get peer feedback
- 📧 **Mock Interviews**: Schedule practice session
- 📚 **Study Groups**: Join or create one
- 🎥 **Video Tutorials**: Watch example interviews

---

**Good Luck! You've Got This! 🎯**

Remember: The interview is a conversation, not an interrogation. Show your thought process, communicate clearly, and demonstrate how you approach complex problems. That's what matters most!

---

**Last Updated**: October 29, 2025  
**Version**: 2.0