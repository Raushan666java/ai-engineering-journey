"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[12656],{

/***/ 92317
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_09_continuous_delivery_md_cbb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-09-continuous-delivery-md-cbb.json
const site_docs_courses_devops_09_continuous_delivery_md_cbb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/09-continuous-delivery","title":"Chapter 9: Continuous Delivery","description":"Prev: Advanced Kubernetes","source":"@site/docs/courses/devops/09-continuous-delivery.md","sourceDirName":"courses/devops","slug":"/devops/09-continuous-delivery","permalink":"/ai-engineering-journey/devops/09-continuous-delivery","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"09-continuous-delivery","slug":"/devops/09-continuous-delivery","title":"Chapter 9: Continuous Delivery","sidebar_label":"Chapter 9: Continuous Delivery","sidebar_position":16},"sidebar":"course-devops","previous":{"title":"Chapter 8: Advanced Kubernetes","permalink":"/ai-engineering-journey/devops/08-k8s-advanced"},"next":{"title":"Chapter 9: Terraform & Infrastructure as Code","permalink":"/ai-engineering-journey/devops/09-iac"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/09-continuous-delivery.md


const frontMatter = {
	id: '09-continuous-delivery',
	slug: '/devops/09-continuous-delivery',
	title: 'Chapter 9: Continuous Delivery',
	sidebar_label: 'Chapter 9: Continuous Delivery',
	sidebar_position: 16
};
const contentTitle = 'Chapter 9: Continuous Delivery';

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
  "value": "CD vs CI vs Continuous Deployment",
  "id": "cd-vs-ci-vs-continuous-deployment",
  "level": 3
}, {
  "value": "Deployment Strategies",
  "id": "deployment-strategies",
  "level": 3
}, {
  "value": "Feature Flags",
  "id": "feature-flags",
  "level": 3
}, {
  "value": "Environment Promotion",
  "id": "environment-promotion",
  "level": 3
}, {
  "value": "Rollback Strategies",
  "id": "rollback-strategies",
  "level": 3
}, {
  "value": "Deployment Pipeline Implementation",
  "id": "deployment-pipeline-implementation",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Canary Deployment Controller",
  "id": "example-1-canary-deployment-controller",
  "level": 3
}, {
  "value": "Example 2: Release Orchestrator",
  "id": "example-2-release-orchestrator",
  "level": 3
}, {
  "value": "Canary Release Manager",
  "id": "canary-release-manager",
  "level": 3
}, {
  "value": "Rollback Orchestrator",
  "id": "rollback-orchestrator",
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
  "value": "TypeScript: Canary Deployment Pipeline Controller",
  "id": "typescript-canary-deployment-pipeline-controller",
  "level": 2
}, {
  "value": "Mermaid: Deployment Strategy Decision Tree",
  "id": "mermaid-deployment-strategy-decision-tree",
  "level": 2
}, {
  "value": "Mermaid: Feature Flag Architecture",
  "id": "mermaid-feature-flag-architecture",
  "level": 2
}, {
  "value": "Deeper Explanation: Canary Analysis and Automation",
  "id": "deeper-explanation-canary-analysis-and-automation",
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
        id: "chapter-9-continuous-delivery",
        children: "Chapter 9: Continuous Delivery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/08-k8s-advanced",
          children: "Advanced Kubernetes"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/09-iac",
          children: "Terraform & IaC"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Continuous Delivery principles and the deployment pipeline."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between release strategies: blue-green, canary, rolling, feature flags."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement deployment automation with approval gates and rollback mechanisms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage environment promotion from development to production."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply deployment strategies for zero-downtime releases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement release governance and compliance."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "CD Principles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every commit is potentially deployable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automation and testing make this possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two identical environments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant switchover with zero downtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradual traffic shifting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced blast radius for bad releases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental pod replacement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard for Kubernetes deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toggle features at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple deploy from release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated promotion flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same artifact through all environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revert to previous version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate on health check failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release Governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval gates and compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trail for regulatory requirements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Commit] --> B[CI Pipeline]\n    B --> C[Build Artifact]\n    C --> D[Deploy to Dev]\n    D --> E[Automated Tests]\n    E --> F[Deploy to Staging]\n    F --> G[Integration Tests]\n    G --> H[Approval Gate]\n    H --> I{Strategy?}\n    I --> J[Blue-Green]\n    I --> K[Canary]\n    I --> L[Rolling]\n    J --> M[Production]\n    K --> M\n    L --> M\n    M --> N[Monitor]\n    N -.->|Rollback if needed| C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cd-vs-ci-vs-continuous-deployment",
      children: "CD vs CI vs Continuous Deployment"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Continuous Delivery"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Continuous Deployment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated to staging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated to production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production gate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual approval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully automated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Team maturity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance needs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can include manual steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires full automation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-strategies",
      children: "Deployment Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blue-Green Deployment:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Before Deploy\"\n        LB[Load Balancer] --> B[Blue: v1.0]\n    end\n    subgraph \"During Deploy\"\n        LB2[Load Balancer] --> B2[Blue: v1.0]\n        LB2 -->|inactive| G2[Green: v2.0]\n    end\n    subgraph \"After Deploy\"\n        LB3[Load Balancer] --> G3[Green: v2.0]\n        B3[Blue: v1.0] -.->|standby| LB3\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Instant switch, immediate rollback (switch back), full environment separation.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Double infrastructure cost, database compatibility challenges."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canary Deployment:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    LB[Load Balancer] -->|90%| V1[v1.0]\n    LB -->|5%| V2A[v2.0 - Canary 1]\n    LB -->|5%| V2B[v2.0 - Canary 2]\n    V2A & V2B -->|Monitor| D{Decision}\n    D -->|Pass| Scale[Scale to 100%]\n    D -->|Fail| Rollback[Rollback to v1.0]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " Reduced blast radius, real traffic testing, metrics-driven promotion.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Slower rollout, requires sophisticated traffic routing, monitoring overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rolling Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Initial:    [v1] [v1] [v1] [v1] [v1]\nStep 1:     [v2] [v1] [v1] [v1] [v1]   (1 new, 4 old)\nStep 2:     [v2] [v2] [v1] [v1] [v1]   (2 new, 3 old)\nStep 3:     [v2] [v2] [v2] [v1] [v1]   (3 new, 2 old)\nStep 4:     [v2] [v2] [v2] [v2] [v1]   (4 new, 1 old)\nStep 5:     [v2] [v2] [v2] [v2] [v2]   (5 new, 0 old)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " No additional infrastructure, standard Kubernetes strategy, progressive.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      }), " Slower rollback, exposes multiple versions simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-flags",
      children: "Feature Flags"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feature flags decouple deployment from release. Code can be deployed to production but remain inactive until the flag is toggled:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FeatureFlagService {\n  private flags: Map<string, boolean> = new Map();\n\n  constructor() {\n    this.flags.set('new-checkout-flow', false);\n    this.flags.set('dark-mode', true);\n    this.flags.set('ai-recommendations', false);\n  }\n\n  isEnabled(flag: string, userContext?: { id: string; tier: string }): boolean {\n    // Global flag\n    if (this.flags.has(flag)) return this.flags.get(flag)!;\n\n    // User-targeted rollout\n    if (userContext && flag === 'new-checkout-flow') {\n      return this.targetedRollout(userContext.id, 25); // 25% rollout\n    }\n\n    return false;\n  }\n\n  private targetedRollout(userId: string, percentage: number): boolean {\n    // Consistent hashing for stable flags\n    const hash = this.hashCode(userId) % 100;\n    return hash < percentage;\n  }\n\n  private hashCode(str: string): number {\n    let hash = 0;\n    for (let i = 0; i < str.length; i++) {\n      hash = ((hash << 5) - hash) + str.charCodeAt(i);\n    }\n    return Math.abs(hash);\n  }\n}\n\nconst features = new FeatureFlagService();\nconsole.log('Dark mode enabled:', features.isEnabled('dark-mode'));\nconsole.log('New checkout for user_42:', features.isEnabled('new-checkout-flow', { id: 'user_42', tier: 'beta' }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Feature flag categories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release toggles:"
        }), " Control new feature rollout"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Experiment toggles:"
        }), " A/B testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ops toggles:"
        }), " Kill switches for production issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission toggles:"
        }), " Tier-based feature access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "environment-promotion",
      children: "Environment Promotion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Developer] --> B[Feature Branch]\n    B --> C[CI Build]\n    C --> D[Dev Environment]\n    D --> E[Integration Tests]\n    E --> F[Staging Environment]\n    F --> G[Staging Tests]\n    G --> H[Approval]\n    H --> I[Production]\n    I --> J[Post-Deploy Verification]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promotion criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All CI checks pass (lint, type check, unit tests)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration tests pass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security scan passes (no critical/high vulnerabilities)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance benchmarks meet thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual approval (for CD, not Continuous Deployment)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rollback-strategies",
      children: "Rollback Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic rollback triggers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health check failure after deploy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increased error rate (e.g., 5xx > 1%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increased latency (e.g., p99 > 500ms)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decreased throughput"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback mechanisms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redeploy previous version:"
        }), " Simplest, most reliable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git revert:"
        }), " Revert the commit and deploy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic switch:"
        }), " For blue-green, switch load balancer back"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature flag off:"
        }), " Disable the feature at runtime"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-pipeline-implementation",
      children: "Deployment Pipeline Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# deploy-pipeline.yaml\nstages:\n  - name: Build\n    steps:\n      - npm ci\n      - npm run build\n      - docker build -t myapp:$COMMIT_SHA .\n      - docker push myapp:$COMMIT_SHA\n\n  - name: Deploy to Dev\n    steps:\n      - kubectl set image deployment/myapp myapp=myapp:$COMMIT_SHA\n      - kubectl rollout status deployment/myapp\n\n  - name: Integration Tests\n    steps:\n      - npm run test:integration\n      - npm run test:e2e\n\n  - name: Deploy to Staging\n    environment: staging\n    approval: automatic\n    steps:\n      - kubectl set image deployment/myapp myapp=$COMMIT_SHA\n      - kubectl rollout status deployment/myapp\n      - verify-health\n\n  - name: Deploy to Production\n    environment: production\n    approval: manual\n    strategy: canary\n    steps:\n      - deploy-canary 10%\n      - verify-metrics\n      - scale-to-100%\n\n  - name: Smoke Tests\n    steps:\n      - verify-health\n      - verify-features\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-canary-deployment-controller",
      children: "Example 1: Canary Deployment Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CanaryConfig {\n  name: string;\n  namespace: string;\n  image: string;\n  stableReplicas: number;\n  canaryReplicas: number;\n  steps: CanaryStep[];\n  metrics: CanaryMetric[];\n}\n\ninterface CanaryStep {\n  weight: number;\n  pause: number; // seconds\n}\n\ninterface CanaryMetric {\n  name: string;\n  threshold: number;\n  query: string;\n}\n\nclass CanaryController {\n  private config: CanaryConfig;\n\n  constructor(config: CanaryConfig) {\n    this.config = config;\n  }\n\n  async execute(): Promise<boolean> {\n    console.log(`?? Starting canary deployment for ${this.config.name}\\n`);\n\n    // Deploy canary instances\n    await this.deployCanary();\n    console.log(`? Canary deployed: ${this.config.canaryReplicas} replicas\\n`);\n\n    // Progress through traffic weight steps\n    for (const step of this.config.steps) {\n      console.log(`Setting traffic weight to ${step.weight}%...`);\n      await this.updateTrafficWeight(step.weight);\n\n      console.log(`Waiting ${step.pause}s for metrics collection...`);\n      await this.sleep(step.pause * 1000);\n\n      // Check metrics\n      for (const metric of this.config.metrics) {\n        const passed = await this.checkMetric(metric);\n        if (!passed) {\n          console.log(`? Metric \"${metric.name}\" exceeded threshold (${metric.threshold})`);\n          await this.rollback();\n          return false;\n        }\n        console.log(`? ${metric.name}: within threshold`);\n      }\n    }\n\n    // Promote to full rollout\n    await this.promote();\n    console.log('?? Canary promotion complete');\n    return true;\n  }\n\n  private async deployCanary(): Promise<void> {\n    console.log('Creating canary instances...');\n  }\n\n  private async updateTrafficWeight(weight: number): Promise<void> {\n    console.log(`Traffic distribution: ${weight}% canary, ${100 - weight}% stable`);\n  }\n\n  private async checkMetric(metric: CanaryMetric): Promise<boolean> {\n    const currentValue = Math.random() * 5; // Simulated metric\n    console.log(`  Metric \"${metric.name}\": ${currentValue.toFixed(2)} (threshold: ${metric.threshold})`);\n    return currentValue <= metric.threshold;\n  }\n\n  private async promote(): Promise<void> {\n    console.log('Scaling canary to 100%...');\n    console.log('Removing stable instances...');\n    console.log('Canary promoted to stable.');\n  }\n\n  private async rollback(): Promise<void> {\n    console.log('??  Rolling back canary...');\n    console.log('Removing canary instances...');\n    console.log('Restoring full stable traffic.');\n  }\n\n  private sleep(ms: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n}\n\nconst controller = new CanaryController({\n  name: 'api-service',\n  namespace: 'production',\n  image: 'myapp:2.0.0',\n  stableReplicas: 10,\n  canaryReplicas: 2,\n  steps: [\n    { weight: 10, pause: 60 },\n    { weight: 25, pause: 120 },\n    { weight: 50, pause: 180 },\n    { weight: 75, pause: 120 },\n    { weight: 100, pause: 60 },\n  ],\n  metrics: [\n    { name: 'error_rate', threshold: 1.0, query: 'rate(http_requests_total{status=~\"5..\"}[5m])' },\n    { name: 'latency_p99', threshold: 500, query: 'histogram_quantile(0.99, ...)' },\n  ],\n});\n\ncontroller.execute();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-release-orchestrator",
      children: "Example 2: Release Orchestrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Release {\n  version: string;\n  artifact: string;\n  changelog: string[];\n  author: string;\n}\n\ninterface Environment {\n  name: string;\n  approvalRequired: boolean;\n  approvers: string[];\n  tests: string[];\n}\n\nclass ReleaseOrchestrator {\n  private releases: Release[] = [];\n  private currentRelease?: Release;\n\n  async promote(release: Release, from: string, to: string): Promise<boolean> {\n    console.log(`\\n?? Promoting ${release.version} from ${from} to ${to}`);\n    this.currentRelease = release;\n\n    const passed = await this.runEnvironmentTests(to);\n    if (!passed) {\n      console.log(`? Tests failed in ${to}, halting promotion`);\n      return false;\n    }\n\n    console.log(`? ${release.version} promoted to ${to}`);\n    return true;\n  }\n\n  private async runEnvironmentTests(env: string): Promise<boolean> {\n    const testSuites: Record<string, string[]> = {\n      dev: ['unit', 'lint', 'type-check'],\n      staging: ['integration', 'security-scan', 'performance'],\n      production: ['smoke', 'health-check'],\n    };\n\n    const tests = testSuites[env] || ['health-check'];\n    for (const test of tests) {\n      console.log(`  Running ${test}...`);\n      await this.sleep(500);\n    }\n    return true;\n  }\n\n  async rollback(environment: string, targetVersion: string): Promise<void> {\n    console.log(`\\n??  Rolling back ${environment} to ${targetVersion}`);\n    this.releases.push(this.currentRelease!);\n    console.log(`? Rollback complete`);\n  }\n\n  getReleaseHistory(): string {\n    let history = '# Release History\\n\\n';\n    this.releases.forEach((r, i) => {\n      history += `## ${r.version} (${r.author})\\n`;\n      r.changelog.forEach(c => history += `- ${c}\\n`);\n      history += '\\n';\n    });\n    return history;\n  }\n\n  private sleep(ms: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n}\n\nconst orchestrator = new ReleaseOrchestrator();\nconst release: Release = {\n  version: '2.1.0',\n  artifact: 'myapp:2.1.0',\n  changelog: ['feat: Add OAuth2 login', 'fix: Fix memory leak', 'chore: Update dependencies'],\n  author: 'dev-team',\n};\n\norchestrator.promote(release, 'dev', 'staging');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canary-release-manager",
      children: "Canary Release Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canary releases reduce deployment risk by gradually shifting traffic to new versions. The following implementation manages canary deployments with health checks and automated rollback."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CanaryConfig {\n  name: string;\n  initialTrafficPercent: number;\n  incrementPercent: number;\n  promotionIntervalMinutes: number;\n  maxErrorRate: number;\n  maxLatencyP99Ms: number;\n}\n\ninterface DeploymentMetrics {\n  errorRate: number;\n  latencyP99Ms: number;\n  requestCount: number;\n}\n\ninterface CanaryStatus {\n  stage: 'initial' | 'ramping' | 'full' | 'rolled-back';\n  currentTrafficPercent: number;\n  healthy: boolean;\n  reason?: string;\n}\n\nclass CanaryReleaseManager {\n  private config: CanaryConfig;\n  private status: CanaryStatus;\n\n  constructor(config: CanaryConfig) {\n    this.config = config;\n    this.status = { stage: 'initial', currentTrafficPercent: config.initialTrafficPercent, healthy: true };\n  }\n\n  promote(metrics: DeploymentMetrics): CanaryStatus {\n    if (metrics.errorRate > this.config.maxErrorRate) {\n      this.status = { stage: 'rolled-back', currentTrafficPercent: 0, healthy: false, reason: `Error rate ${(metrics.errorRate * 100).toFixed(1)}% exceeds ${(this.config.maxErrorRate * 100).toFixed(0)}%` };\n      return this.status;\n    }\n    if (metrics.latencyP99Ms > this.config.maxLatencyP99Ms) {\n      this.status = { stage: 'rolled-back', currentTrafficPercent: 0, healthy: false, reason: `P99 latency ${metrics.latencyP99Ms}ms exceeds ${this.config.maxLatencyP99Ms}ms` };\n      return this.status;\n    }\n\n    const nextTraffic = this.status.currentTrafficPercent + this.config.incrementPercent;\n    if (nextTraffic >= 100) {\n      this.status = { stage: 'full', currentTrafficPercent: 100, healthy: true };\n    } else {\n      this.status = { stage: 'ramping', currentTrafficPercent: nextTraffic, healthy: true };\n    }\n    return this.status;\n  }\n\n  getStatus(): CanaryStatus {\n    return this.status;\n  }\n}\n\nconst canary = new CanaryReleaseManager({ name: 'api-v2', initialTrafficPercent: 5, incrementPercent: 15, promotionIntervalMinutes: 5, maxErrorRate: 0.01, maxLatencyP99Ms: 500 });\nconst metricsHistory: DeploymentMetrics[] = [\n  { errorRate: 0.002, latencyP99Ms: 120, requestCount: 10000 },\n  { errorRate: 0.015, latencyP99Ms: 450, requestCount: 15000 },\n];\nfor (const m of metricsHistory) {\n  const status = canary.promote(m);\n  console.log(`Traffic: ${status.currentTrafficPercent}%, Stage: ${status.stage}, Healthy: ${status.healthy}${status.reason ? ', Reason: ' + status.reason : ''}`);\n  if (status.stage === 'rolled-back' || status.stage === 'full') break;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated canary management with health-based promotion and rollback enables safe, gradual deployments with minimal user impact."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rollback-orchestrator",
      children: "Rollback Orchestrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automated rollback is critical when deployments cause production issues. The following tool coordinates rollback decisions with impact assessment, service dependency analysis, and phased execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// rollback-orchestrator.ts\n// Coordinate multi-service rollbacks with dependency analysis\n\ninterface ServiceState {\n  name: string;\n  currentVersion: string;\n  previousVersion: string;\n  healthScore: number;\n  errorRate: number;\n  latencyP99: number;\n  dependencies: string[];\n  dependents: string[];\n}\n\ninterface RollbackTarget {\n  serviceName: string;\n  targetVersion: string;\n  estimatedImpact: 'none' | 'low' | 'medium' | 'high';\n  breakingChanges: string[];\n  requiresDataMigration: boolean;\n  estimatedDurationSec: number;\n}\n\ninterface RollbackPlan {\n  trigger: string;\n  timestamp: Date;\n  targets: RollbackTarget[];\n  executionOrder: string[];\n  coordinationNeeded: boolean;\n  estimatedTotalDurationSec: number;\n  riskScore: number;\n  approvalRequired: 'auto' | 'lead' | 'manager';\n}\n\nclass RollbackOrchestrator {\n  private services: Map<string, ServiceState> = new Map();\n\n  registerService(svc: ServiceState): void {\n    this.services.set(svc.name, svc);\n  }\n\n  assessRollback(failedService: string, failureReason: string): RollbackPlan {\n    const svc = this.services.get(failedService);\n    if (!svc) throw new Error(`Service ${failedService} not found`);\n    const targets: RollbackTarget[] = [];\n    const executionOrder: string[] = [];\n\n    const directTarget: RollbackTarget = {\n      serviceName: failedService, targetVersion: svc.previousVersion,\n      estimatedImpact: 'high', breakingChanges: ['API contract rollback'],\n      requiresDataMigration: false, estimatedDurationSec: 120,\n    };\n    targets.push(directTarget);\n    executionOrder.push(failedService);\n\n    for (const depName of svc.dependents) {\n      const dep = this.services.get(depName);\n      if (!dep) continue;\n      const depTarget: RollbackTarget = {\n        serviceName: depName, targetVersion: dep.previousVersion,\n        estimatedImpact: 'medium', breakingChanges: ['Dependency API rollback', 'Client compatibility'],\n        requiresDataMigration: false, estimatedDurationSec: 90,\n      };\n      targets.push(depTarget);\n      executionOrder.push(depName);\n    }\n\n    const totalDuration = targets.reduce((s, t) => s + t.estimatedDurationSec, 0);\n    const riskScore = targets.filter(t => t.estimatedImpact === 'high').length * 3 +\n                       targets.filter(t => t.estimatedImpact === 'medium').length * 2 +\n                       targets.filter(t => t.estimatedImpact === 'low').length;\n\n    let approvalRequired: RollbackPlan['approvalRequired'] = 'auto';\n    if (riskScore > 10) approvalRequired = 'manager';\n    else if (riskScore > 5) approvalRequired = 'lead';\n\n    return {\n      trigger: failureReason, timestamp: new Date(), targets,\n      executionOrder, coordinationNeeded: targets.length > 1,\n      estimatedTotalDurationSec: totalDuration, riskScore, approvalRequired,\n    };\n  }\n\n  executeRollback(plan: RollbackPlan, approved: boolean): { success: boolean; failures: string[]; durationMs: number } {\n    if (plan.approvalRequired !== 'auto' && !approved) {\n      return { success: false, failures: ['Approval required but not granted'], durationMs: 0 };\n    }\n\n    const failures: string[] = [];\n    const startTime = Date.now();\n\n    for (const target of plan.targets) {\n      const svc = this.services.get(target.serviceName);\n      if (!svc) { failures.push(`${target.serviceName}: not found`); continue; }\n\n      if (Math.random() < 0.95) {\n        svc.currentVersion = target.targetVersion;\n        svc.healthScore = 95 + Math.floor(Math.random() * 5);\n        svc.errorRate = 0.001 + Math.random() * 0.004;\n      } else {\n        failures.push(`${target.serviceName}: rollback failed - health check timeout`);\n      }\n    }\n\n    return { success: failures.length === 0, failures, durationMs: Date.now() - startTime };\n  }\n\n  generateRollbackReport(plan: RollbackPlan, result: { success: boolean; failures: string[]; durationMs: number }): string {\n    const lines = [\n      `Rollback Report - ${plan.timestamp.toISOString()}`,\n      `Trigger: ${plan.trigger}`,\n      `Result: ${result.success ? '? Successful' : '? Failed'}`,\n      `Duration: ${(result.durationMs / 1000).toFixed(1)}s`,\n      `Risk Score: ${plan.riskScore} (approval: ${plan.approvalRequired})`,\n      '',\n      'Services rolled back:',\n    ];\n    for (const target of plan.targets) {\n      lines.push(`  ${target.serviceName}: v${target.targetVersion} (${target.estimatedImpact} impact, ${target.estimatedDurationSec}s)`);\n      for (const bc of target.breakingChanges) lines.push(`    ? ${bc}`);\n    }\n    return lines.join('\\n');\n  }\n}\n\nconst orchestrator = new RollbackOrchestrator();\norchestrator.registerService({ name: 'api-gateway', currentVersion: '2.5.0', previousVersion: '2.4.0', healthScore: 100, errorRate: 0.001, latencyP99: 45, dependencies: ['user-service', 'payment-service'], dependents: ['web-ui', 'mobile-api'] });\norchestrator.registerService({ name: 'user-service', currentVersion: '3.1.0', previousVersion: '3.0.0', healthScore: 98, errorRate: 0.002, latencyP99: 32, dependencies: ['db-primary'], dependents: ['api-gateway'] });\n\nconst plan = orchestrator.assessRollback('api-gateway', 'Error rate spike to 12% after canary ramp to 30%');\nconsole.log(`Rollback plan: ${plan.targets.length} services, ${plan.estimatedTotalDurationSec}s estimated, approval: ${plan.approvalRequired}`);\n\nconst result = orchestrator.executeRollback(plan, true);\nconsole.log(orchestrator.generateRollbackReport(plan, result));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " An automated rollback orchestrator with dependency-aware planning, impact assessment, and approval gates enables safe recovery from failed deployments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use feature flags to decouple deploy from release."
        }), " Deploy often, release when ready."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement blue-green or canary for production."
        }), " Zero-downtime deployments reduce risk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate rollback triggers."
        }), " Health check failures should automatically revert."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Promote the same artifact."
        }), " Build once, deploy everywhere — no rebuilding."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor every deployment."
        }), " Error rates, latency, and throughput are key signals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep deployments small."
        }), " Smaller changes are easier to test and roll back."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What is the main advantage of blue-green deployment?"
      }), "**A)** Lower infrastructure cost", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Instant switchover and immediate rollback", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** No monitoring required", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Faster build times", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Instant switchover and immediate rollback</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What does a canary deployment do?"
        }), "**A)** Deploys all at once", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Gradually shifts traffic to the new version", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Deploys to a separate environment", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Uses feature flags", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Gradually shifts traffic to the new version</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: Feature flags decouple what two activities?"
          }), "**A)** Build and test", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Deploy and release", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Code and review", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Plan and execute", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Deploy and release</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is a valid automatic rollback trigger?"
            }), "**A)** Build takes too long", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Error rate exceeds 1% after deployment", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Developer pushes new code", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Approval is delayed", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Error rate exceeds 1% after deployment</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What does \"build once, deploy everywhere\" mean?"
              }), "**A)** The same build artifact is promoted through all environments", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Each environment builds its own version", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Use multiple CI servers", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Deploy to production directly from feature branches", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: A)** The same build artifact is promoted through all environments</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "typescript-canary-deployment-pipeline-controller",
                children: "TypeScript: Canary Deployment Pipeline Controller"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "TypeScript can orchestrate canary deployments with traffic shifting logic:"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "// canary-deployment.ts\n// Manages canary deployment with gradual traffic shifting\n\ninterface CanaryConfig {\n  serviceName: string;\n  namespace: string;\n  newVersion: string;\n  steps: number[];\n  observationPeriodMs: number;\n  errorRateThreshold: number;\n  healthEndpoint: string;\n}\n\nclass CanaryDeployer {\n  private currentStep = 0;\n\n  constructor(private config: CanaryConfig) {}\n\n  async deploy(): Promise<void> {\n    console.log(`Starting canary deployment of ${this.config.newVersion}`);\n\n    for (const weight of this.config.steps) {\n      this.currentStep = weight;\n      console.log(`Shifting ${weight}% traffic to new version`);\n      await this.updateTrafficWeight(weight);\n      await this.observe();\n\n      if (await this.detectIssues()) {\n        console.error('Canary failed, initiating rollback');\n        await this.rollback();\n        return;\n      }\n    }\n\n    console.log('Canary deployment completed successfully');\n  }\n\n  private async updateTrafficWeight(weight: number): Promise<void> {\n    // In Kubernetes, this would update a Service or VirtualService\n    console.log(`kubectl set weight --service=${this.config.serviceName} --new=${weight}%`);\n  }\n\n  private async observe(): Promise<void> {\n    await new Promise(resolve => setTimeout(resolve, this.config.observationPeriodMs));\n  }\n\n  private async detectIssues(): Promise<boolean> {\n    // Check health endpoint\n    try {\n      const response = await fetch(this.config.healthEndpoint);\n      const data = await response.json() as { errorRate: number };\n      return data.errorRate > this.config.errorRateThreshold;\n    } catch {\n      return true;\n    }\n  }\n\n  private async rollback(): Promise<void> {\n    await this.updateTrafficWeight(0);\n    console.log('Rolled back to previous version');\n  }\n}\n\n// Example: Deploy API service v2.1\nconst deployer = new CanaryDeployer({\n  serviceName: 'api-service',\n  namespace: 'production',\n  newVersion: 'v2.1',\n  steps: [5, 10, 25, 50, 75, 100],\n  observationPeriodMs: 300000, // 5 minutes per step\n  errorRateThreshold: 1, // rollback if error rate > 1%\n  healthEndpoint: 'http://api-service-canary/health',\n});\n\ndeployer.deploy().catch(console.error);\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mermaid-deployment-strategy-decision-tree",
                children: "Mermaid: Deployment Strategy Decision Tree"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "flowchart TD\n    A[Choose Deployment Strategy] --> B{System complexity?}\n    B -->|Single service| C[Rolling update]\n    B -->|Multiple services| D{Stateful components?}\n    D -->|Yes| E[Rolling with health checks]\n    D -->|No| F{Downtime tolerance?}\n    F -->|Zero downtime required| G{Traffic control available?}\n    G -->|Yes| H[Blue-green deployment]\n    G -->|No| I[Canary with LB weight]\n    F -->|Some downtime OK| J[Rolling update]\n    F -->|Maintenance window| K[Recreate strategy]\n\n    style H fill:#4CAF50,color:#fff\n    style I fill:#FF9800,color:#fff\n    style J fill:#2196F3,color:#fff\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mermaid-feature-flag-architecture",
                children: "Mermaid: Feature Flag Architecture"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-mermaid",
                  children: "flowchart LR\n    subgraph \"Application\"\n        APP[App Code] --> FLAG[Feature Flag SDK]\n        FLAG --> CODE1[Old Code Path]\n        FLAG --> CODE2[New Code Path]\n    end\n    subgraph \"Flag Management\"\n        UI[Dashboard UI] --> API[Flag API]\n        API --> DB[(Flag Config Store)]\n    end\n    subgraph \"Targeting Rules\"\n        DB --> R1[User % rollout]\n        DB --> R2[User ID ranges]\n        DB --> R3[Geo/region]\n        DB --> R4[Plan/account tier]\n    end\n    FLAG --> |Fetch rules| API\n    CODE2 --> |Canary metrics| MON[Monitoring]\n    MON --> |Auto-disable flag on error| API\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "deeper-explanation-canary-analysis-and-automation",
                children: "Deeper Explanation: Canary Analysis and Automation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Canary deployments require automated analysis to determine if the new version is safe:"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Statistical analysis techniques:"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Z-score comparison:"
                  }), " Compare canary error rate vs baseline. If z-score > 3, reject."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Mann-Whitney U test:"
                  }), " Non-parametric test comparing latency distributions. If p < 0.05, reject."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Confidence interval overlap:"
                  }), " If 95% CI of canary metrics does not overlap with baseline, reject."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Effect size (Cohen's d):"
                  }), " Even if statistically significant, is the difference practically significant?"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Automated canary analysis configuration:"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-typescript",
                  children: "interface CanaryAnalysisConfig {\n  metrics: string[];\n  analysisDurationMinutes: number;\n  comparisonMethod: 'zscore' | 'mannwhitney' | 'ci_overlap';\n  threshold: number;\n  minimumSampleSize: number;\n}\n\nconst analysisConfig: CanaryAnalysisConfig = {\n  metrics: ['error_rate', 'p99_latency', 'request_rate'],\n  analysisDurationMinutes: 15,\n  comparisonMethod: 'zscore',\n  threshold: 3.0,\n  minimumSampleSize: 100,\n};\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// continuous delivery\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'continuous delivery', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Continuous Delivery ensures every commit is potentially deployable through automated pipelines and testing."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Deployment strategies include blue-green (instant switch), canary (gradual rollout), and rolling (incremental replacement)."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Feature flags decouple deployment from release, enabling safe, gradual feature exposure."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Environment promotion moves artifacts through dev ? staging ? production with gates."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Automatic rollback triggers (error rate, latency, health checks) revert bad deployments."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "The same immutable artifact should be promoted through all environments."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Release governance includes approval gates, audit trails, and compliance checks."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between continuous delivery and continuous deployment?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does blue-green deployment achieve zero downtime?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What are the advantages of canary deployments over blue-green?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How do feature flags reduce deployment risk?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What metrics should trigger an automatic rollback?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a canary deployment pipeline that shifts traffic in 10% increments with 5-minute pauses."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement a feature flag system with targeted rollout based on user ID hashing."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create an environment promotion strategy for dev, staging, and production with gates."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a deployment script that automatically rolls back if the error rate exceeds 1%."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement the TypeScript canary deployer above. Extend it to support weighted traffic distribution using Kubernetes VirtualService or a service mesh (Istio/Linkerd)."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a release notes generator that parses conventional commits and produces markdown release notes grouped by type (feat, fix, breaking) with contributor attribution."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a deployment decision matrix similar to the decision tree above. For each of these scenarios, select the appropriate strategy and justify: (a) a database migration, (b) a frontend CSS change, (c) a payment service API change."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a complete release management system including: deployment pipeline with environment promotion (dev ? staging ? prod) with automated gates, canary deployment strategy with 5-step traffic shifting (10%, 25%, 50%, 75%, 100%) with 5-minute observation periods, rollback automation triggered by error rate > 1%, latency p99 > 500ms, or health check failure, feature flag management with gradual rollout and kill switches, automated release notes generated from conventional commits, and a deployment dashboard showing current versions per environment, deployment history, and rollback status."
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