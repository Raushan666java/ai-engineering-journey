"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[623],{

/***/ 83046
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_05_fastapi_backend_05_authentication_and_authz_md_9fc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-05-fastapi-backend-05-authentication-and-authz-md-9fc.json
const site_docs_courses_ai_engineering_placement_05_fastapi_backend_05_authentication_and_authz_md_9fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fastapi-backend/05-authentication-and-authz","title":"Authentication and Authorization — JWT, OAuth2, and RBAC","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz.md","sourceDirName":"courses/ai-engineering-placement/05-fastapi-backend","slug":"/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":73,"frontMatter":{"id":"05-authentication-and-authz","slug":"/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz","title":"Authentication and Authorization — JWT, OAuth2, and RBAC","sidebar_label":"Authentication and Authorization — JWT, OAuth2, and RBAC","sidebar_position":73},"sidebar":"placementSidebar","previous":{"title":"Dependency Injection — Reusable Components and FastAPI DI System","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/04-dependency-injection"},"next":{"title":"Database with SQLAlchemy — ORM, Migrations, and Repository Pattern","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz.md


const frontMatter = {
	id: '05-authentication-and-authz',
	slug: '/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz',
	title: 'Authentication and Authorization — JWT, OAuth2, and RBAC',
	sidebar_label: 'Authentication and Authorization — JWT, OAuth2, and RBAC',
	sidebar_position: 73
};
const contentTitle = 'Authentication and Authorization — JWT, OAuth2, and RBAC';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "5.1 Authentication vs Authorization",
  "id": "51-authentication-vs-authorization",
  "level": 2
}, {
  "value": "5.2 Password Hashing",
  "id": "52-password-hashing",
  "level": 2
}, {
  "value": "5.3 JWT Tokens",
  "id": "53-jwt-tokens",
  "level": 2
}, {
  "value": "5.4 OAuth2 with FastAPI",
  "id": "54-oauth2-with-fastapi",
  "level": 2
}, {
  "value": "5.5 Role-Based Access Control",
  "id": "55-role-based-access-control",
  "level": 2
}, {
  "value": "5.6 Session Management",
  "id": "56-session-management",
  "level": 2
}, {
  "value": "5.7 Security Headers and Rate Limiting",
  "id": "57-security-headers-and-rate-limiting",
  "level": 2
}, {
  "value": "5.8 Testing Auth Flows",
  "id": "58-testing-auth-flows",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
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
        id: "authentication-and-authorization--jwt-oauth2-and-rbac",
        children: "Authentication and Authorization — JWT, OAuth2, and RBAC"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement JWT token generation, validation, and refresh flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure OAuth2 with password flow and scopes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build role-based access control (RBAC) with permission checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure endpoints with dependency injection for authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle password hashing, session management, and CSRF protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply security best practices: rate limiting, HTTPS, secure headers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastAPI is the modern Python framework for building AI APIs. Its async support, automatic documentation, and type safety make it ideal for serving ML models at scale. This module covers production-grade API development."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding authentication and authz is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how authentication and authz works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication vs Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity verification vs access permission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt/argon2, salting, verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT Tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access tokens, refresh tokens, claims"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2 with FastAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password flow, scopes, security scheme"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role-Based Access Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roles, permissions, endpoint guards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token refresh, revocation, blacklist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS, CORS, CSP, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing Auth Flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock users, token generation in tests"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Auth Concepts] --> B[Password Hashing]\r\n    B --> C[JWT Generation]\r\n    C --> D[OAuth2 Flow]\r\n    D --> E[RBAC]\r\n    E --> F[Session Mgmt]\r\n    F --> G[Security Headers]\r\n    G --> H[Testing Auth]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-authentication-vs-authorization",
      children: "5.1 Authentication vs Authorization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication"
      }), " verifies who you are. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), " verifies what you can do."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    User -->|Login| Auth[Authentication]\r\n    Auth -->|\"Who am I?\"| JWT[JWT Token]\r\n    JWT -->|\"What can I do?\"| AuthZ[Authorization]\r\n    AuthZ -->|Role Check| Resource[Protected Resource]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends, HTTPException, status\r\nfrom fastapi.security import OAuth2PasswordBearer\r\n\r\napp = FastAPI()\r\n\r\n## OAuth2 scheme — tells Swagger UI to show login button\r\noauth2_scheme = OAuth2PasswordBearer(tokenUrl=\"/auth/login\")\r\n\r\n@app.post(\"/auth/login\")\r\nasync def login(username: str, password: str):\r\n    user = authenticate_user(username, password)\r\n    if not user:\r\n        raise HTTPException(status_code=401, detail=\"Invalid credentials\")\r\n    token = create_access_token(user)\r\n    return {\"access_token\": token, \"token_type\": \"bearer\"}\r\n\r\n@app.get(\"/users/me\")\r\nasync def read_users_me(token: str = Depends(oauth2_scheme)):\r\n    # token is extracted from Authorization: Bearer <token>\r\n    user = decode_token(token)\r\n    return user\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Design principles"
      }), ": Authenticate once (login), authorize every request (token validation). Use short-lived access tokens (15 min) with long-lived refresh tokens (7 days) for balance between security and UX."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-password-hashing",
      children: "5.2 Password Hashing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never store passwords in plain text. Use bcrypt or argon2."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from passlib.context import CryptContext\r\nfrom pydantic import BaseModel, EmailStr\r\n\r\n## Password hashing context\r\npwd_context = CryptContext(schemes=[\"bcrypt\"], deprecated=\"auto\")\r\n\r\ndef hash_password(password: str) -> str:\r\n    return pwd_context.hash(password)\r\n\r\ndef verify_password(plain_password: str, hashed_password: str) -> bool:\r\n    return pwd_context.verify(plain_password, hashed_password)\r\n\r\nclass UserCreate(BaseModel):\r\n    username: str\r\n    email: EmailStr\r\n    password: str\r\n\r\nclass UserInDB(BaseModel):\r\n    username: str\r\n    email: EmailStr\r\n    hashed_password: str\r\n    disabled: bool = False\r\n\r\n## Registration\r\n@app.post(\"/auth/register\", status_code=201)\r\nasync def register(user: UserCreate):\r\n    if get_user_by_username(user.username):\r\n        raise HTTPException(status_code=409, detail=\"Username already exists\")\r\n\r\n    hashed = hash_password(user.password)\r\n    user_db = UserInDB(\r\n        username=user.username,\r\n        email=user.email,\r\n        hashed_password=hashed\r\n    )\r\n    await save_user(user_db)\r\n    return {\"message\": \"User created successfully\"}\r\n\r\n## Login\r\n@app.post(\"/auth/login\")\r\nasync def login(user_cred: UserCreate):\r\n    user = get_user_by_username(user_cred.username)\r\n    if not user or not verify_password(user_cred.password, user.hashed_password):\r\n        raise HTTPException(status_code=401, detail=\"Invalid credentials\")\r\n    return {\"access_token\": create_access_token(user), \"token_type\": \"bearer\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Password policies"
      }), ": Minimum 8 characters, require mixed case + numbers + symbols. Use zxcvbn for password strength estimation. Never log passwords or send them in URLs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-jwt-tokens",
      children: "5.3 JWT Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON Web Tokens contain claims encoded in a three-part structure: header.payload.signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import datetime, timedelta, timezone\r\nfrom jose import JWTError, jwt\r\nfrom typing import Optional\r\n\r\n## Configuration\r\nSECRET_KEY = \"your-secret-key-here\"  # Use environment variable!\r\nALGORITHM = \"HS256\"\r\nACCESS_TOKEN_EXPIRE_MINUTES = 30\r\nREFRESH_TOKEN_EXPIRE_DAYS = 7\r\n\r\ndef create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:\r\n    to_encode = data.copy()\r\n    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))\r\n    to_encode.update({\"exp\": expire, \"type\": \"access\"})\r\n    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)\r\n\r\ndef create_refresh_token(data: dict) -> str:\r\n    to_encode = data.copy()\r\n    expire = datetime.now(timezone.utc) + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)\r\n    to_encode.update({\"exp\": expire, \"type\": \"refresh\"})\r\n    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)\r\n\r\ndef decode_token(token: str) -> dict:\r\n    try:\r\n        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])\r\n        return payload\r\n    except JWTError:\r\n        raise HTTPException(status_code=401, detail=\"Invalid or expired token\")\r\n\r\ndef get_current_user(token: str = Depends(oauth2_scheme)) -> UserInDB:\r\n    payload = decode_token(token)\r\n    username = payload.get(\"sub\")\r\n    if username is None:\r\n        raise HTTPException(status_code=401, detail=\"Invalid token claims\")\r\n    user = get_user_by_username(username)\r\n    if user is None:\r\n        raise HTTPException(status_code=401, detail=\"User not found\")\r\n    return user\r\n\r\n## Token refresh endpoint\r\n@app.post(\"/auth/refresh\")\r\nasync def refresh_token(refresh_token: str):\r\n    payload = decode_token(refresh_token)\r\n    if payload.get(\"type\") != \"refresh\":\r\n        raise HTTPException(status_code=401, detail=\"Invalid token type\")\r\n    username = payload.get(\"sub\")\r\n    user = get_user_by_username(username)\r\n    if not user:\r\n        raise HTTPException(status_code=401, detail=\"User not found\")\r\n    return {\r\n        \"access_token\": create_access_token({\"sub\": username}),\r\n        \"refresh_token\": create_refresh_token({\"sub\": username}),\r\n        \"token_type\": \"bearer\"\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JWT best practices"
      }), ": Keep SECRET_KEY in environment variables. Use short access token expiry. Include minimal claims (sub, exp, type). Never store sensitive data in JWT payload (it is base64-encoded, not encrypted)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-oauth2-with-fastapi",
      children: "5.4 OAuth2 with FastAPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastAPI's OAuth2 integration provides automatic Swagger UI authorization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends, HTTPException, status\r\nfrom fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm\r\nfrom pydantic import BaseModel\r\nfrom typing import Optional\r\n\r\napp = FastAPI()\r\n\r\n## OAuth2 scheme — Swagger UI shows \"Authorize\" button\r\noauth2_scheme = OAuth2PasswordBearer(\r\n    tokenUrl=\"/auth/token\",\r\n    scopes={\"me\": \"Read personal info\", \"admin\": \"Admin operations\"}\r\n)\r\n\r\nclass Token(BaseModel):\r\n    access_token: str\r\n    token_type: str\r\n    refresh_token: Optional[str] = None\r\n\r\nclass TokenData(BaseModel):\r\n    username: Optional[str] = None\r\n    scopes: list[str] = []\r\n\r\n## OAuth2 password flow — form-based login\r\n@app.post(\"/auth/token\", response_model=Token)\r\nasync def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):\r\n    user = get_user_by_username(form_data.username)\r\n    if not user or not verify_password(form_data.password, user.hashed_password):\r\n        raise HTTPException(status_code=401, detail=\"Incorrect username or password\")\r\n\r\n    scopes = user.get(\"scopes\", [])\r\n    access_token = create_access_token(\r\n        data={\"sub\": user.username, \"scopes\": scopes}\r\n    )\r\n    return Token(access_token=access_token, token_type=\"bearer\")\r\n\r\n## Scope-based dependency\r\nfrom fastapi.security import SecurityScopes\r\n\r\nasync def get_current_user_with_scopes(\r\n    security_scopes: SecurityScopes,\r\n    token: str = Depends(oauth2_scheme),\r\n):\r\n    payload = decode_token(token)\r\n    token_scopes = payload.get(\"scopes\", [])\r\n    token_data = TokenData(scopes=token_scopes)\r\n\r\n    # Check all required scopes are present\r\n    for scope in security_scopes.scopes:\r\n        if scope not in token_scopes:\r\n            raise HTTPException(\r\n                status_code=403,\r\n                detail=f\"Missing scope: {scope}\",\r\n                headers={\"WWW-Authenticate\": f'Bearer scope=\"{security_scopes.scope_str}\"'}\r\n            )\r\n    return token_data\r\n\r\n@app.get(\"/users/me\", dependencies=[Depends(oauth2_scheme)])\r\nasync def read_users_me(current_user = Depends(get_current_user_with_scopes)):\r\n    return {\"username\": current_user.username, \"scopes\": current_user.scopes}\r\n\r\n@app.post(\"/admin/delete-user\")\r\nasync def admin_delete(\r\n    current_user = Depends(get_current_user_with_scopes),\r\n):\r\n    # Only users with \"admin\" scope can access\r\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-role-based-access-control",
      children: "5.5 Role-Based Access Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RBAC maps roles to permissions and checks them on each request."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends, HTTPException\r\nfrom enum import Enum\r\nfrom typing import Optional\r\n\r\nclass UserRole(str, Enum):\r\n    ADMIN = \"admin\"\r\n    MODERATOR = \"moderator\"\r\n    USER = \"user\"\r\n    GUEST = \"guest\"\r\n\r\n## Permission mapping\r\nROLE_PERMISSIONS = {\r\n    UserRole.ADMIN: [\r\n        \"users:read\", \"users:write\", \"users:delete\",\r\n        \"posts:read\", \"posts:write\", \"posts:delete\",\r\n        \"settings:read\", \"settings:write\"\r\n    ],\r\n    UserRole.MODERATOR: [\r\n        \"users:read\",\r\n        \"posts:read\", \"posts:write\", \"posts:delete\",\r\n    ],\r\n    UserRole.USER: [\r\n        \"users:read\",\r\n        \"posts:read\", \"posts:write\",\r\n    ],\r\n    UserRole.GUEST: [\r\n        \"posts:read\",\r\n    ],\r\n}\r\n\r\ndef has_permission(user: dict, required_permission: str) -> bool:\r\n    role = UserRole(user.get(\"role\", \"guest\"))\r\n    permissions = ROLE_PERMISSIONS.get(role, [])\r\n    return required_permission in permissions\r\n\r\n## Permission dependency factory\r\ndef require_permission(permission: str):\r\n    async def permission_checker(current_user: dict = Depends(get_current_user)):\r\n        if not has_permission(current_user, permission):\r\n            raise HTTPException(status_code=403, detail=f\"Missing permission: {permission}\")\r\n        return current_user\r\n    return permission_checker\r\n\r\n@app.get(\"/posts\")\r\nasync def list_posts(user: dict = Depends(require_permission(\"posts:read\"))):\r\n    return [{\"id\": 1, \"title\": \"Post\"}]\r\n\r\n@app.post(\"/posts\")\r\nasync def create_post(user: dict = Depends(require_permission(\"posts:write\"))):\r\n    return {\"message\": \"Post created\"}\r\n\r\n@app.delete(\"/posts/{post_id}\")\r\nasync def delete_post(post_id: int, user: dict = Depends(require_permission(\"posts:delete\"))):\r\n    return {\"message\": f\"Post {post_id} deleted\"}\r\n\r\n## Multiple permission requirements\r\n@app.get(\"/admin/dashboard\")\r\nasync def admin_dashboard(\r\n    _: dict = Depends(require_permission(\"users:read\")),\r\n    __: dict = Depends(require_permission(\"settings:read\")),\r\n):\r\n    return {\"dashboard\": \"admin\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RBAC design patterns"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use role hierarchy (Admin > Moderator > User > Guest) for inheritance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store permissions as strings like \"resource:action\" for fine-grained control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache roles and permissions in Redis for performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit permission changes with logs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-session-management",
      children: "5.6 Session Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Handle token refresh, revocation, and blacklisting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import datetime, timedelta, timezone\r\nfrom typing import Optional\r\nimport redis\r\n\r\nredis_client = redis.Redis(host=\"localhost\", port=6379, decode_responses=True)\r\n\r\nclass TokenManager:\r\n    def __init__(self):\r\n        self.blacklist_prefix = \"token_blacklist:\"\r\n        self.refresh_prefix = \"refresh_token:\"\r\n\r\n    def blacklist_access_token(self, token: str, expires_in: int = 900):\r\n        \"\"\"Blacklist a token until its natural expiry.\"\"\"\r\n        payload = decode_token(token)\r\n        exp = payload.get(\"exp\", datetime.now(timezone.utc).timestamp())\r\n        ttl = max(0, int(exp - datetime.now(timezone.utc).timestamp()))\r\n        redis_client.setex(f\"{self.blacklist_prefix}{token}\", ttl, \"blacklisted\")\r\n\r\n    def is_blacklisted(self, token: str) -> bool:\r\n        return bool(redis_client.exists(f\"{self.blacklist_prefix}{token}\"))\r\n\r\n    def store_refresh_token(self, user_id: str, refresh_token: str):\r\n        redis_client.setex(\r\n            f\"{self.refresh_prefix}{user_id}\",\r\n            timedelta(days=7),\r\n            refresh_token\r\n        )\r\n\r\n    def validate_refresh_token(self, user_id: str, refresh_token: str) -> bool:\r\n        stored = redis_client.get(f\"{self.refresh_prefix}{user_id}\")\r\n        return stored == refresh_token\r\n\r\n    def revoke_all_user_tokens(self, user_id: str):\r\n        redis_client.delete(f\"{self.refresh_prefix}{user_id}\")\r\n\r\ntoken_manager = TokenManager()\r\n\r\n## Logout — blacklist current token\r\n@app.post(\"/auth/logout\")\r\nasync def logout(token: str = Depends(oauth2_scheme)):\r\n    token_manager.blacklist_access_token(token)\r\n    return {\"message\": \"Logged out successfully\"}\r\n\r\n## Protected endpoint with blacklist check\r\nasync def get_current_user_secure(\r\n    token: str = Depends(oauth2_scheme)\r\n) -> UserInDB:\r\n    if token_manager.is_blacklisted(token):\r\n        raise HTTPException(status_code=401, detail=\"Token has been revoked\")\r\n    payload = decode_token(token)\r\n    user = get_user_by_username(payload.get(\"sub\"))\r\n    return user\r\n\r\n## Force logout all sessions\r\n@app.post(\"/admin/revoke-user/{user_id}\")\r\nasync def revoke_user_sessions(\r\n    user_id: str,\r\n    admin: dict = Depends(require_permission(\"users:write\"))\r\n):\r\n    token_manager.revoke_all_user_tokens(user_id)\r\n    return {\"message\": f\"All sessions revoked for user {user_id}\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "57-security-headers-and-rate-limiting",
      children: "5.7 Security Headers and Rate Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Request, HTTPException\r\nfrom fastapi.middleware.cors import CORSMiddleware\r\nfrom fastapi.responses import JSONResponse\r\nfrom starlette.middleware.base import BaseHTTPMiddleware\r\nimport time\r\n\r\napp = FastAPI()\r\n\r\n## CORS — restrict origins\r\napp.add_middleware(\r\n    CORSMiddleware,\r\n    allow_origins=[\"https://example.com\"],\r\n    allow_credentials=True,\r\n    allow_methods=[\"GET\", \"POST\", \"PUT\", \"DELETE\"],\r\n    allow_headers=[\"Authorization\", \"Content-Type\"],\r\n)\r\n\r\n## Security headers middleware\r\nclass SecurityHeadersMiddleware(BaseHTTPMiddleware):\r\n    async def dispatch(self, request: Request, call_next):\r\n        response = await call_next(request)\r\n        response.headers[\"X-Content-Type-Options\"] = \"nosniff\"\r\n        response.headers[\"X-Frame-Options\"] = \"DENY\"\r\n        response.headers[\"X-XSS-Protection\"] = \"1; mode=block\"\r\n        response.headers[\"Strict-Transport-Security\"] = \"max-age=31536000; includeSubDomains\"\r\n        response.headers[\"Content-Security-Policy\"] = \"default-src 'self'\"\r\n        response.headers[\"Referrer-Policy\"] = \"strict-origin-when-cross-origin\"\r\n        return response\r\n\r\napp.add_middleware(SecurityHeadersMiddleware)\r\n\r\n## Rate limiting\r\nclass RateLimiter:\r\n    def __init__(self):\r\n        self.requests = {}\r\n\r\n    async def check(self, request: Request):\r\n        client_ip = request.client.host\r\n        now = time.time()\r\n        window = 60  # 1 minute window\r\n        max_requests = 100\r\n\r\n        if client_ip not in self.requests:\r\n            self.requests[client_ip] = []\r\n\r\n        # Clean old entries\r\n        self.requests[client_ip] = [\r\n            t for t in self.requests[client_ip] if now - t < window\r\n        ]\r\n\r\n        if len(self.requests[client_ip]) >= max_requests:\r\n            raise HTTPException(status_code=429, detail=\"Too many requests\")\r\n\r\n        self.requests[client_ip].append(now)\r\n\r\nrate_limiter = RateLimiter()\r\n\r\n@app.middleware(\"http\")\r\nasync def rate_limit_middleware(request: Request, call_next):\r\n    await rate_limiter.check(request)\r\n    response = await call_next(request)\r\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "58-testing-auth-flows",
      children: "5.8 Testing Auth Flows"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi.testclient import TestClient\r\nimport pytest\r\nfrom jose import jwt\r\n\r\ndef test_login_success(client):\r\n    response = client.post(\"/auth/login\", json={\r\n        \"username\": \"testuser\",\r\n        \"password\": \"testpass123\"\r\n    })\r\n    assert response.status_code == 200\r\n    assert \"access_token\" in response.json()\r\n\r\ndef test_login_invalid_password(client):\r\n    response = client.post(\"/auth/login\", json={\r\n        \"username\": \"testuser\",\r\n        \"password\": \"wrongpass\"\r\n    })\r\n    assert response.status_code == 401\r\n\r\ndef test_protected_endpoint_with_valid_token(client, test_user):\r\n    token = create_test_token(test_user)\r\n    response = client.get(\"/users/me\", headers={\r\n        \"Authorization\": f\"Bearer {token}\"\r\n    })\r\n    assert response.status_code == 200\r\n    assert response.json()[\"username\"] == test_user.username\r\n\r\ndef test_protected_endpoint_no_token(client):\r\n    response = client.get(\"/users/me\")\r\n    assert response.status_code == 403  # No auth header\r\n\r\ndef test_protected_endpoint_expired_token(client):\r\n    token = create_expired_token()\r\n    response = client.get(\"/users/me\", headers={\r\n        \"Authorization\": f\"Bearer {token}\"\r\n    })\r\n    assert response.status_code == 401\r\n    assert \"expired\" in response.json()[\"detail\"].lower()\r\n\r\ndef test_role_based_access(client, test_user):\r\n    # User without admin role\r\n    token = create_test_token(test_user)\r\n    response = client.post(\"/admin/delete-user\", headers={\r\n        \"Authorization\": f\"Bearer {token}\"\r\n    })\r\n    assert response.status_code == 403\r\n\r\n@pytest.fixture\r\ndef auth_headers(client, test_user):\r\n    response = client.post(\"/auth/login\", json={\r\n        \"username\": test_user.username,\r\n        \"password\": \"testpass123\"\r\n    })\r\n    token = response.json()[\"access_token\"]\r\n    return {\"Authorization\": f\"Bearer {token}\"}\r\n\r\ndef test_authenticated_request(client, auth_headers):\r\n    response = client.get(\"/users/me\", headers=auth_headers)\r\n    assert response.status_code == 200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import jwt from \"jsonwebtoken\";\r\n\r\ninterface TokenPayload {\r\n  sub: string;\r\n  role: string;\r\n  scopes: string[];\r\n  exp: number;\r\n}\r\n\r\nfunction createAccessToken(user: { id: string; role: string }): string {\r\n  return jwt.sign(\r\n    { sub: user.id, role: user.role, scopes: getScopesForRole(user.role) },\r\n    process.env.JWT_SECRET!,\r\n    { expiresIn: \"15m\" }\r\n  );\r\n}\r\n\r\nfunction requirePermission(permission: string) {\r\n  return (req: any, res: any, next: any) => {\r\n    const token = req.headers.authorization?.replace(\"Bearer \", \"\");\r\n    if (!token) return res.status(401).json({ error: \"Unauthorized\" });\r\n    try {\r\n      const payload = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;\r\n      const permissions = getPermissionsForRole(payload.role);\r\n      if (!permissions.includes(permission)) {\r\n        return res.status(403).json({ error: \"Forbidden\" });\r\n      }\r\n      req.user = payload;\r\n      next();\r\n    } catch {\r\n      return res.status(401).json({ error: \"Invalid token\" });\r\n    }\r\n  };\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication verifies identity; authorization verifies permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always hash passwords with bcrypt/argon2 — never store plain text"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JWT tokens contain header, payload (claims), and signature — use short expiry (15 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OAuth2 password flow with FastAPI integrates seamlessly with Swagger UI authorization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RBAC maps roles to permissions — check permissions via dependency injection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session management includes token refresh, blacklisting revoked tokens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security headers (HSTS, CSP, X-Frame-Options) protect against common web attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting prevents brute force and DoS attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always validate tokens on every request — never trust client-side auth state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all auth flows: success, invalid credentials, expired tokens, missing permissions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt with salt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain text or MD5/SHA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT access + refresh tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic auth over HTTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC with permission checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded admin checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP-only cookies (web)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "localStorage (XSS vulnerable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-IP + per-user limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSP, HSTS, X-Frame-Options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing security headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock tokens, test all scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing only happy path"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q1: Difference between authentication and authorization?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Authentication verifies identity (\"who are you?\") — typically via username/password, JWT, or OAuth. Authorization verifies permissions (\"what can you do?\") — typically via roles, scopes, or permission checks. Authentication comes first, then authorization on every subsequent request."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q2: How does JWT token validation work?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The server verifies the token signature using the secret key. It checks the exp (expiration) claim — reject if expired. It validates required claims (sub, type). JWTs are stateless — no server-side session storage required. Token can be decoded to extract user info and permissions."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q3: Why use refresh tokens?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Access tokens are short-lived (15 min) — refresh tokens are long-lived (7 days) and used to obtain new access tokens without re-authentication. If a refresh token is compromised, it can be revoked without affecting other sessions. Refresh tokens should be stored securely and rotated on each use."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q4: How do you implement logout with JWT?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Since JWTs are stateless, implement a token blacklist (Redis) that stores revoked tokens until their natural expiry. On logout, add the token to the blacklist. Check blacklist on every request in the auth dependency. For full user logout, revoke all refresh tokens for that user."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q5: What is OAuth2 scopes?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Scopes are permission strings that define what a token can access. Example: \"users:read\", \"users:write\". Tokens are issued with specific scopes based on user role or consent. FastAPI's SecurityScopes class validates that the token has all required scopes before allowing access."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q6: How do you securely store API secrets?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use environment variables (.env file locally, secrets manager in production). Never commit secrets to version control. Use SecretStr in Pydantic for sensitive config values. Rotate secrets regularly. Use vault/secret management (HashiCorp Vault, AWS Secrets Manager) in production."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q7: What security headers should every API include?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Strict-Transport-Security (HSTS), X-Content-Type-Options (nosniff), X-Frame-Options (DENY), Content-Security-Policy, X-XSS-Protection, Referrer-Policy. These prevent common web attacks like clickjacking, MIME sniffing, and XSS. Implement via middleware to add them to every response."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q8: How do you handle token expiry in the frontend?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Intercept 401 responses, attempt token refresh with the refresh token, retry the original request. If refresh fails, redirect to login. Use axios interceptors or fetch wrappers. Store tokens securely (HTTP-only cookies for web, secure storage for mobile). Implement silent refresh before expiry."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q9: What is CSRF and how do you prevent it?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "CSRF (Cross-Site Request Forgery) tricks authenticated users into making unwanted requests. Prevention: use CSRF tokens (sent as header, verified server-side), SameSite cookies (Strict/Lax), and validate Origin/Referer headers. For APIs using JWT in Authorization header (not cookies), CSRF is less of a concern."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q10: How do you design a permission system for a multi-tenant app?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use RBAC with tenant-scoped permissions. Each permission includes the tenant context: \"tenant:123:users:read\". Store user-role-tenant mappings. Check both role permissions and tenant membership on every request. Use tenant ID from JWT claims or subdomain for database isolation."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What algorithm is recommended for password hashing?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) MD5\r\nb) SHA256\r\nc) bcrypt\r\nd) Base64"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) bcrypt"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": How long should an access token typically be valid?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 7 days\r\nb) 30 days\r\nc) 15 minutes\r\nd) 1 year"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 15 minutes"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What measures permissions in OAuth2?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Roles\r\nb) Scopes\r\nc) Groups\r\nd) Claims"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Scopes"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What header prevents clickjacking attacks?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) X-XSS-Protection\r\nb) X-Frame-Options\r\nc) Content-Security-Policy\r\nd) Strict-Transport-Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) X-Frame-Options"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which HTTP status code indicates too many requests?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 401\r\nb) 403\r\nc) 429\r\nd) 500"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s05-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 429"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement user registration and login with bcrypt password hashing. Store users in an in-memory dictionary. Test with valid and invalid credentials."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement JWT access token (15 min expiry) and refresh token (7 day expiry). Create endpoints for login, token refresh, and logout with token blacklist."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build RBAC with roles (admin, moderator, user) and permissions (read/write/delete). Create endpoints protected by permission checks. Test all role-permission combinations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a complete OAuth2 security system with FastAPI: password flow, scopes, token refresh, blacklist, rate limiting, security headers, and Swagger UI integration. Include comprehensive tests for all auth scenarios."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design a multi-tenant auth system: each user belongs to an organization, permissions are scoped to organizations, users can have different roles in different orgs. Implement tenant isolation in data access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of Authentication and Authorization — JWT, OAuth2, and RBAC in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Authentication and Authorization — JWT, OAuth2, and RBAC."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding Authentication and Authorization — JWT, OAuth2, and RBAC. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Authentication and Authorization — JWT, OAuth2, and RBAC from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Authentication and Authorization — JWT, OAuth2, and RBAC with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Authentication and Authorization — JWT, OAuth2, and RBAC."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Authentication and Authorization — JWT, OAuth2, and RBAC behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Authentication and Authorization — JWT, OAuth2, and RBAC run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of Authentication and Authorization — JWT, OAuth2, and RBAC that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Authentication and Authorization — JWT, OAuth2, and RBAC explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Authentication and Authorization — JWT, OAuth2, and RBAC\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Authentication and Authorization — JWT, OAuth2, and RBAC to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Authentication and Authorization — JWT, OAuth2, and RBAC (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Authentication and Authorization — JWT, OAuth2, and RBAC and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Authentication and Authorization — JWT, OAuth2, and RBAC-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Authentication and Authorization — JWT, OAuth2, and RBAC interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Authentication and Authorization — JWT, OAuth2, and RBAC in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Authentication and Authorization — JWT, OAuth2, and RBAC builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Authentication and Authorization — JWT, OAuth2, and RBAC before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Authentication and Authorization — JWT, OAuth2, and RBAC is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Authentication and Authorization — JWT, OAuth2, and RBAC in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Authentication and Authorization — JWT, OAuth2, and RBAC chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Authentication and Authorization — JWT, OAuth2, and RBAC is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 05 Authentication And Authz is ___. — Answer: O(1) per request with async I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 05 Authentication And Authz is ___. — Answer: validation errors, missing auth, unhandled exceptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Authentication and Authorization — JWT, OAuth2, and RBAC issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Authentication and Authorization — JWT, OAuth2, and RBAC in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Authentication and Authorization — JWT, OAuth2, and RBAC that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Authentication and Authorization — JWT, OAuth2, and RBAC is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Authentication and Authorization — JWT, OAuth2, and RBAC in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Authentication and Authorization — JWT, OAuth2, and RBAC and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Authentication and Authorization — JWT, OAuth2, and RBAC on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Authentication and Authorization — JWT, OAuth2, and RBAC to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Authentication and Authorization — JWT, OAuth2, and RBAC from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Authentication and Authorization — JWT, OAuth2, and RBAC when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Authentication and Authorization — JWT, OAuth2, and RBAC twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Authentication and Authorization — JWT, OAuth2, and RBAC snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Authentication and Authorization — JWT, OAuth2, and RBAC listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Authentication and Authorization — JWT, OAuth2, and RBAC to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Authentication and Authorization — JWT, OAuth2, and RBAC by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Authentication and Authorization — JWT, OAuth2, and RBAC to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations and Authorization — JWT, OAuth2, and RBAC"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 05 — builds the foundation for 05 Authentication And Authz"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 05 Authentication And Authz with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 05 Authentication And Authz fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 05 Authentication And Authz"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 05 Authentication And Authz"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 05 Authentication And Authz?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 05 Authentication And Authz?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 05 Authentication And Authz asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 05 Authentication And Authz?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication and Authorization — JWT, OAuth2, and RBAC is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Authentication and Authorization — JWT, OAuth2, and RBAC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication and Authorization — JWT, OAuth2, and RBAC emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Authentication and Authorization — JWT, OAuth2, and RBAC today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Authentication and Authorization — JWT, OAuth2, and RBAC — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Authentication and Authorization — JWT, OAuth2, and RBAC changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "05 Authentication And Authz is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Authentication and Authorization — JWT, OAuth2, and RBAC skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-05authenticationandauthz-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What algorithm is recommended for password hashing?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) bcrypt"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-05authenticationandauthz-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How long should an access token typically be valid?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) 15 minutes"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-05authenticationandauthz-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What measures permissions in OAuth2?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Scopes"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-05authenticationandauthz-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What header prevents clickjacking attacks?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) X-Frame-Options"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-05authenticationandauthz-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which HTTP status code indicates too many requests?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) 429"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Authentication and Authorization — JWT, OAuth2, and RBAC (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Authentication and Authorization — JWT, OAuth2, and RBAC (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Authentication and Authorization — JWT, OAuth2, and RBAC-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Authentication and Authorization — JWT, OAuth2, and RBAC in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling and Authorization — JWT, OAuth2, and RBAC"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 05 Authentication And Authz pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Authentication and Authorization — JWT, OAuth2, and RBAC in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Authentication and Authorization — JWT, OAuth2, and RBAC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Authentication and Authorization — JWT, OAuth2, and RBAC problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Authentication and Authorization — JWT, OAuth2, and RBAC is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_05_authentication_and_authz(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 05 Authentication And Authz.\r\n\r\n    Key concepts: routes, Pydantic models, dependency injection, async\r\n    Complexity: O(1) per request with async I/O\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 05 Authentication And Authz here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Authentication and Authorization — JWT, OAuth2, and RBAC without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy",
        children: "Database with SQLAlchemy — ORM, Migrations, and Repository Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication and Authorization — JWT, OAuth2, and RBAC, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Authentication and Authorization — JWT, OAuth2, and RBAC depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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