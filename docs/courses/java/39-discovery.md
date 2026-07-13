# Service Discovery & Load Balancing
> **Previous:** [Microservices Principles](38-microservices-principles.md) | **Next:** [API Gateway](40-gateway.md)

## Learning Objectives

By the end of this chapter, you will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/39-discovery/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/hero.svg" alt="Chapter Banner: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/handwritten-notes.svg" alt="Handwritten Notes: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/sticky-notes.svg" alt="Sticky Notes: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/visual-explanation.svg" alt="Visual Explanation: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/architecture.svg" alt="Architecture: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/workflow.svg" alt="Workflow: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/mindmap.svg" alt="Mind Map: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/comparison.svg" alt="Comparison: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/cheatsheet.svg" alt="Cheat Sheet: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/interview-quiz.svg" alt="Quiz Card: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/39-discovery/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/39-discovery/social-card.svg" alt="Social Card: Service Discovery & Load Balancing" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Set up a Netflix Eureka server for service registration and discovery
- Configure microservices as Eureka clients for automatic registration
- Use EurekaClient API for programmatic service discovery
- Understand instance metadata, health checks, and self-preservation
- Configure Spring Cloud LoadBalancer with RoundRobin, Random, and custom strategies
- Use @LoadBalanced RestTemplate and WebClient.Builder for load-balanced calls
- Distinguish between client-side and server-side load balancing
- Implement self-registration and third-party registration patterns

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Service Discovery → locate service instances dynamically | Client-side vs server-side discovery patterns |
| Eureka → Netflix OSS service registry | `@EnableEurekaServer` for registry; `@EnableEurekaClient` for registration |
| Health Checks → detect unhealthy instances | Eureka heartbeat mechanism; custom health indicators |

---
## Chapter Roadmap

```mermaid
flowchart TD
    A[Service Discovery] --> B[Discovery Patterns]
    A --> C[Eureka]
    A --> D[Health Checks]
    B --> B1[Client-side discovery]
    B --> B2[Server-side discovery]
    C --> C1[Eureka Server]
    C --> C2[Eureka Client]
    C --> C3[Self-preservation]
    D --> D1[Heartbeat / Renew]
    D --> D2[HealthIndicator]
```

---
## Concept Comparison Table

| Concept | Description | Key Difference |
|---------|-------------|----------------|
| Eureka | Client-side discovery (REST) | AP in CAP theorem → prioritizes availability |
| Consul | Client-side + server-side (DNS/HTTP) | CP → prioritizes consistency with Raft |
| ZooKeeper | Server-side discovery | CP → strong consistency for distributed coordination |
| Kubernetes DNS | Server-side via DNS SRV records | Native to K8s, no extra infra needed |

---
## Quick Reference

| Element | Purpose | Example |
|---------|---------|---------|
| `@EnableEurekaServer` | Turns app into Eureka registry | Single or clustered deployment |
| `@EnableEurekaClient` | Registers service with Eureka | `spring.application.name` used as service ID |
| `DiscoveryClient` | Programmatic service lookup | `discoveryClient.getInstances("order-service")` |
| `eureka.client.serviceUrl.defaultZone` | Eureka server URL | `http://localhost:8761/eureka/` |

---
## Cross-Application Matrix

| Domain | Application | Use Case |
|--------|-------------|----------|
| E-Commerce | Eureka + Feign | Order service discovers inventory service by name |
| Cloud Native | Kubernetes DNS | Services resolve via `<service>.<namespace>.svc.cluster.local` |
| Multi-Datacenter | Eureka replication | Cross-region failover with Eureka peer awareness |

---
## Chapter Quiz

1. What is the difference between client-side and server-side discovery? **Answer:** Client-side: the client queries the registry directly. Server-side: a load balancer queries the registry for the client.
2. Which Eureka CAP property does it prioritize? **Answer:** AP (Availability and Partition tolerance), not consistency
3. How does Eureka detect unhealthy instances? **Answer:** Heartbeat → instances send renew requests every 30 seconds; 3 missed = evicted

## Theory

![Service Discovery & Load Balancing - Eureka Architecture](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/39-discovery.png)

### Service Discovery Patterns

<a href="../../../assets/images/diagrams/java/39-discovery/service-discovery-patterns-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/service-discovery-patterns-handwritten.svg" alt="Handwritten: Service Discovery Patterns" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/39-discovery/service-discovery-patterns-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/service-discovery-patterns-diagram.svg" alt="Diagram: Service Discovery Patterns" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/39-discovery/service-discovery-patterns-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/service-discovery-patterns-sticky.svg" alt="Sticky Note: Service Discovery Patterns" width="30%">
</a>


In a microservices architecture, services need to find each other at runtime. Service discovery solves the problem of locating service instances whose network addresses change dynamically due to auto-scaling, failures, or deployments.

**Client-Side Discovery**: The client queries a service registry to get available instances and uses a load balancer to select one. Spring Cloud Netflix Eureka implements this pattern.

**Server-Side Discovery**: The client sends requests to a load balancer (e.g., AWS ALB, Kubernetes Service), which forwards to available instances. The client does not query the registry directly.

### Netflix Eureka

<a href="../../../assets/images/diagrams/java/39-discovery/netflix-eureka-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/netflix-eureka-handwritten.svg" alt="Handwritten: Netflix Eureka" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/39-discovery/netflix-eureka-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/netflix-eureka-diagram.svg" alt="Diagram: Netflix Eureka" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/39-discovery/netflix-eureka-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/netflix-eureka-sticky.svg" alt="Sticky Note: Netflix Eureka" width="30%">
</a>


Eureka consists of two components:

- **Eureka Server**: The registry where services register and from which clients discover instances
- **Eureka Client**: A library that handles registration, heartbeats, and instance lookup

**Key Concepts:**

- **Self-Preservation**: Eureka stops evicting instances during network partitions to protect against false removals
- **Peer Awareness**: Multiple Eureka servers replicate registration data for high availability
- **Instance Metadata**: Custom key-value pairs associated with each registered instance
- **Health Checks**: Eureka clients send heartbeats; the server evicts instances that miss renewals

