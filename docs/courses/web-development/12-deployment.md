# Chapter 12: Deployment and DevOps

## Learning Objectives

By the end of this chapter, you will be able to:
- Set up build processes for frontend and backend applications
- Manage environment variables across deployment environments
- Deploy applications to Vercel, Netlify, Railway, and AWS
- Configure custom domains and SSL certificates
- Implement CI/CD pipelines with GitHub Actions
- Monitor production applications

## 12.1 Build Process

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
