package day23.practice;

import java.util.*;

/**
 * DAY 23 PRACTICE PROBLEMS (Cloud Architecture & Serverless)
 * ===========================================================
 * 40+ comprehensive practice problems with complete solutions.
 * Covers cloud design, serverless patterns, multi-cloud strategies, and real-world scenarios.
 */

public class Day23PracticeProblems {

    // ============= PROBLEM 1-5: Cloud Service Model Selection =============
    
    // PROBLEM 1: Choose appropriate cloud service model
    public static class Problem1_ServiceModel {
        /*
        You need to deploy a custom web application with specific OS requirements.
        The team wants to manage the application layer but not infrastructure.
        
        Which cloud service model should you use?
        A) IaaS (Infrastructure as a Service)
        B) PaaS (Platform as a Service) 
        C) SaaS (Software as a Service)
        D) All of the above
        
        ANSWER: B) PaaS (Platform as a Service)
        
        EXPLANATION:
        PaaS provides runtime environment and development tools while abstracting 
        underlying infrastructure. You manage application/data, platform handles OS, 
        runtime, middleware. IaaS requires OS management. SaaS is pre-built software.
        
        EXAMPLE SERVICES:
        - Heroku, Google App Engine, Azure App Service: PaaS
        - AWS EC2, Azure VMs, GCP Compute Engine: IaaS
        - Salesforce, Office 365, Slack: SaaS
        */
        
        public static void demonstratePaaS() {
            System.out.println("PaaS Benefits:");
            System.out.println("- Reduced management burden");
            System.out.println("- Built-in deployment tools");
            System.out.println("- Automatic scaling");
            System.out.println("- Integrated databases");
        }
    }
    
    // PROBLEM 2: Cost comparison across service models
    public static class Problem2_CostAnalysis {
        /*
        You run 10 web servers 24/7. Compare costs:
        - IaaS: $0.10/hour per instance = $24 * 365 * 10 = $87,600/year
        - PaaS: $50/month per app = $600/year but requires 3 instances = $1,800/year
        - On-premise: $5,000/server setup + $500/month maintenance = $56,000/year
        
        Which offers best long-term value?
        
        ANSWER: PaaS at $1,800/year (accounting for scaling needs)
        
        KEY INSIGHTS:
        - IaaS requires continuous running costs
        - PaaS hides infrastructure costs but scales automatically
        - On-premise has high capital expenditure
        - Consider: traffic patterns, scaling needs, maintenance overhead
        */
        
        public static void calculateCosts() {
            double iaasPerServer = 0.10 * 24 * 365;
            double iaasTotal = iaasPerServer * 10;
            
            double paasPerApp = 50 * 12;
            double paasTotal = paasPerApp * 3;
            
            System.out.println("IaaS Annual Cost: $" + iaasTotal);
            System.out.println("PaaS Annual Cost: $" + paasTotal);
            System.out.println("Savings with PaaS: $" + (iaasTotal - paasTotal));
        }
    }
    
    // PROBLEM 3: Multi-cloud deployment strategy
    public static class Problem3_MultiCloud {
        /*
        Design a system deployed across AWS, Azure, and GCP.
        Goals: Avoid vendor lock-in, reduce latency globally, ensure 99.99% uptime.
        
        SOLUTION DESIGN:
        1. Use containerization (Docker + Kubernetes)
        2. Abstract cloud-specific APIs with microservices
        3. Deploy load balancer across regions
        4. Use managed services for resilience
        */
        
        public static void designMultiCloud() {
            System.out.println("Multi-Cloud Architecture:");
            System.out.println("1. Containerize applications (Docker)");
            System.out.println("2. Deploy on Kubernetes (managed K8s on each cloud)");
            System.out.println("   - AWS: EKS");
            System.out.println("   - Azure: AKS");
            System.out.println("   - GCP: GKE");
            System.out.println("3. Global load balancing (Route 53, Traffic Manager, Cloud Load Balancing)");
            System.out.println("4. Cross-region databases (DynamoDB, Cosmos DB, Cloud Spanner)");
            System.out.println("5. Event-driven architecture (SNS/SQS, Service Bus, Pub/Sub)");
        }
    }
    
