# Chapter 8 — Node.js and Express

## Learning Objectives

By the end of this chapter, you will be able to:

1. Explain the Node.js event loop, its phases, and how asynchronous I/O works.
2. Organize code using CommonJS and ES modules in Node.js.
3. Manage project dependencies using npm.
4. Create an Express web server with routing, middleware, and error handling.
5. Serve static files and render dynamic templates.
6. Test HTTP endpoints using Postman, curl, or a browser.

## Theory

### 8.1 Node.js Overview

Node.js is a JavaScript runtime built on Chrome's V8 engine. It provides an event-driven, non-blocking I/O model that makes it efficient for data-intensive real-time applications.

**The Event Loop:**

Node.js processes JavaScript on a single thread using an event loop. The loop has six phases:

1. **Timers** — executes callbacks scheduled by `setTimeout` and `setInterval`.
2. **Pending callbacks** — executes I/O callbacks deferred to the next iteration.
3. **Idle, prepare** — internal use.
4. **Poll** — retrieves new I/O events; blocks if no timers are due.
5. **Check** — executes `setImmediate` callbacks.
6. **Close callbacks** — executes close event handlers (e.g., socket `close`).

```javascript
console.log('1: Start');

setTimeout(() => console.log('2: Timeout'), 0);
setImmediate(() => console.log('3: Immediate'));
process.nextTick(() => console.log('4: NextTick'));

Promise.resolve().then(() => console.log('5: Promise'));

console.log('6: End');

// Output: 1, 6, 4, 5, 2 or 3, 2 or 3
// nextTick runs before Promise microtasks, which run before timer phase
```

### 8.2 Node.js Modules

**CommonJS** (default, `.js` or `.cjs` extension):

```javascript
// math.js
const PI = 3.14159;
function square(x) { return x * x; }
module.exports = { PI, square };
module.exports.default = { PI, square };

// app.js — synchronous require
const math = require('./math.js');
console.log(math.PI); // 3.14159
```

**ES Modules** (`.mjs` or `"type": "module"` in `package.json`):

```json
// package.json
{
  "type": "module",
  "engines": { "node": ">=22" }
}
```

```javascript
// math.mjs
export const PI = 3.14159;
export function square(x) { return x * x; }

// app.mjs — static import
import { PI, square } from './math.mjs';

// Dynamic import
const module = await import('./heavy-module.mjs');
```

### 8.3 npm

```bash
# Initialize a project
npm init -y

# Install dependencies
npm install express
npm install --save-dev nodemon typescript

# Install globally
npm install -g nodemon

# Run scripts
npm run dev
npm test
```

**package.json scripts:**

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "lint": "eslint src/",
    "test": "vitest run"
  }
}
```

### 8.4 Express Fundamentals

Express is a minimal, flexible web application framework for Node.js.

```javascript
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware — runs for every request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### 8.5 HTTP Methods and Routes

Express routes map HTTP methods and URL paths to handler functions.

```javascript
// GET — Retrieve resources
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET with route parameter
app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST — Create resource
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const newUser = { id: users.length + 1, name, email, createdAt: new Date() };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT — Replace resource
app.put('/api/users/:id', (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

// PATCH — Partial update
app.patch('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  Object.assign(user, req.body);
  res.json(user);
});

// DELETE — Remove resource
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  users.splice(index, 1);
  res.status(204).send();
});
```

### 8.6 Request and Response Objects

**Request (`req`):**

```javascript
app.use((req, res, next) => {
  console.log({
    method: req.method,
    url: req.url,
    path: req.path,
    params: req.params,
    query: req.query,
    body: req.body,
    headers: req.headers,
    ip: req.ip,
  });
  next();
});
```

**Response (`res`):**

