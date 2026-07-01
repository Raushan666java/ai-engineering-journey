# Capstone: Building a Complete Software System

## Learning Objectives

After completing this chapter, the student will be able to:
- Integrate all software engineering disciplines into a single project
- Apply process models, requirements, architecture, design, testing, and project management together
- Build a complete software system from specification through deployment
- Produce professional documentation at every stage
- Demonstrate traceability from requirements to code to tests
- Present a cohesive technical project report

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

### Project Domain: Task Management System

Throughout this chapter, we build a **Team Task Board** — a collaborative task management application with the following core features:

- User authentication and authorisation
- Project and task CRUD operations
- Real-time collaboration via WebSocket
- REST API with OpenAPI documentation
- Automated CI/CD pipeline
- Monitoring and observability

## Phase 1: Process Selection and Planning

### Process Model

For this project, we adopt an **iterative/incremental** process with **Scrum** ceremonies:

```mermaid
gantt
    title Team Task Board - Development Plan
    dateFormat  YYYY-MM-DD
    
    section Sprint 1: Foundation
    Requirements & Planning  :a1, 2025-01-06, 5d
    Architecture & Tech Stack :a2, after a1, 3d
    Auth Module               :a3, after a2, 7d
    
    section Sprint 2: Core API
    Task CRUD API             :b1, after a3, 5d
    Project API               :b2, after b1, 3d
    Database Schema           :b3, after b1, 3d
    
    section Sprint 3: Frontend
    UI Components             :c1, after b2, 7d
    API Integration           :c2, after c1, 5d
    Real-time Updates         :c3, after c2, 3d
    
    section Sprint 4: Quality
    Testing & CI/CD           :d1, after c3, 5d
    Security Audit            :d2, after d1, 3d
    Deployment                :d3, after d2, 2d
```

### Scrum Configuration

| Artifact | Description |
|----------|-------------|
| **Sprint duration** | 2 weeks |
| **Product Owner** | Stakeholder representative |
| **Scrum Master** | Team lead (rotating) |
| **Development Team** | 4-6 members |
| **Velocity target** | 20-25 story points/sprint |

### Risk Register

| Risk | Probability | Impact | Exposure | Response |
|------|-------------|--------|----------|----------|
| Scope creep | 0.6 | 0.7 | 0.42 | Strict acceptance criteria, MVP-first |
| Technology learning curve | 0.4 | 0.5 | 0.20 | Spike sessions in Sprint 0 |
| API performance insufficient | 0.3 | 0.6 | 0.18 | Load testing, early optimisation |
| Team member unavailability | 0.3 | 0.4 | 0.12 | Cross-training, knowledge sharing |

## Phase 2: Requirements Engineering

### User Stories

```
US-01: As a user, I want to register and log in so that I can access my tasks securely.
  Acceptance: Email + password registration, JWT-based authentication, password hashing.

US-02: As a user, I want to create a project so that I can organise related tasks.
  Acceptance: Project name, description, optional due date. Creator becomes project owner.

US-03: As a user, I want to create, read, update, and delete tasks within a project.
  Acceptance: Title, description, assignee, status (todo/in_progress/done), priority, due date.

US-04: As a user, I want to assign tasks to team members so that work is distributed.
  Acceptance: Only project members can be assigned. Notifications on assignment.

US-05: As a user, I want real-time updates when team members change tasks.
  Acceptance: WebSocket connection updates task board within 500ms.

US-06: As a user, I want to filter and search tasks by status, priority, and assignee.
  Acceptance: Query parameters for GET /tasks filter. Full-text search on title.
```

### Functional Requirements (SRS Excerpt)

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-01 | System shall support user registration with email and password | High | US-01 |
| FR-02 | System shall authenticate users via JWT tokens | High | US-01 |
| FR-03 | System shall support project CRUD operations | High | US-02 |
| FR-04 | System shall support task CRUD operations | High | US-03 |
| FR-05 | System shall support task assignment to project members | Medium | US-04 |
| FR-06 | System shall provide WebSocket-based real-time updates | Medium | US-05 |
| FR-07 | System shall support task filtering and search | Medium | US-06 |

### Non-Functional Requirements

