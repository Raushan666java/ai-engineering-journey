# Chapter 12: Deployment and DevOps

> **Previous:** [11-databases-web](./11-databases-web.md) | **Next:** [13-security](./13-security.md)

## Learning Objectives

> **One-Sentence Takeaway:** Build processes transpile, bundle, and optimize code for production deployment.

By the end of this chapter, you will be able to:

## Chapter at a Glance

> **One-Sentence Takeaway:** Environment variables separate configuration from code and keep secrets out of version control.

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
|Build Process|Transpile TypeScript, bundle assets, optimize output|Use `npm ci` for reproducible CI builds, validate env vars at startup with Zod|
|Environment Config|Per-environment variables keep secrets out of source control|Use `.env.local` for dev, platform env vars for production, validate with Zod schemas|
|Platform Deploy|Vercel (Next.js), Railway (backend), Netlify (static sites)|Match the platform to the framework — Vercel for Next.js, Railway for Express APIs|
|Docker|Containerize apps with multi-stage builds for minimal production images|Use Alpine base images, separate build and run stages, run as non-root user|
|CI/CD|GitHub Actions automate testing and deployment on every push|Run type-checking, linting, and testing in parallel before deploying|
|Monitoring|Structured logging (pino), health checks, uptime tracking|Log in JSON format for machine parsing, include request IDs for traceability|

## Chapter Roadmap

> **One-Sentence Takeaway:** Vercel excels at Next.js deployments while Railway simplifies backend API hosting.

```mermaid
graph TD
    A[Build Process Configuration]
    B[Environment Variable Management]
    A --> B
    C[Vercel Deployment (Next.js)]
    B --> C
    D[Railway Deployment (Backend)]
    C --> D
    E[Docker Multi-Stage Builds]
    D --> E
    F[Docker Compose]
    E --> F
    G[CI/CD with GitHub Actions]
    F --> G
    H[Monitoring & Health Checks]
    G --> H
```


- Set up build processes for frontend and backend applications
- Manage environment variables across deployment environments
- Deploy applications to Vercel, Netlify, Railway, and AWS
- Configure custom domains and SSL certificates
- Implement CI/CD pipelines with GitHub Actions
- Monitor production applications

## 12.1 Build Process

> **One-Sentence Takeaway:** Docker containers ensure consistent environments from development through production.

![Deployment and DevOps Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/12-deployment.png)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

### Environment Variables

```bash
# .env.local - Development (not committed)
DATABASE_URL=postgresql://localhost:5432/mydb
JWT_SECRET=local_dev_secret
API_URL=http://localhost:4000

# .env.production - Production values set in hosting platform
NEXT_PUBLIC_API_URL=https://api.example.com
```

```typescript
// Runtime validation with Zod
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  NODE_ENV: z.enum(["development", "production", "test"]),
  REDIS_URL: z.string().url().optional(),
  PORT: z.coerce.number().default(4000),
});

const env = envSchema.parse(process.env);
export default env;
```

## 12.2 Vercel Deployment (Next.js)

> **One-Sentence Takeaway:** CI/CD pipelines automate quality checks and deployment, reducing human error.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables
vercel env add DATABASE_URL production
```

### `vercel.json`

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm ci",
  "env": {
    "NEXT_PUBLIC_API_URL": "@api_url"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

## 12.3 Railway Deployment (Backend)

> **One-Sentence Takeaway:** Structured logging and health check endpoints enable production monitoring and debugging.

```bash
# Install Railway CLI
npm i -g @railway/cli

# Initialize
railway init

# Deploy
railway up

# Open logs
railway logs
```

### `railway.json`

```json
{
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  },
  "deploy": {
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

## 12.4 Docker Deployment

```dockerfile
# Multi-stage build for Node.js API
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 appuser
COPY --from=builder /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
USER appuser
EXPOSE 4000
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
```

```yaml
# docker-compose.yml for production-like environment
version: "3.8"
services:
  app:
    build: .
    ports:
      - "4000:4000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

## 12.5 CI/CD with GitHub Actions

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: "npm"
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run build

  test:
    needs: quality
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npx prisma migrate deploy
        env:
          DATABASE_URL: postgresql://postgres:test@localhost:5432/postgres
      - run: npm test
        env:
          DATABASE_URL: postgresql://postgres:test@localhost:5432/postgres

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Railway
        run: npx railway up --service my-api
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

## 12.6 Monitoring and Logging

```typescript
import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  transport:
    process.env.NODE_ENV === "development"
      ? { target: "pino-pretty" }
      : undefined,
  redact: ["req.headers.authorization", "req.body.password"],
});

