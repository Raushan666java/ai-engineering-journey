"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[72630],{

/***/ 22861
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_53_kubernetes_md_c6d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-53-kubernetes-md-c6d.json
const site_docs_courses_java_53_kubernetes_md_c6d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/53-kubernetes","title":"Kubernetes Deployment","description":"Previous CI/CD Pipelines","source":"@site/docs/courses/java/53-kubernetes.md","sourceDirName":"courses/java","slug":"/java/53-kubernetes","permalink":"/ai-engineering-journey/java/53-kubernetes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":53,"frontMatter":{"id":"53-kubernetes","slug":"/java/53-kubernetes","title":"Kubernetes Deployment","sidebar_label":"Kubernetes Deployment","sidebar_position":53},"sidebar":"course-java","previous":{"title":"Docker & Containerization","permalink":"/ai-engineering-journey/java/52-docker"},"next":{"title":"CI/CD for Spring Boot","permalink":"/ai-engineering-journey/java/54-cicd"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/53-kubernetes.md


const frontMatter = {
	id: '53-kubernetes',
	slug: '/java/53-kubernetes',
	title: 'Kubernetes Deployment',
	sidebar_label: 'Kubernetes Deployment',
	sidebar_position: 53
};
const contentTitle = 'Kubernetes Deployment';

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
  "value": "1. Kubernetes Architecture",
  "id": "1-kubernetes-architecture",
  "level": 2
}, {
  "value": "1.1 Core Components",
  "id": "11-core-components",
  "level": 3
}, {
  "value": "2. Pods",
  "id": "2-pods",
  "level": 2
}, {
  "value": "2.1 Single Container Pod",
  "id": "21-single-container-pod",
  "level": 3
}, {
  "value": "2.2 Multi-Container Pod",
  "id": "22-multi-container-pod",
  "level": 3
}, {
  "value": "2.3 Init Containers",
  "id": "23-init-containers",
  "level": 3
}, {
  "value": "2.4 Pod Lifecycle",
  "id": "24-pod-lifecycle",
  "level": 3
}, {
  "value": "2.5 Pod Lifecycle Hooks",
  "id": "25-pod-lifecycle-hooks",
  "level": 3
}, {
  "value": "2.6 Pod Resource Requests and Limits",
  "id": "26-pod-resource-requests-and-limits",
  "level": 3
}, {
  "value": "3. Services",
  "id": "3-services",
  "level": 2
}, {
  "value": "3.1 ClusterIP (Default → Internal Only)",
  "id": "31-clusterip-default--internal-only",
  "level": 3
}, {
  "value": "3.2 NodePort (External Access on Node IP)",
  "id": "32-nodeport-external-access-on-node-ip",
  "level": 3
}, {
  "value": "3.3 LoadBalancer (Cloud Provider LB)",
  "id": "33-loadbalancer-cloud-provider-lb",
  "level": 3
}, {
  "value": "3.4 Headless Service (For StatefulSets)",
  "id": "34-headless-service-for-statefulsets",
  "level": 3
}, {
  "value": "3.5 Ingress",
  "id": "35-ingress",
  "level": 3
}, {
  "value": "3.6 Service Discovery with DNS",
  "id": "36-service-discovery-with-dns",
  "level": 3
}, {
  "value": "4. ConfigMaps",
  "id": "4-configmaps",
  "level": 2
}, {
  "value": "4.1 Creating ConfigMaps",
  "id": "41-creating-configmaps",
  "level": 3
}, {
  "value": "4.2 ConfigMap as Environment Variables",
  "id": "42-configmap-as-environment-variables",
  "level": 3
}, {
  "value": "4.3 ConfigMap as Volume Mount",
  "id": "43-configmap-as-volume-mount",
  "level": 3
}, {
  "value": "4.4 Immutable ConfigMap",
  "id": "44-immutable-configmap",
  "level": 3
}, {
  "value": "4.5 Spring Boot Externalized Config with ConfigMap",
  "id": "45-spring-boot-externalized-config-with-configmap",
  "level": 3
}, {
  "value": "5. Secrets",
  "id": "5-secrets",
  "level": 2
}, {
  "value": "5.1 Opaque Secret",
  "id": "51-opaque-secret",
  "level": 3
}, {
  "value": "5.2 TLS Secret",
  "id": "52-tls-secret",
  "level": 3
}, {
  "value": "5.3 Registry Secret (Image Pull)",
  "id": "53-registry-secret-image-pull",
  "level": 3
}, {
  "value": "5.4 Secret as Environment Variables",
  "id": "54-secret-as-environment-variables",
  "level": 3
}, {
  "value": "5.5 Secret as Volume Mount",
  "id": "55-secret-as-volume-mount",
  "level": 3
}, {
  "value": "5.6 External Secrets Operator",
  "id": "56-external-secrets-operator",
  "level": 3
}, {
  "value": "6. Deployments",
  "id": "6-deployments",
  "level": 2
}, {
  "value": "6.1 Basic Deployment",
  "id": "61-basic-deployment",
  "level": 3
}, {
  "value": "6.2 Rolling Update Strategy",
  "id": "62-rolling-update-strategy",
  "level": 3
}, {
  "value": "6.3 Recreate Strategy (Downtime Tolerated)",
  "id": "63-recreate-strategy-downtime-tolerated",
  "level": 3
}, {
  "value": "6.4 Rollback",
  "id": "64-rollback",
  "level": 3
}, {
  "value": "6.5 Deployment Strategies Comparison",
  "id": "65-deployment-strategies-comparison",
  "level": 3
}, {
  "value": "7. Probes",
  "id": "7-probes",
  "level": 2
}, {
  "value": "7.1 Probe Types",
  "id": "71-probe-types",
  "level": 3
}, {
  "value": "7.2 Probe Handlers",
  "id": "72-probe-handlers",
  "level": 3
}, {
  "value": "7.3 Probe Configuration Parameters",
  "id": "73-probe-configuration-parameters",
  "level": 3
}, {
  "value": "7.4 Spring Boot Actuator Probe Integration",
  "id": "74-spring-boot-actuator-probe-integration",
  "level": 3
}, {
  "value": "7.5 Customizing Liveness and Readiness State",
  "id": "75-customizing-liveness-and-readiness-state",
  "level": 3
}, {
  "value": "8. Helm Charts",
  "id": "8-helm-charts",
  "level": 2
}, {
  "value": "8.1 Chart Structure",
  "id": "81-chart-structure",
  "level": 3
}, {
  "value": "8.2 Chart.yaml",
  "id": "82-chartyaml",
  "level": 3
}, {
  "value": "8.3 values.yaml",
  "id": "83-valuesyaml",
  "level": 3
}, {
  "value": "8.4 _helpers.tpl",
  "id": "84-_helperstpl",
  "level": 3
}, {
  "value": "8.5 templates/deployment.yaml",
  "id": "85-templatesdeploymentyaml",
  "level": 3
}, {
  "value": "8.6 templates/service.yaml",
  "id": "86-templatesserviceyaml",
  "level": 3
}, {
  "value": "8.7 Helm Hooks",
  "id": "87-helm-hooks",
  "level": 3
}, {
  "value": "8.8 Helm Conditions",
  "id": "88-helm-conditions",
  "level": 3
}, {
  "value": "8.9 Template Flow Control",
  "id": "89-template-flow-control",
  "level": 3
}, {
  "value": "8.10 Installation and Upgrade",
  "id": "810-installation-and-upgrade",
  "level": 3
}, {
  "value": "9. Spring Boot on Kubernetes",
  "id": "9-spring-boot-on-kubernetes",
  "level": 2
}, {
  "value": "9.1 Spring Boot Configuration for Kubernetes",
  "id": "91-spring-boot-configuration-for-kubernetes",
  "level": 3
}, {
  "value": "9.2 Kubernetes Native Service Discovery",
  "id": "92-kubernetes-native-service-discovery",
  "level": 3
}, {
  "value": "9.3 Kubernetes-Aware RestTemplate",
  "id": "93-kubernetes-aware-resttemplate",
  "level": 3
}, {
  "value": "9.4 Service Binding with Spring Cloud Bindings",
  "id": "94-service-binding-with-spring-cloud-bindings",
  "level": 3
}, {
  "value": "9.5 Kubernetes Health Probes Integration",
  "id": "95-kubernetes-health-probes-integration",
  "level": 3
}, {
  "value": "10. Auto-Scaling",
  "id": "10-auto-scaling",
  "level": 2
}, {
  "value": "10.1 HorizontalPodAutoscaler (HPA)",
  "id": "101-horizontalpodautoscaler-hpa",
  "level": 3
}, {
  "value": "10.2 VerticalPodAutoscaler (VPA)",
  "id": "102-verticalpodautoscaler-vpa",
  "level": 3
}, {
  "value": "10.3 Metrics-Based Scaling",
  "id": "103-metrics-based-scaling",
  "level": 3
}, {
  "value": "11. Cluster Setup Options",
  "id": "11-cluster-setup-options",
  "level": 2
}, {
  "value": "11.1 Minikube (Local Development)",
  "id": "111-minikube-local-development",
  "level": 3
}, {
  "value": "11.2 kind (Kubernetes IN Docker)",
  "id": "112-kind-kubernetes-in-docker",
  "level": 3
}, {
  "value": "11.3 Amazon EKS",
  "id": "113-amazon-eks",
  "level": 3
}, {
  "value": "11.4 Azure AKS",
  "id": "114-azure-aks",
  "level": 3
}, {
  "value": "11.5 GCP GKE",
  "id": "115-gcp-gke",
  "level": 3
}, {
  "value": "12. Complete Deployment Example",
  "id": "12-complete-deployment-example",
  "level": 2
}, {
  "value": "12.1 Full Namespace with Secret and ConfigMap",
  "id": "121-full-namespace-with-secret-and-configmap",
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
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
    hr: "hr",
    img: "img",
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
        id: "kubernetes-deployment",
        children: "Kubernetes Deployment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/52-docker",
          children: "Docker & Containerization"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/54-cicd",
          children: "CI/CD Pipelines"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-first approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid common pitfalls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Concepts] --> B[Setup/Configuration]\n    B --> C[Implementation]\n    C --> D[Testing]\n    D --> E[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Pods with multiple containers and init containers, and understand the pod lifecycle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure resource requests and limits for predictable performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expose applications using ClusterIP, NodePort, LoadBalancer, and Ingress resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage configuration with ConfigMaps and Secrets using env vars and volume mounts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Deployments with rolling update strategies, surge configurations, and revision limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement liveness, readiness, and startup probes integrated with Spring Boot Actuator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package applications with Helm charts including values, templates, helpers, hooks, and conditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Spring Boot applications to use Kubernetes-native service discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up HorizontalPodAutoscaler and VerticalPodAutoscaler for metric-based auto-scaling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand cluster setup options: Minikube, kind, EKS, AKS, and GKE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kubernetes-architecture",
      children: "1. Kubernetes Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Test with production-like configurations → dev setups often hide issues that surface under real load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Start simple. Add complexity only when proven necessary. Premature abstraction creates maintenance burden."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/53-kubernetes.png",
        alt: "Kubernetes Deployment - Pods, Services, Helm, HPA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────┐\n│                    Control Plane                      │\n│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │\n│  │  API     │  │ Scheduler│  │Controller│           │\n│  │  Server  │  │          │  │  Manager │           │\n│  └──────────┘  └──────────┘  └──────────┘           │\n│  ┌──────────┐  ┌─────────────────────────────────┐  │\n│  │   etcd   │  │        Cloud Controller          │  │\n│  └──────────┘  └─────────────────────────────────┘  │\n└─────────────────────────────────────────────────────┘\n         │\n         ▼\n┌─────────────────────────────────────────────────────┐\n│                    Worker Nodes                       │\n│  ┌──────────────────────┐  ┌──────────────────────┐  │\n│  │  Node 1              │  │  Node 2              │  │\n│  │  ┌────┐ ┌────┐ ┌───┐│  │  ┌────┐ ┌────┐ ┌───┐│  │\n│  │  │Pod │ │Pod │ │Pod││  │  │Pod │ │Pod │ │Pod││  │\n│  │  └────┘ └────┘ └───┘│  │  └────┘ └────┘ └───┘│  │\n│  │  ┌─────────────────┐ │  │  ┌─────────────────┐ │  │\n│  │  │   kubelet       │ │  │  │   kubelet       │ │  │\n│  │  └─────────────────┘ │  │  └─────────────────┘ │  │\n│  │  ┌─────────────────┐ │  │  ┌─────────────────┐ │  │\n│  │  │   kube-proxy    │ │  │  │   kube-proxy    │ │  │\n│  │  └─────────────────┘ │  │  └─────────────────┘ │  │\n│  └──────────────────────┘  └──────────────────────┘  │\n└─────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-core-components",
      children: "1.1 Core Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry point for all K8s operations (REST)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "etcd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed key-value store (cluster state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assigns Pods to Nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Controller Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs controllers (Deployment, ReplicaSet, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "kubelet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node agent that manages Pods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "kube-proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network proxy for Services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest deployable unit → one or more containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable network endpoint for a set of Pods"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-pods",
      children: "2. Pods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-single-container-pod",
      children: "2.1 Single Container Pod"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: spring-boot-pod\n  labels:\n    app: myapp\n    version: v1\n    environment: production\nspec:\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      ports:\n        - containerPort: 8080\n          name: http\n        - containerPort: 8081\n          name: actuator\n      env:\n        - name: SPRING_PROFILES_ACTIVE\n          value: \"k8s,production\"\n        - name: SPRING_DATASOURCE_URL\n          value: \"jdbc:postgresql://postgres-service:5432/myapp\"\n      resources:\n        requests:\n          memory: \"256Mi\"\n          cpu: \"250m\"\n        limits:\n          memory: \"512Mi\"\n          cpu: \"500m\"\n      livenessProbe:\n        httpGet:\n          path: /actuator/health/liveness\n          port: 8081\n        initialDelaySeconds: 30\n        periodSeconds: 10\n        timeoutSeconds: 3\n        failureThreshold: 3\n      readinessProbe:\n        httpGet:\n          path: /actuator/health/readiness\n          port: 8081\n        initialDelaySeconds: 20\n        periodSeconds: 5\n        timeoutSeconds: 3\n        successThreshold: 1\n      startupProbe:\n        httpGet:\n          path: /actuator/health/liveness\n          port: 8081\n        initialDelaySeconds: 0\n        periodSeconds: 5\n        failureThreshold: 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-multi-container-pod",
      children: "2.2 Multi-Container Pod"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: multi-container-pod\n  labels:\n    app: myapp-with-sidecar\nspec:\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      ports:\n        - containerPort: 8080\n      env:\n        - name: LOG_FILE\n          value: /var/log/myapp/app.log\n      volumeMounts:\n        - name: log-volume\n          mountPath: /var/log/myapp\n\n    - name: log-sidecar\n      image: busybox:1.36\n      command: [\"/bin/sh\"]\n      args:\n        - \"-c\"\n        - \"tail -f /var/log/myapp/app.log | nc logstash-service 5000\"\n      volumeMounts:\n        - name: log-volume\n          mountPath: /var/log/myapp\n\n  volumes:\n    - name: log-volume\n      emptyDir: {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-init-containers",
      children: "2.3 Init Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: app-with-init\n  labels:\n    app: myapp\nspec:\n  initContainers:\n    - name: wait-for-db\n      image: busybox:1.36\n      command:\n        - sh\n        - -c\n        - |\n          until nc -z db-service 5432; do\n            echo \"Waiting for database...\"\n            sleep 2\n          done\n          echo \"Database is ready!\"\n\n    - name: db-migration\n      image: myorg/flyway-migrations:1.0.0\n      env:\n        - name: FLYWAY_URL\n          value: \"jdbc:postgresql://db-service:5432/myapp\"\n        - name: FLYWAY_USER\n          valueFrom:\n            secretKeyRef:\n              name: db-secret\n              key: username\n        - name: FLYWAY_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: db-secret\n              key: password\n\n    - name: init-config\n      image: busybox:1.36\n      command:\n        - sh\n        - -c\n        - |\n          echo \"Initializing configuration...\"\n          cp /config/application.properties /shared/application.properties\n      volumeMounts:\n        - name: shared-config\n          mountPath: /shared\n        - name: config-volume\n          mountPath: /config\n\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      volumeMounts:\n        - name: shared-config\n          mountPath: /app/config\n\n  volumes:\n    - name: shared-config\n      emptyDir: {}\n    - name: config-volume\n      configMap:\n        name: app-config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-pod-lifecycle",
      children: "2.4 Pod Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pending → ContainerCreating → Running → Succeeded/Failed\n                │                              │\n                ▼                              ▼\n           Pod scheduled               Container terminated\n           Images pulling               Exit code indicates\n           Containers starting          success or failure\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Pending"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepted by cluster, but one or more containers not running"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Running"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All containers started, at least one still running"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Succeeded"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All containers terminated with exit code 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Failed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least one container terminated with non-zero exit code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Unknown"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node lost communication with API server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-pod-lifecycle-hooks",
      children: "2.5 Pod Lifecycle Hooks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: app-with-hooks\nspec:\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      lifecycle:\n        postStart:\n          exec:\n            command:\n              - sh\n              - -c\n              - |\n                echo \"Container started at $(date)\" > /tmp/startup.log\n                # Register with service mesh\n                curl -X POST http://localhost:15000/drain\n        preStop:\n          httpGet:\n            path: /actuator/shutdown\n            port: 8080\n          # Or use exec:\n          # exec:\n          #   command: [\"sh\", \"-c\", \"sleep 5 && curl -X POST http://localhost:8080/actuator/prestop\"]\n      terminationGracePeriodSeconds: 60\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-pod-resource-requests-and-limits",
      children: "2.6 Pod Resource Requests and Limits"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: resource-demo\nspec:\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      resources:\n        requests:\n          memory: \"256Mi\"\n          cpu: \"250m\"\n        limits:\n          memory: \"512Mi\"\n          cpu: \"1\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How resources work:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Resource"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requests"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limits"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed minimum (scheduling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard cap (throttled above)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed minimum (scheduling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard cap (OOMKilled above)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality of Service Classes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Configuration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Guaranteed"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "requests == limits"
            }), " for all containers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Burstable"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "requests < limits"
            }), " or one not set"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BestEffort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No requests or limits set"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Guaranteed QoS → highest priority, never OOMKilled unless exceeds limits\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nresources:\n  requests:\n    memory: \"512Mi\"\n    cpu: \"500m\"\n  limits:\n    memory: \"512Mi\"\n    cpu: \"500m\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-services",
      children: "3. Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-clusterip-default--internal-only",
      children: "3.1 ClusterIP (Default → Internal Only)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: myapp-service\n  labels:\n    app: myapp\nspec:\n  type: ClusterIP\n  selector:\n    app: myapp\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 8080\n    - name: actuator\n      protocol: TCP\n      port: 8081\n      targetPort: 8081\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-nodeport-external-access-on-node-ip",
      children: "3.2 NodePort (External Access on Node IP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: myapp-nodeport\nspec:\n  type: NodePort\n  selector:\n    app: myapp\n  ports:\n    - port: 80\n      targetPort: 8080\n      nodePort: 30080  # Optional: 30000-32767 range\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Access: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://<node-ip>:30080"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-loadbalancer-cloud-provider-lb",
      children: "3.3 LoadBalancer (Cloud Provider LB)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: myapp-loadbalancer\n  annotations:\n    service.beta.kubernetes.io/aws-load-balancer-type: \"nlb\"\n    service.beta.kubernetes.io/aws-load-balancer-scheme: \"internet-facing\"\nspec:\n  type: LoadBalancer\n  selector:\n    app: myapp\n  ports:\n    - port: 80\n      targetPort: 8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-headless-service-for-statefulsets",
      children: "3.4 Headless Service (For StatefulSets)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: myapp-headless\nspec:\n  clusterIP: None\n  selector:\n    app: myapp\n  ports:\n    - port: 8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-ingress",
      children: "3.5 Ingress"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: myapp-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/ssl-redirect: \"true\"\n    nginx.ingress.kubernetes.io/proxy-body-size: \"10m\"\n    nginx.ingress.kubernetes.io/rewrite-target: /\n    cert-manager.io/cluster-issuer: \"letsencrypt-prod\"\nspec:\n  ingressClassName: nginx\n  tls:\n    - hosts:\n        - api.myapp.com\n      secretName: myapp-tls\n  rules:\n    - host: api.myapp.com\n      http:\n        paths:\n          - path: /api\n            pathType: Prefix\n            backend:\n              service:\n                name: myapp-service\n                port:\n                  number: 80\n          - path: /actuator\n            pathType: Prefix\n            backend:\n              service:\n                name: myapp-service\n                port:\n                  number: 8081\n    - host: admin.myapp.com\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: admin-service\n                port:\n                  number: 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-service-discovery-with-dns",
      children: "3.6 Service Discovery with DNS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Every Service gets a DNS name in the cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\n# Full format: <service-name>.<namespace>.svc.cluster.local\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\n# Short format (same namespace): <service-name>\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\n\n# Spring Boot configuration to use K8s DNS instead of Eureka\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nspring:\n  datasource:\n    url: jdbc:postgresql://postgres-service.database.svc.cluster.local:5432/myapp\n  redis:\n    host: redis-service.cache.svc.cluster.local\n  kafka:\n    bootstrap-servers: kafka-service.messaging.svc.cluster.local:9092\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-configmaps",
      children: "4. ConfigMaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-creating-configmaps",
      children: "4.1 Creating ConfigMaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# From literal values\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl create configmap app-config \\\n  --from-literal=spring.profiles.active=k8s \\\n  --from-literal=server.port=8080 \\\n  --from-literal=app.cache.ttl=60000\n\n# From file\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl create configmap app-config \\\n  --from-file=application-k8s.properties\n\n# From directory\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl create configmap app-config \\\n  --from-dir=config/\n\n# From YAML manifest\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl apply -f configmap.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\n  labels:\n    app: myapp\ndata:\n  application-k8s.properties: |\n    server.port=8080\n    spring.datasource.hikari.maximum-pool-size=10\n    spring.datasource.hikari.minimum-idle=2\n    app.cache.ttl=60000\n    app.feature-flags.new-checkout=true\n    app.feature-flags.dark-launch-v2=false\n  app.properties: |\n    name=MyApp\n    version=1.0.0\n  log-level.json: |\n    {\n      \"root\": \"INFO\",\n      \"com.example\": \"DEBUG\",\n      \"org.springframework\": \"WARN\"\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-configmap-as-environment-variables",
      children: "4.2 ConfigMap as Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: config-env-pod\nspec:\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      env:\n        - name: SPRING_PROFILES_ACTIVE\n          value: \"k8s\"\n        - name: APP_CACHE_TTL\n          valueFrom:\n            configMapKeyRef:\n              name: app-config\n              key: app.cache.ttl\n      envFrom:\n        - configMapRef:\n            name: app-config\n        - secretRef:\n            name: app-secret\n            optional: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-configmap-as-volume-mount",
      children: "4.3 ConfigMap as Volume Mount"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: config-volume-pod\nspec:\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      volumeMounts:\n        - name: config-volume\n          mountPath: /app/config\n          readOnly: true\n        - name: log-level-config\n          mountPath: /app/config/logging.json\n          subPath: logging.json\n          readOnly: true\n  volumes:\n    - name: config-volume\n      configMap:\n        name: app-config\n        defaultMode: 0444\n        items:\n          - key: application-k8s.properties\n            path: application.properties\n    - name: log-level-config\n      configMap:\n        name: app-config\n        items:\n          - key: log-level.json\n            path: logging.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-immutable-configmap",
      children: "4.4 Immutable ConfigMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config-immutable\ndata:\n  app.name: \"MyApp\"\n  app.version: \"1.0.0\"\nimmutable: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Immutable ConfigMaps improve performance because the API server doesn't need to watch for changes. To update, delete and recreate."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-spring-boot-externalized-config-with-configmap",
      children: "4.5 Spring Boot Externalized Config with ConfigMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application-k8s.properties → mounted from ConfigMap\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nspring.config.import=configmap:app-config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.config;\n\nimport org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.stereotype.Component;\n\n@Component\n@ConfigurationProperties(prefix = \"app\")\npublic class AppProperties {\n\n    private Cache cache = new Cache();\n    private FeatureFlags featureFlags = new FeatureFlags();\n\n    public Cache getCache() { return cache; }\n    public void setCache(Cache cache) { this.cache = cache; }\n\n    public FeatureFlags getFeatureFlags() { return featureFlags; }\n    public void setFeatureFlags(FeatureFlags featureFlags) { this.featureFlags = featureFlags; }\n\n    public static class Cache {\n        private long ttl = 30000;\n        private String type = \"caffeine\";\n\n        public long getTtl() { return ttl; }\n        public void setTtl(long ttl) { this.ttl = ttl; }\n        public String getType() { return type; }\n        public void setType(String type) { this.type = type; }\n    }\n\n    public static class FeatureFlags {\n        private boolean newCheckout = false;\n        private boolean darkLaunchV2 = false;\n\n        public boolean isNewCheckout() { return newCheckout; }\n        public void setNewCheckout(boolean newCheckout) { this.newCheckout = newCheckout; }\n        public boolean isDarkLaunchV2() { return darkLaunchV2; }\n        public void setDarkLaunchV2(boolean darkLaunchV2) { this.darkLaunchV2 = darkLaunchV2; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-secrets",
      children: "5. Secrets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-opaque-secret",
      children: "5.1 Opaque Secret"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create from literal\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl create secret generic db-secret \\\n  --from-literal=username=myapp \\\n  --from-literal=password=s3cret!Pass\n\n# Create from file\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl create secret generic db-secret \\\n  --from-file=./db-username.txt \\\n  --from-file=./db-password.txt\n\n# Create from YAML (base64 encoded)\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\necho -n \"myapp\" | base64\necho -n \"s3cret!Pass\" | base64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Secret\nmetadata:\n  name: db-secret\ntype: Opaque\ndata:\n  username: bXlhcHA=  # base64(\"myapp\")\n  password: czNjcmV0IVBhc3M=  # base64(\"s3cret!Pass\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Using stringData for plaintext (K8s encodes it)\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\napiVersion: v1\nkind: Secret\nmetadata:\n  name: db-secret\ntype: Opaque\nstringData:\n  username: myapp\n  password: s3cret!Pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-tls-secret",
      children: "5.2 TLS Secret"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "kubectl create secret tls myapp-tls \\\n  --cert=path/to/tls.crt \\\n  --key=path/to/tls.key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Secret\nmetadata:\n  name: myapp-tls\ntype: kubernetes.io/tls\ndata:\n  tls.crt: <base64-encoded-cert>\n  tls.key: <base64-encoded-key>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-registry-secret-image-pull",
      children: "5.3 Registry Secret (Image Pull)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "kubectl create secret docker-registry regcred \\\n  --docker-server=https://index.docker.io/v1/ \\\n  --docker-username=myuser \\\n  --docker-password=mypassword \\\n  --docker-email=myuser@example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: private-image-pod\nspec:\n  imagePullSecrets:\n    - name: regcred\n  containers:\n    - name: myapp\n      image: myorg/private-image:1.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-secret-as-environment-variables",
      children: "5.4 Secret as Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: secret-env-pod\nspec:\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      env:\n        - name: DB_USERNAME\n          valueFrom:\n            secretKeyRef:\n              name: db-secret\n              key: username\n        - name: DB_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: db-secret\n              key: password\n              optional: false\n      envFrom:\n        - secretRef:\n            name: app-secret\n            optional: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-secret-as-volume-mount",
      children: "5.5 Secret as Volume Mount"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: secret-volume-pod\nspec:\n  containers:\n    - name: myapp\n      image: myorg/myapp:1.0.0\n      volumeMounts:\n        - name: db-credentials\n          mountPath: /etc/secrets/db\n          readOnly: true\n  volumes:\n    - name: db-credentials\n      secret:\n        secretName: db-secret\n        defaultMode: 0400\n        items:\n          - key: username\n            path: db-username\n            mode: 0400\n          - key: password\n            path: db-password\n            mode: 0400\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Env vars vs Volume mounts for Secrets:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Env vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Visible in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/proc"
            }), " / env dump, not auto-refreshed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Volume mounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-refreshed when Secret changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More verbose YAML"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-external-secrets-operator",
      children: "5.6 External Secrets Operator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: external-secrets.io/v1beta1\nkind: SecretStore\nmetadata:\n  name: aws-secrets-manager\nspec:\n  provider:\n    aws:\n      service: SecretsManager\n      region: us-east-1\n      auth:\n        jwt:\n          serviceAccountRef:\n            name: external-secrets-sa\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: external-secrets.io/v1beta1\nkind: ExternalSecret\nmetadata:\n  name: db-external-secret\nspec:\n  refreshInterval: \"1h\"\n  secretStoreRef:\n    name: aws-secrets-manager\n    kind: SecretStore\n  target:\n    name: db-secret\n    creationPolicy: Owner\n  data:\n    - secretKey: username\n      remoteRef:\n        key: /prod/myapp/database\n        property: username\n    - secretKey: password\n      remoteRef:\n        key: /prod/myapp/database\n        property: password\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-deployments",
      children: "6. Deployments"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-basic-deployment",
      children: "6.1 Basic Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\n  labels:\n    app: myapp\n    managed-by: helm\nspec:\n  replicas: 3\n  revisionHistoryLimit: 10\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n        version: v1\n      annotations:\n        prometheus.io/scrape: \"true\"\n        prometheus.io/port: \"8081\"\n        prometheus.io/path: \"/actuator/prometheus\"\n    spec:\n      serviceAccountName: myapp-sa\n      terminationGracePeriodSeconds: 60\n      containers:\n        - name: myapp\n          image: myorg/myapp:1.0.0\n          imagePullPolicy: IfNotPresent\n          ports:\n            - containerPort: 8080\n              name: http\n            - containerPort: 8081\n              name: actuator\n          env:\n            - name: SPRING_PROFILES_ACTIVE\n              value: \"k8s,production\"\n            - name: POD_NAME\n              valueFrom:\n                fieldRef:\n                  fieldPath: metadata.name\n            - name: POD_IP\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n            - name: NODE_NAME\n              valueFrom:\n                fieldRef:\n                  fieldPath: spec.nodeName\n          envFrom:\n            - configMapRef:\n                name: app-config\n          resources:\n            requests:\n              memory: \"256Mi\"\n              cpu: \"250m\"\n            limits:\n              memory: \"512Mi\"\n              cpu: \"500m\"\n          livenessProbe:\n            httpGet:\n              path: /actuator/health/liveness\n              port: actuator\n            initialDelaySeconds: 30\n            periodSeconds: 10\n            timeoutSeconds: 3\n            failureThreshold: 3\n          readinessProbe:\n            httpGet:\n              path: /actuator/health/readiness\n              port: actuator\n            initialDelaySeconds: 20\n            periodSeconds: 5\n            timeoutSeconds: 3\n            successThreshold: 1\n          startupProbe:\n            httpGet:\n              path: /actuator/health/liveness\n              port: actuator\n            initialDelaySeconds: 0\n            periodSeconds: 5\n            failureThreshold: 30\n          lifecycle:\n            preStop:\n              exec:\n                command: [\"sh\", \"-c\", \"sleep 5\"]\n      imagePullSecrets:\n        - name: regcred\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-rolling-update-strategy",
      children: "6.2 Rolling Update Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  replicas: 5\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1         # Maximum extra Pods during update (absolute or %)\n      maxUnavailable: 1   # Maximum Pods unavailable during update\n  revisionHistoryLimit: 5\n  minReadySeconds: 10\n  progressDeadlineSeconds: 600\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rolling update behavior:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before update:   [app-v1] [app-v1] [app-v1] [app-v1] [app-v1]\nmaxSurge: 1\nmaxUnavailable: 1\n\nStep 1:  [app-v1] [app-v1] [app-v1] [app-v1] [app-v1] [+app-v2]\nStep 2:  [app-v2] [app-v2] [app-v1] [app-v1] [app-v1]\nStep 3:  [app-v2] [app-v2] [app-v2] [app-v1] [app-v1] [+app-v2]\nStep 4:  [app-v2] [app-v2] [app-v2] [app-v2] [app-v1]\nStep 5:  [app-v2] [app-v2] [app-v2] [app-v2] [app-v2] [+app-v2]\nDone:    [app-v2] [app-v2] [app-v2] [app-v2] [app-v2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-recreate-strategy-downtime-tolerated",
      children: "6.3 Recreate Strategy (Downtime Tolerated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  replicas: 3\n  strategy:\n    type: Recreate  # All Pods killed before new ones created\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-rollback",
      children: "6.4 Rollback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check rollout status\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl rollout status deployment/myapp\n\n# See revision history\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl rollout history deployment/myapp\n\n# Rollback to previous revision\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl rollout undo deployment/myapp\n\n# Rollback to specific revision\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl rollout undo deployment/myapp --to-revision=2\n\n# Pause/resume rollout\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl rollout pause deployment/myapp\nkubectl rollout resume deployment/myapp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-deployment-strategies-comparison",
      children: "6.5 Deployment Strategies Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downtime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RollingUpdate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradual replacement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for stateless apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recreate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kill all, then create new"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful apps, DB migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two parallel deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production traffic switching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradual traffic shifting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-averse rollouts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-probes",
      children: "7. Probes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-probe-types",
      children: "7.1 Probe Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Probe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Failure Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "liveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is container alive?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restart container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "readiness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is container ready to serve?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove from Service endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "startup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has container started?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delays liveness/readiness checks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-probe-handlers",
      children: "7.2 Probe Handlers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# HTTP GET probe\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nlivenessProbe:\n  httpGet:\n    path: /actuator/health/liveness\n    port: 8080\n    httpHeaders:\n      - name: X-Custom-Header\n        value: health-check\n  initialDelaySeconds: 30\n  periodSeconds: 10\n  timeoutSeconds: 3\n  successThreshold: 1\n  failureThreshold: 3\n\n# TCP probe\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nreadinessProbe:\n  tcpSocket:\n    port: 8080\n  initialDelaySeconds: 15\n  periodSeconds: 10\n  timeoutSeconds: 3\n\n# Exec (command) probe\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nstartupProbe:\n  exec:\n    command:\n      - sh\n      - -c\n      - |\n        curl -sf http://localhost:8080/actuator/health/liveness && \\\n        test -f /tmp/startup-complete\n  initialDelaySeconds: 5\n  periodSeconds: 5\n  failureThreshold: 60\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-probe-configuration-parameters",
      children: "7.3 Probe Configuration Parameters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "initialDelaySeconds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait before first probe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "periodSeconds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How often to probe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "timeoutSeconds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probe timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "successThreshold"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum consecutive successes to consider healthy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "failureThreshold"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consecutive failures to trigger action"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-spring-boot-actuator-probe-integration",
      children: "7.4 Spring Boot Actuator Probe Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoint:\n    health:\n      probes:\n        enabled: true\n  health:\n    livenessstate:\n      enabled: true\n    readinessstate:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When configured, Spring Boot exposes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/health/liveness"
        }), " → returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{\"status\": \"UP\"}"
        }), " when the application is alive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/health/readiness"
        }), " → returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{\"status\": \"UP\"}"
        }), " when the application is ready to accept traffic"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-customizing-liveness-and-readiness-state",
      children: "7.5 Customizing Liveness and Readiness State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.health;\n\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.boot.availability.AvailabilityChangeEvent;\nimport org.springframework.boot.availability.LivenessState;\nimport org.springframework.boot.availability.ReadinessState;\nimport org.springframework.context.ApplicationEventPublisher;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class CustomProbeManager {\n\n    private final ApplicationEventPublisher eventPublisher;\n\n    public CustomProbeManager(ApplicationEventPublisher eventPublisher) {\n        this.eventPublisher = eventPublisher;\n    }\n\n    public void reportUnhealthy() {\n        AvailabilityChangeEvent.publish(\n            eventPublisher, this, LivenessState.BROKEN\n        );\n    }\n\n    public void reportHealthy() {\n        AvailabilityChangeEvent.publish(\n            eventPublisher, this, LivenessState.CORRECT\n        );\n    }\n\n    public void reportReady() {\n        AvailabilityChangeEvent.publish(\n            eventPublisher, this, ReadinessState.ACCEPTING_TRAFFIC\n        );\n    }\n\n    public void reportNotReady() {\n        AvailabilityChangeEvent.publish(\n            eventPublisher, this, ReadinessState.REFUSING_TRAFFIC\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-helm-charts",
      children: "8. Helm Charts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-chart-structure",
      children: "8.1 Chart Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "myapp-chart/\n├── Chart.yaml              # Chart metadata\n├── values.yaml             # Default configuration values\n├── values.prod.yaml        # Override for production\n├── values.staging.yaml     # Override for staging\n├── charts/                 # Sub-charts (dependencies)\n│   └── postgresql/\n├── templates/\n│   ├── _helpers.tpl        # Template helpers\n│   ├── deployment.yaml     # Deployment manifest\n│   ├── service.yaml        # Service manifest\n│   ├── ingress.yaml        # Ingress manifest\n│   ├── configmap.yaml      # ConfigMap manifest\n│   ├── secret.yaml         # Secret manifest\n│   ├── hpa.yaml            # HorizontalPodAutoscaler\n│   ├── serviceaccount.yaml # ServiceAccount\n│   ├── tests/              # Test pods\n│   │   └── test-connection.yaml\n│   └── NOTES.txt           # Post-install notes\n└── .helmignore             # Files to exclude from chart\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-chartyaml",
      children: "8.2 Chart.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v2\nname: myapp\ndescription: Spring Boot application Helm chart\ntype: application\nversion: \"1.0.0\"\nappVersion: \"1.0.0\"\nkubeVersion: \">=1.24.0-0\"\nhome: https://github.com/myorg/myapp\nicon: https://myorg.com/logo.png\n\nsources:\n  - https://github.com/myorg/myapp\n\nmaintainers:\n  - name: DevOps Team\n    email: devops@myorg.com\n\ndependencies:\n  - name: postgresql\n    version: \"~12.0\"\n    repository: \"https://charts.bitnami.com/bitnami\"\n    condition: postgresql.enabled\n    tags:\n      - database\n  - name: redis\n    version: \"~18.0\"\n    repository: \"https://charts.bitnami.com/bitnami\"\n    condition: redis.enabled\n    tags:\n      - cache\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-valuesyaml",
      children: "8.3 values.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Global settings\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nglobal:\n  environment: production\n  imagePullSecrets: []\n\n# Application configuration\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nreplicaCount: 3\n\nimage:\n  repository: myorg/myapp\n  tag: \"\"\n  pullPolicy: IfNotPresent\n  digest: \"\"\n\nnameOverride: \"\"\nfullnameOverride: \"\"\n\nserviceAccount:\n  create: true\n  name: \"\"\n  annotations: {}\n\npodAnnotations: {}\npodLabels: {}\npodSecurityContext: {}\nsecurityContext:\n  runAsNonRoot: true\n  runAsUser: 1001\n  capabilities:\n    drop: [\"ALL\"]\n  readOnlyRootFilesystem: true\n  allowPrivilegeEscalation: false\n\nservice:\n  type: ClusterIP\n  port: 80\n  targetPort: 8080\n  annotations: {}\n\ningress:\n  enabled: true\n  className: nginx\n  annotations:\n    cert-manager.io/cluster-issuer: letsencrypt-prod\n  hosts:\n    - host: api.myapp.com\n      paths:\n        - path: /\n          pathType: Prefix\n  tls:\n    - hosts:\n        - api.myapp.com\n      secretName: myapp-tls\n\nresources:\n  requests:\n    cpu: 250m\n    memory: 256Mi\n  limits:\n    cpu: 500m\n    memory: 512Mi\n\nautoscaling:\n  enabled: true\n  minReplicas: 2\n  maxReplicas: 10\n  targetCPUUtilizationPercentage: 70\n  targetMemoryUtilizationPercentage: 80\n\nenv:\n  SPRING_PROFILES_ACTIVE: \"k8s,production\"\n  JAVA_OPTS: \"-XX:+UseContainerSupport -XX:MaxRAMPercentage=70.0 -XX:+UseZGC\"\n\nenvFrom:\n  - configMapRef:\n      name: \"\"\n  - secretRef:\n      name: \"\"\n\nconfigMap:\n  enabled: true\n  create: true\n  name: myapp-config\n  data:\n    application-k8s.properties: |\n      server.port=8080\n      spring.datasource.hikari.maximum-pool-size=10\n      app.feature-flags.new-checkout=true\n\nsecrets:\n  enabled: true\n  create: false\n  existingSecretName: \"\"\n\nprobes:\n  liveness:\n    enabled: true\n    path: /actuator/health/liveness\n    initialDelaySeconds: 30\n    periodSeconds: 10\n    timeoutSeconds: 3\n    failureThreshold: 3\n  readiness:\n    enabled: true\n    path: /actuator/health/readiness\n    initialDelaySeconds: 20\n    periodSeconds: 5\n    timeoutSeconds: 3\n    successThreshold: 1\n  startup:\n    enabled: true\n    path: /actuator/health/liveness\n    initialDelaySeconds: 0\n    periodSeconds: 5\n    failureThreshold: 30\n\nnodeSelector: {}\ntolerations: []\naffinity: {}\n\n# External dependencies\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\npostgresql:\n  enabled: true\n  auth:\n    database: myapp\n    username: myapp\n\nredis:\n  enabled: true\n  architecture: standalone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-_helperstpl",
      children: "8.4 _helpers.tpl"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-helm",
        children: "{{- define \"myapp.name\" -}}\n{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix \"-\" }}\n{{- end }}\n\n{{- define \"myapp.fullname\" -}}\n{{- if .Values.fullnameOverride }}\n{{- .Values.fullnameOverride | trunc 63 | trimSuffix \"-\" }}\n{{- else }}\n{{- $name := default .Chart.Name .Values.nameOverride }}\n{{- if contains $name .Release.Name }}\n{{- .Release.Name | trunc 63 | trimSuffix \"-\" }}\n{{- else }}\n{{- printf \"%s-%s\" .Release.Name $name | trunc 63 | trimSuffix \"-\" }}\n{{- end }}\n{{- end }}\n{{- end }}\n\n{{- define \"myapp.chart\" -}}\n{{- printf \"%s-%s\" .Chart.Name .Chart.Version | replace \"+\" \"_\" | trunc 63 | trimSuffix \"-\" }}\n{{- end }}\n\n{{- define \"myapp.labels\" -}}\nhelm.sh/chart: {{ include \"myapp.chart\" . }}\n{{ include \"myapp.selectorLabels\" . }}\n{{- if .Chart.AppVersion }}\napp.kubernetes.io/version: {{ .Chart.AppVersion | quote }}\n{{- end }}\napp.kubernetes.io/managed-by: {{ .Release.Service }}\n{{- end }}\n\n{{- define \"myapp.selectorLabels\" -}}\napp.kubernetes.io/name: {{ include \"myapp.name\" . }}\napp.kubernetes.io/instance: {{ .Release.Name }}\n{{- end }}\n\n{{- define \"myapp.image\" -}}\n{{- $image := .Values.image.repository -}}\n{{- if .Values.image.digest }}\n{{- printf \"%s@%s\" $image .Values.image.digest }}\n{{- else }}\n{{- $tag := .Values.image.tag | default (printf \"v%s\" .Chart.AppVersion) -}}\n{{- printf \"%s:%s\" $image $tag }}\n{{- end }}\n{{- end }}\n\n{{- define \"myapp.probe\" -}}\n{{- $probe := . -}}\nhttpGet:\n  path: {{ $probe.path }}\n  port: {{ $probe.port | default 8080 }}\n{{- if $probe.initialDelaySeconds }}\ninitialDelaySeconds: {{ $probe.initialDelaySeconds }}\n{{- end }}\nperiodSeconds: {{ $probe.periodSeconds }}\ntimeoutSeconds: {{ $probe.timeoutSeconds }}\n{{- if $probe.successThreshold }}\nsuccessThreshold: {{ $probe.successThreshold }}\n{{- end }}\nfailureThreshold: {{ $probe.failureThreshold }}\n{{- end }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-templatesdeploymentyaml",
      children: "8.5 templates/deployment.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ include \"myapp.fullname\" . }}\n  labels:\n    {{- include \"myapp.labels\" . | nindent 4 }}\nspec:\n  replicas: {{ .Values.replicaCount }}\n  revisionHistoryLimit: {{ .Values.revisionHistoryLimit | default 10 }}\n  strategy:\n    type: {{ .Values.strategy.type | default \"RollingUpdate\" }}\n    {{- if eq (.Values.strategy.type | default \"RollingUpdate\") \"RollingUpdate\" }}\n    rollingUpdate:\n      maxSurge: {{ .Values.strategy.maxSurge | default 1 }}\n      maxUnavailable: {{ .Values.strategy.maxUnavailable | default 0 }}\n    {{- end }}\n  selector:\n    matchLabels:\n      {{- include \"myapp.selectorLabels\" . | nindent 6 }}\n  template:\n    metadata:\n      {{- with .Values.podAnnotations }}\n      annotations:\n        {{- toYaml . | nindent 8 }}\n      {{- end }}\n      labels:\n        {{- include \"myapp.selectorLabels\" . | nindent 8 }}\n        {{- with .Values.podLabels }}\n        {{- toYaml . | nindent 8 }}\n        {{- end }}\n    spec:\n      {{- with .Values.imagePullSecrets }}\n      imagePullSecrets:\n        {{- toYaml . | nindent 8 }}\n      {{- end }}\n      serviceAccountName: {{ include \"myapp.serviceAccountName\" . }}\n      securityContext:\n        {{- toYaml .Values.podSecurityContext | nindent 8 }}\n      containers:\n        - name: {{ .Chart.Name }}\n          securityContext:\n            {{- toYaml .Values.securityContext | nindent 12 }}\n          image: \"{{ include \"myapp.image\" . }}\"\n          imagePullPolicy: {{ .Values.image.pullPolicy }}\n          ports:\n            - containerPort: 8080\n              name: http\n              protocol: TCP\n            - containerPort: 8081\n              name: actuator\n              protocol: TCP\n          env:\n            {{- range $key, $value := .Values.env }}\n            - name: {{ $key }}\n              value: {{ $value | quote }}\n            {{- end }}\n          {{- if .Values.envFrom }}\n          envFrom:\n            {{- toYaml .Values.envFrom | nindent 12 }}\n          {{- end }}\n          resources:\n            {{- toYaml .Values.resources | nindent 12 }}\n          {{- if .Values.probes.liveness.enabled }}\n          livenessProbe:\n            {{- include \"myapp.probe\" .Values.probes.liveness | nindent 12 }}\n          {{- end }}\n          {{- if .Values.probes.readiness.enabled }}\n          readinessProbe:\n            {{- include \"myapp.probe\" .Values.probes.readiness | nindent 12 }}\n          {{- end }}\n          {{- if .Values.probes.startup.enabled }}\n          startupProbe:\n            {{- include \"myapp.probe\" .Values.probes.startup | nindent 12 }}\n          {{- end }}\n          volumeMounts:\n            - name: config-volume\n              mountPath: /app/config\n              readOnly: true\n      volumes:\n        - name: config-volume\n          configMap:\n            name: {{ .Values.configMap.name | default (include \"myapp.fullname\" .) }}\n      {{- with .Values.nodeSelector }}\n      nodeSelector:\n        {{- toYaml . | nindent 8 }}\n      {{- end }}\n      {{- with .Values.affinity }}\n      affinity:\n        {{- toYaml . | nindent 8 }}\n      {{- end }}\n      {{- with .Values.tolerations }}\n      tolerations:\n        {{- toYaml . | nindent 8 }}\n      {{- end }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-templatesserviceyaml",
      children: "8.6 templates/service.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: {{ include \"myapp.fullname\" . }}\n  labels:\n    {{- include \"myapp.labels\" . | nindent 4 }}\n  {{- with .Values.service.annotations }}\n  annotations:\n    {{- toYaml . | nindent 4 }}\n  {{- end }}\nspec:\n  type: {{ .Values.service.type }}\n  ports:\n    - port: {{ .Values.service.port }}\n      targetPort: {{ .Values.service.targetPort }}\n      protocol: TCP\n      name: http\n    - port: {{ .Values.service.actuatorPort | default 8081 }}\n      targetPort: {{ .Values.service.actuatorPort | default 8081 }}\n      protocol: TCP\n      name: actuator\n  selector:\n    {{- include \"myapp.selectorLabels\" . | nindent 4 }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-helm-hooks",
      children: "8.7 Helm Hooks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# templates/migration-job.yaml\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: {{ include \"myapp.fullname\" . }}-db-migration\n  annotations:\n    helm.sh/hook: pre-upgrade,pre-install\n    helm.sh/hook-weight: \"5\"\n    helm.sh/hook-delete-policy: before-hook-creation,hook-succeeded\nspec:\n  template:\n    spec:\n      restartPolicy: Never\n      containers:\n        - name: migration\n          image: \"flyway/flyway:9.22\"\n          command:\n            - flyway\n            - migrate\n          env:\n            - name: FLYWAY_URL\n              value: {{ .Values.migration.url | quote }}\n            - name: FLYWAY_USER\n              valueFrom:\n                secretKeyRef:\n                  name: {{ .Values.secrets.existingSecretName }}\n                  key: db-username\n            - name: FLYWAY_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: {{ .Values.secrets.existingSecretName }}\n                  key: db-password\n          volumeMounts:\n            - name: migrations\n              mountPath: /flyway/sql\n      volumes:\n        - name: migrations\n          configMap:\n            name: {{ include \"myapp.fullname\" . }}-migrations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-helm-conditions",
      children: "8.8 Helm Conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Chart.yaml dependencies with conditions\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\ndependencies:\n  - name: postgresql\n    condition: postgresql.enabled  # Only installs if .Values.postgresql.enabled is true\n  - name: redis\n    condition: redis.enabled\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# values.yaml → controlling conditions\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\npostgresql:\n  enabled: true   # Dev/staging: embedded PostgreSQL\n  auth:\n    database: myapp\n\nredis:\n  enabled: false  # Production: use managed Redis\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# templates/deployment.yaml → conditionally include elements\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\n{{- if .Values.ingress.enabled }}\napiVersion: networking.k8s.io/v1\nkind: Ingress\n...\n{{- end }}\n\n{{- if and .Values.autoscaling.enabled (semverCompare \">=1.23-0\" .Capabilities.KubeVersion.Version) }}\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\n...\n{{- end }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "89-template-flow-control",
      children: "8.9 Template Flow Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# templates/configmap.yaml\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: {{ include \"myapp.fullname\" . }}-config\n  labels:\n    {{- include \"myapp.labels\" . | nindent 4 }}\ndata:\n  {{- range $key, $value := .Values.configMap.data }}\n  {{ $key }}: |-\n    {{- $value | nindent 4 }}\n  {{- end }}\n  {{- if .Values.global.environment }}\n  environment: {{ .Values.global.environment }}\n  {{- end }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "810-installation-and-upgrade",
      children: "8.10 Installation and Upgrade"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install chart\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nhelm repo add myrepo https://charts.myorg.com\nhelm install myapp myrepo/myapp -f values.prod.yaml\n\n# Upgrade with new version\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nhelm upgrade myapp myrepo/myapp -f values.prod.yaml --set image.tag=v1.2.0\n\n# Rollback\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nhelm rollback myapp 3\n\n# Template without installing (debug)\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nhelm template myapp ./myapp-chart -f values.prod.yaml > output.yaml\n\n# Lint chart\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nhelm lint ./myapp-chart\n\n# Package chart\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nhelm package ./myapp-chart -d ./releases\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-spring-boot-on-kubernetes",
      children: "9. Spring Boot on Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-spring-boot-configuration-for-kubernetes",
      children: "9.1 Spring Boot Configuration for Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-k8s.properties\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nspring:\n  config:\n    import: \"configmap:myapp-config\"\n  datasource:\n    url: ${DATASOURCE_URL:jdbc:postgresql://postgres-service:5432/myapp}\n    username: ${DB_USERNAME}\n    password: ${DB_PASSWORD}\n  jpa:\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.PostgreSQLDialect\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,prometheus,info,metrics,env\n  endpoint:\n    health:\n      probes:\n        enabled: true\n      show-details: when-authorized\n  health:\n    livenessstate:\n      enabled: true\n    readinessstate:\n      enabled: true\n\nserver:\n  port: 8080\n  shutdown: graceful\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-kubernetes-native-service-discovery",
      children: "9.2 Kubernetes Native Service Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.discovery;\n\nimport io.kubernetes.client.openapi.ApiClient;\nimport io.kubernetes.client.openapi.Configuration;\nimport io.kubernetes.client.openapi.apis.CoreV1Api;\nimport io.kubernetes.client.openapi.models.V1Endpoints;\nimport io.kubernetes.client.util.Config;\nimport org.springframework.stereotype.Service;\n\nimport java.net.InetSocketAddress;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\n@Service\npublic class KubernetesServiceDiscovery {\n\n    private final CoreV1Api api;\n\n    public KubernetesServiceDiscovery() throws Exception {\n        ApiClient client = Config.defaultClient();\n        Configuration.setDefaultApiClient(client);\n        this.api = new CoreV1Api();\n    }\n\n    public List<InetSocketAddress> discoverService(String serviceName, String namespace, int port) {\n        try {\n            V1Endpoints endpoints = api.readNamespacedEndpoints(\n                serviceName, namespace, null\n            ).execute();\n\n            return endpoints.getSubsets().stream()\n                .flatMap(subset -> subset.getAddresses().stream()\n                    .map(addr -> new InetSocketAddress(\n                        addr.getIp(), port\n                    ))\n                )\n                .collect(Collectors.toList());\n        } catch (Exception e) {\n            throw new RuntimeException(\"Failed to discover service: \" + serviceName, e);\n        }\n    }\n\n    public List<String> discoverServiceEndpoints(String serviceName, String namespace) {\n        try {\n            V1Endpoints endpoints = api.readNamespacedEndpoints(\n                serviceName, namespace, null\n            ).execute();\n\n            return endpoints.getSubsets().stream()\n                .flatMap(subset -> subset.getAddresses().stream()\n                    .flatMap(addr -> subset.getPorts().stream()\n                        .map(port -> addr.getIp() + \":\" + port.getPort())\n                    )\n                )\n                .collect(Collectors.toList());\n        } catch (Exception e) {\n            throw new RuntimeException(\"Failed to discover endpoints\", e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-kubernetes-aware-resttemplate",
      children: "9.3 Kubernetes-Aware RestTemplate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.discovery;\n\nimport org.springframework.web.client.RestTemplate;\nimport org.springframework.http.client.SimpleClientHttpRequestFactory;\nimport org.springframework.stereotype.Component;\n\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\nimport java.util.List;\nimport java.util.concurrent.ThreadLocalRandom;\n\n@Component\npublic class KubernetesAwareRestTemplate extends RestTemplate {\n\n    private final KubernetesServiceDiscovery discovery;\n\n    public KubernetesAwareRestTemplate(KubernetesServiceDiscovery discovery) {\n        this.discovery = discovery;\n    }\n\n    public <T> T getForService(String serviceName, String path, Class<T> responseType) {\n        List<InetSocketAddress> endpoints = discovery.discoverService(\n            serviceName, \"default\", 8080\n        );\n\n        if (endpoints.isEmpty()) {\n            throw new IllegalStateException(\"No endpoints found for service: \" + serviceName);\n        }\n\n        // Pick a random endpoint (client-side load balancing)\n        InetSocketAddress endpoint = endpoints.get(\n            ThreadLocalRandom.current().nextInt(endpoints.size())\n        );\n\n        String url = String.format(\"http://%s:%d%s\", endpoint.getHostString(),\n            endpoint.getPort(), path);\n\n        return exchange(url, org.springframework.http.HttpMethod.GET, null, responseType).getBody();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-service-binding-with-spring-cloud-bindings",
      children: "9.4 Service Binding with Spring Cloud Bindings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-bindings</artifactId>\n    <version>1.13.0</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Automatically detects Service Binding environment variables\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\n# and configures Spring Boot data sources, Mongo, Redis, etc.\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nspring:\n  cloud:\n    bindings:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-kubernetes-health-probes-integration",
      children: "9.5 Kubernetes Health Probes Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.health;\n\nimport org.springframework.boot.actuate.autoconfigure.availability.ApplicationAvailabilityAutoConfiguration;\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.boot.availability.ApplicationAvailability;\nimport org.springframework.boot.availability.LivenessState;\nimport org.springframework.boot.availability.ReadinessState;\nimport org.springframework.boot.availability.AvailabilityChangeEvent;\nimport org.springframework.context.ApplicationEventPublisher;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class KubernetesHealthManager {\n\n    private final ApplicationEventPublisher eventPublisher;\n    private final ApplicationAvailability availability;\n\n    public KubernetesHealthManager(\n            ApplicationEventPublisher eventPublisher,\n            ApplicationAvailability availability) {\n        this.eventPublisher = eventPublisher;\n        this.availability = availability;\n    }\n\n    public boolean isLive() {\n        return availability.getLivenessState() == LivenessState.CORRECT;\n    }\n\n    public boolean isReady() {\n        return availability.getReadinessState() == ReadinessState.ACCEPTING_TRAFFIC;\n    }\n\n    public void setOutOfService(String reason) {\n        AvailabilityChangeEvent.publish(\n            eventPublisher, this, LivenessState.BROKEN\n        );\n        AvailabilityChangeEvent.publish(\n            eventPublisher, this, ReadinessState.REFUSING_TRAFFIC\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-auto-scaling",
      children: "10. Auto-Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-horizontalpodautoscaler-hpa",
      children: "10.1 HorizontalPodAutoscaler (HPA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: myapp-hpa\n  labels:\n    app: myapp\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: myapp\n  minReplicas: 2\n  maxReplicas: 10\n  behavior:\n    scaleUp:\n      stabilizationWindowSeconds: 0\n      policies:\n        - type: Percent\n          value: 100\n          periodSeconds: 15\n        - type: Pods\n          value: 4\n          periodSeconds: 15\n      selectPolicy: Max\n    scaleDown:\n      stabilizationWindowSeconds: 300\n      policies:\n        - type: Percent\n          value: 10\n          periodSeconds: 60\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          averageUtilization: 70\n    - type: Resource\n      resource:\n        name: memory\n        target:\n          type: Utilization\n          averageUtilization: 80\n    - type: Pods\n      pods:\n        metric:\n          name: http_requests_per_second\n        target:\n          type: AverageValue\n          averageValue: \"1000\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-verticalpodautoscaler-vpa",
      children: "10.2 VerticalPodAutoscaler (VPA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: autoscaling.k8s.io/v1\nkind: VerticalPodAutoscaler\nmetadata:\n  name: myapp-vpa\nspec:\n  targetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: myapp\n  updatePolicy:\n    updateMode: Auto\n  resourcePolicy:\n    containerPolicies:\n      - containerName: myapp\n        minAllowed:\n          cpu: \"100m\"\n          memory: \"128Mi\"\n        maxAllowed:\n          cpu: \"4\"\n          memory: \"4Gi\"\n        controlledResources: [\"cpu\", \"memory\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-metrics-based-scaling",
      children: "10.3 Metrics-Based Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Requires Prometheus Adapter to expose custom metrics\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: myapp-custom-metrics\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: myapp\n  minReplicas: 2\n  maxReplicas: 20\n  metrics:\n    - type: Object\n      object:\n        metric:\n          name: orders_total\n        describedObject:\n          apiVersion: v1\n          kind: Service\n          name: myapp-service\n        target:\n          type: Value\n          value: \"1000\"\n    - type: External\n      external:\n        metric:\n          name: kafka_consumer_lag\n          selector:\n            matchLabels:\n              consumer_group: myapp-group\n        target:\n          type: AverageValue\n          averageValue: \"500\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-cluster-setup-options",
      children: "11. Cluster Setup Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-minikube-local-development",
      children: "11.1 Minikube (Local Development)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Minikube (Windows with PowerShell)\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nchoco install minikube\n# Or\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nwinget install minikube\n\n# Start cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nminikube start --cpus=4 --memory=8g --driver=hyperv\n\n# Enable necessary addons\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nminikube addons enable ingress\nminikube addons enable metrics-server\nminikube addons enable dashboard\nminikube addons enable metallb\n\n# Build and load image\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\neval $(minikube docker-env)\ndocker build -t myapp:latest .\nkubectl apply -f k8s/\n\n# Access application\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nminikube service myapp-service\nminikube tunnel  # For LoadBalancer services\n\n# Open dashboard\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nminikube dashboard\n\n# Stop/delete\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nminikube stop\nminikube delete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-kind-kubernetes-in-docker",
      children: "11.2 kind (Kubernetes IN Docker)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# kind-config.yaml - Multi-node cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n  - role: control-plane\n    extraPortMappings:\n      - containerPort: 30080\n        hostPort: 8080\n        protocol: TCP\n  - role: worker\n    extraMounts:\n      - hostPath: /data\n        containerPath: /data\n  - role: worker\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkind create cluster --config kind-config.yaml --name myapp\n\n# Load images into cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkind load docker-image myapp:latest --name myapp\n\n# Deploy\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl apply -f k8s/\n\n# Delete cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkind delete cluster --name myapp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-amazon-eks",
      children: "11.3 Amazon EKS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install eksctl\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nwinget install eksctl\n\n# Create cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\neksctl create cluster \\\n  --name myapp-cluster \\\n  --region us-east-1 \\\n  --nodegroup-name standard-workers \\\n  --node-type t3.medium \\\n  --nodes 3 \\\n  --nodes-min 2 \\\n  --nodes-max 10 \\\n  --managed \\\n  --with-oidc \\\n  --full-ecr-access\n\n# Update kubeconfig\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\naws eks update-kubeconfig --region us-east-1 --name myapp-cluster\n\n# Create ECR repository\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\naws ecr create-repository --repository-name myapp\n\n# Build and push\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\ndocker build -t myapp:latest .\naws ecr get-login-password --region us-east-1 | \\\n  docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com\ndocker tag myapp:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/myapp:latest\ndocker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/myapp:latest\n\n# Deploy\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl apply -f k8s/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# nodegroup-config.yaml - Managed node group\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\napiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\nmetadata:\n  name: myapp-cluster\n  region: us-east-1\n  version: \"1.28\"\n\nmanagedNodeGroups:\n  - name: spot-workers\n    instanceTypes:\n      - t3.medium\n      - t3.large\n      - m5.large\n    spot: true\n    minSize: 1\n    maxSize: 20\n    desiredCapacity: 3\n    labels:\n      role: worker\n      lifecycle: spot\n    tags:\n      Environment: production\n    ssh:\n      allow: false\n    iam:\n      withAddonPolicies:\n        autoScaling: true\n        externalDNS: true\n        albIngress: true\n        cloudWatch: true\n\naddons:\n  - name: vpc-cni\n    version: latest\n  - name: coredns\n    version: latest\n  - name: kube-proxy\n    version: latest\n  - name: aws-ebs-csi-driver\n    version: latest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-azure-aks",
      children: "11.4 Azure AKS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create resource group\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\naz group create --name myapp-rg --location eastus\n\n# Create AKS cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\naz aks create \\\n  --resource-group myapp-rg \\\n  --name myapp-cluster \\\n  --node-count 3 \\\n  --node-vm-size Standard_D2s_v3 \\\n  --enable-cluster-autoscaler \\\n  --min-count 2 \\\n  --max-count 10 \\\n  --enable-managed-identity \\\n  --network-plugin azure \\\n  --network-policy calico \\\n  --enable-addons monitoring\n\n# Get credentials\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\naz aks get-credentials --resource-group myapp-rg --name myapp-cluster\n\n# Create ACR (Container Registry)\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\naz acr create --resource-group myapp-rg --name myappacr --sku Standard\n\n# Build and push\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\naz acr build --registry myappacr --image myapp:latest .\n\n# Deploy\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl apply -f k8s/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-gcp-gke",
      children: "11.5 GCP GKE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create cluster\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\ngcloud container clusters create myapp-cluster \\\n  --region us-central1 \\\n  --num-nodes 3 \\\n  --machine-type e2-standard-2 \\\n  --enable-autoscaling \\\n  --min-nodes 1 \\\n  --max-nodes 10 \\\n  --enable-autorepair \\\n  --enable-ip-alias\n\n# Get credentials\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\ngcloud container clusters get-credentials myapp-cluster --region us-central1\n\n# Create Artifact Registry\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\ngcloud artifacts repositories create myapp-repo \\\n  --repository-format docker \\\n  --location us-central1\n\n# Build and push\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\ngcloud builds submit --tag us-central1-docker.pkg.dev/myproject/myapp-repo/myapp:latest .\n\n# Deploy\n\n> **Previous:** [Docker &amp; Containerization](./52-docker.md) | **Next:** [CI/CD Pipelines](./54-cicd.md)\nkubectl apply -f k8s/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-complete-deployment-example",
      children: "12. Complete Deployment Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-full-namespace-with-secret-and-configmap",
      children: "12.1 Full Namespace with Secret and ConfigMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Namespace\nmetadata:\n  name: myapp-production\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: myapp-sa\n  namespace: myapp-production\n  annotations:\n    eks.amazonaws.com/role-arn: \"arn:aws:iam::123456789012:role/myapp-role\"\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: app-secret\n  namespace: myapp-production\ntype: Opaque\nstringData:\n  DB_PASSWORD: production-secret\n  API_KEY: my-api-key-here\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\n  namespace: myapp-production\ndata:\n  SPRING_PROFILES_ACTIVE: \"k8s,production\"\n  JAVA_OPTS: \"-XX:+UseContainerSupport -XX:MaxRAMPercentage=70.0 -XX:+UseZGC\"\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\n  namespace: myapp-production\nspec:\n  replicas: 3\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      serviceAccountName: myapp-sa\n      containers:\n        - name: myapp\n          image: myorg/myapp:1.0.0\n          ports:\n            - containerPort: 8080\n          envFrom:\n            - configMapRef:\n                name: app-config\n            - secretRef:\n                name: app-secret\n          resources:\n            requests:\n              cpu: 250m\n              memory: 256Mi\n            limits:\n              cpu: 500m\n              memory: 512Mi\n          livenessProbe:\n            httpGet:\n              path: /actuator/health/liveness\n              port: 8080\n            initialDelaySeconds: 30\n            periodSeconds: 10\n          readinessProbe:\n            httpGet:\n              path: /actuator/health/readiness\n              port: 8080\n            initialDelaySeconds: 20\n            periodSeconds: 5\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: myapp-service\n  namespace: myapp-production\nspec:\n  type: ClusterIP\n  selector:\n    app: myapp\n  ports:\n    - port: 80\n      targetPort: 8080\n---\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: myapp-hpa\n  namespace: myapp-production\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: myapp\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          averageUtilization: 70\n    - type: Resource\n      resource:\n        name: memory\n        target:\n          type: Utilization\n          averageUtilization: 80\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: myapp-ingress\n  namespace: myapp-production\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    cert-manager.io/cluster-issuer: letsencrypt-prod\nspec:\n  tls:\n    - hosts:\n        - api.myapp.com\n      secretName: myapp-tls\n  rules:\n    - host: api.myapp.com\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: myapp-service\n                port:\n                  number: 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Approach A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Commands/APIs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required dependencies and configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify versions match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core code patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test edge cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cover success and failure paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern C"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary benefit of this chapter's main topic?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Improved performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Better developer productivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Enhanced reliability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Enhanced reliability.** While all are benefits, the core value proposition is reliability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which approach is recommended for production deployments?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The simplest solution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The most feature-rich option"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The one with best operational characteristics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Whatever the team knows best"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) The one with best operational characteristics.** Production choices should prioritize observability, maintainability, and operability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you consider this pattern?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) For every project regardless of size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When complexity justifies the overhead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only in legacy systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Never → it is outdated"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) When complexity justifies the overhead.** Apply patterns when the problem complexity warrants the additional abstraction.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pods"
        }), " are the smallest deployable unit → use multi-container Pods for sidecars and init containers for setup tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Services"
        }), " provide stable networking (ClusterIP internal, NodePort external, LoadBalancer cloud LB, Ingress for HTTP routing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ConfigMaps"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Secrets"
        }), " externalize configuration → prefer volume mounts for auto-refresh"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployments"
        }), " manage rollouts with configurable strategies (RollingUpdate, Recreate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probes"
        }), " (liveness, readiness, startup) keep applications healthy → integrate with Spring Boot Actuator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Helm charts"
        }), " package Kubernetes manifests with parameterized templates, helpers, hooks, and conditions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring Boot on Kubernetes"
        }), " uses native service discovery (DNS), ConfigMaps for externalized config, and health probes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-scaling"
        }), " with HPA (replicas) and VPA (resources) adapts to load"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cluster setup"
        }), " varies by environment: Minikube/kind for dev, EKS/AKS/GKE for production"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Basic Pod:"
          }), " Create a Pod YAML for a Spring Boot application. Include resource requests/limits and a single container."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Init container:"
          }), " Add an init container that waits for a PostgreSQL service to be ready before the main container starts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Service:"
          }), " Create a ClusterIP Service for your Spring Boot Pod and verify it works with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "kubectl port-forward"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ConfigMap:"
          }), " Create a ConfigMap with application properties and mount it as a volume in your Pod. Verify Spring Boot picks up the external configuration."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Secret:"
          }), " Create a Secret for your database password. Mount it as a volume and reference it from the ConfigMap-based application.properties."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deployment:"
          }), " Create a Deployment with 3 replicas, rolling update strategy, and liveness/readiness probes. Perform a rolling update and rollback."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Helm chart:"
          }), " Create a Helm chart for your Spring Boot application. Include values.yaml with all configurable parameters and template files for Deployment, Service, ConfigMap, and HPA."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HPA:"
          }), " Deploy your application and configure a HorizontalPodAutoscaler based on CPU utilization. Generate load and observe scaling behavior."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spring Boot probes:"
          }), " Enable Kubernetes health probes in your Spring Boot application. Verify the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/actuator/health/liveness"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/actuator/health/readiness"
          }), " endpoints respond correctly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cluster setup:"
          }), " Install Minikube, deploy your Spring Boot application, and expose it via Ingress. Verify the application is accessible from outside the cluster."]
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