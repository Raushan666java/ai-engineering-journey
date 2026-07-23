<!-- Clear Language: Keep sentences under 50 words -->
# Authentication and Authorization — JWT, OAuth2, and RBAC

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Implement JWT token generation, validation, and refresh flow |
| LO2 | Configure OAuth2 with password flow and scopes |
| LO3 | Build role-based access control (RBAC) with permission checks |
| LO4 | Secure endpoints with dependency injection for authentication |
| LO5 | Handle password hashing, session management, and CSRF protection |
| LO6 | Apply security best practices: rate limiting, HTTPS, secure headers |

## Introduction

FastAPI is the modern Python framework for building AI APIs. Its async support, automatic documentation, and type safety make it ideal for serving ML models at scale. This module covers production-grade API development.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding authentication and authz is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how authentication and authz works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Authentication vs Authorization | Identity verification vs access permission |
| 5.2 | Password Hashing | bcrypt/argon2, salting, verification |
| 5.3 | JWT Tokens | Access tokens, refresh tokens, claims |
| 5.4 | OAuth2 with FastAPI | Password flow, scopes, security scheme |
| 5.5 | Role-Based Access Control | Roles, permissions, endpoint guards |
| 5.6 | Session Management | Token refresh, revocation, blacklist |
| 5.7 | Security Headers | HTTPS, CORS, CSP, rate limiting |
| 5.8 | Testing Auth Flows | Mock users, token generation in tests |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Auth Concepts] --> B[Password Hashing]
    B --> C[JWT Generation]
    C --> D[OAuth2 Flow]
    D --> E[RBAC]
    E --> F[Session Mgmt]
    F --> G[Security Headers]
    G --> H[Testing Auth]
```text

## 5.1 Authentication vs Authorization

**Authentication** verifies who you are. **Authorization** verifies what you can do.

```mermaid
flowchart LR
    User -->|Login| Auth[Authentication]
    Auth -->|"Who am I?"| JWT[JWT Token]
    JWT -->|"What can I do?"| AuthZ[Authorization]
    AuthZ -->|Role Check| Resource[Protected Resource]
```text

```python
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

app = FastAPI()

## OAuth2 scheme — tells Swagger UI to show login button
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

@app.post("/auth/login")
async def login(username: str, password: str):
    user = authenticate_user(username, password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token(user)
    return {"access_token": token, "token_type": "bearer"}

@app.get("/users/me")
async def read_users_me(token: str = Depends(oauth2_scheme)):
    # token is extracted from Authorization: Bearer <token>
    user = decode_token(token)
    return user
```text

**Design principles**: Authenticate once (login), authorize every request (token validation). Use short-lived access tokens (15 min) with long-lived refresh tokens (7 days) for balance between security and UX.

## 5.2 Password Hashing

Never store passwords in plain text. Use bcrypt or argon2.

```python
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr

## Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserInDB(BaseModel):
    username: str
    email: EmailStr
    hashed_password: str
    disabled: bool = False

## Registration
@app.post("/auth/register", status_code=201)
async def register(user: UserCreate):
    if get_user_by_username(user.username):
        raise HTTPException(status_code=409, detail="Username already exists")

    hashed = hash_password(user.password)
    user_db = UserInDB(
        username=user.username,
        email=user.email,
        hashed_password=hashed
    )
    await save_user(user_db)
    return {"message": "User created successfully"}

## Login
@app.post("/auth/login")
async def login(user_cred: UserCreate):
    user = get_user_by_username(user_cred.username)
    if not user or not verify_password(user_cred.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"access_token": create_access_token(user), "token_type": "bearer"}
```text

**Password policies**: Minimum 8 characters, require mixed case + numbers + symbols. Use zxcvbn for password strength estimation. Never log passwords or send them in URLs.

## 5.3 JWT Tokens

JSON Web Tokens contain claims encoded in a three-part structure: header.payload.signature.

```python
from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from typing import Optional

## Configuration
SECRET_KEY = "your-secret-key-here"  # Use environment variable!
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 7

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire, "type": "access"})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def create_refresh_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    to_encode.update({"exp": expire, "type": "refresh"})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

