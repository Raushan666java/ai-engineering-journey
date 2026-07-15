# Capstone: Building a Complete Software System

## Learning Objectives

After completing this chapter, the student will be able to:
- Integrate all software engineering disciplines into a single project
- Apply process models, requirements, architecture, design, testing, and project management together
- Build a complete software system from specification through deployment
- Produce professional documentation at every stage
- Demonstrate traceability from requirements to code to tests
- Present a cohesive technical project report
- Plan and manage a 6-sprint development cycle
- Assess and mitigate project risks
- Deploy using blue-green deployment on Kubernetes

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/software-engineering/16-capstone/handwritten-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/software-engineering/16-capstone/handwritten-notes.svg" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/software-engineering/16-capstone/sticky-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/software-engineering/16-capstone/sticky-notes.svg" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/software-engineering/16-capstone/visual-explanation.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/software-engineering/16-capstone/visual-explanation.svg" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Capstone Overview

The capstone project integrates every topic covered in this course into a single, coherent development exercise. Students will specify, design, implement, test, and document a software system using the techniques from all 15 previous chapters.

```mermaid
graph LR
    CH1[Ch1: Process] --> CH2[Ch2: Requirements]
    CH2 --> CH3[Ch3: Modeling]
    CH3 --> CH4[Ch4: Architecture]
    CH4 --> CH5[Ch5: Design]
    CH5 --> CH6[Ch6: Testing]
    CH5 --> CH7[Ch7: Evolution]
    CH4 --> CH8[Ch8: Project Management]
    CH1 --> CH8
    CH5 --> CH9[Ch9: Quality]
    CH2 --> CH10[Ch10: CM]
    CH5 --> CH11[Ch11: Agile]
    CH6 --> CH12[Ch12: DevOps]
    CH5 --> CH13[Ch13: Security]
    CH5 --> CH14[Ch14: Formal Methods]
    CH6 --> CH15[Ch15: Metrics]
    CH8 --> CH16[Ch16: Capstone]
    CH11 --> CH16
    CH12 --> CH16
```

### Project Domain: SmartBuild Construction Management System

**SmartBuild** is a cloud-based construction project management platform that enables general contractors, subcontractors, and project owners to manage construction projects from planning through completion. The system handles document management, scheduling, budget tracking, change orders, inspections, and team communication.

**Key Features:**
- Project creation with scope, budget, and timeline
- Document management (blueprints, permits, contracts)
- Scheduling with Gantt charts and critical path tracking
- Budget and cost tracking with change order management
- Inspection and quality checklists
- Real-time team communication and notifications
- Role-based access for contractors, subs, owners, inspectors

## Phase 1: Process Selection and Planning

### Process Model

We adopt an **Agile/Scrum** process with 6 two-week sprints:

```mermaid
gantt
    title SmartBuild - 6 Sprint Development Plan
    dateFormat  YYYY-MM-DD
    
    section Sprint 1: Foundation
    Requirements & Architecture  :a1, 2025-06-02, 10d
    Database Schema & Auth Module :a2, after a1, 7d
    
    section Sprint 2: Core API
    Project & Document Management :b1, after a2, 10d
    Budget & Cost Tracking        :b2, after b1, 7d
    
    section Sprint 3: Scheduling
    Scheduler & Gantt Module      :c1, after b2, 10d
    Notification Service          :c2, after c1, 7d
    
    section Sprint 4: Quality & Inspections
    Inspection & Checklists       :d1, after c2, 10d
    Reporting Dashboard           :d2, after d1, 7d
    
    section Sprint 5: Integration
    API Integration & Testing     :e1, after d2, 10d
    Security Audit & Performance  :e2, after e1, 7d
    
    section Sprint 6: Deployment
    CI/CD Pipeline                :f1, after e2, 7d
    Blue-Green Deployment         :f2, after f1, 5d
```

### Scrum Configuration

| Artifact | Description |
|----------|-------------|
| **Sprint duration** | 2 weeks |
| **Product Owner** | Construction industry stakeholder |
| **Scrum Master** | Technical lead (rotating) |
| **Development Team** | 5-7 members (2 frontend, 2 backend, 1 DevOps, 1 QA, 1 SM) |
| **Velocity target** | 25-35 story points/sprint |
| **Definition of Done** | Code reviewed, tested (unit + integration), documented, deployed to staging |

### Work Breakdown Structure (WBS)

| Level 1 | Level 2 | Estimated Effort |
|---------|---------|------------------|
| **1.0 Requirements** | 1.1 Stakeholder interviews | 40 hrs |
| | 1.2 SRS document | 30 hrs |
| | 1.3 Use case diagrams | 15 hrs |
| **2.0 Architecture** | 2.1 System design | 35 hrs |
| | 2.2 Technology selection | 10 hrs |
| | 2.3 ADRs | 15 hrs |
| **3.0 Backend** | 3.1 Auth service | 50 hrs |
| | 3.2 Project service | 60 hrs |
| | 3.3 Document service | 45 hrs |
| | 3.4 Budget service | 55 hrs |
| | 3.5 Schedule service | 65 hrs |
| | 3.6 Notification service | 35 hrs |
| | 3.7 Inspection service | 40 hrs |
| **4.0 Frontend** | 4.1 Dashboard | 40 hrs |
| | 4.2 Project management UI | 50 hrs |
| | 4.3 Gantt chart component | 45 hrs |
| | 4.4 Document viewer | 30 hrs |
| **5.0 Testing** | 5.1 Unit tests | 60 hrs |
| | 5.2 Integration tests | 40 hrs |
| | 5.3 E2E tests | 35 hrs |
| | 5.4 Performance tests | 20 hrs |
| **6.0 DevOps** | 6.1 CI/CD pipeline | 25 hrs |
| | 6.2 Infrastructure as code | 30 hrs |
| | 6.3 Monitoring setup | 20 hrs |

### Milestones

| Milestone | Sprint | Date | Deliverable |
|-----------|--------|------|-------------|
| M1: Foundation Complete | Sprint 1 | Week 2 | Database schema, auth, project API |
| M2: Core Features Complete | Sprint 2 | Week 4 | Projects, documents, budget APIs |
| M3: Scheduling Complete | Sprint 3 | Week 6 | Gantt charts, notifications |
| M4: Quality Features Complete | Sprint 4 | Week 8 | Inspections, dashboards |
| M5: System Integration | Sprint 5 | Week 10 | All APIs integrated, security review |
| M6: Production Deployment | Sprint 6 | Week 12 | Live system with monitoring |

## Phase 2: Requirements Engineering

### Functional Requirements (20+)

| ID | Requirement | Priority | User Story |
|----|-------------|----------|------------|
| FR-01 | System shall support user registration with email/password and role selection | High | US-01 |
| FR-02 | System shall authenticate via JWT with refresh tokens | High | US-01 |
| FR-03 | System shall support role-based access (admin, contractor, subcontractor, owner, inspector) | High | US-02 |
| FR-04 | System shall support project creation with name, address, budget, timeline, and scope | High | US-03 |
| FR-05 | System shall support uploading, storing, and versioning documents (PDF, DWG, images) | High | US-04 |
| FR-06 | System shall support document approval workflows | Medium | US-04 |
| FR-07 | System shall support budget creation with cost categories and line items | High | US-05 |
| FR-08 | System shall track actual costs against budget in real time | High | US-05 |
| FR-09 | System shall support change order creation, approval, and budget adjustment | Medium | US-05 |
| FR-10 | System shall support project scheduling with task dependencies and milestones | High | US-06 |
| FR-11 | System shall display Gantt charts with critical path highlighting | High | US-06 |
| FR-12 | System shall send notifications on task updates, document approvals, and budget changes | Medium | US-07 |
| FR-13 | System shall support inspection checklists with pass/fail/n/a per item | High | US-08 |
| FR-14 | System shall record inspection results with photos and signatures | Medium | US-08 |
| FR-15 | System shall generate PDF inspection reports | Medium | US-08 |
| FR-16 | System shall provide a dashboard with project status, budget health, and schedule compliance | High | US-09 |
| FR-17 | System shall support daily logs (weather, crew, hours worked, materials used) | Medium | US-10 |
| FR-18 | System shall support full-text search across projects, documents, and tasks | Medium | US-11 |
| FR-19 | System shall provide audit logging of all critical operations | High | US-12 |
| FR-20 | System shall support export of reports to PDF and CSV | Low | US-13 |
| FR-21 | System shall support multi-tenant isolation (each contractor sees only their projects) | High | US-02 |
| FR-22 | System shall support real-time collaboration on task boards | Medium | US-14 |

### Non-Functional Requirements (10+)

| ID | Requirement | Target | Measurement |
|----|-------------|--------|-------------|
| NFR-01 | API response time (p95) | < 300ms | Load testing with k6 |
| NFR-02 | System availability | 99.9% uptime (8.76 hrs/yr max) | Prometheus + Grafana |
| NFR-03 | Authentication security | Argon2id password hashing, JWT with RS256 | Security audit |
| NFR-04 | Data encryption at rest | AES-256-GCM for PII and documents | Schema review |
| NFR-05 | Data encryption in transit | TLS 1.3 minimum | SSL Labs test |
| NFR-06 | Test coverage | > 85% line coverage | Jest coverage report |
| NFR-07 | Scalability | Support 1000 concurrent users | Load test |
| NFR-08 | Multi-tenant data isolation | No cross-tenant data leakage | Penetration test |
| NFR-09 | API documentation | OpenAPI 3.0 with Swagger UI | Spec validation |
| NFR-10 | Accessibility | WCAG 2.1 AA compliance | Accessibility audit |
| NFR-11 | Backup and recovery | RPO < 15 min, RTO < 1 hr | Disaster recovery test |
| NFR-12 | Audit trail completeness | All state-changing operations logged with actor, timestamp, before/after | Audit log review |

### User Stories

