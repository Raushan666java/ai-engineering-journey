"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92541],{

/***/ 22690
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_17_observability_resiliency_md_281_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-17-observability-resiliency-md-281.json
const site_docs_courses_system_design_17_observability_resiliency_md_281_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/17-observability-resiliency","title":"Chapter 17: Observability and Resiliency Patterns","description":"Previous 18 Case Studies Classic","source":"@site/docs/courses/system-design/17-observability-resiliency.md","sourceDirName":"courses/system-design","slug":"/system-design/17-observability-resiliency","permalink":"/ai-engineering-journey/system-design/17-observability-resiliency","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"17-observability-resiliency","slug":"/system-design/17-observability-resiliency","title":"Chapter 17: Observability and Resiliency Patterns","sidebar_label":"Chapter 17: Observability and Resiliency Patterns","sidebar_position":17},"sidebar":"course-system-design","previous":{"title":"Chapter 16: API Gateways, CQRS, and Event Sourcing","permalink":"/ai-engineering-journey/system-design/16-api-gateways-cqrs"},"next":{"title":"Chapter 18: Case Study — URL Shortener, Rate Limiter, Pastebin","permalink":"/ai-engineering-journey/system-design/18-case-studies-classic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/17-observability-resiliency.md


const frontMatter = {
	id: '17-observability-resiliency',
	slug: '/system-design/17-observability-resiliency',
	title: 'Chapter 17: Observability and Resiliency Patterns',
	sidebar_label: 'Chapter 17: Observability and Resiliency Patterns',
	sidebar_position: 17
};
const contentTitle = 'Chapter 17: Observability and Resiliency Patterns';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-1",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-1",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1. The Three Pillars of Observability",
  "id": "1-the-three-pillars-of-observability",
  "level": 3
}, {
  "value": "2. Prometheus",
  "id": "2-prometheus",
  "level": 3
}, {
  "value": "3. Grafana",
  "id": "3-grafana",
  "level": 3
}, {
  "value": "4. Distributed Tracing",
  "id": "4-distributed-tracing",
  "level": 3
}, {
  "value": "5. Jaeger / Zipkin",
  "id": "5-jaeger--zipkin",
  "level": 3
}, {
  "value": "6. Structured Logging",
  "id": "6-structured-logging",
  "level": 3
}, {
  "value": "7. Circuit Breaker Pattern",
  "id": "7-circuit-breaker-pattern",
  "level": 3
}, {
  "value": "8. Bulkhead Pattern",
  "id": "8-bulkhead-pattern",
  "level": 3
}, {
  "value": "9. Retry with Exponential Backoff and Jitter",
  "id": "9-retry-with-exponential-backoff-and-jitter",
  "level": 3
}, {
  "value": "10. Rate Limiting",
  "id": "10-rate-limiting",
  "level": 3
}, {
  "value": "11. Graceful Degradation",
  "id": "11-graceful-degradation",
  "level": 3
}, {
  "value": "12. Load Shedding",
  "id": "12-load-shedding",
  "level": 3
}, {
  "value": "13. Health Check API",
  "id": "13-health-check-api",
  "level": 3
}, {
  "value": "14. Chaos Engineering",
  "id": "14-chaos-engineering",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Prometheus Metrics Instrumentation",
  "id": "example-1-prometheus-metrics-instrumentation",
  "level": 3
}, {
  "value": "Example 2: Distributed Trace with OpenTelemetry",
  "id": "example-2-distributed-trace-with-opentelemetry",
  "level": 3
}, {
  "value": "Example 3: Circuit Breaker with Fallback in Practice",
  "id": "example-3-circuit-breaker-with-fallback-in-practice",
  "level": 3
}, {
  "value": "Example 4: Structured Logging with Correlation IDs",
  "id": "example-4-structured-logging-with-correlation-ids",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
  "level": 2
}, {
  "value": "TypeScript: Metrics Collector, Circuit Breaker, Bulkhead, and Distributed Tracer",
  "id": "typescript-metrics-collector-circuit-breaker-bulkhead-and-distributed-tracer",
  "level": 3
}, {
  "value": "TypeScript: Metrics Collector with Counters, Gauges, Histograms, and Export",
  "id": "typescript-metrics-collector-with-counters-gauges-histograms-and-export",
  "level": 3
}, {
  "value": "TypeScript: Structured Logger with Levels, Correlation ID, and Sampling",
  "id": "typescript-structured-logger-with-levels-correlation-id-and-sampling",
  "level": 3
}, {
  "value": "TypeScript: Health Checker with Liveness, Readiness, and Dependency Probes",
  "id": "typescript-health-checker-with-liveness-readiness-and-dependency-probes",
  "level": 3
}, {
  "value": "Observability Three Pillars with Subgraphs",
  "id": "observability-three-pillars-with-subgraphs",
  "level": 3
}, {
  "value": "Implementation: Observability, Monitoring, and Resiliency",
  "id": "implementation-observability-monitoring-and-resiliency",
  "level": 3
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
        id: "chapter-17-observability-and-resiliency-patterns",
        children: "Chapter 17: Observability and Resiliency Patterns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/16-api-gateways-cqrs",
          children: "16 Api Gateways Cqrs"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/18-case-studies-classic",
          children: "18 Case Studies Classic"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the three pillars of observability: logging, metrics, and distributed tracing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Prometheus metrics with Counter, Gauge, Histogram, and Summary types using the RED and USE methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct distributed traces with OpenTelemetry, including context propagation and sampling strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement circuit breaker, bulkhead, retry, and rate limiting patterns for resilient microservices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formulate graceful degradation and load shedding strategies for overload scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply chaos engineering principles with controlled experiments and blast radius minimization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| Aspect | Details |"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Design Decisions]\n    B --> C[Real-World Examples]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|--------|---------|\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope"
      }), " | Observability, monitoring, logging, tracing, circuit breakers, resiliency |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), " | Core topics covered in Chapter 17: Observability and Resiliency Patterns |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Skills"
      }), " | Monitoring strategy, circuit breaker tuning, retry design |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Angle"
      }), " | Frequently tested in system design interviews |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core concepts covered in Chapter 17: Observability and Resiliency Patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, Examples, Concept Comparison, Quick Reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design Skills"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concept mastery and practical application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interview Angle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common system design interview topic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-1",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n    B[Concept Comparison]\n    A --> B\n    C[Quick Reference]\n    B --> C\n    D[CrossApplication Matrix]\n    C --> D\n    E[Chapter Quiz]\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/17-observability-resiliency.png",
        alt: "Observability and Resiliency Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-three-pillars-of-observability",
      children: "1. The Three Pillars of Observability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nObservability is the ability to understand a system's internal state from its external outputs. Three data types form the foundation:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logging"
      }), ": Immutable, timestamped records of discrete events. Structured logs (JSON) include severity level, module, correlation ID, and key-value pairs. Best for debugging specific requests and post-mortem analysis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics"
      }), ": Numeric measurements aggregated over time. Optimized for storage (low cardinality time-series), alerting, and dashboard visualization. Low overhead per data point."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tracing"
      }), ": End-to-end request paths across distributed services. Each trace is a tree of spans (individual operations). Captures causality and timing. Best for latency analysis and dependency mapping."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RED Method"
      }), " (for services): Rate (requests/second), Errors (failed requests/second), Duration (latency distribution). Every service should expose at minimum these three metrics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "USE Method"
      }), " (for resources): Utilization (time resource busy), Saturation (work queued), Errors (failure count). Applied to CPU, memory, disk, network — every infrastructure resource."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Four Golden Signals"
      }), " (Google SRE):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency"
        }), ": Time to service a request. Distinguish success latency (fast) from error latency (slow)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic"
        }), ": Demand on the system. Requests per second, active connections, throughput."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors"
        }), ": Rate of failed requests. Explicit (500s, timeouts) and implicit (200 OK with wrong content)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Saturation"
        }), ": How \"full\" the system is. Queue depth, CPU utilization, memory pressure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-prometheus",
      children: "2. Prometheus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prometheus is a pull-based metrics monitoring system. It scrapes HTTP endpoints (typically /metrics) at configurable intervals."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric types"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonically increasing value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "total_requests, errors_total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gauge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrarily fluctuating value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cpu_temp, queue_depth, mem_used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Histogram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observing values in configurable buckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request_duration_seconds buckets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantile estimation (precomputed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request_latency_seconds{p50,p99}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pull model"
      }), ": Prometheus server scrapes targets. This simplifies discovery (service registry or file-based target lists), improves reliability (if target is down, Prometheus detects), and avoids push congestion."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Histogram vs Summary"
      }), ": Histogram computes quantiles on the server side from bucket counters. Summary computes quantiles on the client side. Histograms support aggregation across instances; summaries do not (quantiles are not additive)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# HELP http_requests_total Total HTTP requests\n# TYPE http_requests_total counter\nhttp_requests_total{method=\"GET\",path=\"/api/users\",status=\"200\"} 1024\nhttp_requests_total{method=\"POST\",path=\"/api/orders\",status=\"500\"} 7\n\n# HELP request_duration_seconds Request latency\n# TYPE request_duration_seconds histogram\nrequest_duration_seconds_bucket{le=\"0.01\"} 100\nrequest_duration_seconds_bucket{le=\"0.05\"} 450\nrequest_duration_seconds_bucket{le=\"0.1\"} 780\nrequest_duration_seconds_bucket{le=\"0.5\"} 950\nrequest_duration_seconds_bucket{le=\"1.0\"} 990\nrequest_duration_seconds_bucket{le=\"+Inf\"} 1000\nrequest_duration_seconds_sum 125.7\nrequest_duration_seconds_count 1000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alertmanager"
      }), ": Handles alert deduplication, grouping, silencing, and routing. Configure alert rules in Prometheus:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "groups:\n- name: api-alerts\n  rules:\n  - alert: HighErrorRate\n    expr: rate(http_requests_total{status=~\"5..\"}[5m]) / rate(http_requests_total[5m]) > 0.05\n    for: 3m\n    labels: { severity: critical }\n    annotations:\n      summary: \"API error rate above 5% for 3 minutes\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-grafana",
      children: "3. Grafana"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grafana provides visualization, dashboards, and alerting. Connects to Prometheus (and many other data sources). Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dashboards"
        }), ": Templated with variables (environment, service, region). Auto-refresh."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alerting"
        }), ": Unified alerting engine. Evaluate queries, route via Alertmanager or Grafana OnCall. Support for silences, mute timings, and escalation chains."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Annotations"
        }), ": Overlay deployment events, incidents, or config changes on graphs for correlation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Dashboard structure:\n  Row: Latency\n    Panel: P50 latency (time series)\n    Panel: P99 latency (time series)\n  Row: Traffic\n    Panel: Requests per second (rate)\n  Row: Errors\n    Panel: Error rate by status code\n    Panel: Error rate by service\n  Row: Saturation\n    Panel: CPU utilization per pod\n    Panel: Memory usage per pod\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-distributed-tracing",
      children: "4. Distributed Tracing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenTelemetry (OTel)"
      }), ": Vendor-neutral standard for generating, collecting, and exporting telemetry data. SDKs exist for all major languages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Span"
      }), ": The fundamental unit of work. Each span has: name, span_id, trace_id, parent_span_id, start_time, end_time, status, attributes (key-value metadata), events (timestamped annotations)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace"
      }), ": A tree of spans connected by parent-child relationships. The root span represents the outermost operation (e.g., HTTP handler). Child spans represent sub-operations (e.g., database query, downstream HTTP call)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from opentelemetry import trace\nfrom opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter\nfrom opentelemetry.sdk.trace import TracerProvider\n\ntracer = trace.get_tracer(__name__)\n\n@app.route(\"/api/orders/<id>\")\ndef get_order(id):\n    with tracer.start_as_current_span(\"get_order\") as span:\n        span.set_attribute(\"order.id\", id)\n        span.add_event(\"processing started\")\n\n        with tracer.start_as_current_span(\"db_query\") as child:\n            child.set_attribute(\"db.system\", \"postgresql\")\n            order = db.query(\"SELECT * FROM orders WHERE id = ?\", id)\n\n        with tracer.start_as_current_span(\"validate\") as child:\n            child.set_attribute(\"order.total\", order.total)\n            if order.total > 10000:\n                child.set_attribute(\"requires_approval\", True)\n\n        return order.to_dict()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context propagation"
      }), ": Trace context must cross service boundaries. W3C TraceContext standard defines two HTTP headers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "traceparent: 00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01\n  --- -------------------------- ------------------- ---\n   ¦          ¦                          ¦              ¦\n version   trace_id                    span_id       trace_flags\n\ntracestate: vendor1=value1,vendor2=value2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatic propagation via OpenTelemetry's HTTP instrumentation libraries — no manual header passing needed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sampling strategies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Head-based"
        }), ": Decision at the root span (first service). Simple but may miss important slow requests. Use ProbabilitySampler (sample 1% of traces)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tail-based"
        }), ": Decision after the trace completes. Analyze all spans, then retain high-value traces (errors, high latency). Requires a trace collector with buffering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate-limiting"
        }), ": Sample up to N traces per second. Combine with head-based for low-volume production use."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-jaeger--zipkin",
      children: "5. Jaeger / Zipkin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Jaeger"
      }), ": Uber's open-source distributed tracing system. Components: agent (sidecar), collector, query service, UI. Supports OpenTelemetry protocol (OTLP). Visualization includes trace detail view, service dependency graph, and search/filter."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zipkin"
      }), ": Twitter's tracing system, similar capabilities. Uses Scribe or Kafka as transport. Simpler deployment (single JAR)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both systems ingest spans, index by service/operation/tags/duration, and enable ad-hoc trace querying for debugging latency anomalies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-structured-logging",
      children: "6. Structured Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import structlog\n\nlogger = structlog.get_logger()\nlogger.info(\"order_placed\",\n    order_id=\"ord_123\",\n    user_id=\"usr_456\",\n    total=120.50,\n    currency=\"USD\",\n    payment_method=\"card\"\n)\n\n# Output: {\"event\": \"order_placed\", \"order_id\": \"ord_123\",\n#   \"user_id\": \"usr_456\", \"total\": 120.50, \"currency\": \"USD\",\n#   \"payment_method\": \"card\", \"timestamp\": \"2025-06-11T14:23:01Z\",\n#   \"level\": \"info\", \"logger\": \"app\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Log levels"
      }), ": DEBUG (development), INFO (normal operations), WARNING (potential issue), ERROR (request failure), CRITICAL (system-unstable). Production defaults to INFO."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Correlation IDs"
      }), ": Inject a unique request_id at the API gateway. Propagate to all downstream calls via headers. Include in every log line. Enables stitching together logs from 12 services into a single request view."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Centralized aggregation"
      }), ": ELK stack (Elasticsearch, Logstash, Kibana) or Loki (Grafana's log aggregation system, optimized for Prometheus-style label-based indexing)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-circuit-breaker-pattern",
      children: "7. Circuit Breaker Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The circuit breaker protects downstream services from cascading failures. When error rate exceeds a threshold, the circuit \"trips open\" and subsequent requests fail fast (return error immediately) without calling the downstream service."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Three states"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLOSED"
        }), ": Normal operation. Requests pass through. Counters track failures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OPEN"
        }), ": Failure threshold exceeded. Requests fail immediately (without downstream call). After a timeout (e.g., 30s), transitions to HALF-OPEN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HALF-OPEN"
        }), ": Trial state. Allow a probe request. If successful, transition to CLOSED. If failed, back to OPEN."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nfrom enum import Enum\n\nclass CircuitState(Enum):\n    CLOSED = 1\n    OPEN = 2\n    HALF_OPEN = 3\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold=5, recovery_timeout=30, half_open_max=3):\n        self.state = CircuitState.CLOSED\n        self.failure_count = 0\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.last_failure_time = 0\n        self.half_open_count = 0\n        self.half_open_max = half_open_max\n\n    def call(self, func, fallback=None):\n        if self.state == CircuitState.OPEN:\n            if time.time() - self.last_failure_time > self.recovery_timeout:\n                self.state = CircuitState.HALF_OPEN\n                self.half_open_count = 0\n            else:\n                return fallback() if fallback else None\n\n        try:\n            result = func()\n            if self.state == CircuitState.HALF_OPEN:\n                self.half_open_count += 1\n                if self.half_open_count >= self.half_open_max:\n                    self.state = CircuitState.CLOSED\n                    self.failure_count = 0\n            else:\n                self.failure_count = 0\n            return result\n        except Exception:\n            self.failure_count += 1\n            self.last_failure_time = time.time()\n            if self.failure_count >= self.failure_threshold:\n                self.state = CircuitState.OPEN\n            if fallback:\n                return fallback()\n            raise\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resilience4J"
      }), " (Java): Production-ready library with circuit breaker, bulkhead, rate limiter, retry, time limiter, and cache modules. Supports configuration-driven thresholds, sliding window counters, and reactive integration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hystrix"
      }), " (deprecated by Netflix): Original circuit breaker library. Wraps each dependency call in a HystrixCommand with thread pool isolation, fallbacks, and metrics aggregation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-bulkhead-pattern",
      children: "8. Bulkhead Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isolates resources so failure in one component doesn't exhaust shared resources. Two isolation models:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Thread pool isolation"
      }), ": Each downstream service gets a dedicated thread pool. If the payment service thread pool is exhausted, the orders service is unaffected."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Thread pools:\n  +- order-service -+\n  ¦ pool: 10 threads¦\n  +-----------------+\n  +- payment-service-+  ? this pool exhausts, orders pool unaffected\n  ¦ pool: 5 threads ¦\n  +-----------------+\n  +- inventory-svc -+\n  ¦ pool: 8 threads ¦\n  +-----------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semaphore isolation"
      }), ": Lighter-weight. Limit concurrent calls to a dependency (no thread context switch). Use when latency is low (< 10ms). Semaphore count = max concurrent calls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\n\nclass Bulkhead:\n    def __init__(self, max_concurrent=10):\n        self.semaphore = asyncio.Semaphore(max_concurrent)\n\n    async def call(self, func):\n        async with self.semaphore:\n            return await func()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-retry-with-exponential-backoff-and-jitter",
      children: "9. Retry with Exponential Backoff and Jitter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transient failures should be retried; permanent failures (4xx) should not. Exponential backoff with jitter prevents thundering herd:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def retry_with_jitter(func, max_retries=3, base_delay=0.1, max_delay=10.0):\n    for attempt in range(max_retries):\n        try:\n            return func()\n        except (ConnectionError, TimeoutError):\n            if attempt == max_retries - 1: raise\n            delay = random.uniform(0, min(base_delay * (2 ** attempt), max_delay))\n            time.sleep(delay)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Jitter strategies"
      }), ": Full jitter (AWS recommended): ", (0,jsx_runtime.jsx)(_components.code, {
        children: "random(0, cap)"
      }), ". Equal jitter: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cap/2 + random(0, cap/2)"
      }), ". Decorrelated: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "min(cap, random(base, prev * 3))"
      }), ". Typical config: base=200ms, 3 retries, 20s max backoff."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-rate-limiting",
      children: "10. Rate Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At the application layer, a token bucket (rate R, burst B) protects against quota abuse:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TokenBucket:\n    def __init__(self, rate, burst):\n        self.tokens = burst; self.rate = rate; self.updated = time.monotonic()\n    def consume(self, tokens=1):\n        now = time.monotonic()\n        self.tokens = min(self.burst, self.tokens + (now - self.updated) * self.rate)\n        self.updated = now\n        if self.tokens >= tokens: self.tokens -= tokens; return True\n        return False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exceeded quotas receive HTTP 429 with Retry-After header."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-graceful-degradation",
      children: "11. Graceful Degradation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When dependencies fail, degrade rather than crash: fallbacks (cached data instead of live fetch), default responses, and feature flags to disable non-critical features under load."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def get_recommendations(user_id):\n    try:\n        return recommendations_service.get_personalized(user_id)\n    except ServiceUnavailable:\n        return recommendations_service.get_trending()  # degraded fallback\n    except:\n        return []  # graceful empty response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-load-shedding",
      children: "12. Load Shedding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proactively reject work when overloaded: limit queue depth, prioritize critical requests (payments > analytics), and drop low-priority work at saturation thresholds (80%: batch jobs, 95%: all non-essential)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "if len(work_queue) > MAX_DEPTH: return {\"error\": \"too many requests\"}, 503\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-health-check-api",
      children: "13. Health Check API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Standard endpoints: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /health"
      }), " (liveness — process alive?) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /ready"
      }), " (readiness — dependencies reachable?). Dependency checks return 503 to remove degraded pods from the load balancer:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.route(\"/ready\")\ndef readiness():\n    ok = all([check_db(), check_redis(), check_payment_health()])\n    return {\"status\": \"ok\" if ok else \"degraded\"}, 200 if ok else 503\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-chaos-engineering",
      children: "14. Chaos Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Principles defined by Principles of Chaos (2015, Netflix):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build a hypothesis around steady-state behavior"
        }), ": Define measurable outputs (latency P99 < 100ms, error rate < 0.1%)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vary real-world events"
        }), ": Inject failures that mirror production incidents (instance failure, network partition, resource exhaustion)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run experiments in production"
        }), ": Minimally, in staging with production traffic patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate experiments to run continuously"
        }), ": Integration into CI/CD pipeline."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimize blast radius"
        }), ": Start small (one instance), monitor, expand gradually."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Netflix's Simian Army"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaos Monkey"
        }), ": Randomly terminates EC2 instances. Tests auto-scaling and self-healing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency Monkey"
        }), ": Injects artificial delays between services. Tests timeout handling and circuit breakers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conformity Monkey"
        }), ": Finds instances not adhering to best practices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaos Gorilla"
        }), ": Simulates an entire AWS Availability Zone failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaos Kong"
        }), ": Simulates an entire AWS Region failure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS Fault Injection Simulator"
      }), ": Managed chaos engineering supporting EC2 stop, ECS task drain, RDS failover, and SSM document-based experiments with CloudWatch alarm-based auto-rollback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-prometheus-metrics-instrumentation",
      children: "Example 1: Prometheus Metrics Instrumentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from prometheus_client import Counter, Histogram, Gauge\n\nREQUESTS = Counter(\"http_requests_total\", \"Total requests\", [\"method\", \"endpoint\", \"status\"])\nLATENCY = Histogram(\"http_request_duration_seconds\", \"Latency\", [\"method\", \"endpoint\"],\n                    buckets=[.005, .01, .025, .05, .1, .25, .5, 1.0, 2.5, 5.0])\nIN_FLIGHT = Gauge(\"http_requests_in_flight\", \"Active requests\")\n\n@app.route(\"/api/items\")\ndef get_items():\n    IN_FLIGHT.inc(); start = time.time()\n    try:\n        return jsonify(db.query(\"SELECT * FROM items\"))\n    except:\n        REQUESTS.labels(\"GET\", \"/api/items\", 500).inc(); raise\n    finally:\n        LATENCY.labels(\"GET\", \"/api/items\").observe(time.time() - start)\n        REQUESTS.labels(\"GET\", \"/api/items\", 200).inc()\n        IN_FLIGHT.dec()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-distributed-trace-with-opentelemetry",
      children: "Example 2: Distributed Trace with OpenTelemetry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from opentelemetry import trace\nfrom opentelemetry.instrumentation.requests import RequestsInstrumentor\nRequestsInstrumentor().instrument()  # auto-instruments all downstream HTTP calls\n\ntracer = trace.get_tracer(__name__)\n\ndef handle_order_request(order_id):\n    with tracer.start_as_current_span(\"handle_order\") as span:\n        span.set_attribute(\"order.id\", order_id)\n\n        user = requests.get(f\"http://user-service/users/validate/{order_id}\")\n        payment = requests.post(\"http://payment-service/charge\",\n                                json={\"order_id\": order_id, \"amount\": 120.50})\n        span.set_attribute(\"payment.status\", payment.status_code)\n        if payment.status_code != 200:\n            span.set_status(trace.Status(trace.StatusCode.ERROR))\n        return {\"status\": \"complete\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The W3C TraceContext headers (traceparent, tracestate) propagate automatically through the RequestsInstrumentor. Jaeger UI shows a waterfall view with each service call as a span."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-circuit-breaker-with-fallback-in-practice",
      children: "Example 3: Circuit Breaker with Fallback in Practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@circuit(failure_threshold=5, recovery_timeout=30, fallback_function=payment_fallback)\ndef charge_payment(order_id, amount):\n    resp = httpx.post(\"http://payment-service/charge\", json={\"order_id\": order_id, \"amount\": amount}, timeout=5)\n    resp.raise_for_status(); return resp.json()\n\ndef payment_fallback(order_id, amount):\n    queue.enqueue(\"process_payment\", order_id, amount)\n    return {\"status\": \"queued\", \"message\": \"Payment queued for later processing\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After 5 consecutive failures the circuit opens for 30s, returning fallback in ~2ms instead of timing out at 5s. A single probe passes through after 30s; success closes the circuit, failure resets the timer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-structured-logging-with-correlation-ids",
      children: "Example 4: Structured Logging with Correlation IDs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Flask middleware injects a correlation ID into each request and propagates it via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-Correlation-Id"
      }), " to downstream services:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.before_request\ndef inject_correlation_id():\n    cid = request.headers.get(\"X-Correlation-Id\", str(uuid.uuid4()))\n    structlog.contextvars.bind_contextvars(correlation_id=cid)\n\n@app.route(\"/api/orders\")\ndef create_order():\n    headers = {\"X-Correlation-Id\": structlog.contextvars.get(\"correlation_id\")}\n    try:\n        httpx.post(\"http://inventory-service/reserve\", headers=headers)\n        httpx.post(\"http://payment-service/charge\", headers=headers)\n        structlog.get_logger().info(\"order_created\")\n        return {\"order_id\": str(uuid.uuid4())}, 201\n    except httpx.HTTPError as e:\n        structlog.get_logger().error(\"order_failed\", error=str(e))\n        return {\"error\": \"failed\"}, 502\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Querying Loki for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{correlation_id=\"abc-123\"}"
      }), " reconstructs the full request flow across all services."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Metric"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 17: Observability and Resiliency Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 17: Observability and Resiliency Patterns"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What are the three pillars of observability?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU, Memory, Disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging, Metrics, Tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alerts, Dashboards, Runbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uptime, Latency, Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which Prometheus metric type is monotonically increasing?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gauge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Histogram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the circuit breaker pattern, what happens in the HALF-OPEN state?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All requests fail fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single probe request is allowed through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The circuit resets immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error counters are reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the RED method used for?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service-level monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which sampling strategy retains all traces that include errors?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate-limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tail-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement the three pillars (logging, metrics, tracing) from day one — retrofitting observability is 10× harder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy OpenTelemetry SDK with auto-instrumentation; export to Prometheus + Loki + Jaeger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use RED method (Rate, Errors, Duration) for every service; USE method (Utilization, Saturation, Errors) for every resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define SLOs: P99 latency < 200ms, error rate < 0.1%. Alert when error budget burns faster than threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structured JSON logging with correlation IDs enables cross-service log stitching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inject X-Correlation-Id at the API gateway; propagate via HTTP headers to all downstream services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breaker with HALF-OPEN probes prevents cascading failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set failure threshold = 5, recovery timeout = 30s, half-open max = 3. Use fallbacks for degraded response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bulkhead isolation protects critical resources: thread pool for high-latency, semaphore for low-latency dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment service: dedicated 5-thread pool. Cache: semaphore(50) — lightweight, no context switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retry with exponential backoff + full jitter prevents thundering herd on recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base delay = 200ms, max = 20s, 3 retries. Only retry on 5xx and connection errors (not 4xx)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaos engineering validates resilience: start with instance failure, escalate to region failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly Chaos Monkey experiment; automated rollback if P99 exceeds SLO for 3 consecutive minutes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario: Payment Processing Platform Observability Overhaul"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A payment processing platform handling $2 billion in monthly transaction volume suffers from frequent incident response delays. When P99 latency spikes from 50ms to 5 seconds, the on-call engineer spends 45 minutes manually SSHing into servers to examine logs, only to discover the Redis cluster hit its maxmemory limit and evicted cache entries, causing a cascade of origin database queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The team implements a complete observability stack. First, they deploy OpenTelemetry auto-instrumentation across all 45 microservices. Each service exports RED metrics (request rate, error rate, latency histograms) to Prometheus, structured JSON logs to Loki with correlation IDs, and distributed traces to Jaeger. A Grafana dashboard shows the payment flow end-to-end: from API gateway to fraud detection to bank processor to ledger update."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Second, they implement resiliency patterns. The circuit breaker on the bank processor opens after 3 consecutive 500 errors, returning a cached \"payment queued\" response while the processor recovers. The bulkhead isolates the 10 most critical dependencies — each with its own thread pool. Retry with jitter (base=100ms, max=10s, 3 retries) handles transient bank network failures. A health check endpoint (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ready"
      }), ") reports dependency status and the orchestrator removes pods whose critical dependencies are unhealthy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Third, they introduce chaos engineering. Weekly Chaos Monkey experiments randomly kill two pods per deployment. Monthly Chaos Gorilla experiments simulate an entire AWS AZ failure. The steady-state hypothesis: P99 latency < 200ms, error rate < 0.05%, and the system fully recovers within 5 minutes of an AZ failure. Automated rollback triggers when any SLO is violated for 3 consecutive minutes. After six months, mean time to detect (MTTD) drops from 30 minutes to 2 minutes, and mean time to resolve (MTTR) drops from 90 minutes to 8 minutes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 17: Observability and Resiliency Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental to system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept for Chapter 17: Observability and Resiliency Patterns"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across multiple system design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice has trade-offs"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Chapter Quiz is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the primary trade-off discussed in this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>Refer to the chapter content</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " Which concept is most fundamental to the topic of Chapter 17"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Option A"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Option B"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Option C"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Option D"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>Review the core sections</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " How does this chapter's main concept apply to real-world systems?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Option A"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Option B"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Option C"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Option D"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>See the Real-World Systems section</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-metrics-collector-circuit-breaker-bulkhead-and-distributed-tracer",
                  children: "TypeScript: Metrics Collector, Circuit Breaker, Bulkhead, and Distributed Tracer"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class MetricsCollector {\n  private counters = new Map<string, number>();\n  private gauges = new Map<string, number>();\n  private histograms = new Map<string, number[]>();\n  incrementCounter(name: string, by = 1): void { this.counters.set(name, (this.counters.get(name) ?? 0) + by); }\n  setGauge(name: string, value: number): void { this.gauges.set(name, value); }\n  recordLatency(name: string, ms: number): void {\n    if (!this.histograms.has(name)) this.histograms.set(name, []);\n    this.histograms.get(name)!.push(ms);\n  }\n  getCounter(name: string): number { return this.counters.get(name) ?? 0; }\n  getGauge(name: string): number { return this.gauges.get(name) ?? 0; }\n  percentile(name: string, p: number): number {\n    const vals = this.histograms.get(name) ?? [];\n    if (vals.length === 0) return 0;\n    const sorted = [...vals].sort((a, b) => a - b);\n    const idx = Math.ceil((p / 100) * sorted.length) - 1;\n    return sorted[Math.max(0, idx)];\n  }\n}\n\nclass ResilientCircuitBreaker {\n  private failures = 0;\n  private successes = 0;\n  private state: \"closed\" | \"open\" | \"half-open\" = \"closed\";\n  private lastFailureTime = 0;\n  constructor(private failureThreshold: number, private successThreshold: number, private timeoutMs: number) {}\n  async call<T>(fn: () => Promise<T>, fallback?: () => Promise<T>): Promise<T> {\n    if (this.state === \"open\") {\n      if (Date.now() - this.lastFailureTime > this.timeoutMs) this.state = \"half-open\";\n      else return fallback ? fallback() : Promise.reject(new Error(\"Circuit open\"));\n    }\n    try {\n      const result = await fn();\n      if (this.state === \"half-open\") {\n        this.successes++;\n        if (this.successes >= this.successThreshold) { this.state = \"closed\"; this.failures = 0; this.successes = 0; }\n      }\n      return result;\n    } catch (e) {\n      this.failures++;\n      this.lastFailureTime = Date.now();\n      if (this.state === \"half-open\" || this.failures >= this.failureThreshold) { this.state = \"open\"; this.successes = 0; }\n      return fallback ? fallback() : Promise.reject(e);\n    }\n  }\n  getState(): string { return this.state; }\n}\n\nclass Bulkhead {\n  private active = 0;\n  private queue: (() => void)[] = [];\n  constructor(private maxConcurrent: number, private queueSize: number) {}\n  async run<T>(fn: () => Promise<T>): Promise<T> {\n    if (this.active >= this.maxConcurrent) {\n      if (this.queue.length >= this.queueSize) throw new Error(\"Bulkhead queue full\");\n      await new Promise<void>((resolve) => { this.queue.push(resolve); });\n    }\n    this.active++;\n    try { return await fn(); }\n    finally { this.active--; if (this.queue.length > 0) this.queue.shift()!(); }\n  }\n}\n\nclass DistributedTracer {\n  private spans = new Map<string, { traceId: string; parentId: string; service: string; duration: number; startTime: number }[]>();\n  startTrace(): string { return `trace-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`; }\n  recordSpan(traceId: string, parentId: string, service: string): { spanId: string; end: () => void } {\n    const spanId = `${traceId}-span-${this.spans.size}`;\n    const startTime = Date.now();\n    if (!this.spans.has(traceId)) this.spans.set(traceId, []);\n    return {\n      spanId,\n      end: () => { this.spans.get(traceId)!.push({ traceId, parentId, service, duration: Date.now() - startTime, startTime }); },\n    };\n  }\n  getTrace(traceId: string): { service: string; duration: number }[] { return this.spans.get(traceId) ?? []; }\n  getTotalDuration(traceId: string): number {\n    const spans = this.spans.get(traceId) ?? [];\n    return spans.reduce((max, s) => Math.max(max, s.startTime + s.duration), 0) -\n      spans.reduce((min, s) => Math.min(min, s.startTime), Infinity);\n  }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-metrics-collector-with-counters-gauges-histograms-and-export",
                  children: "TypeScript: Metrics Collector with Counters, Gauges, Histograms, and Export"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface MetricValue {\n  value: number;\n  timestamp: number;\n  labels: Record<string, string>;\n}\n\nclass MetricsCollector {\n  private counters = new Map<string, number>();\n  private gauges = new Map<string, number>();\n  private histograms = new Map<string, number[]>();\n  private metricHistory = new Map<string, MetricValue[]>();\n  private maxHistory = 10000;\n\n  increment(name: string, by = 1, labels: Record<string, string> = {}): void {\n    const key = this.labelKey(name, labels);\n    this.counters.set(key, (this.counters.get(key) ?? 0) + by);\n    this.recordHistory(name, this.counters.get(key)!, labels);\n  }\n\n  setGauge(name: string, value: number, labels: Record<string, string> = {}): void {\n    const key = this.labelKey(name, labels);\n    this.gauges.set(key, value);\n    this.recordHistory(name, value, labels);\n  }\n\n  observe(name: string, value: number, labels: Record<string, string> = {}): void {\n    const key = this.labelKey(name, labels);\n    if (!this.histograms.has(key)) this.histograms.set(key, []);\n    this.histograms.get(key)!.push(value);\n    this.recordHistory(name, value, labels);\n  }\n\n  getCounter(name: string, labels: Record<string, string> = {}): number {\n    return this.counters.get(this.labelKey(name, labels)) ?? 0;\n  }\n\n  getGauge(name: string, labels: Record<string, string> = {}): number {\n    return this.gauges.get(this.labelKey(name, labels)) ?? 0;\n  }\n\n  percentile(name: string, p: number, labels: Record<string, string> = {}): number {\n    const key = this.labelKey(name, labels);\n    const vals = this.histograms.get(key);\n    if (!vals || vals.length === 0) return 0;\n    const sorted = [...vals].sort((a, b) => a - b);\n    const idx = Math.ceil((p / 100) * sorted.length) - 1;\n    return sorted[Math.max(0, idx)];\n  }\n\n  p50(name: string, labels?: Record<string, string>): number { return this.percentile(name, 50, labels); }\n  p95(name: string, labels?: Record<string, string>): number { return this.percentile(name, 95, labels); }\n  p99(name: string, labels?: Record<string, string>): number { return this.percentile(name, 99, labels); }\n\n  exportPrometheus(): string {\n    let output = '';\n    for (const [key, val] of this.counters) {\n      output += `# HELP ${key} Counter metric\\n# TYPE ${key} counter\\n${key} ${val}\\n`;\n    }\n    for (const [key, val] of this.gauges) {\n      output += `# HELP ${key} Gauge metric\\n# TYPE ${key} gauge\\n${key} ${val}\\n`;\n    }\n    for (const [key, vals] of this.histograms) {\n      output += `# HELP ${key} Histogram metric\\n# TYPE ${key} histogram\\n`;\n      const sorted = [...vals].sort((a, b) => a - b);\n      const buckets = [0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1, 5];\n      let cum = 0;\n      for (const b of buckets) {\n        cum = sorted.filter(v => v <= b).length;\n        output += `${key}_bucket{le=\"${b}\"} ${cum}\\n`;\n      }\n      output += `${key}_bucket{le=\"+Inf\"} ${vals.length}\\n`;\n      output += `${key}_sum ${vals.reduce((a, b) => a + b, 0)}\\n`;\n      output += `${key}_count ${vals.length}\\n`;\n    }\n    return output;\n  }\n\n  private recordHistory(name: string, value: number, labels: Record<string, string>): void {\n    if (!this.metricHistory.has(name)) this.metricHistory.set(name, []);\n    const history = this.metricHistory.get(name)!;\n    history.push({ value, timestamp: Date.now(), labels });\n    if (history.length > this.maxHistory) history.shift();\n  }\n\n  queryHistory(name: string, durationMs = 300000): MetricValue[] {\n    const cutoff = Date.now() - durationMs;\n    return (this.metricHistory.get(name) ?? []).filter(m => m.timestamp >= cutoff);\n  }\n\n  private labelKey(name: string, labels: Record<string, string>): string {\n    const parts = Object.entries(labels).map(([k, v]) => `${k}=${v}`).sort().join(',');\n    return parts ? `${name}{${parts}}` : name;\n  }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-structured-logger-with-levels-correlation-id-and-sampling",
                  children: "TypeScript: Structured Logger with Levels, Correlation ID, and Sampling"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'critical';\n\nclass StructuredLogger {\n  private correlationId: string | null = null;\n  private context: Record<string, any> = {};\n  private sampleRate = 1.0;\n  private entries: string[] = [];\n  private maxEntries = 10000;\n\n  constructor(private name: string, private minLevel: LogLevel = 'info') {}\n\n  setCorrelationId(id: string): void { this.correlationId = id; }\n  getCorrelationId(): string | null { return this.correlationId; }\n\n  setContext(key: string, value: any): void { this.context[key] = value; }\n  clearContext(): void { this.context = {}; }\n\n  setSampleRate(rate: number): void { this.sampleRate = Math.max(0, Math.min(1, rate)); }\n\n  private shouldSample(): boolean { return Math.random() < this.sampleRate; }\n\n  private log(level: LogLevel, message: string, meta?: Record<string, any>): void {\n    if (!this.shouldSample()) return;\n    const levelOrder: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3, critical: 4 };\n    if (levelOrder[level] < levelOrder[this.minLevel]) return;\n\n    const entry = JSON.stringify({\n      timestamp: new Date().toISOString(),\n      logger: this.name,\n      level,\n      message,\n      correlation_id: this.correlationId,\n      ...this.context,\n      ...meta,\n    });\n    this.entries.push(entry);\n    if (this.entries.length > this.maxEntries) this.entries.shift();\n\n    switch (level) {\n      case 'critical': console.error(entry); break;\n      case 'error': console.error(entry); break;\n      case 'warn': console.warn(entry); break;\n      default: console.log(entry);\n    }\n  }\n\n  debug(msg: string, meta?: Record<string, any>): void { this.log('debug', msg, meta); }\n  info(msg: string, meta?: Record<string, any>): void { this.log('info', msg, meta); }\n  warn(msg: string, meta?: Record<string, any>): void { this.log('warn', msg, meta); }\n  error(msg: string, meta?: Record<string, any>): void { this.log('error', msg, meta); }\n  critical(msg: string, meta?: Record<string, any>): void { this.log('critical', msg, meta); }\n\n  getEntries(): string[] { return [...this.entries]; }\n  clear(): void { this.entries = []; }\n\n  filterByCorrelationId(id: string): string[] {\n    return this.entries.filter(e => {\n      try { return JSON.parse(e).correlation_id === id; }\n      catch { return false; }\n    });\n  }\n\n  filterByLevel(level: LogLevel): string[] {\n    return this.entries.filter(e => {\n      try { return JSON.parse(e).level === level; }\n      catch { return false; }\n    });\n  }\n\n  child(name: string): StructuredLogger {\n    const child = new StructuredLogger(`${this.name}.${name}`, this.minLevel);\n    child.setCorrelationId(this.correlationId ?? '');\n    child.setSampleRate(this.sampleRate);\n    return child;\n  }\n}\n\nfunction demoLogger() {\n  const log = new StructuredLogger('order-service', 'info');\n  log.setCorrelationId('corr-abc-123');\n  log.setContext('service_version', '2.1.0');\n  log.info('order_placed', { orderId: 'ord-456', userId: 'usr-789', total: 129.99 });\n  log.error('payment_failed', { orderId: 'ord-456', error: 'insufficient_funds' });\n  console.log('Filtered by corr id:', log.filterByCorrelationId('corr-abc-123').length);\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-health-checker-with-liveness-readiness-and-dependency-probes",
                  children: "TypeScript: Health Checker with Liveness, Readiness, and Dependency Probes"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface HealthCheckResult {\n  name: string;\n  status: 'healthy' | 'degraded' | 'unhealthy';\n  latencyMs: number;\n  error?: string;\n  lastSuccess: number;\n}\n\ninterface DependencyProbe {\n  name: string;\n  check: () => Promise<boolean>;\n  timeoutMs: number;\n  critical: boolean;\n}\n\nclass HealthChecker {\n  private livenessProbes: Map<string, () => Promise<boolean>> = new Map();\n  private readinessProbes: Map<string, () => Promise<boolean>> = new Map();\n  private dependencies: DependencyProbe[] = [];\n  private results = new Map<string, HealthCheckResult>();\n  private consecutiveFailures = new Map<string, number>();\n  private maxConsecutiveFailures = 3;\n\n  registerLiveness(name: string, probe: () => Promise<boolean>): void {\n    this.livenessProbes.set(name, probe);\n  }\n\n  registerReadiness(name: string, probe: () => Promise<boolean>): void {\n    this.readinessProbes.set(name, probe);\n  }\n\n  addDependency(name: string, check: () => Promise<boolean>, critical = true, timeoutMs = 5000): void {\n    this.dependencies.push({ name, check, timeoutMs, critical });\n  }\n\n  async checkLiveness(): Promise<{ healthy: boolean; checks: HealthCheckResult[] }> {\n    const checks: HealthCheckResult[] = [];\n    for (const [name, probe] of this.livenessProbes) {\n      checks.push(await this.runProbe(name, probe, true));\n    }\n    return { healthy: checks.every(c => c.status === 'healthy'), checks };\n  }\n\n  async checkReadiness(): Promise<{ healthy: boolean; checks: HealthCheckResult[] }> {\n    const checks: HealthCheckResult[] = [];\n    for (const [name, probe] of this.readinessProbes) {\n      checks.push(await this.runProbe(name, probe, false));\n    }\n    for (const dep of this.dependencies) {\n      const result = await this.runDependencyProbe(dep);\n      checks.push(result);\n    }\n    const criticalHealthy = checks.every(c => c.status !== 'unhealthy');\n    const degraded = checks.some(c => c.status === 'degraded');\n    return { healthy: criticalHealthy && !degraded, checks };\n  }\n\n  private async runProbe(name: string, probe: () => Promise<boolean>, isLiveness: boolean): Promise<HealthCheckResult> {\n    const start = Date.now();\n    try {\n      const ok = await probe();\n      const latency = Date.now() - start;\n      if (ok) {\n        this.consecutiveFailures.set(name, 0);\n        const result: HealthCheckResult = { name, status: 'healthy', latencyMs: latency, lastSuccess: Date.now() };\n        this.results.set(name, result);\n        return result;\n      }\n      return this.failProbe(name, latency, 'Probe returned false');\n    } catch (err) {\n      return this.failProbe(name, Date.now() - start, `Probe error: ${err}`);\n    }\n  }\n\n  private async runDependencyProbe(dep: DependencyProbe): Promise<HealthCheckResult> {\n    const start = Date.now();\n    try {\n      const timeoutPromise = new Promise<boolean>((_, reject) =>\n        setTimeout(() => reject(new Error('Timeout')), dep.timeoutMs)\n      );\n      const ok = await Promise.race([dep.check(), timeoutPromise]);\n      const latency = Date.now() - start;\n      if (ok) {\n        this.consecutiveFailures.set(dep.name, 0);\n        const result: HealthCheckResult = { name: `dep:${dep.name}`, status: 'healthy', latencyMs: latency, lastSuccess: Date.now() };\n        this.results.set(dep.name, result);\n        return result;\n      }\n      return this.failProbe(dep.name, latency, 'Dependency unhealthy');\n    } catch (err) {\n      const failures = (this.consecutiveFailures.get(dep.name) ?? 0) + 1;\n      this.consecutiveFailures.set(dep.name, failures);\n      const latency = Date.now() - start;\n      if (failures >= this.maxConsecutiveFailures && !dep.critical) {\n        return { name: `dep:${dep.name}`, status: 'degraded', latencyMs: latency, error: String(err), lastSuccess: this.results.get(dep.name)?.lastSuccess ?? 0 };\n      }\n      return this.failProbe(dep.name, latency, String(err));\n    }\n  }\n\n  private failProbe(name: string, latency: number, error: string): HealthCheckResult {\n    const failures = (this.consecutiveFailures.get(name) ?? 0) + 1;\n    this.consecutiveFailures.set(name, failures);\n    const status = failures >= this.maxConsecutiveFailures ? 'unhealthy' : 'degraded';\n    const result: HealthCheckResult = { name, status, latencyMs: latency, error, lastSuccess: this.results.get(name)?.lastSuccess ?? 0 };\n    this.results.set(name, result);\n    return result;\n  }\n\n  getResults(): Map<string, HealthCheckResult> { return new Map(this.results); }\n\n  resetCounters(): void { this.consecutiveFailures.clear(); }\n\n  toJSON(): object {\n    return {\n      healthy: [...this.results.values()].every(r => r.status === 'healthy'),\n      checks: Object.fromEntries(this.results),\n    };\n  }\n}\n\nasync function demoHealth() {\n  const hc = new HealthChecker();\n  hc.registerLiveness('process', async () => true);\n  hc.registerReadiness('db-connection', async () => {\n    await new Promise(r => setTimeout(r, 5));\n    return true;\n  });\n  hc.addDependency('redis', async () => {\n    await new Promise(r => setTimeout(r, 2));\n    return Math.random() > 0.3;\n  }, true);\n  hc.addDependency('payment-gateway', async () => {\n    await new Promise(r => setTimeout(r, 50));\n    return Math.random() > 0.5;\n  }, false);\n  const liveness = await hc.checkLiveness();\n  console.log('Liveness:', liveness.healthy);\n  const readiness = await hc.checkReadiness();\n  console.log('Readiness:', readiness.healthy, readiness.checks.map(c => `${c.name}=${c.status}`));\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "observability-three-pillars-with-subgraphs",
                  children: "Observability Three Pillars with Subgraphs"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart TB\n    subgraph LOGGING[\"Pillar 1: Logging\"]\n        ST_LOGS[\"Structured Logs<br/>JSON format<br/>Level: INFO/ERROR\"]\n        CORR_ID[\"Correlation ID<br/>X-Correlation-Id<br/>Cross-service trace\"]\n        LOG_AGG[\"Log Aggregation<br/>Loki / ELK Stack<br/>Label-based indexing\"]\n    end\n\n    subgraph METRICS[\"Pillar 2: Metrics\"]\n        COUNTERS[\"Counters<br/>http_requests_total<br/>Monotonically increasing\"]\n        GAUGES[\"Gauges<br/>cpu_usage_percent<br/>Up/down with load\"]\n        HISTOGRAMS[\"Histograms<br/>request_duration_seconds<br/>Bucket-based quantiles\"]\n        RED_METHOD[\"RED Method<br/>Rate / Errors / Duration\"]\n        USE_METHOD[\"USE Method<br/>Utilization / Saturation / Errors\"]\n    end\n\n    subgraph TRACING[\"Pillar 3: Tracing\"]\n        SPANS[\"Spans<br/>Individual operations<br/>Parent-child hierarchy\"]\n        TRACES[\"Traces<br/>End-to-end request path<br/>Waterfall visualization\"]\n        CTX_PROP[\"Context Propagation<br/>W3C TraceContext<br/>traceparent header\"]\n        SAMPLING[\"Sampling Strategies<br/>Head-based / Tail-based<br/>Rate-limited\"]\n    end\n\n    subgraph ALERTING[\"Alerting & Dashboards\"]\n        PROM_ALERT[\"Prometheus Alertmanager<br/>Grouping / Silencing<br/>PagerDuty / Slack\"]\n        GRAFANA[\"Grafana Dashboards<br/>RED/USE panels<br/>Deployment annotations\"]\n        SLO[\"SLO / Error Budget<br/>99.9% uptime target<br/>Burn rate alerts\"]\n    end\n\n    subgraph RESILIENCY[\"Resiliency Patterns\"]\n        CB[\"Circuit Breaker<br/>CLOSED / OPEN / HALF-OPEN<br/>Failure threshold\"]\n        BH[\"Bulkhead<br/>Thread pool isolation<br/>Semaphore isolation\"]\n        RETRY[\"Retry + Jitter<br/>Exponential backoff<br/>Full jitter randomization\"]\n        LS[\"Load Shedding<br/>Queue depth limits<br/>Priority-based rejection\"]\n    end\n\n    LOGGING & METRICS --> ALERTING\n    TRACING --> METRICS\n    RESILIENCY --> METRICS\n    RESILIENCY --> LOGGING\n\n    classDef pillar1 fill:#E3F2FD,color:#1565C0\n    classDef pillar2 fill:#F3E5F5,color:#7B1FA2\n    classDef pillar3 fill:#E8F5E9,color:#2E7D32\n    classDef alert fill:#FFF3E0,color:#E65100\n    classDef resil fill:#FFEBEE,color:#C62828\n    class ST_LOGS,CORR_ID,LOG_AGG pillar1\n    class COUNTERS,GAUGES,HISTOGRAMS,RED_METHOD,USE_METHOD pillar2\n    class SPANS,TRACES,CTX_PROP,SAMPLING pillar3\n    class PROM_ALERT,GRAFANA,SLO alert\n    class CB,BH,RETRY,LS resil\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "implementation-observability-monitoring-and-resiliency",
                  children: "Implementation: Observability, Monitoring, and Resiliency"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class MetricsCollector { private metrics = new Map<string, { values: number[]; timestamps: number[] }>();\n  record(name: string, value: number): void { if (!this.metrics.has(name)) this.metrics.set(name, { values: [], timestamps: [] }); const m = this.metrics.get(name)!; m.values.push(value); m.timestamps.push(Date.now()); if (m.values.length > 1000) { m.values.shift(); m.timestamps.shift(); } }\n  query(name: string, durationMs = 300000): number[] { const m = this.metrics.get(name); if (!m) return []; const cutoff = Date.now() - durationMs; const indices = m.timestamps.map((t, i) => t >= cutoff ? i : -1).filter(i => i >= 0); return indices.map(i => m.values[i]); }\n  avg(name: string, durationMs = 300000): number { const vals = this.query(name, durationMs); return vals.length > 0 ? vals.reduce((a, b) => a + b, 0) / vals.length : 0; }\n  p95(name: string, durationMs = 300000): number { const vals = this.query(name, durationMs).sort((a, b) => a - b); return vals.length > 0 ? vals[Math.floor(vals.length * 0.95)] : 0; }\n  p99(name: string, durationMs = 300000): number { const vals = this.query(name, durationMs).sort((a, b) => a - b); return vals.length > 0 ? vals[Math.floor(vals.length * 0.99)] : 0; }\n}\nclass HealthCheckService { private checks = new Map<string, () => Promise<boolean>>();\n  register(name: string, check: () => Promise<boolean>): void { this.checks.set(name, check); }\n  async runAll(): Promise<{ healthy: boolean; results: { name: string; ok: boolean; latencyMs: number }[] }> { const results = []; for (const [name, check] of this.checks) { const start = Date.now(); try { const ok = await check(); results.push({ name, ok, latencyMs: Date.now() - start }); } catch { results.push({ name, ok: false, latencyMs: Date.now() - start }); } } return { healthy: results.every(r => r.ok), results }; }\n}\nclass RetryPolicy { constructor(private maxRetries: number, private baseDelay: number, private maxDelay: number) {}\n  async execute<T>(fn: () => Promise<T>): Promise<T> { let lastError: any; for (let i = 0; i <= this.maxRetries; i++) { try { return await fn(); } catch (e) { lastError = e; if (i < this.maxRetries) await this.delay(i); } } throw lastError; }\n  private async delay(attempt: number): Promise<void> { const jitter = Math.random() * 100; const delay = Math.min(this.baseDelay * Math.pow(2, attempt) + jitter, this.maxDelay); return new Promise(r => setTimeout(r, delay)); }\n}\nclass ChaosMonkey { private services = new Map<string, { fail: boolean; latency: number }>();\n  addService(name: string): void { this.services.set(name, { fail: false, latency: 0 }); }\n  injectFailure(name: string, type: \"crash\" | \"latency\"): void { const s = this.services.get(name); if (s) { if (type === \"crash\") s.fail = true; else s.latency = 2000 + Math.random() * 3000; } }\n  check(): string[] { const affected: string[] = []; for (const [name, s] of this.services) { if (s.fail || s.latency > 500) affected.push(name); } return affected; } }\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// observability resiliency\n// distributed-systems-scalability implementation"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'observability resiliency', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// observability resiliency - additional TS implementations"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'observability resiliency' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "summary",
                  children: "Summary"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The three pillars of observability are logging, metrics, and tracing — each serves a distinct purpose: debugging, alerting, and latency analysis"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "RED method (Rate, Errors, Duration) for services; USE method (Utilization, Saturation, Errors) for infrastructure resources"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Prometheus uses a pull model with Counter (monotonic), Gauge (fluctuating), Histogram (bucketed), and Summary (quantile) metric types"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "OpenTelemetry provides vendor-neutral tracing with W3C TraceContext propagation and configurable sampling strategies"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Structured logging with JSON format and correlation IDs enables centralized aggregation and cross-service log stitching"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Circuit breaker transitions through CLOSED ? OPEN ? HALF-OPEN states with configurable thresholds and recovery timeouts"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Bulkhead pattern isolates thread pools or semaphores per dependency to prevent cascading resource exhaustion"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Retry with exponential backoff and full jitter prevents thundering herd during transient failures"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Graceful degradation uses fallbacks, default responses, and feature flags to serve partial functionality under load"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Load shedding protects systems by rejecting work when queue depth exceeds thresholds and prioritizing critical requests"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Health check endpoints (/health, /ready) distinguish process liveness from application readiness for orchestrator probes"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Chaos engineering validates resilience through controlled experiments with minimized blast radius and automated rollbacks"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "exercises",
                  children: "Exercises"
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "review-questions",
                  children: "Review Questions"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "1. Histogram: client-side bucket counters; quantiles computed server-side; supports aggregation across instances. Summary: client-side quantile estimation; cannot aggregate across instances because quantiles are not additive. Use Histogram when you need aggregated percentiles (e.g., fleet-wide P99). Use Summary when you need exact quantiles per instance (e.g., per-pod memory pressure).\n2. W3C TraceContext uses the `traceparent` header format: `version-trace_id-span_id-trace_flags`. Version (00 for current), trace_id (16-byte globally unique ID), span_id (8-byte parent span ID), flags (01 = sampled). `tracestate` carries vendor-specific data. Context propagates via: service receives header, creates child span with new span_id, passes same trace_id and new span_id to downstream calls.\n3. Thread pool: dedicated OS threads per dependency. Use for high-latency dependencies (P50 > 50ms) where context switching cost is amortized over long operations. Semaphore: no thread context switch, just a counter. Use for low-latency dependencies (<10ms) where thread overhead would dominate. Semaphore uses less memory but cannot isolate thread starvation.\n4. HALF-OPEN exists for recovery detection. A single probe request tests if the downstream service has recovered. If it succeeds, the circuit closes. If it fails, the circuit re-opens and the recovery timer resets. One success followed by immediate failure is handled because the circuit transitions to CLOSED only after `successThreshold` consecutive successes (typically 3).\n5. Four Golden Signals (Google SRE): Latency, Traffic, Errors, Saturation — applicable to both services and infrastructure. RED (Rate, Errors, Duration): designed specifically for services. USE (Utilization, Saturation, Errors): designed specifically for resources. Overlap: Saturation (Golden Signals) ≈ Utilization + Saturation (USE) when applied to services as queue depth."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "application-problems",
                  children: "Application Problems"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "1. Per service: 5 counters + 5 gauges + 5 histograms × 11 time series (10 buckets + sum + count) = 5 + 5 + 55 = 65 + 5 summaries × 4 quantiles = 85 total series. Fleet: 500 × 85 = 42,500 series. Scrape bandwidth: each series ≈ 40 bytes (metric name + labels + value). 42,500 × 40 × 4 (15s interval) ≈ 6.8 MB/s = 54.4 Mbps. Storage: 1 byte/sample × 42,500 series × 4 samples/min × 60 × 24 = 245 GB/day. 30-day retention: 245 GB × 30 = 7.35 TB. Downsample to 1-minute resolution after 7 days; aggregate to 1-hour resolution after 14 days.\n2. First 5 seconds (3% error rate): 3 errors in 10 seconds — below threshold of 5. Circuit stays CLOSED. Then 60% error rate: 5 consecutive errors in ~8 requests → circuit opens at ~1.3 seconds into failure spike. Requests during OPEN (28.7 seconds): all fast-failed. After 30s recovery timeout → transitions to HALF-OPEN. Probe succeeds → circuit CLOSES. Total requests: ~1000 during 2-minute window. Fast-failed: ~860 (86%). Hit failing service: ~140 (14%).\n3. Steady-state hypothesis: (a) P99 latency < 200ms, (b) error rate < 0.1%, (c) successful failover < 5 minutes. Steps: (1) Gradually shift 25% traffic from region A to region B — verify B handles load. (2) Enable network latency injection (50ms) between regions. (3) Gradually reduce region A capacity (terminate 25%, then 50%, then 75% of pods). (4) Simulate complete region A failure (stop all traffic routing to A). Rollback: any SLO violation for 3 consecutive minutes. Expected degradation: P99 latency may spike to 500ms during DNS propagation, error rate may hit 0.5% briefly, system fully recovers in < 5 minutes.\n4. Bottleneck: Service C at 3.1s. Retry: Service D's 2.4s span (the first 0.8s attempt failed, retry took 2.4s). Serialization: A calls B (1.2s) and C (3.1s) sequentially = 4.3s. D is called after C? D's spans start after C completes. Total actual serial: A(negligible) + B(1.5, parallel wait) + C(3.1) + D(2.4) = 5.5s (but overlaps reduce observed to 4.8s). Theoretical parallel minimum: max(B=1.5, C=3.1, D=2.4) = 3.1s. The retry in D adds 2.4s — eliminating it saves 2.4s from serial path."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "challenge-problem",
                  children: "Challenge Problem"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "Design the complete observability and resiliency stack:\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Prometheus Metrics"
                    }), ": RED per service (rate, errors, duration histograms with buckets [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0, 10.0]). USE per resource (CPU utilization, memory saturation, disk I/O errors). Scrape interval: 15s. Retention: 14d at full resolution, 90d at 5m downsampled. Storage: ~10 TB (50 services × 100 series × 4 bytes × 5760 samples/day × 14 days)."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "OTel Tail-Based Sampling"
                    }), ": Jaeger collector with tail sampling processor. 100% of failed traces (status=ERROR), 1% of successful traces. Head-based rate limit: 100 traces/second. Storage: ~200 GB/day (500K traces/day at 400 bytes/trace)."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Structured Logs (Loki)"
                    }), ": JSON format with correlation_id, service, duration_ms, status_code. Label on service, level, environment. Retention: 30d. Storage: 50 services × 10 GB/day = 500 GB/day, compressed to ~150 GB/day."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "3-Tier Alertmanager"
                    }), ": Tier 1 (critical): P1 to PagerDuty, 5-minute response SLA. Tier 2 (warning): P2 to Slack, 30-minute response. Tier 3 (info): P3 to email, next-business-day. Grouping: group by service, severity. Inhibition: higher-severity alerts suppress lower-severity for the same service."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Circuit Breakers"
                    }), ": 120 dependencies. Configuration: sliding window of 10 requests, failure threshold = 5, recovery timeout = 30s, half-open max = 3. Fallbacks: cached responses for reads, queued writes."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Bulkheads"
                    }), ": Critical path dependencies (database, cache, auth) get 10-thread pools. Non-critical (analytics, reporting) share a 5-thread pool. Semaphore isolation for sub-millisecond dependencies (local cache)."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Retry with Jitter"
                    }), ": 3 retries, base delay = 100ms, max = 10s, full jitter. Only on 5xx and connection errors. No retry on 4xx or idempotency violations."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Load Shedding"
                    }), ": Queue depth limit = 1000 per service. At 80% saturation: shed batch jobs and analytics. At 95%: shed all non-critical traffic. Return 503 with Retry-After header."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Health Probes"
                    }), ": ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "/health"
                    }), " (liveness) — process alive, no dependency check. ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "/ready"
                    }), " (readiness) — checks all critical dependencies with timeout. Orchestrator removes unhealthy pods."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Chaos Experiments"
                    }), ": Weekly Chaos Monkey (kill 2 pods). Bi-weekly Chaos Gorilla (AZ failure). Monthly Chaos Kong (region failure). Auto-rollback if P99 > 500ms for 3 consecutive minutes. All experiments in staging first, production during low-traffic hours."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Runbook for 30s P99 Spike"
                    }), ": (1) Open Grafana dashboard → check RED metrics per service. (2) Identify which service latency spiked. (3) Open Jaeger → filter traces for that service, sort by duration. (4) Examine slowest spans → identify bottleneck dependency. (5) Check Loki for error logs with same correlation_id. (6) Check Alertmanager for related alerts. (7) Check saturation metrics (CPU, memory, connection pool). (8) Remediate: scale up, restart, or circuit breaker manual trip. (9) Post-mortem: add missing span instrumentation or adjust circuit breaker thresholds."]
                  })]
                }), (0,jsx_runtime.jsx)(_components.p, {}), "\n"]
              })
            })]
          })
        })]
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