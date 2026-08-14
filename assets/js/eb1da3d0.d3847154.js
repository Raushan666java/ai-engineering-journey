"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[25785],{

/***/ 56186
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_08_k_8_s_advanced_md_eb1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-08-k-8-s-advanced-md-eb1.json
const site_docs_courses_devops_08_k_8_s_advanced_md_eb1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/08-k8s-advanced","title":"Chapter 8: Advanced Kubernetes","description":"Prev: Configuration Management","source":"@site/docs/courses/devops/08-k8s-advanced.md","sourceDirName":"courses/devops","slug":"/devops/08-k8s-advanced","permalink":"/ai-engineering-journey/devops/08-k8s-advanced","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"08-k8s-advanced","slug":"/devops/08-k8s-advanced","title":"Chapter 8: Advanced Kubernetes","sidebar_label":"Chapter 8: Advanced Kubernetes","sidebar_position":15},"sidebar":"course-devops","previous":{"title":"Chapter 8: Configuration Management","permalink":"/ai-engineering-journey/devops/08-configuration-management"},"next":{"title":"Chapter 9: Continuous Delivery","permalink":"/ai-engineering-journey/devops/09-continuous-delivery"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/08-k8s-advanced.md


const frontMatter = {
	id: '08-k8s-advanced',
	slug: '/devops/08-k8s-advanced',
	title: 'Chapter 8: Advanced Kubernetes',
	sidebar_label: 'Chapter 8: Advanced Kubernetes',
	sidebar_position: 15
};
const contentTitle = 'Chapter 8: Advanced Kubernetes';

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
  "value": "RBAC (Role-Based Access Control)",
  "id": "rbac-role-based-access-control",
  "level": 3
}, {
  "value": "Network Policies",
  "id": "network-policies",
  "level": 3
}, {
  "value": "Custom Resource Definitions (CRDs)",
  "id": "custom-resource-definitions-crds",
  "level": 3
}, {
  "value": "Service Mesh",
  "id": "service-mesh",
  "level": 3
}, {
  "value": "Advanced Scheduling",
  "id": "advanced-scheduling",
  "level": 3
}, {
  "value": "GitOps with ArgoCD",
  "id": "gitops-with-argocd",
  "level": 3
}, {
  "value": "Cluster Autoscaler",
  "id": "cluster-autoscaler",
  "level": 3
}, {
  "value": "Vertical Pod Autoscaler (VPA)",
  "id": "vertical-pod-autoscaler-vpa",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: RBAC Configuration Generator",
  "id": "example-1-rbac-configuration-generator",
  "level": 3
}, {
  "value": "Example 2: Resource Optimizer",
  "id": "example-2-resource-optimizer",
  "level": 3
}, {
  "value": "Resource Quota Calculator",
  "id": "resource-quota-calculator",
  "level": 3
}, {
  "value": "Resource Quota Migrator",
  "id": "resource-quota-migrator",
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
        id: "chapter-8-advanced-kubernetes",
        children: "Chapter 8: Advanced Kubernetes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/08-configuration-management",
          children: "Configuration Management"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/09-continuous-delivery",
          children: "Continuous Delivery"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master advanced Kubernetes concepts: RBAC, Network Policies, Custom Resource Definitions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement service mesh (Istio/Linkerd) for traffic management and security."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure advanced scheduling: taints, tolerations, affinity, pod topology spread."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage cluster upgrades, backup, and disaster recovery."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement GitOps with ArgoCD for declarative deployments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize resource utilization with vertical pod autoscaling and cluster autoscaling."
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
        href: "../../assets/images/lessons/devops/08-k8s-advanced/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/08-k8s-advanced/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/08-k8s-advanced/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/08-k8s-advanced/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/08-k8s-advanced/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/08-k8s-advanced/visual-explanation.png",
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
            children: "RBAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role-based access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define least-privilege roles per namespace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default deny ingress, allow specific traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extend Kubernetes API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build custom controllers for domain-specific resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic management, security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Istio for observability, security, traffic control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pod placement control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taints repel, tolerations allow, affinity attracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative Git-driven operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArgoCD syncs cluster state to Git repository"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster Autoscaler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node-level scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale nodes when pods are pending"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical pod optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right-size container resource requests"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Advanced Kubernetes] --> B[RBAC]\n    A --> C[Network Policies]\n    A --> D[CRDs & Operators]\n    A --> E[Service Mesh]\n    A --> F[Advanced Scheduling]\n    A --> G[GitOps]\n    B --> H[Roles & ClusterRoles]\n    B --> I[RoleBindings]\n    C --> J[Pod Selectors]\n    C --> K[Ingress/Egress Rules]\n    D --> L[Custom Resources]\n    D --> M[Controllers]\n    E --> N[Istio]\n    E --> O[Linkerd]\n    G --> P[ArgoCD]\n    G --> Q[Flux]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rbac-role-based-access-control",
      children: "RBAC (Role-Based Access Control)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RBAC controls access to Kubernetes resources based on roles and bindings:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Namespace-scoped role\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: production\n  name: pod-reader\nrules:\n  - apiGroups: [\"\"]\n    resources: [\"pods\", \"pods/log\"]\n    verbs: [\"get\", \"watch\", \"list\"]\n---\n# Bind role to user/group\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  namespace: production\n  name: pod-reader-binding\nsubjects:\n  - kind: User\n    name: developer@example.com\n    apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster-scoped resources (ClusterRole, ClusterRoleBinding):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: cluster-admin-reader\nrules:\n  - apiGroups: [\"\"]\n    resources: [\"nodes\", \"namespaces\", \"persistentvolumes\"]\n    verbs: [\"get\", \"list\", \"watch\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RBAC best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use least privilege: grant only necessary verbs on specific resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer namespaced Roles over ClusterRoles when possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Groups instead of individual Users for easier management"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Regularly audit RBAC with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kubectl auth can-i --list"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-policies",
      children: "Network Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network Policies control traffic between pods and external endpoints:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: api-network-policy\n  namespace: production\nspec:\n  podSelector:\n    matchLabels:\n      app: api\n  policyTypes:\n    - Ingress\n    - Egress\n  ingress:\n    - from:\n        - podSelector:\n            matchLabels:\n              app: web\n        - namespaceSelector:\n            matchLabels:\n              purpose: monitoring\n      ports:\n        - protocol: TCP\n          port: 3000\n  egress:\n    - to:\n        - podSelector:\n            matchLabels:\n              app: database\n      ports:\n        - protocol: TCP\n          port: 5432\n    - to:\n        - ipBlock:\n            cidr: 0.0.0.0/0\n            except:\n              - 10.0.0.0/8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network policy patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default deny ingress:"
        }), " Block all incoming traffic, then allow specific"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default deny egress:"
        }), " Block all outgoing traffic, then allow specific"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolate environments:"
        }), " Prevent dev pods from accessing prod databases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allow monitoring:"
        }), " Let Prometheus scrape metrics from all namespaces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-resource-definitions-crds",
      children: "Custom Resource Definitions (CRDs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CRDs extend the Kubernetes API with custom resources:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: databases.example.com\nspec:\n  group: example.com\n  names:\n    kind: Database\n    singular: database\n    plural: databases\n    shortNames:\n      - db\n  scope: Namespaced\n  versions:\n    - name: v1\n      served: true\n      storage: true\n      schema:\n        openAPIV3Schema:\n          type: object\n          required: [\"spec\"]\n          properties:\n            spec:\n              type: object\n              required: [\"engine\", \"version\", \"size\"]\n              properties:\n                engine:\n                  type: string\n                  enum: [\"postgres\", \"mysql\"]\n                version:\n                  type: string\n                size:\n                  type: string\n                replicas:\n                  type: integer\n                  minimum: 1\n                  maximum: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operators:"
      }), " Controllers that watch CRDs and automate management:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prometheus Operator (manage monitoring stacks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL Operator (manage database clusters)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cert-Manager (automate TLS certificates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "External Secrets Operator (sync secrets from external providers)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-mesh",
      children: "Service Mesh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A service mesh provides a dedicated infrastructure layer for service-to-service communication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Service A\"\n        A[App] --- P1[sidecar-proxy]\n    end\n    subgraph \"Service B\"\n        B[App] --- P2[sidecar-proxy]\n    end\n    P1 -->|mTLS| P2\n    P1 --- CP[Control Plane]\n    P2 --- CP\n    CP --> CP1[Pilot]\n    CP --> CP2[Mixer]\n    CP --> CP3[Citadel]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Istio features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic management:"
        }), " Canary releases, traffic splitting, circuit breaking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " mTLS between services, fine-grained authorization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observability:"
        }), " Metrics, traces, access logs automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resilience:"
        }), " Retries, timeouts, circuit breakers, fault injection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: myapp\nspec:\n  hosts:\n    - myapp\n  http:\n    - match:\n        - headers:\n            version:\n              exact: v2\n      route:\n        - destination:\n            host: myapp\n            subset: v2\n          weight: 100\n    - route:\n        - destination:\n            host: myapp\n            subset: v1\n          weight: 90\n        - destination:\n            host: myapp\n            subset: v2\n          weight: 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-scheduling",
      children: "Advanced Scheduling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Taints and Tolerations:"
      }), " Control which pods can run on which nodes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Taint a node\nkubectl taint nodes node1 dedicated=gpu:NoSchedule\n\n# Pod toleration\nspec:\n  tolerations:\n    - key: \"dedicated\"\n      operator: \"Equal\"\n      value: \"gpu\"\n      effect: \"NoSchedule\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Affinity:"
      }), " Attract pods to specific nodes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n          - matchExpressions:\n              - key: topology.kubernetes.io/zone\n                operator: In\n                values:\n                  - us-east-1a\n      preferredDuringSchedulingIgnoredDuringExecution:\n        - weight: 100\n          preference:\n            matchExpressions:\n              - key: instance-type\n                operator: In\n                values:\n                  - m5.large\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pod Anti-Affinity:"
      }), " Spread pods across topology to avoid single points of failure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spec:\n  affinity:\n    podAntiAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n        - weight: 100\n          podAffinityTerm:\n            labelSelector:\n              matchLabels:\n                app: myapp\n            topologyKey: kubernetes.io/hostname\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pod Topology Spread Constraints:"
      }), " Evenly distribute pods across zones:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spec:\n  topologySpreadConstraints:\n    - maxSkew: 1\n      topologyKey: topology.kubernetes.io/zone\n      whenUnsatisfiable: DoNotSchedule\n      labelSelector:\n        matchLabels:\n          app: myapp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gitops-with-argocd",
      children: "GitOps with ArgoCD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GitOps uses Git as the single source of truth for declarative infrastructure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Git Repository] -->|ArgoCD Sync| B[Kubernetes Cluster]\n    C[Developer PR] --> A\n    B -->|Drift Detected| A\n    D[ArgoCD UI] --> B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ArgoCD Application:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: argocd\nspec:\n  project: default\n  source:\n    repoURL: https://github.com/org/myapp-config.git\n    targetRevision: HEAD\n    path: kubernetes/overlays/production\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: production\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true\n    syncOptions:\n      - CreateNamespace=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits of GitOps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declarative: desired state in Git, cluster converges to match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version controlled: full audit trail for every change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-healing: drift detection auto-corrects cluster state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pull-based: ArgoCD pulls from Git, no CI/CD credentials in cluster"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cluster-autoscaler",
      children: "Cluster Autoscaler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamically adjusts the number of nodes in the cluster:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# AWS EKS managed node group with autoscaling\napiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\nmetadata:\n  name: my-cluster\n  region: us-east-1\nmanagedNodeGroups:\n  - name: standard-workers\n    minSize: 2\n    maxSize: 20\n    desiredCapacity: 2\n    instanceType: m5.large\n    labels:\n      role: worker\n    tags:\n      Environment: production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vertical-pod-autoscaler-vpa",
      children: "Vertical Pod Autoscaler (VPA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recommends or automatically adjusts CPU/memory requests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: autoscaling.k8s.io/v1\nkind: VerticalPodAutoscaler\nmetadata:\n  name: myapp-vpa\nspec:\n  targetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: myapp\n  updatePolicy:\n    updateMode: Auto\n  resourcePolicy:\n    containerPolicies:\n      - containerName: '*'\n        minAllowed:\n          cpu: 100m\n          memory: 128Mi\n        maxAllowed:\n          cpu: 2\n          memory: 4Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-rbac-configuration-generator",
      children: "Example 1: RBAC Configuration Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RBACRole {\n  name: string;\n  namespace: string;\n  rules: Array<{ apiGroups: string[]; resources: string[]; verbs: string[] }>;\n}\n\ninterface RBACBinding {\n  name: string;\n  namespace: string;\n  role: string;\n  subjects: Array<{ kind: string; name: string }>;\n}\n\nclass RBACManager {\n  generateRole(role: RBACRole): string {\n    return `apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: ${role.namespace}\n  name: ${role.name}\nrules:\n${role.rules.map(r => `  - apiGroups: [${r.apiGroups.map(g => `\"${g}\"`).join(', ')}]\n    resources: [${r.resources.map(res => `\"${res}\"`).join(', ')}]\n    verbs: [${r.verbs.map(v => `\"${v}\"`).join(', ')}]`).join('\\n')}`;\n  }\n\n  generateBinding(binding: RBACBinding): string {\n    return `apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  namespace: ${binding.namespace}\n  name: ${binding.name}\nsubjects:\n${binding.subjects.map(s => `  - kind: ${s.kind}\n    name: ${s.name}\n    apiGroup: rbac.authorization.k8s.io`).join('\\n')}\nroleRef:\n  kind: Role\n  name: ${binding.role}\n  apiGroup: rbac.authorization.k8s.io`;\n  }\n\n  auditPermissions(allowedActions: string[][]): string[] {\n    const violations: string[] = [];\n    for (const action of allowedActions) {\n      // Check if any action violates the least privilege principle\n      if (action.includes('*') && action.length > 3) {\n        violations.push(`Wildcard verb in: ${action.join(' ')}`);\n      }\n    }\n    return violations;\n  }\n}\n\nconst rbac = new RBACManager();\nconsole.log(rbac.generateRole({\n  name: 'developer',\n  namespace: 'development',\n  rules: [\n    { apiGroups: [''], resources: ['pods', 'services', 'configmaps'], verbs: ['get', 'list', 'watch', 'create', 'update'] },\n    { apiGroups: ['apps'], resources: ['deployments'], verbs: ['get', 'list', 'watch'] },\n  ],\n}));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-resource-optimizer",
      children: "Example 2: Resource Optimizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PodResourceUsage {\n  name: string;\n  namespace: string;\n  cpuRequest: number;\n  cpuActual: number;\n  memoryRequest: number;\n  memoryActual: number;\n  cpuUtilization: number;\n  memoryUtilization: number;\n}\n\nclass ResourceOptimizer {\n  constructor(private pods: PodResourceUsage[]) {}\n\n  findOverprovisioned(threshold: number = 0.3): PodResourceUsage[] {\n    return this.pods.filter(p =>\n      p.cpuUtilization < threshold || p.memoryUtilization < threshold\n    );\n  }\n\n  findUnderprovisioned(cpuThreshold: number = 0.9, memThreshold: number = 0.9): PodResourceUsage[] {\n    return this.pods.filter(p =>\n      p.cpuUtilization > cpuThreshold || p.memoryUtilization > memThreshold\n    );\n  }\n\n  calculateSavings(): { totalRequested: number; totalActual: number; potentialSavings: number } {\n    const totalRequested = this.pods.reduce((s, p) => s + p.cpuRequest, 0);\n    const totalActual = this.pods.reduce((s, p) => s + p.cpuActual, 0);\n    return {\n      totalRequested,\n      totalActual,\n      potentialSavings: (totalRequested - totalActual) / totalRequested,\n    };\n  }\n\n  generateRightSizingRecommendations(): string {\n    let report = '# Resource Optimization Report\\n\\n';\n    const over = this.findOverprovisioned();\n\n    if (over.length === 0) {\n      report += '? No over-provisioned pods found\\n\\n';\n    } else {\n      report += `## Over-Provisioned Pods\\n\\n`;\n      report += '| Pod | Namespace | CPU Request | CPU Actual | Mem Request | Mem Actual\\n';\n      report += '|-----|-----------|------------|------------|-------------|----------|\\n';\n      for (const p of over) {\n        report += `| ${p.name} | ${p.namespace} | ${p.cpuRequest}m | ${p.cpuActual}m | ${p.memoryRequest}Mi | ${p.memoryActual}Mi\\n`;\n      }\n    }\n\n    const savings = this.calculateSavings();\n    report += `\\n## Potential Savings\\n\\n`;\n    report += `- Total CPU requested: ${savings.totalRequested}m\\n`;\n    report += `- Total CPU used: ${savings.totalActual}m\\n`;\n    report += `- Potential savings: ${(savings.potentialSavings * 100).toFixed(1)}%\\n`;\n\n    return report;\n  }\n}\n\nconst optimizer = new ResourceOptimizer([\n  { name: 'api-v1', namespace: 'prod', cpuRequest: 1000, cpuActual: 200, memoryRequest: 1024, memoryActual: 256, cpuUtilization: 0.2, memoryUtilization: 0.25 },\n  { name: 'web-v2', namespace: 'prod', cpuRequest: 500, cpuActual: 450, memoryRequest: 512, memoryActual: 480, cpuUtilization: 0.9, memoryUtilization: 0.94 },\n]);\n\nconsole.log(optimizer.generateRightSizingRecommendations());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-quota-calculator",
      children: "Resource Quota Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes resource quotas prevent resource starvation across namespaces. The following implementation calculates optimal resource allocations and validates quotas against actual usage."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ResourceQuota {\n  cpuRequest: string;\n  cpuLimit: string;\n  memoryRequest: string;\n  memoryLimit: string;\n  podCount: number;\n}\n\ninterface NamespaceResources {\n  name: string;\n  quota: ResourceQuota;\n  currentUsage: ResourceQuota;\n}\n\ninterface QuotaRecommendation {\n  namespace: string;\n  issues: string[];\n  recommendedQuota: ResourceQuota;\n}\n\nfunction parseCpu(cpu: string): number {\n  if (cpu.endsWith('m')) return parseInt(cpu) / 1000;\n  if (cpu.endsWith('n')) return parseInt(cpu) / 1_000_000_000;\n  return parseInt(cpu);\n}\n\nfunction parseMemory(mem: string): number {\n  if (mem.endsWith('Gi')) return parseInt(mem) * 1024 * 1024 * 1024;\n  if (mem.endsWith('Mi')) return parseInt(mem) * 1024 * 1024;\n  if (mem.endsWith('Ki')) return parseInt(mem) * 1024;\n  return parseInt(mem);\n}\n\nclass QuotaAnalyzer {\n  analyze(namespaces: NamespaceResources[]): QuotaRecommendation[] {\n    return namespaces.map(ns => {\n      const issues: string[] = [];\n      const usageCpu = parseCpu(ns.currentUsage.cpuRequest);\n      const quotaCpu = parseCpu(ns.quota.cpuRequest);\n      const usageMem = parseMemory(ns.currentUsage.memoryRequest);\n      const quotaMem = parseMemory(ns.quota.memoryRequest);\n\n      if (usageCpu / quotaCpu > 0.85) issues.push('CPU request usage exceeds 85%');\n      if (usageMem / quotaMem > 0.85) issues.push('Memory request usage exceeds 85%');\n\n      const recCpu = Math.round(usageCpu * 1.3 * 1000) + 'm';\n      const recMem = Math.round((usageMem * 1.3) / (1024 * 1024)) + 'Mi';\n\n      return {\n        namespace: ns.name,\n        issues,\n        recommendedQuota: {\n          cpuRequest: recCpu,\n          cpuLimit: Math.round(parseCpu(recCpu) * 2 * 1000) + 'm',\n          memoryRequest: recMem,\n          memoryLimit: Math.round(parseMemory(recMem) * 2 / (1024 * 1024)) + 'Mi',\n          podCount: Math.ceil(ns.currentUsage.podCount * 1.5),\n        },\n      };\n    });\n  }\n}\n\nconst analyzer = new QuotaAnalyzer();\nconst recommendations = analyzer.analyze([\n  {\n    name: 'production',\n    quota: { cpuRequest: '4000m', cpuLimit: '8000m', memoryRequest: '8Gi', memoryLimit: '16Gi', podCount: 20 },\n    currentUsage: { cpuRequest: '3600m', cpuLimit: '7200m', memoryRequest: '7.2Gi', memoryLimit: '14Gi', podCount: 18 },\n  },\n]);\n\nconsole.log(JSON.stringify(recommendations, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated quota analysis prevents resource contention in multi-tenant Kubernetes clusters by right-sizing limits based on actual consumption patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-quota-migrator",
      children: "Resource Quota Migrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Migrating resources between namespaces or clusters requires systematic quota translation and conflict detection. The following tool automates quota extraction, transformation, and validation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// quota-migrator.ts\n// Migrate Kubernetes resource quotas between namespaces\n\ninterface QuotaSpec {\n  namespace: string;\n  requests: { cpu: string; memory: string; storage?: string };\n  limits: { cpu: string; memory: string };\n  count: Record<string, string>;\n  scopes: string[];\n}\n\ninterface MigrationMapping {\n  sourceNamespace: string;\n  targetNamespace: string;\n  quotaTransforms: Array<{ field: string; operation: 'scale' | 'rename' | 'add' | 'remove'; value?: string; factor?: number }>;\n}\n\ninterface MigrationPlan {\n  sourceQuota: QuotaSpec;\n  targetQuota: QuotaSpec;\n  transforms: string[];\n  conflicts: string[];\n  warnings: string[];\n  estimatedResourceDelta: { cpuBefore: string; cpuAfter: string; memBefore: string; memAfter: string };\n}\n\ninterface MigrationResult {\n  plan: MigrationPlan;\n  applied: boolean;\n  timestamp: Date;\n  dryRun: boolean;\n}\n\nclass QuotaMigrator {\n  private appliedMigrations: MigrationResult[] = [];\n\n  planMigration(source: QuotaSpec, mapping: MigrationMapping): MigrationPlan {\n    const warnings: string[] = [];\n    const conflicts: string[] = [];\n\n    const target: QuotaSpec = { namespace: mapping.targetNamespace, requests: { ...source.requests }, limits: { ...source.limits }, count: { ...source.count }, scopes: [...source.scopes] };\n\n    for (const t of mapping.quotaTransforms) {\n      switch (t.operation) {\n        case 'scale': {\n          const factor = t.factor || 1;\n          const cpuMatch = target.requests.cpu.match(/(\\d+)([mMG]?)/);\n          if (cpuMatch) {\n            const val = parseInt(cpuMatch[1]) * factor;\n            target.requests.cpu = cpuMatch[2] === 'm' || cpuMatch[2] === '' ? `${val}m` : `${val}`;\n          }\n          const memMatch = target.requests.memory.match(/(\\d+)([MG]i?)/);\n          if (memMatch) {\n            const val = parseInt(memMatch[1]) * factor;\n            target.requests.memory = `${val}${memMatch[2]}`;\n          }\n          warnings.push(`Scaled resources by factor ${factor}`);\n          break;\n        }\n        case 'rename':\n          if (t.field === 'namespace') target.namespace = t.value || target.namespace;\n          break;\n        case 'add':\n          target.requests.cpu = this.addResource(target.requests.cpu, t.value || '0m');\n          break;\n        case 'remove':\n          target.scopes = target.scopes.filter(s => s !== t.value);\n          break;\n      }\n    }\n\n    if (target.namespace === source.namespace) warnings.push('Source and target namespaces are the same');\n    const deltaCpu = this.resourceDelta(target.requests.cpu, source.requests.cpu);\n    const deltaMem = this.resourceDelta(target.requests.memory, source.requests.memory);\n\n    return {\n      sourceQuota: source, targetQuota: target,\n      transforms: mapping.quotaTransforms.map(t => `${t.operation}:${t.field}`),\n      conflicts, warnings,\n      estimatedResourceDelta: { cpuBefore: source.requests.cpu, cpuAfter: target.requests.cpu, memBefore: source.requests.memory, memAfter: target.requests.memory },\n    };\n  }\n\n  applyMigration(plan: MigrationPlan, dryRun: boolean): MigrationResult {\n    const result: MigrationResult = { plan, applied: dryRun ? false : true, timestamp: new Date(), dryRun };\n    this.appliedMigrations.push(result);\n    return result;\n  }\n\n  rollbackLatest(): MigrationResult | null {\n    const last = this.appliedMigrations.pop();\n    return last || null;\n  }\n\n  getHistory(filter?: { namespace?: string; dryRun?: boolean }): MigrationResult[] {\n    return this.appliedMigrations.filter(m => {\n      if (filter?.namespace && m.plan.sourceQuota.namespace !== filter.namespace) return false;\n      if (filter?.dryRun !== undefined && m.dryRun !== filter.dryRun) return false;\n      return true;\n    });\n  }\n\n  private addResource(current: string, addition: string): string {\n    const currentVal = parseInt(current);\n    const addVal = parseInt(addition);\n    const unit = current.includes('m') ? 'm' : '';\n    return `${currentVal + addVal}${unit}`;\n  }\n\n  private resourceDelta(after: string, before: string): string {\n    const aVal = parseInt(after);\n    const bVal = parseInt(before);\n    const diff = aVal - bVal;\n    const sign = diff >= 0 ? '+' : '';\n    return `${sign}${diff}`;\n  }\n}\n\nconst migrator = new QuotaMigrator();\nconst source: QuotaSpec = { namespace: 'staging', requests: { cpu: '2000m', memory: '4Gi' }, limits: { cpu: '4000m', memory: '8Gi' }, count: { pods: '10' }, scopes: ['BestEffort', 'NotTerminating'] };\n\nconst mapping: MigrationMapping = {\n  sourceNamespace: 'staging', targetNamespace: 'production',\n  quotaTransforms: [\n    { field: 'namespace', operation: 'rename', value: 'production' },\n    { field: 'requests.cpu', operation: 'scale', factor: 2 },\n    { field: 'requests.memory', operation: 'scale', factor: 2 },\n  ],\n};\n\nconst plan = migrator.planMigration(source, mapping);\nconsole.log('Migration plan:', JSON.stringify(plan.estimatedResourceDelta, null, 2));\nconsole.log('Warnings:', plan.warnings.join(', '));\n\nconst result = migrator.applyMigration(plan, true);\nconsole.log(`Applied (dry-run: ${result.dryRun}): ${result.applied}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated quota migration with transform pipelines ensures accurate resource allocation when moving workloads between namespaces or clusters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RBAC: least privilege always."
        }), " Start with deny, grant specific access as needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network Policies: default deny."
        }), " Block all traffic, then explicitly allow required paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitOps: Git is the source of truth."
        }), " All changes to Kubernetes go through Git merges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use affinity rules to spread pods."
        }), " Anti-affinity prevents all replicas from running on one node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor resource utilization."
        }), " Use VPA recommendations to right-size requests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable HPA and Cluster Autoscaler together."
        }), " HPA adds pods, CA adds nodes for pending pods."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: What is the default behavior when a Network Policy selects a pod?"
      }), "**A)** All traffic is allowed", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** All traffic is denied except what the policy allows", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Only HTTP traffic is allowed", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Traffic is routed through a proxy", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** All traffic is denied except what the policy allows</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What is the purpose of a ClusterRole?"
        }), "**A)** Manage pods in a namespace", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Define permissions for cluster-scoped resources", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Create network policies", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Configure service meshes", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Define permissions for cluster-scoped resources</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What is GitOps?"
          }), "**A)** Using Git for source control", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Using Git as the single source of truth for cluster state", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Git-based CI/CD", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Git hooks for Kubernetes", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Using Git as the single source of truth for cluster state</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What does a pod anti-affinity rule prevent?"
            }), "**A)** Pods from running on the same node", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Pods from communicating with each other", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Pods from being deleted", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Pods from using too much CPU", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: A)** Pods from running on the same node</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What is the role of a service mesh sidecar proxy?"
              }), "**A)** Serve HTTP requests", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Handle inter-service communication with mTLS, routing, and observability", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Store application data", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Manage container images", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Handle inter-service communication with mTLS, routing, and observability</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// configuration management\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'configuration management', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "RBAC provides fine-grained access control through roles, bindings, and service accounts."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Network Policies implement micro-segmentation by controlling pod-to-pod traffic."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "CRDs extend the Kubernetes API for custom resources managed by operators."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Service meshes (Istio, Linkerd) add traffic management, security, and observability."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Advanced scheduling uses taints, tolerations, affinity, and topology spread constraints."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "GitOps with ArgoCD keeps cluster state synchronized with Git repositories."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Cluster Autoscaler dynamically adds/removes nodes; VPA adjusts resource requests."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Resource optimization reduces waste by right-sizing container requests."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does a Network Policy differ from a traditional firewall?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between a Role and a ClusterRole?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does GitOps ensure the cluster state matches the desired state in Git?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the purpose of pod topology spread constraints?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How do taints and tolerations work together?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create RBAC configuration for developers (read-only on pods and logs) and CI/CD system (full access to deployments in CI namespace)."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a Network Policy that allows the monitoring namespace to scrape metrics from all namespaces."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure a canary deployment using Istio VirtualService with 90/10 traffic split."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement a GitOps workflow with ArgoCD that auto-syncs a Kubernetes overlay directory."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a complete production-grade Kubernetes security and operations framework including: RBAC with least privilege roles for developers, operators, CI/CD, and auditors, Network Policies implementing default deny with explicit allow rules for each tier (web, api, db), a service mesh with mTLS and canary deployment support, multi-AZ pod distribution with topology spread constraints, GitOps setup with ArgoCD for declarative cluster management, Cluster Autoscaler and VPA for resource efficiency, and regular RBAC and security audits."
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