"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59402],{

/***/ 27852
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_05_phase_4_production_hardening_md_8ca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-05-phase-4-production-hardening-md-8ca.json
const site_docs_courses_ai_agent_engineer_05_phase_4_production_hardening_md_8ca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/05-phase4-production-hardening","title":"Phase 4 — Production Hardening","description":"Duration: Weeks 9-10, ~20 hours","source":"@site/docs/courses/ai-agent-engineer/05-phase4-production-hardening.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/05-phase4-production-hardening","permalink":"/ai-engineering-journey/ai-agent-engineer/05-phase4-production-hardening","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"05-phase4-production-hardening","slug":"/ai-agent-engineer/05-phase4-production-hardening","title":"Phase 4 — Production Hardening","sidebar_label":"Phase 4 — Production Hardening","sidebar_position":6},"sidebar":"coursesSidebar","previous":{"title":"Phase 3 — AI Agents: LangGraph, CrewAI, MCP","permalink":"/ai-engineering-journey/ai-agent-engineer/04-phase3-agents-langgraph-mcp"},"next":{"title":"Phase 5 — Portfolio + Market Positioning","permalink":"/ai-engineering-journey/ai-agent-engineer/06-phase5-portfolio-positioning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/05-phase4-production-hardening.md


const frontMatter = {
	id: '05-phase4-production-hardening',
	slug: '/ai-agent-engineer/05-phase4-production-hardening',
	title: 'Phase 4 — Production Hardening',
	sidebar_label: 'Phase 4 — Production Hardening',
	sidebar_position: 6
};
const contentTitle = 'Phase 4 — Production Hardening';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "4.1 Docker Multi-Stage Builds",
  "id": "41-docker-multi-stage-builds",
  "level": 2
}, {
  "value": "Naive single-stage",
  "id": "naive-single-stage",
  "level": 3
}, {
  "value": "Multi-stage",
  "id": "multi-stage",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise",
  "level": 3
}, {
  "value": "4.2 Docker Compose with Health Checks",
  "id": "42-docker-compose-with-health-checks",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-1",
  "level": 3
}, {
  "value": "4.3 Celery/RQ for Durable Background Jobs",
  "id": "43-celeryrq-for-durable-background-jobs",
  "level": 2
}, {
  "value": "Why BackgroundTasks isn&#39;t enough",
  "id": "why-backgroundtasks-isnt-enough",
  "level": 3
}, {
  "value": "RQ version",
  "id": "rq-version",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-2",
  "level": 3
}, {
  "value": "4.4 Redis as Job Broker: Retries + Dead-Letter",
  "id": "44-redis-as-job-broker-retries--dead-letter",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-3",
  "level": 3
}, {
  "value": "4.5 Structured Logging with Correlation IDs",
  "id": "45-structured-logging-with-correlation-ids",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-4",
  "level": 3
}, {
  "value": "4.6 Basic /metrics Endpoint",
  "id": "46-basic-metrics-endpoint",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-5",
  "level": 3
}, {
  "value": "4.7 Health Checks: /healthz vs /readyz",
  "id": "47-health-checks-healthz-vs-readyz",
  "level": 2
}, {
  "value": "/healthz (liveness)",
  "id": "healthz-liveness",
  "level": 3
}, {
  "value": "/readyz (readiness)",
  "id": "readyz-readiness",
  "level": 3
}, {
  "value": "Why the distinction matters",
  "id": "why-the-distinction-matters",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-6",
  "level": 3
}, {
  "value": "4.8 Secrets Management",
  "id": "48-secrets-management",
  "level": 2
}, {
  "value": "Bad pattern",
  "id": "bad-pattern",
  "level": 3
}, {
  "value": "Good pattern (pydantic-settings)",
  "id": "good-pattern-pydantic-settings",
  "level": 3
}, {
  "value": "What to put in .env.example",
  "id": "what-to-put-in-envexample",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-7",
  "level": 3
}, {
  "value": "4.9 API Cost Monitoring",
  "id": "49-api-cost-monitoring",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-8",
  "level": 3
}, {
  "value": "4.10 GitHub Actions CI",
  "id": "410-github-actions-ci",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-9",
  "level": 3
}, {
  "value": "4.11 Load Testing (k6 / Locust)",
  "id": "411-load-testing-k6--locust",
  "level": 2
}, {
  "value": "k6 basics",
  "id": "k6-basics",
  "level": 3
}, {
  "value": "Locust (Python alternative)",
  "id": "locust-python-alternative",
  "level": 3
}, {
  "value": "What to measure",
  "id": "what-to-measure",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-10",
  "level": 3
}, {
  "value": "4.12 Monitoring + Alerting (Grafana + Prometheus)",
  "id": "412-monitoring--alerting-grafana--prometheus",
  "level": 2
}, {
  "value": "Prometheus setup",
  "id": "prometheus-setup",
  "level": 3
}, {
  "value": "docker-compose with monitoring",
  "id": "docker-compose-with-monitoring",
  "level": 3
}, {
  "value": "Grafana dashboard panels to create",
  "id": "grafana-dashboard-panels-to-create",
  "level": 3
}, {
  "value": "Alerting rules (Prometheus)",
  "id": "alerting-rules-prometheus",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-11",
  "level": 3
}, {
  "value": "Phase 4 Done Checkpoint",
  "id": "phase-4-done-checkpoint",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
        id: "phase-4--production-hardening",
        children: "Phase 4 — Production Hardening"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " Weeks 9-10, ~20 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Add the production patterns your portfolio projects are missing — durable queues, structured logging, CI/CD, cost monitoring."]
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
        href: "../../assets/images/lessons/ai-agent-engineer/05-phase4-production-hardening/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/05-phase4-production-hardening/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/05-phase4-production-hardening/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/05-phase4-production-hardening/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/05-phase4-production-hardening/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/05-phase4-production-hardening/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Docker multi-stage builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a Dockerfile meaningfully smaller than a naive single-stage one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Compose multi-service health checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire FastAPI + Redis + ChromaDB with correct depends_on + health checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Celery/RQ for durable background jobs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace BackgroundTasks with a queue that survives restarts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis as job broker: retries, dead-letter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure automatic retry with exponential backoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured logging (correlation IDs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace a request across 2 services using a shared correlation ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic /metrics endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expose request count + latency histogram"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks: /healthz vs /readyz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain the difference and why conflating them causes outages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move all keys to .env, document the pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API cost monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a token-usage logging wrapper for OpenAI/Anthropic calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions CI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a test workflow for each project repo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load testing (k6 / locust)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run a load test against your RAG endpoint, report P50/P95/P99"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring + alerting (Grafana + Prometheus)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy a Grafana dashboard showing request rate, latency, error rate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-docker-multi-stage-builds",
      children: "4.1 Docker Multi-Stage Builds"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "naive-single-stage",
      children: "Naive single-stage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD [\"uvicorn\", \"app.main:app\", \"--host\", \"0.0.0.0\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Size: ~800MB. Includes build tools, cache files, unnecessary packages."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-stage",
      children: "Multi-stage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Stage 1: Build\nFROM python:3.12-slim AS builder\nWORKDIR /app\nCOPY requirements.txt .\nRUN apt-get update && apt-get install -y --no-install-recommends gcc \\\n    && pip install --user -r requirements.txt \\\n    && apt-get clean\n\n# Stage 2: Runtime\nFROM python:3.12-slim\nWORKDIR /app\nCOPY --from=builder /root/.local /root/.local\nCOPY . .\nENV PATH=/root/.local/bin:$PATH\nCMD [\"uvicorn\", \"app.main:app\", \"--host\", \"0.0.0.0\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Size: ~200MB. No build tools, no pip cache, minimal surface."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rebuild your RAG demo's Dockerfile as multi-stage. Measure before/after image size with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker images"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-docker-compose-with-health-checks",
      children: "4.2 Docker Compose with Health Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.yml\nversion: \"3.9\"\nservices:\n  redis:\n    image: redis:7-alpine\n    healthcheck:\n      test: [\"CMD\", \"redis-cli\", \"ping\"]\n      interval: 5s\n      timeout: 3s\n      retries: 3\n\n  chromadb:\n    image: chromadb/chroma:latest\n    volumes:\n      - chroma_data:/chroma/chroma_data\n    healthcheck:\n      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8000/api/v1/heartbeat\"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n\n  api:\n    build: .\n    depends_on:\n      redis: { condition: service_healthy }\n      chromadb: { condition: service_healthy }\n    ports:\n      - \"8052:8052\"\n    env_file: .env\n\nvolumes:\n  chroma_data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add health checks and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "depends_on"
      }), " with conditions to your existing docker-compose.yml."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-celeryrq-for-durable-background-jobs",
      children: "4.3 Celery/RQ for Durable Background Jobs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-backgroundtasks-isnt-enough",
      children: "Why BackgroundTasks isn't enough"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.post(\"/upload\")\nasync def upload(task: BackgroundTasks):\n    # If server restarts during this, the job is LOST\n    task.add_task(process_large_document, doc_id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rq-version",
      children: "RQ version"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from rq import Queue\nfrom redis import Redis\n\nredis_conn = Redis()\nqueue = Queue(\"document_ingestion\", connection=redis_conn)\n\n@app.post(\"/upload\")\nasync def upload(doc_id: str):\n    # Stored in Redis — survives restart\n    job = queue.enqueue(process_large_document, doc_id, job_timeout=600)\n    return {\"status\": \"accepted\", \"job_id\": job.id}\n\n# worker.py — run separately:\n# rq worker document_ingestion\nif __name__ == \"__main__\":\n    from rq.worker import Worker\n    Worker([queue], connection=redis_conn).work()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Move your RAG demo's document ingestion from BackgroundTasks to RQ. Verify that killing the worker mid-job and restarting resumes processing (or at least the job doesn't silently disappear)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-redis-as-job-broker-retries--dead-letter",
      children: "4.4 Redis as Job Broker: Retries + Dead-Letter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from rq import Queue, Retry\n\nqueue = Queue(connection=Redis())\n\n# Automatic retry with exponential backoff\ndef process_document(doc_id: str):\n    result = call_large_api(doc_id)\n    if not result:\n        raise ValueError(\"Document processing failed\")\n\njob = queue.enqueue(\n    process_document,\n    doc_id,\n    retry=Retry(max=3, interval=[10, 30, 60]),  # Wait 10s, 30s, 60s between retries\n    on_failure=move_to_dead_letter_queue,\n)\n\ndef move_to_dead_letter_queue(job, connection, type, value, traceback):\n    dead_letter = Queue(\"dead_letter\", connection=connection)\n    dead_letter.enqueue(job.func, *job.args)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure automatic retry with exponential backoff for an RQ task. Then make it fail 4 times and observe it end up in the dead-letter queue."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-structured-logging-with-correlation-ids",
      children: "4.5 Structured Logging with Correlation IDs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import structlog\nimport uuid\nfrom fastapi import Request\n\nstructlog.configure(\n    processors=[\n        structlog.stdlib.add_log_level,\n        structlog.processors.TimeStamper(fmt=\"iso\"),\n        structlog.processors.JSONRenderer(),\n    ],\n    context_class=dict,\n    logger_factory=structlog.PrintLoggerFactory(),\n)\n\nlogger = structlog.get_logger()\n\n@app.middleware(\"http\")\nasync def add_correlation_id(request: Request, call_next):\n    correlation_id = request.headers.get(\"X-Correlation-ID\", str(uuid.uuid4()))\n    request.state.correlation_id = correlation_id\n    response = await call_next(request)\n    response.headers[\"X-Correlation-ID\"] = correlation_id\n    return response\n\n@app.get(\"/query\")\nasync def query_endpoint(request: Request):\n    logger.info(\"query_received\", correlation_id=request.state.correlation_id, query=...)\n    result = await process_query(...)\n    logger.info(\"query_completed\", correlation_id=request.state.correlation_id, duration=...)\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "structlog"
      }), " to your RAG demo. Add a correlation ID middleware. Trace a single request through at least 3 log lines with the same correlation ID."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-basic-metrics-endpoint",
      children: "4.6 Basic /metrics Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from prometheus_client import Counter, Histogram, generate_latest\nfrom fastapi import Response\nimport time\n\nREQUEST_COUNT = Counter(\"rag_requests_total\", \"Total RAG requests\", [\"endpoint\", \"status\"])\nLATENCY = Histogram(\"rag_request_duration_seconds\", \"Request latency\", [\"endpoint\"])\n\n@app.get(\"/metrics\")\nasync def metrics():\n    return Response(content=generate_latest(), media_type=\"text/plain\")\n\n@app.post(\"/v1/collections/{id}/query\")\nasync def query_with_metrics(id: str, req: QueryRequest):\n    start = time.perf_counter()\n    result = await run_query(id, req)\n    duration = time.perf_counter() - start\n    REQUEST_COUNT.labels(endpoint=\"query\", status=\"200\").inc()\n    LATENCY.labels(endpoint=\"query\").observe(duration)\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/metrics"
      }), " endpoint with at least request count and latency histogram to your RAG demo. Hit the endpoint a few times, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "curl /metrics"
      }), " and verify the counts increment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-health-checks-healthz-vs-readyz",
      children: "4.7 Health Checks: /healthz vs /readyz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "healthz-liveness",
      children: "/healthz (liveness)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Is the process alive? If this fails, restart the container."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.get(\"/healthz\")\nasync def healthz():\n    return {\"status\": \"alive\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readyz-readiness",
      children: "/readyz (readiness)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Is the service ready to accept requests? If this fails, stop routing traffic to it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.get(\"/readyz\")\nasync def readyz():\n    try:\n        await redis.ping()\n        await chroma_client.heartbeat()\n        return {\"status\": \"ready\"}\n    except Exception as e:\n        return JSONResponse({\"status\": \"not_ready\", \"error\": str(e)}, status_code=503)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-the-distinction-matters",
      children: "Why the distinction matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A service that's alive but not ready (e.g., ChromaDB is restarting) should ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " be killed and restarted — it should just stop receiving traffic until dependencies recover. Conflating them means a brief ChromaDB restart causes a container restart cascade."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement both endpoints in your project. Simulate a dependency failure and verify ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/healthz"
      }), " returns 200 while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/readyz"
      }), " returns 503."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "48-secrets-management",
      children: "4.8 Secrets Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bad-pattern",
      children: "Bad pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\napi_key = os.environ.get(\"OPENAI_API_KEY\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What's wrong: no validation, no error message if missing, no type checking, scattered across files."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "good-pattern-pydantic-settings",
      children: "Good pattern (pydantic-settings)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic_settings import BaseSettings\n\nclass Settings(BaseSettings):\n    openai_api_key: str\n    anthropic_api_key: str\n    chroma_persist_dir: str = \"./chroma_data\"\n    redis_url: str = \"redis://localhost:6379\"\n    rate_limit_per_minute: int = 10\n\n    model_config = {\"env_file\": \".env\", \"env_file_encoding\": \"utf-8\"}\n\nsettings = Settings()\n\n# If OPENAI_API_KEY is missing, this errors at startup with a clear message:\n# pydantic_settings.sources.SettingsError: 'openai_api_key' is a required field\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-to-put-in-envexample",
      children: "What to put in .env.example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-env",
        children: "# Required\nOPENAI_API_KEY=\nANTHROPIC_API_KEY=\nCHROMA_PERSIST_DIR=./chroma_data\n\n# Optional (defaults shown)\nREDIS_URL=redis://localhost:6379\nRATE_LIMIT_PER_MINUTE=10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Move all hardcoded keys in both projects into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pydantic-settings"
      }), ". Verify the app errors at startup (not at runtime) when a required key is missing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "49-api-cost-monitoring",
      children: "4.9 API Cost Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport logging\nfrom functools import wraps\n\nlogger = logging.getLogger(__name__)\n\ndef track_llm_cost(model: str = \"gpt-4\"):\n    \"\"\"Decorator that logs token usage and estimated cost.\"\"\"\n    PRICES = {\n        \"gpt-4\": {\"input\": 30, \"output\": 60},  # Per 1M tokens\n        \"gpt-4o-mini\": {\"input\": 0.15, \"output\": 0.60},\n        \"text-embedding-3-small\": {\"input\": 0.02, \"output\": 0},\n    }\n\n    def decorator(func):\n        @wraps(func)\n        async def wrapper(*args, **kwargs):\n            result = await func(*args, **kwargs)\n            usage = getattr(result, \"usage\", None) or {}\n            input_cost = usage.get(\"input_tokens\", 0) * PRICES[model][\"input\"] / 1_000_000\n            output_cost = usage.get(\"output_tokens\", 0) * PRICES[model][\"output\"] / 1_000_000\n            logger.info(\n                f\"LLM call: {model}, \"\n                f\"in={usage.get('input_tokens', 0)}, \"\n                f\"out={usage.get('output_tokens', 0)}, \"\n                f\"cost=${input_cost + output_cost:.6f}\"\n            )\n            return result\n        return wrapper\n    return decorator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wrap your OpenAI/Anthropic calls in the RAG demo with this decorator. Run 5 queries. Check the logs for per-query cost. Sum them and compare against your OpenAI dashboard."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "410-github-actions-ci",
      children: "4.10 GitHub Actions CI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/test.yml\nname: Test\non: [push, pull_request]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    services:\n      redis:\n        image: redis:7-alpine\n        options: --health-cmd \"redis-cli ping\" --health-interval 5s --health-retries 5\n\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n          cache: \"pip\"\n\n      - name: Install dependencies\n        run: pip install -r requirements.txt\n\n      - name: Run tests\n        run: pytest -v --cov=app --cov-report=term-missing\n        env:\n          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}\n          DATABASE_URL: sqlite:///test.db\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/test.yml"
      }), " for your RAG demo repo. Push it. Verify the badge turns green. Then write the same for the LangGraph project repo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "411-load-testing-k6--locust",
      children: "4.11 Load Testing (k6 / Locust)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you tell a client your API handles \"thousands of requests,\" you need to prove it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "k6-basics",
      children: "k6 basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install k6\nwinget install k6  # Windows\nbrew install k6    # macOS\n\n# Run a test\nk6 run load_test.js\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// load_test.js\nimport http from 'k6/http';\nimport { check, sleep } from 'k6';\n\nexport const options = {\n  stages: [\n    { duration: '30s', target: 10 },   // Ramp up to 10 users\n    { duration: '1m', target: 10 },    // Stay at 10\n    { duration: '30s', target: 0 },    // Ramp down\n  ],\n  thresholds: {\n    http_req_duration: ['p(95)<2000'], // 95% of requests under 2s\n    http_req_failed: ['rate<0.01'],    // <1% failure rate\n  },\n};\n\nexport default function () {\n  const res = http.post(\n    'https://rag-demo.apexpillar.tech/v1/query',\n    JSON.stringify({ query: 'What is RAG?', top_k: 3 }),\n    { headers: { 'Content-Type': 'application/json' } },\n  );\n\n  check(res, {\n    'status is 200': (r) => r.status === 200,\n    'response time < 3s': (r) => r.timings.duration < 3000,\n  });\n\n  sleep(1); // Think time between requests\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "locust-python-alternative",
      children: "Locust (Python alternative)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# locustfile.py\nfrom locust import HttpUser, task, between\n\nclass RAGUser(HttpUser):\n    wait_time = between(1, 3)  # Simulate user think time\n\n    @task\n    def query_rag(self):\n        self.client.post(\n            \"/v1/query\",\n            json={\"query\": \"Explain embeddings\", \"top_k\": 3},\n        )\n\n    @task(3)  # Weight: this runs 3x more often\n    def health_check(self):\n        self.client.get(\"/healthz\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run Locust (web UI at http://localhost:8089)\nlocust -f locustfile.py --host https://rag-demo.apexpillar.tech\n\n# Headless mode\nlocust -f locustfile.py --host https://rag-demo.apexpillar.tech \\\n  --headless -u 20 -r 2 --run-time 2m\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-to-measure",
      children: "What to measure"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it tells you"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Requests/sec (RPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on infra"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P50 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typical experience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 500ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P95 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow but acceptable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 2s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P99 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 5s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failures under load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leak detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat or stable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run a k6 load test against your RAG demo query endpoint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with 5 concurrent users for 1 minute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ramp to 20 concurrent users for 2 minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record P50, P95, P99 latencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the bottleneck (LLM API call? Vector search? Network?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document your findings in the project README"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "412-monitoring--alerting-grafana--prometheus",
      children: "4.12 Monitoring + Alerting (Grafana + Prometheus)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can't improve what you don't measure. Grafana + Prometheus is the industry standard for monitoring AI services."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prometheus-setup",
      children: "Prometheus setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# app/metrics.py\nfrom prometheus_client import Counter, Histogram, generate_latest\nfrom fastapi import Request\nimport time\n\nREQUEST_COUNT = Counter(\n    \"http_requests_total\",\n    \"Total HTTP requests\",\n    [\"method\", \"endpoint\", \"status\"],\n)\n\nLATENCY = Histogram(\n    \"http_request_duration_seconds\",\n    \"HTTP request latency\",\n    [\"method\", \"endpoint\"],\n)\n\nLLM_TOKEN_COUNT = Counter(\n    \"llm_tokens_total\",\n    \"Total LLM tokens used\",\n    [\"model\", \"operation\"],\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Middleware to record metrics\n@app.middleware(\"http\")\nasync def metrics_middleware(request: Request, call_next):\n    start = time.time()\n    response = await call_next(request)\n    duration = time.time() - start\n\n    REQUEST_COUNT.labels(\n        method=request.method,\n        endpoint=request.url.path,\n        status=response.status_code,\n    ).inc()\n\n    LATENCY.labels(\n        method=request.method,\n        endpoint=request.url.path,\n    ).observe(duration)\n\n    return response\n\n\n@app.get(\"/metrics\")\nasync def metrics():\n    return Response(\n        content=generate_latest(),\n        media_type=\"text/plain\",\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-compose-with-monitoring",
      children: "docker-compose with monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.monitoring.yml\nservices:\n  prometheus:\n    image: prom/prometheus:latest\n    volumes:\n      - ./prometheus.yml:/etc/prometheus/prometheus.yml\n    ports:\n      - \"9090:9090\"\n\n  grafana:\n    image: grafana/grafana:latest\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - prometheus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# prometheus.yml\nscrape_configs:\n  - job_name: \"rag-demo\"\n    scrape_interval: 15s\n    static_configs:\n      - targets: [\"rag-demo.apexpillar.tech:8000\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grafana-dashboard-panels-to-create",
      children: "Grafana dashboard panels to create"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Panel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Query"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rate(http_requests_total[5m])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "See traffic patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P95 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track performance regressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rate(http_requests_total{status=~\"5..\"}[5m])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert on server errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rate(llm_tokens_total[1h]) * $price_per_token"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Watch spending"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rate(http_requests_total[5m]) / avg_request_rate_per_user"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimate concurrency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alerting-rules-prometheus",
      children: "Alerting rules (Prometheus)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "groups:\n  - name: rag-demo-alerts\n    rules:\n      - alert: HighErrorRate\n        expr: rate(http_requests_total{status=~\"5..\"}[5m]) > 0.05\n        for: 2m\n        annotations:\n          summary: \"Error rate above 5% for 2 minutes\"\n\n      - alert: HighLatency\n        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 3\n        for: 5m\n        annotations:\n          summary: \"P95 latency above 3s\"\n\n      - alert: HighLLMCost\n        expr: rate(llm_tokens_total[1h]) * 30 / 1_000_000 > 10\n        for: 10m\n        annotations:\n          summary: \"LLM cost exceeding $10/hour\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-11",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deploy Prometheus + Grafana alongside your RAG demo using docker-compose. Add the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/metrics"
      }), " endpoint. Create a Grafana dashboard showing request rate and P95 latency. Verify that hitting your endpoint from the browser produces visible data points within 15 seconds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["interface RetryConfig { maxRetries: number; baseDelay: number; maxDelay: number }\nclass RetryMiddleware {\nconstructor(private config: RetryConfig = {maxRetries:3,baseDelay:1000,maxDelay:10000}) {}\nasync execute<T>(fn: () => Promise<T>): Promise<T> {\nlet lastErr: Error = new Error()\nfor(let i=0;i<=this.config.maxRetries;i++) try { return await fn() } catch(e) { lastErr = e as Error\nif(i<this.config.maxRetries) await this.sleep(Math.min(this.config.baseDelay*Math.pow(2,i),this.config.maxDelay)) }\nthrow lastErr\n}\nprivate sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r,ms)) }\n}\nclass CircuitBreaker {\nprivate failures = 0; private state: \"CLOSED\"|\"OPEN\"|\"HALF_OPEN\" = \"CLOSED\"\nprivate lastFailureTime = 0\nconstructor(private threshold: number=5, private resetTimeout: number=30000) {}\nasync call<T>(fn: () => Promise<T>): Promise<T> {\nif(this.state === \"OPEN\") { if(Date.now()-this.lastFailureTime>this.resetTimeout) this.state=\"HALF_OPEN\"\nelse throw new Error(\"Circuit breaker is OPEN\") }\ntry { const result = await fn(); if(this.state===\"HALF_OPEN\") this.state=\"CLOSED\"; this.failures=0; return result }\ncatch(e) { this.failures++; this.lastFailureTime=Date.now()\nif(this.failures>=this.threshold) this.state=\"OPEN\"\nthrow e }\n}\n}\nclass RateLimiter {\nprivate tokens: number; private lastRefill = Date.now()\nconstructor(private capacity: number, private refillRate: number) { this.tokens = capacity }\nasync acquire(): Promise<void> {\nthis.refill()\nif(this.tokens <= 0) { await this.sleep((1-this.tokens/this.refillRate)", (0,jsx_runtime.jsx)(_components.em, {
        children: "1000); this.refill() }\nthis.tokens--\n}\nprivate refill(): void { const now=Date.now(); const elapsed=(now-this.lastRefill)/1000; this.tokens=Math.min(this.capacity,this.tokens+elapsed"
      }), "this.refillRate); this.lastRefill=now }\nprivate sleep(ms:number): Promise<void> { return new Promise(r=>setTimeout(r,ms)) }\n}\nexport { RetryMiddleware, CircuitBreaker, RateLimiter }"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-4-done-checkpoint",
      children: "Phase 4 Done Checkpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before moving to Phase 5, you should be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write a multi-stage Dockerfile that's measurably smaller than a single-stage one"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Wire health checks and depends_on correctly in docker-compose"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Replace FastAPI BackgroundTasks with RQ for durable jobs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Configure retry with exponential backoff + dead-letter queue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Trace a single request across 3 log lines with the same correlation ID"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Expose /metrics with request count and latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Explain the difference between /healthz and /readyz"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Load all secrets from pydantic-settings with startup validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Log per-query cost for every LLM call"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Both project repos have green CI badges"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Run a k6/locust load test, report P50/P95/P99"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Deploy Grafana dashboard showing request rate + P95 latency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated time to checkpoint:"
      }), " 24-26 hours over 2 weeks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-agent-engineer/06-phase5-portfolio-positioning",
        children: "Next: Phase 5 — Portfolio + Market Positioning"
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