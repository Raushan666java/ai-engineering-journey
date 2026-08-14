"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81275],{

/***/ 91295
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_06_orchestration_md_60c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-06-orchestration-md-60c.json
const site_docs_courses_devops_06_orchestration_md_60c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/06-orchestration","title":"Chapter 6: Orchestration","description":"Prev: Docker Compose","source":"@site/docs/courses/devops/06-orchestration.md","sourceDirName":"courses/devops","slug":"/devops/06-orchestration","permalink":"/ai-engineering-journey/devops/06-orchestration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"06-orchestration","slug":"/devops/06-orchestration","title":"Chapter 6: Orchestration","sidebar_label":"Chapter 6: Orchestration","sidebar_position":11},"sidebar":"course-devops","previous":{"title":"Chapter 6: Docker Compose","permalink":"/ai-engineering-journey/devops/06-docker-compose"},"next":{"title":"Chapter 7: Infrastructure as Code","permalink":"/ai-engineering-journey/devops/07-infrastructure-as-code"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/06-orchestration.md


const frontMatter = {
	id: '06-orchestration',
	slug: '/devops/06-orchestration',
	title: 'Chapter 6: Orchestration',
	sidebar_label: 'Chapter 6: Orchestration',
	sidebar_position: 11
};
const contentTitle = 'Chapter 6: Orchestration';

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
  "value": "Why Orchestration?",
  "id": "why-orchestration",
  "level": 3
}, {
  "value": "Orchestration Platforms",
  "id": "orchestration-platforms",
  "level": 3
}, {
  "value": "Orchestration Primitives",
  "id": "orchestration-primitives",
  "level": 3
}, {
  "value": "Scheduling",
  "id": "scheduling",
  "level": 3
}, {
  "value": "Rolling Updates",
  "id": "rolling-updates",
  "level": 3
}, {
  "value": "Self-Healing",
  "id": "self-healing",
  "level": 3
}, {
  "value": "Autoscaling",
  "id": "autoscaling",
  "level": 3
}, {
  "value": "Stateful Workloads in Orchestration",
  "id": "stateful-workloads-in-orchestration",
  "level": 3
}, {
  "value": "Advanced Scheduling",
  "id": "advanced-scheduling",
  "level": 3
}, {
  "value": "Pod Lifecycle and Termination",
  "id": "pod-lifecycle-and-termination",
  "level": 3
}, {
  "value": "Service Discovery",
  "id": "service-discovery",
  "level": 3
}, {
  "value": "Load Balancing",
  "id": "load-balancing",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Orchestration Configuration Generator",
  "id": "example-1-orchestration-configuration-generator",
  "level": 3
}, {
  "value": "Example 2: Orchestration Simulator",
  "id": "example-2-orchestration-simulator",
  "level": 3
}, {
  "value": "Multi-Cloud Orchestrator Comparator",
  "id": "multi-cloud-orchestrator-comparator",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-6-orchestration",
        children: "Chapter 6: Orchestration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/06-docker-compose",
          children: "Docker Compose"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/07-infrastructure-as-code",
          children: "Infrastructure as Code"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the role and need for container orchestration in production."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between orchestration solutions: Docker Swarm, Kubernetes, Nomad, ECS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand orchestration primitives: deployment, service, scaling, rolling updates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure service discovery, load balancing, and scheduling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement self-healing, scaling, and rolling update strategies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate orchestration platforms for different use cases."
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
        href: "../../assets/images/lessons/devops/06-orchestration/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/06-orchestration/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/06-orchestration/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/06-orchestration/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/06-orchestration/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/06-orchestration/visual-explanation.png",
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
            children: "Why Orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual container management doesn't scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestration automates placement, scaling, healing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestration Primitives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployments, services, ingress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building blocks for running applications at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Where to place containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler considers resources, constraints, affinity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How containers find each other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS-based or key-value store"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributing traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal (service mesh) and external (ingress)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling Updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-downtime deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable strategy: max surge, max unavailable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Healing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restart, reschedule, replace failed containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjusting replica count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (more replicas) vs vertical (more resources)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Orchestration Platforms] --> B[Kubernetes]\n    A --> C[Docker Swarm]\n    A --> D[Nomad]\n    A --> E[Amazon ECS]\n    B --> F[Pods]\n    B --> G[Deployments]\n    B --> H[Services]\n    B --> I[ConfigMaps]\n    F & G & H --> J[Scaling]\n    J --> K[Rolling Updates]\n    K --> L[Self-Healing]\n    L --> M[Service Discovery]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-orchestration",
      children: "Why Orchestration?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Running containers in production presents challenges that orchestration solves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Placement:"
        }), " Where should each container run? Which host has enough resources?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling:"
        }), " How to handle increased traffic? Automatically add/remove replicas."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Health:"
        }), " What happens when a container crashes? Automatically restart."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Updates:"
        }), " How to update without downtime? Rolling updates with health checks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Networking:"
        }), " How do containers find each other across hosts? Service discovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration:"
        }), " How to manage config across environments? Config maps, secrets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage:"
        }), " How to persist data when containers move? Persistent volumes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "orchestration-platforms",
      children: "Orchestration Platforms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes (K8s):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry standard for container orchestration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declarative configuration (YAML)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rich ecosystem: Helm, Istio, Prometheus, etc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex but extremely powerful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: large-scale, complex microservices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Docker Swarm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built into Docker Engine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simpler than Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native Docker CLI integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: small to medium deployments, Docker-native teams"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HashiCorp Nomad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple, lightweight scheduler"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-platform (not just containers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single binary deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: teams needing simplicity, multi-workload (containers + VMs + batch)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon ECS:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AWS-native container orchestration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tightly integrated with AWS services (ALB, IAM, VPC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fargate provides serverless containers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: AWS-focused teams, simpler than K8s"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "orchestration-primitives",
      children: "Orchestration Primitives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployment:"
      }), " Desired state for a set of identical pods. Defines replicas, strategy, health checks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Deployment\"\n        D[Deployment Controller]\n        D --> RS1[ReplicaSet v1]\n        D --> RS2[ReplicaSet v2]\n        RS1 --> P1[Pod 1]\n        RS1 --> P2[Pod 2]\n        RS2 --> P3[Pod 3]\n        RS2 --> P4[Pod 4]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service:"
      }), " Stable network endpoint for a set of pods. Load balances traffic across healthy pods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    S[Service: my-api] --> P1[Pod: api-v1]\n    S --> P2[Pod: api-v1]\n    S --> P3[Pod: api-v1]\n    S --- LB[Load Balancer]\n    DNS[DNS my-api.svc.cluster.local] --> S\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ingress:"
      }), " External HTTP/HTTPS routing to services. Handles TLS termination, path-based routing, virtual hosts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    Internet --> I[Ingress]\n    I --> S1[Service: web]\n    I --> S2[Service: api]\n    I --> S3[Service: admin]\n    S1 --> P1[Pods: web]\n    S2 --> P2[Pods: api]\n    S3 --> P3[Pods: admin]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scheduling",
      children: "Scheduling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The scheduler decides which node runs each pod:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduling factors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource requests (CPU, memory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node affinity/anti-affinity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Taints and tolerations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topology spread constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pod priority and preemption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Node selector: schedule on specific nodes\nnodeSelector:\n  disktype: ssd\n\n# Affinity: schedule near API servers\npodAntiAffinity:\n  preferredDuringScheduling:\n    - podAffinityTerm:\n        labelSelector:\n          matchLabels:\n            app: cache\n        topologyKey: kubernetes.io/hostname\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rolling-updates",
      children: "Rolling Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strategy for updating pods without downtime:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "strategy:\n  type: RollingUpdate\n  rollingUpdate:\n    maxSurge: 1          # Extra pods during update\n    maxUnavailable: 0    # Keep all pods available\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Update Progress\"\n        A[3 pods: v1.0] --> B[2 v1.0 + 1 v2.0]\n        B --> C[1 v1.0 + 2 v2.0]\n        C --> D[3 pods: v2.0]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "self-healing",
      children: "Self-Healing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Orchestrators automatically maintain desired state:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pod failure:"
        }), " If a pod crashes, the controller creates a replacement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Node failure:"
        }), " Pods on failed nodes are rescheduled to healthy nodes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Readiness probe:"
        }), " If a pod fails readiness checks, it's removed from service load balancer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liveness probe:"
        }), " If a pod fails liveness checks, it's restarted"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autoscaling",
      children: "Autoscaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Horizontal Pod Autoscaler (HPA) scales replicas based on metrics:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: myapp\n  minReplicas: 3\n  maxReplicas: 20\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          averageUtilization: 70\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stateful-workloads-in-orchestration",
      children: "Stateful Workloads in Orchestration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not all applications are stateless — databases, caches, and message queues require stateful orchestration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "StatefulSet (Kubernetes):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each pod gets a stable, unique network identity (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pod-0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pod-1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persistent storage tied to pod identity (survives rescheduling)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordered, graceful deployment and scaling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: postgres\nspec:\n  serviceName: postgres\n  replicas: 3\n  selector:\n    matchLabels:\n      app: postgres\n  template:\n    spec:\n      containers:\n        - name: postgres\n          image: postgres:16\n          volumeMounts:\n            - name: data\n              mountPath: /var/lib/postgresql/data\n  volumeClaimTemplates:\n    - metadata:\n        name: data\n      spec:\n        accessModes: [\"ReadWriteOnce\"]\n        resources:\n          requests:\n            storage: 100Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operator pattern:"
      }), " Extends Kubernetes with application-specific operational knowledge."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus Operator:"
        }), " Manages monitoring stack lifecycle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kafka Operator:"
        }), " Handles topic creation, partition reassignment, broker scaling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Postgres Operator:"
        }), " Manages backups, replication, failover"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"StatefulSet\"\n        S[Service: postgres] --> P0[Pod: postgres-0<br/>Stable Identity]\n        S --> P1[Pod: postgres-1<br/>Stable Identity]\n        S --> P2[Pod: postgres-2<br/>Stable Identity]\n        P0 --> PVC0[PVC: data-postgres-0]\n        P1 --> PVC1[PVC: data-postgres-1]\n        P2 --> PVC2[PVC: data-postgres-2]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-scheduling",
      children: "Advanced Scheduling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-grained control over pod placement:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Taints and Tolerations:"
      }), " Nodes repel pods that don't tolerate the taint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Taint a node for dedicated GPU workloads\nkubectl taint nodes gpu-node gpu=true:NoSchedule\n\n# Pod tolerates the taint\ntolerations:\n  - key: \"gpu\"\n    operator: \"Equal\"\n    value: \"true\"\n    effect: \"NoSchedule\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Affinity:"
      }), " Attract pods to specific nodes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "affinity:\n  nodeAffinity:\n    requiredDuringSchedulingIgnoredDuringExecution:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: node.kubernetes.io/instance-type\n              operator: In\n              values:\n                - c5.large\n                - c5.xlarge\n    preferredDuringSchedulingIgnoredDuringExecution:\n      - weight: 100\n        preference:\n          matchExpressions:\n            - key: topology.kubernetes.io/zone\n              operator: In\n              values:\n                - us-east-1a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pod Topology Spread Constraints:"
      }), " Distribute pods across failure domains:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "topologySpreadConstraints:\n  - maxSkew: 1\n    topologyKey: topology.kubernetes.io/zone\n    whenUnsatisfiable: DoNotSchedule\n    labelSelector:\n      matchLabels:\n        app: web\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pod-lifecycle-and-termination",
      children: "Pod Lifecycle and Termination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding pod lifecycle ensures graceful handling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Pending] --> B[ContainerCreating]\n    B --> C[Running]\n    C --> D[PreStop Hook]\n    D --> E[SIGTERM]\n    E --> F[terminationGracePeriodSeconds]\n    F --> G[SIGKILL]\n    F -->|Graceful shutdown| H[Container Exits]\n    H --> I[Pod Terminated]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "terminationGracePeriodSeconds"
        }), " (default 30s): Time between SIGTERM and SIGKILL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PreStop hook:"
        }), " Runs before SIGTERM — drain connections, flush buffers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PostStart hook:"
        }), " Runs after container starts — register with service mesh"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "lifecycle:\n  preStop:\n    exec:\n      command: [\"/bin/sh\", \"-c\", \"sleep 10 && node drain-connections.js\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simulate pod lifecycle with termination handling\ninterface PodLifecycleConfig {\n  terminationGracePeriod: number;\n  hasPreStopHook: boolean;\n}\n\nclass PodLifecycleSimulator {\n  async simulateShutdown(config: PodLifecycleConfig): Promise<void> {\n    console.log('?? Pod shutdown initiated');\n\n    if (config.hasPreStopHook) {\n      console.log('  Running preStop hook...');\n      await this.sleep(2000);\n      console.log('  Connections drained');\n    }\n\n    console.log('  SIGTERM sent');\n    const shutdownStart = Date.now();\n\n    while (Date.now() - shutdownStart < config.terminationGracePeriod * 1000) {\n      // Check active connections\n      if (this.activeConnections === 0) {\n        console.log('  All connections closed, exiting gracefully');\n        return;\n      }\n      await this.sleep(1000);\n    }\n\n    // Grace period expired, force kill\n    console.log(`  Grace period (${config.terminationGracePeriod}s) expired, SIGKILL sent`);\n  }\n\n  private activeConnections: number = 5;\n  private async sleep(ms: number): Promise<void> {\n    return new Promise(r => setTimeout(r, ms));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-discovery",
      children: "Service Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS-based (Kubernetes):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each service gets a DNS name: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "service-name.namespace.svc.cluster.local"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cluster DNS (CoreDNS) resolves names to service IPs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Environment variables: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SERVICE_NAME_SERVICE_HOST"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SERVICE_NAME_SERVICE_PORT"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key-value store (Swarm, Nomad):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Services register with consul/etcd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Other services query the registry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-balancing",
      children: "Load Balancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal load balancing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ClusterIP service distributes traffic to pods (round-robin by default)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service mesh (Istio, Linkerd) provides advanced traffic management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "External load balancing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LoadBalancer service provisions cloud LB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ingress controller (Nginx, Traefik, HAProxy) routes HTTP traffic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NodePort exposes port on each node"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-orchestration-configuration-generator",
      children: "Example 1: Orchestration Configuration Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Platform = 'kubernetes' | 'swarm' | 'nomad' | 'ecs';\n\ninterface AppConfig {\n  name: string;\n  image: string;\n  replicas: number;\n  port: number;\n  cpu: string;\n  memory: string;\n  env: Record<string, string>;\n}\n\nclass OrchestrationGenerator {\n  generate(config: AppConfig, platform: Platform): string {\n    switch (platform) {\n      case 'kubernetes': return this.generateK8s(config);\n      case 'swarm': return this.generateSwarm(config);\n      case 'nomad': return this.generateNomad(config);\n      case 'ecs': return this.generateECS(config);\n    }\n  }\n\n  private generateK8s(config: AppConfig): string {\n    return `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ${config.name}\nspec:\n  replicas: ${config.replicas}\n  selector:\n    matchLabels:\n      app: ${config.name}\n  template:\n    metadata:\n      labels:\n        app: ${config.name}\n    spec:\n      containers:\n        - name: ${config.name}\n          image: ${config.image}\n          ports:\n            - containerPort: ${config.port}\n          resources:\n            requests:\n              cpu: ${config.cpu}\n              memory: ${config.memory}\n            limits:\n              cpu: \"${parseFloat(config.cpu) * 2}\"\n              memory: \"${parseInt(config.memory) * 2}M\"\n          env:\n${Object.entries(config.env).map(([k, v]) => `            - name: ${k}\n              value: \"${v}\"`).join('\\n')}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: ${config.name}\nspec:\n  selector:\n    app: ${config.name}\n  ports:\n    - protocol: TCP\n      port: ${config.port}\n      targetPort: ${config.port}`;\n  }\n\n  private generateSwarm(config: AppConfig): string {\n    return `version: '3.8'\n\nservices:\n  ${config.name}:\n    image: ${config.image}\n    deploy:\n      replicas: ${config.replicas}\n      resources:\n        limits:\n          cpus: '${parseFloat(config.cpu) * 2}'\n          memory: ${parseInt(config.memory) * 2}M\n        reservations:\n          cpus: '${config.cpu}'\n          memory: ${config.memory}M\n    ports:\n      - \"${config.port}:${config.port}\"\n    environment:\n${Object.entries(config.env).map(([k, v]) => `      ${k}: ${v}`).join('\\n')}`;\n  }\n\n  private generateNomad(config: AppConfig): string {\n    return `job \"${config.name}\" {\n  datacenters = [\"dc1\"]\n  type = \"service\"\n\n  group \"${config.name}\" {\n    count = ${config.replicas}\n\n    task \"${config.name}\" {\n      driver = \"docker\"\n\n      config {\n        image = \"${config.image}\"\n        ports = [\"http\"]\n      }\n\n      resources {\n        cpu    = ${parseInt(config.cpu) * 1000}\n        memory = ${parseInt(config.memory)}\n      }\n\n      env {\n${Object.entries(config.env).map(([k, v]) => `        ${k} = \"${v}\"`).join('\\n')}\n      }\n    }\n  }\n}`;\n  }\n\n  private generateECS(config: AppConfig): string {\n    return `{\n  \"family\": \"${config.name}\",\n  \"networkMode\": \"awsvpc\",\n  \"containerDefinitions\": [{\n    \"name\": \"${config.name}\",\n    \"image\": \"${config.image}\",\n    \"essential\": true,\n    \"portMappings\": [{\n      \"containerPort\": ${config.port},\n      \"protocol\": \"tcp\"\n    }],\n    \"environment\": [\n${Object.entries(config.env).map(([k, v], i, a) => `      { \"name\": \"${k}\", \"value\": \"${v}\" }${i < a.length - 1 ? ',' : ''}`).join('\\n')}\n    ],\n    \"logConfiguration\": {\n      \"logDriver\": \"awslogs\",\n      \"options\": {\n        \"awslogs-group\": \"/ecs/${config.name}\",\n        \"awslogs-region\": \"us-east-1\"\n      }\n    }\n  }]\n}`;\n  }\n}\n\nconst gen = new OrchestrationGenerator();\nconst config: AppConfig = {\n  name: 'api-service', image: 'myapp:1.0.0', replicas: 3,\n  port: 3000, cpu: '0.25', memory: '256',\n  env: { NODE_ENV: 'production', DB_HOST: 'postgres.internal' },\n};\nconsole.log(gen.generate(config, 'kubernetes'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-orchestration-simulator",
      children: "Example 2: Orchestration Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Node {\n  name: string;\n  cpu: number;\n  memory: number;\n  availableCpu: number;\n  availableMemory: number;\n  pods: Pod[];\n  healthy: boolean;\n}\n\ninterface Pod {\n  name: string;\n  cpu: number;\n  memory: number;\n  node: string;\n  status: 'running' | 'pending' | 'failed' | 'terminated';\n  restartCount: number;\n}\n\nclass OrchestrationSimulator {\n  private nodes: Map<string, Node> = new Map();\n  private pendingPods: Pod[] = [];\n\n  addNode(node: Node): void {\n    this.nodes.set(node.name, node);\n  }\n\n  schedulePod(pod: Pod): void {\n    const available = [...this.nodes.values()].filter(n =>\n      n.healthy && n.availableCpu >= pod.cpu && n.availableMemory >= pod.memory\n    );\n\n    if (available.length === 0) {\n      console.log(`??  No node available for pod ${pod.name}, queuing...`);\n      this.pendingPods.push(pod);\n      pod.status = 'pending';\n      return;\n    }\n\n    // Simple bin-packing: schedule on node with most available resources\n    const target = available.sort((a, b) =>\n      (b.availableCpu + b.availableMemory) - (a.availableCpu + a.availableMemory)\n    )[0];\n\n    target.pods.push(pod);\n    target.availableCpu -= pod.cpu;\n    target.availableMemory -= pod.memory;\n    pod.node = target.name;\n    pod.status = 'running';\n    console.log(`?? Scheduled ${pod.name} on ${target.name}`);\n  }\n\n  simulatePodFailure(podName: string): void {\n    for (const node of this.nodes.values()) {\n      const idx = node.pods.findIndex(p => p.name === podName);\n      if (idx >= 0) {\n        const pod = node.pods[idx];\n        node.pods.splice(idx, 1);\n        node.availableCpu += pod.cpu;\n        node.availableMemory += pod.memory;\n        pod.status = 'failed';\n        console.log(`?? Pod ${podName} failed on ${node.name}`);\n\n        // Self-healing: reschedule\n        pod.status = 'terminated';\n        const newPod = { ...pod, name: `${pod.name}-restart-${pod.restartCount + 1}`, restartCount: pod.restartCount + 1 };\n        this.schedulePod(newPod);\n        return;\n      }\n    }\n  }\n\n  simulateNodeFailure(nodeName: string): void {\n    const node = this.nodes.get(nodeName);\n    if (!node) return;\n\n    node.healthy = false;\n    console.log(`?? Node ${nodeName} failed`);\n\n    // Reschedule all pods from failed node\n    const podsToReschedule = [...node.pods];\n    node.pods = [];\n    node.availableCpu = 0;\n    node.availableMemory = 0;\n\n    for (const pod of podsToReschedule) {\n      pod.status = 'terminated';\n      const newPod = { ...pod, name: `${pod.name}-rescheduled`, restartCount: pod.restartCount };\n      this.schedulePod(newPod);\n    }\n  }\n\n  simulateScaleUp(podConfig: Omit<Pod, 'name'>, count: number): void {\n    for (let i = 0; i < count; i++) {\n      const pod: Pod = {\n        ...podConfig,\n        name: `scaled-pod-${i}`,\n        restartCount: 0,\n      };\n      this.schedulePod(pod);\n    }\n  }\n\n  getStatus(): void {\n    console.log('\\n=== Cluster Status ===\\n');\n    for (const node of this.nodes.values()) {\n      console.log(`Node: ${node.name} (${node.healthy ? '?' : '?'})`);\n      console.log(`  CPU: ${node.availableCpu}/${node.cpu}`);\n      console.log(`  Memory: ${node.availableMemory}/${node.memory}`);\n      console.log(`  Pods: ${node.pods.map(p => `${p.name}(${p.status})`).join(', ') || 'none'}`);\n      console.log('');\n    }\n    if (this.pendingPods.length > 0) {\n      console.log(`??  Pending pods: ${this.pendingPods.length}`);\n    }\n  }\n}\n\nconst sim = new OrchestrationSimulator();\nsim.addNode({ name: 'node-1', cpu: 4, memory: 8192, availableCpu: 4, availableMemory: 8192, pods: [], healthy: true });\nsim.addNode({ name: 'node-2', cpu: 4, memory: 8192, availableCpu: 4, availableMemory: 8192, pods: [], healthy: true });\nsim.addNode({ name: 'node-3', cpu: 2, memory: 4096, availableCpu: 2, availableMemory: 4096, pods: [], healthy: true });\n\nsim.schedulePod({ name: 'web-1', cpu: 0.5, memory: 256, node: '', status: 'running', restartCount: 0 });\nsim.schedulePod({ name: 'web-2', cpu: 0.5, memory: 256, node: '', status: 'running', restartCount: 0 });\nsim.schedulePod({ name: 'api-1', cpu: 1, memory: 512, node: '', status: 'running', restartCount: 0 });\n\nsim.simulateNodeFailure('node-3');\nsim.simulatePodFailure('web-1');\nsim.simulateScaleUp({ cpu: 0.5, memory: 256, node: '', status: 'running', restartCount: 0 }, 3);\n\nsim.getStatus();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-cloud-orchestrator-comparator",
      children: "Multi-Cloud Orchestrator Comparator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right orchestration platform depends on team maturity, scale, and cloud strategy. The following tool compares orchestration platforms across multiple dimensions and recommends the best fit."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// orchestrator-comparator.ts\n// Compare container orchestration platforms\n\ninterface PlatformFeature {\n  name: string;\n  kubernetes: boolean | string;\n  swarm: boolean | string;\n  nomad: boolean | string;\n  ecs: boolean | string;\n}\n\ninterface PlatformCost {\n  platform: string;\n  controlPlane: string;\n  workerPricing: string;\n  hiddenCosts: string[];\n  estimatedMonthly100Nodes: number;\n}\n\ninterface ComparisonDimension {\n  category: string;\n  features: PlatformFeature[];\n}\n\ninterface Recommendation {\n  platform: string;\n  score: number;\n  strengths: string[];\n  weaknesses: string[];\n  bestFor: string;\n}\n\nclass OrchestratorComparator {\n  private readonly dimensions: ComparisonDimension[] = [\n    {\n      category: 'Deployment', features: [\n        { name: 'Rolling updates', kubernetes: '?', swarm: '?', nomad: '?', ecs: '?' },\n        { name: 'Blue-green deploy', kubernetes: '?', swarm: '?? Manual', nomad: '?? Manual', ecs: '?' },\n        { name: 'Canary releases', kubernetes: '?', swarm: '?', nomad: '?? Manual', ecs: '?' },\n        { name: 'Batch jobs', kubernetes: '?', swarm: '?', nomad: '?', ecs: '?' },\n      ],\n    },\n    {\n      category: 'Networking', features: [\n        { name: 'Service discovery', kubernetes: '? DNS', swarm: '? DNS', nomad: '? Consul', ecs: '? Cloud Map' },\n        { name: 'Ingress/LB', kubernetes: '?', swarm: '?? Basic', nomad: '?? Fabio', ecs: '? ALB/NLB' },\n        { name: 'Network policies', kubernetes: '?', swarm: '?', nomad: '??', ecs: '? SG' },\n        { name: 'Service mesh', kubernetes: '? Istio/Linkerd', swarm: '?', nomad: '? Consul', ecs: '? App Mesh' },\n      ],\n    },\n    {\n      category: 'Operations', features: [\n        { name: 'Self-healing', kubernetes: '?', swarm: '?', nomad: '?', ecs: '?' },\n        { name: 'Auto-scaling', kubernetes: '? HPA', swarm: '?', nomad: '??', ecs: '?' },\n        { name: 'Multi-AZ', kubernetes: '?', swarm: '?', nomad: '?', ecs: '?' },\n        { name: 'Audit logging', kubernetes: '?', swarm: '??', nomad: '?', ecs: '?' },\n      ],\n    },\n    {\n      category: 'Ecosystem', features: [\n        { name: 'Community size', kubernetes: 'Largest', swarm: 'Declining', nomad: 'Growing', ecs: 'Large (AWS)' },\n        { name: 'Cloud native', kubernetes: '? CNCF', swarm: '?', nomad: '? CNCF', ecs: '?' },\n        { name: 'Learning curve', kubernetes: 'Steep', swarm: 'Gentle', nomad: 'Moderate', ecs: 'Moderate' },\n        { name: 'Helm charts', kubernetes: '?', swarm: '?', nomad: '?', ecs: '?' },\n      ],\n    },\n  ];\n\n  private readonly costModel: PlatformCost[] = [\n    { platform: 'Kubernetes', controlPlane: 'Free (self-hosted) or $0.10/hr (EKS)', workerPricing: 'Standard compute', hiddenCosts: ['etcd maintenance', 'Ingress controller', 'Monitoring stack'], estimatedMonthly100Nodes: 8500 },\n    { platform: 'Swarm', controlPlane: 'Free', workerPricing: 'Standard compute', hiddenCosts: ['Limited ecosystem tooling'], estimatedMonthly100Nodes: 7200 },\n    { platform: 'Nomad', controlPlane: 'Free', workerPricing: 'Standard compute', hiddenCosts: ['Consul for service discovery', 'Vault for secrets'], estimatedMonthly100Nodes: 7800 },\n    { platform: 'ECS', controlPlane: 'Fargate $0.01/task/hr', workerPricing: 'EC2 or Fargate', hiddenCosts: ['CloudWatch Logs', 'ALB'], estimatedMonthly100Nodes: 9900 },\n  ];\n\n  score(options: { kubernetes: number; swarm: number; nomad: number; ecs: number }): Recommendation[] {\n    const scores = [\n      { platform: 'Kubernetes', score: options.kubernetes, strengths: ['Largest ecosystem', 'Most features', 'Portable'], weaknesses: ['Complexity', 'Learning curve'], bestFor: 'Complex microservices, enterprise' },\n      { platform: 'Swarm', score: options.swarm, strengths: ['Simple', 'Docker native', 'Fast setup'], weaknesses: ['Limited features', 'Declining community'], bestFor: 'Small teams, simple apps' },\n      { platform: 'Nomad', score: options.nomad, strengths: ['Simple', 'Multi-workload', 'HashiCorp stack'], weaknesses: ['Smaller ecosystem', 'Fewer features'], bestFor: 'Mixed workloads, batch processing' },\n      { platform: 'ECS', score: options.ecs, strengths: ['AWS native', 'No control plane', 'Fargate'], weaknesses: ['Vendor lock-in', 'Limited flexibility'], bestFor: 'AWS-only shops, Fargate' },\n    ];\n\n    return scores.sort((a, b) => b.score - a.score);\n  }\n\n  generateComparisonTable(): string {\n    let output = '## Orchestration Platform Comparison\\n\\n';\n    for (const dim of this.dimensions) {\n      output += `### ${dim.category}\\n\\n| Feature | Kubernetes | Swarm | Nomad | ECS |\\n|---------|------------|-------|-------|-----|\\n`;\n      output += dim.features.map(f =>\n        `| ${f.name} | ${f.kubernetes} | ${f.swarm} | ${f.nomad} | ${f.ecs} |`\n      ).join('\\n');\n      output += '\\n\\n';\n    }\n    output += '### Cost Comparison (100 nodes)\\n\\n| Platform | Monthly Est. |\\n|----------|-------------|\\n';\n    output += this.costModel.map(c => `| ${c.platform} | $${c.estimatedMonthly100Nodes.toLocaleString()} |`).join('\\n');\n    return output;\n  }\n}\n\nconst comparator = new OrchestratorComparator();\nconsole.log(comparator.generateComparisonTable());\n\nconst ranked = comparator.score({ kubernetes: 4, swarm: 2, nomad: 3, ecs: 3 });\nconsole.log('\\n## Recommendation\\n', ranked[0].platform, '-', ranked[0].bestFor);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Systematic orchestrator comparison across deployment, networking, operations, ecosystem, and cost dimensions enables data-driven platform selection aligned with team capabilities and requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with simple orchestration."
        }), " Docker Swarm or ECS for small teams; Kubernetes for complex needs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always define resource requests and limits."
        }), " Unbounded containers destabilize the cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement health checks."
        }), " Liveness and readiness probes enable self-healing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use rolling updates with health gates."
        }), " Never update all replicas at once."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design for rescheduling."
        }), " Assume any pod can be terminated at any time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable autoscaling."
        }), " Start with CPU-based, then add custom metrics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What is the primary purpose of container orchestration?"
      }), "**A)** Building container images", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Automating deployment, scaling, and management of containers", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Storing container images", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Writing Dockerfiles", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Automating deployment, scaling, and management of containers</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: Which orchestration platform is the industry standard for complex microservices?"
        }), "**A)** Docker Swarm", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Kubernetes", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Nomad", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** ECS", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Kubernetes</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What does a liveness probe do?"
          }), "**A)** Checks if the application is ready to serve traffic", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Checks if the container is still alive and restarts it if not", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Checks disk space", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Checks network connectivity", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Checks if the container is still alive and restarts it if not</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is the purpose of `maxSurge` in a rolling update?"
            }), "**A)** Maximum number of pods that can be unavailable", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Maximum number of extra pods during update", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Maximum number of updates per second", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Maximum time for the update", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Maximum number of extra pods during update</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: How do pods typically discover service endpoints?"
              }), "**A)** Hardcoded IPs", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** DNS-based service discovery", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Manual configuration", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Broadcast messages", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** DNS-based service discovery</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// docker compose\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'docker compose', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Container orchestration automates deployment, scaling, networking, and management of containerized applications."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Kubernetes is the industry standard; Docker Swarm, Nomad, and ECS are alternatives for simpler use cases."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Orchestration primitives include deployments (replica management), services (networking), and ingress (external access)."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Schedulers place containers on nodes based on resource requirements, constraints, and policies."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Self-healing automatically restarts failed pods and reschedules them on healthy nodes."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Rolling updates enable zero-downtime deployments with configurable surge and unavailable counts."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Autoscaling adjusts replica counts based on CPU, memory, or custom metrics."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Service discovery via DNS or key-value stores enables inter-service communication."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What problems does container orchestration solve?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Compare Kubernetes, Docker Swarm, and Nomad in terms of complexity and use cases."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between a liveness probe and a readiness probe?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does a rolling update strategy prevent downtime?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does an orchestrator handle a node failure?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a Kubernetes deployment with rolling update strategy, health checks, and resource limits."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Compare three orchestration platforms for a team of 5 deploying 10 microservices."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement an autoscaling strategy based on CPU utilization."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a service discovery and load balancing design for a multi-service application."
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "OrchestrationSimulator"
                  }), " class to support: ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "StatefulSet"
                  }), " behavior (pods with stable identity — rescheduled pods retain their name), ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "pod topology spread constraints"
                  }), " (ensure pods are distributed across at least 3 nodes with a max skew of 1), and ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "graceful termination"
                  }), " (pods run a preStop hook that drains connections in 5s before SIGKILL at 30s)."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "SchedulingPolicyEngine"
                  }), " that accepts pod requirements and node labels then returns the optimal node assignment. Support the following constraint types: ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "requiredNodeAffinity"
                  }), " (pod must run on matching nodes), ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "preferredNodeAffinity"
                  }), " (weighted preference for node attributes), ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "podAntiAffinity"
                  }), " (prevent same-app pods on same node), and ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "toleration"
                  }), " (pod tolerates tainted nodes). Use the engine to schedule 6 web pods across a 3-node cluster where each node has a different zone label."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a complete orchestration strategy for a 12-service microservices platform. Include: platform selection with justification (Kubernetes vs Swarm vs Nomad), deployment configuration with health checks, resource limits, and rolling updates, service discovery and ingress architecture, autoscaling policy (CPU, memory, custom metrics), disaster recovery (multi-AZ, pod anti-affinity, PDB), a strategy document comparing the chosen platform against alternatives with cost, complexity, and capability analysis."
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