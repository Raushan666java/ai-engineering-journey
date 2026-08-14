"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[97663],{

/***/ 42613
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_55_observability_md_a75_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-55-observability-md-a75.json
const site_docs_courses_java_55_observability_md_a75_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/55-observability","title":"Observability (Micrometer, Prometheus, Grafana)","description":"Previous Java Core Interview Q&amp;A","source":"@site/docs/courses/java/55-observability.md","sourceDirName":"courses/java","slug":"/java/55-observability","permalink":"/ai-engineering-journey/java/55-observability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":55,"frontMatter":{"id":"55-observability","slug":"/java/55-observability","title":"Observability (Micrometer, Prometheus, Grafana)","sidebar_label":"Observability (Micrometer, Prometheus, Grafana)","sidebar_position":55},"sidebar":"course-java","previous":{"title":"CI/CD for Spring Boot","permalink":"/ai-engineering-journey/java/54-cicd"},"next":{"title":"Java Core Interview Q&A","permalink":"/ai-engineering-journey/java/56-interview-java"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/55-observability.md


const frontMatter = {
	id: '55-observability',
	slug: '/java/55-observability',
	title: 'Observability (Micrometer, Prometheus, Grafana)',
	sidebar_label: 'Observability (Micrometer, Prometheus, Grafana)',
	sidebar_position: 55
};
const contentTitle = 'Observability (Micrometer, Prometheus, Grafana)';

const assets = {

};

