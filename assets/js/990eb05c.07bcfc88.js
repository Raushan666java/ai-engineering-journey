"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[37974],{

/***/ 9631
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_modern_ai_engineering_10_production_ai_systems_md_990_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-modern-ai-engineering-10-production-ai-systems-md-990.json
const site_docs_courses_modern_ai_engineering_10_production_ai_systems_md_990_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/modern-ai-engineering/10-production-ai-systems","title":"Chapter 10: Production AI Systems","description":"Bridge the gap between prototype and production. Master deployment strategies, caching, rate limiting, cost management, load balancing, A/B testing, monitoring, and incident response for AI applications — all with production-grade TypeScript implementations.","source":"@site/docs/courses/modern-ai-engineering/10-production-ai-systems.md","sourceDirName":"courses/modern-ai-engineering","slug":"/modern-ai-engineering/10-production-ai-systems","permalink":"/ai-engineering-journey/modern-ai-engineering/10-production-ai-systems","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-production-ai-systems","slug":"/modern-ai-engineering/10-production-ai-systems","title":"Chapter 10: Production AI Systems","sidebar_label":"Chapter 10: Production AI Systems","sidebar_position":10},"sidebar":"coursesSidebar","previous":{"title":"Chapter 9: Safety, Alignment, and Guardrails","permalink":"/ai-engineering-journey/modern-ai-engineering/09-safety-alignment-guardrails"},"next":{"title":"Chapter 11: MLOps for AI Engineering","permalink":"/ai-engineering-journey/modern-ai-engineering/11-mlops-for-ai-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/modern-ai-engineering/10-production-ai-systems.md


