# Chapter 10: Authentication and Authorization

## Learning Objectives

By the end of this chapter, you will be able to:
- Implement session-based and token-based authentication
- Create JWT-based authentication with refresh tokens
- Implement OAuth 2.0 flows for third-party authentication
- Apply role-based access control (RBAC) and permissions
- Secure passwords using bcrypt and follow security best practices
- Implement multi-factor authentication with TOTP

## 10.1 Authentication vs Authorization

![Authentication and Authorization Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/10-authentication.png)

**Authentication** verifies who a user is (identity). **Authorization** determines what they can access (permissions).

```typescript
// Authentication: verifying identity
function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthenticated" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

// Authorization: checking permissions
function authorize(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
}
```

## 10.2 Password Hashing with bcrypt

```typescript
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Usage
const passwordHash = await hashPassword("userPassword123");
const isValid = await verifyPassword("userPassword123", passwordHash);
```

## 10.3 JWT Authentication

```typescript
import jwt from "jsonwebtoken";
import { z } from "zod";

const ACCESS_SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

interface TokenPayload {
  userId: string;
  role: string;
}

export function generateAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
}

export function generateRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });
}

export function verifyAccessToken(token: string): TokenPayload {
  return jwt.verify(token, ACCESS_SECRET) as TokenPayload;
}

// Login route
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload: TokenPayload = { userId: user.id, role: user.role };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    // Store refresh token hash for rotation
    const refreshHash = await hashPassword(refreshToken);
    await prisma.session.create({
      data: { userId: user.id, refreshHash, expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
    });

    res.json({
      data: { user: { id: user.id, email: user.email, name: user.name } },
      tokens: { accessToken, refreshToken },
    });
  } catch (err) {
    next(err);
  }
});

// Token refresh with rotation
router.post("/refresh", async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const payload = verifyAccessToken(refreshToken); // Reuse verify, but in practice use separate secret

    // Validate session exists
    const sessions = await prisma.session.findMany({
      where: { userId: payload.userId },
    });
    const valid = await Promise.any(
      sessions.map((s) => verifyPassword(refreshToken, s.refreshHash))
    ).catch(() => false);
    if (!valid) {
      // Possible token theft - revoke all sessions
      await prisma.session.deleteMany({ where: { userId: payload.userId } });
      return res.status(401).json({ message: "Token revoked" });
    }

    const newPayload: TokenPayload = { userId: payload.userId, role: payload.role };
    const newAccessToken = generateAccessToken(newPayload);
    const newRefreshToken = generateRefreshToken(newPayload);

    res.json({
      data: { accessToken: newAccessToken, refreshToken: newRefreshToken },
    });
  } catch (err) {
    next(err);
  }
});
```

## 10.4 OAuth 2.0 with Passport.js

```typescript
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/api/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (_accessToken, _refreshToken, profile, done) => {
      let user = await prisma.user.findUnique({
        where: { googleId: profile.id },
      });
      if (!user) {
        user = await prisma.user.create({
          data: {
            googleId: profile.id,
            email: profile.emails![0].value,
            name: profile.displayName,
            avatar: profile.photos?.[0]?.value,
          },
        });
      }
      done(null, user);
    }
  )
);

// Routes
router.get("/google", passport.authenticate("google"));
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const user = req.user as User;
    const accessToken = generateAccessToken({ userId: user.id, role: user.role });
    res.redirect(`http://localhost:3000/auth/callback?token=${accessToken}`);
  }
);
```

## 10.5 Role-Based Access Control

```typescript
enum Role {
  Admin = "ADMIN",
  Manager = "MANAGER",
  Member = "MEMBER",
  Viewer = "VIEWER",
}

interface Permission {
  resource: string;
  action: "create" | "read" | "update" | "delete" | "manage";
}

const rolePermissions: Record<Role, Permission[]> = {
  [Role.Admin]: [
    { resource: "*", action: "manage" },
  ],
  [Role.Manager]: [
    { resource: "project", action: "create" },
    { resource: "project", action: "read" },
    { resource: "project", action: "update" },
    { resource: "task", action: "manage" },
    { resource: "member", action: "read" },
  ],
  [Role.Member]: [
    { resource: "task", action: "create" },
    { resource: "task", action: "read" },
    { resource: "task", action: "update" },
    { resource: "project", action: "read" },
  ],
  [Role.Viewer]: [
    { resource: "task", action: "read" },
    { resource: "project", action: "read" },
  ],
};

function hasPermission(userRole: Role, resource: string, action: string): boolean {
  const permissions = rolePermissions[userRole];
  return permissions.some(
    (p) =>
      (p.resource === "*" || p.resource === resource) &&
      (p.action === "manage" || p.action === action)
  );
}

// Authorization middleware
function requirePermission(resource: string, action: string) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!hasPermission(req.user.role, resource, action)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    next();
  };
}

// Usage
router.delete(
  "/api/projects/:id",
  authenticate,
  requirePermission("project", "delete"),
  deleteProject
);
```

## 10.6 Multi-Factor Authentication with TOTP

```typescript
import { authenticator } from "otplib";
import QRCode from "qrcode";

// Setup MFA
router.post("/mfa/setup", authenticate, async (req, res) => {
  const secret = authenticator.generateSecret();
  const otpauth = authenticator.keyuri(req.user.email, "TaskFlow", secret);

  // Store secret temporarily
  req.user.mfaSecret = secret;

  const qrCode = await QRCode.toDataURL(otpauth);
  res.json({ data: { secret, qrCode } });
});

// Verify and enable MFA
router.post("/mfa/verify", authenticate, async (req, res) => {
  const { token } = z.object({ token: z.string().length(6) }).parse(req.body);
  const isValid = authenticator.verify({ token, secret: req.user.mfaSecret! });
  if (!isValid) {
    return res.status(400).json({ message: "Invalid token" });
  }
  await prisma.user.update({
    where: { id: req.user.userId },
    data: { mfaSecret: req.user.mfaSecret, mfaEnabled: true },
  });
  res.json({ message: "MFA enabled" });
});
```

## Summary

Authentication verifies identity while authorization controls access. JWTs provide stateless authentication with short-lived access tokens and long-lived refresh tokens for secure session management. bcrypt salts and hashes passwords, OAuth 2.0 enables third-party login, RBAC structures permissions by role, and TOTP adds an extra security layer with multi-factor authentication.

## Exercises

### Review Questions

1. What is the difference between authentication and authorization?
2. Why should refresh tokens be rotated?
3. How does bcrypt protect against rainbow table attacks?

### Application Projects

1. Add API key authentication for service-to-service communication
2. Implement session invalidation on password change
3. Add rate limiting per user based on their authentication tier

### Challenge Project

Build a complete auth system with Google OAuth, MFA/TOTP, role-based permissions (Admin/Editor/Viewer), session management dashboard showing active sessions with revoke capability, and automatic lockout after failed login attempts.
