"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[858],{

/***/ 23668
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_21_interview_preparation_03_backend_coding_interview_md_ebf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-21-interview-preparation-03-backend-coding-interview-md-ebf.json
const site_docs_courses_ai_engineering_placement_21_interview_preparation_03_backend_coding_interview_md_ebf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/interview-preparation/03-backend-coding-interview","title":"Backend Coding Interview","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/21-interview-preparation/03-backend-coding-interview.md","sourceDirName":"courses/ai-engineering-placement/21-interview-preparation","slug":"/ai-engineering-placement/21-interview-preparation/03-backend-coding-interview","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/03-backend-coding-interview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":253,"frontMatter":{"id":"03-backend-coding-interview","slug":"/ai-engineering-placement/21-interview-preparation/03-backend-coding-interview","title":"Backend Coding Interview","sidebar_label":"Backend Coding Interview","sidebar_position":253},"sidebar":"placementSidebar","previous":{"title":"SQL Problem Bank","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/02-sql-problem-bank"},"next":{"title":"ML Foundations Interview","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/04-ml-foundations-interview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/21-interview-preparation/03-backend-coding-interview.md


const frontMatter = {
	id: '03-backend-coding-interview',
	slug: '/ai-engineering-placement/21-interview-preparation/03-backend-coding-interview',
	title: 'Backend Coding Interview',
	sidebar_label: 'Backend Coding Interview',
	sidebar_position: 253
};
const contentTitle = 'Backend Coding Interview';

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
  "value": "3.1 API Design",
  "id": "31-api-design",
  "level": 2
}, {
  "value": "3.2 Middleware",
  "id": "32-middleware",
  "level": 2
}, {
  "value": "3.3 Concurrency",
  "id": "33-concurrency",
  "level": 2
}, {
  "value": "3.4 Caching",
  "id": "34-caching",
  "level": 2
}, {
  "value": "3.5 Testing",
  "id": "35-testing",
  "level": 2
}, {
  "value": "3.6 Message Queues",
  "id": "36-message-queues",
  "level": 2
}, {
  "value": "3.7 Microservices",
  "id": "37-microservices",
  "level": 2
}, {
  "value": "3.8 Security",
  "id": "38-security",
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
  "value": "Query side (uses separate read-optimized store)",
  "id": "query-side-uses-separate-read-optimized-store",
  "level": 2
}, {
  "value": "Step 2: Background process publishes from outbox",
  "id": "step-2-background-process-publishes-from-outbox",
  "level": 2
}, {
  "value": "Event bus (in-memory for illustration)",
  "id": "event-bus-in-memory-for-illustration",
  "level": 2
}, {
  "value": "Order service",
  "id": "order-service",
  "level": 2
}, {
  "value": "Saga coordinator subscribes to events and triggers next steps",
  "id": "saga-coordinator-subscribes-to-events-and-triggers-next-steps",
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
    mermaid: "mermaid",
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
        id: "backend-coding-interview",
        children: "Backend Coding Interview"
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
            children: "Design and implement RESTful API endpoints with proper status codes and error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build middleware chains for authentication, logging, rate limiting, and error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle concurrency patterns: threading, asyncio, multiprocessing, and synchronization primitives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement caching strategies with Redis and in-memory caches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write unit, integration, and end-to-end tests for backend code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design scalable backend architectures including microservices, message queues, and event-driven patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding backend coding interview is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how backend coding interview works in practice."
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTful principles, status codes, versioning, HATEOAS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, logging, rate limiting, error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threading, asyncio, multiprocessing, GIL, synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis, in-memory cache, cache invalidation strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit, integration, E2E, mocking, test doubles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message Queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RabbitMQ, Kafka, Celery, event-driven patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service decomposition, API gateway, service discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, authorization, input validation, rate limiting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[API Design] --> B[Middleware]\r\n    B --> C[Concurrency]\r\n    C --> D[Caching]\r\n    D --> E[Testing]\r\n    E --> F[Message Queues]\r\n    F --> G[Microservices]\r\n    G --> H[Security]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-api-design",
      children: "3.1 API Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-designed REST API follows consistent conventions and uses HTTP semantics correctly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "URL conventions"
      }), ": Use nouns for resources (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/users"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/orders"
      }), "), plural names, lowercase with hyphens. Nest resources hierarchically (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/users/{id}/orders"
      }), "). Query parameters for filtering, sorting, and pagination."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP methods"
      }), ": GET for retrieval (safe, idempotent), POST for creation (not idempotent), PUT for full replacement (idempotent), PATCH for partial update, DELETE for removal (idempotent)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status codes"
      }), ": 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests, 500 Internal Server Error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, HTTPException, Query, status\r\nfrom pydantic import BaseModel, Field\r\nfrom typing import Optional\r\nfrom enum import Enum\r\n\r\napp = FastAPI()\r\n\r\nclass OrderStatus(str, Enum):\r\n    PENDING = \"pending\"\r\n    CONFIRMED = \"confirmed\"\r\n    SHIPPED = \"shipped\"\r\n    DELIVERED = \"delivered\"\r\n    CANCELLED = \"cancelled\"\r\n\r\nclass OrderCreate(BaseModel):\r\n    user_id: int = Field(..., gt=0)\r\n    items: list[int] = Field(..., min_length=1)\r\n    shipping_address: str = Field(..., min_length=10, max_length=500)\r\n\r\nclass OrderResponse(BaseModel):\r\n    id: int\r\n    user_id: int\r\n    status: OrderStatus\r\n    total: float\r\n    created_at: str\r\n\r\norders_db: dict[int, dict] = {}\r\n\r\n@app.post(\"/orders\", status_code=status.HTTP_201_CREATED, response_model=OrderResponse)\r\ndef create_order(order: OrderCreate):\r\n    new_id = len(orders_db) + 1\r\n    orders_db[new_id] = {\r\n        \"id\": new_id,\r\n        \"user_id\": order.user_id,\r\n        \"status\": OrderStatus.PENDING,\r\n        \"total\": 0.0,\r\n        \"created_at\": \"2024-01-15T10:30:00Z\"\r\n    }\r\n    return orders_db[new_id]\r\n\r\n@app.get(\"/orders\", response_model=list[OrderResponse])\r\ndef list_orders(\r\n    status: Optional[OrderStatus] = Query(None),\r\n    page: int = Query(1, ge=1),\r\n    size: int = Query(20, ge=1, le=100)\r\n):\r\n    result = list(orders_db.values())\r\n    if status:\r\n        result = [o for o in result if o[\"status\"] == status]\r\n    start = (page - 1) * size\r\n    return result[start:start + size]\r\n\r\n@app.get(\"/orders/{order_id}\", response_model=OrderResponse)\r\ndef get_order(order_id: int):\r\n    if order_id not in orders_db:\r\n        raise HTTPException(status_code=404, detail=\"Order not found\")\r\n    return orders_db[order_id]\r\n\r\n@app.patch(\"/orders/{order_id}/cancel\", response_model=OrderResponse)\r\ndef cancel_order(order_id: int):\r\n    if order_id not in orders_db:\r\n        raise HTTPException(status_code=404, detail=\"Order not found\")\r\n    order = orders_db[order_id]\r\n    if order[\"status\"] not in (OrderStatus.PENDING, OrderStatus.CONFIRMED):\r\n        raise HTTPException(status_code=409, detail=\"Order cannot be cancelled\")\r\n    order[\"status\"] = OrderStatus.CANCELLED\r\n    return order\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "API versioning"
      }), ": Use URL-based versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/v1/orders"
      }), ") or header-based versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accept: application/vnd.api.v1+json"
      }), "). URL-based is simpler for initial versions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-middleware",
      children: "3.2 Middleware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Middleware sits between the request and the handler, processing every request/response. Common middleware includes authentication, logging, rate limiting, request validation, and CORS."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport logging\r\nfrom fastapi import FastAPI, Request, Response\r\nfrom fastapi.middleware.cors import CORSMiddleware\r\nfrom starlette.middleware.base import BaseHTTPMiddleware\r\nfrom collections import defaultdict\r\n\r\nlogger = logging.getLogger(__name__)\r\n\r\n## Request timing middleware\r\nclass TimingMiddleware(BaseHTTPMiddleware):\r\n    async def dispatch(self, request: Request, call_next):\r\n        start = time.perf_counter()\r\n        response = await call_next(request)\r\n        elapsed = time.perf_counter() - start\r\n        response.headers[\"X-Processing-Time\"] = str(elapsed)\r\n        logger.info(f\"{request.method} {request.url.path} - {elapsed:.3f}s\")\r\n        return response\r\n\r\n## Rate limiting middleware (in-memory, per IP)\r\nclass RateLimitMiddleware(BaseHTTPMiddleware):\r\n    def __init__(self, app, max_requests: int = 100, window_seconds: int = 60):\r\n        super().__init__(app)\r\n        self.max_requests = max_requests\r\n        self.window = window_seconds\r\n        self.requests: dict[str, list[float]] = defaultdict(list)\r\n\r\n    async def dispatch(self, request: Request, call_next):\r\n        client_ip = request.client.host if request.client else \"unknown\"\r\n        now = time.time()\r\n        self.requests[client_ip] = [\r\n            t for t in self.requests[client_ip] if now - t < self.window\r\n        ]\r\n        if len(self.requests[client_ip]) >= self.max_requests:\r\n            return Response(status_code=429, content=\"Too many requests\")\r\n        self.requests[client_ip].append(now)\r\n        return await call_next(request)\r\n\r\n## JWT authentication middleware\r\nclass JWTAuthMiddleware(BaseHTTPMiddleware):\r\n    def __init__(self, app, excluded_paths: set[str] = None):\r\n        super().__init__(app)\r\n        self.excluded_paths = excluded_paths or {\"/health\", \"/docs\", \"/openapi.json\"}\r\n\r\n    async def dispatch(self, request: Request, call_next):\r\n        if request.url.path in self.excluded_paths:\r\n            return await call_next(request)\r\n        auth_header = request.headers.get(\"Authorization\", \"\")\r\n        if not auth_header.startswith(\"Bearer \"):\r\n            return Response(status_code=401, content=\"Missing or invalid token\")\r\n        token = auth_header[7:]\r\n        try:\r\n            # Decode JWT and attach user info to request\r\n            payload = self.decode_jwt(token)\r\n            request.state.user = payload\r\n        except Exception:\r\n            return Response(status_code=401, content=\"Invalid token\")\r\n        return await call_next(request)\r\n\r\n    def decode_jwt(self, token: str) -> dict:\r\n        import jwt\r\n        return jwt.decode(token, \"secret-key\", algorithms=[\"HS256\"])\r\n\r\n## Register middleware\r\napp.add_middleware(CORSMiddleware, allow_origins=[\"*\"], allow_methods=[\"*\"], allow_headers=[\"*\"])\r\napp.add_middleware(TimingMiddleware)\r\napp.add_middleware(RateLimitMiddleware, max_requests=60, window_seconds=60)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Middleware order matters"
      }), ": Middleware is executed in the order it's added. Put broad middleware (CORS, timing) first, then authentication, then rate limiting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-concurrency",
      children: "3.3 Concurrency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python offers three concurrency models. Understanding when to use each is critical for backend interviews."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Threading"
      }), ": Best for I/O-bound tasks (network requests, file I/O). Limited by the GIL (Global Interpreter Lock) for CPU-bound work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Asyncio"
      }), ": Single-threaded cooperative multitasking. Best for high-concurrency I/O bound workloads (web servers, API gateways). Uses async/await syntax."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiprocessing"
      }), ": Bypasses the GIL with separate processes. Best for CPU-bound tasks (image processing, ML inference)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nimport threading\r\nimport concurrent.futures\r\nimport time\r\nfrom typing import Any\r\n\r\n## Threading example — downloading multiple URLs\r\ndef fetch_url(url: str) -> str:\r\n    import requests\r\n    response = requests.get(url, timeout=10)\r\n    return f\"{url}: {len(response.content)} bytes\"\r\n\r\ndef threaded_fetch(urls: list[str]) -> list[str]:\r\n    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:\r\n        results = list(executor.map(fetch_url, urls))\r\n    return results\r\n\r\n## Asyncio example — non-blocking I/O\r\nasync def async_fetch(session, url: str) -> str:\r\n    async with session.get(url) as response:\r\n        data = await response.read()\r\n        return f\"{url}: {len(data)} bytes\"\r\n\r\nasync def async_fetch_all(urls: list[str]) -> list[str]:\r\n    import aiohttp\r\n    async with aiohttp.ClientSession() as session:\r\n        tasks = [async_fetch(session, url) for url in urls]\r\n        return await asyncio.gather(*tasks)\r\n\r\n## Multiprocessing example — CPU-bound computation\r\ndef compute_heavy(n: int) -> int:\r\n    return sum(i * i for i in range(n))\r\n\r\ndef parallel_compute(values: list[int]) -> list[int]:\r\n    with concurrent.futures.ProcessPoolExecutor(max_workers=4) as executor:\r\n        results = list(executor.map(compute_heavy, values))\r\n    return results\r\n\r\n## Synchronization primitives — thread-safe counter\r\nclass ThreadSafeCounter:\r\n    def __init__(self):\r\n        self._value = 0\r\n        self._lock = threading.Lock()\r\n\r\n    def increment(self) -> int:\r\n        with self._lock:\r\n            self._value += 1\r\n            return self._value\r\n\r\n    @property\r\n    def value(self) -> int:\r\n        with self._lock:\r\n            return self._value\r\n\r\n## Async producer-consumer pattern\r\nasync def producer(queue: asyncio.Queue, n: int):\r\n    for i in range(n):\r\n        await queue.put(f\"item-{i}\")\r\n        await asyncio.sleep(0.01)\r\n    await queue.put(None)  # sentinel\r\n\r\nasync def consumer(queue: asyncio.Queue, name: str):\r\n    while True:\r\n        item = await queue.get()\r\n        if item is None:\r\n            queue.task_done()\r\n            break\r\n        print(f\"{name} processed {item}\")\r\n        queue.task_done()\r\n\r\nasync def run_pipeline():\r\n    queue = asyncio.Queue(maxsize=10)\r\n    producers = [asyncio.create_task(producer(queue, 20))]\r\n    consumers = [asyncio.create_task(consumer(queue, f\"worker-{i}\")) for i in range(3)]\r\n    await asyncio.gather(*producers)\r\n    await queue.join()\r\n    for c in consumers:\r\n        c.cancel()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GIL implications"
      }), ": For CPU-bound Python code, threading doesn't provide parallelism. Use multiprocessing, C extensions (NumPy), or alternative runtimes (Jython, IronPython). For I/O-bound code, asyncio is the most efficient model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-caching",
      children: "3.4 Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching reduces latency and database load. Master these patterns for backend interviews."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In-memory cache"
      }), ": Fastest but limited by available RAM. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "functools.lru_cache"
      }), " for function results or a custom TTL-based cache."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Redis"
      }), ": Distributed cache with built-in eviction policies (LRU, LFU, TTL). Supports data structures (strings, hashes, lists, sets, sorted sets)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache invalidation"
      }), ": The hardest problem in computer science. Strategies include TTL-based expiration, write-through (update cache on write), write-behind (async update), and cache-aside (application manages cache)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport json\r\nfrom functools import lru_cache\r\nfrom typing import Any, Optional\r\nimport redis\r\n\r\n## In-memory cache with TTL\r\nclass TTLCache:\r\n    def __init__(self, ttl_seconds: int = 300):\r\n        self._cache: dict[str, tuple[float, Any]] = {}\r\n        self.ttl = ttl_seconds\r\n\r\n    def get(self, key: str) -> Optional[Any]:\r\n        if key not in self._cache:\r\n            return None\r\n        expires_at, value = self._cache[key]\r\n        if time.time() > expires_at:\r\n            del self._cache[key]\r\n            return None\r\n        return value\r\n\r\n    def set(self, key: str, value: Any) -> None:\r\n        self._cache[key] = (time.time() + self.ttl, value)\r\n\r\n    def invalidate(self, key: str) -> None:\r\n        self._cache.pop(key, None)\r\n\r\n## Cache-aside pattern with Redis\r\nclass RedisCache:\r\n    def __init__(self, host: str = \"localhost\", port: int = 6379, db: int = 0, default_ttl: int = 300):\r\n        self.client = redis.Redis(host=host, port=port, db=db, decode_responses=True)\r\n        self.default_ttl = default_ttl\r\n\r\n    def get(self, key: str) -> Optional[str]:\r\n        return self.client.get(key)\r\n\r\n    def set(self, key: str, value: str, ttl: Optional[int] = None) -> None:\r\n        self.client.setex(key, ttl or self.default_ttl, value)\r\n\r\n    def delete(self, *keys: str) -> None:\r\n        self.client.delete(*keys)\r\n\r\n    def remember(self, key: str, fetch_func, ttl: Optional[int] = None) -> str:\r\n        cached = self.get(key)\r\n        if cached is not None:\r\n            return cached\r\n        value = fetch_func()\r\n        self.set(key, str(value), ttl)\r\n        return str(value)\r\n\r\n## Using lru_cache for expensive function calls\r\n@lru_cache(maxsize=128)\r\ndef get_user_permissions(user_id: int) -> list[str]:\r\n    # Expensive database query\r\n    return [\"read\", \"write\", \"admin\"]\r\n\r\n## Cache invalidation example\r\nclass UserService:\r\n    def __init__(self, cache: RedisCache):\r\n        self.cache = cache\r\n\r\n    def get_user(self, user_id: int) -> dict:\r\n        cache_key = f\"user:{user_id}\"\r\n        result = self.cache.get(cache_key)\r\n        if result:\r\n            return json.loads(result)\r\n        user = self._fetch_from_db(user_id)\r\n        self.cache.set(cache_key, json.dumps(user), ttl=3600)\r\n        return user\r\n\r\n    def update_user(self, user_id: int, data: dict) -> dict:\r\n        user = self._update_in_db(user_id, data)\r\n        # Invalidate cache on write (write-invalidate pattern)\r\n        self.cache.delete(f\"user:{user_id}\")\r\n        return user\r\n\r\n    def _fetch_from_db(self, user_id: int) -> dict:\r\n        return {\"id\": user_id, \"name\": \"Alice\"}\r\n\r\n    def _update_in_db(self, user_id: int, data: dict) -> dict:\r\n        return {\"id\": user_id, **data}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common cache strategies"
      }), ": Cache-aside is the most common — application checks cache first, loads from DB on miss, stores in cache. Read-through cache sits between app and DB transparently. Write-through updates cache synchronously on writes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-testing",
      children: "3.5 Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backend testing spans multiple levels. Be prepared to discuss and write tests in interviews."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unit tests"
      }), ": Test individual functions/classes in isolation. Mock external dependencies. Fast execution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration tests"
      }), ": Test components together with real or test databases. Verify API contracts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "End-to-end tests"
      }), ": Test the full system from external API to database. Slow but catch systemic issues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pytest\r\nfrom fastapi.testclient import TestClient\r\nfrom unittest.mock import Mock, patch\r\nfrom datetime import datetime\r\n\r\n## Unit test — testing business logic in isolation\r\ndef calculate_discount(order_total: float, loyalty_years: int) -> float:\r\n    if loyalty_years >= 5:\r\n        return order_total * 0.15\r\n    if loyalty_years >= 2:\r\n        return order_total * 0.10\r\n    if order_total > 1000:\r\n        return order_total * 0.05\r\n    return 0.0\r\n\r\nclass TestCalculateDiscount:\r\n    def test_loyalty_discount_5_years(self):\r\n        assert calculate_discount(1000, 5) == 150.0\r\n\r\n    def test_loyalty_discount_2_years(self):\r\n        assert calculate_discount(1000, 2) == 100.0\r\n\r\n    def test_high_value_discount(self):\r\n        assert calculate_discount(1500, 0) == 75.0\r\n\r\n    def test_no_discount(self):\r\n        assert calculate_discount(500, 0) == 0.0\r\n\r\n## API integration test with FastAPI TestClient\r\nfrom main import app\r\n\r\nclient = TestClient(app)\r\n\r\nclass TestOrderAPI:\r\n    def test_create_order(self):\r\n        response = client.post(\"/orders\", json={\r\n            \"user_id\": 1,\r\n            \"items\": [101, 102],\r\n            \"shipping_address\": \"123 Main St, City, Country\"\r\n        })\r\n        assert response.status_code == 201\r\n        data = response.json()\r\n        assert data[\"user_id\"] == 1\r\n        assert data[\"status\"] == \"pending\"\r\n\r\n    def test_get_order_not_found(self):\r\n        response = client.get(\"/orders/999\")\r\n        assert response.status_code == 404\r\n        assert \"not found\" in response.json()[\"detail\"].lower()\r\n\r\n    def test_list_orders_with_filter(self):\r\n        response = client.get(\"/orders?status=pending&page=1&size=10\")\r\n        assert response.status_code == 200\r\n        assert isinstance(response.json(), list)\r\n\r\n## Mocking external dependencies\r\nclass EmailService:\r\n    def send_welcome_email(self, user_email: str) -> bool:\r\n        # Calls external SMTP server\r\n        raise NotImplementedError\r\n\r\nclass UserRegistration:\r\n    def __init__(self, email_service: EmailService, db):\r\n        self.email_service = email_service\r\n        self.db = db\r\n\r\n    def register(self, email: str, name: str) -> dict:\r\n        if self.db.find_user_by_email(email):\r\n            raise ValueError(\"User already exists\")\r\n        user = self.db.create_user(email, name)\r\n        self.email_service.send_welcome_email(email)\r\n        return user\r\n\r\nclass TestUserRegistration:\r\n    def test_registration_sends_email(self):\r\n        mock_email = Mock(spec=EmailService)\r\n        mock_db = Mock()\r\n        mock_db.find_user_by_email.return_value = None\r\n        mock_db.create_user.return_value = {\"id\": 1, \"email\": \"test@test.com\", \"name\": \"Test\"}\r\n\r\n        service = UserRegistration(mock_email, mock_db)\r\n        result = service.register(\"test@test.com\", \"Test\")\r\n\r\n        assert result[\"id\"] == 1\r\n        mock_email.send_welcome_email.assert_called_once_with(\"test@test.com\")\r\n\r\n    def test_duplicate_email_raises_error(self):\r\n        mock_email = Mock(spec=EmailService)\r\n        mock_db = Mock()\r\n        mock_db.find_user_by_email.return_value = {\"id\": 1}\r\n\r\n        service = UserRegistration(mock_email, mock_db)\r\n        with pytest.raises(ValueError, match=\"User already exists\"):\r\n            service.register(\"existing@test.com\", \"Test\")\r\n        mock_email.send_welcome_email.assert_not_called()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing best practices"
      }), ": Write tests first (TDD) for bug fixes. Use fixture factories for test data. Aim for 80%+ code coverage but focus on critical paths. Use dependency injection to make code testable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-message-queues",
      children: "3.6 Message Queues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Message queues decouple services and enable asynchronous processing. Common patterns include task queues, event broadcasting, and stream processing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RabbitMQ"
      }), ": AMQP-based message broker. Supports exchanges (direct, topic, fanout, headers) and queues with bindings. Good for task distribution and RPC."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Kafka"
      }), ": Distributed event streaming platform. Log-based, persists messages. Good for event sourcing, stream processing, and data pipelines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Celery"
      }), ": Python task queue that uses RabbitMQ or Redis as a broker. Handles periodic tasks, retries, and result storage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Celery task queue example\r\nfrom celery import Celery\r\n\r\napp_celery = Celery(\r\n    \"tasks\",\r\n    broker=\"redis://localhost:6379/0\",\r\n    backend=\"redis://localhost:6379/0\"\r\n)\r\n\r\n@app_celery.task(bind=True, max_retries=3, default_retry_delay=30)\r\ndef process_order(self, order_id: int) -> dict:\r\n    try:\r\n        # Simulate order processing\r\n        result = {\"order_id\": order_id, \"status\": \"processed\"}\r\n        return result\r\n    except Exception as exc:\r\n        raise self.retry(exc=exc)\r\n\r\n## Sending tasks asynchronously\r\ndef create_and_process_order(user_id: int, items: list[int]):\r\n    order_id = save_order_to_db(user_id, items)\r\n    process_order.delay(order_id)  # Non-blocking\r\n    return {\"order_id\": order_id, \"status\": \"pending\"}\r\n\r\n## In-memory queue implementation (for interview coding)\r\nfrom dataclasses import dataclass\r\nfrom collections import deque\r\nimport threading\r\n\r\n@dataclass\r\nclass Message:\r\n    topic: str\r\n    payload: dict\r\n    key: Optional[str] = None\r\n\r\nclass SimpleMessageQueue:\r\n    def __init__(self):\r\n        self.queues: dict[str, deque] = {}\r\n        self.subscribers: dict[str, list] = {}\r\n        self.lock = threading.Lock()\r\n\r\n    def create_topic(self, topic: str) -> None:\r\n        with self.lock:\r\n            if topic not in self.queues:\r\n                self.queues[topic] = deque()\r\n\r\n    def publish(self, topic: str, message: Message) -> None:\r\n        with self.lock:\r\n            if topic not in self.queues:\r\n                raise ValueError(f\"Topic {topic} does not exist\")\r\n            self.queues[topic].append(message)\r\n\r\n    def subscribe(self, topic: str, callback) -> str:\r\n        subscriber_id = f\"sub-{id(callback)}\"\r\n        with self.lock:\r\n            if topic not in self.subscribers:\r\n                self.subscribers[topic] = []\r\n            self.subscribers[topic].append((subscriber_id, callback))\r\n        return subscriber_id\r\n\r\n    def consume(self, topic: str) -> Optional[Message]:\r\n        with self.lock:\r\n            if self.queues.get(topic):\r\n                return self.queues[topic].popleft()\r\n            return None\r\n\r\n    def start_consumer(self, topic: str, poll_interval: float = 0.1):\r\n        def poll():\r\n            while True:\r\n                msg = self.consume(topic)\r\n                if msg and topic in self.subscribers:\r\n                    for _, callback in self.subscribers[topic]:\r\n                        callback(msg)\r\n                time.sleep(poll_interval)\r\n        thread = threading.Thread(target=poll, daemon=True)\r\n        thread.start()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37-microservices",
      children: "3.7 Microservices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microservices decompose a backend into independently deployable services. Be ready to discuss tradeoffs and patterns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service decomposition"
      }), ": Split by business capability (orders service, payments service, inventory service). Each service owns its data store."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "API Gateway"
      }), ": Single entry point that handles authentication, rate limiting, routing, and aggregation. Implement with Nginx, Kong, or Envoy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service discovery"
      }), ": Services find each other via DNS (Kubernetes), a registry (Consul, Eureka), or client-side discovery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inter-service communication"
      }), ": Synchronous (HTTP/REST, gRPC) or asynchronous (message queues, events). Choose async for loose coupling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Service example — inventory service\r\nfrom fastapi import FastAPI, HTTPException\r\nfrom pydantic import BaseModel\r\n\r\ninventory_app = FastAPI(title=\"Inventory Service\")\r\n\r\nclass InventoryItem(BaseModel):\r\n    product_id: int\r\n    quantity: int\r\n    warehouse: str\r\n\r\ninventory_db: dict[int, dict] = {\r\n    101: {\"product_id\": 101, \"quantity\": 50, \"warehouse\": \"WH-1\"},\r\n    102: {\"product_id\": 102, \"quantity\": 0, \"warehouse\": \"WH-1\"},\r\n}\r\n\r\n@inventory_app.get(\"/inventory/{product_id}\")\r\ndef check_inventory(product_id: int):\r\n    item = inventory_db.get(product_id)\r\n    if not item:\r\n        raise HTTPException(status_code=404, detail=\"Product not found\")\r\n    return {\"product_id\": product_id, \"in_stock\": item[\"quantity\"] > 0, \"quantity\": item[\"quantity\"]}\r\n\r\n@inventory_app.post(\"/inventory/reserve\")\r\ndef reserve_inventory(product_id: int, quantity: int):\r\n    item = inventory_db.get(product_id)\r\n    if not item or item[\"quantity\"] < quantity:\r\n        raise HTTPException(status_code=409, detail=\"Insufficient inventory\")\r\n    item[\"quantity\"] -= quantity\r\n    return {\"product_id\": product_id, \"remaining\": item[\"quantity\"]}\r\n\r\n## API Gateway pattern (simplified)\r\nfrom fastapi import FastAPI, Request\r\nimport httpx\r\n\r\ngateway = FastAPI(title=\"API Gateway\")\r\n\r\nSERVICE_MAP = {\r\n    \"/users\": \"http://user-service:8001\",\r\n    \"/orders\": \"http://order-service:8002\",\r\n    \"/inventory\": \"http://inventory-service:8003\",\r\n    \"/payments\": \"http://payment-service:8004\",\r\n}\r\n\r\n@gateway.api_route(\"/{path:path}\", methods=[\"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\"])\r\nasync def proxy(request: Request, path: str):\r\n    prefix = \"/\" + path.split(\"/\")[0]\r\n    if prefix not in SERVICE_MAP:\r\n        raise HTTPException(status_code=404, detail=\"Service not found\")\r\n\r\n    target = SERVICE_MAP[prefix]\r\n    body = await request.body()\r\n    headers = dict(request.headers)\r\n    headers.pop(\"host\", None)\r\n\r\n    async with httpx.AsyncClient() as client:\r\n        response = await client.request(\r\n            method=request.method,\r\n            url=f\"{target}/{path}\",\r\n            headers=headers,\r\n            content=body,\r\n            params=dict(request.query_params),\r\n        )\r\n    return response.json()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Microservices challenges"
      }), ": Distributed transactions (use saga pattern), data consistency (eventual consistency), observability (distributed tracing), network latency, and operational complexity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38-security",
      children: "3.8 Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backend security covers authentication, authorization, input validation, and protection against common attacks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication"
      }), ": Verify identity. Methods include JWT (stateless, no server-side session), session-based (stateful, server stores session), OAuth2 (delegated auth), and API keys (simple, for machine-to-machine)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), ": Control access to resources. Use RBAC (role-based), ABAC (attribute-based), or ACL (access control lists). Always enforce at the API layer, not just the UI."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input validation"
      }), ": Validate and sanitize all user input. Use Pydantic schemas, parameterized queries (no SQL injection), and content-type verification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\r\nimport hmac\r\nimport bcrypt\r\nfrom datetime import datetime, timedelta\r\nfrom typing import Optional\r\nimport jwt\r\n\r\n## Password hashing with bcrypt\r\ndef hash_password(password: str) -> str:\r\n    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()\r\n\r\ndef verify_password(password: str, hashed: str) -> bool:\r\n    return bcrypt.checkpw(password.encode(), hashed.encode())\r\n\r\n## JWT token creation and verification\r\nclass JWTHandler:\r\n    def __init__(self, secret: str, algorithm: str = \"HS256\"):\r\n        self.secret = secret\r\n        self.algorithm = algorithm\r\n\r\n    def create_access_token(self, user_id: int, role: str, expires_delta: timedelta = timedelta(hours=1)):\r\n        payload = {\r\n            \"sub\": str(user_id),\r\n            \"role\": role,\r\n            \"iat\": datetime.utcnow(),\r\n            \"exp\": datetime.utcnow() + expires_delta,\r\n        }\r\n        return jwt.encode(payload, self.secret, algorithm=self.algorithm)\r\n\r\n    def verify_token(self, token: str) -> dict:\r\n        try:\r\n            payload = jwt.decode(token, self.secret, algorithms=[self.algorithm])\r\n            return payload\r\n        except jwt.ExpiredSignatureError:\r\n            raise ValueError(\"Token expired\")\r\n        except jwt.InvalidTokenError:\r\n            raise ValueError(\"Invalid token\")\r\n\r\n## Role-based access control decorator\r\nfrom functools import wraps\r\n\r\ndef require_role(required_role: str):\r\n    def decorator(func):\r\n        @wraps(func)\r\n        def wrapper(*args, **kwargs):\r\n            request = kwargs.get(\"request\")\r\n            user = getattr(request.state, \"user\", None)\r\n            if not user or user.get(\"role\") != required_role:\r\n                raise HTTPException(status_code=403, detail=\"Insufficient permissions\")\r\n            return func(*args, **kwargs)\r\n        return wrapper\r\n    return decorator\r\n\r\n## Input validation with Pydantic\r\nfrom pydantic import BaseModel, EmailStr, constr\r\n\r\nclass UserRegistration(BaseModel):\r\n    email: EmailStr\r\n    password: constr(min_length=8, max_length=128)\r\n    name: constr(min_length=2, max_length=100)\r\n\r\n    # Additional validation\r\n    def check_password_strength(self):\r\n        if not any(c.isupper() for c in self.password):\r\n            raise ValueError(\"Password must contain uppercase letter\")\r\n        if not any(c.isdigit() for c in self.password):\r\n            raise ValueError(\"Password must contain digit\")\r\n\r\n## Rate limiting with token bucket algorithm\r\nclass TokenBucket:\r\n    def __init__(self, rate: float, capacity: int):\r\n        self.rate = rate  # tokens per second\r\n        self.capacity = capacity\r\n        self.tokens = capacity\r\n        self.last_refill = time.time()\r\n\r\n    def consume(self, tokens: int = 1) -> bool:\r\n        now = time.time()\r\n        elapsed = now - self.last_refill\r\n        self.tokens = min(self.capacity, self.tokens + elapsed * self.rate)\r\n        self.last_refill = now\r\n        if self.tokens >= tokens:\r\n            self.tokens -= tokens\r\n            return True\r\n        return False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common vulnerabilities"
      }), ": SQL injection (use parameterized queries), XSS (sanitize HTML output), CSRF (use anti-CSRF tokens), SSRF (restrict outbound requests), insecure deserialization (validate input), and dependency vulnerabilities (keep dependencies updated)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "REST APIs use nouns for resources, HTTP methods for actions, and consistent status codes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Middleware enables cross-cutting concerns (auth, logging, rate limiting) without code duplication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose threading for I/O-bound, asyncio for high-concurrency I/O, multiprocessing for CPU-bound work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache-aside with Redis is the standard caching pattern; invalidate on writes, not just reads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test at multiple levels: unit (fast, isolated), integration (real dependencies), E2E (full system)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Message queues decouple services; choose RabbitMQ for task distribution, Kafka for event streaming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microservices decompose by business capability but introduce distributed systems challenges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security: authenticate (who), authorize (what they can do), validate (all input), rate-limit (prevent abuse)"
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
            children: "API endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proper HTTP method + status code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST for everything, 200 for all responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow database queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add caching layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N+1 queries in loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High I/O concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asyncio with connection pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread per request (memory overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU-bound task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiprocessing or task queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threading (blocked by GIL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt with salt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5, SHA-256 (unsalted), plain text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-invalidate or write-through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long TTL with no invalidation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven with sagas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous chains of HTTP calls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Explain the difference between REST and GraphQL.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "REST"
          }), ": Resources are accessed via URL paths with fixed response structures. Uses HTTP methods and status codes. Caching is built-in via HTTP semantics. Best for simple CRUD applications and when response shapes don't vary much."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GraphQL"
          }), ": Single endpoint where clients specify exactly which fields they need. Client-driven queries can cause performance issues (N+1). Requires a resolver layer and careful deprecation management."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "When to choose each"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "REST: Public APIs, simple CRUD, when HTTP caching matters, high maturity"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "GraphQL: Complex nested data, multiple client types (web, mobile), rapidly evolving frontends"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Many teams use both — REST for simple endpoints and GraphQL for complex data needs"
          }), "\n    "]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does the Python GIL work and how do you work around it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Global Interpreter Lock (GIL) is a mutex in CPython that prevents multiple native threads from executing Python bytecode simultaneously. It exists because Python's memory management is not thread-safe."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Impact"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["CPU-bound tasks: Threading provides ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no parallelism"
            }), " — threads take turns"]
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "I/O-bound tasks: Threading works fine because threads release the GIL during I/O waits"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Workarounds"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiprocessing"
            }), ": Spawn separate processes, each with its own GIL"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "asyncio"
            }), ": Single-threaded cooperative concurrency for I/O"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C extensions"
            }), ": NumPy, Cython release the GIL in computation-heavy sections"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Jython/IronPython"
            }), ": Don't have a GIL (but lag behind CPython features)"]
          }), "\n    "]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Design a rate limiter that handles 1M requests per minute.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sliding window counter (Redis sorted sets)"
          }), " — efficient and accurate:"]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: ["import time\nimport redis\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["class SlidingWindowRateLimiter:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "init"
              }), "(self, redis_client, window_ms: int = 60000, max_requests: int = 1000):\r\nself.redis = redis_client\r\nself.window = window_ms\r\nself.max_reqs = max_requests"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "def is_allowed(self, key: str) -&gt; bool:\r\n    now = int(time.time() * 1000)\r\n    window_start = now - self.window\r\n\r\n    pipe = self.redis.pipeline()\r\n    pipe.zremrangebyscore(key, 0, window_start)  # remove old entries\r\n    pipe.zcard(key)                                # count remaining\r\n    pipe.zadd(key, {str(now): now})                # add current request\r\n    pipe.expire(key, self.window // 1000 + 1)      # auto-cleanup\r\n    _, count, _, _ = pipe.execute()\r\n\r\n    return count &lt; self.max_reqs</code></pre>\r\n<p><strong>Alternative — Token Bucket</strong>: Simple, memory-efficient, allows bursts up to capacity.</p>\r\n<p><strong>For 1M req/min across 1000 users</strong>: Each user gets ~1000 req/min. Use Redis Cluster for horizontal scaling. Shard by user ID. Use local counters (in-memory + periodic sync) to reduce Redis load.</p>\n"
              })
            }), "\n  "]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.code, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "ip-s03-q4",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q4: How do you handle database transactions across multiple services?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Saga pattern"
            }), " manages distributed transactions across microservices:"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Choreography"
              }), ": Each service publishes events after completing its local transaction. Other services listen and react. Simple but hard to track overall flow."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Orchestration"
              }), ": A central coordinator (saga orchestrator) tells services what to do and handles rollbacks by invoking compensating transactions."]
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsxs)(_components.code, {
              children: ["class OrderSagaOrchestrator:\n    def __init__(self, order_svc, payment_svc, inventory_svc, shipping_svc):\n        self.services = {\n            \"order\": order_svc,\n            \"payment\": payment_svc,\n            \"inventory\": inventory_svc,\n            \"shipping\": shipping_svc,\n        }\n        self.compensations = []\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "async def place_order(self, order_data: dict) -&gt; bool:\r\n    try:\r\n        order = await self.services[\"order\"].create(order_data)\r\n        self.compensations.append(lambda: self.services[\"order\"].cancel(order[\"id\"]))\r\n\r\n        payment = await self.services[\"payment\"].charge(order[\"id\"], order[\"total\"])\r\n        self.compensations.append(lambda: self.services[\"payment\"].refund(payment[\"id\"]))\r\n\r\n        inventory = await self.services[\"inventory\"].reserve(order[\"items\"])\r\n        self.compensations.append(lambda: self.services[\"inventory\"].release(order[\"items\"]))\r\n\r\n        shipping = await self.services[\"shipping\"].schedule(order[\"id\"])\r\n        return True\r\n    except Exception:\r\n        for compensate in reversed(self.compensations):\r\n            try:\r\n                await compensate()\r\n            except Exception:\r\n                pass  # Log compensation failure for manual recovery\r\n        return False</code></pre>\r\n<p>Use <strong>outbox pattern</strong> for reliable event publishing: write events to the same DB as the transaction, then a separate process publishes them.</p>\n"
                })
              }), "\n  "]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.code, {
          children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "✅ Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "🔖 Bookmark"
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "ip-s03-q5",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q5: Implement a thread-safe singleton in Python.\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Approach 1 — Metaclass (most common)"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
              children: [(0,jsx_runtime.jsxs)(_components.code, {
                children: ["import threading\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "class SingletonMeta(type):\r\n_instances = {}\r\n_lock = threading.Lock()"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "def __call__(cls, *args, **kwargs):\r\n    if cls not in cls._instances:\r\n        with cls._lock:\r\n            if cls not in cls._instances:\r\n                cls._instances[cls] = super().__call__(*args, **kwargs)\r\n    return cls._instances[cls]\n"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["class DatabaseConnection(metaclass=SingletonMeta):\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "init"
                  }), "(self):\r\nself.connected = False"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "def connect(self):\r\n    self.connected = True\r\n    return self</code></pre>\r\n<p><strong>Approach 2 — Module-level variable</strong>:</p>\r\n<pre><code># db.py\n"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["class _DatabaseConnection:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "init"
                  }), "(self):\r\nself.connected = False"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "def connect(self):\r\n    self.connected = True\n"
                  })
                }), "\n"]
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "db_connection = _DatabaseConnection()  # imported once, shared globally"
                })
              })]
            }), "\r\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Python modules are singletons (imported once and cached). For most use cases, module-level instantiation is sufficient and simpler than metaclasses."
            }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "✅ Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "🔖 Bookmark"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "ip-s03-q6",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q6: What is idempotency and how do you implement it in an API?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Idempotency"
              }), " means making the same request multiple times produces the same result as making it once. GET, PUT, DELETE are idempotent by HTTP spec. POST is not."]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Why it matters"
              }), ": Network failures can cause clients to retry. Without idempotency, a payment might be charged twice."]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Implementation — Idempotency key pattern"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsxs)(_components.code, {
                children: ["import uuid\nfrom datetime import datetime, timedelta\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["class IdempotencyMiddleware:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "init"
                  }), "(self, cache, ttl_hours: int = 24):\r\nself.cache = cache\r\nself.ttl = timedelta(hours=ttl_hours)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "async def process(self, request, call_next):\r\n    idempotency_key = request.headers.get(\"Idempotency-Key\")\r\n    if not idempotency_key:\r\n        return await call_next(request)\r\n\r\n    # Check if we've already processed this key\r\n    existing = self.cache.get(f\"idempotent:{idempotency_key}\")\r\n    if existing:\r\n        return existing\r\n\r\n    response = await call_next(request)\r\n\r\n    # Store the response for this key\r\n    if response.status_code &lt; 500:  # Don't cache server errors\r\n        self.cache.set(f\"idempotent:{idempotency_key}\", response, ttl=self.ttl)\r\n\r\n    return response</code></pre>\r\n<p>The client generates a unique key (UUID) and sends it with the request. The server stores the response keyed by this UUID, returning the cached response for retries.</p>\n"
                  })
                }), "\n  "]
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.code, {
            children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-mark-btn",
              children: "✅ Mark Reviewed"
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-bookmark-btn",
              children: "🔖 Bookmark"
            }), "\n"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.code, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "ip-s03-q7",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Q7: Design a URL shortener service.\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Core components"
                }), ":"]
              }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "API"
                  }), ": POST /shorten (takes URL, returns short code), GET /{short_code} (redirects)"]
                }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Short code generation"
                  }), ": Base62 encode auto-increment ID (deterministic, no collision) or random string (6-7 chars, check uniqueness)"]
                }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Storage"
                  }), ": PostgreSQL for metadata, Redis cache for hot URLs"]
                }), "\n    "]
              }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsxs)(_components.code, {
                  children: ["import string\nimport random\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "class URLShortener:\r\nALPHABET = string.ascii_letters + string.digits  # 62 chars"
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "def __init__(self, db, cache):\r\n    self.db = db\r\n    self.cache = cache\r\n\r\ndef encode(self, num: int) -&gt; str:\r\n    if num == 0:\r\n        return self.ALPHABET[0]\r\n    result = []\r\n    while num &gt; 0:\r\n        num, rem = divmod(num, 62)\r\n        result.append(self.ALPHABET[rem])\r\n    return \"\".join(reversed(result))\r\n\r\ndef decode(self, code: str) -&gt; int:\r\n    num = 0\r\n    for c in code:\r\n        num = num * 62 + self.ALPHABET.index(c)\r\n    return num\r\n\r\ndef shorten(self, original_url: str) -&gt; str:\r\n    url_id = self.db.insert_url(original_url)\r\n    short_code = self.encode(url_id)\r\n    self.db.update_short_code(url_id, short_code)\r\n    self.cache.set(f\"url:{short_code}\", original_url, ttl=86400)\r\n    return short_code\r\n\r\ndef resolve(self, short_code: str) -&gt; str:\r\n    cached = self.cache.get(f\"url:{short_code}\")\r\n    if cached:\r\n        return cached\r\n    url_id = self.decode(short_code)\r\n    original = self.db.get_url(url_id)\r\n    self.cache.set(f\"url:{short_code}\", original, ttl=3600)\r\n    return original</code></pre>\r\n<p><strong>Scale considerations</strong>: 100M URLs → use distributed ID generation (Snowflake). Cache hit ratio > 95% with Redis. Use CDN for geographic distribution.</p>\n"
                    })
                  }), "\n  "]
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.code, {
              children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
                className: "tp-qa-mark-btn",
                children: "✅ Mark Reviewed"
              }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                className: "tp-qa-bookmark-btn",
                children: "🔖 Bookmark"
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.code, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
              className: "tp-qa-card",
              "data-qid": "ip-s03-q8",
              children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                className: "tp-qa-question",
                children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                  className: "tp-qa-status"
                }), "\n    Q8: Explain the CAP theorem and how it affects database choices.\n  "]
              }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                className: "tp-qa-answer",
                children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                  children: "The CAP theorem states that a distributed data store can only provide two of three guarantees:"
                }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Consistency"
                    }), ": Every read receives the most recent write or an error"]
                  }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Availability"
                    }), ": Every request receives a response (not necessarily the latest data)"]
                  }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Partition tolerance"
                    }), ": The system continues operating despite network partitions"]
                  }), "\n    "]
                }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Practical tradeoffs"
                  }), ":"]
                }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "CP systems"
                    }), " (Consistency + Partition tolerance): Traditional databases (PostgreSQL, MySQL with sync replication). During a partition, they may refuse writes to maintain consistency."]
                  }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "AP systems"
                    }), " (Availability + Partition tolerance): DynamoDB, Cassandra, CouchDB. They accept writes even during partitions, leading to eventual consistency."]
                  }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "CA systems"
                    }), " (Consistency + Availability): Single-node databases. They don't handle partitions because they're not distributed."]
                  }), "\n    "]
                }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Real-world choices"
                  }), ": Use CP for financial transactions (consistency critical). Use AP for user sessions, logs, and social feeds (availability critical)."]
                }), "\n  "]
              }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                className: "tp-qa-mark-btn",
                children: "✅ Mark Reviewed"
              }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                className: "tp-qa-bookmark-btn",
                children: "🔖 Bookmark"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
              className: "tp-qa-card",
              "data-qid": "ip-s03-q9",
              children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                className: "tp-qa-question",
                children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                  className: "tp-qa-status"
                }), "\n    Q9: How would you design a webhook system?\n  "]
              }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                className: "tp-qa-answer",
                children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Webhook flow"
                  }), ": External service registers a callback URL → when an event occurs, we POST event data to that URL."]
                }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsxs)(_components.code, {
                    children: ["import httpx\nimport asyncio\nfrom dataclasses import dataclass, field\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "@dataclass\r\nclass WebhookSubscription:\r\nurl: str\r\nevents: set[str]\r\nsecret: str\r\nretry_count: int = 3"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["class WebhookDispatcher:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "init"
                      }), "(self, db, cache):\r\nself.db = db\r\nself.cache = cache"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "def register_hook(self, url: str, events: list[str], secret: str) -&gt; int:\r\n    hook_id = self.db.save_subscription(WebhookSubscription(url, set(events), secret))\r\n    return hook_id\r\n\r\nasync def dispatch(self, event_type: str, payload: dict) -&gt; None:\r\n    subscribers = self.db.get_subscribers_for_event(event_type)\r\n    tasks = [self._send_with_retry(sub, event_type, payload) for sub in subscribers]\r\n    await asyncio.gather(*tasks, return_exceptions=True)\r\n\r\nasync def _send_with_retry(self, sub: WebhookSubscription, event_type: str, payload: dict) -&gt; None:\r\n    headers = {\r\n        \"Content-Type\": \"application/json\",\r\n        \"X-Webhook-Event\": event_type,\r\n        \"X-Webhook-Signature\": self._sign(payload, sub.secret),\r\n    }\r\n    for attempt in range(sub.retry_count):\r\n        try:\r\n            async with httpx.AsyncClient() as client:\r\n                response = await client.post(sub.url, json=payload, headers=headers, timeout=10)\r\n                if response.status_code in (200, 201):\r\n                    return\r\n        except httpx.RequestError:\r\n            pass\r\n        await asyncio.sleep(2 ** attempt)  # exponential backoff\r\n    await self._send_to_dead_letter(sub, event_type, payload)\r\n\r\ndef _sign(self, payload: dict, secret: str) -&gt; str:\r\n    import hmac, hashlib, json\r\n    return hmac.new(secret.encode(), json.dumps(payload, sort_keys=True).encode(), hashlib.sha256).hexdigest()\r\n\r\nasync def _send_to_dead_letter(self, sub, event_type, payload):\r\n    self.db.save_failed_event(sub.url, event_type, payload)</code></pre>\r\n<p><strong>Key considerations</strong>: Retry with exponential backoff, dead letter queue for persistent failures, HMAC signature verification by the receiver to ensure authenticity.</p>\n"
                      })
                    }), "\n  "]
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.code, {
                children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
                  className: "tp-qa-mark-btn",
                  children: "✅ Mark Reviewed"
                }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                  className: "tp-qa-bookmark-btn",
                  children: "🔖 Bookmark"
                }), "\n"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.code, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                className: "tp-qa-card",
                "data-qid": "ip-s03-q10",
                children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                  className: "tp-qa-question",
                  children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                    className: "tp-qa-status"
                  }), "\n    Q10: What is the CQRS pattern and when should you use it?\n  "]
                }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                  className: "tp-qa-answer",
                  children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "CQRS"
                    }), " (Command Query Responsibility Segregation) separates read and write operations into different models. Commands (writes) use one model and data store, while queries (reads) use a potentially different model and store."]
                  }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Benefits"
                    }), ":"]
                  }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Independent scaling of read and write workloads"
                    }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Optimized read models (denormalized, cached) vs write models (normalized, validated)"
                    }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Security can be applied differently to reads vs writes"
                    }), "\n    "]
                  }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "When to use"
                    }), ": Complex domains where reads and writes have different shapes, high read-to-write ratio, event sourcing systems."]
                  }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "When NOT to use"
                    }), ": Simple CRUD applications, teams new to the pattern (adds complexity)."]
                  }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsxs)(_components.code, {
                      children: ["# Command side\nclass CreateOrderCommand:\n    def __init__(self, user_id: int, items: list[dict], shipping_address: str):\n        self.user_id = user_id\n        self.items = items\n        self.shipping_address = shipping_address\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["class OrderCommandHandler:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "init"
                        }), "(self, write_db, event_bus):\r\nself.db = write_db\r\nself.bus = event_bus"]
                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                        children: (0,jsx_runtime.jsx)(_components.code, {
                          children: "def handle(self, command: CreateOrderCommand) -&gt; int:\r\n    order_id = self.db.insert({\"user_id\": command.user_id, \"status\": \"pending\"})\r\n    for item in command.items:\r\n        self.db.insert_item(order_id, item)\r\n    self.bus.publish(\"order.created\", {\"order_id\": order_id})\r\n    return order_id\n"
                        })
                      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                        id: "query-side-uses-separate-read-optimized-store",
                        children: "Query side (uses separate read-optimized store)"
                      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["class OrderQueryService:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "init"
                        }), "(self, read_db, cache):\r\nself.read_db = read_db\r\nself.cache = cache"]
                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                        children: (0,jsx_runtime.jsx)(_components.code, {
                          children: "def get_order_summary(self, user_id: int) -&gt; list[dict]:\r\n    cache_key = f\"orders:summary:{user_id}\"\r\n    cached = self.cache.get(cache_key)\r\n    if cached:\r\n        return cached\r\n    orders = self.read_db.get_orders_with_items(user_id)\r\n    self.cache.set(cache_key, orders, ttl=60)\r\n    return orders</code></pre>\n"
                        })
                      }), "\n  "]
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.code, {
                  children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-mark-btn",
                    children: "✅ Mark Reviewed"
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-bookmark-btn",
                    children: "🔖 Bookmark"
                  }), "\n"]
                })]
              }), (0,jsx_runtime.jsxs)(_components.code, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "ip-s03-q11",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    Q11: How do you handle graceful shutdown in a Python web service?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                      children: "Graceful shutdown ensures in-flight requests complete, resources are cleaned up, and no data is lost."
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
                      children: [(0,jsx_runtime.jsxs)(_components.code, {
                        children: ["import asyncio\nimport signal\nfrom contextlib import asynccontextmanager\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["class GracefulShutdown:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                            children: "init"
                          }), "(self, app, timeout_seconds: int = 30):\r\nself.app = app\r\nself.timeout = timeout_seconds\r\nself._shutdown_event = asyncio.Event()"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "async def wait_for_shutdown(self):\r\n    loop = asyncio.get_running_loop()\r\n    for sig in (signal.SIGTERM, signal.SIGINT):\r\n        loop.add_signal_handler(sig, self._trigger_shutdown)\r\n    await self._shutdown_event.wait()\r\n\r\ndef _trigger_shutdown(self):\r\n    self._shutdown_event.set()\r\n\r\nasync def shutdown(self):\r\n    self._trigger_shutdown()\r\n    tasks = [t for t in asyncio.all_tasks() if t is not asyncio.current_task()]\r\n    for task in tasks:\r\n        task.cancel()\r\n    await asyncio.wait(tasks, timeout=self.timeout)\n"
                          })
                        }), "\n"]
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.code, {
                          children: "@asynccontextmanager\r\nasync def lifespan(app):\r\nshutdown = GracefulShutdown(app)\r\n# Startup\r\ndb_pool = await create_db_pool()\r\napp.state.db = db_pool\r\nyield\r\n# Shutdown\r\nprint(\"Shutting down...\")\r\nawait db_pool.close()\r\nprint(\"Connections closed\")"
                        })
                      })]
                    }), "\r\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Key elements"
                      }), ": Register signal handlers (SIGTERM, SIGINT), stop accepting new requests, wait for active requests to complete (within timeout), close database connections, cancel background tasks. Kubernetes sends SIGTERM and waits for terminationGracePeriodSeconds before SIGKILL."]
                    }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-mark-btn",
                    children: "✅ Mark Reviewed"
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-bookmark-btn",
                    children: "🔖 Bookmark"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "ip-s03-q12",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    Q12: Explain the Outbox Pattern for reliable message publishing.\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                      children: "The Outbox Pattern ensures that database changes and message publishing happen atomically. Instead of publishing a message directly, you write it to an \"outbox\" table in the same database transaction. A separate process reads the outbox and publishes messages."
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
                      children: [(0,jsx_runtime.jsxs)(_components.code, {
                        children: ["# Step 1: Write to outbox in the same transaction\nasync def create_order(order_data: dict):\n    async with db.transaction():\n        order_id = await db.execute(\"INSERT INTO orders ...\", order_data)\n        await db.execute(\n            \"INSERT INTO outbox (event_type, payload, created_at) VALUES (\\$1, \\$2, \\$3)\",\n            \"order.created\",\n            json.dumps({\"order_id\": order_id}),\n            datetime.utcnow()\n        )\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "step-2-background-process-publishes-from-outbox",
                          children: "Step 2: Background process publishes from outbox"
                        }), "\n"]
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.code, {
                          children: "async def outbox_publisher():\r\nwhile True:\r\nmessages = await db.fetch(\r\n\"SELECT * FROM outbox WHERE published = FALSE ORDER BY id LIMIT 100 FOR UPDATE SKIP LOCKED\"\r\n)\r\nfor msg in messages:\r\ntry:\r\nawait message_bus.publish(msg.event_type, json.loads(msg.payload))\r\nawait db.execute(\"UPDATE outbox SET published = TRUE WHERE id = $1\", msg.id)\r\nexcept Exception:\r\nlog.error(f\"Failed to publish message {msg.id}\")\r\nawait asyncio.sleep(1)"
                        })
                      })]
                    }), "\r\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "This pattern prevents the dual-write problem (DB transaction succeeds but message publish fails). It also enables exactly-once processing: the publisher is idempotent, and consumers handle duplicates."
                    }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-mark-btn",
                    children: "✅ Mark Reviewed"
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-bookmark-btn",
                    children: "🔖 Bookmark"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "ip-s03-q13",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    Q13: How do you handle database migrations in production?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Migration principles"
                      }), ": Backward-compatible changes only. Add before remove. Every migration must be reversible (up/down)."]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Safe migration strategies"
                      }), ":"]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
                      children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Add column without NOT NULL"
                        }), ": Add the column as nullable first, backfill data, then add NOT NULL."]
                      }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Rename column"
                        }), ": Don't rename directly. Add new column, dual-write to both, backfill, switch reads, remove old column."]
                      }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Split a table"
                        }), ": Create new table, dual-write, backfill, redirect reads, drop old table."]
                      }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Add index"
                        }), ": Use CONCURRENTLY (PostgreSQL) to avoid locking."]
                      }), "\n    "]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
                      children: [(0,jsx_runtime.jsxs)(_components.code, {
                        children: ["-- Safe migration: add a column\nBEGIN;\nALTER TABLE users ADD COLUMN full_name VARCHAR(200);\nCOMMIT;\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "-- Backfill in batches\r\n-- (application code, not SQL)\r\ndef backfill_full_name(db, batch_size: int = 1000):\r\nlast_id = 0\r\nwhile True:\r\nusers = db.fetch(\r\n\"SELECT id, first_name, last_name FROM users WHERE id > $1 ORDER BY id LIMIT $2\",\r\nlast_id, batch_size\r\n)\r\nif not users:\r\nbreak\r\nfor user in users:\r\ndb.execute(\r\n\"UPDATE users SET full_name = $1 WHERE id = $2\",\r\nf\"{user['first_name']} {user['last_name']}\",\r\nuser['id']\r\n)\r\nlast_id = users[-1]['id']"
                        }), "\n"]
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.code, {
                          children: "-- Finally add NOT NULL\r\nALTER TABLE users ALTER COLUMN full_name SET NOT NULL;"
                        })
                      })]
                    }), "\r\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "Use tools like Alembic (Python) or Flyway (JVM) for versioned, repeatable migrations. Always test migrations on a staging copy of production data."
                    }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-mark-btn",
                    children: "✅ Mark Reviewed"
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-bookmark-btn",
                    children: "🔖 Bookmark"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "ip-s03-q14",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    Q14: What is the Service Mesh pattern and when would you use it?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                      children: "A service mesh is a dedicated infrastructure layer for service-to-service communication. It offloads networking concerns from application code to a proxy sidecar (Envoy, Linkerd) attached to each service."
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Capabilities"
                      }), ":"]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Traffic management: canary releases, blue-green, circuit breaking, retries"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Observability: metrics, distributed tracing, access logs"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Security: mTLS between all services, policy enforcement"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Resilience: timeouts, retries, circuit breakers, rate limiting"
                      }), "\n    "]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "When to use"
                      }), ": Large microservice deployments (20+ services), when security/mTLS is required between all services, when you need sophisticated traffic management, when you want to decouple networking from application code."]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "When NOT to use"
                      }), ": Small deployments (the overhead isn't worth it), when simplicity is more important than advanced routing, for performance-critical paths (proxy adds ~5ms latency)."]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Popular implementations"
                      }), ": Istio (most features, complex), Linkerd (simpler, lower resource usage), Consul Connect (tight HashiCorp integration)."]
                    }), "\n  "]
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-mark-btn",
                    children: "✅ Mark Reviewed"
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-bookmark-btn",
                    children: "🔖 Bookmark"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "ip-s03-q15",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    Q15: Design an event-driven order processing system.\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "System architecture"
                      }), ":"]
                    }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsxs)(_components.code, {
                        children: ["# Events\n@dataclass\nclass OrderCreated:\n    order_id: str\n    user_id: str\n    items: list[dict]\n    total: float\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "@dataclass\r\nclass PaymentProcessed:\r\norder_id: str\r\ntransaction_id: str\r\nstatus: str"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "@dataclass\r\nclass InventoryReserved:\r\norder_id: str\r\nitems: list[dict]"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "@dataclass\r\nclass OrderShipped:\r\norder_id: str\r\ntracking_number: str"
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "event-bus-in-memory-for-illustration",
                          children: "Event bus (in-memory for illustration)"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["class EventBus:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                            children: "init"
                          }), "(self):\r\nself.handlers: dict[str, list] = {}"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "def subscribe(self, event_type: str, handler):\r\n    self.handlers.setdefault(event_type, []).append(handler)\r\n\r\ndef publish(self, event_type: str, event):\r\n    for handler in self.handlers.get(event_type, []):\r\n        handler(event)\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "order-service",
                          children: "Order service"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["class OrderService:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                            children: "init"
                          }), "(self, event_bus: EventBus):\r\nself.bus = event_bus"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "def create_order(self, user_id: str, items: list[dict]) -&gt; str:\r\n    order_id = str(uuid.uuid4())\r\n    total = sum(item[\"price\"] * item[\"quantity\"] for item in items)\r\n    self.bus.publish(\"order.created\", OrderCreated(order_id, user_id, items, total))\r\n    return order_id\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "saga-coordinator-subscribes-to-events-and-triggers-next-steps",
                          children: "Saga coordinator subscribes to events and triggers next steps"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["class OrderSaga:\r\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
                            children: "init"
                          }), "(self, bus, payment_svc, inventory_svc, shipping_svc):\r\nbus.subscribe(\"order.created\", self.on_order_created)\r\nbus.subscribe(\"payment.processed\", self.on_payment_processed)\r\nbus.subscribe(\"inventory.reserved\", self.on_inventory_reserved)"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "def on_order_created(self, event: OrderCreated):\r\n    payment_svc.process_payment(event.order_id, event.total)\r\n\r\ndef on_payment_processed(self, event: PaymentProcessed):\r\n    if event.status == \"success\":\r\n        inventory_svc.reserve_items(event.order_id)\r\n    else:\r\n        order_svc.mark_failed(event.order_id)\r\n\r\ndef on_inventory_reserved(self, event: InventoryReserved):\r\n    shipping_svc.schedule_shipment(event.order_id)</code></pre>\r\n<p>This event-driven design provides loose coupling, independence, and resilience. Each service operates asynchronously and can fail independently.</p>\n"
                          })
                        }), "\n  "]
                      })
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.code, {
                    children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
                      className: "tp-qa-mark-btn",
                      children: "✅ Mark Reviewed"
                    }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                      className: "tp-qa-bookmark-btn",
                      children: "🔖 Bookmark"
                    }), "\n"]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.code, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "chapter-quiz",
                    children: "Chapter Quiz"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Q1"
                    }), ": Which HTTP method is NOT idempotent?"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "a) GET\r\nb) PUT\r\nc) DELETE\r\nd) POST"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "ip-s03-quiz1",
                    children: [(0,jsx_runtime.jsx)(_components.summary, {
                      children: "Show Answer"
                    }), (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: [(0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Answer: d) POST"
                        })
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: "POST is not idempotent — multiple identical POST requests will create multiple resources. GET, PUT, and DELETE are idempotent per HTTP spec."
                      })]
                    })]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Q2"
                    }), ": What does the Python GIL prevent?"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "a) Multiple threads from running simultaneously\r\nb) Multiple processes from running simultaneously\r\nc) Garbage collection\r\nd) I/O operations in threads"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "ip-s03-quiz2",
                    children: [(0,jsx_runtime.jsx)(_components.summary, {
                      children: "Show Answer"
                    }), (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: [(0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Answer: a) Multiple threads from running simultaneously"
                        })
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: "The GIL prevents multiple native threads from executing Python bytecode simultaneously, limiting CPU-bound threading but not I/O-bound threading."
                      })]
                    })]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Q3"
                    }), ": Which pattern solves distributed transactions across microservices?"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "a) Singleton\r\nb) Saga\r\nc) Proxy\r\nd) Factory"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "ip-s03-quiz3",
                    children: [(0,jsx_runtime.jsx)(_components.summary, {
                      children: "Show Answer"
                    }), (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: [(0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Answer: b) Saga"
                        })
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: "The Saga pattern manages distributed transactions by executing local transactions in each service and invoking compensating transactions on failure."
                      })]
                    })]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Q4"
                    }), ": What does CAP theorem's \"P\" stand for?"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "a) Performance\r\nb) Partition tolerance\r\nc) Persistence\r\nd) Parallelism"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "ip-s03-quiz4",
                    children: [(0,jsx_runtime.jsx)(_components.summary, {
                      children: "Show Answer"
                    }), (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: [(0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Answer: b) Partition tolerance"
                        })
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: "Partition tolerance means the system continues operating despite network partitions. The CAP theorem states you can only guarantee two of Consistency, Availability, and Partition tolerance."
                      })]
                    })]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Q5"
                    }), ": Which HTTP status code indicates rate limiting?"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "a) 400\r\nb) 403\r\nc) 429\r\nd) 503"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "ip-s03-quiz5",
                    children: [(0,jsx_runtime.jsx)(_components.summary, {
                      children: "Show Answer"
                    }), (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: [(0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Answer: c) 429"
                        })
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: "429 Too Many Requests specifically indicates the client has exceeded a rate limit. Include a Retry-After header to indicate when to retry."
                      })]
                    })]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "exercises",
                    children: "Exercises"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Easy"
                    }), " — Implement a simple rate limiter using the token bucket algorithm. Support configurable rate (tokens/second) and burst capacity. Write unit tests."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Easy"
                    }), " — Create a FastAPI health check endpoint that reports the status of a database connection and a Redis cache. Return 200 if all healthy, 503 otherwise."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Medium"
                    }), " — Implement a circuit breaker pattern in Python. Track failure count, open the circuit after N failures, test after a cooldown period (half-open), and close on success."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Medium"
                    }), " — Build a simple task queue with Redis (or in-memory) that supports: enqueue, dequeue, retry with backoff, and dead-letter queue. Write a consumer that processes tasks."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Hard"
                    }), " — Design and implement a minimal e-commerce backend with user service, order service, and inventory service. Use event-driven communication between services. Implement the Saga pattern for order placement with compensating transactions for failures."]
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
                          children: "Explain this topic in under 60 seconds, then give a real-world analogy."
                        }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Design a minimal, well-typed function in this chapter."
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
                          children: "Describe a production bug caused by misunderstanding this technique. How did you diagnose and fix it?"
                        }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "How would you scale a system using this technique from 10 users to 10 million?"
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
                          children: "Compare this approach with the closest alternative approach. When would you choose each?"
                        }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Walk through how you would test a component built on this."
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
                          children: "How does Backend Coding Interview behave differently at scale — memory, throughput, or precision-wise?"
                        }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "How would you make an implementation of this technique run faster on GPU hardware?"
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
                        children: "Write the smallest possible implementation of this technique that is production-quality."
                      }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "resume-tips",
                    children: "Resume Tips"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Backend Coding Interview\")."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Add a bullet describing a project that applies Backend Coding Interview to real data, with numbers."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Mention the tools and libraries you used alongside Backend Coding Interview (linters, test frameworks, profiling tools)."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Keep resume bullets under 15 words and start each with an action verb."
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "interview-day-checklist",
                    children: "Interview Day Checklist"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Rehearse a 60-second explanation of Backend Coding Interview and one real-world analogy."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Prepare one STAR story about debugging a Backend Coding Interview-related production issue."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Review complexity and edge cases for the classic problem in this chapter."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Have questions ready: how does the team apply Backend Coding Interview in production today?"
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
                      }), " Backend Coding Interview builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "True."
                      }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "True or False:"
                      }), " You should write at least one code example for Backend Coding Interview before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "True."
                      }), " Active recall with hands-on code beats passive reading for retention."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "True or False:"
                      }), " The complexity analysis for Backend Coding Interview is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "False."
                      }), " Complexity grows with input size; always state best, average, and worst case."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "True or False:"
                      }), " Edge cases (empty input, invalid input, boundary values) matter for Backend Coding Interview in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "True."
                      }), " Most production bugs come from unhandled edge cases."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "True or False:"
                      }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "False."
                      }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "fill-in-the-blank",
                    children: "Fill in the Blank"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The chapter that covers Backend Coding Interview is Chapter ___ of this module. — Answer: check the module's table of contents."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The time complexity of the standard approach to 03 Backend Coding Interview is ___. — Answer: O(n) typical, O(1) best case"
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The main edge case to handle when implementing 03 Backend Coding Interview is ___. — Answer: empty input, boundary values, invalid types"
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The tools commonly used to debug Backend Coding Interview issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The related topic that connects to Backend Coding Interview in the next chapter is ___. — Answer: see the Next Topic section."
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "scenario-questions",
                    children: "Scenario Questions"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Scenario:"
                        }), " A teammate ships a change involving Backend Coding Interview that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Scenario:"
                        }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Scenario:"
                        }), " A new hire asks you to explain Backend Coding Interview in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "Scenario:"
                        }), " Your team's codebase has three different patterns for Backend Coding Interview and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "output-questions",
                    children: "Output Questions"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "What is the output of the simplest correct implementation of this technique on an empty input?"
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
                          children: "Complete Medium exercises, explain Backend Coding Interview to someone else"
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
                      children: "Always write a one-line example of Backend Coding Interview from memory before opening the chapter — active recall first."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Use the chapter's Revision Notes as a checklist: you have mastered Backend Coding Interview when you can explain each bullet."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "For interviews, practice explaining Backend Coding Interview twice: once with a technical audience, once with a non-technical audience."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Keep a personal examples file where you collect your own Backend Coding Interview snippets; interviewers love original examples."
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "memory-tricks",
                    children: "Memory Tricks"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Acronym"
                      }), ": build a mnemonic from the 5 key concepts of Backend Coding Interview listed in the Chapter at a Glance table."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Story"
                      }), ": link Backend Coding Interview to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Number anchor"
                      }), ": remember the complexity of Backend Coding Interview by connecting it to a known algorithm of the same class."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Color code"
                      }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Teach-back"
                      }), ": explain Backend Coding Interview to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
                      children: "GitHub repositories of production implementations Coding Interview"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "related-topics",
                    children: "Related Topics"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Previous chapter"
                      }), " in Module 21 — builds the foundation for 03 Backend Coding Interview"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Next chapter"
                      }), " — extends 03 Backend Coding Interview with advanced techniques"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Module 07 System Design"
                      }), " — how 03 Backend Coding Interview fits into scalable production architectures"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Module 21 Interview Preparation"
                      }), " — FAANG-style questions on 03 Backend Coding Interview"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Module 19 Capstone Projects"
                      }), " — end-to-end application of 03 Backend Coding Interview"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "faqs",
                    children: "FAQs"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Do I need to memorize all of 03 Backend Coding Interview?"
                      }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "What if I get stuck on an exercise?"
                      }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "How much time should I spend on 03 Backend Coding Interview?"
                      }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Is 03 Backend Coding Interview asked in FAANG interviews?"
                      }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "What's the fastest way to master 03 Backend Coding Interview?"
                      }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "important-notes",
                    children: "Important Notes"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Backend Coding Interview is a core requirement for the rest of this module — do not skip the examples."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Always analyze complexity (time and space) when working with Backend Coding Interview."
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
                      children: "Backend Coding Interview emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The tools used for Backend Coding Interview today evolved from simpler versions; the chapter covers the modern, recommended approach."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Interviewers value knowing one historical fact about Backend Coding Interview — it shows genuine interest, not just cramming."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The library/tooling ecosystem around Backend Coding Interview changes quickly; focus on fundamentals that remain stable."
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
                          children: "03 Backend Coding Interview is like a GPS navigation system"
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
                        }), " — this chapter contributes the Backend Coding Interview skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "flashcards",
                    children: "Flashcards"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "21interviewpreparation-03backendcodinginterview-flash1",
                    children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                      className: "tp-qa-question",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                        className: "tp-qa-status"
                      }), "\n    Which HTTP method is NOT idempotent?\n  "]
                    }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                        children: "d) POST"
                      }), "\n  "]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "21interviewpreparation-03backendcodinginterview-flash2",
                    children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                      className: "tp-qa-question",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                        className: "tp-qa-status"
                      }), "\n    What does the Python GIL prevent?\n  "]
                    }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                        children: "a) Multiple threads from running simultaneously"
                      }), "\n  "]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "21interviewpreparation-03backendcodinginterview-flash3",
                    children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                      className: "tp-qa-question",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                        className: "tp-qa-status"
                      }), "\n    Which pattern solves distributed transactions across microservices?\n  "]
                    }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                        children: "b) Saga"
                      }), "\n  "]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "21interviewpreparation-03backendcodinginterview-flash4",
                    children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                      className: "tp-qa-question",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                        className: "tp-qa-status"
                      }), "\n    What does CAP theorem's \"P\" stand for?\n  "]
                    }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                      className: "tp-qa-answer",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                        children: "b) Partition tolerance"
                      }), "\n  "]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    "data-qid": "21interviewpreparation-03backendcodinginterview-flash5",
                    children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                      className: "tp-qa-question",
                      children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                        className: "tp-qa-status"
                      }), "\n    Which HTTP status code indicates rate limiting?\n  "]
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
                      children: "Official documentation of the primary library for Backend Coding Interview (linked in Further Reading)"
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The classic paper or textbook chapter introducing Backend Coding Interview (see References below)"
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The standard library reference for Backend Coding Interview-related functions"
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Engineering blog posts from companies running Backend Coding Interview in production at scale"
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
                      children: "cProfile / py-spy for performance profiling Coding Interview"
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
                      }), ": Add structured logging at each stage of the 03 Backend Coding Interview pipeline to identify exactly where the failure occurs."]
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
                      children: "Explain the core idea in 60 seconds."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Write a minimal working example of Backend Coding Interview."
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
                      children: "Tell me about a time you debugged a Backend Coding Interview problem in a project."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "How would you design a system where Backend Coding Interview is used at scale?"
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
                      children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_backend_coding_interview(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Backend Coding Interview.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Backend Coding Interview here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
                          children: "Explain Backend Coding Interview without notes"
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
                      href: "/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/04-ml-foundations-interview",
                      children: "ML Foundations Interview"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                    id: "limitations",
                    children: "Limitations"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Backend Coding Interview, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "Performance of Backend Coding Interview depends on input size and distribution — always benchmark for your own data."
                    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
                    }), "\n"]
                  }), "\n"]
                })]
              })]
            })]
          })]
        })]
      })]
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