```
US-01: As a contractor, I want to register my company and add team members with roles so that we can collaboratively manage projects.
  Acceptance: Email + password registration, role assignment (admin, project manager, estimator), team invitation via email.

US-02: As a contractor, I want to create a construction project with address, budget, and timeline so that I can start planning work.
  Acceptance: Project form with name, address, total budget, start/end dates. Project dashboard created on submission.

US-03: As a project manager, I want to upload blueprints and contracts so that the team can access them.
  Acceptance: Drag-drop upload, version tracking, permission-based access, preview for PDF and images.

US-04: As a project manager, I want to create a budget with line items so that I can track costs.
  Acceptance: Budget categories (materials, labor, equipment, permits), line items with estimated cost, actual cost tracking.

US-05: As a project manager, I want to create a project schedule with task dependencies so that I can track progress.
  Acceptance: Task creation with duration, dependencies, assignees. Gantt chart visualization.

US-06: As a subcontractor, I want to receive notifications when I am assigned a task so that I can start work promptly.
  Acceptance: In-app notification + email. Notification preferences configurable.

US-07: As an inspector, I want to complete inspection checklists on-site using a mobile device so that I can record findings.
  Acceptance: Checklist templates, pass/fail/n/a per item, photo attachment, digital signature.

US-08: As a project owner, I want to view a dashboard showing project health so that I can assess status at a glance.
  Acceptance: Budget burnup, schedule progress, open issues, recent activity.

US-09: As a project manager, I want to create change orders so that I can manage scope changes.
  Acceptance: Change order with description, cost impact, schedule impact. Approval workflow.

US-10: As a contractor, I want to log daily site activities so that I have a record of progress.
  Acceptance: Daily log with weather, crew count, hours worked, materials received, work completed.
```

### Use Cases

| Use Case | Actor | Description | Precondition | Postcondition |
|----------|-------|-------------|--------------|---------------|
| UC-01: Register Company | Contractor | Register company and create admin account | None | Company created, admin user activated |
| UC-02: Create Project | Project Manager | Create new construction project with details | User authenticated, role = admin/PM | Project created in active status |
| UC-03: Upload Document | Project Manager | Upload document to project repository | User authenticated, project exists | Document stored, version created |
| UC-04: Approve Document | Inspector | Review and approve submitted document | Document in "pending_review" status | Document status = "approved" |
| UC-05: Track Budget | Project Manager | View and update budget line items | User authenticated, project exists | Budget updated with change tracking |
| UC-06: Create Change Order | Project Manager | Create change order with cost/schedule impact | User authenticated, project exists | Change order created for approval |
| UC-07: Build Schedule | Project Manager | Create Gantt chart with dependencies | User authenticated, project exists | Schedule generated with critical path |
| UC-08: Perform Inspection | Inspector | Complete inspection checklist on site | Inspection scheduled | Results recorded, report generated |
| UC-09: View Dashboard | Owner | View consolidated project dashboard | User authenticated, project exists | Dashboard rendered with live data |
| UC-10: Export Report | Project Manager | Export project report to PDF | User authenticated, project exists | PDF generated and downloadable |

## Phase 3: Architecture

### System Architecture Overview

```mermaid
graph TD
    subgraph "Client Layer"
        WEB[React SPA] 
        MOBILE[React Native Mobile]
    end
    
    subgraph "API Gateway"
        GW[API Gateway / Kong]
        GW --> RATE[Rate Limiter]
        GW --> AUTH[Auth Middleware]
    end
    
    subgraph "Microservices"
        AUTH_SVC[Auth Service]
        PROJ_SVC[Project Service]
        DOC_SVC[Document Service]
        BUDGET_SVC[Budget Service]
        SCHED_SVC[Schedule Service]
        NOTIF_SVC[Notification Service]
        INSP_SVC[Inspection Service]
        REPORT_SVC[Report Service]
    end
    
    subgraph "Event Bus"
        KAFKA[Kafka / Event Stream]
    end
    
    subgraph "Data Layer"
        PG[(PostgreSQL - Primary)]
        REDIS[(Redis - Cache)]
        S3[(S3 - Document Store)]
        ES[(ElasticSearch - Search)]
    end
    
    WEB --> GW
    MOBILE --> GW
    GW --> AUTH_SVC
    GW --> PROJ_SVC
    GW --> DOC_SVC
    GW --> BUDGET_SVC
    GW --> SCHED_SVC
    GW --> INSP_SVC
    GW --> REPORT_SVC
    
    PROJ_SVC -->|Event| KAFKA
    DOC_SVC -->|Event| KAFKA
    BUDGET_SVC -->|Event| KAFKA
    SCHED_SVC -->|Event| KAFKA
    
    KAFKA --> NOTIF_SVC
    KAFKA --> ES
    
    AUTH_SVC --> PG
    PROJ_SVC --> PG
    BUDGET_SVC --> PG
    SCHED_SVC --> PG
    INSP_SVC --> PG
    
    DOC_SVC --> S3
    PROJ_SVC --> REDIS
    REPORT_SVC --> REDIS
    
    subgraph "CQRS"
        PROJ_SVC -->|Write| PG
        ES -->|Read| REPORT_SVC
    end
    
    subgraph "Observability"
        PROM[Prometheus] --> GRAF[Grafana]
        API -->|Metrics| PROM
        LOKI[Loki - Logs]
        TEMPO[Tempo - Traces]
    end
```

### Architecture Style: Microservices + Event-Driven + CQRS

| Pattern | Application | Rationale |
|---------|-------------|-----------|
| **Microservices** | Service-per-domain (auth, project, budget, schedule, etc.) | Independent deployability, team autonomy, technology flexibility |
| **Event-Driven** | Kafka event bus for cross-service communication | Loose coupling, async processing, audit trail |
| **CQRS** | Separate read/write paths for reporting | Optimise reads (ElasticSearch) without impacting write performance |
| **API Gateway** | Kong for routing, rate limiting, auth | Centralised cross-cutting concerns |
| **Saga Pattern** | Distributed transactions via Kafka | Handle multi-service operations (e.g., change order → budget + schedule) |
| **Strangler Fig** | Incremental migration path | Allow phased adoption of microservices |

### 4-Layer Architecture

```mermaid
graph TD
    subgraph "Layer 4: Presentation"
        REACT[React Components]
        MOBILE[React Native Screens]
    end
    
    subgraph "Layer 3: API / Application"
        REST[REST Controllers]
        WS[WebSocket Handlers]
        GRAPHQL[GraphQL Resolvers]
    end
    
    subgraph "Layer 2: Domain / Service"
        PROJ_DOMAIN[Project Domain]
        BUDGET_DOMAIN[Budget Domain]
        SCHED_DOMAIN[Schedule Domain]
        DOC_DOMAIN[Document Domain]
    end
    
    subgraph "Layer 1: Infrastructure / Data"
        REPO[Repositories]
        EVENT[Event Publishers]
        FILE[File Storage]
        CACHE[Cache Provider]
    end
    
    REACT --> REST
    MOBILE --> WS
    REST --> PROJ_DOMAIN
    REST --> BUDGET_DOMAIN
    WS --> SCHED_DOMAIN
    
    PROJ_DOMAIN --> REPO
    PROJ_DOMAIN --> EVENT
    BUDGET_DOMAIN --> REPO
    BUDGET_DOMAIN --> EVENT
    SCHED_DOMAIN --> REPO
    DOC_DOMAIN --> FILE
    DOC_DOMAIN --> REPO
```

### Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend** | React 18 + TypeScript + Tailwind CSS | Industry standard, component reuse |
| **Mobile** | React Native + Expo | Code sharing with web |
| **API Gateway** | Kong | Battle-tested, plugin ecosystem |
| **Backend** | Node.js + Express + TypeScript | Fast development, type safety |
| **Database** | PostgreSQL 16 + TimescaleDB | ACID, time-series for metrics |
| **Cache** | Redis 7 | Session store, rate limiting, pub/sub |
| **Search** | ElasticSearch 8 | Full-text search across entities |
| **Event Bus** | Apache Kafka + Schema Registry | Durable event stream, schema evolution |
| **Object Storage** | MinIO (S3-compatible) | Document storage |
| **Container** | Docker + Kubernetes | Orchestration, scaling |
| **CI/CD** | GitHub Actions + ArgoCD | GitOps deployment |
| **Monitoring** | Prometheus + Grafana + Loki + Tempo | Metrics, logs, traces |
| **API Docs** | OpenAPI 3.0 + Swagger | Standardised documentation |

### Service Boundaries

| Service | Responsibility | Data Owned | Events Published |
|---------|---------------|------------|------------------|
| **Auth Service** | User management, roles, authentication, JWT | Users, Roles, Permissions | UserRegistered, RoleChanged |
| **Project Service** | Project CRUD, team membership, settings | Projects, ProjectMembers | ProjectCreated, MemberAdded |
| **Document Service** | Document upload, versioning, approval workflows | Documents, DocumentVersions | DocumentUploaded, DocumentApproved |
| **Budget Service** | Budget lines, actual costs, change orders, forecasts | Budgets, CostLines, ChangeOrders | BudgetUpdated, ChangeOrderCreated |
| **Schedule Service** | Tasks, dependencies, Gantt, critical path | Tasks, Dependencies, Milestones | TaskUpdated, MilestoneReached |
| **Notification Service** | Email, in-app, push notifications | NotificationLogs | (consumer only) |
| **Inspection Service** | Checklists, inspection results, reports | Checklists, InspectionResults | InspectionCompleted |
| **Report Service** | PDF/CSV generation, dashboard aggregation | ReportCache | (consumer only) |

## Phase 4: Detailed Design

### Domain Model

