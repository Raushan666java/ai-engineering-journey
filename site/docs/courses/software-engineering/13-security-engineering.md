---
id: 13-security-engineering
slug: /software-engineering/13-security-engineering
title: "Security Engineering"
sidebar_label: "Security Engineering"
sidebar_position: 13
---
# Security Engineering

## Learning Objectives

After completing this chapter, the student will be able to:
- Explain the core principles of security engineering
- Apply the OWASP Top 10 to web application development
- Implement authentication and authorisation patterns
- Protect against injection, XSS, CSRF, and SSRF attacks
- Use secure coding practices in TypeScript
- Apply cryptographic primitives correctly
- Manage secrets and configuration securely
- Design security testing: SAST, DAST, dependency scanning
- Compare threat modelling methodologies (STRIDE, DREAD, PASTA, LINDDUN)
- Integrate security into the SDLC with DevSecOps practices

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/software-engineering/13-security-engineering/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/software-engineering/13-security-engineering/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/software-engineering/13-security-engineering/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/software-engineering/13-security-engineering/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/software-engineering/13-security-engineering/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/software-engineering/13-security-engineering/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Theory

### The CIA Triad

Security engineering rests on three fundamental principles:

```mermaid
graph TD
    CIA[Security Objectives] --> CONF[Confidentiality]
    CIA --> INT[Integrity]
    CIA --> AVAIL[Availability]
    
    CONF --> |Ensure| ENC[Encryption]
    CONF --> |Control| AUTH[Access Control]
    
    INT --> |Protect| HASH[Hash Functions]
    INT --> |Detect| SIG[Digital Signatures]
    
    AVAIL --> |Maintain| RED[Redundancy]
    AVAIL --> |Respond| DR[Disaster Recovery]
```

| Principle | Definition | Attack Example | Defence |
|-----------|------------|----------------|---------|
| **Confidentiality** | Unauthorised parties cannot read data | Data breach | Encryption, access control |
| **Integrity** | Data cannot be modified undetected | SQL injection | Input validation, hashing |
| **Availability** | System is accessible when needed | DDoS | Rate limiting, CDN |

### Threat Modelling Methodologies

Threat modelling is a structured approach to identifying, quantifying, and addressing security threats. Four major methodologies are widely used:

#### STRIDE (Microsoft)

STRIDE categorises threats into six types:

| Category | Definition | Example | Mitigation |
|----------|------------|---------|------------|
| **Spoofing** | Faking identity | Phishing, credential theft | Authentication, MFA |
| **Tampering** | Modifying data without authorisation | SQL injection, file modification | Integrity checks, hashing |
| **Repudiation** | Denying actions | User claims "I didn't do that" | Audit logging, digital signatures |
| **Information Disclosure** | Exposing data to unauthorised parties | Data breach, insecure direct object reference | Encryption, access control |
| **Denial of Service** | Crashing or overwhelming the system | DDoS, resource exhaustion | Rate limiting, auto-scaling |
| **Elevation of Privilege** | Gaining unauthorised access rights | Privilege escalation, buffer overflow | Least privilege, sandboxing |

#### DREAD (Microsoft - Risk Scoring)

DREAD assigns a score (1-10) to each threat across five dimensions:

| Dimension | Question | Low (1-3) | Medium (4-6) | High (7-10) |
|-----------|----------|------------|--------------|-------------|
| **D**amage | How severe is the damage? | Minor data loss | Sensitive data exposed | System compromised |
| **R**eproducibility | How easily can it be reproduced? | Very hard | Moderate | Easy / automated |
| **E**xploitability | How hard is it to exploit? | Requires insider access | Requires auth | No auth needed |
| **A**ffected Users | How many users are affected? | Few (admin only) | Some (subset) | All users |
| **D**iscoverability | How easy is it to find? | Very hard | Moderate | Publicly known |

**Risk Score = (D + R + E + A + D) / 5**

#### PASTA (Process for Attack Simulation and Threat Analysis)

PASTA is a risk-centric methodology with seven stages:

1. **Define business objectives** - Identify security requirements from business goals
2. **Define technical scope** - Map assets, endpoints, data flows
3. **Decompose application** - Create use cases, identify trust boundaries
4. **Threat analysis** - Identify threats using STRIDE per component
5. **Vulnerability analysis** - Map threats to vulnerabilities (CVE/CWE)
6. **Attack modelling** - Build attack trees, simulate attack paths
7. **Risk and impact analysis** - Quantify residual risk, recommend mitigations

#### LINDDUN (Privacy-Focused)

LINDDUN focuses on privacy threats specifically:

| Acronym | Threat | Privacy Principle |
|---------|--------|-------------------|
| **L**inkability | Linking data across contexts | Unlinkability |
| **I**dentifiability | Identifying individuals from data | Anonymity |
| **N**on-repudiation | Inability to deny actions | Plausible deniability |
| **D**etectability | Being able to detect a subject's existence | Undetectability |
| **D**isclosure of Information | Revealing personal data | Confidentiality |
| **U**nawareness | User unaware of data processing | Transparency |
| **N**on-compliance | Violating privacy regulations | Policy compliance |

#### Comparison Table

| Aspect | STRIDE | DREAD | PASTA | LINDDUN |
|--------|--------|-------|-------|---------|
| **Focus** | Security threats | Risk prioritisation | Attack simulation | Privacy threats |
| **Output** | Threat categories | Numeric risk score | Attack trees | Privacy risks |
| **Best for** | Early design phase | Risk ranking | Complex systems | GDPR/privacy compliance |
| **Effort** | Low (per-element) | Medium (scoring) | High (7 stages) | Medium |
| **Automation** | Moderate | Low | Moderate | Moderate |

```mermaid
graph TD
    TM[Threat Modelling] --> STRIDE[STRIDE: Categorise Threats]
    TM --> DREAD[DREAD: Score Risks]
    TM --> PASTA[PASTA: Simulate Attacks]
    TM --> LINDDUN[LINDDUN: Analyse Privacy]
    
    STRIDE --> MIT1[Define Mitigations]
    DREAD --> PRIORITISE[Prioritise by Risk Score]
    PASTA --> ATTACK_TREE[Build Attack Trees]
    LINDDUN --> PRIVACY[Privacy Controls]
    
    MIT1 --> REVIEW[Security Review]
    PRIORITISE --> REVIEW
    ATTACK_TREE --> REVIEW
    PRIVACY --> REVIEW
```

### The OWASP Top 10 (2025)

The Open Web Application Security Project publishes the Top 10 Web Application Security Risks. Below is the full 2025 edition with explanations and code examples:

#### A01: Broken Access Control

**Risk:** Users can act outside their intended permissions — viewing, modifying, or deleting resources they should not access.

**Example:** A user changes `userId` in the URL from 123 to 124 to view another user's private data.

```typescript
// Vulnerable: No access control check
app.get('/api/orders/:id', async (req, res) => {
  const order = await db.getOrder(req.params['id']); // No user ownership check
  res.json(order);
});

// Fixed: Ownership verification
app.get('/api/orders/:id', authenticate, async (req, res) => {
  const order = await db.getOrder(req.params['id']);
  if (order.userId !== req.user?.id && req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  res.json(order);
});
```

#### A02: Cryptographic Failures

**Risk:** Weak or missing encryption of sensitive data at rest or in transit.

```typescript
// Vulnerable: Weak hashing
const hash = createHash('md5').update(password).digest('hex');

// Fixed: Strong hashing with Argon2id
import { hash, verify } from '@node-rs/argon2';
const hashed = await hash(password, {
  memoryCost: 19456,
  timeCost: 2,
  outputLen: 32,
  parallelism: 1,
});
const valid = await verify(hashed, password);
```

#### A03: Injection