| ID | Requirement | Target | Measurement |
|----|-------------|--------|-------------|
| NFR-01 | Response time for API calls | < 200ms p95 | Load testing |
| NFR-02 | System availability | 99.9% uptime | Monitoring |
| NFR-03 | Password storage security | Argon2id hashing | Code review |
| NFR-04 | API must be documented | OpenAPI 3.0 spec | Specification validation |
| NFR-05 | Test coverage | > 80% | Coverage reports |

## Phase 3: Architecture

### System Architecture

```mermaid
graph TD
    CLIENT[React SPA] -->|HTTPS| API_GW[API Gateway / Nginx]
    CLIENT -->|WSS| WS_SVC[WebSocket Service]
    
    API_GW --> API[Express REST API]
    API --> AUTH[Auth Module]
    API --> PROJECT[Project Module]
    API --> TASK[Task Module]
    
    AUTH --> DB[(PostgreSQL)]
    PROJECT --> DB
    TASK --> DB
    
    WS_SVC --> REDIS[Redis Pub/Sub]
    API --> REDIS
    
    CLIENT --> CDN[CDN / Static Assets]
    
    subgraph "Docker Compose"
        API
        WS_SVC
        DB
        REDIS
    end
    
    PROM[Prometheus] --> API
    GRAF[Grafana] --> PROM
    API -->|Logs| LOKI[Loki]
```

### Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend** | React 18 + TypeScript | Industry standard, strong typing |
| **API** | Express.js + TypeScript | Fast, widely understood |
| **Database** | PostgreSQL | ACID compliance, JSON support |
| **Cache/Queue** | Redis + Bull | Real-time pub/sub, job queues |
| **Auth** | JWT + bcrypt | Stateless, standard |
| **API Docs** | OpenAPI 3.0 + Swagger | Industry standard |
| **CI/CD** | GitHub Actions | Integrated, free for OSS |
| **Container** | Docker + Docker Compose | Reproducible environments |
| **Monitoring** | Prometheus + Grafana | Open-source observability |

### Database Schema

```mermaid
erDiagram
    User ||--o{ Project : owns
    User ||--o{ Task : assigned
    User }o--o{ Project : "is member of"
    Project ||--o{ Task : contains
    
    User {
        int id PK
        string email UK
        string password_hash
        string name
        datetime created_at
    }
    
    Project {
        int id PK
        string name
        string description
        datetime due_date
        int owner_id FK
        datetime created_at
    }
    
    Task {
        int id PK
        string title
        string description
        enum status
        enum priority
        int project_id FK
        int assignee_id FK
        int creator_id FK
        datetime due_date
        int position
        datetime created_at
        datetime updated_at
    }
    
    ProjectMember {
        int project_id FK
        int user_id FK
        enum role
    }
```

## Phase 4: Detailed Design

### API Design (OpenAPI Excerpt)

```yaml
openapi: 3.0.3
info:
  title: Team Task Board API
  version: 1.0.0
  description: Collaborative task management API

paths:
  /api/auth/register:
    post:
      summary: Register a new user
      tags: [Auth]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [email, password, name]
              properties:
                email:
                  type: string
                  format: email
                password:
                  type: string
                  minLength: 8
                name:
                  type: string
      responses:
        '201':
          description: User created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'

  /api/tasks:
    get:
      summary: List tasks with filters
      tags: [Tasks]
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [todo, in_progress, done]
        - name: priority
          in: query
          schema:
            type: string
            enum: [low, medium, high, critical]
        - name: assignee_id
          in: query
          schema:
            type: integer
        - name: search
          in: query
          schema:
            type: string
      security:
        - bearerAuth: []
      responses:
        '200':
          description: List of tasks
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Task'
```

### Design Patterns

| Pattern | Where Used | Purpose |
|---------|------------|---------|
| **Repository** | Data access layer | Abstract database operations |
| **Service Layer** | Business logic | Encapsulate domain logic |
| **Middleware** | Express routing | Auth, validation, logging |
| **Observer (Event Emitter)** | Real-time updates | Decoupled notifications |
| **Strategy** | Authentication | Support JWT, future OAuth |
| **DTO (Data Transfer Object)** | API boundaries | Decouple internal models from API |

## Phase 5: Implementation

### User Entity