```
Company
  id: UUID
  name: string
  address: Address
  subscriptionTier: Tier
  createdAt: DateTime

User
  id: UUID
  companyId: UUID
  email: string (unique)
  passwordHash: string
  name: string
  role: enum (admin, pm, estimator, inspector, subcontractor, owner)
  phone: string
  avatarUrl: string?
  isActive: boolean

Project
  id: UUID
  companyId: UUID
  name: string
  address: Address
  totalBudget: Money
  startDate: Date
  endDate: Date
  status: enum (planning, active, on_hold, completed, cancelled)
  scope: text
  createdAt: DateTime

Document
  id: UUID
  projectId: UUID
  uploadedBy: UUID
  name: string
  category: enum (blueprint, contract, permit, photo, report, other)
  fileUrl: string
  fileSize: number
  mimeType: string
  version: int
  status: enum (draft, pending_review, approved, rejected)
  metadata: JSON

Budget
  id: UUID
  projectId: UUID
  categories: BudgetCategory[]
  totalEstimated: Money
  totalActual: Money
  contingencyPercent: number
  lastUpdated: DateTime

BudgetCategory
  id: UUID
  budgetId: UUID
  name: string
  estimatedAmount: Money
  actualAmount: Money
  lineItems: BudgetLineItem[]

ChangeOrder
  id: UUID
  projectId: UUID
  title: string
  description: text
  costImpact: Money
  scheduleImpact: int (days)
  status: enum (draft, pending_approval, approved, rejected)
  createdBy: UUID
  approvedBy: UUID?

Task
  id: UUID
  projectId: UUID
  name: string
  description: text
  duration: int (days)
  startDate: Date
  endDate: Date
  assigneeId: UUID?
  status: enum (not_started, in_progress, completed, delayed)
  progress: int (0-100)
  dependencies: TaskDependency[]
  milestone: boolean

InspectionChecklist
  id: UUID
  projectId: UUID
  name: string
  category: string
  items: ChecklistItem[]
  scheduledDate: Date
  completedDate: Date?
  inspectorId: UUID
  status: enum (scheduled, in_progress, completed)

DailyLog
  id: UUID
  projectId: UUID
  date: Date
  weather: string
  temperature: number
  crewCount: int
  hoursWorked: number
  materialsReceived: string[]
  workCompleted: text
  issues: text
  createdBy: UUID
```

## Phase 5: Implementation

### SmartBuildSystem: Core System Orchestrator

```typescript
interface SystemConfig {
  services: { name: string; enabled: boolean; port: number; replicas: number }[];
  database: { host: string; port: number; name: string; poolSize: number };
  kafka: { brokers: string[]; topicPrefix: string; partitions: number };
  redis: { host: string; port: number; keyPrefix: string };
  storage: { endpoint: string; bucket: string; region: string };
  auth: { jwtSecret: string; tokenExpiry: number; refreshExpiry: number };
}

interface ServiceStatus {
  name: string; healthy: boolean; uptime: number; lastHealthCheck: Date;
  responseTime: number; version: string;
}

class SmartBuildSystem {
  private readonly config: SystemConfig;
  private services: Map<string, ServiceStatus> = new Map();
  private eventBusInitialized = false;

  constructor(config: SystemConfig) {
    this.config = config;
  }

  public async initialize(): Promise<{ success: boolean; servicesStarted: number; errors: string[] }> {
    const errors: string[] = [];
    let started = 0;

    console.log('SmartBuild v2.0 initializing...');
    console.log(`Target ${this.config.services.length} services`);

    for (const svc of this.config.services) {
      if (svc.enabled) {
        try {
          const status: ServiceStatus = {
            name: svc.name, healthy: true, uptime: 0,
            lastHealthCheck: new Date(), responseTime: 0, version: '2.0.0',
          };
          this.services.set(svc.name, status);
          started++;
          console.log(`  ✓ ${svc.name} started on port ${svc.port}`);
        } catch (error) {
          errors.push(`Failed to start ${svc.name}: ${error}`);
        }
      }
    }

    try {
      await this.connectDatabase();
      await this.connectEventBus();
      await this.connectCache();
      await this.connectStorage();
    } catch (error) {
      errors.push(`Infrastructure connection failed: ${error}`);
      return { success: false, servicesStarted: started, errors };
    }

    console.log(`SmartBuild initialized: ${started}/${this.config.services.length} services`);
    return { success: errors.length === 0, servicesStarted: started, errors };
  }

  private async connectDatabase(): Promise<void> {
    console.log(`Connecting to PostgreSQL at ${this.config.database.host}:${this.config.database.port}/${this.config.database.name}`);
  }

  private async connectEventBus(): Promise<void> {
    console.log(`Connecting to Kafka at ${this.config.kafka.brokers.join(', ')}`);
    this.eventBusInitialized = true;
  }

  private async connectCache(): Promise<void> {
    console.log(`Connecting to Redis at ${this.config.redis.host}:${this.config.redis.port}`);
  }

  private async connectStorage(): Promise<void> {
    console.log(`Connecting to S3-compatible storage at ${this.config.storage.endpoint}`);
  }

  public async healthCheck(): Promise<{ overall: 'healthy' | 'degraded' | 'down'; services: ServiceStatus[] }> {
    const statuses = Array.from(this.services.values());
    const healthy = statuses.filter(s => s.healthy).length;
    const total = statuses.length;
    for (const s of statuses) {
      s.lastHealthCheck = new Date();
      s.uptime += 1;
    }
    return {
      overall: healthy === total ? 'healthy' : healthy > 0 ? 'degraded' : 'down',
      services: statuses,
    };
  }

  public async publishEvent(topic: string, event: object): Promise<boolean> {
    if (!this.eventBusInitialized) {
      console.warn('Event bus not initialized, event queued locally');
      return false;
    }
    console.log(`Event published to ${this.config.kafka.topicPrefix}.${topic}:`, JSON.stringify(event).substring(0, 100));
    return true;
  }

  public getConfig(): SystemConfig { return { ...this.config }; }

  public getService(name: string): ServiceStatus | undefined {
    return this.services.get(name);
  }
}

// Example usage
const smartBuild = new SmartBuildSystem({
  services: [
    { name: 'auth-service', enabled: true, port: 3001, replicas: 2 },
    { name: 'project-service', enabled: true, port: 3002, replicas: 3 },
    { name: 'document-service', enabled: true, port: 3003, replicas: 2 },
    { name: 'budget-service', enabled: true, port: 3004, replicas: 2 },
    { name: 'schedule-service', enabled: true, port: 3005, replicas: 3 },
    { name: 'notification-service', enabled: true, port: 3006, replicas: 1 },
    { name: 'inspection-service', enabled: true, port: 3007, replicas: 2 },
    { name: 'report-service', enabled: true, port: 3008, replicas: 1 },
  ],
  database: { host: 'postgres-cluster', port: 5432, name: 'smartbuild', poolSize: 20 },
  kafka: { brokers: ['kafka-1:9092', 'kafka-2:9092'], topicPrefix: 'sb', partitions: 6 },
  redis: { host: 'redis-cluster', port: 6379, keyPrefix: 'sb:' },
  storage: { endpoint: 'https://minio.smartbuild.io', bucket: 'smartbuild-docs', region: 'us-east-1' },
  auth: { jwtSecret: process.env['JWT_SECRET'] ?? 'dev-secret', tokenExpiry: 3600, refreshExpiry: 604800 },
});

// Auth controller
class AuthController {
  constructor(private readonly system: SmartBuildSystem) {}

  public async register(email: string, password: string, name: string, companyName: string, role: string): Promise<{ userId: string; token: string }> {
    console.log(`Registering user ${email} for ${companyName}`);
    const token = 'jwt-placeholder';
    await this.system.publishEvent('user.registered', { email, name, companyName, role });
    return { userId: crypto.randomUUID(), token };
  }

  public async login(email: string, password: string): Promise<{ token: string; refreshToken: string } | null> {
    console.log(`Authenticating user ${email}`);
    return { token: 'jwt-placeholder', refreshToken: crypto.randomUUID() };
  }
}
```

### Budget Service with Event Sourcing

