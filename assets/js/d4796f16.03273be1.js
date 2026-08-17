"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[68090],{

/***/ 4838
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_17_sre_md_d47_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-17-sre-md-d47.json
const site_docs_courses_devops_17_sre_md_d47_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/17-sre","title":"Chapter 17: SRE Principles","description":"Previous Capstone Project","source":"@site/docs/courses/devops/17-sre.md","sourceDirName":"courses/devops","slug":"/devops/17-sre","permalink":"/ai-engineering-journey/devops/17-sre","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"id":"17-sre","slug":"/devops/17-sre","title":"Chapter 17: SRE Principles","sidebar_label":"Chapter 17: SRE Principles","sidebar_position":26},"sidebar":"course-devops","previous":{"title":"Chapter 16: Container Networking","permalink":"/ai-engineering-journey/devops/16-networking"},"next":{"title":"Chapter 18: Capstone Project","permalink":"/ai-engineering-journey/devops/18-capstone"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/17-sre.md


const frontMatter = {
	id: '17-sre',
	slug: '/devops/17-sre',
	title: 'Chapter 17: SRE Principles',
	sidebar_label: 'Chapter 17: SRE Principles',
	sidebar_position: 26
};
const contentTitle = 'Chapter 17: SRE Principles';

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
  "value": "17.1 SRE vs DevOps",
  "id": "171-sre-vs-devops",
  "level": 3
}, {
  "value": "17.2 Service Level Objectives (SLO, SLI, SLA)",
  "id": "172-service-level-objectives-slo-sli-sla",
  "level": 3
}, {
  "value": "17.3 Error Budgets",
  "id": "173-error-budgets",
  "level": 3
}, {
  "value": "17.4 Toil Elimination",
  "id": "174-toil-elimination",
  "level": 3
}, {
  "value": "17.5 Incident Management",
  "id": "175-incident-management",
  "level": 3
}, {
  "value": "17.6 On-Call Practices",
  "id": "176-on-call-practices",
  "level": 3
}, {
  "value": "17.7 Blameless Postmortems",
  "id": "177-blameless-postmortems",
  "level": 3
}, {
  "value": "17.8 Capacity Planning",
  "id": "178-capacity-planning",
  "level": 3
}, {
  "value": "17.9 Reliability Patterns",
  "id": "179-reliability-patterns",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: SLO Compliance Tracker",
  "id": "example-1-slo-compliance-tracker",
  "level": 3
}, {
  "value": "Example 2: Circuit Breaker Implementation",
  "id": "example-2-circuit-breaker-implementation",
  "level": 3
}, {
  "value": "Example 3: On-Call Schedule Generator",
  "id": "example-3-on-call-schedule-generator",
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
  "value": "Error Budget Tracker",
  "id": "error-budget-tracker",
  "level": 3
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
        id: "chapter-17-sre-principles",
        children: "Chapter 17: SRE Principles"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/16-networking",
          children: "Container Networking"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/18-capstone",
          children: "Capstone Project"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate SRE from DevOps and describe the SRE model of reliability engineering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and implement Service Level Objectives, Indicators, and Agreements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate and use error budgets to balance reliability and feature velocity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and systematically eliminate toil through automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement incident management processes with severity classification and response procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design on-call rotations, escalation policies, and pager duty practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conduct blameless postmortems with systemic root cause analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply capacity planning and reliability patterns (retries, circuit breakers, bulkheads, timeouts)"
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
            children: "SRE vs DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRE is Google's engineering practice; DevOps is a cultural movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRE operationalizes DevOps with measurable reliability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLO/SLI/SLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicators measure; Objectives target; Agreements contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal SLOs tighter than external SLAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Budgets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed unreliability = 1 - SLO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release gating when budget exhausted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toil Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual, repetitive, automatable work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRE teams spend <50% on operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incident Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severity-based response with clear roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blameless postmortems find system causes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retries, circuit breakers, bulkheads, timeouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build resilience into service design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demand forecasting and resource modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proactive scaling prevents incidents"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[SRE vs DevOps] --> B[SLO/SLI/SLA]\n    B --> C[Error Budgets]\n    C --> D[Toil Elimination]\n    D --> E[Incident Management]\n    E --> F[Blameless Postmortems]\n    F --> G[Capacity Planning]\n    G --> H[Reliability Patterns]\n    H --> I[Retries]\n    H --> J[Circuit Breakers]\n    H --> K[Bulkheads]\n    H --> L[Timeouts]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "171-sre-vs-devops",
      children: "17.1 SRE vs DevOps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SRE (Site Reliability Engineering) originates from Google, formalized by Ben Treynor Sloss in 2003. While DevOps is a cultural movement emphasizing collaboration between development and operations, SRE is a specific engineering practice with measurable outcomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Differences:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DORA metrics (deploy frequency, lead time, MTTR, change failure rate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLOs, error budgets, availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Principles and practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific engineering role with defined responsibilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operating model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-functional teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRE team with explicit reliability ownership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No equivalent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error budget gates release velocity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toil limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50% maximum operational work"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SRE operationalizes DevOps principles with engineering rigor. Many organizations implement SRE practices within a DevOps culture."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "172-service-level-objectives-slo-sli-sla",
      children: "17.2 Service Level Objectives (SLO, SLI, SLA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Indicator (SLI)"
      }), " — A quantitative measure of some aspect of the service:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request latency (at p95, < 500ms)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Availability (fraction of successful requests)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Throughput (requests per second)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Freshness (data age in a data pipeline)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correctness (fraction of correct responses)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Objective (SLO)"
      }), " — A target value or range for an SLI:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"P95 request latency is less than 500ms over a 28-day rolling window\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"99.9% of requests are successful over a 30-day window\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Level Agreement (SLA)"
      }), " — A contractual commitment to customers, typically with financial penalties for breach. Internal SLOs should be more stringent than customer SLAs to provide a detection and response buffer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLO Design Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define SLOs for user-facing services first (they have the most direct business impact)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a few carefully chosen SLOs rather than many (5 or fewer per service)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specify the measurement window (28 days, 30 days, rolling window)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define both target and measurement methodology explicitly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review SLOs regularly as the service and usage patterns evolve"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "173-error-budgets",
      children: "17.3 Error Budgets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An error budget is the acceptable amount of unreliability. For a 99.9% SLO over 28 days:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error Budget = (1 - SLO) × Time Window\n             = 0.001 × (28 × 24 × 60 × 60)\n             = 0.001 × 2,419,200 seconds\n             = 2,419 seconds ˜ 40 minutes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Budget for Common SLO Targets (30-day window):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SLO Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Error Budget"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Daily Allowable Error"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monthly Allowable Downtime"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14.4 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.2 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.9%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "86.4 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.95%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.05%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43.2 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21.6 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.6 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.3 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.999%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.86 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25.9 seconds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Budget Mechanics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each SLO defines a budget"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budget is consumed by events that violate the SLO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budget is replenished when the measurement window shifts past the violation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If budget is fully consumed, releases are halted until budget recovers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error budget alerts trigger before full depletion (burn-rate alerts)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Burn-rate alerts"
      }), " notify operators when error budget consumption exceeds expected rates:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Multi-window burn-rate alert: 2% of 30-day budget in 1 hour\ngroups:\n  - name: slo-alerts\n    rules:\n      - alert: ErrorBudgetBurn\n        expr: |\n          (1 - (sum(rate(http_requests_total{status=~\"5..\"}[1h]))\n                / sum(rate(http_requests_total[1h]))))\n          < 0.99\n        for: 1h\n        labels:\n          severity: critical\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "174-toil-elimination",
      children: "17.4 Toil Elimination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toil is operational work that is manual, repetitive, automatable, tactical, and devoid of enduring value."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Toil Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual"
        }), " — Requires human intervention; no automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repetitive"
        }), " — Occurs frequently with the same pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatable"
        }), " — Could be automated with appropriate engineering effort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tactical"
        }), " — Reactive rather than strategic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No enduring value"
        }), " — Service does not improve when this work is done"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples of Toil vs Valuable Work:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Toil"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Valuable Engineering"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manually restarting crashed processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building auto-restart mechanisms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotating credentials by hand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automating credential rotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responding to non-actionable alerts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tuning alert thresholds and routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hand-configuring monitoring dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automating dashboard provisioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manually provisioning infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing Infrastructure as Code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolving repeated support tickets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building self-service tooling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applying security patches manually"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automating patch management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The 50% Rule:"
      }), " SRE teams should spend no more than 50% of their time on operational work. The remaining time must be invested in engineering projects that reduce future operational load. This is a ceiling, not a target — aim for less toil."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Toil Elimination Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure current toil percentage (time tracking, ticket analysis)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify top toil contributors (alerts, tickets, manual procedures)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize automation projects with clear time-to-value calculations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate, test, and iterate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track toil reduction over time with dashboards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "175-incident-management",
      children: "17.5 Incident Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Incident Severity Classification:"
      })
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
            children: "Major component degradation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout flow failing for some users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEV-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor issue, no customer impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-critical API returning high latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEV-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cosmetic or informational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard labeling issue, typo in docs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Incident Response Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection"
        }), " — Alert fires or user reports issue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Triage"
        }), " — Determine severity, declare incident, assemble response team with incident commander"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation"
        }), " — Stabilize the system (rollback deployment, redirect traffic, scale up resources)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution"
        }), " — Apply permanent fix to address root cause"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow-up"
        }), " — Conduct blameless postmortem, implement preventive measures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Communication During Incidents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incident commander coordinates the response (single decision-maker)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dedicated communication channel (Slack, Teams)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular status updates to stakeholders (every 30 minutes for SEV-1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status page updates for customer-facing incidents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear handoff between responders during shift changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "176-on-call-practices",
      children: "17.6 On-Call Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On-Call Rotation Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow-the-sun"
        }), " — Primary in each time zone during business hours. Coverage across global teams."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly rotation"
        }), " — Primary handles incidents for one full week. Simple and predictable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Escalation tiers"
        }), " — Primary ? secondary ? engineering manager. Ensures incidents don't fall through cracks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On-Call Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limit on-call frequency to one week per rotation minimum (recovery time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide adequate time-off after intense on-call periods (especially after SEV-1s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain clear runbooks for common incident types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure escalation paths are well-defined and tested"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate incident response as much as possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor on-call load and adjust rotation schedules"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "177-blameless-postmortems",
      children: "17.7 Blameless Postmortems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postmortems are written analyses of incidents. The goal is to understand what happened, why it happened, and how to prevent recurrence."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Postmortem Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Summary"
        }), " — One-paragraph overview of the incident"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeline"
        }), " — Chronological sequence of events with timestamps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact"
        }), " — User impact, duration, affected users, financial cost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause"
        }), " — Technical and systemic causes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trigger"
        }), " — What initiated the incident"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection"
        }), " — How was the incident discovered? (alert, user report, monitoring)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response"
        }), " — Actions taken during mitigation, including what worked and what didn't"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contributing Factors"
        }), " — Conditions that enabled the incident to occur or worsen"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action Items"
        }), " — Concrete, assigned, tracked remediation steps with deadlines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lessons Learned"
        }), " — Insights for future improvement"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Blame-Free Principle:"
      }), " If a human could make a mistake, the system enabled it. Postmortems find system weaknesses, not human failures. Blaming individuals discourages reporting and prevents learning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Postmortem Cadence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SEV-1: Postmortem within 5 business days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SEV-2: Postmortem within 10 business days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SEV-3/4: Optional, lightweight review"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "178-capacity-planning",
      children: "17.8 Capacity Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Capacity planning ensures the system has sufficient resources for current and projected demand."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Demand Forecasting"
        }), " — Predict future usage based on historical trends, business plans, marketing campaigns, seasonal patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Modeling"
        }), " — Map demand to resource requirements (CPU, memory, storage, bandwidth, database connections)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provisioning"
        }), " — Acquire resources before they are needed (allow lead time for hardware procurement)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitoring"
        }), " — Track utilization trends against projections and adjust plans"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Autoscaling"
      }), " reduces the need for manual capacity planning for variable workloads. However, proactive planning is still required for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predictable growth (new users, feature adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large-scale events (product launches, marketing campaigns)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardware procurement lead times (especially on-premises)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budget planning and approval cycles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "179-reliability-patterns",
      children: "17.9 Reliability Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Retries"
      }), " — Automatically retry transient failures with exponential backoff and jitter:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "async function retryWithBackoff<T>(\n  fn: () => Promise<T>,\n  maxRetries: number = 3,\n  baseDelayMs: number = 100,\n): Promise<T> {\n  for (let attempt = 0; attempt < maxRetries; attempt++) {\n    try {\n      return await fn();\n    } catch (error) {\n      if (attempt === maxRetries - 1) throw error;\n      const delay = baseDelayMs * Math.pow(2, attempt);\n      const jitter = Math.random() * delay;\n      await new Promise(resolve => setTimeout(resolve, delay + jitter));\n    }\n  }\n  throw new Error('Unreachable');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Circuit Breaker"
      }), " — Stop making requests to a failing service to prevent cascade failures:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLOSED"
        }), " — Normal operation. Requests pass through."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OPEN"
        }), " — Requests fail immediately. No calls to downstream service."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HALF-OPEN"
        }), " — Limited requests allowed through to test recovery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bulkhead"
      }), " — Isolate components so failure in one does not cascade:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate thread pools for different service dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate connection pools per downstream service"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate process boundaries for critical vs non-critical features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Based on ship design: compartments isolate flooding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeouts"
      }), " — Prevent operations from hanging indefinitely:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect timeout"
        }), " — Time to establish TCP connection (5s typical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Request timeout"
        }), " — Time for complete request/response (30s typical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read timeout"
        }), " — Time between data packets (10s typical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write timeout"
        }), " — Time to send request data (10s typical)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always configure timeouts for every network call"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graceful Degradation"
      }), " — When dependencies fail, degrade rather than fail completely:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Display cached data when database is unavailable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disable non-critical features during overload (feature flags)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return degraded responses with clear status indicators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize core functionality over peripheral features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-slo-compliance-tracker",
      children: "Example 1: SLO Compliance Tracker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SLO {\n  name: string;\n  targetPercent: number;\n  windowDays: number;\n  goodEvents: number;\n  totalEvents: number;\n}\n\ninterface ErrorBudgetState {\n  totalBudgetSeconds: number;\n  consumedSeconds: number;\n  remainingPercent: number;\n  burnRatePerHour: number;\n  status: 'healthy' | 'warning' | 'critical' | 'exhausted';\n}\n\nclass SLOTracker {\n  calculateErrorBudget(slo: SLO): ErrorBudgetState {\n    const windowSeconds = slo.windowDays * 86400;\n    const totalBudgetSeconds = windowSeconds * (1 - slo.targetPercent / 100);\n    const currentReliability = slo.totalEvents > 0 ? slo.goodEvents / slo.totalEvents : 1;\n    const consumedSeconds = windowSeconds * Math.max(0, (1 - slo.targetPercent / 100) - (currentReliability));\n    const remainingPercent = totalBudgetSeconds > 0 ? ((totalBudgetSeconds - consumedSeconds) / totalBudgetSeconds) * 100 : 0;\n\n    let status: ErrorBudgetState['status'] = 'healthy';\n    if (remainingPercent <= 0) status = 'exhausted';\n    else if (remainingPercent < 10) status = 'critical';\n    else if (remainingPercent < 30) status = 'warning';\n\n    return {\n      totalBudgetSeconds: Math.round(totalBudgetSeconds),\n      consumedSeconds: Math.max(0, Math.round(consumedSeconds)),\n      remainingPercent: Math.round(remainingPercent * 100) / 100,\n      burnRatePerHour: Math.round((consumedSeconds / (windowSeconds / 3600)) * 100) / 100,\n      status,\n    };\n  }\n\n  generateDashboardReport(slos: SLO[]): string {\n    let report = '# SLO Dashboard Report\\n\\n';\n    report += '| SLO | Target | Current | Budget Remaining | Status |\\n';\n    report += '|-----|--------|---------|-----------------|--------|\\n';\n\n    for (const slo of slos) {\n      const budget = this.calculateErrorBudget(slo);\n      const icons = { healthy: '?', warning: '??', critical: '??', exhausted: '??' };\n      const current = slo.totalEvents > 0\n        ? `${((slo.goodEvents / slo.totalEvents) * 100).toFixed(3)}%`\n        : 'N/A (no data)';\n      report += `| ${slo.name} | ${slo.targetPercent}% | ${current} | ${budget.remainingPercent}% | ${icons[budget.status]} ${budget.status} |\\n`;\n    }\n\n    return report;\n  }\n}\n\nconst tracker = new SLOTracker();\nconst slos: SLO[] = [\n  { name: 'api-availability', targetPercent: 99.9, windowDays: 30, goodEvents: 998500, totalEvents: 1000000 },\n  { name: 'api-latency', targetPercent: 99.5, windowDays: 30, goodEvents: 995500, totalEvents: 1000000 },\n  { name: 'payment-success', targetPercent: 99.99, windowDays: 30, goodEvents: 999800, totalEvents: 1000000 },\n];\nconsole.log(tracker.generateDashboardReport(slos));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-circuit-breaker-implementation",
      children: "Example 2: Circuit Breaker Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type CircuitState = 'CLOSED' | 'OPEN' | 'HALF_OPEN';\n\nclass CircuitBreaker {\n  private state: CircuitState = 'CLOSED';\n  private failureCount = 0;\n  private lastFailureTime = 0;\n  private readonly threshold: number;\n  private readonly recoveryTimeoutMs: number;\n  private readonly halfOpenMaxRequests: number;\n  private halfOpenRequests = 0;\n\n  constructor(\n    private readonly name: string,\n    options: { threshold?: number; recoveryTimeoutMs?: number; halfOpenMaxRequests?: number } = {},\n  ) {\n    this.threshold = options.threshold ?? 5;\n    this.recoveryTimeoutMs = options.recoveryTimeoutMs ?? 30000;\n    this.halfOpenMaxRequests = options.halfOpenMaxRequests ?? 3;\n  }\n\n  async call<T>(fn: () => Promise<T>): Promise<T> {\n    if (this.state === 'OPEN') {\n      if (Date.now() - this.lastFailureTime > this.recoveryTimeoutMs) {\n        console.log(`[${this.name}] Circuit ? HALF_OPEN`);\n        this.state = 'HALF_OPEN';\n        this.halfOpenRequests = 0;\n      } else {\n        throw new Error(`Circuit breaker OPEN for ${this.name}`);\n      }\n    }\n\n    if (this.state === 'HALF_OPEN') {\n      this.halfOpenRequests++;\n      if (this.halfOpenRequests > this.halfOpenMaxRequests) {\n        throw new Error(`Circuit breaker OPEN for ${this.name} (half-open limit)`);\n      }\n    }\n\n    try {\n      const result = await fn();\n      this.onSuccess();\n      return result;\n    } catch (error) {\n      this.onFailure();\n      throw error;\n    }\n  }\n\n  private onSuccess(): void {\n    if (this.state === 'HALF_OPEN') {\n      console.log(`[${this.name}] Circuit ? CLOSED (recovered)`);\n    }\n    this.state = 'CLOSED';\n    this.failureCount = 0;\n  }\n\n  private onFailure(): void {\n    this.failureCount++;\n    this.lastFailureTime = Date.now();\n\n    if (this.state === 'HALF_OPEN' || this.failureCount >= this.threshold) {\n      console.log(`[${this.name}] Circuit ? OPEN (${this.failureCount} failures)`);\n      this.state = 'OPEN';\n    }\n  }\n\n  getState(): CircuitState { return this.state; }\n}\n\nasync function simulateRequest(success: boolean, delayMs: number): Promise<string> {\n  await new Promise(r => setTimeout(r, delayMs));\n  if (!success) throw new Error('Request failed');\n  return 'success';\n}\n\nasync function demoCircuitBreaker(): Promise<void> {\n  const cb = new CircuitBreaker('payment-service', { threshold: 3, recoveryTimeoutMs: 2000 });\n\n  for (let i = 0; i < 12; i++) {\n    try {\n      const result = await cb.call(() => simulateRequest(i < 4, 50));\n      console.log(`[${i}] ? ${result}`);\n    } catch (error) {\n      console.log(`[${i}] ? ${(error as Error).message}`);\n    }\n    await new Promise(r => setTimeout(r, 100));\n  }\n}\n\ndemoCircuitBreaker();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-on-call-schedule-generator",
      children: "Example 3: On-Call Schedule Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Engineer {\n  name: string;\n  timezone: string;\n  senior: boolean;\n}\n\ninterface Shift {\n  primary: string;\n  secondary: string;\n  startDate: Date;\n  durationDays: number;\n}\n\nclass OnCallScheduler {\n  generateRotation(engineers: Engineer[], durationDays: number, startDate: Date): Shift[] {\n    const shifts: Shift[] = [];\n    const primaries = [...engineers];\n    const secondaries = [...engineers].reverse();\n    let currentDate = new Date(startDate);\n    const totalDays = 90; // Generate 90 days of schedule\n\n    while (currentDate < new Date(startDate.getTime() + totalDays * 86400000)) {\n      for (let i = 0; i < primaries.length; i++) {\n        const primary = primaries[i];\n        const secondary = secondaries[i];\n\n        shifts.push({\n          primary: primary.name,\n          secondary: secondary.name,\n          startDate: new Date(currentDate),\n          durationDays,\n        });\n\n        currentDate = new Date(currentDate.getTime() + durationDays * 86400000);\n        if (currentDate > new Date(startDate.getTime() + totalDays * 86400000)) break;\n      }\n\n      // Rotate for next cycle\n      primaries.push(primaries.shift()!);\n      secondaries.push(secondaries.shift()!);\n    }\n\n    return shifts;\n  }\n\n  generateScheduleReport(engineers: Engineer[], durationDays: number): string {\n    const shifts = this.generateRotation(engineers, durationDays, new Date());\n    let report = '# On-Call Rotation Schedule\\n\\n';\n    report += '| Week | Primary | Secondary | Start Date |\\n';\n    report += '|------|---------|-----------|------------|\\n';\n\n    shifts.forEach((shift, i) => {\n      report += `| ${i + 1} | ${shift.primary} | ${shift.secondary} | ${shift.startDate.toISOString().split('T')[0]} |\\n`;\n    });\n\n    // Calculate fairness metrics\n    const primaryCounts = new Map<string, number>();\n    shifts.forEach(s => primaryCounts.set(s.primary, (primaryCounts.get(s.primary) || 0) + 1));\n\n    report += '\\n## Fairness Metrics\\n\\n';\n    report += '| Engineer | Primary Shifts |\\n';\n    report += '|----------|----------------|\\n';\n    const maxShifts = Math.max(...primaryCounts.values());\n    const minShifts = Math.min(...primaryCounts.values());\n    for (const [name, count] of primaryCounts) {\n      report += `| ${name} | ${count} |\\n`;\n    }\n    report += `\\nMax difference: ${maxShifts - minShifts} shifts\\n`;\n    report += maxShifts - minShifts <= 1 ? '? Schedule is fair\\n' : '?? Schedule imbalance detected\\n';\n\n    return report;\n  }\n}\n\nconst scheduler = new OnCallScheduler();\nconst team: Engineer[] = [\n  { name: 'Alice', timezone: 'America/New_York', senior: true },\n  { name: 'Bob', timezone: 'America/Chicago', senior: false },\n  { name: 'Carol', timezone: 'America/Denver', senior: true },\n  { name: 'Dave', timezone: 'America/Los_Angeles', senior: false },\n  { name: 'Eve', timezone: 'Europe/London', senior: true },\n  { name: 'Frank', timezone: 'Asia/Tokyo', senior: false },\n];\n\nconsole.log(scheduler.generateScheduleReport(team, 7));\n"
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
            children: "SLO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target reliability for a service (99.9% availability)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual measurement of reliability (request success rate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contractual commitment with financial penalties"
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
            children: "Circuit Breaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-fast when downstream service degrades"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential backoff with jitter for transient failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blameless Postmortem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systemic analysis, not individual blame"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SRE vs DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps=culture, SRE=engineering practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLO/SLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure and target reliability quantitatively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 min/month for 99.9% SLO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual, repetitive, automatable, no enduring value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incidents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEV-1 to SEV-4 with response SLAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit Breaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSED ? OPEN ? HALF-OPEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "On-Call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly rotation, follow-the-sun, escalation tiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Postmortem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summary, timeline, root cause, action items"
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
            children: "Web service reliability SLOs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud infrastructure capacity planning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise incident management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resilience patterns for distributed systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-budget-tracker",
      children: "Error Budget Tracker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Error budgets bridge the gap between reliability and velocity. The following implementation tracks SLO compliance, calculates burn rate, and triggers alerts when the error budget is at risk."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SLOConfig {\n  name: string;\n  target: number; // e.g., 0.999 for 99.9%\n  windowDays: number;\n}\n\ninterface SLIMeasurement {\n  timestamp: Date;\n  totalRequests: number;\n  successfulRequests: number;\n  latencyP99Ms: number;\n  latencyThresholdMs: number;\n}\n\ninterface ErrorBudgetState {\n  sloName: string;\n  budgetRemaining: number; // percentage\n  burnRate: number; // per hour\n  daysUntilExhaustion: number;\n  status: 'healthy' | 'warning' | 'critical' | 'exhausted';\n}\n\nclass ErrorBudgetTracker {\n  private measurements: SLIMeasurement[] = [];\n\n  addMeasurement(m: SLIMeasurement): void {\n    this.measurements.push(m);\n  }\n\n  calculate(config: SLOConfig): ErrorBudgetState {\n    const windowStart = new Date();\n    windowStart.setDate(windowStart.getDate() - config.windowDays);\n\n    const windowMeasurements = this.measurements.filter(m => m.timestamp >= windowStart);\n    const totalGood = windowMeasurements.reduce((s, m) => s + m.successfulRequests, 0);\n    const total = windowMeasurements.reduce((s, m) => s + m.totalRequests, 0);\n    const actualAvailability = total > 0 ? totalGood / total : 1;\n\n    const errorBudgetTotal = 1 - config.target;\n    const errorBudgetConsumed = Math.max(0, 1 - actualAvailability);\n    const budgetRemaining = Math.max(0, (errorBudgetTotal - errorBudgetConsumed) / errorBudgetTotal * 100);\n\n    const recent = this.measurements.slice(-24);\n    const recentGood = recent.reduce((s, m) => s + m.successfulRequests, 0);\n    const recentTotal = recent.reduce((s, m) => s + m.totalRequests, 0);\n    const recentFailureRate = recentTotal > 0 ? 1 - recentGood / recentTotal : 0;\n    const burnRate = recentFailureRate / errorBudgetTotal * 24;\n\n    const remainingBudget = errorBudgetTotal - errorBudgetConsumed;\n    const daysUntilExhaustion = recentFailureRate > 0\n      ? Math.round(remainingBudget / (recentFailureRate / 24) / 24)\n      : Infinity;\n\n    let status: ErrorBudgetState['status'] = 'healthy';\n    if (budgetRemaining <= 0) status = 'exhausted';\n    else if (budgetRemaining < 25) status = 'critical';\n    else if (budgetRemaining < 50) status = 'warning';\n\n    return {\n      sloName: config.name,\n      budgetRemaining: Math.round(budgetRemaining * 100) / 100,\n      burnRate: Math.round(burnRate * 100) / 100,\n      daysUntilExhaustion: daysUntilExhaustion === Infinity ? 999 : daysUntilExhaustion,\n      status,\n    };\n  }\n}\n\nconst tracker = new ErrorBudgetTracker();\ntracker.addMeasurement({ timestamp: new Date(), totalRequests: 10000, successfulRequests: 9980, latencyP99Ms: 120, latencyThresholdMs: 200 });\ntracker.addMeasurement({ timestamp: new Date(Date.now() - 3600000), totalRequests: 9500, successfulRequests: 9200, latencyP99Ms: 350, latencyThresholdMs: 200 });\n\nconst budget = tracker.calculate({ name: 'API Latency', target: 0.995, windowDays: 30 });\nconsole.log(`SLO: ${budget.sloName}, Budget: ${budget.budgetRemaining}%, Status: ${budget.status}`);\nconsole.log(`Burn Rate: ${budget.burnRate}/hr, Days Until Exhaustion: ${budget.daysUntilExhaustion}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Error budget tracking provides a quantitative framework for balancing feature velocity against reliability, enabling data-driven release decisions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What is the 50% rule in SRE?"
      }), "**A)** 50% test coverage target", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Max 50% of time on operational work", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** 50% budget for tools", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** 50% of team must be on-call", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Max 50% of time on operational work</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What does a circuit breaker do when OPEN?"
        }), "**A)** Allow all requests", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Fail fast without calling the service", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Log errors", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Retry immediately", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Fail fast without calling the service</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: Why are postmortems blameless?"
          }), "**A)** To find who to blame", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** To focus on systemic causes, not individual mistakes", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** To avoid documentation", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** To reduce incident response time", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** To focus on systemic causes, not individual mistakes</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is the error budget for 99.99% SLO over 30 days?"
            }), "**A)** 43 minutes", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** 4.3 minutes", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** 7.2 hours", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** 86.4 seconds", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** 4.3 minutes (30 × 24 × 60 × 60 × 0.0001 = 259.2 seconds ˜ 4.3 minutes)</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: Which on-call pattern distributes responsibility across time zones?"
              }), "**A)** Weekly rotation", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Follow-the-sun", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Escalation tiers", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Random rotation", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Follow-the-sun</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// sre\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'sre', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "SRE applies software engineering to operations problems with measurable reliability outcomes. SLOs, SLIs, and error budgets quantify reliability and gate release velocity, creating a shared vocabulary between developers and operators. Toil elimination ensures SRE teams invest at least 50% of their time in engineering projects rather than manual operations. Incident management with severity classification, clear roles (incident commander), and blameless postmortems drives continuous improvement through systemic analysis. On-call rotations distribute operational load fairly with follow-the-sun, weekly, or escalation-tier patterns. Capacity planning proactively ensures resources match demand through forecasting and modeling. Reliability patterns (retries with exponential backoff and jitter, circuit breakers with three states, bulkheads with isolated resources, timeouts, and graceful degradation) build resilience into service design and prevent cascading failures."
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does an error budget balance reliability and feature velocity? What happens when the budget is exhausted?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What distinguishes toil from valuable operational work? Provide three examples of each."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the purpose of blameless postmortems? Why does blaming individuals undermine reliability improvement?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does a circuit breaker prevent cascading failures in a microservice architecture?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between an SLO and an SLA? Can they be equal?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Define SLOs for a REST API service: latency (95% of requests under 300ms), availability (99.95%), and correctness (99.99% error-free). Calculate error budgets for each over a 28-day window. Create burn-rate alert rules for 2-hour and 6-hour consumption windows."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Measure operational toil in a production environment for one week. Categorize activities as toil or valuable. Calculate toil percentage. Propose automation projects that would reduce toil by 50%."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a blameless postmortem for a fictional incident: database connection pool exhaustion caused by a traffic spike from a marketing campaign. Include timeline, root cause, contributing factors, action items, and lessons learned."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Design a complete SRE framework for a SaaS platform with 99.99% customer SLA. The platform comprises 20 microservices, handles 50,000 requests per second, and has a team of 6 SREs supporting 50 developers. Define: SLOs for each service tier (critical, important, best-effort), error budget policy (consumption thresholds, release gating, budget recovery), incident severity matrix with response SLAs, on-call rotation schedule (6-person team, 24/7 coverage), toil measurement and reduction targets, capacity planning process (quarterly, trigger-based), and postmortem cadence and review process. Include an error budget report template and explain how the error budget policy is communicated to development teams."
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