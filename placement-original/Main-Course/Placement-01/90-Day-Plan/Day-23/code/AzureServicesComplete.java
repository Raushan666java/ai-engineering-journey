package day23.azure;

import java.util.*;
import java.util.concurrent.*;

/**
 * MICROSOFT AZURE SERVICES (Day 23 - Part 5)
 * ==========================================
 * Complete Azure implementation covering Compute, Storage, Databases, and Messaging.
 * 45+ implementations covering Azure ecosystem
 */

public class AzureServicesComplete {

    // ============= VIRTUAL MACHINES =============
    static class AzureVM {
        String vmId;
        String name;
        String resourceGroup;
        String vmSize; // Standard_D2s_v3, Standard_B1s, etc.
        String status; // VM running, VM deallocated, VM generalized
        String osType; // Windows, Linux
        String provisioningState;
        String publicIP;
        
        AzureVM(String name, String resourceGroup, String vmSize) {
            this.vmId = UUID.randomUUID().toString();
            this.name = name;
            this.resourceGroup = resourceGroup;
            this.vmSize = vmSize;
            this.status = "VM deallocated";
            this.provisioningState = "Creating";
        }
        
        public void start() {
            this.status = "VM running";
            this.publicIP = "20." + (int)(Math.random() * 255) + "." + (int)(Math.random() * 255) + "." + (int)(Math.random() * 255);
        }
        
        public void deallocate() {
            this.status = "VM deallocated";
            this.publicIP = null;
        }
    }
    
    static class ComputeService {
        Map<String, AzureVM> vms = new ConcurrentHashMap<>();
        
        public AzureVM createVM(String name, String resourceGroup, String vmSize) {
            AzureVM vm = new AzureVM(name, resourceGroup, vmSize);
            vm.start();
            vms.put(name, vm);
            System.out.println("Created VM: " + name + " (" + vmSize + ") in " + resourceGroup);
            System.out.println("Public IP: " + vm.publicIP);
            return vm;
        }
        
        public void deleteVM(String name) {
            vms.remove(name);
            System.out.println("Deleted VM: " + name);
        }
        
        public AzureVM getVM(String name) {
            return vms.get(name);
        }
    }

    // ============= BLOB STORAGE =============
    static class BlobObject {
        String blobName;
        String container;
        long size;
        String blobType; // BlockBlob, PageBlob, AppendBlob
        String tier; // Hot, Cool, Archive
        long createdTime;
        String etag;
        
        BlobObject(String blobName, String container) {
            this.blobName = blobName;
            this.container = container;
            this.size = (long)(Math.random() * 5000000000L);
            this.blobType = "BlockBlob";
            this.tier = "Hot";
            this.createdTime = System.currentTimeMillis();
            this.etag = UUID.randomUUID().toString();
        }
    }
    
    static class BlobContainer {
        String name;
        String storageAccountName;
        Map<String, BlobObject> blobs = new ConcurrentHashMap<>();
        
        BlobContainer(String name, String storageAccount) {
            this.name = name;
            this.storageAccountName = storageAccount;
        }
        
        public void uploadBlob(BlobObject blob) {
            blobs.put(blob.blobName, blob);
        }
        
        public BlobObject getBlob(String blobName) {
            return blobs.get(blobName);
        }
    }
    
    static class StorageAccount {
        String name;
        String resourceGroup;
        String kind; // StorageV2, BlobStorage
        String replication; // LRS, GRS, RA-GRS, ZRS
        Map<String, BlobContainer> containers = new ConcurrentHashMap<>();
        
        StorageAccount(String name, String resourceGroup) {
            this.name = name;
            this.resourceGroup = resourceGroup;
            this.kind = "StorageV2";
            this.replication = "GRS";
        }
        
        public BlobContainer createContainer(String name) {
            BlobContainer container = new BlobContainer(name, this.name);
            containers.put(name, container);
            return container;
        }
    }
    
    static class BlobStorageService {
        Map<String, StorageAccount> storageAccounts = new ConcurrentHashMap<>();
        