def get_current_user(token: str = Depends(oauth2_scheme)) -> UserInDB:
    payload = decode_token(token)
    username = payload.get("sub")
    if username is None:
        raise HTTPException(status_code=401, detail="Invalid token claims")
    user = get_user_by_username(username)
    if user is None:
        raise HTTPException(status_code=401, detail="User not found")
    return user

## Token refresh endpoint
@app.post("/auth/refresh")
async def refresh_token(refresh_token: str):
    payload = decode_token(refresh_token)
    if payload.get("type") != "refresh":
        raise HTTPException(status_code=401, detail="Invalid token type")
    username = payload.get("sub")
    user = get_user_by_username(username)
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return {
        "access_token": create_access_token({"sub": username}),
        "refresh_token": create_refresh_token({"sub": username}),
        "token_type": "bearer"
    }
```text

**JWT best practices**: Keep SECRET_KEY in environment variables. Use short access token expiry. Include minimal claims (sub, exp, type). Never store sensitive data in JWT payload (it is base64-encoded, not encrypted).

## 5.4 OAuth2 with FastAPI

FastAPI's OAuth2 integration provides automatic Swagger UI authorization.

```python
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

## OAuth2 scheme — Swagger UI shows "Authorize" button
oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/token",
    scopes={"me": "Read personal info", "admin": "Admin operations"}
)

class Token(BaseModel):
    access_token: str
    token_type: str
    refresh_token: Optional[str] = None

class TokenData(BaseModel):
    username: Optional[str] = None
    scopes: list[str] = []