**Risk:** Untrusted data is sent to an interpreter as part of a command or query.

```typescript
// Vulnerable: String concatenation
const query = `SELECT * FROM users WHERE email = '${email}'`;

// Fixed: Parameterised query
const query = { text: 'SELECT * FROM users WHERE email = $1', values: [email] };
```

#### A04: Insecure Design

**Risk:** Missing security controls in the design phase — the system architecture itself is flawed.

**Example:** No rate limiting on login endpoints, enabling brute-force attacks.

```typescript
class SecureDesignValidator {
  public checkDesignFlaws(design: DesignDoc): string[] {
    const flaws: string[] = [];
    if (!design.rateLimiting) flaws.push('Missing rate limiting on auth endpoints');
    if (!design.inputValidation) flaws.push('No centralised input validation');
    if (!design.accessControl) flaws.push('No role-based access control defined');
    if (!design.auditLogging) flaws.push('No audit logging strategy');
    if (!design.encryptionAtRest) flaws.push('No data-at-rest encryption plan');
    return flaws;
  }
}
```

#### A05: Security Misconfiguration

**Risk:** Default credentials, unnecessary features enabled, overly permissive CORS, verbose error messages.

```typescript
// Vulnerable: Overly permissive CORS
app.use(cors({ origin: '*' }));

// Fixed: Restricted CORS
app.use(cors({
  origin: ['https://app.example.com'],
  credentials: true,
}));
```

#### A06: Vulnerable and Outdated Components

**Risk:** Using libraries with known CVEs (Common Vulnerabilities and Exposures).

```typescript
// Dependency vulnerability checker
function checkDependencies(deps: { name: string; version: string }[]): string[] {
  const knownVulnerable: Record<string, string[]> = {
    'lodash': ['<4.17.21'],
    'express': ['<4.18.0'],
    'axios': ['<0.21.1'],
  };
  return deps
    .filter(d => knownVulnerable[d.name]?.some(r => semverSatisfies(d.version, r)))
    .map(d => `${d.name}@${d.version} has known vulnerabilities`);
}
```

#### A07: Identification and Authentication Failures

**Risk:** Weak password policies, no MFA, session fixation, credential stuffing.

```typescript
class AuthStrengthEvaluator {
  public evaluatePolicy(config: AuthConfig): string[] {
    const issues: string[] = [];
    if (config.minPasswordLength < 12) issues.push('Minimum password length should be 12+');
    if (!config.requireMfa) issues.push('MFA should be required for all accounts');
    if (!config.accountLockout) issues.push('Account lockout after failed attempts missing');
    if (!config.passwordHistory) issues.push('Password reuse prevention missing');
    if (config.sessionTimeout > 3600) issues.push('Session timeout exceeds 1 hour');
    return issues;
  }
}
```

#### A08: Software and Data Integrity Failures

**Risk:** Supply chain attacks, unsigned updates, insecure CI/CD pipelines.

```typescript
// Verify package integrity
async function verifyPackageIntegrity(name: string, expectedHash: string): Promise<boolean> {
  const response = await fetch(`https://registry.npmjs.org/${name}/latest`);
  const pkg = await response.json();
  const actualHash = createHash('sha512').update(JSON.stringify(pkg)).digest('hex');
  return timingSafeEqual(Buffer.from(actualHash), Buffer.from(expectedHash));
}
```

#### A09: Security Logging and Monitoring Failures

**Risk:** Undetected breaches due to insufficient logging, monitoring, or alerting.

```typescript
interface SecurityEvent {
  timestamp: Date;
  userId: string;
  action: string;
  resource: string;
  outcome: 'success' | 'failure';
  ipAddress: string;
  userAgent: string;
}

class SecurityLogger {
  private events: SecurityEvent[] = [];

  public log(event: Omit<SecurityEvent, 'timestamp'>): void {
    this.events.push({ ...event, timestamp: new Date() });
    // Send to SIEM in production
  }

  public detectAnomalousActivity(): string[] {
    const alerts: string[] = [];
    const recentFailures = this.events.filter(
      e => e.outcome === 'failure' && e.timestamp > new Date(Date.now() - 300000)
    );
    if (recentFailures.length > 10) {
      alerts.push('Brute-force attack detected: >10 failures in 5 minutes');
    }
    return alerts;
  }
}
```

#### A10: Server-Side Request Forgery (SSRF)

**Risk:** Attackers abuse server functionality to read or modify internal resources.

```typescript
// Vulnerable: Unvalidated URL fetch
app.post('/api/fetch', async (req, res) => {
  const response = await fetch(req.body['url']);
  res.send(await response.text());
});

// Fixed: URL validation with allowlist
class SSRFProtector {
  private static readonly ALLOWED_HOSTS = ['api.trusted.com', 'data.example.com'];
  private static readonly BLOCKED_IPS = ['127.0.0.1', '169.254.169.254', '10.', '172.16.', '192.168.'];

  public static validateUrl(urlStr: string): boolean {
    try {
      const url = new URL(urlStr);
      if (url.protocol !== 'https:') return false;
      if (!this.ALLOWED_HOSTS.some(h => url.hostname.endsWith(h))) return false;
      if (this.BLOCKED_IPS.some(ip => url.hostname.startsWith(ip))) return false;
      return true;
    } catch {
      return false;
    }
  }
}
```

```mermaid
graph LR
    subgraph "OWASP Top 10 Risk Categories"
        A01[Broken Access Control]
        A02[Cryptographic Failures] 
        A03[Injection]
        A04[Insecure Design]
        A05[Security Misconfig]
        A06[Vulnerable Components]
        A07[Auth Failures]
        A08[Data Integrity]
        A09[Logging Failures]
        A10[SSRF]
    end
    
    A03 -->|30%| WEB[Web Apps Affected]
    A01 -->|25%| WEB
    A05 -->|15%| WEB
```

### Security in the SDLC (SSDLC)

Secure Software Development Lifecycle integrates security into every phase:

| Phase | Security Activities | Deliverables |
|-------|-------------------|--------------|
| **Requirements** | Threat modelling, security requirements, privacy impact assessment | Security requirements document, threat model |
| **Design** | Architecture risk analysis, attack surface analysis, security design review | Security architecture, design review report |
| **Implementation** | Secure coding standards, static analysis (SAST), peer code review | Clean scan reports, signed commits |
| **Testing** | Dynamic analysis (DAST), penetration testing, fuzz testing, dependency scanning (SCA) | Pen test report, vulnerability report |
| **Deployment** | Security configuration validation, infrastructure scanning, secrets scanning | Hardened config, compliance check |
| **Operations** | Runtime monitoring, incident response, patch management, periodic red teaming | SIEM alerts, incident reports |

#### DevSecOps Pipeline

```mermaid
graph LR
    DEV[Develop] -->|Commit| SCM[Source Control]
    SCM -->|Trigger| CI[CI Pipeline]
    
    CI --> SAST[SAST Scan]
    SAST --> SCA[Dependency Scan]
    SCA --> SECRETS[Secrets Scan]
    SECRETS --> BUILD[Build]
    BUILD --> DAST[DAST Scan]
    DAST --> CONTAINER[Container Scan]
    CONTAINER --> DEPLOY[Deploy]
    
    DEPLOY --> RUNTIME[Runtime Monitoring]
    RUNTIME -->|Alert| INCIDENT[Incident Response]
    INCIDENT -->|Feedback| DEV
    
    subgraph "Shift Left"
        SAST
        SCA
        SECRETS
    end
