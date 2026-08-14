"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3009],{

/***/ 8751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_07_kubernetes_md_526_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-07-kubernetes-md-526.json
const site_docs_courses_devops_07_kubernetes_md_526_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/07-kubernetes","title":"Chapter 7: Kubernetes","description":"Prev: Infrastructure as Code","source":"@site/docs/courses/devops/07-kubernetes.md","sourceDirName":"courses/devops","slug":"/devops/07-kubernetes","permalink":"/ai-engineering-journey/devops/07-kubernetes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"07-kubernetes","slug":"/devops/07-kubernetes","title":"Chapter 7: Kubernetes","sidebar_label":"Chapter 7: Kubernetes","sidebar_position":13},"sidebar":"course-devops","previous":{"title":"Chapter 7: Infrastructure as Code","permalink":"/ai-engineering-journey/devops/07-infrastructure-as-code"},"next":{"title":"Chapter 8: Configuration Management","permalink":"/ai-engineering-journey/devops/08-configuration-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/07-kubernetes.md


const frontMatter = {
	id: '07-kubernetes',
	slug: '/devops/07-kubernetes',
	title: 'Chapter 7: Kubernetes',
	sidebar_label: 'Chapter 7: Kubernetes',
	sidebar_position: 13
};
const contentTitle = 'Chapter 7: Kubernetes';

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
  "value": "Kubernetes Architecture",
  "id": "kubernetes-architecture",
  "level": 3
}, {
  "value": "Pods",
  "id": "pods",
  "level": 3
}, {
  "value": "Deployments",
  "id": "deployments",
  "level": 3
}, {
  "value": "Services",
  "id": "services",
  "level": 3
}, {
  "value": "Ingress",
  "id": "ingress",
  "level": 3
}, {
  "value": "ConfigMaps and Secrets",
  "id": "configmaps-and-secrets",
  "level": 3
}, {
  "value": "Storage",
  "id": "storage",
  "level": 3
}, {
  "value": "Autoscaling",
  "id": "autoscaling",
  "level": 3
}, {
  "value": "kubectl Cheatsheet",
  "id": "kubectl-cheatsheet",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Complete Application Deployment",
  "id": "example-1-complete-application-deployment",
  "level": 3
}, {
  "value": "Example 2: Kubernetes Resource Checker",
  "id": "example-2-kubernetes-resource-checker",
  "level": 3
}, {
  "value": "Pod Scheduling Simulator",
  "id": "pod-scheduling-simulator",
  "level": 3
}, {
  "value": "Kubernetes Manifest Generator and Validator",
  "id": "kubernetes-manifest-generator-and-validator",
  "level": 3
}, {
  "value": "Pod Disruption Budget Analyzer",
  "id": "pod-disruption-budget-analyzer",
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
  "value": "Resource Quotas and Limit Ranges",
  "id": "resource-quotas-and-limit-ranges",
  "level": 3
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
        id: "chapter-7-kubernetes",
        children: "Chapter 7: Kubernetes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/07-infrastructure-as-code",
          children: "Infrastructure as Code"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/08-configuration-management",
          children: "Configuration Management"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Kubernetes architecture (control plane, nodes, pods)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master Kubernetes primitives: Pods, Deployments, Services, ConfigMaps, Secrets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure networking, storage, and ingress for applications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement health checks, resource management, and autoscaling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage configuration and secrets securely."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy and manage applications using kubectl."
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
        href: "../../assets/images/lessons/devops/07-kubernetes/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/07-kubernetes/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/07-kubernetes/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/07-kubernetes/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/07-kubernetes/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/07-kubernetes/visual-explanation.png",
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
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control plane + worker nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master manages state; nodes run workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest deployable unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One or more containers sharing network/storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative pod management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drives rolling updates and self-healing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable network endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load balances across pods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ConfigMaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration decoupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inject config without rebuilding images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive data storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base64 encoded, encrypted at rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ingress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External HTTP routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path and host-based routing with TLS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent volumes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PVC abstracts storage provisioning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Control Plane\"\n        A[API Server]\n        B[Scheduler]\n        C[Controller Manager]\n        D[etcd]\n    end\n    subgraph \"Worker Node 1\"\n        E[Kubelet]\n        F[Kube-Proxy]\n        G[Container Runtime]\n        H[Pod 1]\n        I[Pod 2]\n    end\n    subgraph \"Worker Node 2\"\n        J[Kubelet]\n        K[Kube-Proxy]\n        L[Container Runtime]\n        M[Pod 3]\n        N[Pod 4]\n    end\n    A --> E\n    A --> J\n    E --> G\n    J --> L\n    B --> E\n    B --> J\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kubernetes-architecture",
      children: "Kubernetes Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Control Plane (Master):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API Server (kube-apiserver):"
        }), " Front-end to the control plane. Exposes the Kubernetes API. All communication (kubectl, SDKs, internal components) goes through the API server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "etcd:"
        }), " Distributed key-value store. The single source of truth for cluster state. Stores all configuration, state, and metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduler (kube-scheduler):"
        }), " Watches for unscheduled pods and assigns them to nodes based on resource requirements, constraints, affinity rules, and data locality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Controller Manager (kube-controller-manager):"
        }), " Runs controller processes (Node Controller, Replication Controller, Endpoints Controller, Service Account Controller). Each controller watches the API server for desired state and drives current state towards it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Nodes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kubelet:"
        }), " Agent running on each node. Ensures containers are running in a pod (health, liveness)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kube-Proxy:"
        }), " Network proxy. Maintains network rules for service traffic routing (iptables, IPVS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Container Runtime:"
        }), " Runs containers (containerd, CRI-O, Docker)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pods",
      children: "Pods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A pod is the smallest and simplest Kubernetes object. It represents a single instance of a running process."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp-pod\n  labels:\n    app: myapp\n    tier: frontend\nspec:\n  containers:\n    - name: myapp-container\n      image: nginx:1.25\n      ports:\n        - containerPort: 80\n      resources:\n        requests:\n          cpu: \"250m\"\n          memory: \"128Mi\"\n        limits:\n          cpu: \"500m\"\n          memory: \"256Mi\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-container pods (sidecar pattern):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spec:\n  containers:\n    - name: app\n      image: myapp:latest\n    - name: sidecar\n      image: fluentd:latest  # Log forwarding\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployments",
      children: "Deployments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Deployment provides declarative updates for Pods and ReplicaSets."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: myapp\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n        - name: myapp\n          image: myapp:1.0.0\n          ports:\n            - containerPort: 3000\n          readinessProbe:\n            httpGet:\n              path: /health\n              port: 3000\n            initialDelaySeconds: 5\n            periodSeconds: 10\n          livenessProbe:\n            httpGet:\n              path: /health\n              port: 3000\n            initialDelaySeconds: 15\n            periodSeconds: 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "services",
      children: "Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Service exposes a set of pods as a network service:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: myapp-service\nspec:\n  selector:\n    app: myapp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 3000\n  type: ClusterIP  # Default: internal cluster access\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ClusterIP:"
        }), " Internal IP (default). Reachable only within the cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NodePort:"
        }), " Exposes on each node's IP at a static port (30000-32767)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LoadBalancer:"
        }), " Creates an external cloud load balancer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ExternalName:"
        }), " Returns a CNAME record."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ingress",
      children: "Ingress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ingress manages external HTTP/HTTPS access to services:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: myapp-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\nspec:\n  ingressClassName: nginx\n  tls:\n    - hosts:\n        - myapp.example.com\n      secretName: myapp-tls\n  rules:\n    - host: myapp.example.com\n      http:\n        paths:\n          - path: /api\n            pathType: Prefix\n            backend:\n              service:\n                name: api-service\n                port:\n                  number: 80\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: web-service\n                port:\n                  number: 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configmaps-and-secrets",
      children: "ConfigMaps and Secrets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ConfigMap:"
      }), " Non-confidential configuration data:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  NODE_ENV: production\n  API_URL: http://api.default.svc.cluster.local\n  app.yaml: |\n    key: value\n    nested:\n      setting: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secret:"
      }), " Confidential data (base64 encoded, encrypted at rest):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Secret\nmetadata:\n  name: app-secrets\ntype: Opaque\ndata:\n  DB_PASSWORD: cGFzc3dvcmQxMjM=  # base64 of \"password123\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "storage",
      children: "Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PersistentVolume (PV):"
      }), " Cluster storage resource provisioned by an administrator.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PersistentVolumeClaim (PVC):"
      }), " Request for storage by a user."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: data-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi\n  storageClassName: standard\n\n# Pod using the PVC\nspec:\n  containers:\n    - name: app\n      image: myapp\n      volumeMounts:\n        - name: data\n          mountPath: /app/data\n  volumes:\n    - name: data\n      persistentVolumeClaim:\n        claimName: data-pvc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autoscaling",
      children: "Autoscaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Horizontal Pod Autoscaler (HPA):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: myapp-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: myapp\n  minReplicas: 3\n  maxReplicas: 20\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          averageUtilization: 70\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kubectl-cheatsheet",
      children: "kubectl Cheatsheet"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "kubectl get pods                          # List pods\nkubectl get deployments                   # List deployments\nkubectl get services                      # List services\nkubectl get nodes                         # List nodes\nkubectl logs -f pod-name                  # Follow pod logs\nkubectl exec -it pod-name -- sh           # Shell into pod\nkubectl apply -f deployment.yaml          # Create/update resource\nkubectl delete -f deployment.yaml         # Delete resource\nkubectl describe pod pod-name             # Detailed pod info\nkubectl port-forward pod-name 8080:80     # Forward port to local\nkubectl top pods                          # Pod resource usage\nkubectl get events --sort-by='.lastTimestamp'  # Recent events\nkubectl rollout status deployment/myapp   # Check rollout status\nkubectl rollout undo deployment/myapp     # Rollback deployment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-complete-application-deployment",
      children: "Example 1: Complete Application Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface K8sResource {\n  apiVersion: string;\n  kind: string;\n  metadata: { name: string; labels?: Record<string, string> };\n  spec: any;\n}\n\nclass KubernetesDeploymentGenerator {\n  generate(namespace: string, app: string, image: string, replicas: number): K8sResource[] {\n    return [\n      this.generateNamespace(namespace),\n      this.generateDeployment(app, namespace, image, replicas),\n      this.generateService(app, namespace),\n      this.generateConfigMap(app, namespace),\n      this.generateHPA(app, namespace),\n    ];\n  }\n\n  private generateNamespace(name: string): K8sResource {\n    return {\n      apiVersion: 'v1',\n      kind: 'Namespace',\n      metadata: { name, labels: { environment: name } },\n      spec: {},\n    };\n  }\n\n  private generateDeployment(app: string, ns: string, image: string, replicas: number): K8sResource {\n    return {\n      apiVersion: 'apps/v1',\n      kind: 'Deployment',\n      metadata: { name: app, namespace: ns, labels: { app } },\n      spec: {\n        replicas,\n        selector: { matchLabels: { app } },\n        strategy: {\n          type: 'RollingUpdate',\n          rollingUpdate: { maxSurge: 1, maxUnavailable: 0 },\n        },\n        template: {\n          metadata: { labels: { app } },\n          spec: {\n            containers: [{\n              name: app,\n              image,\n              ports: [{ containerPort: 3000 }],\n              resources: {\n                requests: { cpu: '250m', memory: '256Mi' },\n                limits: { cpu: '500m', memory: '512Mi' },\n              },\n              envFrom: [\n                { configMapRef: { name: `${app}-config` } },\n              ],\n              readinessProbe: {\n                httpGet: { path: '/health', port: 3000 },\n                initialDelaySeconds: 5,\n                periodSeconds: 10,\n              },\n              livenessProbe: {\n                httpGet: { path: '/health', port: 3000 },\n                initialDelaySeconds: 15,\n                periodSeconds: 20,\n              },\n            }],\n          },\n        },\n      },\n    };\n  }\n\n  private generateService(app: string, ns: string): K8sResource {\n    return {\n      apiVersion: 'v1',\n      kind: 'Service',\n      metadata: { name: app, namespace: ns },\n      spec: {\n        selector: { app },\n        ports: [{ protocol: 'TCP', port: 80, targetPort: 3000 }],\n        type: 'ClusterIP',\n      },\n    };\n  }\n\n  private generateConfigMap(app: string, ns: string): K8sResource {\n    return {\n      apiVersion: 'v1',\n      kind: 'ConfigMap',\n      metadata: { name: `${app}-config`, namespace: ns },\n      data: {\n        NODE_ENV: ns,\n        LOG_LEVEL: ns === 'production' ? 'info' : 'debug',\n      },\n    };\n  }\n\n  private generateHPA(app: string, ns: string): K8sResource {\n    return {\n      apiVersion: 'autoscaling/v2',\n      kind: 'HorizontalPodAutoscaler',\n      metadata: { name: app, namespace: ns },\n      spec: {\n        scaleTargetRef: { apiVersion: 'apps/v1', kind: 'Deployment', name: app },\n        minReplicas: 3,\n        maxReplicas: 20,\n        metrics: [{\n          type: 'Resource',\n          resource: { name: 'cpu', target: { type: 'Utilization', averageUtilization: 70 } },\n        }],\n      },\n    };\n  }\n\n  toYAML(resources: K8sResource[]): string {\n    return resources.map(r => JSON.stringify(r, null, 2)).join('\\n---\\n');\n  }\n}\n\nconst gen = new KubernetesDeploymentGenerator();\nconst resources = gen.generate('production', 'api-service', 'myapp:1.0.0', 5);\nconsole.log(gen.toYAML(resources));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-kubernetes-resource-checker",
      children: "Example 2: Kubernetes Resource Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ResourceStatus {\n  name: string;\n  kind: string;\n  namespace: string;\n  status: string;\n  ready: string;\n  restarts: number;\n  age: string;\n}\n\nclass ClusterHealthChecker {\n  private resources: ResourceStatus[] = [];\n\n  addResource(resource: ResourceStatus): void {\n    this.resources.push(resource);\n  }\n\n  checkHealth(): { healthy: boolean; issues: string[] } {\n    const issues: string[] = [];\n\n    for (const r of this.resources) {\n      if (r.status === 'CrashLoopBackOff') {\n        issues.push(`? ${r.kind}/${r.name} in CrashLoopBackOff (restarted ${r.restarts}x)`);\n      }\n      if (r.status === 'Pending') {\n        issues.push(`??  ${r.kind}/${r.name} is pending`);\n      }\n      if (r.status === 'ImagePullBackOff') {\n        issues.push(`? ${r.kind}/${r.name} ImagePullBackOff`);\n      }\n      if (r.restarts > 5) {\n        issues.push(`??  ${r.kind}/${r.name} has restarted ${r.restarts} times`);\n      }\n    }\n\n    return { healthy: issues.length === 0, issues };\n  }\n\n  generateSummary(): string {\n    const { healthy, issues } = this.checkHealth();\n\n    const byNamespace = this.resources.reduce((acc, r) => {\n      acc[r.namespace] = (acc[r.namespace] || 0) + 1;\n      return acc;\n    }, {} as Record<string, number>);\n\n    let report = '# Kubernetes Cluster Summary\\n\\n';\n    report += `## Overview\\n\\n`;\n    report += `- **Status:** ${healthy ? '? Healthy' : '? Issues detected'}\\n`;\n    report += `- **Total resources:** ${this.resources.length}\\n`;\n    report += `- **Namespaces:** ${Object.keys(byNamespace).length}\\n\\n`;\n\n    report += `## Resources by Namespace\\n\\n`;\n    for (const [ns, count] of Object.entries(byNamespace)) {\n      report += `- ${ns}: ${count} resources\\n`;\n    }\n\n    if (issues.length > 0) {\n      report += `\\n## Issues\\n\\n`;\n      issues.forEach(i => report += `${i}\\n`);\n    }\n\n    return report;\n  }\n}\n\nconst checker = new ClusterHealthChecker();\nchecker.addResource({ name: 'api', kind: 'Deployment', namespace: 'prod', status: 'Running', ready: '3/3', restarts: 0, age: '7d' });\nchecker.addResource({ name: 'web', kind: 'Deployment', namespace: 'prod', status: 'Running', ready: '2/2', restarts: 0, age: '7d' });\nchecker.addResource({ name: 'cache', kind: 'Pod', namespace: 'prod', status: 'CrashLoopBackOff', ready: '0/1', restarts: 12, age: '2h' });\n\nconsole.log(checker.generateSummary());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pod-scheduling-simulator",
      children: "Pod Scheduling Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding pod scheduling decisions helps debug placement issues and optimize cluster utilization. The following simulator models the Kubernetes scheduling algorithm."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NodeResources {\n  name: string;\n  cpuCapacity: number; // millicores\n  memoryCapacity: number; // MiB\n  cpuAllocated: number;\n  memoryAllocated: number;\n  labels: Record<string, string>;\n  taints: Taint[];\n}\n\ninterface Taint {\n  key: string;\n  value: string;\n  effect: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute';\n}\n\ninterface PodSpec {\n  name: string;\n  cpuRequest: number;\n  memoryRequest: number;\n  nodeSelector?: Record<string, string>;\n  tolerations?: Taint[];\n  affinity?: Affinity;\n}\n\ninterface Affinity {\n  nodeSelectorTerms?: { matchExpressions: { key: string; operator: string; values: string[] }[] }[];\n}\n\ninterface SchedulingResult {\n  podName: string;\n  scheduled: boolean;\n  nodeName?: string;\n  reason?: string;\n}\n\nclass SchedulerSimulator {\n  schedule(pod: PodSpec, nodes: NodeResources[]): SchedulingResult {\n    const filtered = nodes.filter(node => {\n      if (pod.nodeSelector) {\n        for (const [k, v] of Object.entries(pod.nodeSelector)) {\n          if (node.labels[k] !== v) return false;\n        }\n      }\n      for (const taint of node.taints) {\n        if (taint.effect === 'NoSchedule') {\n          const tolerated = pod.tolerations?.some(t => t.key === taint.key && t.value === taint.value);\n          if (!tolerated) return false;\n        }\n      }\n      const cpuAvail = node.cpuCapacity - node.cpuAllocated;\n      const memAvail = node.memoryCapacity - node.memoryAllocated;\n      return cpuAvail >= pod.cpuRequest && memAvail >= pod.memoryRequest;\n    });\n\n    filtered.sort((a, b) => {\n      const scoreA = (a.cpuCapacity - a.cpuAllocated) / a.cpuCapacity + (a.memoryCapacity - a.memoryAllocated) / a.memoryCapacity;\n      const scoreB = (b.cpuCapacity - b.cpuAllocated) / b.cpuCapacity + (b.memoryCapacity - b.memoryAllocated) / b.memoryCapacity;\n      return scoreB - scoreA;\n    });\n\n    if (filtered.length === 0) {\n      return { podName: pod.name, scheduled: false, reason: 'No nodes match scheduling constraints' };\n    }\n\n    return { podName: pod.name, scheduled: true, nodeName: filtered[0].name };\n  }\n\n  simulateBatch(pods: PodSpec[], nodes: NodeResources[]): SchedulingResult[] {\n    const results: SchedulingResult[] = [];\n    const mutableNodes = nodes.map(n => ({ ...n }));\n    for (const pod of pods) {\n      const result = this.schedule(pod, mutableNodes);\n      if (result.scheduled && result.nodeName) {\n        const node = mutableNodes.find(n => n.name === result.nodeName)!;\n        node.cpuAllocated += pod.cpuRequest;\n        node.memoryAllocated += pod.memoryRequest;\n      }\n      results.push(result);\n    }\n    return results;\n  }\n}\n\nconst scheduler = new SchedulerSimulator();\nconst nodes: NodeResources[] = [\n  { name: 'node-1', cpuCapacity: 4000, memoryCapacity: 8192, cpuAllocated: 2000, memoryAllocated: 4096, labels: { 'disk': 'ssd' }, taints: [] },\n  { name: 'node-2', cpuCapacity: 4000, memoryCapacity: 8192, cpuAllocated: 3800, memoryAllocated: 7000, labels: { 'disk': 'hdd' }, taints: [{ key: 'gpu', value: 'true', effect: 'NoSchedule' }] },\n];\n\nconst pods: PodSpec[] = [\n  { name: 'web-app', cpuRequest: 500, memoryRequest: 1024, nodeSelector: { 'disk': 'ssd' } },\n  { name: 'batch-job', cpuRequest: 2000, memoryRequest: 4096 },\n  { name: 'gpu-worker', cpuRequest: 1000, memoryRequest: 2048, tolerations: [{ key: 'gpu', value: 'true', effect: 'NoSchedule' }] },\n];\n\nconsole.log(JSON.stringify(scheduler.simulateBatch(pods, nodes), null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Pod scheduling simulation helps predict deployment behavior, identify resource bottlenecks, and optimize node configurations before actual scheduling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kubernetes-manifest-generator-and-validator",
      children: "Kubernetes Manifest Generator and Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generating Kubernetes manifests programmatically ensures consistency, reduces YAML errors, and enables template reuse across environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// k8s-manifest-gen.ts\n// Generate and validate Kubernetes manifests\n\ninterface ContainerSpec {\n  name: string;\n  image: string;\n  ports: number[];\n  env: Record<string, string>;\n  resources: { requests: { cpu: string; memory: string }; limits: { cpu: string; memory: string } };\n  healthProbe?: { path: string; port: number; initialDelay: number; period: number };\n  volumeMounts?: { name: string; mountPath: string }[];\n}\n\ninterface DeploymentConfig {\n  name: string;\n  namespace: string;\n  replicas: number;\n  containers: ContainerSpec[];\n  volumes?: { name: string; configMap?: string; persistentVolumeClaim?: string }[];\n  labels: Record<string, string>;\n  strategy: 'rollingUpdate' | 'recreate';\n  maxSurge?: number;\n  maxUnavailable?: number;\n}\n\ninterface ServiceConfig {\n  name: string;\n  namespace: string;\n  type: 'ClusterIP' | 'NodePort' | 'LoadBalancer';\n  ports: { port: number; targetPort: number; name?: string }[];\n  selector: Record<string, string>;\n}\n\ninterface IngressConfig {\n  name: string;\n  namespace: string;\n  host: string;\n  tlsSecret?: string;\n  rules: { path: string; serviceName: string; servicePort: number }[];\n  annotations: Record<string, string>;\n}\n\nclass K8sManifestGenerator {\n  generateDeployment(config: DeploymentConfig): object {\n    return {\n      apiVersion: 'apps/v1',\n      kind: 'Deployment',\n      metadata: { name: config.name, namespace: config.namespace, labels: config.labels },\n      spec: {\n        replicas: config.replicas,\n        strategy: {\n          type: config.strategy,\n          rollingUpdate: config.strategy === 'rollingUpdate'\n            ? { maxSurge: config.maxSurge || 1, maxUnavailable: config.maxUnavailable || 0 }\n            : undefined,\n        },\n        selector: { matchLabels: config.labels },\n        template: {\n          metadata: { labels: config.labels },\n          spec: {\n            containers: config.containers.map(c => ({\n              name: c.name,\n              image: c.image,\n              ports: c.ports.map(p => ({ containerPort: p })),\n              env: Object.entries(c.env).map(([k, v]) => ({ name: k, value: v })),\n              resources: c.resources,\n              livenessProbe: c.healthProbe ? { httpGet: { path: c.healthProbe.path, port: c.healthProbe.port }, initialDelaySeconds: c.healthProbe.initialDelay, periodSeconds: c.healthProbe.period } : undefined,\n              readinessProbe: c.healthProbe ? { httpGet: { path: c.healthProbe.path, port: c.healthProbe.port }, initialDelaySeconds: c.healthProbe.initialDelay, periodSeconds: c.healthProbe.period } : undefined,\n              volumeMounts: c.volumeMounts,\n            })),\n            volumes: config.volumes?.map(v => ({\n              name: v.name,\n              configMap: v.configMap ? { name: v.configMap } : undefined,\n              persistentVolumeClaim: v.persistentVolumeClaim ? { claimName: v.persistentVolumeClaim } : undefined,\n            })),\n          },\n        },\n      },\n    };\n  }\n\n  generateService(config: ServiceConfig): object {\n    return {\n      apiVersion: 'v1', kind: 'Service',\n      metadata: { name: config.name, namespace: config.namespace },\n      spec: { type: config.type, ports: config.ports, selector: config.selector },\n    };\n  }\n\n  generateIngress(config: IngressConfig): object {\n    return {\n      apiVersion: 'networking.k8s.io/v1', kind: 'Ingress',\n      metadata: { name: config.name, namespace: config.namespace, annotations: config.annotations },\n      spec: {\n        tls: config.tlsSecret ? [{ hosts: [config.host], secretName: config.tlsSecret }] : undefined,\n        rules: [{ host: config.host, http: { paths: config.rules.map(r => ({ path: r.path, pathType: 'Prefix', backend: { service: { name: r.serviceName, port: { number: r.servicePort } } } })) } }],\n      },\n    };\n  }\n\n  validate(manifest: object): string[] {\n    const warnings: string[] = [];\n    const doc = manifest as Record<string, any>;\n    if (!doc.apiVersion) warnings.push('Missing apiVersion');\n    if (!doc.kind) warnings.push('Missing kind');\n    if (doc.kind === 'Deployment' || doc.kind === 'StatefulSet') {\n      const containers = doc.spec?.template?.spec?.containers || [];\n      containers.forEach((c: any, i: number) => {\n        if (!c.resources?.requests?.cpu) warnings.push(`Container ${c.name || i} missing CPU request`);\n        if (!c.resources?.limits?.cpu) warnings.push(`Container ${c.name || i} missing CPU limit`);\n        if (!c.livenessProbe) warnings.push(`Container ${c.name || i} missing liveness probe`);\n        if (!c.readinessProbe) warnings.push(`Container ${c.name || i} missing readiness probe`);\n      });\n    }\n    return warnings;\n  }\n}\n\nconst gen = new K8sManifestGenerator();\nconst deploy = gen.generateDeployment({\n  name: 'api-server', namespace: 'production', replicas: 3,\n  containers: [{ name: 'api', image: 'myapp/api:1.0.0', ports: [3000, 9090], env: { NODE_ENV: 'production', DB_URL: 'postgres://db:5432' }, resources: { requests: { cpu: '250m', memory: '256Mi' }, limits: { cpu: '500m', memory: '512Mi' } }, healthProbe: { path: '/health', port: 3000, initialDelay: 5, period: 10 } }],\n  labels: { app: 'api', tier: 'backend' }, strategy: 'rollingUpdate', maxSurge: 1, maxUnavailable: 0,\n});\n\nconst svc = gen.generateService({ name: 'api-service', namespace: 'production', type: 'ClusterIP', ports: [{ port: 80, targetPort: 3000 }], selector: { app: 'api' } });\nconst ingress = gen.generateIngress({ name: 'api-ingress', namespace: 'production', host: 'api.example.com', tlsSecret: 'api-tls', rules: [{ path: '/api', serviceName: 'api-service', servicePort: 80 }], annotations: { 'kubernetes.io/ingress.class': 'nginx' } });\n\nconsole.log('Deployment warnings:', gen.validate(deploy));\nconsole.log('Service:', JSON.stringify(svc, null, 2));\nconsole.log('Ingress:', JSON.stringify(ingress, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Programmatic manifest generation ensures consistent, best-practice-conforming Kubernetes resources with built-in validation for common configuration gaps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pod-disruption-budget-analyzer",
      children: "Pod Disruption Budget Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pod Disruption Budgets (PDBs) protect application availability during voluntary disruptions. The following tool analyzes PDB configurations, computes disruption tolerance, and validates migration safety."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// pdb-analyzer.ts\n// Analyze Pod Disruption Budget configurations\n\ninterface PDBConfig {\n  name: string;\n  namespace: string;\n  selector: Record<string, string>;\n  minAvailable?: number;\n  maxUnavailable?: number;\n}\n\ninterface PodDistribution {\n  nodeName: string;\n  zone: string;\n  phase: 'Running' | 'Pending';\n}\n\ninterface DisruptionAnalysis {\n  pdb: PDBConfig;\n  currentReplicas: number;\n  allowedDisruptions: number;\n  currentDisruptions: number;\n  disruptionBudget: number;\n  safeToDrain: boolean;\n  riskLevel: 'safe' | 'caution' | 'risky';\n  recommendations: string[];\n}\n\nclass PDBAnalyzer {\n  analyze(pdb: PDBConfig, pods: PodDistribution[]): DisruptionAnalysis {\n    const matchingPods = pods.filter(p => p.phase === 'Running');\n    const currentReplicas = matchingPods.length;\n    const minAvailable = pdb.minAvailable ?? (currentReplicas - (pdb.maxUnavailable || 1));\n    const maxUnavailable = pdb.maxUnavailable ?? (currentReplicas - (pdb.minAvailable || 1));\n\n    const allowedDisruptions = currentReplicas - minAvailable;\n    const currentDisruptions = 0; // baseline\n\n    const byNode = new Map<string, number>();\n    for (const pod of matchingPods) byNode.set(pod.nodeName, (byNode.get(pod.nodeName) || 0) + 1);\n    const podsOnSingleNode = [...byNode.entries()].filter(([, count]) => count > allowedDisruptions).length;\n\n    let riskLevel: 'safe' | 'caution' | 'risky';\n    let recommendations: string[] = [];\n\n    if (allowedDisruptions >= 2 || currentReplicas <= 2) {\n      riskLevel = 'safe';\n    } else if (allowedDisruptions === 1) {\n      riskLevel = 'caution';\n      recommendations.push('Only 1 pod can be disrupted at a time — rolling updates will be slow');\n      if (podsOnSingleNode > 0) recommendations.push(`${podsOnSingleNode} node(s) run more than allowed disruptions — consider pod anti-affinity`);\n    } else {\n      riskLevel = 'risky';\n      recommendations.push('Zero disruptions allowed — consider increasing minAvailable or adding replicas');\n    }\n\n    if (podsOnSingleNode > 0 && allowedDisruptions > 0) {\n      recommendations.push(`Spread pods across nodes — ${podsOnSingleNode} node(s) are single points of failure`);\n    }\n\n    return {\n      pdb, currentReplicas, currentDisruptions,\n      allowedDisruptions: Math.max(0, allowedDisruptions),\n      disruptionBudget: allowedDisruptions,\n      safeToDrain: allowedDisruptions > 0,\n      riskLevel, recommendations,\n    };\n  }\n\n  simulateDrain(analysis: DisruptionAnalysis, nodeName: string, podsOnNode: number): { canDrain: boolean; survivingReplicas: number; impact: string } {\n    const newDisrupted = podsOnNode;\n    const survivingReplicas = analysis.currentReplicas - newDisrupted;\n    const canDrain = survivingReplicas >= (analysis.pdb.minAvailable || 1);\n    return {\n      canDrain,\n      survivingReplicas,\n      impact: canDrain ? 'Safe to drain' : `Draining would reduce replicas below minAvailable (${analysis.pdb.minAvailable})`,\n    };\n  }\n\n  generateReport(analysis: DisruptionAnalysis): string {\n    return `## PDB Analysis: ${analysis.pdb.name}\\n\\n` +\n      `**Namespace:** ${analysis.pdb.namespace} | **Selector:** ${JSON.stringify(analysis.pdb.selector)}\\n` +\n      `**Current Replicas:** ${analysis.currentReplicas} | **Min Available:** ${analysis.pdb.minAvailable ?? 'auto'}\\n` +\n      `**Allowed Disruptions:** ${analysis.allowedDisruptions} | **Risk:** ${analysis.riskLevel}\\n` +\n      `**Safe to drain node?** ${analysis.safeToDrain ? '? Yes' : '? No'}\\n\\n` +\n      (analysis.recommendations.length > 0 ? '**Recommendations:**\\n' + analysis.recommendations.map(r => `- ${r}`).join('\\n') : '');\n  }\n}\n\nconst analyzer = new PDBAnalyzer();\nconst analysis = analyzer.analyze({ name: 'api-pdb', namespace: 'prod', selector: { app: 'api' }, minAvailable: 2 },\n  [\n    { nodeName: 'node-1', zone: 'us-east-1a', phase: 'Running' },\n    { nodeName: 'node-1', zone: 'us-east-1a', phase: 'Running' },\n    { nodeName: 'node-2', zone: 'us-east-1b', phase: 'Running' },\n    { nodeName: 'node-3', zone: 'us-east-1c', phase: 'Running' },\n  ],\n);\n\nconsole.log(analyzer.generateReport(analysis));\nconsole.log('Drain simulation:', analyzer.simulateDrain(analysis, 'node-1', 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " PDB analysis ensures application availability during node drains and rolling updates, identifies misconfigured disruption budgets, and validates migration safety."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use namespaces for environment isolation."
        }), " Separate dev, staging, prod with RBAC per namespace."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define resource requests and limits on every container."
        }), " Prevents noisy neighbor issues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always set health checks."
        }), " Readiness probes control traffic, liveness probes restart unhealthy pods."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Deployments, not bare Pods."
        }), " Deployments provide self-healing, scaling, and rolling updates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Store config in ConfigMaps, secrets in Secrets."
        }), " Never bake configuration into container images."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "kubectl apply"
          }), ", never ", (0,jsx_runtime.jsx)(_components.code, {
            children: "kubectl create"
          }), "."]
        }), " Apply enables declarative management."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: Which component stores the cluster state in Kubernetes?"
      }), "**A)** API Server", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Scheduler", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** etcd", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Controller Manager", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: C)** etcd</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What is the smallest deployable unit in Kubernetes?"
        }), "**A)** Container", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Pod", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Deployment", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Service", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Pod</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What does a readiness probe determine?"
          }), "**A)** Whether the pod should be restarted", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Whether the pod should receive traffic", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Whether the node is healthy", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Whether the image is available", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Whether the pod should receive traffic</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: Which Service type exposes a pod externally via a cloud load balancer?"
            }), "**A)** ClusterIP", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** NodePort", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** LoadBalancer", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** ExternalName", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: C)** LoadBalancer</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What is the purpose of a PersistentVolumeClaim?"
              }), "**A)** Claim a node for a pod", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Request storage resources from the cluster", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Claim an IP address", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Reserve CPU resources", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Request storage resources from the cluster</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// infrastructure as code\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'infrastructure as code', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Kubernetes architecture separates the control plane (API Server, etcd, Scheduler, Controller Manager) from worker nodes (Kubelet, Kube-Proxy, Container Runtime)."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Pods are the smallest deployable unit, containing one or more containers with shared networking and storage."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Deployments provide declarative pod management with rolling updates, self-healing, and scaling."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Services provide stable network endpoints with load balancing across pods."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "ConfigMaps and Secrets decouple configuration from container images."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Ingress controllers route external HTTP/HTTPS traffic to internal services."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Persistent Volumes and Claims provide storage abstraction."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "kubectl is the primary CLI for managing Kubernetes resources."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "resource-quotas-and-limit-ranges",
                children: "Resource Quotas and Limit Ranges"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Multi-tenant Kubernetes clusters require resource governance to prevent one team from starving others:"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "ResourceQuota:"
                }), " Enforces aggregate resource consumption per namespace:"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-yaml",
                  children: "apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: team-compute-quota\nspec:\n  hard:\n    requests.cpu: \"10\"\n    requests.memory: 20Gi\n    limits.cpu: \"20\"\n    limits.memory: 40Gi\n    persistentvolumeclaims: 5\n    pods: 20\n    services: 10\n"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "LimitRange:"
                }), " Sets default resource requests/limits per pod:"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-yaml",
                  children: "apiVersion: v1\nkind: LimitRange\nmetadata:\n  name: default-limits\nspec:\n  limits:\n    - default:\n        cpu: \"500m\"\n        memory: 512Mi\n      defaultRequest:\n        cpu: \"200m\"\n        memory: 256Mi\n      type: Container\n"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Admission controllers"
                }), " enforce these policies at pod creation time. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "kubectl describe quota"
                }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "kubectl describe limitrange"
                }), " verify active constraints."]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Describe the components of the Kubernetes control plane and their roles."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between a readiness probe and a liveness probe?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does a Service select which pods to route traffic to?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between a ConfigMap and a Secret?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does a HorizontalPodAutoscaler work?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a Kubernetes deployment manifest for a Node.js app with health checks and resource limits."
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Create a Service and Ingress configuration that routes ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "/api/*"
                  }), " to an API service and ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "/*"
                  }), " to a web service."]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure a ConfigMap and Secret for a multi-environment deployment."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement an HPA that scales based on CPU utilization between 3 and 20 replicas."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Design a complete Kubernetes deployment for a 5-service microservices application. Include: namespaces per environment, Deployments with rolling update strategies and health checks, Services (ClusterIP internal, LoadBalancer for web), Ingress with TLS and path-based routing, ConfigMaps and Secrets for configuration, HPA with CPU-based autoscaling, PersistentVolumeClaims for stateful services, and a ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "kubectl"
                  }), " deployment script that applies all resources in the correct order."]
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