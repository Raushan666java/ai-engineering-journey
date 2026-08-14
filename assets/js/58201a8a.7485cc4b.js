"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[64033],{

/***/ 15660
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_01_phase_0_backend_hardening_md_582_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-01-phase-0-backend-hardening-md-582.json
const site_docs_courses_ai_agent_engineer_01_phase_0_backend_hardening_md_582_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/01-phase0-backend-hardening","title":"Phase 0 — Compressed Backend Hardening","description":"Duration: Week 1, ~12-15 hours","source":"@site/docs/courses/ai-agent-engineer/01-phase0-backend-hardening.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/01-phase0-backend-hardening","permalink":"/ai-engineering-journey/ai-agent-engineer/01-phase0-backend-hardening","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"01-phase0-backend-hardening","slug":"/ai-agent-engineer/01-phase0-backend-hardening","title":"Phase 0 — Compressed Backend Hardening","sidebar_label":"Phase 0 — Compressed Backend Hardening","sidebar_position":2},"sidebar":"course-ai-agent-engineer","previous":{"title":"Laravel Backend Developer → AI Agent Engineer","permalink":"/ai-engineering-journey/ai-agent-engineer"},"next":{"title":"Phase 1 — Python + FastAPI + AsyncIO","permalink":"/ai-engineering-journey/ai-agent-engineer/02-phase1-python-fastapi-async"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/01-phase0-backend-hardening.md


const frontMatter = {
	id: '01-phase0-backend-hardening',
	slug: '/ai-agent-engineer/01-phase0-backend-hardening',
	title: 'Phase 0 — Compressed Backend Hardening',
	sidebar_label: 'Phase 0 — Compressed Backend Hardening',
	sidebar_position: 2
};
const contentTitle = 'Phase 0 — Compressed Backend Hardening';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "0.1 Redis: Cache vs Queue/Broker",
  "id": "01-redis-cache-vs-queuebroker",
  "level": 2
}, {
  "value": "Redis as Cache",
  "id": "redis-as-cache",
  "level": 3
}, {
  "value": "Redis as Queue/Broker",
  "id": "redis-as-queuebroker",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise",
  "level": 3
}, {
  "value": "0.2 Redis Pub/Sub",
  "id": "02-redis-pubsub",
  "level": 2
}, {
  "value": "When to use Pub/Sub",
  "id": "when-to-use-pubsub",
  "level": 3
}, {
  "value": "When NOT to use Pub/Sub",
  "id": "when-not-to-use-pubsub",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-1",
  "level": 3
}, {
  "value": "0.3 OpenAPI/Swagger Spec Structure",
  "id": "03-openapiswagger-spec-structure",
  "level": 2
}, {
  "value": "What FastAPI generates for you",
  "id": "what-fastapi-generates-for-you",
  "level": 3
}, {
  "value": "What the generated <code>/docs</code> shows",
  "id": "what-the-generated-docs-shows",
  "level": 3
}, {
  "value": "Key things to check when debugging",
  "id": "key-things-to-check-when-debugging",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-2",
  "level": 3
}, {
  "value": "0.4 JWT Refresh-Token Rotation Pattern",
  "id": "04-jwt-refresh-token-rotation-pattern",
  "level": 2
}, {
  "value": "Flow",
  "id": "flow",
  "level": 3
}, {
  "value": "Implementation sketch",
  "id": "implementation-sketch",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-3",
  "level": 3
}, {
  "value": "0.5 Rate Limiting: Token Bucket vs Sliding Window",
  "id": "05-rate-limiting-token-bucket-vs-sliding-window",
  "level": 2
}, {
  "value": "Token Bucket",
  "id": "token-bucket",
  "level": 3
}, {
  "value": "Sliding Window",
  "id": "sliding-window",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-4",
  "level": 3
}, {
  "value": "0.6 Microservices vs Modular Monolith",
  "id": "06-microservices-vs-modular-monolith",
  "level": 2
}, {
  "value": "Modular Monolith",
  "id": "modular-monolith",
  "level": 3
}, {
  "value": "Microservices",
  "id": "microservices",
  "level": 3
}, {
  "value": "Applied to ApexERP",
  "id": "applied-to-apexerp",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-5",
  "level": 3
}, {
  "value": "0.7 Idempotency Keys for Payment/Webhook Endpoints",
  "id": "07-idempotency-keys-for-paymentwebhook-endpoints",
  "level": 2
}, {
  "value": "Implementation",
  "id": "implementation-1",
  "level": 3
}, {
  "value": "Why this matters for your real estate module",
  "id": "why-this-matters-for-your-real-estate-module",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-6",
  "level": 3
}, {
  "value": "0.8 API Versioning Strategies",
  "id": "08-api-versioning-strategies",
  "level": 2
}, {
  "value": "Four common strategies",
  "id": "four-common-strategies",
  "level": 3
}, {
  "value": "Recommendation: URL prefix for external APIs",
  "id": "recommendation-url-prefix-for-external-apis",
  "level": 3
}, {
  "value": "When to bump version",
  "id": "when-to-bump-version",
  "level": 3
}, {
  "value": "When NOT to bump",
  "id": "when-not-to-bump",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-7",
  "level": 3
}, {
  "value": "0.9 WebSocket Fundamentals",
  "id": "09-websocket-fundamentals",
  "level": 2
}, {
  "value": "WebSocket vs HTTP",
  "id": "websocket-vs-http",
  "level": 3
}, {
  "value": "FastAPI WebSocket example",
  "id": "fastapi-websocket-example",
  "level": 3
}, {
  "value": "WebSocket for agent streaming",
  "id": "websocket-for-agent-streaming",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-8",
  "level": 3
}, {
  "value": "TypeScript Equivalents — Backend Patterns",
  "id": "typescript-equivalents--backend-patterns",
  "level": 2
}, {
  "value": "Redis Wrapper with TypeScript Generics",
  "id": "redis-wrapper-with-typescript-generics",
  "level": 3
}, {
  "value": "Token Bucket Rate Limiter",
  "id": "token-bucket-rate-limiter",
  "level": 3
}, {
  "value": "Sliding Window Rate Limiter",
  "id": "sliding-window-rate-limiter",
  "level": 3
}, {
  "value": "JWT Token Service with Rotation",
  "id": "jwt-token-service-with-rotation",
  "level": 3
}, {
  "value": "API Versioning Strategy Pattern",
  "id": "api-versioning-strategy-pattern",
  "level": 3
}, {
  "value": "Architecture Diagrams — Phase 0 Patterns",
  "id": "architecture-diagrams--phase-0-patterns",
  "level": 2
}, {
  "value": "Redis Usage Patterns",
  "id": "redis-usage-patterns",
  "level": 3
}, {
  "value": "JWT Refresh-Token Rotation Flow",
  "id": "jwt-refresh-token-rotation-flow",
  "level": 3
}, {
  "value": "Rate Limiting Algorithms",
  "id": "rate-limiting-algorithms",
  "level": 3
}, {
  "value": "Phase 0 Done Checkpoint",
  "id": "phase-0-done-checkpoint",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
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
        id: "phase-0--compressed-backend-hardening",
        children: "Phase 0 — Compressed Backend Hardening"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " Week 1, ~12-15 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Fill specific gaps between your Laravel/Node experience and what Python agent engineering demands. These are topics you've touched but haven't systematically covered."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/01-phase0-backend-hardening/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/01-phase0-backend-hardening/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/01-phase0-backend-hardening/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/01-phase0-backend-hardening/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/01-phase0-backend-hardening/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/01-phase0-backend-hardening/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-table",
      children: "Topic Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subtopic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Done checkpoint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis as cache vs Redis as queue/broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can explain when to use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SETEX"
            }), " vs a Redis-backed job queue without looking it up"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis pub/sub pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can write a 10-line Python pub/sub demo (publisher + subscriber)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI/Swagger spec structure (FastAPI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can read a generated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/docs"
            }), " page and identify request/response schema, status codes, examples"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT refresh-token rotation pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can diagram access-token + refresh-token lifecycle from memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting: token bucket vs sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can name which algorithm ", (0,jsx_runtime.jsx)(_components.code, {
              children: "slowapi"
            }), " uses by default and why it matters for AI endpoints"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices vs modular monolith"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can argue both sides applied to ApexERP architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotency keys for payment/webhook endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can explain why a webhook retry without idempotency breaks a payment flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API versioning strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can argue URL prefix vs header vs query param vs all three"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can build a WebSocket echo server and explain stateful vs stateless"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01-redis-cache-vs-queuebroker",
      children: "0.1 Redis: Cache vs Queue/Broker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You use Redis in Laravel for cache and sessions. In agent engineering, Redis appears in two distinct roles:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redis-as-cache",
      children: "Redis as Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# FastAPI + Redis cache example\nimport redis.asyncio as aioredis\nfrom fastapi import FastAPI, Depends\n\napp = FastAPI()\n\nasync def get_redis():\n    return await aioredis.from_url(\"redis://localhost:6379\")\n\n@app.get(\"/expensive-computation\")\nasync def expensive(redis: aioredis.Redis = Depends(get_redis)):\n    cached = await redis.get(\"expensive_result\")\n    if cached:\n        return {\"data\": cached, \"source\": \"cache\"}\n    result = do_expensive_work()\n    await redis.setex(\"expensive_result\", 300, result)  # TTL: 5 min\n    return {\"data\": result, \"source\": \"fresh\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redis-as-queuebroker",
      children: "Redis as Queue/Broker"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Redis-backed job queues (RQ, Celery with Redis broker) solve a different problem: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "durable async work that must survive server restarts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# FastAPI BackgroundTasks — NOT durable\nfrom fastapi import BackgroundTasks\n\ndef process_document(doc_id: str):\n    chunk_and_embed(doc_id)  # If server crashes here, job is lost\n\n@app.post(\"/upload\")\nasync def upload(task: BackgroundTasks, doc_id: str):\n    task.add_task(process_document, doc_id)\n    return {\"status\": \"accepted\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# RQ (Redis Queue) — IS durable\nfrom rq import Queue\nfrom redis import Redis\n\nredis_conn = Redis()\nqueue = Queue(\"document_ingestion\", connection=redis_conn)\n\ndef process_document(doc_id: str):\n    chunk_and_embed(doc_id)\n\n@app.post(\"/upload\")\nasync def upload(doc_id: str):\n    job = queue.enqueue(process_document, doc_id)\n    return {\"status\": \"accepted\", \"job_id\": job.id}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When BackgroundTasks is enough:"
      }), " Email sending, webhook calls, short-lived tasks (< 30s) where losing a job is acceptable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When you need a queue:"
      }), " Document ingestion, LLM batch processing, media generation, any task that takes >30s or must not be lost on crash."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python script that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connects to Redis"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sets a key with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SETEX"
        }), " (TTL of 60 seconds)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enqueues a simple job using RQ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prints the value from cache and the job ID from the queue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# scratch/redis-demo/demo.py\nimport time\nfrom redis import Redis\nfrom rq import Queue\n\nr = Redis()\nqueue = Queue(connection=r)\n\n# Cache demo\nr.setex(\"demo_key\", 60, \"cached_value\")\nprint(f\"From cache: {r.get('demo_key')}\")\n\n# Queue demo\ndef my_job(name):\n    return f\"Hello, {name}\"\n\njob = queue.enqueue(my_job, \"World\")\nprint(f\"Job ID: {job.id}\")\ntime.sleep(1)\nprint(f\"Job result: {job.result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02-redis-pubsub",
      children: "0.2 Redis Pub/Sub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pub/Sub (Publish/Subscribe) is a messaging pattern where publishers send messages to channels, and subscribers receive all messages on channels they've subscribed to. Unlike queues, messages are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not stored"
      }), " — if nobody is subscribed, the message is lost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-pubsub",
      children: "When to use Pub/Sub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time notifications (new document ingested, pipeline stage completed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broadcasting events to multiple consumers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-service communication where delivery guarantee is not required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-not-to-use-pubsub",
      children: "When NOT to use Pub/Sub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When the receiver might be offline (use a queue instead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When you need to replay messages (use a log/stream instead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When delivery must be guaranteed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# publisher.py\nimport redis.asyncio as aioredis\nimport asyncio\n\nasync def main():\n    r = await aioredis.from_url(\"redis://localhost:6379\")\n    await r.publish(\"pipeline:events\", '{\"stage\": \"lyrics_generated\", \"duration\": 12.4}')\n    print(\"Published event\")\n    await r.aclose()\n\nasyncio.run(main())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# subscriber.py\nimport redis.asyncio as aioredis\nimport asyncio\n\nasync def main():\n    r = await aioredis.from_url(\"redis://localhost:6379\")\n    pubsub = r.pubsub()\n    await pubsub.subscribe(\"pipeline:events\")\n    async for message in pubsub.listen():\n        if message[\"type\"] == \"message\":\n            print(f\"Received: {message['data']}\")\n\nasyncio.run(main())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create two files — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pub.py"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sub.py"
      }), ". Run subscriber first, then publisher. The subscriber should print the message. Then kill the subscriber and publish again — verify the message is lost (this is the key difference from a queue)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03-openapiswagger-spec-structure",
      children: "0.3 OpenAPI/Swagger Spec Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastAPI auto-generates OpenAPI docs. You need to be able to read and debug the generated schema."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-fastapi-generates-for-you",
      children: "What FastAPI generates for you"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel, Field\nfrom fastapi import FastAPI, status\n\napp = FastAPI(title=\"RAG Demo API\", version=\"1.0.0\")\n\nclass QueryRequest(BaseModel):\n    query: str = Field(..., description=\"Natural language question\", min_length=3)\n    top_k: int = Field(5, description=\"Number of chunks to retrieve\", ge=1, le=20)\n\nclass SourceChunk(BaseModel):\n    text: str\n    score: float\n    metadata: dict\n\nclass QueryResponse(BaseModel):\n    answer: str\n    sources: list[SourceChunk]\n\n@app.post(\"/query\", response_model=QueryResponse, status_code=status.HTTP_200_OK)\nasync def query(req: QueryRequest):\n    ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "what-the-generated-docs-shows",
      children: ["What the generated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/docs"
      }), " shows"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each Pydantic model becomes a schema. Each endpoint shows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Request body"
        }), ": field names, types, descriptions, constraints (min_length, ge, le)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response body"
        }), ": the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "response_model"
        }), " structure with all nested models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status codes"
        }), ": documented via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "status_code"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "responses"
        }), " parameter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples"
        }), ": added via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Field(..., example=\"...\")"
        }), " or model-level ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Config"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "json_schema_extra"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-things-to-check-when-debugging",
      children: "Key things to check when debugging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response model matches actual return"
        }), " — FastAPI serializes the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "response_model"
        }), ", not whatever you return. If they differ, you get a serialization error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation constraints"
        }), " — Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Field(..., ge=1)"
        }), " for integers, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "min_length"
        }), " for strings. Missing validation is the #1 OpenAPI bug."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example values"
        }), " — Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Field(..., example=\"What is the gym membership fee?\")"
        }), " so the Swagger UI shows real examples."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a throwaway FastAPI app with a single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /test"
      }), " endpoint. Add a Pydantic model with 5 fields of different types (str, int, float, list, optional). Hit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/docs"
      }), " and verify every field, type, and constraint renders correctly. Then deliberately add a validation error (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "age: int = Field(ge=150)"
      }), ") and see what generates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-jwt-refresh-token-rotation-pattern",
      children: "0.4 JWT Refresh-Token Rotation Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You've implemented JWTs in Laravel. The gap is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rotation pattern"
      }), " — replacing the refresh token every time it's used, so a stolen refresh token can only be used once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flow",
      children: "Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. POST /auth/login → returns { access_token, refresh_token }\n2. POST /auth/refresh (with refresh_token) → returns NEW { access_token, refresh_token }\n3. Old refresh_token is invalidated immediately\n4. If old refresh_token is used again → both tokens are revoked (someone stole it)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-sketch",
      children: "Implementation sketch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends, HTTPException\nfrom pydantic import BaseModel\nimport hashlib, secrets\n\ntokens: dict[str, str] = {}  # In production: Redis\n\ndef issue_token_pair(user_id: str):\n    access = secrets.token_urlsafe(32)\n    refresh = secrets.token_urlsafe(64)\n    refresh_hash = hashlib.sha256(refresh.encode()).hexdigest()\n    tokens[refresh_hash] = user_id\n    return {\"access_token\": access, \"refresh_token\": refresh}\n\n@app.post(\"/auth/refresh\")\nasync def refresh(refresh_token: str):\n    refresh_hash = hashlib.sha256(refresh_token.encode()).hexdigest()\n    user_id = tokens.pop(refresh_hash, None)\n    if not user_id:\n        raise HTTPException(status_code=401, detail=\"Invalid or reused refresh token\")\n    return issue_token_pair(user_id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagram the above flow on paper or in a markdown file. Include: what happens when a refresh token is stolen, what the server logs look like during a replay attack, and what the client should do when it gets a 401 on refresh."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05-rate-limiting-token-bucket-vs-sliding-window",
      children: "0.5 Rate Limiting: Token Bucket vs Sliding Window"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-bucket",
      children: "Token Bucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A bucket holds N tokens. Every request consumes 1 token. Tokens refill at a fixed rate (e.g., 10 tokens per minute). If the bucket is empty, the request is rejected."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# slowapi implements token bucket by default\nfrom slowapi import Limiter\nfrom slowapi.util import get_remote_address\n\nlimiter = Limiter(key_func=get_remote_address)\napp.state.limiter = limiter\n\n@app.get(\"/expensive\")\n@limiter.limit(\"10/minute\")\nasync def expensive():\n    return {\"data\": \"slow down, cowboy\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why token bucket for AI endpoints:"
      }), " AI calls have spiky cost. A burst of 10 queries in one second costs much more than 10 queries spread over a minute. Token bucket permits bursts up to bucket size, which gives users a better experience while still capping peak cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sliding-window",
      children: "Sliding Window"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Counts requests in a moving time window (e.g., last 60 seconds). If count exceeds threshold, reject."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why sliding window for login endpoints:"
      }), " More precise enforcement — a user doing 100 requests across the boundary of two token-bucket refill windows could technically send 200. Sliding window prevents this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Install ", (0,jsx_runtime.jsx)(_components.code, {
        children: "slowapi"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install slowapi"
      }), "), add the decorator to a test endpoint, send 11 requests with curl in a loop, and verify the 11th gets a 429."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# PowerShell one-liner to test rate limiting\nfor ($i=0; $i -lt 12; $i++) { curl -s http://localhost:8000/expensive; \"---\"; Start-Sleep -Milliseconds 100 }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06-microservices-vs-modular-monolith",
      children: "0.6 Microservices vs Modular Monolith"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modular-monolith",
      children: "Modular Monolith"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A single deployable unit with clear module boundaries. Each module has its own database schema, API surface (internal), and test suite, but they share the same process."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When it wins:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your team is 1-5 people (you)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You're iterating fast — refactoring across modules is an IDE action, not an API change + deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transactional consistency matters (no distributed transactions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "microservices",
      children: "Microservices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Separate deployable units communicating over a network."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When it wins:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your team is 10+ people"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different services have different scaling requirements (media generation needs GPUs, auth needs low latency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need polyglot persistence (Postgres for transactions, vector DB for search, blob storage for media)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applied-to-apexerp",
      children: "Applied to ApexERP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your current architecture (monolithic Laravel with n8n for workflows) is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modular monolith with an external orchestration layer"
      }), " — a perfectly valid pattern. Moving individual modules to FastAPI microservices would make sense if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The module needs GPU access (media pipeline)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The module has completely different traffic patterns (document ingestion spikes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to deploy a public API without exposing the admin dashboard surface"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a 1-page note arguing both sides for ApexERP's specific architecture. Which module (if any) would benefit from being a separate service? Which module would become strictly worse as a microservice? Keep the note; it's a real interview talking point."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "07-idempotency-keys-for-paymentwebhook-endpoints",
      children: "0.7 Idempotency Keys for Payment/Webhook Endpoints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " A payment gateway sends a webhook for a successful charge. Your server processes it, credits the user. But the gateway didn't get a 200 response (network blip), so it retries. Now your server credits the user twice."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The fix:"
      }), " Idempotency key — a unique identifier the client sends with every request. The server checks \"have I already processed this key?\" before doing any work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-1",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\nfrom fastapi import FastAPI, Header, HTTPException\nfrom redis import Redis\n\nr = Redis()\napp = FastAPI()\n\n@app.post(\"/stripe-webhook\")\nasync def stripe_webhook(\n    body: dict,\n    idempotency_key: str = Header(alias=\"Idempotency-Key\")\n):\n    key_hash = hashlib.sha256(idempotency_key.encode()).hexdigest()\n\n    if r.exists(key_hash):\n        return {\"status\": \"already_processed\"}\n\n    r.setex(key_hash, 86400, \"processed\")  # Dedup for 24 hours\n    process_payment(body)\n    return {\"status\": \"success\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-this-matters-for-your-real-estate-module",
      children: "Why this matters for your real estate module"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your booking/payment module processes financial transactions. A webhook retry without idempotency creates double bookings or double payments. The Stripe SDK handles this on Stripe's side, but any custom webhook integration (WhatsApp payments, UPI callbacks) needs explicit idempotency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add an idempotency-key check to a mock payment endpoint. Send the same key twice, verify the second call is rejected. Remove the check and send the same request twice — simulate what happens without it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "08-api-versioning-strategies",
      children: "0.8 API Versioning Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API versioning matters for AI products because your agent endpoints evolve fast — and agents on the other end can't click \"upgrade.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "four-common-strategies",
      children: "Four common strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL prefix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/v1/query"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/v2/query"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obvious, easy to route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pollutes URLs, violates REST purity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/query?version=1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to forget, no caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Accept: application/vnd.myapp.v1+json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST-correct, clean URLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to test from browser"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content negotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Content-Type: application/vnd.myapp.v1+json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most RESTful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex client logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-url-prefix-for-external-apis",
      children: "Recommendation: URL prefix for external APIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import APIRouter\n\nrouter_v1 = APIRouter(prefix=\"/v1\")\nrouter_v2 = APIRouter(prefix=\"/v2\")\n\n@router_v1.post(\"/query\")\nasync def query_v1(query: str):\n    return {\"answer\": f\"v1: {query}\"}\n\n@router_v2.post(\"/query\")\nasync def query_v2(query: str, top_k: int = 3):\n    return {\"answer\": f\"v2: {query}\", \"sources\": [...]}\n\napp.include_router(router_v1)\napp.include_router(router_v2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-bump-version",
      children: "When to bump version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking schema change (response field removed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Behavior change (same input → different meaning)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Endpoint removal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-not-to-bump",
      children: "When NOT to bump"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding a field (clients ignore unknown fields)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance improvement (opaque to client)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fix (expected correct behavior)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/v1/collections"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/v2/collections"
      }), " to your RAG demo. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/v2"
      }), " should return paginated results while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/v1"
      }), " returns all. Run both and verify the difference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "09-websocket-fundamentals",
      children: "0.9 WebSocket Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agent pipelines often need real-time communication — streaming token output, live status updates, or bidirectional messaging."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "websocket-vs-http",
      children: "WebSocket vs HTTP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WebSocket"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request-response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New connection per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single persistent connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Headers on every request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No headers after upgrade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No server push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server can push anytime"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fastapi-websocket-example",
      children: "FastAPI WebSocket example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, WebSocket, WebSocketDisconnect\nimport asyncio\n\napp = FastAPI()\n\n@app.websocket(\"/ws\")\nasync def websocket_endpoint(websocket: WebSocket):\n    await websocket.accept()\n    try:\n        while True:\n            data = await websocket.receive_text()\n            # Echo back with processing simulation\n            await asyncio.sleep(0.5)\n            await websocket.send_text(f\"Processed: {data}\")\n    except WebSocketDisconnect:\n        print(\"Client disconnected\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "websocket-for-agent-streaming",
      children: "WebSocket for agent streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import WebSocket\nfrom langgraph.graph import StateGraph\n\n@app.websocket(\"/agent/run\")\nasync def agent_stream(websocket: WebSocket):\n    await websocket.accept()\n    user_input = await websocket.receive_text()\n\n    async for event in graph.astream_events({\"input\": user_input}):\n        if event[\"event\"] == \"on_chat_model_stream\":\n            await websocket.send_json({\n                \"type\": \"token\",\n                \"content\": event[\"data\"][\"chunk\"].content,\n            })\n        elif event[\"event\"] == \"on_tool_start\":\n            await websocket.send_json({\n                \"type\": \"tool_call\",\n                \"tool\": event[\"name\"],\n            })\n\n    await websocket.send_json({\"type\": \"done\"})\n    await websocket.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a WebSocket echo server. Connect to it from a browser console (", (0,jsx_runtime.jsx)(_components.code, {
        children: "new WebSocket(\"ws://localhost:8000/ws\")"
      }), "). Send messages and verify echo. Then extend it to broadcast to all connected clients — useful for monitoring multiple agent runs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-equivalents--backend-patterns",
      children: "TypeScript Equivalents — Backend Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript examples mirror the Python patterns taught in this phase. They are useful for Laravel developers who want to see familiar syntax while learning new concepts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redis-wrapper-with-typescript-generics",
      children: "Redis Wrapper with TypeScript Generics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: Redis cache + queue abstraction\nimport { createClient, RedisClientType } from \"redis\";\n\ninterface CacheConfig {\n  ttlSeconds: number;\n  prefix: string;\n}\n\nclass CacheService<T> {\n  private client: RedisClientType;\n  private config: CacheConfig;\n\n  constructor(config: CacheConfig) {\n    this.client = createClient({ url: process.env.REDIS_URL ?? \"redis://localhost:6379\" });\n    this.config = config;\n  }\n\n  async connect(): Promise<void> {\n    await this.client.connect();\n  }\n\n  private key(id: string): string {\n    return `${this.config.prefix}:${id}`;\n  }\n\n  async get(id: string): Promise<T | null> {\n    const raw = await this.client.get(this.key(id));\n    return raw ? (JSON.parse(raw) as T) : null;\n  }\n\n  async set(id: string, value: T): Promise<void> {\n    await this.client.setEx(this.key(id), this.config.ttlSeconds, JSON.stringify(value));\n  }\n\n  async invalidate(id: string): Promise<void> {\n    await this.client.del(this.key(id));\n  }\n\n  async disconnect(): Promise<void> {\n    await this.client.quit();\n  }\n}\n\n// Usage: caching LLM responses\ninterface LlmResponse {\n  text: string;\n  tokensUsed: number;\n  model: string;\n}\n\nconst responseCache = new CacheService<LlmResponse>({\n  ttlSeconds: 300,\n  prefix: \"llm:response\",\n});\n\nawait responseCache.connect();\nconst cached = await responseCache.get(\"prompt-hash-abc123\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-bucket-rate-limiter",
      children: "Token Bucket Rate Limiter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: Token-bucket rate limiter for AI API cost control\ninterface BucketState {\n  tokens: number;\n  lastRefill: number;\n}\n\nclass TokenBucketRateLimiter {\n  private buckets: Map<string, BucketState> = new Map();\n\n  constructor(\n    private capacity: number,    // max burst size\n    private refillRate: number,  // tokens per second\n  ) {}\n\n  private refill(key: string, now: number): void {\n    const bucket = this.buckets.get(key);\n    if (!bucket) return;\n    const elapsed = (now - bucket.lastRefill) / 1000;\n    bucket.tokens = Math.min(this.capacity, bucket.tokens + elapsed * this.refillRate);\n    bucket.lastRefill = now;\n  }\n\n  allow(key: string): boolean {\n    const now = Date.now();\n    let bucket = this.buckets.get(key);\n\n    if (!bucket) {\n      bucket = { tokens: this.capacity, lastRefill: now };\n      this.buckets.set(key, bucket);\n    }\n\n    this.refill(key, now);\n\n    if (bucket.tokens >= 1) {\n      bucket.tokens -= 1;\n      return true;\n    }\n\n    return false;\n  }\n\n  remaining(key: string): number {\n    const bucket = this.buckets.get(key);\n    if (!bucket) return this.capacity;\n    this.refill(key, Date.now());\n    return bucket.tokens;\n  }\n}\n\n// Usage: limit OpenAI calls to 60 requests/minute with burst of 10\nconst openAiLimiter = new TokenBucketRateLimiter(10, 1); // burst 10, refill 1/sec\n\nasync function callLlm(prompt: string): Promise<string | null> {\n  const key = `user:${prompt.slice(0, 20)}`;\n  if (!openAiLimiter.allow(key)) {\n    console.warn(`Rate limited — ${openAiLimiter.remaining(key)} tokens remaining`);\n    return null;\n  }\n  // ... actual API call\n  return \"response\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sliding-window-rate-limiter",
      children: "Sliding Window Rate Limiter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: Sliding-window log for precise rate enforcement\ninterface WindowEntry {\n  timestamp: number;\n}\n\nclass SlidingWindowRateLimiter {\n  private windows: Map<string, WindowEntry[]> = new Map();\n\n  constructor(\n    private windowMs: number,\n    private maxRequests: number,\n  ) {}\n\n  allow(key: string): boolean {\n    const now = Date.now();\n    const cutoff = now - this.windowMs;\n    let entries = this.windows.get(key) ?? [];\n\n    // Remove expired entries\n    entries = entries.filter((e) => e.timestamp > cutoff);\n\n    if (entries.length >= this.maxRequests) {\n      this.windows.set(key, entries);\n      return false;\n    }\n\n    entries.push({ timestamp: now });\n    this.windows.set(key, entries);\n    return true;\n  }\n\n  usage(key: string): { current: number; limit: number; resetsInMs: number } {\n    const now = Date.now();\n    const entries = this.windows.get(key) ?? [];\n    const cutoff = now - this.windowMs;\n    const active = entries.filter((e) => e.timestamp > cutoff);\n    const oldestActive = active.length > 0 ? Math.min(...active.map((e) => e.timestamp)) : now;\n    return {\n      current: active.length,\n      limit: this.maxRequests,\n      resetsInMs: oldestActive + this.windowMs - now,\n    };\n  }\n}\n\n// Usage: enforce 100 requests per 60 seconds per API key\nconst apiKeyLimiter = new SlidingWindowRateLimiter(60_000, 100);\n\nfunction checkRateLimit(apiKey: string): boolean {\n  return apiKeyLimiter.allow(apiKey);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jwt-token-service-with-rotation",
      children: "JWT Token Service with Rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: Refresh-token rotation with invalidation tracking\nimport { randomBytes, createHash } from \"node:crypto\";\n\ninterface TokenPair {\n  accessToken: string;\n  refreshToken: string;\n}\n\ninterface StoredRefresh {\n  userId: string;\n  family: string;   // token family for rotation detection\n  expiresAt: number;\n}\n\nclass JwtRotationService {\n  private store: Map<string, StoredRefresh> = new Map(); // In production: Redis\n  private revokedFamilies: Set<string> = new Set();\n\n  private hash(token: string): string {\n    return createHash(\"sha256\").update(token).digest(\"hex\");\n  }\n\n  issuePair(userId: string): TokenPair {\n    const family = randomBytes(16).toString(\"hex\");\n    const accessToken = randomBytes(32).toString(\"hex\");\n    const refreshToken = randomBytes(64).toString(\"hex\");\n\n    this.store.set(this.hash(refreshToken), {\n      userId,\n      family,\n      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days\n    });\n\n    return { accessToken, refreshToken };\n  }\n\n  rotate(oldRefreshToken: string): TokenPair | { error: string } {\n    const hash = this.hash(oldRefreshToken);\n    const stored = this.store.get(hash);\n\n    if (!stored) {\n      return { error: \"Invalid refresh token\" };\n    }\n\n    // Replay attack: same family used twice\n    if (this.revokedFamilies.has(stored.family)) {\n      this.revokeFamily(stored.family); // revoke ALL tokens in this family\n      return { error: \"Token family compromised — all tokens revoked\" };\n    }\n\n    // Revoke old token family (rotation)\n    this.revokeFamily(stored.family);\n\n    // Issue new pair with NEW family\n    const newFamily = randomBytes(16).toString(\"hex\");\n    const accessToken = randomBytes(32).toString(\"hex\");\n    const refreshToken = randomBytes(64).toString(\"hex\");\n\n    this.store.set(this.hash(refreshToken), {\n      userId: stored.userId,\n      family: newFamily,\n      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,\n    });\n\n    return { accessToken, refreshToken };\n  }\n\n  private revokeFamily(family: string): void {\n    this.revokedFamilies.add(family);\n    // In production: also remove all store entries matching family\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-versioning-strategy-pattern",
      children: "API Versioning Strategy Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: Express/Fastify-style versioned route registration\nimport { Router, Request, Response } from \"express\";\n\ninterface VersionedRoute {\n  version: number;\n  path: string;\n  handler: (req: Request, res: Response) => void | Promise<void>;\n}\n\nclass ApiVersionManager {\n  private routers: Map<number, Router> = new Map();\n  private routes: VersionedRoute[] = [];\n\n  register(route: VersionedRoute): void {\n    this.routes.push(route);\n  }\n\n  build(): Map<number, Router> {\n    for (const route of this.routes) {\n      if (!this.routers.has(route.version)) {\n        this.routers.set(route.version, Router());\n      }\n      const router = this.routers.get(route.version)!;\n      router.get(route.path, route.handler);\n    }\n    return this.routers;\n  }\n}\n\n// Example\nconst mgr = new ApiVersionManager();\n\nmgr.register({\n  version: 1,\n  path: \"/query\",\n  handler: async (req, res) => {\n    res.json({ answer: `v1: ${req.query.q}` });\n  },\n});\n\nmgr.register({\n  version: 2,\n  path: \"/query\",\n  handler: async (req, res) => {\n    res.json({ answer: `v2: ${req.query.q}`, sources: [] });\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "architecture-diagrams--phase-0-patterns",
      children: "Architecture Diagrams — Phase 0 Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redis-usage-patterns",
      children: "Redis Usage Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Client[\"Client\"]\n        A[\"FastAPI App\"]\n    end\n\n    subgraph Redis[\"Redis\"]\n        direction TB\n        CACHE[\"Cache Layer<br/>SETEX / GET<br/>TTL-based expiry<br/>Response caching\"]\n        QUEUE[\"Queue Layer<br/>RPUSH / BLPOP<br/>Durable background jobs<br/>RQ / Celery\"]\n        PUBSUB[\"Pub/Sub Layer<br/>PUBLISH / SUBSCRIBE<br/>Fire-and-forget events<br/>Real-time notifications\"]\n    end\n\n    A -- \"Cache API responses\" --> CACHE\n    A -- \"Enqueue document ingestion\" --> QUEUE\n    A -- \"Broadcast pipeline events\" --> PUBSUB\n    QUEUE -- \"Processed by workers\" --> W[\"Background Workers\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jwt-refresh-token-rotation-flow",
      children: "JWT Refresh-Token Rotation Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as Client\n    participant A as Auth API\n    participant S as Token Store (Redis)\n\n    Note over C,A: Initial Login\n    C->>A: POST /auth/login (credentials)\n    A->>S: Store refresh token hash\n    A-->>C: { access_token, refresh_token }\n\n    Note over C,A: Token Rotation\n    C->>A: POST /auth/refresh (refresh_token)\n    A->>S: Lookup hash → get token family\n    A->>S: Check family not revoked\n    A->>S: Remove old hash\n    A->>S: Store NEW hash with NEW family\n    A-->>C: { access_token: NEW, refresh_token: NEW }\n\n    Note over C,A: Replay Attack\n    C->>A: POST /auth/refresh (OLD refresh_token)\n    A->>S: Lookup hash → not found\n    A->>S: Check family → already revoked!\n    A->>S: Revoke ALL tokens in this family\n    A-->>C: 401 \"Token family compromised\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rate-limiting-algorithms",
      children: "Rate Limiting Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph TB[\"Token Bucket\"]\n        T1[\"Bucket: 10 tokens\"]\n        T2[\"Refill: 1 token/sec\"]\n        T3[\"Allows bursts up to 10\"]\n        T4[\"Good for: AI endpoints,<br/>spiky cost patterns\"]\n    end\n\n    subgraph SW[\"Sliding Window\"]\n        S1[\"Window: 60 seconds\"]\n        S2[\"Limit: 100 requests\"]\n        S3[\"Precise per-window cap\"]\n        S4[\"Good for: login endpoints,<br/>rate guarantees\"]\n    end\n\n    subgraph FW[\"Fixed Window\"]\n        F1[\"Window: 1 minute\"]\n        F2[\"Reset at boundary\"]\n        F3[\"Edge burst: 2x limit\"]\n        F4[\"Good for: simple rate caps,<br/>dashboard stats\"]\n    end\n\n    REQ[\"Incoming Request\"] --> CHECK{\"Rate Limit Check\"}\n    CHECK --> TB\n    CHECK --> SW\n    CHECK --> FW\n    TB --> ALLOW[\"Allow + Deduct Token\"]\n    SW --> ALLOW\n    FW --> ALLOW\n    TB --> DENY[\"429 Too Many Requests\"]\n    SW --> DENY\n    FW --> DENY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-0-done-checkpoint",
      children: "Phase 0 Done Checkpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before moving to Phase 1, you should be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write a Redis pub/sub demo in Python without looking at a tutorial"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Read a FastAPI ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/docs"
        }), " page and identify every validation constraint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Diagram the refresh-token rotation lifecycle from memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Explain token bucket vs sliding window, and say which ", (0,jsx_runtime.jsx)(_components.code, {
          children: "slowapi"
        }), " uses by default"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Argue both sides of microservices vs monolith for ApexERP specifically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write an idempotency-key check on a webhook endpoint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Argue URL prefix vs header vs query param for API versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Build a WebSocket echo server and broadcast to all clients"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated time to checkpoint:"
      }), " 14-18 hours over 1 week."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-agent-engineer/02-phase1-python-fastapi-async",
        children: "Next: Phase 1 — Python + FastAPI + AsyncIO"
      })
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