```

### Security Testing Comparison

| Type | Full Name | What It Does | When | Pros | Cons |
|------|-----------|-------------|------|------|------|
| **SAST** | Static Application Security Testing | Analyzes source code for vulnerabilities | During development | Fast, identifies root cause | False positives, no runtime context |
| **DAST** | Dynamic Application Security Testing | Tests running application from outside | After deployment | Finds runtime issues, no source needed | Late in cycle, limited coverage |
| **IAST** | Interactive Application Security Testing | Combines SAST + DAST with instrumentation | During testing (QA) | Accurate, pinpoints code | Agent overhead |
| **RASP** | Runtime Application Self-Protection | Monitors and blocks attacks at runtime | Production | Real-time protection, no signatures | Performance impact |
| **SCA** | Software Composition Analysis | Scans dependencies for known vulnerabilities | CI/CD pipeline | Catches supply chain risks | Only known CVEs |

### Authentication vs Authorisation

| Aspect | Authentication | Authorisation |
|--------|----------------|---------------|
| **Question** | Who are you? | What can you do? |
| **Mechanism** | Passwords, MFA, SSO | Roles, permissions, ACLs |
| **Storage** | Session tokens, JWT | Policy database |
| **Failure** | 401 Unauthorized | 403 Forbidden |
| **Protocol** | OAuth 2.0, OpenID Connect | RBAC, ABAC, PBAC |

### Authentication Protocols

#### JWT (JSON Web Tokens)

Stateless tokens with a signed payload containing user identity and claims. JWT consists of three parts: header, payload, and signature.

```typescript
interface JWTClaims {
  sub: string;   // Subject (user ID)
  iss: string;   // Issuer
  aud: string;   // Audience
  exp: number;   // Expiration time
  iat: number;   // Issued at
  role: string;  // Custom claim
}
```

#### OAuth 2.0

Delegated authorisation framework with four roles: Resource Owner, Client, Authorization Server, Resource Server. Uses access tokens (typically JWT) and refresh tokens.

#### SAML (Security Assertion Markup Language)

XML-based protocol for Single Sign-On (SSO). Uses assertions (authentication statements, attribute statements, authorisation decision statements).

#### WebAuthn / FIDO2

Passwordless authentication using public-key cryptography. User registers a device (phone, hardware key) that generates a key pair; the private key never leaves the device.

| Protocol | Format | Use Case | Strengths | Weaknesses |
|----------|--------|----------|-----------|------------|
| **JWT** | JSON | Stateless API auth | Simple, self-contained | No revocation |
| **OAuth 2.0** | Token | Delegated access | Industry standard, scopes | Complex flows |
| **SAML** | XML | Enterprise SSO | Mature, federation support | Heavyweight |
| **WebAuthn** | Public-key | Passwordless | Phishing-resistant | Device dependency |

### Authorisation Models

#### RBAC (Role-Based Access Control)

Users are assigned to roles, roles have permissions. Access is determined by role membership.

```typescript
interface RBACRole {
  name: string;
  permissions: string[];
}

const RBAC_CONFIG: Record<string, string[]> = {
  admin: ['read', 'write', 'delete', 'manage_users'],
  editor: ['read', 'write'],
  viewer: ['read'],
};

function rbacCheck(userRole: string, requiredPermission: string): boolean {
  return RBAC_CONFIG[userRole]?.includes(requiredPermission) ?? false;
}
```

#### ABAC (Attribute-Based Access Control)

Access decisions use attributes of the user, resource, action, and environment.

```typescript
interface ABACContext {
  user: { department: string; clearance: string; location: string };
  resource: { classification: string; ownerDepartment: string };
  action: string;
  environment: { time: Date; ip: string };
}

function abacCheck(context: ABACContext): boolean {
  // Example: Managers from same department can read sensitive documents during business hours
  if (context.action === 'read' && context.resource.classification === 'sensitive') {
    const isBusinessHours = context.environment.time.getHours() >= 8 && context.environment.time.getHours() <= 18;
    const sameDepartment = context.user.department === context.resource.ownerDepartment;
    const hasClearance = context.user.clearance === 'level-3' || context.user.clearance === 'level-4';
    return isBusinessHours && sameDepartment && hasClearance;
  }
  return false;
}
```

#### PBAC (Policy-Based Access Control)

Uses a policy engine (e.g., OPA - Open Policy Agent) to evaluate access decisions declaratively.

### Common Attack Vectors

#### SQL Injection

SQL injection occurs when untrusted data is concatenated into SQL queries.

```mermaid
graph LR
    INPUT["' OR 1=1; --"] --> APP[Application]
    APP --> Q["SELECT * FROM users WHERE user = '' OR 1=1; --'"]
    Q --> DB[(Database)]
    DB -->|All users returned| ATTACKER
```

**Defence:** Parameterised queries / prepared statements.

```typescript
// Previously shown QueryBuilder provides parameterised query generation
```

#### Cross-Site Scripting (XSS)

XSS injects malicious scripts into web pages viewed by other users.

| Type | Description | Persistence |
|------|-------------|-------------|
| **Stored XSS** | Malicious script stored in database | Permanent |
| **Reflected XSS** | Script in URL, echoed back | Single request |
| **DOM XSS** | Client-side script modifies DOM | Client-only |

**Defence:** Output encoding, Content Security Policy (CSP).

```typescript
// Output encoding remains a primary defence
class XSSPreventer {
  public static sanitizeHtml(input: string): string {
    const map: Record<string, string> = {
      '&': '&amp;', '<': '&lt;', '>': '&gt;',
      '"': '&quot;', "'": '&#x27;',
    };
    return input.replace(/[&<>"']/g, c => map[c] ?? c);
  }

  public static sanitizeUrl(url: string): string {
    const allowedProtocols = ['https:', 'http:', 'mailto:'];
    try {
      const parsed = new URL(url);
      return allowedProtocols.includes(parsed.protocol) ? url : '';
    } catch {
      return '';
    }
  }
}
```

#### Cross-Site Request Forgery (CSRF)

CSRF tricks authenticated users into performing unintended actions.

**Defence:** CSRF tokens, SameSite cookies, Origin/Referer header validation.

### Secure Coding Principles

1. **Least Privilege:** Every component operates with the minimum permissions needed.
2. **Defence in Depth:** Multiple independent security layers.
3. **Fail Secure:** When something fails, it should fail in a secure state.
4. **Complete Mediation:** Every access is checked, every time.
5. **Secure by Default:** Default configuration is the most secure.
6. **Economy of Mechanism:** Keep security mechanisms simple.
7. **Open Design:** Security should not rely on secrecy of implementation.
8. **Psychological Acceptability:** Security should not make the system difficult to use.

### Cryptographic Primitives

```mermaid
graph TD
    CRYPTO[Cryptography] --> SYM[Symmetric]
    CRYPTO --> ASYM[Asymmetric]
    CRYPTO --> HASH[Hash Functions]
    
    SYM --> AES[AES-256-GCM]
    SYM --> CHACHA[ChaCha20-Poly1305]
    
    ASYM --> RSA[RSA-4096]
    ASYM --> ECC[ECDSA / Ed25519]
    
    HASH --> SHA[SHA-256 / SHA-3]
    HASH --> ARGON[Argon2id / bcrypt]
```

| Use Case | Algorithm | Key Length |
|----------|-----------|------------|
| **Encrypt data at rest** | AES-256-GCM | 256 bits |
| **Encrypt data in transit** | TLS 1.3 | 2048+ bits RSA / ECDHE |
| **Password hashing** | Argon2id, bcrypt | Salt + work factor |
| **Integrity / signatures** | SHA-256, Ed25519 | 256 bits |
| **Key exchange** | ECDHE | Curve25519 |

## Examples

### Example 1: Secure Authentication with JWT

```typescript
import { randomBytes, createHash, timingSafeEqual } from 'crypto';

interface JWTPayload {
  sub: string;
  role: string;
  iat: number;
  exp: number;
}

class AuthService {
  private readonly JWT_SECRET: string;
  private readonly ISSUER = 'myapp';
  private readonly ACCESS_TOKEN_EXPIRY = 900; // 15 min
  private readonly REFRESH_TOKEN_EXPIRY = 604800; // 7 days

  constructor() {
    this.JWT_SECRET = process.env['JWT_SECRET'] ?? this.generateSecret();
  }

  private generateSecret(): string {
    return randomBytes(64).toString('hex');
  }

  public generateAccessToken(userId: string, role: string): string {
    return this.signJWT({
      sub: userId,
      role,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + this.ACCESS_TOKEN_EXPIRY,
    });
  }

  public generateRefreshToken(): string {
    return randomBytes(64).toString('hex');
  }

  public verifyAccessToken(token: string): JWTPayload {
    return this.verifyJWT(token);
  }

  public async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(16).toString('hex');
    const iterations = 100000;
    const hash = createHash('sha512');

    let derived = password;
    for (let i = 0; i < iterations; i++) {
      derived = hash.update(derived + salt).digest('hex');
    }

    return `${iterations}:${salt}:${derived}`;
  }

  public async verifyPassword(
    password: string,
    storedHash: string
  ): Promise<boolean> {
    const [iterations, salt, hash] = storedHash.split(':');
    const parsedIterations = parseInt(iterations, 10);

    let derived = password;
    const hashObj = createHash('sha512');
    for (let i = 0; i < parsedIterations; i++) {
      derived = hashObj.update(derived + salt).digest('hex');
    }

    return timingSafeEqual(
      Buffer.from(hash),
      Buffer.from(derived)
    );
  }

  private signJWT(payload: JWTPayload): string {
    const header = Buffer.from(
      JSON.stringify({ alg: 'HS256', typ: 'JWT' })
    ).toString('base64url');
    const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const signature = createHash('sha256')
      .update(`${header}.${body}${this.JWT_SECRET}`)
      .digest('base64url');
    return `${header}.${body}.${signature}`;
  }

  private verifyJWT(token: string): JWTPayload {
    const [header, body, signature] = token.split('.');
    const expectedSignature = createHash('sha256')
      .update(`${header}.${body}${this.JWT_SECRET}`)
      .digest('base64url');

    if (!timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    )) {
      throw new Error('Invalid token signature');
    }

    const payload: JWTPayload = JSON.parse(
      Buffer.from(body, 'base64url').toString()
    );

    if (payload.exp < Math.floor(Date.now() / 1000)) {
      throw new Error('Token expired');
    }

    return payload;
  }
}
```

### Example 2: SQL Injection Prevention

```typescript
import { randomBytes } from 'crypto';

