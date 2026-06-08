# DAY 23: CLOUD ARCHITECTURE QUICK REFERENCE GUIDE

## 1. SERVICE MODEL COMPARISON

```
┌─────────────────┬────────────────┬────────────────┬────────────────┐
│ Layer           │ IaaS           │ PaaS           │ SaaS           │
├─────────────────┼────────────────┼────────────────┼────────────────┤
│ Application     │ You manage     │ You manage     │ Managed        │
│ Data            │ You manage     │ You manage     │ Managed        │
│ Runtime         │ You manage     │ Managed        │ Managed        │
│ Middleware      │ You manage     │ Managed        │ Managed        │
│ OS              │ You manage     │ Managed        │ Managed        │
│ Infrastructure  │ Managed        │ Managed        │ Managed        │
├─────────────────┼────────────────┼────────────────┼────────────────┤
│ Examples        │ EC2, Azure VM  │ Heroku, App Se │ Salesforce     │
│ Control         │ High           │ Medium         │ Low            │
│ Flexibility     │ High           │ Medium         │ Low            │
│ Cost            │ Medium-High    │ Medium         │ Low-Medium     │
└─────────────────┴────────────────┴────────────────┴────────────────┘
```

## 2. AWS SERVICES CHEAT SHEET

### Compute
| Service | Use Case | Cost | Scaling |
|---------|----------|------|---------|
| EC2 | General VMs | $0.10-0.50/hr | Manual or ASG |
| Lambda | Event-driven | $0.0000002/req | Automatic |
| Fargate | Containers | Pay per vCPU-hr | Automatic |
| Batch | Batch jobs | On-demand | Automatic |

### Storage
| Service | Type | Cost | Replication |
|---------|------|------|-------------|
| S3 Standard | Object | $0.023/GB/mo | Regional |
| S3 Glacier | Archive | $0.004/GB/mo | Regional |
| EBS gp3 | Block | $0.08/GB/mo | AZ-local |
| EFS | Filesystem | $0.30/GB/mo | Multi-AZ |

### Database
| Service | Type | HA | Cost |
|---------|------|-----|------|
| RDS Multi-AZ | SQL | 99.95% | $200-5000/mo |
| DynamoDB On-Demand | NoSQL | 99.99% | $1.25/million req |
| Aurora Serverless | SQL | 99.99% | $0.30/ACU/hr |
| ElastiCache Redis | Cache | 99.99% | $0.25/hr |

### Messaging
| Service | Type | Throughput | Latency |
|---------|------|-----------|---------|
| SNS | Pub-Sub | 1M msg/sec | <100ms |
| SQS Std | Queue | 1M msg/sec | <100ms |
| SQS FIFO | Queue | 3000 msg/sec | <100ms |
| Kinesis | Stream | 1Mbps | <1sec |

## 3. GCP SERVICES QUICK REFERENCE

| Service | AWS Equivalent | Key Feature |
|---------|-----------------|------------|
| Compute Engine | EC2 | Sustained use discounts |
| Cloud Storage | S3 | Multi-region replication |
| Firestore | DynamoDB | Real-time sync |
| Cloud Pub/Sub | SNS/SQS | Exactly-once delivery |
| Cloud Functions | Lambda | Python, Node, Go native |
| GKE | EKS | Seamless K8s integration |
| BigQuery | Athena | Petabyte-scale analytics |

## 4. AZURE SERVICES QUICK REFERENCE

| Service | AWS Equivalent | Key Feature |
|---------|-----------------|------------|
| VM | EC2 | Flexible sizing |
| Blob Storage | S3 | Hot/Cool/Archive tiers |
| Cosmos DB | DynamoDB | Multi-master replication |
| Service Bus | SQS/SNS | Enterprise messaging |
| Event Hubs | Kinesis | 1M events/sec |
| Azure Functions | Lambda | Durable workflows |
| App Service | Elastic Beanstalk | Multi-language support |

## 5. KUBERNETES COMMANDS CHEAT SHEET

```bash
# Pod Operations
kubectl run nginx --image=nginx
kubectl get pods
kubectl describe pod nginx
kubectl logs pod-name
kubectl exec -it pod-name /bin/bash
kubectl delete pod pod-name

# Deployment Operations
kubectl create deployment nginx --image=nginx --replicas=3
kubectl scale deployment nginx --replicas=5
kubectl set image deployment/nginx nginx=nginx:1.19
kubectl rollout history deployment/nginx
kubectl rollout undo deployment/nginx

# Service Operations
kubectl expose deployment nginx --type=LoadBalancer --port=80
kubectl get svc
kubectl port-forward svc/nginx 8080:80

# ConfigMap & Secrets
kubectl create configmap app-config --from-literal=key=value
kubectl create secret generic db-secret --from-literal=password=secret

# HPA
kubectl autoscale deployment nginx --min=2 --max=10 --cpu-percent=70

# Debugging
kubectl describe node
kubectl top nodes
kubectl top pods
kubectl get events
```