```typescript
export interface User {
  id: number;
  email: string;
  passwordHash: string;
  name: string;
  createdAt: Date;
}

export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hasher: PasswordHasher,
    private readonly tokenService: TokenService
  ) {}

  public async register(email: string, password: string, name: string): Promise<User> {
    // Validate input
    if (!email || !password || !name) {
      throw new ValidationError('All fields are required');
    }
    if (password.length < 8) {
      throw new ValidationError('Password must be at least 8 characters');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ValidationError('Invalid email format');
    }

    // Check uniqueness
    const existing = await this.userRepository.findByEmail(email);
    if (existing) {
      throw new ConflictError('Email already registered');
    }

    // Hash password using Argon2id
    const passwordHash = await this.hasher.hash(password);

    // Create user
    return this.userRepository.create({
      email: email.toLowerCase(),
      passwordHash,
      name: name.trim(),
    });
  }

  public async authenticate(email: string, password: string): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findByEmail(email.toLowerCase());
    if (!user) {
      throw new AuthenticationError('Invalid credentials');
    }

    const valid = await this.hasher.verify(user.passwordHash, password);
    if (!valid) {
      throw new AuthenticationError('Invalid credentials');
    }

    const token = this.tokenService.generate({
      sub: user.id,
      role: 'user',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour
    });

    return { user, token };
  }
}
```

### Task Entity with State Machine

```typescript
export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId: number;
  assigneeId: number | null;
  creatorId: number;
  dueDate: Date | null;
  position: number;
  createdAt: Date;
  updatedAt: Date;
}

// State machine for task transitions
const VALID_TRANSITIONS: Record<TaskStatus, TaskStatus[]> = {
  [TaskStatus.TODO]: [TaskStatus.IN_PROGRESS],
  [TaskStatus.IN_PROGRESS]: [TaskStatus.TODO, TaskStatus.DONE],
  [TaskStatus.DONE]: [TaskStatus.IN_PROGRESS], // Allow reopen
};

export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly eventBus: EventBus
  ) {}

  public async changeStatus(taskId: number, newStatus: TaskStatus, userId: number): Promise<Task> {
    const task = await this.taskRepository.findById(taskId);
    if (!task) {
      throw new NotFoundError('Task not found');
    }

    // Validate state transition
    const allowed = VALID_TRANSITIONS[task.status];
    if (!allowed.includes(newStatus)) {
      throw new ValidationError(
        `Cannot transition from ${task.status} to ${newStatus}`
      );
    }

    const updated = await this.taskRepository.update(taskId, { status: newStatus });

    // Emit event for real-time updates
    this.eventBus.emit('task:updated', {
      taskId: updated.id,
      projectId: updated.projectId,
      changes: { status: newStatus },
      updatedBy: userId,
    });

    return updated;
  }

  public async create(
    title: string,
    description: string,
    priority: TaskPriority,
    projectId: number,
    creatorId: number,
    assigneeId?: number,
    dueDate?: Date
  ): Promise<Task> {
    // Validate business rules
    const project = await this.projectRepository.findById(projectId);
    if (!project) {
      throw new NotFoundError('Project not found');
    }

    // Get next position
    const maxPosition = await this.taskRepository.getMaxPosition(projectId);

    const task = await this.taskRepository.create({
      title: title.trim(),
      description: description.trim(),
      status: TaskStatus.TODO,
      priority,
      projectId,
      assigneeId: assigneeId ?? null,
      creatorId,
      dueDate: dueDate ?? null,
      position: maxPosition + 1,
    });

    this.eventBus.emit('task:created', {
      taskId: task.id,
      projectId,
      createdBy: creatorId,
    });

    return task;
  }
}
```

### WebSocket Real-Time Updates