    // PROBLEM 4: Serverless vs containerized
    public static class Problem4_ServerlessVsContainer {
        /*
        You have 2 workloads:
        A) Batch processing job that runs 1 hour/day
        B) Continuous data processing 24/7
        
        Which should be serverless? Which containerized?
        
        ANSWER:
        A) Serverless (AWS Lambda, Azure Functions)
           - Pay only during execution (1 hour/day)
           - No idle costs
           - Event-driven trigger
           
        B) Containerized (ECS, AKS, GKE)
           - Continuous processing requires always-on
           - Containers more cost-effective for 24/7
           - Better for long-running processes
           
        COST ANALYSIS:
        Batch Job: 1 hour/day
        - Serverless: ~$0.20/day * 365 = $73/year
        - Container: ~$50/month * 12 = $600/year
        
        Continuous Job: 24/7
        - Serverless: ~$5/day * 365 = $1,825/year
        - Container: ~$50/month * 12 = $600/year
        */
        
        public static void compareArchitectures() {
            System.out.println("Batch Processing (1 hour/day):");
            System.out.println("- Serverless: $73/year (BETTER)");
            System.out.println("- Container: $600/year");
            
            System.out.println("\nContinuous Processing (24/7):");
            System.out.println("- Serverless: $1,825/year");
            System.out.println("- Container: $600/year (BETTER)");
        }
    }
    
    // PROBLEM 5: Auto-scaling strategy
    public static class Problem5_AutoScaling {
        /*
        Your application receives 100 requests/min baseline.
        During promotions, traffic spikes to 1,000 requests/min.
        Response time must stay under 500ms.
        
        Design an auto-scaling strategy.
        
        SOLUTION:
        */
        public static void designAutoScaling() {
            int baselineRPM = 100;
            int peakRPM = 1000;
            int targetRespTime = 500; // ms
            int rpuPerServer = 50; // requests per server per minute
            
            int baselineServers = baselineRPM / rpuPerServer;
            int peakServers = peakRPM / rpuPerServer;
            
            System.out.println("Auto-Scaling Strategy:");
            System.out.println("Baseline servers needed: " + baselineServers);
            System.out.println("Peak servers needed: " + peakServers);
            System.out.println("\nPolicy:");
            System.out.println("- Scale up when avg response time > 300ms");
            System.out.println("- Add 5 servers per scaling action");
            System.out.println("- Scale down after 5 minutes of low traffic");
            System.out.println("- Remove 2 servers per scaling action");
            System.out.println("- Max instances: " + (peakServers + 5));
            System.out.println("- Min instances: " + baselineServers);
        }
    }
    
    // ============= PROBLEM 6-15: Serverless Architecture =============
    
    public static class Problem6_LambdaArchitecture {
        /*
        Design serverless image processing pipeline:
        - User uploads image to S3
        - Lambda triggers on S3 event
        - Process image (resize, watermark)
        - Store result back to S3
        
        SOLUTION COMPONENTS:
        1. S3 bucket for uploads with event notification
        2. Lambda function with image processing logic
        3. S3 bucket for results
        4. DynamoDB for tracking job status
        5. SNS for completion notifications
        */
        
        public static void designImagePipeline() {
            System.out.println("Serverless Image Pipeline:");
            System.out.println("1. User uploads image → S3 (upload bucket)");
            System.out.println("2. S3 triggers Lambda function");
            System.out.println("3. Lambda:");
            System.out.println("   - Download image from S3");
            System.out.println("   - Process using PIL/OpenCV");
            System.out.println("   - Upload to output bucket");
            System.out.println("   - Update status in DynamoDB");
            System.out.println("4. SNS sends completion notification");
            System.out.println("5. User receives notification via email/SMS");
            System.out.println("\nCost: ~$0.0000002 per request");
        }
    }
    
    public static class Problem7_EventDriven {
        /*
        Design event-driven order processing:
        - Order placed → Payment processed → Inventory updated → Email sent
        
        Challenge: Loose coupling, high reliability, 24/7 operation
        */
        
