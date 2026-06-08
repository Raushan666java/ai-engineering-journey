# 🏗️ **WEEK 1: FOUNDATIONS OF SYSTEM DESIGN**
## Complete Learning Materials & Exercises

---

## 📋 **WEEK OVERVIEW**
**Duration**: 12 Hours | **Difficulty**: Beginner  
**Learning Objectives**:
- Understand what system design is and when it matters
- Learn the design thinking process
- Master capacity estimation techniques
- Understand scalability, reliability, and availability
- Apply CAP theorem to real-world scenarios

---

## 📖 **DAY 1-2: INTRODUCTION & CORE PRINCIPLES**

### **1.1 What is System Design?**

#### **Definition**
System Design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.

#### **Why System Design Matters**
- **Scale**: Systems that handle millions of users
- **Complexity**: Multiple components working together
- **Team Size**: Large engineering teams
- **Business Impact**: Revenue-generating systems

#### **High-Level Design (HLD) vs Low-Level Design (LLD)**

**High-Level Design (HLD)**:
- Overall system architecture
- Major components and their interactions
- Technology stack decisions
- Data flow diagrams
- Deployment architecture

**Low-Level Design (LLD)**:
- Detailed component design
- Class diagrams
- Database schema design
- API specifications
- Algorithm implementations

#### **Real-World Examples**

**Netflix**:
- Handles 200M+ users
- Streams 1B+ hours daily
- Uses microservices architecture
- Global CDN deployment

**Amazon**:
- Processes millions of orders daily
- Complex recommendation system
- Multi-region deployment
- Event-driven architecture

**Twitter**:
- 500M+ tweets per day
- Real-time timeline generation
- Distributed database systems
- High availability requirements

---

### **1.2 Design Thinking Process**

#### **Understanding Requirements**

**Functional Requirements (What the system should do)**:
- User registration and authentication
- Product search and filtering
- Add to cart and checkout
- Order tracking
- Payment processing

**Non-Functional Requirements (How the system should perform)**:
- **Performance**: Response time < 200ms for 95% of requests
- **Scalability**: Handle 10x traffic increase without degradation
- **Reliability**: 99.9% uptime (8.76 hours downtime/year)
- **Availability**: System accessible when needed
- **Security**: Protect user data and prevent unauthorized access
- **Maintainability**: Easy to update and deploy
- **Usability**: Intuitive user interface

#### **Constraint Analysis**
- **Budget**: Cost limitations
- **Time**: Development timeline
- **Technology**: Existing tech stack
- **Team**: Available skills and resources
- **Legal**: Compliance requirements (GDPR, HIPAA)

#### **Trade-Off Evaluation**
Every design decision involves trade-offs:

| Decision | Pros | Cons | When to Choose |
|----------|------|------|---------------|
| **SQL Database** | ACID compliance, complex queries | Slower writes, scaling challenges | Strong consistency needed |
| **NoSQL Database** | Fast writes, horizontal scaling | Eventual consistency, complex joins | High write throughput |
| **Monolithic Architecture** | Simple deployment, development | Scaling challenges, technology lock-in | Small team, simple requirements |
| **Microservices** | Independent scaling, technology flexibility | Complex deployment, communication overhead | Large team, complex requirements |

---

### **1.3 Interview Approach Framework**

#### **RADIO Framework**
A structured approach to system design interviews:

**R - Requirements**: Clarify functional and non-functional requirements
**A - Architecture**: Design high-level system architecture
**D - Design**: Dive deep into component design
**I - Identify**: Identify bottlenecks and potential issues
**O - Optimize**: Optimize for performance, cost, and reliability

#### **Asking Right Questions**
Before jumping into design, ask clarifying questions:

**Traffic Questions**:
- How many daily active users (DAU)?
- What are peak hours?
- Expected growth rate?

**Data Questions**:
- What data needs to be stored?
- Data retention policies?
- Read vs write ratio?

**Performance Questions**:
- Response time requirements?
- Throughput requirements?
- Acceptable downtime?