const frontMatter = {
	id: '10-production-ai-systems',
	slug: '/modern-ai-engineering/10-production-ai-systems',
	title: 'Chapter 10: Production AI Systems',
	sidebar_label: 'Chapter 10: Production AI Systems',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Production AI Systems';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "10.1 Deployment Strategies",
  "id": "101-deployment-strategies",
  "level": 2
}, {
  "value": "Real-Time Inference",
  "id": "real-time-inference",
  "level": 3
}, {
  "value": "Batch Processing",
  "id": "batch-processing",
  "level": 3
}, {
  "value": "Streaming",
  "id": "streaming",
  "level": 3
}, {
  "value": "Edge Deployment",
  "id": "edge-deployment",
  "level": 3
}, {
  "value": "Deployment Strategy Comparison",
  "id": "deployment-strategy-comparison",
  "level": 3
}, {
  "value": "10.2 Caching",
  "id": "102-caching",
  "level": 2
}, {
  "value": "Semantic Caching",
  "id": "semantic-caching",
  "level": 3
}, {
  "value": "KV Caching",
  "id": "kv-caching",
  "level": 3
}, {
  "value": "Response Caching",
  "id": "response-caching",
  "level": 3
}, {
  "value": "Cache Invalidation Strategies",
  "id": "cache-invalidation-strategies",
  "level": 3
}, {
  "value": "Caching Architecture",
  "id": "caching-architecture",
  "level": 3
}, {
  "value": "10.3 Rate Limiting",
  "id": "103-rate-limiting",
  "level": 2
}, {
  "value": "Rate Limiting Dimensions",
  "id": "rate-limiting-dimensions",
  "level": 3
}, {
  "value": "Token Bucket Algorithm",
  "id": "token-bucket-algorithm",
  "level": 3
}, {
  "value": "Sliding Window Algorithm",
  "id": "sliding-window-algorithm",
  "level": 3
}, {
  "value": "Multi-Layer Rate Limiter",
  "id": "multi-layer-rate-limiter",
  "level": 3
}, {
  "value": "Priority Queuing",
  "id": "priority-queuing",
  "level": 3
}, {
  "value": "10.4 Cost Management",
  "id": "104-cost-management",
  "level": 2
}, {
  "value": "Cost Optimization Strategies",
  "id": "cost-optimization-strategies",
  "level": 3
}, {
  "value": "Model Selection Strategy",
  "id": "model-selection-strategy",
  "level": 3
}, {
  "value": "Cost Optimization Flow",
  "id": "cost-optimization-flow",
  "level": 3
}, {
  "value": "Prompt Optimization for Cost",
  "id": "prompt-optimization-for-cost",
  "level": 3
}, {
  "value": "10.5 Load Balancing and Autoscaling",
  "id": "105-load-balancing-and-autoscaling",
  "level": 2
}, {
  "value": "Horizontal Scaling",
  "id": "horizontal-scaling",
  "level": 3
}, {
  "value": "Request Routing",
  "id": "request-routing",
  "level": 3
}, {
  "value": "Circuit Breaker",
  "id": "circuit-breaker",
  "level": 3
}, {
  "value": "Connection Pooling",
  "id": "connection-pooling",
  "level": 3
}, {
  "value": "10.6 A/B Testing",
  "id": "106-ab-testing",
  "level": 2
}, {
  "value": "A/B Testing Framework",
  "id": "ab-testing-framework",
  "level": 3
}, {
  "value": "A/B Testing Pipeline",
  "id": "ab-testing-pipeline",
  "level": 3
}, {
  "value": "Experiment Scenarios",
  "id": "experiment-scenarios",
  "level": 3
}, {
  "value": "10.7 Monitoring and Alerting",
  "id": "107-monitoring-and-alerting",
  "level": 2
}, {
  "value": "Key Metrics",
  "id": "key-metrics",
  "level": 3
}, {
  "value": "Monitoring Dashboard Architecture",
  "id": "monitoring-dashboard-architecture",
  "level": 3
}, {
  "value": "Structured Logging",
  "id": "structured-logging",
  "level": 3
}, {
  "value": "Alert Configuration",
  "id": "alert-configuration",
  "level": 3
}, {
  "value": "10.8 Incident Response",
  "id": "108-incident-response",
  "level": 2
}, {
  "value": "Incident Response Workflow",
  "id": "incident-response-workflow",
  "level": 3
}, {
  "value": "AI-Specific Incident Types",
  "id": "ai-specific-incident-types",
  "level": 3
}, {
  "value": "TypeScript: AIDeploymentManager",
  "id": "typescript-aideploymentmanager",
  "level": 2
}, {
  "value": "TypeScript: ABTestingFramework",
  "id": "typescript-abtestingframework",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Question 1",
  "id": "question-1",
  "level": 3
}, {
  "value": "Question 2",
  "id": "question-2",
  "level": 3
}, {
  "value": "Question 3",
  "id": "question-3",
  "level": 3
}, {
  "value": "Question 4",
  "id": "question-4",
  "level": 3
}, {
  "value": "Question 5",
  "id": "question-5",
  "level": 3
}, {
  "value": "Answer Key",
  "id": "answer-key",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Implement a Semantic Cache (Easy)",
  "id": "exercise-1-implement-a-semantic-cache-easy",
  "level": 3
}, {
  "value": "Exercise 2: Token Bucket Rate Limiter (Easy)",
  "id": "exercise-2-token-bucket-rate-limiter-easy",
  "level": 3
}, {
  "value": "Exercise 3: Multi-Layer Rate Limiter with Priority Queuing (Medium)",
  "id": "exercise-3-multi-layer-rate-limiter-with-priority-queuing-medium",
  "level": 3
}, {
  "value": "Exercise 4: A/B Experiment Analyzer (Medium)",
  "id": "exercise-4-ab-experiment-analyzer-medium",
  "level": 3
}, {
  "value": "Exercise 5: Production AI Dashboard Mock (Hard)",
  "id": "exercise-5-production-ai-dashboard-mock-hard",
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
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
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
        id: "chapter-10-production-ai-systems",
        children: "Chapter 10: Production AI Systems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bridge the gap between prototype and production. Master deployment strategies, caching, rate limiting, cost management, load balancing, A/B testing, monitoring, and incident response for AI applications — all with production-grade TypeScript implementations."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/modern-ai-engineering/10-production-ai-systems/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/10-production-ai-systems/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/modern-ai-engineering/10-production-ai-systems/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/10-production-ai-systems/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/modern-ai-engineering/10-production-ai-systems/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/10-production-ai-systems/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the right deployment strategy (real-time, batch, streaming, edge) for your AI use case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement semantic caching, KV caching, and response caching to reduce latency and cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design rate limiting strategies (per-user, per-token, per-IP, global) with token bucket and sliding window algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage AI costs through model selection, prompt optimization, batching, distillation, and quantization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure load balancing, autoscaling, connection pooling, and circuit breakers for AI workloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run A/B experiments on prompt variants, model versions, and retrieval strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build production monitoring dashboards for latency, errors, token usage, costs, and hallucination rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute incident response workflows from detection through post-mortem"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-deployment-strategies",
      children: "10.1 Deployment Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI applications require different deployment strategies depending on latency requirements, throughput, cost constraints, and use case characteristics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-time-inference",
      children: "Real-Time Inference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-time inference serves predictions synchronously with sub-second latency. The client sends a request and waits for the response."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Chatbots, code completion, real-time translation, interactive assistants"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cold start latency (model loading, GPU initialization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request queuing under high traffic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timeout handling for long-running generations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Streaming support for progressive output"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RealTimeEndpoint {\n  endpoint: string;\n  model: string;\n  maxTokens: number;\n  temperature: number;\n  timeoutMs: number;\n}\n\nasync function callRealTimeInference(\n  endpoint: RealTimeEndpoint,\n  input: string\n): Promise<string> {\n  const controller = new AbortController();\n  const timeout = setTimeout(() => controller.abort(), endpoint.timeoutMs);\n\n  try {\n    const response = await fetch(endpoint.endpoint, {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\" },\n      body: JSON.stringify({\n        model: endpoint.model,\n        max_tokens: endpoint.maxTokens,\n        temperature: endpoint.temperature,\n        messages: [{ role: \"user\", content: input }],\n        stream: false,\n      }),\n      signal: controller.signal,\n    });\n\n    if (!response.ok) {\n      throw new Error(`Inference failed: ${response.status}`);\n    }\n\n    const data = await response.json();\n    return data.choices[0].message.content;\n  } finally {\n    clearTimeout(timeout);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-processing",
      children: "Batch Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch processing aggregates multiple requests and processes them as a single job. This reduces per-request overhead and can leverage cheaper inference tiers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Document analysis, bulk classification, content moderation, data enrichment"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BatchJob {\n  jobId: string;\n  requests: string[];\n  status: \"pending\" | \"running\" | \"completed\" | \"failed\";\n  results?: string[];\n  createdAt: Date;\n  completedAt?: Date;\n}\n\nclass BatchProcessor {\n  private queue: BatchJob[] = [];\n  private processing = false;\n\n  async submitBatch(requests: string[]): Promise<string> {\n    const job: BatchJob = {\n      jobId: crypto.randomUUID(),\n      requests,\n      status: \"pending\",\n      createdAt: new Date(),\n    };\n    this.queue.push(job);\n    this.processQueue();\n    return job.jobId;\n  }\n\n  private async processQueue(): Promise<void> {\n    if (this.processing) return;\n    this.processing = true;\n\n    while (this.queue.length > 0) {\n      const job = this.queue.shift()!;\n      job.status = \"running\";\n\n      try {\n        const results = await Promise.all(\n          job.requests.map((req) => this.processSingle(req))\n        );\n        job.results = results;\n        job.status = \"completed\";\n        job.completedAt = new Date();\n      } catch (error) {\n        job.status = \"failed\";\n        console.error(`Batch job ${job.jobId} failed:`, error);\n      }\n    }\n\n    this.processing = false;\n  }\n\n  private async processSingle(input: string): Promise<string> {\n    const response = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n      },\n      body: JSON.stringify({\n        model: \"gpt-4o-mini\",\n        messages: [{ role: \"user\", content: input }],\n        max_tokens: 500,\n      }),\n    });\n    const data = await response.json();\n    return data.choices[0].message.content;\n  }\n\n  getJobStatus(jobId: string): BatchJob | undefined {\n    return this.queue.find((j) => j.jobId === jobId);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "streaming",
      children: "Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Streaming delivers model output token-by-token as it is generated, enabling real-time user experiences without waiting for the full response."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Chat interfaces, code completion, transcription, real-time translation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "async function* streamInference(\n  input: string,\n  model = \"gpt-4o\"\n): AsyncGenerator<string> {\n  const response = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n    },\n    body: JSON.stringify({\n      model,\n      messages: [{ role: \"user\", content: input }],\n      stream: true,\n    }),\n  });\n\n  if (!response.ok) throw new Error(`Stream failed: ${response.status}`);\n  if (!response.body) throw new Error(\"No response body\");\n\n  const reader = response.body.getReader();\n  const decoder = new TextDecoder();\n  let buffer = \"\";\n\n  try {\n    while (true) {\n      const { done, value } = await reader.read();\n      if (done) break;\n\n      buffer += decoder.decode(value, { stream: true });\n      const lines = buffer.split(\"\\n\");\n      buffer = lines.pop() || \"\";\n\n      for (const line of lines) {\n        if (line.startsWith(\"data: \")) {\n          const data = line.slice(6);\n          if (data === \"[DONE]\") return;\n          try {\n            const parsed = JSON.parse(data);\n            const content = parsed.choices[0]?.delta?.content || \"\";\n            if (content) yield content;\n          } catch {\n            // Skip malformed lines\n          }\n        }\n      }\n    }\n  } finally {\n    reader.releaseLock();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-deployment",
      children: "Edge Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edge deployment runs inference on devices or edge servers close to the user, reducing latency and enabling offline operation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Mobile apps, IoT devices, privacy-sensitive applications, offline-capable systems"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-strategy-comparison",
      children: "Deployment Strategy Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost per Request"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chatbots, assistants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes-hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~first token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat, transcription"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile, offline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid (edge + cloud)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered responses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-caching",
      children: "10.2 Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching is the most effective technique for reducing both latency and cost in AI systems. AI applications benefit from several caching strategies beyond traditional key-value caching."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semantic-caching",
      children: "Semantic Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Semantic caching stores responses based on meaning rather than exact string matches. When a user asks a question similar to a previously cached query, the cached response is returned without calling the model."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CachedEntry {\n  query: string;\n  embedding: number[];\n  response: string;\n  model: string;\n  timestamp: Date;\n  hitCount: number;\n}\n\nclass SemanticCache {\n  private entries: CachedEntry[] = [];\n  private similarityThreshold: number;\n\n  constructor(threshold = 0.92) {\n    this.similarityThreshold = threshold;\n  }\n\n  async find(query: string, model: string): Promise<string | null> {\n    const embedding = await this.getEmbedding(query);\n    const now = Date.now();\n\n    for (const entry of this.entries) {\n      if (entry.model !== model) continue;\n      const similarity = this.cosineSimilarity(embedding, entry.embedding);\n\n      if (similarity >= this.similarityThreshold) {\n        entry.hitCount++;\n        return entry.response;\n      }\n    }\n    return null;\n  }\n\n  async store(query: string, response: string, model: string): Promise<void> {\n    const embedding = await this.getEmbedding(query);\n    this.entries.push({\n      query,\n      embedding,\n      response,\n      model,\n      timestamp: new Date(),\n      hitCount: 0,\n    });\n\n    // Evict oldest entries if cache exceeds limit\n    if (this.entries.length > 10000) {\n      this.entries.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());\n      this.entries = this.entries.slice(-5000);\n    }\n  }\n\n  private async getEmbedding(text: string): Promise<number[]> {\n    const response = await fetch(\"https://api.openai.com/v1/embeddings\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n      },\n      body: JSON.stringify({\n        model: \"text-embedding-3-small\",\n        input: text,\n      }),\n    });\n    const data = await response.json();\n    return data.data[0].embedding;\n  }\n\n  private cosineSimilarity(a: number[], b: number[]): number {\n    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);\n    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));\n    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));\n    return dotProduct / (magA * magB);\n  }\n\n  getStats(): { size: number; totalHits: number } {\n    const totalHits = this.entries.reduce((sum, e) => sum + e.hitCount, 0);\n    return { size: this.entries.length, totalHits };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kv-caching",
      children: "KV Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key-value caching stores exact match results. This is useful for deterministic operations like token counting, embedding lookups, and repeated identical queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class KVCache {\n  private store = new Map<string, { value: string; expiresAt: number }>();\n\n  get(key: string): string | null {\n    const entry = this.store.get(key);\n    if (!entry) return null;\n    if (Date.now() > entry.expiresAt) {\n      this.store.delete(key);\n      return null;\n    }\n    return entry.value;\n  }\n\n  set(key: string, value: string, ttlMs: number = 3600000): void {\n    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });\n  }\n\n  invalidate(pattern: string): void {\n    for (const key of this.store.keys()) {\n      if (key.includes(pattern)) this.store.delete(key);\n    }\n  }\n\n  clear(): void {\n    this.store.clear();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "response-caching",
      children: "Response Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response caching stores the complete model response, including metadata about tokens used, model version, and generation parameters. This enables cost attribution and audit trails."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cache-invalidation-strategies",
      children: "Cache Invalidation Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time expiration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General knowledge, stable answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model or prompt update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After prompt engineering changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data source update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When knowledge base changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical content corrections"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caching-architecture",
      children: "Caching Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Request Flow\"\n        REQ[Client Request] --> CACHE_CHECK{Cache Lookup}\n        CACHE_CHECK -->|Semantic Match| HIT[Cache Hit]\n        CACHE_CHECK -->|No Match| MISS[Cache Miss]\n    end\n\n    subgraph \"Cache Layers\"\n        HIT --> RESPOND[Return Cached Response]\n        MISS --> LLM[Call Foundation Model]\n        LLM --> STORE[Store in Cache]\n        STORE --> RESPOND_NEW[Return New Response]\n    end\n\n    subgraph \"Cache Storage\"\n        SC[Semantic Cache<br/>Embedding-based] --- KVC[KV Cache<br/>Exact Match]\n        KVC --- RC[Response Cache<br/>Full Metadata]\n    end\n\n    subgraph \"Invalidation\"\n        EVICTION[Eviction Policy] --> LRU[LRU / TTL]\n        INVAL[Invalidation Trigger] --> MANUAL[Manual / Version / Write-through]\n    end\n\n    CACHE_CHECK --> SC\n    CACHE_CHECK --> KVC\n    SC --> EVICTION\n    KVC --> EVICTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-rate-limiting",
      children: "10.3 Rate Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rate limiting protects your AI application from abuse, controls costs, and ensures fair resource allocation across users."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rate-limiting-dimensions",
      children: "Rate Limiting Dimensions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual user ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent abuse by single user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total token throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control model API costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic abuse protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent infrastructure overload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscription tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Differentiate free vs paid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-bucket-algorithm",
      children: "Token Bucket Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The token bucket allows bursts up to a capacity while enforcing a steady average rate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TokenBucket {\n  private tokens: number;\n  private lastRefill: number;\n\n  constructor(\n    private capacity: number,\n    private refillRate: number, // tokens per second\n    private refillInterval: number = 1000 // ms\n  ) {\n    this.tokens = capacity;\n    this.lastRefill = Date.now();\n  }\n\n  tryConsume(count: number = 1): boolean {\n    this.refill();\n\n    if (this.tokens >= count) {\n      this.tokens -= count;\n      return true;\n    }\n    return false;\n  }\n\n  private refill(): void {\n    const now = Date.now();\n    const elapsed = now - this.lastRefill;\n\n    if (elapsed >= this.refillInterval) {\n      const refillTokens = Math.floor(elapsed / 1000) * this.refillRate;\n      this.tokens = Math.min(this.capacity, this.tokens + refillTokens);\n      this.lastRefill = now;\n    }\n  }\n\n  getAvailableTokens(): number {\n    this.refill();\n    return this.tokens;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sliding-window-algorithm",
      children: "Sliding Window Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sliding window tracks requests within a rolling time window, providing more accurate rate limiting than fixed windows."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SlidingWindowRateLimiter {\n  private windows = new Map<string, number[]>();\n\n  constructor(\n    private maxRequests: number,\n    private windowMs: number\n  ) {}\n\n  isAllowed(key: string): boolean {\n    const now = Date.now();\n    const windowStart = now - this.windowMs;\n\n    let timestamps = this.windows.get(key) || [];\n    timestamps = timestamps.filter((t) => t > windowStart);\n\n    if (timestamps.length >= this.maxRequests) {\n      this.windows.set(key, timestamps);\n      return false;\n    }\n\n    timestamps.push(now);\n    this.windows.set(key, timestamps);\n    return true;\n  }\n\n  getRemainingRequests(key: string): number {\n    const now = Date.now();\n    const windowStart = now - this.windowMs;\n    const timestamps = (this.windows.get(key) || []).filter(\n      (t) => t > windowStart\n    );\n    return Math.max(0, this.maxRequests - timestamps.length);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-layer-rate-limiter",
      children: "Multi-Layer Rate Limiter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RateLimitConfig {\n  maxRequestsPerUser: number;\n  maxTokensPerMinute: number;\n  maxRequestsPerIP: number;\n  maxGlobalRequests: number;\n  windowMs: number;\n}\n\nclass MultiLayerRateLimiter {\n  private userLimiter: SlidingWindowRateLimiter;\n  private ipLimiter: SlidingWindowRateLimiter;\n  private globalLimiter: TokenBucket;\n\n  constructor(private config: RateLimitConfig) {\n    this.userLimiter = new SlidingWindowRateLimiter(\n      config.maxRequestsPerUser,\n      config.windowMs\n    );\n    this.ipLimiter = new SlidingWindowRateLimiter(\n      config.maxRequestsPerIP,\n      config.windowMs\n    );\n    this.globalLimiter = new TokenBucket(\n      config.maxGlobalRequests,\n      config.maxGlobalRequests / (config.windowMs / 1000)\n    );\n  }\n\n  check({\n    userId,\n    ip,\n    estimatedTokens,\n  }: {\n    userId: string;\n    ip: string;\n    estimatedTokens: number;\n  }): { allowed: boolean; reason?: string; retryAfterMs?: number } {\n    if (!this.userLimiter.isAllowed(`user:${userId}`)) {\n      return { allowed: false, reason: \"User rate limit exceeded\" };\n    }\n\n    if (!this.ipLimiter.isAllowed(`ip:${ip}`)) {\n      return { allowed: false, reason: \"IP rate limit exceeded\" };\n    }\n\n    if (!this.globalLimiter.tryConsume(estimatedTokens)) {\n      return { allowed: false, reason: \"Global rate limit exceeded\" };\n    }\n\n    return { allowed: true };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "priority-queuing",
      children: "Priority Queuing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When rate limits are exceeded, requests can be queued with priority levels rather than rejected outright."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Priority = \"critical\" | \"high\" | \"normal\" | \"low\";\n\ninterface QueuedRequest {\n  id: string;\n  priority: Priority;\n  execute: () => Promise<any>;\n  queuedAt: Date;\n}\n\nclass PriorityQueue {\n  private queues: Record<Priority, QueuedRequest[]> = {\n    critical: [],\n    high: [],\n    normal: [],\n    low: [],\n  };\n  private processing = false;\n  private concurrency: number;\n\n  constructor(concurrency = 5) {\n    this.concurrency = concurrency;\n  }\n\n  enqueue(request: Omit<QueuedRequest, \"queuedAt\">): void {\n    this.queues[request.priority].push({ ...request, queuedAt: new Date() });\n    this.process();\n  }\n\n  private async process(): Promise<void> {\n    if (this.processing) return;\n    this.processing = true;\n\n    const priorities: Priority[] = [\"critical\", \"high\", \"normal\", \"low\"];\n\n    while (this.hasPending()) {\n      const batch: QueuedRequest[] = [];\n\n      for (const priority of priorities) {\n        while (\n          batch.length < this.concurrency &&\n          this.queues[priority].length > 0\n        ) {\n          batch.push(this.queues[priority].shift()!);\n        }\n        if (batch.length >= this.concurrency) break;\n      }\n\n      await Promise.allSettled(batch.map((r) => r.execute()));\n    }\n\n    this.processing = false;\n  }\n\n  private hasPending(): boolean {\n    return Object.values(this.queues).some((q) => q.length > 0);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-cost-management",
      children: "10.4 Cost Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI costs can grow rapidly in production. Systematic cost management strategies are essential for sustainable operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cost-optimization-strategies",
      children: "Cost Optimization Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Savings Potential"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation Effort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality degradation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-80%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model distillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-80%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-75%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token budgeting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncated responses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-selection-strategy",
      children: "Model Selection Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ModelTier = \"economy\" | \"standard\" | \"premium\";\n\ninterface ModelConfig {\n  model: string;\n  costPerInputToken: number;\n  costPerOutputToken: number;\n  maxTokens: number;\n  suitableFor: string[];\n}\n\nconst MODEL_CATALOG: Record<ModelTier, ModelConfig> = {\n  economy: {\n    model: \"gpt-4o-mini\",\n    costPerInputToken: 0.00000015,\n    costPerOutputToken: 0.0000006,\n    maxTokens: 16000,\n    suitableFor: [\"classification\", \"summarization\", \"simple_qa\"],\n  },\n  standard: {\n    model: \"gpt-4o\",\n    costPerInputToken: 0.0000025,\n    costPerOutputToken: 0.00001,\n    maxTokens: 128000,\n    suitableFor: [\"complex_reasoning\", \"analysis\", \"creative\"],\n  },\n  premium: {\n    model: \"gpt-4-turbo\",\n    costPerInputToken: 0.00001,\n    costPerOutputToken: 0.00003,\n    maxTokens: 128000,\n    suitableFor: [\"research\", \"critical_decision\", \"expert_analysis\"],\n  },\n};\n\nclass CostManager {\n  private dailyBudget: number;\n  private dailySpend: number = 0;\n  private resetTime: Date;\n\n  constructor(dailyBudget: number) {\n    this.dailyBudget = dailyBudget;\n    this.resetTime = this.getNextResetTime();\n  }\n\n  selectModel(taskType: string, complexity: \"simple\" | \"moderate\" | \"complex\"): ModelConfig {\n    if (complexity === \"simple\") return MODEL_CATALOG.economy;\n    if (complexity === \"moderate\") return MODEL_CATALOG.standard;\n    return MODEL_CATALOG.premium;\n  }\n\n  estimateCost(\n    model: ModelConfig,\n    inputTokens: number,\n    outputTokens: number\n  ): number {\n    return (\n      inputTokens * model.costPerInputToken +\n      outputTokens * model.costPerOutputToken\n    );\n  }\n\n  trackSpend(cost: number): boolean {\n    this.checkReset();\n\n    if (this.dailySpend + cost > this.dailyBudget) {\n      return false; // Budget exceeded\n    }\n\n    this.dailySpend += cost;\n    return true;\n  }\n\n  private checkReset(): void {\n    if (Date.now() >= this.resetTime.getTime()) {\n      this.dailySpend = 0;\n      this.resetTime = this.getNextResetTime();\n    }\n  }\n\n  private getNextResetTime(): Date {\n    const next = new Date();\n    next.setHours(24, 0, 0, 0);\n    return next;\n  }\n\n  getDailySpend(): number {\n    this.checkReset();\n    return this.dailySpend;\n  }\n\n  getRemainingBudget(): number {\n    return this.dailyBudget - this.getDailySpend();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cost-optimization-flow",
      children: "Cost Optimization Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Request Inbound\"\n        REQ[User Request] --> CACHE{Check Cache}\n        CACHE -->|Hit| RETURN_CACHE[Return Cached<br/>$0 cost]\n    end\n\n    subgraph \"Model Selection\"\n        CACHE -->|Miss| TIER{Determine<br/>Complexity}\n        TIER -->|Simple| ECONOMY[Economy Model<br/>gpt-4o-mini]\n        TIER -->|Moderate| STANDARD[Standard Model<br/>gpt-4o]\n        TIER -->|Complex| PREMIUM[Premium Model<br/>gpt-4-turbo]\n    end\n\n    subgraph \"Optimization\"\n        ECONOMY --> COMPRESS[Prompt Compression<br/>Optimize Tokens]\n        STANDARD --> COMPRESS\n        PREMIUM --> COMPRESS\n        COMPRESS --> BATCH{Batchable?}\n        BATCH -->|Yes| BATCHED[Batched Execution<br/>40-70% savings]\n        BATCH -->|No| SINGLE[Single Execution]\n    end\n\n    subgraph \"Budget Check\"\n        SINGLE --> BUDGET{Within<br/>Daily Budget?}\n        BATCHED --> BUDGET\n        BUDGET -->|Yes| EXECUTE[Execute Inference]\n        BUDGET -->|No| QUEUE[Queue or Fallback<br/>to weaker model]\n    end\n\n    subgraph \"Recording\"\n        EXECUTE --> TRACK[Track Cost]\n        TRACK --> CACHE_RESPONSE[Cache Response]\n        CACHE_RESPONSE --> RETURN[Return Response]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prompt-optimization-for-cost",
      children: "Prompt Optimization for Cost"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PromptOptimizer {\n  optimize(prompt: string, maxTokens: number): string {\n    // Remove redundant whitespace\n    let optimized = prompt.replace(/\\s+/g, \" \").trim();\n\n    // Remove unnecessary instructions\n    optimized = optimized.replace(/^You are an AI assistant\\.?\\s*/i, \"\");\n\n    // Truncate examples if over token limit\n    const estimatedTokens = optimized.length / 4;\n    if (estimatedTokens > maxTokens) {\n      const ratio = maxTokens / estimatedTokens;\n      optimized = optimized.slice(0, Math.floor(optimized.length * ratio));\n    }\n\n    return optimized;\n  }\n\n  estimateTokenCount(text: string): number {\n    // Rough estimation: ~4 characters per token\n    return Math.ceil(text.length / 4);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-load-balancing-and-autoscaling",
      children: "10.5 Load Balancing and Autoscaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As AI applications scale, load balancing and autoscaling ensure consistent performance under variable traffic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "horizontal-scaling",
      children: "Horizontal Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Horizontal scaling adds more instances of your AI service to handle increased load."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ScalingConfig {\n  minReplicas: number;\n  maxReplicas: number;\n  targetCpuUtilization: number;\n  targetMemoryUtilization: number;\n  targetRequestsPerSecond: number;\n  cooldownPeriodMs: number;\n}\n\nclass AutoScaler {\n  private currentReplicas: number;\n  private lastScaleTime: number = 0;\n\n  constructor(private config: ScalingConfig) {\n    this.currentReplicas = config.minReplicas;\n  }\n\n  evaluate(\n    currentCPU: number,\n    currentMemory: number,\n    currentRPS: number\n  ): number {\n    const now = Date.now();\n    if (now - this.lastScaleTime < this.config.cooldownPeriodMs) {\n      return this.currentReplicas;\n    }\n\n    let targetReplicas = this.currentReplicas;\n\n    const cpuRatio = currentCPU / this.config.targetCpuUtilization;\n    const memoryRatio = currentMemory / this.config.targetMemoryUtilization;\n    const rpsRatio = currentRPS / this.config.targetRequestsPerSecond;\n\n    const maxRatio = Math.max(cpuRatio, memoryRatio, rpsRatio);\n\n    if (maxRatio > 1.2) {\n      targetReplicas = Math.ceil(this.currentReplicas * maxRatio);\n    } else if (maxRatio < 0.5 && this.currentReplicas > this.config.minReplicas) {\n      targetReplicas = Math.max(\n        this.config.minReplicas,\n        Math.floor(this.currentReplicas * 0.7)\n      );\n    }\n\n    targetReplicas = Math.max(\n      this.config.minReplicas,\n      Math.min(this.config.maxReplicas, targetReplicas)\n    );\n\n    if (targetReplicas !== this.currentReplicas) {\n      this.currentReplicas = targetReplicas;\n      this.lastScaleTime = now;\n    }\n\n    return this.currentReplicas;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-routing",
      children: "Request Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface BackendInstance {\n  id: string;\n  host: string;\n  port: number;\n  healthy: boolean;\n  activeRequests: number;\n  lastHeartbeat: number;\n}\n\nclass LoadBalancer {\n  private instances: BackendInstance[] = [];\n  private rrIndex: number = 0;\n\n  register(instance: BackendInstance): void {\n    this.instances.push(instance);\n  }\n\n  getNextInstance(strategy: \"round-robin\" | \"least-connections\"): BackendInstance | null {\n    const healthy = this.instances.filter(\n      (i) => i.healthy && Date.now() - i.lastHeartbeat < 30000\n    );\n\n    if (healthy.length === 0) return null;\n\n    if (strategy === \"round-robin\") {\n      const instance = healthy[this.rrIndex % healthy.length];\n      this.rrIndex++;\n      return instance;\n    }\n\n    // Least connections\n    return healthy.reduce((a, b) =>\n      a.activeRequests <= b.activeRequests ? a : b\n    );\n  }\n\n  healthCheck(): void {\n    for (const instance of this.instances) {\n      if (Date.now() - instance.lastHeartbeat > 60000) {\n        instance.healthy = false;\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "circuit-breaker",
      children: "Circuit Breaker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Circuit breakers prevent cascading failures by stopping requests to degraded services."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CircuitBreaker {\n  private failures: number = 0;\n  private lastFailureTime: number = 0;\n  private state: \"closed\" | \"open\" | \"half-open\" = \"closed\";\n\n  constructor(\n    private failureThreshold: number = 5,\n    private resetTimeoutMs: number = 30000\n  ) {}\n\n  async call<T>(fn: () => Promise<T>): Promise<T> {\n    if (this.state === \"open\") {\n      if (Date.now() - this.lastFailureTime >= this.resetTimeoutMs) {\n        this.state = \"half-open\";\n      } else {\n        throw new Error(\"Circuit breaker is open\");\n      }\n    }\n\n    try {\n      const result = await fn();\n      this.onSuccess();\n      return result;\n    } catch (error) {\n      this.onFailure();\n      throw error;\n    }\n  }\n\n  private onSuccess(): void {\n    this.failures = 0;\n    this.state = \"closed\";\n  }\n\n  private onFailure(): void {\n    this.failures++;\n    this.lastFailureTime = Date.now();\n\n    if (this.failures >= this.failureThreshold) {\n      this.state = \"open\";\n    }\n  }\n\n  getState(): \"closed\" | \"open\" | \"half-open\" {\n    return this.state;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connection-pooling",
      children: "Connection Pooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ConnectionPool {\n  private active: number = 0;\n  private queue: Array<() => void> = [];\n\n  constructor(private maxConnections: number = 10) {}\n\n  async acquire(): Promise<void> {\n    if (this.active < this.maxConnections) {\n      this.active++;\n      return;\n    }\n\n    return new Promise<void>((resolve) => {\n      this.queue.push(resolve);\n    });\n  }\n\n  release(): void {\n    if (this.queue.length > 0) {\n      const next = this.queue.shift()!;\n      next();\n    } else {\n      this.active--;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-ab-testing",
      children: "10.6 A/B Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A/B testing enables data-driven decisions about prompt variants, model versions, retrieval strategies, and other AI system components."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ab-testing-framework",
      children: "A/B Testing Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ExperimentConfig {\n  experimentId: string;\n  variants: Variant[];\n  trafficSplit: number[]; // Must sum to 100\n  metrics: string[];\n  minSampleSize: number;\n  startDate: Date;\n  endDate: Date;\n}\n\ninterface Variant {\n  id: string;\n  name: string;\n  config: Record<string, any>;\n}\n\ninterface ExperimentResult {\n  variantId: string;\n  totalRequests: number;\n  successCount: number;\n  avgLatency: number;\n  avgTokensUsed: number;\n  avgScore: number;\n  errorRate: number;\n  costPerRequest: number;\n}\n\nclass ABTestingFramework {\n  private experiments: Map<string, ExperimentConfig> = new Map();\n  private results: Map<string, ExperimentResult[]> = new Map();\n\n  registerExperiment(config: ExperimentConfig): void {\n    const totalSplit = config.trafficSplit.reduce((a, b) => a + b, 0);\n    if (totalSplit !== 100) {\n      throw new Error(\"Traffic split must sum to 100\");\n    }\n    this.experiments.set(config.experimentId, config);\n  }\n\n  assignVariant(experimentId: string, userId: string): Variant | null {\n    const config = this.experiments.get(experimentId);\n    if (!config) return null;\n\n    if (Date.now() < config.startDate.getTime() || Date.now() > config.endDate.getTime()) {\n      return null;\n    }\n\n    const hash = this.hashUserId(userId, experimentId);\n    let cumulative = 0;\n\n    for (let i = 0; i < config.variants.length; i++) {\n      cumulative += config.trafficSplit[i];\n      if (hash < cumulative) {\n        return config.variants[i];\n      }\n    }\n\n    return config.variants[0];\n  }\n\n  private hashUserId(userId: string, experimentId: string): number {\n    const combined = `${experimentId}:${userId}`;\n    let hash = 0;\n    for (let i = 0; i < combined.length; i++) {\n      const char = combined.charCodeAt(i);\n      hash = (hash << 5) - hash + char;\n      hash = hash & hash;\n    }\n    return Math.abs(hash % 100);\n  }\n\n  recordResult(\n    experimentId: string,\n    variantId: string,\n    metrics: {\n      success: boolean;\n      latency: number;\n      tokensUsed: number;\n      score?: number;\n      cost: number;\n    }\n  ): void {\n    const key = `${experimentId}:${variantId}`;\n    const existing: ExperimentResult = this.results.get(key) || {\n      variantId,\n      totalRequests: 0,\n      successCount: 0,\n      avgLatency: 0,\n      avgTokensUsed: 0,\n      avgScore: 0,\n      errorRate: 0,\n      costPerRequest: 0,\n    };\n\n    const n = existing.totalRequests;\n    existing.totalRequests++;\n    existing.successCount += metrics.success ? 1 : 0;\n    existing.avgLatency = (existing.avgLatency * n + metrics.latency) / (n + 1);\n    existing.avgTokensUsed =\n      (existing.avgTokensUsed * n + metrics.tokensUsed) / (n + 1);\n    if (metrics.score !== undefined) {\n      existing.avgScore = (existing.avgScore * n + metrics.score) / (n + 1);\n    }\n    existing.errorRate = 1 - existing.successCount / existing.totalRequests;\n    existing.costPerRequest =\n      (existing.costPerRequest * n + metrics.cost) / (n + 1);\n\n    this.results.set(key, existing);\n  }\n\n  getResults(experimentId: string): ExperimentResult[] {\n    const results: ExperimentResult[] = [];\n    const config = this.experiments.get(experimentId);\n    if (!config) return results;\n\n    for (const variant of config.variants) {\n      const key = `${experimentId}:${variant.id}`;\n      const result = this.results.get(key);\n      if (result) results.push(result);\n    }\n\n    return results;\n  }\n\n  isSignificant(experimentId: string): boolean {\n    const results = this.getResults(experimentId);\n    if (results.length < 2) return false;\n\n    const config = this.experiments.get(experimentId);\n    if (!config) return false;\n\n    for (const result of results) {\n      if (result.totalRequests < config.minSampleSize) return false;\n    }\n\n    // Simple z-test for proportion comparison\n    const [control, treatment] = results;\n    const p1 = control.successCount / control.totalRequests;\n    const p2 = treatment.successCount / treatment.totalRequests;\n    const pPool =\n      (control.successCount + treatment.successCount) /\n      (control.totalRequests + treatment.totalRequests);\n    const se = Math.sqrt(\n      pPool * (1 - pPool) * (1 / control.totalRequests + 1 / treatment.totalRequests)\n    );\n    const z = Math.abs(p1 - p2) / se;\n\n    return z > 1.96; // 95% confidence\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ab-testing-pipeline",
      children: "A/B Testing Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Traffic Routing\"\n        REQ[User Request] --> ID[User ID Hash]\n        ID --> SPLIT{Traffic Split}\n        SPLIT -->|50%| CONTROL[Control Variant<br/>Existing Prompt]\n        SPLIT -->|50%| TREATMENT[Treatment Variant<br/>New Prompt]\n    end\n\n    subgraph \"Execution\"\n        CONTROL --> RESULT_A[Generate Response A]\n        TREATMENT --> RESULT_B[Generate Response B]\n    end\n\n    subgraph \"Metric Collection\"\n        RESULT_A --> COLLECT[Collect Metrics<br/>Latency, Score, Tokens, Cost]\n        RESULT_B --> COLLECT\n        COLLECT --> STORE_EXP[Store Experiment Data]\n    end\n\n    subgraph \"Analysis\"\n        STORE_EXP --> COMPARE{Statistical<br/>Analysis}\n        COMPARE -->|p < 0.05| WINNER[Declare Winner]\n        COMPARE -->|p >= 0.05| CONTINUE[Continue Experiment<br/>Insufficient Sample]\n        WINNER --> ROLLOUT[Rollout Winning Variant<br/>to 100% Traffic]\n    end\n\n    subgraph \"Guardrails\"\n        RESULT_A --> MONITOR{Monitor<br/>Degradation}\n        RESULT_B --> MONITOR\n        MONITOR -->|Score Drop > 5%| ALERT[Alert & Auto-rollback]\n        MONITOR -->|Cost Spike > 20%| ALERT\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "experiment-scenarios",
      children: "Experiment Scenarios"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Experiment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Treatment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metrics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt variant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few-shot with 3 examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few-shot with 5 examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy, latency, tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gpt-4o-mini"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gpt-4o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality score, cost, latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recall, precision, latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diversity, relevance, hallucination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval quality, latency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "107-monitoring-and-alerting",
      children: "10.7 Monitoring and Alerting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production AI systems require comprehensive monitoring across multiple dimensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-metrics",
      children: "Key Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metrics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alert Thresholds"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p50, p95, p99 response time, time-to-first-token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p95 > 5s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error rates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4xx, 5xx, timeout rate, empty response rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate > 1%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input tokens/min, output tokens/min, total tokens/min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 80% quota"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per request, daily spend, cost by model/endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily spend > budget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination rate, user satisfaction score, relevance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination rate > 5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU, memory, GPU utilization, request queue depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU > 80% for 5min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content filter triggers, PII detection rate, abuse reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter rate > 2%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring-dashboard-architecture",
      children: "Monitoring Dashboard Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Data Sources\"\n        API[AI API Gateway] --> LOGS[Request Logs]\n        API --> METRICS[Metrics Export]\n        API --> TRACES[Distributed Traces]\n        LLM[Foundation Model] --> TOKEN_USAGE[Token Usage]\n        LLM --> LATENCY[Latency Data]\n    end\n\n    subgraph \"Collection Layer\"\n        LOGS --> LOG_AGG[Log Aggregator<br/>ELK / Loki]\n        METRICS --> PROM[Prometheus<br/>Metrics Store]\n        TRACES --> TEMPO[Tempo / Jaeger<br/>Tracing Backend]\n        TOKEN_USAGE --> COST_DB[Cost Database]\n    end\n\n    subgraph \"Alerting\"\n        PROM --> ALERT_MGR[Alert Manager]\n        ALERT_MGR --> PAGER[PagerDuty / Slack]\n        ALERT_MGR --> EMAIL[Email Alerts]\n    end\n\n    subgraph \"Dashboard\"\n        LOG_AGG --> GRAFANA[Grafana Dashboard]\n        PROM --> GRAFANA\n        TEMPO --> GRAFANA\n        COST_DB --> GRAFANA\n        GRAFANA --> DASH[Production AI Dashboard]\n    end\n\n    subgraph \"Dashboard Panels\"\n        DASH --> LATENCY_PANEL[Latency: p50/p95/p99]\n        DASH --> ERROR_PANEL[Error Rate: 4xx/5xx/Timeout]\n        DASH --> TOKEN_PANEL[Token Usage: Input/Output]\n        DASH --> COST_PANEL[Cost: Daily/Monthly Trend]\n        DASH --> QUALITY_PANEL[Quality: Hallucination Score]\n        DASH --> SAFETY_PANEL[Safety: Filter Trigger Rate]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structured-logging",
      children: "Structured Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AILogEntry {\n  timestamp: string;\n  requestId: string;\n  userId: string;\n  model: string;\n  promptTokens: number;\n  completionTokens: number;\n  latencyMs: number;\n  statusCode: number;\n  cacheHit: boolean;\n  cost: number;\n  variant?: string;\n  safetyFlags?: string[];\n  error?: string;\n}\n\nclass AILogger {\n  private logs: AILogEntry[] = [];\n  private metricsBuffer: Map<string, number[]> = new Map();\n\n  log(entry: Omit<AILogEntry, \"timestamp\">): void {\n    const fullEntry: AILogEntry = {\n      ...entry,\n      timestamp: new Date().toISOString(),\n    };\n    this.logs.push(fullEntry);\n    this.updateMetrics(fullEntry);\n\n    if (this.logs.length > 10000) {\n      this.flush();\n    }\n  }\n\n  private updateMetrics(entry: AILogEntry): void {\n    this.addMetric(\"latency\", entry.latencyMs);\n    this.addMetric(\"tokens\", entry.promptTokens + entry.completionTokens);\n    this.addMetric(\"cost\", entry.cost);\n\n    if (entry.statusCode >= 400) {\n      this.addMetric(\"errors\", 1);\n    }\n  }\n\n  private addMetric(name: string, value: number): void {\n    if (!this.metricsBuffer.has(name)) {\n      this.metricsBuffer.set(name, []);\n    }\n    this.metricsBuffer.get(name)!.push(value);\n  }\n\n  getLatencyPercentiles(): { p50: number; p95: number; p99: number } {\n    const latencies = this.metricsBuffer.get(\"latency\") || [];\n    if (latencies.length === 0) return { p50: 0, p95: 0, p99: 0 };\n\n    const sorted = [...latencies].sort((a, b) => a - b);\n    return {\n      p50: sorted[Math.floor(sorted.length * 0.5)],\n      p95: sorted[Math.floor(sorted.length * 0.95)],\n      p99: sorted[Math.floor(sorted.length * 0.99)],\n    };\n  }\n\n  getErrorRate(): number {\n    const errors = this.metricsBuffer.get(\"errors\") || [];\n    const total = this.logs.length;\n    return total > 0 ? errors.length / total : 0;\n  }\n\n  private flush(): void {\n    // In production, send to external logging system\n    console.log(`Flushing ${this.logs.length} log entries`);\n    this.logs = [];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alert-configuration",
      children: "Alert Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AlertRule {\n  name: string;\n  metric: string;\n  condition: \">\" | \"<\" | \"==\";\n  threshold: number;\n  durationMs: number;\n  severity: \"critical\" | \"warning\" | \"info\";\n  channels: string[];\n}\n\nclass AlertManager {\n  private rules: AlertRule[] = [];\n  private alertHistory: Map<string, number[]> = new Map();\n\n  addRule(rule: AlertRule): void {\n    this.rules.push(rule);\n  }\n\n  evaluate(metrics: Record<string, number>): string[] {\n    const triggered: string[] = [];\n\n    for (const rule of this.rules) {\n      const value = metrics[rule.metric];\n      if (value === undefined) continue;\n\n      let isTriggered = false;\n      if (rule.condition === \">\" && value > rule.threshold) isTriggered = true;\n      if (rule.condition === \"<\" && value < rule.threshold) isTriggered = true;\n      if (rule.condition === \"==\" && value === rule.threshold) isTriggered = true;\n\n      if (isTriggered) {\n        const history = this.alertHistory.get(rule.name) || [];\n        history.push(Date.now());\n        this.alertHistory.set(rule.name, history);\n\n        const sustained = this.checkSustained(rule);\n        if (sustained) {\n          triggered.push(`${rule.severity}: ${rule.name} - ${rule.metric} ${rule.condition} ${rule.threshold} (current: ${value})`);\n        }\n      }\n    }\n\n    return triggered;\n  }\n\n  private checkSustained(rule: AlertRule): boolean {\n    const history = this.alertHistory.get(rule.name) || [];\n    const windowStart = Date.now() - rule.durationMs;\n    const recentTriggers = history.filter((t) => t > windowStart);\n    return recentTriggers.length >= 2;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "108-incident-response",
      children: "10.8 Incident Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Incident response for AI systems requires specialized playbooks that address AI-specific failure modes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "incident-response-workflow",
      children: "Incident Response Workflow"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Team"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring alert, user report, automated test failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-call engineer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 5 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Triage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assess severity, determine affected users, identify failure mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-call + SRE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 15 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback model, switch fallback, disable feature, rate limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRE + ML team"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 30 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root cause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze logs, reproduce issue, identify trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML + Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 4 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy fix, update prompts, adjust thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 8 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Post-mortem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document timeline, determine action items, update runbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 48 hours"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-specific-incident-types",
      children: "AI-Specific Incident Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type AIIncidentType =\n  | \"quality_degradation\"\n  | \"cost_spike\"\n  | \"safety_breach\"\n  | \"model_failure\"\n  | \"latency_spike\"\n  | \"data_leak\"\n  | \"hallucination_wave\";\n\ninterface Incident {\n  id: string;\n  type: AIIncidentType;\n  severity: \"sev1\" | \"sev2\" | \"sev3\";\n  detectedAt: Date;\n  mitigatedAt?: Date;\n  resolvedAt?: Date;\n  summary: string;\n  runbook: string;\n}\n\nconst INCIDENT_RUNBOOKS: Record<AIIncidentType, string> = {\n  quality_degradation: \"1. Verify eval scores. 2. Check prompt changes. 3. Rollback prompt version. 4. Notify affected users.\",\n  cost_spike: \"1. Check token usage per user. 2. Verify model tier. 3. Enable stricter caching. 4. Set spend limit alert.\",\n  safety_breach: \"1. Block offending inputs. 2. Revoke API keys if abuse detected. 3. Review filter config. 4. Report to security team.\",\n  model_failure: \"1. Verify API status. 2. Switch to fallback model. 3. Check for model deprecation. 4. Update model routing.\",\n  latency_spike: \"1. Check traffic volume. 2. Verify autoscaling. 3. Review cache hit rate. 4. Scale up instances.\",\n  data_leak: \"1. Rotate API keys. 2. Review logs for PII. 3. Block affected endpoints. 4. Notify compliance team.\",\n  hallucination_wave: \"1. Add grounding context. 2. Reduce temperature. 3. Enable output validation. 4. Review RAG quality.\",\n};\n\nclass IncidentManager {\n  private activeIncidents: Map<string, Incident> = new Map();\n  private resolvedIncidents: Incident[] = [];\n\n  createIncident(type: AIIncidentType, severity: Incident[\"severity\"], summary: string): string {\n    const id = `inc-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;\n    const incident: Incident = {\n      id,\n      type,\n      severity,\n      detectedAt: new Date(),\n      summary,\n      runbook: INCIDENT_RUNBOOKS[type],\n    };\n\n    this.activeIncidents.set(id, incident);\n    console.log(`[INCIDENT] ${severity.toUpperCase()}: ${type} - ${summary}`);\n    console.log(`[RUNBOOK] ${incident.runbook}`);\n\n    return id;\n  }\n\n  mitigate(id: string): void {\n    const incident = this.activeIncidents.get(id);\n    if (incident) {\n      incident.mitigatedAt = new Date();\n      console.log(`[INCIDENT] ${id} mitigated at ${incident.mitigatedAt}`);\n    }\n  }\n\n  resolve(id: string): void {\n    const incident = this.activeIncidents.get(id);\n    if (incident) {\n      incident.resolvedAt = new Date();\n      this.activeIncidents.delete(id);\n      this.resolvedIncidents.push(incident);\n      console.log(`[INCIDENT] ${id} resolved`);\n    }\n  }\n\n  getActiveIncidents(): Incident[] {\n    return Array.from(this.activeIncidents.values());\n  }\n\n  generatePostMortem(): string {\n    const recent = this.resolvedIncidents.slice(-10);\n    return recent\n      .map(\n        (i) => `\n## Post-Mortem: ${i.id}\n- **Type**: ${i.type}\n- **Severity**: ${i.severity}\n- **Detected**: ${i.detectedAt.toISOString()}\n- **Mitigated**: ${i.mitigatedAt?.toISOString() || \"N/A\"}\n- **Resolved**: ${i.resolvedAt?.toISOString() || \"N/A\"}\n- **Summary**: ${i.summary}\n- **Runbook**: ${i.runbook}\n`\n      )\n      .join(\"\\n---\\n\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-aideploymentmanager",
      children: "TypeScript: AIDeploymentManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AIDeploymentManager"
      }), " class integrates semantic caching, rate limiting, cost tracking, and health checks into a single deployment management system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DeploymentConfig {\n  model: string;\n  maxTokens: number;\n  temperature: number;\n  dailyBudget: number;\n  rateLimitConfig: {\n    maxRequestsPerUser: number;\n    maxRequestsPerIP: number;\n    maxGlobalRequests: number;\n    windowMs: number;\n  };\n  cacheConfig: {\n    enabled: boolean;\n    similarityThreshold: number;\n    ttlMs: number;\n  };\n}\n\nclass AIDeploymentManager {\n  private cache: SemanticCache;\n  private kvCache: KVCache;\n  private rateLimiter: MultiLayerRateLimiter;\n  private costManager: CostManager;\n  private logger: AILogger;\n  private alertManager: AlertManager;\n  private circuitBreaker: CircuitBreaker;\n  private healthy: boolean = true;\n\n  constructor(private config: DeploymentConfig) {\n    this.cache = new SemanticCache(config.cacheConfig.similarityThreshold);\n    this.kvCache = new KVCache();\n    this.rateLimiter = new MultiLayerRateLimiter({\n      maxRequestsPerUser: config.rateLimitConfig.maxRequestsPerUser,\n      maxTokensPerMinute: 100000,\n      maxRequestsPerIP: config.rateLimitConfig.maxRequestsPerIP,\n      maxGlobalRequests: config.rateLimitConfig.maxGlobalRequests,\n      windowMs: config.rateLimitConfig.windowMs,\n    });\n    this.costManager = new CostManager(config.dailyBudget);\n    this.logger = new AILogger();\n    this.alertManager = new AlertManager();\n    this.circuitBreaker = new CircuitBreaker(5, 30000);\n\n    this.setupDefaultAlerts();\n  }\n\n  private setupDefaultAlerts(): void {\n    this.alertManager.addRule({\n      name: \"High Latency\",\n      metric: \"p95_latency\",\n      condition: \">\",\n      threshold: 5000,\n      durationMs: 60000,\n      severity: \"warning\",\n      channels: [\"slack\"],\n    });\n    this.alertManager.addRule({\n      name: \"Error Rate Spike\",\n      metric: \"error_rate\",\n      condition: \">\",\n      threshold: 0.05,\n      durationMs: 60000,\n      severity: \"critical\",\n      channels: [\"pagerduty\", \"slack\"],\n    });\n    this.alertManager.addRule({\n      name: \"Budget Exceeded\",\n      metric: \"daily_spend\",\n      condition: \">\",\n      threshold: this.config.dailyBudget * 0.9,\n      durationMs: 0,\n      severity: \"warning\",\n      channels: [\"email\"],\n    });\n  }\n\n  async processRequest(params: {\n    userId: string;\n    ip: string;\n    prompt: string;\n  }): Promise<{\n    response: string;\n    cached: boolean;\n    cost: number;\n    latencyMs: number;\n  }> {\n    const startTime = Date.now();\n\n    // 1. Check health\n    if (!this.healthy) {\n      throw new Error(\"Service unhealthy\");\n    }\n\n    // 2. Rate limiting check\n    const rateCheck = this.rateLimiter.check({\n      userId: params.userId,\n      ip: params.ip,\n      estimatedTokens: params.prompt.length / 4,\n    });\n\n    if (!rateCheck.allowed) {\n      throw new Error(`Rate limited: ${rateCheck.reason}`);\n    }\n\n    // 3. Cache check\n    if (this.config.cacheConfig.enabled) {\n      const cached = await this.cache.find(params.prompt, this.config.model);\n      if (cached) {\n        const latency = Date.now() - startTime;\n        this.logger.log({\n          requestId: crypto.randomUUID(),\n          userId: params.userId,\n          model: this.config.model,\n          promptTokens: Math.ceil(params.prompt.length / 4),\n          completionTokens: Math.ceil(cached.length / 4),\n          latencyMs: latency,\n          statusCode: 200,\n          cacheHit: true,\n          cost: 0,\n        });\n        return { response: cached, cached: true, cost: 0, latencyMs: latency };\n      }\n    }\n\n    // 4. Execute with circuit breaker\n    const result = await this.circuitBreaker.call(async () => {\n      return this.callModel(params.prompt);\n    });\n\n    const latency = Date.now() - startTime;\n    const estimatedCost = this.costManager.estimateCost(\n      MODEL_CATALOG.standard,\n      Math.ceil(params.prompt.length / 4),\n      Math.ceil(result.length / 4)\n    );\n\n    // 5. Track cost\n    if (!this.costManager.trackSpend(estimatedCost)) {\n      console.warn(\"Daily budget exceeded\");\n    }\n\n    // 6. Cache response\n    if (this.config.cacheConfig.enabled) {\n      await this.cache.store(params.prompt, result, this.config.model);\n    }\n\n    // 7. Log and alert\n    this.logger.log({\n      requestId: crypto.randomUUID(),\n      userId: params.userId,\n      model: this.config.model,\n      promptTokens: Math.ceil(params.prompt.length / 4),\n      completionTokens: Math.ceil(result.length / 4),\n      latencyMs: latency,\n      statusCode: 200,\n      cacheHit: false,\n      cost: estimatedCost,\n    });\n\n    const metrics = {\n      p95_latency: this.logger.getLatencyPercentiles().p95,\n      error_rate: this.logger.getErrorRate(),\n      daily_spend: this.costManager.getDailySpend(),\n    };\n\n    const alerts = this.alertManager.evaluate(metrics);\n    for (const alert of alerts) {\n      console.warn(`[ALERT] ${alert}`);\n    }\n\n    return { response: result, cached: false, cost: estimatedCost, latencyMs: latency };\n  }\n\n  private async callModel(prompt: string): Promise<string> {\n    const response = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n      },\n      body: JSON.stringify({\n        model: this.config.model,\n        max_tokens: this.config.maxTokens,\n        temperature: this.config.temperature,\n        messages: [{ role: \"user\", content: prompt }],\n      }),\n    });\n\n    if (!response.ok) {\n      throw new Error(`Model call failed: ${response.status}`);\n    }\n\n    const data = await response.json();\n    return data.choices[0].message.content;\n  }\n\n  healthCheck(): {\n    healthy: boolean;\n    cacheSize: number;\n    dailySpend: number;\n    budgetRemaining: number;\n    circuitBreakerState: string;\n  } {\n    return {\n      healthy: this.healthy,\n      cacheSize: this.cache.getStats().size,\n      dailySpend: this.costManager.getDailySpend(),\n      budgetRemaining: this.costManager.getRemainingBudget(),\n      circuitBreakerState: this.circuitBreaker.getState(),\n    };\n  }\n\n  setHealthy(healthy: boolean): void {\n    this.healthy = healthy;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-abtestingframework",
      children: "TypeScript: ABTestingFramework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ABTestingFramework"
      }), " class manages experiment assignment, metric collection, and statistical analysis for AI system A/B tests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MetricCollector {\n  recordMetric(experimentId: string, variantId: string, metric: string, value: number): void;\n  getAggregates(experimentId: string): Map<string, Map<string, { mean: number; variance: number; count: number }>>;\n}\n\nclass SimpleMetricCollector implements MetricCollector {\n  private data = new Map<string, Map<string, number[]>>();\n\n  recordMetric(experimentId: string, variantId: string, metric: string, value: number): void {\n    const key = `${experimentId}:${variantId}:${metric}`;\n    if (!this.data.has(key)) this.data.set(key, []);\n    this.data.get(key)!.push(value);\n  }\n\n  getAggregates(experimentId: string): Map<string, Map<string, { mean: number; variance: number; count: number }>> {\n    const result = new Map<string, Map<string, { mean: number; variance: number; count: number }>>();\n\n    for (const [key, values] of this.data) {\n      const [expId, variantId, metric] = key.split(\":\");\n      if (expId !== experimentId) continue;\n\n      if (!result.has(variantId)) result.set(variantId, new Map());\n      const n = values.length;\n      const mean = values.reduce((a, b) => a + b, 0) / n;\n      const variance = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / n;\n\n      result.get(variantId)!.set(metric, { mean, variance, count: n });\n    }\n\n    return result;\n  }\n}\n\nclass StatisticalAnalyzer {\n  tTest(\n    control: { mean: number; variance: number; count: number },\n    treatment: { mean: number; variance: number; count: number }\n  ): { tStatistic: number; pValue: number; significant: boolean } {\n    const pooledVariance =\n      ((control.count - 1) * control.variance + (treatment.count - 1) * treatment.variance) /\n      (control.count + treatment.count - 2);\n\n    const se = Math.sqrt(\n      pooledVariance * (1 / control.count + 1 / treatment.count)\n    );\n\n    const tStatistic = (treatment.mean - control.mean) / se;\n\n    // Approximate p-value using normal distribution (large sample)\n    const pValue = 2 * (1 - this.normalCDF(Math.abs(tStatistic)));\n\n    return {\n      tStatistic,\n      pValue,\n      significant: pValue < 0.05,\n    };\n  }\n\n  private normalCDF(x: number): number {\n    const a1 = 0.254829592;\n    const a2 = -0.284496736;\n    const a3 = 1.421413741;\n    const a4 = -1.453152027;\n    const a5 = 1.061405429;\n    const p = 0.3275911;\n\n    const sign = x < 0 ? -1 : 1;\n    x = Math.abs(x) / Math.sqrt(2);\n\n    const t = 1 / (1 + p * x);\n    const y =\n      1 -\n      ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);\n\n    return 0.5 * (1 + sign * y);\n  }\n\n  minimumSampleSize(\n    baseline: number,\n    minimumDetectableEffect: number,\n    significance: number = 0.05,\n    power: number = 0.8\n  ): number {\n    const zAlpha = 1.96; // for significance = 0.05\n    const zBeta = 0.84; // for power = 0.8\n\n    const p1 = baseline;\n    const p2 = baseline * (1 + minimumDetectableEffect);\n\n    const numerator =\n      (zAlpha * Math.sqrt(2 * p1 * (1 - p1)) +\n        zBeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) ** 2;\n    const denominator = (p2 - p1) ** 2;\n\n    return Math.ceil(numerator / denominator);\n  }\n}\n\nexport {\n  ABTestingFramework,\n  SimpleMetricCollector,\n  StatisticalAnalyzer,\n};\nexport type { Variant, ExperimentConfig, ExperimentResult, MetricCollector };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI systems in production require far more than just calling an API. Deployment strategies must align with latency, throughput, and cost requirements — real-time for interactive apps, batch for bulk processing, streaming for progressive output, and edge for offline-capable mobile experiences. Caching is the single most effective cost and latency optimization, with semantic caching offering especially high returns by matching queries based on meaning rather than exact text. Rate limiting must operate across multiple dimensions (user, IP, token, global) using token bucket or sliding window algorithms, with priority queuing as an alternative to hard rejection. Cost management requires a layered approach: select the cheapest adequate model, optimize prompts for fewer tokens, batch requests, cache aggressively, and consider distillation or quantization for high-volume use cases. A/B testing brings scientific rigor to AI system changes, enabling teams to validate prompt variants, model upgrades, and retrieval strategy modifications before full rollout. Comprehensive monitoring must track latency percentiles, error rates, token usage, costs, hallucination rates, and safety metrics, with alert rules tuned to detect degradation early. Incident response for AI systems demands specialized runbooks for quality degradation, cost spikes, safety breaches, and model failures — each with clear detection, triage, mitigation, and post-mortem workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement semantic caching first"
        }), " — it reduces latency by 50-80% and costs by 30-60% with minimal effort. Use cosine similarity with a 0.92 threshold for balanced recall and precision"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deploy multi-layer rate limiting"
        }), " — enforce per-user, per-IP, and global limits with token bucket algorithms. Add priority queuing for critical users instead of hard rejection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the cheapest adequate model"
        }), " — route simple queries to gpt-4o-mini and complex ones to gpt-4o. This single practice can reduce costs by 50-90%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A/B test every change"
        }), " — prompt variants, model versions, and retrieval strategies should all be validated statistically before full rollout. Use 95% confidence intervals and ensure adequate sample sizes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor what matters"
        }), " — track p95 latency, error rate, token usage, daily cost, and hallucination rate. Set up alert rules with sustained condition windows to reduce noise"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding of production AI systems concepts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-1",
      children: "Question 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Which caching strategy stores responses based on meaning similarity rather than exact string matching?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) KV caching\nB) Response caching\nC) Semantic caching\nD) Write-through caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2",
      children: "Question 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A user sends 100 requests in 10 seconds. The rate limiter allows 50 requests per 60 seconds using a sliding window. What happens to request #101?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) It is allowed\nB) It is queued\nC) It is rejected with a rate limit error\nD) It falls back to a different model"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3",
      children: "Question 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Which cost optimization strategy typically provides the highest savings potential?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Prompt optimization\nB) Model selection (economy vs premium)\nC) Model distillation\nD) Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4",
      children: "Question 4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In an A/B test, you observe a z-statistic of 2.1 comparing control and treatment variants. What should you conclude?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) There is no significant difference\nB) The result is statistically significant at 95% confidence\nC) You need more samples\nD) The control variant is worse"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5",
      children: "Question 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An AI system's hallucination rate suddenly increases from 2% to 15%. According to incident response best practices, what is the FIRST action?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Conduct a root cause analysis\nB) Write a post-mortem\nC) Mitigate by rolling back the recent change or switching to a fallback model\nD) Notify all users of degraded quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answer-key",
      children: "Answer Key"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic caching uses embeddings and cosine similarity to match queries by meaning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The 101st request exceeds the 50-request limit in the sliding window and is rejected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model selection (e.g., using gpt-4o-mini instead of gpt-4o) can reduce costs by 50-90%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z > 1.96 indicates statistical significance at the 95% confidence level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigation (rollback or fallback) comes before root cause analysis or post-mortem"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-implement-a-semantic-cache-easy",
      children: "Exercise 1: Implement a Semantic Cache (Easy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a semantic cache that stores the last 1000 unique query-response pairs. Use a simple cosine similarity function (mock the embedding API with a random vector generator). Test with 5 queries where 3 are semantically similar and 2 are distinct."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable"
      }), ": TypeScript class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SimpleSemanticCache"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "store"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getStats"
      }), " methods."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class SimpleSemanticCache {\n  private entries: Array<{ query: string; embedding: number[]; response: string }> = [];\n  private hits = 0;\n  private misses = 0;\n\n  constructor(private threshold: number, private maxSize: number) {}\n\n  find(query: string): string | null {\n    const embedding = this.mockEmbedding(query);\n    for (const entry of this.entries) {\n      if (this.cosineSimilarity(embedding, entry.embedding) >= this.threshold) {\n        this.hits++;\n        return entry.response;\n      }\n    }\n    this.misses++;\n    return null;\n  }\n\n  store(query: string, response: string): void {\n    const embedding = this.mockEmbedding(query);\n    this.entries.push({ query, embedding, response });\n    if (this.entries.length > this.maxSize) {\n      this.entries.shift();\n    }\n  }\n\n  private mockEmbedding(text: string): number[] {\n    let hash = 0;\n    for (let i = 0; i < text.length; i++) {\n      hash = ((hash << 5) - hash) + text.charCodeAt(i);\n      hash = hash & hash;\n    }\n    return Array.from({ length: 8 }, (_, i) => Math.sin(hash * (i + 1)));\n  }\n\n  private cosineSimilarity(a: number[], b: number[]): number {\n    const dot = a.reduce((s, v, i) => s + v * b[i], 0);\n    const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));\n    const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));\n    return dot / (magA * magB);\n  }\n\n  getStats() {\n    return { size: this.entries.length, hits: this.hits, misses: this.misses, hitRate: this.hits / (this.hits + this.misses) };\n  }\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Test:"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "const cache = new SimpleSemanticCache(0.85, 1000);\ncache.store(\"What is AI?\", \"Artificial Intelligence...\");\ncache.store(\"How does caching work?\", \"Caching stores...\");\nconsole.log(cache.find(\"Tell me about AI\")); // Hit (similar)\nconsole.log(cache.find(\"What is the weather?\")); // Miss\nconsole.log(cache.getStats());\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-token-bucket-rate-limiter-easy",
      children: "Exercise 2: Token Bucket Rate Limiter (Easy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a token bucket rate limiter with configurable capacity and refill rate. Add methods for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tryConsume(count)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getAvailableTokens()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getTimeUntilNextToken()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable"
      }), ": TypeScript class with a demonstration of burst behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class TokenBucket {\n  private tokens: number;\n  private lastRefill: number;\n\n  constructor(private capacity: number, private refillPerSecond: number) {\n    this.tokens = capacity;\n    this.lastRefill = Date.now();\n  }\n\n  tryConsume(count: number = 1): boolean {\n    this.refill();\n    if (this.tokens >= count) {\n      this.tokens -= count;\n      return true;\n    }\n    return false;\n  }\n\n  getAvailableTokens(): number {\n    this.refill();\n    return this.tokens;\n  }\n\n  getTimeUntilNextToken(): number {\n    if (this.tokens > 0) return 0;\n    const elapsed = (Date.now() - this.lastRefill) / 1000;\n    const deficit = this.capacity - this.tokens;\n    return Math.ceil((deficit / this.refillPerSecond - elapsed) * 1000);\n  }\n\n  private refill(): void {\n    const now = Date.now();\n    const elapsed = (now - this.lastRefill) / 1000;\n    const newTokens = Math.floor(elapsed * this.refillPerSecond);\n    if (newTokens > 0) {\n      this.tokens = Math.min(this.capacity, this.tokens + newTokens);\n      this.lastRefill = now;\n    }\n  }\n}\n\nconst bucket = new TokenBucket(10, 2);\nconsole.log(bucket.tryConsume(10)); // true (burst)\nconsole.log(bucket.tryConsume(1));  // false (empty)\nsetTimeout(() => console.log(bucket.tryConsume(1)), 1000); // true (refilled 2 tokens)\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-multi-layer-rate-limiter-with-priority-queuing-medium",
      children: "Exercise 3: Multi-Layer Rate Limiter with Priority Queuing (Medium)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a rate limiter that checks user-level, IP-level, and global limits, and queues excess requests by priority (premium > standard > free). Premium users get 3x the rate limit of free users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable"
      }), ": TypeScript class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TieredRateLimiter"
      }), " with support for 3 user tiers and priority-based queuing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "type Tier = \"premium\" | \"standard\" | \"free\";\n\ninterface TierConfig {\n  requestsPerMinute: number;\n  queuePriority: number;\n}\n\nconst TIER_CONFIGS: Record<Tier, TierConfig> = {\n  premium: { requestsPerMinute: 300, queuePriority: 3 },\n  standard: { requestsPerMinute: 100, queuePriority: 2 },\n  free: { requestsPerMinute: 30, queuePriority: 1 },\n};\n\nclass TieredRateLimiter {\n  private windows = new Map<string, number[]>();\n  private queue: Array<{ userId: string; priority: number; execute: () => Promise<any> }> = [];\n  private processing = false;\n\n  constructor(private windowMs: number = 60000) {}\n\n  isAllowed(userId: string, tier: Tier): boolean {\n    const config = TIER_CONFIGS[tier];\n    const now = Date.now();\n    const key = `user:${userId}`;\n    let timestamps = this.windows.get(key) || [];\n    timestamps = timestamps.filter(t => now - t < this.windowMs);\n\n    if (timestamps.length >= config.requestsPerMinute) {\n      this.windows.set(key, timestamps);\n      return false;\n    }\n\n    timestamps.push(now);\n    this.windows.set(key, timestamps);\n    return true;\n  }\n\n  enqueue(userId: string, tier: Tier, execute: () => Promise<any>): void {\n    this.queue.push({ userId, priority: TIER_CONFIGS[tier].queuePriority, execute });\n    this.queue.sort((a, b) => b.priority - a.priority);\n    this.processQueue();\n  }\n\n  private async processQueue(): Promise<void> {\n    if (this.processing) return;\n    this.processing = true;\n    while (this.queue.length > 0) {\n      const task = this.queue.shift()!;\n      try { await task.execute(); } catch (e) { console.error(e); }\n    }\n    this.processing = false;\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-ab-experiment-analyzer-medium",
      children: "Exercise 4: A/B Experiment Analyzer (Medium)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build an A/B test analyzer that takes two arrays of scores (control and treatment) and computes: mean, variance, t-statistic, p-value, and whether the result is significant at 95% confidence. Include a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "minimumSampleSize"
      }), " function."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable"
      }), ": TypeScript class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExperimentAnalyzer"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "analyze"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requiredSampleSize"
      }), " methods."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class ExperimentAnalyzer {\n  analyze(control: number[], treatment: number[]): {\n    controlMean: number; treatmentMean: number;\n    tStatistic: number; pValue: number; significant: boolean;\n  } {\n    const cMean = control.reduce((a, b) => a + b, 0) / control.length;\n    const tMean = treatment.reduce((a, b) => a + b, 0) / treatment.length;\n    const cVar = control.reduce((s, v) => s + (v - cMean) ** 2, 0) / control.length;\n    const tVar = treatment.reduce((s, v) => s + (v - tMean) ** 2, 0) / treatment.length;\n    const pooledVar = ((control.length - 1) * cVar + (treatment.length - 1) * tVar) / (control.length + treatment.length - 2);\n    const se = Math.sqrt(pooledVar * (1 / control.length + 1 / treatment.length));\n    const tStat = (tMean - cMean) / se;\n\n    // Normal approximation for p-value\n    const p = 2 * (1 - this.normalCDF(Math.abs(tStat)));\n    return { controlMean: cMean, treatmentMean: tMean, tStatistic: tStat, pValue: p, significant: p < 0.05 };\n  }\n\n  requiredSampleSize(baseline: number, mde: number, alpha = 0.05, power = 0.8): number {\n    const zA = { 0.05: 1.96, 0.01: 2.58 }[alpha] || 1.96;\n    const zB = { 0.8: 0.84, 0.9: 1.28 }[power] || 0.84;\n    return Math.ceil(((zA + zB) ** 2 * 2 * baseline * (1 - baseline)) / (baseline * mde) ** 2);\n  }\n\n  private normalCDF(x: number): number {\n    return 0.5 * (1 + erf(x / Math.sqrt(2)));\n  }\n}\n\nfunction erf(x: number): number {\n  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;\n  const sign = x < 0 ? -1 : 1;\n  x = Math.abs(x);\n  const t = 1 / (1 + p * x);\n  return sign * (1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x));\n}\n\nconst analyzer = new ExperimentAnalyzer();\nconst result = analyzer.analyze([3, 4, 3, 5, 4], [4, 5, 5, 4, 6]);\nconsole.log(result.significant); // Check if significant\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-production-ai-dashboard-mock-hard",
      children: "Exercise 5: Production AI Dashboard Mock (Hard)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a mock production AI dashboard that aggregates logs, computes metrics (p50/p95/p99 latency, error rate, token usage, daily cost), evaluates alert rules, and generates a health report. Simulate 1000 requests with random latencies, errors, and token counts."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable"
      }), ": TypeScript class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProductionDashboard"
      }), " that processes log entries and outputs a formatted health report with metric summaries and active alerts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface LogEntry {\n  timestamp: number;\n  userId: string;\n  model: string;\n  latency: number;\n  tokens: number;\n  cost: number;\n  error: boolean;\n}\n\nclass ProductionDashboard {\n  private logs: LogEntry[] = [];\n  private budget: number;\n  private alertThresholds: Record<string, number>;\n\n  constructor(dailyBudget: number) {\n    this.budget = dailyBudget;\n    this.alertThresholds = { p95Latency: 3000, errorRate: 0.03, dailyCost: dailyBudget * 0.9 };\n  }\n\n  ingest(entry: LogEntry): void {\n    this.logs.push(entry);\n  }\n\n  generateReport(): string {\n    const latencies = this.logs.map(l => l.latency).sort((a, b) => a - b);\n    const errors = this.logs.filter(l => l.error);\n    const totalCost = this.logs.reduce((s, l) => s + l.cost, 0);\n    const totalTokens = this.logs.reduce((s, l) => s + l.tokens, 0);\n    const p50 = latencies[Math.floor(latencies.length * 0.5)];\n    const p95 = latencies[Math.floor(latencies.length * 0.95)];\n    const p99 = latencies[Math.floor(latencies.length * 0.99)];\n    const errorRate = errors.length / this.logs.length;\n\n    const alerts: string[] = [];\n    if (p95 > this.alertThresholds.p95Latency) alerts.push(`HIGH LATENCY: p95=${p95}ms > ${this.alertThresholds.p95Latency}ms`);\n    if (errorRate > this.alertThresholds.errorRate) alerts.push(`HIGH ERROR RATE: ${(errorRate * 100).toFixed(1)}% > ${(this.alertThresholds.errorRate * 100).toFixed(1)}%`);\n    if (totalCost > this.alertThresholds.dailyCost) alerts.push(`COST WARNING: $${totalCost.toFixed(2)} > $${this.alertThresholds.dailyCost.toFixed(2)}`);\n\n    return `\n=== Production Dashboard Report ===\nRequests: ${this.logs.length}\nLatency: p50=${p50}ms | p95=${p95}ms | p99=${p99}ms\nError Rate: ${(errorRate * 100).toFixed(2)}%\nTotal Tokens: ${totalTokens.toLocaleString()}\nTotal Cost: $${totalCost.toFixed(2)}\nBudget: $${this.budget.toFixed(2)}\nAlerts: ${alerts.length > 0 ? alerts.join(\"\\n  - \") : \"None\"}\n${alerts.length > 0 ? \"\\n[ACTION REQUIRED]\" : \"\\n[HEALTHY]\"}\n`;\n  }\n}\n\nconst dashboard = new ProductionDashboard(100);\nfor (let i = 0; i < 1000; i++) {\n  dashboard.ingest({\n    timestamp: Date.now(),\n    userId: `user${i % 100}`,\n    model: \"gpt-4o-mini\",\n    latency: Math.random() * 5000,\n    tokens: Math.floor(Math.random() * 1000),\n    cost: Math.random() * 0.1,\n    error: Math.random() < 0.02,\n  });\n}\nconsole.log(dashboard.generateReport());\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/modern-ai-engineering/11-mlops-for-ai-engineering",
          children: "Chapter 11: MLOps for AI Engineering →"
        })]
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