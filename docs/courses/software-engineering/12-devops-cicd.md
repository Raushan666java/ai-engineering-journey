# DevOps and CI/CD

## Learning Objectives

After completing this chapter, the student will be able to:
- Explain DevOps principles and culture
- Implement a continuous integration pipeline with automated builds, tests, and linting
- Design a continuous delivery pipeline that deploys to staging environments
- Configure infrastructure as code using declarative approaches
- Apply containerisation with Docker and orchestration with Kubernetes
- Implement monitoring, logging, and observability
- Analyse deployment strategies: blue-green, canary, rolling
- Build a complete CI/CD pipeline in TypeScript

## Theory

### What is DevOps?

DevOps is a cultural and technical movement that bridges the gap between development (Dev) and operations (Ops). It emphasises automation, measurement, sharing, and short feedback loops to deliver software faster and more reliably.

```mermaid
graph TD
    subgraph "DevOps Loop"
        DEV[Develop] --> BUILD[Build]
        BUILD --> TEST[Test]
        TEST --> DEPLOY[Deploy]
        DEPLOY --> OPERATE[Operate]
        OPERATE --> MONITOR[Monitor]
        MONITOR --> PLAN[Plan]
        PLAN --> DEV
    end
```

**The Three Ways of DevOps (Gene Kim):**

| Way | Principle | Practice |
|-----|-----------|----------|
| **First Way** | Systems thinking (flow) | Small batches, CI/CD, trunk-based development |
| **Second Way** | Amplify feedback loops | Monitoring, alerting, blameless postmortems |
| **Third Way** | Culture of experimentation | Chaos engineering, fault injection, continuous improvement |

### Continuous Integration (CI)

CI is the practice of merging all developer code into a shared mainline multiple times per day, with each merge verified by an automated build and test suite.

**CI requirements:**
- Version control (Git)
- Automated build script
- Automated test suite
- CI server (Jenkins, GitHub Actions, GitLab CI)
- Fast feedback (< 10 minutes)

```mermaid
graph LR
    DEV1[Developer A] -->|Commit| REPO[Shared Repository]
    DEV2[Developer B] -->|Commit| REPO
    DEV3[Developer C] -->|Commit| REPO
    REPO --> CI_BUILD[CI Server]
    CI_BUILD --> LINT[Lint]
    CI_BUILD --> TEST[Unit Tests]
    CI_BUILD --> INTEG[Integration Tests]
    CI_BUILD --> BUILD[Build Artifact]
    BUILD -->|Pass/Fail| STATUS[Status Notification]
```

**CI best practices:**
1. Commit frequently (multiple times daily)
2. Keep the build fast (< 10 minutes)
3. Fix broken builds immediately (stop the line)
4. Run tests in isolation
5. Maintain a single source repository
6. Automate everything

### Continuous Delivery (CD)

Continuous Delivery ensures that every change passing all tests is potentially releasable to production. Continuous Deployment goes further — every passing change is automatically deployed.

| Practice | Frequency | Approval Gate |
|----------|-----------|---------------|
| **Continuous Integration** | Per commit | Build + test pass |
| **Continuous Delivery** | On demand (per commit) | Human approval |
| **Continuous Deployment** | Per commit (auto) | None (fully automated) |

```mermaid
graph LR
    CI[CI: Build + Test] --> CD[Continuous Delivery]
    CD --> STG[Deploy to Staging]
    STG --> SMOKE[Smoke Tests]
    SMOKE -->|Manual Gate| PROD[Deploy to Production]
    
    CI --> CDEPLOY[Continuous Deployment]
    CDEPLOY --> STG2[Deploy to Staging]
    STG2 --> SMOKE2[Smoke Tests]
    SMOKE2 -->|Auto| PROD2[Deploy to Production]
```

### Infrastructure as Code (IaC)

IaC manages infrastructure (networks, VMs, load balancers) through machine-readable definition files rather than manual configuration.