### Spring Cloud LoadBalancer

<a href="../../../assets/images/diagrams/java/39-discovery/spring-cloud-loadbalancer-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/spring-cloud-loadbalancer-handwritten.svg" alt="Handwritten: Spring Cloud LoadBalancer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/39-discovery/spring-cloud-loadbalancer-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/spring-cloud-loadbalancer-diagram.svg" alt="Diagram: Spring Cloud LoadBalancer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/39-discovery/spring-cloud-loadbalancer-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/39-discovery/spring-cloud-loadbalancer-sticky.svg" alt="Sticky Note: Spring Cloud LoadBalancer" width="30%">
</a>


Spring Cloud LoadBalancer is the replacement for Netflix Ribbon. It provides:

- **ReactorLoadBalancer**: Reactive foundation for load-balancing algorithms
- **RoundRobinLoadBalancer**: Distributes requests sequentially across instances
- **RandomLoadBalancer**: Selects instances randomly
- Custom load balancers via `ReactorServiceInstanceLoadBalancer`

> [!TIP]
> Use Feign client with Eureka → Feign automatically resolves service names to instances via the registry.

> [!WARNING]
> Eureka self-preservation mode prevents mass eviction during network partitions. In development, disable it with `eureka.server.enableSelfPreservation=false`.

> [!NOTE]
> Replace Eureka default health check with Spring Actuator health endpoint for richer instance health reporting.

## Complete Code Examples

### Eureka Server

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>

    <groupId>com.course.discovery</groupId>
    <artifactId>eureka-server</artifactId>
    <version>1.0.0</version>
    <name>eureka-server</name>
    <description>Eureka Service Registry</description>

    <properties>
        <java.version>21</java.version>
        <spring-cloud.version>2023.0.0</spring-cloud.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

```java
package com.course.discovery.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
```

```yaml
# src/main/resources/application.yml
server:
  port: 8761

spring:
  application:
    name: eureka-server
  security:
    basic:
      enabled: true
    user:
      name: eureka
      password: eureka-secret

eureka:
  instance:
    hostname: localhost
    prefer-ip-address: true
  client:
    register-with-eureka: false
    fetch-registry: false
    service-url:
      defaultZone: http://localhost:8761/eureka/
  server:
    enable-self-preservation: true
    renewal-percent-threshold: 0.85
    eviction-interval-timer-in-ms: 5000
    response-cache-update-interval-ms: 3000
    peer-node-read-timeout-ms: 2000
    peer-node-connect-timeout-ms: 2000

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
```

### Eureka Server Security Configuration

```java
package com.course.discovery.eureka.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class EurekaSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.ignoringRequestMatchers("/eureka/**"))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/eureka/**").permitAll()
                .anyRequest().authenticated())
            .httpBasic(httpBasic -> {});
        return http.build();
    }
}
```

### Eureka Server Dashboard Controller

```java
package com.course.discovery.eureka.web;

import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.shared.Application;
import com.netflix.eureka.EurekaServerContext;
import com.netflix.eureka.EurekaServerContextHolder;
import com.netflix.eureka.registry.PeerAwareInstanceRegistry;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/discovery")
public class DiscoveryController {

    @GetMapping("/apps")
    public ResponseEntity<Map<String, Object>> getApplications() {
        PeerAwareInstanceRegistry registry = getRegistry();
        List<Application> applications = registry.getApplications().getRegisteredApplications();

        Map<String, Object> result = new HashMap<>();
        result.put("totalApps", applications.size());
        result.put("totalInstances", applications.stream()
                .mapToInt(app -> app.getInstances().size()).sum());

        List<Map<String, Object>> appList = applications.stream().map(app -> {
            Map<String, Object> appMap = new HashMap<>();
            appMap.put("name", app.getName());
            appMap.put("instanceCount", app.getInstances().size());
            List<Map<String, Object>> instances = app.getInstances().stream().map(inst -> {
                Map<String, Object> instMap = new HashMap<>();
                instMap.put("instanceId", inst.getInstanceId());
                instMap.put("hostName", inst.getHostName());
                instMap.put("ipAddr", inst.getIPAddr());
                instMap.put("port", inst.getPort());
                instMap.put("status", inst.getStatus().name());
                instMap.put("lastUpdatedTimestamp", new Date(inst.getLastUpdatedTimestamp()));
                instMap.put("lastDirtyTimestamp", new Date(inst.getLastDirtyTimestamp()));
                instMap.put("actionType", inst.getActionType().name());
                instMap.put("countryId", inst.getCountryId());
                instMap.put("homePageUrl", inst.getHomePageUrl());
                instMap.put("healthCheckUrl", inst.getHealthCheckUrl());
                instMap.put("statusPageUrl", inst.getStatusPageUrl());
                instMap.put("vipAddress", inst.getVIPAddress());
                instMap.put("secureVipAddress", inst.getSecureVipAddress());
                instMap.put("isCoordinatingServer", inst.isCoordinatingServer());
                instMap.put("metadata", inst.getMetadata());
                return instMap;
            }).toList();
            appMap.put("instances", instances);
            return appMap;
        }).toList();
        result.put("applications", appList);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getStatus() {
        PeerAwareInstanceRegistry registry = getRegistry();
        Map<String, Object> status = new HashMap<>();
        status.put("uptime", registry.getUptime());
        status.put("isLeaseExpirationEnabled", registry.isLeaseExpirationEnabled());
        status.put("numberOfRenewsPerMinThreshold", registry.getNumOfRenewsPerMinThreshold());
        status.put("numberOfRenewsPerMin", registry.getNumOfRenewsInLastMin());
        status.put("selfPreservationModeEnabled", registry.isSelfPreservationModeEnabled());
        status.put("instanceCounts", Map.of(
                "registered", registry.getApplicationCount()
        ));
        return ResponseEntity.ok(status);
    }

    @GetMapping("/instances/{instanceId}")
    public ResponseEntity<InstanceInfo> getInstance(
            @PathVariable String instanceId,
            @RequestParam String appName) {
        PeerAwareInstanceRegistry registry = getRegistry();
        InstanceInfo instance = registry.getInstanceByAppAndId(appName, instanceId);
        if (instance == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(instance);
    }

    @DeleteMapping("/instances/{instanceId}")
    public ResponseEntity<Void> removeInstance(
            @PathVariable String instanceId,
            @RequestParam String appName) {
        PeerAwareInstanceRegistry registry = getRegistry();
        registry.cancel(appName, instanceId, true);
        return ResponseEntity.ok().build();
    }

    private PeerAwareInstanceRegistry getRegistry() {
        EurekaServerContext context = EurekaServerContextHolder.getInstance().getServerContext();
        return context.getRegistry();
    }
}
```