        public StorageAccount createStorageAccount(String name, String resourceGroup) {
            StorageAccount account = new StorageAccount(name, resourceGroup);
            storageAccounts.put(name, account);
            System.out.println("Created storage account: " + name);
            return account;
        }
        
        public void uploadBlob(String storageAccount, String container, String blobName) {
            StorageAccount account = storageAccounts.get(storageAccount);
            if (account != null) {
                BlobContainer cont = account.containers.get(container);
                if (cont != null) {
                    BlobObject blob = new BlobObject(blobName, container);
                    cont.uploadBlob(blob);
                    System.out.println("Uploaded blob: " + blobName + " to " + container);
                }
            }
        }
    }

    // ============= COSMOS DB =============
    static class CosmosDBDocument {
        String id;
        String partitionKey;
        Map<String, Object> properties = new HashMap<>();
        long ttl; // Time to live in seconds
        
        CosmosDBDocument(String id, String partitionKey) {
            this.id = id;
            this.partitionKey = partitionKey;
            this.ttl = -1; // No expiration
        }
    }
    
    static class CosmosDBContainer {
        String name;
        String database;
        String partitionKeyPath;
        int throughput; // RU/s
        Map<String, CosmosDBDocument> documents = new ConcurrentHashMap<>();
        
        CosmosDBContainer(String name, String database) {
            this.name = name;
            this.database = database;
            this.throughput = 400;
        }
        
        public void createDocument(CosmosDBDocument doc) {
            documents.put(doc.id, doc);
        }
    }
    
    static class CosmosDBDatabase {
        String name;
        Map<String, CosmosDBContainer> containers = new ConcurrentHashMap<>();
        
        CosmosDBDatabase(String name) {
            this.name = name;
        }
        
        public CosmosDBContainer createContainer(String name) {
            CosmosDBContainer container = new CosmosDBContainer(name, this.name);
            containers.put(name, container);
            return container;
        }
    }
    
    static class CosmosDBService {
        Map<String, CosmosDBDatabase> databases = new ConcurrentHashMap<>();
        
        public CosmosDBDatabase createDatabase(String name) {
            CosmosDBDatabase db = new CosmosDBDatabase(name);
            databases.put(name, db);
            System.out.println("Created Cosmos DB database: " + name);
            return db;
        }
        
        public void createDocument(String database, String container, CosmosDBDocument doc) {
            CosmosDBDatabase db = databases.get(database);
            if (db != null) {
                CosmosDBContainer cont = db.containers.get(container);
                if (cont != null) {
                    cont.createDocument(doc);
                    System.out.println("Created document: " + doc.id + " in " + container);
                }
            }
        }
    }

    // ============= SERVICE BUS =============
    static class ServiceBusMessage {
        String messageId;
        byte[] body;
        Map<String, String> properties;
        long enqueuedTime;
        
        ServiceBusMessage(byte[] body) {
            this.messageId = UUID.randomUUID().toString();
            this.body = body;
            this.properties = new HashMap<>();
            this.enqueuedTime = System.currentTimeMillis();
        }
    }
    
    static class ServiceBusQueue {
        String name;
        int maxDeliveryCount;
        List<ServiceBusMessage> messages = new CopyOnWriteArrayList<>();
        long lockDuration;
        
        ServiceBusQueue(String name) {
            this.name = name;
            this.maxDeliveryCount = 10;
            this.lockDuration = 60000; // 60 seconds
        }
        
        public void sendMessage(ServiceBusMessage msg) {
            messages.add(msg);
        }
        
        public ServiceBusMessage receiveMessage() {
            if (!messages.isEmpty()) {
                return messages.remove(0);
            }
            return null;
        }
    }
    
    static class ServiceBusTopic {
        String name;
        List<ServiceBusSubscription> subscriptions = new CopyOnWriteArrayList<>();
        
        ServiceBusTopic(String name) {
            this.name = name;
        }
        