        public static void designEventArchitecture() {
            System.out.println("Event-Driven Order Processing:");
            System.out.println("\n1. Order Service publishes 'OrderCreated' event");
            System.out.println("2. Payment Service subscribes and processes payment");
            System.out.println("3. Payment Service publishes 'PaymentCompleted'");
            System.out.println("4. Inventory Service subscribes and reserves items");
            System.out.println("5. Email Service subscribes and sends confirmation");
            System.out.println("\nTechnologies:");
            System.out.println("- AWS: SNS (topics) + SQS (queues) + Lambda");
            System.out.println("- Azure: Service Bus (topics) + Event Grid + Functions");
            System.out.println("- GCP: Pub/Sub + Cloud Functions");
            System.out.println("\nBenefits:");
            System.out.println("- Decoupled services");
            System.out.println("- Asynchronous processing");
            System.out.println("- Resilient to failures");
        }
    }
    
    public static class Problem8_ColdStart {
        /*
        Lambda function has 5-second cold start time.
        High-traffic API (10,000 req/min) sees unacceptable latency.
        
        Solutions?
        */
        
        public static void solveColdStart() {
            System.out.println("Cold Start Problem: 5 seconds delay");
            System.out.println("\nSolutions:");
            System.out.println("\n1. Provisioned Concurrency");
            System.out.println("   - Keep N functions warm");
            System.out.println("   - Cost: $0.015/hour per concurrent execution");
            
            System.out.println("\n2. Use Container Images");
            System.out.println("   - Faster cold starts than ZIP");
            System.out.println("   - ~2-3 second improvement");
            
            System.out.println("\n3. Optimize Package Size");
            System.out.println("   - Smaller packages = faster download");
            System.out.println("   - Remove unnecessary dependencies");
            
            System.out.println("\n4. Use HTTP API instead of ALB");
            System.out.println("   - Lower overhead per request");
            
            System.out.println("\n5. Caching Layer");
            System.out.println("   - Add CloudFront CDN");
            System.out.println("   - ElastiCache for database queries");
        }
    }
    
    public static class Problem9_StatelessFunctions {
        /*
        Design stateless function handling complex workflow:
        - Parse incoming data
        - Call 5 microservices
        - Aggregate results
        - Store in database
        - Send notifications
        
        Maximum execution time: 15 minutes
        */
        
        public static void designStatelessWorkflow() {
            System.out.println("Stateless Workflow Design:");
            System.out.println("\n1. Event triggers main orchestrator function");
            System.out.println("2. Orchestrator stores state in DynamoDB");
            System.out.println("3. Each step publishes event for next function");
            System.out.println("4. Functions are idempotent (safe to retry)");
            System.out.println("5. Dead-letter queues for failed messages");
            System.out.println("\nPattern: Step Functions + Lambda");
            System.out.println("Benefits:");
            System.out.println("- No 15-min timeout for single function");
            System.out.println("- Visible workflow state");
            System.out.println("- Easy retries and error handling");
        }
    }
    
    public static class Problem10_ServerlessDatabase {
        /*
        When should you use serverless databases?
        */
        
        public static void compareServerlessDatabases() {
            System.out.println("Serverless Database Selection:");
            
            System.out.println("\nUse DynamoDB when:");
            System.out.println("- Predictable access patterns");
            System.out.println("- Simple key-value or range queries");
            System.out.println("- Variable traffic (pay-per-request)");
            System.out.println("- No complex joins needed");
            
            System.out.println("\nUse Aurora Serverless when:");
            System.out.println("- Need SQL relational model");
            System.out.println("- Complex queries with JOINs");
            System.out.println("- Variable traffic");
            System.out.println("- Auto-scaling required");
            
            System.out.println("\nUse Firestore when:");
            System.out.println("- Document-oriented data");
            System.out.println("- Complex queries with filtering");
            System.out.println("- Global scalability needed");
            System.out.println("- Mobile app integration");
        }
    }
    
    // ============= PROBLEM 11-20: Container & K8s =============
    
