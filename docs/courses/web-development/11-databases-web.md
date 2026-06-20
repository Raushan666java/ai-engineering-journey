# Chapter 11: Databases in Web Applications

> **Previous:** [10-auth](./10-auth.md) | **Next:** [12-deployment](./12-deployment.md)

## Learning Objectives

> **One-Sentence Takeaway:** SQL databases suit structured relational data while NoSQL offers flexible schemas for unstructured data.

By the end of this chapter, you will be able to:

## Chapter at a Glance

> **One-Sentence Takeaway:** Prisma ORM provides type-safe database access with auto-generated queries and schema migrations.

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
|SQL vs NoSQL|SQL enforces schemas and relationships; NoSQL offers flexible documents|Use SQL for structured relational data, NoSQL for high-velocity unstructured or denormalized data|
|Prisma ORM|Type-safe query builder with auto-generated client and migrations|Define models in schema.prisma, run `prisma generate` for the typed client|
|Migrations|Version-controlled schema changes applied in order across environments|Write descriptive migration names, test down migrations, never edit applied migrations|
|Raw SQL|Parameterized queries with the `pg` library prevent injection|Always use `$1`, `$2` placeholders — never string interpolation for values|
|Indexing|Database indexes speed up reads at the cost of write performance|Create composite indexes matching query filter/sort patterns, use partial indexes for filtered queries|
|N+1 Problem|Fetching parent rows then querying children individually causes N extra queries|Always eager-load relations with `include` in Prisma or JOIN in raw SQL|
|Redis Caching|In-memory key-value store reduces database load for frequent queries|Set TTLs appropriate to data freshness needs, invalidate cache on writes|

## Chapter Roadmap

> **One-Sentence Takeaway:** Database migrations version-control schema changes and ensure consistent application across environments.

```mermaid
graph TD
    A[SQL vs NoSQL]
    B[Prisma Schema & Client]
    A --> B
    C[CRUD Operations]
    B --> C
    D[Migrations]
    C --> D
    E[Raw SQL with pg]
    D --> E
    F[Database Indexing]
    E --> F
    G[N+1 Problem Solutions]
    F --> G
    H[Redis Caching]
    G --> H
```


- Choose between SQL and NoSQL databases for web applications
- Use Prisma ORM for type-safe database access
- Design database schemas with proper relationships and indexes
- Write optimized SQL queries and avoid the N+1 problem
- Implement Redis caching for improved performance
- Handle database migrations in production

## 11.1 SQL vs NoSQL

> **One-Sentence Takeaway:** Parameterized queries with `pg` prevent SQL injection by separating query structure from user data.

![Databases for Web Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/11-databases-web.png)

```typescript
// SQL: Structured data with relationships
const query = `
  SELECT users.*, COUNT(posts.id) as post_count
  FROM users
  LEFT JOIN posts ON posts.user_id = users.id
  WHERE users.active = true
  GROUP BY users.id
  ORDER BY post_count DESC
`;

// NoSQL: Flexible schema, denormalized data
const user = await db.collection("users").findOne({ email });
await db.collection("posts").insertOne({
  userId: user._id,
  title: "My Post",
  tags: ["web", "database"],
});
```

## 11.2 Prisma ORM

> **One-Sentence Takeaway:** Proper indexing dramatically improves query performance with minimal write overhead.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    String @id @default(cuid())
  email String @unique
  name  String
  posts Post[]
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  tags      Tag[]
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]
}
```

### CRUD with Prisma

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create
const user = await prisma.user.create({
  data: { email: "alice@example.com", name: "Alice" },
});

// Read with relations
const userWithPosts = await prisma.user.findUnique({
  where: { email: "alice@example.com" },
  include: { posts: { include: { tags: true } } },
});

// Update
const updated = await prisma.post.update({
  where: { id: "postId" },
  data: { published: true },
});

// Delete
await prisma.post.delete({ where: { id: "postId" } });

// Paginated query with filtering
const posts = await prisma.post.findMany({
  where: { published: true, title: { contains: "Web" } },
  orderBy: { createdAt: "desc" },
  skip: 0,
  take: 20,
  include: { author: { select: { name: true, email: true } } },
});
```