## OAuth2 password flow — form-based login
@app.post("/auth/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = get_user_by_username(form_data.username)
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    scopes = user.get("scopes", [])
    access_token = create_access_token(
        data={"sub": user.username, "scopes": scopes}
    )
    return Token(access_token=access_token, token_type="bearer")

## Scope-based dependency
from fastapi.security import SecurityScopes

async def get_current_user_with_scopes(
    security_scopes: SecurityScopes,
    token: str = Depends(oauth2_scheme),
):
    payload = decode_token(token)
    token_scopes = payload.get("scopes", [])
    token_data = TokenData(scopes=token_scopes)

    # Check all required scopes are present
    for scope in security_scopes.scopes:
        if scope not in token_scopes:
            raise HTTPException(
                status_code=403,
                detail=f"Missing scope: {scope}",
                headers={"WWW-Authenticate": f'Bearer scope="{security_scopes.scope_str}"'}
            )
    return token_data

@app.get("/users/me", dependencies=[Depends(oauth2_scheme)])
async def read_users_me(current_user = Depends(get_current_user_with_scopes)):
    return {"username": current_user.username, "scopes": current_user.scopes}

@app.post("/admin/delete-user")
async def admin_delete(
    current_user = Depends(get_current_user_with_scopes),
):
    # Only users with "admin" scope can access
    pass
```text

## 5.5 Role-Based Access Control

RBAC maps roles to permissions and checks them on each request.

```python
from fastapi import FastAPI, Depends, HTTPException
from enum import Enum
from typing import Optional

class UserRole(str, Enum):
    ADMIN = "admin"
    MODERATOR = "moderator"
    USER = "user"
    GUEST = "guest"

## Permission mapping
ROLE_PERMISSIONS = {
    UserRole.ADMIN: [
        "users:read", "users:write", "users:delete",
        "posts:read", "posts:write", "posts:delete",
        "settings:read", "settings:write"
    ],
    UserRole.MODERATOR: [
        "users:read",
        "posts:read", "posts:write", "posts:delete",
    ],
    UserRole.USER: [
        "users:read",
        "posts:read", "posts:write",
    ],
    UserRole.GUEST: [
        "posts:read",
    ],
}

def has_permission(user: dict, required_permission: str) -> bool:
    role = UserRole(user.get("role", "guest"))
    permissions = ROLE_PERMISSIONS.get(role, [])
    return required_permission in permissions

## Permission dependency factory
def require_permission(permission: str):
    async def permission_checker(current_user: dict = Depends(get_current_user)):
        if not has_permission(current_user, permission):
            raise HTTPException(status_code=403, detail=f"Missing permission: {permission}")
        return current_user
    return permission_checker

@app.get("/posts")
async def list_posts(user: dict = Depends(require_permission("posts:read"))):
    return [{"id": 1, "title": "Post"}]

@app.post("/posts")
async def create_post(user: dict = Depends(require_permission("posts:write"))):
    return {"message": "Post created"}

@app.delete("/posts/{post_id}")
async def delete_post(post_id: int, user: dict = Depends(require_permission("posts:delete"))):
    return {"message": f"Post {post_id} deleted"}

## Multiple permission requirements
@app.get("/admin/dashboard")
async def admin_dashboard(
    _: dict = Depends(require_permission("users:read")),
    __: dict = Depends(require_permission("settings:read")),
):
    return {"dashboard": "admin"}
```text

**RBAC design patterns**:
- Use role hierarchy (Admin > Moderator > User > Guest) for inheritance
- Store permissions as strings like "resource:action" for fine-grained control
- Cache roles and permissions in Redis for performance
- Audit permission changes with logs

## 5.6 Session Management

Handle token refresh, revocation, and blacklisting.

```python
from datetime import datetime, timedelta, timezone
from typing import Optional
import redis

redis_client = redis.Redis(host="localhost", port=6379, decode_responses=True)

class TokenManager:
    def __init__(self):
        self.blacklist_prefix = "token_blacklist:"
        self.refresh_prefix = "refresh_token:"

    def blacklist_access_token(self, token: str, expires_in: int = 900):
        """Blacklist a token until its natural expiry."""
        payload = decode_token(token)
        exp = payload.get("exp", datetime.now(timezone.utc).timestamp())
        ttl = max(0, int(exp - datetime.now(timezone.utc).timestamp()))
        redis_client.setex(f"{self.blacklist_prefix}{token}", ttl, "blacklisted")

    def is_blacklisted(self, token: str) -> bool:
        return bool(redis_client.exists(f"{self.blacklist_prefix}{token}"))

    def store_refresh_token(self, user_id: str, refresh_token: str):
        redis_client.setex(
            f"{self.refresh_prefix}{user_id}",
            timedelta(days=7),
            refresh_token
        )

    def validate_refresh_token(self, user_id: str, refresh_token: str) -> bool:
        stored = redis_client.get(f"{self.refresh_prefix}{user_id}")
        return stored == refresh_token

    def revoke_all_user_tokens(self, user_id: str):
        redis_client.delete(f"{self.refresh_prefix}{user_id}")

token_manager = TokenManager()

## Logout — blacklist current token
@app.post("/auth/logout")
async def logout(token: str = Depends(oauth2_scheme)):
    token_manager.blacklist_access_token(token)
    return {"message": "Logged out successfully"}

## Protected endpoint with blacklist check
async def get_current_user_secure(
    token: str = Depends(oauth2_scheme)
) -> UserInDB:
    if token_manager.is_blacklisted(token):
        raise HTTPException(status_code=401, detail="Token has been revoked")
    payload = decode_token(token)
    user = get_user_by_username(payload.get("sub"))
    return user

## Force logout all sessions
@app.post("/admin/revoke-user/{user_id}")
async def revoke_user_sessions(
    user_id: str,
    admin: dict = Depends(require_permission("users:write"))
):
    token_manager.revoke_all_user_tokens(user_id)
    return {"message": f"All sessions revoked for user {user_id}"}
```text

## 5.7 Security Headers and Rate Limiting

```python
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
import time

app = FastAPI()

## CORS — restrict origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://example.com"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Authorization", "Content-Type"],
)

## Security headers middleware
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        response.headers["Content-Security-Policy"] = "default-src 'self'"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        return response