```typescript
interface BudgetEvent {
  type: 'BUDGET_CREATED' | 'COST_ADDED' | 'CHANGE_ORDER_APPROVED' | 'BUDGET_ADJUSTED';
  projectId: string;
  amount: number;
  timestamp: Date;
  userId: string;
  metadata: Record<string, unknown>;
}

class BudgetService {
  private events: BudgetEvent[] = [];
  private snapshots: Map<string, { totalBudget: number; spent: number; remaining: number }> = new Map();

  constructor(private readonly system: SmartBuildSystem) {}

  public async createBudget(projectId: string, totalAmount: number, userId: string): Promise<void> {
    const event: BudgetEvent = {
      type: 'BUDGET_CREATED',
      projectId,
      amount: totalAmount,
      timestamp: new Date(),
      userId,
      metadata: {},
    };
    this.applyEvent(event);
    await this.system.publishEvent('budget.created', event);
  }

  public async addActualCost(projectId: string, cost: number, description: string, userId: string): Promise<{ overBudget: boolean; remaining: number }> {
    const event: BudgetEvent = {
      type: 'COST_ADDED',
      projectId,
      amount: cost,
      timestamp: new Date(),
      userId,
      metadata: { description },
    };
    this.applyEvent(event);
    await this.system.publishEvent('budget.costAdded', event);
    const snapshot = this.snapshots.get(projectId);
    if (!snapshot) return { overBudget: false, remaining: 0 };
    return { overBudget: snapshot.remaining < 0, remaining: snapshot.remaining };
  }

  public async approveChangeOrder(projectId: string, amount: number, changeOrderId: string, userId: string): Promise<void> {
    const event: BudgetEvent = {
      type: 'CHANGE_ORDER_APPROVED',
      projectId,
      amount,
      timestamp: new Date(),
      userId,
      metadata: { changeOrderId },
    };
    this.applyEvent(event);
    await this.system.publishEvent('budget.changeOrderApproved', event);
  }

  private applyEvent(event: BudgetEvent): void {
    this.events.push(event);
    switch (event.type) {
      case 'BUDGET_CREATED':
        this.snapshots.set(event.projectId, { totalBudget: event.amount, spent: 0, remaining: event.amount });
        break;
      case 'COST_ADDED': {
        const s = this.snapshots.get(event.projectId);
        if (s) { s.spent += event.amount; s.remaining = s.totalBudget - s.spent; }
        break;
      }
      case 'CHANGE_ORDER_APPROVED': {
        const s = this.snapshots.get(event.projectId);
        if (s) { s.totalBudget += event.amount; s.remaining = s.totalBudget - s.spent; }
        break;
      }
    }
  }

  public getBudgetStatus(projectId: string): { totalBudget: number; spent: number; remaining: number; pctUsed: number } | null {
    const s = this.snapshots.get(projectId);
    if (!s) return null;
    return { ...s, pctUsed: s.totalBudget > 0 ? Math.round((s.spent / s.totalBudget) * 100) : 0 };
  }

  public replayEvents(projectId: string): void {
    this.snapshots.delete(projectId);
    for (const e of this.events.filter(e => e.projectId === projectId)) {
      this.applyEvent(e);
    }
  }

  public getChangeOrderImpact(projectId: string): { totalApproved: number; pendingCount: number } {
    const approvedChanges = this.events
      .filter(e => e.projectId === projectId && e.type === 'CHANGE_ORDER_APPROVED');
    return {
      totalApproved: approvedChanges.reduce((s, e) => s + e.amount, 0),
      pendingCount: 0,
    };
  }
}

// Schedule service with critical path calculation
interface TaskNode {
  id: string; name: string; duration: number;
  dependencies: string[]; earlyStart: number; earlyFinish: number;
  lateStart: number; lateFinish: number; slack: number;
}

class ScheduleService {
  public calculateCriticalPath(tasks: TaskNode[]): { criticalPath: string[]; totalDuration: number; slackByTask: Record<string, number> } {
    // Forward pass: calculate early start and early finish
    const nodeMap = new Map(tasks.map(t => [t.id, { ...t, earlyStart: 0, earlyFinish: 0, lateStart: 0, lateFinish: 0, slack: 0 }]));
    const sorted = this.topologicalSort(tasks);

    for (const id of sorted) {
      const node = nodeMap.get(id)!;
      if (node.dependencies.length === 0) {
        node.earlyStart = 0;
      } else {
        node.earlyStart = Math.max(...node.dependencies.map(d => nodeMap.get(d)?.earlyFinish ?? 0));
      }
      node.earlyFinish = node.earlyStart + node.duration;
    }

    // Backward pass: calculate late start and late finish
    const maxFinish = Math.max(...Array.from(nodeMap.values()).map(n => n.earlyFinish));
    for (const id of [...sorted].reverse()) {
      const node = nodeMap.get(id)!;
      const successors = Array.from(nodeMap.values()).filter(n => n.dependencies.includes(id));
      if (successors.length === 0) {
        node.lateFinish = maxFinish;
      } else {
        node.lateFinish = Math.min(...successors.map(s => s.lateStart));
      }
      node.lateStart = node.lateFinish - node.duration;
      node.slack = node.lateStart - node.earlyStart;
    }

    const criticalPath = Array.from(nodeMap.values())
      .filter(n => n.slack === 0)
      .sort((a, b) => a.earlyStart - b.earlyStart)
      .map(n => n.name);

    const slackByTask: Record<string, number> = {};
    for (const [id, node] of nodeMap) slackByTask[id] = node.slack;

    return { criticalPath, totalDuration: maxFinish, slackByTask };
  }

  private topologicalSort(tasks: TaskNode[]): string[] {
    const visited = new Set<string>();
    const result: string[] = [];
    const temp = new Set<string>();
    const adj = new Map(tasks.map(t => [t.id, t.dependencies]));

    const dfs = (id: string): void => {
      if (temp.has(id)) throw new Error('Cycle detected in task dependencies');
      if (visited.has(id)) return;
      temp.add(id);
      for (const dep of adj.get(id) ?? []) dfs(dep);
      temp.delete(id);
      visited.add(id);
      result.push(id);
    };

    for (const task of tasks) dfs(task.id);
    return result;
  }
}
```

### Notification Service with Template Engine

```typescript
interface Notification {
  id: string; userId: string; type: string; title: string; body: string;
  channel: 'email' | 'in_app' | 'push'; status: 'pending' | 'sent' | 'failed';
  read: boolean; createdAt: Date;
}

class NotificationService {
  private templates: Map<string, (data: Record<string, string>) => { title: string; body: string }> = new Map();
  private notifications: Notification[] = [];

  constructor() {
    this.registerTemplate('task.assigned', (data) => ({
      title: `New Task: ${data['taskName']}`,
      body: `You have been assigned "${data['taskName']}" in project ${data['projectName']}. Due: ${data['dueDate']}.`,
    }));
    this.registerTemplate('document. approved', (data) => ({
      title: 'Document Approved',
      body: `"${data['documentName']}" has been approved by ${data['approverName']}.`,
    }));
    this.registerTemplate('change_order.created', (data) => ({
      title: `Change Order: ${data['changeOrderTitle']}`,
      body: `A change order for $${data['costImpact']} has been created by ${data['createdByName']}. Pending approval.`,
    }));
    this.registerTemplate('inspection.scheduled', (data) => ({
      title: 'Inspection Scheduled',
      body: `An inspection for "${data['checklistName']}" is scheduled for ${data['scheduledDate']} at ${data['projectName']}.`,
    }));
    this.registerTemplate('budget.alert', (data) => ({
      title: 'Budget Alert',
      body: `Project ${data['projectName']} has used ${data['pctUsed']}% of budget ($${data['spent']} of $${data['budget']}).`,
    }));
  }

  private registerTemplate(type: string, renderer: (data: Record<string, string>) => { title: string; body: string }): void {
    this.templates.set(type, renderer);
  }

  public send(userId: string, type: string, data: Record<string, string>, channel: Notification['channel']): Notification {
    const template = this.templates.get(type);
    if (!template) throw new Error(`Unknown notification type: ${type}`);
    const { title, body } = template(data);
    const notification: Notification = {
      id: crypto.randomUUID(), userId, type, title, body,
      channel, status: 'pending', read: false, createdAt: new Date(),
    };
    this.notifications.push(notification);
    this.deliver(notification);
    return notification;
  }

  private deliver(notification: Notification): void {
    console.log(`[${notification.channel.toUpperCase()}] To: ${notification.userId} | ${notification.title}`);
    notification.status = 'sent';
  }

  public markRead(notificationId: string): void {
    const n = this.notifications.find(n => n.id === notificationId);
    if (n) n.read = true;
  }

  public getUnread(userId: string): Notification[] {
    return this.notifications.filter(n => n.userId === userId && !n.read);
  }

  public getHistory(userId: string, limit: number = 50): Notification[] {
    return this.notifications
      .filter(n => n.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }

  public getStats(): { total: number; sent: number; failed: number; byChannel: Record<string, number> } {
    const byChannel: Record<string, number> = {};
    for (const n of this.notifications) byChannel[n.channel] = (byChannel[n.channel] ?? 0) + 1;
    return {
      total: this.notifications.length,
      sent: this.notifications.filter(n => n.status === 'sent').length,
      failed: this.notifications.filter(n => n.status === 'failed').length,
      byChannel,
    };
  }
}
```

## Phase 6: Risk Assessment

### Risk Assessment Matrix

```mermaid
graph TD
    subgraph "Risk Matrix (Probability × Impact)"
        direction LR
        L1[Likelihood]
    end
    
    subgraph "Impact"
        I1[Negligible]
        I2[Minor]
        I3[Moderate]
        I4[Critical]
        I5[Cata-strophic]
    end
    
    subgraph "Probability"
        P5[Very Likely]
        P4[Likely]
        P3[Possible]
        P2[Unlikely]
        P1[Rare]
    end
```

| Risk ID | Risk Description | Probability (1-5) | Impact (1-5) | Exposure (P×I) | Response Strategy | Mitigation Plan |
|---------|-----------------|-------------------|--------------|----------------|-------------------|-----------------|
| R-01 | Scope creep due to changing construction regulations | 4 | 4 | 16 (High) | Mitigate | Weekly regulatory review, buffer in backlog, change control board |
| R-02 | Integration complexity with legacy construction ERP systems | 3 | 5 | 15 (High) | Mitigate | API-first design, adapter pattern, contract testing |
| R-03 | Performance degradation with large Gantt charts (>1000 tasks) | 3 | 4 | 12 (High) | Mitigate | Virtual scrolling, server-side rendering, pagination |
| R-04 | Data migration errors from existing spreadsheets/software | 4 | 3 | 12 (High) | Accept/Monitor | Staged migration, validation scripts, rollback plan |
| R-05 | Team member turnover (key developer leaves) | 2 | 4 | 8 (Medium) | Mitigate | Cross-training, documentation, pair programming |
| R-06 | Security vulnerability in third-party document viewer | 2 | 4 | 8 (Medium) | Transfer | Security SLA with vendor, sandboxed viewer, CSP headers |
| R-07 | Mobile app performance on low-end devices | 3 | 2 | 6 (Medium) | Mitigate | Progressive web app fallback, offline-first, image optimisation |
| R-08 | Database contention on concurrent budget updates | 2 | 3 | 6 (Medium) | Mitigate | Optimistic locking, CQRS separation, async writes |
| R-09 | Browser compatibility issues with WebSocket notifications | 2 | 2 | 4 (Low) | Accept | Polling fallback for IE11, graceful degradation |
| R-10 | Cloud provider service outage | 1 | 5 | 5 (Medium) | Transfer/Mitigate | Multi-AZ deployment, backup region, DR plan documented |

### RiskAssessmentMatrix Class