```typescript
import { WebSocket, WebSocketServer } from 'ws';
import { createServer } from 'http';
import { verify } from 'jsonwebtoken';

interface AuthenticatedSocket extends WebSocket {
  userId?: number;
  subscriptions: Set<number>; // project IDs
}

export class WebSocketManager {
  private wss: WebSocketServer;
  private clients: Set<AuthenticatedSocket> = new Set();

  constructor(server: ReturnType<typeof createServer>) {
    this.wss = new WebSocketServer({ server, path: '/ws' });

    this.wss.on('connection', (ws: AuthenticatedSocket, req) => {
      ws.subscriptions = new Set();

      // Authenticate via token in query string
      const token = new URL(req.url ?? '', 'http://localhost').searchParams.get('token');
      if (token) {
        try {
          const decoded = verify(token, process.env['JWT_SECRET']!) as { sub: number };
          ws.userId = decoded.sub;
        } catch {
          ws.close(4001, 'Invalid token');
          return;
        }
      }

      this.clients.add(ws);

      ws.on('message', (data) => {
        try {
          const message = JSON.parse(data.toString());
          this.handleMessage(ws, message);
        } catch {
          ws.send(JSON.stringify({ type: 'error', message: 'Invalid message' }));
        }
      });

      ws.on('close', () => {
        this.clients.delete(ws);
      });

      ws.send(JSON.stringify({ type: 'connected', userId: ws.userId }));
    });
  }

  private handleMessage(ws: AuthenticatedSocket, message: { type: string; payload: unknown }): void {
    switch (message.type) {
      case 'subscribe':
        this.handleSubscribe(ws, message.payload as { projectId: number });
        break;
      case 'unsubscribe':
        this.handleUnsubscribe(ws, message.payload as { projectId: number });
        break;
    }
  }

  private handleSubscribe(ws: AuthenticatedSocket, payload: { projectId: number }): void {
    ws.subscriptions.add(payload.projectId);
    ws.send(JSON.stringify({
      type: 'subscribed',
      projectId: payload.projectId,
    }));
  }

  private handleUnsubscribe(ws: AuthenticatedSocket, payload: { projectId: number }): void {
    ws.subscriptions.delete(payload.projectId);
  }

  public broadcastToProject(projectId: number, event: string, data: unknown): void {
    const message = JSON.stringify({ type: event, projectId, data });
    for (const client of this.clients) {
      if (client.subscriptions.has(projectId)) {
        client.send(message);
      }
    }
  }
}
```

## Phase 6: Testing

### Test Strategy

| Test Level | Scope | Tooling | Target Coverage |
|-----------|-------|---------|-----------------|
| **Unit** | Individual functions and classes | Vitest | > 90% |
| **Integration** | Repository + database interactions | TestContainers | Core CRUD paths |
| **API** | HTTP endpoint behaviour | Supertest | All routes |
| **E2E** | Full user workflows | Playwright | Critical paths |

### Unit Test Example

```typescript
import { describe, it, expect, vi } from 'vitest';
import { TaskService, TaskStatus } from './task.service';

describe('TaskService', () => {
  const mockRepo = {
    findById: vi.fn(),
    update: vi.fn(),
    create: vi.fn(),
    getMaxPosition: vi.fn(),
  };
  const mockEventBus = { emit: vi.fn() };
  const service = new TaskService(mockRepo as any, mockEventBus as any);

  it('should allow valid status transition: todo → in_progress', async () => {
    mockRepo.findById.mockResolvedValue({ status: TaskStatus.TODO });
    mockRepo.update.mockResolvedValue({ id: 1, status: TaskStatus.IN_PROGRESS });

    const result = await service.changeStatus(1, TaskStatus.IN_PROGRESS, 1);

    expect(result.status).toBe(TaskStatus.IN_PROGRESS);
    expect(mockEventBus.emit).toHaveBeenCalledWith('task:updated', expect.any(Object));
  });

  it('should reject invalid transition: done → todo', async () => {
    mockRepo.findById.mockResolvedValue({ status: TaskStatus.DONE });

    await expect(
      service.changeStatus(1, TaskStatus.TODO, 1)
    ).rejects.toThrow('Cannot transition from done to todo');
  });

  it('should throw if task not found', async () => {
    mockRepo.findById.mockResolvedValue(null);

    await expect(
      service.changeStatus(999, TaskStatus.IN_PROGRESS, 1)
    ).rejects.toThrow('Task not found');
  });
});
```

### Integration Test Example

```typescript
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { Pool } from 'pg';
import { UserRepository } from './user.repository';

describe('UserRepository Integration', () => {
  const pool = new Pool({ connectionString: process.env['TEST_DATABASE_URL'] });
  const repo = new UserRepository(pool);

  beforeAll(async () => {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
  });

  afterAll(async () => {
    await pool.query('DROP TABLE IF EXISTS users');
    await pool.end();
  });

  it('should create and find a user by email', async () => {
    const user = await repo.create({
      email: 'test@example.com',
      passwordHash: '$argon2id$hash',
      name: 'Test User',
    });

    expect(user.id).toBeGreaterThan(0);
    expect(user.email).toBe('test@example.com');

    const found = await repo.findByEmail('test@example.com');
    expect(found).toBeDefined();
    expect(found!.name).toBe('Test User');
  });

  it('should reject duplicate emails', async () => {
    await expect(
      repo.create({
        email: 'test@example.com',
        passwordHash: '$argon2id$other',
        name: 'Duplicate',
      })
    ).rejects.toThrow();
  });
});
```