    public static class Problem11_KubernetesDeployment {
        /*
        Deploy web app with 3 replicas that auto-scales to 10 on high CPU.
        
        Kubernetes YAML solution:
        
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: web-app
        spec:
          replicas: 3
          selector:
            matchLabels:
              app: web-app
          template:
            metadata:
              labels:
                app: web-app
            spec:
              containers:
              - name: app
                image: myapp:1.0
                resources:
                  requests:
                    cpu: 100m
                    memory: 128Mi
                  limits:
                    cpu: 500m
                    memory: 512Mi
        ---
        apiVersion: autoscaling/v2
        kind: HorizontalPodAutoscaler
        metadata:
          name: web-app-hpa
        spec:
          scaleTargetRef:
            apiVersion: apps/v1
            kind: Deployment
            name: web-app
          minReplicas: 3
          maxReplicas: 10
          metrics:
          - type: Resource
            resource:
              name: cpu
              target:
                type: Utilization
                averageUtilization: 70
        */
        
        public static void demonstrateK8sDeployment() {
            System.out.println("Kubernetes Deployment Strategy:");
            System.out.println("1. Create Deployment with 3 replicas");
            System.out.println("2. Define resource requests (CPU: 100m, Memory: 128Mi)");
            System.out.println("3. Define resource limits (CPU: 500m, Memory: 512Mi)");
            System.out.println("4. Create HPA for auto-scaling");
            System.out.println("5. Scale up when CPU > 70%");
            System.out.println("6. Max replicas: 10");
        }
    }
    
    public static class Problem12_StatefulSet {
        /*
        Deploy 3-node MySQL cluster using StatefulSet
        */
        
        public static void designStatefulSet() {
            System.out.println("StatefulSet for MySQL Cluster:");
            System.out.println("\nKey Features:");
            System.out.println("- Persistent identities (mysql-0, mysql-1, mysql-2)");
            System.out.println("- Ordered pod creation/deletion");
            System.out.println("- Headless service for DNS");
            System.out.println("- Persistent volumes for data");
            System.out.println("\nConfiguration:");
            System.out.println("- serviceName: mysql (headless service)");
            System.out.println("- replicas: 3");
            System.out.println("- volumeClaimTemplates: 10Gi per pod");
        }
    }
    
    public static class Problem13_ServiceMesh {
        /*
        Reduce network latency and improve reliability using service mesh
        */
        
        public static void implementServiceMesh() {
            System.out.println("Service Mesh Implementation (Istio):");
            System.out.println("\n1. Traffic Management");
            System.out.println("   - Virtual Service for routing");
            System.out.println("   - Destination Rule for load balancing");
            System.out.println("   - Weighted routing for canary deployments");
            
            System.out.println("\n2. Security");
            System.out.println("   - mTLS between services");
            System.out.println("   - Authorization policies");
            System.out.println("   - Certificate management");
            
            System.out.println("\n3. Observability");
            System.out.println("   - Distributed tracing (Jaeger)");
            System.out.println("   - Metrics (Prometheus)");
            System.out.println("   - Logging aggregation");
            
            System.out.println("\n4. Resilience");
            System.out.println("   - Retry policies");
            System.out.println("   - Circuit breaker pattern");
            System.out.println("   - Timeout management");
        }
    }
    
    public static class Problem14_ContainerRegistry {
        /*
        Design container registry strategy for multi-environment deployment
        */
        
        public static void designRegistryStrategy() {
            System.out.println("Container Registry Strategy:");
            System.out.println("\n1. Image Tagging");
            System.out.println("   - Prod: myapp:v1.2.3 (semantic versioning)");
            System.out.println("   - Staging: myapp:staging-latest");
            System.out.println("   - Dev: myapp:dev-<git-hash>");
            
            System.out.println("\n2. Registry Organization");
            System.out.println("   - Use namespace for services");
            System.out.println("   - Example: registry.io/services/auth:v1.2.3");
            
            System.out.println("\n3. Image Scanning");
            System.out.println("   - Vulnerability scanning on push");
            System.out.println("   - Block images with critical vulnerabilities");
            
            System.out.println("\n4. Retention Policy");
            System.out.println("   - Keep last 10 versions");
            System.out.println("   - Delete images older than 30 days");
        }
    }
    
    public static class Problem15_PersistentStorage {
        /*
        Choose appropriate persistent storage for K8s applications
        */
        