        public void publishMessage(ServiceBusMessage msg) {
            subscriptions.forEach(sub -> sub.messages.add(msg));
        }
    }
    
    static class ServiceBusSubscription {
        String name;
        String topicName;
        List<ServiceBusMessage> messages = new CopyOnWriteArrayList<>();
        
        ServiceBusSubscription(String name, String topicName) {
            this.name = name;
            this.topicName = topicName;
        }
    }
    
    static class ServiceBusService {
        Map<String, ServiceBusQueue> queues = new ConcurrentHashMap<>();
        Map<String, ServiceBusTopic> topics = new ConcurrentHashMap<>();
        Map<String, ServiceBusSubscription> subscriptions = new ConcurrentHashMap<>();
        
        public ServiceBusQueue createQueue(String name) {
            ServiceBusQueue queue = new ServiceBusQueue(name);
            queues.put(name, queue);
            System.out.println("Created Service Bus queue: " + name);
            return queue;
        }
        
        public ServiceBusTopic createTopic(String name) {
            ServiceBusTopic topic = new ServiceBusTopic(name);
            topics.put(name, topic);
            System.out.println("Created Service Bus topic: " + name);
            return topic;
        }
        
        public ServiceBusSubscription createSubscription(String name, String topicName) {
            ServiceBusSubscription sub = new ServiceBusSubscription(name, topicName);
            subscriptions.put(name, sub);
            ServiceBusTopic topic = topics.get(topicName);
            if (topic != null) {
                topic.subscriptions.add(sub);
                System.out.println("Created subscription: " + name + " to " + topicName);
            }
            return sub;
        }
    }

    // ============= EVENT HUBS =============
    static class EventHubEvent {
        String eventId;
        byte[] body;
        Map<String, String> properties;
        String partitionKey;
        long enqueuedTime;
        
        EventHubEvent(byte[] body, String partitionKey) {
            this.eventId = UUID.randomUUID().toString();
            this.body = body;
            this.partitionKey = partitionKey;
            this.properties = new HashMap<>();
            this.enqueuedTime = System.currentTimeMillis();
        }
    }
    
    static class EventHubPartition {
        int partitionId;
        long offset;
        List<EventHubEvent> events = new CopyOnWriteArrayList<>();
        
        EventHubPartition(int id) {
            this.partitionId = id;
            this.offset = 0;
        }
    }
    
    static class EventHub {
        String name;
        int partitionCount;
        Map<Integer, EventHubPartition> partitions = new ConcurrentHashMap<>();
        
        EventHub(String name, int partitionCount) {
            this.name = name;
            this.partitionCount = partitionCount;
            for (int i = 0; i < partitionCount; i++) {
                partitions.put(i, new EventHubPartition(i));
            }
        }
        
        public void sendEvent(EventHubEvent event) {
            int partitionId = Math.abs(event.partitionKey.hashCode()) % partitionCount;
            partitions.get(partitionId).events.add(event);
        }
    }
    
    static class EventHubsService {
        Map<String, EventHub> eventHubs = new ConcurrentHashMap<>();
        
        public EventHub createEventHub(String name, int partitions) {
            EventHub hub = new EventHub(name, partitions);
            eventHubs.put(name, hub);
            System.out.println("Created Event Hub: " + name + " with " + partitions + " partitions");
            return hub;
        }
        
        public void sendEvent(String hubName, byte[] body, String partitionKey) {
            EventHub hub = eventHubs.get(hubName);
            if (hub != null) {
                EventHubEvent event = new EventHubEvent(body, partitionKey);
                hub.sendEvent(event);
                System.out.println("Sent event to: " + hubName);
            }
        }
    }

    // ============= AZURE FUNCTIONS =============
    static class AzureFunction {
        String name;
        String runtime; // python, dotnet, java, node
        String trigger; // HttpTrigger, TimerTrigger, QueueTrigger
        String status; // Creating, Deleting, Running
        
        AzureFunction(String name, String runtime, String trigger) {
            this.name = name;
            this.runtime = runtime;
            this.trigger = trigger;
            this.status = "Creating";
        }
        
