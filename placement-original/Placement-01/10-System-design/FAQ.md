# System Design Course - Frequently Asked Questions (FAQ)

> **Quick answers to common questions about the course, system design concepts, and career guidance**

---

## 📚 About The Course

### Q1: Who is this course for?

**A:** This course is designed for:
- ✅ Software engineers preparing for system design interviews (2-10 years experience)
- ✅ Computer science students wanting to learn real-world architecture
- ✅ Backend developers looking to level up their skills
- ✅ Technical leads transitioning to architect roles
- ✅ Anyone interested in building scalable systems

**Not suitable for:**
- ❌ Complete beginners with no programming experience
- ❌ Frontend-only developers (though beneficial for full-stack)
- ❌ Those looking for language-specific tutorials

### Q2: What prerequisites do I need?

**A:** Essential prerequisites:
- Basic programming knowledge (Python, Java, or similar)
- Understanding of databases (SQL basics)
- Familiarity with web concepts (HTTP, REST APIs)
- Basic data structures and algorithms

**Nice to have (but not required):**
- Experience with cloud platforms (AWS, Azure, GCP)
- Docker/Kubernetes basics
- Previous system design exposure

### Q3: How long does it take to complete?

**A:** Flexible timeline based on your pace:

**Full-Time (4-6 weeks):**
- 6-8 hours/day
- Complete all projects
- Deep dive into topics

**Part-Time (8-12 weeks):**
- 2-3 hours/day
- Select projects
- Focus on core concepts

**Weekend Only (4-6 months):**
- 8-10 hours/weekend
- Self-paced learning
- Interview-focused track

### Q4: Is this course free?

**A:** Yes! This course is completely free and open-source. All materials, code examples, and projects are available at no cost.

### Q5: Do I get a certificate?

**A:** While we don't issue formal certificates, you will:
- ✅ Build a portfolio of 15+ real projects
- ✅ Create detailed design documents
- ✅ Have GitHub repositories showcasing your work
- ✅ Gain practical interview experience

These are more valuable than certificates when job hunting!

---

## 🎓 Learning & Study

### Q6: Should I follow the course sequentially?

**A:** Recommended approach:
- **Beginners**: Yes, follow Week 1 → Week 10 sequentially
- **Intermediate**: Can skip Week 1-2, start from Week 3
- **Interview Prep**: Focus on Weeks 3-4, 7-8, and Week 10

### Q7: How much time should I spend per day?

**A:** Minimum effective commitment:
- **2 hours/day**: Theory + Basic practice
- **3-4 hours/day**: Include projects and deep dives
- **6+ hours/day**: Full immersion with all exercises

**Quality > Quantity**: 2 focused hours > 6 distracted hours

### Q8: Should I take notes?

**A:** Absolutely! Recommended note-taking:
```markdown
1. **Concept Notes**: Key principles, definitions
2. **Diagram Collection**: All architecture diagrams
3. **Trade-offs Matrix**: Pros/cons of approaches
4. **Interview Templates**: Reusable frameworks
5. **Personal Insights**: Your observations
```

See `QUICK_START_GUIDE.md` for detailed note-taking strategies.

### Q9: Can I skip the projects?

**A:** Not recommended! Projects are crucial because:
- Theory alone won't prepare you for interviews
- Projects show you understand implementation
- They reveal edge cases not obvious in theory
- Portfolio projects help in job applications

**Minimum**: Complete 5-7 key projects  
**Recommended**: All 15+ projects

### Q10: What if I don't understand something?

**A:** Multiple resources available:
1. **Re-read section** with focus on examples
2. **Check related topics** in other weeks
3. **Study the code** - implementation clarifies concepts
4. **Google the concept** - multiple perspectives help
5. **Ask in community** (Discord, forums)
6. **Draw diagrams** - visualize the system
7. **Build mini-version** - hands-on clarity

---

## 💻 Technical Questions

### Q11: What programming language should I use?