## 11.3 Migrations

> **One-Sentence Takeaway:** The N+1 problem is solved by eager-loading related data in a single query.

```bash
# Create migration
npx prisma migrate dev --name add_user_role

# Apply to production
npx prisma migrate deploy

# Check migration status
npx prisma migrate status
```

```prisma
// Migration file auto-generated by Prisma
model User {
  id    String @id @default(cuid())
  email String @unique
  name  String
  role  String @default("MEMBER") // New field
  posts Post[]
}
```

## 11.4 Raw SQL with pg

> **One-Sentence Takeaway:** Redis caching reduces database load by serving frequently accessed data from memory.

```typescript
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Parameterized queries prevent SQL injection
async function getUserWithPosts(userId: string) {
  const { rows } = await pool.query(
    `
    SELECT u.*, json_agg(
      json_build_object('id', p.id, 'title', p.title)
    ) FILTER (WHERE p.id IS NOT NULL) as posts
    FROM users u
    LEFT JOIN posts p ON p.author_id = u.id
    WHERE u.id = $1
    GROUP BY u.id
    `,
    [userId]
  );
  return rows[0];
}
```

## 11.5 Indexing for Performance

```sql
-- Single column index
CREATE INDEX idx_posts_published ON posts(published);

-- Composite index for common query patterns
CREATE INDEX idx_posts_author_published ON posts(author_id, published);

-- Partial index for filtered queries
CREATE INDEX idx_posts_recent ON posts(created_at DESC)
WHERE published = true AND created_at > NOW() - INTERVAL '30 days';

-- Full-text search index
CREATE INDEX idx_posts_search ON posts
USING GIN(to_tsvector('english', title || ' ' || content));
```

## 11.6 Solving the N+1 Problem

```typescript
// BAD: N+1 queries - fetches author for each post individually
const posts = await prisma.post.findMany({ where: { published: true } });
for (const post of posts) {
  const author = await prisma.user.findUnique({ where: { id: post.authorId } });
  console.log(post.title, author.name);
}

// GOOD: Single query with eager loading
const postsWithAuthors = await prisma.post.findMany({
  where: { published: true },
  include: { author: true },
});

// For raw SQL batch loading
const posts = await pool.query("SELECT * FROM posts WHERE published = true");
const authorIds = [...new Set(posts.rows.map((p) => p.author_id))];
const authors = await pool.query("SELECT * FROM users WHERE id = ANY($1)", [authorIds]);
const authorMap = new Map(authors.rows.map((a) => [a.id, a]));
```

## 11.7 Redis Caching

```typescript
import { createClient } from "redis";

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

// Caching middleware
async function getCachedOrFetch<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttlSeconds: number = 300
): Promise<T> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const data = await fetchFn();
  await redis.setEx(key, ttlSeconds, JSON.stringify(data));
  return data;
}

// Usage
app.get("/api/posts", async (req, res) => {
  const posts = await getCachedOrFetch(
    `posts:${req.query.page}`,
    () => prisma.post.findMany({ skip, take: 20 }),
    60
  );
  res.json({ data: posts });
});
```


> [!TIP]
> Use `prisma.$transaction([])` for operations that must all succeed or all fail — it wraps multiple queries in a database transaction with automatic rollback.

> [!WARNING]
> Never edit an applied migration file. Always create a new migration for schema changes. Editing applied migrations leads to inconsistent database states across environments.

> [!REMEMBER]
> Indexes speed up SELECT but slow down INSERT/UPDATE/DELETE. Only index columns that are actually used in WHERE, JOIN, or ORDER BY clauses.



## Concept Comparison Table

