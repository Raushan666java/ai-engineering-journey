"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[93089],{

/***/ 9776
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_26_business_automation_agents_md_927_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-26-business-automation-agents-md-927.json
const site_docs_courses_laravel_26_business_automation_agents_md_927_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/26-business-automation-agents","title":"Chapter 26: Business Automation Agents","description":"Previous Healthcare","source":"@site/docs/courses/laravel/26-business-automation-agents.md","sourceDirName":"courses/laravel","slug":"/laravel/26-business-automation-agents","permalink":"/ai-engineering-journey/laravel/26-business-automation-agents","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"id":"26-business-automation-agents","slug":"/laravel/26-business-automation-agents","title":"Chapter 26: Business Automation Agents","sidebar_label":"Chapter 26: Business Automation Agents","sidebar_position":26},"sidebar":"course-laravel","previous":{"title":"Chapter 25: Multi-Agent Systems & Orchestration with Laravel","permalink":"/ai-engineering-journey/laravel/25-multi-agent-systems"},"next":{"title":"Chapter 27: Healthcare AI Agents","permalink":"/ai-engineering-journey/laravel/27-healthcare"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/26-business-automation-agents.md


const frontMatter = {
	id: '26-business-automation-agents',
	slug: '/laravel/26-business-automation-agents',
	title: 'Chapter 26: Business Automation Agents',
	sidebar_label: 'Chapter 26: Business Automation Agents',
	sidebar_position: 26
};
const contentTitle = 'Chapter 26: Business Automation Agents';

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
  "value": "26.1 Introduction to Business Automation with AI",
  "id": "261-introduction-to-business-automation-with-ai",
  "level": 3
}, {
  "value": "The Automation Pipeline",
  "id": "the-automation-pipeline",
  "level": 4
}, {
  "value": "Automation Types",
  "id": "automation-types",
  "level": 4
}, {
  "value": "26.2 Setting Up an Automation Framework in Laravel",
  "id": "262-setting-up-an-automation-framework-in-laravel",
  "level": 3
}, {
  "value": "The AutomationWorkflow Model",
  "id": "the-automationworkflow-model",
  "level": 4
}, {
  "value": "Migration for AutomationWorkflow",
  "id": "migration-for-automationworkflow",
  "level": 4
}, {
  "value": "The AutomationAgent Base Class",
  "id": "the-automationagent-base-class",
  "level": 4
}, {
  "value": "26.3 Scheduled (Cron-Driven) Automation Agents",
  "id": "263-scheduled-cron-driven-automation-agents",
  "level": 3
}, {
  "value": "The GenerateReportCommand",
  "id": "the-generatereportcommand",
  "level": 4
}, {
  "value": "The DailyReportAgent Class",
  "id": "the-dailyreportagent-class",
  "level": 4
}, {
  "value": "The RunMonitoringAgent Command",
  "id": "the-runmonitoringagent-command",
  "level": 4
}, {
  "value": "Registering in the Console Kernel",
  "id": "registering-in-the-console-kernel",
  "level": 4
}, {
  "value": "26.4 Event-Triggered Automation Agents",
  "id": "264-event-triggered-automation-agents",
  "level": 3
}, {
  "value": "The Event-to-Agent Bridge",
  "id": "the-event-to-agent-bridge",
  "level": 4
}, {
  "value": "The InvoiceProcessingAgent",
  "id": "the-invoiceprocessingagent",
  "level": 4
}, {
  "value": "Registering the Event Subscriber",
  "id": "registering-the-event-subscriber",
  "level": 4
}, {
  "value": "Seeding Automation Workflows",
  "id": "seeding-automation-workflows",
  "level": 4
}, {
  "value": "26.5 Webhook-Driven Automation Agents",
  "id": "265-webhook-driven-automation-agents",
  "level": 3
}, {
  "value": "WebhookController with Signature Verification",
  "id": "webhookcontroller-with-signature-verification",
  "level": 4
}, {
  "value": "Webhook Routes",
  "id": "webhook-routes",
  "level": 4
}, {
  "value": "Webhook Agent Classes",
  "id": "webhook-agent-classes",
  "level": 4
}, {
  "value": "26.6 Approval Workflows with Human-in-the-Loop",
  "id": "266-approval-workflows-with-human-in-the-loop",
  "level": 3
}, {
  "value": "The ApprovalWorkflowAgent",
  "id": "the-approvalworkflowagent",
  "level": 4
}, {
  "value": "The ApprovalRequest Model",
  "id": "the-approvalrequest-model",
  "level": 4
}, {
  "value": "Migration for ApprovalRequest",
  "id": "migration-for-approvalrequest",
  "level": 4
}, {
  "value": "Approval Notification with Action Buttons",
  "id": "approval-notification-with-action-buttons",
  "level": 4
}, {
  "value": "ApprovalController",
  "id": "approvalcontroller",
  "level": 4
}, {
  "value": "26.7 Agent-Based Data Pipelines",
  "id": "267-agent-based-data-pipelines",
  "level": 3
}, {
  "value": "DataIngestionAgent",
  "id": "dataingestionagent",
  "level": 4
}, {
  "value": "DataTransformAgent",
  "id": "datatransformagent",
  "level": 4
}, {
  "value": "ETL Pipeline Orchestration",
  "id": "etl-pipeline-orchestration",
  "level": 4
}, {
  "value": "26.8 Notification &amp; Escalation Agents",
  "id": "268-notification--escalation-agents",
  "level": 3
}, {
  "value": "EscalationAgent",
  "id": "escalationagent",
  "level": 4
}, {
  "value": "Alert Model and Migration",
  "id": "alert-model-and-migration",
  "level": 4
}, {
  "value": "Escalation Command (run every minute via scheduler)",
  "id": "escalation-command-run-every-minute-via-scheduler",
  "level": 4
}, {
  "value": "26.9 Audit Logging for Agent Decisions",
  "id": "269-audit-logging-for-agent-decisions",
  "level": 3
}, {
  "value": "Enhanced AutomationLog with AgentReference",
  "id": "enhanced-automationlog-with-agentreference",
  "level": 4
}, {
  "value": "AuditLogController with Query Capabilities",
  "id": "auditlogcontroller-with-query-capabilities",
  "level": 4
}, {
  "value": "Audit Log Routes",
  "id": "audit-log-routes",
  "level": 4
}, {
  "value": "26.10 End-to-End Example: Customer Support Inbox Agent",
  "id": "2610-end-to-end-example-customer-support-inbox-agent",
  "level": 3
}, {
  "value": "SupportTriageAgent",
  "id": "supporttriageagent",
  "level": 4
}, {
  "value": "SupportTicket Model",
  "id": "supportticket-model",
  "level": 4
}, {
  "value": "SupportTicket Migration",
  "id": "supportticket-migration",
  "level": 4
}, {
  "value": "Event Listener for New Tickets",
  "id": "event-listener-for-new-tickets",
  "level": 4
}, {
  "value": "Scheduled Weekly Summary Command",
  "id": "scheduled-weekly-summary-command",
  "level": 4
}, {
  "value": "Summary",
  "id": "summary",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 3
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 4
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 4
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-26-business-automation-agents",
        children: "Chapter 26: Business Automation Agents"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/25-multi-agent-systems",
          children: "Multi-Agent Systems"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/27-healthcare",
          children: "Healthcare"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement the automation pipeline pattern (trigger → agent → decision → action → log) using Laravel and the AI SDK"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a reusable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutomationAgent"
        }), " base class with database-driven configuration for triggers, actions, and branching workflows"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy scheduled, event-triggered, and webhook-driven automation agents with Laravel's scheduler, event system, and webhook controllers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement human-in-the-loop approval workflows where agents propose actions and humans approve via notification buttons"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct agent-based ETL data pipelines with ingestion, transformation, and loading stages orchestrated by AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build escalation and notification agents with multi-channel alerting and time-based escalation chains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement comprehensive audit logging for every automated decision with full traceability"
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
        href: "../../assets/images/lessons/laravel/26-business-automation-agents/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/26-business-automation-agents/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/26-business-automation-agents/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/26-business-automation-agents/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/26-business-automation-agents/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/26-business-automation-agents/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Framework Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business automation with AI agents in Laravel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define agent types, queues, and event system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cron Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled automation agents on cron schedules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Laravel scheduler for periodic agent execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-triggered automation agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fire agents on model events or domain events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Webhook Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Webhook-driven automation agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify HMAC signatures and dispatch agent jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approval Workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-in-the-loop approval steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store pending decisions with approval tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-based ETL pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain extraction, transformation, and loading agents"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[Trigger Source] --> B{Agent Type}     B --> C[Cron Agent]     B --> D[Event Agent]     B --> E[Webhook Agent]     C --> F[Queue]     D --> F     E --> F     F --> G[Agent Executor]     G --> H[Approval Needed?]     H -->|Yes| I[Human Approval]     H -->|No| J[Action Executed]     I --> J     J --> K[Audit Log] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/26-business-automation-agents.png",
        alt: "Business Automation Agents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "261-introduction-to-business-automation-with-ai",
      children: "26.1 Introduction to Business Automation with AI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Business automation uses AI agents triggered by schedules, events, or webhooks to execute business processes autonomously."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Business automation replaces manual, repetitive processes with software that executes without human intervention. Traditional automation handles deterministic rules — \"if invoice total > $10,000, send for approval.\" AI agents transform automation by handling non-deterministic decisions: classifying an invoice category, deciding whether an email is spam or legitimate, extracting structured data from an unstructured PDF, or determining which team should handle a support ticket."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-automation-pipeline",
      children: "The Automation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every automation follows the same fundamental pipeline:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Trigger → Agent → Decision → Action → Log\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initiates the workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cron schedule, Laravel event, incoming webhook"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Agent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-powered reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classifies, extracts, decides, transforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The agent's structured output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Category, confidence score, extracted fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Action"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes the decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create record, send email, call API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Records everything"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who triggered, what agent decided, what action was taken"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "automation-types",
      children: "Automation Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel scheduler (cron)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily reports, hourly monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event-triggered"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel events (ModelSaved, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near-real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoice paid → reconcile, user registered → onboard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Webhook-driven"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External HTTP POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub push → review, Stripe charge → record"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human-in-the-loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent → Notification → Approval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Purchase order approval, content publishing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "262-setting-up-an-automation-framework-in-laravel",
      children: "26.2 Setting Up an Automation Framework in Laravel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The framework defines agent types, triggers, queues, approval workflows, and audit logging in a unified system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A robust automation framework needs three things: a way to define workflows, a base agent class that all automation agents extend, and a logging mechanism. We build these as reusable infrastructure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-automationworkflow-model",
      children: "The AutomationWorkflow Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Workflows define what triggers an automation, what agent runs, and what actions to take. Store them in the database so they can be configured without code changes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass AutomationWorkflow extends Model\n{\n    protected $fillable = [\n        'name',\n        'description',\n        'trigger_type',\n        'trigger_config',\n        'agent_class',\n        'agent_instructions',\n        'conditions',\n        'actions',\n        'is_active',\n        'priority',\n    ];\n\n    protected $casts = [\n        'trigger_config' => 'array',\n        'conditions' => 'array',\n        'actions' => 'array',\n        'is_active' => 'boolean',\n        'priority' => 'integer',\n    ];\n\n    public function logs(): HasMany\n    {\n        return $this->hasMany(AutomationLog::class, 'workflow_id');\n    }\n\n    public function scopeActive($query)\n    {\n        return $query->where('is_active', true);\n    }\n\n    public function scopeByTrigger($query, string $triggerType)\n    {\n        return $query->where('trigger_type', $triggerType);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-for-automationworkflow",
      children: "Migration for AutomationWorkflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('automation_workflows', function (Blueprint $table) {\n            $table->id();\n            $table->string('name');\n            $table->text('description')->nullable();\n            $table->string('trigger_type');\n            $table->json('trigger_config')->nullable();\n            $table->string('agent_class');\n            $table->text('agent_instructions');\n            $table->json('conditions')->nullable();\n            $table->json('actions')->nullable();\n            $table->boolean('is_active')->default(true);\n            $table->integer('priority')->default(0);\n            $table->timestamps();\n\n            $table->index('trigger_type');\n            $table->index('is_active');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('automation_workflows');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-automationagent-base-class",
      children: "The AutomationAgent Base Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All automation agents extend this base class, which injects the workflow configuration and provides helper methods for logging decisions and executing actions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation;\n\nuse App\\Models\\AutomationLog;\nuse App\\Models\\AutomationWorkflow;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nabstract class AutomationAgent implements Agent\n{\n    use Promptable;\n\n    public function __construct(\n        protected AutomationWorkflow $workflow,\n        protected array $context = [],\n    ) {}\n\n    public function instructions(): Stringable|string\n    {\n        $context = ! empty($this->context)\n            ? \"Context:\\n\" . json_encode($this->context, JSON_PRETTY_PRINT)\n            : 'No additional context provided.';\n\n        return <<<PROMPT\nYou are a business automation agent. Your role is to process incoming data,\nmake decisions, and produce structured output that drives automated actions.\n\nWorkflow: {$this->workflow->name}\nInstructions: {$this->workflow->agent_instructions}\n\n{$context}\n\nRespond with a structured decision that includes:\n1. Your analysis of the input\n2. The decision or classification\n3. What action should be taken\n4. Confidence level and reasoning\nPROMPT;\n    }\n\n    public function logDecision(\n        string $triggerSource,\n        mixed $inputData,\n        mixed $decision,\n        mixed $actionResult,\n        ?string $status = 'completed',\n        ?string $errorMessage = null,\n    ): AutomationLog {\n        return AutomationLog::create([\n            'workflow_id' => $this->workflow->id,\n            'trigger_source' => $triggerSource,\n            'input_data' => $inputData,\n            'agent_decision' => $decision,\n            'action_taken' => $actionResult,\n            'status' => $status,\n            'error_message' => $errorMessage,\n            'execution_time_ms' => defined('LARAVEL_START')\n                ? (int) ((microtime(true) - LARAVEL_START) * 1000)\n                : 0,\n        ]);\n    }\n\n    public function executeAction(string $actionType, array $actionConfig, mixed $decision): mixed\n    {\n        return match ($actionType) {\n            'create_record' => $this->executeCreateRecord($actionConfig, $decision),\n            'send_notification' => $this->executeSendNotification($actionConfig, $decision),\n            'call_api' => $this->executeCallApi($actionConfig, $decision),\n            'update_record' => $this->executeUpdateRecord($actionConfig, $decision),\n            'dispatch_job' => $this->executeDispatchJob($actionConfig, $decision),\n            default => throw new \\InvalidArgumentException(\"Unknown action type: {$actionType}\"),\n        };\n    }\n\n    protected function executeCreateRecord(array $config, mixed $decision): mixed\n    {\n        $modelClass = $config['model'];\n        $data = array_merge($config['static_data'] ?? [], $decision['data'] ?? []);\n\n        return $modelClass::create($data);\n    }\n\n    protected function executeSendNotification(array $config, mixed $decision): void\n    {\n        $notificationClass = $config['notification'];\n        $recipients = $config['recipients'];\n\n        foreach ($recipients as $recipient) {\n            $user = \\App\\Models\\User::where('email', $recipient)->first();\n            if ($user) {\n                $user->notify(new $notificationClass($decision, $config));\n            }\n        }\n    }\n\n    protected function executeCallApi(array $config, mixed $decision): mixed\n    {\n        $method = $config['method'] ?? 'post';\n        $url = $config['url'];\n        $data = array_merge($config['body'] ?? [], $decision['data'] ?? []);\n\n        return \\Illuminate\\Support\\Facades\\Http::withHeaders($config['headers'] ?? [])\n            ->{$method}($url, $data)\n            ->json();\n    }\n\n    protected function executeUpdateRecord(array $config, mixed $decision): mixed\n    {\n        $modelClass = $config['model'];\n        $record = $modelClass::findOrFail($config['record_id']);\n\n        $updateData = array_merge($config['static_data'] ?? [], $decision['data'] ?? []);\n        $record->update($updateData);\n\n        return $record;\n    }\n\n    protected function executeDispatchJob(array $config, mixed $decision): void\n    {\n        $jobClass = $config['job'];\n        $jobData = array_merge($config['data'] ?? [], ['decision' => $decision]);\n\n        $jobClass::dispatch($jobData);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "263-scheduled-cron-driven-automation-agents",
      children: "26.3 Scheduled (Cron-Driven) Automation Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cron agents run on defined schedules using Laravel scheduler for periodic tasks like report generation and data cleanup."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Scheduled automation agents run on a recurring schedule defined by Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "schedule()"
      }), " method in the console Kernel. Common examples include daily report generation, hourly monitoring, and weekly cleanup tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-generatereportcommand",
      children: "The GenerateReportCommand"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wrap the scheduled agent in an Artisan command so the scheduler can invoke it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\Ai\\Agents\\Automation\\Scheduled\\DailyReportAgent;\nuse App\\Models\\AutomationWorkflow;\nuse Illuminate\\Console\\Command;\n\nclass GenerateReportCommand extends Command\n{\n    protected $signature = 'automation:generate-report {workflow?} {--period=daily}';\n    protected $description = 'Run the daily report generation automation agent';\n\n    public function handle(): int\n    {\n        $workflowId = $this->argument('workflow');\n\n        $workflow = $workflowId\n            ? AutomationWorkflow::findOrFail($workflowId)\n            : AutomationWorkflow::active()\n                ->byTrigger('scheduled')\n                ->where('agent_class', DailyReportAgent::class)\n                ->first();\n\n        if (! $workflow) {\n            $this->error('No matching automation workflow found.');\n            return Command::FAILURE;\n        }\n\n        $this->info(\"Running automation: {$workflow->name}\");\n\n        try {\n            $period = $this->option('period');\n            $yesterday = now()->subDay();\n\n            $metrics = [\n                'orders_count' => \\App\\Models\\Order::whereDate('created_at', $yesterday)->count(),\n                'revenue' => \\App\\Models\\Order::whereDate('created_at', $yesterday)->sum('total'),\n                'avg_order_value' => \\App\\Models\\Order::whereDate('created_at', $yesterday)->avg('total'),\n                'new_customers' => \\App\\Models\\User::whereDate('created_at', $yesterday)->count(),\n                'refund_requests' => \\App\\Models\\Refund::whereDate('created_at', $yesterday)->count(),\n            ];\n\n            $agent = new DailyReportAgent($workflow, ['metrics' => $metrics], $period);\n\n            $response = $agent\n                ->maxTokens(2048)\n                ->prompt(\"Generate the {$period} business report for \"\n                    . $yesterday->toDateString()\n                    . '. Include key metrics, trends, and any anomalies detected.');\n\n            $decision = [\n                'action' => 'store_report',\n                'report_summary' => mb_substr($response->text(), 0, 500),\n                'data' => [\n                    'period' => $period,\n                    'generated_at' => now()->toIso8601String(),\n                    'report' => $response->text(),\n                ],\n            ];\n\n            $result = $agent->executeAction('create_record', [\n                'model' => \\App\\Models\\GeneratedReport::class,\n                'static_data' => [\n                    'workflow_id' => $workflow->id,\n                    'period' => $period,\n                    'content' => $response->text(),\n                    'metrics' => json_encode($metrics),\n                ],\n            ], $decision);\n\n            $agent->logDecision(\n                triggerSource: 'scheduler',\n                inputData: $metrics,\n                decision: $decision,\n                actionResult: $result->toArray(),\n            );\n\n            $this->info('Report generated successfully.');\n            return Command::SUCCESS;\n        } catch (\\Throwable $e) {\n            $this->error(\"Automation failed: {$e->getMessage()}\");\n            return Command::FAILURE;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-dailyreportagent-class",
      children: "The DailyReportAgent Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\Scheduled;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse App\\Models\\AutomationWorkflow;\nuse Stringable;\n\nclass DailyReportAgent extends AutomationAgent\n{\n    public function __construct(\n        AutomationWorkflow $workflow,\n        array $context = [],\n        protected string $period = 'daily',\n    ) {\n        parent::__construct($workflow, $context);\n    }\n\n    public function instructions(): Stringable|string\n    {\n        $metrics = $this->context['metrics'] ?? [];\n\n        $metricsStr = ! empty($metrics)\n            ? collect($metrics)->map(fn ($v, $k) => \"  - {$k}: {$v}\")->implode(\"\\n\")\n            : '  No metrics available.';\n\n        return <<<PROMPT\nYou are a report generation agent. Your job is to analyze business metrics\nand generate a comprehensive {$this->period} report.\n\nCurrent metrics:\n{$metricsStr}\n\nYour report should include:\n1. Executive summary of key metrics\n2. Trends and comparisons to previous periods\n3. Notable anomalies or outliers\n4. Actionable recommendations\n\nFormat the report professionally with sections and bullet points.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-runmonitoringagent-command",
      children: "The RunMonitoringAgent Command"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An hourly agent that checks system health metrics and alerts on anomalies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\Ai\\Agents\\Automation\\Scheduled\\SystemMonitorAgent;\nuse App\\Models\\AutomationWorkflow;\nuse Illuminate\\Console\\Command;\n\nclass RunMonitoringAgentCommand extends Command\n{\n    protected $signature = 'automation:monitor';\n    protected $description = 'Run the hourly system monitoring agent';\n\n    public function handle(): int\n    {\n        $workflow = AutomationWorkflow::active()\n            ->byTrigger('scheduled')\n            ->where('agent_class', SystemMonitorAgent::class)\n            ->first();\n\n        if (! $workflow) {\n            $this->error('No system monitor workflow found.');\n            return Command::FAILURE;\n        }\n\n        $metrics = [\n            'cpu_usage' => sys_getloadavg()[0] ?? 0,\n            'memory_usage_mb' => memory_get_usage(true) / 1024 / 1024,\n            'queue_size' => \\Illuminate\\Support\\Facades\\Queue::size(),\n            'failed_jobs_24h' => \\App\\Models\\FailedJob::where('failed_at', '>=', now()->subDay())->count(),\n        ];\n\n        $agent = new SystemMonitorAgent($workflow, ['metrics' => $metrics]);\n\n        $response = $agent\n            ->maxTokens(1024)\n            ->prompt(\"Analyze these system metrics and determine if any thresholds are breached:\\n\"\n                . json_encode($metrics, JSON_PRETTY_PRINT));\n\n        $decision = $response->structured();\n\n        if (($decision['alert_required'] ?? false)) {\n            foreach (($decision['alerts'] ?? []) as $alert) {\n                $this->sendAlert($alert);\n            }\n        }\n\n        $agent->logDecision(\n            triggerSource: 'scheduler:monitor',\n            inputData: $metrics,\n            decision: $decision,\n            actionResult: ['alerts_sent' => $decision['alerts'] ?? []],\n        );\n\n        $this->info('Monitoring cycle completed.');\n        return Command::SUCCESS;\n    }\n\n    private function sendAlert(array $alert): void\n    {\n        \\Illuminate\\Support\\Facades\\Notification::route('slack', config('services.slack.webhook'))\n            ->notify(new \\App\\Notifications\\SystemAlert(\n                $alert['message'] ?? 'Unknown alert',\n                $alert['severity'] ?? 'warning',\n            ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "registering-in-the-console-kernel",
      children: "Registering in the Console Kernel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console;\n\nuse App\\Console\\Commands\\GenerateReportCommand;\nuse App\\Console\\Commands\\RunMonitoringAgentCommand;\nuse Illuminate\\Console\\Scheduling\\Schedule;\nuse Illuminate\\Foundation\\Console\\Kernel as ConsoleKernel;\n\nclass Kernel extends ConsoleKernel\n{\n    protected function schedule(Schedule $schedule): void\n    {\n        $schedule->command(GenerateReportCommand::class, ['--period=daily'])\n            ->dailyAt('06:00')\n            ->withoutOverlapping()\n            ->onFailure(function () {\n                \\Illuminate\\Support\\Facades\\Log::error('Daily report automation failed.');\n            });\n\n        $schedule->command(GenerateReportCommand::class, ['--period=weekly'])\n            ->weeklyOn(1, '07:00')\n            ->withoutOverlapping();\n\n        $schedule->command(RunMonitoringAgentCommand::class)\n            ->hourly()\n            ->withoutOverlapping()\n            ->runInBackground();\n\n        $schedule->command('automation:cleanup-logs')\n            ->daily()\n            ->onOneServer();\n    }\n\n    protected function commands(): void\n    {\n        $this->load(__DIR__ . '/Commands');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Use withoutOverlapping on cron agents that process batches to prevent duplicate execution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "264-event-triggered-automation-agents",
      children: "26.4 Event-Triggered Automation Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Event agents fire in response to model events or domain events, enabling reactive automation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Event-triggered agents react to Laravel events. When something happens in the application — a model is saved, a user registers, an invoice is paid — the event system dispatches an agent to process it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-event-to-agent-bridge",
      children: "The Event-to-Agent Bridge"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nuse App\\Models\\AutomationLog;\nuse App\\Models\\AutomationWorkflow;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass DispatchAutomationAgent\n{\n    public function handle(object $event): void\n    {\n        $eventClass = get_class($event);\n\n        $workflows = AutomationWorkflow::active()\n            ->byTrigger('event')\n            ->where('trigger_config->event', $eventClass)\n            ->get();\n\n        foreach ($workflows as $workflow) {\n            try {\n                $context = $this->extractContext($event);\n\n                if (! $this->evaluateConditions($workflow->conditions, $context)) {\n                    AutomationLog::create([\n                        'workflow_id' => $workflow->id,\n                        'trigger_source' => \"event:{$eventClass}\",\n                        'input_data' => $context,\n                        'status' => 'skipped',\n                        'error_message' => 'Conditions not met',\n                    ]);\n                    continue;\n                }\n\n                $agentClass = $workflow->agent_class;\n                $agent = new $agentClass($workflow, $context);\n\n                $agent\n                    ->queue(\"Process the following event data:\\n\"\n                        . json_encode($context, JSON_PRETTY_PRINT))\n                    ->then(function (string $output) use ($agent, $workflow, $context, $eventClass): void {\n                        foreach ($workflow->actions as $action) {\n                            $agent->executeAction($action['type'], $action['config'], [\n                                'output' => $output,\n                                'context' => $context,\n                            ]);\n                        }\n\n                        $agent->logDecision(\n                            triggerSource: \"event:{$eventClass}\",\n                            inputData: $context,\n                            decision: ['agent_output' => $output],\n                            actionResult: ['actions_executed' => count($workflow->actions)],\n                        );\n                    })\n                    ->catch(function (\\Throwable $e) use ($workflow, $context, $eventClass): void {\n                        AutomationLog::create([\n                            'workflow_id' => $workflow->id,\n                            'trigger_source' => \"event:{$eventClass}\",\n                            'input_data' => $context,\n                            'status' => 'failed',\n                            'error_message' => $e->getMessage(),\n                        ]);\n                    });\n            } catch (\\Throwable $e) {\n                AutomationLog::create([\n                    'workflow_id' => $workflow->id,\n                    'trigger_source' => \"event:{$eventClass}\",\n                    'input_data' => $context ?? [],\n                    'status' => 'error',\n                    'error_message' => $e->getMessage(),\n                ]);\n            }\n        }\n    }\n\n    private function extractContext(object $event): array\n    {\n        $reflection = new \\ReflectionClass($event);\n        $properties = [];\n\n        foreach ($reflection->getProperties(\\ReflectionProperty::IS_PUBLIC) as $prop) {\n            $value = $prop->getValue($event);\n\n            if ($value instanceof Model) {\n                $properties[$prop->getName()] = $value->toArray();\n            } else {\n                $properties[$prop->getName()] = $value;\n            }\n        }\n\n        return $properties;\n    }\n\n    private function evaluateConditions(?array $conditions, array $context): bool\n    {\n        if (empty($conditions)) {\n            return true;\n        }\n\n        foreach ($conditions as $condition) {\n            $field = $condition['field'] ?? null;\n            $operator = $condition['operator'] ?? '=';\n            $value = $condition['value'] ?? null;\n            $actualValue = data_get($context, $field);\n\n            $matches = match ($operator) {\n                '=' => $actualValue == $value,\n                '!=' => $actualValue != $value,\n                '>' => $actualValue > $value,\n                '>=' => $actualValue >= $value,\n                '<' => $actualValue < $value,\n                '<=' => $actualValue <= $value,\n                'in' => in_array($actualValue, (array) $value),\n                'not_in' => ! in_array($actualValue, (array) $value),\n                'contains' => str_contains((string) $actualValue, (string) $value),\n                'regex' => preg_match($value, (string) $actualValue) === 1,\n                default => true,\n            };\n\n            if (! $matches) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-invoiceprocessingagent",
      children: "The InvoiceProcessingAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\EventDriven;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse Stringable;\n\nclass InvoiceProcessingAgent extends AutomationAgent\n{\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are an invoice processing agent. When an invoice is paid, you must:\n\n1. Verify the payment matches the invoice amount\n2. Categorize the invoice (operational_expense, vendor_payment, subscription, one_time)\n3. Determine if the invoice needs reconciliation (if amount > threshold)\n4. Suggest the appropriate GL account code\n5. Flag any anomalies (overpayment, underpayment, duplicate)\n\nRespond with a structured decision containing:\n- verification_status: verified or discrepancy_found\n- category: one of the categories above\n- needs_reconciliation: boolean\n- suggested_gl_code: string\n- anomalies: array of strings\n- confidence: float between 0 and 1\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "registering-the-event-subscriber",
      children: "Registering the Event Subscriber"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse App\\Events\\InvoicePaid;\nuse App\\Events\\OrderShipped;\nuse App\\Events\\UserRegistered;\nuse App\\Listeners\\DispatchAutomationAgent;\nuse Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;\n\nclass EventServiceProvider extends ServiceProvider\n{\n    protected $listen = [\n        InvoicePaid::class => [\n            DispatchAutomationAgent::class,\n        ],\n        OrderShipped::class => [\n            DispatchAutomationAgent::class,\n        ],\n        UserRegistered::class => [\n            DispatchAutomationAgent::class,\n        ],\n    ];\n\n    public function boot(): void\n    {\n        parent::boot();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "seeding-automation-workflows",
      children: "Seeding Automation Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Database\\Seeders;\n\nuse App\\Models\\AutomationWorkflow;\nuse Illuminate\\Database\\Seeder;\n\nclass AutomationWorkflowSeeder extends Seeder\n{\n    public function run(): void\n    {\n        AutomationWorkflow::create([\n            'name' => 'Invoice Paid Processing',\n            'description' => 'Process invoices when payment is received',\n            'trigger_type' => 'event',\n            'trigger_config' => [\n                'event' => 'App\\Events\\InvoicePaid',\n            ],\n            'agent_class' => 'App\\Ai\\Agents\\Automation\\EventDriven\\InvoiceProcessingAgent',\n            'agent_instructions' => 'Process invoice payments, verify amounts, categorize expenses, and flag discrepancies.',\n            'conditions' => [\n                ['field' => 'invoice.total', 'operator' => '>', 'value' => 0],\n            ],\n            'actions' => [\n                [\n                    'type' => 'create_record',\n                    'config' => [\n                        'model' => 'App\\Models\\ProcessedTransaction',\n                        'static_data' => ['source' => 'invoice_agent'],\n                    ],\n                ],\n                [\n                    'type' => 'send_notification',\n                    'config' => [\n                        'notification' => 'App\\Notifications\\InvoiceProcessed',\n                        'recipients' => ['finance@example.com'],\n                    ],\n                ],\n            ],\n            'is_active' => true,\n            'priority' => 10,\n        ]);\n\n        AutomationWorkflow::create([\n            'name' => 'New User Onboarding',\n            'description' => 'Send onboarding sequence to newly registered users',\n            'trigger_type' => 'event',\n            'trigger_config' => [\n                'event' => 'App\\Events\\UserRegistered',\n            ],\n            'agent_class' => 'App\\Ai\\Agents\\Automation\\EventDriven\\UserOnboardingAgent',\n            'agent_instructions' => \"Analyze the new user's signup data, determine their likely use case, and recommend the appropriate onboarding flow.\",\n            'conditions' => [],\n            'actions' => [\n                [\n                    'type' => 'dispatch_job',\n                    'config' => [\n                        'job' => 'App\\Jobs\\SendOnboardingSequence',\n                        'data' => ['delay_minutes' => 5],\n                    ],\n                ],\n            ],\n            'is_active' => true,\n            'priority' => 5,\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "265-webhook-driven-automation-agents",
      children: "26.5 Webhook-Driven Automation Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Webhook agents process incoming webhooks with HMAC verification before dispatching agent jobs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Webhook-driven agents accept incoming HTTP requests from external services — GitHub, Stripe, Slack, or any service that sends webhooks — and dispatch agents to process the payload."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "webhookcontroller-with-signature-verification",
      children: "WebhookController with Signature Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api;\n\nuse App\\Ai\\Agents\\Automation\\WebhookDriven\\CodeReviewAgent;\nuse App\\Ai\\Agents\\Automation\\WebhookDriven\\PaymentReconciliationAgent;\nuse App\\Models\\AutomationLog;\nuse App\\Models\\AutomationWorkflow;\nuse Illuminate\\Http\\Request;\n\nclass WebhookController extends Controller\n{\n    public function handleGithub(Request $request): array\n    {\n        $payload = $request->getContent();\n        $signature = $request->header('X-Hub-Signature-256');\n        $event = $request->header('X-GitHub-Event');\n        $secret = config('services.github.webhook_secret');\n\n        if (! $secret || ! $signature) {\n            abort(401, 'Missing signature or secret');\n        }\n\n        $expected = 'sha256=' . hash_hmac('sha256', $payload, $secret);\n\n        if (! hash_equals($expected, $signature)) {\n            abort(401, 'Invalid signature');\n        }\n\n        $data = json_decode($payload, true);\n\n        $workflow = AutomationWorkflow::active()\n            ->byTrigger('webhook')\n            ->where('trigger_config->source', 'github')\n            ->first();\n\n        if (! $workflow) {\n            return ['status' => 'no_workflow'];\n        }\n\n        if ($event === 'push') {\n            $agent = new CodeReviewAgent($workflow, [\n                'repository' => $data['repository']['full_name'],\n                'branch' => str_replace('refs/heads/', '', $data['ref']),\n                'commits' => $data['commits'],\n                'pusher' => $data['pusher']['name'],\n            ]);\n\n            $response = $agent\n                ->maxTokens(4096)\n                ->prompt(\"Review the following push to {$data['repository']['full_name']} \"\n                    . \"on branch {$data['ref']}.\\n\\nCommits:\\n\"\n                    . json_encode($data['commits'], JSON_PRETTY_PRINT));\n\n            $agent->logDecision(\n                triggerSource: 'webhook:github:push',\n                inputData: [\n                    'repository' => $data['repository']['full_name'],\n                    'event' => $event,\n                    'commits' => $data['commits'],\n                ],\n                decision: ['recommendations' => $response->text()],\n                actionResult: [],\n            );\n        }\n\n        return ['status' => 'processed', 'event' => $event];\n    }\n\n    public function handleStripe(Request $request): array\n    {\n        $payload = $request->getContent();\n        $sigHeader = $request->header('Stripe-Signature');\n        $secret = config('services.stripe.webhook_secret');\n\n        if (! $secret || ! $sigHeader) {\n            abort(401, 'Missing configuration');\n        }\n\n        try {\n            \\Stripe\\Webhook::constructEvent($payload, $sigHeader, $secret);\n        } catch (\\Exception $e) {\n            abort(401, 'Invalid signature');\n        }\n\n        $event = json_decode($payload, true);\n        $eventType = $event['type'];\n\n        $workflow = AutomationWorkflow::active()\n            ->byTrigger('webhook')\n            ->where('trigger_config->source', 'stripe')\n            ->where('trigger_config->event_type', $eventType)\n            ->first();\n\n        if (! $workflow) {\n            return ['status' => 'no_matching_workflow'];\n        }\n\n        $data = $event['data']['object'];\n\n        $agent = new PaymentReconciliationAgent($workflow, [\n            'event_type' => $eventType,\n            'amount' => $data['amount'] / 100,\n            'currency' => $data['currency'],\n            'customer' => $data['customer'] ?? null,\n            'created' => date('Y-m-d H:i:s', $data['created']),\n        ]);\n\n        $agent\n            ->queue(\"Reconcile this Stripe {$eventType} event:\\n\"\n                . json_encode($data, JSON_PRETTY_PRINT))\n            ->then(function (string $output) use ($agent, $eventType, $data): void {\n                $agent->logDecision(\n                    triggerSource: \"webhook:stripe:{$eventType}\",\n                    inputData: $data,\n                    decision: ['agent_output' => $output],\n                    actionResult: ['status' => 'reconciled'],\n                );\n            });\n\n        return ['status' => 'received', 'event' => $eventType];\n    }\n\n    public function handleGeneric(Request $request, string $source): array\n    {\n        $workflow = AutomationWorkflow::active()\n            ->byTrigger('webhook')\n            ->where('trigger_config->source', $source)\n            ->first();\n\n        if (! $workflow) {\n            return ['status' => 'no_workflow'];\n        }\n\n        $payload = $request->all();\n        $agentClass = $workflow->agent_class;\n        $agent = new $agentClass($workflow, ['payload' => $payload]);\n\n        $agent\n            ->queue(\"Process this webhook payload from {$source}:\\n\"\n                . json_encode($payload, JSON_PRETTY_PRINT))\n            ->then(function (string $output) use ($agent, $source, $payload): void {\n                $agent->logDecision(\n                    triggerSource: \"webhook:{$source}\",\n                    inputData: $payload,\n                    decision: ['agent_output' => $output],\n                    actionResult: [],\n                );\n            });\n\n        return ['status' => 'queued', 'source' => $source];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "webhook-routes",
      children: "Webhook Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Http\\Controllers\\Api\\WebhookController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::prefix('webhooks')->group(function () {\n    Route::post('github', [WebhookController::class, 'handleGithub']);\n    Route::post('stripe', [WebhookController::class, 'handleStripe']);\n    Route::post('{source}', [WebhookController::class, 'handleGeneric']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "webhook-agent-classes",
      children: "Webhook Agent Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\WebhookDriven;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse Stringable;\n\nclass CodeReviewAgent extends AutomationAgent\n{\n    public function instructions(): Stringable|string\n    {\n        $repo = $this->context['repository'] ?? 'unknown';\n        $branch = $this->context['branch'] ?? 'unknown';\n\n        return <<<PROMPT\nYou are a code review automation agent monitoring the {$repo} repository ({$branch} branch).\n\nFor each push event, you must:\n1. Summarize the changes in each commit\n2. Flag potential issues: security vulnerabilities, breaking changes, debug code, hardcoded secrets\n3. Assess code quality based on commit messages and change descriptions\n4. Recommend whether this push needs human review before proceeding to production\n\nProvide actionable feedback.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\WebhookDriven;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse Stringable;\n\nclass PaymentReconciliationAgent extends AutomationAgent\n{\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a payment reconciliation agent for Stripe transactions.\n\nFor each payment event, you must:\n1. Verify the transaction matches expected patterns\n2. Cross-reference the amount and currency with any pending invoices\n3. Categorize the transaction (subscription_renewal, one_time_purchase, refund, adjustment)\n4. Flag any discrepancies (wrong amount, unexpected currency, unusual timing)\n5. Determine if the transaction should be automatically reconciled or flagged for manual review\n\nRespond with a structured decision containing verification status, category, and any flags.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "266-approval-workflows-with-human-in-the-loop",
      children: "26.6 Approval Workflows with Human-in-the-Loop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Pending agent decisions create approval tokens with expiry, sent to human approvers via notification."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some decisions are too important for an agent to make alone. The agent proposes an action, sends a notification to a human approver with accept/reject actions, and only executes once approved."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-approvalworkflowagent",
      children: "The ApprovalWorkflowAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\Approval;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse App\\Models\\ApprovalRequest;\nuse App\\Models\\AutomationWorkflow;\nuse Stringable;\n\nclass ApprovalWorkflowAgent extends AutomationAgent\n{\n    public function __construct(\n        AutomationWorkflow $workflow,\n        array $context = [],\n        protected array $approvers = [],\n    ) {\n        parent::__construct($workflow, $context);\n    }\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are an approval workflow agent. Your job is to analyze requests that require\nhuman approval before execution. For each request, you must:\n\n1. Analyze the request details and context\n2. Determine the risk level (low, medium, high)\n3. Recommend whether to approve, reject, or request more information\n4. Identify the appropriate approver based on the request type and amount\n5. Provide a clear rationale for your recommendation\n\nYou do NOT execute actions directly — you submit recommendations for human review.\nPROMPT;\n    }\n\n    public function proposeAction(\n        string $actionType,\n        array $actionData,\n        string $summary,\n        int $approvalTimeoutMinutes = 60,\n    ): ApprovalRequest {\n        $response = $this\n            ->maxTokens(1024)\n            ->prompt(\"Analyze this action and provide a recommendation:\\n\\n\"\n                . \"Action Type: {$actionType}\\nData: \"\n                . json_encode($actionData, JSON_PRETTY_PRINT)\n                . \"\\n\\nSummary: {$summary}\");\n\n        $approval = ApprovalRequest::create([\n            'workflow_id' => $this->workflow->id,\n            'action_type' => $actionType,\n            'action_data' => $actionData,\n            'summary' => $summary,\n            'agent_recommendation' => $response->text(),\n            'status' => 'pending',\n            'approvers' => $this->approvers,\n            'expires_at' => now()->addMinutes($approvalTimeoutMinutes),\n        ]);\n\n        $this->sendApprovalNotification($approval);\n\n        return $approval;\n    }\n\n    private function sendApprovalNotification(ApprovalRequest $approval): void\n    {\n        $notification = new \\App\\Notifications\\ApprovalRequired($approval);\n\n        foreach ($this->approvers as $approverRef) {\n            $user = $this->resolveApprover($approverRef);\n            if ($user) {\n                $user->notify($notification);\n            }\n        }\n    }\n\n    private function resolveApprover(string|int $ref): ?\\App\\Models\\User\n    {\n        if (is_numeric($ref)) {\n            return \\App\\Models\\User::find($ref);\n        }\n        return \\App\\Models\\User::where('email', $ref)->first();\n    }\n\n    public function handleApproval(ApprovalRequest $approval, string $decision, ?string $comment = null): void\n    {\n        $approval->update([\n            'status' => $decision,\n            'approved_at' => $decision === 'approved' ? now() : null,\n            'rejected_at' => $decision === 'rejected' ? now() : null,\n            'approver_comment' => $comment,\n        ]);\n\n        if ($decision === 'approved') {\n            foreach ($this->workflow->actions as $action) {\n                $this->executeAction($action['type'], $action['config'], [\n                    'approval_id' => $approval->id,\n                    'data' => $approval->action_data,\n                ]);\n            }\n        }\n\n        $this->logDecision(\n            triggerSource: 'approval_workflow',\n            inputData: $approval->action_data,\n            decision: [\n                'approval_id' => $approval->id,\n                'recommendation' => $approval->agent_recommendation,\n                'human_decision' => $decision,\n            ],\n            actionResult: ['status' => \"human_{$decision}\"],\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-approvalrequest-model",
      children: "The ApprovalRequest Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass ApprovalRequest extends Model\n{\n    protected $fillable = [\n        'workflow_id',\n        'requestor_id',\n        'action_type',\n        'action_data',\n        'summary',\n        'agent_recommendation',\n        'status',\n        'approvers',\n        'approved_by',\n        'approved_at',\n        'rejected_at',\n        'approver_comment',\n        'expires_at',\n    ];\n\n    protected $casts = [\n        'action_data' => 'array',\n        'approvers' => 'array',\n        'expires_at' => 'datetime',\n        'approved_at' => 'datetime',\n        'rejected_at' => 'datetime',\n    ];\n\n    public function workflow(): BelongsTo\n    {\n        return $this->belongsTo(AutomationWorkflow::class);\n    }\n\n    public function isExpired(): bool\n    {\n        return $this->expires_at && $this->expires_at->isPast();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-for-approvalrequest",
      children: "Migration for ApprovalRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('approval_requests', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('workflow_id')->constrained('automation_workflows');\n            $table->foreignId('requestor_id')->nullable()->constrained('users');\n            $table->string('action_type');\n            $table->json('action_data');\n            $table->text('summary');\n            $table->longText('agent_recommendation')->nullable();\n            $table->string('status')->default('pending');\n            $table->json('approvers');\n            $table->foreignId('approved_by')->nullable()->constrained('users');\n            $table->timestamp('approved_at')->nullable();\n            $table->timestamp('rejected_at')->nullable();\n            $table->text('approver_comment')->nullable();\n            $table->timestamp('expires_at')->nullable();\n            $table->timestamps();\n\n            $table->index('status');\n            $table->index('expires_at');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('approval_requests');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "approval-notification-with-action-buttons",
      children: "Approval Notification with Action Buttons"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Notifications;\n\nuse App\\Models\\ApprovalRequest;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Notifications\\Messages\\MailMessage;\nuse Illuminate\\Notifications\\Notification;\n\nclass ApprovalRequired extends Notification\n{\n    use Queueable;\n\n    public function __construct(\n        public ApprovalRequest $approval,\n    ) {}\n\n    public function via(object $notifiable): array\n    {\n        return ['mail', 'database'];\n    }\n\n    public function toMail(object $notifiable): MailMessage\n    {\n        $approveUrl = url(\"/api/approvals/{$this->approval->id}/approve\");\n        $rejectUrl = url(\"/api/approvals/{$this->approval->id}/reject\");\n\n        return (new MailMessage)\n            ->subject(\"Approval Required: {$this->approval->summary}\")\n            ->greeting('Approval Request')\n            ->line(\"Action: {$this->approval->action_type}\")\n            ->line(\"Summary: {$this->approval->summary}\")\n            ->line(\"Agent Recommendation: {$this->approval->agent_recommendation}\")\n            ->line('')\n            ->line('Please review and take action:')\n            ->action('Approve', $approveUrl)\n            ->line(\"To reject, visit: {$rejectUrl}\")\n            ->line(\"Expires: {$this->approval->expires_at->toDayDateTimeString()}\");\n    }\n\n    public function toArray(object $notifiable): array\n    {\n        return [\n            'approval_id' => $this->approval->id,\n            'action_type' => $this->approval->action_type,\n            'summary' => $this->approval->summary,\n            'approve_url' => url(\"/api/approvals/{$this->approval->id}/approve\"),\n            'reject_url' => url(\"/api/approvals/{$this->approval->id}/reject\"),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "approvalcontroller",
      children: "ApprovalController"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api;\n\nuse App\\Ai\\Agents\\Automation\\Approval\\ApprovalWorkflowAgent;\nuse App\\Models\\ApprovalRequest;\nuse App\\Models\\AutomationWorkflow;\nuse Illuminate\\Http\\Request;\n\nclass ApprovalController extends Controller\n{\n    public function approve(int $id): array\n    {\n        $approval = ApprovalRequest::findOrFail($id);\n\n        if ($approval->status !== 'pending') {\n            return [\n                'status' => 'error',\n                'message' => \"This request has already been {$approval->status}.\",\n            ];\n        }\n\n        if ($approval->isExpired()) {\n            $approval->update(['status' => 'expired']);\n            return ['status' => 'expired', 'message' => 'This approval request has expired.'];\n        }\n\n        $workflow = AutomationWorkflow::findOrFail($approval->workflow_id);\n        $agent = new ApprovalWorkflowAgent($workflow);\n        $agent->handleApproval($approval, 'approved');\n\n        return ['status' => 'approved', 'message' => 'Action has been approved and executed.'];\n    }\n\n    public function reject(Request $request, int $id): array\n    {\n        $request->validate(['comment' => 'nullable|string|max:1000']);\n\n        $approval = ApprovalRequest::findOrFail($id);\n\n        if ($approval->status !== 'pending') {\n            return [\n                'status' => 'error',\n                'message' => \"This request has already been {$approval->status}.\",\n            ];\n        }\n\n        $workflow = AutomationWorkflow::findOrFail($approval->workflow_id);\n        $agent = new ApprovalWorkflowAgent($workflow);\n        $agent->handleApproval($approval, 'rejected', $request->input('comment'));\n\n        return ['status' => 'rejected', 'message' => 'Action has been rejected.'];\n    }\n\n    public function pending(): array\n    {\n        $pending = ApprovalRequest::where('status', 'pending')\n            ->where('expires_at', '>', now())\n            ->with('workflow')\n            ->orderBy('created_at', 'desc')\n            ->get();\n\n        return [\n            'pending_count' => $pending->count(),\n            'requests' => $pending->map(fn ($r) => [\n                'id' => $r->id,\n                'summary' => $r->summary,\n                'action_type' => $r->action_type,\n                'recommendation' => $r->agent_recommendation,\n                'created_at' => $r->created_at->diffForHumans(),\n                'expires_at' => $r->expires_at->diffForHumans(),\n            ]),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Store the full context snapshot in the approval request so the approver can make an informed decision without switching contexts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "267-agent-based-data-pipelines",
      children: "26.7 Agent-Based Data Pipelines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ETL pipelines chain extraction, transformation, and loading agents for automated data processing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents can orchestrate ETL (Extract, Transform, Load) pipelines — ingesting data from files or APIs, using AI to transform and enrich it, and loading the result into the database."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dataingestionagent",
      children: "DataIngestionAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\DataPipeline;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse Illuminate\\Support\\Facades\\Storage;\nuse Stringable;\n\nclass DataIngestionAgent extends AutomationAgent\n{\n    public function instructions(): Stringable|string\n    {\n        $sourceType = $this->context['source_type'] ?? 'unknown';\n\n        return <<<PROMPT\nYou are a data ingestion agent. Your job is to extract raw data from various sources\nand prepare it for transformation.\n\nSource type: {$sourceType}\n\nFor CSV files, identify the columns, data types, row count, and any data quality issues.\nFor API responses, parse the structure, identify the relevant data fields, and pagination.\nFor PDFs, extract the key data points and tabular information.\n\nOutput a structured summary of what was ingested including record count, fields found,\nand any anomalies detected.\nPROMPT;\n    }\n\n    public function ingestFromCsv(string $filePath): array\n    {\n        $rows = [];\n        $handle = fopen(Storage::path($filePath), 'r');\n\n        if (! $handle) {\n            throw new \\RuntimeException(\"Cannot open file: {$filePath}\");\n        }\n\n        $headers = fgetcsv($handle);\n        $rowCount = 0;\n\n        while (($data = fgetcsv($handle)) !== false) {\n            if (count($data) === count($headers)) {\n                $rows[] = array_combine($headers, $data);\n            }\n            $rowCount++;\n        }\n\n        fclose($handle);\n\n        $sampleData = array_slice($rows, 0, 5);\n\n        $response = $this\n            ->maxTokens(1024)\n            ->prompt(\"Analyze this CSV data:\\n\\nColumns: \"\n                . json_encode($headers)\n                . \"\\n\\nRow Count: {$rowCount}\\n\\nSample Rows:\\n\"\n                . json_encode($sampleData, JSON_PRETTY_PRINT));\n\n        return [\n            'headers' => $headers,\n            'row_count' => $rowCount,\n            'rows' => $rows,\n            'analysis' => $response->text(),\n        ];\n    }\n\n    public function ingestFromApi(string $url, array $headers = []): array\n    {\n        $response = \\Illuminate\\Support\\Facades\\Http::withHeaders($headers)->get($url);\n\n        if ($response->failed()) {\n            throw new \\RuntimeException(\"API request failed: {$response->status()}\");\n        }\n\n        $data = $response->json();\n        $recordCount = count($data['data'] ?? $data ?? []);\n\n        $analysis = $this\n            ->maxTokens(1024)\n            ->prompt(\"Analyze this API response structure:\\n\\n\"\n                . json_encode($data, JSON_PRETTY_PRINT));\n\n        return [\n            'raw_data' => $data,\n            'record_count' => $recordCount,\n            'analysis' => $analysis->text(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "datatransformagent",
      children: "DataTransformAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\DataPipeline;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse Stringable;\n\nclass DataTransformAgent extends AutomationAgent\n{\n    public function instructions(): Stringable|string\n    {\n        $targetModel = $this->context['target_model'] ?? 'unknown';\n\n        return <<<PROMPT\nYou are a data transformation agent. Your job is to transform raw ingested data\ninto structured records for the {$targetModel} model.\n\nFor each record, you must:\n1. Map source fields to target model fields\n2. Clean and normalize data (trim whitespace, standardize formats)\n3. Validate data types and constraints\n4. Enrich data where possible (derive calculated fields)\n5. Flag records that cannot be cleanly transformed\n\nOutput the transformed records as structured data ready for loading.\nPROMPT;\n    }\n\n    public function transform(array $rows, array $fieldMapping): array\n    {\n        $transformed = [];\n        $errors = [];\n\n        foreach ($rows as $index => $row) {\n            try {\n                $mapped = [];\n\n                foreach ($fieldMapping as $targetField => $sourceField) {\n                    if (is_array($sourceField)) {\n                        $mapped[$targetField] = $this->applyTransformation(\n                            $row[$sourceField['source']] ?? null,\n                            $sourceField['transform'] ?? 'passthrough',\n                            $sourceField['params'] ?? [],\n                        );\n                    } else {\n                        $mapped[$targetField] = $row[$sourceField] ?? null;\n                    }\n                }\n\n                $transformed[] = $mapped;\n            } catch (\\Throwable $e) {\n                $errors[] = [\n                    'row_index' => $index,\n                    'error' => $e->getMessage(),\n                    'data' => $row,\n                ];\n            }\n        }\n\n        $response = $this\n            ->maxTokens(1024)\n            ->prompt(\"Review transformation result:\\n\\nTransformed: \"\n                . count($transformed) . \" records\\nErrors: \"\n                . count($errors) . \"\\n\\nFirst 3 transformed:\\n\"\n                . json_encode(array_slice($transformed, 0, 3), JSON_PRETTY_PRINT)\n                . \"\\n\\nErrors:\\n\" . json_encode($errors, JSON_PRETTY_PRINT));\n\n        return [\n            'transformed' => $transformed,\n            'errors' => $errors,\n            'quality_report' => $response->text(),\n        ];\n    }\n\n    private function applyTransformation(mixed $value, string $transform, array $params = []): mixed\n    {\n        return match ($transform) {\n            'passthrough' => $value,\n            'trim' => is_string($value) ? trim($value) : $value,\n            'lowercase' => is_string($value) ? mb_strtolower($value) : $value,\n            'uppercase' => is_string($value) ? mb_strtoupper($value) : $value,\n            'float' => is_numeric($value) ? (float) $value\n                : throw new \\InvalidArgumentException(\"Cannot convert to float: {$value}\"),\n            'integer' => is_numeric($value) ? (int) $value\n                : throw new \\InvalidArgumentException(\"Cannot convert to integer: {$value}\"),\n            'boolean' => filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE)\n                ?? throw new \\InvalidArgumentException(\"Cannot convert to boolean: {$value}\"),\n            'date' => date($params['format'] ?? 'Y-m-d', strtotime((string) $value)),\n            'datetime' => date($params['format'] ?? 'Y-m-d H:i:s', strtotime((string) $value)),\n            'json' => is_string($value) ? json_decode($value, true) : $value,\n            default => $value,\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "etl-pipeline-orchestration",
      children: "ETL Pipeline Orchestration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api;\n\nuse App\\Ai\\Agents\\Automation\\DataPipeline\\DataIngestionAgent;\nuse App\\Ai\\Agents\\Automation\\DataPipeline\\DataTransformAgent;\nuse App\\Models\\AutomationLog;\nuse App\\Models\\AutomationWorkflow;\nuse Illuminate\\Http\\Request;\n\nclass EtlPipelineController extends Controller\n{\n    public function runCsvImport(Request $request): array\n    {\n        $request->validate([\n            'file' => 'required|file|mimes:csv,txt|max:10240',\n            'workflow_id' => 'required|exists:automation_workflows,id',\n        ]);\n\n        $workflow = AutomationWorkflow::findOrFail($request->input('workflow_id'));\n        $file = $request->file('file');\n        $path = $file->store('etl-imports');\n\n        $ingestionAgent = new DataIngestionAgent($workflow, [\n            'source_type' => 'csv',\n        ]);\n\n        $ingested = $ingestionAgent->ingestFromCsv($path);\n\n        $fieldMapping = $workflow->trigger_config['field_mapping'] ?? [];\n        $targetModel = $workflow->trigger_config['target_model'] ?? 'App\\Models\\ImportedRecord';\n\n        $transformAgent = new DataTransformAgent($workflow, [\n            'target_model' => $targetModel,\n        ]);\n\n        $transformed = $transformAgent->transform($ingested['rows'], $fieldMapping);\n\n        $importedCount = 0;\n        foreach ($transformed['transformed'] as $record) {\n            $targetModel::create($record);\n            $importedCount++;\n        }\n\n        AutomationLog::create([\n            'workflow_id' => $workflow->id,\n            'trigger_source' => 'etl:pipeline',\n            'input_data' => [\n                'source' => $path,\n                'raw_count' => $ingested['row_count'],\n            ],\n            'agent_decision' => [\n                'ingestion_analysis' => $ingested['analysis'],\n                'transformation_quality' => $transformed['quality_report'],\n            ],\n            'action_taken' => [\n                'imported' => $importedCount,\n                'errors' => count($transformed['errors']),\n            ],\n            'status' => $transformed['errors'] ? 'completed_with_errors' : 'completed',\n        ]);\n\n        return [\n            'imported' => $importedCount,\n            'errors' => count($transformed['errors']),\n            'error_details' => $transformed['errors'],\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "268-notification--escalation-agents",
      children: "26.8 Notification & Escalation Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Notification agents send alerts through channels; escalation agents elevate unhandled issues."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notification agents monitor system events and metrics, then intelligently route alerts to the right people through the right channels. Escalation agents add time-based escalation logic: if nobody acknowledges an alert within a window, it escalates to someone more senior."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "escalationagent",
      children: "EscalationAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\Escalation;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse App\\Models\\Alert;\nuse App\\Models\\EscalationPolicie; // intentionally kept\nuse Illuminate\\Support\\Facades\\Notification as NotificationFacade;\nuse Stringable;\n\nclass EscalationAgent extends AutomationAgent\n{\n    protected int $alertId;\n\n    protected array $escalationPath = [];\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are an escalation management agent. Your job is to classify alerts, determine severity,\nand route them through the appropriate escalation path.\n\nSeverity levels:\n- **CRITICAL**: System down, data loss, security breach. Escalate immediately to on-call + manager.\n- **HIGH**: Major feature degraded, performance impact. Escalate to on-call within 15 min if unacknowledged.\n- **MEDIUM**: Non-critical issue. Escalate to team lead if unacknowledged within 1 hour.\n- **LOW**: Informational. No escalation needed.\n\nFor each alert, analyze the context and determine:\n1. Correct severity level\n2. Initial notification targets (who should be notified first)\n3. Escalation path (who to escalate to and after how long)\n4. Suggested response or remediation steps\n\nOutput a structured escalation plan.\nPROMPT;\n    }\n\n    public function classifyAndEscalate(\n        string $alertType,\n        string $message,\n        array $context = [],\n        string $source = 'system',\n    ): Alert {\n        $response = $this\n            ->maxTokens(1024)\n            ->prompt(\"Classify this alert:\\n\\nType: {$alertType}\\nMessage: {$message}\\nContext: \"\n                . json_encode($context, JSON_PRETTY_PRINT));\n\n        $plan = json_decode($response->text(), true) ?? [\n            'severity' => 'MEDIUM',\n            'initial_targets' => ['on-call'],\n            'escalation_steps' => [\n                ['after_minutes' => 60, 'targets' => ['team-lead']],\n            ],\n        ];\n\n        $alert = Alert::create([\n            'alert_type' => $alertType,\n            'message' => $message,\n            'context' => $context,\n            'source' => $source,\n            'severity' => $plan['severity'],\n            'status' => 'open',\n            'escalation_plan' => $plan['escalation_steps'] ?? [],\n            'escalation_level' => 0,\n        ]);\n\n        $this->alertId = $alert->id;\n        $this->escalationPath = $plan['escalation_steps'] ?? [];\n\n        $this->notifyTargets($plan['initial_targets'] ?? ['on-call'], $alert);\n\n        $this->logDecision(\n            triggerSource: \"escalation:{$source}\",\n            inputData: ['type' => $alertType, 'message' => $message, 'context' => $context],\n            decision: $plan,\n            actionResult: ['alert_id' => $alert->id, 'severity' => $plan['severity']],\n        );\n\n        return $alert;\n    }\n\n    public function checkEscalation(Alert $alert): ?array\n    {\n        if ($alert->status !== 'open' && $alert->status !== 'acknowledged') {\n            return null;\n        }\n\n        $plan = $alert->escalation_plan;\n        $currentLevel = $alert->escalation_level;\n\n        if ($currentLevel >= count($plan)) {\n            return null;\n        }\n\n        $step = $plan[$currentLevel];\n        $escalatedAt = $alert->acknowledged_at ?? $alert->created_at;\n        $minutesElapsed = $escalatedAt->diffInMinutes(now());\n\n        if ($minutesElapsed >= ($step['after_minutes'] ?? 15)) {\n            $this->notifyTargets($step['targets'] ?? [], $alert, true);\n            $alert->increment('escalation_level');\n\n            $this->logDecision(\n                triggerSource: 'escalation:check',\n                inputData: ['alert_id' => $alert->id, 'level' => $currentLevel],\n                decision: ['action' => 'escalated', 'targets' => $step['targets'] ?? []],\n                actionResult: ['new_level' => $currentLevel + 1],\n            );\n\n            return $step;\n        }\n\n        return null;\n    }\n\n    private function notifyTargets(array $targets, Alert $alert, bool $isEscalation = false): void\n    {\n        $notification = $isEscalation\n            ? new \\App\\Notifications\\AlertEscalated($alert)\n            : new \\App\\Notifications\\AlertCreated($alert);\n\n        foreach ($targets as $target) {\n            $user = $this->resolveTarget($target);\n            if ($user) {\n                NotificationFacade::send($user, $notification);\n            }\n        }\n    }\n\n    private function resolveTarget(string $target): ?\\App\\Models\\User\n    {\n        $roles = [\n            'on-call' => ['role' => 'support', 'oncall' => true],\n            'team-lead' => ['role' => 'team_lead'],\n            'manager' => ['role' => 'manager'],\n            'admin' => ['role' => 'admin'],\n            'security' => ['role' => 'security'],\n        ];\n\n        $criteria = $roles[$target] ?? null;\n        if (! $criteria) {\n            return \\App\\Models\\User::where('email', $target)->first();\n        }\n\n        return \\App\\Models\\User::whereHas('roles', function ($q) use ($criteria) {\n            $q->where('name', $criteria['role']);\n        })\n            ->when($criteria['oncall'] ?? false, fn ($q) => $q->where('is_oncall', true))\n            ->inRandomOrder()\n            ->first();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "alert-model-and-migration",
      children: "Alert Model and Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass Alert extends Model\n{\n    protected $fillable = [\n        'alert_type', 'message', 'context', 'source',\n        'severity', 'status', 'escalation_plan', 'escalation_level',\n        'acknowledged_by', 'acknowledged_at', 'resolved_by', 'resolved_at',\n    ];\n\n    protected $casts = [\n        'context' => 'array',\n        'escalation_plan' => 'array',\n        'acknowledged_at' => 'datetime',\n        'resolved_at' => 'datetime',\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('alerts', function (Blueprint $table) {\n            $table->id();\n            $table->string('alert_type');\n            $table->text('message');\n            $table->json('context')->nullable();\n            $table->string('source')->default('system');\n            $table->string('severity');\n            $table->string('status')->default('open');\n            $table->json('escalation_plan')->nullable();\n            $table->unsignedTinyInteger('escalation_level')->default(0);\n            $table->foreignId('acknowledged_by')->nullable()->constrained('users');\n            $table->timestamp('acknowledged_at')->nullable();\n            $table->foreignId('resolved_by')->nullable()->constrained('users');\n            $table->timestamp('resolved_at')->nullable();\n            $table->timestamps();\n\n            $table->index(['status', 'severity']);\n            $table->index('created_at');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('alerts');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "escalation-command-run-every-minute-via-scheduler",
      children: "Escalation Command (run every minute via scheduler)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\Ai\\Agents\\Automation\\Escalation\\EscalationAgent;\nuse App\\Models\\Alert;\nuse App\\Models\\AutomationWorkflow;\nuse Illuminate\\Console\\Command;\n\nclass ProcessEscalations extends Command\n{\n    protected $signature = 'alerts:escalate';\n    protected $description = 'Check and process alert escalations';\n\n    public function handle(): int\n    {\n        $workflow = AutomationWorkflow::active()\n            ->byTrigger('schedule')\n            ->whereHas('tasks', fn ($q) => $q->where('task', 'alerts:escalate'))\n            ->first();\n\n        if (! $workflow) {\n            $this->warn('No escalation workflow found');\n            return self::FAILURE;\n        }\n\n        $agent = new EscalationAgent($workflow);\n\n        $openAlerts = Alert::whereIn('status', ['open', 'acknowledged'])->get();\n        $escalated = 0;\n\n        foreach ($openAlerts as $alert) {\n            $step = $agent->checkEscalation($alert);\n            if ($step) {\n                $escalated++;\n                $this->info(\n                    \"Escalated alert #{$alert->id} to \"\n                    . implode(', ', $step['targets'] ?? [])\n                );\n            }\n        }\n\n        $this->info(\"Checked {$openAlerts->count()} alerts, escalated {$escalated}\");\n\n        return self::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "269-audit-logging-for-agent-decisions",
      children: "26.9 Audit Logging for Agent Decisions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every agent action is logged with who, what, when, and why for compliance and debugging."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every agent action should be auditable. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutomationLog"
      }), " model captures who (which agent), what (decision), when (timestamp), and why (input context)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "enhanced-automationlog-with-agentreference",
      children: "Enhanced AutomationLog with AgentReference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass AutomationLog extends Model\n{\n    protected $fillable = [\n        'workflow_id',\n        'agent_session_id',\n        'trigger_source',\n        'input_data',\n        'agent_decision',\n        'action_taken',\n        'response_time_ms',\n        'token_usage',\n        'model_used',\n        'status',\n        'error_message',\n        'performed_by',\n    ];\n\n    protected $casts = [\n        'input_data' => 'array',\n        'agent_decision' => 'array',\n        'action_taken' => 'array',\n        'token_usage' => 'array',\n    ];\n\n    public function workflow(): BelongsTo\n    {\n        return $this->belongsTo(AutomationWorkflow::class);\n    }\n\n    public function performer(): BelongsTo\n    {\n        return $this->belongsTo(User::class, 'performed_by');\n    }\n\n    public function scopeByTrigger($query, string $trigger)\n    {\n        return $query->where('trigger_source', $trigger);\n    }\n\n    public function scopeToday($query)\n    {\n        return $query->whereDate('created_at', today());\n    }\n\n    public function scopeErrors($query)\n    {\n        return $query->where('status', 'failed');\n    }\n\n    public function scopeForWorkflow($query, int $workflowId)\n    {\n        return $query->where('workflow_id', $workflowId);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "auditlogcontroller-with-query-capabilities",
      children: "AuditLogController with Query Capabilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api;\n\nuse App\\Models\\AutomationLog;\nuse Illuminate\\Http\\Request;\n\nclass AuditLogController extends Controller\n{\n    public function index(Request $request): array\n    {\n        $query = AutomationLog::with('workflow')\n            ->latest();\n\n        if ($request->filled('workflow_id')) {\n            $query->where('workflow_id', $request->input('workflow_id'));\n        }\n\n        if ($request->filled('trigger_source')) {\n            $query->where('trigger_source', 'like', '%' . $request->input('trigger_source') . '%');\n        }\n\n        if ($request->filled('status')) {\n            $query->where('status', $request->input('status'));\n        }\n\n        if ($request->filled('date_from')) {\n            $query->whereDate('created_at', '>=', $request->input('date_from'));\n        }\n\n        if ($request->filled('date_to')) {\n            $query->whereDate('created_at', '<=', $request->input('date_to'));\n        }\n\n        $perPage = $request->input('per_page', 25);\n        $logs = $query->paginate(min($perPage, 100));\n\n        return [\n            'total' => $logs->total(),\n            'per_page' => $logs->perPage(),\n            'current_page' => $logs->currentPage(),\n            'logs' => $logs->map(fn ($log) => [\n                'id' => $log->id,\n                'workflow' => $log->workflow?->name,\n                'trigger' => $log->trigger_source,\n                'decision_summary' => $this->summarizeDecision($log->agent_decision),\n                'response_time_ms' => $log->response_time_ms,\n                'status' => $log->status,\n                'created_at' => $log->created_at->toIso8601String(),\n            ]),\n        ];\n    }\n\n    public function show(int $id): array\n    {\n        $log = AutomationLog::with('workflow', 'performer')->findOrFail($id);\n\n        return [\n            'id' => $log->id,\n            'workflow' => $log->workflow?->name,\n            'trigger_source' => $log->trigger_source,\n            'input' => $log->input_data,\n            'decision' => $log->agent_decision,\n            'action' => $log->action_taken,\n            'performance' => [\n                'response_time_ms' => $log->response_time_ms,\n                'token_usage' => $log->token_usage,\n                'model' => $log->model_used,\n            ],\n            'status' => $log->status,\n            'error' => $log->error_message,\n            'performed_by' => $log->performer?->name,\n            'timestamp' => $log->created_at->toIso8601String(),\n        ];\n    }\n\n    public function stats(Request $request): array\n    {\n        $query = AutomationLog::query();\n\n        if ($request->filled('workflow_id')) {\n            $query->where('workflow_id', $request->input('workflow_id'));\n        }\n\n        $dateFrom = $request->input('date_from', now()->subDays(7));\n        $query->whereDate('created_at', '>=', $dateFrom);\n\n        $totalActions = (clone $query)->count();\n        $successCount = (clone $query)->where('status', 'completed')->count();\n        $failedCount = (clone $query)->where('status', 'failed')->count();\n        $avgResponseTime = (clone $query)->avg('response_time_ms');\n\n        $byTrigger = (clone $query)\n            ->selectRaw('trigger_source, count(*) as count')\n            ->groupBy('trigger_source')\n            ->pluck('count', 'trigger_source')\n            ->toArray();\n\n        $byDay = (clone $query)\n            ->selectRaw('DATE(created_at) as date, count(*) as count')\n            ->groupBy('date')\n            ->orderBy('date')\n            ->pluck('count', 'date')\n            ->toArray();\n\n        return [\n            'period' => ['from' => $dateFrom, 'to' => now()],\n            'summary' => [\n                'total_actions' => $totalActions,\n                'completed' => $successCount,\n                'failed' => $failedCount,\n                'success_rate' => $totalActions > 0\n                    ? round(($successCount / $totalActions) * 100, 1) . '%' : '0%',\n                'avg_response_time_ms' => round($avgResponseTime ?? 0, 0),\n            ],\n            'breakdown' => [\n                'by_trigger_source' => $byTrigger,\n                'by_day' => $byDay,\n            ],\n        ];\n    }\n\n    private function summarizeDecision(?array $decision): string\n    {\n        if (! $decision) {\n            return 'N/A';\n        }\n\n        $text = json_encode($decision);\n        return mb_strlen($text) > 200 ? mb_substr($text, 0, 200) . '...' : $text;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "audit-log-routes",
      children: "Audit Log Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Http\\Controllers\\Api\\AuditLogController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::middleware('auth:sanctum')->prefix('audit')->group(function () {\n    Route::get('logs', [AuditLogController::class, 'index']);\n    Route::get('logs/{id}', [AuditLogController::class, 'show']);\n    Route::get('stats', [AuditLogController::class, 'stats']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Audit logs are subject to compliance requirements. Ensure logs are immutable and cannot be deleted or altered by agents."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2610-end-to-end-example-customer-support-inbox-agent",
      children: "26.10 End-to-End Example: Customer Support Inbox Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A complete example shows automated customer support: classify, respond, escalate, and log."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This e2e example combines scheduling, event-driven logic, approval workflows, notifications, and audit logging into a single system: an automated customer support triage agent that ingests tickets, categorizes them, drafts replies, escalates critical issues, and logs everything."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supporttriageagent",
      children: "SupportTriageAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Automation\\E2E\\CustomerSupport;\n\nuse App\\Ai\\Agents\\Automation\\AutomationAgent;\nuse App\\Models\\AutomationWorkflow;\nuse App\\Models\\SupportTicket;\nuse Stringable;\n\nclass SupportTriageAgent extends AutomationAgent\n{\n    public function __construct(\n        AutomationWorkflow $workflow,\n        array $context = [],\n        protected ?string $ticketContent = null,\n    ) {\n        parent::__construct($workflow, $context);\n    }\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a customer support triage agent for a SaaS platform.\n\nFor each incoming support ticket, you must:\n\n1. **CATEGORIZE** the issue into: billing, technical, account, feature_request, bug_report, general\n2. **ASSESS PRIORITY**: urgent (system down, data loss), high (blocked workflow), normal (question), low (request)\n3. **SENTIMENT ANALYSIS**: frustrated, neutral, satisfied — flag frustrated tickets for priority handling\n4. **DRAFT RESPONSE**: a helpful first reply addressing the customer's core concern\n5. **DETERMINE ROUTING**: which team or agent should handle this (tier-1, billing, engineering, escalation)\n6. **IDENTIFY ATTACHMENTS**: if files are referenced, note what they contain\n7. **RECOMMEND NEXT STEPS**: auto-reply vs. human review — if confidence is above 85%, auto-reply; otherwise flag for review\n\nOutput a structured triage result with category, priority, sentiment, draft reply, and routing decision.\nPROMPT;\n    }\n\n    public function triage(SupportTicket $ticket): SupportTicket\n    {\n        $startTime = microtime(true);\n\n        $response = $this\n            ->maxTokens(2048)\n            ->prompt(\"Triage this support ticket:\\n\\n\"\n                . \"Subject: {$ticket->subject}\\n\\n\"\n                . \"Message:\\n{$ticket->message}\\n\\n\"\n                . \"Customer: {$ticket->customer_name} ({$ticket->customer_email})\\n\"\n                . \"Plan: {$ticket->customer_plan}\\n\"\n                . \"Attachments: \" . ($ticket->attachment_names ?? 'none'));\n\n        $result = json_decode($response->text(), true) ?? [\n            'category' => 'general',\n            'priority' => 'normal',\n            'sentiment' => 'neutral',\n            'draft_reply' => '',\n            'routing' => 'tier-1',\n            'auto_reply_confidence' => 0,\n        ];\n\n        $responseTime = (int) ((microtime(true) - $startTime) * 1000);\n\n        $ticket->update([\n            'category' => $result['category'] ?? 'general',\n            'priority' => $result['priority'] ?? 'normal',\n            'sentiment' => $result['sentiment'] ?? 'neutral',\n            'routed_to' => $result['routing'] ?? 'tier-1',\n            'triage_status' => 'completed',\n        ]);\n\n        if (($result['auto_reply_confidence'] ?? 0) > 85) {\n            $this->sendAutoReply($ticket, $result['draft_reply'] ?? '');\n        } else {\n            $this->flagForReview($ticket, $result);\n        }\n\n        $this->logDecision(\n            triggerSource: 'e2e:support_triage',\n            inputData: [\n                'ticket_id' => $ticket->id,\n                'subject' => $ticket->subject,\n                'customer' => $ticket->customer_email,\n            ],\n            decision: $result,\n            actionResult: [\n                'auto_replied' => ($result['auto_reply_confidence'] ?? 0) > 85,\n                'routed_to' => $result['routing'] ?? 'tier-1',\n            ],\n            responseTimeMs: $responseTime,\n        );\n\n        return $ticket->fresh();\n    }\n\n    private function sendAutoReply(SupportTicket $ticket, string $reply): void\n    {\n        \\Illuminate\\Support\\Facades\\Mail::to($ticket->customer_email)\n            ->send(new \\App\\Mail\\AutoReply($ticket, $reply));\n\n        $ticket->update([\n            'auto_replied_at' => now(),\n            'auto_reply_content' => $reply,\n        ]);\n    }\n\n    private function flagForReview(SupportTicket $ticket, array $triageResult): void\n    {\n        \\App\\Models\\TicketReview::create([\n            'ticket_id' => $ticket->id,\n            'reason' => 'low_confidence',\n            'agent_data' => $triageResult,\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supportticket-model",
      children: "SupportTicket Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass SupportTicket extends Model\n{\n    protected $fillable = [\n        'customer_name', 'customer_email', 'customer_plan',\n        'subject', 'message', 'attachment_names',\n        'category', 'priority', 'sentiment',\n        'routed_to', 'triage_status',\n        'auto_replied_at', 'auto_reply_content',\n    ];\n\n    protected $casts = [\n        'auto_replied_at' => 'datetime',\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supportticket-migration",
      children: "SupportTicket Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('support_tickets', function (Blueprint $table) {\n            $table->id();\n            $table->string('customer_name');\n            $table->string('customer_email');\n            $table->string('customer_plan')->nullable();\n            $table->string('subject');\n            $table->longText('message');\n            $table->text('attachment_names')->nullable();\n            $table->string('category')->nullable();\n            $table->string('priority')->default('normal');\n            $table->string('sentiment')->nullable();\n            $table->string('routed_to')->nullable();\n            $table->string('triage_status')->default('pending');\n            $table->timestamp('auto_replied_at')->nullable();\n            $table->text('auto_reply_content')->nullable();\n            $table->timestamps();\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('support_tickets');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-listener-for-new-tickets",
      children: "Event Listener for New Tickets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nuse App\\Ai\\Agents\\Automation\\E2E\\CustomerSupport\\SupportTriageAgent;\nuse App\\Events\\TicketCreated;\nuse App\\Models\\AutomationWorkflow;\n\nclass HandleTicketCreated\n{\n    public function handle(TicketCreated $event): void\n    {\n        $workflow = AutomationWorkflow::active()\n            ->byTrigger('event')\n            ->where('trigger_config->event', get_class($event))\n            ->first();\n\n        if (! $workflow) {\n            return;\n        }\n\n        $agent = new SupportTriageAgent(\n            workflow: $workflow,\n            context: ['source' => 'event:listener'],\n            ticketContent: $event->ticket->message,\n        );\n\n        $agent->triage($event->ticket);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scheduled-weekly-summary-command",
      children: "Scheduled Weekly Summary Command"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\Ai\\Agents\\Automation\\E2E\\CustomerSupport\\SupportTriageAgent;\nuse App\\Models\\AutomationWorkflow;\nuse App\\Models\\SupportTicket;\nuse Illuminate\\Console\\Command;\n\nclass SupportWeeklySummary extends Command\n{\n    protected $signature = 'support:weekly-summary';\n    protected $description = 'Generate weekly support ticket summary';\n\n    public function handle(): int\n    {\n        $workflow = AutomationWorkflow::active()\n            ->byTrigger('schedule')\n            ->whereHas('tasks', fn ($q) => $q->where('task', 'support:weekly-summary'))\n            ->first();\n\n        if (! $workflow) {\n            $this->warn('No summary workflow found');\n            return self::FAILURE;\n        }\n\n        $tickets = SupportTicket::where('created_at', '>=', now()->subWeek())->get();\n\n        $agent = new SupportTriageAgent($workflow);\n\n        $report = $agent\n            ->maxTokens(2048)\n            ->prompt(\"Generate a weekly support summary based on these tickets:\\n\\n\"\n                . json_encode($tickets->toArray(), JSON_PRETTY_PRINT));\n\n        $this->info(\"Weekly Summary:\\n{$report->text()}\");\n\n        $agent->logDecision(\n            triggerSource: 'e2e:weekly_summary',\n            inputData: ['ticket_count' => $tickets->count()],\n            decision: ['summary' => $report->text()],\n            actionResult: ['status' => 'reported'],\n        );\n\n        return self::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Business automation agents bring AI decision-making into the operational backbone of a Laravel application. This chapter covered:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automation framework"
        }), ": A reusable base ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutomationAgent"
        }), " with configurable workflows, conditions, and actions stored in the database"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduled agents"
        }), ": Cron-driven agents that run reports, send digests, reconcile data — managed via the Task scheduler and a dedicated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutomationTask"
        }), " model"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event-triggered agents"
        }), ": Agents that subscribe to Laravel events and react in real-time to user registrations, payments, errors, and domain events"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Webhook-driven agents"
        }), ": Externally triggered agents via signed HTTP requests from GitHub, Stripe, and custom sources — with signature verification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approval workflows"
        }), ": Human-in-the-loop agents that propose actions, notify approvers, and execute only on explicit approval — with expiry and escalation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data pipeline agents"
        }), ": ETL agents that ingest CSV or API data, transform it with AI-driven mapping, and load structured records into the database"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notification & escalation agents"
        }), ": Severity-aware alert agents with multi-level escalation paths that route to the right person through the right channel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit logging"
        }), ": A structured ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutomationLog"
        }), " model that records every agent decision, action, response time, and token usage for compliance and debugging"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The architectural pattern is consistent across all agent types: a configurable workflow definition in the database, a dedicated agent class, and a logging layer that records every decision. This makes the system observable, testable, and safe to deploy in production — agents act with full traceability."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What are the three core components of the automation framework's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutomationAgent"
          }), " base class?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a scheduled agent differ from an event-triggered agent? Give one use case for each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why must webhook payloads be signature-verified before being processed by an agent?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the role of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ApprovalRequest"
          }), " model in a human-in-the-loop workflow?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does the escalation agent determine when to escalate an alert to the next level?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Channel Alert Router"
          }), ". Build an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AlertRouter"
          }), " workflow that accepts alerts from email, Slack webhook, and internal API, classifies severity using an agent, and routes to the appropriate channel — PagerDuty for critical, Slack for high, email digest for medium/low."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Invoice Reconciliation Pipeline"
          }), ". Create a scheduled agent that runs nightly: ingests invoices from a CSV export, transforms them into the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "App\\Models\\Invoice"
          }), " model, cross-references payments against the Stripe webhook log, and flags discrepancies for manual approval."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User Lifecycle Automation"
          }), ". Design a set of event-driven agents that listen for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UserCreated"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SubscriptionStarted"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SubscriptionExpired"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UserDeleted"
          }), " events — each agent sends the appropriate communication, updates CRM fields, and logs the action with full audit trail."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Incident Response System"
      }), ". Build a complete end-to-end automation system with the following components:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitoring Agent"
        }), " (scheduled, every 5 min): Pings critical health endpoints, analyzes response times, and creates alerts for anomalies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classification Agent"
        }), " (event-triggered): When a health check fails, classify severity and determine whether it is an infrastructure, application, or security incident"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Agent"
        }), " (approval workflow): For critical incidents, propose a remediation action (restart service, rollback deployment, scale up resources) and route to the on-call engineer for approval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Escalation Agent"
        }), ": If the critical alert is unacknowledged for 10 minutes, escalate to the engineering manager; if unacknowledged for 30 minutes, escalate to the CTO"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Postmortem Agent"
        }), " (scheduled, daily): Summarize all incidents from the past 24 hours, identify patterns, and draft a postmortem report with root cause analysis recommendations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement all workflow definitions, agent classes, models, migrations, event listeners, and associated notifications. Ensure every action is logged through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutomationLog"
      }), " audit trail."]
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