        public Object invoke(Object input) {
            return "Function result from: " + name;
        }
    }
    
    static class AzureFunctionsService {
        Map<String, AzureFunction> functions = new ConcurrentHashMap<>();
        
        public AzureFunction createFunction(String name, String runtime, String trigger) {
            AzureFunction func = new AzureFunction(name, runtime, trigger);
            functions.put(name, func);
            new Thread(() -> {
                try {
                    Thread.sleep(1500);
                    func.status = "Running";
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }).start();
            System.out.println("Creating Azure Function: " + name + " (" + runtime + ", " + trigger + ")");
            return func;
        }
        
        public Object invokeFunction(String name, Object input) {
            AzureFunction func = functions.get(name);
            if (func != null && func.status.equals("Running")) {
                return func.invoke(input);
            }
            return null;
        }
    }

    // ============= SQL DATABASE =============
    static class AzureSQLDatabase {
        String name;
        String serverName;
        String collation;
        String status; // Online, Creating, Deleting
        long maxSizeBytes;
        String tier; // Basic, Standard, Premium
        
        AzureSQLDatabase(String name, String serverName) {
            this.name = name;
            this.serverName = serverName;
            this.collation = "SQL_Latin1_General_CP1_CI_AS";
            this.status = "Online";
            this.maxSizeBytes = 2 * 1024 * 1024 * 1024; // 2GB
            this.tier = "Standard";
        }
    }
    
    static class AzureSQLServer {
        String name;
        String resourceGroup;
        String location;
        String administratorLogin;
        Map<String, AzureSQLDatabase> databases = new ConcurrentHashMap<>();
        
        AzureSQLServer(String name, String resourceGroup, String location) {
            this.name = name;
            this.resourceGroup = resourceGroup;
            this.location = location;
        }
        
        public AzureSQLDatabase createDatabase(String name) {
            AzureSQLDatabase db = new AzureSQLDatabase(name, this.name);
            databases.put(name, db);
            return db;
        }
    }
    
    static class SQLService {
        Map<String, AzureSQLServer> servers = new ConcurrentHashMap<>();
        
        public AzureSQLServer createServer(String name, String resourceGroup, String location) {
            AzureSQLServer server = new AzureSQLServer(name, resourceGroup, location);
            servers.put(name, server);
            System.out.println("Created SQL Server: " + name + " in " + location);
            return server;
        }
        
        public void createDatabase(String serverName, String dbName) {
            AzureSQLServer server = servers.get(serverName);
            if (server != null) {
                AzureSQLDatabase db = server.createDatabase(dbName);
                System.out.println("Created database: " + dbName + " on " + serverName);
            }
        }
    }

    // ============= AZURE APP SERVICE =============
    static class AppServicePlan {
        String name;
        String sku; // Free, Shared, Basic, Standard, Premium
        int numberOfWorkers;
        
        AppServicePlan(String name, String sku) {
            this.name = name;
            this.sku = sku;
            this.numberOfWorkers = 1;
        }
    }
    
    static class WebApp {
        String name;
        String appServicePlan;
        String runtime; // node, dotnet, python, java
        String state; // Running, Stopped
        String hostName;
        
        WebApp(String name, String appServicePlan) {
            this.name = name;
            this.appServicePlan = appServicePlan;
            this.state = "Running";
            this.hostName = name + ".azurewebsites.net";
        }
    }
    
    static class AppServiceService {
        Map<String, AppServicePlan> appServicePlans = new ConcurrentHashMap<>();
        Map<String, WebApp> webApps = new ConcurrentHashMap<>();
        
        public AppServicePlan createAppServicePlan(String name, String sku) {
            AppServicePlan plan = new AppServicePlan(name, sku);
            appServicePlans.put(name, plan);
            System.out.println("Created App Service Plan: " + name + " (" + sku + ")");
            return plan;
        }
        
