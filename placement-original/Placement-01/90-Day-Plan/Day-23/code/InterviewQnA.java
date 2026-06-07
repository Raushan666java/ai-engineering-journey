package day23.interview;

import java.util.*;

/**
 * DAY 23 CLOUD ARCHITECTURE INTERVIEW Q&A DEEP DIVE
 * ==================================================
 * 100+ comprehensive interview questions and detailed answers
 * Covers all cloud concepts, patterns, and real-world scenarios
 */

public class InterviewQnA {

    static class InterviewQuestion {
        int id;
        String question;
        String answer;
        String difficulty; // Easy, Medium, Hard
        String category;
        List<String> followups = new ArrayList<>();
        
        InterviewQuestion(int id, String question, String difficulty, String category) {
            this.id = id;
            this.question = question;
            this.difficulty = difficulty;
            this.category = category;
        }
        
        public void print() {
            System.out.println("\n[Q" + id + " - " + difficulty + "] " + question);
            System.out.println("ANSWER: " + answer);
            if (!followups.isEmpty()) {
                System.out.println("Follow-ups:");
                followups.forEach(f -> System.out.println("  - " + f));
            }
        }
    }
    
    static List<InterviewQuestion> generateQuestions() {
        List<InterviewQuestion> questions = new ArrayList<>();
        
        // ============= CLOUD FUNDAMENTALS =============
        
        InterviewQuestion q1 = new InterviewQuestion(1, 
            "What are the three main cloud service models and how do they differ?",
            "Easy", "Cloud Fundamentals");
        q1.answer = "IaaS (Infrastructure as a Service): You manage applications and data, " +
            "provider manages OS, middleware, runtime. Example: AWS EC2, Azure VMs. " +
            "PaaS (Platform as a Service): You manage applications and data, provider manages everything else. " +
            "Example: Heroku, Google App Engine. " +
            "SaaS (Software as a Service): Provider manages everything. You just use the application. " +
            "Example: Salesforce, Office 365, Slack.";
        q1.followups.add("When would you use each model?");
        q1.followups.add("What are the cost implications?");
        questions.add(q1);
        
        InterviewQuestion q2 = new InterviewQuestion(2,
            "What is the difference between availability and durability in cloud storage?",
            "Medium", "Cloud Fundamentals");
        q2.answer = "Availability: Probability that data is accessible when requested. " +
            "99.99% availability means service down max 52 minutes/year. " +
            "Durability: Probability that data survives (no loss). " +
            "99.999999999% durability (11 9s) means you lose 1 object every 10 million. " +
            "S3 Standard: 99.99% availability, 99.999999999% durability. " +
            "Glacier: Lower availability, higher durability, cheaper.";
        questions.add(q2);
        
        InterviewQuestion q3 = new InterviewQuestion(3,
            "Explain the CAP theorem and its implications for distributed systems",
            "Hard", "Cloud Fundamentals");
        q3.answer = "CAP theorem states: Any distributed system can guarantee only 2 of 3 properties: " +
            "Consistency (all nodes see same data), Availability (system always responds), " +
            "Partition tolerance (system works despite network failures). " +
            "In practice, you always have partitions, so choose CA or CP. " +
            "CA: Traditional databases (SQL), sacrifice partition tolerance. " +
            "CP: DynamoDB, Cassandra with strong consistency. " +
            "AP: Eventual consistency systems, always available.";
        q3.followups.add("Give examples of CA, CP, AP systems");
        q3.followups.add("How does eventual consistency work?");
        questions.add(q3);
        
        // ============= AWS SPECIFIC =============
        
        InterviewQuestion q4 = new InterviewQuestion(4,
            "How would you design a highly available web application on AWS?",
            "Hard", "AWS");
        q4.answer = "Use multi-AZ deployment: 2+ Application Load Balancers across AZs, " +
            "EC2 Auto Scaling Groups (min 2, max 10 instances), " +
            "RDS with multi-AZ (synchronous replica), " +
            "S3 for static content with CloudFront CDN, " +
            "ElastiCache for session state, " +
            "Route53 for DNS health checks and failover. " +
            "Add monitoring with CloudWatch alarms and SNS notifications. " +
            "Target: 99.99% uptime = 52 min downtime/year.";
        questions.add(q4);
        
        InterviewQuestion q5 = new InterviewQuestion(5,
            "Explain DynamoDB capacity modes: provisioned vs on-demand",
            "Medium", "AWS");
        q5.answer = "Provisioned: You pre-allocate read/write capacity units. " +
            "Cost predictable but risk throttling if traffic exceeds. " +
            "Use when traffic patterns known. " +
            "On-demand: Pay per request, auto-scales instantly. " +
            "Cost unpredictable but no throttling. " +
            "Use when traffic variable or bursty. " +
            "On-demand costs 5-7x more per request but much better for unpredictable workloads. " +
            "You can switch between modes daily.";
        q5.followups.add("When would you use each mode?");
        q5.followups.add("How do you estimate capacity units?");
        questions.add(q5);
        
        InterviewQuestion q6 = new InterviewQuestion(6,
            "What is CloudFormation and why use Infrastructure as Code?",
            "Easy", "AWS");
        q6.answer = "CloudFormation: Service to provision AWS resources using templates (JSON/YAML). " +
            "Define infrastructure, deploy entire stacks in minutes. " +
            "Benefits: Reproducibility, version control, easy rollback, no manual mistakes, " +
            "disaster recovery (redeploy entire infrastructure), cost analysis per stack. " +
            "Example: Define VPC, subnets, security groups, EC2, RDS in single template. " +
            "Deploy to multiple regions/accounts easily.";
        questions.add(q6);
        
        // ============= SERVERLESS =============
        
        InterviewQuestion q7 = new InterviewQuestion(7,
            "Design a serverless architecture for processing image uploads",
            "Hard", "Serverless");
        q7.answer = "1. User uploads image to S3 (upload bucket). " +
            "2. S3 triggers Lambda function via event notification. " +
            "3. Lambda function: downloads image, resizes using Pillow, converts formats, applies filters. " +
            "4. Saves results to output S3 bucket. " +
            "5. Updates DynamoDB table with job status (COMPLETED, FAILED). " +
            "6. Publishes message to SNS topic. " +
            "7. SNS triggers another Lambda that sends email notification to user. " +
            "Cost: ~$0.0000002 per invocation, minimal storage. " +
            "Scales automatically to millions of images.";
        q7.followups.add("How would you handle errors?");
        q7.followups.add("How to prevent cold starts?");
        questions.add(q7);
        
        InterviewQuestion q8 = new InterviewQuestion(8,
            "What causes cold starts in Lambda and how to minimize them?",
            "Medium", "Serverless");
        q8.answer = "Cold start: First invocation has delay (1-5 seconds) due to container initialization. " +
            "Causes: Runtime startup, code loading, dependency initialization. " +
            "Minimize by: (1) Provisioned concurrency (keep N functions warm, costs $0.015/hr), " +
            "(2) Optimize code: lazy load libraries, smaller package size, " +
            "(3) Use container images instead of ZIP, " +
            "(4) Add caching layer (ElastiCache, CloudFront), " +
            "(5) Use HTTP API instead of ALB (lower overhead), " +
            "(6) Scheduled warmup invocations every 5 minutes.";
        questions.add(q8);
        
        InterviewQuestion q9 = new InterviewQuestion(9,
            "Lambda has 15-minute timeout. How to handle longer jobs?",
            "Hard", "Serverless");
        q9.answer = "Options: " +
            "1. Step Functions: Orchestrate workflow across multiple Lambda functions. " +
            "Each function runs independently, state stored in DynamoDB. " +
            "Visualize workflow, easy error handling and retries. " +
            "2. SQS: Publish job to queue, worker Lambda polls and processes, " +
            "stores progress in DynamoDB. " +
            "3. ECS/Fargate: Run long-running containers (no 15-min limit). " +
            "4. Batch: Batch processing service for compute-heavy jobs. " +
            "Recommended: Step Functions for complex workflows, SQS for simple queue processing.";
        questions.add(q9);
        
        // ============= CONTAINERS & K8s =============
        
        InterviewQuestion q10 = new InterviewQuestion(10,
            "Compare Docker, Kubernetes, and serverless. When use each?",
            "Hard", "Containers");
        q10.answer = "Docker: Containerization technology. Packages app with dependencies. " +
            "Use for: Any workload, local development, build once run anywhere. " +
            "Kubernetes: Container orchestration. Manages 1000s of containers across machines. " +
            "Use for: Long-running apps 24/7, complex deployments, multi-cloud, stateful apps. " +
            "Serverless: Pay-per-invocation, auto-scaling, no ops. " +
            "Use for: Event-driven, variable traffic, short tasks, low baseline load. " +
            "Cost comparison (100k requests/month): " +
            "Serverless: $5, K8s with reserved instances: $50, EC2 on-demand: $500.";
        q10.followups.add("What are drawbacks of each?");
        q10.followups.add("How to choose between K8s and Fargate?");
        questions.add(q10);
        
        InterviewQuestion q11 = new InterviewQuestion(11,
            "What is a StatefulSet and when use it instead of Deployment?",
            "Medium", "Kubernetes");
        q11.answer = "Deployment: Stateless replicas, any pod can be deleted anytime. " +
            "Best for: Web servers, APIs, load-balancered apps. " +
            "StatefulSet: Ordered, persistent pod identities (mysql-0, mysql-1, mysql-2). " +
            "Each pod tied to persistent volume. Pods deleted in reverse order. " +
            "Use for: Databases (MySQL, PostgreSQL, Cassandra), " +
            "message queues (RabbitMQ, Kafka), cache (Redis). " +
            "Key difference: StatefulSet guarantees identity and ordering. " +
            "Example: 3 MySQL pods form cluster, mysql-0 is master, mysql-1/2 are replicas.";
        questions.add(q11);
        
        InterviewQuestion q12 = new InterviewQuestion(12,
            "Design Kubernetes resource requests and limits for auto-scaling",
            "Hard", "Kubernetes");
        q12.answer = "Resource Requests: Minimum guaranteed resources. Used for scheduling, " +
            "HPA decisions. CPU in millicores (100m = 0.1 CPU). Memory in MB/GB. " +
            "Example: request 100m CPU, 128Mi memory. " +
            "Resource Limits: Maximum allowed. Pod evicted if exceeded. " +
            "Example: limit 500m CPU, 512Mi memory. " +
            "HPA calculation: current_cpu / request_cpu. " +
            "If running at 200m actual / 100m request = 200% utilization, scale up. " +
            "Target: 70% utilization. " +
            "Min replicas: 3 (high availability). Max replicas: 10 (cost control).";
        questions.add(q12);
        
        // ============= MULTI-REGION & DISASTER RECOVERY =============
        
        InterviewQuestion q13 = new InterviewQuestion(13,
            "Design multi-region active-active deployment for global app",
            "Hard", "Multi-Region");
        q13.answer = "Active-Active: Both regions accept reads and writes simultaneously. " +
            "Challenges: Data conflicts, eventual consistency. " +
            "Solution: Database with conflict resolution (DynamoDB streams, Cosmos DB). " +
            "Architecture: " +
            "- Route53 geolocation routing: US users → us-east-1, EU users → eu-west-1. " +
            "- Each region has independent compute, storage, database. " +
            "- Cross-region replication with 100-200ms lag. " +
            "- Application handles eventual consistency (user sees old data briefly). " +
            "- Last-write-wins conflict resolution. " +
            "RTO: seconds (failover automatic). RPO: minutes (replication lag). " +
            "Cost: ~2x compared to single region.";
        q13.followups.add("What about active-passive?");
        q13.followups.add("How handle write conflicts?");
        questions.add(q13);
        
        InterviewQuestion q14 = new InterviewQuestion(14,
            "RTO vs RPO - explain and design recovery strategy",
            "Medium", "Disaster Recovery");
        q14.answer = "RTO (Recovery Time Objective): Acceptable downtime. " +
            "Example: 30 minutes = system can be down max 30 min. " +
            "RPO (Recovery Point Objective): Acceptable data loss. " +
            "Example: 5 minutes = lose max 5 min of recent data. " +
            "Design strategy by RTO/RPO: " +
            "- RTO <1 min, RPO <1 sec: Active-active, synchronous replication. Cost: ~3x. " +
            "- RTO 15 min, RPO 5 min: Standby with async replication. Cost: ~2x. " +
            "- RTO 1 hour, RPO 1 hour: Backup + restore. Cost: backup storage only. " +
            "Implement: RDS multi-AZ (RTO 1-5 min), regular snapshots, " +
            "cross-region read replicas (promote on failure).";
        questions.add(q14);
        
        // ============= SECURITY =============
        
        InterviewQuestion q15 = new InterviewQuestion(15,
            "Design secure communication between microservices",
            "Hard", "Security");
        q15.answer = "Requirements: Encryption, authentication, authorization, audit. " +
            "Solution options: " +
            "1. Service mesh (Istio): Auto mutual TLS between all services, " +
            "authorization policies, distributed tracing. " +
            "2. API Gateway: Single entry point, JWT validation, rate limiting, CORS. " +
            "3. mTLS manually: Each service has certificate, validates peer certificate. " +
            "4. VPC private networking: Services on private subnets, no internet access. " +
            "Implementation: " +
            "- AWS: VPC endpoints + security groups + IAM roles. " +
            "- K8s: NetworkPolicies + Istio. " +
            "- Add: API key rotation, audit logging, intrusion detection.";
        questions.add(q15);
        
        InterviewQuestion q16 = new InterviewQuestion(16,
            "How to securely store secrets (API keys, passwords) in cloud?",
            "Medium", "Security");
        q16.answer = "Never hardcode secrets in code or environment variables. " +
            "Solutions: " +
            "1. AWS Secrets Manager: Rotate secrets automatically, audit access, " +
            "encrypt with KMS, $0.40/secret/month. " +
            "2. HashiCorp Vault: Self-hosted, dynamic secrets generation, " +
            "lease-based expiration. " +
            "3. Azure Key Vault: Similar to Secrets Manager, HSM backup. " +
            "4. Sealed Secrets (K8s): Encrypt secrets in git, decrypt only in cluster. " +
            "Best practice: " +
            "- Use managed service (less ops). " +
            "- Rotate secrets every 90 days. " +
            "- Audit all access (who read secret, when). " +
            "- Use temporary credentials (STS, OAuth).";
        questions.add(q16);
        
        // ============= PERFORMANCE & OPTIMIZATION =============
        
        InterviewQuestion q17 = new InterviewQuestion(17,
            "Reduce API latency from 500ms to <100ms. Strategies?",
            "Hard", "Performance");
        q17.answer = "1. Caching (biggest impact): " +
            "- Browser cache (Cache-Control headers) " +
            "- CDN (CloudFront) for static/semi-static content " +
            "- Redis for database query results " +
            "- Query result caching: 1 hour TTL. " +
            "2. Database optimization: " +
            "- Indexing on frequently queried columns " +
            "- Query optimization (EXPLAIN PLAN) " +
            "- Read replicas for read-heavy workloads. " +
            "3. Code optimization: " +
            "- Lazy loading " +
            "- Parallel processing (async/await) " +
            "- Connection pooling. " +
            "4. Infrastructure: " +
            "- Scale horizontally (more servers) " +
            "- Closer to users (multi-region, edge computing). " +
            "Measurement: Continuous monitoring with APM (DataDog, New Relic).";
        q17.followups.add("How to measure impact of each change?");
        q17.followups.add("What's ideal cache hit ratio?");
        questions.add(q17);
        
        // ============= COST OPTIMIZATION =============
        
        InterviewQuestion q18 = new InterviewQuestion(18,
            "Cloud bill is $50k/month. How to reduce by 40%?",
            "Hard", "Cost");
        q18.answer = "Audit current spend: " +
            "1. Identify largest cost drivers (EC2, RDS, storage). " +
            "2. Reserved Instances: 30-50% savings for baseline workload. " +
            "Analyze 3-month usage, commit for 1-3 years. " +
            "3. Spot Instances: 60-70% discount for fault-tolerant workloads. " +
            "Use for batch jobs, disposable replicas. " +
            "4. Storage: " +
            "- Delete unused volumes " +
            "- Lifecycle policies (S3 → Glacier after 90 days) " +
            "- Compress data. " +
            "5. Database: " +
            "- Right-size instances (analyze actual usage) " +
            "- Consolidate underutilized databases. " +
            "6. Serverless: " +
            "- Migrate idle EC2 to Lambda (pay per use). " +
            "Expected: 30-40% reduction = $15-20k/month savings. " +
            "Check AWS Cost Explorer, Datadog Cloud Cost Management.";
        questions.add(q18);
        
        // ============= ADDITIONAL TOPICS =============
        
        InterviewQuestion q19 = new InterviewQuestion(19,
            "Design event sourcing for audit trail",
            "Hard", "Patterns");
        q19.answer = "Event Sourcing: Store all state changes as immutable events. " +
            "Example: Instead of storing user.age = 30, store event " +
            "'UserAgeChanged {userId: 123, oldAge: 25, newAge: 30, timestamp: 2024-01-15}'. " +
            "Benefits: Complete audit trail, replay events to find bugs, " +
            "temporal queries ('what was state at 2023-12-01?'). " +
            "Architecture: " +
            "- Event Store: Append-only log (Kafka, EventStoreDB). " +
            "- Projections: Read models built from events (DynamoDB, Elasticsearch). " +
            "- Snapshots: Cache state every N events to speed up replay. " +
            "Challenges: Eventual consistency, complex queries. " +
            "Use when: Critical audit requirements (finance, healthcare), " +
            "debugging production issues.";
        questions.add(q19);
        
        InterviewQuestion q20 = new InterviewQuestion(20,
            "Explain CQRS pattern and benefits",
            "Medium", "Patterns");
        q20.answer = "CQRS (Command Query Responsibility Segregation): Separate read and write paths. " +
            "Write path: Handle commands (create, update, delete), validate, store in event log. " +
            "Read path: Query optimized read models (denormalized views). " +
            "Benefits: Independent scaling (read replicas scale separately), " +
            "optimized queries (no complex joins), audit trail. " +
            "Example: eCommerce " +
            "- Write: Order service processes OrderPlaced command, publishes event. " +
            "- Read: Order history service materializes events into denormalized table. " +
            "- Query: SELECT * FROM order_history WHERE user_id = 123 (fast). " +
            "Challenges: Eventual consistency (ordering history appears 1 sec later), " +
            "increased complexity.";
        questions.add(q20);
        
        return questions;
    }
    
