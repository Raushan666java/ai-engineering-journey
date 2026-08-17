"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81998],{

/***/ 2585
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cloud_computing_09_containerization_md_b8d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cloud-computing-09-containerization-md-b8d.json
const site_docs_courses_cloud_computing_09_containerization_md_b8d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cloud-computing/09-containerization","title":"Chapter 9: Containerization and Orchestration","description":"Previous Serverless Computing | Next Cloud Architecture Design","source":"@site/docs/courses/cloud-computing/09-containerization.md","sourceDirName":"courses/cloud-computing","slug":"/cloud-computing/09-containerization","permalink":"/ai-engineering-journey/cloud-computing/09-containerization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-containerization","slug":"/cloud-computing/09-containerization","title":"Chapter 9: Containerization and Orchestration","sidebar_label":"Chapter 9: Containerization and Orchestration","sidebar_position":9},"sidebar":"course-cloud-computing","previous":{"title":"Chapter 8: Serverless Computing","permalink":"/ai-engineering-journey/cloud-computing/08-serverless"},"next":{"title":"Chapter 10: Cloud Architecture Design Patterns","permalink":"/ai-engineering-journey/cloud-computing/10-architecture"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cloud-computing/09-containerization.md


const frontMatter = {
	id: '09-containerization',
	slug: '/cloud-computing/09-containerization',
	title: 'Chapter 9: Containerization and Orchestration',
	sidebar_label: 'Chapter 9: Containerization and Orchestration',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Containerization and Orchestration';

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
  "value": "9.1 Docker Fundamentals",
  "id": "91-docker-fundamentals",
  "level": 3
}, {
  "value": "9.2 Kubernetes Core Concepts",
  "id": "92-kubernetes-core-concepts",
  "level": 3
}, {
  "value": "\\\\yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: web-app\nlabels:\napp: web\nspec:\nreplicas: 3\nselector:\nmatchLabels:\napp: web\ntemplate:\nmetadata:\nlabels:\napp: web\nspec:\ncontainers:\n- name: app\nimage: 123456789.dkr.ecr.us-east-1.amazonaws.com/web-app:1.2.3\nports:\n- containerPort: 3000\nresources:\nrequests:\ncpu: 250m\nmemory: 256Mi\nlimits:\ncpu: 500m\nmemory: 512Mi\nlivenessProbe:\nhttpGet:\npath: /health\nport: 3000\ninitialDelaySeconds: 30\nperiodSeconds: 10",
  "id": "yamlapiversion-appsv1kind-deploymentmetadataname-web-applabelsapp-webspecreplicas-3selectormatchlabelsapp-webtemplatemetadatalabelsapp-webspeccontainers--name-appimage-123456789dkrecrus-east-1amazonawscomweb-app123ports--containerport-3000resourcesrequestscpu-250mmemory-256milimitscpu-500mmemory-512milivenessprobehttpgetpath-healthport-3000initialdelayseconds-30periodseconds-10",
  "level": 2
}, {
  "value": "9.3 Kubernetes Architecture",
  "id": "93-kubernetes-architecture",
  "level": 3
}, {
  "value": "9.4 Auto-Scaling",
  "id": "94-auto-scaling",
  "level": 3
}, {
  "value": "9.5 Container Storage",
  "id": "95-container-storage",
  "level": 3
}, {
  "value": "9.6 Container Security",
  "id": "96-container-security",
  "level": 3
}, {
  "value": "9.7 ECS vs EKS vs Fargate",
  "id": "97-ecs-vs-eks-vs-fargate",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 9.1: Multi-Stage TypeScript Dockerfile",
  "id": "example-91-multi-stage-typescript-dockerfile",
  "level": 3
}, {
  "value": "Example 9.2: CI/CD Pipeline (GitHub Actions)",
  "id": "example-92-cicd-pipeline-github-actions",
  "level": 3
}, {
  "value": "Example 9.3: Docker Compose Local Development",
  "id": "example-93-docker-compose-local-development",
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
  "value": "TypeScript: Container Orchestrator Simulator",
  "id": "typescript-container-orchestrator-simulator",
  "level": 3
}, {
  "value": "TypeScript: Kubernetes Pod Resource Scheduler",
  "id": "typescript-kubernetes-pod-resource-scheduler",
  "level": 3
}, {
  "value": "TypeScript: Docker Layer Cache Simulator",
  "id": "typescript-docker-layer-cache-simulator",
  "level": 3
}, {
  "value": "TypeScript: Pod Resource Validator &amp; HPA Config Tester",
  "id": "typescript-pod-resource-validator--hpa-config-tester",
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
        id: "chapter-9-containerization-and-orchestration",
        children: "Chapter 9: Containerization and Orchestration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/08-serverless",
          children: "Chapter 8: Serverless Computing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/10-architecture",
          children: "Chapter 10: Cloud Architecture Design"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build and optimize Docker images for cloud deployment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orchestrate containers with Kubernetes for production workloads."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design pod, service, and deployment configurations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement CI/CD pipelines for containerized applications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure auto-scaling and resource limits for container workloads."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage container registries and image lifecycle policies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply security scanning and runtime protection for containers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare ECS, EKS, Fargate, and self-managed Kubernetes trade-offs."
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
            children: "Docker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container images package code + dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build once, run anywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pods, Services, Deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECS vs EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-native vs standard Kubernetes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECS simpler, EKS more portable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fargate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No node management, higher cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated build, test, deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate with ECR and EKS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPA, Cluster Autoscaler, KEDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale pods and nodes based on metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image scanning, runtime protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan in pipeline, enforce at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Istio, App Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic management, observability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nflowchart LR\nA[Containerization] --> B[Docker Images]\nA --> C[Container Registries ECR]\nC --> D[Orchestration]\nD --> E[ECS]\nD --> F[EKS / Kubernetes]\nD --> G[Fargate]\nF --> H[Pods, Services, Deployments]\nH --> I[Auto-Scaling HPA + CA]\nH --> J[Security: RBAC, PodSecurity, NetworkPolicies]\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-docker-fundamentals",
      children: "9.1 Docker Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker packages an application with all its dependencies into a portable image file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dockerfile Layers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\dockerfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "stage-1-build",
      children: "Stage 1: Build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "stage-2-production",
      children: "Stage 2: Production"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nEXPOSE 3000\nCMD [\"node\", \"dist/index.js\"]\n\\\\"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-stage builds"
      }), " reduce final image size by separating build dependencies from runtime. The first stage includes TypeScript compiler, Dev dependencies; the second stage contains only the compiled output and production node_modules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Image Optimization:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-10x smaller images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate build and runtime stages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alpine base images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 MB vs ~1 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use alpine or distroless variants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".dockerignore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster builds, smaller context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exclude node_modules, .git, tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layer caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster CI builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order COPY by change frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distroless images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No shell, no package manager"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Docker Build Process\"\nA[Dockerfile] --> B[Layer 1: OS Base]\nB --> C[Layer 2: Dependencies]\nC --> D[Layer 3: Application Code]\nD --> E[Layer 4: Entrypoint]\nE --> F[Final Image]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    G[.dockerignore] --> A\n    H[Build Cache] --> B\n    H --> C\nend\n\nsubgraph \"Image Registries\"\n    F --> I[Local Docker]\n    F --> J[Amazon ECR]\n    F --> K[Docker Hub]\n    F --> L[GCR / Artifact Registry]\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-kubernetes-core-concepts",
      children: "9.2 Kubernetes Core Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pods:"
      }), " Smallest deployable unit in Kubernetes. One or more containers sharing network and storage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Services:"
      }), " Stable network endpoint for a set of pods. Types: ClusterIP (internal), NodePort (node port), LoadBalancer (cloud LB)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployments:"
      }), " Declarative updates for pods and ReplicaSets. Supports rolling updates and rollbacks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ConfigMaps & Secrets:"
      }), " External configuration injected into pods. ConfigMaps for non-sensitive, Secrets for sensitive data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "yamlapiversion-appsv1kind-deploymentmetadataname-web-applabelsapp-webspecreplicas-3selectormatchlabelsapp-webtemplatemetadatalabelsapp-webspeccontainers--name-appimage-123456789dkrecrus-east-1amazonawscomweb-app123ports--containerport-3000resourcesrequestscpu-250mmemory-256milimitscpu-500mmemory-512milivenessprobehttpgetpath-healthport-3000initialdelayseconds-30periodseconds-10",
      children: "\\\\yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: web-app\nlabels:\napp: web\nspec:\nreplicas: 3\nselector:\nmatchLabels:\napp: web\ntemplate:\nmetadata:\nlabels:\napp: web\nspec:\ncontainers:\n- name: app\nimage: 123456789.dkr.ecr.us-east-1.amazonaws.com/web-app:1.2.3\nports:\n- containerPort: 3000\nresources:\nrequests:\ncpu: 250m\nmemory: 256Mi\nlimits:\ncpu: 500m\nmemory: 512Mi\nlivenessProbe:\nhttpGet:\npath: /health\nport: 3000\ninitialDelaySeconds: 30\nperiodSeconds: 10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "apiVersion: v1\nkind: Service\nmetadata:\nname: web-service\nspec:\ntype: LoadBalancer\nselector:\napp: web\nports:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "port: 80\ntargetPort: 3000\n\\\\"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-kubernetes-architecture",
      children: "9.3 Kubernetes Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Kubernetes Cluster\"\nsubgraph \"Control Plane\"\nAPI[API Server]\nETCD[etcd]\nSCH[Schedule]\nCONTR[Controller Manager]\nAPI --> ETCD\nAPI --> SCH\nAPI --> CONTR\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    subgraph \"Worker Node 1\"\n        KUBE1[kubelet]\n        POD_A[Pod: app v1]\n        POD_B[Pod: app v1]\n    end\n    \n    subgraph \"Worker Node 2\"\n        KUBE2[kubelet]\n        POD_C[Pod: app v1]\n        POD_D[Pod: sidecar]\n    end\n    \n    API --> KUBE1\n    API --> KUBE2\nend\n\nINGRESS[Ingress] --> SVC[Service: web]\nSVC --> POD_A\nSVC --> POD_B\nSVC --> POD_C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-auto-scaling",
      children: "9.4 Auto-Scaling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Horizontal Pod Autoscaler (HPA):"
      }), " Scales pods based on CPU, memory, or custom metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\yaml\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\nname: web-app-hpa\nspec:\nscaleTargetRef:\napiVersion: apps/v1\nkind: Deployment\nname: web-app\nminReplicas: 3\nmaxReplicas: 20\nmetrics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type: Resource\nresource:\nname: cpu\ntarget:\ntype: Utilization\naverageUtilization: 70\n\\\\"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster Autoscaler:"
      }), " Adds or removes worker nodes based on unschedulable pods. Integrates with EC2 Auto Scaling Groups."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KEDA (Kubernetes Event-Driven Autoscaling):"
      }), " Scales based on event sources: SQS queue length, Kafka lag, Prometheus metrics, custom scalers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface AutoScalingConfig {\nminReplicas: number;\nmaxReplicas: number;\ntargetCPUUtilization: number;\nscaleUpCooldown: number;\nscaleDownCooldown: number;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class ScalingCalculator {\nconstructor(private config: AutoScalingConfig) {}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "calculateDesiredReplicas(currentCPULoad: number): number {\nconst target = this.config.targetCPUUtilization;\nconst ratio = currentCPULoad / target;\nconst desired = Math.ceil(this.config.minReplicas * ratio);\nreturn Math.min(Math.max(desired, this.config.minReplicas), this.config.maxReplicas);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const calc = new ScalingCalculator({ minReplicas: 3, maxReplicas: 20, targetCPUUtilization: 70, scaleUpCooldown: 60, scaleDownCooldown: 300 });\nconsole.log(\"Desired replicas at 90% CPU:\", calc.calculateDesiredReplicas(90));\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-container-storage",
      children: "9.5 Container Storage"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Storage Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kubernetes Volume Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ephemeral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emptyDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary scratch space, cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PersistentVolumeClaim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databases, stateful apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFS / EFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-pod shared access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-Perf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EBS / Local SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "StatefulSets:"
      }), " For stateful applications requiring stable network identities and persistent storage per pod."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\yaml\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\nname: postgres\nspec:\nserviceName: postgres\nreplicas: 3\nselector:\nmatchLabels:\napp: postgres\ntemplate:\nspec:\ncontainers:\n- name: postgres\nimage: postgres:16\nvolumeMounts:\n- name: data\nmountPath: /var/lib/postgresql/data\nvolumeClaimTemplates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "metadata:\nname: data\nspec:\naccessModes: [\"ReadWriteOnce\"]\nresources:\nrequests:\nstorage: 100Gi\n\\\\"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-container-security",
      children: "9.6 Container Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Security Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kubernetes Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECR scanning, Trivy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find vulnerabilities before deploy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetworkPolicy objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control pod-to-pod traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pod Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pod Security Standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restrict privileged containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roles, RoleBindings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege access to K8s API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "etcd encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt secrets at rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falco, Sysdig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect anomalous behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pod Security Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privileged:"
        }), " Unrestricted. For system-level components (rare)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Baseline:"
        }), " Minimal restrictions. Default for most workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restricted:"
        }), " Maximum security. No privileged containers, read-only root filesystem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface ContainerImage {\nname: string;\ntag: string;\ndigest: string;\nvulnerabilities: { critical: number; high: number; medium: number };\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class ImageScanner {\nasync scan(imageName: string): Promise<ContainerImage> {\nreturn {\nname: imageName,\ntag: \"latest\",\ndigest: \"sha256:abc123\",\nvulnerabilities: { critical: 0, high: 2, medium: 5 },\n};\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDeployable(image: ContainerImage, maxCritical = 0, maxHigh = 5): boolean {\nif (image.vulnerabilities.critical > maxCritical) {\nconsole.log(\"BLOCKED:\", image.name, \"has\", image.vulnerabilities.critical, \"critical vulns\");\nreturn false;\n}\nif (image.vulnerabilities.high > maxHigh) {\nconsole.log(\"BLOCKED:\", image.name, \"has\", image.vulnerabilities.high, \"high vulns\");\nreturn false;\n}\nreturn true;\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async function checkImage(): Promise<void> {\nconst scanner = new ImageScanner();\nconst result = await scanner.scan(\"web-app:latest\");\nconsole.log(\"Deployable:\", scanner.isDeployable(result));\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-ecs-vs-eks-vs-fargate",
      children: "9.7 ECS vs EKS vs Fargate"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EKS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fargate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (AWS-native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (standard K8s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with EKS or ECS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2 launch type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed node groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No nodes to manage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable across clouds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2 pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2 + control plane .10/hr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-task pricing (higher)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full K8s API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-91-multi-stage-typescript-dockerfile",
      children: "Example 9.1: Multi-Stage TypeScript Dockerfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\dockerfile\nFROM node:20-alpine AS builder\nWORKDIR /build\nCOPY tsconfig.json package*.json ./\nRUN npm ci\nCOPY src/ src/\nRUN npm run build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FROM node:20-alpine\nRUN apk add --no-cache tini\nWORKDIR /app\nCOPY --from=builder /build/dist ./dist\nCOPY --from=builder /build/node_modules ./node_modules\nEXPOSE 3000\nUSER node\nENTRYPOINT [\"/sbin/tini\", \"--\"]\nCMD [\"node\", \"dist/index.js\"]\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-92-cicd-pipeline-github-actions",
      children: "Example 9.2: CI/CD Pipeline (GitHub Actions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\yaml\nname: Build and Deploy\non:\npush:\nbranches: [main]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "jobs:\nbuild:\nruns-on: ubuntu-latest\nsteps:\n- uses: actions/checkout@v4\n- name: Build and scan\nrun: |\ndocker build -t app:latest .\ndocker run app:latest npm test\n- name: Push to ECR and deploy to EKS\nrun: |\naws ecr get-login-password | docker login --password-stdin\ndocker tag app:latest /app:latest\ndocker push /app:latest\nkubectl set image deployment/web-app app=/app:latest\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-93-docker-compose-local-development",
      children: "Example 9.3: Docker Compose Local Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\yaml\nversion: \"3.8\"\nservices:\napi:\nbuild: .\nports: [\"3000:3000\"]\nenvironment:\n- DB_HOST=postgres\ndepends_on: [postgres]\nvolumes:\n- ./src:/app/src\npostgres:\nimage: postgres:16\nenvironment:\nPOSTGRES_DB: myapp\nPOSTGRES_PASSWORD: devpassword\nvolumes:\n- pgdata:/var/lib/postgresql/data\nvolumes:\npgdata:\n\\\\"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Containers provide consistent, portable application packaging; Kubernetes orchestrates them at scale; and choosing ECS vs EKS vs Fargate is a trade-off between simplicity, portability, and cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always set resource requests and limits on every container. Without limits, one container can starve the entire node. Without requests, the scheduler cannot make informed placement decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Default Kubernetes Secrets are only base64-encoded, not encrypted. Enable etcd encryption at rest and use external secrets management (AWS Secrets Manager via CSI driver) for production secrets."]
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
            children: "Docker Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable application package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build once, run anywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container packaging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest K8s deployable unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One or more containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative pod management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling updates, rollbacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable network endpoint for pods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load-balanced access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal or external traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StatefulSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful pod management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable identity, storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databases, queues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ConfigMap / Secret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-sensitive vs sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature flags, DB passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pod scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU, memory, custom metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ingress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP(S) routing to services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path-based, TLS termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API routing"
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
              children: "Docker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Images, containers, Dockerfile, multi-stage builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpine for small images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kubernetes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pods, Deployments, Services, ConfigMaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative YAML config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECS, EKS, Fargate, ECR, App Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECS simpler, EKS portable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPA, Cluster Autoscaler, KEDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU, queue, event-driven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image scan, RBAC, NetworkPolicy, Falco"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CI/CD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker build, push, deploy pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate the entire flow"
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
            children: "Multi-stage Builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K8s RBAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD service accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-team isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HPA + CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance SLAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero trust networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure supply chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline gate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit compliance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary benefit of multi-stage Docker builds?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Faster local development"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Smaller final image by separating build and runtime dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Better security through network isolation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Automatic deployment to Kubernetes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Smaller final image by separating build and runtime dependencies.** Multi-stage builds use one stage with all build tools to compile the application, then copy only the compiled artifacts to a minimal runtime stage ? reducing image size by 5-10x.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which Kubernetes resource provides stable networking for a set of pods?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Deployment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Service"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ConfigMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Ingress"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Service.** Services provide a stable DNS name and IP address for a set of pods, which can change as pods are created and destroyed. Ingress is for HTTP routing; Deployments manage pod lifecycle.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ECS and EKS?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) ECS is AWS-native; EKS uses standard Kubernetes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) ECS is cheaper than EKS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ECS supports Windows containers; EKS does not"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) ECS is AWS-native; EKS uses standard Kubernetes.** ECS uses AWS-proprietary scheduling while EKS runs standard Kubernetes, making workloads portable across clouds and on-premises K8s clusters.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if a container does not specify resource limits?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It is limited to default Kubernetes limits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It can consume all CPU and memory on the node, starving other pods"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It is automatically assigned limits matching its requests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The pod is not scheduled"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) It can consume all CPU and memory on the node, starving other pods.** Without limits, a container can use unbounded resources. Always set both resource requests (for scheduling) and limits (to prevent resource starvation).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which Kubernetes security resource controls pod-to-pod traffic?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) RBAC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Pod Security Standards"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) NetworkPolicy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Secret"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) NetworkPolicy.** NetworkPolicy controls which pods can communicate with each other at the network level. RBAC controls API access; Pod Security Standards control pod capabilities.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-container-orchestrator-simulator",
      children: "TypeScript: Container Orchestrator Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PodSpec { cpu: number; mem: number; image: string; replicas: number; }\ninterface NodeResource { cpu: number; mem: number; }\n\nclass KubeScheduler {\n  private nodes: Map<string, { capacity: NodeResource; allocatable: NodeResource }> = new Map();\n\n  addNode(name: string, cpu: number, mem: number): void {\n    this.nodes.set(name, {\n      capacity: { cpu, mem },\n      allocatable: { cpu, mem },\n    });\n  }\n\n  schedule(pod: PodSpec): string[] {\n    const assignments: string[] = [];\n    for (let i = 0; i < pod.replicas; i++) {\n      for (const [name, node] of this.nodes) {\n        if (node.allocatable.cpu >= pod.cpu && node.allocatable.mem >= pod.mem) {\n          node.allocatable.cpu -= pod.cpu;\n          node.allocatable.mem -= pod.mem;\n          assignments.push(`${pod.image}@${name}`);\n          break;\n        }\n      }\n    }\n    return assignments;\n  }\n\n  utilization(): Record<string, { cpuPct: number; memPct: number }> {\n    const result: Record<string, any> = {};\n    for (const [name, node] of this.nodes) {\n      result[name] = {\n        cpuPct: ((node.capacity.cpu - node.allocatable.cpu) / node.capacity.cpu) * 100,\n        memPct: ((node.capacity.mem - node.allocatable.mem) / node.capacity.mem) * 100,\n      };\n    }\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-kubernetes-pod-resource-scheduler",
      children: "TypeScript: Kubernetes Pod Resource Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Pod {\n  name: string;\n  cpuRequest: number;\n  memoryRequestGB: number;\n  cpuLimit: number;\n  memoryLimitGB: number;\n  priority: number;\n  namespace: string;\n}\n\ninterface NodeResource {\n  name: string;\n  allocatableCPU: number;\n  allocatableMemoryGB: number;\n  allocatedCPU: number;\n  allocatedMemoryGB: number;\n  labels: Record<string, string>;\n}\n\nclass K8sScheduler {\n  private nodes: NodeResource[] = [];\n\n  addNode(node: Omit<NodeResource, \"allocatedCPU\" | \"allocatedMemoryGB\">): void {\n    this.nodes.push({ ...node, allocatedCPU: 0, allocatedMemoryGB: 0 });\n  }\n\n  schedule(pod: Pod): { node: string; status: \"scheduled\" | \"pending\" } {\n    const candidates = this.nodes\n      .filter((n) =>\n        n.allocatedCPU + pod.cpuRequest <= n.allocatableCPU &&\n        n.allocatedMemoryGB + pod.memoryRequestGB <= n.allocatableMemoryGB\n      )\n      .sort((a, b) => {\n        const aScore = (a.allocatedCPU + pod.cpuRequest) / a.allocatableCPU +\n          (a.allocatedMemoryGB + pod.memoryRequestGB) / a.allocatableMemoryGB;\n        const bScore = (b.allocatedCPU + pod.cpuRequest) / b.allocatableCPU +\n          (b.allocatedMemoryGB + pod.memoryRequestGB) / b.allocatableMemoryGB;\n        return aScore - bScore;\n      });\n\n    if (candidates.length === 0) return { node: \"\", status: \"pending\" };\n\n    const node = candidates[0];\n    node.allocatedCPU += pod.cpuRequest;\n    node.allocatedMemoryGB += pod.memoryRequestGB;\n    return { node: node.name, status: \"scheduled\" };\n  }\n\n  scheduleBatch(pods: Pod[]): { scheduled: number; pending: number; report: { pod: string; node: string }[] } {\n    const sorted = [...pods].sort((a, b) => b.priority - a.priority);\n    const report: { pod: string; node: string }[] = [];\n    let pending = 0;\n\n    for (const pod of sorted) {\n      const result = this.schedule(pod);\n      if (result.status === \"scheduled\") report.push({ pod: pod.name, node: result.node });\n      else pending++;\n    }\n\n    return { scheduled: report.length, pending, report };\n  }\n\n  getUtilization(): { node: string; cpuPercent: number; memPercent: number }[] {\n    return this.nodes.map((n) => ({\n      node: n.name,\n      cpuPercent: Math.round((n.allocatedCPU / n.allocatableCPU) * 100),\n      memPercent: Math.round((n.allocatedMemoryGB / n.allocatableMemoryGB) * 100),\n    }));\n  }\n}\n\nconst scheduler = new K8sScheduler();\nscheduler.addNode({ name: \"node-1\", allocatableCPU: 16, allocatableMemoryGB: 64, labels: { \"node-type\": \"general\" } });\nscheduler.addNode({ name: \"node-2\", allocatableCPU: 32, allocatableMemoryGB: 128, labels: { \"node-type\": \"compute\" } });\nscheduler.addNode({ name: \"node-3\", allocatableCPU: 8, allocatableMemoryGB: 32, labels: { \"node-type\": \"general\" } });\n\nconst pods: Pod[] = [\n  { name: \"web-1\", cpuRequest: 1, memoryRequestGB: 2, cpuLimit: 2, memoryLimitGB: 4, priority: 5, namespace: \"prod\" },\n  { name: \"web-2\", cpuRequest: 1, memoryRequestGB: 2, cpuLimit: 2, memoryLimitGB: 4, priority: 5, namespace: \"prod\" },\n  { name: \"db-1\", cpuRequest: 4, memoryRequestGB: 16, cpuLimit: 8, memoryLimitGB: 32, priority: 10, namespace: \"prod\" },\n  { name: \"batch-1\", cpuRequest: 8, memoryRequestGB: 32, cpuLimit: 16, memoryLimitGB: 64, priority: 3, namespace: \"batch\" },\n  { name: \"cache-1\", cpuRequest: 2, memoryRequestGB: 8, cpuLimit: 4, memoryLimitGB: 16, priority: 7, namespace: \"prod\" },\n];\n\nconst batchResult = scheduler.scheduleBatch(pods);\nconsole.log(`Scheduled: ${batchResult.scheduled}, Pending: ${batchResult.pending}`);\nconsole.log(\"Node utilization:\", JSON.stringify(scheduler.getUtilization(), null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-docker-layer-cache-simulator",
      children: "TypeScript: Docker Layer Cache Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Layer {\n  id: string;\n  command: string;\n  sizeMB: number;\n  cacheHit: boolean;\n}\n\ninterface Dockerfile {\n  baseImage: string;\n  layers: { command: string; sizeMB: number }[];\n}\n\nclass DockerBuildCache {\n  private cache: Map<string, Layer[]> = new Map();\n  private hitCount: number = 0;\n  private missCount: number = 0;\n\n  private hashLayer(command: string): string {\n    let hash = 0;\n    for (let i = 0; i < command.length; i++) {\n      const char = command.charCodeAt(i);\n      hash = ((hash << 5) - hash) + char;\n      hash |= 0;\n    }\n    return `layer-${Math.abs(hash).toString(16).slice(0, 8)}`;\n  }\n\n  build(dockerfile: Dockerfile, tag: string): Layer[] {\n    const result: Layer[] = [];\n    let invalidated = false;\n\n    const cached = this.cache.get(tag) || [];\n\n    for (const layerDef of dockerfile.layers) {\n      const layerId = this.hashLayer(layerDef.command);\n      const cachedLayer = cached.find((l) => l.id === layerId && !invalidated);\n\n      if (cachedLayer) {\n        result.push({ ...cachedLayer, cacheHit: true });\n        this.hitCount++;\n      } else {\n        result.push({ id: layerId, command: layerDef.command, sizeMB: layerDef.sizeMB, cacheHit: false });\n        this.missCount++;\n        invalidated = true;\n      }\n    }\n\n    this.cache.set(tag, result);\n    console.log(`Build ${tag}: ${result.filter((l) => l.cacheHit).length} cache hits, ${result.filter((l) => !l.cacheHit).length} new layers`);\n    return result;\n  }\n\n  getStats(): { hitRatio: number; totalBuilds: number; cacheSizeMB: number } {\n    const total = this.hitCount + this.missCount;\n    const allLayers = [...this.cache.values()].flat();\n    return {\n      hitRatio: total > 0 ? Math.round((this.hitCount / total) * 10000) / 100 : 0,\n      totalBuilds: this.cache.size,\n      cacheSizeMB: allLayers.reduce((s, l) => s + l.sizeMB, 0),\n    };\n  }\n}\n\nconst cache = new DockerBuildCache();\nconst appDockerfile: Dockerfile = {\n  baseImage: \"node:20-alpine\",\n  layers: [\n    { command: \"COPY package.json package-lock.json\", sizeMB: 1 },\n    { command: \"RUN npm ci --production\", sizeMB: 150 },\n    { command: \"COPY src/\", sizeMB: 20 },\n    { command: \"RUN npm run build\", sizeMB: 30 },\n    { command: \"RUN rm -rf node_modules && npm ci --production\", sizeMB: 120 },\n  ],\n};\ncache.build(appDockerfile, \"myapp:1.0\");\ncache.build(appDockerfile, \"myapp:1.0\");\nconst changedDockerfile: Dockerfile = {\n  baseImage: \"node:20-alpine\",\n  layers: [\n    { command: \"COPY package.json package-lock.json\", sizeMB: 1 },\n    { command: \"RUN npm ci --production\", sizeMB: 150 },\n    { command: \"COPY src/\", sizeMB: 22 },\n    { command: \"RUN npm run build\", sizeMB: 35 },\n    { command: \"RUN rm -rf node_modules && npm ci --production\", sizeMB: 120 },\n  ],\n};\ncache.build(changedDockerfile, \"myapp:1.1\");\nconsole.log(\"Cache stats:\", JSON.stringify(cache.getStats(), null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-pod-resource-validator--hpa-config-tester",
      children: "TypeScript: Pod Resource Validator & HPA Config Tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PodResources { requests: { cpu: string; memory: string }; limits: { cpu: string; memory: string }; replicas: number; }\ninterface HPAConfig { minReplicas: number; maxReplicas: number; targetCPUUtilization: number; targetMemoryUtilization?: number; }\n\nclass PodValidator {\n  validate(resources: PodResources, nodeCapacity: { cpuCores: number; memoryGB: number }, nodeCount: number): { valid: boolean; issues: string[]; maxPodsPerNode: number } {\n    const issues: string[] = [];\n    const reqCPU = parseInt(resources.requests.cpu) || 0;\n    const reqMem = parseInt(resources.requests.memory) || 0;\n    const limCPU = parseInt(resources.limits.cpu) || 0;\n    const limMem = parseInt(resources.limits.memory) || 0;\n\n    if (reqCPU > limCPU && limCPU > 0) issues.push(\"CPU request exceeds limit\");\n    if (reqMem > limMem && limMem > 0) issues.push(\"Memory request exceeds limit\");\n    if (reqCPU <= 0) issues.push(\"CPU request not set\");\n    if (reqMem <= 0) issues.push(\"Memory request not set\");\n\n    const maxByCPU = Math.floor((nodeCapacity.cpuCores * 1000) / Math.max(reqCPU, 1));\n    const maxByMem = Math.floor((nodeCapacity.memoryGB * 1024) / Math.max(reqMem, 1));\n    const maxPodsPerNode = Math.min(maxByCPU, maxByMem);\n\n    const totalPods = maxPodsPerNode * nodeCount;\n    if (resources.replicas > totalPods) issues.push(`Replicas (${resources.replicas}) exceed cluster pod capacity (${totalPods})`);\n\n    return { valid: issues.length === 0, issues, maxPodsPerNode };\n  }\n\n  testHPA(config: HPAConfig, currentReplicas: number, currentCPU: number): { desiredReplicas: number; scalingReason: string } {\n    const ratio = currentCPU / config.targetCPUUtilization;\n    let desiredReplicas = Math.round(currentReplicas * ratio);\n    desiredReplicas = Math.max(config.minReplicas, Math.min(config.maxReplicas, desiredReplicas));\n    let reason = \"\";\n    if (desiredReplicas > currentReplicas) reason = `Scaling up: CPU ${currentCPU}% > target ${config.targetCPUUtilization}%`;\n    else if (desiredReplicas < currentReplicas) reason = `Scaling down: CPU ${currentCPU}% < target ${config.targetCPUUtilization}%`;\n    else reason = \"Stable\";\n    return { desiredReplicas, scalingReason: reason };\n  }\n}\n\nconst pv = new PodValidator();\nconst val = pv.validate({ requests: { cpu: \"500m\", memory: \"512Mi\" }, limits: { cpu: \"1\", memory: \"1Gi\" }, replicas: 20 }, { cpuCores: 8, memoryGB: 32 }, 3);\nconsole.log(\"Pod validation:\", val.valid ? \"PASS\" : val.issues.join(\"; \"));\nconsole.log(\"HPA test:\", JSON.stringify(pv.testHPA({ minReplicas: 3, maxReplicas: 30, targetCPUUtilization: 70 }, 10, 90), null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// containerization\n// iaas-paas-saas-cloud-native implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'containerization', data: { topic: 'iaas-paas-saas-cloud-native' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// containerization - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'cloud-services demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'containerization' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('cloud-services'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- Docker packages applications with dependencies into portable images.\n- Kubernetes orchestrates containers at scale with self-healing and rolling updates.\n- Multi-stage builds significantly reduce production image sizes.\n- Fargate removes node management overhead at higher per-task cost.\n- Container security spans image scanning, RBAC, and runtime protection.\n- HPA scales pods on CPU/memory; Cluster Autoscaler scales nodes.\n- ECS and EKS offer managed Kubernetes with different trade-offs.\n- Docker containers provide consistent, portable application packaging through images.\n- Kubernetes orchestrates containers with Pods, Services, Deployments, and ConfigMaps.\n- Multi-stage builds and Alpine base images significantly reduce container image size.\n- Auto-scaling combines HPA (pod scaling) with Cluster Autoscaler (node scaling).\n- ECS offers simpler AWS-native orchestration; EKS provides standard Kubernetes portability.\n- Fargate eliminates node management at a higher per-task cost.\n- Container security spans image scanning, RBAC, Network Policies, and runtime protection.\n\n## Exercises\n\n### Review Questions\n\n1. Explain the difference between ECS, EKS, and Fargate and when to use each.\n2. What is a multi-stage Docker build and why is it important for production images?\n3. Describe the relationship between Pods, Services, and Deployments in Kubernetes.\n4. How does Horizontal Pod Autoscaling work and what metrics can trigger scaling?\n5. What security measures should be applied to container workloads in production?\n6. Compare StatefulSets vs Deployments and when to use each.\n\n### Application Problems\n\n1. Write a multi-stage Dockerfile for a TypeScript application that produces an image under 150 MB.\n\n2. Design a Kubernetes deployment for a Node.js web app with environment-specific ConfigMaps, secrets from Secrets Manager, and an ALB Ingress.\n\n3. A container periodically consumes 200% CPU during batch processing. Design a resource configuration and autoscaling strategy that handles this spike without affecting other workloads.\n\n4. Create a CI/CD pipeline for a containerized application with build, scan, push, and deploy stages using GitHub Actions and EKS.\n\n5. Design a service mesh architecture with traffic splitting for canary deployments of a microservice in EKS.\n\n### Challenge Problem\n\nDesign a complete container platform for a SaaS company migrating from EC2. Requirements: 1) Multi-tenant isolation at the cluster level, 2) Auto-scaling based on SQS queue depth and CPU, 3) Blue/green deployments with traffic shifting, 4) Centralized logging and monitoring, 5) Secret rotation without pod restart, 6) Network policies enforcing zero trust, 7) Image scanning gating the pipeline, 8) Cost allocation per tenant. Propose specific services, YAML configurations, and architecture diagrams.\n"
      })
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