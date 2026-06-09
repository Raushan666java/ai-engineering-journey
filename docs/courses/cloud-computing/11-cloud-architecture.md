# Chapter 11: Cloud Architecture Patterns

## Learning Objectives

After completing this chapter, students will be able to:

1. Apply the AWS Well-Architected Framework pillars to cloud architectures.
2. Design architectures using the Azure and Google Cloud architecture frameworks.
3. Implement the strangler fig pattern for legacy application migration.
4. Apply the anti-corruption layer pattern for service integration.
5. Configure the sidecar and ambassador patterns for microservices.
6. Implement the circuit breaker and bulkhead patterns for resilience.
7. Design health endpoint monitoring and leader election for distributed systems.

## Theory

### 11.1 AWS Well-Architected Framework

The AWS Well-Architected Framework provides a consistent approach for evaluating cloud architectures and implementing designs that are secure, high-performing, resilient, and efficient. The Framework consists of six pillars, design principles, and a review process.

**Operational Excellence.** The ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures. Design principles: perform operations as code (infrastructure as code), make frequent, small, reversible changes, refine operations procedures frequently, anticipate failure, and learn from all operational failures. Key services: CloudFormation, Config, CloudTrail, CloudWatch, Systems Manager.

**Security.** The ability to protect data, systems, and assets while delivering business value through risk assessments and mitigation strategies. Design principles: implement a strong identity foundation, enable traceability, apply security at all layers, automate security best practices, protect data in transit and at rest, keep people away from data, and prepare for security events. Key services: IAM, KMS, GuardDuty, Security Hub, WAF, Shield, Inspector.

**Reliability.** The ability of a system to recover from service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues. Design principles: test recovery procedures, automatically recover from failure, scale horizontally to increase aggregate system availability, stop guessing capacity, and manage change through automation. Key services: RDS Multi-AZ, Route 53, Auto Scaling, DynamoDB, S3.

**Performance Efficiency.** The ability to use computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve. Design principles: democratize advanced technologies, go global in minutes, use serverless architectures, experiment more often, and consider mechanical sympathy. Key services: EC2 with right-sizing, CloudFront, ElastiCache, DynamoDB DAX.

**Cost Optimization.** The ability to run systems to deliver business value at the lowest price point. Design principles: adopt a consumption model, measure overall efficiency, stop spending money on undifferentiated heavy lifting, and analyze and attribute expenditure. Key services: Cost Explorer, Savings Plans, Reserved Instances, Spot Instances, Budgets.

**Sustainability.** The ability to minimize the environmental impact of cloud workloads (added in 2021). Design principles: understand your impact, establish sustainability goals, maximize utilization, adopt new efficient hardware and software, and reduce downstream impact. Key services: AWS Customer Carbon Footprint Tool.

**Well-Architected Review Process.** The review uses the Well-Architected Tool (AWS WA Tool) to document architectural decisions, identify risks, and track improvements. The review process includes: select a workload, review each pillar, identify high-risk issues (HRIs), create improvement plan, and track progress.

### 11.2 Azure Well-Architected Framework

Microsoft's framework includes five pillars (similar to AWS with slight naming differences): Reliability (same principles), Security (same principles), Cost Optimization (same), Operational Excellence (same), and Performance Efficiency (same). Azure adds improvement with the Azure Well-Architected Review assessment, Azure Advisor recommendations, and Azure Resource Graph for resource visibility. Azure also emphasizes the Microsoft Cloud Adoption Framework for Azure, which provides guidance for cloud adoption strategy, planning, readiness, migration, and governance.

### 11.3 Google Cloud Architecture Framework

Google's framework includes six pillars: System Design (reliability, scalability, performance), Operational Excellence (automation, monitoring, incident management), Security, Privacy and Compliance (data governance, access control, compliance), Reliability (the same), Cost Optimization (right-sizing, committed use), and Performance Optimization (latency, throughput, resource utilization). Google emphasizes the Google Cloud Adoption Framework for migration journey phases (assess, pilot, expand, and scale).

### 11.4 Cell-Based Architecture

Cell-based architecture (also called shard-based architecture) partitions a system into isolated cells, each capable of operating independently. Each cell contains a complete vertical slice of the application stack and serves a subset of users or traffic. If one cell fails, only its users are affected.

**Key Concepts.** Cell isolation: failures in one cell do not propagate. Limited blast radius: the impact of any failure is contained to the cell's users. Independent deployment: cells can be updated independently. Cell routing: a routing tier directs users to specific cells based on cell assignment (user ID hash, region, tenant).

**Implementation.** Cells align with AWS services such as: Route 53 for cell routing, VPC per cell for network isolation, Auto Scaling groups and RDS per cell for complete isolation. Cell-based architecture is used by large-scale systems like Amazon (every service is cell-based), Netflix, and Uber.

### 11.5 Strangler Fig Pattern

The strangler fig pattern incrementally replaces a monolithic application with microservices by gradually migrating specific functionality. The name derives from the strangler fig tree that grows around an existing tree, eventually replacing it entirely.