app.add_middleware(SecurityHeadersMiddleware)

## Rate limiting
class RateLimiter:
    def __init__(self):
        self.requests = {}

    async def check(self, request: Request):
        client_ip = request.client.host
        now = time.time()
        window = 60  # 1 minute window
        max_requests = 100

        if client_ip not in self.requests:
            self.requests[client_ip] = []

        # Clean old entries
        self.requests[client_ip] = [
            t for t in self.requests[client_ip] if now - t < window
        ]

        if len(self.requests[client_ip]) >= max_requests:
            raise HTTPException(status_code=429, detail="Too many requests")

        self.requests[client_ip].append(now)

rate_limiter = RateLimiter()

@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    await rate_limiter.check(request)
    response = await call_next(request)
    return response
```text

## 5.8 Testing Auth Flows

```python
from fastapi.testclient import TestClient
import pytest
from jose import jwt

def test_login_success(client):
    response = client.post("/auth/login", json={
        "username": "testuser",
        "password": "testpass123"
    })
    assert response.status_code == 200
    assert "access_token" in response.json()

def test_login_invalid_password(client):
    response = client.post("/auth/login", json={
        "username": "testuser",
        "password": "wrongpass"
    })
    assert response.status_code == 401

def test_protected_endpoint_with_valid_token(client, test_user):
    token = create_test_token(test_user)
    response = client.get("/users/me", headers={
        "Authorization": f"Bearer {token}"
    })
    assert response.status_code == 200
    assert response.json()["username"] == test_user.username

def test_protected_endpoint_no_token(client):
    response = client.get("/users/me")
    assert response.status_code == 403  # No auth header

def test_protected_endpoint_expired_token(client):
    token = create_expired_token()
    response = client.get("/users/me", headers={
        "Authorization": f"Bearer {token}"
    })
    assert response.status_code == 401
    assert "expired" in response.json()["detail"].lower()

def test_role_based_access(client, test_user):
    # User without admin role
    token = create_test_token(test_user)
    response = client.post("/admin/delete-user", headers={
        "Authorization": f"Bearer {token}"
    })
    assert response.status_code == 403

@pytest.fixture
def auth_headers(client, test_user):
    response = client.post("/auth/login", json={
        "username": test_user.username,
        "password": "testpass123"
    })
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}

def test_authenticated_request(client, auth_headers):
    response = client.get("/users/me", headers=auth_headers)
    assert response.status_code == 200
```text

---

## TypeScript Parallel

```typescript
import jwt from "jsonwebtoken";

interface TokenPayload {
  sub: string;
  role: string;
  scopes: string[];
  exp: number;
}

function createAccessToken(user: { id: string; role: string }): string {
  return jwt.sign(
    { sub: user.id, role: user.role, scopes: getScopesForRole(user.role) },
    process.env.JWT_SECRET!,
    { expiresIn: "15m" }
  );
}