### Eureka Client Ã¢â‚¬â€ Order Service

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>

    <groupId>com.course.microservices</groupId>
    <artifactId>order-service-client</artifactId>
    <version>1.0.0</version>
    <name>order-service-client</name>
    <description>Order Service with Eureka Client</description>

    <properties>
        <java.version>21</java.version>
        <spring-cloud.version>2023.0.0</spring-cloud.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-loadbalancer</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webflux</artifactId>
        </dependency>
        <dependency>
            <groupId>io.projectreactor.netty</groupId>
            <artifactId>reactor-netty</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

```java
package com.course.microservices.order;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class OrderServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}
```

```yaml
# src/main/resources/application.yml
server:
  port: 0

spring:
  application:
    name: order-service
  datasource:
    url: jdbc:h2:mem:orderdb
    driver-class-name: org.h2.Driver
    username: sa
    password:
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${vcap.application.instance_id:${spring.application.instance_id:${random.value}}}
    lease-renewal-interval-in-seconds: 10
    lease-expiration-duration-in-seconds: 30
    metadata-map:
      zone: us-east-1
      version: 1.0.0
      environment: development
      git-commit: ${GIT_COMMIT:unknown}
  client:
    service-url:
      defaultZone: http://eureka:eureka-secret@localhost:8761/eureka/
    register-with-eureka: true
    fetch-registry: true
    registry-fetch-interval-seconds: 5
    instance-info-replication-interval-seconds: 10
    initial-instance-info-replication-interval-seconds: 40

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: always
```

### Load Balancer Configuration

```java
package com.course.microservices.order.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClients;
import org.springframework.cloud.loadbalancer.core.RandomLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;
import org.springframework.cloud.loadbalancer.core.RoundRobinLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
@LoadBalancerClients({
    @LoadBalancerClient(name = "payment-service", configuration = PaymentServiceLoadBalancerConfig.class),
    @LoadBalancerClient(name = "inventory-service", configuration = InventoryServiceLoadBalancerConfig.class),
    @LoadBalancerClient(name = "shipping-service", configuration = ShippingServiceLoadBalancerConfig.class)
})
public class LoadBalancerConfig {

    @Bean
    @LoadBalanced
    @Primary
    public RestTemplate loadBalancedRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    @LoadBalanced
    @Primary
    public WebClient.Builder loadBalancedWebClientBuilder() {
        return WebClient.builder();
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}
```

```java
package com.course.microservices.order.config;

import org.springframework.cloud.loadbalancer.core.RandomLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class PaymentServiceLoadBalancerConfig {

    @Bean
    public ReactorLoadBalancer<?> reactorLoadBalancer(Environment environment,
                                                       LoadBalancerClientFactory loadBalancerClientFactory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
        return new RandomLoadBalancer(
                loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),
                name
        );
    }
}
```

```java
package com.course.microservices.order.config;

import org.springframework.cloud.loadbalancer.core.RoundRobinLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class InventoryServiceLoadBalancerConfig {

    @Bean
    public ReactorLoadBalancer<?> reactorLoadBalancer(Environment environment,
                                                       LoadBalancerClientFactory loadBalancerClientFactory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
        return new RoundRobinLoadBalancer(
                loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),
                name
        );
    }
}
```

```java
package com.course.microservices.order.config;

import org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class ShippingServiceLoadBalancerConfig {

    @Bean
    public ReactorLoadBalancer<?> reactorLoadBalancer(Environment environment,
                                                       LoadBalancerClientFactory loadBalancerClientFactory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
        return new ZoneAffinityLoadBalancer(
                loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),
                name
        );
    }
}
```

### Custom Load Balancer

```java
package com.course.microservices.order.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ReactorServiceInstanceLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import reactor.core.publisher.Mono;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class ZoneAffinityLoadBalancer implements ReactorServiceInstanceLoadBalancer {

    private static final Logger log = LoggerFactory.getLogger(ZoneAffinityLoadBalancer.class);
    private static final String DEFAULT_ZONE = "us-east-1";

    private final String serviceId;
    private final AtomicInteger index = new AtomicInteger(0);

    public ZoneAffinityLoadBalancer(ServiceInstanceListSupplier serviceInstanceListSupplier,
                                    String serviceId) {
        this.serviceId = serviceId;
    }

    @Override
    public Mono<Response<ServiceInstance>> choose(Request request) {
        ServiceInstanceListSupplier supplier = null;
        return Mono.just(Response.empty());
    }

    public ServiceInstance choose(List<ServiceInstance> instances, String preferredZone) {
        if (instances.isEmpty()) {
            return null;
        }

        List<ServiceInstance> zoneInstances = instances.stream()
                .filter(inst -> {
                    Map<String, String> metadata = inst.getMetadata();
                    String zone = metadata.getOrDefault("zone", DEFAULT_ZONE);
                    return zone.equals(preferredZone);
                })
                .toList();

        List<ServiceInstance> candidates = zoneInstances.isEmpty() ? instances : zoneInstances;

        int pos = Math.abs(index.getAndIncrement() % candidates.size());
        ServiceInstance selected = candidates.get(pos);

        log.debug("Selected instance {} for service {} (zone affinity: {} -> {})",
                selected.getInstanceId(), serviceId, preferredZone,
                selected.getMetadata().getOrDefault("zone", "unknown"));

        return selected;
    }

    public String getPreferredZone(ServiceInstance instance) {
        Map<String, String> metadata = instance.getMetadata();
        if (metadata != null && metadata.containsKey("zone")) {
            return metadata.get("zone");
        }
        return DEFAULT_ZONE;
    }
}
```

