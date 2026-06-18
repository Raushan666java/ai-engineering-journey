# Chapter 13: Web Security

## Learning Objectives

By the end of this chapter, you will be able to:
- Identify and prevent OWASP Top 10 vulnerabilities
- Protect against SQL injection, XSS, and CSRF attacks
- Implement proper CORS, CSP, and security headers
- Secure API endpoints with input validation and rate limiting
- Apply secure authentication and session management
- Implement defense-in-depth security strategies

## 13.1 OWASP Top 10 Overview

![Web Security Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/13-web-security.png)

The Open Web Application Security Project (OWASP) publishes the Top 10 most critical web application security risks:

1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)

## 13.2 SQL Injection Prevention

```typescript
// VULNERABLE: String concatenation
const query = `SELECT * FROM users WHERE email = '${userInput}'`;

// SAFE: Parameterized query
const { rows } = await pool.query(
  "SELECT * FROM users WHERE email = $1",
  [userInput]
);

// SAFE: Prisma ORM (parameterizes by default)
const user = await prisma.user.findUnique({
  where: { email: userInput },
});

// SAFE: Zod input validation
const emailSchema = z.string().email();
const validatedEmail = emailSchema.parse(userInput);
```

## 13.3 Cross-Site Scripting (XSS) Prevention

```typescript
// VULNERABLE: Direct HTML insertion
element.innerHTML = userComment; // <script>alert('xss')</script>

// SAFE: Text content (auto-escaped)
element.textContent = userComment;

// SAFE: React auto-escapes by default
function Comment({ text }: { text: string }) {
  return <p>{text}</p>; // Safe - React escapes by default
}

// DANGEROUS: dangerouslySetInnerHTML (avoid unless sanitized)
function SafeComment({ html }: { html: string }) {
  const sanitized = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}

// Server-side: sanitize with DOMPurify
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
const window = new JSDOM("").window;
const purify = createDOMPurify(window as any);

const clean = purify.sanitize(userInput);
```

## 13.4 CSRF Protection

```typescript
import csrf from "csrf";

const tokens = new csrf();

// Generate token for forms
app.get("/api/form", (req, res) => {
  const secret = tokens.secretSync();
  req.session.csrfSecret = secret;
  const token = tokens.create(secret);
  res.json({ csrfToken: token });
});

// Validate token
app.post("/api/data", (req, res) => {
  const { _csrf } = req.body;
  if (!tokens.verify(req.session.csrfSecret, _csrf)) {
    return res.status(403).json({ message: "Invalid CSRF token" });
  }
  // Process request...
});

// For SPA: SameSite cookie attribute (modern browsers)
app.use(
  session({
    cookie: {
      sameSite: "strict", // Prevents CSRF for cross-site requests
      httpOnly: true,
      secure: true,
    },
  })
);
```

## 13.5 Security Headers with Helmet

```typescript
import helmet from "helmet";

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://trusted-cdn.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "https://images.example.com"],
        connectSrc: ["'self'", "https://api.example.com"],
        fontSrc: ["'self'", "https://fonts.googleapis.com"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  })
);

// Resulting headers:
// Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com
// Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
// X-Content-Type-Options: nosniff
// X-Frame-Options: DENY
// Referrer-Policy: strict-origin-when-cross-origin
```

## 13.6 CORS Configuration

```typescript
import cors from "cors";

const allowedOrigins = [
  "https://example.com",
  "https://admin.example.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["X-Total-Count"],
    credentials: true,
    maxAge: 86400, // Preflight cache for 24 hours
  })
);
```

## 13.7 Rate Limiting

```typescript
import rateLimit from "express-rate-limit";

// Global limiter
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later" },
});
app.use(globalLimiter);

// Auth endpoint - stricter limits
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true, // Only count failures
  message: { error: "Too many login attempts" },
});
app.use("/api/auth/login", authLimiter);

// API endpoint - per-user rate limiting
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  keyGenerator: (req) => req.ip,
  handler: (req, res) => {
    res.status(429).json({
      error: "Rate limit exceeded",
      retryAfter: Math.ceil(req.rateLimit.resetTime / 1000),
    });
  },
});
```

## 13.8 Input Validation

```typescript
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(100)
    .regex(/[A-Z]/, "Must contain uppercase letter")
    .regex(/[a-z]/, "Must contain lowercase letter")
    .regex(/[0-9]/, "Must contain number"),
  name: z.string().min(1).max(100).trim(),
  age: z.number().int().positive().max(150).optional(),
  website: z.string().url().optional(),
  role: z.enum(["USER", "ADMIN"]).default("USER"),
});

// Sanitization helper
function sanitize(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .trim();
}
```

## 13.9 Server-Side Request Forgery (SSRF) Prevention

```typescript
import { createHash } from "crypto";

// SSRF protection middleware
function preventSSRF(targetUrl: string): boolean {
  const parsed = new URL(targetUrl);

  // Block internal addresses
  const blockedHosts = [
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "::1",
    "169.254.169.254", // AWS metadata
  ];

  if (blockedHosts.includes(parsed.hostname)) return false;
  if (parsed.hostname.startsWith("10.")) return false;
  if (parsed.hostname.startsWith("192.168.")) return false;
  if (parsed.hostname.startsWith("172.")) {
    const second = parseInt(parsed.hostname.split(".")[1]);
    if (second >= 16 && second <= 31) return false;
  }

  // Resolve and check IP
  // In practice, resolve DNS and check against private ranges
  return true;
}

// Safe fetch wrapper
async function safeFetch(url: string) {
  if (!preventSSRF(url)) {
    throw new Error("URL not allowed");
  }
  const response = await fetch(url, {
    headers: { "User-Agent": "TaskFlow-Secure/1.0" },
    signal: AbortSignal.timeout(5000),
  });
  return response;
}
```

## Summary

Web security requires defense in depth: parameterized queries prevent SQL injection, output escaping prevents XSS, CSRF tokens and SameSite cookies protect cross-site requests, CSP headers restrict resource origins, rate limiting prevents abuse, and input validation ensures data integrity at every layer.

## Exercises

### Review Questions

1. How does a Content Security Policy prevent XSS attacks?
2. Why is parameterized query the only reliable defense against SQL injection?
3. What is the difference between CSRF and XSS?

### Application Projects

1. Add CSRF protection to an existing REST API
2. Implement a Content Security Policy for a React SPA
3. Add rate limiting with different tiers for authenticated vs anonymous users

### Challenge Project

Perform a security audit of a web application covering OWASP Top 10, using automated scanners (ZAP) and manual testing. Document findings, implement fixes, and verify with a second scan.