```javascript
app.get('/example', (req, res) => {
  // Status
  res.status(200);

  // JSON
  res.json({ success: true });

  // Send raw string
  res.send('OK');

  // Send file
  res.sendFile('/path/to/file.pdf');

  // Redirect
  res.redirect('/new-url');

  // Set headers
  res.set('X-Custom-Header', 'value');
  res.set({
    'Cache-Control': 'no-cache',
    'X-Powered-By': 'Express',
  });

  // Chain
  res.status(201).location('/api/users/123').json({ id: 123 });
});
```

### 8.7 Middleware

Middleware functions are functions that have access to `req`, `res`, and `next`. They can execute code, modify request/response objects, end the request cycle, or call the next middleware.

```javascript
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// Third-party middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

// Application-level middleware
app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});

// Route-specific middleware
function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  try {
    req.user = verifyToken(token);
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
}

app.get('/api/profile', requireAuth, (req, res) => {
  res.json(req.user);
});

// Error-handling middleware (4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message,
  });
});
```

### 8.8 Static Files

Express serves static files from a directory:

```javascript
// Serve files from the 'public' directory
app.use(express.static('public'));

// Requests to /styles/main.css map to ./public/styles/main.css

// Virtual path prefix
app.use('/assets', express.static('public/assets'));

// Multiple directories
app.use(express.static('public'));
app.use(express.static('uploads'));
```

### 8.9 Template Engines

Express supports template engines for server-side rendering:

```javascript
// Setup EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Route renders template
app.get('/profile', (req, res) => {
  res.render('profile', {
    user: { name: 'Alice', email: 'alice@example.com' },
    pageTitle: 'User Profile',
  });
});
```

```html
<!-- views/profile.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title><%= pageTitle %></title>
</head>
<body>
  <h1><%= user.name %></h1>
  <p><%= user.email %></p>
</body>
</html>
```

### 8.10 Testing with curl

```bash
# GET
curl http://localhost:3000/api/users

# GET with parameter
curl http://localhost:3000/api/users/1

# POST with JSON body
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Bob", "email": "bob@example.com"}'

# PUT
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Robert"}'

# DELETE
curl -X DELETE http://localhost:3000/api/users/1
```

## Summary

- Node.js uses a single-threaded event loop with phases for timers, I/O polling, and callbacks.
- Modules may use CommonJS (`require`) or ES modules (`import`/`export`).
- npm manages dependencies with `package.json` and `node_modules`.
- Express provides routing, middleware chains, and request/response abstractions.
- Middleware can be application-level, route-specific, or error-handling (four parameters).
- Static files and template engines enable full-stack applications.
- HTTP endpoints are testable with curl, Postman, or HTTPie.

## Exercises

### Review Questions

1. What is the difference between `process.nextTick` and `setImmediate`?
2. How does Express middleware ordering affect request processing?
3. What is the purpose of `express.json()` middleware?
4. Why should error-handling middleware have four parameters?

### Application Problems

5. Build an Express server with routes for a todo API: `GET /todos`, `GET /todos/:id`, `POST /todos`, `PUT /todos/:id`, `DELETE /todos/:id`. Store todos in memory. Each todo should have `id`, `title`, `completed`, and `createdAt`. Return appropriate status codes.
6. Implement request logging middleware that records the HTTP method, URL, status code, and response time for every request.
7. Create a middleware function `validateResource(schema)` that validates `req.body` against a plain-object schema and returns 400 with error details on validation failure.

### Challenge Problem

8. Build a complete RESTful blog API server with:
   - `GET /api/posts` — list posts with pagination (`?page=1&limit=10`)
   - `GET /api/posts/:id` — single post with author details
   - `POST /api/posts` — create post (requires auth middleware)
   - `PUT /api/posts/:id` — update post (only by author)
   - `DELETE /api/posts/:id` — soft-delete post (sets `deletedAt`)
   - `GET /api/posts/:id/comments` — nested comments
   - `POST /api/posts/:id/comments` — add comment
   - `DELETE /api/comments/:id` — delete comment (only by author)
   - Custom middleware for: request logging, auth (Bearer token), error handling, 404 catch-all
   - Test coverage with curl commands in a README