### Custom Weighted Load Balancer

```java
package com.course.microservices.order.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.loadbalancer.core.ReactorServiceInstanceLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import reactor.core.publisher.Mono;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class WeightedResponseTimeLoadBalancer implements ReactorServiceInstanceLoadBalancer {

    private static final Logger log = LoggerFactory.getLogger(WeightedResponseTimeLoadBalancer.class);
    private static final String WEIGHT_METADATA_KEY = "weight";

    private final String serviceId;
    private final Random random = new Random();
    private final ServiceInstanceListSupplier supplier;

    public WeightedResponseTimeLoadBalancer(ServiceInstanceListSupplier supplier, String serviceId) {
        this.supplier = supplier;
        this.serviceId = serviceId;
    }

    @Override
    public Mono<Response<ServiceInstance>> choose(Request request) {
        return supplier.get(request).next().map(instances -> {
            if (instances.isEmpty()) {
                log.warn("No instances available for service: {}", serviceId);
                return Response.empty();
            }
            ServiceInstance instance = weightedSelect(instances);
            log.debug("Selected instance {} for service {} (weighted)", instance.getInstanceId(), serviceId);
            return Response.of(instance);
        });
    }

    private ServiceInstance weightedSelect(List<ServiceInstance> instances) {
        List<Integer> weights = instances.stream()
                .map(inst -> {
                    Map<String, String> metadata = inst.getMetadata();
                    if (metadata != null && metadata.containsKey(WEIGHT_METADATA_KEY)) {
                        try {
                            return Math.max(1, Integer.parseInt(metadata.get(WEIGHT_METADATA_KEY)));
                        } catch (NumberFormatException e) {
                            return 1;
                        }
                    }
                    return 1;
                })
                .toList();

        int totalWeight = weights.stream().mapToInt(Integer::intValue).sum();
        int randomPoint = random.nextInt(totalWeight);
        int cumulativeWeight = 0;

        for (int i = 0; i < instances.size(); i++) {
            cumulativeWeight += weights.get(i);
            if (randomPoint < cumulativeWeight) {
                return instances.get(i);
            }
        }
        return instances.getLast();
    }
}
```

### Service Instance Supplier with Custom Metadata

```java
package com.course.microservices.order.config;

import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import reactor.core.publisher.Flux;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

public class HealthAwareServiceInstanceListSupplier implements ServiceInstanceListSupplier {

    private final ServiceInstanceListSupplier delegate;
    private final ConcurrentHashMap<String, AtomicLong> failureCounts = new ConcurrentHashMap<>();
    private final ConcurrentHashMap<String, Long> circuitOpenUntil = new ConcurrentHashMap<>();
    private static final int FAILURE_THRESHOLD = 5;
    private static final long CIRCUIT_OPEN_DURATION_MS = 30_000;

    public HealthAwareServiceInstanceListSupplier(ServiceInstanceListSupplier delegate) {
        this.delegate = delegate;
    }

    @Override
    public Flux<List<ServiceInstance>> get() {
        return delegate.get().map(instances ->
                instances.stream()
                        .filter(this::isHealthy)
                        .toList()
        );
    }

    @Override
    public Flux<List<ServiceInstance>> get(Request request) {
        return get();
    }

    @Override
    public String getServiceId() {
        return delegate.getServiceId();
    }

    public void recordFailure(ServiceInstance instance) {
        String instanceId = instance.getInstanceId();
        failureCounts.computeIfAbsent(instanceId, k -> new AtomicLong(0));
        long count = failureCounts.get(instanceId).incrementAndGet();

        if (count >= FAILURE_THRESHOLD) {
            circuitOpenUntil.put(instanceId, System.currentTimeMillis() + CIRCUIT_OPEN_DURATION_MS);
            failureCounts.get(instanceId).set(0);
        }
    }

    public void recordSuccess(ServiceInstance instance) {
        String instanceId = instance.getInstanceId();
        failureCounts.computeIfAbsent(instanceId, k -> new AtomicLong(0));
        failureCounts.get(instanceId).set(0);
    }

    private boolean isHealthy(ServiceInstance instance) {
        String instanceId = instance.getInstanceId();
        if (!circuitOpenUntil.containsKey(instanceId)) {
            return true;
        }
        long openUntil = circuitOpenUntil.get(instanceId);
        if (System.currentTimeMillis() > openUntil) {
            circuitOpenUntil.remove(instanceId);
            return true;
        }
        return false;
    }
}
```

### EurekaClient API Usage

```java
package com.course.microservices.order.discovery;

import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import com.netflix.discovery.shared.Applications;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Component
public class ServiceDiscoveryClient {

    private static final Logger log = LoggerFactory.getLogger(ServiceDiscoveryClient.class);

    private final EurekaClient eurekaClient;

    public ServiceDiscoveryClient(EurekaClient eurekaClient) {
        this.eurekaClient = eurekaClient;
    }

    public Optional<InstanceInfo> getServiceInstance(String serviceName) {
        InstanceInfo instance = eurekaClient.getNextServerFromEureka(serviceName, false);
        return Optional.ofNullable(instance);
    }

    public List<InstanceInfo> getAllServiceInstances(String serviceName) {
        Application application = eurekaClient.getApplication(serviceName);
        if (application == null) {
            return List.of();
        }
        return application.getInstances();
    }

    public List<Application> getAllRegisteredApplications() {
        Applications applications = eurekaClient.getApplications();
        return applications.getRegisteredApplications();
    }

    public Map<String, List<InstanceInfo>> getServiceMap() {
        return getAllRegisteredApplications().stream()
                .collect(java.util.stream.Collectors.toMap(
                        Application::getName,
                        Application::getInstances
                ));
    }

    public int getInstanceCount(String serviceName) {
        return getAllServiceInstances(serviceName).size();
    }

    public long getTotalInstanceCount() {
        return getAllRegisteredApplications().stream()
                .mapToLong(app -> app.getInstances().size())
                .sum();
    }

    public void refreshRegistry() {
        eurekaClient.getApplications().getRegisteredApplications().forEach(app -> {
            log.debug("Application: {} has {} instances", app.getName(), app.getInstances().size());
            app.getInstances().forEach(inst -> {
                log.debug("  Instance: {} at {}:{} status={}",
                        inst.getInstanceId(), inst.getIPAddr(), inst.getPort(), inst.getStatus());
            });
        });
    }
}
```

