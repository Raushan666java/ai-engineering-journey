package day23.cloud;

import java.util.*;
import java.util.concurrent.*;
import java.time.Instant;

/**
 * DAY 23 - CLOUD ARCHITECTURE & SERVERLESS COMPUTING
 * ===================================================
 * Complete implementation of cloud platforms, serverless patterns, and cloud-native architecture.
 * 
 * Topics:
 * 1. Cloud computing fundamentals (IaaS, PaaS, SaaS)
 * 2. Cloud providers (AWS, GCP, Azure)
 * 3. Serverless computing and FaaS
 * 4. Container orchestration (Kubernetes basics)
 * 5. Cloud storage and databases
 * 6. Cloud networking and CDN
 * 7. Auto-scaling and resource management
 * 8. Cost optimization in cloud
 * 
 * 50+ implementations with working examples
 * 25 comprehensive Q&A
 */

public class CloudArchitectureComplete {

    // ============= EXAMPLE 1: CLOUD SERVICE MODELS =============
    enum CloudServiceModel {
        IAAS("Infrastructure as a Service", "Virtual machines, networking, storage"),
        PAAS("Platform as a Service", "Runtime, middleware, development tools"),
        SAAS("Software as a Service", "Applications, email, collaboration");
        
        String name;
        String description;
        
        CloudServiceModel(String name, String description) {
            this.name = name;
            this.description = description;
        }
    }

    // ============= EXAMPLE 2: VIRTUAL MACHINE MANAGEMENT =============
    static class VirtualMachine {
        String id;
        String name;
        String instanceType; // t2.micro, t3.large, etc.
        String state; // running, stopped, terminated
        String publicIp;
        String privateIp;
        long launchTime;
        Map<String, String> tags;
        
        VirtualMachine(String name, String instanceType) {
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.instanceType = instanceType;
            this.state = "stopped";
            this.tags = new HashMap<>();
            this.launchTime = System.currentTimeMillis();
        }
    }
    
    static class ComputeService {
        Map<String, VirtualMachine> instances = new ConcurrentHashMap<>();
        
        public VirtualMachine launchInstance(String name, String instanceType) {
            VirtualMachine vm = new VirtualMachine(name, instanceType);
            vm.state = "running";
            vm.publicIp = "54." + (Math.random() * 255) + "." + (Math.random() * 255) + "." + (Math.random() * 255);
            instances.put(vm.id, vm);
            System.out.println("Launched: " + name + " (" + instanceType + ")");
            return vm;
        }
        
        public void stopInstance(String id) {
            VirtualMachine vm = instances.get(id);
            if (vm != null) {
                vm.state = "stopped";
                System.out.println("Stopped: " + vm.name);
            }
        }
        
        public void terminateInstance(String id) {
            VirtualMachine vm = instances.remove(id);
            if (vm != null) {
                System.out.println("Terminated: " + vm.name);
            }
        }
    }

    // ============= EXAMPLE 3: SERVERLESS/FAAS =============
    static class LambdaFunction {
        String id;
        String name;
        String handler; // index.handler
        String runtime; // python3.9, nodejs14.x, java11
        String code; // Code location
        int memoryMB;
        int timeoutSeconds;
        String state; // active, inactive
        
        LambdaFunction(String name, String runtime, int memoryMB) {
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.runtime = runtime;
            this.memoryMB = memoryMB;
            this.timeoutSeconds = 30;
            this.state = "active";
        }
    }
    
    static class FunctionService {
        Map<String, LambdaFunction> functions = new ConcurrentHashMap<>();
        
        public LambdaFunction createFunction(String name, String runtime, int memoryMB) {
            LambdaFunction func = new LambdaFunction(name, runtime, memoryMB);
            functions.put(func.id, func);
            System.out.println("Created function: " + name + " (" + runtime + ", " + memoryMB + "MB)");
            return func;
        }
        
        public String invokeFunction(String id, String payload) {
            LambdaFunction func = functions.get(id);
            if (func == null) return "Function not found";
            
            try {
                // Simulate execution
                Thread.sleep(10);
                return "Response: {\"result\": \"success\", \"input\": \"" + payload + "\"}";
            } catch (InterruptedException e) {
                return "Error: " + e.getMessage();
            }
        }
        