## 6. PERFORMANCE TUNING CHECKLIST

### Application Level
- [ ] Enable caching (CloudFront, Redis, memcached)
- [ ] Implement connection pooling
- [ ] Use CDN for static assets
- [ ] Minify CSS/JS, enable gzip
- [ ] Lazy load images
- [ ] Async/await for I/O operations

### Database Level
- [ ] Add indexes on frequently queried columns
- [ ] Query optimization (EXPLAIN PLAN)
- [ ] Read replicas for read-heavy workloads
- [ ] Connection pooling
- [ ] Denormalization for complex queries
- [ ] Partition large tables

### Infrastructure Level
- [ ] Auto-scaling policies configured
- [ ] Multiple AZ deployment (HA)
- [ ] CDN enabled
- [ ] Load balancing configured
- [ ] Rate limiting enabled
- [ ] DDoS protection enabled

### Monitoring
- [ ] CloudWatch alarms set (>80% CPU, >1% errors)
- [ ] Distributed tracing enabled (X-Ray, Jaeger)
- [ ] Log aggregation configured
- [ ] SLOs defined and tracked
- [ ] On-call alerting configured

## 7. SECURITY CHECKLIST

### Network Security
- [ ] VPC configured with public/private subnets
- [ ] Security groups defined (principle of least privilege)
- [ ] NACLs configured
- [ ] VPN/Bastion host for private resource access
- [ ] DDoS protection enabled

### Identity & Access
- [ ] IAM roles (no long-lived credentials)
- [ ] MFA enabled for all users
- [ ] Temporary credentials (STS, OAuth)
- [ ] Service accounts with minimal permissions
- [ ] Regular access reviews

### Data Protection
- [ ] Encryption in transit (TLS 1.2+)
- [ ] Encryption at rest (KMS)
- [ ] Secrets in managed vault
- [ ] Backups encrypted
- [ ] Database encryption enabled

### Compliance
- [ ] CloudTrail enabled
- [ ] VPC Flow Logs enabled
- [ ] Application logging centralized
- [ ] Regular security audits
- [ ] Penetration testing performed

## 8. COST OPTIMIZATION CHECKLIST

### Reserved Capacity
- [ ] Analyze 3-month usage
- [ ] Purchase reserved instances (30-50% savings)
- [ ] Use commitment plans (Compute Engine, BigQuery)
- [ ] Consider 3-year terms for predictable workloads

### Spot/Preemptible Instances
- [ ] Identify batch/disposable workloads
- [ ] Use Spot Instances (60-90% savings)
- [ ] Combine Spot + On-Demand (fallback)
- [ ] Auto Scaling Group with mixed instances

### Storage Optimization
- [ ] Delete unused volumes
- [ ] Lifecycle policies (Standard → IA → Glacier)
- [ ] Enable versioning on S3 (manage history)
- [ ] Delete old snapshots
- [ ] Compress data (GZIP, Snappy)

### Database
- [ ] Right-size instances
- [ ] Use read replicas (distribute reads)
- [ ] Connection pooling enabled
- [ ] Query optimization (EXPLAIN PLAN)
- [ ] Remove unused databases

### Monitoring & Tools
- [ ] AWS Cost Explorer configured
- [ ] CloudHealth/Datadog for multi-cloud
- [ ] Budgets and forecasts set
- [ ] Monthly cost reviews
- [ ] Tagging for cost allocation

## 9. DISASTER RECOVERY STRATEGIES

| Strategy | RTO | RPO | Cost | Use Case |
|----------|-----|-----|------|----------|
| Backup & Restore | Hours | Hours | $$ | Non-critical systems |
| Pilot Light | 10-30 min | 5-10 min | $$$ | Standard systems |
| Warm Standby | 1-5 min | 1-5 min | $$$$ | Important systems |
| Multi-Region Active | Seconds | Seconds | $$$$$ | Mission-critical |

### Implementation for Each

**Backup & Restore**
- Daily snapshots to cold storage
- Restore requires manual intervention
- Test restores quarterly

**Pilot Light**
- Standby infrastructure ready but idle
- RDS read replica that can be promoted
- Automated failover

**Warm Standby**
- Standby region actively processing
- Async replication from primary
- Automatic DNS failover

**Multi-Region Active**
- Both regions processing traffic
- Synchronous replication
- Instant failover

## 10. INTERVIEW QUESTION CATEGORIES

### Fundamentals (20 Questions)
- [ ] Cloud service models
- [ ] CAP theorem
- [ ] Availability vs durability
- [ ] Cost models
- [ ] Scaling strategies

### AWS Deep Dive (25 Questions)
- [ ] EC2 instance types and pricing
- [ ] RDS high availability
- [ ] DynamoDB capacity modes
- [ ] Lambda cold starts
- [ ] CloudFormation templates

### GCP/Azure (15 Questions)
- [ ] Service equivalents to AWS
- [ ] Multi-cloud strategy
- [ ] Region selection
- [ ] Cost comparison