### Discovery Controller

```java
package com.course.microservices.order.web;

import com.course.microservices.order.discovery.ServiceDiscoveryClient;
import com.netflix.appinfo.InstanceInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/discovery")
public class DiscoveryController {

    private final ServiceDiscoveryClient discoveryClient;

    public DiscoveryController(ServiceDiscoveryClient discoveryClient) {
        this.discoveryClient = discoveryClient;
    }

    @GetMapping("/services")
    public ResponseEntity<List<String>> getServiceNames() {
        List<String> serviceNames = discoveryClient.getAllRegisteredApplications().stream()
                .map(app -> app.getName())
                .toList();
        return ResponseEntity.ok(serviceNames);
    }

    @GetMapping("/services/{serviceName}")
    public ResponseEntity<List<InstanceInfo>> getServiceInstances(
            @PathVariable String serviceName) {
        List<InstanceInfo> instances = discoveryClient.getAllServiceInstances(serviceName);
        if (instances.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(instances);
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getDiscoveryStatus() {
        List<String> services = discoveryClient.getAllRegisteredApplications().stream()
                .map(app -> app.getName())
                .toList();
        long totalInstances = discoveryClient.getTotalInstanceCount();
        return ResponseEntity.ok(Map.of(
                "services", services,
                "totalServices", services.size(),
                "totalInstances", totalInstances,
                "status", "UP"
        ));
    }

    @GetMapping("/debug")
    public ResponseEntity<Map<String, Object>> debugDiscovery() {
        var services = discoveryClient.getServiceMap();
        return ResponseEntity.ok(Map.of(
                "serviceCount", services.size(),
                "services", services
        ));
    }
}
```

### Load Balanced Service Client

```java
package com.course.microservices.order.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Component
public class PaymentServiceClient {

    private static final Logger log = LoggerFactory.getLogger(PaymentServiceClient.class);

    private final RestTemplate loadBalancedRestTemplate;
    private final LoadBalancerClient loadBalancerClient;
    private final RestTemplate restTemplate;

    public PaymentServiceClient(RestTemplate loadBalancedRestTemplate,
                                 LoadBalancerClient loadBalancerClient,
                                 RestTemplate restTemplate) {
        this.loadBalancedRestTemplate = loadBalancedRestTemplate;
        this.loadBalancerClient = loadBalancerClient;
        this.restTemplate = restTemplate;
    }

    public PaymentResponse processPayment(PaymentRequest request) {
        String url = "http://payment-service/api/payments/process";
        ResponseEntity<PaymentResponse> response = loadBalancedRestTemplate.postForEntity(
                url, request, PaymentResponse.class);
        return response.getBody();
    }

    public PaymentStatusResponse getPaymentStatus(String orderId) {
        String url = "http://payment-service/api/payments/order/{orderId}";
        ResponseEntity<PaymentStatusResponse> response = loadBalancedRestTemplate.getForEntity(
                url, PaymentStatusResponse.class, orderId);
        return response.getBody();
    }

    public RefundResponse refundPayment(String paymentId) {
        String url = "http://payment-service/api/payments/refund/{paymentId}";
        ResponseEntity<RefundResponse> response = loadBalancedRestTemplate.exchange(
                url, HttpMethod.POST, null, RefundResponse.class, paymentId);
        return response.getBody();
    }

    public PaymentResponse processPaymentWithExplicitLB(PaymentRequest request) {
        ServiceInstance instance = loadBalancerClient.choose("payment-service");
        if (instance == null) {
            throw new IllegalStateException("No payment-service instances available");
        }
        String url = String.format("http://%s:%s/api/payments/process",
                instance.getHost(), instance.getPort());
        log.info("Using instance: {} at {}:{}", instance.getInstanceId(), instance.getHost(), instance.getPort());

        ResponseEntity<PaymentResponse> response = restTemplate.postForEntity(
                url, request, PaymentResponse.class);
        return response.getBody();
    }

    public record PaymentRequest(String orderId, String customerId, double amount, String currency) {}
    public record PaymentResponse(String paymentId, String orderId, String status, String transactionReference) {}
    public record PaymentStatusResponse(String paymentId, String orderId, String status, String paidAt) {}
    public record RefundResponse(String refundId, String paymentId, String status, double refundedAmount) {}
}
```

### WebClient with Load Balancer

```java
package com.course.microservices.order.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import java.time.Duration;

@Component
public class InventoryServiceWebClient {

    private static final Logger log = LoggerFactory.getLogger(InventoryServiceWebClient.class);
    private static final Duration TIMEOUT = Duration.ofSeconds(5);

    private final WebClient.Builder loadBalancedWebClientBuilder;

    public InventoryServiceWebClient(WebClient.Builder loadBalancedWebClientBuilder) {
        this.loadBalancedWebClientBuilder = loadBalancedWebClientBuilder;
    }

    public Mono<InventoryResponse> checkInventory(String productId) {
        WebClient client = loadBalancedWebClientBuilder.build();
        return client.get()
                .uri("http://inventory-service/api/inventory/{productId}", productId)
                .retrieve()
                .bodyToMono(InventoryResponse.class)
                .timeout(TIMEOUT)
                .doOnError(e -> log.error("Error checking inventory for product {}: {}", productId, e.getMessage()));
    }

    public Mono<ReservationResponse> reserveInventory(String orderId, String productId, int quantity) {
        WebClient client = loadBalancedWebClientBuilder.build();
        ReservationRequest request = new ReservationRequest(orderId, productId, quantity);
        return client.post()
                .uri("http://inventory-service/api/inventory/reserve")
                .bodyValue(request)
                .retrieve()
                .bodyToMono(ReservationResponse.class)
                .timeout(TIMEOUT);
    }

    public Mono<Void> releaseInventory(String orderId, String productId, int quantity) {
        WebClient client = loadBalancedWebClientBuilder.build();
        ReservationRequest request = new ReservationRequest(orderId, productId, quantity);
        return client.post()
                .uri("http://inventory-service/api/inventory/release")
                .bodyValue(request)
                .retrieve()
                .bodyToMono(Void.class)
                .timeout(TIMEOUT);
    }

    public record InventoryResponse(String productId, int availableQuantity, boolean inStock) {}
    public record ReservationResponse(String reservationId, boolean success, String message) {}
    public record ReservationRequest(String orderId, String productId, int quantity) {}
}
```