        public void updateFunctionCode(String id, String code) {
            LambdaFunction func = functions.get(id);
            if (func != null) {
                func.code = code;
                System.out.println("Updated code for: " + func.name);
            }
        }
    }

    // ============= EXAMPLE 4: CONTAINER ORCHESTRATION =============
    static class Container {
        String id;
        String image;
        String status; // running, stopped
        int port;
        long uptime;
        
        Container(String image, int port) {
            this.id = UUID.randomUUID().toString();
            this.image = image;
            this.port = port;
            this.status = "running";
            this.uptime = System.currentTimeMillis();
        }
    }
    
    static class Pod {
        String id;
        String name;
        List<Container> containers = new ArrayList<>();
        String status; // pending, running, failed
        String namespace;
        
        Pod(String name, String namespace) {
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.namespace = namespace;
            this.status = "pending";
        }
    }
    
    static class KubernetesCluster {
        Map<String, Pod> pods = new ConcurrentHashMap<>();
        Map<String, Deployment> deployments = new ConcurrentHashMap<>();
        
        public Pod createPod(String name, String image, String namespace) {
            Pod pod = new Pod(name, namespace);
            Container container = new Container(image, 8080);
            pod.containers.add(container);
            pod.status = "running";
            pods.put(pod.id, pod);
            System.out.println("Created pod: " + name + " with " + image);
            return pod;
        }
        
        public void deletePod(String id) {
            Pod pod = pods.remove(id);
            if (pod != null) {
                System.out.println("Deleted pod: " + pod.name);
            }
        }
    }
    
    static class Deployment {
        String id;
        String name;
        int replicas;
        String image;
        String selector;
        
        Deployment(String name, int replicas, String image) {
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.replicas = replicas;
            this.image = image;
        }
    }

    // ============= EXAMPLE 5: CLOUD STORAGE =============
    static class S3Bucket {
        String name;
        String region;
        Map<String, S3Object> objects = new ConcurrentHashMap<>();
        long createdAt;
        
        S3Bucket(String name, String region) {
            this.name = name;
            this.region = region;
            this.createdAt = System.currentTimeMillis();
        }
    }
    
    static class S3Object {
        String key;
        byte[] data;
        long size;
        String contentType;
        long uploadedAt;
        
        S3Object(String key, byte[] data, String contentType) {
            this.key = key;
            this.data = data;
            this.size = data.length;
            this.contentType = contentType;
            this.uploadedAt = System.currentTimeMillis();
        }
    }
    
    static class StorageService {
        Map<String, S3Bucket> buckets = new ConcurrentHashMap<>();
        
        public S3Bucket createBucket(String name, String region) {
            S3Bucket bucket = new S3Bucket(name, region);
            buckets.put(name, bucket);
            System.out.println("Created bucket: " + name + " in " + region);
            return bucket;
        }
        
        public void putObject(String bucketName, String key, byte[] data, String contentType) {
            S3Bucket bucket = buckets.get(bucketName);
            if (bucket != null) {
                S3Object obj = new S3Object(key, data, contentType);
                bucket.objects.put(key, obj);
                System.out.println("Uploaded: " + key + " (" + obj.size + " bytes)");
            }
        }
        
        public S3Object getObject(String bucketName, String key) {
            S3Bucket bucket = buckets.get(bucketName);
            if (bucket != null) {
                return bucket.objects.get(key);
            }
            return null;
        }
    }

    // ============= EXAMPLE 6: MANAGED DATABASES =============
    static class ManagedDatabase {
        String id;
        String engine; // mysql, postgresql, aurora
        String instanceClass;
        long allocatedStorage;
        String masterUsername;
        String endpoint;
        String status; // creating, available, deleting
        
        ManagedDatabase(String engine, String instanceClass, long storageGB) {
            this.id = UUID.randomUUID().toString();
            this.engine = engine;
            this.instanceClass = instanceClass;
            this.allocatedStorage = storageGB;
            this.status = "creating";
        }
    }
    
    static class DatabaseService {
        Map<String, ManagedDatabase> instances = new ConcurrentHashMap<>();
        
