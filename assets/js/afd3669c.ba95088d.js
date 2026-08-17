"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[13177],{

/***/ 46357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_10_auth_md_afd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-10-auth-md-afd.json
const site_docs_courses_web_development_10_auth_md_afd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/10-auth","title":"Chapter 10: Authentication and Authorization","description":"Previous 11-databases-web","source":"@site/docs/courses/web-development/10-auth.md","sourceDirName":"courses/web-development","slug":"/web-development/10-auth","permalink":"/ai-engineering-journey/web-development/10-auth","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-auth","slug":"/web-development/10-auth","title":"Chapter 10: Authentication and Authorization","sidebar_label":"Chapter 10: Authentication and Authorization","sidebar_position":10},"sidebar":"course-web-development","previous":{"title":"Chapter 9: REST APIs and API Design","permalink":"/ai-engineering-journey/web-development/09-rest-apis"},"next":{"title":"Chapter 11: Databases in Web Applications","permalink":"/ai-engineering-journey/web-development/11-databases-web"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/10-auth.md


const frontMatter = {
	id: '10-auth',
	slug: '/web-development/10-auth',
	title: 'Chapter 10: Authentication and Authorization',
	sidebar_label: 'Chapter 10: Authentication and Authorization',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Authentication and Authorization';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "10.1 Authentication vs Authorization",
  "id": "101-authentication-vs-authorization",
  "level": 2
}, {
  "value": "10.2 Password Hashing with bcrypt",
  "id": "102-password-hashing-with-bcrypt",
  "level": 2
}, {
  "value": "10.3 JWT Authentication",
  "id": "103-jwt-authentication",
  "level": 2
}, {
  "value": "10.4 OAuth 2.0 with Passport.js",
  "id": "104-oauth-20-with-passportjs",
  "level": 2
}, {
  "value": "10.5 Role-Based Access Control",
  "id": "105-role-based-access-control",
  "level": 2
}, {
  "value": "10.6 API Key Authentication",
  "id": "106-api-key-authentication",
  "level": 2
}, {
  "value": "10.7 Session Management Dashboard",
  "id": "107-session-management-dashboard",
  "level": 2
}, {
  "value": "10.8 Multi-Factor Authentication with TOTP",
  "id": "108-multi-factor-authentication-with-totp",
  "level": 2
}, {
  "value": "Session Management Best Practices",
  "id": "session-management-best-practices",
  "level": 3
}, {
  "value": "Passwordless Authentication with WebAuthn",
  "id": "passwordless-authentication-with-webauthn",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: JWT Token Rotator &amp; Password Strength Meter",
  "id": "typescript-jwt-token-rotator--password-strength-meter",
  "level": 3
}, {
  "value": "TypeScript Implementation: JWT Encoder/Decoder, OAuth2 PKCE, bcrypt-Style Hash",
  "id": "typescript-implementation-jwt-encoderdecoder-oauth2-pkce-bcrypt-style-hash",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Projects",
  "id": "application-projects",
  "level": 3
}, {
  "value": "Challenge Project",
  "id": "challenge-project",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    summary: "summary",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-10-authentication-and-authorization",
        children: "Chapter 10: Authentication and Authorization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/09-rest-apis",
          children: "09-rest-apis"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/11-databases-web",
          children: "11-databases-web"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Authentication verifies identity; authorization determines what an authenticated user can access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " bcrypt with 12+ salt rounds hashes passwords with built-in salting to resist rainbow table attacks."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth vs Auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication verifies identity; authorization controls access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check auth first, then authz — never skip either step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt with salt rounds makes rainbow table attacks infeasible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use 12+ salt rounds — higher is slower but more resistant to GPU cracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JWT Tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless access tokens (short-lived) and refresh tokens (long-lived)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep access tokens to 15min, rotate refresh tokens on each use to detect theft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegated authorization via third-party providers (Google, GitHub)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Passport.js strategies for standardized social login integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role-based access control maps permissions to roles, not users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define roles as enums with explicit permission matrices for each role"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MFA/TOTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-based one-time passwords add a second factor beyond passwords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store TOTP secrets encrypted; provide recovery codes for account recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " JWTs provide stateless authentication with short-lived access tokens and longer-lived refresh tokens."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Auth vs Authz]\n    B[Password Hashing with bcrypt]\n    A --> B\n    C[JWT Access & Refresh Tokens]\n    B --> C\n    D[Login & Registration Routes]\n    C --> D\n    E[Token Refresh & Rotation]\n    D --> E\n    F[OAuth 2.0 with Passport.js]\n    E --> F\n    G[Role-Based Access Control]\n    F --> G\n    H[Multi-Factor Authentication]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement session-based and token-based authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create JWT-based authentication with refresh tokens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement OAuth 2.0 flows for third-party authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply role-based access control (RBAC) and permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure passwords using bcrypt and follow security best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement multi-factor authentication with TOTP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-authentication-vs-authorization",
      children: "10.1 Authentication vs Authorization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " OAuth 2.0 delegates identity verification to trusted providers like Google and GitHub."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/10-authentication.png",
        alt: "Authentication and Authorization Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication"
      }), " verifies who a user is (identity). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), " determines what they can access (permissions)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Authentication: verifying identity\nfunction authenticate(req: Request, res: Response, next: NextFunction) {\n  const token = req.headers.authorization?.split(\" \")[1];\n  if (!token) return res.status(401).json({ message: \"Unauthenticated\" });\n  try {\n    const payload = jwt.verify(token, process.env.JWT_SECRET!);\n    req.user = payload;\n    next();\n  } catch {\n    res.status(401).json({ message: \"Invalid token\" });\n  }\n}\n\n// Authorization: checking permissions\nfunction authorize(...roles: string[]) {\n  return (req: Request, res: Response, next: NextFunction) => {\n    if (!roles.includes(req.user.role)) {\n      return res.status(403).json({ message: \"Forbidden\" });\n    }\n    next();\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-password-hashing-with-bcrypt",
      children: "10.2 Password Hashing with bcrypt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " RBAC assigns permissions to roles and roles to users, simplifying permission management at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import bcrypt from \"bcryptjs\";\n\nconst SALT_ROUNDS = 12;\n\nexport async function hashPassword(password: string): Promise<string> {\n  return bcrypt.hash(password, SALT_ROUNDS);\n}\n\nexport async function verifyPassword(\n  password: string,\n  hash: string\n): Promise<boolean> {\n  return bcrypt.compare(password, hash);\n}\n\n// Usage\nconst passwordHash = await hashPassword(\"userPassword123\");\nconst isValid = await verifyPassword(\"userPassword123\", passwordHash);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-jwt-authentication",
      children: "10.3 JWT Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " TOTP-based multi-factor authentication adds a critical second layer of security beyond passwords."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import jwt from \"jsonwebtoken\";\nimport { z } from \"zod\";\n\nconst ACCESS_SECRET = process.env.JWT_SECRET!;\nconst REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;\n\ninterface TokenPayload {\n  userId: string;\n  role: string;\n}\n\nexport function generateAccessToken(payload: TokenPayload): string {\n  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: \"15m\" });\n}\n\nexport function generateRefreshToken(payload: TokenPayload): string {\n  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: \"7d\" });\n}\n\nexport function verifyAccessToken(token: string): TokenPayload {\n  return jwt.verify(token, ACCESS_SECRET) as TokenPayload;\n}\n\n// Login route\nrouter.post(\"/login\", async (req, res, next) => {\n  try {\n    const { email, password } = loginSchema.parse(req.body);\n    const user = await prisma.user.findUnique({ where: { email } });\n    if (!user || !(await verifyPassword(password, user.passwordHash))) {\n      return res.status(401).json({ message: \"Invalid credentials\" });\n    }\n\n    const payload: TokenPayload = { userId: user.id, role: user.role };\n    const accessToken = generateAccessToken(payload);\n    const refreshToken = generateRefreshToken(payload);\n\n    // Store refresh token hash for rotation\n    const refreshHash = await hashPassword(refreshToken);\n    await prisma.session.create({\n      data: { userId: user.id, refreshHash, expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },\n    });\n\n    res.json({\n      data: { user: { id: user.id, email: user.email, name: user.name } },\n      tokens: { accessToken, refreshToken },\n    });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// Token refresh with rotation\nrouter.post(\"/refresh\", async (req, res, next) => {\n  try {\n    const { refreshToken } = req.body;\n    const payload = verifyAccessToken(refreshToken); // Reuse verify, but in practice use separate secret\n\n    // Validate session exists\n    const sessions = await prisma.session.findMany({\n      where: { userId: payload.userId },\n    });\n    const valid = await Promise.any(\n      sessions.map((s) => verifyPassword(refreshToken, s.refreshHash))\n    ).catch(() => false);\n    if (!valid) {\n      // Possible token theft - revoke all sessions\n      await prisma.session.deleteMany({ where: { userId: payload.userId } });\n      return res.status(401).json({ message: \"Token revoked\" });\n    }\n\n    const newPayload: TokenPayload = { userId: payload.userId, role: payload.role };\n    const newAccessToken = generateAccessToken(newPayload);\n    const newRefreshToken = generateRefreshToken(newPayload);\n\n    res.json({\n      data: { accessToken: newAccessToken, refreshToken: newRefreshToken },\n    });\n  } catch (err) {\n    next(err);\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-oauth-20-with-passportjs",
      children: "10.4 OAuth 2.0 with Passport.js"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import passport from \"passport\";\nimport { Strategy as GoogleStrategy } from \"passport-google-oauth20\";\n\npassport.use(\n  new GoogleStrategy(\n    {\n      clientID: process.env.GOOGLE_CLIENT_ID!,\n      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,\n      callbackURL: \"/api/auth/google/callback\",\n      scope: [\"profile\", \"email\"],\n    },\n    async (_accessToken, _refreshToken, profile, done) => {\n      let user = await prisma.user.findUnique({\n        where: { googleId: profile.id },\n      });\n      if (!user) {\n        user = await prisma.user.create({\n          data: {\n            googleId: profile.id,\n            email: profile.emails![0].value,\n            name: profile.displayName,\n            avatar: profile.photos?.[0]?.value,\n          },\n        });\n      }\n      done(null, user);\n    }\n  )\n);\n\n// Routes\nrouter.get(\"/google\", passport.authenticate(\"google\"));\nrouter.get(\n  \"/google/callback\",\n  passport.authenticate(\"google\", { session: false }),\n  (req, res) => {\n    const user = req.user as User;\n    const accessToken = generateAccessToken({ userId: user.id, role: user.role });\n    res.redirect(`http://localhost:3000/auth/callback?token=${accessToken}`);\n  }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-role-based-access-control",
      children: "10.5 Role-Based Access Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum Role {\n  Admin = \"ADMIN\",\n  Manager = \"MANAGER\",\n  Member = \"MEMBER\",\n  Viewer = \"VIEWER\",\n}\n\ninterface Permission {\n  resource: string;\n  action: \"create\" | \"read\" | \"update\" | \"delete\" | \"manage\";\n}\n\nconst rolePermissions: Record<Role, Permission[]> = {\n  [Role.Admin]: [\n    { resource: \"*\", action: \"manage\" },\n  ],\n  [Role.Manager]: [\n    { resource: \"project\", action: \"create\" },\n    { resource: \"project\", action: \"read\" },\n    { resource: \"project\", action: \"update\" },\n    { resource: \"task\", action: \"manage\" },\n    { resource: \"member\", action: \"read\" },\n  ],\n  [Role.Member]: [\n    { resource: \"task\", action: \"create\" },\n    { resource: \"task\", action: \"read\" },\n    { resource: \"task\", action: \"update\" },\n    { resource: \"project\", action: \"read\" },\n  ],\n  [Role.Viewer]: [\n    { resource: \"task\", action: \"read\" },\n    { resource: \"project\", action: \"read\" },\n  ],\n};\n\nfunction hasPermission(userRole: Role, resource: string, action: string): boolean {\n  const permissions = rolePermissions[userRole];\n  return permissions.some(\n    (p) =>\n      (p.resource === \"*\" || p.resource === resource) &&\n      (p.action === \"manage\" || p.action === action)\n  );\n}\n\n// Authorization middleware\nfunction requirePermission(resource: string, action: string) {\n  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {\n    if (!hasPermission(req.user.role, resource, action)) {\n      return res.status(403).json({ message: \"Insufficient permissions\" });\n    }\n    next();\n  };\n}\n\n// Usage\nrouter.delete(\n  \"/api/projects/:id\",\n  authenticate,\n  requirePermission(\"project\", \"delete\"),\n  deleteProject\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-api-key-authentication",
      children: "10.6 API Key Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For machine-to-machine communication, API keys provide a simple authentication mechanism."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import crypto from \"crypto\";\n\ninterface ApiKey {\n  key: string;\n  name: string;\n  scopes: string[];\n  expiresAt: Date | null;\n  createdAt: Date;\n}\n\n// Generate a secure API key\nfunction generateApiKey(): { key: string; hash: string } {\n  const key = `tf_${crypto.randomBytes(32).toString(\"hex\")}`;\n  const hash = crypto.createHash(\"sha256\").update(key).digest(\"hex\");\n  return { key, hash };\n}\n\n// API key authentication middleware\nasync function authenticateApiKey(req: Request, res: Response, next: NextFunction) {\n  const apiKey = req.headers[\"x-api-key\"] as string;\n  if (!apiKey) {\n    return res.status(401).json({ message: \"API key required\" });\n  }\n\n  const hash = crypto.createHash(\"sha256\").update(apiKey).digest(\"hex\");\n  const keyRecord = await prisma.apiKey.findUnique({ where: { hash } });\n\n  if (!keyRecord || (keyRecord.expiresAt && keyRecord.expiresAt < new Date())) {\n    return res.status(401).json({ message: \"Invalid or expired API key\" });\n  }\n\n  req.user = { id: keyRecord.userId, scopes: keyRecord.scopes };\n  next();\n}\n\n// Scope-based authorization\nfunction requireScope(...scopes: string[]) {\n  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {\n    const hasScope = scopes.some((s) => req.user.scopes?.includes(s));\n    if (!hasScope) {\n      return res.status(403).json({ message: \"Insufficient scope\" });\n    }\n    next();\n  };\n}\n\n// Routes\nrouter.get(\"/api/orders\", authenticateApiKey, requireScope(\"orders:read\"), getOrders);\nrouter.post(\"/api/orders\", authenticateApiKey, requireScope(\"orders:write\"), createOrder);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "107-session-management-dashboard",
      children: "10.7 Session Management Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// List active sessions for a user\nrouter.get(\"/api/sessions\", authenticate, async (req, res) => {\n  const sessions = await prisma.session.findMany({\n    where: { userId: req.user.userId },\n    select: {\n      id: true,\n      createdAt: true,\n      lastUsedAt: true,\n      ipAddress: true,\n      userAgent: true,\n    },\n    orderBy: { lastUsedAt: \"desc\" },\n  });\n\n  res.json({\n    data: sessions.map((s) => ({\n      ...s,\n      isCurrentSession: s.id === req.session.id,\n    })),\n  });\n});\n\n// Revoke a specific session\nrouter.delete(\"/api/sessions/:id\", authenticate, async (req, res) => {\n  const session = await prisma.session.findFirst({\n    where: { id: req.params.id, userId: req.user.userId },\n  });\n\n  if (!session) {\n    return res.status(404).json({ message: \"Session not found\" });\n  }\n\n  await prisma.session.delete({ where: { id: req.params.id } });\n  res.json({ message: \"Session revoked\" });\n});\n\n// Revoke all sessions except current\nrouter.post(\"/api/sessions/revoke-all\", authenticate, async (req, res) => {\n  await prisma.session.deleteMany({\n    where: { userId: req.user.userId, id: { not: req.session.id } },\n  });\n  res.json({ message: \"All other sessions revoked\" });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "108-multi-factor-authentication-with-totp",
      children: "10.8 Multi-Factor Authentication with TOTP"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { authenticator } from \"otplib\";\nimport QRCode from \"qrcode\";\n\n// Setup MFA\nrouter.post(\"/mfa/setup\", authenticate, async (req, res) => {\n  const secret = authenticator.generateSecret();\n  const otpauth = authenticator.keyuri(req.user.email, \"TaskFlow\", secret);\n\n  // Store secret temporarily\n  req.user.mfaSecret = secret;\n\n  const qrCode = await QRCode.toDataURL(otpauth);\n  res.json({ data: { secret, qrCode } });\n});\n\n// Verify and enable MFA\nrouter.post(\"/mfa/verify\", authenticate, async (req, res) => {\n  const { token } = z.object({ token: z.string().length(6) }).parse(req.body);\n  const isValid = authenticator.verify({ token, secret: req.user.mfaSecret! });\n  if (!isValid) {\n    return res.status(400).json({ message: \"Invalid token\" });\n  }\n  await prisma.user.update({\n    where: { id: req.user.userId },\n    data: { mfaSecret: req.user.mfaSecret, mfaEnabled: true },\n  });\n  res.json({ message: \"MFA enabled\" });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!TIP]\nAlways rotate refresh tokens on each use. If a stolen refresh token is used alongside the legitimate one, revoke all sessions for that user immediately."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nNever store plaintext passwords or use weak hashing like MD5/SHA1. bcrypt, scrypt, or argon2 are the only acceptable password hashing algorithms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nAuthentication failures should return 401 Unauthorized. Authorization failures (insufficient permissions) should return 403 Forbidden. Never confuse these two status codes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-management-best-practices",
      children: "Session Management Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Session token rotation — re-issue after privilege elevation\nfunction rotateSession(req: Request, res: Response) {\n  const oldSid = req.sessionID;\n  req.session.regenerate((err) => {\n    if (err) return res.status(500).end();\n    req.session.userId = res.locals.userId;\n    req.session.role = res.locals.role;\n    sessionStore.destroy(oldSid);\n    res.json({ rotated: true });\n  });\n}\n\n// Session fingerprinting — detect hijacking via user-agent + IP mismatch\nfunction sessionFingerprint(req: Request): string {\n  const ua = req.headers[\"user-agent\"] ?? \"\";\n  const ip = req.ip ?? \"\";\n  return crypto.createHash(\"sha256\").update(`${ua}|${ip}`).digest(\"hex\");\n}\n\napp.use((req, res, next) => {\n  if (req.session.fingerprint && req.session.fingerprint !== sessionFingerprint(req)) {\n    req.session.destroy(() => res.status(401).json({ error: \"Session hijacked\" }));\n    return;\n  }\n  req.session.fingerprint = sessionFingerprint(req);\n  next();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "passwordless-authentication-with-webauthn",
      children: "Passwordless Authentication with WebAuthn"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebAuthn replaces passwords with public-key cryptography."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Registration (browser side)\nconst credential = await navigator.credentials.create({\n  publicKey: {\n    challenge: new Uint8Array(challenge),\n    rp: { name: \"TaskFlow\", id: \"taskflow.example.com\" },\n    user: {\n      id: new Uint8Array(userId),\n      name: \"alice@example.com\",\n      displayName: \"Alice Johnson\",\n    },\n    pubKeyCredParams: [{ type: \"public-key\", alg: -7 }], // ES256\n  },\n});\n\n// Authentication (server side)\nconst assertion = await navigator.credentials.get({\n  publicKey: {\n    challenge: new Uint8Array(challenge),\n    allowCredentials: credentialIds.map((id) => ({\n      type: \"public-key\",\n      id: new Uint8Array(id),\n    })),\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication vs Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifies WHO the user is"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines WHAT they can do"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access Token vs Refresh Token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-lived (15min), sent with every request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-lived (7d), used only to get new access tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt vs SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow, salted, resistant to GPU cracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, unsalted, trivially rainbow-tabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session vs JWT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side storage, easy to revoke"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless, no server storage needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.0 vs SAML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern, REST-based, token-focused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Older, XML-based, enterprise-focused"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JWT Parts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header (alg/typ), Payload (claims), Signature (verify integrity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth Status Codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "401 Unauthorized (not logged in), 403 Forbidden (insufficient role)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bcrypt.hash(password, 12)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bcrypt.compare(password, hash)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.0 Roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource Owner, Client, Authorization Server, Resource Server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOTP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "authenticator.generateSecret()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "authenticator.verify({token, secret})"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.0 with Google/GitHub providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frictionless user onboarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC with Admin/Editor/Viewer roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Granular control over sensitive actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Banking App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA + JWT with short access token lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in depth for financial data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API key auth for machine-to-machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No user interaction needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant SaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC per organization with role hierarchies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated permissions per workspace"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. What is the difference between 401 Unauthorized and 403 Forbidden?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They are synonyms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 401 means not authenticated, 403 means not authorized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 401 means invalid token, 403 means expired token"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 401 is for APIs, 403 is for web pages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) 401 indicates the client is not authenticated (no valid credentials). 403 indicates the client is authenticated but lacks permission for the requested resource."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. Why should refresh tokens be rotated?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To reduce server storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To detect token theft — if a stolen token is used, the old one becomes invalid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To comply with GDPR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To improve API performance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Refresh token rotation invalidates the old token each time a new one is issued. If a stolen token is used, the legitimate user's next refresh attempt will fail, signaling theft."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. What salt round count is recommended for bcrypt in production?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 12"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "C) 12 or higher. The cost factor is exponential — 12 rounds (2^12 iterations) balances security and performance for production use."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. Which OAuth 2.0 flow is recommended for single-page applications?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Authorization Code with PKCE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Implicit Flow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Client Credentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Resource Owner Password"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A) Authorization Code with PKCE (Proof Key for Code Exchange) is the recommended flow for SPAs and mobile apps as it prevents authorization code interception attacks."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-jwt-token-rotator--password-strength-meter",
      children: "TypeScript: JWT Token Rotator & Password Strength Meter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class JWTManager {\n  private static base64UrlEncode(data: string): string {\n    return btoa(data).replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n  }\n  private static base64UrlDecode(str: string): string {\n    return atob(str.replace(/-/g, \"+\").replace(/_/g, \"/\"));\n  }\n  static createToken(payload: Record<string, any>, secret: string, expiresIn: number): string {\n    const header = this.base64UrlEncode(JSON.stringify({ alg: \"HS256\", typ: \"JWT\" }));\n    const now = Math.floor(Date.now() / 1000);\n    const body = this.base64UrlEncode(JSON.stringify({ ...payload, iat: now, exp: now + expiresIn }));\n    const sig = this.base64UrlEncode(btoa(secret + \".\" + header + \".\" + body));\n    return `${header}.${body}.${sig}`;\n  }\n  static isExpired(token: string): boolean {\n    try {\n      const payload = JSON.parse(this.base64UrlDecode(token.split(\".\")[1]));\n      return payload.exp < Math.floor(Date.now() / 1000);\n    } catch { return true; }\n  }\n  static rotate(oldToken: string, secret: string, newExpiresIn: number): string {\n    if (JWTManager.isExpired(oldToken)) throw new Error(\"Cannot rotate expired token\");\n    const payload = JSON.parse(JWTManager.base64UrlDecode(oldToken.split(\".\")[1]));\n    return JWTManager.createToken(payload, secret, newExpiresIn);\n  }\n}\n\nclass PasswordMeter {\n  static strength(pw: string): { score: number; label: string; feedback: string[] } {\n    let score = 0;\n    const feedback: string[] = [];\n    if (pw.length >= 8) score += 20; else feedback.push(\"At least 8 characters\");\n    if (/[A-Z]/.test(pw)) score += 20; else feedback.push(\"Add an uppercase letter\");\n    if (/[a-z]/.test(pw)) score += 20; else feedback.push(\"Add a lowercase letter\");\n    if (/\\d/.test(pw)) score += 20; else feedback.push(\"Add a digit\");\n    if (/[^A-Za-z0-9]/.test(pw)) score += 20; else feedback.push(\"Add a special character\");\n    const label = score >= 80 ? \"Strong\" : score >= 60 ? \"Moderate\" : score >= 40 ? \"Weak\" : \"Very weak\";\n    return { score, label, feedback };\n  }\n}\n\nconsole.log(\"Token:\", JWTManager.createToken({ userId: 1 }, \"secret\", 3600).slice(0, 30) + \"...\");\nconsole.log(\"Password:\", PasswordMeter.strength(\"Hello123!\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-jwt-encoderdecoder-oauth2-pkce-bcrypt-style-hash",
      children: "TypeScript Implementation: JWT Encoder/Decoder, OAuth2 PKCE, bcrypt-Style Hash"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class JWTEncoder {\n    private static base64UrlEncode(data: string): string {\n        return Buffer.from(data).toString(\"base64url\").replace(/=+$/, \"\");\n    }\n\n    private static base64UrlDecode(data: string): string {\n        return Buffer.from(data, \"base64url\").toString(\"utf8\");\n    }\n\n    private static simpleHash(payload: string, secret: string): string {\n        let hash = 0;\n        const combined = payload + secret;\n        for (let i = 0; i < combined.length; i++) {\n            const char = combined.charCodeAt(i);\n            hash = ((hash << 5) - hash) + char;\n            hash |= 0;\n        }\n        return Math.abs(hash).toString(16);\n    }\n\n    static encode(payload: Record<string, any>, secret: string, expiresInSec: number = 3600): string {\n        const header = this.base64UrlEncode(JSON.stringify({ alg: \"HS256\", typ: \"JWT\" }));\n        const body = { ...payload, iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + expiresInSec };\n        const payloadEncoded = this.base64UrlEncode(JSON.stringify(body));\n        const signature = this.simpleHash(`${header}.${payloadEncoded}`, secret);\n        return `${header}.${payloadEncoded}.${signature}`;\n    }\n\n    static decode(token: string): { header: any; payload: any; valid: boolean } {\n        const parts = token.split(\".\");\n        if (parts.length !== 3) return { header: null, payload: null, valid: false };\n        try {\n            const header = JSON.parse(this.base64UrlDecode(parts[0]));\n            const payload = JSON.parse(this.base64UrlDecode(parts[1]));\n            return { header, payload, valid: true };\n        } catch { return { header: null, payload: null, valid: false }; }\n    }\n\n    static verify(token: string, secret: string): { valid: boolean; reason?: string } {\n        const parts = token.split(\".\");\n        if (parts.length !== 3) return { valid: false, reason: \"Malformed token\" };\n        const signature = this.simpleHash(`${parts[0]}.${parts[1]}`, secret);\n        if (signature !== parts[2]) return { valid: false, reason: \"Invalid signature\" };\n        const payload = JSON.parse(this.base64UrlDecode(parts[1]));\n        if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return { valid: false, reason: \"Token expired\" };\n        return { valid: true };\n    }\n}\n\nclass OAuth2PKCESimulator {\n    static generateCodeVerifier(length: number = 43): string {\n        const chars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~\";\n        let verifier = \"\";\n        for (let i = 0; i < length; i++) verifier += chars[Math.floor(Math.random() * chars.length)];\n        return verifier;\n    }\n\n    static generateCodeChallengeSHA256(verifier: string): string {\n        let hash = 0;\n        for (let i = 0; i < verifier.length; i++) {\n            hash = ((hash << 5) - hash) + verifier.charCodeAt(i);\n            hash |= 0;\n        }\n        const hex = Math.abs(hash).toString(16);\n        return Buffer.from(hex).toString(\"base64url\").replace(/=+$/, \"\");\n    }\n\n    static simulateFlow(): { authUrl: string; code: string; token: string; refresh: string } {\n        const verifier = this.generateCodeVerifier();\n        const challenge = this.generateCodeChallengeSHA256(verifier);\n        const state = Math.random().toString(36).slice(2);\n        const authUrl = `https://auth.example.com/authorize?response_type=code&client_id=app&redirect_uri=https://app.example/callback&code_challenge=${challenge}&code_challenge_method=S256&state=${state}`;\n        const code = Math.random().toString(36).slice(2);\n        const token = JWTEncoder.encode({ sub: \"user123\", scope: \"openid profile\" }, \"client_secret\", 3600);\n        const refresh = JWTEncoder.encode({ sub: \"user123\", type: \"refresh\" }, \"refresh_secret\", 604800);\n        return { authUrl, code, token, refresh };\n    }\n}\n\nclass BcryptStyleHasher {\n    static hash(password: string, rounds: number = 10): { hash: string; salt: string; rounds: number } {\n        const chars = \"./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n        let salt = \"\";\n        for (let i = 0; i < 22; i++) salt += chars[Math.floor(Math.random() * chars.length)];\n        let hash = 0;\n        for (let i = 0; i < password.length; i++) {\n            hash = ((hash << 5) - hash) + password.charCodeAt(i);\n            hash |= 0;\n        }\n        for (let r = 0; r < Math.pow(2, rounds); r++) {\n            for (let i = 0; i < password.length; i++) {\n                hash = ((hash << 5) - hash) + password.charCodeAt(i) + salt.charCodeAt(i % salt.length);\n                hash |= 0;\n            }\n        }\n        const hashStr = Math.abs(hash).toString(36);\n        return { hash: hashStr, salt, rounds };\n    }\n\n    static compare(password: string, storedHash: string, salt: string, rounds: number): boolean {\n        const { hash } = this.hash(password, rounds);\n        return hash === storedHash;\n    }\n}\n\nclass TOTPGenerator {\n    static generate(secret: string, timeStep: number = 30): string {\n        const counter = Math.floor(Date.now() / 1000 / timeStep);\n        let hash = 0;\n        const combined = secret + counter.toString();\n        for (let i = 0; i < combined.length; i++) {\n            hash = ((hash << 5) - hash) + combined.charCodeAt(i);\n            hash |= 0;\n        }\n        const otp = String(Math.abs(hash) % 1000000).padStart(6, \"0\");\n        return otp;\n    }\n\n    static verify(token: string, secret: string, window: number = 1): boolean {\n        for (let i = -window; i <= window; i++) {\n            const counter = Math.floor(Date.now() / 1000 / 30) + i;\n            let hash = 0;\n            const combined = secret + counter.toString();\n            for (let j = 0; j < combined.length; j++) { hash = ((hash << 5) - hash) + combined.charCodeAt(j); hash |= 0; }\n            if (String(Math.abs(hash) % 1000000).padStart(6, \"0\") === token) return true;\n        }\n        return false;\n    }\n}\n\n// Demo\nconst token = JWTEncoder.encode({ userId: 1, role: \"admin\" }, \"mysecret\", 3600);\nconsole.log(\"JWT:\", token.slice(0, 30) + \"...\");\nconsole.log(\"Decoded:\", JWTEncoder.decode(token));\nconsole.log(\"Verify:\", JWTEncoder.verify(token, \"mysecret\"));\n\nconst flow = OAuth2PKCESimulator.simulateFlow();\nconsole.log(\"PKCE Auth URL:\", flow.authUrl.slice(0, 60) + \"...\");\n\nconst pwd = BcryptStyleHasher.hash(\"MyPassword123!\", 10);\nconsole.log(\"Hash:\", pwd.hash.slice(0, 20) + \"...\");\nconsole.log(\"Compare:\", BcryptStyleHasher.compare(\"MyPassword123!\", pwd.hash, pwd.salt, pwd.rounds));\n\nconst totp = TOTPGenerator.generate(\"JBSWY3DPEHPK3PXP\");\nconsole.log(\"TOTP:\", totp);\nconsole.log(\"TOTP verify:\", TOTPGenerator.verify(totp, \"JBSWY3DPEHPK3PXP\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// auth\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'auth', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Authentication verifies identity while authorization controls access. JWTs provide stateless authentication with short-lived access tokens and long-lived refresh tokens for secure session management. bcrypt salts and hashes passwords, OAuth 2.0 enables third-party login, RBAC structures permissions by role, and TOTP adds an extra security layer with multi-factor authentication."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between authentication and authorization?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why should refresh tokens be rotated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does bcrypt protect against rainbow table attacks?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add API key authentication for service-to-service communication"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement session invalidation on password change"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add rate limiting per user based on their authentication tier"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement API key authentication with granular scopes (read, write, admin) for a public REST API."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a session management dashboard that lists active sessions with device info and provides a \"revoke all other sessions\" button."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a complete auth system with Google OAuth, MFA/TOTP, role-based permissions (Admin/Editor/Viewer), session management dashboard showing active sessions with revoke capability, and automatic lockout after failed login attempts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never store plaintext passwords"
        }), " — use bcrypt with 12+ salt rounds. Argon2id is even better if your platform supports it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Short-lived access tokens + rotating refresh tokens"
        }), " — keep access tokens at 15min, rotate refresh tokens on each use to detect theft."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always check auth before authz"
        }), " — authenticate the user first, then check permissions. Never skip either step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use SameSite Strict cookies"
        }), " — prevents CSRF on modern browsers without needing token-based CSRF protection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log auth events"
        }), " — failed logins, password changes, MFA enrollments, and session revocations should all be audited."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);