### Feign Client with Load Balancer

```java
package com.course.microservices.order.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "payment-service")
public interface PaymentServiceFeignClient {

    @PostMapping("/api/payments/process")
    ResponseEntity<PaymentResponse> processPayment(@RequestBody PaymentRequest request);

    @GetMapping("/api/payments/order/{orderId}")
    ResponseEntity<PaymentStatusResponse> getPaymentStatus(@PathVariable("orderId") String orderId);

    @PostMapping("/api/payments/refund/{paymentId}")
    ResponseEntity<RefundResponse> refundPayment(@PathVariable("paymentId") String paymentId);

    record PaymentRequest(String orderId, String customerId, double amount, String currency) {}
    record PaymentResponse(String paymentId, String orderId, String status, String transactionReference) {}
    record PaymentStatusResponse(String paymentId, String orderId, String status, String paidAt) {}
    record RefundResponse(String refundId, String paymentId, String status, double refundedAmount) {}
}
```

### Custom ServiceInstanceListSupplier Configuration

```java
package com.course.microservices.order.config;

import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.Flux;
import java.util.List;
import java.util.stream.Collectors;

@Configuration
public class CustomLoadBalancerSupplierConfig {

    public static class ZoneFilteringSupplier implements ServiceInstanceListSupplier {

        private final ServiceInstanceListSupplier delegate;
        private final String targetZone;

        public ZoneFilteringSupplier(ServiceInstanceListSupplier delegate, String targetZone) {
            this.delegate = delegate;
            this.targetZone = targetZone;
        }

        @Override
        public Flux<List<ServiceInstance>> get() {
            return delegate.get().map(instances ->
                    instances.stream()
                            .filter(inst -> targetZone.equals(
                                    inst.getMetadata().getOrDefault("zone", "unknown")))
                            .collect(Collectors.toList())
            );
        }

        @Override
        public Flux<List<ServiceInstance>> get(Request request) {
            return get();
        }

        @Override
        public String getServiceId() {
            return delegate.getServiceId();
        }
    }
}
```

### Eureka Client - Shipping Service

```java
package com.course.microservices.shipping;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ShippingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShippingServiceApplication.class, args);
    }
}
```

```yaml
# shipping-service/src/main/resources/application.yml
server:
  port: 0

spring:
  application:
    name: shipping-service
  datasource:
    url: jdbc:h2:mem:shippingdb
    driver-class-name: org.h2.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop

eureka:
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${random.value}
    lease-renewal-interval-in-seconds: 10
    lease-expiration-duration-in-seconds: 30
    metadata-map:
      zone: us-east-1
      weight: 3
  client:
    service-url:
      defaultZone: http://eureka:eureka-secret@localhost:8761/eureka/
    register-with-eureka: true
    fetch-registry: true
```

### Eureka Client - Payment Service (Second Instance)

```yaml
# payment-service/src/main/resources/application-instance2.yml
server:
  port: 0

spring:
  application:
    name: payment-service

eureka:
  instance:
    metadata-map:
      zone: us-west-2
      weight: 1
  client:
    service-url:
      defaultZone: http://localhost:8762/eureka/,http://localhost:8763/eureka/
```

### Peer-Aware Eureka Server Configuration

```yaml
# eureka-server-peer1/src/main/resources/application.yml
server:
  port: 8761

spring:
  application:
    name: eureka-server

eureka:
  instance:
    hostname: eureka-peer1
  client:
    service-url:
      defaultZone: http://eureka-peer2:8762/eureka/,http://eureka-peer3:8763/eureka/
  server:
    enable-self-preservation: true
    renewal-percent-threshold: 0.85
```

```yaml
# eureka-server-peer2/src/main/resources/application.yml
server:
  port: 8762

spring:
  application:
    name: eureka-server

eureka:
  instance:
    hostname: eureka-peer2
  client:
    service-url:
      defaultZone: http://eureka-peer1:8761/eureka/,http://eureka-peer3:8763/eureka/
  server:
    enable-self-preservation: true
    renewal-percent-threshold: 0.85
```

### Application Event Listeners for Discovery Events

```java
package com.course.microservices.order.event;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.client.discovery.event.HeartbeatEvent;
import org.springframework.cloud.client.discovery.event.HeartbeatMonitor;
import org.springframework.cloud.client.discovery.event.InstanceRegisteredEvent;
import org.springframework.cloud.client.discovery.event.ParentHeartbeatEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class DiscoveryEventLogger {

    private static final Logger log = LoggerFactory.getLogger(DiscoveryEventLogger.class);

    @EventListener
    public void handleInstanceRegistered(InstanceRegisteredEvent<?> event) {
        log.info("Instance registered with service registry: {} (source: {})",
                event.getSource().getClass().getSimpleName(), event.getSource());
    }

    @EventListener
    public void handleHeartbeat(HeartbeatEvent event) {
        log.debug("Heartbeat event received: {} (status: {})",
                event.getSource().getClass().getSimpleName(), event.getStatus());
    }

    @EventListener
    public void handleParentHeartbeat(ParentHeartbeatEvent event) {
        log.trace("Parent heartbeat: {}", event.getValue());
    }
}
```

### Health Check Indicator