### CI Pipeline

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: taskboard_test
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
      redis:
        image: redis:7
        ports:
          - 6379:6379

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm test -- --coverage
        env:
          TEST_DATABASE_URL: postgresql://test:test@localhost:5432/taskboard_test
          REDIS_URL: redis://localhost:6379
      
      - uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: coverage/
      
      - name: Build
        run: npm run build
      
      - name: Docker build
        run: docker build -t taskboard .
```

## Phase 7: Quality and Metrics

### Quality Gates

| Gate | Metric | Threshold | Enforcement |
|------|--------|-----------|-------------|
| **Lint** | ESLint errors | 0 | Pre-commit hook |
| **Types** | TypeScript errors | 0 | CI pipeline |
| **Coverage** | Line coverage | > 80% | CI pipeline |
| **Complexity** | Cyclomatic complexity | < 15 per function | Code review |

### Metrics Dashboard

```typescript
export class CapstoneMetrics {
  private readonly dashboard = new QualityDashboard();

  constructor() {
    this.dashboard.addGate({
      name: 'Test Coverage',
      metric: 'coverage',
      threshold: 80,
      operator: 'gte',
    });
    this.dashboard.addGate({
      name: 'Build Time',
      metric: 'buildTime',
      threshold: 300,
      operator: 'lt',
    });
    this.dashboard.addGate({
      name: 'Vulnerabilities',
      metric: 'vulnerabilities',
      threshold: 0,
      operator: 'eq',
    });
  }

  public async collectAndReport(): Promise<void> {
    const metrics = {
      coverage: await this.getCoverage(),
      buildTime: await this.getBuildTime(),
      vulnerabilities: await this.getVulnerabilityCount(),
      testCount: await this.getTestCount(),
      apiLatency: await this.getApiLatency(),
    };

    const snapshot = this.dashboard.recordSnapshot(
      `build-${Date.now()}`,
      metrics
    );

    console.log(this.dashboard.generateSummary());
  }

  private async getCoverage(): Promise<number> {
    // Read from coverage report
    return 87;
  }

  private async getBuildTime(): Promise<number> {
    return 45;
  }

  private async getVulnerabilityCount(): Promise<number> {
    return 0;
  }

  private async getTestCount(): Promise<number> {
    return 156;
  }

  private async getApiLatency(): Promise<number> {
    return 42;
  }
}
```

## Phase 8: Deployment and DevOps

### Docker Compose

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: taskboard
      POSTGRES_USER: taskboard
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U taskboard']
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    healthcheck:
      test: ['CMD', 'redis-cli', 'ping']
      interval: 5s
      timeout: 5s
      retries: 5

  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - '3000:3000'
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://taskboard:${DB_PASSWORD}@postgres:5432/taskboard
      REDIS_URL: redis://redis:6379
      JWT_SECRET: ${JWT_SECRET}
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    healthcheck:
      test: ['CMD', 'wget', '--spider', 'http://localhost:3000/health']
      interval: 30s
      timeout: 5s
      retries: 3

  ws:
    build:
      context: .
      dockerfile: Dockerfile.ws
    ports:
      - '3001:3001'
    environment:
      REDIS_URL: redis://redis:6379
      JWT_SECRET: ${JWT_SECRET}
    depends_on:
      redis:
        condition: service_healthy

  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - api
      - ws

volumes:
  postgres_data:
```

## Phase 9: Security

### Security Measures Applied

| Concern | Implementation | Verification |
|---------|---------------|--------------|
| **Password storage** | Argon2id hashing | Dependency audit |
| **Authentication** | JWT with RS256 | Token verification tests |
| **API authorisation** | Role-based middleware | Integration tests |
| **Input validation** | Request schema validation | Property-based tests |
| **SQL injection** | Parameterised queries | Automated scanning |
| **XSS prevention** | Output encoding, CSP | Security scan |
| **CSRF protection** | SameSite cookies, token | Penetration test |
| **Dependencies** | `npm audit`, Dependabot | Weekly scan |
| **HTTPS** | TLS 1.3 on Nginx | SSL Labs test |
| **Rate limiting** | Express middleware | Load test |

### Rate Limiting Middleware