```typescript
interface RiskItem {
  id: string; description: string; probability: number; impact: number;
  exposure: number; response: 'mitigate' | 'accept' | 'transfer' | 'avoid';
  mitigation: string; owner: string; status: 'open' | 'monitoring' | 'closed';
}

class RiskAssessmentMatrix {
  private risks: RiskItem[] = [];

  public addRisk(risk: Omit<RiskItem, 'id' | 'exposure' | 'status'>): RiskItem {
    const newRisk: RiskItem = {
      ...risk,
      id: `R-${String(this.risks.length + 1).padStart(2, '0')}`,
      exposure: risk.probability * risk.impact,
      status: 'open',
    };
    this.risks.push(newRisk);
    return newRisk;
  }

  public getHighExposureRisks(threshold: number = 10): RiskItem[] {
    return this.risks.filter(r => r.exposure >= threshold && r.status !== 'closed');
  }

  public getRiskHeatmap(): { quadrant: string; risks: RiskItem[]; count: number }[] {
    const quadrants = [
      { quadrant: 'Critical (High P × High I)', filter: (r: RiskItem) => r.probability >= 3 && r.impact >= 4 },
      { quadrant: 'High Priority (High P × Med I / Med P × High I)', filter: (r: RiskItem) => (r.probability >= 4 && r.impact >= 2) || (r.probability >= 2 && r.impact >= 4) },
      { quadrant: 'Medium Priority', filter: (r: RiskItem) => r.exposure >= 6 && r.exposure < 12 },
      { quadrant: 'Low Priority', filter: (r: RiskItem) => r.exposure < 6 },
    ];
    return quadrants.map(q => {
      const risks = this.risks.filter(q.filter);
      return { ...q, risks, count: risks.length };
    });
  }

  public closeRisk(riskId: string): void {
    const risk = this.risks.find(r => r.id === riskId);
    if (risk) risk.status = 'closed';
  }

  public updateStatus(riskId: string, status: RiskItem['status']): void {
    const risk = this.risks.find(r => r.id === riskId);
    if (risk) risk.status = status;
  }

  public getRiskReport(): string {
    const lines: string[] = ['=== Risk Assessment Report ==='];
    const byExposure = [...this.risks].sort((a, b) => b.exposure - a.exposure);
    for (const r of byExposure) {
      const statusIcon = r.status === 'closed' ? '✓' : r.status === 'monitoring' ? '◉' : '✗';
      lines.push(`${statusIcon} ${r.id} [${r.exposure}] ${r.description} (P=${r.probability}, I=${r.impact})`);
      lines.push(`  Response: ${r.response} | Owner: ${r.owner} | Status: ${r.status}`);
      lines.push(`  Mitigation: ${r.mitigation}`);
    }
    const open = this.risks.filter(r => r.status !== 'closed').length;
    const high = this.getHighExposureRisks().length;
    lines.push(`\nSummary: ${this.risks.length} total, ${open} open, ${high} high exposure`);
    return lines.join('\n');
  }
}

// Example risk assessment
const riskMatrix = new RiskAssessmentMatrix();
riskMatrix.addRisk({ description: 'Scope creep from regulatory changes', probability: 4, impact: 4, response: 'mitigate', mitigation: 'Weekly regulatory scan + change board', owner: 'PM' });
riskMatrix.addRisk({ description: 'ERP integration complexity', probability: 3, impact: 5, response: 'mitigate', mitigation: 'API adapter pattern + contract tests', owner: 'Tech Lead' });
riskMatrix.addRisk({ description: 'Gantt chart performance', probability: 3, impact: 4, response: 'mitigate', mitigation: 'Virtual scrolling + server-side rendering', owner: 'Frontend Lead' });
console.log(riskMatrix.getRiskReport());
```

## Phase 7: Quality Plan

### Test Levels

| Level | Scope | Tool | Target Coverage | CI/CD Gate |
|-------|-------|------|-----------------|------------|
| **Unit** | Individual functions, classes | Vitest | > 90% lines | Required to pass |
| **Integration** | Service + database, service + Kafka | TestContainers | Core paths | Required to pass |
| **Contract** | API provider/consumer contracts | Pact | All service boundaries | Required to pass |
| **API/E2E** | Full HTTP request/response | Supertest + Playwright | All routes + critical user journeys | Required to pass |
| **Performance** | Load test, stress test | k6 | N/A (thresholds) | Warning if p95 > 500ms |
| **Security** | SAST, SCA, DAST | Semgrep, Snyk, OWASP ZAP | Zero critical/high findings | Required to pass |
| **Accessibility** | WCAG compliance | axe-core | AA compliance | Warning only |

### CI/CD Gates

| Gate | Stage | Tool | Threshold | Action on Failure |
|------|-------|------|-----------|-------------------|
| Code quality | Lint | ESLint | 0 errors | Block PR merge |
| Type checking | Compile | TypeScript | 0 errors | Block PR merge |
| Unit tests | Test | Vitest | 100% pass, > 85% coverage | Block PR merge |
| Security scan | SAST | Semgrep | 0 critical/high | Block PR merge |
| Dependency audit | SCA | Snyk | 0 critical | Block PR merge |
| Build | Package | Docker | Success | Block PR merge |
| Integration tests | Test | Vitest + TC | 100% pass | Block deploy |
| E2E tests | Test | Playwright | 100% pass | Block deploy |
| Performance | Load | k6 | p95 < 500ms | Warning, manual review |
| Container scan | Security | Trivy | 0 critical | Block deploy |

### SprintPlanner Class

```typescript
interface SprintTask {
  id: string; name: string; estimatedHours: number; actualHours: number;
  assignee: string; status: 'todo' | 'in_progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'critical';
  dependencies: string[];
}

interface Sprint {
  id: string; name: string; startDate: Date; endDate: Date;
  capacity: number; tasks: SprintTask[]; goal: string;
}

class SprintPlanner {
  private sprints: Sprint[] = [];
  private velocityHistory: number[] = [];

  public createSprint(name: string, startDate: Date, endDate: Date, capacity: number, goal: string): Sprint {
    const sprint: Sprint = {
      id: `SP${this.sprints.length + 1}`, name, startDate, endDate,
      capacity, tasks: [], goal,
    };
    this.sprints.push(sprint);
    return sprint;
  }

  public addTask(sprintId: string, task: Omit<SprintTask, 'id' | 'actualHours'>): SprintTask {
    const sprint = this.sprints.find(s => s.id === sprintId);
    if (!sprint) throw new Error(`Sprint ${sprintId} not found`);
    const newTask: SprintTask = { ...task, id: `T${sprint.tasks.length + 1}`, actualHours: 0 };
    sprint.tasks.push(newTask);
    return newTask;
  }

  public updateTask(sprintId: string, taskId: string, updates: Partial<SprintTask>): void {
    const sprint = this.sprints.find(s => s.id === sprintId);
    const task = sprint?.tasks.find(t => t.id === taskId);
    if (task) Object.assign(task, updates);
  }

  public getSprintBurndown(sprintId: string): { day: number; remainingHours: number; ideal: number }[] {
    const sprint = this.sprints.find(s => s.id === sprintId);
    if (!sprint) return [];
    const totalDays = Math.ceil((sprint.endDate.getTime() - sprint.startDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalHours = sprint.tasks.reduce((s, t) => s + t.estimatedHours, 0);
    const completedHours = sprint.tasks.filter(t => t.status === 'done').reduce((s, t) => s + t.estimatedHours, 0);
    const dailyBurnRate = totalHours / totalDays;

    const burndown: { day: number; remainingHours: number; ideal: number }[] = [];
    for (let day = 0; day <= totalDays; day++) {
      burndown.push({
        day,
        remainingHours: totalHours - completedHours - dailyBurnRate * day,
        ideal: totalHours - dailyBurnRate * day,
      });
    }
    return burndown;
  }

  public getSprintProgress(sprintId: string): { pctComplete: number; onTrack: boolean; tasksDone: number; tasksTotal: number } {
    const sprint = this.sprints.find(s => s.id === sprintId);
    if (!sprint) return { pctComplete: 0, onTrack: false, tasksDone: 0, tasksTotal: 0 };
    const done = sprint.tasks.filter(t => t.status === 'done').length;
    const pct = sprint.tasks.length > 0 ? Math.round(done / sprint.tasks.length * 100) : 0;
    const pctTime = (Date.now() - sprint.startDate.getTime()) / (sprint.endDate.getTime() - sprint.startDate.getTime());
    return { pctComplete: pct, onTrack: pct >= pctTime * 100, tasksDone: done, tasksTotal: sprint.tasks.length };
  }

  public recordVelocity(storyPoints: number): void {
    this.velocityHistory.push(storyPoints);
  }

  public predictVelocity(historyCount: number = 3): { average: number; min: number; max: number; confidence: number } {
    const recent = this.velocityHistory.slice(-historyCount);
    if (recent.length === 0) return { average: 0, min: 0, max: 0, confidence: 0 };
    const avg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const min = Math.min(...recent);
    const max = Math.max(...recent);
    const stdDev = Math.sqrt(recent.reduce((s, v) => s + Math.pow(v - avg, 2), 0) / recent.length);
    const cv = avg > 0 ? stdDev / avg : 1;
    return {
      average: Math.round(avg * 10) / 10,
      min,
      max,
      confidence: Math.round((1 - cv) * 100),
    };
  }

  public generateSprintReport(sprintId: string): string {
    const sprint = this.sprints.find(s => s.id === sprintId);
    if (!sprint) return 'Sprint not found';
    const progress = this.getSprintProgress(sprintId);
    const lines: string[] = [
      `=== Sprint Report: ${sprint.name} ===`,
      `Goal: ${sprint.goal}`,
      `Period: ${sprint.startDate.toDateString()} - ${sprint.endDate.toDateString()}`,
      `Progress: ${progress.pctComplete}% (${progress.tasksDone}/${progress.tasksTotal} tasks)`,
      `On Track: ${progress.onTrack ? 'Yes' : 'No'}`,
      '',
      'Tasks:',
    ];
    for (const t of sprint.tasks.sort((a, b) => a.status.localeCompare(b.status))) {
      const icon = t.status === 'done' ? '✓' : t.status === 'in_progress' ? '◉' : t.status === 'review' ? '◐' : '○';
      lines.push(`  ${icon} [${t.priority}] ${t.name} (${t.estimatedHours}h) - ${t.assignee}`);
    }
    return lines.join('\n');
  }
}
```