| Tool | Language | State Management | Best For |
|------|----------|------------------|----------|
| **Terraform** | HCL (HashiCorp Language) | State file (remote) | Multi-cloud infrastructure |
| **Pulumi** | TypeScript, Python, Go, C# | State file (managed) | Developers wanting real languages |
| **AWS CDK** | TypeScript, Python, Java, C# | AWS CloudFormation | AWS-only infrastructure |
| **Ansible** | YAML playbooks | Agentless | Configuration management |
| **CloudFormation** | YAML/JSON | AWS-managed | AWS-native teams |

**IaC principles:**
- **Idempotency:** Running the same code produces the same result
- **Declarative:** Specify desired state, not steps to achieve it
- **Versioned:** Infrastructure code lives in version control
- **Reviewable:** Changes go through pull requests
- **Testable:** Infrastructure can be validated in CI

### Containerisation

Containers package an application with all its dependencies into a single, portable unit.

```mermaid
graph TD
    subgraph "Docker Architecture"
        DOCKER[Docker Engine] --> IMG[Images]
        DOCKER --> CONT[Containers]
        DOCKER --> REG[Registry]
        
        IMG --> L1[Base Layer]
        IMG --> L2[App Layer]
        IMG --> L3[Config Layer]
        
        CONT --> C1[Container 1]
        CONT --> C2[Container 2]
        CONT --> C3[Container 3]
        
        REG --> PUB[Public: Docker Hub]
        REG --> PRIV[Private Registry]
    end
```

**Dockerfile example:**

```dockerfile
# Multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

### Kubernetes (K8s)

Kubernetes is an open-source container orchestration platform.

| Resource | Purpose |
|----------|---------|
| **Pod** | Smallest deployable unit (one or more containers) |
| **Deployment** | Declares desired state for pods (replicas, updates) |
| **Service** | Stable network endpoint for a set of pods |
| **Ingress** | External HTTP/HTTPS routing to services |
| **ConfigMap** | Non-sensitive configuration data |
| **Secret** | Sensitive data (passwords, tokens) |
| **PersistentVolume** | Storage infrastructure |
| **Namespace** | Virtual cluster for resource isolation |

```mermaid
graph TD
    ING[Ingress] --> SVC[Service: port 80]
    SVC --> POD1[Pod: app v1.0.0]
    SVC --> POD2[Pod: app v1.0.0]
    SVC --> POD3[Pod: app v1.0.0]
    
    DEP[Deployment: 3 replicas] -->|manages| POD1
    DEP -->|manages| POD2
    DEP -->|manages| POD3
    
    CM[ConfigMap] -->|mounted| POD1
    SEC[Secret] -->|mounted| POD1
```

### Deployment Strategies

| Strategy | Description | Downtime | Rollback | Cost |
|----------|-------------|----------|----------|------|
| **Recreate** | Terminate old, deploy new | Yes | Re-deploy old | Low |
| **Rolling** | Gradually replace instances | No | Reverse the rollout | Medium |
| **Blue-Green** | Two identical environments, switch traffic | No | Switch back | High |
| **Canary** | Route small % of traffic to new version | No | Reroute traffic | Medium |
| **A/B Testing** | Route traffic based on user segments | No | Reroute | Medium |

```mermaid
graph LR
    subgraph "Blue-Green Deployment"
        ROUTER[Load Balancer] -->|Traffic| BLUE[Blue: v1.0 Active]
        ROUTER -.-|Idle| GREEN[Green: v2.0 Staged]
        
        ROUTER2[Load Balancer] -->|Traffic| BLUE2[Blue: v1.0 Idle]
        ROUTER2 -.-|Test OK - Switch| GREEN2[Green: v2.0 Active]
    end