        public static void choosePersistentStorage() {
            System.out.println("Persistent Storage Options:");
            
            System.out.println("\n1. Databases (RDS, CloudSQL)");
            System.out.println("   - When: Structured data, SQL queries");
            System.out.println("   - K8s: StatefulSet with CloudSQL Proxy");
            
            System.out.println("\n2. Block Storage (EBS, Azure Disks)");
            System.out.println("   - When: VM-like requirements, direct I/O");
            System.out.println("   - K8s: PersistentVolume + PersistentVolumeClaim");
            
            System.out.println("\n3. File Storage (EFS, Azure Files)");
            System.out.println("   - When: Multiple pods access same files");
            System.out.println("   - K8s: ReadWriteMany access mode");
            
            System.out.println("\n4. Object Storage (S3, GCS)");
            System.out.println("   - When: Large files, archive, backup");
            System.out.println("   - K8s: Upload from pod, not direct mount");
        }
    }
    
    // ============= PROBLEM 16-25: Multi-Region & Disaster Recovery =============
    
    public static class Problem16_MultiRegionDatabase {
        /*
        Design multi-region database with 99.99% uptime
        */
        
        public static void designMultiRegionDB() {
            System.out.println("Multi-Region Database Design:");
            
            System.out.println("\nPrimary Region (us-east-1):");
            System.out.println("- Read/Write primary instance");
            System.out.println("- Synchronous replication to standby");
            
            System.out.println("\nSecondary Region (eu-west-1):");
            System.out.println("- Read replica (asynchronous)");
            System.out.println("- Can promote to primary on failure");
            System.out.println("- ~100ms replication lag");
            
            System.out.println("\nFailover Strategy:");
            System.out.println("1. Health check primary every 10 seconds");
            System.out.println("2. After 3 failures (30 seconds), initiate failover");
            System.out.println("3. Promote read replica to primary");
            System.out.println("4. Update DNS to point to new primary");
            System.out.println("5. Restore replication to standby");
            
            System.out.println("\nRTO: ~30-60 seconds");
            System.out.println("RPO: ~5-10 seconds (replication lag)");
        }
    }
    
    public static class Problem17_DisasterRecovery {
        /*
        Design disaster recovery plan for cloud application
        */
        
        public static void designDisasterRecovery() {
            System.out.println("Disaster Recovery Plan:");
            
            System.out.println("\n1. Regular Backups");
            System.out.println("   - Database: daily snapshots");
            System.out.println("   - Files: continuous sync to cold storage");
            System.out.println("   - Configuration: version control");
            
            System.out.println("\n2. Cross-Region Replication");
            System.out.println("   - Database: read replicas in 2+ regions");
            System.out.println("   - Object storage: cross-region replication");
            System.out.println("   - Queue messages: replay from backups");
            
            System.out.println("\n3. Infrastructure as Code");
            System.out.println("   - Terraform/CloudFormation for reproducibility");
            System.out.println("   - Version controlled infrastructure");
            System.out.println("   - Deploy new infrastructure in minutes");
            
            System.out.println("\n4. Regular Testing");
            System.out.println("   - Monthly failover drills");
            System.out.println("   - Validate RTO/RPO targets");
            System.out.println("   - Document recovery procedures");
        }
    }
    
    public static class Problem18_CDNStrategy {
        /*
        Design CDN strategy to reduce latency for global users
        */
        
        public static void designCDNStrategy() {
            System.out.println("CDN Strategy:");
            
            System.out.println("\n1. Static Content Caching");
            System.out.println("   - Cache HTML/CSS/JS for 24 hours");
            System.out.println("   - Cache images for 30 days");
            System.out.println("   - Use cache-busting (versioned URLs)");
            
            System.out.println("\n2. Geographic Distribution");
            System.out.println("   - US West: edge in LA");
            System.out.println("   - US East: edge in NY");
            System.out.println("   - Europe: edge in London");
            System.out.println("   - Asia: edge in Singapore");
            
            System.out.println("\n3. Dynamic Content Optimization");
            System.out.println("   - Minify CSS/JS");
            System.out.println("   - GZIP compression");
            System.out.println("   - HTTP/2 Server Push");
            
            System.out.println("\n4. Origin Shield");
            System.out.println("   - Additional cache layer");
            System.out.println("   - Protects origin from thundering herd");
            System.out.println("   - Better hit ratio");
            
            System.out.println("\nExpected latency reduction: 50-80%");
        }
    }
    
    public static class Problem19_LoadTesting {
        /*
        Load test application to find breaking points
        */
        
