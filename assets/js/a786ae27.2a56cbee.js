"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82626],{

/***/ 58994
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_63_interview_tools_md_a78_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-63-interview-tools-md-a78.json
const site_docs_courses_java_63_interview_tools_md_a78_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/63-interview-tools","title":"63. Tools & DevOps — Interview Q&A","description":"Previous Design Patterns Interview Q&amp;A","source":"@site/docs/courses/java/63-interview-tools.md","sourceDirName":"courses/java","slug":"/java/63-interview-tools","permalink":"/ai-engineering-journey/java/63-interview-tools","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":71,"frontMatter":{"id":"63-interview-tools","slug":"/java/63-interview-tools","title":"63. Tools & DevOps — Interview Q&A","sidebar_label":"63. Tools & DevOps — Interview Q&A","sidebar_position":71},"sidebar":"course-java","previous":{"title":"Testing Interview Q&A","permalink":"/ai-engineering-journey/java/62-interview-testing"},"next":{"title":"64. Design Patterns → Interview Q&A","permalink":"/ai-engineering-journey/java/64-interview-design-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/63-interview-tools.md


const frontMatter = {
	id: '63-interview-tools',
	slug: '/java/63-interview-tools',
	title: '63. Tools & DevOps — Interview Q&A',
	sidebar_label: '63. Tools & DevOps — Interview Q&A',
	sidebar_position: 71
};
const contentTitle = '63. Tools & DevOps — Interview Q&A';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Q1: What is Maven and what problem does it solve?",
  "id": "q1-what-is-maven-and-what-problem-does-it-solve",
  "level": 3
}, {
  "value": "Q2: What are the key differences between Maven and Gradle?",
  "id": "q2-what-are-the-key-differences-between-maven-and-gradle",
  "level": 3
}, {
  "value": "Q3: What is the Maven lifecycle and what are its phases?",
  "id": "q3-what-is-the-maven-lifecycle-and-what-are-its-phases",
  "level": 3
}, {
  "value": "Q4: How does Gradle incremental build work?",
  "id": "q4-how-does-gradle-incremental-build-work",
  "level": 3
}, {
  "value": "Q5: What are Maven BOMs and how do they help manage dependencies?",
  "id": "q5-what-are-maven-boms-and-how-do-they-help-manage-dependencies",
  "level": 3
}, {
  "value": "Q6: What is Docker and why is it important for Java applications?",
  "id": "q6-what-is-docker-and-why-is-it-important-for-java-applications",
  "level": 3
}, {
  "value": "Q7: What are best practices for writing Dockerfiles for Java applications?",
  "id": "q7-what-are-best-practices-for-writing-dockerfiles-for-java-applications",
  "level": 3
}, {
  "value": "Q8: What is Docker Compose and when should you use it?",
  "id": "q8-what-is-docker-compose-and-when-should-you-use-it",
  "level": 3
}, {
  "value": "Q9: What is Kubernetes and what problems does it solve for Java microservices?",
  "id": "q9-what-is-kubernetes-and-what-problems-does-it-solve-for-java-microservices",
  "level": 3
}, {
  "value": "Q10: How do you configure Spring Boot health probes for Kubernetes?",
  "id": "q10-how-do-you-configure-spring-boot-health-probes-for-kubernetes",
  "level": 3
}, {
  "value": "Q11: What is a CI/CD pipeline and how do you build one for a Java project?",
  "id": "q11-what-is-a-cicd-pipeline-and-how-do-you-build-one-for-a-java-project",
  "level": 3
}, {
  "value": "Q12: What is the difference between blue-green and canary deployment?",
  "id": "q12-what-is-the-difference-between-blue-green-and-canary-deployment",
  "level": 3
}, {
  "value": "Q13: What monitoring metrics are essential for a Java microservice?",
  "id": "q13-what-monitoring-metrics-are-essential-for-a-java-microservice",
  "level": 3
}, {
  "value": "Q14: How do you implement centralized logging for microservices?",
  "id": "q14-how-do-you-implement-centralized-logging-for-microservices",
  "level": 3
}, {
  "value": "Q15: What are health checks and why are they important?",
  "id": "q15-what-are-health-checks-and-why-are-they-important",
  "level": 3
}, {
  "value": "Q16: What Git branching strategy works best for microservices?",
  "id": "q16-what-git-branching-strategy-works-best-for-microservices",
  "level": 3
}, {
  "value": "Q17: What do you look for in a code review?",
  "id": "q17-what-do-you-look-for-in-a-code-review",
  "level": 3
}, {
  "value": "Q18: What is Flyway and how do you use it for database migrations?",
  "id": "q18-what-is-flyway-and-how-do-you-use-it-for-database-migrations",
  "level": 3
}, {
  "value": "Q19: Flyway vs Liquibase?",
  "id": "q19-flyway-vs-liquibase",
  "level": 3
}, {
  "value": "Q20: How do you ensure database migrations are safe in production?",
  "id": "q20-how-do-you-ensure-database-migrations-are-safe-in-production",
  "level": 3
}, {
  "value": "Q21: What is the Twelve-Factor App methodology?",
  "id": "q21-what-is-the-twelve-factor-app-methodology",
  "level": 3
}, {
  "value": "Q22: How do you implement graceful shutdown in Spring Boot?",
  "id": "q22-how-do-you-implement-graceful-shutdown-in-spring-boot",
  "level": 3
}, {
  "value": "Q23: What is SLF4J and why is it the standard logging facade for Java?",
  "id": "q23-what-is-slf4j-and-why-is-it-the-standard-logging-facade-for-java",
  "level": 3
}, {
  "value": "Q24: How do you troubleshoot performance issues in production?",
  "id": "q24-how-do-you-troubleshoot-performance-issues-in-production",
  "level": 3
}, {
  "value": "Q25: Performance vs load vs stress testing?",
  "id": "q25-performance-vs-load-vs-stress-testing",
  "level": 3
}, {
  "value": "Q26: How do you handle secrets management?",
  "id": "q26-how-do-you-handle-secrets-management",
  "level": 3
}, {
  "value": "Q27: What is GitOps?",
  "id": "q27-what-is-gitops",
  "level": 3
}, {
  "value": "Q28: Helm vs Kustomize?",
  "id": "q28-helm-vs-kustomize",
  "level": 3
}, {
  "value": "Q29: What is a service mesh (Istio vs Linkerd)?",
  "id": "q29-what-is-a-service-mesh-istio-vs-linkerd",
  "level": 3
}, {
  "value": "Q30: What are Docker volume types?",
  "id": "q30-what-are-docker-volume-types",
  "level": 3
}, {
  "value": "Q31: How do Docker containers communicate?",
  "id": "q31-how-do-docker-containers-communicate",
  "level": 3
}, {
  "value": "Q32: What is a container registry?",
  "id": "q32-what-is-a-container-registry",
  "level": 3
}, {
  "value": "Q33: Readiness probe vs liveness probe vs startup probe?",
  "id": "q33-readiness-probe-vs-liveness-probe-vs-startup-probe",
  "level": 3
}, {
  "value": "Q34: How do you use ConfigMaps with Spring Boot?",
  "id": "q34-how-do-you-use-configmaps-with-spring-boot",
  "level": 3
}, {
  "value": "Q35: What is a Kubernetes Ingress?",
  "id": "q35-what-is-a-kubernetes-ingress",
  "level": 3
}, {
  "value": "Q36: Kubernetes Service vs Ingress?",
  "id": "q36-kubernetes-service-vs-ingress",
  "level": 3
}, {
  "value": "Q37: Kubernetes resource model (Requests vs Limits)?",
  "id": "q37-kubernetes-resource-model-requests-vs-limits",
  "level": 3
}, {
  "value": "Q38: How do you achieve zero-downtime deployments in Kubernetes?",
  "id": "q38-how-do-you-achieve-zero-downtime-deployments-in-kubernetes",
  "level": 3
}, {
  "value": "Q39: Reverse proxy vs forward proxy?",
  "id": "q39-reverse-proxy-vs-forward-proxy",
  "level": 3
}, {
  "value": "Q40: What is the role of a message broker in microservices?",
  "id": "q40-what-is-the-role-of-a-message-broker-in-microservices",
  "level": 3
}, {
  "value": "Q41: Queue vs topic in messaging?",
  "id": "q41-queue-vs-topic-in-messaging",
  "level": 3
}, {
  "value": "Q42: What is the Circuit Breaker pattern?",
  "id": "q42-what-is-the-circuit-breaker-pattern",
  "level": 3
}, {
  "value": "Q43: Retry vs Circuit Breaker?",
  "id": "q43-retry-vs-circuit-breaker",
  "level": 3
}, {
  "value": "Q44: What is the Bulkhead pattern?",
  "id": "q44-what-is-the-bulkhead-pattern",
  "level": 3
}, {
  "value": "Q45: How do you implement observability (logging, metrics, tracing)?",
  "id": "q45-how-do-you-implement-observability-logging-metrics-tracing",
  "level": 3
}, {
  "value": "Q46: What is Prometheus?",
  "id": "q46-what-is-prometheus",
  "level": 3
}, {
  "value": "Q47: What is Grafana?",
  "id": "q47-what-is-grafana",
  "level": 3
}, {
  "value": "Q48: APM vs traditional monitoring?",
  "id": "q48-apm-vs-traditional-monitoring",
  "level": 3
}, {
  "value": "Q49: Structured vs unstructured logging?",
  "id": "q49-structured-vs-unstructured-logging",
  "level": 3
}, {
  "value": "Q50: Best practices for log levels?",
  "id": "q50-best-practices-for-log-levels",
  "level": 3
}, {
  "value": "Q51: How do you implement health checks for external dependencies?",
  "id": "q51-how-do-you-implement-health-checks-for-external-dependencies",
  "level": 3
}, {
  "value": "Q52: How do you manage database connection pools?",
  "id": "q52-how-do-you-manage-database-connection-pools",
  "level": 3
}, {
  "value": "Q53: Monorepo vs multi-repo for microservices?",
  "id": "q53-monorepo-vs-multi-repo-for-microservices",
  "level": 3
}, {
  "value": "Q54: Semantic versioning for microservices?",
  "id": "q54-semantic-versioning-for-microservices",
  "level": 3
}, {
  "value": "Q55: REST vs gRPC?",
  "id": "q55-rest-vs-grpc",
  "level": 3
}, {
  "value": "Q56: Database migrations across microservices?",
  "id": "q56-database-migrations-across-microservices",
  "level": 3
}, {
  "value": "Q57: Deployment safety in Kubernetes?",
  "id": "q57-deployment-safety-in-kubernetes",
  "level": 3
}, {
  "value": "Q58: Horizontal vs vertical scaling?",
  "id": "q58-horizontal-vs-vertical-scaling",
  "level": 3
}, {
  "value": "Q59: Stress testing and capacity planning?",
  "id": "q59-stress-testing-and-capacity-planning",
  "level": 3
}, {
  "value": "Q60: What is a Kubernetes Operator?",
  "id": "q60-what-is-a-kubernetes-operator",
  "level": 3
}, {
  "value": "Q61: Setting up a development environment for microservices?",
  "id": "q61-setting-up-a-development-environment-for-microservices",
  "level": 3
}, {
  "value": "Q62: What is Testcontainers and how does it improve tests?",
  "id": "q62-what-is-testcontainers-and-how-does-it-improve-tests",
  "level": 3
}, {
  "value": "Q63: Testing async code (Kafka, CompletableFuture)?",
  "id": "q63-testing-async-code-kafka-completablefuture",
  "level": 3
}, {
  "value": "Q64: What is contract testing?",
  "id": "q64-what-is-contract-testing",
  "level": 3
}, {
  "value": "Q65: What is a Docker layer cache and how do you optimize it?",
  "id": "q65-what-is-a-docker-layer-cache-and-how-do-you-optimize-it",
  "level": 3
}, {
  "value": "Q66: How do you handle configuration for multiple environments?",
  "id": "q66-how-do-you-handle-configuration-for-multiple-environments",
  "level": 3
}, {
  "value": "Q67: What is the ELK/EFK stack?",
  "id": "q67-what-is-the-elkefk-stack",
  "level": 3
}, {
  "value": "Q68: Centralized logging vs distributed tracing?",
  "id": "q68-centralized-logging-vs-distributed-tracing",
  "level": 3
}, {
  "value": "Q69: How do you handle file uploads in Kubernetes?",
  "id": "q69-how-do-you-handle-file-uploads-in-kubernetes",
  "level": 3
}, {
  "value": "Q70: What is a PodDisruptionBudget?",
  "id": "q70-what-is-a-poddisruptionbudget",
  "level": 3
}, {
  "value": "Q71: Docker Compose advanced features (depends_on conditions, healthchecks, profiles, extends)?",
  "id": "q71-docker-compose-advanced-features-depends_on-conditions-healthchecks-profiles-extends",
  "level": 3
}, {
  "value": "Q72: Dockerfile best practices (COPY vs ADD, .dockerignore, cache optimization)?",
  "id": "q72-dockerfile-best-practices-copy-vs-add-dockerignore-cache-optimization",
  "level": 3
}, {
  "value": "Q73: Kubernetes Persistent Volumes, PVCs, and StorageClasses?",
  "id": "q73-kubernetes-persistent-volumes-pvcs-and-storageclasses",
  "level": 3
}, {
  "value": "Q74: Helm (templating, values, hooks, dependencies)?",
  "id": "q74-helm-templating-values-hooks-dependencies",
  "level": 3
}, {
  "value": "Q75: Kubernetes RBAC (Roles, RoleBindings, ClusterRoles, ServiceAccounts)?",
  "id": "q75-kubernetes-rbac-roles-rolebindings-clusterroles-serviceaccounts",
  "level": 3
}, {
  "value": "Q76: Kubernetes Network Policies and Pod Security Admission?",
  "id": "q76-kubernetes-network-policies-and-pod-security-admission",
  "level": 3
}, {
  "value": "Q77: Kubernetes monitoring with metrics-server, Prometheus operator, kube-state-metrics?",
  "id": "q77-kubernetes-monitoring-with-metrics-server-prometheus-operator-kube-state-metrics",
  "level": 3
}, {
  "value": "Q78: GitHub Actions reusable workflows and composite actions?",
  "id": "q78-github-actions-reusable-workflows-and-composite-actions",
  "level": 3
}, {
  "value": "Q79: ArgoCD GitOps (Application, ApplicationSet, sync policy, sync waves)?",
  "id": "q79-argocd-gitops-application-applicationset-sync-policy-sync-waves",
  "level": 3
}, {
  "value": "Q80: Terraform IaC (state, providers, modules, workspaces, remote state)?",
  "id": "q80-terraform-iac-state-providers-modules-workspaces-remote-state",
  "level": 3
}, {
  "value": "Q81: Sentry, DataDog, and NewRelic for Java APM?",
  "id": "q81-sentry-datadog-and-newrelic-for-java-apm",
  "level": 3
}, {
  "value": "Q82: Database tools (pgAdmin, DBeaver, DataGrip, MySQL Workbench)?",
  "id": "q82-database-tools-pgadmin-dbeaver-datagrip-mysql-workbench",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "63-tools--devops--interview-qa",
        children: "63. Tools & DevOps — Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/62-interview-testing",
          children: "Testing Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/64-interview-design-patterns",
          children: "Design Patterns Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the essential tools and DevOps practices every Java backend developer needs to know: build tools, containers, orchestration, CI/CD, monitoring, logging, version control, code review, and database migrations."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/63-interview-tools.png",
        alt: "DevOps Tools Interview Topics - Mindmap"
      })
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
        href: "../../assets/images/lessons/java/63-interview-tools/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/63-interview-tools/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/63-interview-tools/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/63-interview-tools/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/63-interview-tools/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/63-interview-tools/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
      id: "q1-what-is-maven-and-what-problem-does-it-solve",
      children: "Q1: What is Maven and what problem does it solve?"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Maven is a build automation and dependency management tool for Java projects. Before Maven, Java projects had no standardized build process — developers used Ant with hand-written XML build files that required manually specifying every compile, test, and packaging step. Dependencies were downloaded and stored in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lib/"
      }), " folders checked into version control, leading to bloated repositories and version conflicts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maven introduced two key innovations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convention over configuration"
        }), " — a standard project layout (", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/main/java"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/test/java"
        }), ", etc.) means a Maven project can be built without any custom configuration for standard cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declarative dependency management"
        }), " — dependencies are declared in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pom.xml"
        }), " with groupId, artifactId, and version; Maven automatically downloads them from repositories (Maven Central) and manages transitive dependencies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1.0.0</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n            <version>3.2.0</version>\n        </dependency>\n    </dependencies>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maven also provides a lifecycle (validate, compile, test, package, verify, install, deploy) that standardizes when plugins execute, and a vast ecosystem of plugins for code coverage, static analysis, and more."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-are-the-key-differences-between-maven-and-gradle",
      children: "Q2: What are the key differences between Maven and Gradle?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maven"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gradle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build file"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XML (", (0,jsx_runtime.jsx)(_components.code, {
              children: "pom.xml"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Groovy or Kotlin DSL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower — sequential phases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster — incremental builds, build cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rigid lifecycle — hard to inject custom logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly flexible — tasks with custom dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dependency mgmt"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<dependencyManagement>"
            }), " BOM style"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "platform()"
            }), " and version catalogs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build script logic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugins only — no imperative logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full programming language available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ecosystem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Older, more established"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newer, rapidly growing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Choose ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maven"
      }), " for teams that value predictability and strict conventions. Choose ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradle"
      }), " for large monorepos needing incremental builds or when custom build logic is required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-maven-lifecycle-and-what-are-its-phases",
      children: "Q3: What is the Maven lifecycle and what are its phases?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Maven has three built-in lifecycles: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "default"
      }), " (main build), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "clean"
      }), " (cleanup), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "site"
      }), " (documentation). The default lifecycle phases in order:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "validate   → Project is correct and all necessary info is available\ncompile    → Compiles the source code\ntest       → Tests using a unit test framework\npackage    → Packages into JAR/WAR\nverify     → Integration tests and quality checks\ninstall    → Installs into local repository for use as dependency\ndeploy     → Copies to remote repository for sharing\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each phase executes sequentially — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn package"
      }), " runs validate, compile, test, and package. Plugins bind goals to lifecycle phases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-does-gradle-incremental-build-work",
      children: "Q4: How does Gradle incremental build work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Gradle tracks ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inputs"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "outputs"
      }), " for every task. If neither inputs nor outputs have changed since the last execution, the task is marked ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UP-TO-DATE"
      }), " and skipped entirely. Inputs include source files, task configuration, and system properties. Outputs include files and directories produced by the task."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "build cache"
      }), " extends this across machines — CI can publish cache entries to a shared cache (HTTP or S3), and developer machines pull those entries instead of rebuilding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-are-maven-boms-and-how-do-they-help-manage-dependencies",
      children: "Q5: What are Maven BOMs and how do they help manage dependencies?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A BOM (Bill of Materials) centralizes dependency versions. Instead of specifying versions in every module's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pom.xml"
      }), ", you import a BOM and omit versions in individual dependency declarations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.fasterxml.jackson</groupId>\n            <artifactId>jackson-bom</artifactId>\n            <version>2.16.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-dependencies"
      }), " as a BOM — that's why you don't specify versions for most Spring dependencies when using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-parent"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-docker-and-why-is-it-important-for-java-applications",
      children: "Q6: What is Docker and why is it important for Java applications?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Docker packages an application and its dependencies into a lightweight, portable container image. For Java, it solves the \"works on my machine\" problem by ensuring the exact same environment (OS, JDK version, system libraries) runs everywhere."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-stage Docker build for Spring Boot:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Stage 1: Build with JDK + Maven\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nFROM eclipse-temurin:17-jdk-alpine AS builder\nWORKDIR /app\nCOPY mvnw pom.xml ./\nCOPY .mvn .mvn\nRUN ./mvnw dependency:go-offline\nCOPY src src\nRUN ./mvnw package -DskipTests\n\n# Stage 2: Runtime with JRE only (much smaller)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nFROM eclipse-temurin:17-jre-alpine\nWORKDIR /app\nCOPY --from=builder /app/target/*.jar app.jar\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-are-best-practices-for-writing-dockerfiles-for-java-applications",
      children: "Q7: What are best practices for writing Dockerfiles for Java applications?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use specific base image tags"
        }), " — never ", (0,jsx_runtime.jsx)(_components.code, {
          children: ":latest"
        }), ". Pin to specific versions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leverage layer caching"
        }), " — order commands from least to most frequently changing. Copy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pom.xml"
        }), " and download dependencies before source code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use multi-stage builds"
        }), " — keep JDK and build tools out of runtime images."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run as non-root user"
        }), " — create a dedicated user: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RUN addgroup -S appgroup && adduser -S appuser -G appgroup"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimize JVM for containers"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set memory limits"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker run -m 512m my-app"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use health checks"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HEALTHCHECK --interval=30s --timeout=3s CMD wget --spider http://localhost:8080/actuator/health"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-docker-compose-and-when-should-you-use-it",
      children: "Q8: What is Docker Compose and when should you use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Docker Compose defines multi-container applications using a YAML file. It's ideal for local development and test environments where you need to run several services together."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: '3.8'\nservices:\n  app:\n    build: .\n    ports:\n      - \"8080:8080\"\n    environment:\n      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/mydb\n      SPRING_DATA_REDIS_HOST: redis\n    depends_on:\n      - db\n      - redis\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: mydb\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: secret\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n  redis:\n    image: redis:7-alpine\nvolumes:\n  pgdata:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use for: local development, CI test environments, staging. Not for production — use Kubernetes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-kubernetes-and-what-problems-does-it-solve-for-java-microservices",
      children: "Q9: What is Kubernetes and what problems does it solve for Java microservices?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Kubernetes (K8s) is a container orchestration platform that automates deployment, scaling, and management of containerized applications. For Java microservices, it solves:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service discovery"
        }), " — pods get DNS names and find each other via Services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-healing"
        }), " — restarts failed containers, reschedules failed nodes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal scaling"
        }), " — auto-scales pods based on CPU/memory or custom metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rolling updates"
        }), " — deploys new versions without downtime"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration management"
        }), " — ConfigMaps and Secrets inject configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource management"
        }), " — CPU/memory requests and limits per pod"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: order-service\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: order-service\n  template:\n    metadata:\n      labels:\n        app: order-service\n    spec:\n      containers:\n      - name: order-service\n        image: registry.example.com/order-service:1.2.3\n        ports:\n        - containerPort: 8080\n        resources:\n          requests:\n            memory: \"256Mi\"\n            cpu: \"250m\"\n          limits:\n            memory: \"512Mi\"\n            cpu: \"500m\"\n        livenessProbe:\n          httpGet:\n            path: /actuator/health/liveness\n            port: 8080\n          initialDelaySeconds: 30\n        readinessProbe:\n          httpGet:\n            path: /actuator/health/readiness\n            port: 8080\n          initialDelaySeconds: 20\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: order-service\nspec:\n  selector:\n    app: order-service\n  ports:\n  - port: 80\n    targetPort: 8080\n  type: ClusterIP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-do-you-configure-spring-boot-health-probes-for-kubernetes",
      children: "Q10: How do you configure Spring Boot health probes for Kubernetes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Spring Boot Actuator provides dedicated endpoints for liveness and readiness checks:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoint:\n    health:\n      probes:\n        enabled: true\n  health:\n    livenessstate:\n      enabled: true\n    readinessstate:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This exposes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/health/liveness"
      }), " (is the app alive? restart if stuck) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/health/readiness"
      }), " (can the app accept traffic? remove from Service if not)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The readiness probe should include database connectivity but the liveness probe should not — a database being down doesn't mean the app should be killed."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-what-is-a-cicd-pipeline-and-how-do-you-build-one-for-a-java-project",
      children: "Q11: What is a CI/CD pipeline and how do you build one for a Java project?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " CI/CD automates the process from code commit to production deployment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI (Continuous Integration):"
        }), " Every commit is built and tested automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CD (Continuous Delivery/Deployment):"
        }), " Every successful build is deployable (or auto-deployed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Actions pipeline for Spring Boot:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: CI/CD\non:\n  push:\n    branches: [main]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Set up JDK 17\n        uses: actions/setup-java@v4\n        with:\n          java-version: '17'\n          distribution: 'temurin'\n      - name: Build and test\n        run: mvn verify -B\n  docker:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - name: Build and push Docker image\n        uses: docker/build-push-action@v5\n        with:\n          push: true\n          tags: registry.example.com/my-app:${{ github.sha }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stages: Checkout → Compile → Unit tests → Integration tests → Static analysis → Package → Docker build → Push → Deploy"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-what-is-the-difference-between-blue-green-and-canary-deployment",
      children: "Q12: What is the difference between blue-green and canary deployment?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blue-Green:"
      }), " Two identical environments (blue = current, green = new). Deploy to green, switch the router to green once verified. Rollback is instant — switch back to blue."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canary:"
      }), " Gradually shift traffic to the new version (1% → 5% → 10% → 50% → 100%). Monitor errors at each step and rollback if needed."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blue-Green"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (switch back)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs traffic rebalancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double during deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only tested before switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real traffic validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast switchover (seconds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradual (minutes to hours)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (traffic routing needed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-what-monitoring-metrics-are-essential-for-a-java-microservice",
      children: "Q13: What monitoring metrics are essential for a Java microservice?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JVM metrics:"
      }), " Heap memory (used, max, committed), GC pause time and frequency, thread count (active, daemon, blocked), class loading"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Application metrics:"
      }), " Request rate (req/s), error rate (4xx, 5xx), latency percentiles (p50, p95, p99, p99.9), active DB connections"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Infrastructure metrics:"
      }), " CPU usage, memory usage (RSS vs heap), disk I/O, network I/O"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot + Micrometer + Prometheus:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      exposure:\n        include: health,metrics,prometheus\n  metrics:\n    distribution:\n      percentiles-histogram:\n        http.server.requests: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom metrics:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n    private final Counter orderCreatedCounter;\n    private final Timer orderProcessingTimer;\n\n    public OrderService(MeterRegistry registry) {\n        this.orderCreatedCounter = Counter.builder(\"orders.created\")\n            .description(\"Total orders created\")\n            .register(registry);\n        this.orderProcessingTimer = Timer.builder(\"orders.processing.time\")\n            .description(\"Time to process an order\")\n            .publishPercentiles(0.5, 0.95, 0.99)\n            .register(registry);\n    }\n\n    public Order createOrder(OrderRequest request) {\n        return orderProcessingTimer.record(() -> {\n            Order order = doCreateOrder(request);\n            orderCreatedCounter.increment();\n            return order;\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-do-you-implement-centralized-logging-for-microservices",
      children: "Q14: How do you implement centralized logging for microservices?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use the pattern: structured logging (JSON) + correlation IDs + centralized aggregation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logback structured JSON output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<appender name=\"JSON\" class=\"ch.qos.logback.core.ConsoleAppender\">\n    <encoder class=\"net.logstash.logback.encoder.LogstashEncoder\">\n        <customFields>{\"service\":\"order-service\",\"environment\":\"${ENV}\"}</customFields>\n    </encoder>\n</appender>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Correlation ID filter for request tracing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class CorrelationIdFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request,\n                                     HttpServletResponse response,\n                                     FilterChain chain) {\n        String correlationId = request.getHeader(\"X-Correlation-Id\");\n        if (correlationId == null || correlationId.isEmpty()) {\n            correlationId = UUID.randomUUID().toString();\n        }\n        MDC.put(\"correlationId\", correlationId);\n        response.setHeader(\"X-Correlation-Id\", correlationId);\n        try {\n            chain.doFilter(request, response);\n        } finally {\n            MDC.remove(\"correlationId\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Propagate via RestClient interceptor to downstream services."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-what-are-health-checks-and-why-are-they-important",
      children: "Q15: What are health checks and why are they important?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Health checks expose the operational status of an application so orchestrators, load balancers, and monitoring systems know whether the application can serve traffic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liveness probe"
        }), " — Is the app running? Restart if stuck (deadlocks, infinite loops)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Readiness probe"
        }), " — Can the app accept traffic? Remove from load balancer if not (DB down, cache warming)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup probe"
        }), " — Has the app initialized? Delay liveness checks for slow-starting apps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom health indicator:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class ExternalApiHealthIndicator implements HealthIndicator {\n    @Override\n    public Health health() {\n        try {\n            ResponseEntity<String> response = restTemplate.exchange(\n                \"https://api.external.com/health\",\n                HttpMethod.GET, null, String.class\n            );\n            if (response.getStatusCode().is2xxSuccessful()) {\n                return Health.up().build();\n            }\n            return Health.down()\n                .withDetail(\"statusCode\", response.getStatusCode())\n                .build();\n        } catch (Exception e) {\n            return Health.down(e).build();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-what-git-branching-strategy-works-best-for-microservices",
      children: "Q16: What Git branching strategy works best for microservices?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trunk-based development"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Flow"
      }), " work best for microservices. Avoid Git Flow — it's too heavyweight for independently deployable services."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Flow:"
      }), " Feature branches → PR → merge to main → deploy immediately."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trunk-based:"
      }), " Short-lived branches (hours), merged to main via PR. Feature flags control unfinished features:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Value(\"${features.new-payment-flow:false}\")\nprivate boolean newPaymentFlowEnabled;\n\npublic PaymentResult processPayment(PaymentRequest request) {\n    if (newPaymentFlowEnabled) {\n        return newPaymentFlow(request);\n    }\n    return oldPaymentFlow(request);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-what-do-you-look-for-in-a-code-review",
      children: "Q17: What do you look for in a code review?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functionality:"
        }), " Correct implementation, edge cases handled, proper error handling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design:"
        }), " SOLID principles, high cohesion, appropriate abstractions, clean package structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " Input validation, authentication/authorization checks, no hardcoded secrets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance:"
        }), " N+1 queries, proper indexing, thread safety, caching strategies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " Happy path + edge cases, integration tests with Testcontainers, error scenarios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Style:"
        }), " Team conventions, meaningful names, no dead code or TODOs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-what-is-flyway-and-how-do-you-use-it-for-database-migrations",
      children: "Q18: What is Flyway and how do you use it for database migrations?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Flyway applies versioned SQL scripts to a database. It tracks applied scripts in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flyway_schema_history"
      }), " table and only runs new ones."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V1__create_users_table.sql\nCREATE TABLE users (\n    id BIGSERIAL PRIMARY KEY,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    password_hash VARCHAR(255) NOT NULL,\n    created_at TIMESTAMP NOT NULL DEFAULT NOW()\n);\n\n-- V2__add_name_to_users.sql\nALTER TABLE users\n    ADD COLUMN first_name VARCHAR(100),\n    ADD COLUMN last_name VARCHAR(100);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  flyway:\n    enabled: true\n    locations: classpath:db/migration\n    baseline-on-migrate: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practices:"
      }), " Never modify applied migrations, always create new ones. Keep migrations backward-compatible for two versions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-flyway-vs-liquibase",
      children: "Q19: Flyway vs Liquibase?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flyway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Liquibase"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML, YAML, JSON, SQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — just write SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium — must learn changelog syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paid version or manual scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in rollback support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent re-runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (checksum mismatch)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Supported with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "runAlways"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, straightforward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More features, more complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git-friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very (plain SQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML/YAML diff less clean"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose Flyway for SQL-first teams that value simplicity. Choose Liquibase if you need rollback support or work with multiple database types."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-do-you-ensure-database-migrations-are-safe-in-production",
      children: "Q20: How do you ensure database migrations are safe in production?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward-compatible changes only"
        }), " — add columns with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DEFAULT NULL"
        }), ", never rename or drop in one deploy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expand-Migrate-Contract pattern:"
        }), " Add column → Migrate data → Drop old column (across 3 deploys)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lock migration"
        }), " — Spring Boot + Flyway acquires a lock automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test against production-size data"
        }), " — timing matters (1ms local vs 10min on 50M rows)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never modify applied migrations"
        }), " — creates checksum mismatch; always create new migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate in CI"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mvn flyway:validate"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-what-is-the-twelve-factor-app-methodology",
      children: "Q21: What is the Twelve-Factor App methodology?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Twelve-Factor App is a methodology for building SaaS applications. The 12 factors:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Codebase"
        }), " — One codebase, many deploys"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependencies"
        }), " — Explicitly declare and isolate (Maven/Gradle + Docker)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config"
        }), " — Store in environment variables, not code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backing services"
        }), " — Treat databases, queues, caches as attached resources"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build, release, run"
        }), " — Strictly separate stages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Processes"
        }), " — Stateless (no sticky sessions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port binding"
        }), " — Export services via port (embedded Tomcat)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrency"
        }), " — Scale out via process model"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disposability"
        }), " — Fast startup and graceful shutdown"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dev/prod parity"
        }), " — Keep environments similar (Docker)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logs"
        }), " — Treat as event streams (stdout)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Admin processes"
        }), " — Run as one-off tasks (migrations)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-how-do-you-implement-graceful-shutdown-in-spring-boot",
      children: "Q22: How do you implement graceful shutdown in Spring Boot?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "server:\n  shutdown: graceful\nspring:\n  lifecycle:\n    timeout-per-shutdown-phase: 30s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When SIGTERM is received: stop accepting new requests, wait for active requests to complete (up to 30s), then close the ApplicationContext and exit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Kubernetes, add a preStop hook to give the load balancer time to remove the pod:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "lifecycle:\n  preStop:\n    exec:\n      command: [\"sleep\", \"5\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-what-is-slf4j-and-why-is-it-the-standard-logging-facade-for-java",
      children: "Q23: What is SLF4J and why is it the standard logging facade for Java?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SLF4J (Simple Logging Facade for Java) decouples application code from the logging implementation. Your code logs via SLF4J API, and at deployment time you choose the backend (Logback, Log4j2, java.util.logging)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Benefits:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Swappable backends"
        }), " — change logging library without touching application code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameterized logging"
        }), " — avoids string concatenation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log.debug(\"Order {} for user {}\", orderId, userId)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MDC (Mapped Diagnostic Context)"
        }), " — thread-local map for correlation IDs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marker support"
        }), " — filter or route log events programmatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-how-do-you-troubleshoot-performance-issues-in-production",
      children: "Q24: How do you troubleshoot performance issues in production?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use a systematic top-down approach:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check dashboards"
        }), " — CPU, memory, latency, error rate, GC activity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread dump analysis"
        }), " (high CPU, thread contention):\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "jstack <pid> > threaddump.txt\n"
          })
        }), "\nLook for RUNNABLE threads in unexpected places or BLOCKED threads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap dump analysis"
        }), " (memory leaks, high GC):\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "-XX:+HeapDumpOnOutOfMemoryError\njmap -dump:live,format=b,file=heapdump.hprof <pid>\n"
          })
        }), "\nUse Eclipse MAT or VisualVM to analyze."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Common issues:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High CPU + RUNNABLE threads → infinite loop or tight polling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GC > 20% CPU → too many object allocations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OOM → memory leak or too small heap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High p99 latency → GC pauses or slow external API calls"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Connection pool exhaustion → slow queries or connection leaks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-performance-vs-load-vs-stress-testing",
      children: "Q25: Performance vs load vs stress testing?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure response time and throughput under normal conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify system behavior under expected load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find the breaking point — when does it fail?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stability over extended periods (detect memory leaks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavior with sudden traffic surges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How adding resources improves performance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools: JMH (microbenchmarking), Gatling/k6 (load testing)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-how-do-you-handle-secrets-management",
      children: "Q26: How do you handle secrets management?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Never hardcode secrets in source code or configuration files."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment variables"
        }), " — basic, not suitable for production"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kubernetes Secrets"
        }), " — mounted as environment variables or files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HashiCorp Vault"
        }), " — dynamic secrets, rotation, audit logging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS Secrets Manager / GCP Secret Manager"
        }), " — cloud-native"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External Secrets Operator"
        }), " — syncs secrets from providers into K8s Secrets"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Best practices: rotate regularly, audit access, least privilege, never log secrets."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-what-is-gitops",
      children: "Q27: What is GitOps?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " GitOps uses a Git repository as the single source of truth for cluster state. An operator (ArgoCD, Flux) continuously synchronizes the cluster with what's defined in Git."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Benefits: audit trail (every change is a commit), easy rollback (", (0,jsx_runtime.jsx)(_components.code, {
        children: "git revert"
      }), "), self-healing (operator fixes configuration drift), pull-based deployment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: order-service\nspec:\n  destination:\n    namespace: production\n    server: https://kubernetes.default.svc\n  source:\n    repoURL: https://github.com/company/k8s-config\n    targetRevision: main\n    path: services/order-service\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-helm-vs-kustomize",
      children: "Q28: Helm vs Kustomize?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Helm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kustomize"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package manager for Kubernetes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native YAML customization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Templating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML patches/overlays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steeper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gentler (pure YAML)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Helm Hub/ArtifactHub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (separate CLI)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "kubectl -k"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use Helm for third-party software installations. Use Kustomize for your own applications when you want raw YAML without template syntax."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-what-is-a-service-mesh-istio-vs-linkerd",
      children: "Q29: What is a service mesh (Istio vs Linkerd)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A service mesh handles service-to-service communication via sidecar proxies. Provides traffic management, mTLS security, and observability without modifying application code."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Istio"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linkerd"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envoy (C++)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linkerd-proxy (Rust)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100MB per sidecar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10MB per sidecar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very rich"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Focused on essentials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2-5ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use when: 10+ services, need mTLS, canary deployments, or consistent observability. Don't use for small systems or when performance is ultra-critical."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-what-are-docker-volume-types",
      children: "Q30: What are Docker volume types?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Named volumes"
        }), " — Docker-managed, persisted in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/var/lib/docker/volumes/"
        }), ". Most portable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bind mounts"
        }), " — host directory mapped into container. Useful for development (hot-reload)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tmpfs mounts"
        }), " — stored in memory only. Suitable for sensitive temporary data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use named volumes for databases, bind mounts for development, tmpfs for secrets."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-how-do-docker-containers-communicate",
      children: "Q31: How do Docker containers communicate?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Through Docker networks:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bridge"
        }), " (default) — private internal network with DNS-based service discovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host"
        }), " — container shares host network stack (no isolation, better performance)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overlay"
        }), " — multi-host networking (Docker Swarm, Kubernetes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Docker Compose, services reach each other by service name (", (0,jsx_runtime.jsx)(_components.code, {
        children: "db:5432"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "redis:6379"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q32-what-is-a-container-registry",
      children: "Q32: What is a container registry?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Stores and distributes Docker images. Common options:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker Hub"
        }), " — public, rate-limited for anonymous pulls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Container Registry (ghcr.io)"
        }), " — integrated with GitHub Actions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS ECR"
        }), " — IAM integration, VPC endpoints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Azure Container Registry (ACR)"
        }), " — geo-replication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harbor"
        }), " — open-source, vulnerability scanning, replication"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q33-readiness-probe-vs-liveness-probe-vs-startup-probe",
      children: "Q33: Readiness probe vs liveness probe vs startup probe?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Probe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Failure action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Liveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is the app alive?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restart container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can the app serve traffic?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove from Service endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has the app started?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delay liveness checks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q34-how-do-you-use-configmaps-with-spring-boot",
      children: "Q34: How do you use ConfigMaps with Spring Boot?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ConfigMaps inject non-sensitive configuration into pods. Mount as environment variables:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "envFrom:\n  - configMapRef:\n      name: app-config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or as files:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "volumes:\n  - name: config\n    configMap:\n      name: app-config\n...\nvolumeMounts:\n  - name: config\n    mountPath: /workspace/config\n    readOnly: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Spring Cloud Kubernetes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  cloud:\n    kubernetes:\n      config:\n        enabled: true\n        sources:\n          - namespace: production\n            name: app-config\n      reload:\n        enabled: true\n        mode: event\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q35-what-is-a-kubernetes-ingress",
      children: "Q35: What is a Kubernetes Ingress?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Ingress exposes HTTP/S routes from outside the cluster to internal Services. Requires an Ingress Controller (NGINX, Traefik, HAProxy)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: my-app-ingress\nspec:\n  ingressClassName: nginx\n  rules:\n  - host: api.example.com\n    http:\n      paths:\n      - path: /orders\n        pathType: Prefix\n        backend:\n          service:\n            name: order-service\n            port:\n              number: 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provides path-based routing, host-based routing, TLS termination, and controller-specific annotations."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q36-kubernetes-service-vs-ingress",
      children: "Q36: Kubernetes Service vs Ingress?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Service = Layer 4 (TCP/UDP), stable internal endpoint for pods, simple load balancing. Ingress = Layer 7 (HTTP/S), external traffic routing, path-based, TLS termination, rate limiting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flow: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ingress → Service → Pod(s)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q37-kubernetes-resource-model-requests-vs-limits",
      children: "Q37: Kubernetes resource model (Requests vs Limits)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requests"
        }), " — minimum guaranteed resources. Used for scheduling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limits"
        }), " — maximum allowed resources. CPU throttles, memory OOMKills."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "resources:\n  requests:\n    memory: \"256Mi\"\n    cpu: \"250m\"\n  limits:\n    memory: \"512Mi\"\n    cpu: \"500m\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For Java: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"
      }), " so JVM respects container limits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QoS classes: Guaranteed (request = limit), Burstable (request < limit), BestEffort (no requests/limits)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q38-how-do-you-achieve-zero-downtime-deployments-in-kubernetes",
      children: "Q38: How do you achieve zero-downtime deployments in Kubernetes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Combine multiple features:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Readiness probes"
        }), " — only route traffic to healthy pods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graceful shutdown"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server.shutdown: graceful"
        }), " with 30s timeout"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rolling update strategy"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxSurge: 1, maxUnavailable: 0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "preStop hook"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sleep 5"
        }), " to let endpoints update before shutdown"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PodDisruptionBudget"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minAvailable: 2"
        }), " prevents voluntary disruptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anti-affinity"
        }), " — spread pods across nodes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q39-reverse-proxy-vs-forward-proxy",
      children: "Q39: Reverse proxy vs forward proxy?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward proxy"
        }), " — sits between clients and the internet. Hides client IP, used for content filtering and access control. (Corporate proxy, Squid)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse proxy"
        }), " — sits in front of servers. Hides server topology, provides load balancing, SSL termination, caching. (NGINX, Traefik, HAProxy)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q40-what-is-the-role-of-a-message-broker-in-microservices",
      children: "Q40: What is the role of a message broker in microservices?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Enables asynchronous communication between services. Benefits:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decoupling"
        }), " — services don't know each other, only the message format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resilience"
        }), " — messages persist if consumer is down"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffering"
        }), " — handle traffic spikes without data loss"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fan-out"
        }), " — one event triggers multiple actions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common brokers: RabbitMQ (AMQP), Apache Kafka (event streaming, replayable), Amazon SQS/SNS (managed)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q41-queue-vs-topic-in-messaging",
      children: "Q41: Queue vs topic in messaging?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Queue (point-to-point):"
        }), " Each message consumed by exactly one consumer. Best for work distribution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topic (publish-subscribe):"
        }), " Each message delivered to all subscribers. Best for event broadcasting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kafka combines both: consumer groups get every message (topic), partitions distribute within a group (queue)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q42-what-is-the-circuit-breaker-pattern",
      children: "Q42: What is the Circuit Breaker pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Prevents cascading failures by stopping calls to a failing service and failing fast. States: CLOSED (normal), OPEN (fail fast), HALF_OPEN (probe for recovery)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "resilience4j:\n  circuitbreaker:\n    configs:\n      default:\n        sliding-window-size: 10\n        failure-rate-threshold: 50\n        wait-duration-in-open-state: 10s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@CircuitBreaker(name = \"paymentService\", fallbackMethod = \"paymentFallback\")\npublic PaymentResult processPayment(Order order) {\n    return paymentClient.charge(order.total(), order.currency());\n}\n\npublic PaymentResult paymentFallback(Order order, Throwable t) {\n    return PaymentResult.failed(\"Payment service temporarily unavailable\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q43-retry-vs-circuit-breaker",
      children: "Q43: Retry vs Circuit Breaker?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Retry for transient failures (network hiccup, connection timeout). Circuit Breaker for persistent failures (service down, DB disconnected). They complement each other — retry first, then circuit breaker."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q44-what-is-the-bulkhead-pattern",
      children: "Q44: What is the Bulkhead pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Isolates resources so a failure in one part doesn't take down others. Two types:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread pool isolation"
        }), " — each service gets its own thread pool (max 10 threads for payment, max 20 for orders)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semaphore isolation"
        }), " — limit concurrent calls without separate thread pools"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bulkhead(name = \"paymentBulkhead\", type = Bulkhead.Type.THREADPOOL)\npublic PaymentResult processPayment(Order order) {\n    return paymentClient.charge(order.total());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q45-how-do-you-implement-observability-logging-metrics-tracing",
      children: "Q45: How do you implement observability (logging, metrics, tracing)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Three pillars:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logging"
        }), " — structured JSON with correlation IDs. Centralized in Elasticsearch/Loki."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics"
        }), " — Prometheus + Micrometer. Request rates, error rates, latency, JVM stats."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracing"
        }), " — Micrometer Tracing + OpenTelemetry + Jaeger/Tempo. Distributed traces across services."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot 3.x setup:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  tracing:\n    sampling:\n      probability: 0.1\n  endpoints:\n    web:\n      exposure:\n        include: health,prometheus\n  metrics:\n    distribution:\n      percentiles-histogram:\n        http.server.requests: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q46-what-is-prometheus",
      children: "Q46: What is Prometheus?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Prometheus is a time-series monitoring system that scrapes metrics from instrumented applications. Spring Boot exposes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/prometheus"
      }), " via Micrometer. PromQL queries metrics for dashboards and alerts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Workflow: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Spring Boot → /actuator/prometheus → Prometheus (scrape) → Grafana (visualize)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q47-what-is-grafana",
      children: "Q47: What is Grafana?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Visualization platform connecting to data sources (Prometheus, Elasticsearch) for dashboards. Pre-built Spring Boot dashboards available (ID 10280 for JVM/Micrometer). Configure alerting via Slack, PagerDuty, or webhook."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q48-apm-vs-traditional-monitoring",
      children: "Q48: APM vs traditional monitoring?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " APM provides code-level visibility — method-level profiling, distributed traces, transaction breakdowns. Traditional monitoring shows infrastructure metrics (CPU, memory, disk). APM answers \"why was this request slow?\" with a detailed breakdown."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q49-structured-vs-unstructured-logging",
      children: "Q49: Structured vs unstructured logging?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Structured = JSON format, machine-parseable, filterable by field. Unstructured = free text, hard to search programmatically. Always use structured logging in production for reliable analysis in Kibana/Grafana."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q50-best-practices-for-log-levels",
      children: "Q50: Best practices for log levels?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ERROR"
        }), " — needs immediate attention (data loss, service unreachable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WARN"
        }), " — unexpected but recovered gracefully (rate limited, used cache)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INFO"
        }), " — important business events (order created, payment processed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DEBUG"
        }), " — detailed diagnostics (off in production normally)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never log sensitive data. Include context (orderId, userId). Use dynamic level changes via Actuator without restart."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q51-how-do-you-implement-health-checks-for-external-dependencies",
      children: "Q51: How do you implement health checks for external dependencies?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HealthIndicator"
      }), " for each dependency. Spring Boot auto-configures DataSource, Redis, Mongo, RabbitMQ, Kafka health checks. Add custom ones for external APIs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Group health by purpose — readiness checks include external dependencies, liveness checks should be minimal (just the app process)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q52-how-do-you-manage-database-connection-pools",
      children: "Q52: How do you manage database connection pools?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " HikariCP (default in Spring Boot):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  datasource:\n    hikari:\n      maximum-pool-size: 20\n      minimum-idle: 5\n      connection-timeout: 3000\n      leak-detection-threshold: 60000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Monitor: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hikaricp_connections_active"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hikaricp_connections_pending"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hikaricp_connections_timeout_total"
      }), ". Alert on pending > 0 or timeout > 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q53-monorepo-vs-multi-repo-for-microservices",
      children: "Q53: Monorepo vs multi-repo for microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monorepo:"
        }), " All services in one repo. Atomic cross-service changes, easier code sharing, but git scales poorly and CI needs test impact analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-repo:"
        }), " Each service in its own repo. Clean ownership, independent deployments, but coordinated multi-repo changes are hard."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q54-semantic-versioning-for-microservices",
      children: "Q54: Semantic versioning for microservices?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), ". MAJOR for breaking API changes, MINOR for backward-compatible features, PATCH for bug fixes. Expose version via Actuator's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/info"
      }), ". Use git commit SHA as Docker image tag for traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q55-rest-vs-grpc",
      children: "Q55: REST vs gRPC?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "REST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "gRPC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON (text)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Buffers (binary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (chunked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (text parsing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (binary, multiplexed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires gRPC-web proxy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use REST for public APIs and browser clients. Use gRPC for internal service-to-service communication and real-time streaming."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q56-database-migrations-across-microservices",
      children: "Q56: Database migrations across microservices?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Each service owns its database schema independently (database-per-service pattern). Never share databases between services. Backward-compatible changes only. Use expand-migrate-contract pattern across multiple deploys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q57-deployment-safety-in-kubernetes",
      children: "Q57: Deployment safety in Kubernetes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Combine: probes (liveness/readiness/startup) + rolling update strategy + PodDisruptionBudget + progressive delivery (Argo Rollouts with canary + metric analysis) + automated rollback triggers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q58-horizontal-vs-vertical-scaling",
      children: "Q58: Horizontal vs vertical scaling?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal (scale out):"
        }), " Add more instances. Near-infinite for stateless apps. Better resilience. Use HPA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertical (scale up):"
        }), " Add more resources. Limited by hardware. Easier for stateful apps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Java microservices: scale horizontally for stateless services, vertically for databases."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q59-stress-testing-and-capacity-planning",
      children: "Q59: Stress testing and capacity planning?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define target metrics (peak traffic, SLOs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute Gatling/k6 tests with ramp-up and sustained load"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor all layers (app, DB, infrastructure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify bottlenecks (N+1 queries, connection pools, CPU)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Calculate instances needed: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Instances = (Peak traffic / Capacity per instance) x Safety margin (2x)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q60-what-is-a-kubernetes-operator",
      children: "Q60: What is a Kubernetes Operator?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " An application-specific controller that encodes human operational knowledge into software. Manages complex stateful applications (databases, Kafka, Redis) with automated backup, restore, scaling, and upgrades."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples: Strimzi (Kafka), CloudNativePG (PostgreSQL), Prometheus Operator, ArgoCD Operator."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q61-setting-up-a-development-environment-for-microservices",
      children: "Q61: Setting up a development environment for microservices?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Three tiers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tier 1 (Docker Compose):"
        }), " App + DB + Redis + Kafka + dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tier 2 (Tilt):"
        }), " Kubernetes-native dev with live reload, resource view"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tier 3 (Telepresence):"
        }), " Run local service connected to remote cluster"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Best practices: hot reload (DevTools), realistic DB (PostgreSQL, not H2), mock external APIs (WireMock), profile-based config."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q62-what-is-testcontainers-and-how-does-it-improve-tests",
      children: "Q62: What is Testcontainers and how does it improve tests?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Testcontainers provides disposable Docker containers for integration testing. Uses the same database as production (PostgreSQL, not H2), catching compatibility issues early."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass OrderRepositoryTest {\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\");\n\n    @DynamicPropertySource\n    static void properties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q63-testing-async-code-kafka-completablefuture",
      children: "Q63: Testing async code (Kafka, CompletableFuture)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use Awaitility for polling assertions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "await().atMost(10, SECONDS)\n    .pollInterval(100, MILLISECONDS)\n    .untilAsserted(() -> {\n        assertThat(receivedEvents).hasSize(1);\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For CompletableFuture, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".get(5, SECONDS)"
      }), " with timeout. For reactive code (Project Reactor), use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StepVerifier"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q64-what-is-contract-testing",
      children: "Q64: What is contract testing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Contract testing verifies that API provider and consumer agree on the contract. Spring Cloud Contract: provider writes contracts (Groovy DSL), tests verify fulfillment, consumers use generated stubs. Catches integration issues before deployment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q65-what-is-a-docker-layer-cache-and-how-do-you-optimize-it",
      children: "Q65: What is a Docker layer cache and how do you optimize it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Docker caches each layer. Order commands from least to most frequently changing:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Cached unless pom.xml changes\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nCOPY pom.xml ./\nRUN mvn dependency:go-offline\n\n# Only runs when source changes\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nCOPY src src/\nRUN mvn package\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".dockerignore"
      }), " to exclude unnecessary files (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".git"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target/"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q66-how-do-you-handle-configuration-for-multiple-environments",
      children: "Q66: How do you handle configuration for multiple environments?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring profiles"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application-dev.yml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application-prod.yml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kubernetes ConfigMaps/Secrets"
        }), " — per-environment with Kustomize overlays or Helm value files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External config servers"
        }), " — Spring Cloud Config, Vault"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment variables"
        }), " — deployment-specific settings (DB URLs, API keys)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nserver.port: 8080\n\n# application-prod.yml (activated by SPRING_PROFILES_ACTIVE=prod)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nserver.port: 80\nspring.datasource.url: ${DB_URL}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q67-what-is-the-elkefk-stack",
      children: "Q67: What is the ELK/EFK stack?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ELK = Elasticsearch (storage/search) + Logstash (ingestion/transformation) + Kibana (visualization). EFK replaces Logstash with Fluentd (lighter, Kubernetes-native)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Services emit JSON logs to stdout → Fluentd collects → ships to Elasticsearch → Kibana provides search and dashboards."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q68-centralized-logging-vs-distributed-tracing",
      children: "Q68: Centralized logging vs distributed tracing?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logging:"
        }), " Individual log events, correlated by correlation ID. Tells you what happened."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracing:"
        }), " Request spanning multiple services, with trace ID and span IDs. Tells you where in the request flow latency occurred."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both are essential for observability in microservices."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q69-how-do-you-handle-file-uploads-in-kubernetes",
      children: "Q69: How do you handle file uploads in Kubernetes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Don't store on pod filesystem (ephemeral). Options:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud storage"
        }), " — AWS S3, GCS, Azure Blob (preferred)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Persistent Volume Claim"
        }), " — shared filesystem with ReadWriteMany access mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MinIO"
        }), " — self-hosted S3-compatible object storage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q70-what-is-a-poddisruptionbudget",
      children: "Q70: What is a PodDisruptionBudget?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A PodDisruptionBudget (PDB) limits the number of pods that can be voluntarily disrupted at a time (e.g., during node maintenance). Ensures minimum availability during cluster operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: order-service-pdb\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: order-service\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q71-docker-compose-advanced-features-depends_on-conditions-healthchecks-profiles-extends",
      children: "Q71: Docker Compose advanced features (depends_on conditions, healthchecks, profiles, extends)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Beyond basic container orchestration, Docker Compose provides several advanced features for robust multi-container setups."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "depends_on with healthcheck conditions"
      }), " — wait for a service to be healthy before starting:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  app:\n    build: .\n    depends_on:\n      db:\n        condition: service_healthy\n      redis:\n        condition: service_started\n  db:\n    image: postgres:16-alpine\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U user -d mydb\"]\n      interval: 5s\n      timeout: 3s\n      retries: 5\n  redis:\n    image: redis:7-alpine\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Profiles"
      }), " — conditionally enable services:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  app:\n    image: my-app\n  db:\n    image: postgres:16-alpine\n  mailhog:\n    image: mailhog/mailhog\n    profiles: [\"dev\", \"staging\"]\n  jaeger:\n    image: jaegertracing/all-in-one:1.57\n    profiles: [\"tracing\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose --profile dev up"
      }), " to include only app, db, and mailhog."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Extends"
      }), " — share common configuration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# base.yml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nservices:\n  base-app:\n    image: eclipse-temurin:17-jre-alpine\n    working_dir: /app\n    environment:\n      SPRING_PROFILES_ACTIVE: ${SPRING_PROFILES_ACTIVE:-dev}\n    networks:\n      - backend\n\n# docker-compose.yml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nservices:\n  order-service:\n    extends:\n      file: base.yml\n      service: base-app\n    ports:\n      - \"8081:8080\"\n    environment:\n      SERVICE_NAME: order-service\n  payment-service:\n    extends:\n      file: base.yml\n      service: base-app\n    ports:\n      - \"8082:8080\"\n    environment:\n      SERVICE_NAME: payment-service\n\nnetworks:\n  backend:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Named networks with custom IPAM:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "networks:\n  frontend:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.20.0.0/16\n  backend:\n    internal: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q72-dockerfile-best-practices-copy-vs-add-dockerignore-cache-optimization",
      children: "Q72: Dockerfile best practices (COPY vs ADD, .dockerignore, cache optimization)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A well-optimized Dockerfile builds faster, produces smaller images, and is more secure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "COPY vs ADD:"
      }), " Prefer COPY — it's explicit about only copying local files. ADD has extra magic (tar auto-extraction, URL download) that can be surprising:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# COPY — simple, predictable\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nCOPY --from=builder /app/target/*.jar app.jar\n\n# ADD — auto-extracts tar archives\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nADD build.tar.gz /app/\n\n# Use ADD only when you need tar extraction\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nADD jre.tar.gz /opt/java/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: ".dockerignore — essential for build context size:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".git\n.gitignore\ntarget/\n*.md\nnode_modules/\ndocker-compose*.yml\n.env\n.idea/\n*.iml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer cache ordering — most stable first:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# 1. Base image (rarely changes)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nFROM eclipse-temurin:17-jre-alpine AS base\n\n# 2. Install system dependencies (stable)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nRUN apk add --no-cache curl ca-certificates\n\n# 3. Copy only build descriptor (changes with deps only)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nCOPY pom.xml ./\nCOPY src/main/resources/application.yml ./src/main/resources/\n\n# 4. Download dependencies (cached unless pom.xml changes)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nRUN mvn dependency:go-offline -q\n\n# 5. Copy source (changes most often — last)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nCOPY src src/\nRUN mvn package -DskipTests\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-stage build optimization — slim final image:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Stage 1: full JDK for compilation\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nFROM eclipse-temurin:17-jdk-alpine AS builder\nWORKDIR /build\nCOPY pom.xml ./\nRUN mvn dependency:go-offline\nCOPY src src/\nRUN mvn package -DskipTests\n\n# Stage 2: produce minimal JRE\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nFROM eclipse-temurin:17-jre-alpine AS jre-builder\nRUN jlink --add-modules java.base,java.sql,java.naming,java.management,\\\n  jdk.unsupported \\\n  --output /jre \\\n  --strip-debug --no-man-pages --no-header-files\n\n# Stage 3: final image\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nFROM alpine:3.19\nCOPY --from=jre-builder /jre /jre\nCOPY --from=builder /build/target/*.jar app.jar\nRUN addgroup -S app && adduser -S app -G app\nUSER app\nENTRYPOINT [\"/jre/bin/java\", \"-jar\", \"/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This reduces image size from ~200MB to ~50MB by using only the JVM modules needed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Squash layers (advanced):"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker build --squash"
      }), " in CI to merge all layers into one, reducing final size but losing cache benefits for individual layers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q73-kubernetes-persistent-volumes-pvcs-and-storageclasses",
      children: "Q73: Kubernetes Persistent Volumes, PVCs, and StorageClasses?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Kubernetes stateful workloads need persistent storage that survives pod restarts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PersistentVolume (PV)"
      }), " — cluster storage resource provisioned by an admin:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: postgres-pv\nspec:\n  capacity:\n    storage: 10Gi\n  volumeMode: Filesystem\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: standard\n  hostPath:\n    path: /mnt/data/postgres\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PersistentVolumeClaim (PVC)"
      }), " — request for storage by a user/pod:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: postgres-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi\n  storageClassName: standard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using PVC in a pod:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: postgres\nspec:\n  serviceName: postgres\n  replicas: 1\n  selector:\n    matchLabels:\n      app: postgres\n  template:\n    metadata:\n      labels:\n        app: postgres\n    spec:\n      containers:\n      - name: postgres\n        image: postgres:16-alpine\n        volumeMounts:\n        - name: data\n          mountPath: /var/lib/postgresql/data\n      volumes:\n      - name: data\n        persistentVolumeClaim:\n          claimName: postgres-pvc\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "StorageClasses"
      }), " — dynamic provisioning. Instead of pre-creating PVs, define a StorageClass and the cluster provisions PVs automatically:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: fast-ssd\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp3\n  fsType: ext4\n  iopsPerGB: \"10\"\nreclaimPolicy: Delete\nallowVolumeExpansion: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reference in PVC:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: fast-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 50Gi\n  storageClassName: fast-ssd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Modes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ReadWriteOnce"
        }), " (RWO) — single node read-write (databases)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ReadOnlyMany"
        }), " (ROX) — many nodes read-only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ReadWriteMany"
        }), " (RWX) — many nodes read-write (shared filesystems, requires NFS/Ceph)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reclaim Policies:"
      }), " Retain (manual cleanup), Delete (auto-delete on PVC removal), Recycle (deprecated)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q74-helm-templating-values-hooks-dependencies",
      children: "Q74: Helm (templating, values, hooks, dependencies)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Helm is the Kubernetes package manager. Charts package YAML templates with parameterized values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chart structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "order-service/\n├── Chart.yaml          # metadata, dependencies\n├── values.yaml         # default values\n├── templates/\n│   ├── deployment.yaml\n│   ├── service.yaml\n│   ├── ingress.yaml\n│   ├── _helpers.tpl    # reusable template snippets\n│   └── configmap.yaml\n└── charts/             # dependencies (extracted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Templating with Go templates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# templates/deployment.yaml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ include \"order-service.fullname\" . }}\n  labels:\n    {{- include \"order-service.labels\" . | nindent 4 }}\nspec:\n  replicas: {{ .Values.replicaCount }}\n  selector:\n    matchLabels:\n      {{- include \"order-service.selectorLabels\" . | nindent 6 }}\n  template:\n    metadata:\n      labels:\n        {{- include \"order-service.selectorLabels\" . | nindent 8 }}\n    spec:\n      containers:\n      - name: {{ .Chart.Name }}\n        image: \"{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}\"\n        ports:\n        - containerPort: {{ .Values.service.port }}\n        env:\n        {{- range $key, $val := .Values.env }}\n        - name: {{ $key }}\n          value: {{ $val | quote }}\n        {{- end }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# values.yaml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nreplicaCount: 3\nimage:\n  repository: registry.example.com/order-service\n  tag: \"1.2.3\"\nservice:\n  port: 8080\nenv:\n  SPRING_PROFILES_ACTIVE: prod\n  DB_URL: jdbc:postgresql://postgres:5432/orders\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Template helpers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "_helpers.tpl"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "{{- define \"order-service.fullname\" -}}\n{{- printf \"%s-%s\" .Release.Name .Chart.Name | trunc 63 | trimSuffix \"-\" }}\n{{- end }}\n\n{{- define \"order-service.labels\" -}}\napp.kubernetes.io/name: {{ .Chart.Name }}\napp.kubernetes.io/instance: {{ .Release.Name }}\napp.kubernetes.io/version: {{ .Chart.AppVersion }}\n{{- end }}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hooks"
      }), " — run jobs at specific lifecycle points:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# templates/migrate-job.yaml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: {{ .Release.Name }}-db-migrate\n  annotations:\n    \"helm.sh/hook\": pre-upgrade\n    \"helm.sh/hook-weight\": \"-5\"\n    \"helm.sh/hook-delete-policy\": hook-succeeded\nspec:\n  template:\n    spec:\n      restartPolicy: Never\n      containers:\n      - name: migrate\n        image: \"{{ .Values.image.repository }}:{{ .Values.image.tag }}\"\n        command: [\"java\", \"-jar\", \"app.jar\", \"--spring.flyway.enabled=true\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Available hooks: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-install"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post-install"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-upgrade"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post-upgrade"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-delete"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post-delete"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-rollback"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post-rollback"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies in Chart.yaml:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v2\nname: order-service\nversion: 1.0.0\ndependencies:\n  - name: postgresql\n    version: \"12.1.0\"\n    repository: \"https://charts.bitnami.com/bitnami\"\n    condition: postgresql.enabled\n  - name: redis\n    version: \"18.1.0\"\n    repository: \"https://charts.bitnami.com/bitnami\"\n    condition: redis.enabled\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helm dependency update"
      }), " to download sub-charts. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "condition"
      }), " field enables/disabling based on a top-level value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle management commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nhelm install order-service ./order-service -f prod-values.yaml\n\n# Upgrade with rollback safety\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nhelm upgrade order-service ./order-service -f prod-values.yaml --atomic --timeout 5m\n\n# Rollback\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nhelm rollback order-service 1\n\n# Template rendering (debug)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nhelm template order-service ./order-service -f prod-values.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q75-kubernetes-rbac-roles-rolebindings-clusterroles-serviceaccounts",
      children: "Q75: Kubernetes RBAC (Roles, RoleBindings, ClusterRoles, ServiceAccounts)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " RBAC controls who can access what Kubernetes resources. It's the primary authorization mechanism."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Role"
      }), " — namespace-scoped permissions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: production\n  name: pod-reader\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\", \"pods/log\"]\n  verbs: [\"get\", \"watch\", \"list\"]\n- apiGroups: [\"\"]\n  resources: [\"pods/exec\"]\n  verbs: [\"create\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RoleBinding"
      }), " — binds a Role to users, groups, or ServiceAccounts within the namespace:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  namespace: production\n  name: read-pods\nsubjects:\n- kind: User\n  name: \"alice@company.com\"\n  apiGroup: rbac.authorization.k8s.io\n- kind: ServiceAccount\n  name: monitoring-sa\n  namespace: production\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ClusterRole"
      }), " — cluster-scoped (nodes, PVs, namespaces) or accessible across all namespaces:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: cluster-admin-cr\nrules:\n- apiGroups: [\"*\"]\n  resources: [\"*\"]\n  verbs: [\"*\"]\n- nonResourceURLs: [\"/healthz\", \"/metrics\"]\n  verbs: [\"get\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ClusterRoleBinding"
      }), " — binds ClusterRole across the entire cluster:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: monitoring-cluster\nsubjects:\n- kind: ServiceAccount\n  name: monitoring-sa\n  namespace: monitoring\nroleRef:\n  kind: ClusterRole\n  name: cluster-admin-cr\n  apiGroup: rbac.authorization.k8s.io\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ServiceAccount"
      }), " — identity for pods to authenticate with the API:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: spring-boot-sa\n  namespace: production\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: spring-boot-sa-token\n  annotations:\n    kubernetes.io/service-account.name: spring-boot-sa\ntype: kubernetes.io/service-account-token\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use in pod spec:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spec:\n  serviceAccountName: spring-boot-sa\n  automountServiceAccountToken: true\n  containers:\n  - name: app\n    image: my-app\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregated ClusterRoles"
      }), " — compose permissions from multiple rules:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: aggregate-view\naggregationRule:\n  clusterRoleSelectors:\n  - matchLabels:\n      rbac.authorization.k8s.io/aggregate-to-view: \"true\"\nrules: []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use least privilege — never grant wildcards unless absolutely necessary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer Roles over ClusterRoles where possible"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create unique ServiceAccounts per application (don't use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rotate tokens regularly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Audit permissions with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kubectl auth can-i --list --as=system:serviceaccount:production:my-sa"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q76-kubernetes-network-policies-and-pod-security-admission",
      children: "Q76: Kubernetes Network Policies and Pod Security Admission?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Network policies control pod-to-pod communication. Pod Security Admission (PSA) restricts pod security contexts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NetworkPolicy"
      }), " — firewall rules for pods, selecting by labels:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: order-service-policy\n  namespace: production\nspec:\n  podSelector:\n    matchLabels:\n      app: order-service\n  policyTypes:\n  - Ingress\n  - Egress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          app: api-gateway\n    - namespaceSelector:\n        matchLabels:\n          name: monitoring\n    ports:\n    - port: 8080\n      protocol: TCP\n  egress:\n  - to:\n    - podSelector:\n        matchLabels:\n          app: payment-service\n    ports:\n    - port: 8080\n  - to:\n    - namespaceSelector:\n        matchLabels:\n          name: kube-system\n      podSelector:\n        matchLabels:\n          k8s-app: kube-dns\n    ports:\n    - port: 53\n      protocol: UDP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This policy: allows traffic only from api-gateway pods and the monitoring namespace, allows egress only to payment-service and DNS."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default deny-all policy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-all\n  namespace: production\nspec:\n  podSelector: {}\n  policyTypes:\n  - Ingress\n  - Egress\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pod Security Admission (PSA)"
      }), " — built-in admission controller replacing PodSecurityPolicy (deprecated in 1.25, removed in 1.25):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three levels:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privileged"
        }), " — unrestricted (system-critical pods)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Baseline"
        }), " — minimal restrictions (prevent known privilege escalations)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restricted"
        }), " — hardened (current best practices)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enforce via namespace labels:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Namespace\nmetadata:\n  name: production\n  labels:\n    pod-security.kubernetes.io/enforce: restricted\n    pod-security.kubernetes.io/enforce-version: latest\n    pod-security.kubernetes.io/audit: baseline\n    pod-security.kubernetes.io/warn: baseline\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pod violating the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restricted"
      }), " policy in this namespace will be rejected. Violations at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "audit"
      }), " level are logged but not blocked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example of a restricted-compliant pod:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: restricted-app\nspec:\n  securityContext:\n    runAsNonRoot: true\n    seccompProfile:\n      type: RuntimeDefault\n  containers:\n  - name: app\n    image: my-app\n    securityContext:\n      allowPrivilegeEscalation: false\n      capabilities:\n        drop: [\"ALL\"]\n      readOnlyRootFilesystem: true\n      runAsUser: 1000\n      runAsGroup: 3000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network policy requirements:"
      }), " Network policies are enforced only by CNI plugins that support them (Calico, Cilium, Weave Net). Flannel does not support network policies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q77-kubernetes-monitoring-with-metrics-server-prometheus-operator-kube-state-metrics",
      children: "Q77: Kubernetes monitoring with metrics-server, Prometheus operator, kube-state-metrics?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A production Kubernetes monitoring stack has three layers: resource metrics, cluster state metrics, and application metrics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "metrics-server"
      }), " — lightweight cluster-wide resource usage aggregator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install via kubectl\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nkubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml\n\n# View pod metrics\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nkubectl top pods\nkubectl top nodes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Outputs CPU and memory per pod/node. Required for HorizontalPodAutoscaler (HPA)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prometheus operator"
      }), " — deploys and manages Prometheus instances declaratively:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ServiceMonitor telling Prometheus what to scrape\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: order-service-monitor\n  namespace: monitoring\nspec:\n  selector:\n    matchLabels:\n      app: order-service\n  endpoints:\n  - port: http\n    path: /actuator/prometheus\n    interval: 15s\n  namespaceSelector:\n    matchNames:\n    - production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Prometheus custom resource\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napiVersion: monitoring.coreos.com/v1\nkind: Prometheus\nmetadata:\n  name: main\n  namespace: monitoring\nspec:\n  serviceAccountName: prometheus\n  serviceMonitorSelector:\n    matchLabels: {}\n  resources:\n    requests:\n      memory: 4Gi\n  retention: 30d\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "kube-state-metrics"
      }), " — exposes cluster state metrics (deployment replicas, pod status, PVC usage):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: kube-state-metrics\n  namespace: monitoring\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: kube-state-metrics\n  template:\n    metadata:\n      labels:\n        app: kube-state-metrics\n    spec:\n      serviceAccountName: kube-state-metrics\n      containers:\n      - name: kube-state-metrics\n        image: registry.k8s.io/kube-state-metrics/kube-state-metrics:v2.13.0\n        ports:\n        - containerPort: 8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key metrics exposed:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_deployment_status_replicas_unavailable"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod_status_phase"
        }), " (Pending, Running, Failed)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_node_status_condition"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_persistentvolumeclaim_resource_requests_storage_bytes"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "node-exporter"
      }), " — host-level metrics (CPU, memory, disk, network):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: node-exporter\n  namespace: monitoring\nspec:\n  selector:\n    matchLabels:\n      app: node-exporter\n  template:\n    metadata:\n      labels:\n        app: node-exporter\n    spec:\n      hostNetwork: true\n      hostPID: true\n      containers:\n      - name: node-exporter\n        image: prom/node-exporter:v1.8.0\n        ports:\n        - containerPort: 9100\n        args:\n        - --path.procfs=/host/proc\n        - --path.sysfs=/host/sys\n        volumeMounts:\n        - name: proc\n          mountPath: /host/proc\n          readOnly: true\n        - name: sys\n          mountPath: /host/sys\n          readOnly: true\n      volumes:\n      - name: proc\n        hostPath:\n          path: /proc\n      - name: sys\n        hostPath:\n          path: /sys\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Grafana dashboards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ID 315 — Kubernetes cluster monitoring (via Prometheus)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ID 10280 — Spring Boot / JVM (Micrometer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ID 1860 — Node Exporter full"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HorizontalPodAutoscaler using resource metrics:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: order-service-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: order-service\n  minReplicas: 3\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70\n  - type: Resource\n    resource:\n      name: memory\n      target:\n        type: Utilization\n        averageUtilization: 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q78-github-actions-reusable-workflows-and-composite-actions",
      children: "Q78: GitHub Actions reusable workflows and composite actions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " GitHub Actions provides two mechanisms for sharing workflow logic across repositories or jobs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reusable workflows"
      }), " — call one workflow from another. Define with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "on: workflow_call"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/build-java.yml (called workflow)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nname: Build Java\non:\n  workflow_call:\n    inputs:\n      java-version:\n        required: true\n        type: string\n      maven-goals:\n        required: false\n        type: string\n        default: verify\n    secrets:\n      REGISTRY_PASSWORD:\n        required: false\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - uses: actions/setup-java@v4\n      with:\n        java-version: ${{ inputs.java-version }}\n        distribution: temurin\n        cache: maven\n    - run: mvn ${{ inputs.maven-goals }} -B\n    - if: inputs.java-version == '17'\n      uses: docker/build-push-action@v5\n      with:\n        push: true\n        tags: registry.example.com/my-app:${{ github.sha }}\n        password: ${{ secrets.REGISTRY_PASSWORD }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Calling it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/ci.yml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nname: CI\non: [push]\njobs:\n  build-java-17:\n    uses: ./.github/workflows/build-java.yml\n    with:\n      java-version: \"17\"\n      maven-goals: verify\n    secrets:\n      REGISTRY_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}\n\n  build-java-21:\n    uses: ./.github/workflows/build-java.yml\n    with:\n      java-version: \"21\"\n      maven-goals: compile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reusable workflows can also be called from other repositories:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "jobs:\n  build:\n    uses: company/shared-workflows/.github/workflows/build-java.yml@main\n    with:\n      java-version: \"17\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Composite actions"
      }), " — bundle multiple steps into a single action for reuse within a job:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/actions/setup-java-cache/action.yml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nname: \"Setup Java with Maven Cache\"\ndescription: \"Configures JDK and restores Maven cache\"\ninputs:\n  java-version:\n    description: \"JDK version\"\n    required: false\n    default: \"17\"\noutputs:\n  cache-hit:\n    description: \"Whether Maven cache was restored\"\n    value: ${{ steps.cache.outputs.cache-hit }}\nruns:\n  using: \"composite\"\n  steps:\n  - uses: actions/setup-java@v4\n    id: setup\n    with:\n      java-version: ${{ inputs.java-version }}\n      distribution: temurin\n  - uses: actions/cache@v4\n    id: cache\n    with:\n      path: ~/.m2/repository\n      key: maven-${{ hashFiles('**/pom.xml') }}\n      restore-keys: |\n        maven-\n  - run: echo \"JAVA_HOME=${{ steps.setup.outputs.path }}\"\n    shell: bash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using in a workflow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - uses: ./.github/actions/setup-java-cache\n      with:\n        java-version: \"21\"\n    - run: mvn verify -B\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment protection rules"
      }), " — restrict deployments to specific environments:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Deploy\non:\n  workflow_dispatch:\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    environment:\n      name: production\n      url: https://app.example.com\n    steps:\n    - run: echo \"Deploying to production\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure environment protection in repository Settings → Environments:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required reviewers (one or more people must approve)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wait timer (delay before deployment)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deployment branches (limit to specific branch patterns)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom deployment protection rules (from GitHub Marketplace)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q79-argocd-gitops-application-applicationset-sync-policy-sync-waves",
      children: "Q79: ArgoCD GitOps (Application, ApplicationSet, sync policy, sync waves)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ArgoCD is a declarative GitOps tool that continuously synchronizes Kubernetes cluster state with manifests stored in Git."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " — the core resource linking a Git repo to a cluster:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: order-service\n  namespace: argocd\nspec:\n  project: default\n  source:\n    repoURL: https://github.com/company/order-service-config\n    targetRevision: main\n    path: overlays/production\n    helm:\n      valueFiles:\n      - values.yaml\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: production\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true\n      allowEmpty: false\n    syncOptions:\n    - Validate=true\n    - CreateNamespace=true\n    - PrunePropagationPolicy=foreground\n    - PruneLast=true\n    retry:\n      limit: 5\n      backoff:\n        duration: 5s\n        factor: 2\n        maxDuration: 3m\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sync waves"
      }), " — control the order of resource application:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# 1. Namespace and ConfigMaps first (wave -5)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: production\n  annotations:\n    argocd.argoproj.io/sync-wave: \"-5\"\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\n  namespace: production\n  annotations:\n    argocd.argoproj.io/sync-wave: \"-5\"\n---\n# 2. Database migration job (wave 0)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: db-migrate\n  namespace: production\n  annotations:\n    argocd.argoproj.io/sync-wave: \"0\"\n    argocd.argoproj.io/hook: PreSync\nspec:\n  template:\n    spec:\n      containers:\n      - name: migrate\n        image: registry.example.com/order-service:1.2.3\n        command: [\"java\", \"-jar\", \"app.jar\", \"--spring.flyway.enabled=true\"]\n      restartPolicy: Never\n---\n# 3. Deployment and Service (wave 1)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: order-service\n  namespace: production\n  annotations:\n    argocd.argoproj.io/sync-wave: \"1\"\nspec:\n  replicas: 3\n  ...\n---\n# 4. Ingress last (wave 5)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: order-service\n  namespace: production\n  annotations:\n    argocd.argoproj.io/sync-wave: \"5\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ApplicationSet"
      }), " — generate Applications dynamically from templates:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: argoproj.io/v1alpha1\nkind: ApplicationSet\nmetadata:\n  name: microservices\n  namespace: argocd\nspec:\n  generators:\n  - git:\n      repoURL: https://github.com/company/microservices-config\n      revision: main\n      directories:\n      - path: services/*\n  template:\n    metadata:\n      name: '{{ path.basename }}'\n    spec:\n      project: default\n      source:\n        repoURL: https://github.com/company/microservices-config\n        targetRevision: main\n        path: '{{ path }}'\n      destination:\n        server: https://kubernetes.default.svc\n        namespace: '{{ path.basename }}'\n      syncPolicy:\n        automated:\n          prune: true\n          selfHeal: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Other generators: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cluster"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "matrix"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "merge"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pull-request"
      }), " (ephemeral environments for PRs), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SCMProvider"
      }), " (auto-discovery by repo label)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sync phases and hooks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "◀─── PreSync (db migration, schema validation) ───▶ Sync (apply manifests) ───▶ PostSync (smoke tests, notifications)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hook types: PreSync, Sync, PostSync, Skip, SyncFail."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sync options explained:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Prune=true"
        }), " — delete resources removed from Git"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SelfHeal=true"
        }), " — auto-correct manual changes to match Git"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CreateNamespace=true"
        }), " — auto-create destination namespace"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PruneLast=true"
        }), " — prune only after all sync waves succeed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q80-terraform-iac-state-providers-modules-workspaces-remote-state",
      children: "Q80: Terraform IaC (state, providers, modules, workspaces, remote state)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Terraform manages infrastructure as code — define resources, plan changes, apply to cloud providers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Terraform with AWS provider:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# main.tf\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform {\n  required_version = \">= 1.6\"\n  required_providers {\n    aws = {\n      source  = \"hashicorp/aws\"\n      version = \"~> 5.0\"\n    }\n  }\n}\n\nprovider \"aws\" {\n  region = var.aws_region\n}\n\nresource \"aws_db_instance\" \"postgres\" {\n  identifier        = \"orders-db\"\n  engine            = \"postgres\"\n  engine_version    = \"16.3\"\n  instance_class    = \"db.t3.medium\"\n  allocated_storage = 100\n  db_name           = \"orders\"\n  username          = \"admin\"\n  password          = var.db_password\n  skip_final_snapshot = false\n  backup_retention_period = 7\n  storage_encrypted = true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# variables.tf\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nvariable \"aws_region\" {\n  description = \"AWS region\"\n  type        = string\n  default     = \"us-east-1\"\n}\n\nvariable \"db_password\" {\n  description = \"Database password\"\n  type        = string\n  sensitive   = true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# outputs.tf\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\noutput \"db_endpoint\" {\n  value = aws_db_instance.postgres.endpoint\n  sensitive = false\n}\n\noutput \"db_arn\" {\n  value = aws_db_instance.postgres.arn\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Terraform state"
      }), " — maps resource declarations to real-world resources:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# State is stored locally in terraform.tfstate by default\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform apply\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote state"
      }), " — store state in a shared backend for team collaboration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "terraform {\n  backend \"s3\" {\n    bucket = \"company-terraform-state\"\n    key    = \"environments/production/network/terraform.tfstate\"\n    region = \"us-east-1\"\n    dynamodb_table = \"terraform-locks\"\n    encrypt = true\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The DynamoDB table enables state locking — prevents concurrent applies."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modules"
      }), " — reusable infrastructure components:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# modules/rds-postgres/main.tf\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nresource \"aws_db_instance\" \"this\" {\n  identifier        = var.identifier\n  engine            = \"postgres\"\n  engine_version    = var.engine_version\n  instance_class    = var.instance_class\n  allocated_storage = var.allocated_storage\n  db_name           = var.db_name\n  username          = var.username\n  password          = var.password\n  skip_final_snapshot = var.skip_final_snapshot\n  tags = var.tags\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# modules/rds-postgres/variables.tf\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nvariable \"identifier\" { type = string }\nvariable \"engine_version\" { type = string; default = \"16.3\" }\nvariable \"instance_class\" { type = string; default = \"db.t3.medium\" }\nvariable \"allocated_storage\" { type = number; default = 100 }\nvariable \"db_name\" { type = string }\nvariable \"username\" { type = string }\nvariable \"password\" { type = string; sensitive = true }\nvariable \"skip_final_snapshot\" { type = bool; default = false }\nvariable \"tags\" { type = map(string); default = {} }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# environments/production/main.tf\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nmodule \"orders_db\" {\n  source = \"../../modules/rds-postgres\"\n  identifier = \"orders-db-prod\"\n  db_name    = \"orders\"\n  username   = \"admin\"\n  password   = var.db_password\n  instance_class = \"db.r5.large\"\n  allocated_storage = 200\n  tags = {\n    Environment = \"production\"\n    Project     = \"order-service\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspaces"
      }), " — manage multiple environments with the same configuration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create workspaces\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform workspace new dev\nterraform workspace new staging\nterraform workspace new production\n\n# Switch and apply\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform workspace select dev\nterraform apply -var-file=dev.tfvars\n\nterraform workspace select production\nterraform apply -var-file=production.tfvars\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In code:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-hcl",
        children: "# Conditionally configure based on workspace\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nresource \"aws_db_instance\" \"postgres\" {\n  instance_class = terraform.workspace == \"production\" ? \"db.r5.large\" : \"db.t3.medium\"\n  allocated_storage = terraform.workspace == \"production\" ? 200 : 50\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Terraform workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize (download providers, modules)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform init\n\n# Format and validate\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform fmt -recursive\nterraform validate\n\n# See proposed changes\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform plan -var-file=production.tfvars -out=tfplan\n\n# Apply\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform apply tfplan\n\n# Destroy (use carefully!)\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nterraform destroy -var-file=production.tfvars\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use remote state with locking (S3 + DynamoDB or Terraform Cloud)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure with modules, environments, and a clear separation of concerns"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pin provider versions, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "required_providers"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Never commit state files to Git (add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.tfstate"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prevent_destroy = true"
        }), " on critical resources (databases, load balancers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "terraform plan"
        }), " in CI/CD pipelines, require manual approval for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "apply"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q81-sentry-datadog-and-newrelic-for-java-apm",
      children: "Q81: Sentry, DataDog, and NewRelic for Java APM?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Application Performance Monitoring (APM) tools provide code-level observability: distributed tracing, error tracking, transaction breakdowns, and profiling."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sentry"
      }), " — focused on error tracking and performance:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- pom.xml -->\n<dependency>\n    <groupId>io.sentry</groupId>\n    <artifactId>sentry-spring-boot-starter-jakarta</artifactId>\n    <version>7.6.0</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nsentry:\n  dsn: https://key@sentry.io/project\n  traces-sample-rate: 0.2\n  environment: ${SPRING_PROFILES_ACTIVE}\n  attach-stacktrace: true\n  max-request-body-size: always\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Manual error capture\ntry {\n    riskyOperation();\n} catch (Exception e) {\n    Sentry.captureException(e);\n}\n\n// Performance tracing\nITransaction transaction = Sentry.startTransaction(\"process-order\", \"task\");\nISpan span = transaction.startChild(\"db-query\");\ntry {\n    orderRepository.findById(orderId);\n} finally {\n    span.finish();\n    transaction.finish();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sentry excels at attaching breadcrumbs (user events, HTTP requests, DB queries leading to an error) and grouping similar errors into issues. Performance monitoring includes distributed tracing and profiling."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DataDog"
      }), " — full-stack observability platform:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.datadoghq</groupId>\n    <artifactId>dd-java-agent</artifactId>\n    <version>1.30.0</version>\n    <scope>runtime</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attach to JVM:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "java -javaagent:dd-java-agent.jar \\\n     -Ddd.service=order-service \\\n     -Ddd.env=production \\\n     -Ddd.version=1.2.3 \\\n     -Ddd.logs.injection=true \\\n     -jar app.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataDog automatically instruments Spring Boot (controllers, RestTemplate, JDBC, Kafka). Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed tracing"
        }), " with flame graphs and service maps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logs"
        }), " with automatic correlation to traces (", (0,jsx_runtime.jsx)(_components.code, {
          children: "dd.trace_id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dd.span_id"
        }), " in MDC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics"
        }), " from Micrometer automatically submitted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profiling"
        }), " — method-level CPU, memory allocation, and wall-clock profiling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synthetics"
        }), " — synthetic browser and API tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Watchdog"
        }), " — ML-based anomaly detection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# logback-spring.xml with DataDog trace injection\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\n<configuration>\n    <appender name=\"JSON\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <encoder class=\"ch.qos.logback.classic.encoder.PatternLayoutEncoder\">\n            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg\n                dd.trace_id=%X{dd.trace_id} dd.span_id=%X{dd.span_id} %n\n            </pattern>\n        </encoder>\n    </appender>\n</configuration>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NewRelic"
      }), " — agent-based APM with deep transaction insights:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "java -javaagent:newrelic-agent.jar \\\n     -Dnewrelic.config.app_name=order-service \\\n     -Dnewrelic.config.license_key=KEY \\\n     -Dnewrelic.config.log_level=info \\\n     -jar app.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# newrelic.yml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\napp_name: order-service\nlog_level: info\ntransaction_tracer:\n  enabled: true\n  transaction_threshold: apdex_f\n  record_sql: obfuscated\nslow_sql:\n  enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NewRelic highlights:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction traces"
        }), " — detailed per-request breakdowns with SQL, external calls, and method timings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apdex"
        }), " — user satisfaction score based on configurable response time thresholds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed tracing"
        }), " with cross-service correlations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infrastructure monitoring"
        }), " — server, container, and cloud integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI monitoring"
        }), " — LLM prompt/response tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sentry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DataDog"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NewRelic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-user monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (performance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (continuous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (transaction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synthetic monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per host + ingested data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per host + data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDK-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ease of setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choosing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sentry"
        }), " for error-focused teams, smaller budgets, or when you just need to track and fix exceptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DataDog"
        }), " for full-stack visibility across infrastructure, applications, and logs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NewRelic"
        }), " for deep transaction-level insights and when team already uses NewRelic ecosystem"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q82-database-tools-pgadmin-dbeaver-datagrip-mysql-workbench",
      children: "Q82: Database tools (pgAdmin, DBeaver, DataGrip, MySQL Workbench)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Database administration and query tools are essential for Java developers working with databases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pgAdmin"
      }), " — open-source PostgreSQL admin:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Docker Compose for local pgAdmin + Postgres\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nversion: '3.8'\nservices:\n  pgadmin:\n    image: dpage/pgadmin4:latest\n    environment:\n      PGADMIN_DEFAULT_EMAIL: admin@example.com\n      PGADMIN_DEFAULT_PASSWORD: admin\n      PGADMIN_CONFIG_SERVER_MODE: 'False'\n    ports:\n      - \"5050:80\"\n    volumes:\n      - pgadmin-data:/var/lib/pgadmin\n    depends_on:\n      - postgres\n  postgres:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: myapp\n      POSTGRES_USER: app\n      POSTGRES_PASSWORD: secret\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\nvolumes:\n  pgadmin-data:\n  pgdata:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pgAdmin features: SQL query editor with syntax highlighting, ERD diagram viewer, server group organization, backup/restore wizard, auto-vacuum monitoring, query plan visualization, and role management."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DBeaver"
      }), " — universal database tool (supports 80+ databases):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Key features for Java developers:\n├── Universal driver management (JDBC-based)\n├── Connection profiles (Spring Boot datasource auto-detect)\n├── ER diagrams (reverse engineer schema)\n├── SQL editor with autocomplete and formatting\n├── Data export (CSV, JSON, Excel, SQL insert)\n├── SSH tunneling for remote databases\n├── Compare (schema diff, data diff)\n├── Metadata browser (tables, views, procedures, indexes)\n├── Execution plan viewer\n└── Version control integration (Git, SVN)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DBeaver Community Edition is free. DBeaver Pro adds Redis, MongoDB, Cassandra, and NoSQL support."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DataGrip"
      }), " — JetBrains IDE for databases:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Smart code completion\nSELECT u.id, u.email, o.total\nFROM users u\nJOIN orders o ON u.id = o.user_id  -- auto-completes columns\nWHERE o.created_at > '2024-01-01'\nORDER BY o.total DESC;\n\n-- Built-in SQL formatter (Ctrl+Alt+L)\n-- Refactoring (rename column propagates through queries)\n-- Explain plan visualization\n-- Test data generator\n-- VCS integration (Git blame for queries)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataGrip integrates with IntelliJ IDEA Ultimate, sharing credentials and connection settings. Features: context-aware completion, full-text search across all database objects, diagram visualization, SQL file versioning, SSH/SSL tunneling, and read-only mode for production."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL Workbench"
      }), " — official MySQL GUI:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Workbench provides visual schema designer\n-- Forward engineer: model → DDL script → database\n-- Reverse engineer: database → ER diagram → model\n\n-- Performance dashboard: real-time query monitoring\nSHOW FULL PROCESSLIST;\nEXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'PENDING';\n\n-- Admin features:\n-- User management, privilege editor\n-- Server status, variables, logs\n-- Data export/import (mysqldump wrapper)\n-- Instance configuration editor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL Workbench features: visual SQL editor, schema synchronization (compare and push changes), performance dashboards (query throughput, buffer pool stats, connection health), query profiling, backup/restore wizard, and migration wizard (from Oracle, MS SQL, PostgreSQL to MySQL)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Databases"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pgAdmin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL specialists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web, Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DBeaver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-DB teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80+ (JDBC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free/Paid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DataGrip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JetBrains ecosystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL Workbench"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL/MariaDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL/MariaDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot datasource configs for popular tools:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\n\n> **Previous:** [Testing Interview Q&amp;A](./62-interview-testing.md) | **Next:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md)\nspring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/myapp\n    username: app\n    password: secret\n    hikari:\n      schema: public\n      connection-test-query: SELECT 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For DataGrip/DBeaver, use the same JDBC URL and credentials. For Docker Compose scenarios, connect clients to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost:5432"
      }), " with the same credentials defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yml"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never use GUI tools for production schema changes — use Flyway/Liquibase migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use read-only roles for production access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use SSH tunnels for secure remote connections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable connection pooling (HikariCP in application, connection manager in GUI tool)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document connection parameters in team wiki, not in code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use multiple tabs/sessions for different environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Save frequently-used queries as templates or snippets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n## Concept Comparison Table\n\n| Concept | Definition | Key Distinction | Use Case |\n|---------|-----------|-----------------|----------|\n| Interface | Contract without state | Multiple inheritance of type | API contracts |\n| Abstract Class | Partial implementation | Single inheritance, shared state | Template method pattern |\n| Record | Transparent data carrier | Auto-generated methods | DTOs, value objects |\n\n## Quick Reference\n\n| Topic | Key Points | Interview Frequency |\n|-------|-----------|-------------------|\n| **OOP** | Encapsulation, Inheritance, Polymorphism, Abstraction | Every interview |\n| **Collections** | List, Set, Map, Queue, Deque | 9/10 interviews |\n| **Concurrency** | synchronized, volatile, Locks, CompletableFuture | 7/10 senior interviews |\n| **Java 8+** | Lambdas, Streams, Optional, CompletableFuture | 8/10 interviews |\n\n## Cross-Application Matrix\n\n| Skill | Junior (0-2yr) | Mid (3-5yr) | Senior (6-9yr) | Staff (10+) |\n|-------|---------------|-------------|----------------|-------------|\n| OOP & Design Patterns | Define and identify | Apply and combine | Evaluate and refactor | Create and teach |\n| Collections | Basic usage | Performance trade-offs | Concurrent collections | Custom implementations |\n| Concurrency | Syntax knowledge | Write thread-safe code | Debug deadlocks | Design concurrent systems |\n\n## Chapter Quiz\n\n1. What is the difference between equals() and == in Java?\n   - A) They are identical\n   - B) equals() compares values, == compares references\n   - C) == compares values, equals() compares references\n   - D) equals() is for primitives, == is for objects\n\n<details>\n<summary>Answer</summary>\n**B) equals() compares logical equality (overridable), == compares reference equality.**\n</details>\n\n2. Which collection guarantees insertion order?\n   - A) HashMap\n   - B) TreeMap\n   - C) LinkedHashMap\n   - D) HashSet\n\n<details>\n<summary>Answer</summary>\n**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.\n</details>\n\n3. What keyword prevents a method from being overridden?\n   - A) static\n   - B) final\n   - C) private\n   - D) abstract\n\n<details>\n<summary>Answer</summary>\n**B) final.** A final method cannot be overridden by subclasses.\n</details>\n"
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