```

### Monitoring and Observability

| Pillar | What it answers | Tools |
|--------|-----------------|-------|
| **Metrics** | What is happening? | Prometheus, Grafana, Datadog |
| **Logging** | Why is it happening? | ELK Stack, Loki, CloudWatch |
| **Tracing** | Where is it happening? | Jaeger, Zipkin, OpenTelemetry |
| **Alerting** | When should we care? | PagerDuty, OpsGenie, Alertmanager |

**The USE Method (Brendan Gregg):**
- **Utilisation:** Percentage of resource being used
- **Saturation:** Amount of queued work
- **Errors:** Count of error events

**Four Golden Signals (Google SRE):**
1. **Latency:** Time to serve a request
2. **Traffic:** Demand on the system
3. **Errors:** Rate of failed requests
4. **Saturation:** How "full" the service is

## Practical Takeaways

1. **CI/CD is not optional** — manual deployment is the #1 source of production incidents
2. **Build once, deploy many** — the same artifact moves through all environments
3. **Fail fast** — the earlier a defect is caught, the cheaper it is to fix
4. **Infrastructure is code** — everything should be in version control
5. **Observability over monitoring** — understand WHY, not just WHAT
6. **Rollback is a feature** — every deployment must have a tested rollback plan

## Examples

### Example 1: GitHub Actions CI Pipeline

```yaml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '20'

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck

  test:
    needs: lint
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: ['18', '20', '22']
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      - run: npm ci
      - run: npm test -- --coverage
      - uses: actions/upload-artifact@v4
        with:
          name: coverage-${{ matrix.node-version }}
          path: coverage/

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: build-artifact
          path: dist/
      - run: npm pack
      - uses: actions/upload-artifact@v4
        with:
          name: npm-package
          path: '*.tgz'
```

### Example 2: CD Pipeline with Deployment Strategies

```typescript
interface DeploymentConfig {
  serviceName: string;
  image: string;
  tag: string;
  replicas: number;
  strategy: 'rolling' | 'blue-green' | 'canary';
}

interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  responseTime: number;
}

class DeploymentManager {
  private currentVersion = '1.0.0';

  public async deploy(config: DeploymentConfig): Promise<boolean> {
    console.log(`Deploying ${config.serviceName}:${config.tag}`);

    switch (config.strategy) {
      case 'rolling':
        return this.rollingDeploy(config);
      case 'blue-green':
        return this.blueGreenDeploy(config);
      case 'canary':
        return this.canaryDeploy(config);
      default:
        throw new Error(`Unknown strategy: ${config.strategy}`);
    }
  }

  private async rollingDeploy(config: DeploymentConfig): Promise<boolean> {
    const batchSize = Math.max(1, Math.floor(config.replicas * 0.25));

    for (let i = 0; i < config.replicas; i += batchSize) {
      const batch = Math.min(batchSize, config.replicas - i);
      console.log(`Rolling update: updating ${batch} of ${config.replicas} pods`);

      await this.updateInstances(batch, config.image, config.tag);
      await this.drainOldConnections();

      if (!(await this.healthCheck())) {
        await this.rollback(config);
        return false;
      }
    }

    this.currentVersion = config.tag;
    console.log('Rolling update complete');
    return true;
  }

  private async blueGreenDeploy(config: DeploymentConfig): Promise<boolean> {
    // Deploy to green (inactive) environment
    const greenEnv = 'green';
    console.log(`Deploying to ${greenEnv} environment`);

    await this.deployToEnvironment(greenEnv, config.image, config.tag);

    if (!(await this.runSmokeTests(greenEnv))) {
      await this.destroyEnvironment(greenEnv);
      return false;
    }

    // Switch router to green
    await this.switchTraffic('green');
    console.log('Traffic switched to green environment');

    // Keep blue for rollback
    return true;
  }

  private async canaryDeploy(config: DeploymentConfig): Promise<boolean> {
    const phases = [
      { trafficPercent: 5, duration: 300000 },  // 5 min
      { trafficPercent: 25, duration: 600000 }, // 10 min
      { trafficPercent: 50, duration: 600000 }, // 10 min
      { trafficPercent: 100, duration: 0 },     // full
    ];

    for (const phase of phases) {
      console.log(`Canary: routing ${phase.trafficPercent}% traffic`);
      await this.setTrafficWeight(config.serviceName, phase.trafficPercent);

      if (phase.duration > 0) {
        await this.delay(phase.duration);
      }

      if (!(await this.monitorErrors(config.serviceName))) {
        console.log('Error rate exceeded threshold, rolling back');
        await this.setTrafficWeight(config.serviceName, 0);
        return false;
      }
    }

    console.log('Canary deployment successful - 100% traffic');
    this.currentVersion = config.tag;
    return true;
  }