```typescript
import { Request, Response, NextFunction } from 'express';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

export class RateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map();

  constructor(private config: RateLimitConfig) {
    // Clean up expired entries every minute
    setInterval(() => this.cleanup(), 60000);
  }

  public middleware(req: Request, res: Response, next: NextFunction): void {
    const key = req.ip ?? 'unknown';
    const now = Date.now();

    let entry = this.requests.get(key);
    if (!entry || now > entry.resetTime) {
      entry = { count: 0, resetTime: now + this.config.windowMs };
      this.requests.set(key, entry);
    }

    entry.count++;

    // Set rate limit headers
    res.setHeader('X-RateLimit-Limit', this.config.maxRequests);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, this.config.maxRequests - entry.count));
    res.setHeader('X-RateLimit-Reset', Math.ceil(entry.resetTime / 1000));

    if (entry.count > this.config.maxRequests) {
      res.status(429).json({
        error: 'Too many requests',
        retryAfter: Math.ceil((entry.resetTime - now) / 1000),
      });
      return;
    }

    next();
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.requests) {
      if (now > entry.resetTime) {
        this.requests.delete(key);
      }
    }
  }
}
```

## Phase 10: Deliverables Checklist

| Artifact | Description | Completed |
|----------|-------------|-----------|
| Project plan & schedule | Gantt chart, WBS, risk register | ☐ |
| SRS document | Functional + non-functional requirements | ☐ |
| Architecture document | C4 diagrams, tech stack decisions | ☐ |
| Database schema | ER diagram, migration scripts | ☐ |
| OpenAPI specification | Full API documentation | ☐ |
| Source code | Complete implementation | ☐ |
| Test suite | Unit, integration, E2E tests | ☐ |
| CI/CD pipeline | Automated build, test, deploy | ☐ |
| Deployment configuration | Docker Compose, Kubernetes | ☐ |
| Security review report | Threat model, findings, fixes | ☐ |
| Quality metrics report | Coverage, complexity, maintainability | ☐ |
| User documentation | README, API usage guide | ☐ |

## Final Checklist for the Software Engineer

As you complete this course, you should be able to demonstrate competence in all of the following areas:

| Competency | Evaluated In |
|------------|--------------|
| Select and apply a software process model | Chapter 1, Capstone Phase 1 |
| Elicit and document requirements | Chapter 2, Capstone Phase 2 |
| Model system structure and behaviour | Chapter 3, Capstone Phase 3 |
| Design software architecture | Chapter 4, Capstone Phase 3 |
| Implement using design principles and patterns | Chapter 5, Capstone Phase 5 |
| Plan and execute testing strategy | Chapter 6, Capstone Phase 6 |
| Manage software evolution | Chapter 7, Capstone Phase 9 |
| Plan and track project progress | Chapter 8, Capstone Phase 1 |
| Manage software quality | Chapter 9, Capstone Phase 7 |
| Control configuration and versions | Chapter 10, CI/CD pipeline |
| Apply Agile practices | Chapter 11, Scrum process |
| Implement CI/CD and DevOps | Chapter 12, Capstone Phase 8 |
| Engineer secure software | Chapter 13, Capstone Phase 9 |
| Apply formal specification and verification | Chapter 14, state machine design |
| Define and collect software metrics | Chapter 15, Capstone Phase 7 |
| Build and deploy a complete system | Chapter 16 (this chapter) |

### TypeScript: Capstone Project Integration

```typescript
// === Complete System Scaffold Generator ===
interface ProjectScaffold {
  name: string;
  directories: string[];
  files: { path: string; content: string }[];
  dependencies: string[];
  scripts: Record<string, string>;
}
function generateScaffold(project: ProjectScaffold): string {
  return [
    `# ${project.name}`,
    `## Directories\n${project.directories.map((d) => `mkdir -p ${d}`).join("\n")}`,
    `## Files\n${project.files.map((f) => `- ${f.path}`).join("\n")}`,
    `## Dependencies\n${project.dependencies.join(", ")}`,
    `## Scripts\n${Object.entries(project.scripts).map(([k, v]) => `  "${k}": "${v}"`).join("\n")}`,
  ].join("\n\n");
}
const taskBoard: ProjectScaffold = {
  name: "team-task-board",
  directories: ["src/server", "src/client", "src/shared", "tests", "docs"],
  files: [
    { path: "src/server/index.ts", content: "import express from 'express';\nconst app = express();\napp.listen(3000);" },
    { path: "src/client/App.tsx", content: "export function App() { return <div>Task Board</div>; }" },
    { path: "docker-compose.yml", content: "version: '3.8'\nservices:\n  app:\n    build: .\n    ports:\n      - '3000:3000'" },
  ],
  dependencies: ["express", "react", "typescript", "prisma", "redis"],
  scripts: { dev: "tsx watch src/server/index.ts", build: "tsc", test: "vitest", start: "node dist/index.js" },
};
console.log(generateScaffold(taskBoard));