interface QueryParams {
  text: string;
  values: unknown[];
}

class QueryBuilder {
  public static select(
    table: string,
    columns: string[],
    where?: { field: string; operator: string; value: unknown }[]
  ): QueryParams {
    const params: unknown[] = [];
    const conditions: string[] = [];

    for (const clause of where ?? []) {
      const paramIndex = params.length + 1;
      conditions.push(`${clause.field} ${clause.operator} $${paramIndex}`);
      params.push(clause.value);
    }

    const whereClause = conditions.length > 0
      ? ` WHERE ${conditions.join(' AND ')}`
      : '';

    return {
      text: `SELECT ${columns.join(', ')} FROM ${table}${whereClause}`,
      values: params,
    };
  }

  public static insert(
    table: string,
    data: Record<string, unknown>
  ): QueryParams {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const placeholders = values.map((_, i) => `$${i + 1}`);

    return {
      text: `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders.join(', ')}) RETURNING id`,
      values,
    };
  }

  public static update(
    table: string,
    data: Record<string, unknown>,
    where: { field: string; value: unknown }
  ): QueryParams {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const setClauses = columns.map((col, i) => `${col} = $${i + 1}`);

    const whereIdx = values.length + 1;
    return {
      text: `UPDATE ${table} SET ${setClauses.join(', ')} WHERE ${where.field} = $${whereIdx}`,
      values: [...values, where.value],
    };
  }

  public static sanitizeIdentifier(identifier: string): string {
    if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(identifier)) {
      throw new Error(`Invalid identifier: ${identifier}`);
    }
    return identifier;
  }
}

const query = QueryBuilder.select(
  'users',
  ['id', 'email', 'name'],
  [{ field: 'email', operator: '=', value: 'user@example.com' }]
);
```

### Example 3: Input Validation and Sanitisation

```typescript
class InputValidator {
  private errors: string[] = [];

  public validateEmail(email: string): this {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.errors.push('Invalid email format');
    }
    return this;
  }

  public validateRequired(value: string, fieldName: string): this {
    if (!value || value.trim().length === 0) {
      this.errors.push(`${fieldName} is required`);
    }
    return this;
  }

  public validateLength(
    value: string,
    min: number,
    max: number,
    fieldName: string
  ): this {
    const len = value.trim().length;
    if (len < min || len > max) {
      this.errors.push(
        `${fieldName} must be ${min}-${max} characters (got ${len})`
      );
    }
    return this;
  }

  public validatePattern(
    value: string,
    pattern: RegExp,
    fieldName: string
  ): this {
    if (!pattern.test(value)) {
      this.errors.push(`${fieldName} has invalid format`);
    }
    return this;
  }

  public hasErrors(): boolean {
    return this.errors.length > 0;
  }

  public getErrors(): string[] {
    return [...this.errors];
  }
}

class OutputEncoder {
  public static encodeHtml(input: string): string {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  public static encodeJs(input: string): string {
    return input.replace(/['"\\\n\r\t\b\f]/g, (char) => {
      const replacements: Record<string, string> = {
        "'": "\\'", '"': '\\"', '\\': '\\\\',
        '\n': '\\n', '\r': '\\r', '\t': '\\t',
        '\b': '\\b', '\f': '\\f',
      };
      return replacements[char] ?? char;
    });
  }

  public static encodeUrl(input: string): string {
    return encodeURIComponent(input);
  }
}
```

### Example 4: CSRF Protection Middleware

```typescript
import { randomBytes, createHash, timingSafeEqual } from 'crypto';

interface SessionData {
  csrfToken: string;
  userId?: string;
}

class CSRFProtection {
  private readonly sessions = new Map<string, SessionData>();

  public generateToken(sessionId: string): string {
    const token = randomBytes(32).toString('hex');
    const hash = this.hashToken(token);
    this.sessions.set(sessionId, {
      ...this.sessions.get(sessionId),
      csrfToken: hash,
    });
    return token;
  }

  public validateToken(sessionId: string, token: string): boolean {
    const session = this.sessions.get(sessionId);
    if (!session?.csrfToken) return false;
    const hash = this.hashToken(token);
    return timingSafeEqual(
      Buffer.from(hash),
      Buffer.from(session.csrfToken)
    );
  }

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  public middleware(
    req: { method: string; headers: Record<string, string>; body: Record<string, string> },
    res: { status: (code: number) => { json: (data: object) => void } }
  ): boolean {
    const safeMethods = ['GET', 'HEAD', 'OPTIONS'];
    if (safeMethods.includes(req.method.toUpperCase())) {
      return true;
    }
    const token =
      req.headers['x-csrf-token'] ??
      req.headers['x-xsrf-token'] ??
      req.body?.['_csrf'];
    const sessionId = req.headers['cookie'] ?? '';
    if (!token || !this.validateToken(sessionId, token as string)) {
      res.status(403).json({ error: 'Invalid CSRF token' });
      return false;
    }
    return true;
  }
}

class CSPBuilder {
  private directives: Record<string, string[]> = {};

  public defaultSrc(...sources: string[]): this {
    this.directives['default-src'] = sources;
    return this;
  }

  public scriptSrc(...sources: string[]): this {
    this.directives['script-src'] = sources;
    return this;
  }