  private async healthCheck(): Promise<boolean> {
    const result = await this.getHealthEndpoint();
    return result.status === 'healthy' && result.responseTime < 5000;
  }

  private async rollback(config: DeploymentConfig): Promise<void> {
    console.log(`Rolling back ${config.serviceName} to ${this.currentVersion}`);
  }

  // Simulated methods
  private async updateInstances(count: number, image: string, tag: string): Promise<void> {
    await this.delay(1000);
  }

  private async drainOldConnections(): Promise<void> {
    await this.delay(500);
  }

  private async deployToEnvironment(env: string, image: string, tag: string): Promise<void> {
    await this.delay(2000);
  }

  private async runSmokeTests(env: string): Promise<boolean> {
    await this.delay(1000);
    return Math.random() > 0.1;
  }

  private async destroyEnvironment(env: string): Promise<void> {
    await this.delay(500);
  }

  private async switchTraffic(env: string): Promise<void> {
    await this.delay(1000);
  }

  private async getHealthEndpoint(): Promise<HealthCheckResponse> {
    await this.delay(200);
    return { status: 'healthy', responseTime: 150 };
  }

  private async setTrafficWeight(service: string, percent: number): Promise<void> {
    await this.delay(500);
  }

  private async monitorErrors(service: string): Promise<boolean> {
    await this.delay(1000);
    const errorRate = Math.random();
    return errorRate < 0.05;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
```

### Example 3: Infrastructure as Code (Pulumi TypeScript)

```typescript
import * as aws from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';

interface ServiceStackConfig {
  environment: string;
  instanceCount: number;
  domainName: pulumi.Input<string>;
}

export class ServiceStack extends pulumi.ComponentResource {
  constructor(
    name: string,
    config: ServiceStackConfig,
    opts?: pulumi.ComponentResourceOptions
  ) {
    super('pai:platform:ServiceStack', name, {}, opts);

    // VPC
    const vpc = new aws.ec2.Vpc(`${name}-vpc`, {
      cidrBlock: '10.0.0.0/16',
      tags: { Name: `${name}-vpc`, Environment: config.environment },
    }, { parent: this });

    const subnet = new aws.ec2.Subnet(`${name}-subnet`, {
      vpcId: vpc.id,
      cidrBlock: '10.0.1.0/24',
      mapPublicIpOnLaunch: true,
    }, { parent: this });

    // Security group
    const sg = new aws.ec2.SecurityGroup(`${name}-sg`, {
      vpcId: vpc.id,
      ingress: [
        { protocol: 'tcp', fromPort: 80, toPort: 80, cidrBlocks: ['0.0.0.0/0'] },
        { protocol: 'tcp', fromPort: 443, toPort: 443, cidrBlocks: ['0.0.0.0/0'] },
      ],
      egress: [
        { protocol: '-1', fromPort: 0, toPort: 0, cidrBlocks: ['0.0.0.0/0'] },
      ],
    }, { parent: this });

    // Application Load Balancer
    const alb = new aws.lb.LoadBalancer(`${name}-alb`, {
      internal: false,
      loadBalancerType: 'application',
      subnets: [subnet.id],
      enableDeletionProtection: config.environment === 'production',
    }, { parent: this });

    const targetGroup = new aws.lb.TargetGroup(`${name}-tg`, {
      port: 80,
      protocol: 'HTTP',
      targetType: 'ip',
      vpcId: vpc.id,
      healthCheck: {
        enabled: true,
        path: '/health',
        interval: 30,
        healthyThreshold: 2,
        unhealthyThreshold: 5,
      },
    }, { parent: this });

    // ECS Cluster
    const cluster = new aws.ecs.Cluster(`${name}-cluster`, {}, { parent: this });

    const taskDefinition = new aws.ecs.TaskDefinition(`${name}-task`, {
      family: name,
      networkMode: 'awsvpc',
      requiresCompatibilities: ['FARGATE'],
      cpu: '256',
      memory: '512',
      containerDefinitions: JSON.stringify([
        {
          name: 'app',
          image: `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.${process.env.AWS_REGION}.amazonaws.com/${name}:latest`,
          essential: true,
          portMappings: [{ containerPort: 80, hostPort: 80, protocol: 'tcp' }],
          environment: [
            { name: 'NODE_ENV', value: config.environment },
          ],
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': `/ecs/${name}`,
              'awslogs-region': process.env.AWS_REGION!,
              'awslogs-stream-prefix': 'ecs',
            },
          },
          healthCheck: {
            command: ['CMD-SHELL', 'curl -f http://localhost/health || exit 1'],
            interval: 30,
            timeout: 5,
            retries: 3,
          },
        },
      ]),
    }, { parent: this });

    const service = new aws.ecs.Service(`${name}-service`, {
      cluster: cluster.arn,
      taskDefinition: taskDefinition.arn,
      desiredCount: config.instanceCount,
      launchType: 'FARGATE',
      networkConfiguration: {
        assignPublicIp: true,
        subnets: [subnet.id],
        securityGroups: [sg.id],
      },
      loadBalancers: [{
        targetGroupArn: targetGroup.arn,
        containerName: 'app',
        containerPort: 80,
      }],
      deploymentCircuitBreaker: {
        enable: true,
        rollback: true,
      },
      deploymentMinimumHealthyPercent: 100,
      deploymentMaximumPercent: 200,
    }, { parent: this });

    // Outputs
    this.registerOutputs({
      loadBalancerDns: alb.dnsName,
      clusterArn: cluster.arn,
      serviceName: service.name,
    });
  }
}
```

### Example 4: Observability Stack

```typescript
// Structured logging
interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  timestamp: string;
  service: string;
  traceId?: string;
  spanId?: string;
  correlationId?: string;
  metadata?: Record<string, unknown>;
}

