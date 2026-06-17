# Chapter 9: REST APIs and API Design

## Learning Objectives

By the end of this chapter, you will be able to:
- Design RESTful APIs following resource-oriented principles
- Implement proper URI naming conventions and HTTP method usage
- Handle request validation, pagination, filtering, and sorting
- Implement error handling with appropriate HTTP status codes
- Document APIs using OpenAPI/Swagger specifications
- Test APIs with automated integration tests

## 9.1 Principles of REST

![REST APIs Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/web-development/09-rest-apis.png)

REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs are built around resources, which are identified by URIs and manipulated through standard HTTP methods.

### Core Constraints

1. **Stateless**: Each request contains all information needed to process it
2. **Client-Server**: Separation of concerns between frontend and backend
3. **Cacheable**: Responses must define themselves as cacheable or not
4. **Layered System**: Intermediate servers can improve scalability
5. **Uniform Interface**: Consistent interaction between components

### Resource Naming

```typescript
// Good - plural nouns, consistent hierarchy
GET    /api/users
GET    /api/users/:id
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id

// Nested resources
GET    /api/users/:id/posts
POST   /api/users/:id/posts
GET    /api/posts/:id/comments

// Bad - verbs in URLs, inconsistent conventions
GET    /api/getUsers
POST   /api/createUser
GET    /api/userInfo
PUT    /api/update_user
```

## 9.2 Express REST API Implementation

```typescript
import express, { Request, Response, NextFunction } from "express";
import { z } from "zod";

const app = express();
app.use(express.json());

// --- Type Definitions ---
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// In-memory store (replace with database in production)
const users: User[] = [];

// --- Validation Schemas ---
const createUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
});

const updateUserSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  email: z.string().email().optional(),
});

const querySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),
  sort: z.enum(["name", "email", "createdAt"]).default("createdAt"),
  order: z.enum(["asc", "desc"]).default("asc"),
  search: z.string().optional(),
});

// --- Routes ---

// POST /api/users - Create a user
app.post("/api/users", (req: Request, res: Response, next: NextFunction) => {
  try {
    const input = createUserSchema.parse(req.body);
    const existing = users.find((u) => u.email === input.email);
    if (existing) {
      return res.status(409).json({
        error: {
          code: "CONFLICT",
          message: "A user with this email already exists",
        },
      });
    }
    const user: User = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: new Date(),
    };
    users.push(user);
    res.status(201).json({ data: user });
  } catch (err) {
    next(err);
  }
});

// GET /api/users - List users with pagination, filtering, sorting
app.get("/api/users", (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = querySchema.parse(req.query);
    let filtered = [...users];

    if (query.search) {
      const term = query.search.toLowerCase();
      filtered = filtered.filter(
        (u) =>
          u.name.toLowerCase().includes(term) ||
          u.email.toLowerCase().includes(term)
      );
    }

    const total = filtered.length;

    filtered.sort((a, b) => {
      const aVal = a[query.sort];
      const bVal = b[query.sort];
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return query.order === "desc" ? -cmp : cmp;
    });

    const skip = (query.page - 1) * query.pageSize;
    const paginated = filtered.slice(skip, skip + query.pageSize);

    res.json({
      data: paginated,
      pagination: {
        page: query.page,
        pageSize: query.pageSize,
        total,
        totalPages: Math.ceil(total / query.pageSize),
      },
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:id - Get a single user
app.get("/api/users/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "User not found" },
      });
    }
    res.json({ data: user });
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:id - Full update
app.put("/api/users/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const input = updateUserSchema.parse(req.body);
    const index = users.findIndex((u) => u.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "User not found" },
      });
    }
    users[index] = { ...users[index], ...input };
    res.json({ data: users[index] });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/users/:id - Partial update
app.patch("/api/users/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const input = updateUserSchema.parse(req.body);
    const index = users.findIndex((u) => u.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "User not found" },
      });
    }
    Object.assign(users[index], input);
    res.json({ data: users[index] });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/users/:id
app.delete("/api/users/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const index = users.findIndex((u) => u.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "User not found" },
      });
    }
    users.splice(index, 1);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

// --- Error Handling Middleware ---
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof z.ZodError) {
    return res.status(400).json({
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request data",
        details: err.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      },
    });
  }
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred" },
  });
});

app.listen(3000, () => console.log("API running on port 3000"));
```