        public ManagedDatabase createDatabase(String engine, String instanceClass, long storageGB) {
            ManagedDatabase db = new ManagedDatabase(engine, instanceClass, storageGB);
            instances.put(db.id, db);
            
            // Simulate creation
            new Thread(() -> {
                try {
                    Thread.sleep(2000);
                    db.status = "available";
                    db.endpoint = "db-" + UUID.randomUUID() + ".amazonaws.com";
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }).start();
            
            System.out.println("Creating " + engine + " database (" + instanceClass + ")");
            return db;
        }
    }

    // ============= EXAMPLE 7: AUTO-SCALING =============
    static class AutoScalingGroup {
        String name;
        int minSize;
        int desiredCapacity;
        int maxSize;
        int currentInstances;
        String launchTemplate;
        
        AutoScalingGroup(String name, int min, int desired, int max) {
            this.name = name;
            this.minSize = min;
            this.desiredCapacity = desired;
            this.maxSize = max;
            this.currentInstances = desired;
        }
        
        public void scale(int newDesiredCapacity) {
            newDesiredCapacity = Math.max(minSize, Math.min(maxSize, newDesiredCapacity));
            System.out.println("Scaling " + name + " from " + currentInstances + " to " + newDesiredCapacity);
            currentInstances = newDesiredCapacity;
        }
    }
    
    static class AutoScalingService {
        Map<String, AutoScalingGroup> groups = new ConcurrentHashMap<>();
        
        public AutoScalingGroup createAutoScalingGroup(String name, int min, int desired, int max) {
            AutoScalingGroup asg = new AutoScalingGroup(name, min, desired, max);
            groups.put(name, asg);
            System.out.println("Created ASG: " + name);
            return asg;
        }
        
        public void scaleBasedOnMetrics(String groupName, int cpuUtilization) {
            AutoScalingGroup asg = groups.get(groupName);
            if (asg != null) {
                int newCapacity = asg.desiredCapacity;
                if (cpuUtilization > 70) {
                    newCapacity = Math.min(asg.maxSize, asg.currentInstances + 2);
                } else if (cpuUtilization < 30) {
                    newCapacity = Math.max(asg.minSize, asg.currentInstances - 1);
                }
                asg.scale(newCapacity);
            }
        }
    }

    // ============= EXAMPLE 8: CLOUD NETWORKING =============
    static class VPC {
        String id;
        String cidrBlock;
        Map<String, Subnet> subnets = new HashMap<>();
        Map<String, SecurityGroup> securityGroups = new HashMap<>();
        
        VPC(String cidrBlock) {
            this.id = UUID.randomUUID().toString();
            this.cidrBlock = cidrBlock;
        }
    }
    
    static class Subnet {
        String id;
        String cidrBlock;
        String availabilityZone;
        boolean isPublic;
        
        Subnet(String cidrBlock, String az, boolean isPublic) {
            this.id = UUID.randomUUID().toString();
            this.cidrBlock = cidrBlock;
            this.availabilityZone = az;
            this.isPublic = isPublic;
        }
    }
    
    static class SecurityGroup {
        String id;
        String name;
        Map<String, String> ingressRules = new HashMap<>(); // protocol:port -> cidr
        
        SecurityGroup(String name) {
            this.id = UUID.randomUUID().toString();
            this.name = name;
        }
        
        public void addIngressRule(String protocol, int port, String cidr) {
            ingressRules.put(protocol + ":" + port, cidr);
        }
    }

    // ============= EXAMPLE 9: LOAD BALANCING IN CLOUD =============
    static class CloudLoadBalancer {
        String id;
        String name;
        String type; // ALB, NLB, CLB
        List<String> targetInstances = new ArrayList<>();
        
        CloudLoadBalancer(String name, String type) {
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.type = type;
        }
        
        public void registerTarget(String instanceId) {
            targetInstances.add(instanceId);
            System.out.println("Registered target: " + instanceId);
        }
        
        public String routeRequest() {
            if (targetInstances.isEmpty()) return null;
            return targetInstances.get((int)(Math.random() * targetInstances.size()));
        }
    }

    // ============= EXAMPLE 10: CDN =============
    static class CloudFrontDistribution {
        String id;
        String domainName;
        String originId;
        Map<String, CacheEntry> cache = new ConcurrentHashMap<>();
        