| Concept | Description | Use Case |
|---------|-------------|---------|
|SQL vs NoSQL|Structured schema, ACID, JOINs|Flexible schema, BASE, denormalized|
|Prisma vs Raw SQL|Type-safe, auto-generated, migrations|Full control, maximum performance|
|Index vs No Index|Fast reads, slower writes|Faster writes, sequential reads|
|B-tree vs Hash Index|Range queries, ORDER BY|Exact match lookups only|
|Prisma `include` vs `select`|Eager-loads relations, all fields|Eager-loads with specific field selection|

## Quick Reference

| Topic | Key Points |
|-------|-----------|
|Prisma Client|`create()`, `findUnique()`, `findMany()`, `update()`, `delete()`, `upsert()`|
|Migration Commands|`prisma migrate dev`, `prisma migrate deploy`, `prisma migrate status`|
|SQL Join Types|`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`, `CROSS JOIN`|
|Index Types|B-tree, Hash, GiST, GIN, Partial, Composite, Covering|
|Cache Patterns|Cache-aside, Read-through, Write-through, Write-behind, Cache invalidation|

## Cross-Application Matrix

| Domain | Application | Benefit |
|--------|------------|--------|
|E-commerce|PostgreSQL with Prisma for products/orders/inventory|ACID compliance for financial transactions|
|Real-time Analytics|Redis for leaderboards, session stores|Sub-millisecond reads at scale|
|Content Platform|PostgreSQL with full-text search indexes|Fast article and tag queries|
|IoT Dashboard|TimescaleDB for time-series sensor data|Efficient range queries on timestamp data|
|Social Network|PostgreSQL with GIN indexes for JSONB user profiles|Flexible schema evolution for user data|

## Chapter Quiz

Test your understanding with these quick questions.

**Q1. What is the N+1 problem in database queries?**

- A) Running N+1 different queries that should be one
- B) A query that uses N+1 JOINs
- C) An index that spans N+1 columns
- D) A migration that fails on step N+1

<details><summary>Answer</summary>

**A) The N+1 problem occurs when code fetches a list of N parent entities, then executes N additional queries to fetch related child entities — instead of one query with a JOIN.**

</details>

**Q2. What is the primary advantage of Prisma ORM over raw SQL?**

- A) It is faster than raw SQL
- B) It provides type-safe queries with auto-completion and compile-time error checking
- C) It does not require a database
- D) It automatically deploys migrations

<details><summary>Answer</summary>

**B) Prisma generates a TypeScript client from the schema, giving compile-time type safety and auto-completion for all queries, migrations, and relations.**

</details>

**Q3. Which index type is best for range queries (WHERE created_at > ?)?**

- A) Hash index
- B) B-tree index
- C) GIN index
- D) GiST index

<details><summary>Answer</summary>

**B) B-tree indexes support range queries, sorting, and pattern matching. Hash indexes only support exact equality comparisons.**

</details>

**Q4. How should you invalidate a Redis cache when data is updated?**

- A) Delete the cache key and let the next read repopulate it
- B) Update the cache directly with the new data
- C) Restart the Redis server
- D) Set the TTL to 0

<details><summary>Answer</summary>

**A) Cache invalidation typically deletes (or updates) the cache key when the underlying data changes. The next read triggers a cache miss, fetches fresh data, and repopulates the cache.**

</details>

## Summary

Databases are the persistence layer of web applications. Prisma ORM provides type-safe database access with auto-generated queries and migrations. SQL databases suit structured relational data, while NoSQL offers schema flexibility. Proper indexing, solving N+1 queries, and Redis caching are essential for performance at scale.

## Exercises

### Review Questions

1. When would you choose a NoSQL database over SQL?
2. How do database indexes improve query performance?
3. What is the N+1 problem and how do you solve it?

### Application Projects

1. Add full-text search to a blog using PostgreSQL tsvector
2. Implement a leaderboard feature using Redis sorted sets
3. Create a database migration strategy with rollback support

### Challenge Project

Build a database layer for an e-commerce platform with products, categories, inventory, orders, and users. Include composite indexes for reporting queries, Redis caching for product listings, migration scripts for schema changes, and a query analysis tool that identifies slow queries.