class StructuredLogger {
  private readonly service: string;

  constructor(service: string) {
    this.service = service;
  }

  public info(message: string, metadata?: Record<string, unknown>): void {
    this.emit({ level: 'info', message, metadata });
  }

  public error(message: string, error?: Error, metadata?: Record<string, unknown>): void {
    this.emit({
      level: 'error',
      message,
      metadata: {
        ...metadata,
        errorName: error?.name,
        errorMessage: error?.message,
        stackTrace: error?.stack,
      },
    });
  }

  public warn(message: string, metadata?: Record<string, unknown>): void {
    this.emit({ level: 'warn', message, metadata });
  }

  public debug(message: string, metadata?: Record<string, unknown>): void {
    this.emit({ level: 'debug', message, metadata });
  }

  private emit(entry: Omit<LogEntry, 'timestamp' | 'service'>): void {
    const logEntry: LogEntry = {
      ...entry,
      timestamp: new Date().toISOString(),
      service: this.service,
      traceId: process.env['TRACE_ID'],
      spanId: process.env['SPAN_ID'],
    };
    const output = JSON.stringify(logEntry);

    switch (entry.level) {
      case 'error':
        console.error(output);
        break;
      case 'warn':
        console.warn(output);
        break;
      default:
        console.log(output);
    }
  }
}

// Health check endpoint middleware
interface HealthCheckResult {
  status: 'healthy' | 'degraded' | 'unhealthy';
  checks: Record<string, { status: string; latency: number }>;
  uptime: number;
  version: string;
}

class HealthCheckRegistry {
  private checks: Map<string, () => Promise<boolean>> = new Map();
  private readonly startTime = Date.now();
  private readonly version: string;

  constructor(version: string) {
    this.version = version;
  }

  public register(name: string, check: () => Promise<boolean>): void {
    this.checks.set(name, check);
  }