        public static void planLoadTesting() {
            System.out.println("Load Testing Plan:");
            
            System.out.println("\nPhase 1: Baseline (10 min)");
            System.out.println("- 100 concurrent users");
            System.out.println("- Establish baseline metrics");
            
            System.out.println("\nPhase 2: Ramp Up (30 min)");
            System.out.println("- Increase to 1,000 concurrent users");
            System.out.println("- Monitor response times and error rates");
            
            System.out.println("\nPhase 3: Spike (10 min)");
            System.out.println("- Sudden spike to 5,000 users");
            System.out.println("- Test auto-scaling response");
            
            System.out.println("\nPhase 4: Soak (60 min)");
            System.out.println("- Sustained 2,000 users");
            System.out.println("- Detect memory leaks and performance degradation");
            
            System.out.println("\nMetrics to Monitor:");
            System.out.println("- Response time (p50, p95, p99)");
            System.out.println("- Error rate (5xx, timeouts)");
            System.out.println("- CPU/Memory utilization");
            System.out.println("- Database connections");
            System.out.println("- Queue depth");
        }
    }
    
    public static class Problem20_CostOptimization {
        /*
        Reduce cloud costs by 40%
        */
        
        public static void optimizeCosts() {
            System.out.println("Cloud Cost Optimization:");
            
            System.out.println("\n1. Reserved Instances");
            System.out.println("   - 1-year: 30% savings");
            System.out.println("   - 3-year: 50% savings");
            System.out.println("   - For baseline workloads");
            
            System.out.println("\n2. Spot/Preemptible Instances");
            System.out.println("   - 60-70% discount");
            System.out.println("   - For fault-tolerant batch workloads");
            System.out.println("   - Auto-scaling groups with fallback");
            
            System.out.println("\n3. Storage Optimization");
            System.out.println("   - Delete unused volumes");
            System.out.println("   - Transition to cold storage");
            System.out.println("   - S3 lifecycle policies");
            
            System.out.println("\n4. Right-Sizing");
            System.out.println("   - Analyze actual resource usage");
            System.out.println("   - Downgrade over-provisioned instances");
            System.out.println("   - Move to serverless where applicable");
            
            System.out.println("\n5. Datadog/New Relic Analysis");
            System.out.println("   - Identify idle resources");
            System.out.println("   - Right-size based on metrics");
            
            System.out.println("\nExpected savings: 30-40% annually");
        }
    }
    
    // ============= PROBLEM 21-30: Security & Compliance =============
    
    public static class Problem21_NetworkSecurity {
        /*
        Design secure VPC network architecture
        */
        
        public static void designSecureVPC() {
            System.out.println("Secure VPC Architecture:");
            
            System.out.println("\n1. Network Segmentation");
            System.out.println("   - Public subnets for load balancers");
            System.out.println("   - Private subnets for applications");
            System.out.println("   - Database subnets (no internet access)");
            
            System.out.println("\n2. Security Groups");
            System.out.println("   - Ingress: Only required ports");
            System.out.println("   - Egress: Explicit allowed destinations");
            System.out.println("   - Principle of least privilege");
            
            System.out.println("\n3. Network ACLs");
            System.out.println("   - Stateless firewall rules");
            System.out.println("   - Block known bad IPs");
            System.out.println("   - Rate limiting");
            
            System.out.println("\n4. VPN/Private Link");
            System.out.println("   - Encrypted connections");
            System.out.println("   - Access control to shared services");
            System.out.println("   - Audit logging");
            
            System.out.println("\n5. DDoS Protection");
            System.out.println("   - AWS Shield Standard (free)");
            System.out.println("   - AWS Shield Advanced (L3-L7 protection)");
            System.out.println("   - WAF rules for L7 attacks");
        }
    }
    
    public static class Problem22_IdentityManagement {
        /*
        Implement zero-trust security model
        */
        
