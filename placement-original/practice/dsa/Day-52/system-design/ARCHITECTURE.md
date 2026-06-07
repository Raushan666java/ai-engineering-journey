# Day 52 System Design: Task Management System

## Overview
This document explains the architecture for a production-ready Task Management System derived from `TaskManagementSystem.java`.

Goals:
- Scalability and reliability for multi-tenant usage
- Secure authentication and role-based authorization
- Observability (metrics, logs, tracing)
- Maintainable, testable codebase

## High-level Components
- API Gateway / Load Balancer (NGINX / ALB)
- Backend: Java Spring Boot stateless services
  - Auth Service (JWT, OAuth provider integration)
  - Task Service (business logic)
  - Project Service (project lifecycle)
  - User Service (profiles)
- Database: PostgreSQL primary with read replicas
- Cache: Redis for session & frequently accessed data
- Message Broker: RabbitMQ / Kafka for background tasks & events
- Storage: S3-compatible object storage for attachments
- Observability: Prometheus + Grafana, ELK (Elasticsearch / Logstash / Kibana)

## Data Model (ERD summary)
- Users (id, username, email, passwordHash, role)
- Projects (id, name, description, ownerId)
- Tasks (id, title, description, projectId, assignedTo, priority, status, dueDate)
- Comments (id, taskId, userId, content)

## Sequence: Create Task & Notify Assignee
1. Client -> POST /api/tasks (create task)
2. Task Service validates and stores task in DB
3. Task Service emits `task.created` event to message broker
4. Notification Service subscribes to `task.created`, looks up assignee, sends email/push
5. Notification status logged and metrics emitted

## Scaling Considerations
- Horizontal scaling of stateless API servers behind a load balancer
- Database: partitioning and read replicas for reads; use connection pooling
- Cache heavy reads (task lists, project summary) in Redis
- Use pagination and limit default page sizes

## Consistency & Concurrency
- Use optimistic locking for updates where necessary (version column)
- Use transactions for multi-step operations (task creation + audit log)
- Background async processing for non-blocking operations (notifications, analytics)

## Reliability & Fault Tolerance
- Retry & exponential backoff for external calls
- Circuit breaker pattern for external services
- Dead-letter queue for failed messages

## Security
- OAuth2 / JWT for authentication
- Role-based access control at service layer
- Input validation and output encoding
- Secrets management via Vault / cloud Secrets Manager

## Observability
- Metrics (Prometheus): request latency, error rate, DB pool usage
- Logs (structured JSON) shipped to ELK
- Tracing (OpenTelemetry) for distributed tracing across services

## Deployment & CI/CD
- Build artifacts via Maven, containerize with Docker
- Use GitHub Actions or Jenkins for build/test/publish pipelines
- Canary or Blue-Green deployment strategies for production

## Capacity Planning (example)
- For 10k daily active users: 3-5 API instances, 1 primary DB + 2 read replicas
- For 100k daily active users: sharding strategy, partitioned DBs, more aggressive caching

## Monitoring Alerts (examples)
- Error rate > 1% over 5 minutes
- Request latency p95 > 1s
- DB connection pool usage > 80%

## Notes for Interview Discussion
- Explain trade-offs: caching improves latency but adds invalidation complexity
- Discuss consistency vs availability trade-offs (CAP theorem)
- Be ready to sketch sequence diagrams, component interactions, and scaling options

---
*Author: Placement Preparation*