**Execution.** A facade/interceptor captures requests to the monolith and determines whether each request should be routed to the legacy system or the new service. Functionality is migrated piece by piece. Once all functionality is migrated, the monolith is decommissioned. This pattern enables continuous migration without requiring a risky "big bang" rewrite.

**Implementation considerations.** The routing layer must handle request transformation between legacy and new systems. Data synchronization between legacy and new databases is often the most challenging aspect. Transactional integrity across old and new systems requires careful design.

### 11.6 Anti-Corruption Layer

The anti-corruption layer pattern translates between different domain models or service interfaces, preventing changes in one system from requiring changes in another. This is essential when integrating new microservices with legacy systems that have incompatible data models or protocols.

**Implementation.** A translation layer sits between two systems, converting data formats, protocol semantics, and domain concepts. The ACL protects the new system from the legacy system's complexity while allowing the legacy system to continue operating without modification. The ACL can be implemented as a service, a library, or a set of functions.

### 11.7 Sidecar Pattern

The sidecar pattern deploys a helper container alongside a primary application container within the same compute unit (pod, task). The sidecar handles cross-cutting concerns such as logging, monitoring, configuration, networking, and service mesh functionality.

**Use cases.** Service mesh proxies (Envoy, Linkerd) run as sidecars intercepting all network traffic. Logging agents collect and forward application logs. Configuration watchers reload configuration changes. TLS termination is managed by the sidecar. Health check endpoints are exposed by the sidecar.

**Implementation.** In Kubernetes, a pod contains the application container and one or more sidecar containers sharing the same network namespace and volume mounts. In ECS, sidecars run as additional containers in the same task definition.

### 11.8 Ambassador Pattern

The ambassador pattern deploys a proxy container that handles outbound communication from an application container. The ambassador encapsulates external communication logic, providing features such as circuit breaking, retries, authentication, and load balancing.

**Difference from Sidecar.** The sidecar handles inbound and cross-cutting concerns. The ambassador specifically handles outbound requests to external services. In practice, service mesh proxies like Envoy can serve both roles simultaneously.

### 11.9 Circuit Breaker Pattern

The circuit breaker pattern prevents cascading failures by detecting service failures and preventing calls to a failing service. Like an electrical circuit breaker, the pattern has three states: closed (normal operation, calls pass through), open (failure threshold exceeded, calls fail immediately), and half-open (testing if the service has recovered).

**Implementation.** A circuit breaker monitors recent call failures. When the failure rate exceeds a threshold, the circuit opens and subsequent calls fail immediately without attempting the call. After a timeout period, the circuit transitions to half-open, allowing a limited number of trial calls. If successful, the circuit closes; if not, it reopens. This pattern is critical in microservices architectures where a single service failure can cascade through the system.

**Libraries.** Resilience4j (Java), Polly (.NET), Hystrix (Netflix, archived), and istio (service mesh level circuit breaking).

### 11.10 Bulkhead Pattern

The bulkhead pattern isolates system components into pools of limited resources so that failure in one pool does not consume resources from other pools. Named after ship hull divisions that prevent flooding from spreading, the bulkhead pattern limits the blast radius of failures.

**Implementation Strategies.** Thread pool isolation: each service or function has a dedicated thread pool. Connection pool isolation: database connection pools are separated by service or tenant. Queue isolation: each service has a dedicated message queue. Cell-based architecture is an extreme application of bulkheads.

### 11.11 Health Endpoint Monitoring

Health endpoint monitoring exposes health check endpoints that indicate if an application component is functioning correctly. Health checks verify: the application is running, dependencies (databases, queues, external services) are accessible, and the application can process requests.

**Types of Health Checks.** Basic health checks verify process liveness. Readiness checks verify dependency health (database reachable, cache connected). Custom checks verify domain-specific conditions (sufficient capacity, valid SSL certificates, recent data processing).

**Implementation.** Health endpoints typically return HTTP 200 OK when healthy and HTTP 503 Service Unavailable when unhealthy. JSON responses include component-level status (UP, DOWN, DEGRADED). AWS ELB health checks, Kubernetes liveness and readiness probes, and Route 53 health checks consume these endpoints.

### 11.12 Leader Election

Leader election ensures that only one instance of a distributed system component acts as the leader at any time, coordinating tasks that should not be performed by multiple instances simultaneously. Common use cases include: scheduled job coordination, cache warming, centralized configuration management, and primary database selection.

**Implementation Approaches.** Lock-based election uses a distributed lock (DynamoDB with conditional writes, ZooKeeper, etcd, Redis SETNX). Lease-based election acquires a lease with a time-to-live, requiring renewal. The leader periodically renews its lease; if it fails, another instance acquires the lease. Consensus algorithms (Raft, Paxos) are used for more complex leader election scenarios.

**AWS Implementation.** DynamoDB with conditional writes (put item if attribute_not_exists), ElastiCache Redis with Redlock algorithm, and AWS Lambda (single concurrent invocation) handle simple leader election scenarios.

## Examples

### Example 11.1: Circuit Breaker Configuration with Resilience4j