  public styleSrc(...sources: string[]): this {
    this.directives['style-src'] = sources;
    return this;
  }

  public imgSrc(...sources: string[]): this {
    this.directives['img-src'] = sources;
    return this;
  }

  public connectSrc(...sources: string[]): this {
    this.directives['connect-src'] = sources;
    return this;
  }

  public build(): string {
    return Object.entries(this.directives)
      .map(([key, sources]) => `${key} ${sources.join(' ')}`)
      .join('; ');
  }
}

const csp = new CSPBuilder()
  .defaultSrc("'self'")
  .scriptSrc("'self'", "'strict-dynamic'", "'nonce-abc123'")
  .styleSrc("'self'", "'unsafe-inline'")
  .imgSrc("'self'", 'https:')
  .connectSrc("'self'", 'https://api.example.com')
  .build();
```

### Example 5: Secrets Manager

```typescript
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

interface SecretConfig {
  key: Buffer;
  algorithm: string;
}

class SecretsManager {
  private static readonly ALGORITHM = 'aes-256-gcm';
  private static readonly KEY_LENGTH = 32;
  private static readonly IV_LENGTH = 16;
  private static readonly TAG_LENGTH = 16;

  private config!: SecretConfig;

  constructor() {
    const keyHex = process.env['SECRETS_ENCRYPTION_KEY'];
    if (!keyHex || keyHex.length !== 64) {
      throw new Error(
        'SECRETS_ENCRYPTION_KEY must be a 64-character hex string'
      );
    }
    this.config = {
      key: Buffer.from(keyHex, 'hex'),
      algorithm: SecretsManager.ALGORITHM,
    };
  }

  public encryptSecret(plaintext: string): string {
    const iv = randomBytes(SecretsManager.IV_LENGTH);
    const cipher = createCipheriv(
      this.config.algorithm,
      this.config.key,
      iv,
      { authTagLength: SecretsManager.TAG_LENGTH }
    );
    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag().toString('hex');
    return `${iv.toString('hex')}:${authTag}:${encrypted}`;
  }

  public decryptSecret(encrypted: string): string {
    const [ivHex, tagHex, ciphertext] = encrypted.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(tagHex, 'hex');
    const decipher = createDecipheriv(
      this.config.algorithm,
      this.config.key,
      iv,
      { authTagLength: SecretsManager.TAG_LENGTH }
    );
    decipher.setAuthTag(authTag);
    let plaintext = decipher.update(ciphertext, 'hex', 'utf8');
    plaintext += decipher.final('utf8');
    return plaintext;
  }

  public static validateSecretKey(keyHex: string): boolean {
    return /^[0-9a-f]{64}$/i.test(keyHex);
  }
}

class EnvConfig {
  private readonly errors: string[] = [];

  public requireString(key: string): this {
    if (!process.env[key]) {
      this.errors.push(`Missing required env: ${key}`);
    }
    return this;
  }

  public requireUrl(key: string): this {
    const val = process.env[key];
    if (!val) { this.errors.push(`Missing required env: ${key}`); return this; }
    try { new URL(val); } catch { this.errors.push(`Invalid URL in env: ${key}`); }
    return this;
  }

  public requireNumber(key: string, min?: number, max?: number): this {
    const val = process.env[key];
    if (val === undefined) { this.errors.push(`Missing required env: ${key}`); return this; }
    const num = Number(val);
    if (isNaN(num)) { this.errors.push(`Invalid number in env: ${key}`); return this; }
    if (min !== undefined && num < min) { this.errors.push(`${key} must be >= ${min}`); }
    if (max !== undefined && num > max) { this.errors.push(`${key} must be <= ${max}`); }
    return this;
  }

  public hasErrors(): boolean { return this.errors.length > 0; }
  public getErrors(): string[] { return [...this.errors]; }

  public validate(): void {
    if (this.errors.length > 0) {
      throw new Error(`Configuration errors:\n${this.errors.join('\n')}`);
    }
  }
}
```

### Case Studies

#### Equifax Breach (2017)

**Impact:** 147 million personal records exposed, $1.4 billion in costs.

**Root Cause:** Failure to patch Apache Struts CVE-2017-5638 — a known vulnerability for which a patch had been available for two months. The vulnerability was a remote code execution flaw in the Jakarta Multipart parser.

**Lessons:**
- A06 (Vulnerable Components) is not just about libraries — it is about patch management discipline
- Organisations must have an accurate software inventory (SBOM)
- Vulnerability scanning must be continuous, not point-in-time

#### SolarWinds Attack (2020)

**Impact:** 18,000 customers infected via supply chain, including US government agencies.

**Root Cause:** Attackers compromised the SolarWinds Orion build pipeline, injecting malicious code (SUNBURST) into signed software updates. The backdoor remained undetected for months.

**Lessons:**
- A08 (Software & Data Integrity Failures) — signed binaries can still be malicious
- Build pipeline integrity is as important as production security
- Zero-trust architecture limits blast radius of supply chain attacks

#### Heartland Payment Systems (2008)

**Impact:** 130 million credit card numbers stolen, $140 million in fraud losses.

**Root Cause:** SQL injection vulnerability in the payment processing web application. The attacker used a multi-stage SQL injection to install packet sniffers on the internal network.

**Lessons:**
- A03 (Injection) — SQL injection remains devastating even in 2008-era systems
- Network segmentation would have limited lateral movement
- Encryption of data in transit (internal) would have prevented sniffing

## Summary

Security engineering is the discipline of building systems that remain secure under attack. The CIA triad (Confidentiality, Integrity, Availability) provides foundational principles. The OWASP Top 10 catalogues the most critical web application risks. Threat modelling using STRIDE identifies security threats systematically. Secure coding practices include input validation, output encoding, parameterised queries, CSRF tokens, and Content Security Policy. Cryptographic primitives must be applied correctly using well-audited libraries. Secrets management ensures that credentials and keys are never hardcoded or exposed. Security testing includes static analysis (SAST), dynamic analysis (DAST), dependency scanning (SCA), and runtime protection (RASP). The DevSecOps movement integrates security into every phase of the SDLC with a shift-left approach. Security is an emergent property of the entire system, not a single feature.

## Practical Takeaways

1. **Never roll your own crypto** — use well-audited libraries
2. **Sanitise input, encode output** — two different operations, both required
3. **Password hashing is not encryption** — bcrypt/Argon2id, never SHA or MD5
4. **Security is not a feature — it is a property of the system**
5. **HTTPS everywhere** — even internal services should use TLS
6. **Log security events** — you cannot respond to breaches you do not detect
7. **Shift left** — find vulnerabilities earlier in the SDLC when they are cheaper to fix

## Chapter Quiz

**Q1: Which of the following is NOT part of the STRIDE threat model?**
- A) Spoofing
- B) Tampering
- C) Injection
- D) Information Disclosure

**Answer: C** — Injection is from OWASP Top 10, not STRIDE. STRIDE includes Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.

**Q2: What is the best defence against SQL injection?**
- A) Input escaping
- B) Parameterised queries
- C) Stored procedures
- D) WAF rules

**Answer: B** — Parameterised queries (prepared statements) ensure separation of code and data.

**Q3: The HTTP status code returned when a user is authenticated but not authorised to access a resource is:**
- A) 401 Unauthorized
- B) 403 Forbidden
- C) 404 Not Found
- D) 405 Method Not Allowed

**Answer: B** — 401 is for unauthenticated, 403 is for authenticated but not authorised.

**Q4: Which algorithm is recommended for password storage?**
- A) SHA-256
- B) AES-256
- C) Argon2id
- D) MD5

**Answer: C** — Argon2id (and bcrypt) are memory-hard password hashing algorithms. SHA and MD5 are fast and vulnerable to brute force.

**Q5: Content Security Policy (CSP) is primarily a defence against:**
- A) SQL Injection
- B) Cross-Site Scripting (XSS)
- C) CSRF
- D) SSRF

**Answer: B** — CSP restricts which scripts can execute, preventing XSS.

### TypeScript: Security Engineering Classes

```typescript
// === ThreatModeler: Comprehensive threat modelling ===
type StrideCategory = 'spoofing' | 'tampering' | 'repudiation' | 'information_disclosure' | 'denial_of_service' | 'elevation_of_privilege';
interface ThreatEntry { id: string; category: StrideCategory; element: string; description: string; severity: 'critical' | 'high' | 'medium' | 'low'; mitigated: boolean; riskScore: number; mitigation: string; }

class ThreatModeler {
  private threats: ThreatEntry[] = [];
  private counter = 0;