// === Chapter Cross-Reference Validator ===
const capstonePhases = [
  { phase: 1, title: "Process Selection", chapters: [1, 11], tools: ["recommendModel()"] },
  { phase: 2, title: "Requirements", chapters: [2], tools: ["moscowPrioritize()", "furpsClassifier"] },
  { phase: 3, title: "Architecture", chapters: [4], tools: ["compareStyles()", "tradeoffAnalyzer"] },
  { phase: 4, title: "Design & Implementation", chapters: [3, 5, 6], tools: ["umlClassToTS()", "solidValidator"] },
  { phase: 5, title: "Testing", chapters: [6], tools: ["generateTestCases()", "checkPyramid()"] },
  { phase: 6, title: "DevOps & CI/CD", chapters: [12], tools: ["validatePipeline()", "canRollback()"] },
  { phase: 7, title: "Quality & Metrics", chapters: [9, 15], tools: ["calculateQualityIndex()", "gqmFramework"] },
  { phase: 8, title: "Configuration Management", chapters: [10], tools: ["validateBranchStrategy()", "diffBaselines()"] },
  { phase: 9, title: "Security", chapters: [13], tools: ["strideThreats()", "owaspTop10"] },
  { phase: 10, title: "Formal Specification", chapters: [14], tools: ["verifyFSM()"] },
];

function crossReferenceChapters(chapterNum: number): { phase: number; tools: string[] }[] {
  return capstonePhases
    .filter((p) => p.chapters.includes(chapterNum))
    .map((p) => ({ phase: p.phase, tools: p.tools }));
}
console.log(crossReferenceChapters(6)); // Testing + Design phases

// === Capstone Deliverable Checklist ===
interface Deliverable {
  name: string;
  description: string;
  verified: boolean;
}
function checklistProgress(deliverables: Deliverable[]): { done: number; total: number; percent: number; pending: string[] } {
  const done = deliverables.filter((d) => d.verified).length;
  return { done, total: deliverables.length, percent: Math.round(done / deliverables.length * 100), pending: deliverables.filter((d) => !d.verified).map((d) => d.name) };
}
const deliverables: Deliverable[] = [
  { name: "SRS Document", description: "Software requirements specification", verified: true },
  { name: "Architecture ADRs", description: "Architecture Decision Records", verified: true },
  { name: "API Implementation", description: "RESTful API endpoints", verified: false },
  { name: "Frontend UI", description: "React-based user interface", verified: false },
  { name: "Test Suite", description: "Unit + integration + e2e", verified: false },
  { name: "CI/CD Pipeline", description: "Automated build and deploy", verified: false },
  { name: "Deployment Config", description: "Docker Compose + cloud config", verified: false },
];
console.log(checklistProgress(deliverables));