```java
CircuitBreakerConfig config = CircuitBreakerConfig.custom()
  .failureRateThreshold(50)       // Open circuit at 50% failures
  .waitDurationInOpenState(Duration.ofMillis(10000))  // Wait 10s before half-open
  .slidingWindowSize(10)         // Evaluate last 10 calls
  .minimumNumberOfCalls(5)       // Minimum calls before evaluating
  .permittedNumberOfCallsInHalfOpenState(3)  // 3 test calls in half-open
  .build();

CircuitBreaker circuitBreaker = CircuitBreaker.of("paymentService", config);
```

### Example 11.2: Health Check Endpoint (Python Flask)

```python
from flask import Flask, jsonify
import redis, psycopg2

app = Flask(__name__)

@app.route('/health')
def health():
    health_status = {'status': 'UP', 'components': {}}
    
    try:
        conn = psycopg2.connect(host='dbhost', dbname='mydb')
        conn.close()
        health_status['components']['database'] = 'UP'
    except Exception:
        health_status['components']['database'] = 'DOWN'
        health_status['status'] = 'DEGRADED'
    
    try:
        r = redis.Redis(host='redishost')
        r.ping()
        health_status['components']['cache'] = 'UP'
    except Exception:
        health_status['components']['v'] = 'DOWN'
        health_status['status'] = 'DEGRADED'
    
    http_code = 200 if health_status['status'] == 'UP' else 503
    return jsonify(health_status), http_code
```

### Example 11.3: DynamoDB Leader Election

```python
import boto3, time, uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('LeaderElection')
instance_id = str(uuid.uuid4())
lease_duration = 30  # seconds

def try_acquire_lease():
    try:
        table.put_item(
            Item={
                'task': 'scheduled-job',
                'leader': instance_id,
                'expires': int(time.time()) + lease_duration
            },
            ConditionExpression='attribute_not_exists(task) OR expires < :now',
            ExpressionAttributeValues={':now': int(time.time())}
        )
        return True
    except Exception:
        return False

def renew_lease():
    table.update_item(
        Key={'task': 'scheduled-job'},
        UpdateExpression='SET expires = :expires',
        ConditionExpression='leader = :leader',
        ExpressionAttributeValues={
            ':expires': int(time.time()) + lease_duration,
            ':leader': instance_id
        }
    )
```

## Summary

Cloud architecture patterns provide proven solutions to recurring design problems. The AWS Well-Architected Framework provides six pillars for evaluating architectures. Cell-based architecture limits failure blast radius through complete isolation. The strangler fig pattern enables incremental monolith-to-microservices migration. Anti-corruption layers protect new systems from legacy complexity. Sidecar and ambassador patterns handle cross-cutting concerns and external communication. The circuit breaker prevents cascading failures, and the bulkhead pattern isolates resource pools. Health endpoint monitoring provides visibility into component status, and leader election coordinates distributed tasks.

## Exercises

### Review Questions

1. What are the six pillars of the AWS Well-Architected Framework?
2. What is cell-based architecture and what problem does it solve?
3. Describe the strangler fig pattern and its stages of execution.
4. How does an anti-corruption layer differ from a facade pattern?
5. Compare the sidecar and ambassador patterns. When is each used?
6. What are the three states of a circuit breaker and how do they transition?
7. How does the bulkhead pattern improve system resilience?
8. What is the difference between liveness, readiness, and custom health checks?
9. Describe three approaches to leader election in distributed systems.
10. How does the circuit breaker pattern prevent cascading failures?

### Application Problems

1. A company is migrating a 15-year-old Java monolith to microservices. The monolith handles orders, payments, inventory, and shipping. Design a strangler fig migration plan covering the migration sequence, the interception layer, data synchronization strategy, and rollback procedures.

2. Design a cell-based architecture for a SaaS platform serving 100 tenants with strict isolation requirements. Each tenant's data must be completely isolated, and a failure in one tenant must not affect others. Design the cell assignment, routing, database isolation, and deployment strategy.

3. A microservices application experiences cascading failures when the payment service becomes slow. The inventory service and order service both depend on payment, and when payment degrades, both exhaust their connection pools and fail. Design a resilience architecture using circuit breakers and bulkheads.

4. A distributed data processing pipeline runs on 50 workers. A scheduling job that reprocesses failed records must run on exactly one worker at a time. Design a leader election mechanism for this scheduler.

### Challenge Problem

A global e-commerce platform currently runs as a monolith serving 10 million users across 20 countries. The monolithic application is becoming a bottleneck for feature development and scaling. The company wants to incrementally migrate to a microservices architecture on AWS with the following constraints: zero downtime during migration, each microservice must be independently deployable, failures must be contained within service boundaries, legacy data must remain accessible during the three-year migration period, the system must handle 10x Black Friday traffic spikes, and the migration must not require a single "big bang" deployment. Design a comprehensive architecture covering the strangler fig pattern for migration sequencing, cell-based architecture for deployment, circuit breakers and bulkheads for resilience, service mesh (sidecar pattern) for observability and security, leader election for background job coordination, health monitoring for all services, the anti-corruption layer for legacy integration, and the Well-Architected Framework review of the final architecture covering all six pillars.
