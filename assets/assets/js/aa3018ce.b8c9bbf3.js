"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7759],{

/***/ 14647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_03_docker_best_practices_md_aa3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-06-docker-kubernetes-cloud-03-docker-best-practices-md-aa3.json
const site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_03_docker_best_practices_md_aa3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/docker-kubernetes-cloud/03-docker-best-practices","title":"Docker Best Practices — Security, Optimization, and Production Readiness","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices.md","sourceDirName":"courses/ai-engineering-placement/06-docker-kubernetes-cloud","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":83,"frontMatter":{"id":"03-docker-best-practices","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices","title":"Docker Best Practices — Security, Optimization, and Production Readiness","sidebar_label":"Docker Best Practices — Security, Optimization, and Production Readiness","sidebar_position":83},"sidebar":"placementSidebar","previous":{"title":"Docker Compose — Multi-Container Orchestration","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose"},"next":{"title":"Kubernetes Basics — Pods, Services, and Deployments","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/04-kubernetes-basics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices.md


const frontMatter = {
	id: '03-docker-best-practices',
	slug: '/ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices',
	title: 'Docker Best Practices — Security, Optimization, and Production Readiness',
	sidebar_label: 'Docker Best Practices — Security, Optimization, and Production Readiness',
	sidebar_position: 83
};
const contentTitle = 'Docker Best Practices — Security, Optimization, and Production Readiness';

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
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "3.1 Optimizing Dockerfiles",
  "id": "31-optimizing-dockerfiles",
  "level": 2
}, {
  "value": "3.2 Security Best Practices",
  "id": "32-security-best-practices",
  "level": 2
}, {
  "value": "3.3 Resource Management",
  "id": "33-resource-management",
  "level": 2
}, {
  "value": "3.4 Image Tagging and Versioning",
  "id": "34-image-tagging-and-versioning",
  "level": 2
}, {
  "value": "3.5 CI/CD Integration",
  "id": "35-cicd-integration",
  "level": 2
}, {
  "value": "3.6 Production Monitoring",
  "id": "36-production-monitoring",
  "level": 2
}, {
  "value": "3.7 Common Pitfalls",
  "id": "37-common-pitfalls",
  "level": 2
}, {
  "value": "3.8 Performance Tuning",
  "id": "38-performance-tuning",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
  "value": "Node: alpine saves ~300MB vs full",
  "id": "node-alpine-saves-300mb-vs-full",
  "level": 2
}, {
  "value": "If the app needs privileged ports (&lt;1024), use NET_BIND_SERVICE",
  "id": "if-the-app-needs-privileged-ports-1024-use-net_bind_service",
  "level": 2
}, {
  "value": "Build command",
  "id": "build-command",
  "level": 2
}, {
  "value": "Option 2: dumb-init",
  "id": "option-2-dumb-init",
  "level": 2
}, {
  "value": "Option 3: Use --init flag",
  "id": "option-3-use---init-flag",
  "level": 2
}, {
  "value": "Build with cache mount",
  "id": "build-with-cache-mount",
  "level": 2
}, {
  "value": "Multi-platform build",
  "id": "multi-platform-build",
  "level": 2
}, {
  "value": "Python",
  "id": "python",
  "level": 2
}, {
  "value": "Export filesystem (flattened, no history)",
  "id": "export-filesystem-flattened-no-history",
  "level": 2
}, {
  "value": "Import filesystem as image",
  "id": "import-filesystem-as-image",
  "level": 2
}, {
  "value": "Push signed image",
  "id": "push-signed-image",
  "level": 2
}, {
  "value": "Only signed images can be pulled/run",
  "id": "only-signed-images-can-be-pulledrun",
  "level": 2
}, {
  "value": "Manage signing keys",
  "id": "manage-signing-keys",
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
    br: "br",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "docker-best-practices--security-optimization-and-production-readiness",
        children: "Docker Best Practices — Security, Optimization, and Production Readiness"
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
            children: "Apply Dockerfile optimization techniques for faster builds and smaller images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement Docker security best practices including least privilege and secret management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure resource constraints and monitoring for production containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage image tagging, versioning, and registry hygiene"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement CI/CD integration patterns for Docker builds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Troubleshoot common Docker production issues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers and cloud platforms are where AI models live in production. Docker packages your model, Kubernetes orchestrates it, and cloud platforms scale it. This module covers the full deployment stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding docker best practices is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how docker best practices works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizing Dockerfiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer ordering, multi-stage, slim base images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege, secrets, image scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU/memory limits, OOM handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image Tagging and Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic tags, digests, registry management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions, GitLab CI, build caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks, logging, metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common Pitfalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zombie processes, permission issues, timezones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance Tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer caching, buildkit, parallel builds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Optimize Dockerfiles] --> B[Security Hardening]\r\n    B --> C[Resource Management]\r\n    C --> D[Image Versioning]\r\n    D --> E[CI/CD Integration]\r\n    E --> F[Monitoring]\r\n    F --> G[Pitfalls]\r\n    G --> H[Performance Tuning]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-optimizing-dockerfiles",
      children: "3.1 Optimizing Dockerfiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-optimized Dockerfile produces smaller, faster-building, and more secure images."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Choose minimal base images"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Fat — ~800MB\r\nFROM python:3.11\r\n\r\n## Slim — ~120MB\r\nFROM python:3.11-slim\r\n\r\n## Alpine — ~50MB (use with caution)\r\nFROM python:3.11-alpine\r\n\r\n## Distroless — ~40MB (no shell, no package manager)\r\nFROM gcr.io/distroless/python3:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Order layers for maximum cache reuse"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## ❌ Inefficient — cache invalidated on every code change\r\nFROM node:20\r\nWORKDIR /app\r\nCOPY . .\r\nRUN npm ci\r\nRUN npm run build\r\n\r\n## ✅ Efficient — dependency layer cached separately\r\nFROM node:20 AS builder\r\nWORKDIR /app\r\nCOPY package*.json .\r\nRUN npm ci\r\nCOPY . .\r\nRUN npm run build\r\n\r\nFROM node:20-slim AS runtime\r\nWORKDIR /app\r\nCOPY --from=builder /app/dist ./dist\r\nCOPY --from=builder /app/node_modules ./node_modules\r\nCMD [\"node\", \"dist/server.js\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-stage build patterns"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Stage 1: Compile\r\nFROM golang:1.21 AS builder\r\nWORKDIR /app\r\nCOPY go.mod go.sum ./\r\nRUN go mod download\r\nCOPY . .\r\nRUN CGO_ENABLED=0 go build -o server .\r\n\r\n## Stage 2: Runtime\r\nFROM alpine:3.18\r\nRUN addgroup -S app && adduser -S app -G app\r\nCOPY --from=builder /app/server /server\r\nUSER app\r\nEXPOSE 8080\r\nCMD [\"/server\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional optimization tips"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Combine RUN commands to reduce layers\r\nRUN apt-get update && apt-get install -y \\\r\n    curl \\\r\n    git \\\r\n    && rm -rf /var/lib/apt/lists/*\r\n\r\n## Use .dockerignore effectively\r\n\r\n## Exclude: node_modules, .git, .env, *.md, __pycache__\r\n\r\n## Set --no-cache-dir for pip\r\nRUN pip install --no-cache-dir -r requirements.txt\r\n\r\n## Use COPY --link for better cache behavior\r\nCOPY --link package*.json ./\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-security-best-practices",
      children: "3.2 Security Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security must be integrated into every stage of the Docker workflow."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Least privilege principle"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## ❌ Running as root\r\nFROM node:20-alpine\r\nCOPY . /app\r\nCMD [\"node\", \"server.js\"]\r\n\r\n## ✅ Create and use non-root user\r\nFROM node:20-alpine\r\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\r\nUSER appuser\r\nWORKDIR /app\r\nCOPY --chown=appuser:appgroup . .\r\nCMD [\"node\", \"server.js\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secret management"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## ❌ Never hardcode secrets\r\nENV API_KEY=sk-abc123  # BAD — exposed in image layers\r\n\r\n## ✅ Build-time secrets (Docker BuildKit)\r\n\r\n## docker build --secret id=api_key,env=API_KEY .\r\nRUN --mount=type=secret,id=api_key \\\r\n    export API_KEY=$(cat /run/secrets/api_key) && \\\r\n    ./configure --api-key=$API_KEY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Runtime secrets\r\ndocker run -e API_KEY=sk-abc123 my-image\r\ndocker run --secret id=api_key my-image  # Swarm secrets\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Image scanning"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Scan with Docker Scout\r\ndocker scout quickview my-image\r\ndocker scout recommendations my-image\r\n\r\n## Scan with Trivy\r\ntrivy image my-image:latest\r\n\r\n## Scan with Snyk\r\nsnyk container test my-image\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security checklist"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No root user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "USER appuser"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only rootfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --read-only"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drop capabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--cap-drop=ALL --cap-add=NET_BIND_SERVICE"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No privileged mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Never ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--privileged"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run in CI pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal base image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use distroless or slim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No secrets in layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use BuildKit secrets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regular updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebase images weekly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Run with security hardening\r\ndocker run -d \\\r\n    --read-only \\\r\n    --cap-drop=ALL \\\r\n    --cap-add=NET_BIND_SERVICE \\\r\n    --security-opt=no-new-privileges:true \\\r\n    --tmpfs /tmp:rw,noexec,nosuid,size=64m \\\r\n    my-app\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-resource-management",
      children: "3.3 Resource Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers without limits can exhaust host resources. Always set constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## CPU constraints\r\ndocker run --cpus=0.5 my-image      # half a core\r\ndocker run --cpus=2 my-image        # 2 cores\r\ndocker run --cpuset-cpus=0,2 my-image # specific cores\r\n\r\n## Memory constraints\r\ndocker run --memory=512m my-image\r\ndocker run --memory-reservation=256m my-image\r\ndocker run --memory-swap=1g my-image  # memory + swap limit\r\n\r\n## Combined\r\ndocker run -d \\\r\n    --name api \\\r\n    --cpus=0.5 \\\r\n    --memory=256m \\\r\n    --memory-reservation=128m \\\r\n    --oom-kill-disable=false \\\r\n    my-api:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Docker Compose resource configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\r\n  api:\r\n    deploy:\r\n      resources:\r\n        limits:\r\n          cpus: \"0.50\"\r\n          memory: \"256M\"\r\n        reservations:\r\n          cpus: \"0.25\"\r\n          memory: \"128M\"\r\n    oom_kill_disable: false\r\n    restart: unless-stopped\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Understanding OOM behavior"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a container exceeds its memory limit, the kernel's OOM killer terminates it. Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--oom-score-adj"
      }), " to control which containers get killed first:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run --oom-score-adj=-1000 my-critical-app  # less likely to be killed\r\ndocker run --oom-score-adj=1000 my-batch-job       # more likely to be killed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitoring resource usage"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Real-time stats\r\ndocker stats\r\n\r\n## Inspect resource usage history\r\ndocker inspect --format '{{.Name}}: Memory={{.HostConfig.Memory}} CPU={{.HostConfig.NanoCpus}}' container_name\r\n\r\n## cgroup stats\r\ncat /sys/fs/cgroup/memory/docker/<container_id>/memory.usage_in_bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-image-tagging-and-versioning",
      children: "3.4 Image Tagging and Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consistent image tagging enables traceability and rollback."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tagging strategies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Semantic versioning\r\ndocker build -t my-app:1.0.0 .\r\ndocker build -t my-app:1.0 .\r\ndocker build -t my-app:1 .\r\ndocker build -t my-app:latest .\r\n\r\n## Git-based tagging\r\ndocker build -t my-app:$(git rev-parse --short HEAD) .\r\ndocker build -t my-app:$(git describe --tags) .\r\n\r\n## Environment tags\r\ndocker build -t my-app:staging-$(git rev-parse --short HEAD) .\r\ndocker build -t my-app:production-$(git rev-parse --short HEAD) .\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Image digests"
      }), " — immutable references:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Get digest\r\ndocker images --digests my-app\r\n\r\n## Pull by digest\r\ndocker pull my-app@sha256:abc123...\r\n\r\n## Use digest in production (immutable)\r\ndocker run my-app@sha256:def456...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Registry management"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Tag for registry\r\ndocker tag my-app:1.0.0 registry.example.com/team/my-app:1.0.0\r\n\r\n## Push\r\ndocker push registry.example.com/team/my-app:1.0.0\r\n\r\n## Multi-architecture images\r\ndocker buildx build --platform linux/amd64,linux/arm64 -t my-app:latest --push .\r\n\r\n## Garbage collection\r\n\r\n## AWS ECR lifecycle policies\r\n\r\n## Docker Registry: bin/registry garbage-collect /etc/docker/registry/config.yml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Retention policies"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keep"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delete"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latest N versions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 most recent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Older than 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Date-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last 30 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Older than 30 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git SHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All tagged builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All untagged builds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "staging-* (7 days)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prod-* (indefinite)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-cicd-integration",
      children: "3.5 CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker builds in CI/CD pipelines require optimized caching and security scanning."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Actions example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Build and Push Docker Image\r\n\r\non:\r\n  push:\r\n    branches: [main]\r\n\r\njobs:\r\n  build:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n\r\n      - name: Set up Docker Buildx\r\n        uses: docker/setup-buildx-action@v3\r\n\r\n      - name: Cache Docker layers\r\n        uses: actions/cache@v3\r\n        with:\r\n          path: /tmp/.buildx-cache\r\n          key: ${{ runner.os }}-buildx-${{ github.sha }}\r\n          restore-keys: |\r\n            ${{ runner.os }}-buildx-\r\n\r\n      - name: Build and push\r\n        uses: docker/build-push-action@v5\r\n        with:\r\n          context: .\r\n          push: true\r\n          tags: |\r\n            ghcr.io/${{ github.repository }}:latest\r\n            ghcr.io/${{ github.repository }}:${{ github.sha }}\r\n          cache-from: type=gha\r\n          cache-to: type=gha,mode=max\r\n\r\n      - name: Scan image\r\n        run: |\r\n          docker scout quickview ghcr.io/${{ github.repository }}:${{ github.sha }}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Build caching strategies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## GitHub Actions caching\r\ncache-from: type=gha\r\ncache-to: type=gha,mode=max\r\n\r\n## Registry caching\r\ncache-from: type=registry,ref=my-image:buildcache\r\ncache-to: type=registry,ref=my-image:buildcache,mode=max\r\n\r\n## Local caching\r\ncache-from: type=local,src=/tmp/.buildx-cache\r\ncache-to: type=local,dest=/tmp/.buildx-cache\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GitLab CI example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "docker-build:\r\n  stage: build\r\n  image: docker:24\r\n  services:\r\n    - docker:dind\r\n  variables:\r\n    DOCKER_BUILDKIT: \"1\"\r\n  script:\r\n    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY\r\n    - docker build\r\n        --cache-from $CI_REGISTRY_IMAGE:latest\r\n        -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA\r\n        -t $CI_REGISTRY_IMAGE:latest\r\n        .\r\n    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA\r\n    - docker push $CI_REGISTRY_IMAGE:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-production-monitoring",
      children: "3.6 Production Monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Health checks"
      }), " — required for container orchestration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## HTTP health check\r\nHEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \\\r\n    CMD curl -f http://localhost:8080/health || exit 1\r\n\r\n## TCP health check\r\nHEALTHCHECK --interval=30s --timeout=10s --start-period=5s \\\r\n    CMD nc -z localhost 5432 || exit 1\r\n\r\n## Custom command\r\nHEALTHCHECK --interval=60s --timeout=5s \\\r\n    CMD python /app/health_check.py || exit 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logging best practices"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Send logs to stdout/stderr\r\nENV PYTHONUNBUFFERED=1\r\n\r\n## Configure application logger\r\n\r\n## Python: logging.basicConfig(stream=sys.stdout)\r\n\r\n## Node: pino-pretty\r\n\r\n## Java: Logback console appender\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\r\n## Compose logging configuration\r\nservices:\r\n  api:\r\n    logging:\r\n      driver: \"json-file\"\r\n      options:\r\n        max-size: \"10m\"\r\n        max-file: \"3\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics exposure"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Expose metrics endpoint\r\nEXPOSE 9090\r\n\r\n## Prometheus metrics (Python)\r\nRUN pip install prometheus-client\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from prometheus_client import Counter, Histogram, start_http_server\r\n\r\nREQUEST_COUNT = Counter(\"http_requests_total\", \"Total HTTP requests\")\r\nREQUEST_DURATION = Histogram(\"http_request_duration_seconds\", \"HTTP request duration\")\r\n\r\n@app.get(\"/metrics\")\r\ndef metrics():\r\n    return Response(prometheus_client.generate_latest(), media_type=\"text/plain\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37-common-pitfalls",
      children: "3.7 Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zombie processes"
      }), ": PID 1 in a container must handle signals properly. Use a minimal init system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Solution 1: Use tini (tiny init)\r\nFROM python:3.11-slim\r\nRUN apt-get update && apt-get install -y tini\r\nENTRYPOINT [\"tini\", \"--\"]\r\nCMD [\"python\", \"app.py\"]\r\n\r\n## Solution 2: Use dumb-init\r\nFROM node:20-alpine\r\nRUN apk add --no-cache dumb-init\r\nENTRYPOINT [\"dumb-init\", \"--\"]\r\nCMD [\"node\", \"server.js\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Permission issues with volumes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Match container user with host user\r\nRUN adduser -u 1001 appuser\r\nUSER appuser\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timezone configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Set timezone\r\nENV TZ=UTC\r\nRUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone\r\n\r\n## Or for Debian-based\r\nRUN apt-get install -y tzdata && \\\r\n    ln -snf /usr/share/zoneinfo/UTC /etc/localtime\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File descriptor limits"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Increase in docker run\r\ndocker run --ulimit nofile=65536:65536 my-app\r\n\r\n## Or in Docker Compose\r\nulimits:\r\n  nofile:\r\n    soft: 65536\r\n    hard: 65536\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Dockerfile mistakes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## ❌ Wrong\r\nCOPY . .\r\nRUN npm install\r\nRUN npm test\r\nRUN npm run build\r\n\r\n## ✅ Right\r\nCOPY package*.json ./\r\nRUN npm ci\r\nCOPY . .\r\nRUN npm test\r\nRUN npm run build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38-performance-tuning",
      children: "3.8 Performance Tuning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BuildKit features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Enable BuildKit\r\nexport DOCKER_BUILDKIT=1\r\ndocker build --progress=plain -t my-app .\r\n\r\n## Parallel builds\r\ndocker build --parallel -t my-app .\r\n\r\n## Cache mounts\r\nRUN --mount=type=cache,target=/root/.npm \\\r\n    npm ci\r\n\r\n## Bind mounts for temporary tools\r\nRUN --mount=type=bind,source=scripts,target=/scripts \\\r\n    /scripts/build.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer compression"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "\r\n## Use buildkit's compression\r\n\r\n## docker build --output=type=image,name=my-app,compression=zstd\r\n\r\n## Squash layers (use with caution — breaks cache)\r\n\r\n## docker build --squash -t my-app .\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network performance"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Use host network for high-performance needs\r\ndocker run --network=host my-app\r\n\r\n## Use macvlan for direct network access\r\ndocker network create -d macvlan --subnet=192.168.1.0/24 my-network\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage driver selection"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Driver"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "overlay2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default, fast, stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires Linux 4.0+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fuse-overlayfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works in rootless mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than overlay2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "devicemapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not recommended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aufs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in mainline kernel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\r\n## Check current storage driver\r\ndocker info | grep \"Storage Driver\"\r\n\r\n## Switch (daemon.json)\r\n{\r\n  \"storage-driver\": \"overlay2\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript can orchestrate Docker operations and enforce best practices through automation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { execSync } from \"child_process\";\r\n\r\ninterface DockerBuildOptions {\r\n  context: string;\r\n  tag: string;\r\n  platform?: string;\r\n  cacheFrom?: string;\r\n  secrets?: Record<string, string>;\r\n}\r\n\r\nfunction dockerBuild(options: DockerBuildOptions): void {\r\n  const cmd = [\r\n    \"docker buildx build\",\r\n    `--file \"${options.context}/Dockerfile\"`,\r\n    `-t ${options.tag}`,\r\n    options.platform ? `--platform ${options.platform}` : \"\",\r\n    options.cacheFrom ? `--cache-from ${options.cacheFrom}` : \"\",\r\n    ...Object.entries(options.secrets || {}).map(\r\n      ([id, val]) => `--secret id=${id},env=${val}`\r\n    ),\r\n    options.context,\r\n  ]\r\n    .filter(Boolean)\r\n    .join(\" \");\r\n\r\n  execSync(cmd, { stdio: \"inherit\" });\r\n}\r\n\r\n// Enforce best practice: multi-arch + build cache\r\ndockerBuild({\r\n  context: \".\",\r\n  tag: \"my-app:latest\",\r\n  platform: \"linux/amd64,linux/arm64\",\r\n  cacheFrom: \"type=gha\",\r\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use minimal base images (slim, alpine, distroless) to reduce attack surface and size; distroless images have no shell or package manager"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Order Dockerfile instructions by change frequency — dependencies first, code last — to maximize layer caching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-stage builds separate compilation from runtime, producing images that are 10-100x smaller"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never run as root in containers; create a dedicated user with minimal permissions and drop all non-essential capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use BuildKit secrets for build-time credentials; never hardcode secrets in image layers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always set CPU and memory limits on containers to prevent resource exhaustion on the host"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use semantic versioning or Git SHA-based tags for traceability; pin production images by digest for immutability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement health checks, structured logging to stdout, and metrics endpoints in every production container"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use tini or dumb-init as PID 1 to handle signal forwarding and prevent zombie processes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate vulnerability scanning (Trivy, Docker Scout, Snyk) into CI/CD pipelines to catch issues before deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Building images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage, slim base, .dockerignore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-stage, fat base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-root user, read-only rootfs, scan images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running as root, no scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always set CPU/memory limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No limits (can crash host)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic version + Git SHA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only ", (0,jsx_runtime.jsx)(_components.code, {
              children: "latest"
            }), " tag"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache Docker layers between builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebuilding from scratch each time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BuildKit secrets or runtime env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoding in Dockerfile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to stdout/stderr with rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing to files inside container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named volumes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storing data in container writable layer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How do you reduce Docker image size for production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Several strategies combined:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Minimal base image"
            }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-slim"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-alpine"
            }), ", or distroless images instead of full OS images"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-stage builds"
            }), ": Build in one stage, copy only artifacts to the final stage"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Layer cleanup"
            }), ": Combine RUN commands, remove package manager caches in the same layer"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: ".dockerignore"
            }), ": Exclude development files, tests, documentation"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Python: slim saves ~700MB vs full\nFROM python:3.11-slim  # ~120MB vs ~887MB\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "node-alpine-saves-300mb-vs-full",
              children: "Node: alpine saves ~300MB vs full"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FROM node:20-alpine  # ~120MB vs ~400MB"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Why should you not run containers as root? How do you set up a non-root user?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Running as root in a container is dangerous because: if the container is compromised, the attacker has root access to the containerized processes; and if there's a kernel exploit, they can escape to the host."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Create non-root user\nFROM node:20-alpine\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser\nWORKDIR /app\nCOPY --chown=appuser:appgroup . .\nCMD [\"node\", \"server.js\"]\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "if-the-app-needs-privileged-ports-1024-use-net_bind_service",
              children: "If the app needs privileged ports (<1024), use NET_BIND_SERVICE"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --cap-add=NET_BIND_SERVICE my-app"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Explain Docker layer caching. How can you optimize it in CI/CD?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Docker caches each layer after a successful build. On subsequent builds, if the instruction and context haven't changed, Docker reuses the cached layer."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimization strategies"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Order instructions by stability: system packages → language runtime → dependencies → code"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Copy dependency manifests separately before running install commands"
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use BuildKit's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--cache-from"
            }), " to pull cache from registry or previous builds"]
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "In CI/CD, restore cache from a previous successful build"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# GitHub Actions cache\n- uses: actions/cache@v3\n  with:\n    path: /tmp/.buildx-cache\n    key: buildx-${{ github.sha }}\n    restore-keys: buildx-"
          })
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What is the purpose of HEALTHCHECK in a Dockerfile?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "HEALTHCHECK tells Docker how to test if a container is still working. It runs a command periodically inside the container. If the command fails repeatedly, Docker marks the container as unhealthy and can restart it."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n    CMD curl -f http://localhost:8000/health || exit 1"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Options"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--interval"
            }), ": How often to run (default 30s)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--timeout"
            }), ": Maximum time for the check (default 30s)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--start-period"
            }), ": Grace period before first check (default 0s)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--retries"
            }), ": Consecutive failures before unhealthy (default 3)"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Orchestrators (Kubernetes, Docker Swarm) use health check status for service discovery and rolling updates."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you handle secrets in Docker builds and runtime?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build-time secrets"
          }), " (Docker BuildKit):"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Dockerfile\nRUN --mount=type=secret,id=api_key \\\n    export KEY=$(cat /run/secrets/api_key) && \\\n    ./configure --key=$KEY\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "build-command",
              children: "Build command"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker build --secret id=api_key,env=API_KEY ."
            })
          })]
        }), "\r\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Runtime secrets"
          }), ":"]
        }), "\r\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\r\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docker run -e API_KEY=xxx my-image"
            }), " (acceptable for local dev)"]
          }), "\r\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --secret id=api_key my-image"
            }), " (Docker Swarm)"]
          }), "\r\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Environment files: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --env-file .env my-image"
            })]
          }), "\r\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "External secret stores: HashiCorp Vault, AWS Secrets Manager"
          }), "\r\n"]
        }), "\r\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Never"
          }), ": Hardcode secrets in Dockerfile or copy .env files into the image."]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is the zombie process problem in Docker and how do you solve it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Linux, PID 1 has special responsibilities: it must reap orphaned child processes (zombies) and forward signals. Many applications are not designed to be PID 1, so zombie processes accumulate and signals (SIGTERM, SIGINT) are not forwarded to child processes."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Solutions"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Option 1: tini (tiny init for containers)\nFROM python:3.11-slim\nRUN apt-get update && apt-get install -y tini\nENTRYPOINT [\"tini\", \"--\"]\nCMD [\"python\", \"app.py\"]\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "option-2-dumb-init",
              children: "Option 2: dumb-init"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FROM node:20-alpine\r\nRUN apk add --no-cache dumb-init\r\nENTRYPOINT [\"dumb-init\", \"--\"]\r\nCMD [\"node\", \"server.js\"]"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "option-3-use---init-flag",
              children: "Option 3: Use --init flag"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --init my-app"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is BuildKit and why should you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "BuildKit is Docker's next-generation build system, available since Docker 18.09. It provides significant improvements over the legacy builder:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel builds"
            }), ": Builds independent stages concurrently"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better cache management"
            }), ": More granular caching, cache mounts"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Secrets support"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--mount=type=secret"
            }), " for build-time secrets"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SSH agent forwarding"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--mount=type=ssh"
            }), " for private repositories"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-platform builds"
            }), ": Build for arm64, amd64 simultaneously"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inline cache"
            }), ": Cache metadata embedded in the image"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Enable BuildKit\nexport DOCKER_BUILDKIT=1\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "build-with-cache-mount",
              children: "Build with cache mount"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["RUN --mount=type=cache,target=/root/.npm ", (0,jsx_runtime.jsx)(_components.br, {}), "\nnpm ci"]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "multi-platform-build",
              children: "Multi-platform build"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker buildx build --platform linux/amd64,linux/arm64 -t my-app ."
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you debug a container that uses 100% CPU?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Step-by-step debugging approach:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Identify container"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker stats"
            }), " shows CPU usage per container"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inspect processes"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker top container_name"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Profile inside container"
            }), ":\n        ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docker exec -it container_name bash\ntop  # or htop\nps aux --sort=-%cpu"
              })
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Get thread dump"
            }), ":\n        ", (0,jsx_runtime.jsxs)(_components.pre, {
              children: [(0,jsx_runtime.jsxs)(_components.code, {
                children: ["# Java\ndocker exec container_name jstack -l <pid>\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "python",
                  children: "Python"
                }), "\n"]
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "docker exec container_name python -c \"import threading; print(threading.enumerate())\""
                })
              })]
            })]
          }), "\r\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Set CPU limits"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker update --cpus=0.5 container_name"
            })]
          }), "\r\n"]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is the difference between docker commit, save, and export?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Three ways to capture container state:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "docker commit"
            }), ": Creates a new image from a container's changes. Not recommended — prefer Dockerfiles for reproducible builds."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "docker save"
            }), ": Saves an image (with all layers and metadata) to a tar archive. Used for offline transfer."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "docker export"
            }), ": Exports a container's filesystem as a tar archive. No history, no metadata — just the files."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Save image (preserves layers, history)\ndocker save -o my-image.tar my-app:latest\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "export-filesystem-flattened-no-history",
              children: "Export filesystem (flattened, no history)"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "docker export -o filesystem.tar container_name"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "import-filesystem-as-image",
              children: "Import filesystem as image"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cat filesystem.tar | docker import - imported-image:latest"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What are Docker content trust and image signing?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Docker Content Trust (DCT) provides image signing and verification using cryptographic signatures. It ensures that the image you pull is exactly what the publisher signed."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Enable content trust\nexport DOCKER_CONTENT_TRUST=1\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "push-signed-image",
              children: "Push signed image"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "docker push my-registry/my-app:latest"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "only-signed-images-can-be-pulledrun",
              children: "Only signed images can be pulled/run"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "docker run my-registry/my-app:latest  # fails if not signed"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "manage-signing-keys",
              children: "Manage signing keys"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker trust key generate my-key\r\ndocker trust signer add --key my-key.pub signer my-registry/my-app"
            })
          })]
        }), "\r\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Notary"
          }), ": The underlying service that manages trust metadata. Docker Hub provides a Notary server; you can run your own for private registries."]
        }), "\r\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image signing prevents supply chain attacks by verifying image provenance and integrity."
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which of the following Dockerfiles produces the smallest production image?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FROM python:3.11"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COPY . ."
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RUN pip install"
      }), "\r\nb) Multi-stage build with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FROM python:3.11-slim"
      }), " for runtime\r\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FROM python:3.11-alpine"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RUN pip install"
      }), "\r\nd) Single-stage ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FROM ubuntu:latest"
      }), " with Python installed"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Multi-stage build with python:3.11-slim"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-stage builds separate build tools from runtime, and slim base images are smaller than full or alpine (which may have compatibility issues)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What Docker flag prevents a container from writing to its own filesystem?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--read-only"
      }), "\r\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--immutable"
      }), "\r\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--no-write"
      }), "\r\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--frozen"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) --read-only"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The --read-only flag makes the container's filesystem read-only, preventing any writes. Use --tmpfs for directories that need writes (like /tmp)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which instruction in a Dockerfile tells Docker how to verify a container is working?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHECK"
      }), "\r\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HEALTHCHECK"
      }), "\r\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "STATUS"
      }), "\r\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MONITOR"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) HEALTHCHECK"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "HEALTHCHECK defines a command that Docker runs periodically to determine if the container is still healthy."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the primary purpose of Docker Content Trust?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Speed up image pulls\r\nb) Sign and verify image integrity\r\nc) Compress image layers\r\nd) Cache images locally"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Sign and verify image integrity"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "DCT uses cryptographic signatures to ensure images haven't been tampered with and come from a trusted publisher."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which flag limits a container to using at most one CPU core?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--cpu=1"
      }), "\r\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--cpus=1.0"
      }), "\r\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--cpu-shares=1024"
      }), "\r\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--cpu-quota=100000"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s03-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) --cpus=1.0"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The --cpus flag specifies the number of CPU cores available. --cpu-shares is relative weight, not a limit."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Take a Dockerfile that produces a 1GB+ image and optimize it using multi-stage builds, a slim base image, and proper layer ordering. Measure the before and after sizes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a security-hardened Dockerfile for a Node.js application: non-root user, read-only filesystem, dropped capabilities, no secrets in layers, health check, and tini init."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Set up a GitHub Actions workflow that builds a Docker image, caches layers between runs, scans for vulnerabilities with Docker Scout, and pushes to a registry with both a Git SHA and semantic version tag."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Optimize a Python ML training Dockerfile: use CUDA base image, implement multi-stage to separate build (compiling native extensions) from runtime, use cache mounts for pip, and set GPU resource reservations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Debug a production container issue: a container is OOM-killed every few hours. Set up proper memory limits, add health checks, configure logging, and implement a monitoring solution using docker stats and custom metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
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
            children: "Explain the core idea of Docker Best Practices — Security, Optimization, and Production Readiness in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — Security, Optimization, and Production Readiness."
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
            children: "Describe a production bug caused by misunderstanding this technique — Security, Optimization, and Production Readiness. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Security, Optimization, and Production Readiness from 10 users to 10 million?"
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
            children: "Compare Docker Best Practices — Security, Optimization, and Production Readiness with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — Security, Optimization, and Production Readiness."
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
            children: "How does Docker Best Practices — Security, Optimization, and Production Readiness behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — Security, Optimization, and Production Readiness run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Security, Optimization, and Production Readiness that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Docker Best Practices — Security, Optimization, and Production Readiness explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Docker Best Practices — Security, Optimization, and Production Readiness\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Docker Best Practices — Security, Optimization, and Production Readiness to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Docker Best Practices — Security, Optimization, and Production Readiness (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Docker Best Practices — Security, Optimization, and Production Readiness and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Docker Best Practices — Security, Optimization, and Production Readiness-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Docker Best Practices — Security, Optimization, and Production Readiness interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Docker Best Practices — Security, Optimization, and Production Readiness in production today?"
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
        }), " Docker Best Practices — Security, Optimization, and Production Readiness builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Docker Best Practices — Security, Optimization, and Production Readiness before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Docker Best Practices — Security, Optimization, and Production Readiness is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Docker Best Practices — Security, Optimization, and Production Readiness in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Docker Best Practices — Security, Optimization, and Production Readiness chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Docker Best Practices — Security, Optimization, and Production Readiness is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 Docker Best Practices is ___. — Answer: O(1) container start with cached layers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Docker Best Practices is ___. — Answer: missing base image, port conflicts, volume mounts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Docker Best Practices — Security, Optimization, and Production Readiness issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Docker Best Practices — Security, Optimization, and Production Readiness in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Docker Best Practices — Security, Optimization, and Production Readiness that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Security, Optimization, and Production Readiness is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Docker Best Practices — Security, Optimization, and Production Readiness in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Docker Best Practices — Security, Optimization, and Production Readiness and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Security, Optimization, and Production Readiness on an empty input?"
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
            children: "Complete Medium exercises, explain Docker Best Practices — Security, Optimization, and Production Readiness to someone else"
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
        children: "Always write a one-line example of Docker Best Practices — Security, Optimization, and Production Readiness from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Docker Best Practices — Security, Optimization, and Production Readiness when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Docker Best Practices — Security, Optimization, and Production Readiness twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Docker Best Practices — Security, Optimization, and Production Readiness snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Docker Best Practices — Security, Optimization, and Production Readiness listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Docker Best Practices — Security, Optimization, and Production Readiness to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Docker Best Practices — Security, Optimization, and Production Readiness by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Docker Best Practices — Security, Optimization, and Production Readiness to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Docker official documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.docker.com",
          children: "https://docs.docker.com"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Docker Deep Dive' by Nigel Poulton — concise practical guide"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kubernetes documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://kubernetes.io/docs",
          children: "https://kubernetes.io/docs"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Container Security' by Liz Rice — security-focused deep dive"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Docker Hub official images: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://hub.docker.com",
          children: "https://hub.docker.com"
        }), " Best Practices — Security, Optimization, and Production Readiness"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 06 — builds the foundation for 03 Docker Best Practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 Docker Best Practices with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 Docker Best Practices fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 Docker Best Practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 Docker Best Practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 Docker Best Practices?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 Docker Best Practices?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 Docker Best Practices asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 Docker Best Practices?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Best Practices — Security, Optimization, and Production Readiness is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Docker Best Practices — Security, Optimization, and Production Readiness."
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
        children: "Docker Best Practices — Security, Optimization, and Production Readiness emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Docker Best Practices — Security, Optimization, and Production Readiness today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Docker Best Practices — Security, Optimization, and Production Readiness — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Docker Best Practices — Security, Optimization, and Production Readiness changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never store secrets in Dockerfile ENV or ARG — use Docker secrets or environment injection at runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use minimal base images (distroless, alpine) to reduce attack surface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan images with Trivy or Snyk before pushing to registry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set resource limits (--memory, --cpus) to prevent container resource exhaustion attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use read-only filesystems (--read-only) for stateless containers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker containers for ML training should mount data volumes rather than copying data into the image"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU access in containers requires nvidia-docker runtime and CUDA-compatible base images"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model serving containers should be optimized for inference: use ONNX Runtime or TensorRT for faster inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-stage builds separate training dependencies (PyTorch, CUDA) from serving dependencies (FastAPI, ONNX)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container resource limits prevent one model from starving others in multi-model serving setups"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "03 Docker Best Practices is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Docker Best Practices — Security, Optimization, and Production Readiness skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-03dockerbestpractices-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which of the following Dockerfiles produces the smallest production image?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Multi-stage build with python:3.11-slim"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-03dockerbestpractices-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What Docker flag prevents a container from writing to its own filesystem?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) --read-only"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-03dockerbestpractices-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which instruction in a Dockerfile tells Docker how to verify a container is working?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) HEALTHCHECK"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-03dockerbestpractices-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the primary purpose of Docker Content Trust?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Sign and verify image integrity"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-03dockerbestpractices-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which flag limits a container to using at most one CPU core?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) --cpus=1.0"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Docker Best Practices — Security, Optimization, and Production Readiness (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Docker Best Practices — Security, Optimization, and Production Readiness (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Docker Best Practices — Security, Optimization, and Production Readiness-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Docker Best Practices — Security, Optimization, and Production Readiness in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker Desktop"
        }), " — local development environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker Compose"
        }), " — multi-container local orchestration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trivy"
        }), " — container image vulnerability scanner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dive"
        }), " — tool for exploring Docker image layers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hadolint"
        }), " — Dockerfile linter for best practices Best Practices — Security, Optimization, and Production Readiness"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 03 Docker Best Practices pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
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
        children: "Explain Docker Best Practices — Security, Optimization, and Production Readiness in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Docker Best Practices — Security, Optimization, and Production Readiness."
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
        children: "Tell me about a time you debugged a Docker Best Practices — Security, Optimization, and Production Readiness problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Docker Best Practices — Security, Optimization, and Production Readiness is used at scale?"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_docker_best_practices(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Docker Best Practices.\r\n\r\n    Key concepts: images, containers, volumes, networks, Dockerfile\r\n    Complexity: O(1) container start with cached layers\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Docker Best Practices here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
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
            children: "Explain Docker Best Practices — Security, Optimization, and Production Readiness without notes"
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
          children: "Airbnb"
        }), " migrated 1000+ services to Docker, reducing deployment time from 12 minutes to 2 minutes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PayPal"
        }), " uses Docker to run 700M+ containers per year across their payment processing infrastructure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spotify"
        }), " uses Docker to ensure consistent environments across 2000+ engineers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google"
        }), " runs 2 billion container instances per week using their internal Borg system (which inspired Kubernetes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention multi-stage builds for production — they reduce image size by 80-90% by separating build and runtime dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/04-kubernetes-basics",
        children: "Kubernetes Basics — Pods, Services, and Deployments"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Best Practices — Security, Optimization, and Production Readiness, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Docker Best Practices — Security, Optimization, and Production Readiness depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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