  public analyzeDataFlow(name: string, description: string): ThreatEntry[] {
    const found: ThreatEntry[] = [];
    found.push(this.addThreat('tampering', name, `Data flow ${name} could be modified in transit`, 'high', 'Use TLS 1.3 with mutual authentication'));
    found.push(this.addThreat('information_disclosure', name, `Data in ${name} could be intercepted`, 'medium', 'Encrypt payload with AES-256-GCM'));
    found.push(this.addThreat('repudiation', name, `Actions on ${name} could be denied`, 'medium', 'Implement audit logging with digital signatures'));
    return found;
  }

  public analyzeDataStore(name: string): ThreatEntry[] {
    const found: ThreatEntry[] = [];
    found.push(this.addThreat('tampering', name, `Data at rest in ${name} could be modified`, 'high', 'Implement access control and integrity monitoring'));
    found.push(this.addThreat('information_disclosure', name, `Data in ${name} could be exposed in a breach`, 'high', 'Encrypt data at rest with AES-256-GCM'));
    found.push(this.addThreat('denial_of_service', name, `${name} could be flooded with requests`, 'medium', 'Implement rate limiting and connection pooling'));
    return found;
  }

  public analyzeProcess(name: string): ThreatEntry[] {
    const found: ThreatEntry[] = [];
    found.push(this.addThreat('elevation_of_privilege', name, `Process ${name} could be exploited for privilege escalation`, 'critical', 'Apply least privilege principle, use sandboxing'));
    found.push(this.addThreat('denial_of_service', name, `Process ${name} could be crashed by malformed input`, 'medium', 'Validate all inputs, use circuit breakers'));
    return found;
  }

  public analyzeExternalInteractor(name: string): ThreatEntry[] {
    const found: ThreatEntry[] = [];
    found.push(this.addThreat('spoofing', name, `External entity ${name} could be impersonated`, 'high', 'Mutual TLS, API keys, OAuth client credentials'));
    found.push(this.addThreat('repudiation', name, `${name} could deny actions performed`, 'low', 'Non-repudiation via signed audit logs'));
    return found;
  }

  private addThreat(category: StrideCategory, element: string, description: string, severity: ThreatEntry['severity'], mitigation: string): ThreatEntry {
    const riskScores: Record<string, number> = { critical: 15, high: 12, medium: 8, low: 4 };
    const threat: ThreatEntry = { id: `T${++this.counter}`, category, element, description, severity, mitigated: false, riskScore: riskScores[severity], mitigation };
    this.threats.push(threat);
    return threat;
  }

  public getUnmitigatedHighRisk(): ThreatEntry[] {
    return this.threats.filter(t => !t.mitigated && (t.severity === 'critical' || t.severity === 'high'));
  }

  public getMitigationRate(): number {
    return this.threats.length > 0 ? Math.round(this.threats.filter(t => t.mitigated).length / this.threats.length * 100) : 0;
  }

  public generateReport(): string {
    const byCategory = new Map<StrideCategory, ThreatEntry[]>();
    for (const t of this.threats) {
      if (!byCategory.has(t.category)) byCategory.set(t.category, []);
      byCategory.get(t.category)!.push(t);
    }
    const lines: string[] = ['=== Threat Model Report ===', `Total Threats: ${this.threats.length}`, `Mitigation Rate: ${this.getMitigationRate()}%`, ''];
    for (const [category, threats] of byCategory) {
      lines.push(`[${category.toUpperCase()}] (${threats.length})`);
      for (const t of threats) {
        lines.push(`  ${t.id}: ${t.element} - ${t.description} [${t.severity}] ${t.mitigated ? '✓' : '✗'}`);
        lines.push(`    Mitigation: ${t.mitigation}`);
      }
    }
    return lines.join('\n');
  }
}

// === OWASPChecker: Automated OWASP Top 10 checks ===
class OWASPChecker {
  private findings: { risk: string; passed: boolean; details: string; severity: number }[] = [];

  public checkAccessControl(code: string): this {
    const hasMiddleware = code.includes('authenticate') || code.includes('authorize');
    const hasRoleCheck = code.includes('role') || code.includes('permission');
    this.findings.push({
      risk: 'A01: Broken Access Control',
      passed: hasMiddleware && hasRoleCheck,
      details: hasMiddleware && hasRoleCheck ? 'Access control middleware and role checks found' : 'Missing access control middleware or role checks',
      severity: 10,
    });
    return this;
  }

  public checkCrypto(code: string): this {
    const hasTls = code.includes('https') || code.includes('TLS');
    const hasStrongHash = code.includes('argon2') || code.includes('bcrypt');
    this.findings.push({
      risk: 'A02: Cryptographic Failures',
      passed: hasTls || hasStrongHash,
      details: hasStrongHash ? 'Strong password hashing found' : 'No strong crypto primitives detected',
      severity: 9,
    });
    return this;
  }

  public checkInjection(code: string): this {
    const hasParameterized = code.includes('$1') || code.includes('prepared') || code.includes('parameterized');
    const noConcat = !code.includes("' +") && !code.includes('`SELECT');
    this.findings.push({
      risk: 'A03: Injection',
      passed: hasParameterized && noConcat,
      details: hasParameterized ? 'Parameterised queries detected' : 'String concatenation in queries detected',
      severity: 9,
    });
    return this;
  }

  public checkConfig(code: string): this {
    const noHardcodedSecrets = !code.includes('password =') && !code.includes('secret =');
    const hasEnvVars = code.includes('process.env');
    this.findings.push({
      risk: 'A05: Security Misconfiguration',
      passed: noHardcodedSecrets && hasEnvVars,
      details: hasEnvVars ? 'Environment variables used for config' : 'Hardcoded configuration values detected',
      severity: 7,
    });
    return this;
  }

  public checkLogging(code: string): this {
    const hasLogging = code.includes('console.log') || code.includes('logger.') || code.includes('log.');
    const hasSecurityEvents = code.includes('audit') || code.includes('security');
    this.findings.push({
      risk: 'A09: Security Logging & Monitoring',
      passed: hasLogging && hasSecurityEvents,
      details: hasLogging ? 'Logging framework detected' : 'No logging or monitoring found',
      severity: 6,
    });
    return this;
  }

  public runAll(code: string): { score: number; passed: number; failed: number; details: string[] } {
    this.checkAccessControl(code).checkCrypto(code).checkInjection(code).checkConfig(code).checkLogging(code);
    const passed = this.findings.filter(f => f.passed).length;
    const failed = this.findings.filter(f => !f.passed).length;
    const weightedScore = this.findings.reduce((s, f) => s + (f.passed ? f.severity : 0), 0);
    const maxScore = this.findings.reduce((s, f) => s + f.severity, 0);
    return {
      score: maxScore > 0 ? Math.round(weightedScore / maxScore * 100) : 0,
      passed,
      failed,
      details: this.findings.map(f => `${f.passed ? '✓' : '✗'} ${f.risk}: ${f.details}`),
    };
  }
}

// === SecurePipeline: DevSecOps CI/CD pipeline orchestrator ===
interface PipelineStage { name: string; type: 'sast' | 'dast' | 'sca' | 'secret_scan' | 'container_scan' | 'build' | 'deploy'; command: string; timeout: number; required: boolean; }
interface ScanResult { stage: string; passed: boolean; vulnerabilities: number; critical: number; high: number; duration: number; }

class SecurePipeline {
  private stages: PipelineStage[] = [];
  private results: ScanResult[] = [];

