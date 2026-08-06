"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46085],{

/***/ 15212
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_10_monitoring_md_fb1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-10-monitoring-md-fb1.json
const site_docs_courses_devops_10_monitoring_md_fb1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/10-monitoring","title":"Chapter 10: Site Reliability Engineering (SRE) and Monitoring","description":"Previous Cloud Platforms","source":"@site/docs/courses/devops/10-monitoring.md","sourceDirName":"courses/devops","slug":"/devops/10-monitoring","permalink":"/ai-engineering-journey/devops/10-monitoring","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"id":"10-monitoring","slug":"/devops/10-monitoring","title":"Chapter 10: Site Reliability Engineering (SRE) and Monitoring","sidebar_label":"Chapter 10: Site Reliability Engineering (SRE) and Monitoring","sidebar_position":19},"sidebar":"coursesSidebar","previous":{"title":"Chapter 10: Advanced Configuration Management","permalink":"/ai-engineering-journey/devops/10-configuration-mgmt"},"next":{"title":"Chapter 11: Cloud Platforms","permalink":"/ai-engineering-journey/devops/11-cloud-platforms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/10-monitoring.md


const frontMatter = {
	id: '10-monitoring',
	slug: '/devops/10-monitoring',
	title: 'Chapter 10: Site Reliability Engineering (SRE) and Monitoring',
	sidebar_label: 'Chapter 10: Site Reliability Engineering (SRE) and Monitoring',
	sidebar_position: 19
};
const contentTitle = 'Chapter 10: Site Reliability Engineering (SRE) and Monitoring';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "What is Site Reliability Engineering (SRE)?",
  "id": "what-is-site-reliability-engineering-sre",
  "level": 3
}, {
  "value": "Reliability Metrics",
  "id": "reliability-metrics",
  "level": 3
}, {
  "value": "The Four Golden Signals",
  "id": "the-four-golden-signals",
  "level": 3
}, {
  "value": "Error Budgets",
  "id": "error-budgets",
  "level": 3
}, {
  "value": "Toil Elimination",
  "id": "toil-elimination",
  "level": 3
}, {
  "value": "Incident Management",
  "id": "incident-management",
  "level": 3
}, {
  "value": "Monitoring Stack",
  "id": "monitoring-stack",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Exposing Metrics in Prometheus Format",
  "id": "example-1-exposing-metrics-in-prometheus-format",
  "level": 3
}, {
  "value": "Example 2: Creating a Grafana Dashboard with PromQL",
  "id": "example-2-creating-a-grafana-dashboard-with-promql",
  "level": 3
}, {
  "value": "Example 3: Error Budget Calculator",
  "id": "example-3-error-budget-calculator",
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
  "value": "Error Budget Tracker",
  "id": "error-budget-tracker",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript: Programmatic Monitoring Dashboard Configuration",
  "id": "typescript-programmatic-monitoring-dashboard-configuration",
  "level": 2
}, {
  "value": "Mermaid: SRE Incident Response Workflow",
  "id": "mermaid-sre-incident-response-workflow",
  "level": 2
}, {
  "value": "Mermaid: Error Budget Burn Rate Visualization",
  "id": "mermaid-error-budget-burn-rate-visualization",
  "level": 2
}, {
  "value": "Deeper Explanation: Implementing SLO-Driven Operations",
  "id": "deeper-explanation-implementing-slo-driven-operations",
  "level": 2
}, {
  "value": "Alert Fatigue and Noise Reduction",
  "id": "alert-fatigue-and-noise-reduction",
  "level": 3
}, {
  "value": "Multi-Tenant Monitoring Design",
  "id": "multi-tenant-monitoring-design",
  "level": 3
}, {
  "value": "Service Level Objectives in Practice",
  "id": "service-level-objectives-in-practice",
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
    br: "br",
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
        id: "chapter-10-site-reliability-engineering-sre-and-monitoring",
        children: "Chapter 10: Site Reliability Engineering (SRE) and Monitoring"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/10-configuration-mgmt",
          children: "Configuration Management"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/11-cloud-platforms",
          children: "Cloud Platforms"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Site Reliability Engineering (SRE) and its relationship with DevOps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the \"Four Golden Signals\" of monitoring."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between SLIs, SLOs, and SLAs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Prometheus and Grafana for metrics collection and visualization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the importance of Log Management and Error Tracking."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement error budgets to balance reliability and feature velocity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design monitoring dashboards that provide actionable insights."
      }), "\n"]
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
        href: "../../assets/images/lessons/devops/10-monitoring/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/10-monitoring/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/10-monitoring/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/10-monitoring/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/10-monitoring/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/10-monitoring/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SRE Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applying software engineering to operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRE makes reliability a quantifiable metric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Four Golden Signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency, Traffic, Errors, Saturation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "These signals indicate system health at a glance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLI/SLO/SLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicators, Objectives, Agreements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal SLOs should be tighter than external SLAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull-based metrics with time-series DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use exporters to collect infrastructure metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grafana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-source visualization dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use PromQL for metric queries and alert rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Budgets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed unreliability = 1 - SLO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gate releases when budget is exhausted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toil Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual work elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRE teams spend <50% on operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incident Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severity-based response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blameless postmortems improve systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[SRE Definition] --> B[Four Golden Signals]\n    B --> C[Latency]\n    B --> D[Traffic]\n    B --> E[Errors]\n    B --> F[Saturation]\n    C & D & E & F --> G[SLI/SLO/SLA]\n    G --> H[Error Budgets]\n    H --> I[Prometheus]\n    I --> J[Grafana]\n    J --> K[Alertmanager]\n    K --> L[Incident Response]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-site-reliability-engineering-sre",
      children: "What is Site Reliability Engineering (SRE)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SRE is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. The main goals are to create scalable and highly reliable software systems. SRE is often described as \"what happens when you ask a software engineer to design an operations function.\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Origins:"
      }), " Google developed SRE internally, formalized by Ben Treynor Sloss in 2003. The practice has since been adopted by technology companies worldwide. The core insight is that operations problems are engineering problems and should be solved with engineering rigor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SRE vs DevOps:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SRE"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Community movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google engineering practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Culture, automation, flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability, capacity, toil"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Measurement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DORA metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLOs, error budgets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Principles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined engineering role"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toil limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50% maximum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release gating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No equivalent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error budgets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reliability-metrics",
      children: "Reliability Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLI (Service Level Indicator):"
        }), " A quantitative measure of some aspect of the level of service that is provided (e.g., Latency, Throughput)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLO (Service Level Objective):"
        }), " A target value or range of values for a service level that is measured by an SLI (e.g., \"99.9% of requests must finish in less than 200ms\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLA (Service Level Agreement):"
        }), " A legal contract between a service provider and a customer that includes consequences (usually financial) if SLOs are not met."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-four-golden-signals",
      children: "The Four Golden Signals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency:"
        }), " The time it takes to service a request. Distinguish between successful requests and failed requests—a failing service might return errors very quickly, masking the latency problem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic:"
        }), " A measure of how much demand is being placed on the system (requests per second, active users, throughput)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors:"
        }), " The rate of requests that fail explicitly (5xx) or implicitly (success with wrong content, slow responses)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Saturation:"
        }), " How \"full\" your service is (CPU usage, memory utilization, queue depth). The most overloaded component determines the system's saturation point."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-budgets",
      children: "Error Budgets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The error budget is the acceptable amount of unreliability. For a 99.9% SLO over 30 days:"
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
        children: "Budget is replenished as the measurement window rolls forward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If budget is exhausted, releases are halted until it recovers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Burn-rate alerts fire before full depletion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error budgets create a shared vocabulary between developers and operators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toil-elimination",
      children: "Toil Elimination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toil is operational work that is manual, repetitive, automatable, tactical, and devoid of enduring value."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples of toil:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually restarting crashed processes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rotating credentials by hand"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Responding to non-actionable alerts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hand-configuring monitoring dashboards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually provisioning infrastructure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The 50% Rule:"
      }), " SRE teams should spend no more than 50% of their time on operational work. The remaining time must be invested in engineering projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "incident-management",
      children: "Incident Management"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEV-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical service outage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete service unavailable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEV-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Major component degraded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout flow failing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEV-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor issue, no customer impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-critical API errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEV-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cosmetic or informational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard labeling issue"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Incident Response Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detection ? Alert fires or user reports issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triage ? Determine severity, declare incident, assemble response team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mitigation ? Stabilize the system (rollback, redirect, scale up)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolution ? Apply permanent fix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow-up ? Blameless postmortem, preventive actions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring-stack",
      children: "Monitoring Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus:"
        }), " A time-series database and monitoring system that pulls metrics from applications via HTTP. Features a powerful query language (PromQL), built-in alerting, and service discovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grafana:"
        }), " A visualization tool that connects to Prometheus (and other sources) to create interactive dashboards. Supports alerting, annotations, and team collaboration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alertmanager:"
        }), " Handles alerts sent by Prometheus with deduplication, grouping, routing, silencing, and notification to channels (Slack, PagerDuty, email)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prometheus Data Model:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics identified by name and key-value label pairs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four metric types: Counter (monotonically increasing), Gauge (up/down), Histogram (bucketed observations), Summary (quantile-based observations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recording rules precompute expensive queries for faster dashboards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-exposing-metrics-in-prometheus-format",
      children: "Example 1: Exposing Metrics in Prometheus Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import express from 'express';\nimport prometheus from 'prom-client';\n\nconst app = express();\nconst register = new prometheus.Registry();\n\nprometheus.collectDefaultMetrics({ register });\n\nconst httpRequestDuration = new prometheus.Histogram({\n  name: 'http_request_duration_seconds',\n  help: 'Duration of HTTP requests in seconds',\n  labelNames: ['method', 'route', 'status'],\n  buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5, 10],\n  registers: [register],\n});\n\nconst httpRequestsTotal = new prometheus.Counter({\n  name: 'http_requests_total',\n  help: 'Total number of HTTP requests',\n  labelNames: ['method', 'route', 'status'],\n  registers: [register],\n});\n\napp.use((req, res, next) => {\n  const end = httpRequestDuration.startTimer();\n  res.on('finish', () => {\n    const labels = { method: req.method, route: req.route?.path || req.path, status: String(res.statusCode) };\n    httpRequestsTotal.inc(labels);\n    end(labels);\n  });\n  next();\n});\n\napp.get('/metrics', async (_req, res) => {\n  res.set('Content-Type', register.contentType);\n  res.send(await register.metrics());\n});\n\napp.get('/api/users', (_req, res) => {\n  res.json([{ id: 1, name: 'Alice' }]);\n});\n\napp.listen(3000, () => console.log('Server on :3000'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-creating-a-grafana-dashboard-with-promql",
      children: "Example 2: Creating a Grafana Dashboard with PromQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DashboardPanel {\n  title: string;\n  query: string;\n  type: 'graph' | 'stat' | 'table' | 'gauge';\n  unit?: string;\n}\n\ninterface GrafanaDashboard {\n  title: string;\n  panels: DashboardPanel[];\n  refreshInterval: string;\n}\n\nfunction generateDashboard(dashboard: GrafanaDashboard): string {\n  const panels = dashboard.panels.map((panel, i) => ({\n    id: i + 1,\n    title: panel.title,\n    type: panel.type,\n    targets: [{ expr: panel.query, legendFormat: '{{service}}' }],\n    gridPos: { h: 8, w: 8, x: (i % 3) * 8, y: Math.floor(i / 3) * 8 },\n    fieldConfig: {\n      defaults: { unit: panel.unit || 'none' },\n    },\n  }));\n\n  return JSON.stringify({\n    title: dashboard.title,\n    panels,\n    refresh: dashboard.refreshInterval,\n    time: { from: 'now-6h', to: 'now' },\n    schemaVersion: 36,\n  }, null, 2);\n}\n\nconst sreDashboard: GrafanaDashboard = {\n  title: 'SRE Golden Signals',\n  refreshInterval: '30s',\n  panels: [\n    {\n      title: 'Request Latency (p95)',\n      query: 'histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, service))',\n      type: 'graph',\n      unit: 's',\n    },\n    {\n      title: 'Requests per Second',\n      query: 'sum(rate(http_requests_total[5m])) by (service)',\n      type: 'graph',\n      unit: 'rps',\n    },\n    {\n      title: 'Error Rate',\n      query: 'sum(rate(http_requests_total{status=~\"5..\"}[5m])) / sum(rate(http_requests_total[5m]))',\n      type: 'stat',\n      unit: 'percentunit',\n    },\n    {\n      title: 'CPU Saturation',\n      query: '100 - (avg by(instance) (rate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)',\n      type: 'gauge',\n      unit: 'percent',\n    },\n  ],\n};\n\nconsole.log(generateDashboard(sreDashboard));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-error-budget-calculator",
      children: "Example 3: Error Budget Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SLOConfig {\n  name: string;\n  target: number; // 99.9 = 99.9%\n  windowDays: number;\n  currentUptime: number; // seconds of uptime in the window\n}\n\ninterface ErrorBudget {\n  total: number; // seconds\n  consumed: number; // seconds\n  remaining: number; // seconds\n  remainingPercent: number;\n  exhausted: boolean;\n}\n\nclass ErrorBudgetCalculator {\n  calculate(config: SLOConfig): ErrorBudget {\n    const totalSeconds = config.windowDays * 24 * 60 * 60;\n    const allowedDowntime = totalSeconds * (1 - config.target / 100);\n    const consumed = totalSeconds - config.currentUptime;\n    const remaining = allowedDowntime - consumed;\n    const remainingPercent = (remaining / allowedDowntime) * 100;\n\n    return {\n      total: Math.round(allowedDowntime),\n      consumed: Math.max(0, Math.round(consumed)),\n      remaining: Math.round(remaining),\n      remainingPercent: Math.round(remainingPercent * 100) / 100,\n      exhausted: remaining <= 0,\n    };\n  }\n\n  alertStatus(budget: ErrorBudget): 'healthy' | 'warning' | 'critical' | 'exhausted' {\n    if (budget.exhausted) return 'exhausted';\n    if (budget.remainingPercent < 10) return 'critical';\n    if (budget.remainingPercent < 30) return 'warning';\n    return 'healthy';\n  }\n\n  generateReport(configs: SLOConfig[]): string {\n    let report = '# Error Budget Report\\n\\n';\n    report += '| SLO | Target | Window | Total Budget | Consumed | Remaining | Status |\\n';\n    report += '|-----|--------|--------|--------------|----------|-----------|--------|\\n';\n\n    for (const config of configs) {\n      const budget = this.calculate(config);\n      const status = this.alertStatus(budget);\n      report += `| ${config.name} | ${config.target}% | ${config.windowDays}d | ${budget.total}s | ${budget.consumed}s | ${budget.remaining}s | ${status} |\\n`;\n    }\n\n    return report;\n  }\n}\n\nconst calc = new ErrorBudgetCalculator();\nconst budgets = [\n  { name: 'api-availability', target: 99.9, windowDays: 30, currentUptime: 2591000 },\n  { name: 'api-latency', target: 99.5, windowDays: 30, currentUptime: 2590000 },\n  { name: 'db-availability', target: 99.99, windowDays: 30, currentUptime: 2591900 },\n];\n\nconsole.log(calc.generateReport(budgets));\nconst apiBudget = calc.calculate(budgets[0]);\nconsole.log(`API budget remaining: ${apiBudget.remainingPercent}% - ${calc.alertStatus(apiBudget)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitative measure of service aspect (latency, availability)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target value for SLI (99.9% requests under 200ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contractual commitment with consequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull-based time-series monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grafana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visualization with multi-source dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed unreliability = (1 - SLO) × window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual, repetitive, automatable operational work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alertmanager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication, grouping, routing, silencing"
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
            children: "Golden Signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency, Traffic, Errors, Saturation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRE Goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantified reliability with error budgets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull metrics, time-series DB, PromQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alertmanager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping, silencing, routing, notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grafana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panels, dashboards, data sources, alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43 min/month for 99.9% SLO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual, repetitive, no enduring value"
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
            children: "Web application latency monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud resource utilization tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLA compliance dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes cluster monitoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What are the Four Golden Signals?"
      }), "**A)** CPU, Memory, Disk, Network", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Latency, Traffic, Errors, Saturation", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Build, Test, Deploy, Monitor", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Dev, Staging, QA, Production", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Latency, Traffic, Errors, Saturation</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What is an error budget?"
        }), "**A)** Budget for fixing errors", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Allowed amount of unreliability", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Cost of incidents", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Team training budget", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Allowed amount of unreliability</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: How does Prometheus collect metrics?"
          }), "**A)** Push model from applications", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Pull model by scraping HTTP endpoints", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Log file parsing", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Database queries", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Pull model by scraping HTTP endpoints</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is the 50% rule in SRE?"
            }), "**A)** 50% test coverage", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Max 50% of time on operational work", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** 50% budget for monitoring", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** 50% of team on-call", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Max 50% of time on operational work</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What distinguishes toil from valuable work?"
              }), "**A)** It is difficult", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** It is manual, repetitive, automatable, and has no enduring value", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** It requires senior engineers", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** It happens infrequently", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** It is manual, repetitive, automatable, and has no enduring value</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "error-budget-tracker",
                children: "Error Budget Tracker"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Managing error budgets requires continuous tracking of SLO compliance and burn rate detection. The following tool implements a comprehensive error budget tracking system with burn-rate alerts."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "// error-budget-tracker.ts\n// Track SLO error budgets with burn-rate alerts\n\ninterface SLOConfig {\n  name: string;\n  target: number;  // e.g., 0.999 for 99.9%\n  windowDays: number;\n  burnRateThresholds: Array<{ label: string; multiplier: number; alertAfterMinutes: number }>;\n}\n\ninterface SLIDataPoint {\n  timestamp: Date;\n  totalRequests: number;\n  successfulRequests: number;\n  latencyP99: number;\n}\n\ninterface ErrorBudgetState {\n  config: SLOConfig;\n  totalBudget: number;\n  consumed: number;\n  remaining: number;\n  remainingPercent: number;\n  burnRate: number;\n  burnRateAlerts: string[];\n  projectedExhaustion: Date | null;\n  isExhausted: boolean;\n}\n\nclass ErrorBudgetTracker {\n  private configs: Map<string, SLOConfig> = new Map();\n  private data: Map<string, SLIDataPoint[]> = new Map();\n\n  registerSLO(config: SLOConfig): void {\n    this.configs.set(config.name, config);\n    this.data.set(config.name, []);\n  }\n\n  recordDataPoint(name: string, point: SLIDataPoint): void {\n    if (!this.data.has(name)) throw new Error(`SLO ${name} not registered`);\n    this.data.get(name)!.push(point);\n  }\n\n  calculateState(name: string, now: Date): ErrorBudgetState {\n    const config = this.configs.get(name);\n    if (!config) throw new Error(`SLO ${name} not found`);\n\n    const points = this.data.get(name) || [];\n    const windowStart = new Date(now.getTime() - config.windowDays * 86400000);\n    const windowPoints = points.filter(p => p.timestamp >= windowStart);\n\n    const totalRequests = windowPoints.reduce((s, p) => s + p.totalRequests, 0);\n    const successfulRequests = windowPoints.reduce((s, p) => s + p.successfulRequests, 0);\n    const actualAvailability = totalRequests > 0 ? successfulRequests / totalRequests : 1;\n\n    const totalBudget = (1 - config.target) * totalRequests;\n    const consumed = (1 - actualAvailability) * totalRequests;\n    const remaining = totalBudget - consumed;\n    const remainingPercent = totalBudget > 0 ? (remaining / totalBudget) * 100 : 0;\n\n    const recentPoints = windowPoints.slice(-10);\n    const recentFailures = recentPoints.reduce((s, p) => s + (p.totalRequests - p.successfulRequests), 0);\n    const recentTotal = recentPoints.reduce((s, p) => s + p.totalRequests, 0);\n    const recentErrorRate = recentTotal > 0 ? recentFailures / recentTotal : 0;\n    const errorBudgetErrorRate = totalBudget > 0 ? Math.max(config.target / (1 - config.target), 1) * (1 - config.target) : 0;\n    const burnRate = errorBudgetErrorRate > 0 ? recentErrorRate / errorBudgetErrorRate : 0;\n\n    const burnRateAlerts: string[] = [];\n    for (const threshold of config.burnRateThresholds) {\n      if (burnRate >= threshold.multiplier) {\n        burnRateAlerts.push(`Burn rate ${burnRate.toFixed(1)}x exceeds threshold ${threshold.multiplier}x (alert after ${threshold.alertAfterMinutes}min)`);\n      }\n    }\n\n    let projectedExhaustion: Date | null = null;\n    if (burnRate > 0 && remaining > 0) {\n      const msToExhaustion = (remaining / (burnRate * errorBudgetErrorRate)) * (totalRequests > 0 ? (config.windowDays * 86400000) / totalRequests : 0);\n      if (msToExhaustion < config.windowDays * 86400000) {\n        projectedExhaustion = new Date(now.getTime() + msToExhaustion);\n      }\n    }\n\n    return { config, totalBudget, consumed, remaining, remainingPercent, burnRate, burnRateAlerts, projectedExhaustion, isExhausted: remaining <= 0 };\n  }\n\n  generateReport(name: string, now: Date): string {\n    const state = this.calculateState(name, now);\n    const lines = [\n      `Error Budget Report: ${name}`,\n      `  Target: ${(state.config.target * 100).toFixed(1)}% over ${state.config.windowDays} days`,\n      `  Budget consumed: ${state.consumed.toFixed(0)} of ${state.totalBudget.toFixed(0)} errors`,\n      `  Remaining: ${state.remaining.toFixed(0)} errors (${state.remainingPercent.toFixed(1)}%)`,\n      `  Burn rate: ${state.burnRate.toFixed(2)}x`,\n      `  Status: ${state.isExhausted ? '? EXHAUSTED' : state.remainingPercent < 20 ? '? WARNING' : '? HEALTHY'}`,\n    ];\n    if (state.projectedExhaustion) lines.push(`  Projected exhaustion: ${state.projectedExhaustion.toISOString()}`);\n    for (const alert of state.burnRateAlerts) lines.push(`  ?? ${alert}`);\n    return lines.join('\\n');\n  }\n}\n\nconst tracker = new ErrorBudgetTracker();\ntracker.registerSLO({ name: 'api-availability', target: 0.999, windowDays: 30, burnRateThresholds: [{ label: 'critical', multiplier: 10, alertAfterMinutes: 5 }, { label: 'warning', multiplier: 3, alertAfterMinutes: 30 }] });\n\nfor (let day = 0; day < 30; day++) {\n  const total = 100000;\n  const failed = day > 25 ? Math.floor(total * 0.005) : Math.floor(total * 0.0005);\n  tracker.recordDataPoint('api-availability', { timestamp: new Date(Date.now() - (29 - day) * 86400000), totalRequests: total, successfulRequests: total - failed, latencyP99: 45 });\n}\n\nconsole.log(tracker.generateReport('api-availability', new Date()));\n"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "What this demonstrates:"
                }), " An error budget tracker with burn-rate alerts and projection provides early warning when reliability is degrading faster than the SLO allows."]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "practical-takeaways",
                children: "Practical Takeaways"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Monitoring should focus on user-visible symptoms"
                  }), ", not internal system states. Alert on customer-impacting conditions."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Start with one SLO"
                  }), " for your most critical service and expand from there. Don't try to SLO everything at once."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Error budgets create a shared language"
                  }), " between developers and operators for when reliability trumps features."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Use recording rules"
                  }), " in Prometheus to precompute expensive queries and speed up dashboard loading."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Implement burn-rate alerts"
                  }), " to detect error budget consumption before it's too late."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "typescript-programmatic-monitoring-dashboard-configuration",
                children: "TypeScript: Programmatic Monitoring Dashboard Configuration"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Modern monitoring platforms support dashboard as code. Below is a TypeScript example that generates Grafana dashboard JSON configurations programmatically:"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "// dashboard-generator.ts\n// Generates Grafana dashboard configurations as code\n\ninterface PanelDefinition {\n  title: string;\n  type: 'graph' | 'stat' | 'table' | 'heatmap';\n  datasource: string;\n  query: string;\n  unit?: string;\n  decimals?: number;\n  thresholds?: { value: number; color: string }[];\n}\n\ninterface DashboardConfig {\n  title: string;\n  description?: string;\n  tags: string[];\n  timeRange: string;\n  refreshInterval: string;\n  panels: PanelDefinition[];\n}\n\nclass GrafanaDashboardGenerator {\n  generatePanel(panel: PanelDefinition, index: number): object {\n    const base = {\n      id: index + 1,\n      title: panel.title,\n      type: panel.type,\n      gridPos: { h: 8, w: 12, x: (index % 2) * 12, y: Math.floor(index / 2) * 8 },\n      datasource: panel.datasource,\n    };\n\n    const targets = [{ expr: panel.query, legendFormat: '{{label}}' }];\n\n    if (panel.thresholds) {\n      return {\n        ...base,\n        fieldConfig: {\n          defaults: {\n            unit: panel.unit,\n            decimals: panel.decimals,\n            thresholds: { steps: panel.thresholds.map(t => ({ value: t.value, color: t.color })) },\n          },\n        },\n        targets,\n      };\n    }\n\n    return { ...base, targets };\n  }\n\n  generateDashboard(config: DashboardConfig): object {\n    return {\n      title: config.title,\n      tags: config.tags,\n      time: { from: `now-${config.timeRange}`, to: 'now' },\n      refresh: config.refreshInterval,\n      panels: config.panels.map((p, i) => this.generatePanel(p, i)),\n      schemaVersion: 38,\n      version: 1,\n    };\n  }\n}\n\n// Example: Microservice RED dashboard\nconst generator = new GrafanaDashboardGenerator();\nconst dashboard = generator.generateDashboard({\n  title: 'API Service RED Dashboard',\n  tags: ['api', 'microservice', 'sre'],\n  timeRange: '6h',\n  refreshInterval: '30s',\n  panels: [\n    { title: 'Request Rate', type: 'graph', datasource: 'Prometheus', query: 'rate(http_requests_total[5m])', unit: 'reqps' },\n    { title: 'Error Rate', type: 'graph', datasource: 'Prometheus', query: 'rate(http_requests_total{status=~\"5..\"}[5m])', unit: 'reqps', thresholds: [{ value: 5, color: 'red' }] },\n    { title: 'Latency p99', type: 'graph', datasource: 'Prometheus', query: 'histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))', unit: 's' },\n    { title: 'Error Budget', type: 'stat', datasource: 'Prometheus', query: 'error_budget_remaining', unit: 'percent', thresholds: [{ value: 0, color: 'red' }, { value: 50, color: 'yellow' }, { value: 100, color: 'green' }] },\n  ],\n});\n\nconsole.log(JSON.stringify(dashboard, null, 2));\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "This approach enables teams to manage monitoring configurations in version control, enforce dashboard standards, and generate per-service dashboards from templates."
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mermaid-sre-incident-response-workflow",
                children: "Mermaid: SRE Incident Response Workflow"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "flowchart TD\n    A[Incident Occurs] --> B{Automated Detection?}\n    B -->|Yes| C[Alert triggers via Alertmanager]\n    B -->|No| D[User reports issue]\n    C --> E[On-call engineer acknowledged]\n    D --> E\n    E --> F{Burn rate within error budget?}\n    F -->|Yes: Within budget| G[Classify as low priority]\n    F -->|No: Budget overrun| H[Classify as high priority]\n    G --> I[Fix during business hours]\n    H --> J[Immediate incident response]\n    J --> K[Declare severity level]\n    K --> L{Severity >= P2?}\n    L -->|Yes| M[Incident commander assigned]\n    L -->|No| N[Engineer handles solo]\n    M --> O[Communicate status page update]\n    N --> O\n    O --> P[Root cause analysis begins]\n    P --> Q[Implement fix]\n    Q --> R[Run postmortem]\n    R --> S[Add monitoring & alerting]\n    S --> T[Update runbooks]\n    T --> U[Conduct incident review]\n    U --> V[Track action items]\n    V --> A\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mermaid-error-budget-burn-rate-visualization",
                children: "Mermaid: Error Budget Burn Rate Visualization"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "flowchart LR\n    subgraph \"Monthly Error Budget (99.9% SLO)\"\n        A[Total time: 43m 12s budgeted downtime]\n    end\n    subgraph \"Budget Consumption\"\n        B[Week 1: 15m used]\n        C[Week 2: 8m used]\n        D[Week 3: 12m used]\n        E[Week 4: 5m remaining]\n    end\n    subgraph \"Burn Rate Alerts (multi-window approach)\"\n        F[\"<1x: Normal - no action\"]\n        G[\"1-2x: Warning - review ops\"]\n        H[\"2-5x: Page - immediate\"]\n        I[\">5x: Critical - freeze deploys\"]\n    end\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n    E --> F\n    F --> G\n    G --> H\n    H --> I\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "deeper-explanation-implementing-slo-driven-operations",
                children: "Deeper Explanation: Implementing SLO-Driven Operations"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Error budgets are the foundation of SRE practice. They determine when reliability concerns trump feature velocity:"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "When error budget is full (>50% remaining):"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Deployments proceed normally"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Feature velocity is priority"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Technical debt addressed at normal pace"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "When error budget is depleting (10-50% remaining):"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Deployments are gated: require additional testing or longer canary"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Team shifts focus to reliability improvements"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "On-call rotations get additional support"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "When error budget is exhausted (<10% remaining):"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Feature deployments freeze entirely"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "All engineering effort goes to reliability"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Incident response activated for any further degradation"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Postmortem required before deployments resume"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Calculating error budget programmatically:"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "interface SLOConfig {\n  target: number; // e.g., 0.999 for 99.9%\n  windowDays: number;\n  totalRequests: number;\n  successfulRequests: number;\n}\n\nclass ErrorBudgetCalculator {\n  calculateBudget(config: SLOConfig): {\n    totalBudgetSeconds: number;\n    usedBudgetSeconds: number;\n    remainingBudget: number;\n    burnRate: number;\n    status: string;\n  } {\n    const totalSeconds = config.windowDays * 24 * 3600;\n    const allowedFailures = totalSeconds * (1 - config.target);\n    const actualAvailability = config.successfulRequests / config.totalRequests;\n    const actualFailures = totalSeconds * (1 - actualAvailability);\n    const budget = ((allowedFailures - actualFailures) / allowedFailures) * 100;\n    const burnRate = actualFailures / (totalSeconds * (1 - config.target));\n\n    return {\n      totalBudgetSeconds: Math.round(allowedFailures),\n      usedBudgetSeconds: Math.round(actualFailures),\n      remainingBudget: Math.round(budget * 100) / 100,\n      burnRate: Math.round(burnRate * 100) / 100,\n      status: budget > 50 ? 'HEALTHY' : budget > 10 ? 'WARNING' : 'EXHAUSTED',\n    };\n  }\n}\n\nconst calc = new ErrorBudgetCalculator();\nconst result = calc.calculateBudget({\n  target: 0.999, windowDays: 30, totalRequests: 10000000, successfulRequests: 9995000,\n});\nconsole.log(JSON.stringify(result, null, 2));\n// Output: ~{ totalBudgetSeconds: 2592, usedBudgetSeconds: 1296, remainingBudget: 50, burnRate: 0.5, status: \"HEALTHY\" }\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "alert-fatigue-and-noise-reduction",
                children: "Alert Fatigue and Noise Reduction"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Common causes of alert fatigue:"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Too many alerts firing simultaneously during incidents"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Alerts that never trigger any action (dead alerts)"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Alerts that always fire but are always ignored (background noise)"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Alerts with no clear runbook or remediation steps"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Strategies for reducing noise:"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Alert on symptoms, not causes:"
                  }), " Alert when users are affected (latency exceeds threshold, error rate increases), not when internal metrics deviate."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Use alert aggregation:"
                  }), " Group related alerts into a single notification. Alertmanager's grouping feature prevents alert storms."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Implement alert suppression:"
                  }), " During scheduled maintenance, suppress related alerts using maintenance windows."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Require sustained duration:"
                  }), " Fire alerts only when a condition persists for a minimum duration (e.g., 5 minutes)."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Remove zombie alerts:"
                  }), " Quarterly audit of all alert rules. Remove any that haven't fired or been acted on in 90 days."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Alert routing based on severity:"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "enum AlertSeverity { CRITICAL = 'CRITICAL', WARNING = 'WARNING', INFO = 'INFO' }\n\ninterface AlertConfig {\n  severity: AlertSeverity;\n  condition: string;\n  duration: string;\n  notificationChannels: string[];\n  runbook?: string;\n}\n\nconst alertConfigs: AlertConfig[] = [\n  {\n    severity: AlertSeverity.CRITICAL,\n    condition: 'error_rate > 5%',\n    duration: '5m',\n    notificationChannels: ['pagerduty', 'slack-urgent'],\n    runbook: '/runbooks/high-error-rate.md',\n  },\n  {\n    severity: AlertSeverity.WARNING,\n    condition: 'error_rate > 2%',\n    duration: '10m',\n    notificationChannels: ['slack-alerts'],\n  },\n  {\n    severity: AlertSeverity.INFO,\n    condition: 'disk_usage > 80%',\n    duration: '30m',\n    notificationChannels: ['slack-alerts'],\n  },\n];\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "multi-tenant-monitoring-design",
                children: "Multi-Tenant Monitoring Design"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "In enterprise environments, monitoring must support multiple teams and services:"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "flowchart TD\n    subgraph \"Service A Team\"\n        A1[App Metrics] --> A2[Team Grafana]\n        A2 --> A3[Team Alertmanager]\n    end\n    subgraph \"Service B Team\"\n        B1[App Metrics] --> B2[Team Grafana]\n        B2 --> B3[Team Alertmanager]\n    end\n    subgraph \"Platform SRE Team\"\n        A2 --> C1[Global Grafana]\n        B2 --> C1\n        A3 --> C2[Global Alertmanager]\n        B3 --> C2\n        C1 --> C3[Executive Dashboard]\n        C2 --> C4[On-call Rotation]\n    end\n\n    style A2 fill:#4A90D9,color:#fff\n    style B2 fill:#4A90D9,color:#fff\n    style C1 fill:#E6522C,color:#fff\n    style C2 fill:#F05032,color:#fff\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Each team owns their own dashboards and alerts. The platform team provides global visibility and escalation oversight."
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "service-level-objectives-in-practice",
                children: "Service Level Objectives in Practice"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Choosing SLO targets:"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "99.9%"
                  }), " (~8.7h downtime/year): Internal tools, development environments, non-critical services"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "99.95%"
                  }), " (~4.4h downtime/year): Standard production services with acceptable maintenance windows"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "99.99%"
                  }), " (~52m downtime/year): Customer-facing services, payment systems, core infrastructure"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "99.999%"
                  }), " (~5m downtime/year): Critical infrastructure, emergency services, real-time systems"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SLO implementation checklist:"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Define SLIs for each service (latency, error rate, throughput, availability)"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Set SLO targets based on business requirements"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Calculate error budgets monthly"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure burn-rate alerts with multi-window, multi-burn-rate approach"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Gate deployments when budget is depleted"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Review SLOs quarterly and adjust targets based on actual performance"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// configuration mgmt\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'configuration mgmt', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "SRE applies engineering principles to system operations to ensure high reliability."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "SLIs and SLOs are the foundation of data-driven reliability management."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Error budgets quantify allowed unreliability and gate release velocity."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Monitoring should focus on the Four Golden Signals: Latency, Traffic, Errors, and Saturation."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Prometheus and Grafana are the industry standard for cloud-native monitoring."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Alerting should be actionable and focused on symptoms that affect users."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Toil elimination ensures SRE teams invest in automation rather than manual operations."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Blameless postmortems drive systemic improvement after incidents."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does SRE differ from traditional Systems Administration?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is an \"Error Budget\" and how is it calculated?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Explain the difference between an SLI and an SLO."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Why is \"Saturation\" an important metric to monitor?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between toil and valuable operational work?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design an SLO for a messaging application that focuses on \"Message Delivery Latency.\" Calculate the error budget for a 99.95% SLO over a 28-day window."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a PromQL query to find the average CPU usage across all nodes in a cluster over the last hour."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Identify three sources of \"Toil\" in an operations team and propose how an SRE would automate them."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a burn-rate alert rule that fires when 5% of a 30-day error budget is consumed in 1 hour."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement the TypeScript dashboard generator above to create a RED dashboard for a sample microservice. Extend it with panels for database connection pool usage and garbage collection metrics."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Using the error budget calculator, model the following scenario: a service has a 99.95% SLO over 30 days. On day 15, the service experiences a 30-minute outage. Calculate the remaining budget and determine whether deployments should be gated."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "You are tasked with setting up monitoring for a new microservices-based application. Describe the full stack you would choose and the first five alerts you would configure to ensure system health. Define SLOs for each service, calculate error budgets, and specify the monitoring dashboard layout using the Four Golden Signals framework. Include a toil reduction plan that would bring operational work below 50% of team time."
                }), "\n"]
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