// === Skill Summary Generator ===
function generateSkillSummary(): { chapter: number; topics: string; typescriptTools: string }[] {
  return capstonePhases.map((p) => ({
    chapter: p.phase,
    topics: p.title,
    typescriptTools: p.tools.join(", "),
  }));
}
console.log(generateSkillSummary().slice(0, 3));
```

## Summary

This capstone chapter integrates all 15 preceding chapters into the development of a Team Task Board application. The complete software engineering lifecycle is demonstrated: process selection (Scrum), requirements specification (user stories, SRS), architecture design (system decomposition, technology stack), detailed design (API, database, patterns), implementation (TypeScript with Express, React, PostgreSQL, Redis), testing (unit, integration, CI), quality management (metrics, gates, monitoring), configuration management (Git, CI/CD), security (authentication, authorisation, rate limiting), and deployment (Docker Compose). Each phase references the relevant chapter for deeper study. The final deliverable is a production-ready software system with full documentation — the culmination of all skills taught in this course.

## Practical Takeaways

1. **Integrate from day one** — every phase of the lifecycle impacts every other; process selection affects requirements, which affects architecture, which affects testing, which affects deployment
2. **Traceability is the backbone of professional software engineering** — every requirement must trace to architecture decisions, design elements, code modules, and test cases; tools like the cross-reference validator make this explicit
3. **CI/CD is not optional** — automated pipelines enforce quality gates (test coverage, linting, security scanning) and catch integration issues before they reach production
4. **Security is a continuous activity, not a phase** — threat modelling, dependency scanning, rate limiting, and OWASP review must be part of every sprint, not a one-time audit
5. **Metrics drive improvement** — velocity, coverage, response times, error rates, and defect density provide the empirical data needed for data-driven process improvement
6. **Documentation is a deliverable** — ADRs, SRS documents, OpenAPI specs, runbooks, and monitoring dashboards are as important as the code itself for long-term project success

## Chapter Quiz

**Q1: What process model does the Team Task Board capstone adopt?**
- A) Waterfall
- B) V-Model
- C) Scrum with iterative/incremental delivery
- D) Spiral Model

**Answer: C** — The capstone uses Scrum with 2-week sprints and an iterative/incremental approach, delivering features in four sprints.

**Q2: What is the primary purpose of Architecture Decision Records (ADRs) as used in the capstone?**
- A) To track project expenses
- B) To document the rationale behind architectural choices
- C) To replace user stories
- D) To generate test cases automatically

**Answer: B** — ADRs capture the context, decision, and consequences of architectural choices, providing traceability for future engineers.

**Q3: Which OWASP Top 10 risk does the rate limiter middleware in Phase 9 primarily address?**
- A) Injection
- B) Broken Access Control
- C) Security Misconfiguration
- D) Rate limiting is not an OWASP category, it mitigates brute-force attacks and DoS

**Answer: D** — Rate limiting mitigates brute-force authentication attacks and denial-of-service, which relate to several OWASP categories including Broken Authentication and security misconfiguration.

**Q4: In the capstone's CI pipeline, what action does the pipeline take when test coverage falls below the 80% threshold?**
- A) It deploys anyway with a warning
- B) It fails the pipeline and blocks the deployment
- C) It reduces the threshold automatically
- D) It skips coverage checks on Fridays

**Answer: B** — The pipeline enforces the quality gate by failing the build when coverage drops below 80%, preventing untested code from reaching production.

**Q5: According to the capstone's metric dashboard, which three signals are monitored to assess system health?**
- A) Lines of code, number of commits, team velocity
- B) Request rate, error rate, and duration (the RED method)
- C) Database size, cache hit ratio, and test count
- D) CPU temperature, fan speed, and memory voltage

**Answer: B** — The capstone dashboard follows the RED method: Rate (requests/second), Errors (error rate), and Duration (response time percentiles), which are the three key signals for microservice observability.

## Exercises

### Review Questions

1. Trace the journey from a user story (US-03: Task CRUD) through architecture, design, implementation, testing, and deployment. Name the artifacts produced at each stage.

2. How does the Task entity's state machine design relate to formal methods from Chapter 14?

3. What non-functional requirements drove the architecture decisions for this system?

4. Describe how the CI pipeline enforces quality gates from Chapter 9.

5. What security measures were applied and which OWASP Top 10 risks do they address?

### Application Problems

1. Extend the Team Task Board with a sprint management feature. Write user stories, add database tables, implement the API endpoints, and write tests. Add sprint burndown chart generation.

2. Design a monitoring dashboard for the deployed system using Prometheus metrics and Grafana panels. Specify the metrics to collect, alert thresholds, and dashboard layout.

3. Write a post-deployment retrospective analysing what went well and what could be improved. Use the Scrum retrospective format from Chapter 11.

### Challenge Problem

The Team Task Board has been deployed and is serving 500 daily active users. After three months, the team observes:
- API response times degraded from 150ms to 800ms p95
- WebSocket disconnections increased from 0.1% to 3%
- Database CPU is at 85% utilisation
- Two security vulnerabilities reported in dependencies

Diagnose each issue using monitoring data, propose specific architectural or code changes to address each one, implement the fixes, and verify improvement. Each fix must trace back to a specific lesson from Chapters 1-15 (e.g., database indexing from Chapter 4, connection pooling from Chapter 5, horizontal scaling from Chapter 12). Implement a TypeScript load testing script that simulates the usage pattern and validates the improvements.