**Business Questions**:
- Budget constraints?
- Geographic distribution?
- Compliance requirements?

#### **Time Management (45-60 min interview)**
- **5-10 min**: Requirements gathering and clarification
- **15-20 min**: High-level design and architecture
- **10-15 min**: Deep dive into 2-3 components
- **5-10 min**: Identify bottlenecks and optimizations
- **5 min**: Q&A and clarification

#### **Communication & Whiteboarding Skills**
- **Think out loud**: Explain your thought process
- **Draw clear diagrams**: Use boxes, arrows, labels
- **Use consistent notation**: Standard symbols for databases, servers, etc.
- **Explain trade-offs**: Discuss why you chose certain approaches
- **Be open to feedback**: Accept suggestions and iterate

#### **Common Mistakes to Avoid**
- **Jumping to solutions**: Without understanding requirements
- **Over-engineering**: Adding unnecessary complexity
- **Ignoring constraints**: Budget, time, team size
- **Poor communication**: Not explaining your thinking
- **No trade-off discussion**: Every decision has pros/cons

---

### **1.4 Understanding Scale**

#### **What is Scalability?**
Scalability is the ability of a system to handle increased load by adding resources to the system.

#### **Horizontal vs Vertical Scaling**

**Vertical Scaling (Scale Up)**:
- Add more power to existing server
- CPU, RAM, Storage upgrades
- **Pros**: Simple, no code changes
- **Cons**: Hardware limits, single point of failure, expensive
- **When to use**: Small applications, databases, quick fixes

**Horizontal Scaling (Scale Out)**:
- Add more servers to distribute load
- Load balancers distribute traffic
- **Pros**: No hardware limits, fault tolerant, cost-effective
- **Cons**: Complex, code changes needed, data consistency challenges
- **When to use**: Web applications, microservices, high-traffic systems

#### **Real-World Examples**

**Vertical Scaling**:
- Database servers (PostgreSQL, MySQL)
- Application servers with high memory requirements
- Legacy systems with monolithic architecture

**Horizontal Scaling**:
- Web servers (Nginx, Apache)
- Microservices (Netflix, Uber)
- Big data processing (Hadoop, Spark)

#### **Metrics: QPS, Latency, Throughput, Availability**

**QPS (Queries Per Second)**:
- Number of requests processed per second
- Example: 1000 QPS = 86,400,000 requests/day

**Latency**:
- Time taken to process a request
- Measured in milliseconds (ms) or microseconds (μs)
- Target: <200ms for web applications

**Throughput**:
- Amount of data processed per unit time
- Measured in requests/second, MB/s, etc.

**Availability**:
- Percentage of time system is operational
- 99.9% = 8.76 hours downtime/year
- 99.99% = 52.56 minutes downtime/year
- 99.999% = 5.26 minutes downtime/year

#### **Capacity Estimation & Back-of-Envelope Calculations**

**Daily Active Users (DAU)**:
- Total registered users × daily engagement rate
- Example: 100M users × 20% = 20M DAU

**Storage Requirements**:
- Data per user × number of users
- Growth factor (20-50% annual growth)
- Example: 1KB/user × 100M users = 100GB

**Bandwidth Calculations**:
- Average request size × requests per second
- Example: 10KB/request × 1000 QPS = 10MB/s = 864GB/day

**Memory/Cache Requirements**:
- Working set size × cache hit ratio
- Example: 10GB data × 80% cacheable = 8GB cache

---

### **1.5 Reliability, Availability & Fault Tolerance**

#### **Reliability**
- **Definition**: Probability that system will perform its required functions under stated conditions for a specified period
- **MTBF (Mean Time Between Failures)**: Average time between failures
- **MTTR (Mean Time To Repair)**: Average time to fix failures

#### **Availability**
- **Formula**: Availability = (Total Time - Downtime) / Total Time × 100%
- **The Nines**:

| Availability % | Downtime per Year | Downtime per Month | Downtime per Week |
|----------------|-------------------|-------------------|-------------------|
| 99% | 3.65 days | 7.31 hours | 1.68 hours |
| 99.9% | 8.76 hours | 43.8 minutes | 10.1 minutes |
| 99.99% | 52.56 minutes | 4.38 minutes | 1.01 minutes |
| 99.999% | 5.26 minutes | 26.3 seconds | 6.05 seconds |

#### **Fault Tolerance**
- **Definition**: Ability to continue operating despite failures
- **Types of Faults**:
  - Hardware faults (disk crashes, network failures)
  - Software faults (bugs, configuration errors)
  - Human faults (operator mistakes)

#### **Redundancy Strategies**
- **Hardware Redundancy**: Multiple servers, disks, power supplies
- **Software Redundancy**: Multiple instances, failover systems
- **Data Redundancy**: Replication, backups, RAID

#### **Single Point of Failure (SPOF) Elimination**
- Identify components with no backup
- Add redundancy to critical components
- Implement failover mechanisms
- Use circuit breakers and bulkheads

#### **Disaster Recovery & Backup Strategies**
- **RTO (Recovery Time Objective)**: Maximum acceptable downtime
- **RPO (Recovery Point Objective)**: Maximum acceptable data loss
- **Backup Types**:
  - Full backup: Complete system backup
  - Incremental backup: Only changed data
  - Differential backup: All changes since last full backup
- **DR Strategies**:
  - Cold standby: Manual failover
  - Warm standby: Automated failover, partial resources
  - Hot standby: Full replication, instant failover

---

### **1.6 CAP Theorem**

#### **The CAP Theorem**
In a distributed system, you can only guarantee **two out of three** properties:

- **Consistency**: All nodes see the same data at the same time
- **Availability**: System remains operational despite failures
- **Partition Tolerance**: System continues to operate despite network partitions

#### **CAP Combinations**

**CP (Consistency + Partition Tolerance)**:
- Sacrifices availability during partitions
- Examples: MongoDB, Redis, HBase
- Use case: Banking systems, financial data

**AP (Availability + Partition Tolerance)**:
- Sacrifices consistency during partitions
- Examples: Cassandra, DynamoDB, CouchDB
- Use case: Social media, e-commerce catalogs

**CA (Consistency + Availability)**:
- No partition tolerance (single data center)
- Examples: Traditional RDBMS
- Use case: Single-location applications

#### **Real-World Trade-offs**

**Banking System (CP)**:
- Account balance must be consistent across all branches
- During network issues, system may become unavailable
- Better to show error than wrong balance

**Social Media Feed (AP)**:
- Feed can be slightly stale during partitions
- System must remain available for user engagement
- Eventual consistency is acceptable

---

## 🧪 **HANDS-ON EXERCISES**

### **Exercise 1: Requirements Analysis**
**Task**: Write functional and non-functional requirements for a food delivery app

**Functional Requirements**:
- User registration and login
- Restaurant search and menu browsing
- Order placement and payment
- Real-time order tracking
- Delivery partner assignment

**Non-Functional Requirements**:
- Performance: Order placement < 3 seconds
- Scalability: Handle 10x traffic during peak hours
- Availability: 99.9% uptime
- Security: PCI DSS compliance for payments

### **Exercise 2: Capacity Estimation**
**Scenario**: Design a video streaming service like YouTube

**Given**:
- 1 billion daily active users
- Average 30 minutes watch time per user
- 70% of videos are 1080p (5 Mbps), 30% are 4K (20 Mbps)
- 20% of traffic during peak hours

**Calculate**:
1. Daily watch hours
2. Peak concurrent users
3. Bandwidth requirements
4. Storage requirements (assume 100 hours new content daily)

**Solution**:
1. Daily watch hours: 1B users × 0.5 hours = 500M hours
2. Peak concurrent users: 1B × 20% × 20% = 40M concurrent users
3. Bandwidth: 40M users × average 8 Mbps = 320 Tbps
4. Storage: 100 hours × 10 GB/hour (average) = 1 PB daily

### **Exercise 3: Trade-off Analysis**
**Scenario**: Choose database for an e-commerce product catalog

