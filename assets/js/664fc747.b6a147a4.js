"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[26984],{

/***/ 2665
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_07_system_design_13_design_notification_system_md_664_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-07-system-design-13-design-notification-system-md-664.json
const site_docs_courses_ai_engineering_placement_07_system_design_13_design_notification_system_md_664_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/system-design/13-design-notification-system","title":"Design Notification System — Push, Real-Time, Delivery Guarantees","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/07-system-design/13-design-notification-system.md","sourceDirName":"courses/ai-engineering-placement/07-system-design","slug":"/ai-engineering-placement/07-system-design/13-design-notification-system","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/13-design-notification-system","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":100,"frontMatter":{"id":"13-design-notification-system","slug":"/ai-engineering-placement/07-system-design/13-design-notification-system","title":"Design Notification System — Push, Real-Time, Delivery Guarantees","sidebar_label":"Design Notification System — Push, Real-Time, Delivery Guarantees","sidebar_position":100},"sidebar":"coursesSidebar","previous":{"title":"Design WhatsApp — Real-Time Messaging, Presence, Encryption","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/12-design-whatsapp"},"next":{"title":"Design File Upload System — Direct Upload, Presigned URLs, CDN","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/14-design-file-upload-system"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/07-system-design/13-design-notification-system.md


const frontMatter = {
	id: '13-design-notification-system',
	slug: '/ai-engineering-placement/07-system-design/13-design-notification-system',
	title: 'Design Notification System — Push, Real-Time, Delivery Guarantees',
	sidebar_label: 'Design Notification System — Push, Real-Time, Delivery Guarantees',
	sidebar_position: 100
};
const contentTitle = 'Design Notification System — Push, Real-Time, Delivery Guarantees';

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
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "High-Level Architecture",
  "id": "high-level-architecture",
  "level": 3
}, {
  "value": "Real-Time vs Batch Delivery",
  "id": "real-time-vs-batch-delivery",
  "level": 3
}, {
  "value": "WebSocket vs SSE vs Polling",
  "id": "websocket-vs-sse-vs-polling",
  "level": 3
}, {
  "value": "Push Provider Integration",
  "id": "push-provider-integration",
  "level": 3
}, {
  "value": "Notification Queue and Delivery",
  "id": "notification-queue-and-delivery",
  "level": 3
}, {
  "value": "Delivery Worker",
  "id": "delivery-worker",
  "level": 3
}, {
  "value": "User Preferences and Channel Management",
  "id": "user-preferences-and-channel-management",
  "level": 3
}, {
  "value": "Notification Flow Diagram",
  "id": "notification-flow-diagram",
  "level": 3
}, {
  "value": "Web Push API",
  "id": "web-push-api",
  "level": 3
}, {
  "value": "Notification History and Analytics",
  "id": "notification-history-and-analytics",
  "level": 3
}, {
  "value": "Notification Templates",
  "id": "notification-templates",
  "level": 3
}, {
  "value": "Scaling Considerations",
  "id": "scaling-considerations",
  "level": 3
}, {
  "value": "Visual Explanation",
  "id": "visual-explanation",
  "level": 2
}, {
  "value": "Real Example",
  "id": "real-example",
  "level": 2
}, {
  "value": "Code Example",
  "id": "code-example",
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
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
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
  "value": "Next Topic",
  "id": "next-topic",
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
        id: "design-notification-system--push-real-time-delivery-guarantees",
        children: "Design Notification System — Push, Real-Time, Delivery Guarantees"
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
            children: "Design push notification architecture for mobile and web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare WebSocket vs SSE vs polling for real-time delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate push providers: FCM (Android), APNs (iOS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build notification queue with delivery guarantees and deduplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle preferences, throttling, and unsubscribe patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design for scale: 1M+ notifications per second"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notification systems deliver timely information to users across mobile, web, and email. Designing a reliable notification system at scale requires handling delivery guarantees, push provider integrations, user preferences, and deduplication. AI engineers need this for alerting, model monitoring, and user engagement."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System design fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of message queues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with mobile push concepts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-level-architecture",
      children: "High-Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Producers\n        A[Application Services]\n        B[Cron Jobs]\n        C[ML Model Alerts]\n        D[User Actions]\n    end\n\n    subgraph Notification Service\n        E[Notification API]\n        F[Preference Filter]\n        G[Deduplication]\n        H[Rate Limiter]\n        I[Priority Queue]\n    end\n\n    subgraph Queue & Delivery\n        J[Message Queue - Kafka/SQS]\n        K[Notification Worker]\n        L[Batch Aggregator]\n        M[Template Engine]\n    end\n\n    subgraph Push Providers\n        N[FCM - Android]\n        O[APNs - iOS]\n        P[Web Push - W3C]\n        Q[SES - Email]\n        R[Twilio - SMS]\n    end\n\n    subgraph Storage\n        S[(Notification History)]\n        T[(User Preferences)]\n        U[(Device Registry)]\n    end\n\n    A & B & C & D --> E\n    E --> F --> G --> H --> I\n    I --> J --> K\n    K --> L --> M\n    M --> N & O & P & Q & R\n    K --> S\n    F --> T\n    E --> U\n\n    style E fill:#4a90d9,color:#fff\n    style J fill:#e85d75,color:#fff\n    style K fill:#50b86c,color:#fff\n    style M fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core components"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notification API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepts notification requests from services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preference Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks user opt-in/out, channel preferences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents duplicate notifications (idempotency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limiter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throttles notifications per user/channel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorts by urgency (critical, high, normal, low)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffers notifications for async processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery Worker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formats and sends via appropriate provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Aggregator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Groups notifications to reduce sends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renders notification content from templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device Registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps user to device tokens"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-time-vs-batch-delivery",
      children: "Real-Time vs Batch Delivery"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Real-Time\n        A[Event Occurs] --> B[Process Immediately]\n        B --> C[Push to Device]\n        C --> D[User Sees Instantly]\n    end\n\n    subgraph Batch\n        E[Events Accumulate] --> F[Window Timer]\n        F --> G{Aggregate?}\n        G -->|Yes| H[Combine into Digest]\n        G -->|No| I[Metrics Only]\n        H --> J[Single Push]\n    end\n\n    subgraph Hybrid\n        K[Critical Events] --> L[Real-Time]\n        M[Non-Critical] --> N[Batch]\n    end\n\n    style A fill:#e85d75,color:#fff\n    style D fill:#50b86c,color:#fff\n    style J fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "websocket-vs-sse-vs-polling",
      children: "WebSocket vs SSE vs Polling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Polling\n        A1[Client] -->|HTTP Request| B1[Server]\n        B1 -->|Response| A1\n        A1 -->|Wait N seconds| B1\n    end\n\n    subgraph Server-Sent Events\n        A2[Client] -->|Open SSE Connection| B2[Server]\n        B2 -->|Stream Events| A2\n        B2 -->|Auto-reconnect| A2\n    end\n\n    subgraph WebSocket\n        A3[Client] -->|Upgrade Request| B3[Server]\n        B3 -->|101 Switching| A3\n        A3 <==>|Bidirectional| B3\n    end\n\n    style A1 fill:#e85d75,color:#fff\n    style B2 fill:#50b86c,color:#fff\n    style A3 fill:#4a90d9,color:#fff\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SSE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Polling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server→Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client→Server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ws/wss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconnect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interval-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall-friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max connections/server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10K-100K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10K-100K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Headers/cookies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat, gaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notifications, feeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple status"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "push-provider-integration",
      children: "Push Provider Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FCM (Firebase Cloud Messaging)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Device registration\ninterface DeviceRegistration {\n  userId: string;\n  deviceId: string;\n  platform: \"android\" | \"ios\" | \"web\";\n  pushToken: string;\n  appVersion: string;\n  locale: string;\n  timezone: string;\n  createdAt: number;\n}\n\n// FCM message format\ninterface FCMMessage {\n  token: string;           // Device push token\n  notification?: {\n    title: string;\n    body: string;\n    image?: string;\n  };\n  data?: Record<string, string>;  // Custom payload\n  android?: {\n    priority: \"normal\" | \"high\";\n    ttl: string;           // Time-to-live (e.g., \"86400s\")\n    notification: {\n      channel_id: string;\n      sound: string;\n      click_action: string;\n    };\n  };\n  apns?: {\n    headers: {\n      \"apns-priority\": string;\n      \"apns-expiration\": string;\n    };\n    payload: {\n      aps: {\n        alert: { title: string; body: string };\n        badge: number;\n        sound: string;\n        \"content-available\": number;\n      };\n    };\n  };\n}\n\n// Send FCM via HTTP v1 API\nasync function sendFCM(message: FCMMessage): Promise<FCMResponse> {\n  const accessToken = await getFirebaseAccessToken();\n  const response = await fetch(\n    \"https://fcm.googleapis.com/v1/projects/my-project/messages:send\",\n    {\n      method: \"POST\",\n      headers: {\n        Authorization: `Bearer ${accessToken}`,\n        \"Content-Type\": \"application/json\",\n      },\n      body: JSON.stringify({ message }),\n    }\n  );\n  return response.json();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "APNs (Apple Push Notification Service)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// APNs notification\ninterface APNsPayload {\n  \"aps\": {\n    \"alert\": {\n      \"title\": string;\n      \"body\": string;\n      \"subtitle\"?: string;\n    };\n    \"badge\"?: number;\n    \"sound\"?: string;\n    \"content-available\"?: 1;  // Silent push\n    \"mutable-content\"?: 1;    // For notification extensions\n    \"category\"?: string;\n    \"thread-id\"?: string;\n  };\n  \"data\"?: Record<string, any>;\n}\n\n// APNs headers\ninterface APNsHeaders {\n  \"apns-push-type\": \"alert\" | \"background\" | \"voip\" | \"complication\";\n  \"apns-id\"?: string;           // UUID for deduplication\n  \"apns-expiration\"?: number;   // Unix epoch\n  \"apns-priority\"?: 5 | 10;    // 5=power-efficient, 10=immediate\n  \"apns-topic\": string;         // App bundle ID\n  \"apns-collapse-id\"?: string;  // Group similar notifications\n}\n\n// Send via HTTP/2 (APNs requires HTTP/2)\nasync function sendAPNs(deviceToken: string, payload: APNsPayload): Promise<void> {\n  const headers = {\n    \"apns-push-type\": \"alert\",\n    \"apns-topic\": \"com.example.app\",\n    \"apns-priority\": \"10\",\n    \"apns-expiration\": String(Math.floor(Date.now() / 1000) + 86400),\n    \"apns-collapse-id\": \"new_message\",\n  };\n\n  const response = await fetch(\n    `https://api.push.apple.com/3/device/${deviceToken}`,\n    {\n      method: \"POST\",\n      headers: {\n        ...headers,\n        \"Authorization\": `Bearer ${getAPNsJWT()}`,\n        \"Content-Type\": \"application/json\",\n      },\n      body: JSON.stringify(payload),\n    }\n  );\n\n  if (response.status === 410) {\n    // Device token expired — remove from registry\n    await removeDeviceToken(deviceToken);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification-queue-and-delivery",
      children: "Notification Queue and Delivery"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NotificationMessage {\n  id: string;                    // Unique ID for deduplication\n  userId: string;\n  channels: (\"push\" | \"email\" | \"sms\" | \"webhook\")[];\n  title: string;\n  body: string;\n  data?: Record<string, any>;\n  priority: \"critical\" | \"high\" | \"normal\" | \"low\";\n  templateId?: string;\n  templateVariables?: Record<string, string>;\n  scheduleAt?: number;           // Unix timestamp\n  expiresAt?: number;\n  readonly createdAt: number;\n}\n\nclass NotificationQueue {\n  private queue: Queue;  // SQS, Kafka, RabbitMQ\n  private dedupCache: Redis;\n  private rateLimiter: RateLimiter;\n\n  async enqueue(notification: NotificationMessage): Promise<boolean> {\n    // Deduplication check\n    const dedupKey = `notif:dedup:${notification.id}`;\n    if (await this.dedupCache.exists(dedupKey)) {\n      console.log(`Duplicate notification: ${notification.id}`);\n      return false;\n    }\n\n    // Rate limiting check\n    const rateLimitKey = `notif:rate:${notification.userId}`;\n    const currentCount = await this.rateLimiter.increment(rateLimitKey);\n    const maxPerMinute = await this.getUserRateLimit(notification.userId);\n\n    if (currentCount > maxPerMinute) {\n      // Queue for delayed delivery instead of dropping\n      notification.priority = \"low\";\n      notification.expiresAt = Date.now() + 3600000; // 1 hour TTL\n    }\n\n    // Set dedup TTL\n    await this.dedupCache.set(dedupKey, \"1\", \"EX\", 86400);\n\n    // Enqueue with priority\n    const priority = this.priorityToQueue(notification.priority);\n    await this.queue.send(JSON.stringify(notification), {\n      priority,\n      delaySeconds: notification.scheduleAt\n        ? Math.max(0, (notification.scheduleAt - Date.now()) / 1000)\n        : 0,\n    });\n\n    return true;\n  }\n\n  private priorityToQueue(priority: string): number {\n    const priorities = { critical: 4, high: 3, normal: 2, low: 1 };\n    return priorities[priority] || 2;\n  }\n\n  private getUserRateLimit(userId: string): Promise<number> {\n    // Premium users: 100/min, free users: 20/min\n    return this.getUserTier(userId).then(\n      tier => tier === \"premium\" ? 100 : 20\n    );\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delivery-worker",
      children: "Delivery Worker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NotificationWorker {\n  private queue: NotificationQueue;\n  private deviceRegistry: DeviceRegistry;\n  private templateEngine: TemplateEngine;\n  private fcmClient: FCMClient;\n  private apnsClient: APNsClient;\n\n  async process(): Promise<void> {\n    while (true) {\n      const messages = await this.queue.dequeue(10); // Batch of 10\n\n      await Promise.all(\n        messages.map(msg => this.deliver(JSON.parse(msg)))\n      );\n    }\n  }\n\n  async deliver(notification: NotificationMessage): Promise<void> {\n    const attempts = 0;\n    const maxAttempts = 3;\n\n    while (attempts < maxAttempts) {\n      try {\n        // Get user's device tokens\n        const devices = await this.deviceRegistry.getDevices(\n          notification.userId,\n          notification.channels\n        );\n\n        // Send to each device in parallel\n        const results = await Promise.allSettled(\n          devices.map(device => this.sendToDevice(device, notification))\n        );\n\n        // Handle failures\n        for (let i = 0; i < results.length; i++) {\n          const result = results[i];\n          const device = devices[i];\n\n          if (result.status === \"rejected\") {\n            if (this.isTokenExpiredError(result.reason)) {\n              await this.deviceRegistry.removeDevice(device.id);\n            }\n            console.error(`Failed to send to ${device.id}: ${result.reason}`);\n          }\n        }\n\n        // Log delivery\n        await this.logDelivery(notification, devices.length);\n        return;\n\n      } catch (error) {\n        attempts++;\n        if (attempts >= maxAttempts) {\n          await this.sendToDeadLetterQueue(notification);\n          return;\n        }\n        await sleep(Math.pow(2, attempts) * 1000); // Exponential backoff\n      }\n    }\n  }\n\n  private async sendToDevice(\n    device: DeviceRegistration,\n    notification: NotificationMessage\n  ): Promise<void> {\n    const rendered = this.templateEngine.render(\n      notification,\n      device.locale\n    );\n\n    if (device.platform === \"android\") {\n      await this.fcmClient.send(device.pushToken, rendered);\n    } else if (device.platform === \"ios\") {\n      await this.apnsClient.send(device.pushToken, rendered);\n    } else if (device.platform === \"web\") {\n      await this.sendWebPush(device.pushToken, rendered);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-preferences-and-channel-management",
      children: "User Preferences and Channel Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface UserNotificationPreferences {\n  userId: string;\n  channels: {\n    push: { enabled: boolean; quietHoursStart?: string; quietHoursEnd?: string };\n    email: { enabled: boolean; digestFrequency: \"instant\" | \"daily\" | \"weekly\" };\n    sms: { enabled: boolean; phoneNumber?: string };\n    webhook: { enabled: boolean; url?: string };\n  };\n  categories: {\n    [category: string]: {\n      push: boolean;\n      email: boolean;\n      sms: boolean;\n    };\n  };\n  maxPerMinute: number;\n  timezone: string;\n}\n\nclass PreferenceService {\n  async filterByPreferences(\n    userId: string,\n    notification: NotificationMessage\n  ): Promise<string[]> {\n    const prefs = await this.getPreferences(userId);\n\n    const allowedChannels: string[] = [];\n\n    for (const channel of notification.channels) {\n      // Check global channel enable\n      if (!prefs.channels[channel]?.enabled) continue;\n\n      // Check category opt-in\n      if (notification.data?.category) {\n        const category = notification.data.category;\n        if (prefs.categories[category]?.[channel] === false) continue;\n      }\n\n      // Check quiet hours (for push)\n      if (channel === \"push\") {\n        const quietHours = prefs.channels.push.quietHours;\n        if (quietHours && this.isInQuietHours(quietHours, prefs.timezone)) {\n          // Queue for delivery after quiet hours\n          await this.delayNotification(notification, quietHours.end);\n          continue;\n        }\n      }\n\n      // Check email digest preference\n      if (channel === \"email\" && prefs.channels.email.digestFrequency !== \"instant\") {\n        await this.addToDigest(userId, notification, prefs.channels.email.digestFrequency);\n        continue;\n      }\n\n      allowedChannels.push(channel);\n    }\n\n    return allowedChannels;\n  }\n\n  private isInQuietHours(\n    quietHours: { start: string; end: string },\n    timezone: string\n  ): boolean {\n    const now = new Date();\n    const localTime = now.toLocaleTimeString(\"en-US\", {\n      hour12: false,\n      timeZone: timezone,\n    });\n    const currentHour = parseInt(localTime.split(\":\")[0]);\n    const startHour = parseInt(quietHours.start.split(\":\")[0]);\n    const endHour = parseInt(quietHours.end.split(\":\")[0]);\n\n    if (startHour <= endHour) {\n      return currentHour >= startHour && currentHour < endHour;\n    }\n    // Overnight quiet hours (e.g., 22:00 - 08:00)\n    return currentHour >= startHour || currentHour < endHour;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification-flow-diagram",
      children: "Notification Flow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant S as Service\n    participant API as Notification API\n    participant P as Preference Filter\n    participant D as Dedup Cache\n    participant R as Rate Limiter\n    participant Q as Message Queue\n    participant W as Worker\n    participant FCM as FCM/APNs\n    participant Device\n\n    S->>API: POST /notifications\n    API->>P: Filter by preferences\n    P->>P: Check opt-in, categories, quiet hours\n    P-->>API: Allowed channels\n    API->>D: Check dedup (notification.id)\n    D-->>API: Not duplicate\n    API->>R: Check rate limit\n    R-->>API: Within limit\n    API->>Q: Enqueue notification\n    API-->>S: 202 Accepted (notification_id)\n    Q->>W: Dequeue\n    W->>W: Format for device (template, locale)\n    W->>FCM: Push to device token\n    FCM->>Device: Deliver notification\n    Device-->>FCM: Delivery receipt\n    FCM-->>W: Success/failure\n    W->>W: Update notification status\n    alt Token Expired\n        W->>W: Remove from device registry\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "web-push-api",
      children: "Web Push API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Service worker registration (browser)\nasync function registerWebPush(userId: string): Promise<void> {\n  const registration = await navigator.serviceWorker.register(\"sw.js\");\n  const subscription = await registration.pushManager.subscribe({\n    userVisibleOnly: true,\n    applicationServerKey: urlBase64ToUint8Array(\n      \"BEl62iUYgUivxIkv69yViEizBI-Y1k\"\n    ),\n  });\n\n  // Send subscription to server\n  await fetch(\"/api/device/register\", {\n    method: \"POST\",\n    body: JSON.stringify({\n      userId,\n      platform: \"web\",\n      pushToken: JSON.stringify(subscription),\n      userAgent: navigator.userAgent,\n    }),\n  });\n}\n\n// Web push payload (VAPID)\ninterface WebPushPayload {\n  title: string;\n  body: string;\n  icon?: string;\n  badge?: string;\n  image?: string;\n  vibrate?: number[];\n  data?: Record<string, any>;\n  actions?: Array<{\n    action: string;\n    title: string;\n    icon?: string;\n  }>;\n  requireInteraction?: boolean;\n  tag?: string;           // Collapse identical notifications\n  renotify?: boolean;\n  silent?: boolean;\n  timestamp?: number;\n  urgency?: \"low\" | \"normal\" | \"high\";\n}\n\n// Send web push with web-push library\nimport webpush from \"web-push\";\n\nwebpush.setVapidDetails(\n  \"mailto:admin@example.com\",\n  process.env.VAPID_PUBLIC_KEY,\n  process.env.VAPID_PRIVATE_KEY\n);\n\nasync function sendWebPush(subscription: PushSubscription, payload: WebPushPayload) {\n  try {\n    await webpush.sendNotification(subscription, JSON.stringify(payload));\n  } catch (error) {\n    if (error.statusCode === 410) {\n      // Subscription expired — remove from database\n      await removeSubscription(subscription);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification-history-and-analytics",
      children: "Notification History and Analytics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NotificationLog {\n  notificationId: string;\n  userId: string;\n  channel: string;\n  status: \"sent\" | \"delivered\" | \"opened\" | \"clicked\" | \"failed\";\n  timestamp: number;\n  latency_ms?: number;\n  provider_response?: string;\n  deviceId?: string;\n  error?: string;\n}\n\nclass NotificationAnalytics {\n  async track(notificationId: string, event: Partial<NotificationLog>): Promise<void> {\n    // Write to time-series database (InfluxDB, BigQuery)\n    await this.writeTimeSeries(\"notification_events\", {\n      ...event,\n      timestamp: Date.now(),\n    });\n\n    // Update aggregate counters\n    await this.redis.hincrby(\n      `notif:stats:${event.channel}:${event.status}`,\n      new Date().toISOString().slice(0, 13), // Hourly bucket\n      1\n    );\n  }\n\n  async getDeliveryRate(userId: string, since: number): Promise<number> {\n    const total = await this.count(userId, \"sent\", since);\n    const delivered = await this.count(userId, \"delivered\", since);\n    return total > 0 ? delivered / total : 0;\n  }\n\n  async getClickRate(userId: string, since: number): Promise<number> {\n    const delivered = await this.count(userId, \"delivered\", since);\n    const clicked = await this.count(userId, \"clicked\", since);\n    return delivered > 0 ? clicked / delivered : 0;\n  }\n}\n\n// Event tracking from mobile apps\n// On notification opened:\n// Android: FirebaseAnalytics.logEvent(\"notification_open\", ...)\n// iOS: UNUserNotificationCenterDelegate.didReceiveResponse\n// Web: notification.onclick event\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification-templates",
      children: "Notification Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NotificationTemplate {\n  id: string;\n  name: string;\n  channels: {\n    push: {\n      title: string;         // Template with {{variables}}\n      body: string;\n      image?: string;\n    };\n    email: {\n      subject: string;\n      bodyHtml: string;\n      bodyText: string;\n    };\n    sms: {\n      body: string;\n    };\n  };\n  variables: string[];       // Expected variables\n  versions: TemplateVersion[];\n}\n\nclass TemplateEngine {\n  private templates: Map<string, NotificationTemplate> = new Map();\n\n  render(\n    notification: NotificationMessage,\n    locale: string,\n    channel: string\n  ): RenderedNotification {\n    const template = this.templates.get(notification.templateId);\n    if (!template) {\n      // Use notification body directly if no template\n      return {\n        title: notification.title,\n        body: notification.body,\n      };\n    }\n\n    const channelTemplate = template.channels[channel];\n    const variables = notification.templateVariables || {};\n\n    return {\n      title: this.fillTemplate(channelTemplate.title, variables, locale),\n      body: this.fillTemplate(channelTemplate.body, variables, locale),\n      image: this.fillTemplate(channelTemplate.image, variables, locale),\n    };\n  }\n\n  private fillTemplate(\n    text: string,\n    variables: Record<string, string>,\n    locale: string\n  ): string {\n    return text.replace(/\\{\\{(\\w+)\\}\\}/g, (match, key) => {\n      if (variables[key]) return variables[key];\n      if (locale === \"hi\" && key === \"greeting\") return \"नमस्ते\";\n      return match;\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scaling-considerations",
      children: "Scaling Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Scale targets (1M notifications/second):\n- 100M+ registered devices\n- 50K+ producer services\n- 200+ push worker instances\n- 100+ message queue partitions\n\nDatabase requirements:\n- Device registry: 100M+ rows, 10K writes/sec, 100K reads/sec\n- Notification history: 1B+ rows/day, TTL-based cleanup\n- Template cache: 1000 entries, updated daily\n- Dedup cache: 10M entries/day, 24h TTL\n\nPush provider quotas:\n- FCM: 600K requests/min per project (default)\n- APNs: No hard limit, but 4KB payload max\n- Web Push: VAPID rate limits vary by browser\n\nInfrastructure:\n- Edge delivery: CDN-based push aggregation\n- Connection pooling: Reuse HTTP/2 connections to FCM/APNs\n- Circuit breaker: Fail fast if provider is down\n- Backpressure: Reject when queue depth > threshold\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Notification Lifecycle\"\n        A[Create Notification] --> B[Preference Check]\n        B --> C{Allowed?}\n        C -->|No| D[Drop / Log]\n        C -->|Yes| E[Dedup Check]\n        E --> F{Seen Before?}\n        F -->|Yes| D\n        F -->|No| G[Rate Limit]\n        G --> H{Throttled?}\n        H -->|Yes| I[Queue for Later]\n        H -->|No| J[Enqueue]\n        J --> K[Worker Picks Up]\n        K --> L[Template Render]\n        L --> M[Send to Provider]\n        M --> N{Provider OK?}\n        N -->|Yes| O[Mark Delivered]\n        N -->|No| P{Retry?}\n        P -->|Yes| K\n        P -->|No| Q[Dead Letter Queue]\n        O --> R[Track Analytics]\n    end\n\n    style A fill:#4a90d9,color:#fff\n    style O fill:#50b86c,color:#fff\n    style Q fill:#e85d75,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of a notification system like a postal service. Services (senders) drop letters at the post office (notification API). The mail clerk checks: does the recipient want mail? (preferences), is this a duplicate letter? (dedup), are we sending too much? (rate limit). Letters are sorted by priority (express = critical, standard = normal). They go to the sorting facility (message queue). Delivery trucks (workers) pick up batches, put letters into envelopes with proper addresses (templates), and deliver via the right carrier — USPS (FCM), FedEx (APNs), or email. If the address is wrong (expired token), the letter is returned. If the truck can't deliver (worker crash), another truck picks it up."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"Notification system backend with FCM/APNs/Web Push\"\"\"\n\nimport json\nimport uuid\nimport time\nfrom typing import Dict, List, Optional\nfrom datetime import datetime\nimport redis\nfrom pydantic import BaseModel\nimport requests\n\nclass NotificationMessage(BaseModel):\n    id: str = \"\"\n    user_id: str\n    title: str\n    body: str\n    data: Dict = {}\n    channel: str = \"push\"\n    priority: str = \"normal\"\n    template_id: Optional[str] = None\n    template_vars: Dict = {}\n    scheduled_at: Optional[int] = None\n    expires_at: Optional[int] = None\n\nclass DeviceRegistration(BaseModel):\n    device_id: str\n    user_id: str\n    platform: str  # android, ios, web\n    push_token: str\n    locale: str = \"en\"\n    app_version: str = \"\"\n\nclass NotificationService:\n    \"\"\"Core notification service with delivery, dedup, rate limiting\"\"\"\n\n    def __init__(self):\n        self.redis_client = redis.Redis(\n            host=\"redis.internal\", port=6379, decode_responses=True\n        )\n        self.queue: List[NotificationMessage] = []\n\n    def send_notification(self, notification: NotificationMessage) -> Dict:\n        \"\"\"Queue notification for delivery\"\"\"\n        notification.id = str(uuid.uuid4())\n        notification.expires_at = notification.expires_at or int(time.time()) + 86400\n\n        # Deduplication\n        dedup_key = f\"notif:dedup:{notification.id}\"\n        if self.redis_client.exists(dedup_key):\n            return {\"status\": \"duplicate\", \"id\": notification.id}\n\n        # Rate limiting\n        rate_key = f\"notif:rate:{notification.user_id}\"\n        current_count = int(self.redis_client.get(rate_key) or 0)\n        max_rate = 100 if self._is_premium(notification.user_id) else 20\n\n        if current_count >= max_rate:\n            notification.priority = \"low\"\n            self._queue_for_delayed_delivery(notification)\n            return {\"status\": \"queued_delayed\", \"id\": notification.id}\n\n        self.redis_client.incr(rate_key)\n        self.redis_client.expire(rate_key, 60)  # Reset every minute\n\n        # Set dedup TTL (24 hours)\n        self.redis_client.set(dedup_key, \"1\", ex=86400)\n\n        # Enqueue\n        self.queue.append(notification)\n        return {\"status\": \"queued\", \"id\": notification.id, \"timestamp\": int(time.time())}\n\n    def process_queue(self, batch_size: int = 10) -> int:\n        \"\"\"Process notifications from the queue\"\"\"\n        processed = 0\n        batch = self.queue[:batch_size]\n        self.queue = self.queue[batch_size:]\n\n        for notification in batch:\n            try:\n                if notification.scheduled_at and time.time() < notification.scheduled_at:\n                    self.queue.append(notification)\n                    continue\n\n                if time.time() > notification.expires_at:\n                    print(f\"Notification {notification.id} expired\")\n                    continue\n\n                self._deliver(notification)\n                processed += 1\n            except Exception as e:\n                print(f\"Failed to deliver {notification.id}: {e}\")\n\n        return processed\n\n    def _deliver(self, notification: NotificationMessage) -> None:\n        \"\"\"Deliver notification via appropriate channel\"\"\"\n        devices = self._get_user_devices(notification.user_id)\n\n        for device in devices:\n            if not self._check_quiet_hours(device.user_id):\n                continue\n\n            rendered = self._render_template(notification, device.locale)\n\n            if device.platform == \"android\":\n                self._send_fcm(device.push_token, rendered)\n            elif device.platform == \"ios\":\n                self._send_apns(device.push_token, rendered)\n            elif device.platform == \"web\":\n                self._send_web_push(device.push_token, rendered)\n\n            self._log_delivery(notification.id, device.platform)\n\n    def _send_fcm(self, token: str, payload: Dict) -> Dict:\n        \"\"\"Send via Firebase Cloud Messaging\"\"\"\n        message = {\n            \"token\": token,\n            \"notification\": {\n                \"title\": payload[\"title\"],\n                \"body\": payload[\"body\"],\n            },\n            \"data\": payload.get(\"data\", {}),\n            \"android\": {\n                \"priority\": \"high\",\n                \"ttl\": \"86400s\",\n            },\n        }\n\n        response = requests.post(\n            \"https://fcm.googleapis.com/v1/projects/my-app/messages:send\",\n            json={\"message\": message},\n            headers={\n                \"Authorization\": f\"Bearer {self._get_fcm_token()}\",\n                \"Content-Type\": \"application/json\",\n            },\n        )\n\n        if response.status_code == 200:\n            return {\"status\": \"sent\", \"provider\": \"fcm\", \"message_id\": response.json().get(\"name\")}\n        else:\n            raise Exception(f\"FCM error: {response.status_code} {response.text}\")\n\n    def _send_apns(self, token: str, payload: Dict) -> Dict:\n        \"\"\"Send via Apple Push Notification Service\"\"\"\n        apns_payload = {\n            \"aps\": {\n                \"alert\": {\n                    \"title\": payload[\"title\"],\n                    \"body\": payload[\"body\"],\n                },\n                \"badge\": payload.get(\"badge\", 0),\n                \"sound\": \"default\",\n                \"content-available\": 1 if payload.get(\"silent\") else 0,\n            },\n            \"data\": payload.get(\"data\", {}),\n        }\n\n        headers = {\n            \"apns-push-type\": \"alert\",\n            \"apns-topic\": \"com.example.app\",\n            \"apns-priority\": \"10\",\n            \"apns-expiration\": str(int(time.time()) + 86400),\n            \"authorization\": f\"bearer {self._get_apns_jwt()}\",\n        }\n\n        response = requests.post(\n            f\"https://api.push.apple.com/3/device/{token}\",\n            json=apns_payload,\n            headers=headers,\n        )\n\n        if response.status_code == 200:\n            return {\"status\": \"sent\", \"provider\": \"apns\"}\n        elif response.status_code == 410:\n            self._remove_device_token(token)\n            raise Exception(\"Device token expired\")\n        else:\n            raise Exception(f\"APNs error: {response.status_code}\")\n\n    def _send_web_push(self, subscription_json: str, payload: Dict) -> Dict:\n        \"\"\"Send via Web Push API\"\"\"\n        import http_ece\n        import base64\n\n        subscription = json.loads(subscription_json)\n\n        encrypted = http_ece.encrypt(\n            json.dumps(payload),\n            salt=base64.urlsafe_b64encode(self._random_bytes(16)).rstrip(\"=\"),\n            dh=subscription.get(\"keys\", {}).get(\"p256dh\"),\n            private_key=self._get_vapid_private_key(),\n        )\n\n        response = requests.post(\n            subscription[\"endpoint\"],\n            data=encrypted,\n            headers={\n                \"Content-Type\": \"application/octet-stream\",\n                \"TTL\": \"86400\",\n                \"Urgency\": payload.get(\"urgency\", \"normal\"),\n            },\n        )\n\n        if response.status_code == 410:\n            self._remove_device_token(subscription_json)\n        return {\"status\": \"sent\", \"provider\": \"webpush\"}\n\n    def _render_template(self, notification: NotificationMessage, locale: str) -> Dict:\n        \"\"\"Render notification with template and locale\"\"\"\n        if notification.template_id:\n            template = self._get_template(notification.template_id, locale)\n            title = template[\"title\"]\n            body = template[\"body\"]\n            for key, val in notification.template_vars.items():\n                title = title.replace(f\"{{{{{key}}}}}\", str(val))\n                body = body.replace(f\"{{{{{key}}}}}\", str(val))\n        else:\n            title = notification.title\n            body = notification.body\n\n        return {\"title\": title, \"body\": body, \"data\": notification.data}\n\n    def _get_user_devices(self, user_id: str) -> List[DeviceRegistration]:\n        \"\"\"Get all active devices for a user\"\"\"\n        devices = self.redis_client.smembers(f\"user:devices:{user_id}\")\n        result = []\n        for device_json in devices:\n            result.append(DeviceRegistration(**json.loads(device_json)))\n        return result\n\n    def register_device(self, registration: DeviceRegistration) -> None:\n        \"\"\"Register a device for push notifications\"\"\"\n        self.redis_client.sadd(\n            f\"user:devices:{registration.user_id}\",\n            json.dumps(registration.dict()),\n        )\n        self.redis_client.set(\n            f\"device:{registration.device_id}\",\n            json.dumps(registration.dict()),\n        )\n\n    def _check_quiet_hours(self, user_id: str) -> bool:\n        \"\"\"Check if user has active quiet hours\"\"\"\n        pref_key = f\"user:prefs:{user_id}\"\n        prefs = self.redis_client.get(pref_key)\n        if not prefs:\n            return True\n        prefs = json.loads(prefs)\n        quiet_start = prefs.get(\"quiet_hours_start\")\n        quiet_end = prefs.get(\"quiet_hours_end\")\n        if not quiet_start or not quiet_end:\n            return True\n        current_hour = datetime.now().hour\n        start_hour = int(quiet_start.split(\":\")[0])\n        end_hour = int(quiet_end.split(\":\")[0])\n        if start_hour <= end_hour:\n            return not (start_hour <= current_hour < end_hour)\n        return not (current_hour >= start_hour or current_hour < end_hour)\n\n    def _is_premium(self, user_id: str) -> bool:\n        \"\"\"Check if user has premium tier\"\"\"\n        return self.redis_client.sismember(\"premium_users\", user_id)\n\n    def _log_delivery(self, notification_id: str, platform: str) -> None:\n        \"\"\"Log successful delivery\"\"\"\n        self.redis_client.lpush(\n            \"notification:logs\",\n            json.dumps({\n                \"id\": notification_id,\n                \"platform\": platform,\n                \"timestamp\": datetime.utcnow().isoformat(),\n                \"status\": \"delivered\",\n            })\n        )\n\n    def _queue_for_delayed_delivery(self, notification: NotificationMessage) -> None:\n        \"\"\"Queue notification for later delivery\"\"\"\n        notification.scheduled_at = int(time.time()) + 300  # 5 minutes delay\n        self.queue.append(notification)\n\n    def _remove_device_token(self, token: str) -> None:\n        \"\"\"Remove expired/invalid device token\"\"\"\n        self.redis_client.srem(\"active_tokens\", token)\n        print(f\"Removed expired token\")\n\n    def _get_fcm_token(self) -> str:\n        return \"mock-fcm-token\"\n\n    def _get_apns_jwt(self) -> str:\n        return \"mock-apns-jwt\"\n\n    def _get_vapid_private_key(self) -> str:\n        return \"mock-vapid-key\"\n\n    def _get_template(self, template_id: str, locale: str) -> Dict:\n        templates = {\n            \"welcome\": {\n                \"title\": \"Welcome!\",\n                \"body\": \"Thanks for joining {{app_name}}!\",\n            },\n            \"alert\": {\n                \"title\": \"Alert: {{subject}}\",\n                \"body\": \"{{message}}\",\n            },\n        }\n        return templates.get(template_id, {\"title\": \"\", \"body\": \"\"})\n\n    def _random_bytes(self, n: int) -> bytes:\n        import os\n        return os.urandom(n)\n\nif __name__ == \"__main__\":\n    service = NotificationService()\n\n    # Register device\n    service.register_device(DeviceRegistration(\n        device_id=\"device-1\",\n        user_id=\"user-123\",\n        platform=\"android\",\n        push_token=\"fcm-token-abc123\",\n        locale=\"en\",\n    ))\n\n    # Send notification\n    result = service.send_notification(NotificationMessage(\n        user_id=\"user-123\",\n        title=\"Model training complete\",\n        body=\"Your model achieved 98.5% accuracy!\",\n        data={\"experiment_id\": \"exp-456\", \"metric\": \"accuracy\", \"value\": \"98.5\"},\n        priority=\"high\",\n    ))\n    print(f\"Send result: {result}\")\n\n    # Process queue\n    processed = service.process_queue()\n    print(f\"Processed: {processed} notifications\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Send result: {'status': 'queued', 'id': 'a1b2c3d4-...', 'timestamp': 1712345678}\nProcessed: 1 notifications\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A notification system delivers timely information to users across mobile, web, and email, and production design must balance delivery guarantees, push provider integrations, user preferences, and deduplication. The architecture flows from a notification API through a preference filter, deduplication cache, rate limiter, and priority queue into a message queue (Kafka/SQS), where workers render templates and push via FCM, APNs, or Web Push. Real-time options are compared: SSE is the best fit for one-direction notifications because it auto-reconnects, WebSocket suits bidirectional chat, and polling is stateless but latency-bound. Delivery uses at-least-once semantics backed by idempotency keys in Redis with a 24-hour TTL, exponential backoff retries, a dead-letter queue after three failed attempts, and immediate token-expiry cleanup on APNs 410 and FCM 404. Scale targets include 1M+ notifications per second to 100M+ devices, with trade-offs such as FCM's 600K requests/minute quota and APNs' 4KB payload limit. AI engineers apply this to model alerting, drift monitoring, and user engagement, where quiet hours and per-channel preference checks prevent alert fatigue."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notification flow: API to preference filter to dedup to rate limit to priority queue to message queue to worker to provider to device."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delivery is at-least-once with idempotency keys; worker failures are absorbed by the queue and reprocessing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "APNs returns HTTP 410 and FCM returns 404/NotRegistered for expired tokens - remove them immediately."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common failures are expired tokens, rate limits, missing dedup, cross-timezone sends, and no delivery-rate monitoring."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fan-out"
        }), ": Use a message queue with per-consumer subscriber groups so notification fan-out does not block the API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSE for notifications"
        }), ": Prefer Server-Sent Events over WebSocket for one-direction notification delivery because SSE auto-reconnects, works through firewalls, and needs no manual reconnect logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idempotency keys"
        }), ": Deduplicate with a Redis SETNX keyed on the notification UUID with a 24-hour TTL so retried sends never produce duplicates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token hygiene"
        }), ": Treat APNs 410 and FCM 404 responses as expired-token signals and remove the device from the registry to stop wasted API calls."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quiet hours"
        }), ": Evaluate quiet hours in the user's local timezone, handle overnight ranges such as 22:00-08:00, and queue rather than drop messages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limiting by tier"
        }), ": Enforce per-user per-minute limits (20/min free, 100/min premium) and delay over-limit notifications with a low priority instead of dropping them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collapse keys"
        }), ": Use FCM collapseKey or APNs collapseId to group non-critical duplicates so only the latest notification in the group is delivered."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Design a push notification system for a messaging app with 100M users.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Components"
          }), ": Notification API (HTTP), Preference Service, Dedup Cache (Redis), Rate Limiter, Priority Queue (Kafka), Workers, FCM/APNs providers, Device Registry (DynamoDB/Cassandra), Analytics DB (BigQuery). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Flow"
          }), ": Service calls API → check preferences → dedup → rate limit → enqueue to Kafka. Workers consume, render templates, send via FCM/APNs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scale"
          }), ": Kafka with 100 partitions, 200 workers, Redis cluster for dedup and rate limiting. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delivery guarantees"
          }), ": at-least-once delivery with idempotency keys for dedup. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Failure handling"
          }), ": exponential backoff, dead letter queue after 3 retries. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), ": delivery rate, click rate, latency p50/p99, provider error rates. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases"
          }), ": quiet hours, expired tokens, high-priority override."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Compare WebSocket, SSE, and polling for real-time notifications.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Polling"
          }), ": Client sends HTTP requests every N seconds. Simple, stateless, works everywhere. Disadvantages: latency equals polling interval, wasted requests when no data. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSE"
          }), ": Server pushes events over a single long-lived HTTP connection. Auto-reconnect, works through firewalls. One-direction (server→client). Best for: live feeds, stock tickers, notifications. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "WebSocket"
          }), ": Full-duplex over upgraded HTTP connection. Lower latency, supports bidirectional communication. Complex to manage (reconnections, heartbeats). Best for: chat, gaming, real-time collaboration. For notifications specifically, SSE is often the best choice — simple, one-direction, auto-reconnect. Use WebSocket when client needs to send data too."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you handle duplicate notifications at scale?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Client-generated ID"
          }), ": Each notification has a unique ID (UUID). Server checks if ID already processed (in Redis with 24h TTL). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Idempotency key"
          }), ": Producer provides idempotency key. Server uses Redis SETNX to ensure exactly-once processing. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) At-least-once with dedup"
          }), ": Use Kafka's exactly-once semantics or idempotent producer. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Database unique constraint"
          }), ": Use notification_id as unique key in history table. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Collapse ID"
          }), ": Group similar notifications (APNs collapseId, FCM collapseKey). Only the latest in the group is delivered. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Client-side dedup"
          }), ": Mobile SDKs can filter notifications by ID if duplicate is delivered. Choose: idempotency keys for critical notifications, collapse for non-critical (like \"new message\")."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does FCM deliver Android push notifications?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FCM (Firebase Cloud Messaging) has two delivery modes: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Display messages"
          }), ": FCM shows notification automatically when app is in background. Includes title, body, image, click action. Handled by system tray. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Data messages"
          }), ": Custom key-value pairs delivered to app regardless of foreground/background. App must handle in onMessageReceived(). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delivery process"
          }), ": App registers with FCM on install → gets registration token → sends to your server. Server sends message to FCM HTTP v1 API → FCM finds device → delivers via Google Play Services persistent connection. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configurable"
          }), ": priority (normal vs high), TTL, collapse key, channel ID (Android 8+). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Challenges"
          }), ": Doze mode delays delivery, Chinese devices may lack Google Play Services (use vendor push instead)."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you handle push notification failures and retries?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Exponential backoff"
          }), ": Retry with delays 1s, 2s, 4s, 8s, 16s, 32s (max 3-5 retries). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Dead letter queue"
          }), ": After max retries, move to DLQ for manual inspection. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Token expiration"
          }), ": FCM returns 404/NotRegistered, APNs returns 410 — immediately remove token. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Provider rate limits"
          }), ": FCM: 600K req/min per project. Implement circuit breaker to back off when throttled. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Batch errors"
          }), ": FCM batch responses can have per-message errors. Handle each independently. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Notification expiry"
          }), ": Set TTL (e.g., 24 hours). Don't retry expired notifications. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Priority-based retry"
          }), ": Critical notifications retry aggressively (5x, 30s interval). Normal retry 3x. Low: send once, no retry."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How would you design notification preferences with categories and channels?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data model"
          }), ": User preferences document with per-category and per-channel settings. Categories: marketing, transactional, alerts, social. Channels: push, email, SMS, webhook. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Default rules"
          }), ": transactional always on, marketing opt-in, alerts on for critical. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Override hierarchy"
          }), ": per-notification > per-category > per-channel > global. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Preference evaluation"
          }), ": On notification send, fetch preferences from cache (Redis). Check: is channel enabled? is category enabled for channel? are quiet hours active? is it a digest time? ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage"
          }), ": Document DB (MongoDB, Firestore) for complex preferences, Redis cache for fast access. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "UI"
          }), ": Mobile/web settings page with toggles per category per channel. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unsubscribe"
          }), ": One-click unsubscribe with confirmation. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rate limits"
          }), ": Respect user's max per-minute setting."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: Explain notification batching/digest and when to use it.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Notification batching groups multiple events into a single notification. Types: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Time-based"
          }), ": Send all notifications accumulated in a window (e.g., \"5 new messages\"). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Count-based"
          }), ": Batch N notifications before sending. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Event-based"
          }), ": Group related events (e.g., \"3 team members replied to your post\"). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "When to batch"
          }), ": non-urgent notifications (social likes, marketing), high-frequency events (stock alerts, monitoring), digest emails (daily/weekly summary). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implementation"
          }), ": Deferred queue — notifications held in temporary bucket until timer fires or count threshold reached. Then aggregated into one. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "APNs/FCM"
          }), ": Use collapseId/collapseKey for client-side batching. Only latest notification in the group is displayed."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you ensure delivery guarantees in a notification system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Levels"
          }), ": At-most-once, at-least-once, exactly-once. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "At-least-once"
          }), ": Write notification to DB with status \"pending\" before enqueuing. Worker updates to \"sent\" after delivery. If worker crashes, another picks up from pending. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Idempotent delivery"
          }), ": Notification ID in provider payload (FCM data, APNs apns-id). Provider deduplicates based on ID. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delivery receipts"
          }), ": FCM returns message ID on success. APNs returns 200. Track delivery in analytics. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Opened tracking"
          }), ": Mobile SDK fires event when notification tapped. Server confirms user saw it. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Read receipts"
          }), ": For messaging apps, track \"delivered\" and \"read\" separately. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitor"
          }), ": Alert if delivery rate drops below 95% or if provider error rate exceeds 1%."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How would you handle quiet hours and timezone awareness?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User timezone"
          }), ": Store user's timezone (from device or profile settings). Convert all times to user's local time. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Quiet hours"
          }), ": start/end time in HH:MM format in user's timezone. Service checks current local time before sending. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implementation"
          }), ": preference service checks if current local time falls within quiet hours. If yes, either: drop notification, schedule for after quiet hours, or send with priority override (for critical alerts). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Timezone changes"
          }), ": Handle daylight saving transitions, user moving to different timezone. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Digest scheduling"
          }), ": Send daily digest at user's 8 AM local time — use cron scheduler with per-user timezone. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Example"
          }), ": If user in IST (UTC+5:30) has quiet hours 10PM-8AM, a notification at 11PM IST gets queued for 8AM IST delivery."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd13-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: Design a notification system for ML model alerting (drift, performance degradation).\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sources"
          }), ": Model Monitoring service detects drift/performance drop → creates alert. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Priority levels"
          }), ": Critical (accuracy drop > 5%, send immediately), High (drift detected, send within 5 min), Normal (weekly performance report). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Channels"
          }), ": PagerDuty/Opsgenie for critical, email for high, Slack/dashboard for normal. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Throttling"
          }), ": Don't send duplicate alerts for the same model in 1 hour (alert fatigue). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Escalation"
          }), ": If no acknowledgment in 15 minutes (critical), escalate to on-call manager. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dashboard"
          }), ": Alert history, delivery status, acknowledge rate. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Template"
          }), ": \"Model {{name}} accuracy dropped from {{prev_accuracy}} to {{current_accuracy}} on {{date}}. Action required: review and retrain.\" ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Integration: Webhook to PagerDuty API, email via SES, Slack via webhook. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto-remediation"
            }), ": For known failure modes, trigger automated retraining pipeline automatically."]
          })]
        }), (0,jsx_runtime.jsx)(_components.strong, {
          children: "\n  "
        })]
      }), (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "Bookmark"
        }), "\n"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.strong, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "chapter-quiz",
        children: "Chapter Quiz"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q1"
        }), ": Which protocol provides automatic reconnection for real-time notifications?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) WebSocket\nb) SSE\nc) Polling\nd) gRPC streaming"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "sd13-quiz1",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: b) SSE"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "Server-Sent Events have built-in auto-reconnect. WebSocket requires manual reconnect logic."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q2"
        }), ": What FCM/APNs feature groups similar notifications and shows only the latest?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) TTL\nb) Collapse key\nc) Priority\nd) Expiration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "sd13-quiz2",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: b) Collapse key"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "Collapse key groups notifications — only the latest in the group is delivered, replacing earlier ones."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q3"
        }), ": What HTTP status code from APNs indicates an expired device token?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) 400\nb) 403\nc) 410\nd) 429"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "sd13-quiz3",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: c) 410"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "APNs returns 410 Gone when a device token is expired. The token should be removed from the database."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q4"
        }), ": Which component prevents notification overload for a single user?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) Dedup cache\nb) Rate limiter\nc) Priority queue\nd) Template engine"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "sd13-quiz4",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: b) Rate limiter"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "Rate limiter throttles notifications per user (e.g., 20/min for free, 100/min for premium)."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q5"
        }), ": What is the maximum payload size for APNs?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) 2 KB\nb) 4 KB\nc) 8 KB\nd) 16 KB"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "sd13-quiz5",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: b) 4 KB"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "APNs has a 4KB payload limit. FCM allows 4KB for display notifications and 256KB for data messages."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "exercises",
        children: "Exercises"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy"
        }), " — Register a device for push notifications. Send a simple \"Hello\" notification using FCM. Verify it arrives."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy"
        }), " — Implement a preference service that filters notifications based on user's quiet hours."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium"
        }), " — Build a notification queue with Redis: enqueue, dequeue, and process notifications with retry logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium"
        }), " — Create a WebSocket server that pushes notifications to connected clients. Test with 10 concurrent connections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard"
        }), " — Design and implement a complete notification system with: dedup, rate limiting, FCM/APNs integration, preference filtering, quiet hours, and delivery analytics."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "common-mistakes",
        children: "Common Mistakes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Not handling expired device tokens — leads to failed deliveries and wasted API calls"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Ignoring rate limits — users uninstall apps overwhelmed by notifications"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "No deduplication — users receive duplicate notifications, causing confusion"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Same notification across timezones — users woken up by after-hours notifications"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "No monitoring of delivery rates — silent failures go unnoticed"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "revision-notes",
        children: "Revision Notes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Notification flow: API → Filter → Dedup → Rate Limit → Queue → Worker → Provider → Device"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "WebSocket vs SSE vs Polling: SSE is best for one-direction notification delivery"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FCM: Android push via Google Play Services; support collapse key, TTL, priority"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "APNs: iOS push via HTTP/2; tokens expire on app reinstall; 4KB payload limit"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Dedup: idempotency key in Redis with 24h TTL; collapse ID for non-critical"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rate limiting: per-user throttle to prevent abuse; premium users get higher limits"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Quiet hours: timezone-aware delivery scheduling based on user preferences"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Dead letter queue: failed notifications after max retries for manual inspection"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Batch/digest: group non-urgent notifications for fewer interruptions"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Analytics: track sent, delivered, opened, clicked rates; alert on delivery degradation"
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
              children: "Explain the core idea of Design Notification System — Push, Real-Time, Delivery Guarantees in under 60 seconds, then give a real-world analogy."
            }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Design a minimal, well-typed function that demonstrates Design Notification System — Push, Real-Time, Delivery Guarantees."
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
              children: "Describe a production bug caused by misunderstanding Design Notification System — Push, Real-Time, Delivery Guarantees. How did you diagnose and fix it?"
            }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How would you scale a system that relies on Design Notification System — Push, Real-Time, Delivery Guarantees from 10 users to 10 million?"
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
              children: "Compare Design Notification System — Push, Real-Time, Delivery Guarantees with the closest alternative approach. When would you choose each?"
            }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Walk through how you would test a component that depends on Design Notification System — Push, Real-Time, Delivery Guarantees."
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
              children: "How does Design Notification System — Push, Real-Time, Delivery Guarantees behave differently at scale — memory, throughput, or precision-wise?"
            }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How would you make an implementation of Design Notification System — Push, Real-Time, Delivery Guarantees run faster on GPU hardware?"
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
            children: "Write the smallest possible implementation of Design Notification System — Push, Real-Time, Delivery Guarantees that is production-quality."
          }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "resume-tips",
        children: "Resume Tips"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Name Design Notification System — Push, Real-Time, Delivery Guarantees explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Design Notification System — Push, Real-Time, Delivery Guarantees\")."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Add a bullet describing a project that applies Design Notification System — Push, Real-Time, Delivery Guarantees to real data, with numbers."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Mention the tools and libraries you used alongside Design Notification System — Push, Real-Time, Delivery Guarantees (linters, test frameworks, profiling tools)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep resume bullets under 15 words and start each with an action verb."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "interview-day-checklist",
        children: "Interview Day Checklist"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rehearse a 60-second explanation of Design Notification System — Push, Real-Time, Delivery Guarantees and one real-world analogy."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Prepare one STAR story about debugging a Design Notification System — Push, Real-Time, Delivery Guarantees-related production issue."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Review complexity and edge cases for the classic Design Notification System — Push, Real-Time, Delivery Guarantees interview problem."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Have questions ready: how does the team apply Design Notification System — Push, Real-Time, Delivery Guarantees in production today?"
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
          }), " Design Notification System — Push, Real-Time, Delivery Guarantees builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True."
          }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " You should write at least one code example for Design Notification System — Push, Real-Time, Delivery Guarantees before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True."
          }), " Active recall with hands-on code beats passive reading for retention."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " The complexity analysis for Design Notification System — Push, Real-Time, Delivery Guarantees is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "False."
          }), " Complexity grows with input size; always state best, average, and worst case."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " Edge cases (empty input, invalid input, boundary values) matter for Design Notification System — Push, Real-Time, Delivery Guarantees in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True."
          }), " Most production bugs come from unhandled edge cases."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " You should memorize the Design Notification System — Push, Real-Time, Delivery Guarantees chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "False."
          }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "fill-in-the-blank",
        children: "Fill in the Blank"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The chapter that covers Design Notification System — Push, Real-Time, Delivery Guarantees is Chapter ___ of this module. — Answer: check the module's table of contents."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The time complexity of the standard approach to Design Notification System — Push, Real-Time, Delivery Guarantees is ___. — Answer: review the theory section and state big-O notation."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The main edge case to handle when implementing Design Notification System — Push, Real-Time, Delivery Guarantees is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The tools commonly used to debug Design Notification System — Push, Real-Time, Delivery Guarantees issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The related topic that connects to Design Notification System — Push, Real-Time, Delivery Guarantees in the next chapter is ___. — Answer: see the Next Topic section."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "scenario-questions",
        children: "Scenario Questions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " A teammate ships a change involving Design Notification System — Push, Real-Time, Delivery Guarantees that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " Your implementation of Design Notification System — Push, Real-Time, Delivery Guarantees is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " A new hire asks you to explain Design Notification System — Push, Real-Time, Delivery Guarantees in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " Your team's codebase has three different patterns for Design Notification System — Push, Real-Time, Delivery Guarantees and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "output-questions",
        children: "Output Questions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output of the simplest correct implementation of Design Notification System — Push, Real-Time, Delivery Guarantees on an empty input?"
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
              children: "Complete Medium exercises, explain Design Notification System — Push, Real-Time, Delivery Guarantees to someone else"
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
          children: "Always write a one-line example of Design Notification System — Push, Real-Time, Delivery Guarantees from memory before opening the chapter — active recall first."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Use the chapter's Revision Notes as a checklist: you have mastered Design Notification System — Push, Real-Time, Delivery Guarantees when you can explain each bullet."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For interviews, practice explaining Design Notification System — Push, Real-Time, Delivery Guarantees twice: once with a technical audience, once with a non-technical audience."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep a personal examples file where you collect your own Design Notification System — Push, Real-Time, Delivery Guarantees snippets; interviewers love original examples."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "memory-tricks",
        children: "Memory Tricks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Acronym"
          }), ": build a mnemonic from the 5 key concepts of Design Notification System — Push, Real-Time, Delivery Guarantees listed in the Chapter at a Glance table."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Story"
          }), ": link Design Notification System — Push, Real-Time, Delivery Guarantees to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number anchor"
          }), ": remember the complexity of Design Notification System — Push, Real-Time, Delivery Guarantees by connecting it to a known algorithm of the same class."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Color code"
          }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Teach-back"
          }), ": explain Design Notification System — Push, Real-Time, Delivery Guarantees to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "further-reading",
        children: "Further Reading"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Official documentation for the primary tool or library used in this chapter"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The chapter referenced in Related Topics for the next-level treatment of Design Notification System — Push, Real-Time, Delivery Guarantees"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The classic textbook chapter on Design Notification System — Push, Real-Time, Delivery Guarantees (check the Research References below)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Two blog posts from engineers who debugged real Design Notification System — Push, Real-Time, Delivery Guarantees problems in production"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The repository of the open-source project that implements Design Notification System — Push, Real-Time, Delivery Guarantees"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "related-topics",
        children: "Related Topics"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The previous chapter in this module (see table of contents) — foundational for Design Notification System — Push, Real-Time, Delivery Guarantees"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The next chapter (see Next Topic below) — builds on Design Notification System — Push, Real-Time, Delivery Guarantees"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The system design chapters in Module 07 — how Design Notification System — Push, Real-Time, Delivery Guarantees fits into production architectures"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The interview preparation module — how Design Notification System — Push, Real-Time, Delivery Guarantees is asked in screening rounds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The capstone project — where Design Notification System — Push, Real-Time, Delivery Guarantees is applied end-to-end"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "faqs",
        children: "FAQs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Do I need to memorize all of Design Notification System — Push, Real-Time, Delivery Guarantees, or understand the big picture?"
          }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What if I get stuck on an exercise?"
          }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Is Design Notification System — Push, Real-Time, Delivery Guarantees asked in interviews?"
          }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "important-notes",
        children: "Important Notes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Design Notification System — Push, Real-Time, Delivery Guarantees is a core requirement for the rest of this module — do not skip the examples."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Always analyze complexity (time and space) when working with Design Notification System — Push, Real-Time, Delivery Guarantees."
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
          children: "Design Notification System — Push, Real-Time, Delivery Guarantees emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The tools used for Design Notification System — Push, Real-Time, Delivery Guarantees today evolved from simpler versions; the chapter covers the modern, recommended approach."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Interviewers value knowing one historical fact about Design Notification System — Push, Real-Time, Delivery Guarantees — it shows genuine interest, not just cramming."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The library/tooling ecosystem around Design Notification System — Push, Real-Time, Delivery Guarantees changes quickly; focus on fundamentals that remain stable."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "security-considerations",
        children: "Security Considerations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Never trust external input: validate and sanitize data before processing Design Notification System — Push, Real-Time, Delivery Guarantees."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "eval()"
          }), " and dynamic code execution on untrusted strings."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For API contexts, add rate limiting and input size limits."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "ml-intuition",
        children: "ML Intuition"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Design Notification System — Push, Real-Time, Delivery Guarantees appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Understanding Design Notification System — Push, Real-Time, Delivery Guarantees helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "In production ML, the Design Notification System — Push, Real-Time, Delivery Guarantees concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "When optimizing ML systems, Design Notification System — Push, Real-Time, Delivery Guarantees skills let you profile and fix the data path, not just the training loop."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Interview follow-up: how would you apply Design Notification System — Push, Real-Time, Delivery Guarantees to a dataset of 10 million records? — Batching and vectorization."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "analogies",
        children: "Analogies"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design Notification System — Push, Real-Time, Delivery Guarantees is like a recipe"
          }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a delivery route"
          }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like weather"
          }), ": the happy path is a sunny day; production is the storm — build for the storm."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a journey map"
          }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "capstone-project-link",
        children: "Capstone Project Link"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Design Notification System — Push, Real-Time, Delivery Guarantees skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "flashcards",
        children: "Flashcards"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "07systemdesign-13designnotificationsystem-flash1",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Which protocol provides automatic reconnection for real-time notifications?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "b) SSE"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "07systemdesign-13designnotificationsystem-flash2",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What FCM/APNs feature groups similar notifications and shows only the latest?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "b) Collapse key"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "07systemdesign-13designnotificationsystem-flash3",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What HTTP status code from APNs indicates an expired device token?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "c) 410"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "07systemdesign-13designnotificationsystem-flash4",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Which component prevents notification overload for a single user?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "b) Rate limiter"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "07systemdesign-13designnotificationsystem-flash5",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What is the maximum payload size for APNs?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "b) 4 KB"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "research-references",
        children: "Research References"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Official documentation of the primary library for Design Notification System — Push, Real-Time, Delivery Guarantees (linked in Further Reading)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The classic paper or textbook chapter introducing Design Notification System — Push, Real-Time, Delivery Guarantees (see References below)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The standard library reference for Design Notification System — Push, Real-Time, Delivery Guarantees-related functions"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Engineering blog posts from companies running Design Notification System — Push, Real-Time, Delivery Guarantees in production at scale"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "PEPs and RFCs where applicable (Python and networking standards)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "open-source-tools",
        children: "Open-Source Tools"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The primary library used in this chapter (see the code examples)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Python standard library modules used in the examples (check the imports)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Testing: pytest for unit tests of Design Notification System — Push, Real-Time, Delivery Guarantees code"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Linting and formatting: ruff + black"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Profiling: cProfile or py-spy for performance work on Design Notification System — Push, Real-Time, Delivery Guarantees"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "debugging-guide",
        children: "Debugging Guide"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "print()"
          }), " or a debugger to inspect intermediate values in Design Notification System — Push, Real-Time, Delivery Guarantees code."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Reproduce the failure with the smallest possible input before changing code."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For performance problems, profile before optimizing: measure, then fix."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pdb"
          }), " or your IDE's debugger to step through the Design Notification System — Push, Real-Time, Delivery Guarantees example code."]
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
          children: "Explain Design Notification System — Push, Real-Time, Delivery Guarantees in 60 seconds."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Write a minimal working example of Design Notification System — Push, Real-Time, Delivery Guarantees."
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
          children: "Tell me about a time you debugged a Design Notification System — Push, Real-Time, Delivery Guarantees problem in a project."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "How would you design a system where Design Notification System — Push, Real-Time, Delivery Guarantees is used at scale?"
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
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "`python\nfrom typing import Any, Optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Design Notification System — Push, Real-Time, Delivery Guarantees."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Design Notification System — Push, Real-Time, Delivery Guarantees logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "`"
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
              children: "Explain Design Notification System — Push, Real-Time, Delivery Guarantees without notes"
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
            children: "Startup"
          }), ": a small team uses Design Notification System — Push, Real-Time, Delivery Guarantees daily in their data pipeline — the chapter's examples mirror their code."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "E-commerce"
          }), ": Design Notification System — Push, Real-Time, Delivery Guarantees patterns appear in order processing, inventory checks, and recommendation feeds."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fintech"
          }), ": Design Notification System — Push, Real-Time, Delivery Guarantees principles apply to transaction validation and fraud detection flows."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ML platform"
          }), ": Design Notification System — Push, Real-Time, Delivery Guarantees shows up in feature engineering and model-serving infrastructure."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview insight"
          }), ": recruiters look for engineers who can connect Design Notification System — Push, Real-Time, Delivery Guarantees to the business outcome, not just the code."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "next-topic",
        children: "Next Topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/07-system-design/14-design-file-upload-system",
          children: "Design File Upload System — Direct Upload, Presigned URLs, CDN"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "limitations",
        children: "Limitations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Design Notification System — Push, Real-Time, Delivery Guarantees, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Performance of Design Notification System — Push, Real-Time, Delivery Guarantees depends on input size and distribution — always benchmark for your own data."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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