  public addStage(stage: PipelineStage): this { this.stages.push(stage); return this; }

  public async execute(): Promise<{ passed: boolean; summary: string; results: ScanResult[] }> {
    this.results = [];
    for (const stage of this.stages) {
      console.log(`Running ${stage.type}: ${stage.name}...`);
      const startTime = Date.now();
      try {
        const result = await this.runStage(stage);
        result.duration = Date.now() - startTime;
        this.results.push(result);
        if (!result.passed && stage.required) {
          return { passed: false, summary: `Pipeline aborted at ${stage.name}`, results: this.results };
        }
      } catch (error) {
        this.results.push({ stage: stage.name, passed: false, vulnerabilities: 0, critical: 0, high: 0, duration: Date.now() - startTime });
        if (stage.required) {
          return { passed: false, summary: `Pipeline failed at ${stage.name}: ${error}`, results: this.results };
        }
      }
    }
    const totalCritical = this.results.reduce((s, r) => s + r.critical, 0);
    const totalHigh = this.results.reduce((s, r) => s + r.high, 0);
    return {
      passed: totalCritical === 0,
      summary: `Pipeline complete: ${this.results.length} stages, ${totalCritical} critical, ${totalHigh} high findings`,
      results: this.results,
    };
  }

  private async runStage(stage: PipelineStage): Promise<ScanResult> {
    const mockVulns: Record<string, { v: number; c: number; h: number }> = {
      sast: { v: 5, c: 0, h: 1 },
      sca: { v: 12, c: 0, h: 2 },
      secret_scan: { v: 2, c: 0, h: 0 },
      container_scan: { v: 3, c: 0, h: 0 },
      dast: { v: 4, c: 0, h: 1 },
    };
    const defaults = mockVulns[stage.type] ?? { v: 0, c: 0, h: 0 };
    return {
      stage: stage.name,
      passed: defaults.c === 0,
      vulnerabilities: defaults.v,
      critical: defaults.c,
      high: defaults.h,
      duration: 0,
    };
  }

  public getGatesSummary(): { total: number; passed: number; failed: number; blocked: boolean } {
    const passed = this.results.filter(r => r.passed).length;
    return { total: this.results.length, passed, failed: this.results.length - passed, blocked: this.results.some(r => !r.passed) };
  }
}

// === SecurityHeadersManager: HTTP security header builder ===
class SecurityHeadersManager {
  private headers: Record<string, string> = {};

  public setCSP(policy: string): this { this.headers['Content-Security-Policy'] = policy; return this; }
  public setHSTS(maxAge: number = 31536000, includeSubDomains = true): this {
    this.headers['Strict-Transport-Security'] = `max-age=${maxAge}${includeSubDomains ? '; includeSubDomains' : ''}`;
    return this;
  }
  public setXFrameOptions(mode: 'DENY' | 'SAMEORIGIN' = 'DENY'): this { this.headers['X-Frame-Options'] = mode; return this; }
  public setXContentTypeOptions(): this { this.headers['X-Content-Type-Options'] = 'nosniff'; return this; }
  public setXXSSProtection(): this { this.headers['X-XSS-Protection'] = '1; mode=block'; return this; }
  public setReferrerPolicy(policy: string = 'strict-origin-when-cross-origin'): this { this.headers['Referrer-Policy'] = policy; return this; }
  public setPermissionsPolicy(policy: string): this { this.headers['Permissions-Policy'] = policy; return this; }
  public setCrossOriginOpenerPolicy(policy: 'same-origin' | 'same-origin-allow-popups' | 'unsafe-none' = 'same-origin'): this {
    this.headers['Cross-Origin-Opener-Policy'] = policy; return this;
  }
  public setCrossOriginEmbedderPolicy(policy: 'require-corp' | 'unsafe-none' = 'require-corp'): this {
    this.headers['Cross-Origin-Embedder-Policy'] = policy; return this;
  }
  public setCrossOriginResourcePolicy(policy: 'same-origin' | 'same-site' | 'cross-origin' = 'same-origin'): this {
    this.headers['Cross-Origin-Resource-Policy'] = policy; return this;
  }

  public build(): Record<string, string> { return { ...this.headers }; }