// Express middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    logger.info({
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: Date.now() - start,
    });
  });
  next();
});
```

### Health Check Endpoint

```typescript
app.get("/api/health", async (req, res) => {
  const checks = {
    database: false,
    redis: false,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  };

  try {
    await prisma.$queryRaw`SELECT 1`;
    checks.database = true;
  } catch {}

  try {
    await redis.ping();
    checks.redis = true;
  } catch {}

  const healthy = Object.values(checks).every((v) => v === true || typeof v === "number");
  res.status(healthy ? 200 : 503).json({ status: healthy ? "healthy" : "degraded", checks });
});
```


> [!TIP]
> Always validate environment variables at startup with a Zod schema. A startup failure is far easier to debug than a mysterious runtime crash from a missing variable.

> [!WARNING]
> Never commit `.env` or `.env.local` files. Use `.env.example` with placeholder values as a template that is committed to the repository.

> [!REMEMBER]
> Multi-stage Docker builds keep production images small by separating build dependencies from runtime dependencies. The final stage should only contain what is needed to run the application.



## Concept Comparison Table

| Concept | Description | Use Case |
|---------|-------------|---------|
|Vercel vs Railway|Frontend-optimized, Next.js native, edge functions|Backend-focused, database hosting, Docker support|
|Docker vs VM|Process-level isolation, shares host kernel|Full OS virtualization, heavier|
|`npm ci` vs `npm install`|Uses lockfile, deletes node_modules, faster in CI|Updates lockfile, slower, can drift|
|Structured vs Unstructured Logs|JSON format, queryable, machine-readable|Free text, human-readable only|
|Health Check vs Full Test|Quick liveness check, no dependencies|Thorough, full test suite|

## Quick Reference

| Topic | Key Points |
|-------|-----------|
|Env Files|.env.local (dev secret), .env.production (prod template), .env.example (documented)|
|Dockerfile Stages|`AS deps` (prod deps), `AS builder` (build), `AS runner` (minimal production)|
|GitHub Actions|`actions/checkout`, `actions/setup-node`, service containers, `needs` for pipeline stages|
|Security Headers|`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`|
|Docker Compose|`services:`, `build:`, `ports:`, `environment:`, `depends_on:`, `volumes:`|

## Cross-Application Matrix

| Domain | Application | Benefit |
|--------|------------|--------|
|Blog|Vercel + Next.js deploy with ISR|Instant global CDN with automatic revalidation|
|API Backend|Railway + Docker with PostgreSQL|Managed database and auto-scaling|
|E-commerce|CI/CD with staging and production environments|Safe deploys with automated testing|
|Static Site|Netlify with Git-based continuous deployment|Free hosting with form handling and serverless functions|
|Enterprise|Docker Compose on VPS with monitoring|Full control over infrastructure and costs|

## Chapter Quiz

Test your understanding with these quick questions.

**Q1. What is the advantage of multi-stage Docker builds?**

- A) They build faster
- B) The final image only contains runtime dependencies, keeping it small
- C) They require fewer Docker commands
- D) They work without a Dockerfile

<details><summary>Answer</summary>

**B) Multi-stage builds use separate stages for dependencies, building, and running. The final stage copies only the compiled output and production dependencies, resulting in a minimal image.**

</details>

**Q2. Why should you validate environment variables at startup?**

- A) To improve performance
- B) To fail fast with a clear error if configuration is missing
- C) To encrypt the environment variables
- D) To log them for debugging

<details><summary>Answer</summary>

**B) Startup validation catches misconfiguration immediately with a clear error message, rather than causing cryptic runtime failures when the missing variable is first accessed.**

</details>

**Q3. What is the purpose of `npm ci` vs `npm install` in CI?**

- A) `npm ci` is slower but more thorough
- B) `npm ci` installs from `package-lock.json` exactly, ensuring reproducible builds
- C) `npm ci` also runs tests
- D) `npm ci` skips devDependencies

<details><summary>Answer</summary>

**B) `npm ci` uses the lockfile to install exact versions, deletes `node_modules` first, and fails if the lockfile is out of sync with `package.json` — ensuring deterministic builds.**

</details>

**Q4. What does a health check endpoint typically verify?**

- A) Application uptime only
- B) Connectivity to critical dependencies (database, cache, external services)
- C) User authentication status
- D) API documentation availability

<details><summary>Answer</summary>

**B) Health checks verify that the application and its critical dependencies (database, Redis, external APIs) are reachable and responsive, returning a 200 or 503 status accordingly.**

</details>

## Summary

Deployment transforms development code into production services. Modern platforms like Vercel, Netlify, and Railway abstract infrastructure management. Docker containerizes applications for consistent deployment across environments. CI/CD pipelines automate testing and deployment. Monitoring with structured logging and health checks ensures production reliability.

## Exercises

### Review Questions

1. What is the purpose of multi-stage Docker builds?
2. How do environment variables differ between development and production?
3. Why should CI pipelines include type-checking and linting steps?

### Application Projects

1. Add a staging environment with its own database and domain
2. Implement blue-green deployment strategy
3. Set up Sentry error tracking in production

### Challenge Project

Deploy a full-stack application (Next.js frontend + Express API + PostgreSQL) using Docker Compose on a VPS with custom domain, SSL via Let's Encrypt, automated backups, monitoring dashboard with Grafana, and CI/CD with GitHub Actions.