**A:** Course uses Python, but you can use:
- **Python** ✅ Best for learning (clear syntax, quick prototyping)
- **Java** ✅ Enterprise standard, verbose but explicit
- **Go** ✅ Great for systems, concurrent programming
- **JavaScript/Node** ✅ If you're web-focused
- **C#** ✅ .NET ecosystem

**Important**: Language matters less than understanding concepts!

### Q12: Do I need to install everything locally?

**A:** Options available:
- **Local Setup** (Recommended): Full control, realistic environment
- **Docker**: Consistent, portable environment
- **Cloud IDEs**: Gitpod, Replit, GitHub Codespaces
- **VM**: Isolated learning environment

See `QUICK_START_GUIDE.md` for detailed setup instructions.

### Q13: What tools do I need?

**A:** Essential tools:
```
Development:
- Python 3.9+
- Git
- Docker Desktop
- Visual Studio Code (or any IDE)

Databases:
- PostgreSQL
- Redis
- MongoDB

Optional:
- Postman (API testing)
- Draw.io (diagrams)
- k6 (load testing)
```

### Q14: Can I use different databases than suggested?

**A:** Absolutely! The course focuses on concepts:
- PostgreSQL → MySQL, MariaDB
- MongoDB → CouchDB, DynamoDB
- Redis → Memcached, Hazelcast

Choose based on your interests or job requirements.

### Q15: How important is coding in system design interviews?

**A:** Varies by company:
- **FAANG**: 20-30% coding (pseudo-code, API design)
- **Mid-size**: 40-50% coding (implement key components)
- **Startups**: 60%+ coding (working prototype)

**Recommendation**: Know how to write pseudo-code clearly and implement critical components.

---

## 🎯 Interview Preparation

### Q16: When should I start applying for jobs?

**A:** Start when you've completed:
- ✅ Weeks 1-4 (fundamentals and scalability)
- ✅ 5-7 projects with documentation
- ✅ Can explain 10+ system designs confidently
- ✅ Completed 20+ mock interviews
- ✅ Comfortable with PEDALS framework

**Timeline**: 6-8 weeks of focused preparation

### Q17: How do I know I'm ready for interviews?

**A:** Self-assessment checklist:
```
Can you design:
□ URL Shortener in 20 min?
□ Twitter in 45 min?
□ YouTube in 60 min?

Can you explain:
□ CAP theorem with examples?
□ 5+ cache strategies?
□ Database sharding approaches?
□ Load balancing algorithms?

Can you:
□ Estimate traffic/storage quickly?
□ Draw clean architecture diagrams?
□ Discuss trade-offs confidently?
□ Handle follow-up questions?
```

If 80%+ yes, you're ready!

### Q18: Which companies ask system design questions?

**A:** Most tech companies at mid-senior+ levels:
- **FAANG**: Google, Amazon, Meta, Apple, Netflix
- **Big Tech**: Microsoft, Uber, Airbnb, LinkedIn
- **Unicorns**: Stripe, Snowflake, Databricks
- **Series B+**: Most funded startups

**Typically required for**:
- Senior Engineer+ positions
- Staff/Principal roles
- Engineering Manager roles
- Solutions Architect positions

### Q19: How are system design interviews different from coding interviews?

**A:** Key differences:

| Aspect | Coding Interview | System Design |
|--------|-----------------|---------------|
| **Duration** | 45-60 min | 45-60 min |
| **Focus** | Algorithms, data structures | Architecture, scalability |
| **Solution** | Specific, optimal code | Multiple valid approaches |
| **Communication** | Less critical | Extremely critical |
| **Preparation** | LeetCode practice | Real-world experience + study |
| **Evaluation** | Correctness, efficiency | Trade-off analysis, breadth |

### Q20: What mistakes do candidates make most often?

**A:** Top 10 mistakes:

1. **Jumping to solution** without clarifying requirements
2. **Not asking questions** (assuming too much)
3. **Over-engineering** from the start
4. **Ignoring non-functional requirements** (scale, latency)
5. **Poor communication** (silent thinking)
6. **No estimation** (missing capacity planning)
7. **Single approach** (not discussing alternatives)
8. **Forgetting edge cases** (failures, security)
9. **No trade-off discussion** (everything is perfect!)
10. **Getting defensive** when interviewer challenges

---

## 🏗️ System Design Concepts

### Q21: What's the difference between horizontal and vertical scaling?

**A:** Simple comparison:

**Vertical Scaling (Scale Up)**:
```
📈 Add more power to existing machine
💡 Increase CPU, RAM, Storage
✅ Pros: Simple, no code changes
❌ Cons: Expensive, single point of failure, limits

Example: Upgrade from 16GB → 64GB RAM
```

**Horizontal Scaling (Scale Out)**:
```
📈 Add more machines
💡 Distribute load across servers
✅ Pros: Cost-effective, no limits, fault-tolerant
❌ Cons: Complex, requires load balancing, data consistency

Example: 1 server → 10 servers
```

**When to use**: Start vertical, scale horizontal as you grow.

### Q22: What is CAP theorem and why does it matter?

**A:** CAP theorem states distributed systems can provide only 2 of 3:

**C**onsistency: All nodes see same data  
**A**vailability: System always responds  
**P**artition Tolerance: Works despite network issues

```
Real-world examples:
- CA: Traditional RDBMS (single node)
- CP: MongoDB, HBase, Redis (consistency priority)
- AP: Cassandra, DynamoDB, Couchbase (availability priority)
```

**Why it matters**: Helps you choose the right database and architecture trade-offs.

### Q23: When should I use caching?

**A:** Use caching when:
- ✅ Data is read frequently (80/20 rule)
- ✅ Data doesn't change often
- ✅ Computation is expensive
- ✅ Database is bottleneck
- ✅ Need low latency (<10ms)

**Don't cache when**:
- ❌ Data changes constantly
- ❌ Strong consistency required
- ❌ Unique per request
- ❌ Data is cheap to compute

### Q24: SQL vs NoSQL - how do I choose?

**A:** Decision matrix:

**Choose SQL (PostgreSQL, MySQL) when**:
- Complex queries with JOINs
- ACID transactions critical
- Structured data with relationships
- Well-defined schema
- Examples: Banking, e-commerce, CRM

**Choose NoSQL when**:
- Simple queries (key-value, document lookup)
- Massive scale (billions of records)
- Flexible schema needed
- High write throughput
- Examples: Logs, analytics, social feeds

**Pro tip**: Many systems use both (polyglot persistence)!

### Q25: What's the difference between REST and GraphQL?

**A:** Quick comparison:

**REST**:
```
✅ Pros:
- Simple, well-understood
- Cacheable
- Standard HTTP methods
- Stateless

❌ Cons:
- Over-fetching (get data you don't need)
- Under-fetching (multiple requests)
- Versioning complexity
```

**GraphQL**:
```
✅ Pros:
- Get exactly what you need
- Single request
- Strong typing
- Introspection

❌ Cons:
- Caching complex
- Query complexity issues
- Steeper learning curve
```

**Use REST for**: Public APIs, simple CRUD, HTTP caching important  
**Use GraphQL for**: Mobile apps, complex data needs, rapid iteration

### Q26: What is database sharding?

**A:** Splitting database across multiple servers:

```
Without Sharding:
┌──────────────┐
│  Database    │ ← All data here (bottleneck!)
│  1 TB data   │
└──────────────┘

With Sharding (4 shards):
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ Shard 1 │  │ Shard 2 │  │ Shard 3 │  │ Shard 4 │
│ 250 GB  │  │ 250 GB  │  │ 250 GB  │  │ 250 GB  │
│ A-F     │  │ G-M     │  │ N-S     │  │ T-Z     │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
```

**Sharding strategies**:
1. **Range-based**: A-F, G-M, etc.
2. **Hash-based**: hash(user_id) % num_shards
3. **Geo-based**: by region/country
4. **Consistent hashing**: minimize resharding