  public audit(): { header: string; present: boolean; recommended: boolean }[] {
    const recommendations = [
      'Content-Security-Policy', 'Strict-Transport-Security', 'X-Frame-Options',
      'X-Content-Type-Options', 'X-XSS-Protection', 'Referrer-Policy',
      'Permissions-Policy', 'Cross-Origin-Opener-Policy', 'Cross-Origin-Embedder-Policy',
    ];
    return recommendations.map(h => ({ header: h, present: h in this.headers, recommended: true }));
  }
}

// === SecretsScanner: Detect secrets in code ===
class SecretsScanner {
  private static readonly PATTERNS = [
    { name: 'AWS Access Key', pattern: /AKIA[0-9A-Z]{16}/, severity: 'critical' },
    { name: 'AWS Secret Key', pattern: /(?i)aws[_-]?secret[_-]?key\s*[:=]\s*['"][A-Za-z0-9/+=]{40}['"]/, severity: 'critical' },
    { name: 'GitHub Token', pattern: /gh[ps]_[0-9a-zA-Z]{36}/, severity: 'critical' },
    { name: 'GitHub Fine-Grained Token', pattern: /github_pat_[0-9a-zA-Z_]{82}/, severity: 'critical' },
    { name: 'Private Key', pattern: /-----BEGIN (RSA |EC )?PRIVATE KEY-----/, severity: 'critical' },
    { name: 'JWT Token', pattern: /eyJ[a-zA-Z0-9_-]+\.eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/, severity: 'high' },
    { name: 'Generic Secret', pattern: /(password|secret|api[_-]?key|token|apikey)\s*[:=]\s*['"][^'"]+['"]/i, severity: 'medium' },
    { name: 'Slack Token', pattern: /xox[baprs]-[0-9a-z-]{10,}/, severity: 'high' },
    { name: 'Google API Key', pattern: /AIza[0-9A-Za-z_-]{35}/, severity: 'high' },
    { name: 'Heroku API Key', pattern: /[hH][eE][rR][oO][kK][uU]\s*[:=]\s*['"][0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}['"]/, severity: 'critical' },
  ];

  public scan(content: string, filePath: string): { file: string; line: number; type: string; severity: string; snippet: string }[] {
    const findings: { file: string; line: number; type: string; severity: string; snippet: string }[] = [];
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      for (const p of SecretsScanner.PATTERNS) {
        const match = lines[i].match(p.pattern);
        if (match) {
          findings.push({
            file: filePath,
            line: i + 1,
            type: p.name,
            severity: p.severity,
            snippet: match[0].substring(0, 60),
          });
        }
      }
    }
    return findings;
  }

  public scanDirectory(files: Map<string, string>): { total: number; critical: number; findings: { file: string; line: number; type: string }[] } {
    const allFindings: { file: string; line: number; type: string }[] = [];
    for (const [filePath, content] of files) {
      allFindings.push(...this.scan(content, filePath));
    }
    return {
      total: allFindings.length,
      critical: allFindings.filter(f => f.severity === 'critical').length,
      findings: allFindings.map(f => ({ file: f.file, line: f.line, type: f.type })),
    };
  }
}

// === Example usage of all five classes ===
const modeler = new ThreatModeler();
modeler.analyzeDataFlow('User Login', 'Authentication data flow');
modeler.analyzeDataStore('User Database');
modeler.analyzeProcess('Payment Processor');
modeler.analyzeExternalInteractor('Payment Gateway API');
console.log(modeler.generateReport());
console.log('Unmitigated High Risk:', modeler.getUnmitigatedHighRisk().length);

const checker = new OWASPChecker();
const sampleCode = `app.post('/login', authenticate, (req, res) => {
  const { password } = req.body;
  const hash = await argon2.hash(password);
  const sql = { text: 'SELECT * FROM users WHERE email = $1', values: [email] };
});`;
console.log('OWASP Score:', checker.runAll(sampleCode));

const pipeline = new SecurePipeline();
pipeline.addStage({ name: 'SAST Scan', type: 'sast', command: 'semgrep', timeout: 300, required: true });
pipeline.addStage({ name: 'SCA Scan', type: 'sca', command: 'npm audit', timeout: 120, required: true });
pipeline.addStage({ name: 'Secrets Scan', type: 'secret_scan', command: 'trufflehog', timeout: 180, required: true });
pipeline.execute().then(console.log);

const headers = new SecurityHeadersManager()
  .setCSP("default-src 'self'")
  .setHSTS()
  .setXFrameOptions('DENY')
  .setXContentTypeOptions()
  .setReferrerPolicy()
  .build();
console.log('Security Headers:', headers);

const scanner = new SecretsScanner();
const code = `const AWS_KEY = "AKIAIOSFODNN7EXAMPLE"; const password = "supersecret";`;
console.log('Secrets Found:', scanner.scan(code, 'config.ts'));
```

### TypeScript: Security Assessment Tools

```typescript
// === Vulnerability Severity Calculator (CVSS-style) ===
interface Vulnerability { exploitability: number; impact: number; scope: 'unchanged' | 'changed'; }
function calculateSeverity(vuln: Vulnerability): { score: number; severity: string } {
  const impact = vuln.scope === 'changed' ? 7.52 * (vuln.impact - 0.029) - 3.25 * Math.pow(vuln.impact - 0.02, 15) : 6.42 * vuln.impact;
  const exploitSub = 8.22 * vuln.exploitability;
  const score = vuln.scope === 'changed' ? 1.08 * (impact + exploitSub) : Math.min(impact + exploitSub, 10);
  const rounded = Math.round(score * 10) / 10;
  const severity = rounded >= 9 ? 'Critical' : rounded >= 7 ? 'High' : rounded >= 4 ? 'Medium' : 'Low';
  return { score: rounded, severity };
}

// === Security Control Effectiveness Evaluator ===
function evaluateControl(control: string, attacks: number, blocked: number): { name: string; effectiveness: number; recommendation: string } {
  const effectiveness = attacks > 0 ? Math.round((blocked / attacks) * 100) : 100;
  const recommendation = effectiveness >= 90 ? 'Excellent' : effectiveness >= 70 ? 'Adequate' : effectiveness >= 50 ? 'Needs Improvement' : 'Replace';
  return { name: control, effectiveness, recommendation };
}

const vuln = calculateSeverity({ exploitability: 8, impact: 9, scope: 'unchanged' });
console.log(vuln);

// === SAST Rule Engine ===
interface SASTRule { id: string; pattern: RegExp; message: string; severity: 'error' | 'warning' }
const sastRules: SASTRule[] = [
  { id: 'S-001', pattern: /eval\s*\(/, message: 'Avoid eval() - risk of code injection', severity: 'error' },
  { id: 'S-002', pattern: /innerHTML\s*=/, message: 'Use textContent instead of innerHTML to prevent XSS', severity: 'error' },
  { id: 'S-003', pattern: /exec\s*\(/, message: 'Avoid exec() - use safer alternatives', severity: 'error' },
  { id: 'S-004', pattern: /crypto\.createHash\("md5"\)/, message: 'Use SHA-256 instead of MD5', severity: 'warning' },
];
function scanSource(source: string): { rule: SASTRule; line: number }[] {
  const findings: { rule: SASTRule; line: number }[] = [];
  const lines = source.split('\n');
  for (let i = 0; i < lines.length; i++) {
    for (const rule of sastRules) {
      if (rule.pattern.test(lines[i])) findings.push({ rule, line: i + 1 });
    }
  }
  return findings;
}
const testCode = 'function process(input) {\n  return eval(input);\n}\ndocument.getElementById("x").innerHTML = "test";';
console.log(scanSource(testCode));

// === Threat Modelling Tool ===
interface Threat { id: string; description: string; category: 'Spoofing' | 'Tampering' | 'Repudiation' | 'Info Disclosure' | 'DoS' | 'Elevation'; mitigated: boolean; risk: number; }
class ThreatModel {
  private threats: Threat[] = [];
  addThreat(description: string, category: Threat['category']): void {
    this.threats.push({ id: `T${this.threats.length + 1}`, description, category, mitigated: false, risk: 5 });
  }
  mitigate(id: string): void {
    const threat = this.threats.find(t => t.id === id);
    if (threat) threat.mitigated = true;
  }
  getRiskHeatmap(): Record<string, { total: number; mitigated: number; unmitigated: number }> {
    const result: Record<string, { total: number; mitigated: number; unmitigated: number }> = {};
    for (const t of this.threats) {
      if (!result[t.category]) result[t.category] = { total: 0, mitigated: 0, unmitigated: 0 };
      result[t.category].total++;
      if (t.mitigated) result[t.category].mitigated++;
      else result[t.category].unmitigated++;
    }
    return result;
  }
  coverageScore(): number {
    return this.threats.length > 0 ? Math.round((this.threats.filter(t => t.mitigated).length / this.threats.length) * 100) : 0;
  }
}

const model = new ThreatModel();
model.addThreat('SQL injection via user input', 'Tampering');
model.addThreat('JWT token theft', 'Spoofing');
model.mitigate('T1');
console.log(model.coverageScore());
console.log(model.getRiskHeatmap());
```

## Exercises

### Review Questions

1. Explain the CIA triad with an example of an attack on each principle.
2. List the OWASP Top 10 and describe the three highest-ranked risks.
3. What is the difference between authentication and authorisation?
4. Describe stored XSS, reflected XSS, and DOM XSS.
5. What is CSRF and how is it prevented?
6. What is the principle of least privilege?
7. Compare STRIDE and PASTA threat modelling methodologies.
8. What is shift-left in DevSecOps and why is it important?

### Application Problems

1. Design a threat model for an online banking application using STRIDE. Identify at least two threats per category.

2. Implement a secure password change endpoint that requires the current password, enforces complexity rules, prevents reuse, and logs the event. Use TypeScript.

3. Write a Content Security Policy for a blog that loads scripts only from self, Google Analytics, and a CDN, with 'strict-dynamic' for inline scripts.

4. Create a DevSecOps pipeline configuration (pseudocode) that integrates SAST, SCA, secrets scanning, container scanning, and DAST with quality gates at each stage.

### Challenge Problem

You are the security lead for a healthcare SaaS platform (HIPAA regulated) that stores patient health records. It uses a React frontend, Java Spring Boot backend, PostgreSQL database, and AWS infrastructure. The system was recently pen-tested and the report found: SQL injection in patient search, stored XSS in notes, missing encryption on PHI at rest, no MFA for providers, and hardcoded AWS keys in source code. Design a comprehensive remediation plan. Prioritise fixes by risk. For each finding, specify the vulnerable code pattern, the exploit scenario, the fix (with code examples), and the verification method. Implement a TypeScript security scanner that checks code patterns for the five vulnerabilities found.