function requirePermission(permission: string) {
  return (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
      const permissions = getPermissionsForRole(payload.role);
      if (!permissions.includes(permission)) {
        return res.status(403).json({ error: "Forbidden" });
      }
      req.user = payload;
      next();
    } catch {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
}
```text

---

## Summary

- Authentication verifies identity; authorization verifies permissions
- Always hash passwords with bcrypt/argon2 — never store plain text
- JWT tokens contain header, payload (claims), and signature — use short expiry (15 min)
- OAuth2 password flow with FastAPI integrates seamlessly with Swagger UI authorization
- RBAC maps roles to permissions — check permissions via dependency injection
- Session management includes token refresh, blacklisting revoked tokens
- Security headers (HSTS, CSP, X-Frame-Options) protect against common web attacks
- Rate limiting prevents brute force and DoS attacks
- Always validate tokens on every request — never trust client-side auth state
- Test all auth flows: success, invalid credentials, expired tokens, missing permissions

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Password storage | bcrypt with salt | Plain text or MD5/SHA |
| API auth | JWT access + refresh tokens | Basic auth over HTTP |
| Authorization | RBAC with permission checks | Hardcoded admin checks |
| Token storage | HTTP-only cookies (web) | localStorage (XSS vulnerable) |
| Rate limiting | Per-IP + per-user limits | No rate limiting |
| Security headers | CSP, HSTS, X-Frame-Options | Missing security headers |
| Testing auth | Mock tokens, test all scenarios | Testing only happy path |

## Interview Q&A

<details class="tp-qa-card" data-qid="fastapi-s05-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: Difference between authentication and authorization?</summary>
  <div class="tp-qa-answer"><p>Authentication verifies identity ("who are you?") — typically via username/password, JWT, or OAuth. Authorization verifies permissions ("what can you do?") — typically via roles, scopes, or permission checks. Authentication comes first, then authorization on every subsequent request.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: How does JWT token validation work?</summary>
  <div class="tp-qa-answer"><p>The server verifies the token signature using the secret key. It checks the exp (expiration) claim — reject if expired. It validates required claims (sub, type). JWTs are stateless — no server-side session storage required. Token can be decoded to extract user info and permissions.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: Why use refresh tokens?</summary>
  <div class="tp-qa-answer"><p>Access tokens are short-lived (15 min) — refresh tokens are long-lived (7 days) and used to obtain new access tokens without re-authentication. If a refresh token is compromised, it can be revoked without affecting other sessions. Refresh tokens should be stored securely and rotated on each use.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: How do you implement logout with JWT?</summary>
  <div class="tp-qa-answer"><p>Since JWTs are stateless, implement a token blacklist (Redis) that stores revoked tokens until their natural expiry. On logout, add the token to the blacklist. Check blacklist on every request in the auth dependency. For full user logout, revoke all refresh tokens for that user.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: What is OAuth2 scopes?</summary>
  <div class="tp-qa-answer"><p>Scopes are permission strings that define what a token can access. Example: "users:read", "users:write". Tokens are issued with specific scopes based on user role or consent. FastAPI's SecurityScopes class validates that the token has all required scopes before allowing access.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: How do you securely store API secrets?</summary>
  <div class="tp-qa-answer"><p>Use environment variables (.env file locally, secrets manager in production). Never commit secrets to version control. Use SecretStr in Pydantic for sensitive config values. Rotate secrets regularly. Use vault/secret management (HashiCorp Vault, AWS Secrets Manager) in production.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: What security headers should every API include?</summary>
  <div class="tp-qa-answer"><p>Strict-Transport-Security (HSTS), X-Content-Type-Options (nosniff), X-Frame-Options (DENY), Content-Security-Policy, X-XSS-Protection, Referrer-Policy. These prevent common web attacks like clickjacking, MIME sniffing, and XSS. Implement via middleware to add them to every response.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: How do you handle token expiry in the frontend?</summary>
  <div class="tp-qa-answer"><p>Intercept 401 responses, attempt token refresh with the refresh token, retry the original request. If refresh fails, redirect to login. Use axios interceptors or fetch wrappers. Store tokens securely (HTTP-only cookies for web, secure storage for mobile). Implement silent refresh before expiry.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: What is CSRF and how do you prevent it?</summary>
  <div class="tp-qa-answer"><p>CSRF (Cross-Site Request Forgery) tricks authenticated users into making unwanted requests. Prevention: use CSRF tokens (sent as header, verified server-side), SameSite cookies (Strict/Lax), and validate Origin/Referer headers. For APIs using JWT in Authorization header (not cookies), CSRF is less of a concern.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s05-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How do you design a permission system for a multi-tenant app?</summary>
  <div class="tp-qa-answer"><p>Use RBAC with tenant-scoped permissions. Each permission includes the tenant context: "tenant:123:users:read". Store user-role-tenant mappings. Check both role permissions and tenant membership on every request. Use tenant ID from JWT claims or subdomain for database isolation.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What algorithm is recommended for password hashing?

a) MD5
b) SHA256
c) bcrypt
d) Base64

<details class="tp-qa-card" data-qid="fastapi-s05-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) bcrypt</strong></p></div></details>

**Q2**: How long should an access token typically be valid?

a) 7 days
b) 30 days
c) 15 minutes
d) 1 year

<details class="tp-qa-card" data-qid="fastapi-s05-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 15 minutes</strong></p></div></details>

**Q3**: What measures permissions in OAuth2?

a) Roles
b) Scopes
c) Groups
d) Claims

<details class="tp-qa-card" data-qid="fastapi-s05-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Scopes</strong></p></div></details>

**Q4**: What header prevents clickjacking attacks?

a) X-XSS-Protection
b) X-Frame-Options
c) Content-Security-Policy
d) Strict-Transport-Security

<details class="tp-qa-card" data-qid="fastapi-s05-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) X-Frame-Options</strong></p></div></details>

**Q5**: Which HTTP status code indicates too many requests?

a) 401
b) 403
c) 429
d) 500

<details class="tp-qa-card" data-qid="fastapi-s05-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 429</strong></p></div></details>

## Exercises

**Easy** — Implement user registration and login with bcrypt password hashing. Store users in an in-memory dictionary. Test with valid and invalid credentials.

**Medium** — Implement JWT access token (15 min expiry) and refresh token (7 day expiry). Create endpoints for login, token refresh, and logout with token blacklist.

**Medium** — Build RBAC with roles (admin, moderator, user) and permissions (read/write/delete). Create endpoints protected by permission checks. Test all role-permission combinations.

**Hard** — Implement a complete OAuth2 security system with FastAPI: password flow, scopes, token refresh, blacklist, rate limiting, security headers, and Swagger UI integration. Include comprehensive tests for all auth scenarios.

**Hard** — Design a multi-tenant auth system: each user belongs to an organization, permissions are scoped to organizations, users can have different roles in different orgs. Implement tenant isolation in data access.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 05-fastapi-backend. When would you choose one approach over another?
2. Design a system that efficiently handles 05-fastapi-backend at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 05-fastapi-backend. What was your approach and what was the result?
2. How would you explain 05-fastapi-backend to a non-technical stakeholder?

#### Microsoft Style
1. How does 05-fastapi-backend integrate with enterprise systems and cloud architectures?
2. What are the security implications of 05-fastapi-backend?

#### NVIDIA Style
1. How would you optimize 05-fastapi-backend for GPU-accelerated computing?
2. What parallel processing patterns apply to 05-fastapi-backend?

#### AI Startup Style
1. How would you implement 05-fastapi-backend in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 05-fastapi-backend?

### Resume Tips
- **Technical Skills**: List 05-fastapi-backend under relevant technical skills
- **Project Description**: "Implemented 05-fastapi-backend to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 05-fastapi-backend in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 05-fastapi-backend
- [ ] Practice 3-5 problems related to 05-fastapi-backend
- [ ] Prepare 2 real-world examples of using 05-fastapi-backend
- [ ] Know the time/space complexity of common 05-fastapi-backend operations
- [ ] Have questions ready about how the company uses 05-fastapi-backend> **Next**: [Database with SQLAlchemy](06-database-with-sqlalchemy.md)


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 45-60 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to FastAPI Backend fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master authentication and authz?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of authentication and authz helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding authentication and authz at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of authentication and authz like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply authentication and authz concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of authentication and authz?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply authentication and authz in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (18 minutes)
**Day 2**: Complete exercises and practice (18 minutes)
**Day 3**: Review flashcards and take quiz (9 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of FastAPI Backend?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering FastAPI Backend, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Inference Workflow

1. **Input Validation**: Sanitize and validate incoming requests
2. **Preprocessing**: Transform input to model-ready format
3. **Model Execution**: Run inference with optimized runtime
4. **Postprocessing**: Format model output for consumption
5. **Response**: Return results with metadata and timing
6. **Monitoring**: Log requests, responses, and latency

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