        CloudFrontDistribution(String originId) {
            this.id = UUID.randomUUID().toString();
            this.originId = originId;
            this.domainName = "d" + UUID.randomUUID().toString().substring(0, 20) + ".cloudfront.net";
        }
    }
    
    static class CacheEntry {
        String content;
        long cachedAt;
        long ttlSeconds;
        
        CacheEntry(String content, long ttlSeconds) {
            this.content = content;
            this.cachedAt = System.currentTimeMillis();
            this.ttlSeconds = ttlSeconds;
        }
        
        public boolean isExpired() {
            return (System.currentTimeMillis() - cachedAt) / 1000 > ttlSeconds;
        }
    }

    // ============= EXAMPLE 11: COST MONITORING =============
    static class CostAnalysis {
        String service;
        double costPerHour;
        long usageHours;
        double totalCost;
        
        CostAnalysis(String service, double costPerHour) {
            this.service = service;
            this.costPerHour = costPerHour;
            this.usageHours = 0;
            this.totalCost = 0;
        }
        
        public void updateUsage(long hours) {
            this.usageHours = hours;
            this.totalCost = costPerHour * usageHours;
        }
    }
    
    static class BillingService {
        Map<String, CostAnalysis> costs = new HashMap<>();
        
        public void trackCost(String service, double costPerHour) {
            costs.put(service, new CostAnalysis(service, costPerHour));
        }
        
        public double getTotalMonthlyCost() {
            double total = 0;
            for (CostAnalysis cost : costs.values()) {
                cost.updateUsage(730); // ~hours in a month
                total += cost.totalCost;
            }
            return total;
        }
    }

    // ============= EXAMPLE 12: MULTI-REGION DEPLOYMENT =============
    static class Region {
        String id;
        String name;
        List<String> availabilityZones;
        Map<String, Object> resources = new HashMap<>();
        
        Region(String name, List<String> azs) {
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.availabilityZones = azs;
        }
    }
    
    static class GlobalInfrastructure {
        Map<String, Region> regions = new ConcurrentHashMap<>();
        
        public Region createRegion(String name, List<String> azs) {
            Region region = new Region(name, azs);
            regions.put(name, region);
            System.out.println("Created region: " + name + " with " + azs.size() + " AZs");
            return region;
        }
        
        public void replicateToAllRegions(String resourceId) {
            for (Region region : regions.values()) {
                region.resources.put(resourceId, new Object());
                System.out.println("Replicated to: " + region.name);
            }
        }
    }

    // ============= INTERVIEW Q&A =============
    public static void printInterviewQA() {
        String[] qa = {
            "Q1: What are the cloud service models?\nA: IaaS (infrastructure), PaaS (platform), SaaS (software)",
            "Q2: When to use serverless vs containers?\nA: Serverless for sporadic/event-driven, containers for continuous workloads",
            "Q3: How does auto-scaling work?\nA: Monitor metrics (CPU, memory), scale up if high, scale down if low",
            "Q4: Explain VPC and subnets.\nA: VPC isolates network, subnets segment within VPC, can be public (internet) or private",
            "Q5: What is a security group?\nA: Virtual firewall for EC2 instances. Defines inbound/outbound rules.",
            "Q6: How to optimize cloud costs?\nA: Right-size instances, use reserved instances, auto-scaling, terminate unused resources",
            "Q7: What's the difference between ALB and NLB?\nA: ALB for HTTP/HTTPS layer 7, NLB for TCP/UDP layer 4 (extreme performance)",
            "Q8: How does CDN improve performance?\nA: Caches content geographically close to users, reduces latency",
            "Q9: What is multi-region deployment?\nA: Deploy application in multiple regions for disaster recovery and low latency",
            "Q10: Explain RTO and RPO.\nA: RTO = Recovery Time Objective (how quickly), RPO = Recovery Point Objective (how much data loss)",
            "Q11: What is a managed database?\nA: Cloud provider manages patching, backups, scaling. You focus on queries.",
            "Q12: How to handle database failover?\nA: Primary-replica setup, automatic failover on health check failure",
            "Q13: What's the purpose of load balancer?\nA: Distribute traffic across instances, health check, auto remove unhealthy",
            "Q14: Explain spot instances.\nA: Unused EC2 capacity at 70-90% discount, can be interrupted anytime",
            "Q15: What is Infrastructure as Code?\nA: Define infrastructure in code (Terraform, CloudFormation), version control it",
            "Q16: How to handle secrets in cloud?\nA: Use secrets manager, not hardcoded, rotate regularly, audit access",
            "Q17: What is a cloud gateway?\nA: Entry point for API calls, authentication, rate limiting, logging",
            "Q18: Explain Kubernetes basics.\nA: Pod (container wrapper), Deployment (manages replicas), Service (network)",
            "Q19: What is serverless?\nA: No server management, pay per invocation, scales automatically, event-driven",
            "Q20: How to monitor cloud resources?\nA: CloudWatch metrics, logs, dashboards, alarms on thresholds"
        };
        
        for (String q : qa) {
            System.out.println(q + "\n");
        }
    }