```java
package com.course.microservices.order.health;

import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.transport.EurekaHttpClient;
import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class EurekaHealthIndicator implements HealthIndicator {

    private final EurekaClient eurekaClient;

    public EurekaHealthIndicator(EurekaClient eurekaClient) {
        this.eurekaClient = eurekaClient;
    }

    @Override
    public Health health() {
        try {
            if (eurekaClient != null) {
                boolean registered = eurekaClient.getApplicationInfoManager().getInfo() != null;
                return Health.up()
                        .withDetail("registered", registered)
                        .withDetail("status", eurekaClient.getInstanceRemoteStatus())
                        .build();
            }
            return Health.down().withDetail("reason", "EurekaClient not available").build();
        } catch (Exception e) {
            return Health.down(e).withDetail("reason", e.getMessage()).build();
        }
    }
}
```

### Eureka Client Metadata Customizer

```java
package com.course.microservices.order.config;

import com.netflix.appinfo.HealthCheckHandler;
import com.netflix.appinfo.InstanceInfo;
import org.springframework.boot.actuate.health.HealthEndpoint;
import org.springframework.boot.actuate.health.Status;
import org.springframework.cloud.netflix.eureka.EurekaHealthCheckHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EurekaClientConfig {

    @Bean
    public HealthCheckHandler healthCheckHandler(HealthEndpoint healthEndpoint) {
        return new EurekaHealthCheckHandler(healthEndpoint) {
            @Override
            public InstanceInfo.InstanceStatus getStatus(Status status) {
                if (status == Status.UP || status == Status.OUT_OF_SERVICE) {
                    return InstanceInfo.InstanceStatus.UP;
                }
                return InstanceInfo.InstanceStatus.DOWN;
            }
        };
    }
}
```

### Load Balancer Health Check Task

```java
package com.course.microservices.order.schedule;

import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import com.netflix.appinfo.InstanceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Component
@EnableScheduling
public class InstanceHealthCheckTask {

    private static final Logger log = LoggerFactory.getLogger(InstanceHealthCheckTask.class);

    private final EurekaClient eurekaClient;

    public InstanceHealthCheckTask(EurekaClient eurekaClient) {
        this.eurekaClient = eurekaClient;
    }

    @Scheduled(fixedRate = 30, timeUnit = TimeUnit.SECONDS)
    public void checkInstances() {
        List<Application> applications = eurekaClient.getApplications().getRegisteredApplications();
        for (Application app : applications) {
            List<InstanceInfo> instances = app.getInstances();
            long upCount = instances.stream()
                    .filter(inst -> inst.getStatus() == InstanceInfo.InstanceStatus.UP)
                    .count();
            if (upCount < instances.size()) {
                log.warn("Service {} has {}/{} instances UP",
                        app.getName(), upCount, instances.size());
                instances.stream()
                        .filter(inst -> inst.getStatus() != InstanceInfo.InstanceStatus.UP)
                        .forEach(inst -> log.warn("  Instance {} is {}",
                                inst.getInstanceId(), inst.getStatus()));
            }
        }
    }

    @Scheduled(fixedRate = 60, timeUnit = TimeUnit.SECONDS)
    public void logRegistrySummary() {
        List<Application> applications = eurekaClient.getApplications().getRegisteredApplications();
        int totalInstances = applications.stream()
                .mapToInt(app -> app.getInstances().size())
                .sum();
        log.info("Registry summary: {} applications, {} total instances",
                applications.size(), totalInstances);
    }
}
```

### Integration Tests

```java
package com.course.microservices.order;

import com.course.microservices.order.client.PaymentServiceClient;
import com.course.microservices.order.client.InventoryServiceWebClient;
import com.course.microservices.order.discovery.ServiceDiscoveryClient;
import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.client.RestTemplate;
import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ActiveProfiles("test")
class ServiceDiscoveryIntegrationTest {

    @Autowired
    private EurekaClient eurekaClient;

    @Autowired
    private DiscoveryClient discoveryClient;

    @Autowired
    private ServiceDiscoveryClient serviceDiscoveryClient;

    @Autowired
    private RestTemplate loadBalancedRestTemplate;

    @Test
    void shouldDiscoverServices() {
        List<String> services = discoveryClient.getServices();
        assertThat(services).isNotEmpty();
    }

    @Test
    void shouldGetServiceInstances() {
        List<ServiceInstance> instances = discoveryClient.getInstances("order-service");
        assertThat(instances).isNotEmpty();
    }

    @Test
    void shouldGetInstanceDetails() {
        List<InstanceInfo> instances = serviceDiscoveryClient.getAllServiceInstances("order-service");
        assertThat(instances).isNotEmpty();
        InstanceInfo instance = instances.get(0);
        assertThat(instance.getAppName()).isEqualTo("ORDER-SERVICE");
        assertThat(instance.getStatus()).isIn(
                InstanceInfo.InstanceStatus.UP,
                InstanceInfo.InstanceStatus.STARTING
        );
    }

    @Test
    void shouldGetMetadataFromInstance() {
        List<InstanceInfo> instances = serviceDiscoveryClient.getAllServiceInstances("order-service");
        assertThat(instances).isNotEmpty();
        InstanceInfo instance = instances.get(0);
        assertThat(instance.getMetadata()).containsKey("zone");
    }

    @Test
    void shouldUseLoadBalancedRestTemplate() {
        assertThat(loadBalancedRestTemplate).isNotNull();
    }

    @Test
    void shouldReturnRegistryStatus() {
        var status = serviceDiscoveryClient.getServiceMap();
        assertThat(status).isNotNull();
        assertThat(status).containsKey("ORDER-SERVICE");
    }
}
```

### Unit Tests for Custom Load Balancer

