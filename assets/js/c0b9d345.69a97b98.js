"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[96107],{

/***/ 76110
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_13_observability_md_c0b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-13-observability-md-c0b.json
const site_docs_courses_devops_13_observability_md_c0b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/13-observability","title":"Chapter 13: Observability","description":"Previous DevSecOps","source":"@site/docs/courses/devops/13-observability.md","sourceDirName":"courses/devops","slug":"/devops/13-observability","permalink":"/ai-engineering-journey/devops/13-observability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"id":"13-observability","slug":"/devops/13-observability","title":"Chapter 13: Observability","sidebar_label":"Chapter 13: Observability","sidebar_position":22},"sidebar":"course-devops","previous":{"title":"Chapter 12: Monitoring and Logging","permalink":"/ai-engineering-journey/devops/12-monitoring-logging"},"next":{"title":"Chapter 14: DevSecOps","permalink":"/ai-engineering-journey/devops/14-devsecops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/13-observability.md


const frontMatter = {
	id: '13-observability',
	slug: '/devops/13-observability',
	title: 'Chapter 13: Observability',
	sidebar_label: 'Chapter 13: Observability',
	sidebar_position: 22
};
const contentTitle = 'Chapter 13: Observability';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "13.1 The Three Pillars of Observability",
  "id": "131-the-three-pillars-of-observability",
  "level": 3
}, {
  "value": "13.2 OpenTelemetry",
  "id": "132-opentelemetry",
  "level": 3
}, {
  "value": "13.3 Distributed Tracing",
  "id": "133-distributed-tracing",
  "level": 3
}, {
  "value": "13.4 Service Maps and Dependency Analysis",
  "id": "134-service-maps-and-dependency-analysis",
  "level": 3
}, {
  "value": "13.5 RED Metrics and the USE Method",
  "id": "135-red-metrics-and-the-use-method",
  "level": 3
}, {
  "value": "13.6 SLOs and Error Budgets",
  "id": "136-slos-and-error-budgets",
  "level": 3
}, {
  "value": "13.7 Observability Cost Optimization",
  "id": "137-observability-cost-optimization",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: OpenTelemetry Instrumentation",
  "id": "example-1-opentelemetry-instrumentation",
  "level": 3
}, {
  "value": "Example 2: Trace Context Propagation Simulation",
  "id": "example-2-trace-context-propagation-simulation",
  "level": 3
}, {
  "value": "Example 3: SLO Compliance Dashboard Generator",
  "id": "example-3-slo-compliance-dashboard-generator",
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
  "value": "Trace Analyzer",
  "id": "trace-analyzer",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: OpenTelemetry Instrumentation Setup",
  "id": "typescript-opentelemetry-instrumentation-setup",
  "level": 2
}, {
  "value": "Mermaid: OpenTelemetry Collector Pipeline",
  "id": "mermaid-opentelemetry-collector-pipeline",
  "level": 2
}, {
  "value": "Mermaid: Distributed Tracing Flow",
  "id": "mermaid-distributed-tracing-flow",
  "level": 2
}, {
  "value": "Deeper Explanation: Trace Sampling Strategies",
  "id": "deeper-explanation-trace-sampling-strategies",
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
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "chapter-13-observability",
        children: "Chapter 13: Observability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/12-monitoring-logging",
          children: "Monitoring and Logging"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/14-devsecops",
          children: "DevSecOps"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the three pillars of observability: logs, metrics, and traces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy OpenTelemetry instrumentation for traces, metrics, and logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure distributed tracing with Jaeger, Zipkin, or Grafana Tempo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply RED metrics and the USE method for service monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and use SLOs with error budgets for reliability management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze observability running costs and optimize instrumentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement context propagation for end-to-end request tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Three Pillars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs, Metrics, Traces provide complementary views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three needed for full system understanding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenTelemetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industry standard for instrumentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use OTel Collector for vendor-agnostic processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end request flow across services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jaeger, Zipkin, and Tempo are common backends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RED Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate, Errors, Duration for service monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every service should have RED metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USE Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utilization, Saturation, Errors for resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply to every system resource (CPU, memory, disk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLOs & Error Budgets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantify reliability and gate releases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Burn-rate alerts prevent budget exhaustion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W3C Trace-Context for distributed correlation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic trace parent-child relationships"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Three Pillars] --> B[Logs]\n    A --> C[Metrics]\n    A --> D[Traces]\n    B & C & D --> E[OpenTelemetry]\n    E --> F[OTel API]\n    E --> G[OTel SDK]\n    E --> H[OTel Collector]\n    H --> I[Backends]\n    I --> J[Jaeger/Tempo]\n    I --> K[Prometheus]\n    I --> L[Loki]\n    D --> M[Context Propagation]\n    M --> N[W3C Trace-Context]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-the-three-pillars-of-observability",
      children: "13.1 The Three Pillars of Observability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Observability is the ability to understand a system's internal state by examining its outputs. The three pillars provide complementary views:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logs"
      }), " — Discrete, timestamped records of events. Provide detailed context for specific occurrences. High cardinality but high storage cost. Best for debugging specific errors and tracing request lifecycles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics"
      }), " — Numeric aggregations over time. Provide system health at a glance. Low cardinality, efficient storage. Best for alerting, dashboards, and trend analysis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traces"
      }), " — End-to-end request flow across distributed services. Show causality and timing. Best for understanding latency bottlenecks and service dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pillars are interconnected. A metric alert leads to a dashboard, which reveals a trace with a slow span, which links to error logs containing the root cause. Modern observability platforms correlate these signals automatically."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-opentelemetry",
      children: "13.2 OpenTelemetry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenTelemetry (OTel) is the industry standard for observability instrumentation. It provides APIs, SDKs, and collectors for generating, collecting, and exporting telemetry data."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API"
        }), " — Standard interfaces for creating traces, metrics, and logs. Language-specific (TypeScript, Java, Python, Go, etc.)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SDK"
        }), " — Language-specific implementations with configuration, batching, sampling, and exporting. Pluggable processors and exporters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collector"
        }), " — Vendor-agnostic telemetry processing pipeline. Receives telemetry in OTLP format, processes (filter, transform, sample), and exports to one or more backends."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instrumentation Libraries"
        }), " — Automatic instrumentation for popular frameworks: Express, gRPC, database clients (PostgreSQL, MySQL, MongoDB), message queues (Kafka, RabbitMQ), HTTP clients, and more."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exporter"
        }), " — Sends data to backends (Jaeger, Prometheus, Datadog, New Relic, AWS X-Ray, Azure Monitor)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context Propagation:"
      }), "\nOpenTelemetry propagates trace context across service boundaries via W3C Trace-Context headers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "traceparent: 00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This header is automatically injected into outgoing HTTP requests and extracted from incoming requests by OTel instrumentation libraries, enabling distributed trace reconstruction across service boundaries."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-distributed-tracing",
      children: "13.3 Distributed Tracing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed tracing tracks a single request as it traverses multiple services."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trace"
        }), " — The full path of a request through the system. Identified by a Trace ID. A trace is a tree of spans."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Span"
        }), " — A single unit of work within a trace. Has a start time, duration, status (OK/ERROR), and attributes (key-value metadata). A span represents one operation in one service."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Span Context"
        }), " — Trace ID, Span ID, and propagation metadata (W3C Trace-Context)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parent-Child Relationship"
        }), " — Spans form a tree structure. The root span represents the initial request entry point. Child spans represent downstream operations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instrumentation Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { trace, SpanStatusCode } from '@opentelemetry/api';\n\nconst tracer = trace.getTracer('payment-service');\n\nasync function processPayment(paymentId: string, amount: number) {\n  const span = tracer.startSpan('process-payment', {\n    attributes: {\n      'payment.id': paymentId,\n      'payment.amount': amount,\n      'payment.currency': 'USD',\n    },\n  });\n\n  try {\n    const result = await paymentGateway.authorize(paymentId, amount);\n    span.setAttribute('payment.auth_code', result.authCode);\n    span.addEvent('payment.authorized', { authCode: result.authCode });\n    return result;\n  } catch (error) {\n    span.recordException(error);\n    span.setStatus({ code: SpanStatusCode.ERROR, message: String(error) });\n    throw error;\n  } finally {\n    span.end();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tracing Backends:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Backend"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Query"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost Profile"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jaeger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticsearch, Cassandra, Badger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace ID, service, operation, tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI, gRPC API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zipkin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, Elasticsearch, MySQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace ID, service, annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI, JSON API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grafana Tempo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object store (S3, GCS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time range + service + operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TraceQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap at scale (no content indexing)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sampling Strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Head-based sampling"
        }), " — Decision made at the root span. Simple but cannot prioritize by interestingness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tail-based sampling"
        }), " — Decision made after the trace is complete. Can keep traces with errors or high latency. More complex and resource-intensive."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-service-maps-and-dependency-analysis",
      children: "13.4 Service Maps and Dependency Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Observability platforms generate service maps that visualize inter-service communication:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node size indicates request volume or resource consumption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge thickness indicates traffic volume between services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge color indicates latency or error rate (green = healthy, red = failing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Failed connections are highlighted for immediate attention"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service maps reveal unknown dependencies, single points of failure, unexpected traffic patterns, and orphan services that no longer serve traffic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-red-metrics-and-the-use-method",
      children: "13.5 RED Metrics and the USE Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RED Method"
      }), " (Rate, Errors, Duration) — For service-level monitoring:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate"
        }), " — Requests per second. Indicates traffic patterns and load."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors"
        }), " — Failed requests per second (explicit 5xx, implicit failures like wrong results or slow responses)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duration"
        }), " — Latency distributions (average, p50, p90, p95, p99). Distinguish between successful and failed request latency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RED applies to each service in the architecture. Every service should have RED metrics instrumented and dashboarded."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "USE Method"
      }), " (Utilization, Saturation, Errors) — For resource-level monitoring:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Utilization"
        }), " — Percentage of resource being used (CPU %, memory %, disk space %, network bandwidth %)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Saturation"
        }), " — Degree of resource contention (CPU run queue length, disk I/O queue depth, memory swap usage)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors"
        }), " — Error counts or rates (disk I/O errors, network interface errors/drops, memory allocation failures)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USE applies to every resource in the system: CPU, memory, disk, network, and system limits (file descriptors, connection pools, thread pools)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-slos-and-error-budgets",
      children: "13.6 SLOs and Error Budgets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Objective (SLO)"
      }), " — Target level of reliability for a service. Example: 99.9% availability over a 30-day rolling window."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Indicator (SLI)"
      }), " — The actual measurement of reliability. Example: fraction of HTTP requests that complete successfully in under 500ms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Agreement (SLA)"
      }), " — Contractual commitment to a customer. SLAs must be less stringent than internal SLOs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Budget"
      }), " — The allowed amount of unreliability. For a 99.9% SLO over 30 days:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error Budget = (1 - SLO) × Time Window\n             = 0.001 × (30 × 24 × 60 × 60)\n             = 2,592 seconds ˜ 43 minutes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Budget Mechanics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budget is consumed by events that violate the SLO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budget replenishes as the measurement window rolls past violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If budget is exhausted, releases are halted until it recovers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Burn-rate alerts notify when budget consumption exceeds expected rates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Burn-rate alert example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Multi-window burn-rate alert: 2% of 30-day budget consumed in 1 hour\ngroups:\n  - name: slo-alerts\n    rules:\n      - alert: ErrorBudgetBurn\n        expr: |\n          (1 - (sum(rate(http_requests_total{status=~\"5..\"}[1h]))\n                / sum(rate(http_requests_total[1h]))))\n          < 0.99\n        for: 1h\n        labels:\n          severity: critical\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "137-observability-cost-optimization",
      children: "13.7 Observability Cost Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Observability infrastructure can become a significant cost driver. Optimization strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sampling"
        }), " — Head-based or tail-based trace sampling. Start with 10% sampling for high-volume services."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retention Tiers"
        }), " — Raw data at short retention (7 days), aggregated data longer (90 days), summaries for archive (1 year+)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggregation"
        }), " — Precompute and store aggregations rather than raw data. Recording rules reduce Prometheus query costs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cardinality Control"
        }), " — Limit label cardinality to prevent metric explosion. A label with 10000 unique values creates 10000 time series. Monitor cardinality with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prometheus_tsdb_head_series"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log Levels"
        }), " — Store INFO+ in production; DEBUG rotated quickly (24-48 hours)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log Content"
        }), " — Avoid logging large payloads or sensitive data. Use sampling for high-volume debug logs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Efficient Exporters"
        }), " — Batch telemetry before export. Configure appropriate batch size and export interval."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-opentelemetry-instrumentation",
      children: "Example 1: OpenTelemetry Instrumentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { NodeSDK } from '@opentelemetry/sdk-node';\nimport { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';\nimport { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';\nimport { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';\nimport { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';\nimport { HttpInstrumentation } from '@opentelemetry/instrumentation-http';\nimport { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';\nimport { PinoInstrumentation } from '@opentelemetry/instrumentation-pino';\nimport { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';\n\ndiag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);\n\nconst sdk = new NodeSDK({\n  serviceName: 'payment-service',\n  traceExporter: new OTLPTraceExporter({ url: 'http://otel-collector:4318/v1/traces' }),\n  metricReader: new PeriodicExportingMetricReader({\n    exporter: new OTLPMetricExporter({ url: 'http://otel-collector:4318/v1/metrics' }),\n    exportIntervalMillis: 10000,\n  }),\n  instrumentations: [\n    new HttpInstrumentation(),\n    new ExpressInstrumentation(),\n    new PinoInstrumentation(),\n  ],\n});\n\nsdk.start();\n\nprocess.on('SIGTERM', () => {\n  sdk.shutdown().then(() => process.exit(0));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-trace-context-propagation-simulation",
      children: "Example 2: Trace Context Propagation Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Span {\n  traceId: string;\n  spanId: string;\n  parentSpanId?: string;\n  operationName: string;\n  startTime: number;\n  endTime?: number;\n  attributes: Record<string, string>;\n  status: 'OK' | 'ERROR';\n}\n\ninterface Trace {\n  traceId: string;\n  spans: Span[];\n  rootService: string;\n}\n\nclass TraceSimulator {\n  private traces: Trace[] = [];\n\n  generateTrace(services: string[], baseDuration: number): Trace {\n    const traceId = crypto.randomUUID().replace(/-/g, '').substring(0, 16);\n    const spans: Span[] = [];\n    const startTime = Date.now();\n    let currentParentId = '';\n\n    for (let i = 0; i < services.length; i++) {\n      const spanId = crypto.randomUUID().replace(/-/g, '').substring(0, 16);\n      const duration = baseDuration * (1 + Math.random());\n\n      const span: Span = {\n        traceId,\n        spanId,\n        parentSpanId: i === 0 ? undefined : currentParentId,\n        operationName: `${services[i]}.process`,\n        startTime: startTime + spans.reduce((sum, s) => sum + (s.endTime || 0) - s.startTime, 0),\n        endTime: startTime + i * baseDuration + duration,\n        attributes: {\n          'service.name': services[i],\n          'http.method': 'POST',\n        },\n        status: Math.random() > 0.1 ? 'OK' : 'ERROR',\n      };\n\n      currentParentId = spanId;\n      spans.push(span);\n    }\n\n    const trace: Trace = { traceId, spans, rootService: services[0] };\n    this.traces.push(trace);\n    return trace;\n  }\n\n  findSlowTraces(threshold: number): Trace[] {\n    return this.traces.filter(t => {\n      const totalDuration = Math.max(...t.spans.map(s => s.endTime || 0)) - Math.min(...t.spans.map(s => s.startTime));\n      return totalDuration > threshold;\n    });\n  }\n\n  findErrorTraces(): Trace[] {\n    return this.traces.filter(t => t.spans.some(s => s.status === 'ERROR'));\n  }\n\n  buildServiceGraph(): Record<string, string[]> {\n    const graph: Record<string, string[]> = {};\n\n    for (const trace of this.traces) {\n      for (let i = 0; i < trace.spans.length; i++) {\n        const service = trace.spans[i].attributes['service.name'];\n        if (!graph[service]) graph[service] = [];\n        if (i + 1 < trace.spans.length) {\n          const next = trace.spans[i + 1].attributes['service.name'];\n          if (!graph[service].includes(next)) graph[service].push(next);\n        }\n      }\n    }\n\n    return graph;\n  }\n\n  generateReport(): string {\n    let report = '# Trace Analysis Report\\n\\n';\n    report += `Total traces: ${this.traces.length}\\n`;\n    report += `Error traces: ${this.findErrorTraces().length}\\n`;\n    report += `Slow traces (>500ms): ${this.findSlowTraces(500).length}\\n\\n`;\n\n    report += '## Dependency Graph\\n';\n    const graph = this.buildServiceGraph();\n    for (const [service, deps] of Object.entries(graph)) {\n      report += `- ${service} ? ${deps.join(', ') || '(leaf)'}\\n`;\n    }\n\n    return report;\n  }\n}\n\nconst simulator = new TraceSimulator();\nsimulator.generateTrace(['frontend', 'api-gateway', 'user-service', 'database'], 100);\nsimulator.generateTrace(['frontend', 'api-gateway', 'payment-service', 'bank-api'], 200);\nsimulator.generateTrace(['frontend', 'api-gateway', 'notification-service'], 50);\n\nconsole.log(simulator.generateReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-slo-compliance-dashboard-generator",
      children: "Example 3: SLO Compliance Dashboard Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SLODefinition {\n  name: string;\n  target: number; // 99.9\n  windowDays: number;\n  sliQuery: string;\n  goodEventsQuery: string;\n  validEventsQuery: string;\n}\n\ninterface SLOStatus {\n  name: string;\n  target: number;\n  compliance: number;\n  budgetRemaining: number;\n  budgetTotal: number;\n  status: 'healthy' | 'warning' | 'critical' | 'exhausted';\n}\n\nclass SLOCalculator {\n  calculate(slo: SLODefinition, goodEvents: number, validEvents: number): SLOStatus {\n    const compliance = validEvents > 0 ? (goodEvents / validEvents) * 100 : 100;\n    const totalSeconds = slo.windowDays * 24 * 60 * 60;\n    const budgetTotal = totalSeconds * (1 - slo.target / 100);\n    const consumed = totalSeconds * (1 - compliance / 100);\n    const budgetRemaining = budgetTotal - consumed;\n    const remainingPercent = (budgetRemaining / budgetTotal) * 100;\n\n    let status: SLOStatus['status'] = 'healthy';\n    if (compliance < slo.target) status = 'exhausted';\n    else if (remainingPercent < 10) status = 'critical';\n    else if (remainingPercent < 30) status = 'warning';\n\n    return {\n      name: slo.name,\n      target: slo.target,\n      compliance: Math.round(compliance * 1000) / 1000,\n      budgetRemaining: Math.round(budgetRemaining),\n      budgetTotal: Math.round(budgetTotal),\n      status,\n    };\n  }\n\n  generateDashboard(slos: SLODefinition[], goodEvents: number[], validEvents: number[]): string {\n    let report = '# SLO Compliance Dashboard\\n\\n';\n    report += '| SLO | Target | Current | Budget Remaining | Status |\\n';\n    report += '|-----|--------|---------|-----------------|--------|\\n';\n\n    for (let i = 0; i < slos.length; i++) {\n      const status = this.calculate(slos[i], goodEvents[i], validEvents[i]);\n      const icon = status.status === 'healthy' ? '?' : status.status === 'exhausted' ? '??' : '??';\n      report += `| ${status.name} | ${status.target}% | ${status.compliance}% | ${status.budgetRemaining}s / ${status.budgetTotal}s | ${icon} ${status.status} |\\n`;\n    }\n\n    return report;\n  }\n}\n\nconst calculator = new SLOCalculator();\nconst slos: SLODefinition[] = [\n  { name: 'api-availability', target: 99.9, windowDays: 30, sliQuery: '', goodEventsQuery: '', validEventsQuery: '' },\n  { name: 'api-latency', target: 99.5, windowDays: 30, sliQuery: '', goodEventsQuery: '', validEventsQuery: '' },\n  { name: 'payment-success', target: 99.99, windowDays: 30, sliQuery: '', goodEventsQuery: '', validEventsQuery: '' },\n];\n\nconsole.log(calculator.generateDashboard(slos, [999000, 994000, 999800], [1000000, 1000000, 1000000]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete timestamped events, high cardinality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric aggregations, efficient storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end request flow with causality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenTelemetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard API/SDK/Collector for telemetry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jaeger/Tempo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed tracing backends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target reliability level for a service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed unreliability = (1 - SLO) × window"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Three Pillars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs, Metrics, Traces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RED Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate, Errors, Duration for services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USE Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utilization, Saturation, Errors for resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenTelemetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API, SDK, Collector, Exporters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target=99.9, window=30d, burn-rate alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W3C Trace-Context, traceparent header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head-based (simple), Tail-based (accurate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-stack request tracing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-service observability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance-focused monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed tracing for service mesh"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trace-analyzer",
      children: "Trace Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed tracing is essential for understanding request flows across microservices. The following analyzer processes trace spans, detects anomalies, and visualizes service interactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Span {\n  traceId: string;\n  spanId: string;\n  parentSpanId: string | null;\n  serviceName: string;\n  operation: string;\n  startTime: number;\n  endTime: number;\n  tags: Record<string, string>;\n  status: 'ok' | 'error';\n}\n\ninterface Trace {\n  traceId: string;\n  spans: Span[];\n  rootService: string;\n  totalDuration: number;\n  errorSpans: number;\n}\n\nclass TraceAnalyzer {\n  buildTrace(spans: Span[]): Trace | null {\n    if (spans.length === 0) return null;\n    const root = spans.find(s => !s.parentSpanId);\n    if (!root) return null;\n    const traceId = root.traceId;\n    const totalDuration = Math.max(...spans.map(s => s.endTime)) - Math.min(...spans.map(s => s.startTime));\n    const errorSpans = spans.filter(s => s.status === 'error').length;\n    return { traceId, spans, rootService: root.serviceName, totalDuration, errorSpans };\n  }\n\n  findSlowPaths(trace: Trace, thresholdMs: number): Span[] {\n    return trace.spans.filter(s => (s.endTime - s.startTime) > thresholdMs);\n  }\n\n  detectAnomalies(traces: Trace[]): string[] {\n    const anomalies: string[] = [];\n    const durations = traces.map(t => t.totalDuration);\n    const avg = durations.reduce((s, d) => s + d, 0) / durations.length;\n    const stdDev = Math.sqrt(durations.reduce((s, d) => s + (d - avg) ** 2, 0) / durations.length);\n\n    for (const trace of traces) {\n      if (trace.totalDuration > avg + 3 * stdDev) {\n        anomalies.push(`Trace ${trace.traceId.substring(0, 8)}: ${(trace.totalDuration).toFixed(0)}ms exceeds 3s threshold (${(avg + 3 * stdDev).toFixed(0)}ms)`);\n      }\n      if (trace.errorSpans > 0) anomalies.push(`Trace ${trace.traceId.substring(0, 8)}: ${trace.errorSpans} error spans`);\n    }\n    return anomalies;\n  }\n\n  buildServiceGraph(traces: Trace[]): Map<string, string[]> {\n    const graph = new Map<string, Set<string>>();\n    for (const trace of traces) {\n      for (const span of trace.spans) {\n        if (!graph.has(span.serviceName)) graph.set(span.serviceName, new Set());\n        const parent = trace.spans.find(s => s.spanId === span.parentSpanId);\n        if (parent && parent.serviceName !== span.serviceName) graph.get(parent.serviceName)!.add(span.serviceName);\n      }\n    }\n    return new Map([...graph.entries()].map(([k, v]) => [k, [...v]]));\n  }\n}\n\nconst analyzer = new TraceAnalyzer();\nconst spans: Span[] = [\n  { traceId: 'abc123', spanId: 's1', parentSpanId: null, serviceName: 'api-gateway', operation: 'GET /users', startTime: 1000, endTime: 2500, tags: {}, status: 'ok' },\n  { traceId: 'abc123', spanId: 's2', parentSpanId: 's1', serviceName: 'user-service', operation: 'getUser', startTime: 1200, endTime: 2200, tags: {}, status: 'ok' },\n  { traceId: 'abc123', spanId: 's3', parentSpanId: 's2', serviceName: 'database', operation: 'SELECT', startTime: 1300, endTime: 2100, tags: {}, status: 'error' },\n];\nconst trace = analyzer.buildTrace(spans);\nif (trace) {\n  console.log(`Root: ${trace.rootService}, Duration: ${trace.totalDuration}ms, Errors: ${trace.errorSpans}`);\n  console.log('Slow paths:', analyzer.findSlowPaths(trace, 300).map(s => s.operation));\n  console.log('Service graph:', JSON.stringify([...analyzer.buildServiceGraph([trace])]));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Trace analysis enables root cause identification by correlating spans across services, detecting performance anomalies, and mapping service dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What are the three pillars of observability?"
      }), "**A)** Build, Test, Deploy", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Logs, Metrics, Traces", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** CPU, Memory, Disk", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Dev, Staging, Prod", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Logs, Metrics, Traces</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What does RED stand for?"
        }), "**A)** Resource, Error, Debug", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Rate, Errors, Duration", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Reliable, Efficient, Durable", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Request, Execute, Deliver", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Rate, Errors, Duration</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What happens when error budget is exhausted?"
          }), "**A)** System shuts down", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Releases are halted until budget recovers", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** SLA penalties apply automatically", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Monitoring is disabled", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Releases are halted until budget recovers</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What protocol does OpenTelemetry use for context propagation?"
            }), "**A)** HTTP headers", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** W3C Trace-Context", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** gRPC metadata", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Custom headers", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** W3C Trace-Context</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What is the difference between head-based and tail-based sampling?"
              }), "**A)** Head-based samples at root span; tail-based after trace completes", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Head-based is faster but less selective", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Tail-based keeps interesting traces (errors, high latency)", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** All of the above", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: D)** All of the above</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "typescript-opentelemetry-instrumentation-setup",
                children: "TypeScript: OpenTelemetry Instrumentation Setup"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Below is a TypeScript example that configures OpenTelemetry for a microservice with traces, metrics, and logs:"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "// instrumentation.ts\n// Configure OpenTelemetry for a Node.js/TypeScript microservice\n\nimport { NodeSDK } from '@opentelemetry/sdk-node';\nimport { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';\nimport { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';\nimport { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';\nimport { HttpInstrumentation } from '@opentelemetry/instrumentation-http';\nimport { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';\n\ninterface ObservabilityConfig {\n  serviceName: string;\n  serviceVersion: string;\n  environment: string;\n  otlpEndpoint: string;\n  samplingRatio: number;\n  enableMetrics: boolean;\n  enableTracing: boolean;\n  enableLogging: boolean;\n}\n\nclass ObservabilitySetup {\n  private sdk: NodeSDK | null = null;\n\n  initialize(config: ObservabilityConfig): void {\n    const exporters = [];\n\n    if (config.enableTracing) {\n      exporters.push(new OTLPTraceExporter({\n        url: `${config.otlpEndpoint}/v1/traces`,\n      }));\n    }\n\n    if (config.enableMetrics) {\n      exporters.push(new OTLPMetricExporter({\n        url: `${config.otlpEndpoint}/v1/metrics`,\n      }));\n    }\n\n    if (config.enableLogging) {\n      exporters.push(new OTLPLogExporter({\n        url: `${config.otlpEndpoint}/v1/logs`,\n      }));\n    }\n\n    this.sdk = new NodeSDK({\n      serviceName: config.serviceName,\n      instrumentations: [\n        new HttpInstrumentation(),\n        new ExpressInstrumentation(),\n      ],\n      traceExporter: exporters[0],\n      metricExporter: exporters[1],\n      logExporter: exporters[2],\n      sampler: {\n        shouldSample: () => ({ decision: Math.random() < config.samplingRatio ? 1 : 0 }),\n        toString: () => `ProbabilitySampler_${config.samplingRatio}`,\n      },\n    });\n\n    this.sdk.start();\n    console.log(`OpenTelemetry initialized for ${config.serviceName} (env: ${config.environment})`);\n  }\n\n  async shutdown(): Promise<void> {\n    await this.sdk?.shutdown();\n  }\n}\n\n// Example usage\nconst telemetry = new ObservabilitySetup();\ntelemetry.initialize({\n  serviceName: 'payment-api',\n  serviceVersion: '2.1.0',\n  environment: 'production',\n  otlpEndpoint: 'http://otel-collector:4318',\n  samplingRatio: 0.1, // 10% trace sampling\n  enableMetrics: true,\n  enableTracing: true,\n  enableLogging: true,\n});\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mermaid-opentelemetry-collector-pipeline",
                children: "Mermaid: OpenTelemetry Collector Pipeline"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "flowchart LR\n    subgraph \"Application\"\n        APP1[Service A] --> |OTLP| COL[OpenTelemetry Collector]\n        APP2[Service B] --> |OTLP| COL\n        APP3[Service C] --> |OTLP| COL\n    end\n    subgraph \"Collector Pipeline\"\n        COL --> RCV[Receivers: OTLP]\n        RCV --> PROC[Processors]\n        PROC --> BATCH[Batch Processor]\n        PROC --> MEM[Memory Limiter]\n        PROC --> ATTR[Attributes Processor]\n        BATCH --> EXP[Exporters]\n    end\n    subgraph \"Backends\"\n        EXP --> TRACE[Tempo / Jaeger]\n        EXP --> METRIC[Prometheus / Mimir]\n        EXP --> LOG[Loki / Elasticsearch]\n    end\n    subgraph \"Visualization\"\n        TRACE --> GRAFANA[Grafana]\n        METRIC --> GRAFANA\n        LOG --> GRAFANA\n    end\n    style COL fill:#FF6B35,color:#fff\n    style GRAFANA fill:#F46800,color:#fff\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mermaid-distributed-tracing-flow",
                children: "Mermaid: Distributed Tracing Flow"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "sequenceDiagram\n    participant User\n    participant Gateway as API Gateway\n    participant Auth as Auth Service\n    participant Orders as Orders Service\n    participant Payment as Payment Service\n    participant DB as Database\n\n    User->>Gateway: POST /orders\n    Note over Gateway: TraceID: abc123\n    Gateway->>Auth: Validate token (span 1)\n    Note over Auth: SpanID: span1\n    Auth-->>Gateway: Token valid\n    Gateway->>Orders: Create order (span 2)\n    Note over Orders: SpanID: span2<br/>Parent: span1\n    Orders->>DB: Insert order (span 3)\n    Note over DB: SpanID: span3<br/>Parent: span2\n    DB-->>Orders: Order created\n    Orders->>Payment: Charge payment (span 4)\n    Note over Payment: SpanID: span4<br/>Parent: span2\n    Payment-->>Orders: Payment confirmed\n    Orders-->>Gateway: Order complete\n    Gateway-->>User: 201 Created\n    Note over User,Gateway: Trace reflects full 900ms journey\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "deeper-explanation-trace-sampling-strategies",
                children: "Deeper Explanation: Trace Sampling Strategies"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "When to use each sampling strategy:"
                })
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "Strategy"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "Approach"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "Best For"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "Cost"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Head-based"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Decide at root span"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "General observability, dashboards"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Low"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Tail-based"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Decide after trace completes"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Error analysis, debugging"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Medium"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Probabilistic"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Random % of traces"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "High-volume services"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Lowest"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Rate-limited"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Max spans/second"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Cost control with burst protection"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Low"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Health-based"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Always sample errors + slow"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "SRE, reliability monitoring"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Medium"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Adaptive sampling configuration:"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "interface SamplingConfig {\n  defaultRatio: number;\n  errorSampleRatio: number; // always sample errors\n  slowTraceThresholdMs: number;\n  slowTraceRatio: number;\n  maxSpansPerSecond: number;\n}\n\nconst samplerConfig: SamplingConfig = {\n  defaultRatio: 0.05,     // 5% of all traces\n  errorSampleRatio: 1.0,  // 100% of error traces\n  slowTraceThresholdMs: 1000,\n  slowTraceRatio: 0.5,    // 50% of slow traces\n  maxSpansPerSecond: 100,\n};\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// observability\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'observability', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Observability enables understanding complex distributed systems. The three pillars (logs, metrics, traces) provide complementary perspectives. OpenTelemetry standardizes instrumentation across languages and backends with API, SDK, and Collector components. Distributed tracing reveals request flows across service boundaries with parent-child span relationships and W3C context propagation. RED metrics (Rate, Errors, Duration) and the USE method (Utilization, Saturation, Errors) provide structured monitoring approaches for services and resources respectively. SLOs and error budgets quantify reliability, gate release decisions, and inform operational priorities. Cost optimization through sampling, aggregation, retention management, and cardinality control prevents observability costs from growing unbounded."
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does a trace differ from a log? What information does each provide that the other cannot?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the role of the OpenTelemetry Collector in the observability pipeline?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Explain the RED method. For what type of component is it designed?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does an error budget gate release velocity? What happens when the budget is exhausted?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What factors contribute most to observability infrastructure costs? How can each be optimized?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Instrument a simple microservice application (two services communicating via HTTP) with OpenTelemetry. Generate a trace that spans both services. Export to Jaeger or Tempo. Visualize the trace showing parent-child span relationships."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement RED metrics for a REST API service. Instrument request counters, error counters, and latency histograms. Create a Grafana dashboard showing rate, error rate, and latency distributions (p50, p95, p99)."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Define SLOs for an API service: latency SLO (95% of requests under 300ms) and availability SLO (99.9%). Calculate the error budgets. Implement an SLO burn-rate alert that fires when error budget is consumed too quickly."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure the OpenTelemetry Collector pipeline from the TypeScript example. Set up batch processing, memory limiting, and attribute enrichment. Export traces to Tempo, metrics to Prometheus, and logs to Loki."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement custom span attributes and events in a sample application. Add business context (user ID, order ID) as span attributes and record meaningful events (cache hit/miss, retry attempt) as span events."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Calculate the cost of running observability for a 20-service microservice architecture generating 500 spans/sec per service. Compare head-based sampling at 10% vs tail-based sampling that keeps all error and slow traces. Assume storage costs of $0.02/GB for traces and $0.01/GB for logs."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Design a comprehensive observability strategy for a 50-microservice platform processing 10,000 requests per second. The system uses Kubernetes, Kafka for messaging, PostgreSQL, Redis, and communicates via HTTP and gRPC. Define: OpenTelemetry instrumentation approach (manual vs auto, trace sampling strategy), backend selection (Tempo vs Jaeger, Prometheus vs Mimir, Loki vs Elasticsearch), retention policies per data type, SLO framework (which services, what targets, burn-rate alerting), cost budget allocation (5% of total infrastructure cost), and dashboard hierarchy. Justify trade-offs between completeness and cost."
              }), "\n"]
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