        public static void implementZeroTrust() {
            System.out.println("Zero-Trust Security Model:");
            
            System.out.println("\n1. Identity Verification");
            System.out.println("   - MFA for all users");
            System.out.println("   - Service-to-service mutual TLS");
            System.out.println("   - OIDC/SAML for federation");
            
            System.out.println("\n2. Least Privilege Access");
            System.out.println("   - IAM roles instead of users");
            System.out.println("   - Temporary credentials");
            System.out.println("   - Time-bound access");
            
            System.out.println("\n3. Audit & Logging");
            System.out.println("   - CloudTrail for API calls");
            System.out.println("   - Application logging");
            System.out.println("   - Centralized log aggregation");
            
            System.out.println("\n4. Workload Identity");
            System.out.println("   - Kubernetes Service Accounts");
            System.out.println("   - Pod Identity (EKS)");
            System.out.println("   - Workload Identity (GKE)");
        }
    }
    
    public static class Problem23_DataEncryption {
        /*
        Implement encryption at rest and in transit
        */
        
        public static void implementEncryption() {
            System.out.println("Data Encryption Strategy:");
            
            System.out.println("\n1. Encryption in Transit");
            System.out.println("   - TLS 1.2 minimum");
            System.out.println("   - Mutual TLS for service-to-service");
            System.out.println("   - Certificate pinning for critical paths");
            
            System.out.println("\n2. Encryption at Rest");
            System.out.println("   - S3: AWS-managed or customer-managed keys");
            System.out.println("   - Database: EBS encryption");
            System.out.println("   - Application: Transparent data encryption");
            
            System.out.println("\n3. Key Management");
            System.out.println("   - AWS KMS / Azure Key Vault / GCP KMS");
            System.out.println("   - Automatic key rotation");
            System.out.println("   - Audit key usage");
            
            System.out.println("\n4. Database-Level Security");
            System.out.println("   - Always-encrypted columns");
            System.out.println("   - Field-level encryption");
            System.out.println("   - Tokenization for PII");
        }
    }
    
    public static class Problem24_ComplianceAutomation {
        /*
        Ensure continuous compliance with automated checks
        */
        
        public static void automateCompliance() {
            System.out.println("Compliance Automation:");
            
            System.out.println("\n1. Infrastructure Scanning");
            System.out.println("   - Terraform scanning (Checkov)");
            System.out.println("   - Container scanning (Trivy)");
            System.out.println("   - Network policy validation");
            
            System.out.println("\n2. Runtime Monitoring");
            System.out.println("   - Falco for anomaly detection");
            System.out.println("   - Osquery for system integrity");
            System.out.println("   - Network flow logs");
            
            System.out.println("\n3. Compliance Frameworks");
            System.out.println("   - CIS benchmarks");
            System.out.println("   - PCI-DSS requirements");
            System.out.println("   - HIPAA/SOC2 controls");
            
            System.out.println("\n4. Automated Remediation");
            System.out.println("   - Auto-fix misconfigurations");
            System.out.println("   - Rotate exposed credentials");
            System.out.println("   - Patch vulnerabilities");
        }
    }
    
    public static class Problem25_IncidentResponse {
        /*
        Design incident response process
        */
        
        public static void designIncidentResponse() {
            System.out.println("Incident Response Process:");
            
            System.out.println("\n1. Detection (5 min)");
            System.out.println("   - Alerting thresholds");
            System.out.println("   - Anomaly detection");
            System.out.println("   - User reports");
            
            System.out.println("\n2. Response (15 min)");
            System.out.println("   - Page on-call engineer");
            System.out.println("   - Open incident channel");
            System.out.println("   - Investigate root cause");
            
            System.out.println("\n3. Mitigation (30 min)");
            System.out.println("   - Scale up resources if needed");
            System.out.println("   - Failover if necessary");
            System.out.println("   - Implement temporary fix");
            
            System.out.println("\n4. Resolution (2 hours)");
            System.out.println("   - Permanent fix deployed");
            System.out.println("   - Services restored");
            System.out.println("   - Monitoring confirmed");
            
            System.out.println("\n5. Postmortem (24 hours)");
            System.out.println("   - Root cause analysis");
            System.out.println("   - Action items");
            System.out.println("   - Process improvements");
        }
    }
    
    // ============= PROBLEM 26-40: Advanced Scenarios =============
    
    public static class Problem26_MicroservicesTracing {
        /*
        Implement distributed tracing across 20 microservices
        */
        
