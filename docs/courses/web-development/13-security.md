# Chapter 13: Web Security

> **Previous:** [12-deployment](./12-deployment.md) | **Next:** [14-typescript](./14-typescript.md)

## Learning Objectives

> **One-Sentence Takeaway:** Parameterized queries and ORMs prevent SQL injection by separating query structure from data.

By the end of this chapter, you will be able to:

## Chapter at a Glance

> **One-Sentence Takeaway:** XSS is prevented by escaping output — use `textContent`, React's auto-escaping, and DOMPurify for sanitized HTML.

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
|OWASP Top 10|The 10 most critical web application security risks|Know all 10 — they form the baseline for any security review or penetration test|
|SQL Injection|Injecting SQL through unsanitized user input|Always use parameterized queries or ORMs — never concatenate user input into SQL strings|
|XSS|Injecting scripts through unsanitized user content|Use `textContent` instead of `innerHTML`, libraries auto-escape, sanitize with DOMPurify when needed|
|CSRF|Cross-site request forgery exploits authenticated sessions|Use SameSite cookies (Strict), CSRF tokens, and check Origin/Referer headers|
|Security Headers|CSP, HSTS, CORS, X-Frame-Options protect against various attacks|Use Helmet middleware to set security headers with sensible defaults|
|Rate Limiting|Prevents brute-force and denial-of-service attacks|Apply stricter limits on auth endpoints, use skipSuccessfulRequests for login rate limiting|
|Input Validation|Zod schemas validate data shape, type, and constraints at every boundary|Validate on the server even if you validate on the client — never trust the client|

## Chapter Roadmap

> **One-Sentence Takeaway:** CSRF protection uses SameSite cookies, CSRF tokens, and Origin/Referer header validation.

```mermaid
graph TD
    A[OWASP Top 10]
    B[SQL Injection Prevention]
    A --> B
    C[XSS Prevention & Output Escaping]
    B --> C
    D[CSRF Protection]
    C --> D
    E[Security Headers with Helmet]
    D --> E
    F[CORS Configuration]
    E --> F
    G[Rate Limiting]
    F --> G
    H[Input Validation with Zod]
    G --> H
    I[SSRF Prevention]
    H --> I
```


- Identify and prevent OWASP Top 10 vulnerabilities
- Protect against SQL injection, XSS, and CSRF attacks
- Implement proper CORS, CSP, and security headers
- Secure API endpoints with input validation and rate limiting
- Apply secure authentication and session management
- Implement defense-in-depth security strategies

## 13.1 OWASP Top 10 Overview

> **One-Sentence Takeaway:** Security headers (CSP, HSTS, X-Frame-Options) provide browser-level protection against common attacks.

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

> **One-Sentence Takeaway:** Rate limiting with tiers per endpoint prevents brute-force and abuse attacks.

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

> **One-Sentence Takeaway:** Input validation at every boundary ensures data integrity and prevents injection attacks.

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

> **One-Sentence Takeaway:** SSRF prevention blocks requests to internal IP ranges and cloud metadata endpoints.

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


> [!TIP]
> Run `npx zap-full-scan.py -t https://your-site.com` for an automated OWASP ZAP security scan that catches many common vulnerabilities before production.

> [!WARNING]
> Client-side validation is for UX only — it provides zero security. An attacker can bypass browser validation trivially. Always validate on the server.

> [!REMEMBER]
> Helmet is a security headers collection, not a comprehensive security solution. It sets 15+ HTTP headers with sensible defaults but does not prevent SQL injection, XSS from unsafe code, or authentication flaws.



## Concept Comparison Table

| Concept | Description | Use Case |
|---------|-------------|---------|
|XSS vs CSRF|Injects scripts via untrusted content|Tricks browser into making authenticated requests|
|`textContent` vs `innerHTML`|Safe — escapes HTML entities|Dangerous — interprets HTML including scripts|
|`helmet()` vs manual headers|15+ headers with sensible defaults|Manual control for specific header values|
|CORS `origin` vs `credentials`|Controls which origins can access|Controls whether cookies/auth headers are sent|
|Zod `parse()` vs `safeParse()`|Throws on validation failure|Returns result object, no throw|

## Quick Reference

| Topic | Key Points |
|-------|-----------|
|OWASP Top 10 (2021)|Broken Access Control, Crypto Failures, Injection, Insecure Design, Misconfig, Vulnerable Components, Auth Failures, Integrity Failures, Logging Failures, SSRF|
|Security Headers|`Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`|
|CORS Headers|`Access-Control-Allow-Origin`, `-Methods`, `-Headers`, `-Credentials`, `-Max-Age`, `Expose-Headers`|
|Rate Limit Tiers|Global (100/15min), Auth (5/15min), API (60/min)|
|SSRF Blocklist|`localhost`, `127.0.0.1`, `169.254.169.254`, `10.x`, `192.168.x`, `172.16-31.x`|

## Cross-Application Matrix

| Domain | Application | Benefit |
|--------|------------|--------|
|E-commerce|CSP + Helmet + rate limiting on checkout|Prevents card scraping and brute force|
|Social Media|DOMPurify + CSP for user content|Safe rendering of user-generated HTML|
|Banking App|CSRF tokens + SameSite Strict + short sessions|Protection against forged transfers|
|Public API|Rate limiting + CORS + input validation|Abuse prevention and data integrity|
|Admin Dashboard|RBAC + IP allowlisting + audit logging|Access control and accountability|

## Chapter Quiz

Test your understanding with these quick questions.

**Q1. What is the only reliable defense against SQL injection?**

- A) Input sanitization
- B) Parameterized queries
- C) WAF (Web Application Firewall)
- D) Input length validation

<details><summary>Answer</summary>

**B) Parameterized queries (prepared statements) separate SQL code from data, making injection impossible. All other approaches can be bypassed.**

</details>

**Q2. How does a Content Security Policy (CSP) prevent XSS?**

- A) It encrypts all page content
- B) It restricts which sources scripts, styles, and other resources can be loaded from
- C) It validates user input
- D) It escapes HTML output

<details><summary>Answer</summary>

**B) CSP allows the server to specify which origins are trusted for loading scripts, styles, images, fonts, and other resources. The browser blocks any resource from untrusted origins.**

</details>

**Q3. What is the purpose of the `SameSite` cookie attribute?**

- A) To encrypt cookies
- B) To prevent cookies from being sent with cross-site requests
- C) To set cookie expiration
- D) To restrict cookies to HTTPS only

<details><summary>Answer</summary>

**B) `SameSite=Strict` prevents the browser from sending the cookie with cross-site requests, which blocks CSRF attacks that trick users into submitting requests from another site.**

</details>

**Q4. Why should rate limiting be stricter on auth endpoints?**

- A) Auth endpoints are faster
- B) Login attempts are a common brute-force attack vector
- C) Auth endpoints use more CPU
- D) Users expect slower login

<details><summary>Answer</summary>

**B) Login endpoints are targeted by brute-force and credential-stuffing attacks. Stricter rate limits (e.g., 5 attempts per 15 minutes) make these attacks impractical.**

</details>

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
