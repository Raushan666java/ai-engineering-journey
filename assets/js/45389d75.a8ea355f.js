"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[99596],{

/***/ 45265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cloud_computing_08_serverless_md_453_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cloud-computing-08-serverless-md-453.json
const site_docs_courses_cloud_computing_08_serverless_md_453_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cloud-computing/08-serverless","title":"Chapter 8: Serverless Computing","description":"Previous Cloud Security | Next Containerization","source":"@site/docs/courses/cloud-computing/08-serverless.md","sourceDirName":"courses/cloud-computing","slug":"/cloud-computing/08-serverless","permalink":"/ai-engineering-journey/cloud-computing/08-serverless","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-serverless","slug":"/cloud-computing/08-serverless","title":"Chapter 8: Serverless Computing","sidebar_label":"Chapter 8: Serverless Computing","sidebar_position":8},"sidebar":"course-cloud-computing","previous":{"title":"Chapter 7: Cloud Security","permalink":"/ai-engineering-journey/cloud-computing/07-cloud-security"},"next":{"title":"Chapter 9: Containerization and Orchestration","permalink":"/ai-engineering-journey/cloud-computing/09-containerization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cloud-computing/08-serverless.md


const frontMatter = {
	id: '08-serverless',
	slug: '/cloud-computing/08-serverless',
	title: 'Chapter 8: Serverless Computing',
	sidebar_label: 'Chapter 8: Serverless Computing',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Serverless Computing';

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
  "value": "8.1 What is Serverless Computing?",
  "id": "81-what-is-serverless-computing",
  "level": 3
}, {
  "value": "8.2 AWS Lambda Deep Dive",
  "id": "82-aws-lambda-deep-dive",
  "level": 3
}, {
  "value": "8.3 Event Sources and Triggers",
  "id": "83-event-sources-and-triggers",
  "level": 3
}, {
  "value": "8.4 Serverless Application Model (SAM)",
  "id": "84-serverless-application-model-sam",
  "level": 3
}, {
  "value": "8.5 State Management in Serverless",
  "id": "85-state-management-in-serverless",
  "level": 3
}, {
  "value": "8.6 Cold Start Optimization",
  "id": "86-cold-start-optimization",
  "level": 3
}, {
  "value": "8.7 Serverless Security",
  "id": "87-serverless-security",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 8.1: Image Processing Lambda with S3 Trigger",
  "id": "example-81-image-processing-lambda-with-s3-trigger",
  "level": 3
}, {
  "value": "Example 8.2: API Gateway Lambda for CRUD",
  "id": "example-82-api-gateway-lambda-for-crud",
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
  "value": "TypeScript: Step Functions State Machine DSL",
  "id": "typescript-step-functions-state-machine-dsl",
  "level": 3
}, {
  "value": "TypeScript: Lambda Cost Calculator",
  "id": "typescript-lambda-cost-calculator",
  "level": 3
}, {
  "value": "TypeScript: Function Memory Optimizer &amp; Cold Start Mitigator",
  "id": "typescript-function-memory-optimizer--cold-start-mitigator",
  "level": 3
}, {
  "value": "Pulumi: Lambda with SQS Integration",
  "id": "pulumi-lambda-with-sqs-integration",
  "level": 2
}, {
  "value": "Event-Driven Serverless Architecture",
  "id": "event-driven-serverless-architecture",
  "level": 2
}, {
  "value": "Real-World Case Study: Nordstrom&#39;s Serverless Transformation",
  "id": "real-world-case-study-nordstroms-serverless-transformation",
  "level": 2
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
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
        id: "chapter-8-serverless-computing",
        children: "Chapter 8: Serverless Computing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/07-cloud-security",
          children: "Chapter 7: Cloud Security"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/09-containerization",
          children: "Chapter 9: Containerization"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define serverless computing and contrast it with traditional server-based architectures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design event-driven architectures using functions, queues, and event buses."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement AWS Lambda functions with various triggers and configurations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure event sources and destinations for asynchronous processing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize serverless performance through cold start mitigation strategies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply serverless security best practices including least-privilege IAM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage costs through provisioned concurrency and reserved concurrency settings."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architect application state management without dedicated servers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Lambda Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions as a service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write code, set triggers, no servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Triggers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3, SQS, API Gateway, SNS, EventBridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event sources invoke functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cold Starts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init delay on first invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigate with Provisioned Concurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved vs Provisioned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting and performance tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-Driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQS queues, SNS topics, EventBridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoupled, asynchronous architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB, ElastiCache for external state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions are stateless by design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM roles, VPC access, env vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege for function execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay per invocation and duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle costs 0, high scale benefits FaaS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nflowchart LR\nA[Serverless Foundations] --> B[Lambda Functions]\nA --> C[Event Sources]\nA --> D[State + Storage]\nB --> E[Config: Memory, Timeout, Layers]\nC --> F[S3, SQS, API GW, EventBridge, SNS]\nD --> G[DynamoDB, S3, ElastiCache]\nA --> H[Cost Optimization]\nH --> I[Provisioned Concurrency, Reserved Capacity]\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-what-is-serverless-computing",
      children: "8.1 What is Serverless Computing?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Serverless computing does not mean \"no servers.\" It means the cloud provider manages all server infrastructure, and you only provide code."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Server Management:"
        }), " You never provision, patch, or monitor servers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Scaling:"
        }), " Functions scale from zero to thousands of concurrent executions instantly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pay-per-Use:"
        }), " You pay only for compute time consumed (per millisecond)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event-Driven:"
        }), " Functions are triggered by events, not continuous requests."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serverless?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True serverless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FaaS, 15 min max execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Fargate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No EC2 management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True serverless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDS Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection pooling for Lambda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not serverless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioned instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not serverless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Kubernetes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Traditional Architecture\"\nT1[Provision EC2]\nT2[Install Runtime]\nT3[Deploy Code]\nT4[Configure Auto-Scaling]\nT5[Patch OS]\nT6[Monitor CPU/Memory]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph \"Serverless Architecture\"\n    S1[Write Function Code]\n    S2[Upload to Lambda]\n    S3[Configure Trigger]\n    S4[Done]\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-aws-lambda-deep-dive",
      children: "8.2 AWS Lambda Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration Parameters:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 MB - 10,240 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU scales proportionally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 second - 15 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max execution time per invocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ephemeral Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 MB - 10,240 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/tmp directory space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 - Account limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max concurrent executions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed capacity for function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures critical functions have capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioned Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-warmed execution environments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates cold starts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda Execution Environment Lifecycle:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nsequenceDiagram\nparticipant AWS as AWS Lambda Service\nparticipant ENV as Execution Environment\nparticipant Code as Function Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AWS->>ENV: 1. INIT (Create new environment)\nENV->>ENV: 2. Download code + layers\nENV->>ENV: 3. Init runtime + extensions\nENV->>ENV: 4. Init function handler (outside handler)\nNote over ENV: Cold start phase (varies 100ms - 1s+)\n\nAWS->>ENV: 5. INVOKE (event)\nENV->>Code: handler(event, context)\nCode-->>ENV: Return response\nENV-->>AWS: Response\n\nNote over ENV,Code: Environment stays warm ~5-15 minutes\n\nAWS->>ENV: 6. INVOKE (another event)\nENV->>Code: handler(event, context) -- warm start\nCode-->>ENV: Return response\nNote over ENV: No init phase (<10ms added latency)\n\nAWS->>ENV: 7. FREEZE / DESTROY after idle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-event-sources-and-triggers",
      children: "8.3 Event Sources and Triggers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Synchronous Invocation:"
      }), " Caller waits for function response."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP API endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP traffic to Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cognito"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lex / Alexa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chatbots, voice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dialog response"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Asynchronous Invocation:"
      }), " Event is queued; function processes when ready. Automatic retries (2 attempts) and DLQ support."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object created/deleted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pub/sub messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fan-out to multiple subscribers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EventBridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled events, service events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cron, cross-account events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incoming/outgoing email"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CloudFormation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom resources"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stream-Based Invocation:"
      }), " Poll-based, processes records from streams in batches."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB Streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered processing per shard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kinesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput data streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered, replayable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue-based decoupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard or FIFO queues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-serverless-application-model-sam",
      children: "8.4 Serverless Application Model (SAM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AWS SAM extends CloudFormation for serverless resources. It abstracts Lambda, API Gateway, and DynamoDB into simplified YAML syntax."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\yaml\nAWSTemplateFormatVersion: '2010-09-09'\nTransform: AWS::Serverless-2016-10-31"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Globals:\nFunction:\nTimeout: 10\nMemorySize: 256\nRuntime: nodejs20.x"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resources:\nProcessImageFunction:\nType: AWS::Serverless::Function\nProperties:\nCodeUri: src/\nHandler: index.handler\nPolicies: S3CrudPolicy\nEvents:\nImageUploaded:\nType: S3\nProperties:\nBucket: !Ref ImageBucket\nEvents: s3:ObjectCreated:*\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-state-management-in-serverless",
      children: "8.5 State Management in Serverless"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functions are stateless. State must be stored externally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Serverless State Patterns\"\nF[Lambda Function]\nF --> D1[DynamoDB - Session State]\nF --> D2[S3 - File State]\nF --> D3[ElastiCache - Cache State]\nF --> D4[Step Functions - Workflow State]\nF --> D5[Parameter Store - Config State]\nend\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Patterns:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB with TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User sessions expire automatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processed file results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ElastiCache (Redis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot data, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-step orchestration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter Store / AppConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature flags, config values"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-cold-start-optimization",
      children: "8.6 Cold Start Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cold starts occur when Lambda creates a new execution environment. Strategies to mitigate:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioned Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates cold starts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per provisioned instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increase Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster init (CPU scales with memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher cost per invocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Graviton2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-30% faster cold starts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARM-only libraries required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize Dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller deployment package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less functionality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SnapStart (Java)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%+ cold start reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda snapshots prior to init"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warmers (scheduled pings)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keeps N environments warm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unreliable, anti-pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface LambdaConfig {\nfunctionName: string;\nmemorySize: number;\ntimeoutSeconds: number;\nprovisionedConcurrency?: number;\nreservedConcurrency?: number;\nephemeralStorageMB: number;\nruntime: string;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class LambdaFunction {\nprivate config: LambdaConfig;\nprivate invocations: number = 0;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(config: LambdaConfig) {\nthis.config = config;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invoke(payload: Record<string, any>): string {\nthis.invocations++;\nconst startTime = Date.now();\nconst isCold = this.invocations === 1;\nconst duration = isCold ? this.coldStartLatencyMs() : Math.random() * 50 + 20;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "console.log(\n  this.config.functionName +\n  \" invoked: cold=\" + isCold +\n  \" duration=\" + duration.toFixed(0) + \"ms\"\n);\n\nreturn \"Processed: \" + JSON.stringify(payload);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private coldStartLatencyMs(): number {\nconst baseLatency = this.config.memorySize < 512 ? 800 : 400;\nreturn baseLatency + Math.random() * 400;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "estimateMonthlyCost(invocationsPerMonth: number): number {\nconst avgDuration = 200; // ms\nconst gbSeconds = (invocationsPerMonth * (avgDuration / 1000) * (this.config.memorySize / 1024));\nconst provisionedCost = (this.config.provisionedConcurrency || 0) *\nthis.config.memorySize / 1024 * 730 * 0.0000041667;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "return gbSeconds * 0.0000166667 + provisionedCost;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const thumbnailFunction = new LambdaFunction({\nfunctionName: \"generate-thumbnail\",\nmemorySize: 1024,\ntimeoutSeconds: 30,\nprovisionedConcurrency: 5,\nruntime: \"nodejs20.x\",\nephemeralStorageMB: 1024,\n});"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "console.log(\"Monthly cost estimate:\", thumbnailFunction.estimateMonthlyCost(1000000).toFixed(2), \"USD\");\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-serverless-security",
      children: "8.7 Serverless Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure Lambda Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IAM Roles:"
        }), " Lambda execution role with least privilege. Never embed credentials."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment Variables:"
        }), " Use KMS encryption for sensitive environment variables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VPC Access:"
        }), " Functions in VPC use Elastic Network Interfaces (ENIs). Consider VPC endpoints instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function URLs:"
        }), " Public HTTP endpoints created directly on Lambda. Authentication via IAM or resource policy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Signing:"
        }), " Sign and verify function code to ensure only trusted code runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lambda@Edge:"
        }), " For functions at CloudFront edge locations ? stricter execution limits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface LambdaSecurityConfig {\nencryptionEnabled: boolean;\nvpcAccess: boolean;\nreservedConcurrency: number;\nallowedTriggers: string[];\ncodeSigningEnabled: boolean;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "function createSecureLambdaConfig(\nfunctionName: string,\nenvironment: \"dev\" | \"staging\" | \"prod\"\n): LambdaSecurityConfig {\nconst base: LambdaSecurityConfig = {\nencryptionEnabled: true,\nvpcAccess: environment === \"prod\",\nreservedConcurrency: environment === \"prod\" ? 100 : 10,\nallowedTriggers: [],\ncodeSigningEnabled: environment !== \"dev\",\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "return base;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const prodConfig = createSecureLambdaConfig(\"payment-processor\", \"prod\");\nconsole.log(\"Security config:\", JSON.stringify(prodConfig, null, 2));\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-81-image-processing-lambda-with-s3-trigger",
      children: "Example 8.1: Image Processing Lambda with S3 Trigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface S3Event {\nRecords: {\ns3: {\nbucket: { name: string };\nobject: { key: string; size: number };\n};\n}[];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface S3EventContext {\nfunctionName: string;\ninvokedFunctionArn: string;\nawsRequestId: string;\ngetRemainingTimeInMillis: () => number;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async function handler(event: S3Event, context: S3EventContext): Promise<{ statusCode: number; body: string }> {\nfor (const record of event.Records) {\nconst bucket = record.s3.bucket.name;\nconst key = record.s3.object.key;\nconst size = record.s3.object.size;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "console.log(\"Processing\", key, \"from\", bucket, \"size:\", size, \"bytes\");\n\nif (!key.match(/\\.(jpg|png|gif|webp)$/i)) {\n  console.log(\"Skipping non-image:\", key);\n  continue;\n}\n\nconsole.log(\"Generating thumbnail for\", key);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "return {\nstatusCode: 200,\nbody: JSON.stringify({ processed: event.Records.length }),\n};\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-82-api-gateway-lambda-for-crud",
      children: "Example 8.2: API Gateway Lambda for CRUD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface APIGatewayEvent {\nhttpMethod: string;\npath: string;\npathParameters: Record<string, string> | null;\nqueryStringParameters: Record<string, string> | null;\nbody: string | null;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async function apiHandler(event: APIGatewayEvent): Promise<{ statusCode: number; headers: Record<string, string>; body: string }> {\nconst headers = { \"Content-Type\": \"application/json\", \"Access-Control-Allow-Origin\": \"*\" };"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "try {\nswitch (event.httpMethod) {\ncase \"GET\":\nreturn { statusCode: 200, headers, body: JSON.stringify({ items: [] }) };\ncase \"POST\":\nreturn { statusCode: 201, headers, body: JSON.stringify({ created: true }) };\ncase \"PUT\":\nreturn { statusCode: 200, headers, body: JSON.stringify({ updated: true }) };\ncase \"DELETE\":\nreturn { statusCode: 204, headers, body: \"\" };\ndefault:\nreturn { statusCode: 405, headers, body: JSON.stringify({ error: \"Method not allowed\" }) };\n}\n} catch (error) {\nreturn { statusCode: 500, headers, body: JSON.stringify({ error: \"Internal server error\" }) };\n}\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Serverless lets you focus entirely on business logic while the cloud provider handles scaling, availability, and infrastructure ? but requires rethinking state management and cold starts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use Reserved Concurrency to protect critical functions from being throttled by other functions in the same account. A rogue function with a bug can consume all account concurrency otherwise."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Lambda cold starts for VPC-connected functions can exceed 10 seconds because Lambda must create an ENI in your VPC. Avoid VPC for Lambda unless you absolutely need RDS or ElastiCache access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FaaS: run code without servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 min max execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP API frontend for Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST/gRPC/WebSocket APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed message queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple senders/consumers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async task queuing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pub/sub notification service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fan-out to multiple subscribers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual state machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-step processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EventBridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event bus for AWS and custom events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema registry, filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB Streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change data capture for DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered per shard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time replication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioned Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-warmed Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates cold starts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency-sensitive apps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lambda"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory, timeout, concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 min max, 10 GB max memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Triggers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3, SQS, SNS, API GW, EventBridge, Kinesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sync vs async invocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB, S3, ElastiCache, Step Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions are stateless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cold Starts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init latency, Provisioned Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigate for prod workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM roles, VPC, env var encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay per GB-second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle cost = 0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-Driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoupled microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-based detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit event pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda + API GW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy via SAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM auth, WAF integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQS + Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task offloading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLQ monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable messaging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioned Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance guarantees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canary deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLA compliance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the maximum execution timeout for AWS Lambda?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 5 minutes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 15 minutes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 30 minutes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 1 hour"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) 15 minutes.** AWS Lambda has a maximum execution timeout of 15 minutes (900 seconds). For longer-running tasks, use Step Functions or Fargate.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What causes a \"cold start\" in Lambda?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The function runtime is too new"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A new execution environment must be created and initialized"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The function uses too much memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The event payload is too large"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) A new execution environment must be created and initialized.** Cold starts happen when Lambda creates a new environment (downloads code, initializes runtime, runs static init code). Subsequent invocations reuse warm environments.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which service is best for orchestrating a multi-step serverless workflow?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) SQS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) SNS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Step Functions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) EventBridge"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Step Functions.** Step Functions provides visual state machines for coordinating multi-step workflows with retries, error handling, and parallel execution. SQS/SNS are messaging services; EventBridge is an event bus.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How should Lambda functions store session state?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) In the global scope of the function handler"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) In the /tmp directory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) In DynamoDB or ElastiCache"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) In CloudWatch Logs"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) In DynamoDB or ElastiCache.** Functions are stateless. /tmp and global scope are not durable across invocations. For persistent state, use external services like DynamoDB or ElastiCache.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of Reserved Concurrency for a Lambda function?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To speed up cold starts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To guarantee the function always has capacity, preventing throttling by other functions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To reduce costs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To increase the function timeout"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To guarantee the function always has capacity, preventing throttling by other functions.** Reserved Concurrency allocates a specific portion of account concurrency to a function, protecting it from being throttled when other functions consume all available concurrency.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-step-functions-state-machine-dsl",
      children: "TypeScript: Step Functions State Machine DSL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type StateType = \"task\" | \"choice\" | \"parallel\" | \"wait\" | \"succeed\" | \"fail\" | \"map\";\n\ninterface StateDefinition {\n  type: StateType;\n  resource?: string;\n  next?: string;\n  end?: boolean;\n  branches?: StateMachineDefinition[];\n  choices?: { variable: string; comparison: string; value: any; next: string }[];\n  seconds?: number;\n  iterator?: StateMachineDefinition;\n  maxConcurrency?: number;\n  catch?: { errorEquals: string[]; next: string }[];\n  retry?: { errors: string[]; maxAttempts: number; intervalSeconds: number }[];\n}\n\ninterface StateMachineDefinition {\n  comment?: string;\n  startAt: string;\n  states: Record<string, StateDefinition>;\n}\n\nclass StepFunctionsBuilder {\n  private definition: StateMachineDefinition;\n\n  constructor(name: string) {\n    this.definition = { startAt: name, states: {} };\n  }\n\n  addTask(name: string, config: { resource: string; next?: string; end?: boolean; retry?: { errors: string[]; maxAttempts: number; intervalSeconds: number }[] }): this {\n    const state: StateDefinition = { type: \"task\", resource: config.resource };\n    if (config.next) state.next = config.next;\n    if (config.end) state.end = config.end;\n    if (config.retry) state.retry = config.retry;\n    this.definition.states[name] = state;\n    return this;\n  }\n\n  addChoice(name: string, config: { choices: { variable: string; comparison: string; value: any; next: string }[]; default: string }): this {\n    this.definition.states[name] = { type: \"choice\", choices: config.choices, next: config.default };\n    return this;\n  }\n\n  addWait(name: string, seconds: number, next: string): this {\n    this.definition.states[name] = { type: \"wait\", seconds, next };\n    return this;\n  }\n\n  addParallel(name: string, branches: StateMachineDefinition[], next: string): this {\n    this.definition.states[name] = { type: \"parallel\", branches, next };\n    return this;\n  }\n\n  addMap(name: string, config: { iterator: StateMachineDefinition; maxConcurrency: number; next?: string; end?: boolean }): this {\n    const state: StateDefinition = { type: \"map\", iterator: config.iterator, maxConcurrency: config.maxConcurrency };\n    if (config.next) state.next = config.next;\n    if (config.end) state.end = config.end;\n    this.definition.states[name] = state;\n    return this;\n  }\n\n  addSucceed(name: string): this {\n    this.definition.states[name] = { type: \"succeed\" };\n    return this;\n  }\n\n  addFail(name: string): this {\n    this.definition.states[name] = { type: \"fail\" };\n    return this;\n  }\n\n  build(): StateMachineDefinition { return this.definition; }\n\n  simulate(input: any): { state: string; output: any }[] {\n    const execution: { state: string; output: any }[] = [];\n    let current = this.definition.startAt;\n    let data = input;\n\n    while (current) {\n      const state = this.definition.states[current];\n      execution.push({ state: current, output: data });\n\n      if (state.type === \"succeed\" || state.end) break;\n      if (state.type === \"fail\") { execution.push({ state: current, output: { error: \"Execution failed\" } }); break; }\n\n      if (state.type === \"task\") {\n        data = { ...data, result: `processed by ${state.resource}` };\n        current = state.next || \"\";\n      } else if (state.type === \"wait\") {\n        current = state.next || \"\";\n      } else if (state.type === \"choice\") {\n        const match = state.choices?.find((c) => {\n          const value = data[c.variable.replace(\"$.\", \"\")];\n          return c.comparison === \"StringEquals\" ? value === c.value : value > c.value;\n        });\n        current = match?.next || \"\";\n      } else {\n        current = state.next || \"\";\n      }\n    }\n    return execution;\n  }\n}\n\nconst workflow = new StepFunctionsBuilder(\"ProcessOrder\")\n  .addTask(\"ValidateOrder\", { resource: \"arn:aws:lambda:validate-order\", next: \"CheckInventory\" })\n  .addTask(\"CheckInventory\", { resource: \"arn:aws:lambda:check-inventory\", next: \"ProcessPayment\" })\n  .addChoice(\"ProcessPayment\", {\n    choices: [{ variable: \"$.amount\", comparison: \"NumericGreaterThan\", value: 10000, next: \"ManualApproval\" }],\n    default: \"ChargeCard\",\n  })\n  .addTask(\"ManualApproval\", { resource: \"arn:aws:lambda:send-approval-email\", next: \"WaitForApproval\" })\n  .addWait(\"WaitForApproval\", 86400, \"ChargeCard\")\n  .addTask(\"ChargeCard\", { resource: \"arn:aws:lambda:charge-card\", next: \"FulfillOrder\" })\n  .addTask(\"FulfillOrder\", { resource: \"arn:aws:lambda:fulfill-order\", end: true })\n  .build();\n\nconst trace = workflow.simulate({ orderId: \"ORD-123\", amount: 500 });\nconsole.log(\"Execution trace:\", trace.map((s) => s.state).join(\" -> \"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-lambda-cost-calculator",
      children: "TypeScript: Lambda Cost Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LambdaCostParams {\n  invocationsPerMonth: number;\n  memoryMB: number;\n  avgDurationMs: number;\n  provisionedConcurrency: number;\n  provisionedHours: number;\n}\n\nclass LambdaCostCalculator {\n  private readonly FREE_TIER_INVOCATIONS = 1_000_000;\n  private readonly FREE_TIER_COMPUTE_SECONDS = 400_000;\n  private readonly PRICE_PER_GB_SECOND = 0.0000166667;\n  private readonly PRICE_PER_INVOCATION = 0.0000002;\n  private readonly PROVISIONED_PRICE_PER_GB_SECOND = 0.0000138889;\n\n  calculate(params: LambdaCostParams): {\n    computeCost: number;\n    invocationCost: number;\n    provConcurrencyCost: number;\n    total: number;\n    avgCostPerInvocation: number;\n  } {\n    const computeSeconds = params.invocationsPerMonth * (params.avgDurationMs / 1000);\n    const computeGBSeconds = computeSeconds * (params.memoryMB / 1024);\n    const billableCompute = Math.max(0, computeGBSeconds - this.FREE_TIER_COMPUTE_SECONDS);\n    const computeCost = billableCompute * this.PRICE_PER_GB_SECOND;\n\n    const billableInvocations = Math.max(0, params.invocationsPerMonth - this.FREE_TIER_INVOCATIONS);\n    const invocationCost = billableInvocations * this.PRICE_PER_INVOCATION;\n\n    const provCompute = params.provisionedConcurrency * (params.memoryMB / 1024) * params.provisionedHours * 3600;\n    const provConcurrencyCost = provCompute * this.PROVISIONED_PRICE_PER_GB_SECOND;\n\n    const total = computeCost + invocationCost + provConcurrencyCost;\n\n    return {\n      computeCost: Math.round(computeCost * 100) / 100,\n      invocationCost: Math.round(invocationCost * 100) / 100,\n      provConcurrencyCost: Math.round(provConcurrencyCost * 100) / 100,\n      total: Math.round(total * 100) / 100,\n      avgCostPerInvocation: Math.round((total / params.invocationsPerMonth) * 10000) / 10000,\n    };\n  }\n\n  compareConfigs(configs: LambdaCostParams[]): LambdaCostParams & LambdaCostReturn[] {\n    return configs.map((c) => ({ ...c, ...this.calculate(c) }));\n  }\n}\n\ntype LambdaCostReturn = ReturnType<LambdaCostCalculator[\"calculate\"]>;\nconst calc = new LambdaCostCalculator();\nconst result = calc.calculate({ invocationsPerMonth: 10_000_000, memoryMB: 512, avgDurationMs: 2000, provisionedConcurrency: 50, provisionedHours: 730 });\nconsole.log(\"Lambda monthly cost:\", JSON.stringify(result, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-function-memory-optimizer--cold-start-mitigator",
      children: "TypeScript: Function Memory Optimizer & Cold Start Mitigator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LambdaProfile { memoryMB: number; avgDurationMs: number; initDurationMs: number; invocationsPerMonth: number; provisionedConcurrency: number; }\n\nclass MemoryOptimizer {\n  private readonly costPerGBSecond = 0.0000166667;\n\n  optimize(profile: LambdaProfile): { recommendedMemoryMB: number; monthlyCostSavings: number; coldStartProbability: string } {\n    const baseCost = profile.invocationsPerMonth * (profile.avgDurationMs / 1000) * (profile.memoryMB / 1024) * this.costPerGBSecond;\n    const provCost = profile.provisionedConcurrency * profile.memoryMB / 1024 * this.costPerGBSecond * 730 * 3600;\n\n    const trials = [128, 256, 512, 1024, 2048, 4096, 10240].map(mem => {\n      const scaleFactor = mem / profile.memoryMB;\n      const estimatedDuration = Math.max(100, Math.round(profile.avgDurationMs / Math.min(scaleFactor, 3)));\n      const computeCost = profile.invocationsPerMonth * (estimatedDuration / 1000) * (mem / 1024) * this.costPerGBSecond;\n      const provC = profile.provisionedConcurrency * mem / 1024 * this.costPerGBSecond * 730 * 3600;\n      return { memoryMB: mem, totalCost: computeCost + provC, estimatedDuration };\n    });\n\n    const best = trials.reduce((a, b) => a.totalCost < b.totalCost ? a : b);\n    const savings = Math.round((baseCost + provCost - best.totalCost) * 100) / 100;\n    const coldProb = best.memoryMB >= 1024 ? \"Low (>1GB reduces init time)\" : \"Medium (<1GB may increase cold starts)\";\n    return { recommendedMemoryMB: best.memoryMB, monthlyCostSavings: Math.max(0, savings), coldStartProbability: coldProb };\n  }\n}\n\nconst mo = new MemoryOptimizer();\nconst opt = mo.optimize({ memoryMB: 256, avgDurationMs: 2000, initDurationMs: 500, invocationsPerMonth: 10_000_000, provisionedConcurrency: 20 });\nconsole.log(\"Memory optimization:\", JSON.stringify(opt, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// serverless\n// iaas-paas-saas-cloud-native implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'serverless', data: { topic: 'iaas-paas-saas-cloud-native' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// serverless - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'cloud-services demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'serverless' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('cloud-services'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- Serverless computing provides automatic scaling and pay-per-use pricing with no server management.\n- Lambda supports synchronous, asynchronous, and stream-based invocation patterns.\n- Cold starts are an inherent characteristic but can be mitigated with Provisioned Concurrency.\n- Serverless applications are event-driven, decoupling producers and consumers.\n- Functions are stateless ? state must be stored in external services.\n- IAM roles with least privilege are essential for security.\n- Step Functions orchestrates multi-step workflows across Lambda and other services.\n- Cost management involves balancing Provisioned Concurrency against per-invocation GB-second pricing.\n\n## Exercises\n\n### Review Questions\n\n1. What differentiates serverless from traditional server-based architecture?\n2. Describe the three Lambda invocation models and give an example of each.\n3. What causes cold starts and what strategies can mitigate them?\n4. How do you manage state in a serverless application?\n5. Compare synchronous and asynchronous Lambda invocation with examples.\n6. What is the role of Step Functions in serverless architecture?\n\n### Application Problems\n\n1. Design a serverless image processing pipeline that resizes images uploaded to S3, generates thumbnails, and stores metadata in DynamoDB.\n\n2. Write a TypeScript Lambda handler for an API Gateway endpoint that creates and retrieves user profiles from DynamoDB.\n\n3. A backend process takes 8 minutes to generate a report. Can this run on Lambda? If not, propose an alternative.\n\n4. Design a serverless system that processes 100,000 orders/day with the following steps: validate, charge payment, update inventory, send confirmation email.\n\n5. Calculate the monthly cost of a Lambda function with 512 MB memory, 200ms average duration, 5M invocations/month, and 10 Provisioned Concurrency.\n\n### Challenge Problem\n\nDesign a fully serverless e-commerce backend with the following requirements: 1) Product catalog with search, 2) Shopping cart persisted across sessions, 3) Order processing with inventory deduction, 4) Payment processing with retry logic, 5) Order confirmation email, 6) Admin dashboard for analytics, 7) Image processing for product photos, 8) Scheduled daily sales report generation, 9) API rate limiting per user, 10) 99.95% availability SLA. Propose specific services, Lambda functions, triggers, and an architecture diagram.\n\n## AWS CDK: Lambda Function with API Gateway and DynamoDB\n\nDefine serverless infrastructure as TypeScript using the AWS CDK:\n\n```typescript\nimport * as lambda from \"aws-cdk-lib/aws-lambda\";\nimport * as apigateway from \"aws-cdk-lib/aws-apigateway\";\nimport * as dynamodb from \"aws-cdk-lib/aws-dynamodb\";\nimport * as cdk from \"aws-cdk-lib\";\nimport { NodejsFunction } from \"aws-cdk-lib/aws-lambda-nodejs\";\n\nclass ServerlessStack extends cdk.Stack {\n  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {\n    super(scope, id, props);\n\n    const ordersTable = new dynamodb.Table(this, \"OrdersTable\", {\n      partitionKey: { name: \"orderId\", type: dynamodb.AttributeType.STRING },\n      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,\n      encryption: dynamodb.TableEncryption.AWS_MANAGED,\n      pointInTimeRecovery: true,\n    });\n\n    const createOrderFn = new NodejsFunction(this, \"CreateOrderHandler\", {\n      runtime: lambda.Runtime.NODEJS_20_X,\n      entry: \"src/create-order.ts\",\n      handler: \"handler\",\n      memorySize: 256,\n      timeout: cdk.Duration.seconds(10),\n      reservedConcurrentExecutions: 50,\n      environment: {\n        ORDERS_TABLE: ordersTable.tableName,\n      },\n    });\n\n    ordersTable.grantWriteData(createOrderFn);\n\n    const api = new apigateway.RestApi(this, \"OrdersApi\", {\n      restApiName: \"Orders Service\",\n      deployOptions: {\n        stageName: \"prod\",\n        dataTraceEnabled: false,\n        loggingLevel: apigateway.MethodLoggingLevel.ERROR,\n        throttlingRateLimit: 1000,\n        throttlingBurstLimit: 500,\n      },\n    });\n\n    const ordersResource = api.root.addResource(\"orders\");\n    ordersResource.addMethod(\"POST\", new apigateway.LambdaIntegration(createOrderFn));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pulumi-lambda-with-sqs-integration",
      children: "Pulumi: Lambda with SQS Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import * as aws from \"@pulumi/aws\";\nimport * as pulumi from \"@pulumi/pulumi\";\n\nconst dlq = new aws.sqs.Queue(\"order-dlq\", {\n  messageRetentionSeconds: 1209600,\n});\n\nconst queue = new aws.sqs.Queue(\"order-processing-queue\", {\n  visibilityTimeoutSeconds: 60,\n  receiveWaitTimeSeconds: 20,\n  redrivePolicy: pulumi.jsonStringify({\n    deadLetterTargetArn: dlq.arn,\n    maxReceiveCount: 3,\n  }),\n});\n\nconst role = new aws.iam.Role(\"lambda-execution-role\", {\n  assumeRolePolicy: pulumi.jsonStringify({\n    Version: \"2012-10-17\",\n    Statement: [{\n      Effect: \"Allow\",\n      Principal: { Service: \"lambda.amazonaws.com\" },\n      Action: \"sts:AssumeRole\",\n    }],\n  }),\n});\n\nnew aws.iam.RolePolicyAttachment(\"lambda-basic-execution\", {\n  role: role.name,\n  policyArn: aws.iam.ManagedPolicies.AWSLambdaBasicExecutionRole,\n});\n\nconst processOrderFn = new aws.lambda.Function(\"process-order\", {\n  runtime: \"nodejs20.x\",\n  handler: \"index.handler\",\n  role: role.arn,\n  code: new pulumi.asset.AssetArchive({\n    \"index.mjs\": new pulumi.asset.StringAsset(`\nexport const handler = async (event) => {\n  for (const record of event.Records) {\n    const order = JSON.parse(record.body);\n    console.log(\"Processing order:\", order.id);\n  }\n  return { statusCode: 200 };\n};`),\n  }),\n  memorySize: 256,\n  timeout: 30,\n  environment: { variables: { QUEUE_URL: queue.id } },\n});\n\nnew aws.lambda.EventSourceMapping(\"sqs-trigger\", {\n  eventSourceArn: queue.arn,\n  functionName: processOrderFn.arn,\n  batchSize: 10,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-driven-serverless-architecture",
      children: "Event-Driven Serverless Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Event Sources\"\n        S3[(S3 Upload)]\n        API[API Gateway]\n        CRON[EventBridge Schedule]\n        SNS[SNS Topic]\n    end\n    \n    subgraph \"Processing Layer\"\n        L1[Image Resize<br/>Lambda]\n        L2[Order API<br/>Lambda]\n        L3[Report Gen<br/>Lambda]\n        L4[Email Notify<br/>Lambda]\n    end\n    \n    subgraph \"Data Layer\"\n        D1[(DynamoDB<br/>Orders)]\n        D2[(S3<br/>Images)]\n        D3[(ElastiCache<br/>Sessions)]\n    end\n    \n    subgraph \"Orchestration\"\n        SF[Step Functions<br/>Order Workflow]\n    end\n    \n    subgraph \"Observability\"\n        CW[CloudWatch<br/>Metrics + Logs]\n        XR[X-Ray<br/>Tracing]\n    end\n    \n    S3 --> L1\n    API --> L2\n    CRON --> L3\n    SNS --> L4\n    \n    L1 --> D2\n    L2 --> D1\n    L2 --> SF\n    SF --> D1\n    SF --> L4\n    \n    L1 --> CW\n    L2 --> CW\n    L3 --> CW\n    \n    L1 --> XR\n    L2 --> XR\n    SF --> XR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-case-study-nordstroms-serverless-transformation",
      children: "Real-World Case Study: Nordstrom's Serverless Transformation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nordstrom migrated their e-commerce notification platform to a fully serverless architecture, reducing operational overhead by 40%."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      }), " A monolith application on EC2 running 24/7 sent 100M+ notifications per month (email, SMS, push). It required constant patching, capacity planning, and had frequent outages during peak shopping events."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After (Serverless Architecture):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lambda"
        }), " functions for each notification channel (email, SMS, push)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SQS"
        }), " for queuing and decoupling notification generation from delivery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SNS"
        }), " for fan-out to multiple channels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DynamoDB"
        }), " for storing notification templates and delivery status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step Functions"
        }), " for orchestrating multi-step notification workflows (e.g., order confirmation ? shipping update ? delivery)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EventBridge"
        }), " for scheduling recurring notifications"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "40% reduction in operational costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero infrastructure management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic scaling during Black Friday (from 1K to 100K notifications/min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "99.99% delivery uptime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Developers ship new notification types in days instead of weeks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Lesson:"
      }), " Serverless is ideal for spiky, event-driven workloads like e-commerce notifications where traditional provisioned infrastructure would be wasteful and complex to operate at scale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Step Functions Workflow:"
          }), " Design a Step Functions state machine for a serverless document approval workflow: user uploads document ? Lambda extracts text ? SNS notifies approvers ? wait for approval (callback pattern) ? if approved, store in S3 and notify user; if rejected, notify with reason."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost Optimization:"
          }), " A Lambda function runs 10M times/month with 512 MB memory, 2s average duration, and 50 Provisioned Concurrency. Calculate the monthly cost. Then suggest three cost optimization strategies and estimate savings for each."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid Architecture:"
          }), " Design a hybrid architecture where a Lambda function processes API requests but needs to query an on-premises database behind a VPN. Include VPC configuration, security group rules, NAT gateway, and the Lambda VPC networking setup. Discuss the performance implications of this approach."]
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