### Q27: What's the difference between synchronous and asynchronous communication?

**A:**

**Synchronous (Request-Response)**:
```python
# Caller waits for response
response = api.call("create_order")
print(response)  # Blocks until complete
```
- ✅ Simple, immediate feedback
- ❌ Tight coupling, slow if service down

**Asynchronous (Message Queue)**:
```python
# Caller doesn't wait
queue.publish("create_order", data)
# Continue immediately
```
- ✅ Decoupled, fault-tolerant, scalable
- ❌ Complex, eventual consistency

**Use sync for**: User-facing operations, immediate results needed  
**Use async for**: Long-running tasks, high-volume processing

---

## 💼 Career & Jobs

### Q28: What salary can I expect after mastering system design?

**A:** Salary ranges (US, 2024):
```
Mid-Level Engineer (3-5 yrs): $120K - $180K
Senior Engineer (5-8 yrs): $160K - $250K
Staff Engineer (8-12 yrs): $200K - $350K
Principal Engineer (12+ yrs): $250K - $500K+
```

**System design skills unlock**:
- Senior+ positions
- Architect roles
- Higher compensation
- Better career trajectory

### Q29: Do I need system design for junior roles?

**A:** Generally no, but:
- Most companies skip it for junior (0-2 years)
- Some ask basic questions (caching, database choice)
- Learning early gives competitive advantage
- Helps understand existing systems at work

**Recommendation**: Focus on coding interviews for junior roles, add system design as you approach mid-level.

### Q30: Can I get a job without previous experience?

