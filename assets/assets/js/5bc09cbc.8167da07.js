"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7550],{

/***/ 12937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_16_mlops_production_08_incident_response_md_5bc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-16-mlops-production-08-incident-response-md-5bc.json
const site_docs_courses_ai_engineering_placement_16_mlops_production_08_incident_response_md_5bc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/mlops-production/08-incident-response","title":"Incident Response","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/16-mlops-production/08-incident-response.md","sourceDirName":"courses/ai-engineering-placement/16-mlops-production","slug":"/ai-engineering-placement/16-mlops-production/08-incident-response","permalink":"/ai-engineering-journey/ai-engineering-placement/16-mlops-production/08-incident-response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":213,"frontMatter":{"id":"08-incident-response","slug":"/ai-engineering-placement/16-mlops-production/08-incident-response","title":"Incident Response","sidebar_label":"Incident Response","sidebar_position":213},"sidebar":"placementSidebar","previous":{"title":"Cost Management","permalink":"/ai-engineering-journey/ai-engineering-placement/16-mlops-production/07-cost-management"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/16-mlops-production/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/16-mlops-production/08-incident-response.md


const frontMatter = {
	id: '08-incident-response',
	slug: '/ai-engineering-placement/16-mlops-production/08-incident-response',
	title: 'Incident Response',
	sidebar_label: 'Incident Response',
	sidebar_position: 213
};
const contentTitle = 'Incident Response';

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
  "value": "8.1 ML Incident Types",
  "id": "81-ml-incident-types",
  "level": 2
}, {
  "value": "8.2 Severity Classification",
  "id": "82-severity-classification",
  "level": 2
}, {
  "value": "8.3 Incident Detection",
  "id": "83-incident-detection",
  "level": 2
}, {
  "value": "8.4 Runbooks",
  "id": "84-runbooks",
  "level": 2
}, {
  "value": "8.5 Post-Mortem Analysis",
  "id": "85-post-mortem-analysis",
  "level": 2
}, {
  "value": "8.6 On-Call Practices",
  "id": "86-on-call-practices",
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
        id: "incident-response",
        children: "Incident Response"
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
            children: "Understand common ML production incidents and their root causes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build an incident response plan with severity levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement automated incident detection and alerting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design runbooks for common ML incidents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conduct post-mortems and track incident metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up on-call rotations for ML systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MLOps bridges the gap between experiment and production. Experiment tracking, CI/CD, model serving, and drift monitoring keep AI systems reliable. This module covers the operational side of AI engineering."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding incident response is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how incident response works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML Incident Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model failures, data issues, infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severity Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEV1-SEV4 with response SLAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated monitoring and alerting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step-by-step response procedures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-Mortem Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root cause, timeline, action items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-Call Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotations, escalation, incident commander"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Incident Occurs] --> B[Detection]\r\n    B --> C{Severity?}\r\n    C -->|SEV1| D[Immediate Response]\r\n    C -->|SEV2| E[Within 15min]\r\n    C -->|SEV3| F[Within 1hr]\r\n    C -->|SEV4| G[Next Business Day]\r\n    D --> H[Triage]\r\n    E --> H\r\n    H --> I[Apply Runbook]\r\n    I --> J{Resolved?}\r\n    J -->|Yes| K[Post-Mortem]\r\n    J -->|No| L[Escalate]\r\n    L --> M[Senior Engineer]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-ml-incident-types",
      children: "8.1 ML Incident Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML production incidents differ from traditional software incidents. They often involve silent failures where the system appears to work but produces incorrect results."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\r\nfrom dataclasses import dataclass\r\nfrom datetime import datetime\r\nfrom typing import Optional, List\r\n\r\nclass IncidentType(Enum):\r\n    MODEL_DEGRADATION = \"model_degradation\"  # Accuracy drop, drift\r\n    DATA_FAILURE = \"data_failure\"            # Missing features, schema change\r\n    INFRASTRUCTURE = \"infrastructure\"        # GPU failure, OOM, network\r\n    PIPELINE_FAILURE = \"pipeline_failure\"    # Training job failure\r\n    SECURITY = \"security\"                    # Model extraction, prompt injection\r\n    LLM_HALLUCINATION = \"llm_hallucination\"  # Unsafe or incorrect LLM output\r\n    LATENCY_SPIKE = \"latency_spike\"          # p99 latency exceeds SLA\r\n    COST_ANOMALY = \"cost_anomaly\"            # Unexpected cost spike\r\n\r\n@dataclass\r\nclass Incident:\r\n    incident_id: str\r\n    type: IncidentType\r\n    severity: str  # SEV1-SEV4\r\n    title: str\r\n    description: str\r\n    detected_at: datetime\r\n    detected_by: str  # \"monitoring\" or \"user_report\"\r\n    affected_models: List[str]\r\n    affected_users: Optional[int] = None\r\n    resolved_at: Optional[datetime] = None\r\n    root_cause: Optional[str] = None\r\n    action_items: List[str] = None\r\n\r\n    def duration_minutes(self) -> Optional[float]:\r\n        if self.resolved_at:\r\n            return (self.resolved_at - self.detected_at).total_seconds() / 60\r\n        return None\r\n\r\n## Common ML incidents\r\nincidents = [\r\n    Incident(\"INC-001\", IncidentType.MODEL_DEGRADATION, \"SEV2\",\r\n             \"Price prediction MAE increased 40%\",\r\n             \"MAE jumped from 2.1 to 2.95 after data pipeline update introduced feature encoding bug\",\r\n             datetime.utcnow(), \"monitoring\", [\"PricePredictor-v3\"]),\r\n    Incident(\"INC-002\", IncidentType.DATA_FAILURE, \"SEV1\",\r\n             \"Critical feature 'price_history' is 100% null\",\r\n             \"ETL job failed silently, all price_history features are null affecting 100% of predictions\",\r\n             datetime.utcnow(), \"monitoring\", [\"PricePredictor-v3\", \"DemandForecast-v2\"], 50000),\r\n    Incident(\"INC-003\", IncidentType.LLM_HALLUCINATION, \"SEV1\",\r\n             \"Customer support LLM provided incorrect refund policy\",\r\n             \"Model generated fictional refund amounts, leading to customer complaints and potential liability\",\r\n             datetime.utcnow(), \"user_report\", [\"SupportBot-v4\"], 150),\r\n]\r\n\r\nfor inc in incidents:\r\n    print(f\"{inc.severity} | {inc.incident_id} | {inc.title}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ML-specific incident challenges"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's Hard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Silent failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model returns results but they're wrong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution monitoring, A/B comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow degradation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics drift over days/weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trend analysis with statistical alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data pipeline issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failures cascade silently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data quality checks at every stage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM hallucinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output validation, guardrails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model fairness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias emerges over time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness monitoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-severity-classification",
      children: "8.2 Severity Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A clear severity framework ensures appropriate response times and resource allocation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SeverityFramework:\r\n    \"\"\"Define severity levels and response SLAs for ML incidents.\"\"\"\r\n\r\n    SEVERITIES = {\r\n        \"SEV1\": {\r\n            \"name\": \"Critical\",\r\n            \"description\": \"Complete system outage or incorrect predictions affecting >10% of users\",\r\n            \"response_sla_minutes\": 5,\r\n            \"resolution_sla_minutes\": 60,\r\n            \"notification\": \"PagerDuty + Slack + Phone\",\r\n            \"responder\": \"Incident Commander + Senior ML Engineer\",\r\n            \"examples\": [\r\n                \"Model returns NaN for all predictions\",\r\n                \"Critical feature permanently missing\",\r\n                \"LLM producing unsafe content at scale\",\r\n                \"Serving endpoint down\"\r\n            ]\r\n        },\r\n        \"SEV2\": {\r\n            \"name\": \"Major\",\r\n            \"description\": \"Significant degradation affecting 1-10% of users or key metric drop >20%\",\r\n            \"response_sla_minutes\": 15,\r\n            \"resolution_sla_minutes\": 240,\r\n            \"notification\": \"Slack + Email\",\r\n            \"responder\": \"ML Engineer on-call\",\r\n            \"examples\": [\r\n                \"MAE increased 30%+\",\r\n                \"Feature pipeline delayed by >1 hour\",\r\n                \"Model version serving wrong artifact\"\r\n            ]\r\n        },\r\n        \"SEV3\": {\r\n            \"name\": \"Minor\",\r\n            \"description\": \"Minor degradation <1% users or non-critical metrics affected\",\r\n            \"response_sla_minutes\": 60,\r\n            \"resolution_sla_minutes\": \"Next business day\",\r\n            \"notification\": \"Slack\",\r\n            \"responder\": \"Team member during business hours\",\r\n            \"examples\": [\r\n                \"Slight accuracy drop (<5%)\",\r\n                \"Non-critical feature deprecated\",\r\n                \"Minor latency increase\"\r\n            ]\r\n        },\r\n        \"SEV4\": {\r\n            \"name\": \"Low\",\r\n            \"description\": \"Cosmetic issues, documentation bugs, feature requests\",\r\n            \"response_sla_minutes\": \"Next business day\",\r\n            \"resolution_sla_minutes\": \"Next sprint\",\r\n            \"notification\": \"Jira ticket\",\r\n            \"responder\": \"Product owner/PM\",\r\n            \"examples\": [\r\n                \"Dashboard visualization bug\",\r\n                \"Documentation error\",\r\n                \"Non-critical alert noise\"\r\n            ]\r\n        }\r\n    }\r\n\r\n    @staticmethod\r\n    def classify(impact_pct: float, metric_drop_pct: float, is_safety: bool = False) -> str:\r\n        \"\"\"Classify incident severity based on impact.\"\"\"\r\n        if is_safety or impact_pct > 10 or metric_drop_pct > 50:\r\n            return \"SEV1\"\r\n        if impact_pct > 1 or metric_drop_pct > 20:\r\n            return \"SEV2\"\r\n        if impact_pct > 0.1 or metric_drop_pct > 5:\r\n            return \"SEV3\"\r\n        return \"SEV4\"\r\n\r\n    @staticmethod\r\n    def get_sla(severity: str) -> dict:\r\n        return SeverityFramework.SEVERITIES.get(severity, {})\r\n\r\nsev = SeverityFramework()\r\nprint(f\"Classification: {sev.classify(impact_pct=5, metric_drop_pct=30)}\")\r\nprint(sev.get_sla(\"SEV1\")[\"response_sla_minutes\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incident response flow with SLA tracking"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport threading\r\nfrom datetime import datetime, timedelta\r\n\r\nclass SLATracker:\r\n    \"\"\"Track response and resolution SLAs for incidents.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.active_incidents = {}\r\n\r\n    def declare_incident(self, incident_id: str, severity: str):\r\n        \"\"\"Start tracking SLA for a new incident.\"\"\"\r\n        sla = SeverityFramework.get_sla(severity)\r\n        now = datetime.utcnow()\r\n\r\n        self.active_incidents[incident_id] = {\r\n            \"severity\": severity,\r\n            \"response_deadline\": now + timedelta(minutes=sla.get(\"response_sla_minutes\", 60)),\r\n            \"resolution_deadline\": now + timedelta(minutes=sla.get(\"resolution_sla_minutes\", 240)) if isinstance(sla.get(\"resolution_sla_minutes\"), int) else None,\r\n            \"response_at\": None,\r\n            \"resolved_at\": None\r\n        }\r\n\r\n        # Start monitoring thread\r\n        threading.Thread(target=self._monitor_sla, args=(incident_id,), daemon=True).start()\r\n\r\n    def acknowledge(self, incident_id: str):\r\n        \"\"\"Record response time.\"\"\"\r\n        if incident_id in self.active_incidents:\r\n            self.active_incidents[incident_id][\"response_at\"] = datetime.utcnow()\r\n\r\n    def resolve(self, incident_id: str):\r\n        \"\"\"Record resolution time.\"\"\"\r\n        if incident_id in self.active_incidents:\r\n            self.active_incidents[incident_id][\"resolved_at\"] = datetime.utcnow()\r\n\r\n    def _monitor_sla(self, incident_id: str):\r\n        \"\"\"Check SLA compliance and alert if breached.\"\"\"\r\n        time.sleep(30)  # Check after 30 seconds\r\n        inc = self.active_incidents.get(incident_id)\r\n        if inc and inc[\"response_at\"] is None:\r\n            print(f\"🚨 SLA BREACH: {incident_id} not acknowledged before {inc['response_deadline']}\")\r\n\r\n    def sla_report(self) -> dict:\r\n        \"\"\"Generate SLA compliance report.\"\"\"\r\n        report = {\"incidents\": {}, \"breaches\": 0}\r\n        for inc_id, data in self.active_incidents.items():\r\n            response_time = None\r\n            resolution_time = None\r\n            if data[\"response_at\"]:\r\n                response_time = (data[\"response_at\"] - datetime.utcnow()).total_seconds() / 60\r\n            if data[\"resolved_at\"]:\r\n                resolution_time = (data[\"resolved_at\"] - datetime.utcnow()).total_seconds() / 60\r\n\r\n            breached = data[\"response_at\"] is None or (data[\"response_at\"] > data[\"response_deadline\"])\r\n            if breached:\r\n                report[\"breaches\"] += 1\r\n\r\n            report[\"incidents\"][inc_id] = {\r\n                \"severity\": data[\"severity\"],\r\n                \"response_time_min\": round(response_time, 1) if response_time else \"missed\",\r\n                \"breached\": breached\r\n            }\r\n        return report\r\n\r\ntracker = SLATracker()\r\ntracker.declare_incident(\"INC-001\", \"SEV1\")\r\ntracker.acknowledge(\"INC-001\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-incident-detection",
      children: "8.3 Incident Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automated detection is the first line of defense against ML incidents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport json\r\nfrom collections import deque\r\nfrom typing import Callable, Dict, Optional\r\n\r\nclass IncidentDetector:\r\n    \"\"\"Automated incident detection from monitoring metrics.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.detectors: Dict[str, Callable] = {}\r\n        self.incident_history = []\r\n\r\n    def register_detector(self, name: str, detector_fn: Callable):\r\n        self.detectors[name] = detector_fn\r\n\r\n    def run_all(self, metrics: dict) -> list:\r\n        \"\"\"Run all registered detectors and return detected incidents.\"\"\"\r\n        detected = []\r\n        for name, fn in self.detectors.items():\r\n            try:\r\n                result = fn(metrics)\r\n                if result:\r\n                    detected.append(result)\r\n                    self.incident_history.append(result)\r\n                    print(f\"🚨 Detected: {result['title']} (via {name})\")\r\n            except Exception as e:\r\n                print(f\"Detector {name} failed: {e}\")\r\n        return detected\r\n\r\n## Define specific detectors\r\ndef latency_spike_detector(metrics: dict) -> Optional[dict]:\r\n    p99 = metrics.get(\"latency_p99\", 0)\r\n    threshold = metrics.get(\"latency_threshold\", 500)\r\n    if p99 > threshold * 2:  # 2x threshold\r\n        return {\r\n            \"type\": \"latency_spike\",\r\n            \"severity\": \"SEV2\",\r\n            \"title\": f\"Latency spike: p99={p99}ms exceeds 2x threshold\",\r\n            \"metric\": \"latency_p99\",\r\n            \"value\": p99,\r\n            \"threshold\": threshold\r\n        }\r\n    return None\r\n\r\ndef null_prediction_detector(metrics: dict) -> Optional[dict]:\r\n    null_rate = metrics.get(\"null_prediction_rate\", 0)\r\n    if null_rate > 0.05:  # 5% null predictions\r\n        return {\r\n            \"type\": \"model_degradation\",\r\n            \"severity\": \"SEV1\" if null_rate > 0.5 else \"SEV2\",\r\n            \"title\": f\"High null prediction rate: {null_rate:.1%}\",\r\n            \"metric\": \"null_prediction_rate\",\r\n            \"value\": null_rate,\r\n            \"threshold\": 0.05\r\n        }\r\n    return None\r\n\r\ndef drift_detector(metrics: dict) -> Optional[dict]:\r\n    drift_score = metrics.get(\"drift_score\", 0)\r\n    if drift_score > 0.5:\r\n        return {\r\n            \"type\": \"model_degradation\",\r\n            \"severity\": \"SEV2\",\r\n            \"title\": f\"Severe drift detected: drift_score={drift_score:.2f}\",\r\n            \"metric\": \"drift_score\",\r\n            \"value\": drift_score,\r\n            \"threshold\": 0.5\r\n        }\r\n    return None\r\n\r\ndef cost_anomaly_detector(metrics: dict) -> Optional[dict]:\r\n    daily_cost = metrics.get(\"daily_cost\", 0)\r\n    expected_cost = metrics.get(\"expected_daily_cost\", 100)\r\n    if daily_cost > expected_cost * 3:\r\n        return {\r\n            \"type\": \"cost_anomaly\",\r\n            \"severity\": \"SEV3\",\r\n            \"title\": f\"Cost anomaly: ${daily_cost} vs expected ${expected_cost}\",\r\n            \"metric\": \"daily_cost\",\r\n            \"value\": daily_cost,\r\n            \"threshold\": expected_cost * 3\r\n        }\r\n    return None\r\n\r\ndetector = IncidentDetector()\r\ndetector.register_detector(\"latency\", latency_spike_detector)\r\ndetector.register_detector(\"null_prediction\", null_prediction_detector)\r\ndetector.register_detector(\"drift\", drift_detector)\r\ndetector.register_detector(\"cost\", cost_anomaly_detector)\r\n\r\n## Simulate metric check\r\nmetrics = {\r\n    \"latency_p99\": 1200,\r\n    \"null_prediction_rate\": 0.08,\r\n    \"drift_score\": 0.6,\r\n    \"daily_cost\": 450,\r\n    \"expected_daily_cost\": 150,\r\n    \"latency_threshold\": 500\r\n}\r\ndetector.run_all(metrics)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-runbooks",
      children: "8.4 Runbooks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Runbooks provide step-by-step procedures for responding to specific incident types."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Runbook:\r\n    \"\"\"A structured runbook for a specific incident type.\"\"\"\r\n\r\n    def __init__(self, name: str, incident_type: IncidentType, steps: list):\r\n        self.name = name\r\n        self.incident_type = incident_type\r\n        self.steps = steps\r\n        self.current_step = 0\r\n\r\n    def execute(self, incident: Incident):\r\n        \"\"\"Walk through runbook steps.\"\"\"\r\n        print(f\"📋 Executing runbook: {self.name}\")\r\n        print(f\"   Incident: {incident.incident_id} - {incident.title}\")\r\n        print()\r\n\r\n        for i, step in enumerate(self.steps):\r\n            self.current_step = i\r\n            print(f\"Step {i+1}: {step['action']}\")\r\n            if step.get(\"command\"):\r\n                print(f\"   Command: {step['command']}\")\r\n            if step.get(\"check\"):\r\n                print(f\"   Check: {step['check']}\")\r\n\r\n            # Simulate execution\r\n            response = input(f\"   Complete step {i+1}? (y/n): \") if False else \"y\"\r\n            if step.get(\"verify\"):\r\n                print(f\"   Verify: {step['verify']}\")\r\n\r\n        print(\"✅ Runbook complete\")\r\n\r\n## Define runbooks for common incidents\r\nmodel_degradation_runbook = Runbook(\r\n    \"Model Degradation Response\",\r\n    IncidentType.MODEL_DEGRADATION,\r\n    [\r\n        {\"action\": \"Acknowledge incident and check severity\", \"command\": \"kubectl get pods -n ml-serving\"},\r\n        {\"action\": \"Check model metrics dashboard for drift\", \"command\": \"Check Grafana: 'Model Drift' dashboard\"},\r\n        {\"action\": \"Compare current vs reference distribution\", \"command\": \"python scripts/check_drift.py --reference production\"},\r\n        {\"action\": \"If drift confirmed, trigger rollback\", \"command\": \"python deploy.py --rollback --model PricePredictor\"},\r\n        {\"action\": \"Verify rollback: check MAE and prediction distribution\", \"check\": \"MAE returned to baseline (< 2.5)\"},\r\n        {\"action\": \"Create Jira ticket for root cause investigation\"},\r\n    ]\r\n)\r\n\r\ndata_failure_runbook = Runbook(\r\n    \"Data Pipeline Failure Response\",\r\n    IncidentType.DATA_FAILURE,\r\n    [\r\n        {\"action\": \"Check data pipeline status\", \"command\": \"dvc status; airflow dags list-runs -d data_pipeline\"},\r\n        {\"action\": \"Identify failed stage\", \"command\": \"Check Airflow logs for failure reason\"},\r\n        {\"action\": \"If transient: retry pipeline\", \"command\": \"airflow dags trigger data_pipeline\"},\r\n        {\"action\": \"If data corrupted: restore from backup\", \"command\": \"dvc checkout data_v1.0\"},\r\n        {\"action\": \"Verify data quality\", \"command\": \"python scripts/validate_data.py\"},\r\n        {\"action\": \"Re-train model on corrected data\", \"command\": \"python train.py --data-version restored_v1.0\"},\r\n    ]\r\n)\r\n\r\nllm_hallucination_runbook = Runbook(\r\n    \"LLM Hallucination Response\",\r\n    IncidentType.LLM_HALLUCINATION,\r\n    [\r\n        {\"action\": \"Identify affected model version and prompt template\"},\r\n        {\"action\": \"Check guardrails logs for refusal patterns\"},\r\n        {\"action\": \"Add output validation to block incorrect responses\"},\r\n        {\"action\": \"If widespread: rollback to previous prompt version\"},\r\n        {\"action\": \"Update prompt with stricter constraints\"},\r\n        {\"action\": \"Add regression test for hallucination pattern\"},\r\n    ]\r\n)\r\n\r\n## Store runbooks\r\nrunbooks = {\r\n    IncidentType.MODEL_DEGRADATION: model_degradation_runbook,\r\n    IncidentType.DATA_FAILURE: data_failure_runbook,\r\n    IncidentType.LLM_HALLUCINATION: llm_hallucination_runbook,\r\n}\r\n\r\ndef get_runbook(incident_type: IncidentType) -> Runbook:\r\n    return runbooks.get(incident_type)\r\n\r\n## Use in response flow\r\ninc = Incident(\"INC-004\", IncidentType.DATA_FAILURE, \"SEV1\",\r\n               \"Feature pipeline failure\", \"ETL job failed\",\r\n               datetime.utcnow(), \"monitoring\", [\"PricePredictor\"])\r\nrunbook = get_runbook(inc.type)\r\n\r\n## runbook.execute(inc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-post-mortem-analysis",
      children: "8.5 Post-Mortem Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Post-mortems are blameless analyses that identify root causes and preventive actions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import datetime\r\nfrom typing import List, Optional\r\n\r\nclass PostMortem:\r\n    \"\"\"Blameless post-mortem for ML incidents.\"\"\"\r\n\r\n    def __init__(self, incident: Incident):\r\n        self.incident = incident\r\n        self.timeline = []\r\n        self.root_cause = None\r\n        self.impact_assessment = {}\r\n        self.action_items = []\r\n        self.what_went_well = []\r\n        self.what_went_wrong = []\r\n        self.created_at = datetime.utcnow()\r\n\r\n    def add_timeline_entry(self, time: str, event: str, actor: str = \"system\"):\r\n        self.timeline.append({\"time\": time, \"event\": event, \"actor\": actor})\r\n\r\n    def set_root_cause(self, cause: str, category: str):\r\n        self.root_cause = {\"cause\": cause, \"category\": category}\r\n\r\n    def add_action_item(self, description: str, owner: str, priority: str, deadline: str):\r\n        self.action_items.append({\r\n            \"description\": description,\r\n            \"owner\": owner,\r\n            \"priority\": priority,\r\n            \"deadline\": deadline,\r\n            \"status\": \"open\"\r\n        })\r\n\r\n    def generate_report(self) -> str:\r\n        report = []\r\n        report.append(\"=\" * 60)\r\n        report.append(f\"POST-MORTEM: {self.incident.incident_id}\")\r\n        report.append(f\"Title: {self.incident.title}\")\r\n        report.append(f\"Severity: {self.incident.severity}\")\r\n        report.append(f\"Date: {self.incident.detected_at.isoformat()}\")\r\n        report.append(f\"Duration: {self.incident.duration_minutes():.0f} minutes\")\r\n        report.append(\"\")\r\n\r\n        report.append(\"TIMELINE:\")\r\n        for entry in self.timeline:\r\n            report.append(f\"  {entry['time']} - [{entry['actor']}] {entry['event']}\")\r\n\r\n        report.append(\"\")\r\n        report.append(f\"ROOT CAUSE: {self.root_cause['cause']}\")\r\n        report.append(f\"Category: {self.root_cause['category']}\")\r\n\r\n        report.append(\"\")\r\n        report.append(\"IMPACT:\")\r\n        report.append(f\"  Affected Models: {', '.join(self.incident.affected_models)}\")\r\n        report.append(f\"  Affected Users: {self.incident.affected_users or 'N/A'}\")\r\n\r\n        report.append(\"\")\r\n        report.append(\"ACTION ITEMS:\")\r\n        for i, item in enumerate(self.action_items, 1):\r\n            report.append(f\"  {i}. [{item['priority']}] {item['description']} (Owner: {item['owner']}, Due: {item['deadline']})\")\r\n\r\n        report.append(\"\")\r\n        report.append(\"WHAT WENT WELL:\")\r\n        for w in self.what_went_well:\r\n            report.append(f\"  ✅ {w}\")\r\n\r\n        report.append(\"\")\r\n        report.append(\"WHAT WENT WRONG:\")\r\n        for w in self.what_went_wrong:\r\n            report.append(f\"  ❌ {w}\")\r\n\r\n        return \"\\n\".join(report)\r\n\r\n## Sample post-mortem\r\ninc = Incident(\"INC-002\", IncidentType.DATA_FAILURE, \"SEV1\",\r\n               \"Critical feature null\", \"ETL job failed silently\",\r\n               datetime.utcnow(), \"monitoring\", [\"PricePredictor\"], 50000)\r\npm = PostMortem(inc)\r\n\r\npm.add_timeline_entry(\"14:00\", \"ETL job started\", \"airflow\")\r\npm.add_timeline_entry(\"14:05\", \"ETL job failed — source DB timeout\", \"airflow\")\r\npm.add_timeline_entry(\"14:05\", \"Alert suppressed — known flaky test\", \"monitoring\")\r\npm.add_timeline_entry(\"14:30\", \"First user complaint received\", \"support\")\r\npm.add_timeline_entry(\"14:35\", \"On-call engineer acknowledged\", \"team\")\r\npm.add_timeline_entry(\"14:40\", \"Rollback to previous data version\", \"team\")\r\npm.add_timeline_entry(\"14:55\", \"Service restored\", \"system\")\r\n\r\npm.set_root_cause(\"ETL job failure alert was suppressed due to 'known flaky test' tag\", \"alerting\")\r\npm.add_action_item(\"Remove auto-suppression for ETL failure alerts\", \"Alice\", \"P0\", \"2025-07-01\")\r\npm.add_action_item(\"Add data quality check that runs within 5min of ETL completion\", \"Bob\", \"P0\", \"2025-07-05\")\r\npm.add_action_item(\"Implement fallback: if ETL fails, use previous successful snapshot\", \"Carol\", \"P1\", \"2025-07-15\")\r\npm.what_went_well = [\"Rollback was fast (< 5 min)\", \"On-call responded within 5 min\", \"Communication was clear\"]\r\npm.what_went_wrong = [\"Alert was suppressed and missed\", \"No automated data quality check\", \"ETL failure cascaded silently\"]\r\n\r\nprint(pm.generate_report())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-on-call-practices",
      children: "8.6 On-Call Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Effective on-call practices ensure incidents are handled promptly without burning out team members."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\r\nfrom datetime import datetime, timedelta\r\nfrom typing import List, Optional\r\n\r\nclass OnCallSchedule:\r\n    \"\"\"Manage on-call rotations for ML team.\"\"\"\r\n\r\n    def __init__(self, team_members: List[str], rotation_days: int = 7):\r\n        self.members = team_members\r\n        self.rotation_days = rotation_days\r\n        self.schedule = {}  # date -> member\r\n        self.escalation_path = [\"ML Engineer\", \"Senior ML Engineer\", \"ML Engineering Manager\"]\r\n        self._generate_schedule()\r\n\r\n    def _generate_schedule(self):\r\n        \"\"\"Generate on-call schedule for next 30 days.\"\"\"\r\n        start = datetime.utcnow()\r\n        for i in range(30):\r\n            date = start + timedelta(days=i)\r\n            rotation_index = (i // self.rotation_days) % len(self.members)\r\n            self.schedule[date.strftime(\"%Y-%m-%d\")] = self.members[rotation_index]\r\n\r\n    def get_on_call(self, date: datetime = None) -> str:\r\n        date = date or datetime.utcnow()\r\n        return self.schedule.get(date.strftime(\"%Y-%m-%d\"), \"Unassigned\")\r\n\r\n    def get_escalation(self, level: int = 0) -> str:\r\n        return self.escalation_path[level] if level < len(self.escalation_path) else \"VP Engineering\"\r\n\r\nclass IncidentCommander:\r\n    \"\"\"Coordinates incident response.\"\"\"\r\n\r\n    def __init__(self, schedule: OnCallSchedule):\r\n        self.schedule = schedule\r\n        self.escalation_level = 0\r\n\r\n    def handle_incident(self, incident: Incident):\r\n        print(f\"🚨 Incident: {incident.incident_id} ({incident.severity})\")\r\n        print(f\"   Primary: {self.schedule.get_on_call()}\")\r\n\r\n        if incident.severity in [\"SEV1\", \"SEV2\"]:\r\n            print(f\"   Notifying: {self.schedule.get_escalation(0)}\")\r\n            print(f\"   Creating: #incident-{incident.incident_id} Slack channel\")\r\n\r\n        # Runbook execution\r\n        runbook = get_runbook(incident.type)\r\n        if runbook:\r\n            print(f\"   Runbook: {runbook.name}\")\r\n        else:\r\n            print(f\"   No runbook found for {incident.type.value}\")\r\n\r\n    def escalate(self):\r\n        self.escalation_level += 1\r\n        print(f\"Escalating to {self.schedule.get_escalation(self.escalation_level)}\")\r\n\r\n## On-call metrics tracking\r\nclass OnCallMetrics:\r\n    \"\"\"Track on-call performance metrics.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.incidents_per_shift = {}  # member -> count\r\n        self.response_times = []       # list of (member, response_time_minutes)\r\n        self.mttr = []                 # Mean Time To Resolve\r\n\r\n    def record_response(self, member: str, response_time_min: float):\r\n        self.response_times.append((member, response_time_min))\r\n        self.incidents_per_shift[member] = self.incidents_per_shift.get(member, 0) + 1\r\n\r\n    def record_resolution(self, resolution_time_min: float):\r\n        self.mttr.append(resolution_time_min)\r\n\r\n    def summary(self, period_days: int = 30) -> dict:\r\n        avg_response = sum(r for _, r in self.response_times) / len(self.response_times) if self.response_times else 0\r\n        avg_mttr = sum(self.mttr) / len(self.mttr) if self.mttr else 0\r\n        busiest = max(self.incidents_per_shift, key=self.incidents_per_shift.get) if self.incidents_per_shift else \"N/A\"\r\n\r\n        return {\r\n            \"period_days\": period_days,\r\n            \"total_incidents\": len(self.response_times),\r\n            \"avg_response_time_min\": round(avg_response, 1),\r\n            \"avg_mttr_min\": round(avg_mttr, 1),\r\n            \"busiest_member\": busiest,\r\n            \"incidents_per_member\": self.incidents_per_shifts\r\n        }\r\n\r\n## Fix typo in summary method\r\nOnCallMetrics.summary = lambda self, period_days=30: {\r\n    \"period_days\": period_days,\r\n    \"total_incidents\": len(self.response_times),\r\n    \"avg_response_time_min\": round(sum(r for _, r in self.response_times) / len(self.response_times), 1) if self.response_times else 0,\r\n    \"avg_mttr_min\": round(sum(self.mttr) / len(self.mttr), 1) if self.mttr else 0,\r\n    \"incidents_per_member\": self.incidents_per_shift\r\n}\r\n\r\nmetrics = OnCallMetrics()\r\nmetrics.record_response(\"Alice\", 4.5)\r\nmetrics.record_response(\"Bob\", 12.3)\r\nmetrics.record_resolution(45)\r\nprint(json.dumps(metrics.summary(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript incident response\r\ninterface Incident {\r\n  id: string;\r\n  type: \"model_degradation\" | \"data_failure\" | \"infrastructure\";\r\n  severity: \"SEV1\" | \"SEV2\" | \"SEV3\" | \"SEV4\";\r\n  title: string;\r\n  detectedAt: Date;\r\n  resolvedAt?: Date;\r\n}\r\n\r\nclass IncidentManager {\r\n  private incidents: Incident[] = [];\r\n\r\n  declare(incident: Incident): void {\r\n    this.incidents.push(incident);\r\n    console.log(`[${incident.severity}] ${incident.id}: ${incident.title}`);\r\n    if (incident.severity === \"SEV1\") {\r\n      this.triggerPagerDuty(incident);\r\n    }\r\n  }\r\n\r\n  private triggerPagerDuty(incident: Incident): void {\r\n    console.log(`Paging on-call engineer for ${incident.id}`);\r\n  }\r\n\r\n  resolve(id: string): void {\r\n    const inc = this.incidents.find(i => i.id === id);\r\n    if (inc) {\r\n      inc.resolvedAt = new Date();\r\n      console.log(`Resolved ${id}`);\r\n    }\r\n  }\r\n\r\n  metrics(): { total: number; open: number; avgResolutionMs: number } {\r\n    const resolved = this.incidents.filter(i => i.resolvedAt);\r\n    const totalMs = resolved.reduce((sum, i) => sum + (i.resolvedAt!.getTime() - i.detectedAt.getTime()), 0);\r\n    return {\r\n      total: this.incidents.length,\r\n      open: this.incidents.filter(i => !i.resolvedAt).length,\r\n      avgResolutionMs: resolved.length ? totalMs / resolved.length : 0\r\n    };\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ML incidents include model degradation, data failures, infrastructure issues, LLM hallucinations, and cost anomalies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Severity framework (SEV1-SEV4) with defined response SLAs ensures appropriate prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SEV1 incidents require response within 5 minutes and resolution within 60 minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated detectors continuously monitor latency, null predictions, drift, and costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runbooks provide step-by-step procedures for each incident type, reducing response time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-mortems should be blameless, focusing on system improvements rather than individual blame"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On-call rotations with clear escalation paths prevent engineer burnout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SLA tracking with breach alerts ensures accountability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Silent failures (model returns results but they're wrong) are the most dangerous ML incident type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Action items from post-mortems should be tracked to closure with owners and deadlines"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Incident classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use objective criteria (impact %, metric drop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subjective severity assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate detection + alerting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waiting for user reports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document step-by-step for each type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-hoc response every time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Post-mortem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blameless analysis with action items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blame culture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "On-call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fair rotation with escalation path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLA tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated breach detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual tracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s08-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What are the most common types of ML production incidents?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common: (1) Model degradation — accuracy/MAE drops due to data drift or concept drift, (2) Data pipeline failures — silent ETL failures cause missing features,.\n(3) LLM hallucinations — unsafe or incorrect outputs, (4) Infrastructure issues — GPU OOM, network timeouts, (5) Latency spikes — model serving slows down,.\n(6) Cost anomalies — unexpected cloud cost increases from misconfigured resources."
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
      "data-qid": "mlops-s08-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you classify incident severity for ML systems?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SEV1: Complete outage or >10% users affected, response within 5min. SEV2: Significant degradation affecting 1-10% users, response within 15min. SEV3: Minor degradation affecting <1% users, response within 1hr. SEV4: Cosmetic issues, next business day. ML-specific factors include null prediction rate, drift score, and safety-critical failures."
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
      "data-qid": "mlops-s08-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What should a model degradation runbook include?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Steps: (1) Acknowledge and assess severity, (2) Check drift dashboard for recent changes, (3) Compare current vs reference feature distributions, (4) Check for.\nrecent deployment or data pipeline changes, (5) If drift confirmed, rollback model to previous version, (6) Verify rollback effectiveness with metric comparison,.\n(7) Create Jira ticket for root cause investigation."
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
      "data-qid": "mlops-s08-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What is a blameless post-mortem?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A blameless post-mortem focuses on understanding the system failures that led to an incident, not on who made a mistake. It assumes good intent from all team members. Key sections: timeline,.\nroot cause, impact assessment, action items, what went well, what went wrong. Action items must have owners and deadlines and be tracked to closure."
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
      "data-qid": "mlops-s08-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you set up on-call rotations for ML engineers?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rotate weekly among qualified team members. Each rotation has: primary (first responder), secondary (backup), and escalation path (senior engineer, manager). PagerDuty handles alert routing with escalation if not acknowledged within 5 minutes. Track per-engineer incident load to ensure fair distribution. Provide post-on-call recovery time."
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
      "data-qid": "mlops-s08-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What metrics should you track for incident response?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Key metrics: (1) Time to acknowledge — how long before a human responds, (2) Time to resolve (MTTR) — from detection to resolution,.\n(3) Incident volume — count per week/month, (4) Severity distribution — SEV1/2/3/4 breakdown, (5) SLA breach rate — % of incidents exceeding response/resolution SLAs,.\n(6) On-call load — incidents per engineer per rotation."
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
      "data-qid": "mlops-s08-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle a silent model failure incident?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Silent failures are the most dangerous because the system appears healthy. Mitigations: (1) Monitor prediction distribution against expected baseline, (2) Track null/NaN prediction rates,.\n(3) Implement shadow A/B comparison against a known-good model, (4) Add output validation rules (range checks, type checks), (5) Run periodic golden test set evaluations on production data."
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
      "data-qid": "mlops-s08-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What is an incident commander and when do you need one?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The incident commander coordinates response for major incidents (SEV1/SEV2). They don't fix the issue themselves — they delegate tasks, communicate status, manage escalation, and ensure the runbook is followed. Needed for any incident involving multiple teams or complex coordination. The commander role rotates among senior engineers."
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
      "data-qid": "mlops-s08-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you prevent alert fatigue in ML monitoring?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Strategies: (1) Use threshold + duration: alert only if threshold exceeded for N consecutive windows, (2) Severity-based routing: critical alerts page immediately,.\nwarnings go to Slack, (3) Deduplicate related alerts into a single incident, (4) Regularly review and retire noisy alerts, (5) Implement maintenance windows for.\nknown issues, (6) Track alert-to-incident ratio — aim for >20%. "
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
      "data-qid": "mlops-s08-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What should be in a post-incident review for an ML system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Include: (1) Detailed timeline with detection, response, and resolution times, (2) Root cause analysis (e.g., data drift, pipeline failure, model bug),.\n(3) Impact assessment (users affected, financial impact), (4) What went well and what went wrong, (5) Specific, measurable action items with owners and.\ndeadlines, (6) Changes to monitoring, runbooks, or architecture to prevent recurrence."
        }), "\n  "]
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
      }), ": What is a \"silent failure\" in ML systems?\r\na) The system crashes with no error message\r\nb) The system returns results but they're incorrect\r\nc) Alerts are not configured\r\nd) Logs are not generated"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) The system returns results but they're incorrect"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Silent failures are especially dangerous because monitoring shows healthy metrics but predictions are wrong."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What is the response SLA for a SEV1 incident?\r\na) 1 minute\r\nb) 5 minutes\r\nc) 15 minutes\r\nd) 1 hour"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 5 minutes"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "SEV1 (Critical) incidents require acknowledgment within 5 minutes."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is the primary purpose of a blameless post-mortem?\r\na) Identify who caused the incident\r\nb) Find system improvements to prevent recurrence\r\nc) Assign blame for accountability\r\nd) Document the incident for legal purposes"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Find system improvements to prevent recurrence"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Blameless post-mortems focus on system-level improvements rather than individual blame."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which ML-specific metric should be monitored for silent failures?\r\na) CPU utilization\r\nb) Null/NaN prediction rate\r\nc) Network bandwidth\r\nd) Number of pods"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Null/NaN prediction rate"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Tracking null/NaN predictions detects silent model failures."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is the incident commander's primary role?\r\na) Fix the technical issue\r\nb) Coordinate response and communication\r\nc) Write the post-mortem\r\nd) Manage the on-call schedule"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Coordinate response and communication"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The incident commander coordinates the team, delegates tasks, and communicates status without fixing issues directly."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement an IncidentDetector with three detectors: high latency (>500ms), null predictions (>5%), and drift (>0.5). Test with sample metrics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a SeverityClassifier that determines SEV1-SEV4 based on user impact percentage and metric drop percentage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a Runbook class with step-by-step procedures for model degradation and data failure incidents."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a PostMortem generator that takes an Incident, builds a timeline, determines root cause, and generates action items with owners."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a complete incident response system: detectors → severity classification → runbook execution → SLA tracking → post-mortem generation."]
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
            children: "How does Incident Response behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Incident Response\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Incident Response to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Incident Response (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Incident Response and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Incident Response-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Incident Response in production today?"
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
        }), " Incident Response builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Incident Response before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Incident Response is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Incident Response in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Incident Response is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 08 Incident Response is ___. — Answer: O(n*d) for linear models, O(n^2) for kernel SVM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Incident Response is ___. — Answer: data leakage, class imbalance, overfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Incident Response issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Incident Response in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Incident Response that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Incident Response in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Incident Response and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Incident Response to someone else"
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
        children: "Always write a one-line example of Incident Response from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Incident Response when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Incident Response twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Incident Response snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Incident Response listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Incident Response to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Incident Response by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Incident Response to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Hands-On Machine Learning' by Aurélien Géron (O'Reilly) — best practical ML book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Pattern Recognition and Machine Learning' by Bishop — rigorous theoretical foundation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["fast.ai practical deep learning course: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://course.fast.ai",
          children: "https://course.fast.ai"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kaggle competitions for hands-on practice: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.kaggle.com",
          children: "https://www.kaggle.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Papers With Code for SOTA benchmarks: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://paperswithcode.com",
          children: "https://paperswithcode.com"
        }), " Response"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 16 — builds the foundation for 08 Incident Response"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Incident Response with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Incident Response fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Incident Response"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Incident Response"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Incident Response?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Incident Response?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Incident Response asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Incident Response?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incident Response is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Incident Response."
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
        children: "Incident Response emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Incident Response today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Incident Response — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Incident Response changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protect training data from poisoning attacks — validate data sources and monitor for distribution shifts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement model access controls — not all users should query all models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use differential privacy when training on sensitive data (medical, financial)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for model inversion attacks — adversaries can reconstruct training data from model outputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit model decisions for fairness and bias before production deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bias-variance tradeoff: simple models underfit (high bias), complex models overfit (high variance) — regularization controls this"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-validation gives an unbiased estimate of generalization error by averaging over multiple train/test splits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature importance from tree models measures how much each feature reduces impurity — use SHAP for more reliable attribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning curves diagnose whether you need more data (high variance) or a better model (high bias)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble methods (bagging, boosting, stacking) reduce variance and bias respectively"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "08 Incident Response is like a GPS navigation system"
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
          }), " — this chapter contributes the Incident Response skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-08incidentresponse-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Incident Response in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Machine learning is the practice of training statistical models on data to make predictions or decisions without being explicitly programmed for each case."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-08incidentresponse-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common ML mistake: data leakage — accidentally including future information in training features. Always split data by time for time-series and validate the split before training."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-08incidentresponse-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Incident Response approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linear regression: O(n*d) training, O(d) inference. Decision tree: O(n*d*log n) training, O(log n) inference. Neural network: O(n*d*h) per epoch where h=hidden units."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-08incidentresponse-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Incident Response NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "ML is NOT the right choice when: (1) a rule-based system is interpretable and accurate enough, (2) you have fewer than 1000 labeled examples, (3) the decision requires full auditability."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-08incidentresponse-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Incident Response applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production ML stack: scikit-learn for classical ML, PyTorch/TensorFlow for deep learning, MLflow for experiment tracking, Feast for feature stores, Seldon/BentoML for model serving."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Incident Response (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Incident Response (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Incident Response-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Incident Response in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "scikit-learn"
        }), " — classical ML algorithms, preprocessing, evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "XGBoost"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LightGBM"
        }), " — gradient boosting for tabular data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), " — experiment tracking, model registry, deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optuna"
        }), " — hyperparameter optimization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SHAP"
        }), " — model explainability and feature importance Response"]
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
        }), ": Add structured logging at each stage of the 08 Incident Response pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Incident Response."
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
        children: "Tell me about a time you debugged a Incident Response problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Incident Response is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_incident_response(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Incident Response.\r\n\r\n    Key concepts: features, labels, training, validation, test split\r\n    Complexity: O(n*d) for linear models, O(n^2) for kernel SVM\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Incident Response here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Incident Response without notes"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spotify"
        }), " uses collaborative filtering to power Discover Weekly, generating 40M personalized playlists weekly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amazon"
        }), " uses ML for demand forecasting, reducing inventory costs by 25%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Airbnb"
        }), " uses gradient boosting to predict booking probability and optimize search ranking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe"
        }), " uses ML fraud detection that processes 250M API requests/day with <100ms latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention the full ML lifecycle — data collection, feature engineering, training, evaluation, deployment, monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incident Response, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Incident Response depends on input size and distribution — always benchmark for your own data."
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