  public async runAll(): Promise<HealthCheckResult> {
    const results: Record<string, { status: string; latency: number }> = {};
    let overallStatus: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';

    for (const [name, check] of this.checks) {
      const start = Date.now();
      try {
        const passed = await check();
        const latency = Date.now() - start;
        results[name] = {
          status: passed ? 'pass' : 'fail',
          latency,
        };
        if (!passed) {
          overallStatus = 'degraded';
        }
      } catch {
        results[name] = { status: 'fail', latency: Date.now() - start };
        overallStatus = 'unhealthy';
      }
    }

    if (Object.values(results).some((r) => r.status === 'fail')) {
      overallStatus = 'unhealthy';
    }

    return {
      status: overallStatus,
      checks: results,
      uptime: Date.now() - this.startTime,
      version: this.version,
    };
  }
}
```

### Example 5: Docker Multi-Stage Build Script

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /build

# Cache dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production && cp -R node_modules /prod_modules
RUN npm ci

# Build application
COPY tsconfig.json ./
COPY src/ ./src/
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app

# Copy production dependencies and built code
COPY --from=builder /prod_modules ./node_modules
COPY --from=builder /build/dist ./dist
COPY package.json ./

USER appuser
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
```

## Chapter Quiz

**Q1: What does CI stand for in DevOps?**
- A) Continuous Implementation
- B) Continuous Integration
- C) Code Integration
- D) Compiler Integration

**Answer: B** — Continuous Integration is the practice of merging code frequently with automated verification.

**Q2: In Gene Kim's Three Ways of DevOps, the First Way emphasises:**
- A) Feedback loops
- B) Systems thinking and flow
- C) Experimentation culture
- D) Security

**Answer: B** — The First Way focuses on the flow of work from development to operations.

**Q3: Which deployment strategy involves maintaining two identical environments and switching traffic between them?**
- A) Rolling
- B) Canary
- C) Blue-Green
- D) Recreate

**Answer: C** — Blue-Green maintains two environments and switches the load balancer.

**Q4: Which IaC tool allows you to write infrastructure definitions in TypeScript?**
- A) Terraform
- B) Ansible
- C) Pulumi
- D) CloudFormation

**Answer: C** — Pulumi supports TypeScript, Python, Go, and C#.

**Q5: The four golden signals of monitoring are:**
- A) CPU, Memory, Disk, Network
- B) Latency, Traffic, Errors, Saturation
- C) Build, Test, Deploy, Monitor
- D) Uptime, Reliability, Performance, Security

**Answer: B** — These four signals comprehensively describe service health from Google SRE.

## Summary

DevOps bridges development and operations through culture, automation, and measurement. CI integrates code changes frequently with automated builds and tests. CD extends this to automated deployment. Infrastructure as Code manages infrastructure through version-controlled definition files. Containerisation with Docker and orchestration with Kubernetes provide portable, scalable deployment. Deployment strategies (rolling, blue-green, canary) balance speed and safety. Observability through metrics, logging, tracing, and alerting provides system understanding. A complete DevOps pipeline automates the entire flow from commit to production with quality gates at each stage.

## Exercises

### Review Questions

1. What are the Three Ways of DevOps?
2. How does continuous delivery differ from continuous deployment?
3. What is the difference between declarative and imperative IaC approaches? Give examples.
4. Describe the blue-green deployment strategy and its advantages.
5. What are the four golden signals of monitoring?
6. What is the USE method for resource analysis?

### Application Problems

1. Design a CI pipeline for a microservices project with 10 services. Specify tools, stages, parallelisation strategy, and feedback mechanisms.

2. Write a Dockerfile for a Java Spring Boot application that uses multi-stage builds to minimise final image size.

3. Design a canary deployment plan for a critical payment service. Specify traffic percentages, duration of each phase, rollback criteria, and monitoring thresholds.

### Challenge Problem

A legacy monolithic application is deployed manually once per month by a senior operations engineer who is leaving the company. There are no automated tests, no CI, and no on-call monitoring. Infrastructure is configured manually in the AWS console. Design a six-month DevOps transformation plan. Address containerisation of the monolith, automated test adoption, CI pipeline construction, IaC for all infrastructure, blue-green deployment setup, monitoring and alerting with Prometheus and Grafana, and a runbook for incidents. Implement a TypeScript program that models the transformation milestones and tracks dependencies between initiatives.