### Architecture Design (20 Questions)
- [ ] High availability systems
- [ ] Microservices
- [ ] Event-driven architecture
- [ ] Multi-region deployment
- [ ] Disaster recovery

### Practical (20 Questions)
- [ ] E-commerce platform design
- [ ] Mobile app backend
- [ ] Real-time analytics
- [ ] IoT data pipeline
- [ ] Cost optimization exercise

## 11. COMMON MISTAKES TO AVOID

### Design
- ❌ Single point of failure (no redundancy)
- ❌ No caching layer
- ❌ Synchronous all the way (use async)
- ❌ No monitoring/observability
- ❌ Security as afterthought

### Implementation
- ❌ Hardcoded credentials
- ❌ Manual deployment processes
- ❌ No automated testing
- ❌ Insufficient error handling
- ❌ Over-engineering for scale

### Operations
- ❌ No backup/recovery testing
- ❌ Poor monitoring thresholds
- ❌ Unused resources left running
- ❌ No capacity planning
- ❌ Inadequate logging

## 12. SYSTEM DESIGN TEMPLATE

### Requirements
- Functional: Features, use cases
- Non-functional: Scale (users, requests/sec), availability, latency

### High-Level Design
```
┌─────────────┐
│   Users     │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│ Load Balance│ ← Route53/Azure Traffic Manager/GCP LB
└──────┬──────┘
       │
       ├─→ Service 1 ─→ Cache ─→ Database
       │
       ├─→ Service 2 ─→ Queue ─→ Worker
       │
       └─→ Service 3 ─→ Storage

Monitoring: CloudWatch, Prometheus, Datadog
```

### Deep Dive
1. **Database**: Schema, replication, backup strategy
2. **Caching**: What to cache, TTL, invalidation
3. **Queuing**: Messages, retry, dead-letter
4. **API**: Authentication, rate limiting, versioning
5. **Security**: Encryption, firewall, audit logging

### Bottlenecks
- Read-heavy: Add read replicas, caching
- Write-heavy: Sharding, message queue
- Network: CDN, compression, batching
- Storage: Lifecycle policies, compression

### Cost
- Compute: Reserved instances, spot
- Storage: Lifecycle to cold storage
- Data transfer: Minimize cross-region
- Monitoring: Sample logging, metrics

## 13. SCALING PATTERNS

### Horizontal Scaling (add servers)
- Stateless services (web servers)
- Load balancing
- Database read replicas
- Sharding

### Vertical Scaling (bigger servers)
- Simpler (no multi-server complexity)
- Limited by hardware
- Downtime required
- Usually temporary solution

### Caching (reduce load)
- Query results (1hr TTL)
- Static content (forever, cache-bust)
- Session data (1 day)
- User preferences (1 week)

### Asynchronous Processing (defer load)
- Heavy computation → Queue → Worker
- Notifications → Event → Lambda
- Reporting → Streaming → Analytics

### Database Optimization
- Indexes (query optimization)
- Read replicas (distribute reads)
- Sharding (horizontal partition)
- Connection pooling (reduce overhead)

## 14. TROUBLESHOOTING FLOWCHART

```
Problem: System Slow
├─ Is it network related?
│  └─ Yes → Check DNS, CDN, latency
├─ Is it application related?
│  └─ Yes → Check logs, traces, profiling
├─ Is it database related?
│  ├─ Slow queries → EXPLAIN PLAN, indexes
│  ├─ High connections → Connection pooling
│  └─ Resource contention → Scale up/out
└─ Is it infrastructure related?
   ├─ CPU high → Scale up/out, optimize code
   ├─ Memory high → Memory leak, right-size
   ├─ Disk high → Clean up, lifecycle policies
   └─ Network high → Optimize serialization
```

## 15. DECISION MATRIX: CHOOSING CLOUD SERVICES

### When to Use Lambda vs ECS vs EC2

| Factor | Lambda | ECS/Fargate | EC2 |
|--------|--------|------------|-----|
| Execution Duration | <15 min | Any | Any |
| Baseline Load | Low | Medium | Any |
| Cost | Bursty | Medium | Predictable |
| Cold Start Impact | High | Low | None |
| State Management | No | Possible | Yes |
| Complexity | Low | Medium | High |

### When to Use RDS vs DynamoDB vs Elasticsearch

| Factor | RDS | DynamoDB | Elasticsearch |
|--------|-----|----------|---|
| Data Model | SQL | Key-value | Full-text search |
| Scaling | Vertical + read replicas | Horizontal | Horizontal |
| Queries | Complex joins | Simple lookups | Text search |
| ACID | Yes | No | No |
| Cost Scaling | Moderate | Linear | Moderate |
| Consistency | Strong | Eventual | Eventual |

---

**Last Updated**: Day 23 Complete
**Topics Covered**: 80+ cloud concepts
**Code Examples**: 50+ implementations
**Interview Questions**: 100+
**Practice Problems**: 40+