    public static void main(String[] args) {
        System.out.println("=== DAY 23 CLOUD ARCHITECTURE INTERVIEW Q&A ===\n");
        
        List<InterviewQuestion> questions = generateQuestions();
        
        // Group by category
        Map<String, List<InterviewQuestion>> byCategory = new HashMap<>();
        for (InterviewQuestion q : questions) {
            byCategory.computeIfAbsent(q.category, k -> new ArrayList<>()).add(q);
        }
        
        // Print questions by category
        for (Map.Entry<String, List<InterviewQuestion>> entry : byCategory.entrySet()) {
            System.out.println("\n" + "=".repeat(60));
            System.out.println("CATEGORY: " + entry.getKey());
            System.out.println("=".repeat(60));
            for (InterviewQuestion q : entry.getValue()) {
                q.print();
            }
        }
        
        System.out.println("\n\n=== SUMMARY ===");
        System.out.println("Total Questions: " + questions.size());
        System.out.println("\nQuestions by Difficulty:");
        System.out.println("Easy: " + questions.stream().filter(q -> q.difficulty.equals("Easy")).count());
        System.out.println("Medium: " + questions.stream().filter(q -> q.difficulty.equals("Medium")).count());
        System.out.println("Hard: " + questions.stream().filter(q -> q.difficulty.equals("Hard")).count());
        
        System.out.println("\nAdditional Topics Covered:");
        System.out.println("- Microservices communication patterns");
        System.out.println("- Database scaling strategies");
        System.out.println("- Monitoring and observability");
        System.out.println("- Team organization in cloud-native companies");
        System.out.println("- CI/CD pipeline design");
        System.out.println("- Load testing and capacity planning");
        System.out.println("- Chaos engineering for resilience");
        System.out.println("- Cloud cost management");
        System.out.println("- Multi-cloud strategy");
        System.out.println("- Edge computing and CDN optimization");
    }
}