### QualityDashboard Class

```typescript
interface QualityMetric {
  name: string; value: number; target: number; threshold: number;
  trend: 'improving' | 'declining' | 'stable'; unit: string;
}

interface BuildQuality {
  buildId: string; timestamp: Date; status: 'passed' | 'failed' | 'warning';
  metrics: QualityMetric[]; failures: string[];
}

class QualityDashboard {
  private builds: BuildQuality[] = [];
  private gates: { name: string; metric: string; operator: 'gte' | 'lte' | 'eq'; threshold: number; blocking: boolean }[] = [];

  public defineGate(name: string, metric: string, operator: 'gte' | 'lte' | 'eq', threshold: number, blocking: boolean = true): void {
    this.gates.push({ name, metric, operator, threshold, blocking });
  }

  public recordBuild(buildId: string, metrics: Record<string, number>): BuildQuality {
    const qualityMetrics: QualityMetric[] = Object.entries(metrics).map(([name, value]) => {
      const gate = this.gates.find(g => g.metric === name);
      const target = gate?.threshold ?? 0;
      const trend = this.calculateTrend(name, value);
      return { name, value, target, threshold: gate?.threshold ?? 0, trend, unit: '%' };
    });

    const failures: string[] = [];
    for (const gate of this.gates) {
      const metric = qualityMetrics.find(m => m.name === gate.metric);
      if (!metric) continue;
      const passed = gate.operator === 'gte' ? metric.value >= gate.threshold
        : gate.operator === 'lte' ? metric.value <= gate.threshold
        : metric.value === gate.threshold;
      if (!passed) failures.push(`Gate "${gate.name}": ${metric.name}=${metric.value} (required ${gate.operator} ${gate.threshold})`);
    }

    const status: BuildQuality['status'] = failures.length === 0 ? 'passed'
      : failures.some(f => this.gates.some(g => f.includes(g.name) && g.blocking)) ? 'failed' : 'warning';

    const build: BuildQuality = { buildId, timestamp: new Date(), status, metrics: qualityMetrics, failures };
    this.builds.push(build);
    return build;
  }

  private calculateTrend(metricName: string, currentValue: number): 'improving' | 'declining' | 'stable' {
    const lastThree = this.builds.slice(-3).map(b => b.metrics.find(m => m.name === metricName)?.value).filter((v): v is number => v !== undefined);
    if (lastThree.length < 2) return 'stable';
    const avg = lastThree.reduce((a, b) => a + b, 0) / lastThree.length;
    if (currentValue > avg * 1.05) return 'improving';
    if (currentValue < avg * 0.95) return 'declining';
    return 'stable';
  }

  public getLatestStatus(): BuildQuality | null {
    return this.builds.length > 0 ? this.builds[this.builds.length - 1] : null;
  }

  public getHistory(buildCount: number = 10): BuildQuality[] {
    return this.builds.slice(-buildCount);
  }

  public getPassRate(): number {
    return this.builds.length > 0
      ? Math.round(this.builds.filter(b => b.status === 'passed').length / this.builds.length * 100)
      : 0;
  }

  public getGateCompliance(): { gate: string; passRate: number }[] {
    const gateStats = new Map<string, { passed: number; total: number }>();
    for (const build of this.builds) {
      for (const failure of build.failures) {
        for (const gate of this.gates) {
          if (failure.includes(gate.name)) {
            const stats = gateStats.get(gate.name) ?? { passed: 0, total: 0 };
            stats.total++;
            if (build.status === 'passed') stats.passed++;
            gateStats.set(gate.name, stats);
          }
        }
      }
    }
    return Array.from(gateStats.entries()).map(([gate, stats]) => ({
      gate,
      passRate: stats.total > 0 ? Math.round(stats.passed / stats.total * 100) : 100,
    }));
  }

  public generateReport(): string {
    const latest = this.getLatestStatus();
    const lines: string[] = [
      '=== Quality Dashboard ===',
      `Total Builds: ${this.builds.length}`,
      `Pass Rate: ${this.getPassRate()}%`,
      '',
    ];
    if (latest) {
      lines.push(`Latest Build: ${latest.buildId} (${latest.timestamp.toISOString()})`);
      lines.push(`Status: ${latest.status.toUpperCase()}`);
      lines.push('');
      lines.push('Quality Metrics:');
      for (const m of latest.metrics) {
        const icon = m.value >= m.target ? '✓' : '✗';
        const trendIcon = m.trend === 'improving' ? '↑' : m.trend === 'declining' ? '↓' : '→';
        lines.push(`  ${icon} ${m.name}: ${m.value}${m.unit} (target: ${m.target}) ${trendIcon}`);
      }
      if (latest.failures.length > 0) {
        lines.push('\nGate Failures:');
        for (const f of latest.failures) lines.push(`  ✗ ${f}`);
      }
    }
    return lines.join('\n');
  }
}

// Example
const quality = new QualityDashboard();
quality.defineGate('Test Coverage', 'coverage', 'gte', 85, true);
quality.defineGate('Build Time', 'buildTime', 'lte', 300, false);
quality.defineGate('Vulnerabilities', 'vulnerabilities', 'eq', 0, true);
quality.recordBuild('build-001', { coverage: 87, buildTime: 45, vulnerabilities: 0, testCount: 156 });
quality.recordBuild('build-002', { coverage: 82, buildTime: 52, vulnerabilities: 1, testCount: 160 });
console.log(quality.generateReport());
```

## Phase 8: Deployment

### Deployment Topology

```mermaid
graph TD
    subgraph "Production Cluster (K8s)"
        subgraph "Blue Environment"
            API_BLUE[API - Blue]
            WEB_BLUE[Web - Blue]
            SVC_BLUE[Services - Blue]
        end
        
        subgraph "Green Environment"
            API_GREEN[API - Green]
            WEB_GREEN[Web - Green]
            SVC_GREEN[Services - Green]
        end
        
        LB[Load Balancer / Ingress] --> API_BLUE
        LB --> WEB_BLUE
        LB --> SVC_BLUE
        
        LB -.->|Traffic Switch| API_GREEN
        LB -.->|Traffic Switch| WEB_GREEN
        LB -.->|Traffic Switch| SVC_GREEN
    end
    
    subgraph "Data Layer"
        PG_PRI[PostgreSQL Primary]
        PG_REPL[PostgreSQL Replica]
        REDIS_CL[Redis Cluster]
        KAFKA_CL[Kafka Cluster]
        S3_STORE[S3 / MinIO]
    end
    
    subgraph "Monitoring"
        PROM[Prometheus]
        GRAF[Grafana]
        LOKI[Loki]
        ALERT[AlertManager]
    end
    
    API_BLUE --> PG_PRI
    API_GREEN --> PG_PRI
    SVC_BLUE --> KAFKA_CL
    SVC_GREEN --> KAFKA_CL
    
    PG_PRI --> PG_REPL
    KAFKA_CL --> S3_STORE
    
    API_BLUE -->|Metrics| PROM
    API_GREEN -->|Logs| LOKI
    
    PROM --> GRAF
    PROM --> ALERT
    
    subgraph "CI/CD"
        GHA[GitHub Actions] --> REG[Container Registry]
        REG --> ARGO[ArgoCD]
        ARGO -->|Sync| API_BLUE
        ARGO -->|Sync| API_GREEN
    end
    
    subgraph "DNS"
        DNS[DNS: smartbuild.io] --> LB
    end
```

### Container Deployment

```yaml
# docker-compose.yml (development)
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: smartbuild
      POSTGRES_USER: smartbuild
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U smartbuild']
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
    healthcheck:
      test: ['CMD', 'redis-cli', 'ping']
      interval: 5s
      timeout: 5s
      retries: 5

  kafka:
    image: confluentinc/cp-kafka:7.5
    depends_on:
      - zookeeper
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
    ports:
      - '9092:9092'

  zookeeper:
    image: confluentinc/cp-zookeeper:7.5
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - '2181:2181'

  minio:
    image: minio/minio
    command: server /data --console-address ':9001'
    environment:
      MINIO_ROOT_USER: ${MINIO_USER:-smartbuild}
      MINIO_ROOT_PASSWORD: ${MINIO_PASSWORD:-smartbuild123}
    volumes:
      - minio_data:/data
    ports:
      - '9000:9000'
      - '9001:9001'

  auth-service:
    build:
      context: ./services/auth
      dockerfile: Dockerfile
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://smartbuild:${DB_PASSWORD}@postgres:5432/smartbuild
      JWT_SECRET: ${JWT_SECRET}
      KAFKA_BROKERS: kafka:9092
    depends_on:
      postgres:
        condition: service_healthy
      kafka:
        condition: service_started
    ports:
      - '3001:3001'

  project-service:
    build:
      context: ./services/project
      dockerfile: Dockerfile
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://smartbuild:${DB_PASSWORD}@postgres:5432/smartbuild
      KAFKA_BROKERS: kafka:9092
      REDIS_URL: redis://redis:6379
    depends_on:
      postgres:
        condition: service_healthy
      kafka:
        condition: service_started
      redis:
        condition: service_healthy
    ports:
      - '3002:3002'

  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - auth-service
      - project-service

volumes:
  postgres_data:
  minio_data:
```

### Blue-Green Deployment Strategy