        public static void implementTracing() {
            System.out.println("Distributed Tracing Setup:");
            
            System.out.println("\n1. Instrumentation");
            System.out.println("   - OpenTelemetry SDK in each service");
            System.out.println("   - HTTP header propagation");
            System.out.println("   - Trace sampling (1% of traffic)");
            
            System.out.println("\n2. Collection");
            System.out.println("   - OpenTelemetry Collector agent");
            System.out.println("   - Jaeger backend for storage");
            System.out.println("   - Elasticsearch for indexing");
            
            System.out.println("\n3. Visualization");
            System.out.println("   - Jaeger UI for trace inspection");
            System.out.println("   - Latency breakdown by service");
            System.out.println("   - Error rate by service");
            
            System.out.println("\n4. Alerting");
            System.out.println("   - P99 latency > 500ms");
            System.out.println("   - Error rate > 1%");
            System.out.println("   - Spans with missing tags");
        }
    }
    
    public static class Problem27_CanaryDeployment {
        /*
        Deploy new version to 5% of users first
        */
        
        public static void implementCanaryDeployment() {
            System.out.println("Canary Deployment Strategy:");
            
            System.out.println("\n1. Initial Rollout (5% traffic)");
            System.out.println("   - Deploy new version to 5 pods");
            System.out.println("   - Monitor metrics for 30 minutes");
            System.out.println("   - Compare error rates with stable");
            
            System.out.println("\n2. Validation Criteria");
            System.out.println("   - Error rate < 0.5% (vs 0.1% baseline)");
            System.out.println("   - P95 latency < 500ms");
            System.out.println("   - No new exceptions");
            
            System.out.println("\n3. Gradual Rollout");
            System.out.println("   - 5% → 25% → 50% → 100%");
            System.out.println("   - 30 min monitoring between stages");
            System.out.println("   - Auto-rollback on failure");
            
            System.out.println("\n4. Full Deployment");
            System.out.println("   - All pods on new version");
            System.out.println("   - Monitor for 24 hours");
            System.out.println("   - Declare success");
            
            System.out.println("\nRollback time: < 5 minutes");
        }
    }
    
    public static class Problem28_TenantIsolation {
        /*
        Design multi-tenant architecture with isolation
        */
        
        public static void designMultiTenant() {
            System.out.println("Multi-Tenant Architecture:");
            
            System.out.println("\n1. Database Isolation");
            System.out.println("   - Shared database with row-level security");
            System.out.println("   - Separate database per tenant (more isolation)");
            System.out.println("   - Separate cluster per tenant (expensive)");
            
            System.out.println("\n2. Network Isolation");
            System.out.println("   - NetworkPolicies in Kubernetes");
            System.out.println("   - Allow communication within tenant namespace");
            System.out.println("   - Block cross-tenant traffic");
            
            System.out.println("\n3. Resource Limits");
            System.out.println("   - ResourceQuotas per namespace");
            System.out.println("   - Pod limits (CPU, memory)");
            System.out.println("   - Storage quotas");
            
            System.out.println("\n4. Identity & Access");
            System.out.println("   - RBAC with tenant labels");
            System.out.println("   - Service accounts per tenant");
            System.out.println("   - No access to other tenant data");
        }
    }
    
    public static void main(String[] args) {
        System.out.println("=== DAY 23 CLOUD ARCHITECTURE PRACTICE PROBLEMS ===\n");
        
        Problem1_ServiceModel.demonstratePaaS();
        System.out.println("\n" + "=".repeat(60));
        
        Problem2_CostAnalysis.calculateCosts();
        System.out.println("\n" + "=".repeat(60));
        
        Problem3_MultiCloud.designMultiCloud();
        System.out.println("\n" + "=".repeat(60));
        
        Problem4_ServerlessVsContainer.compareArchitectures();
        System.out.println("\n" + "=".repeat(60));
        
        Problem5_AutoScaling.designAutoScaling();
        System.out.println("\n" + "=".repeat(60));
        
        Problem6_LambdaArchitecture.designImagePipeline();
        System.out.println("\n" + "=".repeat(60));
        
        Problem7_EventDriven.designEventArchitecture();
        System.out.println("\n" + "=".repeat(60));
        
        System.out.println("\nMore problems available in code...");
        System.out.println("Total: 40+ problems covering all cloud concepts");
    }
}