        public WebApp createWebApp(String name, String appServicePlan, String runtime) {
            WebApp app = new WebApp(name, appServicePlan);
            app.runtime = runtime;
            webApps.put(name, app);
            System.out.println("Created Web App: " + name);
            System.out.println("URL: https://" + app.hostName);
            return app;
        }
    }

    // ============= AZURE MONITOR =============
    static class MetricAlert {
        String name;
        String metricName;
        String operator; // >, <, >=, <=, =
        double threshold;
        String state;
        
        MetricAlert(String name, String metricName) {
            this.name = name;
            this.metricName = metricName;
            this.state = "Enabled";
        }
    }
    
    static class AzureMonitorService {
        List<MetricAlert> alerts = new CopyOnWriteArrayList<>();
        
        public void createAlert(String name, String metricName, String operator, double threshold) {
            MetricAlert alert = new MetricAlert(name, metricName);
            alert.operator = operator;
            alert.threshold = threshold;
            alerts.add(alert);
            System.out.println("Created alert: " + name + " on " + metricName);
        }
        
        public void logMetric(String metricName, double value) {
            System.out.println("Logged metric: " + metricName + " = " + value);
        }
    }

    public static void main(String[] args) {
        System.out.println("=== MICROSOFT AZURE SERVICES ===\n");
        
        // Virtual Machines
        System.out.println("1. Virtual Machines:");
        ComputeService compute = new ComputeService();
        AzureVM vm = compute.createVM("web-server", "myResourceGroup", "Standard_D2s_v3");
        
        // Blob Storage
        System.out.println("\n2. Blob Storage:");
        BlobStorageService storage = new BlobStorageService();
        StorageAccount account = storage.createStorageAccount("mystorageacct", "myResourceGroup");
        BlobContainer container = account.createContainer("documents");
        storage.uploadBlob("mystorageacct", "documents", "report.pdf");
        
        // Cosmos DB
        System.out.println("\n3. Cosmos DB:");
        CosmosDBService cosmosdb = new CosmosDBService();
        CosmosDBDatabase db = cosmosdb.createDatabase("mydb");
        CosmosDBContainer container2 = db.createContainer("users");
        CosmosDBDocument doc = new CosmosDBDocument("user1", "user");
        doc.properties.put("name", "Alice");
        cosmosdb.createDocument("mydb", "users", doc);
        
        // Service Bus
        System.out.println("\n4. Service Bus:");
        ServiceBusService serviceBus = new ServiceBusService();
        ServiceBusQueue queue = serviceBus.createQueue("orders");
        ServiceBusMessage msg = new ServiceBusMessage("New order".getBytes());
        queue.sendMessage(msg);
        
        // Event Hubs
        System.out.println("\n5. Event Hubs:");
        EventHubsService eventHubs = new EventHubsService();
        EventHub hub = eventHubs.createEventHub("telemetry", 4);
        eventHubs.sendEvent("telemetry", "sensor data".getBytes(), "device1");
        
        // Azure Functions
        System.out.println("\n6. Azure Functions:");
        AzureFunctionsService functions = new AzureFunctionsService();
        AzureFunction func = functions.createFunction("process-data", "python", "HttpTrigger");
        
        // SQL Database
        System.out.println("\n7. SQL Database:");
        SQLService sql = new SQLService();
        AzureSQLServer server = sql.createServer("myserver", "myResourceGroup", "eastus");
        sql.createDatabase("myserver", "mydb");
        
        // App Service
        System.out.println("\n8. App Service:");
        AppServiceService appService = new AppServiceService();
        AppServicePlan plan = appService.createAppServicePlan("myPlan", "Standard");
        WebApp app = appService.createWebApp("myapp", "myPlan", "node");
        
        // Azure Monitor
        System.out.println("\n9. Azure Monitor:");
        AzureMonitorService monitor = new AzureMonitorService();
        monitor.createAlert("High CPU", "cpu_percentage", ">", 80);
        monitor.logMetric("cpu_percentage", 65.5);
        
        System.out.println("\n=== AZURE SERVICES COMPLETE ===");
    }
}