**Requirements**:
- 10M products
- 100K reads/second, 10K writes/second
- Complex search and filtering
- Strong consistency for inventory
- Global distribution

**Options**:
1. PostgreSQL (SQL)
2. MongoDB (Document DB)
3. Cassandra (Wide-column)

**Analysis**:
- PostgreSQL: Strong consistency, complex queries, but scaling challenges
- MongoDB: Flexible schema, good for product data, horizontal scaling
- Cassandra: High write throughput, global distribution, eventual consistency

**Recommendation**: MongoDB for flexibility and scaling, with careful consistency management

---

## 📝 **QUIZ: WEEK 1 FOUNDATIONS**

### **Multiple Choice Questions**

1. **What does HLD stand for?**
   - A) High-Level Design
   - B) Hardware Logic Diagram
   - C) Hypertext Link Directory
   - D) High-Load Database

2. **Which of the following is NOT a non-functional requirement?**
   - A) Performance
   - B) Scalability
   - C) User registration
   - D) Security

3. **What is the availability percentage for 5.26 minutes of downtime per year?**
   - A) 99%
   - B) 99.9%
   - C) 99.99%
   - D) 99.999%

4. **According to CAP theorem, which combination is NOT possible?**
   - A) CA (Consistency + Availability)
   - B) CP (Consistency + Partition Tolerance)
   - C) AP (Availability + Partition Tolerance)
   - D) CAP (all three simultaneously)

5. **Which scaling approach adds more servers to distribute load?**
   - A) Vertical scaling
   - B) Horizontal scaling
   - C) Diagonal scaling
   - D) Circular scaling

### **Short Answer Questions**

1. **Explain the difference between vertical and horizontal scaling with examples.**

2. **What are the three properties of the CAP theorem? Explain each briefly.**

3. **Calculate the storage requirements for a social media platform with:**
   - 100M users
   - Average 10 photos per user
   - Average photo size: 2MB
   - 3-year retention policy

4. **List 5 questions you would ask in a system design interview before starting the design.**

---

## 🎯 **WEEK 1 PROJECT**

### **Mini Project: Design a Library Management System**

**Requirements**:
- 10,000 books, 5,000 active users
- Book search, borrowing, returning
- Due date tracking and fines
- Librarian admin panel

**Deliverables**:
1. Functional requirements document
2. Non-functional requirements
3. High-level architecture diagram
4. Database schema (3-5 tables)
5. API endpoints (5-7 endpoints)
6. Capacity estimation
7. Potential bottlenecks and solutions

**Time**: 4-6 hours

---

## 📚 **ADDITIONAL RESOURCES**

### **Reading Materials**
1. [System Design Primer - Foundations](https://github.com/donnemartin/system-design-primer)
2. [Designing Data-Intensive Applications - Chapter 1](https://dataintensive.net/)
3. [Scalability Rules](https://www.amazon.com/Scalability-Rules-50-Principles-Scaling/dp/0321753887)

### **Video Lectures**
1. [System Design Interview Basics - Gaurav Sen](https://www.youtube.com/watch?v=3LH7QTP7Z0E)
2. [Scalability & System Design - Tech Dummies](https://www.youtube.com/watch?v=-W9F__D3oY4)
3. [CAP Theorem Explained](https://www.youtube.com/watch?v=IpBgFBNze5U)

### **Practice Platforms**
1. [LeetCode System Design Questions](https://leetcode.com/problemset/system-design/)
2. [System Design Interview Questions](https://github.com/checkcheckzz/system-design-interview)

---

## ✅ **WEEK 1 CHECKLIST**

- [ ] Read all theory materials
- [ ] Complete hands-on exercises
- [ ] Solve capacity estimation problems
- [ ] Take the quiz (aim for 80%+)
- [ ] Complete mini project
- [ ] Review additional resources
- [ ] Discuss concepts with peers/study group

**Next Week**: Core Building Blocks (Databases, Caching, Load Balancing)

---

*Week 1 Complete! 🎉 You've mastered the foundations of system design. Ready for databases and caching next week?*