## 9.3 OpenAPI Documentation

```yaml
openapi: 3.1.0
info:
  title: TaskFlow API
  version: 1.0.0
  description: API for TaskFlow task management application

servers:
  - url: https://api.taskflow.com/v1
    description: Production server
  - url: http://localhost:4000
    description: Development server

paths:
  /users:
    get:
      summary: List all users
      parameters:
        - name: page
          in: query
          schema: { type: integer, default: 1 }
        - name: pageSize
          in: query
          schema: { type: integer, default: 20 }
        - name: sort
          in: query
          schema:
            type: string
            enum: [name, email, createdAt]
        - name: search
          in: query
          schema: { type: string }
      responses:
        "200":
          description: Paginated list of users
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: "#/components/schemas/User"
                  pagination:
                    $ref: "#/components/schemas/Pagination"

    post:
      summary: Create a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateUserInput"
      responses:
        "201":
          description: User created
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    $ref: "#/components/schemas/User"
        "409":
          description: Email conflict

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
        email:
          type: string
          format: email
        createdAt:
          type: string
          format: date-time
    CreateUserInput:
      type: object
      required: [name, email]
      properties:
        name:
          type: string
          minLength: 1
          maxLength: 100
        email:
          type: string
          format: email
    Pagination:
      type: object
      properties:
        page: { type: integer }
        pageSize: { type: integer }
        total: { type: integer }
        totalPages: { type: integer }
```

## 9.4 API Versioning Strategies

```typescript
// Strategy 1: URI versioning (most common)
app.use("/api/v1/users", v1UserRouter);
app.use("/api/v2/users", v2UserRouter);

// Strategy 2: Header versioning
app.use("/api/users", (req, res, next) => {
  const version = req.headers["accept-version"];
  if (version === "2") return v2UserRouter(req, res, next);
  return v1UserRouter(req, res, next);
});

// Strategy 3: Query parameter versioning
app.use("/api/users", (req, res, next) => {
  const version = req.query.apiVersion;
  if (version === "2") return v2UserRouter(req, res, next);
  return v1UserRouter(req, res, next);
});
```

## 9.5 Bulk Operations

```typescript
// POST /api/users/bulk - Create multiple users
app.post("/api/users/bulk", async (req, res, next) => {
  try {
    const input = z.array(createUserSchema).parse(req.body);
    const created = await Promise.all(
      input.map(async (u) => {
        const user = await db.user.create({ data: u });
        return user;
      })
    );
    res.status(201).json({ data: created, count: created.length });
  } catch (err) {
    next(err);
  }
});
```

## Summary

REST API design follows resource-oriented principles with consistent URI naming, proper HTTP method usage, and appropriate status codes. Key practices include input validation with Zod, structured error responses, pagination, filtering, sorting, and comprehensive documentation with OpenAPI. Versioning strategies ensure backward compatibility as APIs evolve.

## Exercises

### Review Questions

1. What are the six constraints of REST architecture?
2. Why should URIs use plural nouns instead of verbs?
3. What HTTP status codes indicate success, client error, and server error?

### Application Projects

1. Add query parameter filtering for multiple fields to the users API
2. Implement cursor-based pagination instead of offset pagination
3. Add support for sparse fieldsets (`?fields=id,name,email`)

### Challenge Project

Build a RESTful API for a blogging platform that includes posts, comments, tags, and authors, with full OpenAPI documentation and automated integration tests.
