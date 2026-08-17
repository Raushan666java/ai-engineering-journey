"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[72108],{

/***/ 13468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_60_interview_microservices_c_md_b18_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-60-interview-microservices-c-md-b18.json
const site_docs_courses_java_60_interview_microservices_c_md_b18_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/60-interview-microservices-c","title":"── Deployment for a microservice ──","description":"Service Mesh - Istio and Envoy","source":"@site/docs/courses/java/60-interview-microservices-c.md","sourceDirName":"courses/java","slug":"/java/60-interview-microservices-c","permalink":"/ai-engineering-journey/java/60-interview-microservices-c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":66,"frontMatter":{"id":"60-interview-microservices-c","slug":"/java/60-interview-microservices-c","title":"── Deployment for a microservice ──","sidebar_label":"── Deployment for a microservice ──","sidebar_position":66},"sidebar":"course-java","previous":{"title":"── Multi-stage Dockerfile for a Spring Boot microservice ──","permalink":"/ai-engineering-journey/java/60-interview-microservices-b"},"next":{"title":"── Istio DestinationRule (circuit breaker at mesh level) ──","permalink":"/ai-engineering-journey/java/60-interview-microservices-d"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/60-interview-microservices-c.md


const frontMatter = {
	id: '60-interview-microservices-c',
	slug: '/java/60-interview-microservices-c',
	title: '── Deployment for a microservice ──',
	sidebar_label: '── Deployment for a microservice ──',
	sidebar_position: 66
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Q14: How do you deploy microservices on Kubernetes?",
  "id": "q14-how-do-you-deploy-microservices-on-kubernetes",
  "level": 3
}, {
  "value": "Q15: Compare deployment strategies: rolling, blue/green, and canary",
  "id": "q15-compare-deployment-strategies-rolling-bluegreen-and-canary",
  "level": 3
}, {
  "value": "Q16: How do you monitor microservices with Prometheus and Grafana?",
  "id": "q16-how-do-you-monitor-microservices-with-prometheus-and-grafana",
  "level": 3
}, {
  "value": "Q17: How do you implement contract testing with Spring Cloud Contract?",
  "id": "q17-how-do-you-implement-contract-testing-with-spring-cloud-contract",
  "level": 3
}, {
  "value": "Q18: How do you handle database-per-service with shared data concerns?",
  "id": "q18-how-do-you-handle-database-per-service-with-shared-data-concerns",
  "level": 3
}, {
  "value": "Q19: What are common microservices anti-patterns and how do you avoid them?",
  "id": "q19-what-are-common-microservices-anti-patterns-and-how-do-you-avoid-them",
  "level": 3
}, {
  "value": "Q20: How do you test microservices end-to-end?",
  "id": "q20-how-do-you-test-microservices-end-to-end",
  "level": 3
}, {
  "value": "Q17: How do you implement feature flags for continuous deployment?",
  "id": "q17-how-do-you-implement-feature-flags-for-continuous-deployment",
  "level": 3
}, {
  "value": "Q18: How do you handle API versioning in microservices?",
  "id": "q18-how-do-you-handle-api-versioning-in-microservices",
  "level": 3
}, {
  "value": "Common Mistakes in Microservices Testing (GFG-Style)",
  "id": "common-mistakes-in-microservices-testing-gfg-style",
  "level": 2
}, {
  "value": "Mistake 1: Only writing unit tests, no contract or integration tests",
  "id": "mistake-1-only-writing-unit-tests-no-contract-or-integration-tests",
  "level": 3
}, {
  "value": "Mistake 2: Flaky E2E tests blocking the pipeline",
  "id": "mistake-2-flaky-e2e-tests-blocking-the-pipeline",
  "level": 3
}, {
  "value": "Mistake 3: Not testing failure scenarios",
  "id": "mistake-3-not-testing-failure-scenarios",
  "level": 3
}, {
  "value": "Mistake 4: Shared test databases between developers",
  "id": "mistake-4-shared-test-databases-between-developers",
  "level": 3
}, {
  "value": "Testing Strategy Comparison Table",
  "id": "testing-strategy-comparison-table",
  "level": 2
}, {
  "value": "Mermaid: Microservices Testing Strategy",
  "id": "mermaid-microservices-testing-strategy",
  "level": 2
}, {
  "value": "Chapter Quiz — Microservices Testing",
  "id": "chapter-quiz--microservices-testing",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/60-interview-microservices-c.png",
        alt: "Service Mesh - Istio and Envoy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Questions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definitions, contrasts, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilable, runnable solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real interview scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-ready patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitfalls to avoid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Code Examples]\n    B --> C[Edge Cases]\n    C --> D[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-do-you-deploy-microservices-on-kubernetes",
      children: "Q14: How do you deploy microservices on Kubernetes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In interviews, always start with the \"why\" before the \"how.\" Explaining the reasoning behind a design choice is more valuable than reciting syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Code readability matters in interviews. Write clean, well-structured code with meaningful variable names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes orchestrates containerized microservices with deployments, services, config maps, and ingress controllers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── Deployment for a microservice ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: order-service\n  labels:\n    app: order-service\nspec:\n  replicas: 3  # Run 3 instances for high availability\n  selector:\n    matchLabels:\n      app: order-service\n  template:\n    metadata:\n      labels:\n        app: order-service\n    spec:\n      containers:\n        - name: order-service\n          image: raushan666/order-service:1.0.0\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8080\n          env:\n            - name: SPRING_PROFILES_ACTIVE\n              value: \"k8s\"\n            - name: DB_URL\n              valueFrom:\n                secretKeyRef:\n                  name: db-credentials\n                  key: url\n            - name: DB_USERNAME\n              valueFrom:\n                secretKeyRef:\n                  name: db-credentials\n                  key: username\n            - name: DB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: db-credentials\n                  key: password\n          livenessProbe:\n            httpGet:\n              path: /actuator/health/liveness\n              port: 8080\n            initialDelaySeconds: 30\n            periodSeconds: 10\n          readinessProbe:\n            httpGet:\n              path: /actuator/health/readiness\n              port: 8080\n            initialDelaySeconds: 20\n            periodSeconds: 5\n          resources:\n            requests:\n              memory: \"256Mi\"\n              cpu: \"250m\"\n            limits:\n              memory: \"512Mi\"\n              cpu: \"500m\"\n---\n# ── Service (stable network endpoint) ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\napiVersion: v1\nkind: Service\nmetadata:\n  name: order-service\nspec:\n  selector:\n    app: order-service\n  ports:\n    - port: 80\n      targetPort: 8080\n  type: ClusterIP  # Internal → only accessible within the cluster\n---\n# ── ConfigMap for non-sensitive config ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: order-service-config\ndata:\n  application.yml: |\n    order-service:\n      order-timeout: 30s\n      max-batch-size: 100\n---\n# ── HPA (auto-scaling) ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: order-service-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: order-service\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          averageUtilization: 70\n---\n# ── Ingress (external traffic routing) ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: api-ingress\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\nspec:\n  rules:\n    - host: api.example.com\n      http:\n        paths:\n          - path: /users(/|$)(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: user-service\n                port:\n                  number: 80\n          - path: /orders(/|$)(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: order-service\n                port:\n                  number: 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot Kubernetes-friendly configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-k8s.yml\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\nspring:\n  cloud:\n    kubernetes:\n      discovery:\n        enabled: true   # Use Kubernetes DNS instead of Eureka\n      config:\n        enabled: true   # Read ConfigMap as configuration source\n      secrets:\n        enabled: true   # Read Secrets as configuration source\n  config:\n    import: configmap:order-service-config\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics,prometheus\n  health:\n    livenessstate:\n      enabled: true\n    readinessstate:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deploy a new version:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "kubectl set image deployment/order-service order-service=raushan666/order-service:1.1.0\nkubectl rollout status deployment/order-service\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes replaces Eureka for service discovery (DNS resolution), replaces Config Server (ConfigMaps + Secrets), and provides health checks (liveness/readiness probes) instead of Eureka heartbeats. Use Spring Cloud Kubernetes for seamless integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-compare-deployment-strategies-rolling-bluegreen-and-canary",
      children: "Q15: Compare deployment strategies: rolling, blue/green, and canary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Rolling update (Kubernetes default) ──\n// Updates pods gradually → old pods keep serving until new ones are healthy\napiVersion: apps/v1\nkind: Deployment\nspec:\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1        // One extra pod during update\n      maxUnavailable: 0  // Zero downtime: only create new pods before removing old ones\n\n// ── Blue/Green deployment ──\n// Two identical environments: Blue (current), Green (new)\napiVersion: apps/v1\nkind: Service\nmetadata:\n  name: order-service\nspec:\n  selector:\n    app: order-service\n    version: green   # ← Flip this from \"blue\" to \"green\" to switch traffic\n---\n# Deploy green:\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\n# kubectl apply -f deployment-green.yml\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\n# Wait for all green pods to pass readiness probes\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\n# Then switch traffic:\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\n# kubectl patch service order-service -p '{\"spec\":{\"selector\":{\"version\":\"green\"}}}'\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\n# When confirmed, delete blue:\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\n# kubectl delete -f deployment-blue.yml\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\n\n// ── Canary deployment (traffic splitting) ──\n// Route 5% of traffic to the new version, monitor, then gradually increase\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: order-service\nspec:\n  hosts:\n    - order-service\n  http:\n    - match:\n        - headers:\n            canary:\n              exact: \"true\"      # Route internal testers to canary\n      route:\n        - destination:\n            host: order-service\n            subset: canary\n          weight: 100\n    - route:\n        - destination:\n            host: order-service\n            subset: stable\n          weight: 95            # 95% traffic to stable\n        - destination:\n            host: order-service\n            subset: canary\n          weight: 5             # 5% to canary\n---\napiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nmetadata:\n  name: order-service\nspec:\n  host: order-service\n  subsets:\n    - name: stable\n      labels:\n        version: v1\n    - name: canary\n      labels:\n        version: v2\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downtime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rollback Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traffic Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (gradual exposure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (per-pod)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue/Green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch moment (seconds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (all traffic at once)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (flip back)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest (small % first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (cut traffic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained (1-99%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (Service Mesh)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start with rolling (built into Kubernetes, zero configuration). Move to blue/green when you need instant rollback. Use canary only when you have a service mesh (Istio, Linkerd) and need to test new versions on real traffic."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-do-you-monitor-microservices-with-prometheus-and-grafana",
      children: "Q16: How do you monitor microservices with Prometheus and Grafana?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot Actuator exposes metrics in Prometheus format. Prometheus scrapes them. Grafana visualizes dashboards."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Dependencies ──\n// implementation 'org.springframework.boot:spring-boot-starter-actuator'\n// implementation 'io.micrometer:micrometer-registry-prometheus'\n\n// ── Configuration ──\n// application.yml:\n// management:\n//   endpoints:\n//     web:\n//       exposure:\n//         include: health,info,metrics,prometheus\n//   metrics:\n//     tags:\n//       application: ${spring.application.name}\n//     export:\n//       prometheus:\n//         enabled: true\n\n// ── Custom metrics ──\n@Service\npublic class OrderMetricsService {\n    private final Counter orderCounter;\n    private final Timer orderTimer;\n    private final DistributionSummary orderValueSummary;\n\n    public OrderMetricsService(MeterRegistry registry) {\n        orderCounter = Counter.builder(\"orders.created.total\")\n            .description(\"Total orders created\")\n            .tag(\"service\", \"order-service\")\n            .register(registry);\n\n        orderTimer = Timer.builder(\"orders.processing.time\")\n            .description(\"Time taken to process an order\")\n            .publishPercentiles(0.5, 0.95, 0.99)\n            .register(registry);\n\n        orderValueSummary = DistributionSummary.builder(\"orders.value\")\n            .description(\"Order value distribution\")\n            .baseUnit(\"USD\")\n            .publishPercentiles(0.5, 0.95, 0.99)\n            .register(registry);\n    }\n\n    public void recordOrder(BigDecimal value) {\n        orderCounter.increment();\n        orderValueSummary.record(value.doubleValue());\n    }\n\n    public <T> T measureOrderProcessing(Supplier<T> op) {\n        return orderTimer.record(op);\n    }\n}\n\n// ── Micrometer annotations ──\n@Component\npublic class PaymentProcessor {\n    @Timed(value = \"payment.processing\", percentiles = {0.5, 0.95, 0.99})\n    public PaymentResult processPayment(PaymentRequest req) {\n        // Method execution time is automatically recorded\n    }\n\n    @Counted(value = \"payment.retries\", description = \"Payment retry count\")\n    public void retryPayment(Long orderId) { }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── Prometheus config (prometheus.yml) ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\nscrape_configs:\n  - job_name: 'spring-boot-apps'\n    metrics_path: '/actuator/prometheus'\n    static_configs:\n      - targets:\n        - 'user-service:8080'\n        - 'order-service:8080'\n        - 'payment-service:8080'\n\n  - job_name: 'kubernetes-pods'\n    kubernetes_sd_configs:\n      - role: pod\n    relabel_configs:\n      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]\n        action: keep\n        regex: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── Kubernetes PodMonitor (operator-based scraping) ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\napiVersion: monitoring.coreos.com/v1\nkind: PodMonitor\nmetadata:\n  name: spring-boot-monitor\nspec:\n  selector:\n    matchLabels:\n      app: order-service\n  podMetricsEndpoints:\n    - port: http\n      path: /actuator/prometheus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grafana dashboard panels to create:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request rate (requests/sec by endpoint)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate (5xx / total requests)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency (p50, p95, p99 in ms)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JVM metrics (heap usage, GC pause time, thread count)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database connection pool (active/idle/waiting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circuit breaker state (CLOSED/OPEN/HALF_OPEN)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System metrics (CPU, memory, disk)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alert on: p99 latency > 1s, error rate > 1%, circuit breaker OPEN, heap usage > 80%, connection pool exhaustion."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-do-you-implement-contract-testing-with-spring-cloud-contract",
      children: "Q17: How do you implement contract testing with Spring Cloud Contract?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contract testing verifies that a producer's API matches what the consumer expects, without end-to-end integration tests. Spring Cloud Contract generates tests and stubs from Groovy or YAML contracts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// ── Producer contract (user-service) ──\n// File: contracts/shouldReturnUser.groovy\nContract.make {\n    description \"should return user by ID\"\n    request {\n        method GET()\n        url \"/users/1\"\n        headers {\n            accept(applicationJson())\n        }\n    }\n    response {\n        status OK()\n        headers {\n            contentType(applicationJson())\n        }\n        body([\n            id: 1,\n            name: \"Raushan\",\n            email: \"raushan@example.com\"\n        ])\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Producer-side base test (Spring Cloud Contract generates tests) ──\n// File: src/test/java/.../BaseContractTest.java\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)\n@AutoConfigureMockMvc\npublic abstract class BaseContractTest {\n    @Autowired\n    private MockMvc mockMvc;\n\n    // Spring Cloud Contract auto-creates a test class that extends this\n    // and verifies the controller matches the contract\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate contract tests + publish stubs:\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-b.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md)\n./mvnw verifystubs:8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Consumer-side (order-service uses stubs to test its client) ──\n@SpringBootTest\n@AutoConfigureStubRunner(\n    stubsMode = StubRunnerProperties.StubsMode.LOCAL,\n    ids = \"com.company:user-service:+:stubs:8080\"\n)\nclass UserServiceClientTest {\n    @Autowired\n    private UserServiceClient userClient;\n\n    @Test\n    void shouldReturnUser() {\n        UserDto user = userClient.getUser(1L);\n        assertThat(user.id()).isEqualTo(1L);\n        assertThat(user.name()).isEqualTo(\"Raushan\");\n        assertThat(user.email()).isEqualTo(\"raushan@example.com\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Cloud Contract automatically verifies that the consumer's client code works against the producer's contract. If the producer changes a response field, the consumer build breaks before deployment → not in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contract testing replaces brittle end-to-end tests for cross-service integration. Combined with consumer-driven contracts, it prevents breaking changes from reaching production."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-do-you-handle-database-per-service-with-shared-data-concerns",
      children: "Q18: How do you handle database-per-service with shared data concerns?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each microservice owns its database → no other service accesses it directly. Data that spans services is shared through events or API calls."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Anti-pattern: direct database access ──\n// order-service calls user-service's database directly → WRONG\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    // order-service should NOT have this → it violates service boundaries\n}\n\n// ── Correct: API-based data sharing ──\n// order-service calls user-service's REST API\n@FeignClient(name = \"user-service\")\npublic interface UserServiceClient {\n    @GetMapping(\"/users/{id}/shipping-address\")\n    AddressDto getShippingAddress(@PathVariable Long id);\n}\n\n// ── Correct: Event-based data sharing ──\n// When user changes their shipping address, user-service publishes an event\n@Service\npublic class UserService {\n    @Transactional\n    public void updateShippingAddress(Long userId, Address newAddress) {\n        userRepo.updateAddress(userId, newAddress);\n        // Publish event → order-service consumes and updates its local cache\n        eventPublisher.publish(new AddressChangedEvent(userId, newAddress));\n    }\n}\n\n// order-service caches only the shipping address it needs\n@Service\npublic class OrderAddressService {\n    @Autowired private OrderAddressCacheRepository addressCache;\n\n    @Transactional\n    @KafkaListener(topics = \"user.address-changed\")\n    public void handleAddressChanged(AddressChangedEvent event) {\n        orderAddressCache.save(\n            new OrderAddressCache(event.userId(), event.newAddress()));\n    }\n}\n\n@Entity\npublic class OrderAddressCache {\n    @Id private Long userId;            // Same ID as user-service\n    private String street;\n    private String city;\n    private String zipCode;\n    // Only the fields order-service needs\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strategies for cross-service data:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API calls"
        }), ": Best for real-time data (get user details when creating an order)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event replication"
        }), ": Best for reference data (cache user address locally, update via events)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API composition"
        }), ": Best for complex read models (API gateway aggregates responses)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared kernel"
        }), ": Rare → share only extremely stable data (country codes, tax rates) as a library"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never share databases between services. If two services need the same table, they are not independent → merge them into one service."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-what-are-common-microservices-anti-patterns-and-how-do-you-avoid-them",
      children: "Q19: What are common microservices anti-patterns and how do you avoid them?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Anti-pattern 1: Distributed Monolith ──\n// Services are split but share a database and cannot deploy independently\n@Entity\n@Table(name = \"orders\")\npublic class Order {\n    @ManyToOne\n    @JoinColumn(name = \"user_id\")\n    private User user;  // ← Order-service needs User entity from user-service's DB\n}\n// Fix: Each service owns its data. Order-service stores only user_id as a value.\n\n// ── Anti-pattern 2: Chatty Communication ──\n// Multiple API calls to complete one operation\n@Service\npublic class OrderService {\n    public Order createOrder(OrderRequest req) {\n        UserDto user = userClient.getUser(req.userId());          // call 1\n        AddressDto address = userClient.getAddress(req.userId()); // call 2\n        PaymentMethodDto pm = userClient.getPaymentMethod(req.userId()); // call 3\n        // Prefer bulk API: userClient.getUserWithDetails(req.userId())\n    }\n}\n\n// ── Anti-pattern 3: Shared Libraries for Domain Logic ──\n// A shared JAR that contains business logic used by multiple services\npublic class OrderValidationUtils {\n    // Any change to this requires rebuilding ALL services\n    // Fix: duplicate validation logic per service or make it a separate microservice\n}\n\n// ── Anti-pattern 4: Golden Hammer (everything must be a microservice) ──\n@SpringBootApplication\npublic class EmailSendingService { }  // Could be a simple function + queue\n// Fix: Use serverless functions for simple tasks. Not everything needs a full service.\n\n// ── Anti-pattern 5: No Monitoring or Observability ──\n// Services communicate without tracing, logging correlation, or metrics\n// Fix: Always include distributed tracing (Micrometer + Zipkin),\n// structured logging (trace ID in every log), and Prometheus metrics.\n\n// ── Anti-pattern 6: Leaky Abstractions ──\n// Internal implementation details leak through service boundaries\n@FeignClient(name = \"user-service\")\npublic interface UserServiceClient {\n    @GetMapping(\"/users/{id}/raw\")\n    String getRawUserData();  // Returns internal DB representation\n}\n// Fix: Each service has its own API contract with DTOs, not exposed entities.\n\n// ── Anti-pattern 7: Orchestration in the API Gateway ──\n@RestController\npublic class ApiGatewayController {\n    @GetMapping(\"/order-details/{orderId}\")\n    public OrderDetailsDto getOrderDetails(@PathVariable Long orderId) {\n        OrderDto order = orderClient.getOrder(orderId);\n        UserDto user = userClient.getUser(order.userId());\n        ProductDto product = productClient.getProduct(order.productId());\n        // Gateway is now doing orchestration → it should just route\n    }\n}\n// Fix: Create a dedicated order-aggregation-service for API composition.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Golden rule: If splitting a service doesn't give you independent deployability, independent scalability, or independent team ownership, don't split it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-do-you-test-microservices-end-to-end",
      children: "Q20: How do you test microservices end-to-end?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing microservices uses a pyramid: unit tests (many) → integration tests (fewer) → contract tests (per pair) → end-to-end tests (few)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Layer 1: Unit tests (fast, isolated, mock external calls) ──\n@ExtendWith(MockitoExtension.class)\nclass OrderServiceUnitTest {\n    @Mock private OrderRepository orderRepo;\n    @Mock private UserServiceClient userClient;\n    @InjectMocks private OrderService orderService;\n\n    @Test\n    void shouldCreateOrder() {\n        when(userClient.getUser(1L)).thenReturn(new UserDto(1L, \"Raushan\"));\n        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal(\"50.00\"));\n\n        Order result = orderService.createOrder(req);\n\n        assertThat(result.getStatus()).isEqualTo(\"PENDING\");\n        verify(orderRepo).save(any(Order.class));\n    }\n}\n\n// ── Layer 2: Integration tests with TestContainers ──\n@SpringBootTest\n@Testcontainers\nclass OrderServiceIntegrationTest {\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n\n    @Container\n    static KafkaContainer kafka = new KafkaContainer(DockerImageName.parse(\"confluentinc/cp-kafka:7.6.0\"));\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry reg) {\n        reg.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        reg.add(\"spring.kafka.bootstrap-servers\", kafka::getBootstrapServers);\n    }\n\n    @Autowired private OrderService orderService;\n    @Autowired private OrderRepository orderRepo;\n\n    @Test\n    void shouldPersistOrder() {\n        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal(\"50.00\"));\n\n        Order result = orderService.createOrder(req);\n\n        assertThat(orderRepo.findById(result.getId())).isPresent();\n        assertThat(result.getTotal()).isEqualByComparingTo(new BigDecimal(\"100.00\"));\n    }\n}\n\n// ── Layer 3: Contract tests (Spring Cloud Contract or Pact) ──\n@SpringBootTest\n@AutoConfigureStubRunner(\n    stubsMode = StubRunnerProperties.StubsMode.LOCAL,\n    ids = \"com.company:user-service:+:stubs:8080\")\nclass OrderServiceContractTest {\n    @Autowired\n    private UserServiceClient userClient;\n\n    @Test\n    void shouldGetUser() {\n        UserDto user = userClient.getUser(1L);\n        assertThat(user.name()).isEqualTo(\"Raushan\");\n    }\n}\n\n// ── Layer 4: End-to-end tests (few, smoke-test critical paths) ──\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@Testcontainers\nclass OrderE2ETest {\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n\n    @Container\n    static KafkaContainer kafka = new KafkaContainer(\n        DockerImageName.parse(\"confluentinc/cp-kafka:7.6.0\"));\n\n    @LocalServerPort\n    private int port;\n\n    private WebTestClient client;\n\n    @BeforeEach\n    void setUp() {\n        client = WebTestClient.bindToServer()\n            .baseUrl(\"http://localhost:\" + port)\n            .build();\n    }\n\n    @Test\n    void fullOrderFlow() {\n        // Create order via REST\n        client.post().uri(\"/orders\")\n            .bodyValue(new OrderRequest(1L, 100L, 2, new BigDecimal(\"50.00\")))\n            .exchange()\n            .expectStatus().isOk()\n            .expectBody()\n            .jsonPath(\"$.status\").isEqualTo(\"PENDING\")\n            .jsonPath(\"$.total\").isEqualTo(100.00);\n\n        // Verify Kafka event was published\n        // (consume the event from the test container and assert)\n    }\n}\n\n// ── WireMock for external service simulation ──\n@SpringBootTest\n@WireMockTest(httpPort = 9090)\nclass OrderServiceWireMockTest {\n    @Test\n    void shouldHandleUserServiceTimeout() {\n        // Simulate slow user-service response\n        stubFor(get(urlEqualTo(\"/users/1\"))\n            .willReturn(aResponse()\n                .withFixedDelay(5000)\n                .withStatus(200)));\n\n        // Circuit breaker should trigger fallback\n        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal(\"50.00\"));\n        assertThrows(CircuitBreakerOpenException.class,\n            () -> orderService.createOrder(req));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "End-to-end tests are slow and flaky. Keep them to 3-5 critical paths per service. Rely on contract tests for cross-service integration and unit tests for business logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-do-you-implement-feature-flags-for-continuous-deployment",
      children: "Q17: How do you implement feature flags for continuous deployment?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feature flags (toggles) allow deploying code to production without activating it. This enables trunk-based development, canary releases, and instant rollbacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Feature flag service ──\n@Service\npublic class FeatureFlagService {\n\n    private final Map<String, Boolean> flags = new ConcurrentHashMap<>();\n\n    public FeatureFlagService() {\n        // Load from config server, database, or external service\n        flags.put(\"new-checkout-flow\", false);\n        flags.put(\"recommendation-engine-v2\", true);\n        flags.put(\"dark-mode\", false);\n    }\n\n    public boolean isEnabled(String feature, String userId) {\n        Boolean globalEnabled = flags.get(feature);\n        if (globalEnabled == null) return false;\n\n        // Gradual rollout: enable for a percentage of users\n        if (feature.equals(\"recommendation-engine-v2\")) {\n            return userId != null && Math.abs(userId.hashCode()) % 100 < 10;\n        }\n\n        return globalEnabled;\n    }\n\n    public void setFlag(String feature, boolean enabled) {\n        flags.put(feature, enabled);\n    }\n}\n\n// ── Usage in service layer ──\n@Service\npublic class CheckoutService {\n\n    private final FeatureFlagService featureFlags;\n    private final CheckoutServiceV1 v1;\n    private final CheckoutServiceV2 v2;\n\n    public CheckoutResult checkout(OrderRequest request, String userId) {\n        if (featureFlags.isEnabled(\"new-checkout-flow\", userId)) {\n            return v2.checkout(request);  // New implementation\n        }\n        return v1.checkout(request);  // Old implementation\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Feature flag best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a centralized store (Spring Cloud Config, LaunchDarkly, Unleash) — not hardcoded maps"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Name flags clearly: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "checkout.v2.enabled"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "payment.new-processor"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove flags once the feature is stable — don't accumulate dead flags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use gradual rollouts: 1% → 10% → 50% → 100%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor flag usage — if a flag hasn't been accessed in 30 days, schedule removal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-do-you-handle-api-versioning-in-microservices",
      children: "Q18: How do you handle API versioning in microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are four main API versioning strategies, each with tradeoffs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. URI path versioning (most common):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/v1/orders\")\npublic class OrderControllerV1 { /* ... */ }\n\n@RestController\n@RequestMapping(\"/api/v2/orders\")\npublic class OrderControllerV2 { /* ... */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Clear, cacheable, easy to route"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: URL pollution, requires backward-compatible routing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Request header versioning (Accept header or custom header):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@GetMapping(value = \"/orders\", headers = \"API-Version=1\")\npublic List<Order> getOrdersV1() { /* ... */ }\n\n@GetMapping(value = \"/orders\", headers = \"API-Version=2\")\npublic List<Order> getOrdersV2() { /* ... */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Clean URLs, no URL pollution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: Harder to test from browser, cache keys must include headers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Query parameter versioning:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@GetMapping(\"/orders\")\npublic List<Order> getOrders(\n        @RequestParam(defaultValue = \"1\") int version) {\n    if (version == 1) return orderService.getAllV1();\n    return orderService.getAllV2();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Easy to implement, visible in URLs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: URL pollution, cache fragmentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Content negotiation (Accept header with custom media type):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@GetMapping(value = \"/orders\", produces = \"application/vnd.company.v1+json\")\npublic List<Order> getOrdersV1() { /* ... */ }\n\n@GetMapping(value = \"/orders\", produces = \"application/vnd.company.v2+json\")\npublic List<Order> getOrdersV2() { /* ... */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: RESTful, clean URLs, clear version contract"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: Complex client setup, harder debugging"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "URL clarity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ease of deprecation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URI path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content negotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning philosophy:"
      }), " Minimize breaking changes. Add fields instead of modifying them. Deprecate endpoints with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sunset"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deprecation"
      }), " HTTP headers. Support old versions for a defined period (e.g., 6 months) and return 410 Gone after."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes-in-microservices-testing-gfg-style",
      children: "Common Mistakes in Microservices Testing (GFG-Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-only-writing-unit-tests-no-contract-or-integration-tests",
      children: "Mistake 1: Only writing unit tests, no contract or integration tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Unit test passes, but service fails in production\n// because the actual user-service returns a different response shape\n\n// ✅ CORRECT: Add contract test with Spring Cloud Contract or Pact\n@SpringBootTest\n@AutoConfigureStubRunner(ids = \"com.example:user-service:+:stubs:8080\")\nclass OrderServiceContractTest {\n    @Autowired private OrderService orderService;\n\n    @Test\n    void shouldGetUserFromStub() {\n        UserDto user = orderService.getUser(1L);\n        assertThat(user.name()).isNotBlank();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-2-flaky-e2e-tests-blocking-the-pipeline",
      children: "Mistake 2: Flaky E2E tests blocking the pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ❌ WRONG 10+ E2E tests that fail randomly\n# Pipeline fails 3 times a day → team starts ignoring failures\n\n# ✅ CORRECT: Keep E2E smoke tests minimal, treat flaky tests as bugs\n# - 3-5 critical E2E paths only\n# - Quarantine flaky tests automatically\n# - Run integration tests in parallel, not sequentially\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-3-not-testing-failure-scenarios",
      children: "Mistake 3: Not testing failure scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Only testing the happy path\n@Test\nvoid shouldCreateOrder() { /* ... */ }\n\n// ✅ CORRECT: Test timeouts, circuit breakers, and fallbacks\n@Test\nvoid shouldFallbackWhenPaymentServiceIsDown() {\n    // Simulate timeout from payment-service\n    stubFor(post(urlEqualTo(\"/payments\"))\n        .willReturn(aResponse().withFixedDelay(10000)));\n\n    assertThrows(CircuitBreakerOpenException.class,\n        () -> orderService.createOrder(testRequest()));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-4-shared-test-databases-between-developers",
      children: "Mistake 4: Shared test databases between developers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: All developers use the same shared PostgreSQL instance\n// Tests collide → \"someone deleted my test data!\"\n\n// ✅ CORRECT: TestContainers for isolated databases\n@Container\nstatic PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n// Every developer, every CI run gets a fresh, isolated database\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testing-strategy-comparison-table",
      children: "Testing Strategy Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost to Write"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Debugging Ease"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unit test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service + DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contract test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Component test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smoke test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended distribution:"
      }), " 50% unit, 30% integration, 10% contract, 5% component, 5% E2E. Known as the \"testing trophy\" — invert the traditional pyramid for microservices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-microservices-testing-strategy",
      children: "Mermaid: Microservices Testing Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Testing Trophy (Inverted Pyramid)\"\n        A[Unit Tests<br/>50% - Fast, isolated]\n        B[Integration Tests<br/>30% - DB, Kafka, containers]\n        C[Contract Tests<br/>10% - Service boundaries]\n        D[Component Tests<br/>5% - Sliding test scope]\n        E[E2E Tests<br/>5% - Critical paths only]\n    end\n\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n\n    style A fill:#4caf50,color:#fff\n    style B fill:#2196f3,color:#fff\n    style C fill:#ff9800,color:#fff\n    style D fill:#9c27b0,color:#fff\n    style E fill:#f44336,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz--microservices-testing",
      children: "Chapter Quiz — Microservices Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which test type is best for verifying that your service correctly handles the API contract of a downstream dependency?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Unit test"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Contract test (Pact/Spring Cloud Contract)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) End-to-end test"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Load test"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Contract test.** Contract tests verify that the interaction between two services matches the agreed contract. They run faster than E2E tests and catch contract breakage early.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the recommended percentage of unit tests in a microservices testing strategy?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 10%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 25%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 50%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 80%"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**C) 50%.** Unit tests should form the largest category (50%) — they are fast, reliable, and catch logic errors. Integration, contract, component, and E2E tests fill the remaining 50%.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which API versioning strategy is most cache-friendly?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Query parameter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) URI path"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Custom header"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Body parameter"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) URI path** (and also content negotiation). URI path versioning creates unique URLs for each version, making them independently cacheable. Header-based versioning requires cache keys to account for header values.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interview Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation, Inheritance, Polymorphism, Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every interview"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List, Set, Map, Queue, Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "synchronized, volatile, Locks, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/10 senior interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 8+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas, Streams, Optional, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8/10 interviews"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Junior (0-2yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mid (3-5yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Senior (6-9yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staff (10+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP & Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define and identify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply and combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate and refactor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create and teach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance trade-offs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write thread-safe code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug deadlocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design concurrent systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between equals() and == in Java?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) equals() compares values, == compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) == compares values, equals() compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) equals() is for primitives, == is for objects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) equals() compares logical equality (overridable), == compares reference equality.**\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which collection guarantees insertion order?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) HashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) TreeMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) LinkedHashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) HashSet"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What keyword prevents a method from being overridden?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) static"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) final"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) private"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) abstract"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) final.** A final method cannot be overridden by subclasses.\n"
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