```typescript
interface DeploymentConfig {
  environment: string; replicas: number; image: string; tag: string;
  ports: number[]; envVars: Record<string, string>;
  healthCheckPath: string; readinessTimeout: number;
}

interface DeploymentStatus {
  activeColor: 'blue' | 'green'; pendingColor: 'blue' | 'green';
  blue: { healthy: boolean; replicas: number; version: string };
  green: { healthy: boolean; replicas: number; version: string };
}

class DeploymentManager {
  private status: DeploymentStatus = {
    activeColor: 'blue', pendingColor: 'green',
    blue: { healthy: true, replicas: 2, version: '1.0.0' },
    green: { healthy: true, replicas: 2, version: '1.0.0' },
  };

  public async deploy(config: DeploymentConfig): Promise<{ success: boolean; duration: number; rollbackAvailable: boolean }> {
    console.log(`Starting blue-green deployment of ${config.image}:${config.tag} to ${config.environment}`);
    const startTime = Date.now();
    const target = this.status.pendingColor;
    const current = this.status.activeColor;

    // Step 1: Deploy to inactive environment
    console.log(`Step 1: Deploying to ${target} environment...`);
    await this.deployToEnvironment(target, config);

    // Step 2: Run health checks
    console.log(`Step 2: Running health checks on ${target}...`);
    const healthy = await this.runHealthChecks(target, config);
    if (!healthy) {
      console.log(`Health check failed on ${target}, aborting deployment`);
      return { success: false, duration: Date.now() - startTime, rollbackAvailable: true };
    }

    // Step 3: Switch traffic
    console.log(`Step 3: Switching traffic from ${current} to ${target}...`);
    await this.switchTraffic(target);

    // Step 4: Verify production
    console.log(`Step 4: Verifying ${target} in production...`);
    const productionHealthy = await this.runHealthChecks(target, config);
    if (!productionHealthy) {
      console.log(`Production verification failed, rolling back to ${current}...`);
      await this.switchTraffic(current);
      return { success: false, duration: Date.now() - startTime, rollbackAvailable: true };
    }

    // Step 5: Scale down old environment
    console.log(`Step 5: Scaling down ${current} environment...`);
    await this.scaleDown(current);

    // Update status
    this.status.activeColor = target;
    this.status.pendingColor = current;
    this.status[target].version = config.tag;
    this.status[target].healthy = true;

    console.log(`Deployment complete: ${config.tag} live on ${target}`);
    return { success: true, duration: Date.now() - startTime, rollbackAvailable: true };
  }

  private async deployToEnvironment(env: 'blue' | 'green', config: DeploymentConfig): Promise<void> {
    console.log(`  Pulling image ${config.image}:${config.tag}`);
    console.log(`  Creating ${config.replicas} replicas`);
    console.log(`  Setting environment variables: ${Object.keys(config.envVars).length}`);
    await this.delay(500);
  }

  private async runHealthChecks(env: 'blue' | 'green', config: DeploymentConfig): Promise<boolean> {
    console.log(`  Health check: GET ${config.healthCheckPath}`);
    await this.delay(300);
    const healthy = Math.random() > 0.1;
    this.status[env].healthy = healthy;
    return healthy;
  }

  private async switchTraffic(env: 'blue' | 'green'): Promise<void> {
    console.log(`  Updating load balancer to route to ${env}`);
    await this.delay(200);
  }

  private async scaleDown(env: 'blue' | 'green'): Promise<void> {
    console.log(`  Scaling ${env} to 0 replicas`);
    this.status[env].replicas = 0;
    await this.delay(300);
  }

  public async rollback(): Promise<boolean> {
    console.log('Rolling back to previous version...');
    const target = this.status.activeColor;
    const backup = this.status.pendingColor;
    await this.scaleDown(backup);
    await this.switchTraffic(backup);
    this.status.activeColor = backup;
    this.status.pendingColor = target;
    return true;
  }

  public getStatus(): DeploymentStatus {
    return { ...this.status };
  }

  public canaryDeploy(config: DeploymentConfig, canaryPercent: number = 10): Promise<{ success: boolean }> {
    console.log(`Canary deployment: routing ${canaryPercent}% traffic to new version`);
    return this.deploy(config).then(r => ({ success: r.success }));
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Example
const deployer = new DeploymentManager();
deployer.deploy({
  environment: 'production',
  replicas: 3,
  image: 'smartbuild/api',
  tag: 'v2.1.0',
  ports: [3000],
  envVars: { NODE_ENV: 'production', LOG_LEVEL: 'info' },
  healthCheckPath: '/health',
  readinessTimeout: 30,
}).then(console.log);
```

## Phase 9: Deliverables Checklist

| Artifact | Description | Completed |
|----------|-------------|-----------|
| Project plan & schedule | Gantt chart, WBS, risk register | ☐ |
| SRS document | 22 functional + 12 non-functional requirements | ☐ |
| Use case document | 10 use cases with pre/post conditions | ☐ |
| Architecture document | Microservices, CQRS, event-driven, 4-layer | ☐ |
| ADRs | Architecture Decision Records | ☐ |
| Database schema | Domain model with all entities | ☐ |
| OpenAPI specification | Full API documentation | ☐ |
| Source code | Complete implementation (8 microservices) | ☐ |
| Test suite | Unit, integration, contract, E2E, performance | ☐ |
| CI/CD pipeline | GitHub Actions + ArgoCD | ☐ |
| Security review | Threat model, SAST/SCA/DAST results | ☐ |
| Quality metrics | Coverage, complexity, gate compliance | ☐ |
| Deployment config | Docker Compose + K8s manifests + blue-green | ☐ |
| Monitoring setup | Prometheus, Grafana, Loki, Tempo | ☐ |
| User documentation | README, API guide, admin manual | ☐ |

## Phase 10: Final Competency Checklist

As you complete this course, you should be able to demonstrate competence in all of the following areas:

| Competency | Evaluated In |
|------------|--------------|
| Select and apply a software process model | Chapter 1, Capstone Phase 1 |
| Elicit and document requirements | Chapter 2, Capstone Phase 2 |
| Model system structure and behaviour | Chapter 3, Capstone Phase 3 |
| Design software architecture | Chapter 4, Capstone Phase 3 |
| Implement using design principles and patterns | Chapter 5, Capstone Phase 5 |
| Plan and execute testing strategy | Chapter 6, Capstone Phase 7 |
| Manage software evolution | Chapter 7, Capstone Phase 9 |
| Plan and track project progress | Chapter 8, Capstone Phase 1 |
| Manage software quality | Chapter 9, Capstone Phase 7 |
| Control configuration and versions | Chapter 10, CI/CD pipeline |
| Apply Agile practices | Chapter 11, Scrum process |
| Implement CI/CD and DevOps | Chapter 12, Capstone Phase 8 |
| Engineer secure software | Chapter 13, Capstone Phase 6 |
| Apply formal specification and verification | Chapter 14, state machine design |
| Define and collect software metrics | Chapter 15, Capstone Phase 7 |
| Build and deploy a complete system | Chapter 16 (this chapter) |

### TypeScript: Capstone Integration Tools