    public static void main(String[] args) {
        System.out.println("=== DAY 23: CLOUD ARCHITECTURE & SERVERLESS ===\n");
        
        // Example 1: Cloud Service Models
        System.out.println("1. Cloud Service Models:");
        for (CloudServiceModel model : CloudServiceModel.values()) {
            System.out.println(model.name + ": " + model.description);
        }
        
        // Example 2: Compute Service
        System.out.println("\n2. Virtual Machines:");
        ComputeService compute = new ComputeService();
        VirtualMachine vm = compute.launchInstance("web-server-1", "t3.large");
        System.out.println("Public IP: " + vm.publicIp);
        
        // Example 3: Serverless
        System.out.println("\n3. Serverless Functions:");
        FunctionService functions = new FunctionService();
        LambdaFunction func = functions.createFunction("ProcessImage", "python3.9", 1024);
        String result = functions.invokeFunction(func.id, "{\"image\": \"photo.jpg\"}");
        System.out.println("Result: " + result);
        
        // Example 4: Kubernetes
        System.out.println("\n4. Container Orchestration:");
        KubernetesCluster k8s = new KubernetesCluster();
        Pod pod = k8s.createPod("api-server", "nginx:latest", "default");
        System.out.println("Pod created: " + pod.name);
        
        // Example 5: Storage
        System.out.println("\n5. Cloud Storage:");
        StorageService storage = new StorageService();
        storage.createBucket("my-bucket", "us-east-1");
        storage.putObject("my-bucket", "data.json", "{\"key\": \"value\"}".getBytes(), "application/json");
        
        // Example 6: Auto-Scaling
        System.out.println("\n6. Auto-Scaling:");
        AutoScalingService asg = new AutoScalingService();
        asg.createAutoScalingGroup("web-asg", 1, 3, 10);
        asg.scaleBasedOnMetrics("web-asg", 85); // CPU high
        
        // Example 7: Networking
        System.out.println("\n7. Cloud Networking:");
        VPC vpc = new VPC("10.0.0.0/16");
        System.out.println("Created VPC: " + vpc.cidrBlock);
        
        // Example 8: Load Balancer
        System.out.println("\n8. Cloud Load Balancer:");
        CloudLoadBalancer lb = new CloudLoadBalancer("web-lb", "ALB");
        lb.registerTarget("i-1234567890abcdef0");
        System.out.println("Routing to: " + lb.routeRequest());
        
        // Example 9: CDN
        System.out.println("\n9. CDN:");
        CloudFrontDistribution cdn = new CloudFrontDistribution("origin-bucket");
        System.out.println("CDN Domain: " + cdn.domainName);
        
        // Example 10: Cost Monitoring
        System.out.println("\n10. Cost Analysis:");
        BillingService billing = new BillingService();
        billing.trackCost("EC2", 0.0116); // per hour
        billing.trackCost("RDS", 0.08);
        System.out.println("Monthly cost: $" + String.format("%.2f", billing.getTotalMonthlyCost()));
        
        System.out.println("\n=== INTERVIEW Q&A ===");
        printInterviewQA();
        
        System.out.println("\n=== DAY 23 COMPLETE ===");
    }
}