**A:** Yes! Here's how:
1. **Build impressive projects** (show, don't just tell)
2. **Document your designs** (write design docs)
3. **Create GitHub portfolio** (15+ projects)
4. **Write blog posts** (explain your choices)
5. **Contribute to open source** (real-world systems)
6. **Practice mock interviews** (get comfortable)

**Key**: Demonstrate understanding through projects and clear communication.

---

## 🛠️ Projects & Practice

### Q31: Which projects should I prioritize?

**A:** Must-complete projects (interview favorites):

**Tier 1 (Essential)**:
1. URL Shortener
2. Rate Limiter
3. Twitter Clone
4. Notification System

**Tier 2 (Important)**:
5. Instagram Clone
6. Uber System
7. YouTube/Video Service
8. Chat Application

**Tier 3 (Advanced)**:
9. Distributed Cache
10. Search Engine
11. Payment System

### Q32: Should I deploy my projects?

**A:** Highly recommended!

**Benefits**:
- Learn AWS/GCP/Azure
- Real performance data
- Portfolio showcase
- Resume talking points
- Operational experience

**Free options**:
- AWS Free Tier (12 months)
- Google Cloud Free Tier
- Heroku (limited free)
- Railway.app
- Fly.io

### Q33: How detailed should project documentation be?

**A:** Professional documentation includes:
```markdown
1. **Overview**: What problem does it solve?
2. **Architecture**: Diagram + component explanation
3. **Technology Choices**: Why Python? Why PostgreSQL?
4. **Challenges & Solutions**: What problems did you face?
5. **Performance**: Load testing results
6. **Future Improvements**: What would you add?
7. **Demo**: Screenshots/video
8. **Code**: Clean, commented, tested
```

**Example length**: 1500-2500 words per project

### Q34: Can I use this course projects in my resume?

**A:** Yes! Make them unique by:
- Adding your own features
- Using different tech stack
- Improving on design
- Measuring performance
- Writing detailed docs

**Don't**: Copy-paste without understanding or modifications.

---

## 🌟 Advanced Topics

### Q35: What's the difference between microservices and monolith?

**A:**

**Monolith**:
```
┌─────────────────────────┐
│     Single Application  │
│  ┌───────────────────┐  │
│  │  All Services     │  │
│  │  - Auth           │  │
│  │  - Orders         │  │
│  │  - Payments       │  │
│  │  - Notifications  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```
- ✅ Simple to develop/deploy initially
- ❌ Scales entire app, not individual services
- ❌ Changes require full deployment

**Microservices**:
```
┌──────┐  ┌──────┐  ┌─────────┐  ┌──────────────┐
│ Auth │  │Orders│  │ Payments│  │Notifications │
│Service  │Service  │ Service │  │   Service    │
└──────┘  └──────┘  └─────────┘  └──────────────┘
```
- ✅ Scale independently
- ✅ Technology flexibility
- ❌ Complex deployment/monitoring
- ❌ Network overhead

**Start monolith, evolve to microservices when needed.**

### Q36: What is eventual consistency?

**A:** Data becomes consistent... eventually:

```
Time: T0 → User updates profile
Shard 1: ✅ Updated immediately
Shard 2: ⏳ Propagating... (1-2 seconds)
Shard 3: ⏳ Propagating... (1-2 seconds)

Time: T0+5s → All shards consistent ✅
```

**Real-world examples**:
- Facebook likes count (might be delayed)
- Twitter follower count (slight lag)
- Amazon inventory (eventual sync)

**Trade-off**: Better availability/performance vs immediate consistency

### Q37: How do distributed transactions work?

**A:** Two-Phase Commit (2PC):

```
Phase 1 - Prepare:
Coordinator: "Can you commit?"
Service A: "Yes" ✅
Service B: "Yes" ✅
Service C: "Yes" ✅

Phase 2 - Commit:
Coordinator: "Commit!"
Service A: Committed ✅
Service B: Committed ✅
Service C: Committed ✅
```

**Problems**: Slow, coordinator is single point of failure

**Modern approach**: Saga pattern (compensating transactions)

### Q38: What's the difference between authentication and authorization?

**A:**

**Authentication**: "Who are you?"
```python
# Login with username/password
user = authenticate(username, password)
# Returns: User ID, username, email
```

**Authorization**: "What can you do?"
```python
# Check permissions
if has_permission(user, "edit_post"):
    edit_post()
else:
    return "Access Denied"
```

**Example**:
- Authentication: Logging into Twitter
- Authorization: Only you can delete your tweets

### Q39: How do rate limiters work?

**A:** Common algorithms:

**1. Token Bucket**:
```
Bucket has 100 tokens
Request arrives → take 1 token
Refill 10 tokens/second
If no tokens → reject request
```

**2. Sliding Window**:
```
Count requests in last 1 minute
If count > 100 → reject
Slide window forward continuously
```

**3. Leaky Bucket**:
```
Requests enter queue
Process at constant rate
Queue full → reject new requests
```

**Use cases**: API rate limiting, DDoS protection, fair resource allocation

### Q40: What is service mesh and do I need it?

**A:**

**Service Mesh**: Infrastructure layer for microservices communication

**Provides**:
- Service discovery
- Load balancing
- Encryption
- Authentication
- Monitoring/tracing
- Retry logic

**Popular**: Istio, Linkerd, Consul

**Need it when**:
- 20+ microservices
- Complex networking requirements
- Need observability
- Security critical

**Don't need if**: Simple architecture, few services (<5)

---

## 📈 Progress & Motivation

### Q41: I'm feeling overwhelmed. What should I do?

**A:** Common feeling! Try:

1. **Break it down**: Focus on one week at a time
2. **Take breaks**: 50 min study, 10 min break
3. **Simplify**: Skip advanced topics initially
4. **Connect with peers**: Join study groups
5. **Celebrate small wins**: Completed a project? 🎉
6. **Remember why**: Career goals, salary increase

**Pro tip**: Progress > Perfection

### Q42: How do I stay motivated?

**A:** Motivation strategies:

**Daily**:
- Set micro-goals (complete 1 lesson)
- Track progress visibly
- Time-box sessions (Pomodoro)

**Weekly**:
- Review accomplishments
- Share learnings (blog, Twitter)
- Pair program with someone

**Monthly**:
- Do mock interview
- Build portfolio site
- Apply to jobs (even if not ready)

**Reminder**: You're investing in $50K+ salary increase!

### Q43: Is it normal to forget things I've learned?

**A:** Absolutely normal! Combat with:

**Spaced Repetition**:
```
Day 1: Learn concept
Day 3: Review
Day 7: Review
Day 30: Review
```

**Active Recall**:
- Explain to someone
- Write blog posts
- Do mock interviews
- Solve problems without notes

**Build Projects**:
- Application reinforces learning
- Mistakes help you remember

### Q44: How do I know I'm making progress?

**A:** Track these metrics:

**Quantitative**:
- Lessons completed: __/70
- Projects finished: __/15
- Mock interviews: __/20
- Questions solved: __/50

**Qualitative**:
- Can you explain concepts clearly?
- Do problems feel easier?
- Can you spot issues in architectures?
- Are you enjoying the material?

**Milestone**: If you can design Twitter in 45 minutes, you've made serious progress!

---

## 🤝 Community & Support

### Q45: Where can I ask questions?

**A:** Multiple channels:

1. **GitHub Issues**: Course repository
2. **Discord Server**: Real-time chat
3. **Reddit**: r/systemdesign
4. **Stack Overflow**: Technical questions
5. **Twitter**: #SystemDesign hashtag

**Best practices**:
- Search first
- Provide context
- Share what you've tried
- Be specific

### Q46: How can I contribute to this course?

**A:** We welcome contributions!

**Ways to help**:
- 🐛 Report bugs/errors
- 📝 Improve documentation
- 💡 Suggest new topics
- 🔨 Add code examples
- 📖 Write case studies
- 🎨 Create diagrams
- 🌍 Translate content

**Process**: Fork → Make changes → Pull Request

### Q47: Can I use this course for teaching?

**A:** Yes! Open-source, use freely:
- ✅ Teaching at university
- ✅ Corporate training
- ✅ Bootcamps
- ✅ Study groups
- ✅ Workshops

**Request**: Give attribution and share improvements back!

---

## 🔮 Future & Updates

### Q48: Will this course be updated?

**A:** Yes, regularly updated with:
- New system design patterns
- Updated technology examples
- Additional case studies
- Community contributions
- Industry best practices
- Interview question trends

**Check**: CHANGELOG.md for updates

### Q49: What's next after completing this course?

**A:** Advanced paths:

**1. Specialization**:
- Cloud architecture (AWS/Azure/GCP certifications)
- Data engineering (big data systems)
- ML infrastructure (MLOps)
- Security architecture

**2. Leadership**:
- Technical lead roles
- Engineering manager
- Solutions architect
- CTO track

**3. Continuous Learning**:
- Read system design blogs (High Scalability, Uber Engineering)
- Attend conferences (QCon, Strange Loop)
- Study open-source architectures
- Publish your own designs

### Q50: How can I stay updated with system design trends?

**A:** Follow these resources:

**Blogs**:
- Netflix Tech Blog
- Uber Engineering
- Airbnb Engineering
- LinkedIn Engineering
- AWS Architecture Blog

**Books**:
- "Designing Data-Intensive Applications"
- "System Design Interview" (Volumes 1 & 2)
- "Building Microservices"
- "The Phoenix Project"

**Podcasts**:
- Software Engineering Daily
- AWS Podcast
- Kubernetes Podcast

**Twitter**: Follow CTOs and architects from major tech companies

---

## 📬 Still Have Questions?

Can't find your answer? Try:

1. **Search this FAQ** (Ctrl+F)
2. **Check course documentation**
3. **Browse closed GitHub issues**
4. **Ask in Discord community**
5. **Create new GitHub issue**

---

**Remember**: Every expert was once a beginner. Keep learning, keep building, keep asking questions!

**Happy Learning! 🚀**

---

**Last Updated**: October 29, 2025  
**Version**: 2.0  
**Questions Answered**: 50+ topics