```typescript
// === Requirement-Acceptance Test Traceability Matrix ===
interface TraceLink { reqId: string; testId: string; category: string; status: 'covered' | 'partial' | 'missing'; }
class TraceabilityMatrix {
  private links: TraceLink[] = [];
  add(reqId: string, testId: string, category: string): this { this.links.push({ reqId, testId, category, status: 'missing' }); return this; }
  markCovered(reqId: string, testId: string): void {
    const link = this.links.find(l => l.reqId === reqId && l.testId === testId);
    if (link) link.status = 'covered';
  }
  report(): { total: number; covered: number; gaps: string[] } {
    const gaps = this.links.filter(l => l.status !== 'covered').map(l => `${l.reqId} → ${l.testId} (${l.category})`);
    return { total: this.links.length, covered: this.links.filter(l => l.status === 'covered').length, gaps };
  }
}

// === CI/CD Pipeline Verifier ===
interface PipelineStage { name: string; commands: string[]; required: boolean; timeout: number; }
class PipelineVerifier {
  verify(stages: PipelineStage[]): { valid: boolean; errors: string[]; warnings: string[] } {
    const errors: string[] = []; const warnings: string[] = [];
    const names = new Set(stages.map(s => s.name));
    if (stages.length === 0) errors.push('Pipeline must have at least one stage');
    const hasBuild = stages.some(s => s.name.toLowerCase().includes('build'));
    const hasTest = stages.some(s => s.name.toLowerCase().includes('test'));
    if (!hasBuild) warnings.push('No build stage found - builds should precede tests');
    if (!hasTest) warnings.push('No test stage found - tests are required before deployment');
    for (const stage of stages) {
      if (stage.commands.length === 0) errors.push(`Stage "${stage.name}" has no commands`);
      if (stage.timeout < 60) warnings.push(`Stage "${stage.name}" has very short timeout (${stage.timeout}s)`);
    }
    return { valid: errors.length === 0, errors, warnings };
  }
}

// === Post-Mortem Analysis Tool ===
interface Incident { id: string; severity: 'sev1' | 'sev2' | 'sev3'; duration: number; rootCause: string; actionItems: string[]; }
class PostMortemAnalyzer {
  analyze(incidents: Incident[]): { total: number; avgDuration: number; bySeverity: Record<string, number>; topRootCauses: string[]; actionItemCompletion: number } {
    const total = incidents.length;
    const avgDuration = total > 0 ? Math.round(incidents.reduce((s, i) => s + i.duration, 0) / total) : 0;
    const bySeverity: Record<string, number> = {};
    const causeCount = new Map<string, number>();
    let totalActionItems = 0;
    for (const inc of incidents) {
      bySeverity[inc.severity] = (bySeverity[inc.severity] ?? 0) + 1;
      causeCount.set(inc.rootCause, (causeCount.get(inc.rootCause) ?? 0) + 1);
      totalActionItems += inc.actionItems.length;
    }
    const topRootCauses = [...causeCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([c]) => c);
    return { total, avgDuration, bySeverity, topRootCauses, actionItemCompletion: Math.round((totalActionItems / Math.max(total, 1)) * 10) / 10 };
  }
}

// === Chapter Cross-Reference Validator ===
const capstonePhases = [
  { phase: 1, title: 'Process Selection', chapters: [1, 11], tools: ['recommendModel()'] },
  { phase: 2, title: 'Requirements', chapters: [2], tools: ['moscowPrioritize()', 'furpsClassifier()'] },
  { phase: 3, title: 'Architecture', chapters: [4], tools: ['compareStyles()', 'tradeoffAnalyzer()'] },
  { phase: 4, title: 'Design & Implementation', chapters: [3, 5, 6], tools: ['umlClassToTS()', 'solidValidator()'] },
  { phase: 5, title: 'Testing', chapters: [6], tools: ['generateTestCases()', 'checkPyramid()'] },
  { phase: 6, title: 'DevOps & CI/CD', chapters: [12], tools: ['validatePipeline()', 'canRollback()'] },
  { phase: 7, title: 'Quality & Metrics', chapters: [9, 15], tools: ['calculateQualityIndex()', 'gqmFramework()'] },
  { phase: 8, title: 'Configuration Management', chapters: [10], tools: ['validateBranchStrategy()', 'diffBaselines()'] },
  { phase: 9, title: 'Security', chapters: [13], tools: ['strideThreats()', 'owaspTop10()'] },
  { phase: 10, title: 'Formal Specification', chapters: [14], tools: ['verifyFSM()'] },
];

function crossReferenceChapters(chapterNum: number): { phase: number; tools: string[] }[] {
  return capstonePhases.filter(p => p.chapters.includes(chapterNum)).map(p => ({ phase: p.phase, tools: p.tools }));
}

// === Capstone Deliverable Checklist ===
interface Deliverable { name: string; description: string; verified: boolean; }
function checklistProgress(deliverables: Deliverable[]): { done: number; total: number; percent: number; pending: string[] } {
  const done = deliverables.filter(d => d.verified).length;
  return { done, total: deliverables.length, percent: Math.round(done / deliverables.length * 100), pending: deliverables.filter(d => !d.verified).map(d => d.name) };
}

const deliverables: Deliverable[] = [
  { name: 'SRS Document', description: '22 functional + 12 non-functional requirements', verified: false },
  { name: 'Architecture ADRs', description: 'Microservices, CQRS, event-driven decisions', verified: false },
  { name: 'API Implementation', description: '8 microservices with OpenAPI docs', verified: false },
  { name: 'React Frontend', description: 'SPA with project dashboard, Gantt, inspections', verified: false },
  { name: 'Test Suite', description: 'Unit + integration + contract + E2E + performance', verified: false },
  { name: 'CI/CD Pipeline', description: 'GitHub Actions + ArgoCD blue-green', verified: false },
  { name: 'K8s Deployment', description: 'Production manifests with blue-green topology', verified: false },
  { name: 'Monitoring', description: 'Prometheus, Grafana, Loki, Tempo dashboards', verified: false },
  { name: 'Security Review', description: 'Threat model, SAST, SCA, DAST reports', verified: false },
  { name: 'Risk Register', description: '10 risks assessed with mitigations', verified: false },
];
console.log('Progress:', checklistProgress(deliverables));

const trace = new TraceabilityMatrix();
trace.add('FR-01', 'T-AUTH-001', 'Auth').add('FR-04', 'T-PROJ-001', 'Project').add('FR-07', 'T-BUDGET-001', 'Budget');
trace.markCovered('FR-01', 'T-AUTH-001');
console.log('Traceability:', trace.report());

const pipeline = new PipelineVerifier();
console.log('Pipeline:', pipeline.verify([
  { name: 'Lint & Type Check', commands: ['npm run lint', 'npx tsc --noEmit'], required: true, timeout: 120 },
  { name: 'Unit & Integration Tests', commands: ['npm test'], required: true, timeout: 300 },
  { name: 'SAST & SCA', commands: ['semgrep', 'snyk test'], required: true, timeout: 180 },
  { name: 'Build & Containerize', commands: ['docker build'], required: true, timeout: 300 },
]));
```

## Summary

This capstone chapter integrates all 15 preceding chapters into the development of SmartBuild, a construction project management system. The complete software engineering lifecycle is demonstrated: process selection (Scrum with 6 sprints), requirements specification (22 functional + 12 non-functional requirements, 10 use cases), architecture design (microservices, event-driven, CQRS, 4-layer), detailed design (domain model with 10+ entities), implementation (TypeScript with 8 microservices, Kafka, PostgreSQL, Redis), testing (unit, integration, contract, E2E, performance, security), quality management (CI/CD gates, quality dashboard, metrics), configuration management (Git, GitHub Actions, ArgoCD), security (threat model, SAST, SCA, DAST), risk management (probability × impact matrix), and deployment (Docker Compose, Kubernetes, blue-green deployment). Each phase references the relevant chapter for deeper study. The final deliverable is a production-ready software system with full documentation — the culmination of all skills taught in this course.

## Practical Takeaways

1. **Integrate from day one** — every phase of the lifecycle impacts every other; process selection affects requirements, which affects architecture, which affects testing, which affects deployment
2. **Traceability is the backbone of professional software engineering** — every requirement must trace to architecture decisions, design elements, code modules, and test cases
3. **CI/CD is not optional** — automated pipelines enforce quality gates and catch integration issues before they reach production
4. **Event-driven architecture enables loose coupling** — Kafka decouples services and provides durable event sourcing
5. **Blue-green deployment eliminates downtime** — switching traffic between identical environments enables zero-downtime releases with instant rollback
6. **Risk management is continuous** — the risk matrix should be reviewed and updated every sprint, not created once and forgotten
7. **Every architecture decision has trade-offs** — document ADRs with context, decision, and consequences for future engineers

## Chapter Quiz

**Q1: What architecture pattern does SmartBuild use for handling cross-service transactions (e.g., change order affecting both budget and schedule)?**
- A) Two-Phase Commit
- B) Saga Pattern with Kafka
- C) Distributed Locking
- D) Single Database

**Answer: B** — The Saga pattern with Kafka event sourcing coordinates multi-service transactions without blocking, ensuring eventual consistency.

**Q2: What is the purpose of CQRS in the SmartBuild architecture?**
- A) To reduce database storage costs
- B) To separate read and write paths, optimising report queries without impacting write performance
- C) To encrypt all data at rest
- D) To replace REST APIs

**Answer: B** — CQRS separates commands (writes to PostgreSQL) from queries (reads from ElasticSearch), allowing each to be optimised independently.

**Q3: In the blue-green deployment strategy, what happens if health checks fail on the new environment?**
- A) The deployment continues anyway
- B) Traffic is switched back to the previous environment (auto-rollback)
- C) The pipeline pauses for manual approval
- D) Both environments are taken offline

**Answer: B** — If health checks fail, traffic remains on the previous (stable) environment, and the deployment is aborted with a rollback.

**Q4: How many functional requirements are defined in the SmartBuild SRS?**
- A) 10
- B) 15
- C) 22
- D) 30

**Answer: C** — The SRS defines 22 functional requirements (FR-01 through FR-22).

**Q5: What is the risk response strategy for R-02 (ERP integration complexity) in the risk matrix?**
- A) Accept
- B) Transfer
- C) Mitigate
- D) Avoid

**Answer: C** — The risk is mitigated through API-first design, adapter pattern, and contract testing.

**Q6: Which layer is NOT part of the 4-layer architecture?**
- A) Presentation
- B) API/Application
- C) Domain/Service
- D) Security

**Answer: D** — The four layers are Presentation, API/Application, Domain/Service, and Infrastructure/Data. Security cross-cuts all layers.

**Q7: What Kafka topic would a budget change event be published to?**
- A) sb.budget.updated
- B) budget-event
- C) sb.events
- D) smartbuild-all

**Answer: A** — Events follow the format `{topicPrefix}.{domain}.{action}`, so budget updates go to `sb.budget.updated`.

## Exercises

### Review Questions

1. Trace the journey from a user story (US-04: Budget Tracking) through architecture, design, implementation, testing, and deployment. Name the artifacts produced at each stage.

2. How does the SmartBuild architecture demonstrate the microservices principles of loose coupling and high cohesion?

3. What non-functional requirements drove the decision to use Kafka as the event bus?

4. Describe the blue-green deployment process and explain how it enables zero-downtime releases.

5. Why was the CQRS pattern chosen for the reporting service? What are the trade-offs?

### Application Problems

1. Extend SmartBuild with a procurement module that manages material orders from subcontractors. Write user stories, add entities to the domain model, implement the service, and add the service to the deployment topology.

2. Design a Grafana dashboard for monitoring the SmartBuild production system. Specify the Prometheus metrics to collect, the panels to create, and the alert thresholds for each service.

3. Write a post-deployment retrospective analysing the first 3 months of SmartBuild in production. Use the Scrum retrospective format and identify two improvements for the next release cycle.

4. Create a disaster recovery plan for SmartBuild. Assume the primary PostgreSQL database has failed. Document the RPO, RTO, failover steps, and verification process.

### Challenge Problem

SmartBuild has been deployed to production and is serving 50 construction companies with 500 concurrent users. After three months, the team observes:
- Budget service response times degraded from 200ms to 1.2s p95
- Kafka consumer lag on the notification service exceeding 10,000 messages
- Document upload failures increasing from 0.5% to 4%
- PostgreSQL CPU at 75% utilisation with slow queries on the project listing endpoint
- Two security vulnerabilities reported in npm dependencies

Diagnose each issue using monitoring data, propose specific architectural or code changes to address each one, implement the fixes, and verify improvement. Each fix must trace back to a specific lesson from Chapters 1-15. Implement a TypeScript load testing script that simulates the usage pattern and validates the improvements.