```java
package com.course.microservices.order.config;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.cloud.client.ServiceInstance;
import java.net.URI;
import java.util.List;
import java.util.Map;
import static org.assertj.core.api.Assertions.assertThat;

class ZoneAffinityLoadBalancerTest {

    private ZoneAffinityLoadBalancer loadBalancer;

    @BeforeEach
    void setUp() {
        loadBalancer = new ZoneAffinityLoadBalancer(null, "test-service");
    }

    @Test
    void shouldSelectPreferredZone() {
        List<ServiceInstance> instances = List.of(
                instance("inst-1", "us-east-1"),
                instance("inst-2", "us-east-1"),
                instance("inst-3", "us-west-2")
        );

        ServiceInstance selected = loadBalancer.choose(instances, "us-east-1");
        assertThat(selected.getMetadata().get("zone")).isEqualTo("us-east-1");
    }

    @Test
    void shouldFallbackWhenNoZoneMatch() {
        List<ServiceInstance> instances = List.of(
                instance("inst-1", "eu-west-1"),
                instance("inst-2", "eu-west-1")
        );

        ServiceInstance selected = loadBalancer.choose(instances, "us-east-1");
        assertThat(selected).isNotNull();
    }

    @Test
    void shouldReturnNullForEmptyInstances() {
        ServiceInstance selected = loadBalancer.choose(List.of(), "us-east-1");
        assertThat(selected).isNull();
    }

    @Test
    void shouldRoundRobinWithinZone() {
        List<ServiceInstance> instances = List.of(
                instance("inst-1", "us-east-1"),
                instance("inst-2", "us-east-1")
        );

        ServiceInstance first = loadBalancer.choose(instances, "us-east-1");
        ServiceInstance second = loadBalancer.choose(instances, "us-east-1");
        assertThat(first.getInstanceId()).isNotEqualTo(second.getInstanceId());
    }

    private ServiceInstance instance(String id, String zone) {
        return new ServiceInstance() {
            @Override
            public String getServiceId() { return "test-service"; }
            @Override
            public String getHost() { return "localhost"; }
            @Override
            public int getPort() { return 8080; }
            @Override
            public boolean isSecure() { return false; }
            @Override
            public URI getUri() { return URI.create("http://localhost:8080"); }
            @Override
            public Map<String, String> getMetadata() { return Map.of("zone", zone); }
            @Override
            public String getInstanceId() { return id; }
            @Override
            public String getScheme() { return "http"; }
        };
    }
}
```

### Third-Party Registration Pattern (Kubernetes)

```yaml
# kubernetes/eureka-client-sidecar.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: eureka-sidecar
spec:
  replicas: 1
  selector:
    matchLabels:
      app: eureka-sidecar
  template:
    metadata:
      labels:
        app: eureka-sidecar
    spec:
      containers:
      - name: eureka-sidecar
        image: springcloud/spring-cloud-kubernetes-sidecar:3.0.0
        env:
        - name: SPRING_CLOUD_DISCOVERY_ENABLED
          value: "true"
        - name: SPRING_CLOUD_KUBERNETES_DISCOVERY_ENABLED
          value: "true"
        - name: EUREKA_CLIENT_SERVICEURL_DEFAULTZONE
          value: "http://eureka-0.eureka:8761/eureka/"
        ports:
        - containerPort: 8080
```

### Docker Compose for Eureka Cluster

```yaml
version: '3.8'
services:
  eureka-peer1:
    image: eureka-server:latest
    ports:
      - "8761:8761"
    environment:
      - EUREKA_INSTANCE_HOSTNAME=eureka-peer1
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-peer2:8762/eureka/,http://eureka-peer3:8763/eureka/
    networks:
      - discovery-net

  eureka-peer2:
    image: eureka-server:latest
    ports:
      - "8762:8762"
    environment:
      - EUREKA_INSTANCE_HOSTNAME=eureka-peer2
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-peer1:8761/eureka/,http://eureka-peer3:8763/eureka/
    networks:
      - discovery-net

  eureka-peer3:
    image: eureka-server:latest
    ports:
      - "8763:8763"
    environment:
      - EUREKA_INSTANCE_HOSTNAME=eureka-peer3
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-peer1:8761/eureka/,http://eureka-peer2:8762/eureka/
    networks:
      - discovery-net

  order-service:
    build: ./order-service
    ports:
      - "0:8080"
    environment:
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-peer1:8761/eureka/,http://eureka-peer2:8762/eureka/,http://eureka-peer3:8763/eureka/
    depends_on:
      - eureka-peer1
      - eureka-peer2
      - eureka-peer3
    networks:
      - discovery-net

networks:
  discovery-net:
    driver: bridge
```

### Actuator Endpoints for Eureka

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,eureka
  endpoint:
    eureka:
      enabled: true
    health:
      show-details: always
  info:
    env:
      enabled: true
```

## Summary

- **Eureka Server** acts as the service registry; services register with it and discover other services
- **Eureka Client** handles self-registration, heartbeats, and instance lookup; configured via `@EnableDiscoveryClient`
- **Self-Preservation** prevents premature instance eviction during network partitions
- **Spring Cloud LoadBalancer** provides `RoundRobinLoadBalancer` and `RandomLoadBalancer` Ã¢â‚¬â€ the replacement for Netflix Ribbon
- **@LoadBalanced RestTemplate** and **WebClient.Builder** enable load-balanced inter-service calls
- **Client-Side Discovery** has the client query the registry; **Server-Side Discovery** uses an intermediary load balancer
- **Self-Registration** is the default with Eureka Client; **Third-Party Registration** uses a separate registrar like Kubernetes

## Exercises

1. **Eureka Server Setup**: Create a three-node Eureka cluster with peer awareness. Configure `register-with-eureka: true` so peers replicate registrations.

2. **Custom Metadata**: Configure instance metadata for each service instance including zone, version, environment, and weight. Retrieve this metadata in a consuming service.

3. **Custom Load Balancer**: Implement a `LeastConnectionsLoadBalancer` that selects the instance with the fewest active connections. Use it for the payment-service.

4. **Service Discovery API**: Write a REST controller that exposes an API to query registered services, instance details, and health status from Eureka.

5. **Load Balanced WebClient**: Implement a reactive client for the inventory service using `WebClient.Builder` with `@LoadBalanced` and test it with multiple instances.

6. **Third-Party Registration**: Research and write a configuration for Spring Cloud Kubernetes to register pods with an external Eureka server.

7. **Failure Simulation**: Write a test that starts multiple instances of a service, stops one, and verifies that the load balancer routes only to healthy instances.