/*End Image Gallery*/


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
  "value": "1. The Observability Stack",
  "id": "1-the-observability-stack",
  "level": 2
}, {
  "value": "1.1 Three Pillars of Observability",
  "id": "11-three-pillars-of-observability",
  "level": 3
}, {
  "value": "2. Micrometer Metrics",
  "id": "2-micrometer-metrics",
  "level": 2
}, {
  "value": "2.1 Setup",
  "id": "21-setup",
  "level": 3
}, {
  "value": "2.2 MeterRegistry",
  "id": "22-meterregistry",
  "level": 3
}, {
  "value": "2.3 Counter",
  "id": "23-counter",
  "level": 3
}, {
  "value": "2.4 Gauge",
  "id": "24-gauge",
  "level": 3
}, {
  "value": "2.5 Timer",
  "id": "25-timer",
  "level": 3
}, {
  "value": "2.6 DistributionSummary",
  "id": "26-distributionsummary",
  "level": 3
}, {
  "value": "2.7 LongTaskTimer",
  "id": "27-longtasktimer",
  "level": 3
}, {
  "value": "2.8 FunctionCounter and FunctionTimer",
  "id": "28-functioncounter-and-functiontimer",
  "level": 3
}, {
  "value": "2.9 @Counted and @Timed Annotations",
  "id": "29-counted-and-timed-annotations",
  "level": 3
}, {
  "value": "2.10 Custom Tags",
  "id": "210-custom-tags",
  "level": 3
}, {
  "value": "2.11 Global Tags via MeterFilter",
  "id": "211-global-tags-via-meterfilter",
  "level": 3
}, {
  "value": "2.12 Custom MeterRegistry Binder",
  "id": "212-custom-meterregistry-binder",
  "level": 3
}, {
  "value": "2.13 @Observation API",
  "id": "213-observation-api",
  "level": 3
}, {
  "value": "2.14 ObservationHandler",
  "id": "214-observationhandler",
  "level": 3
}, {
  "value": "3. Prometheus",
  "id": "3-prometheus",
  "level": 2
}, {
  "value": "3.1 Prometheus Endpoint",
  "id": "31-prometheus-endpoint",
  "level": 3
}, {
  "value": "3.2 Prometheus Configuration",
  "id": "32-prometheus-configuration",
  "level": 3
}, {
  "value": "3.3 Docker Compose with Prometheus",
  "id": "33-docker-compose-with-prometheus",
  "level": 3
}, {
  "value": "3.4 Prometheus Query Examples",
  "id": "34-prometheus-query-examples",
  "level": 3
}, {
  "value": "4. Grafana Dashboards",
  "id": "4-grafana-dashboards",
  "level": 2
}, {
  "value": "4.1 Docker Compose with Grafana",
  "id": "41-docker-compose-with-grafana",
  "level": 3
}, {
  "value": "4.2 Grafana Data Source Provisioning",
  "id": "42-grafana-data-source-provisioning",
  "level": 3
}, {
  "value": "4.3 Grafana Dashboard Provisioning",
  "id": "43-grafana-dashboard-provisioning",
  "level": 3
}, {
  "value": "4.4 JVM Dashboard JSON Model",
  "id": "44-jvm-dashboard-json-model",
  "level": 3
}, {
  "value": "4.5 Spring Boot Dashboard",
  "id": "45-spring-boot-dashboard",
  "level": 3
}, {
  "value": "4.6 Custom Business Metrics Dashboard",
  "id": "46-custom-business-metrics-dashboard",
  "level": 3
}, {
  "value": "4.7 Grafana Alerting Rules",
  "id": "47-grafana-alerting-rules",
  "level": 3
}, {
  "value": "5. Custom Business Metrics",
  "id": "5-custom-business-metrics",
  "level": 2
}, {
  "value": "5.1 Business Metrics Service",
  "id": "51-business-metrics-service",
  "level": 3
}, {
  "value": "5.2 Using Business Metrics in Services",
  "id": "52-using-business-metrics-in-services",
  "level": 3
}, {
  "value": "5.3 Custom Micrometer Binder for Database Pool",
  "id": "53-custom-micrometer-binder-for-database-pool",
  "level": 3
}, {
  "value": "6. Structured Logging",
  "id": "6-structured-logging",
  "level": 2
}, {
  "value": "6.1 Logstash Logback Encoder",
  "id": "61-logstash-logback-encoder",
  "level": 3
}, {
  "value": "6.2 logback-spring.xml",
  "id": "62-logback-springxml",
  "level": 3
}, {
  "value": "6.3 JSON Log Output Example",
  "id": "63-json-log-output-example",
  "level": 3
}, {
  "value": "6.4 MDC Filter for Correlation ID",
  "id": "64-mdc-filter-for-correlation-id",
  "level": 3
}, {
  "value": "6.5 RestTemplate Correlation ID Interceptor",
  "id": "65-resttemplate-correlation-id-interceptor",
  "level": 3
}, {
  "value": "6.6 Structured Logging Service",
  "id": "66-structured-logging-service",
  "level": 3
}, {
  "value": "7. ELK/Loki Log Aggregation",
  "id": "7-elkloki-log-aggregation",
  "level": 2
}, {
  "value": "7.1 ELK Stack (Filebeat → Logstash → Elasticsearch → Kibana)",
  "id": "71-elk-stack-filebeat--logstash--elasticsearch--kibana",
  "level": 3
}, {
  "value": "7.2 Filebeat Configuration",
  "id": "72-filebeat-configuration",
  "level": 3
}, {
  "value": "7.3 Logstash Configuration",
  "id": "73-logstash-configuration",
  "level": 3
}, {
  "value": "7.4 Loki Stack (Promtail → Loki → Grafana)",
  "id": "74-loki-stack-promtail--loki--grafana",
  "level": 3
}, {
  "value": "7.5 Promtail Configuration",
  "id": "75-promtail-configuration",
  "level": 3
}, {
  "value": "7.6 Loki Configuration",
  "id": "76-loki-configuration",
  "level": 3
}, {
  "value": "7.7 LogQL Queries",
  "id": "77-logql-queries",
  "level": 3
}, {
  "value": "8. SLI/SLO/SLA",
  "id": "8-slislosla",
  "level": 2
}, {
  "value": "8.1 Definitions",
  "id": "81-definitions",
  "level": 3
}, {
  "value": "8.2 SLI Implementation with Micrometer",
  "id": "82-sli-implementation-with-micrometer",
  "level": 3
}, {
  "value": "8.3 SLO Burn Rate Alert",
  "id": "83-slo-burn-rate-alert",
  "level": 3
}, {
  "value": "9. Custom Alerting",
  "id": "9-custom-alerting",
  "level": 2
}, {
  "value": "9.1 Prometheus Alerting Rules",
  "id": "91-prometheus-alerting-rules",
  "level": 3
}, {
  "value": "9.2 Alertmanager Configuration",
  "id": "92-alertmanager-configuration",
  "level": 3
}, {
  "value": "9.3 Alert Templates",
  "id": "93-alert-templates",
  "level": 3
}, {
  "value": "9.4 Grafana Alerting (Alternative)",
  "id": "94-grafana-alerting-alternative",
  "level": 3
}, {
  "value": "9.5 PagerDuty Integration",
  "id": "95-pagerduty-integration",
  "level": 3
}, {
  "value": "9.6 Slack Integration",
  "id": "96-slack-integration",
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
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
        id: "observability-micrometer-prometheus-grafana",
        children: "Observability (Micrometer, Prometheus, Grafana)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/54-cicd",
          children: "CI/CD Pipelines"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/56-interview-java",
          children: "Java Core Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
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
        href: "../../assets/images/lessons/java/55-observability/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/55-observability/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/55-observability/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/55-observability/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/55-observability/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/55-observability/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-first approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid common pitfalls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Concepts] --> B[Setup/Configuration]\n    B --> C[Implementation]\n    C --> D[Testing]\n    D --> E[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instrument Spring Boot applications with Micrometer metrics including counters, gauges, timers, and distribution summaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create custom metrics with tags and meters, and use Micrometer's @Counted and @Timed annotations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Prometheus to scrape metrics from Spring Boot Actuator endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build and customize Grafana dashboards for JVM, Spring Boot, and business metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement custom business metrics with Micrometer binders and Observation API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure structured JSON logging with MDC and correlation IDs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up ELK and Loki log aggregation pipelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define SLI/SLO/SLA metrics and build custom alerting rules with Prometheus and Grafana"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-the-observability-stack",
      children: "1. The Observability Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Test with production-like configurations → dev setups often hide issues that surface under real load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Start simple. Add complexity only when proven necessary. Premature abstraction creates maintenance burden."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/55-observability.png",
        alt: "Observability - Micrometer, Prometheus, Grafana"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────┐\n│                    Grafana (Dashboards)                   │\n│  ┌──────────────┐  ┌──────────────┐  ┌───────────────┐  │\n│  │    JVM       │  │  Spring Boot │  │  Business     │  │\n│  │  Dashboard   │  │  Dashboard   │  │  Dashboard    │  │\n│  └──────┬───────┘  └──────┬───────┘  └───────┬───────┘  │\n└─────────┼─────────────────┼──────────────────┼──────────┘\n          │                 │                  │\n┌─────────┴─────────────────┴──────────────────┴──────────┐\n│                     Prometheus (Metrics)                  │\n│  ┌──────────────┐  ┌──────────────┐  ┌───────────────┐  │\n│  │   JVM        │  │  Spring Boot │  │  Custom       │  │\n│  │   Metrics    │  │  Actuator    │  │  Business     │  │\n│  └──────┬───────┘  └──────┬───────┘  └───────┬───────┘  │\n└─────────┼─────────────────┼──────────────────┼──────────┘\n          │                 │                  │\n┌─────────┴─────────────────┴──────────────────┴──────────┐\n│            Spring Boot Application                        │\n│  ┌──────────────────────────────────────────────────┐    │\n│  │  Micrometer  │  Structured Logging  │  Actuator  │    │\n│  │  Metrics     │  (JSON + MDC)       │  Endpoints │    │\n│  └──────────────────────────────────────────────────┘    │\n└──────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-three-pillars-of-observability",
      children: "1.1 Three Pillars of Observability"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pillar"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micrometer → Prometheus → Grafana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numerical measurements over time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logback → ELK/Loki → Grafana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete events with context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tracing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micrometer Tracing → Jaeger/Tempo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request flow across services"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logging"
      }), ". Tracing is covered in a dedicated chapter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-micrometer-metrics",
      children: "2. Micrometer Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-setup",
      children: "2.1 Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>io.micrometer</groupId>\n    <artifactId>micrometer-registry-prometheus</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      exposure:\n        include: health,metrics,prometheus,info\n  metrics:\n    tags:\n      application: ${spring.application.name}\n      environment: ${spring.profiles.active:default}\n    export:\n      prometheus:\n        enabled: true\n    distribution:\n      percentiles-histogram:\n        http.server.requests: true\n      slo:\n        http.server.requests: 10ms, 50ms, 100ms, 200ms, 500ms, 1s, 2s\n      percentiles:\n        http.server.requests: 0.50, 0.75, 0.90, 0.95, 0.99\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-meterregistry",
      children: "2.2 MeterRegistry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class MetricsRegistry {\n\n    private final MeterRegistry meterRegistry;\n\n    public MetricsRegistry(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    public MeterRegistry getRegistry() {\n        return meterRegistry;\n    }\n\n    public void reportCustomMetric(String name, double value) {\n        meterRegistry.gauge(name, value);\n    }\n\n    public void incrementCounter(String name, String... tags) {\n        meterRegistry.counter(name, tags).increment();\n    }\n\n    public void recordTime(String name, long durationMillis, String... tags) {\n        meterRegistry.timer(name, tags)\n            .record(() -> {\n                try {\n                    Thread.sleep(durationMillis);\n                } catch (InterruptedException e) {\n                    Thread.currentThread().interrupt();\n                }\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-counter",
      children: "2.3 Counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.Counter;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class OrderCounter {\n\n    private final Counter orderCreated;\n    private final Counter orderCancelled;\n    private final Counter orderShipped;\n\n    public OrderCounter(MeterRegistry registry) {\n        this.orderCreated = Counter.builder(\"orders.created\")\n            .description(\"Number of orders created\")\n            .tag(\"type\", \"standard\")\n            .register(registry);\n\n        this.orderCancelled = Counter.builder(\"orders.cancelled\")\n            .description(\"Number of orders cancelled\")\n            .tag(\"type\", \"standard\")\n            .register(registry);\n\n        this.orderShipped = Counter.builder(\"orders.shipped\")\n            .description(\"Number of orders shipped\")\n            .tag(\"type\", \"standard\")\n            .register(registry);\n    }\n\n    public void recordOrderCreated() {\n        orderCreated.increment();\n    }\n\n    public void recordOrderCancelled() {\n        orderCancelled.increment();\n    }\n\n    public void recordOrderShipped() {\n        orderShipped.increment();\n    }\n\n    public void recordBulkOrders(int count) {\n        orderCreated.increment(count);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-gauge",
      children: "2.4 Gauge"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.Gauge;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.springframework.stereotype.Component;\n\nimport java.util.concurrent.atomic.AtomicReference;\n\n@Component\npublic class QueueGauge {\n\n    private final AtomicReference<Double> pendingOrders = new AtomicReference<>(0.0);\n    private final AtomicReference<Double> activeJobs = new AtomicReference<>(0.0);\n    private final AtomicReference<Double> deadLetterCount = new AtomicReference<>(0.0);\n\n    public QueueGauge(MeterRegistry registry) {\n        Gauge.builder(\"queue.pending.orders\", pendingOrders, AtomicReference::get)\n            .description(\"Number of pending orders in queue\")\n            .tag(\"queue\", \"orders\")\n            .register(registry);\n\n        Gauge.builder(\"queue.active.jobs\", activeJobs, AtomicReference::get)\n            .description(\"Number of active jobs\")\n            .tag(\"queue\", \"jobs\")\n            .register(registry);\n\n        Gauge.builder(\"queue.dead.letter\", deadLetterCount, AtomicReference::get)\n            .description(\"Messages in dead letter queue\")\n            .tag(\"queue\", \"dlq\")\n            .register(registry);\n    }\n\n    public void setPendingOrders(double count) {\n        pendingOrders.set(count);\n    }\n\n    public void setActiveJobs(double count) {\n        activeJobs.set(count);\n    }\n\n    public void setDeadLetterCount(double count) {\n        deadLetterCount.set(count);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-timer",
      children: "2.5 Timer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Timer;\nimport org.springframework.stereotype.Component;\n\nimport java.time.Duration;\nimport java.util.concurrent.TimeUnit;\n\n@Component\npublic class PerformanceTimer {\n\n    private final Timer orderProcessing;\n    private final Timer paymentProcessing;\n    private final Timer shippingCalculation;\n\n    public PerformanceTimer(MeterRegistry registry) {\n        this.orderProcessing = Timer.builder(\"order.processing.time\")\n            .description(\"Time taken to process an order\")\n            .tags(\"stage\", \"total\")\n            .publishPercentiles(0.50, 0.75, 0.90, 0.95, 0.99)\n            .publishPercentileHistogram()\n            .sla(Duration.ofMillis(100), Duration.ofMillis(500),\n                 Duration.ofSeconds(1), Duration.ofSeconds(2))\n            .minimumExpectedValue(Duration.ofMillis(1))\n            .maximumExpectedValue(Duration.ofSeconds(30))\n            .register(registry);\n\n        this.paymentProcessing = Timer.builder(\"order.payment.time\")\n            .description(\"Time taken to process payment\")\n            .tags(\"stage\", \"payment\")\n            .publishPercentiles(0.95, 0.99)\n            .register(registry);\n\n        this.shippingCalculation = Timer.builder(\"order.shipping.time\")\n            .description(\"Time taken to calculate shipping\")\n            .tags(\"stage\", \"shipping\")\n            .register(registry);\n    }\n\n    public <T> T measureOrderProcessing(CallableWithException<T> callable) {\n        return orderProcessing.record(() -> {\n            try {\n                return callable.call();\n            } catch (Exception e) {\n                throw new RuntimeException(e);\n            }\n        });\n    }\n\n    public void measurePaymentProcessing(Runnable runnable) {\n        paymentProcessing.record(runnable);\n    }\n\n    public void recordShippingCalculation(long millis) {\n        shippingCalculation.record(millis, TimeUnit.MILLISECONDS);\n    }\n\n    @FunctionalInterface\n    public interface CallableWithException<T> {\n        T call() throws Exception;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-distributionsummary",
      children: "2.6 DistributionSummary"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.DistributionSummary;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class OrderValueSummary {\n\n    private final DistributionSummary orderValue;\n    private final DistributionSummary itemsPerOrder;\n    private final DistributionSummary discountAmount;\n\n    public OrderValueSummary(MeterRegistry registry) {\n        this.orderValue = DistributionSummary.builder(\"order.value\")\n            .description(\"Distribution of order values\")\n            .baseUnit(\"dollars\")\n            .tags(\"currency\", \"USD\")\n            .publishPercentiles(0.50, 0.75, 0.90, 0.95, 0.99)\n            .publishPercentileHistogram()\n            .sla(10.0, 25.0, 50.0, 100.0, 250.0, 500.0)\n            .minimumExpectedValue(1.0)\n            .maximumExpectedValue(10000.0)\n            .register(registry);\n\n        this.itemsPerOrder = DistributionSummary.builder(\"order.items\")\n            .description(\"Number of items per order\")\n            .baseUnit(\"items\")\n            .publishPercentiles(0.50, 0.75, 0.90, 0.95, 0.99)\n            .register(registry);\n\n        this.discountAmount = DistributionSummary.builder(\"order.discount\")\n            .description(\"Discount amount per order\")\n            .baseUnit(\"dollars\")\n            .register(registry);\n    }\n\n    public void recordOrderValue(double amount) {\n        orderValue.record(amount);\n    }\n\n    public void recordItemsCount(int count) {\n        itemsPerOrder.record(count);\n    }\n\n    public void recordDiscount(double discount) {\n        discountAmount.record(discount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-longtasktimer",
      children: "2.7 LongTaskTimer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.LongTaskTimer;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.springframework.stereotype.Component;\n\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n@Component\npublic class BatchProcessorTimer {\n\n    private final LongTaskTimer batchProcessing;\n    private final ConcurrentHashMap<String, LongTaskTimer.Sample> activeSamples = new ConcurrentHashMap<>();\n    private final AtomicInteger activeBatches = new AtomicInteger(0);\n\n    public BatchProcessorTimer(MeterRegistry registry) {\n        this.batchProcessing = LongTaskTimer.builder(\"batch.processing\")\n            .description(\"Long-running batch processing tasks\")\n            .tags(\"type\", \"data-sync\")\n            .register(registry);\n    }\n\n    public String startBatch(String batchId) {\n        LongTaskTimer.Sample sample = LongTaskTimer.Sample.start(batchProcessing);\n        activeSamples.put(batchId, sample);\n        activeBatches.incrementAndGet();\n        return batchId;\n    }\n\n    public void stopBatch(String batchId) {\n        LongTaskTimer.Sample sample = activeSamples.remove(batchId);\n        if (sample != null) {\n            sample.stop();\n            activeBatches.decrementAndGet();\n        }\n    }\n\n    public int getActiveBatches() {\n        return activeBatches.get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-functioncounter-and-functiontimer",
      children: "2.8 FunctionCounter and FunctionTimer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.FunctionCounter;\nimport io.micrometer.core.instrument.FunctionTimer;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.springframework.stereotype.Component;\n\nimport java.util.concurrent.TimeUnit;\nimport java.util.concurrent.atomic.AtomicLong;\nimport java.util.function.Supplier;\n\n@Component\npublic class FunctionMetrics {\n\n    private final AtomicLong totalOrders = new AtomicLong(0);\n    private final AtomicLong totalProcessingTime = new AtomicLong(0);\n\n    public FunctionMetrics(MeterRegistry registry) {\n        FunctionCounter.builder(\"orders.total.fn\", totalOrders, AtomicLong::get)\n            .description(\"Total number of orders (function counter)\")\n            .register(registry);\n\n        FunctionTimer.builder(\"orders.processing.fn\", totalOrders,\n                AtomicLong::get, totalProcessingTime, AtomicLong::get,\n                TimeUnit.MILLISECONDS)\n            .description(\"Order processing time (function timer)\")\n            .register(registry);\n    }\n\n    public void recordOrder(long processingTimeMs) {\n        totalOrders.incrementAndGet();\n        totalProcessingTime.addAndGet(processingTimeMs);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-counted-and-timed-annotations",
      children: "2.9 @Counted and @Timed Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.service;\n\nimport io.micrometer.core.annotation.Counted;\nimport io.micrometer.core.annotation.Timed;\nimport org.springframework.stereotype.Service;\n\nimport java.util.concurrent.TimeUnit;\n\n@Service\npublic class OrderService {\n\n    @Counted(value = \"orders.created.counted\", extraTags = {\"source\", \"web\"})\n    public Order createOrder(OrderRequest request) {\n        // Creates an order → counter incremented automatically\n        return processOrderCreation(request);\n    }\n\n    @Timed(value = \"orders.payment.timed\", percentiles = {0.50, 0.95, 0.99},\n           extraTags = {\"payment-type\", \"credit-card\"})\n    public PaymentResult processPayment(PaymentRequest request) {\n        // Payment processing timed automatically\n        return executePayment(request);\n    }\n\n    @Timed(value = \"orders.fulfillment.timed\", longTask = true,\n           description = \"Time to fulfill an order\")\n    public void fulfillOrder(String orderId) {\n        // Long-running task → shows active tasks count\n        executeFulfillment(orderId);\n    }\n\n    @Counted(value = \"orders.cancelled.counted\", recordFailuresOnly = true,\n             extraTags = {\"reason\", \"timeout\"})\n    public void cancelOrder(String orderId) {\n        // Counts only when this method throws an exception\n        executeCancellation(orderId);\n    }\n\n    // Placeholder methods\n    private Order processOrderCreation(OrderRequest req) { return new Order(); }\n    private PaymentResult executePayment(PaymentRequest req) { return new PaymentResult(); }\n    private void executeFulfillment(String id) {}\n    private void executeCancellation(String id) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "210-custom-tags",
      children: "2.10 Custom Tags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Tag;\nimport io.micrometer.core.instrument.Tags;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Arrays;\nimport java.util.List;\n\n@Component\npublic class TagManager {\n\n    private final MeterRegistry meterRegistry;\n\n    public TagManager(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    public void recordMetricWithTags(String name, double value, String... keyValuePairs) {\n        List<Tag> tags = Tag.of(\"source\", \"application\")\n            .and(Arrays.asList(\n                Tag.of(\"service\", \"order-service\"),\n                Tag.of(\"version\", \"1.0.0\")\n            ));\n\n        if (keyValuePairs.length > 0) {\n            tags = Tags.concat(tags, keyValuePairs);\n        }\n\n        meterRegistry.gauge(name, tags, value);\n    }\n\n    public void incrementOrderMetric(String status, String paymentMethod, String region) {\n        meterRegistry.counter(\"orders.metrics\",\n            Tags.of(\n                Tag.of(\"status\", status),\n                Tag.of(\"payment_method\", paymentMethod),\n                Tag.of(\"region\", region),\n                Tag.of(\"environment\", System.getenv(\"ENVIRONMENT\") != null ?\n                    System.getenv(\"ENVIRONMENT\") : \"unknown\")\n            )\n        ).increment();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-global-tags-via-meterfilter",
      children: "2.11 Global Tags via MeterFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.Meter;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Tag;\nimport io.micrometer.core.instrument.Tags;\nimport io.micrometer.core.instrument.config.MeterFilter;\nimport jakarta.annotation.PostConstruct;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Arrays;\n\n@Component\npublic class GlobalMetricsConfiguration {\n\n    private final MeterRegistry meterRegistry;\n\n    public GlobalMetricsConfiguration(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    @PostConstruct\n    public void configureGlobalTags() {\n        meterRegistry.config()\n            .commonTags(\n                Tag.of(\"application\", \"order-service\"),\n                Tag.of(\"environment\", System.getenv(\"ENVIRONMENT\") != null ?\n                    System.getenv(\"ENVIRONMENT\") : \"unknown\"),\n                Tag.of(\"region\", System.getenv(\"REGION\") != null ?\n                    System.getenv(\"REGION\") : \"local\"),\n                Tag.of(\"hostname\", System.getenv(\"HOSTNAME\") != null ?\n                    System.getenv(\"HOSTNAME\") : \"localhost\")\n            )\n            .meterFilter(new MeterFilter() {\n                @Override\n                public Meter.Id map(Meter.Id id) {\n                    if (id.getName().startsWith(\"jvm.\") || id.getName().startsWith(\"process.\")) {\n                        return id.withName(\"jvm.\" + id.getName());\n                    }\n                    if (id.getName().contains(\"secret\") || id.getName().contains(\"password\")) {\n                        return null; // Deny meter registration\n                    }\n                    return id;\n                }\n\n                @Override\n                public MeterFilterReply accept(Meter.Id id) {\n                    if (id.getName().startsWith(\"$\")) {\n                        return MeterFilterReply.DENY;\n                    }\n                    return MeterFilterReply.NEUTRAL;\n                }\n\n                @Override\n                public DistributionStatisticConfig configure(\n                        Meter.Id id, DistributionStatisticConfig config) {\n                    if (id.getName().equals(\"http.server.requests\")) {\n                        return DistributionStatisticConfig.builder()\n                            .percentilesHistogram(true)\n                            .percentiles(0.50, 0.75, 0.90, 0.95, 0.99, 0.999)\n                            .sla(10, 50, 100, 200, 500, 1000, 2000)\n                            .minimumExpectedValue(1L)\n                            .maximumExpectedValue(30_000L)\n                            .build()\n                            .merge(config);\n                    }\n                    return config;\n                }\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-custom-meterregistry-binder",
      children: "2.12 Custom MeterRegistry Binder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.Gauge;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.binder.MeterBinder;\nimport org.springframework.stereotype.Component;\n\nimport java.lang.management.ManagementFactory;\nimport java.lang.management.OperatingSystemMXBean;\nimport java.lang.management.ThreadMXBean;\n\n@Component\npublic class CustomSystemMetrics implements MeterBinder {\n\n    private final OperatingSystemMXBean osBean;\n    private final ThreadMXBean threadBean;\n\n    public CustomSystemMetrics() {\n        this.osBean = ManagementFactory.getOperatingSystemMXBean();\n        this.threadBean = ManagementFactory.getThreadMXBean();\n    }\n\n    @Override\n    public void bindTo(MeterRegistry registry) {\n        Gauge.builder(\"system.open.file.descriptors\", osBean,\n                bean -> {\n                    if (bean instanceof com.sun.management.UnixOperatingSystemMXBean unixBean) {\n                        return unixBean.getOpenFileDescriptorCount();\n                    }\n                    return Double.NaN;\n                })\n            .description(\"Open file descriptors\")\n            .register(registry);\n\n        Gauge.builder(\"system.max.file.descriptors\", osBean,\n                bean -> {\n                    if (bean instanceof com.sun.management.UnixOperatingSystemMXBean unixBean) {\n                        return unixBean.getMaxFileDescriptorCount();\n                    }\n                    return Double.NaN;\n                })\n            .description(\"Maximum file descriptors\")\n            .register(registry);\n\n        Gauge.builder(\"system.process.cpu.load\", osBean,\n                bean -> {\n                    try {\n                        return bean.getProcessCpuLoad();\n                    } catch (Exception e) {\n                        return Double.NaN;\n                    }\n                })\n            .description(\"Process CPU load\")\n            .register(registry);\n\n        Gauge.builder(\"system.system.cpu.load\", osBean,\n                bean -> {\n                    try {\n                        return bean.getSystemCpuLoad();\n                    } catch (Exception e) {\n                        return Double.NaN;\n                    }\n                })\n            .description(\"System CPU load\")\n            .register(registry);\n\n        Gauge.builder(\"system.thread.count\", threadBean,\n                ThreadMXBean::getThreadCount)\n            .description(\"Current thread count\")\n            .register(registry);\n\n        Gauge.builder(\"system.daemon.thread.count\", threadBean,\n                ThreadMXBean::getDaemonThreadCount)\n            .description(\"Daemon thread count\")\n            .register(registry);\n\n        Gauge.builder(\"system.peak.thread.count\", threadBean,\n                ThreadMXBean::getPeakThreadCount)\n            .description(\"Peak thread count\")\n            .register(registry);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-observation-api",
      children: "2.13 @Observation API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.observation;\n\nimport io.micrometer.observation.Observation;\nimport io.micrometer.observation.ObservationRegistry;\nimport io.micrometer.observation.annotation.Observed;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class ObservedOrderService {\n\n    private final ObservationRegistry observationRegistry;\n    private final OrderRepository orderRepository;\n\n    public ObservedOrderService(ObservationRegistry observationRegistry,\n                                 OrderRepository orderRepository) {\n        this.observationRegistry = observationRegistry;\n        this.orderRepository = orderRepository;\n    }\n\n    @Observed(name = \"order.create\",\n              contextualName = \"create-order\",\n              lowCardinalityKeyValues = {\"operation\", \"create\"})\n    public Order createOrder(OrderRequest request) {\n        return orderRepository.save(request.toOrder());\n    }\n\n    @Observed(name = \"order.process\",\n              contextualName = \"process-order\")\n    public OrderProcessingResult processOrder(String orderId) {\n        return Observation.createNotStarted(\"order.process.internal\", observationRegistry)\n            .lowCardinalityKeyValue(\"orderId\", orderId)\n            .highCardinalityKeyValue(\"requestHash\", Integer.toHexString(orderId.hashCode()))\n            .observe(() -> {\n                Order order = orderRepository.findById(orderId)\n                    .orElseThrow(() -> new OrderNotFoundException(orderId));\n                return processInternal(order);\n            });\n    }\n\n    @Observed(name = \"order.fulfill\",\n              contextualName = \"fulfill-order\")\n    public void fulfillOrder(String orderId) {\n        Observation observation = Observation.createNotStarted(\"order.fulfill.events\",\n            observationRegistry)\n            .lowCardinalityKeyValue(\"orderId\", orderId);\n\n        try (Observation.Scope scope = observation.openScope()) {\n            observation.event(Observation.Event.of(\"fulfillment.started\",\n                \"Fulfillment process has started\"));\n            executeFulfillment(orderId);\n            observation.event(Observation.Event.of(\"fulfillment.completed\",\n                \"Fulfillment process completed\"));\n        } catch (Exception e) {\n            observation.error(e);\n            throw e;\n        } finally {\n            observation.stop();\n        }\n    }\n\n    private OrderProcessingResult processInternal(Order order) {\n        return new OrderProcessingResult(order.getId(), \"PROCESSED\");\n    }\n\n    private void executeFulfillment(String orderId) {\n        // Fulfillment logic\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "214-observationhandler",
      children: "2.14 ObservationHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.observation;\n\nimport io.micrometer.observation.Observation;\nimport io.micrometer.observation.ObservationHandler;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class CustomObservationHandler implements ObservationHandler<Observation.Context> {\n\n    private static final Logger log = LoggerFactory.getLogger(CustomObservationHandler.class);\n\n    @Override\n    public void onStart(Observation.Context context) {\n        log.debug(\"Observation started: name={}, contextualName={}\",\n            context.getName(), context.getContextualName());\n    }\n\n    @Override\n    public void onStop(Observation.Context context) {\n        log.debug(\"Observation stopped: name={}, duration={}ms\",\n            context.getName(),\n            context.getTime() != null ? context.getTime().toMillis() : 0);\n    }\n\n    @Override\n    public void onError(Observation.Context context) {\n        log.error(\"Observation error: name={}, error={}\",\n            context.getName(),\n            context.getError().map(Object::toString).orElse(\"unknown\"));\n    }\n\n    @Override\n    public void onScopeOpened(Observation.Context context) {\n        log.trace(\"Observation scope opened: {}\", context.getName());\n    }\n\n    @Override\n    public void onScopeClosed(Observation.Context context) {\n        log.trace(\"Observation scope closed: {}\", context.getName());\n    }\n\n    @Override\n    public void onEvent(Observation.Event event, Observation.Context context) {\n        log.info(\"Observation event: name={}, event={}\", context.getName(), event.getName());\n    }\n\n    @Override\n    public boolean supportsContext(Observation.Context context) {\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-prometheus",
      children: "3. Prometheus"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-prometheus-endpoint",
      children: "3.1 Prometheus Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      exposure:\n        include: prometheus,health,metrics\n  endpoint:\n    prometheus:\n      enabled: true\n  metrics:\n    export:\n      prometheus:\n        enabled: true\n        step: 30s\n        descriptions: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify the endpoint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl http://localhost:8080/actuator/prometheus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sample output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# HELP jvm_memory_used_bytes The amount of used memory\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n# TYPE jvm_memory_used_bytes gauge\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\njvm_memory_used_bytes{area=\"heap\",id=\"G1 Survivor Space\",} 2.097152E7\njvm_memory_used_bytes{area=\"heap\",id=\"G1 Old Gen\",} 3.22122568E8\n\n# HELP http_server_requests_seconds  \n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n# TYPE http_server_requests_seconds summary\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nhttp_server_requests_seconds_count{error=\"none\",method=\"GET\",status=\"200\",uri=\"/actuator/health\",} 125.0\nhttp_server_requests_seconds_sum{error=\"none\",method=\"GET\",status=\"200\",uri=\"/actuator/health\",} 3.456\n\n# HELP orders_created_total Total number of orders created\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n# TYPE orders_created_total counter\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\norders_created_total{type=\"standard\",} 42.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-prometheus-configuration",
      children: "3.2 Prometheus Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# prometheus.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nglobal:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n  scrape_timeout: 10s\n\nscrape_configs:\n  - job_name: 'spring-boot-apps'\n    metrics_path: '/actuator/prometheus'\n    scheme: http\n    static_configs:\n      - targets:\n          - 'app:8080'\n          - 'app:8081'\n        labels:\n          application: 'order-service'\n          environment: 'production'\n\n  - job_name: 'spring-boot-kubernetes'\n    kubernetes_sd_configs:\n      - role: pod\n    relabel_configs:\n      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]\n        action: keep\n        regex: true\n      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]\n        action: replace\n        target_label: __metrics_path__\n        regex: (.+)\n      - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]\n        action: replace\n        regex: ([^:]+)(?::\\d+)?;(\\d+)\n        replacement: $1:$2\n        target_label: __address__\n      - source_labels: [__meta_kubernetes_pod_label_app]\n        target_label: app\n      - source_labels: [__meta_kubernetes_namespace]\n        target_label: namespace\n      - source_labels: [__meta_kubernetes_pod_name]\n        target_label: pod\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-docker-compose-with-prometheus",
      children: "3.3 Docker Compose with Prometheus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"3.9\"\nservices:\n  app:\n    image: myapp:latest\n    ports:\n      - \"8080:8080\"\n    environment:\n      - MANAGEMENT_ENDPOINTS_WEB_EXPOSURE_INCLUDE=prometheus,health,metrics\n      - MANAGEMENT_METRICS_EXPORT_PROMETHEUS_ENABLED=true\n\n  prometheus:\n    image: prom/prometheus:v2.48.0\n    volumes:\n      - ./prometheus.yml:/etc/prometheus/prometheus.yml\n      - prometheus-data:/prometheus\n    command:\n      - \"--config.file=/etc/prometheus/prometheus.yml\"\n      - \"--storage.tsdb.path=/prometheus\"\n      - \"--web.console.libraries=/etc/prometheus/console_libraries\"\n      - \"--web.console.templates=/etc/prometheus/consoles\"\n      - \"--web.enable-lifecycle\"\n    ports:\n      - \"9090:9090\"\n    depends_on:\n      - app\n\nvolumes:\n  prometheus-data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-prometheus-query-examples",
      children: "3.4 Prometheus Query Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-promql",
        children: "# JVM heap usage\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\njvm_memory_used_bytes{area=\"heap\"}\n\n# HTTP request rate (last 5 minutes)\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nrate(http_server_requests_seconds_count[5m])\n\n# 95th percentile response time\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nhistogram_quantile(0.95,\n  sum(rate(http_server_requests_seconds_bucket[5m])) by (le))\n\n# Error rate (5xx responses)\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nsum(rate(http_server_requests_seconds_count{status=~\"5..\"}[5m])) /\nsum(rate(http_server_requests_seconds_count[5m])) * 100\n\n# Order creation rate\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nrate(orders_created_total[5m])\n\n# Available memory percentage\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n(jvm_memory_max_bytes{area=\"heap\"} - jvm_memory_used_bytes{area=\"heap\"}) /\njvm_memory_max_bytes{area=\"heap\"} * 100\n\n# Application up/down\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nup{job=\"spring-boot-apps\"}\n\n# GC pause time rate\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nrate(jvm_gc_pause_seconds_sum[5m])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-grafana-dashboards",
      children: "4. Grafana Dashboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-docker-compose-with-grafana",
      children: "4.1 Docker Compose with Grafana"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"3.9\"\nservices:\n  grafana:\n    image: grafana/grafana:10.2.0\n    volumes:\n      - ./grafana/datasources:/etc/grafana/provisioning/datasources\n      - ./grafana/dashboards:/etc/grafana/provisioning/dashboards\n      - grafana-data:/var/lib/grafana\n    environment:\n      - GF_SECURITY_ADMIN_PASSWORD=admin\n      - GF_INSTALL_PLUGINS=grafana-piechart-panel\n    ports:\n      - \"3000:3000\"\n\nvolumes:\n  grafana-data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-grafana-data-source-provisioning",
      children: "4.2 Grafana Data Source Provisioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# grafana/datasources/datasources.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\napiVersion: 1\n\ndatasources:\n  - name: Prometheus\n    type: prometheus\n    access: proxy\n    url: http://prometheus:9090\n    isDefault: true\n    editable: true\n    jsonData:\n      timeInterval: \"15s\"\n      queryTimeout: \"30s\"\n      httpMethod: \"POST\"\n      manageAlerts: true\n\n  - name: Loki\n    type: loki\n    access: proxy\n    url: http://loki:3100\n    jsonData:\n      maxLines: 1000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-grafana-dashboard-provisioning",
      children: "4.3 Grafana Dashboard Provisioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# grafana/dashboards/dashboards.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\napiVersion: 1\n\nproviders:\n  - name: \"Spring Boot\"\n    orgId: 1\n    folder: \"Spring Boot\"\n    type: file\n    disableDeletion: false\n    updateIntervalSeconds: 30\n    allowUiUpdates: true\n    options:\n      path: /etc/grafana/provisioning/dashboards\n      foldersFromFilesStructure: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-jvm-dashboard-json-model",
      children: "4.4 JVM Dashboard JSON Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"title\": \"JVM (Micrometer)\",\n  \"uid\": \"jvm-micrometer\",\n  \"version\": 1,\n  \"panels\": [\n    {\n      \"title\": \"Heap Memory Usage\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"jvm_memory_used_bytes{area=\\\"heap\\\"}\",\n          \"legendFormat\": \"Used\"\n        },\n        {\n          \"expr\": \"jvm_memory_max_bytes{area=\\\"heap\\\"}\",\n          \"legendFormat\": \"Max\"\n        },\n        {\n          \"expr\": \"jvm_memory_committed_bytes{area=\\\"heap\\\"}\",\n          \"legendFormat\": \"Committed\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"bytes\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 0, \"y\": 0}\n    },\n    {\n      \"title\": \"Non-Heap Memory\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"jvm_memory_used_bytes{area=\\\"nonheap\\\"}\",\n          \"legendFormat\": \"{{id}}\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"bytes\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 12, \"y\": 0}\n    },\n    {\n      \"title\": \"GC Pause Time\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"rate(jvm_gc_pause_seconds_sum[5m])\",\n          \"legendFormat\": \"{{action}} {{cause}}\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"s\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 0, \"y\": 8}\n    },\n    {\n      \"title\": \"GC Count\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"rate(jvm_gc_pause_seconds_count[5m])\",\n          \"legendFormat\": \"{{gc}}\"\n        }\n      ],\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 12, \"y\": 8}\n    },\n    {\n      \"title\": \"Thread States\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"jvm_threads_states_threads\",\n          \"legendFormat\": \"{{state}}\"\n        }\n      ],\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 0, \"y\": 16}\n    },\n    {\n      \"title\": \"Class Loading\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"jvm_classes_loaded_classes\",\n          \"legendFormat\": \"Loaded\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"short\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 12, \"y\": 16}\n    },\n    {\n      \"title\": \"CPU Usage\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"system_cpu_usage\",\n          \"legendFormat\": \"System\"\n        },\n        {\n          \"expr\": \"process_cpu_usage\",\n          \"legendFormat\": \"Process\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"percentunit\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 0, \"y\": 24}\n    },\n    {\n      \"title\": \"File Descriptors\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"process_files_open_files\",\n          \"legendFormat\": \"Open\"\n        },\n        {\n          \"expr\": \"process_files_max_files\",\n          \"legendFormat\": \"Max\"\n        }\n      ],\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 12, \"y\": 24}\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-spring-boot-dashboard",
      children: "4.5 Spring Boot Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"title\": \"Spring Boot HTTP\",\n  \"uid\": \"spring-boot-http\",\n  \"version\": 1,\n  \"panels\": [\n    {\n      \"title\": \"HTTP Request Rate\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"sum(rate(http_server_requests_seconds_count[5m]))\",\n          \"legendFormat\": \"All requests\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"reqps\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 0, \"y\": 0}\n    },\n    {\n      \"title\": \"HTTP Error Rate\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"sum(rate(http_server_requests_seconds_count{status=~\\\"5..\\\"}[5m])) / sum(rate(http_server_requests_seconds_count[5m])) * 100\",\n          \"legendFormat\": \"5xx %\"\n        },\n        {\n          \"expr\": \"sum(rate(http_server_requests_seconds_count{status=~\\\"4..\\\"}[5m])) / sum(rate(http_server_requests_seconds_count[5m])) * 100\",\n          \"legendFormat\": \"4xx %\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"percent\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 12, \"y\": 0}\n    },\n    {\n      \"title\": \"P95 Response Time by Endpoint\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"histogram_quantile(0.95, sum(rate(http_server_requests_seconds_bucket[5m])) by (le, uri, method))\",\n          \"legendFormat\": \"{{method}} {{uri}}\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"s\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 24, \"x\": 0, \"y\": 8}\n    },\n    {\n      \"title\": \"Response Time Heatmap\",\n      \"type\": \"heatmap\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"sum(increase(http_server_requests_seconds_bucket[5m])) by (le)\",\n          \"format\": \"heatmap\",\n          \"legendFormat\": \"{{le}}\"\n        }\n      ],\n      \"gridPos\": {\"h\": 10, \"w\": 12, \"x\": 0, \"y\": 16}\n    },\n    {\n      \"title\": \"Requests by Status\",\n      \"type\": \"piechart\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"sum(http_server_requests_seconds_count) by (status)\",\n          \"legendFormat\": \"{{status}}\"\n        }\n      ],\n      \"gridPos\": {\"h\": 10, \"w\": 12, \"x\": 12, \"y\": 16}\n    },\n    {\n      \"title\": \"Active Requests\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"tomcat_threads_busy_threads{pool=\\\"http-nio-8080\\\"}\",\n          \"legendFormat\": \"Busy\"\n        },\n        {\n          \"expr\": \"tomcat_threads_config_max_threads{pool=\\\"http-nio-8080\\\"}\",\n          \"legendFormat\": \"Max\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"short\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 0, \"y\": 26}\n    },\n    {\n      \"title\": \"Data Source Pool\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"hikaricp_connections_active\",\n          \"legendFormat\": \"Active\"\n        },\n        {\n          \"expr\": \"hikaricp_connections_idle\",\n          \"legendFormat\": \"Idle\"\n        },\n        {\n          \"expr\": \"hikaricp_connections_pending\",\n          \"legendFormat\": \"Pending\"\n        },\n        {\n          \"expr\": \"hikaricp_connections_max\",\n          \"legendFormat\": \"Max\"\n        }\n      ],\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 12, \"y\": 26}\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-custom-business-metrics-dashboard",
      children: "4.6 Custom Business Metrics Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"title\": \"Business Metrics\",\n  \"uid\": \"business-metrics\",\n  \"version\": 1,\n  \"panels\": [\n    {\n      \"title\": \"Order Creation Rate\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"rate(orders_created_total[5m])\",\n          \"legendFormat\": \"Orders/s\"\n        }\n      ],\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 0, \"y\": 0}\n    },\n    {\n      \"title\": \"Order Value Distribution (P50, P95, P99)\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"order_value\",\n          \"legendFormat\": \"Order Value\"\n        }\n      ],\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 12, \"y\": 0}\n    },\n    {\n      \"title\": \"Payment Processing Time\",\n      \"type\": \"timeseries\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"rate(order_payment_time_seconds_sum[5m]) / rate(order_payment_time_seconds_count[5m])\",\n          \"legendFormat\": \"Avg payment time\"\n        }\n      ],\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"unit\": \"s\"\n        }\n      },\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 0, \"y\": 8}\n    },\n    {\n      \"title\": \"Order Status Breakdown\",\n      \"type\": \"stat\",\n      \"datasource\": \"Prometheus\",\n      \"targets\": [\n        {\n          \"expr\": \"orders_created_total\",\n          \"legendFormat\": \"Created\"\n        },\n        {\n          \"expr\": \"orders_shipped_total\",\n          \"legendFormat\": \"Shipped\"\n        },\n        {\n          \"expr\": \"orders_cancelled_total\",\n          \"legendFormat\": \"Cancelled\"\n        }\n      ],\n      \"gridPos\": {\"h\": 8, \"w\": 12, \"x\": 12, \"y\": 8}\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-grafana-alerting-rules",
      children: "4.7 Grafana Alerting Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"title\": \"High Error Rate\",\n  \"condition\": \"C\",\n  \"data\": [\n    {\n      \"refId\": \"A\",\n      \"relativeTimeRange\": {\"from\": 300, \"to\": 0},\n      \"datasourceUid\": \"prometheus\",\n      \"model\": {\n        \"expr\": \"sum(rate(http_server_requests_seconds_count{status=~\\\"5..\\\"}[5m])) / sum(rate(http_server_requests_seconds_count[5m])) * 100\",\n        \"intervalMs\": 15000,\n        \"maxDataPoints\": 100\n      }\n    }\n  ],\n  \"noDataState\": \"NoData\",\n  \"execErrState\": \"Alerting\",\n  \"for\": \"5m\",\n  \"annotations\": {\n    \"summary\": \"High HTTP error rate: {{ $values.A.Value | humanizePercent }}\"\n  },\n  \"labels\": {\n    \"severity\": \"critical\",\n    \"team\": \"backend\"\n  },\n  \"isPaused\": false\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-custom-business-metrics",
      children: "5. Custom Business Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-business-metrics-service",
      children: "5.1 Business Metrics Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport io.micrometer.core.instrument.Counter;\nimport io.micrometer.core.instrument.DistributionSummary;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Timer;\nimport org.springframework.stereotype.Component;\n\nimport java.util.concurrent.TimeUnit;\nimport java.util.concurrent.atomic.AtomicLong;\n\n@Component\npublic class BusinessMetricsService {\n\n    private final Counter orderCreated;\n    private final Counter paymentSuccess;\n    private final Counter paymentFailure;\n    private final Counter orderShipped;\n    private final Counter orderCancelled;\n    private final Counter refundProcessed;\n\n    private final Timer orderFulfillmentTime;\n    private final Timer paymentProcessingTime;\n\n    private final DistributionSummary orderValue;\n    private final DistributionSummary itemsPerOrder;\n\n    private final AtomicLong activeOrders = new AtomicLong(0);\n    private final AtomicLong pendingRefunds = new AtomicLong(0);\n\n    public BusinessMetricsService(MeterRegistry registry) {\n        // Counters\n        this.orderCreated = Counter.builder(\"business.orders.created\")\n            .description(\"Total orders created\").register(registry);\n        this.paymentSuccess = Counter.builder(\"business.payments.success\")\n            .description(\"Successful payments\").register(registry);\n        this.paymentFailure = Counter.builder(\"business.payments.failure\")\n            .description(\"Failed payments\").register(registry);\n        this.orderShipped = Counter.builder(\"business.orders.shipped\")\n            .description(\"Orders shipped\").register(registry);\n        this.orderCancelled = Counter.builder(\"business.orders.cancelled\")\n            .description(\"Orders cancelled\").register(registry);\n        this.refundProcessed = Counter.builder(\"business.refunds.processed\")\n            .description(\"Refunds processed\").register(registry);\n\n        // Timers\n        this.orderFulfillmentTime = Timer.builder(\"business.order.fulfillment.time\")\n            .description(\"Time to fulfill order\")\n            .publishPercentiles(0.50, 0.95, 0.99)\n            .register(registry);\n        this.paymentProcessingTime = Timer.builder(\"business.payment.processing.time\")\n            .description(\"Payment processing time\")\n            .publishPercentiles(0.50, 0.95, 0.99)\n            .register(registry);\n\n        // Distribution Summaries\n        this.orderValue = DistributionSummary.builder(\"business.order.value\")\n            .description(\"Order value distribution\")\n            .baseUnit(\"dollars\")\n            .publishPercentiles(0.50, 0.75, 0.90, 0.95, 0.99)\n            .register(registry);\n        this.itemsPerOrder = DistributionSummary.builder(\"business.order.items\")\n            .description(\"Items per order\")\n            .register(registry);\n\n        // Gauges\n        registry.gauge(\"business.orders.active\", activeOrders, AtomicLong::get);\n        registry.gauge(\"business.refunds.pending\", pendingRefunds, AtomicLong::get);\n    }\n\n    public void recordOrderCreated(double value, int itemCount) {\n        orderCreated.increment();\n        orderValue.record(value);\n        itemsPerOrder.record(itemCount);\n        activeOrders.incrementAndGet();\n    }\n\n    public void recordPaymentSuccess(long processingTimeMs) {\n        paymentSuccess.increment();\n        paymentProcessingTime.record(processingTimeMs, TimeUnit.MILLISECONDS);\n    }\n\n    public void recordPaymentFailure() {\n        paymentFailure.increment();\n    }\n\n    public void recordOrderShipped() {\n        orderShipped.increment();\n        activeOrders.decrementAndGet();\n    }\n\n    public void recordOrderCancelled() {\n        orderCancelled.increment();\n        activeOrders.decrementAndGet();\n    }\n\n    public void recordRefundProcessed() {\n        refundProcessed.increment();\n        pendingRefunds.decrementAndGet();\n    }\n\n    public void recordRefundInitiated() {\n        pendingRefunds.incrementAndGet();\n    }\n\n    public <T> T measureFulfillment(CallableWithException<T> callable) {\n        return orderFulfillmentTime.record(() -> {\n            try {\n                return callable.call();\n            } catch (Exception e) {\n                throw new RuntimeException(e);\n            }\n        });\n    }\n\n    public void recordFulfillmentTime(long millis) {\n        orderFulfillmentTime.record(millis, TimeUnit.MILLISECONDS);\n    }\n\n    @FunctionalInterface\n    public interface CallableWithException<T> {\n        T call() throws Exception;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-using-business-metrics-in-services",
      children: "5.2 Using Business Metrics in Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.service;\n\nimport com.example.demo.metrics.BusinessMetricsService;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\n\n@Service\npublic class BusinessOrderService {\n\n    private final OrderRepository orderRepository;\n    private final PaymentGateway paymentGateway;\n    private final BusinessMetricsService metrics;\n\n    public BusinessOrderService(OrderRepository orderRepository,\n                                 PaymentGateway paymentGateway,\n                                 BusinessMetricsService metrics) {\n        this.orderRepository = orderRepository;\n        this.paymentGateway = paymentGateway;\n        this.metrics = metrics;\n    }\n\n    @Transactional\n    public Order placeOrder(OrderRequest request) {\n        long startTime = System.currentTimeMillis();\n\n        try {\n            Order order = new Order(request);\n\n            // Process payment\n            PaymentResult payment = paymentGateway.charge(\n                request.getPaymentDetails(), request.getTotal()\n            );\n            order.setPaymentId(payment.getTransactionId());\n            order.setStatus(OrderStatus.PAID);\n\n            orderRepository.save(order);\n\n            // Record metrics\n            long paymentTime = System.currentTimeMillis() - startTime;\n            metrics.recordOrderCreated(order.getTotal(), order.getItemCount());\n            metrics.recordPaymentSuccess(paymentTime);\n\n            return order;\n        } catch (PaymentException e) {\n            metrics.recordPaymentFailure();\n            throw e;\n        }\n    }\n\n    @Transactional\n    public void fulfillOrder(Long orderId) {\n        metrics.measureFulfillment(() -> {\n            Order order = orderRepository.findById(orderId)\n                .orElseThrow(() -> new OrderNotFoundException(orderId));\n\n            order.setStatus(OrderStatus.SHIPPED);\n            order.setShippedAt(java.time.Instant.now());\n            orderRepository.save(order);\n\n            metrics.recordOrderShipped();\n            return order;\n        });\n    }\n\n    @Transactional\n    public void cancelOrder(Long orderId) {\n        Order order = orderRepository.findById(orderId)\n            .orElseThrow(() -> new OrderNotFoundException(orderId));\n\n        if (order.getStatus() == OrderStatus.PAID) {\n            paymentGateway.refund(order.getPaymentId(), order.getTotal());\n            metrics.recordRefundInitiated();\n        }\n\n        order.setStatus(OrderStatus.CANCELLED);\n        orderRepository.save(order);\n        metrics.recordOrderCancelled();\n\n        if (order.getStatus() == OrderStatus.PAID) {\n            metrics.recordRefundProcessed();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-custom-micrometer-binder-for-database-pool",
      children: "5.3 Custom Micrometer Binder for Database Pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.metrics;\n\nimport com.zaxxer.hikari.HikariDataSource;\nimport com.zaxxer.hikari.HikariPoolMXBean;\nimport io.micrometer.core.instrument.Gauge;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.binder.MeterBinder;\nimport org.springframework.stereotype.Component;\n\nimport javax.sql.DataSource;\nimport java.util.concurrent.TimeUnit;\n\n@Component\npublic class DatabasePoolMetrics implements MeterBinder {\n\n    private final HikariDataSource dataSource;\n\n    public DatabasePoolMetrics(DataSource dataSource) {\n        this.dataSource = (HikariDataSource) dataSource;\n    }\n\n    @Override\n    public void bindTo(MeterRegistry registry) {\n        HikariPoolMXBean poolMXBean = dataSource.getHikariPoolMXBean();\n\n        if (poolMXBean == null) {\n            return;\n        }\n\n        Gauge.builder(\"db.pool.active.connections\", poolMXBean,\n                HikariPoolMXBean::getActiveConnections)\n            .description(\"Active database connections\")\n            .register(registry);\n\n        Gauge.builder(\"db.pool.idle.connections\", poolMXBean,\n                HikariPoolMXBean::getIdleConnections)\n            .description(\"Idle database connections\")\n            .register(registry);\n\n        Gauge.builder(\"db.pool.pending.threads\", poolMXBean,\n                HikariPoolMXBean::getThreadsAwaitingConnection)\n            .description(\"Threads awaiting connection\")\n            .register(registry);\n\n        Gauge.builder(\"db.pool.total.connections\", poolMXBean,\n                HikariPoolMXBean::getTotalConnections)\n            .description(\"Total database connections\")\n            .register(registry);\n\n        Gauge.builder(\"db.connections.timeout\", dataSource,\n                ds -> ds.getConnectionTimeout())\n            .description(\"Connection timeout in milliseconds\")\n            .baseUnit(\"milliseconds\")\n            .register(registry);\n\n        Gauge.builder(\"db.max.lifetime\", dataSource,\n                ds -> ds.getMaxLifetime())\n            .description(\"Maximum connection lifetime\")\n            .baseUnit(\"milliseconds\")\n            .register(registry);\n\n        Gauge.builder(\"db.max.pool.size\", dataSource,\n                ds -> ds.getMaximumPoolSize())\n            .description(\"Maximum pool size\")\n            .register(registry);\n\n        Gauge.builder(\"db.min.idle\", dataSource,\n                ds -> ds.getMinimumIdle())\n            .description(\"Minimum idle connections\")\n            .register(registry);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-structured-logging",
      children: "6. Structured Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-logstash-logback-encoder",
      children: "6.1 Logstash Logback Encoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>net.logstash.logback</groupId>\n    <artifactId>logstash-logback-encoder</artifactId>\n    <version>7.4</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-logback-springxml",
      children: "6.2 logback-spring.xml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<configuration>\n    <include resource=\"org/springframework/boot/logging/logback/defaults.xml\"/>\n\n    <springProperty name=\"application\" source=\"spring.application.name\" defaultValue=\"myapp\"/>\n    <springProperty name=\"environment\" source=\"spring.profiles.active\" defaultValue=\"default\"/>\n\n    <!-- Console JSON output -->\n    <appender name=\"JSON_CONSOLE\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <encoder class=\"net.logstash.logback.encoder.LogstashEncoder\">\n            <!-- Include MDC context -->\n            <includeMdc>true</includeMdc>\n            <!-- Custom fields -->\n            <customFields>{\n                \"application\": \"${application}\",\n                \"environment\": \"${environment}\",\n                \"hostname\": \"${HOSTNAME:-unknown}\"\n            }</customFields>\n            <!-- Exclude standard fields -->\n            <excludeMdcKeyName>resteasy.*</excludeMdcKeyName>\n            <fieldNames>\n                <timestamp>@timestamp</timestamp>\n                <version>[ignore]</version>\n                <levelValue>[ignore]</levelValue>\n            </fieldNames>\n            <!-- UUID for traceability -->\n            <jsonGeneratorDecorator>\n                com.example.demo.logging.MdcJsonGeneratorDecorator\n            </jsonGeneratorDecorator>\n        </encoder>\n    </appender>\n\n    <!-- Human-readable console (dev profile) -->\n    <appender name=\"CONSOLE\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} [%mdc] - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <!-- File appender for log aggregation -->\n    <appender name=\"JSON_FILE\" class=\"ch.qos.logback.core.rolling.RollingFileAppender\">\n        <file>/var/log/app/${application}.json</file>\n        <rollingPolicy class=\"ch.qos.logback.core.rolling.TimeBasedRollingPolicy\">\n            <fileNamePattern>/var/log/app/${application}.%d{yyyy-MM-dd}.%i.json</fileNamePattern>\n            <maxHistory>30</maxHistory>\n            <totalSizeCap>10GB</totalSizeCap>\n            <timeBasedFileNamingAndTriggeringPolicy class=\"ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP\">\n                <maxFileSize>100MB</maxFileSize>\n            </timeBasedFileNamingAndTriggeringPolicy>\n        </rollingPolicy>\n        <encoder class=\"net.logstash.logback.encoder.LogstashEncoder\">\n            <includeMdc>true</includeMdc>\n            <customFields>{\n                \"application\": \"${application}\",\n                \"environment\": \"${environment}\",\n                \"type\": \"application-log\"\n            }</customFields>\n        </encoder>\n    </appender>\n\n    <!-- Profile-based appender selection -->\n    <springProfile name=\"!dev &amp; !test\">\n        <root level=\"INFO\">\n            <appender-ref ref=\"JSON_CONSOLE\"/>\n            <appender-ref ref=\"JSON_FILE\"/>\n        </root>\n    </springProfile>\n\n    <springProfile name=\"dev,test\">\n        <root level=\"INFO\">\n            <appender-ref ref=\"CONSOLE\"/>\n        </root>\n    </springProfile>\n</configuration>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-json-log-output-example",
      children: "6.3 JSON Log Output Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"@timestamp\": \"2026-06-12T10:30:45.123Z\",\n  \"message\": \"Order created successfully\",\n  \"logger_name\": \"com.example.demo.service.OrderService\",\n  \"thread_name\": \"http-nio-8080-exec-3\",\n  \"level\": \"INFO\",\n  \"application\": \"order-service\",\n  \"environment\": \"production\",\n  \"hostname\": \"pod-abc123\",\n  \"trace_id\": \"abc123def456\",\n  \"span_id\": \"ghi789jkl012\",\n  \"correlation_id\": \"corr-987654\",\n  \"order_id\": \"ORD-12345\",\n  \"customer_id\": \"CUST-67890\",\n  \"order_total\": 149.99,\n  \"payment_method\": \"credit_card\",\n  \"items_count\": 3\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-mdc-filter-for-correlation-id",
      children: "6.4 MDC Filter for Correlation ID"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.logging;\n\nimport jakarta.servlet.Filter;\nimport jakarta.servlet.FilterChain;\nimport jakarta.servlet.ServletException;\nimport jakarta.servlet.ServletRequest;\nimport jakarta.servlet.ServletResponse;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.slf4j.MDC;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.stereotype.Component;\n\nimport java.io.IOException;\nimport java.util.UUID;\n\n@Component\n@Order(1)\npublic class CorrelationIdFilter implements Filter {\n\n    public static final String CORRELATION_ID_HEADER = \"X-Correlation-Id\";\n    public static final String CORRELATION_ID_MDC_KEY = \"correlation_id\";\n\n    @Override\n    public void doFilter(ServletRequest request, ServletResponse response,\n                         FilterChain chain) throws IOException, ServletException {\n\n        HttpServletRequest httpRequest = (HttpServletRequest) request;\n        HttpServletResponse httpResponse = (HttpServletResponse) response;\n\n        String correlationId = httpRequest.getHeader(CORRELATION_ID_HEADER);\n        if (correlationId == null || correlationId.isBlank()) {\n            correlationId = UUID.randomUUID().toString();\n        }\n\n        try {\n            MDC.put(CORRELATION_ID_MDC_KEY, correlationId);\n            MDC.put(\"request_uri\", httpRequest.getRequestURI());\n            MDC.put(\"request_method\", httpRequest.getMethod());\n            MDC.put(\"remote_addr\", httpRequest.getRemoteAddr());\n\n            httpResponse.setHeader(CORRELATION_ID_HEADER, correlationId);\n\n            chain.doFilter(request, response);\n        } finally {\n            MDC.clear();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-resttemplate-correlation-id-interceptor",
      children: "6.5 RestTemplate Correlation ID Interceptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.logging;\n\nimport org.slf4j.MDC;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.HttpRequest;\nimport org.springframework.http.client.ClientHttpRequestExecution;\nimport org.springframework.http.client.ClientHttpRequestInterceptor;\nimport org.springframework.http.client.ClientHttpResponse;\nimport org.springframework.stereotype.Component;\n\nimport java.io.IOException;\n\n@Component\npublic class CorrelationIdInterceptor implements ClientHttpRequestInterceptor {\n\n    @Override\n    public ClientHttpResponse intercept(HttpRequest request, byte[] body,\n                                         ClientHttpRequestExecution execution) throws IOException {\n\n        String correlationId = MDC.get(\"correlation_id\");\n        if (correlationId != null) {\n            request.getHeaders().add(\"X-Correlation-Id\", correlationId);\n        }\n\n        String traceId = MDC.get(\"trace_id\");\n        if (traceId != null) {\n            request.getHeaders().add(\"X-Trace-Id\", traceId);\n        }\n\n        return execution.execute(request, body);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-structured-logging-service",
      children: "6.6 Structured Logging Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.logging;\n\nimport net.logstash.logback.argument.StructuredArgument;\nimport net.logstash.logback.argument.StructuredArguments;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.slf4j.MDC;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class StructuredLogger {\n\n    private static final Logger log = LoggerFactory.getLogger(StructuredLogger.class);\n\n    public void logOrderCreated(String orderId, String customerId,\n                                 double total, int itemCount) {\n        StructuredArgument orderArgs = StructuredArguments.kv(\"order_id\", orderId);\n        StructuredArgument customerArgs = StructuredArguments.kv(\"customer_id\", customerId);\n        StructuredArgument totalArgs = StructuredArguments.kv(\"order_total\", total);\n        StructuredArgument itemsArgs = StructuredArguments.kv(\"items_count\", itemCount);\n\n        log.info(\"Order created successfully: order_id={}\", orderId,\n            orderArgs, customerArgs, totalArgs, itemsArgs);\n    }\n\n    public void logPaymentProcessing(String orderId, String paymentMethod,\n                                      double amount, String transactionId) {\n        try {\n            MDC.put(\"order_id\", orderId);\n            MDC.put(\"payment_method\", paymentMethod);\n            MDC.put(\"transaction_id\", transactionId);\n\n            log.info(\"Processing payment for order: amount={}\", amount,\n                StructuredArguments.kv(\"amount\", amount));\n        } finally {\n            MDC.remove(\"order_id\");\n            MDC.remove(\"payment_method\");\n            MDC.remove(\"transaction_id\");\n        }\n    }\n\n    public void logPaymentFailure(String orderId, String errorCode,\n                                   String errorMessage) {\n        log.error(\"Payment failed: order_id={}, error_code={}, error_message={}\",\n            orderId, errorCode, errorMessage,\n            StructuredArguments.kv(\"order_id\", orderId),\n            StructuredArguments.kv(\"error_code\", errorCode),\n            StructuredArguments.kv(\"error_message\", errorMessage));\n    }\n\n    public void logExternalServiceCall(String serviceName, String endpoint,\n                                        long durationMs, int statusCode) {\n        log.info(\"External service call: service={}, endpoint={}, duration_ms={}, status={}\",\n            serviceName, endpoint, durationMs, statusCode,\n            StructuredArguments.kv(\"external_service\", serviceName),\n            StructuredArguments.kv(\"endpoint\", endpoint),\n            StructuredArguments.kv(\"duration_ms\", durationMs),\n            StructuredArguments.kv(\"status_code\", statusCode));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-elkloki-log-aggregation",
      children: "7. ELK/Loki Log Aggregation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-elk-stack-filebeat--logstash--elasticsearch--kibana",
      children: "7.1 ELK Stack (Filebeat → Logstash → Elasticsearch → Kibana)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.elk.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nversion: \"3.9\"\n\nservices:\n  app:\n    image: myapp:latest\n    volumes:\n      - app-logs:/var/log/app\n    environment:\n      - LOG_FILE=/var/log/app/myapp.json\n\n  filebeat:\n    image: docker.elastic.co/beats/filebeat:8.11.0\n    user: root\n    volumes:\n      - ./filebeat.yml:/usr/share/filebeat/filebeat.yml:ro\n      - app-logs:/var/log/app:ro\n      - /var/lib/docker/containers:/var/lib/docker/containers:ro\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    depends_on:\n      - app\n      - logstash\n\n  logstash:\n    image: docker.elastic.co/logstash/logstash:8.11.0\n    volumes:\n      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf:ro\n    ports:\n      - \"5000:5000\"\n    environment:\n      - LS_JAVA_OPTS=-Xmx256m -Xms256m\n    depends_on:\n      - elasticsearch\n\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0\n    environment:\n      - discovery.type=single-node\n      - xpack.security.enabled=false\n      - ES_JAVA_OPTS=-Xms512m -Xmx512m\n    volumes:\n      - elasticsearch-data:/usr/share/elasticsearch/data\n    ports:\n      - \"9200:9200\"\n\n  kibana:\n    image: docker.elastic.co/kibana/kibana:8.11.0\n    environment:\n      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200\n    ports:\n      - \"5601:5601\"\n    depends_on:\n      - elasticsearch\n\nvolumes:\n  app-logs:\n  elasticsearch-data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-filebeat-configuration",
      children: "7.2 Filebeat Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# filebeat.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nfilebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /var/log/app/*.json\n    json:\n      keys_under_root: true\n      overwrite_keys: true\n      add_error_key: true\n    fields:\n      log_type: application\n    fields_under_root: true\n\n  - type: container\n    enabled: true\n    paths:\n      - /var/lib/docker/containers/*/*.log\n    json:\n      keys_under_root: true\n    processors:\n      - add_docker_metadata:\n          host: \"unix:///var/run/docker.sock\"\n\noutput.logstash:\n  hosts: [\"logstash:5000\"]\n  ssl.enabled: false\n\nlogging.level: warning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-logstash-configuration",
      children: "7.3 Logstash Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ruby",
        children: "# logstash.conf\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\ninput {\n  beats {\n    port => 5000\n  }\n}\n\nfilter {\n  if [log_type] == \"application\" {\n    json {\n      source => \"message\"\n      remove_field => [\"message\"]\n    }\n  }\n\n  if [docker] {\n    mutate {\n      add_field => {\n        \"container_name\" => \"%{[docker][container][name]}\"\n        \"container_id\" => \"%{[docker][container][id]}\"\n      }\n    }\n  }\n\n  date {\n    match => [\"@timestamp\", \"ISO8601\"]\n    target => \"@timestamp\"\n  }\n\n  mutate {\n    remove_field => [\"tags\", \"ecs\", \"host\"]\n  }\n}\n\noutput {\n  elasticsearch {\n    hosts => [\"http://elasticsearch:9200\"]\n    index => \"app-logs-%{+YYYY.MM.dd}\"\n    data_stream => false\n  }\n\n  stdout {\n    codec => rubydebug\n    workers => 1\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-loki-stack-promtail--loki--grafana",
      children: "7.4 Loki Stack (Promtail → Loki → Grafana)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.loki.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nversion: \"3.9\"\n\nservices:\n  app:\n    image: myapp:latest\n    volumes:\n      - app-logs:/var/log/app\n\n  promtail:\n    image: grafana/promtail:2.9.0\n    volumes:\n      - ./promtail.yml:/etc/promtail/config.yml:ro\n      - app-logs:/var/log/app:ro\n      - /var/lib/docker/containers:/var/lib/docker/containers:ro\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    command: -config.file=/etc/promtail/config.yml\n\n  loki:\n    image: grafana/loki:2.9.0\n    volumes:\n      - ./loki.yml:/etc/loki/config.yml:ro\n      - loki-data:/loki\n    ports:\n      - \"3100:3100\"\n    command: -config.file=/etc/loki/config.yml\n\n  grafana:\n    image: grafana/grafana:10.2.0\n    volumes:\n      - ./grafana/datasources:/etc/grafana/provisioning/datasources\n      - grafana-data:/var/lib/grafana\n    environment:\n      - GF_SECURITY_ADMIN_PASSWORD=admin\n    ports:\n      - \"3000:3000\"\n\nvolumes:\n  app-logs:\n  loki-data:\n  grafana-data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-promtail-configuration",
      children: "7.5 Promtail Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# promtail.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nserver:\n  http_listen_port: 9080\n  grpc_listen_port: 0\n\npositions:\n  filename: /tmp/positions.yaml\n\nclients:\n  - url: http://loki:3100/loki/api/v1/push\n\nscrape_configs:\n  - job_name: application-logs\n    static_configs:\n      - targets: [localhost]\n        labels:\n          job: myapp\n          __path__: /var/log/app/*.json\n    pipeline_stages:\n      - json:\n          expressions:\n            level: level\n            logger_name: logger_name\n            trace_id: trace_id\n            correlation_id: correlation_id\n            application: application\n            environment: environment\n      - labels:\n          level:\n          application:\n          environment:\n      - drop:\n          source: level\n          value: DEBUG\n\n  - job_name: docker-logs\n    pipeline_stages:\n      - docker: {}\n      - json:\n          expressions:\n            level: level\n            logger_name: logger_name\n            trace_id: trace_id\n      - labels:\n          level:\n    static_configs:\n      - targets: [localhost]\n        labels:\n          job: docker\n          __path__: /var/lib/docker/containers/*/*.log\n    journal:\n      json: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-loki-configuration",
      children: "7.6 Loki Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# loki.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nauth_enabled: false\n\nserver:\n  http_listen_port: 3100\n\ncommon:\n  path_prefix: /loki\n  replication_factor: 1\n  ring:\n    kvstore:\n      store: inmemory\n\nschema_config:\n  configs:\n    - from: 2024-01-01\n      store: boltdb-shipper\n      object_store: filesystem\n      schema: v12\n      index:\n        prefix: index_\n        period: 24h\n\nstorage_config:\n  boltdb_shipper:\n    active_index_directory: /loki/index\n    shared_store: filesystem\n  filesystem:\n    directory: /loki/chunks\n\ncompactor:\n  working_directory: /loki/compactor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-logql-queries",
      children: "7.7 LogQL Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-logql",
        children: "# All application logs\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n{job=\"myapp\"}\n\n# Errors only\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n{job=\"myapp\"} |= \"ERROR\"\n\n# Filter by level label\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n{job=\"myapp\", level=\"ERROR\"}\n\n# Search by correlation ID\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n{job=\"myapp\"} |= \"correlation_id=corr-987654\"\n\n# Search by trace ID\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n{job=\"myapp\"} |= \"trace_id=abc123def456\"\n\n# Rate of errors per minute\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nrate({job=\"myapp\", level=\"ERROR\"}[5m])\n\n# Filter by logger name\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n{job=\"myapp\"} | logger_name=\"com.example.demo.service.OrderService\"\n\n# JSON expression filter\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\n{job=\"myapp\"} | json | order_total > 100\n\n# Count log lines by level\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nsum by (level) (count_over_time({job=\"myapp\"}[1h]))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-slislosla",
      children: "8. SLI/SLO/SLA"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-definitions",
      children: "8.1 Definitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SLI"
            }), " (Service Level Indicator)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A quantifiable metric of service performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request latency, error rate, throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SLO"
            }), " (Service Level Objective)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target value/range for an SLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9% of requests complete in < 200ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SLA"
            }), " (Service Level Agreement)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contractual commitment to SLOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.95% uptime, with financial penalties"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-sli-implementation-with-micrometer",
      children: "8.2 SLI Implementation with Micrometer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.slo;\n\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Tags;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ServiceLevelIndicators {\n\n    private final MeterRegistry meterRegistry;\n\n    // SLI thresholds\n    private static final double LATENCY_SLO_MS = 200.0;\n    private static final double ERROR_BUDGET_RATIO = 0.001; // 99.9%\n\n    public ServiceLevelIndicators(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    public void recordRequestLatency(String endpoint, String method,\n                                      long durationMs, int statusCode) {\n        Tags tags = Tags.of(\n            \"endpoint\", endpoint,\n            \"method\", method,\n            \"status_class\", statusCode >= 500 ? \"5xx\" :\n                           statusCode >= 400 ? \"4xx\" : \"2xx\"\n        );\n\n        // Count total requests\n        meterRegistry.counter(\"sli.requests.total\", tags).increment();\n\n        // Count requests that meet SLO\n        if (durationMs < LATENCY_SLO_MS) {\n            meterRegistry.counter(\"sli.requests.good\", tags).increment();\n        }\n\n        // Count error requests\n        if (statusCode >= 500) {\n            meterRegistry.counter(\"sli.requests.errors\", tags).increment();\n        }\n\n        // Record latency for histogram\n        meterRegistry.timer(\"sli.request.latency\", tags)\n            .record(() -> {\n                try {\n                    Thread.sleep(0); // just recording the time\n                } catch (InterruptedException e) {\n                    Thread.currentThread().interrupt();\n                }\n            });\n    }\n\n    public void recordAvailability(boolean isUp) {\n        String status = isUp ? \"up\" : \"down\";\n        meterRegistry.counter(\"sli.availability\", Tags.of(\"status\", status))\n            .increment();\n    }\n\n    public void recordThroughput(String endpoint, int requestCount) {\n        meterRegistry.counter(\"sli.throughput\",\n            Tags.of(\"endpoint\", endpoint))\n            .increment(requestCount);\n    }\n\n    public void recordSaturation(String resource, double utilizationPercent) {\n        meterRegistry.gauge(\"sli.saturation\",\n            Tags.of(\"resource\", resource),\n            utilizationPercent);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-slo-burn-rate-alert",
      children: "8.3 SLO Burn Rate Alert"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# prometheus-alerts.yml → SLO-based alerting\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\ngroups:\n  - name: slo-alerts\n    rules:\n      # 99.9% availability SLO (burn rate: 30-day window)\n      - alert: AvailabilitySLOViolation\n        expr: |\n          (1 - (\n            sum(increase(http_server_requests_seconds_count{status=~\"5..\"}[30d])) /\n            sum(increase(http_server_requests_seconds_count[30d]))\n          )) < 0.999\n        for: 5m\n        labels:\n          severity: critical\n          slo: availability\n        annotations:\n          summary: \"Availability SLO violation (99.9%)\"\n          description: \"Availability over 30 days is {{ $value | humanizePercentage }}\"\n\n      # Latency SLO: 99.9% of requests under 200ms\n      - alert: LatencySLOViolation\n        expr: |\n          (\n            sum(rate(http_server_requests_seconds_bucket{le=\"0.2\"}[28d])) /\n            sum(rate(http_server_requests_seconds_count[28d]))\n          ) < 0.999\n        for: 5m\n        labels:\n          severity: critical\n          slo: latency\n        annotations:\n          summary: \"Latency SLO violation (99.9% < 200ms)\"\n          description: \"Only {{ $value | humanizePercentage }} of requests under 200ms\"\n\n      # Error budget burn rate (fast burn: 2% in 1 hour)\n      - alert: ErrorBudgetFastBurn\n        expr: |\n          sum(rate(http_server_requests_seconds_count{status=~\"5..\"}[1h])) /\n          sum(rate(http_server_requests_seconds_count[1h])) > 0.02\n        for: 5m\n        labels:\n          severity: critical\n          burn_rate: fast\n        annotations:\n          summary: \"Error budget burning fast (2% error rate in 1h)\"\n          description: \"Error rate is {{ $value | humanizePercentage }} in last hour\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-custom-alerting",
      children: "9. Custom Alerting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-prometheus-alerting-rules",
      children: "9.1 Prometheus Alerting Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# prometheus-alerts.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\ngroups:\n  - name: spring-boot-alerts\n    interval: 30s\n    rules:\n\n      # High error rate\n      - alert: HighErrorRate\n        expr: |\n          sum(rate(http_server_requests_seconds_count{status=~\"5..\"}[5m]))\n          / sum(rate(http_server_requests_seconds_count[5m]))\n          * 100 > 5\n        for: 3m\n        labels:\n          severity: critical\n          team: backend\n        annotations:\n          summary: \"High HTTP error rate ({{ $value | humanize }}%)\"\n          description: \"Error rate is {{ $value | humanize }}% for the last 5 minutes\"\n\n      # Slow responses\n      - alert: SlowResponses\n        expr: |\n          histogram_quantile(0.95,\n            sum(rate(http_server_requests_seconds_bucket[5m])) by (le)\n          ) > 1.0\n        for: 5m\n        labels:\n          severity: warning\n          team: backend\n        annotations:\n          summary: \"P95 response time > 1s\"\n          description: \"P95 response time is {{ $value | humanizeDuration }}\"\n\n      # High JVM heap usage\n      - alert: HighHeapUsage\n        expr: |\n          jvm_memory_used_bytes{area=\"heap\"}\n          / jvm_memory_max_bytes{area=\"heap\"}\n          * 100 > 85\n        for: 10m\n        labels:\n          severity: warning\n          team: backend\n        annotations:\n          summary: \"High JVM heap usage ({{ $value | humanize }}%)\"\n          description: \"Heap usage is {{ $value | humanize }}% of max\"\n\n      # Out of memory (commit_chronic)\n      - alert: NearOOM\n        expr: |\n          jvm_memory_used_bytes{area=\"heap\"}\n          / jvm_memory_max_bytes{area=\"heap\"}\n          * 100 > 95\n        for: 2m\n        labels:\n          severity: critical\n          team: backend\n        annotations:\n          summary: \"JVM near out of memory\"\n          description: \"Heap usage is {{ $value | humanize }}% of max\"\n\n      # Thread pool exhaustion\n      - alert: ThreadPoolExhaustion\n        expr: |\n          tomcat_threads_busy_threads / tomcat_threads_config_max_threads * 100 > 80\n        for: 5m\n        labels:\n          severity: warning\n        annotations:\n          summary: \"Tomcat thread pool at {{ $value | humanize }}%\"\n          description: \"Thread pool is {{ $value | humanize }}% utilized\"\n\n      # Database connection pool exhaustion\n      - alert: DatabaseConnectionPoolExhaustion\n        expr: |\n          hikaricp_connections_active / hikaricp_connections_max * 100 > 80\n        for: 5m\n        labels:\n          severity: warning\n        annotations:\n          summary: \"Database connection pool at {{ $value | humanize }}%\"\n          description: \"Connection pool is {{ $value | humanize }}% utilized\"\n\n      # Instance down\n      - alert: InstanceDown\n        expr: up{job=\"spring-boot-apps\"} == 0\n        for: 1m\n        labels:\n          severity: critical\n        annotations:\n          summary: \"Instance {{ $labels.instance }} is down\"\n          description: \"{{ $labels.instance }} has been down for more than 1 minute\"\n\n      # High GC pause time\n      - alert: HighGCPause\n        expr: |\n          rate(jvm_gc_pause_seconds_sum[5m]) > 0.5\n        for: 5m\n        labels:\n          severity: warning\n        annotations:\n          summary: \"High GC pause time ({{ $value | humanizeDuration }}s)\"\n          description: \"GC pause rate is {{ $value | humanizeDuration }} per second\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-alertmanager-configuration",
      children: "9.2 Alertmanager Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# alertmanager.yml\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nglobal:\n  resolve_timeout: 5m\n  slack_api_url: 'https://hooks.slack.com/services/T00/B00/XXXXX'\n  pagerduty_url: 'https://events.pagerduty.com/v2/enqueue'\n  smtp_smarthost: 'smtp.gmail.com:587'\n  smtp_from: 'alertmanager@myapp.com'\n  smtp_auth_username: 'alertmanager@myapp.com'\n  smtp_auth_password: 'password'\n\nroute:\n  group_by: ['alertname', 'cluster', 'service']\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 4h\n  receiver: 'slack-alerts'\n\n  routes:\n    - match:\n        severity: critical\n      receiver: pagerduty-critical\n      repeat_interval: 10m\n      continue: true\n\n    - match:\n        severity: critical\n      receiver: slack-critical\n      continue: true\n\n    - match:\n        severity: warning\n      receiver: slack-warnings\n      repeat_interval: 4h\n\n    - match:\n        slo: latency\n      receiver: slo-review\n      repeat_interval: 1h\n\nreceivers:\n  - name: 'slack-alerts'\n    slack_configs:\n      - channel: '#alerts'\n        title: '{{ template \"slack.title\" . }}'\n        text: '{{ template \"slack.text\" . }}'\n        color: '{{ if eq .Status \"firing\" }}danger{{ else }}good{{ end }}'\n\n  - name: 'slack-critical'\n    slack_configs:\n      - channel: '#critical-alerts'\n        title: '🚨 CRITICAL: {{ .GroupLabels.alertname }}'\n        text: '{{ template \"slack.text\" . }}'\n        color: 'danger'\n        send_resolved: true\n\n  - name: 'slack-warnings'\n    slack_configs:\n      - channel: '#alerts-warnings'\n        title: '⚠️ WARNING: {{ .GroupLabels.alertname }}'\n        text: '{{ template \"slack.text\" . }}'\n        color: 'warning'\n\n  - name: 'pagerduty-critical'\n    pagerduty_configs:\n      - routing_key: 'YOUR_PAGERDUTY_KEY'\n        severity: 'critical'\n        description: '{{ .GroupLabels.alertname }}'\n        client: 'Prometheus Alertmanager'\n        client_url: 'https://monitoring.myapp.com/alerts'\n\n  - name: 'email-alerts'\n    email_configs:\n      - to: 'team@myapp.com'\n        html: '{{ template \"email.html\" . }}'\n        headers:\n          subject: '{{ .GroupLabels.alertname }} - {{ .Status }}'\n\n  - name: 'slo-review'\n    slack_configs:\n      - channel: '#slo-review'\n        title: '📊 SLO Alert: {{ .GroupLabels.alertname }}'\n        text: 'SLO violation detected. Review required: {{ .GroupLabels.alertname }}'\n        color: '#FFA500'\n\ntemplates:\n  - '/etc/alertmanager/templates/*.tmpl'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-alert-templates",
      children: "9.3 Alert Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-gotmpl",
        children: "{{/* slack.title */}}\n{{ define \"slack.title\" }}\n[{{ .Status | toUpper }}] {{ .GroupLabels.alertname }}\n{{ end }}\n\n{{/* slack.text */}}\n{{ define \"slack.text\" }}\n{{ range .Alerts }}\n*Alert:* {{ .Labels.alertname }}\n*Severity:* {{ .Labels.severity }}\n*Instance:* {{ .Labels.instance }}\n*Description:* {{ .Annotations.description }}\n*Summary:* {{ .Annotations.summary }}\n*Started:* {{ .StartsAt.Format \"2006-01-02 15:04:05 UTC\" }}\n{{ end }}\n{{ end }}\n\n{{/* email.html */}}\n{{ define \"email.html\" }}\n<!DOCTYPE html>\n<html>\n<head><title>{{ .GroupLabels.alertname }}</title></head>\n<body>\n<h2>{{ .Status | toUpper }}: {{ .GroupLabels.alertname }}</h2>\n<table border=\"1\" cellpadding=\"8\">\n<tr><th>Alert</th><th>Severity</th><th>Description</th><th>Started</th></tr>\n{{ range .Alerts }}\n<tr>\n  <td>{{ .Labels.alertname }}</td>\n  <td>{{ .Labels.severity }}</td>\n  <td>{{ .Annotations.description }}</td>\n  <td>{{ .StartsAt.Format \"2006-01-02 15:04:05 UTC\" }}</td>\n</tr>\n{{ end }}\n</table>\n</body>\n</html>\n{{ end }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-grafana-alerting-alternative",
      children: "9.4 Grafana Alerting (Alternative)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Grafana alert rule (can be provisoned via YAML)\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\napiVersion: 1\ngroups:\n  - orgId: 1\n    name: \"Spring Boot Alerts\"\n    folder: \"Alerting\"\n    interval: 30s\n    rules:\n      - uid: high_error_rate\n        title: \"High HTTP Error Rate\"\n        condition: \"A\"\n        data:\n          - refId: \"A\"\n            datasourceUid: \"prometheus\"\n            model:\n              expr: \"sum(rate(http_server_requests_seconds_count{status=~\\\"5..\\\"}[5m])) / sum(rate(http_server_requests_seconds_count[5m])) * 100\"\n              intervalMs: 15000\n              maxDataPoints: 100\n            relativeTimeRange:\n              from: 300\n              to: 0\n        noDataState: \"NoData\"\n        execErrState: \"Alerting\"\n        for: \"5m\"\n        annotations:\n          summary: \"High HTTP error rate: {{ $values.A.Value | humanizePercent }}\"\n        labels:\n          severity: critical\n          team: backend\n        isPaused: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-pagerduty-integration",
      children: "9.5 PagerDuty Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Alertmanager PagerDuty configuration\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nreceivers:\n  - name: pagerduty\n    pagerduty_configs:\n      - routing_key: 'YOUR_INTEGRATION_KEY'\n        severity: '{{ .Labels.severity }}'\n        description: '{{ .GroupLabels.alertname }}'\n        client: 'Prometheus'\n        client_url: 'https://prometheus.myapp.com'\n        details:\n          firing: '{{ .Alerts.Firing | len }}'\n          resolved: '{{ .Alerts.Resolved | len }}'\n          group: '{{ .GroupLabels.alertname }}'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-slack-integration",
      children: "9.6 Slack Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Alertmanager Slack configuration\n\n> **Previous:** [CI/CD Pipelines](./54-cicd.md) | **Next:** [Java Core Interview Q&amp;A](./56-interview-java.md)\nreceivers:\n  - name: slack\n    slack_configs:\n      - api_url: 'https://hooks.slack.com/services/T00/B00/XXXXX'\n        channel: '#alerts'\n        username: 'Prometheus'\n        icon_emoji: ':prometheus:'\n        title: '{{ template \"slack.title\" . }}'\n        text: '{{ template \"slack.text\" . }}'\n        footer: 'MyApp Monitoring'\n        fallback: '{{ template \"slack.text\" . }}'\n        color: '{{ if eq .Status \"firing\" }}danger{{ else }}good{{ end }}'\n        fields:\n          - title: 'Alert Name'\n            value: '{{ .GroupLabels.alertname }}'\n            short: true\n          - title: 'Severity'\n            value: '{{ .Labels.severity }}'\n            short: true\n          - title: 'Summary'\n            value: '{{ .Annotations.summary }}'\n          - title: 'Description'\n            value: '{{ .Annotations.description }}'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Commands/APIs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required dependencies and configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify versions match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core code patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test edge cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cover success and failure paths"
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
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern C"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary benefit of this chapter's main topic?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Improved performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Better developer productivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Enhanced reliability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Enhanced reliability.** While all are benefits, the core value proposition is reliability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which approach is recommended for production deployments?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The simplest solution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The most feature-rich option"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The one with best operational characteristics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Whatever the team knows best"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) The one with best operational characteristics.** Production choices should prioritize observability, maintainability, and operability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you consider this pattern?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) For every project regardless of size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When complexity justifies the overhead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only in legacy systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Never → it is outdated"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) When complexity justifies the overhead.** Apply patterns when the problem complexity warrants the additional abstraction.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Micrometer"
        }), " provides a unified metrics API with Counter, Gauge, Timer, DistributionSummary, LongTaskTimer, FunctionCounter, and FunctionTimer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global tags"
        }), " and MeterFilters apply consistent metadata across all metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "@Counted, @Timed, and @Observation"
        }), " annotations simplify metric instrumentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus"
        }), " scrapes metrics from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/prometheus"
        }), " and stores them for querying"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grafana"
        }), " visualizes metrics with pre-built JVM, Spring Boot, and custom business dashboards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom business metrics"
        }), " track domain-specific values like order counts, payment errors, and fulfillment times"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structured JSON logging"
        }), " with MDC and correlation IDs enables log aggregation and distributed tracing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ELK and Loki"
        }), " provide centralized log aggregation with powerful query languages (KQL and LogQL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLI/SLO/SLA"
        }), " frameworks define measurable service levels and error budgets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alerting"
        }), " with Prometheus Alertmanager and Grafana notifies teams through Slack, PagerDuty, and email"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Micrometer setup:"
          }), " Add Micrometer and Prometheus registry to a Spring Boot app. Verify metrics at ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/actuator/prometheus"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Counter and Gauge:"
          }), " Implement a custom counter for user signups and a gauge for active sessions. Observe them in the Prometheus endpoint."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Timer and DistributionSummary:"
          }), " Create a Timer for payment processing and a DistributionSummary for order values. Configure percentile histograms."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "@Timed annotation:"
          }), " Annotate service methods with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Timed"
          }), ". Verify the metrics appear in Prometheus with the correct tags."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom tags:"
          }), " Add global tags for application name, environment, and region using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MeterFilter"
          }), ". Verify all metrics have these tags."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prometheus configuration:"
          }), " Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prometheus.yml"
          }), " that scrapes your Spring Boot app every 15 seconds. Start Prometheus and verify metrics are collected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Grafana dashboard:"
          }), " Create a Grafana dashboard with panels for JVM heap usage, HTTP request rate, P95 response time, and error rate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Business metrics:"
          }), " Implement custom business metrics for a domain concept (e.g., order processing, payment tracking). Create a Grafana dashboard panel for each."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Structured logging:"
          }), " Configure logback to output JSON logs with MDC correlation IDs. Send the logs to a file and verify the JSON format."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Alerting:"
          }), " Create Prometheus alerting rules for high error rate and high heap usage. Configure Alertmanager to send alerts to a webhook or Slack channel."]
        }), "\n"]
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