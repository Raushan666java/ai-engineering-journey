"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[15446],{

/***/ 35860
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_02_docker_compose_md_fcf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-06-docker-kubernetes-cloud-02-docker-compose-md-fcf.json
const site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_02_docker_compose_md_fcf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/docker-kubernetes-cloud/02-docker-compose","title":"Docker Compose — Multi-Container Orchestration","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose.md","sourceDirName":"courses/ai-engineering-placement/06-docker-kubernetes-cloud","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":82,"frontMatter":{"id":"02-docker-compose","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose","title":"Docker Compose — Multi-Container Orchestration","sidebar_label":"Docker Compose — Multi-Container Orchestration","sidebar_position":82},"sidebar":"placementSidebar","previous":{"title":"Docker Basics — Containers, Images, and Docker Engine","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics"},"next":{"title":"Docker Best Practices — Security, Optimization, and Production Readiness","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose.md


const frontMatter = {
	id: '02-docker-compose',
	slug: '/ai-engineering-placement/06-docker-kubernetes-cloud/02-docker-compose',
	title: 'Docker Compose — Multi-Container Orchestration',
	sidebar_label: 'Docker Compose — Multi-Container Orchestration',
	sidebar_position: 82
};
const contentTitle = 'Docker Compose — Multi-Container Orchestration';

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
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "2.1 What is Docker Compose",
  "id": "21-what-is-docker-compose",
  "level": 2
}, {
  "value": "2.2 Compose File Structure",
  "id": "22-compose-file-structure",
  "level": 2
}, {
  "value": "2.3 Service Configuration",
  "id": "23-service-configuration",
  "level": 2
}, {
  "value": "2.4 Networking in Compose",
  "id": "24-networking-in-compose",
  "level": 2
}, {
  "value": "2.5 Dependencies and Health Checks",
  "id": "25-dependencies-and-health-checks",
  "level": 2
}, {
  "value": "2.6 Environment Variables",
  "id": "26-environment-variables",
  "level": 2
}, {
  "value": "2.7 Scaling and Load Balancing",
  "id": "27-scaling-and-load-balancing",
  "level": 2
}, {
  "value": "2.8 Debugging and Logging",
  "id": "28-debugging-and-logging",
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
  "value": "From within api container",
  "id": "from-within-api-container",
  "level": 2
}, {
  "value": "nginx upstream must reference the service name",
  "id": "nginx-upstream-must-reference-the-service-name",
  "level": 2
}, {
  "value": "Restore",
  "id": "restore",
  "level": 2
}, {
  "value": "docker-compose.yml",
  "id": "docker-composeyml",
  "level": 2
}, {
  "value": "Then exec into it",
  "id": "then-exec-into-it",
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
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
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
    annotation: "annotation",
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
    math: "math",
    mi: "mi",
    mo: "mo",
    mrow: "mrow",
    msub: "msub",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "docker-compose--multi-container-orchestration",
        children: "Docker Compose — Multi-Container Orchestration"
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
            children: "Understand Docker Compose architecture and use cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write docker-compose.yml files with services, networks, and volumes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage multi-container application lifecycle with Compose CLI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure environment variables, dependencies, and health checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale services and manage load balancing with Compose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug multi-container applications using Compose logs and exec"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers and cloud platforms are where AI models live in production. Docker packages your model, Kubernetes orchestrates it, and cloud platforms scale it. This module covers the full deployment stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding docker compose is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how docker compose works in practice."
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is Docker Compose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative multi-container orchestration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compose File Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "services, networks, volumes, configs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image, build, ports, volumes, environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Networking in Compose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service discovery, custom networks, DNS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependencies and Health Checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "depends_on, healthcheck, restart policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".env file, env_file, variable substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling and Load Balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docker compose up --scale, replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging and Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logs, exec, port conflicts, troubleshooting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Compose Overview] --> B[File Structure]\n    B --> C[Service Config]\n    C --> D[Networking]\n    D --> E[Dependencies]\n    E --> F[Environment Vars]\n    F --> G[Scaling]\n    G --> H[Debugging]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-what-is-docker-compose",
      children: "2.1 What is Docker Compose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker Compose is a tool for defining and running multi-container Docker applications. With a single YAML file, you declare your application stack — services, networks, volumes — and manage the entire lifecycle with simple commands."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Compose matters for AI engineering"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define ML pipeline components: data ingestion, preprocessing, training, serving"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up dependent infrastructure: databases, message brokers, vector stores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce environments across development, CI/CD, and staging"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Onboard team members with a single ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker compose up"
        }), " command"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Check Compose version\ndocker compose version\n\n## Start all services\ndocker compose up -d\n\n## Stop all services\ndocker compose down\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compose V1 vs V2"
      }), ": The original ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose"
      }), " (Python) is deprecated. The current ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose"
      }), " (Go plugin) is integrated into the Docker CLI and is faster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[docker-compose.yml] --> B[Compose CLI]\n    B --> C[Create default network]\n    B --> D[Pull/Build images]\n    B --> E[Create volumes]\n    B --> F[Start containers in order]\n    C --> G[app-network (bridge)]\n    F --> H[api:8000]\n    F --> I[db:5432]\n    F --> J[redis:6379]\n    H --> I\n    H --> J\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-compose-file-structure",
      children: "2.2 Compose File Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Compose file follows a standard YAML structure with three top-level keys: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "services"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "networks"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volumes"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"3.9\"  # Compose specification version\n\nservices:       # Define application components\n  app:\n    build: .\n    ports:\n      - \"8000:8000\"\n    depends_on:\n      - db\n\n  db:\n    image: postgres:15\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\nnetworks:       # Define custom networks\n  frontend:\n    driver: bridge\n  backend:\n    driver: bridge\n\nvolumes:        # Define named volumes\n  pgdata:\n    driver: local\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "YAML basics for Compose"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indentation matters (2 spaces preferred)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strings can be quoted or unquoted"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Lists use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), " prefix"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maps use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key: value"
        }), " pairs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Supports anchors (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), ") and aliases (", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ") for reuse"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "\n## YAML anchors for config reuse\nx-logging: &default-logging\n  driver: \"json-file\"\n  options:\n    max-size: \"10m\"\n    max-file: \"3\"\n\nservices:\n  api:\n    logging: *default-logging\n  worker:\n    logging: *default-logging\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-service-configuration",
      children: "2.3 Service Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each service defines how a container is built or pulled and how it runs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  api:\n    # Build from Dockerfile\n    build:\n      context: .\n      dockerfile: Dockerfile.dev\n      args:\n        NODE_ENV: development\n\n    # Or use a pre-built image\n    image: nginx:alpine\n\n    # Port mapping\n    ports:\n      - \"8000:8000\"           # HOST:CONTAINER\n      - \"9229:9229/tcp\"       # protocol\n\n    # Volume mounts\n    volumes:\n      - .:/app                # bind mount\n      - app_data:/data        # named volume\n      - /tmp/cache:/cache     # host path\n\n    # Container config\n    container_name: my-api\n    restart: unless-stopped\n    user: \"1000:1000\"\n    working_dir: /app\n\n    # Resource limits\n    deploy:\n      resources:\n        limits:\n          cpus: \"0.5\"\n          memory: \"512M\"\n        reservations:\n          cpus: \"0.25\"\n          memory: \"256M\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Build configuration"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "./api"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dockerfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dockerfile path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Dockerfile.prod"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION: 1.0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "runtime"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cache_from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache sources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type=registry,ref=image"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-networking-in-compose",
      children: "2.4 Networking in Compose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compose automatically creates a default bridge network and connects all services to it. Service names become hostnames that containers can use to reach each other."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  api:\n    networks:\n      - frontend\n      - backend\n    ports:\n      - \"8000:8000\"\n\n  db:\n    networks:\n      - backend\n\n  web:\n    networks:\n      - frontend\n\nnetworks:\n  frontend:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: \"172.20.0.0/16\"\n  backend:\n    driver: bridge\n    internal: true  # no external access\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service discovery"
      }), ": Containers can reach each other by service name:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Inside api container — connects to db service\nDATABASE_URL = \"postgresql://postgres:password@db:5432/app\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Static IP assignment"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  db:\n    networks:\n      backend:\n        ipv4_address: \"172.20.0.10\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-dependencies-and-health-checks",
      children: "2.5 Dependencies and Health Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "depends_on"
      }), " controls startup order but does not wait for the service to be ready."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  api:\n    depends_on:\n      db:\n        condition: service_healthy\n      redis:\n        condition: service_started\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Health checks"
      }), " ensure services are actually ready:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  db:\n    image: postgres:15\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U postgres\"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n      start_period: 30s\n\n  api:\n    build: .\n    depends_on:\n      db:\n        condition: service_healthy\n    healthcheck:\n      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8000/health\"]\n      interval: 30s\n      timeout: 10s\n      retries: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Restart policies"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "no"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never restart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "always"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always restart regardless of exit code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "on-failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restart only on non-zero exit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unless-stopped"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restart unless manually stopped"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Compose up] --> B[Start depends_on services]\n    B --> C[Check health condition]\n    C -- healthy --> D[Start dependent service]\n    C -- unhealthy --> E[Wait + retry]\n    E --> C\n    D --> F[Health check loop]\n    F -- healthy --> G[Running]\n    F -- unhealthy --> H[Restart]\n    H --> F\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-environment-variables",
      children: "2.6 Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compose supports multiple ways to inject environment variables."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  api:\n    # Inline\n    environment:\n      - NODE_ENV=production\n      - DEBUG=false\n\n    # From file\n    env_file:\n      - .env\n      - .env.production\n\n    # Variable substitution\n    image: myapp:${TAG:-latest}\n    ports:\n      - \"${PORT:-8000}:8000\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: ".env file"
      }), " (placed alongside docker-compose.yml):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-env",
        children: "\n## .env\nPORT=8000\nTAG=latest\nDATABASE_URL=postgresql://postgres:password@db:5432/app\nREDIS_URL=redis://redis:6379\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variable substitution in Compose"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "${VAR}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use value of VAR, error if unset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "${VAR:-default}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use default if VAR is unset/null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "${VAR:?error}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error with message if VAR is unset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "${VAR:+replacement}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use replacement if VAR is set"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  api:\n    image: myapp:${TAG:-latest}\n    ports:\n      - \"${HOST_PORT:-8000}:${CONTAINER_PORT:-8000}\"\n    environment:\n      - DATABASE_URL=${DATABASE_URL:?DATABASE_URL is required}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-scaling-and-load-balancing",
      children: "2.7 Scaling and Load Balancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compose can scale stateless services to multiple replicas."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Scale API to 3 instances\ndocker compose up -d --scale api=3\n\n## Scale with specific ports\ndocker compose up -d --scale api=3 --scale worker=2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service replica configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  api:\n    build: .\n    ports:\n      - \"8000-8002:8000\"  # spread across replicas\n    deploy:\n      mode: replicated\n      replicas: 3\n      resources:\n        limits:\n          cpus: \"0.5\"\n          memory: \"512M\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Using a reverse proxy for load balancing"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  nginx:\n    image: nginx:alpine\n    ports:\n      - \"80:80\"\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf:ro\n    depends_on:\n      - api\n\n  api:\n    build: .\n    scale: 3\n    expose:\n      - \"8000\"  # internal only\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-nginx",
        children: "\n## nginx.conf — load balance across API replicas\nupstream api_servers {\n    server api:8000;\n    server api:8000;\n    server api:8000;\n}\n\nserver {\n    listen 80;\n    location / {\n        proxy_pass http://api_servers;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-debugging-and-logging",
      children: "2.8 Debugging and Logging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "View logs"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## All services\ndocker compose logs\n\n## Specific service\ndocker compose logs api\n\n## Follow mode\ndocker compose logs -f\n\n## Tail last N lines\ndocker compose logs --tail=100 api\n\n## Timestamps\ndocker compose logs -t\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Execute commands in running services"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Interactive shell\ndocker compose exec api bash\n\n## Run command\ndocker compose exec db pg_dump -U postgres app > backup.sql\n\n## As specific user\ndocker compose exec --user root api apt-get update\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Port conflicts"
      }), ": If a host port is already in use, change the mapping or stop the conflicting process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Find process using port\nnetstat -ano | findstr :8000\n\n## Or change port in Compose\nservices:\n  api:\n    ports:\n      - \"8001:8000\"  # use different host port\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common troubleshooting scenarios"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "port is already allocated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change host port or stop conflicting container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image not found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "manifest not found"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check image name and tag, pull manually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Volume permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Permission denied"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check user mapping, use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "user:"
            }), " in service"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Could not resolve host"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check network configuration and service names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build cache issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale code in container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker compose build --no-cache"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Full reset — remove everything and rebuild\ndocker compose down -v\ndocker compose build --no-cache\ndocker compose up -d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript applications can dynamically generate and manage docker-compose configurations using libraries like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "js-yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import * as yaml from \"js-yaml\";\nimport * as fs from \"fs\";\n\ninterface ComposeService {\n  image?: string;\n  build?: string | { context: string; dockerfile: string };\n  ports?: string[];\n  environment?: Record<string, string>;\n}\n\nfunction generateCompose(services: Record<string, ComposeService>): string {\n  const compose = {\n    version: \"3.9\",\n    services,\n    networks: { app: { driver: \"bridge\" } },\n  };\n  return yaml.dump(compose, { indent: 2 });\n}\n\nconst config = generateCompose({\n  api: {\n    build: \"./api\",\n    ports: [\"8000:8000\"],\n    environment: { NODE_ENV: \"production\" },\n  },\n  db: {\n    image: \"postgres:15\",\n    environment: { POSTGRES_PASSWORD: \"secret\" },\n  },\n});\n\nfs.writeFileSync(\"docker-compose.yml\", config);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose defines multi-container applications declaratively in YAML — services, networks, and volumes are configured in a single file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service configuration includes build context, image, ports, volumes, environment variables, and resource limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compose creates a default bridge network; service names serve as DNS hostnames for inter-service communication"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "depends_on"
        }), " controls startup order; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "healthcheck"
        }), " ensures services are actually ready before dependents start"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Environment variables can be set inline, via env_file, or through .env variable substitution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scale stateless services with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker compose up --scale service=N"
        }), " for horizontal scaling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Logs are aggregated per service; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker compose logs -f"
        }), " follows all services simultaneously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Port conflicts and stale caches are common issues; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "down -v"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build --no-cache"
        }), " for clean restarts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["YAML anchors (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ") reduce duplication across similar service configurations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compose is ideal for local development, CI/CD environments, and staging deployments before Kubernetes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Local development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind mount source + hot-reload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebuilding image on every change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "depends_on + healthcheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "depends_on without condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".env file in .gitignore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoding passwords in compose YAML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple environments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate .env files per environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single .env for all environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use service name as hostname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoding IP addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set CPU/memory limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running unbounded containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "json-file driver with rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default logging without limits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What problem does Docker Compose solve?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Docker Compose solves the complexity of running multi-container applications. Without Compose, you would need to write long shell scripts with multiple ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker run"
          }), " commands, manually create networks, and manage startup ordering."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compose provides a declarative YAML file that defines the entire application stack. A single ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker compose up"
          }), " creates all networks, builds/pulls images, and starts containers in the correct order."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "For AI engineering, Compose is particularly valuable for defining ML pipelines that involve multiple services: data processing containers, model training jobs, inference servers, vector databases, and monitoring."
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
      "data-qid": "docker-s02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does service discovery work in Docker Compose?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compose creates a default bridge network and registers each service by its service name as a DNS entry. Containers can reach each other using the service name as the hostname:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# api service can reach db service\nDATABASE_URL = \"postgresql://user:pass@db:5432/mydb\"\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "from-within-api-container",
              children: "From within api container"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ping db  # resolves to db service container IP"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "This works because Docker's embedded DNS server resolves service names to container IPs. For custom domains or more complex routing, use an external service mesh or reverse proxy."
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
      "data-qid": "docker-s02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the difference between depends_on and healthcheck in Compose?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "depends_on"
          }), " controls startup order — it ensures a container starts after its dependencies. However, it does not wait for the dependency to be \"ready\" (e.g., PostgreSQL accepting connections)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "healthcheck"
          }), " periodically runs a command inside the container to verify it's working. Combined with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "depends_on: condition: service_healthy"
          }), ", Compose waits for the dependency to pass its health check before starting the dependent service."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "services:\n  db:\n    image: postgres:15\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U postgres\"]\n      interval: 10s\n"
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "api:\ndepends_on:\ndb:\ncondition: service_healthy  # waits for pg_isready"
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
      "data-qid": "docker-s02-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you handle environment-specific configurations in Compose?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Several strategies for environment-specific Compose configurations:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple Compose files"
            }), ": Base file + override files\n        ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docker compose -f docker-compose.yml -f docker-compose.prod.yml up"
              })
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: ".env file"
            }), ": Place a ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".env"
            }), " file in the same directory — Compose reads it automatically"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Variable substitution"
            }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "${VAR:-default}"
            }), " in the Compose file"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "env_file directive"
            }), ": Specify different files per service"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# docker-compose.override.yml — extends base config\nservices:\n  api:\n    volumes:\n      - .:/app  # bind mount only in development\n    environment:\n      - DEBUG=true"
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
      "data-qid": "docker-s02-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: Can you scale services with Docker Compose? How is load balancing handled?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Yes, stateless services can be scaled with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker compose up --scale service=N"
          }), ". Compose creates N container instances of the service."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "However, Compose does not include a built-in load balancer. You need to add one (typically Nginx or HAProxy):"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["services:\n  nginx:\n    image: nginx:alpine\n    ports: [\"80:80\"]\n    volumes: [\"./nginx.conf:/etc/nginx/nginx.conf:ro\"]\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "api:\nbuild: .\nscale: 3"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "nginx-upstream-must-reference-the-service-name",
              children: "nginx upstream must reference the service name"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "upstream api {\nserver api:8000;\n}"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Docker's DNS does round-robin resolution, but for production load balancing, use a dedicated reverse proxy."
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
      "data-qid": "docker-s02-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you persist database data when using docker compose down?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use named volumes that persist independently of container lifecycle:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "services:\n  db:\n    image: postgres:15\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n"
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "volumes:\npgdata:"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Even after ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker compose down"
          }), ", the volume persists. To remove it, use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker compose down -v"
          }), " (careful — this deletes all data)."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For backups:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Backup\ndocker compose exec db pg_dump -U postgres mydb > backup.sql", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "restore",
              children: "Restore"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cat backup.sql | docker compose exec -T db psql -U postgres mydb"
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
      "data-qid": "docker-s02-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: Explain variable substitution in Docker Compose with examples.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compose supports shell-like variable substitution in YAML values:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# .env file\nPORT=8080\nTAG=v2.1\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "docker-composeyml",
              children: "docker-compose.yml"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsxs)(_components.code, {
              children: ["services:\napi:\nimage: myapp:", (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "katex-mathml",
                  children: (0,jsx_runtime.jsx)(_components.math, {
                    xmlns: "http://www.w3.org/1998/Math/MathML",
                    children: (0,jsx_runtime.jsxs)(_components.semantics, {
                      children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "A"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "G"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: ":"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "l"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "a"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "t"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "e"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "s"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "t"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "p"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "o"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "r"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "t"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "s"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: ":"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "\""
                        })]
                      }), (0,jsx_runtime.jsx)(_components.annotation, {
                        encoding: "application/x-tex",
                        children: "{TAG:-latest}\n    ports:\n      - \""
                      })]
                    })
                  })
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "katex-html",
                  "aria-hidden": "true",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "base",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "strut",
                      style: {
                        height: "0.8889em",
                        verticalAlign: "-0.1944em"
                      }
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      className: "mord",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.1389em"
                        },
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "G"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mspace",
                        style: {
                          marginRight: "0.2778em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mrel",
                        children: ":"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mspace",
                        style: {
                          marginRight: "0.2778em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord",
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.0197em"
                        },
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "t"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "es"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "t"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0278em"
                      },
                      children: "or"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "s"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace",
                      style: {
                        marginRight: "0.2778em"
                      }
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: ":"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace",
                      style: {
                        marginRight: "0.2778em"
                      }
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "base",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "strut",
                      style: {
                        height: "0.7778em",
                        verticalAlign: "-0.0833em"
                      }
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "\""
                    })]
                  })]
                })]
              }), "{PORT}:8000\"\nenvironment:\n- DATABASE_URL=", (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "katex-mathml",
                  children: (0,jsx_runtime.jsx)(_components.math, {
                    xmlns: "http://www.w3.org/1998/Math/MathML",
                    children: (0,jsx_runtime.jsxs)(_components.semantics, {
                      children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "D"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "A"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "A"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "B"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "A"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "S"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "U"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "R"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "L"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: ":"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "?"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "e"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "r"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "r"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "A"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "H"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "E"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "E"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "N"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "A"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "B"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "L"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "D"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        })]
                      }), (0,jsx_runtime.jsx)(_components.annotation, {
                        encoding: "application/x-tex",
                        children: "{DATABASE_URL:?err}\n      - CACHE_ENABLED="
                      })]
                    })
                  })
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "katex-html",
                  "aria-hidden": "true",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "base",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "strut",
                      style: {
                        height: "0.8444em",
                        verticalAlign: "-0.15em"
                      }
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      className: "mord",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.0278em"
                        },
                        children: "D"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.1389em"
                        },
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.0502em"
                        },
                        children: "B"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.0576em"
                        },
                        children: "S"
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        className: "mord",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal",
                          style: {
                            marginRight: "0.0576em"
                          },
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "msupsub",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist-t vlist-t2",
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "vlist-r",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.3283em"
                                },
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  style: {
                                    top: "-2.55em",
                                    marginLeft: "-0.0576em",
                                    marginRight: "0.05em"
                                  },
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "pstrut",
                                    style: {
                                      height: "2.7em"
                                    }
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "sizing reset-size6 size3 mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.109em"
                                      },
                                      children: "U"
                                    })
                                  })]
                                })
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-s",
                                children: "​"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist-r",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.15em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {})
                              })
                            })]
                          })
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.0077em"
                        },
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "L"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mspace",
                        style: {
                          marginRight: "0.2778em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mrel",
                        children: ":"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mclose",
                        children: "?"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.0278em"
                        },
                        children: "er"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.0278em"
                        },
                        children: "r"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace",
                      style: {
                        marginRight: "0.2222em"
                      }
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mbin",
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace",
                      style: {
                        marginRight: "0.2222em"
                      }
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "base",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "strut",
                      style: {
                        height: "0.8333em",
                        verticalAlign: "-0.15em"
                      }
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "A"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0813em"
                      },
                      children: "H"
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      className: "mord",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.0576em"
                        },
                        children: "E"
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "msupsub",
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-t vlist-t2",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist-r",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist",
                              style: {
                                height: "0.3283em"
                              },
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                style: {
                                  top: "-2.55em",
                                  marginLeft: "-0.0576em",
                                  marginRight: "0.05em"
                                },
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "pstrut",
                                  style: {
                                    height: "2.7em"
                                  }
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "sizing reset-size6 size3 mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0576em"
                                    },
                                    children: "E"
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist-s",
                              children: "​"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-r",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist",
                              style: {
                                height: "0.15em"
                              },
                              children: (0,jsx_runtime.jsx)(_components.span, {})
                            })
                          })]
                        })
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.109em"
                      },
                      children: "N"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "A"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0502em"
                      },
                      children: "B"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "L"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0576em"
                      },
                      children: "E"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0278em"
                      },
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace",
                      style: {
                        marginRight: "0.2778em"
                      }
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: "="
                    })]
                  })]
                })]
              }), "{CACHE:+true}"]
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compose reads the ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".env"
          }), " file from the same directory automatically. You can also pass variables explicitly: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PORT=9000 docker compose up"
          }), "."]
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
      "data-qid": "docker-s02-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you debug a Compose application that fails to start?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Step-by-step debugging approach:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Check logs"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker compose logs"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker compose logs service_name"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Verify port conflicts"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "netstat -ano | findstr :PORT"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Test individual services"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker compose run --rm service_name command"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inspect network"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker compose exec service_name ping other_service"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Override entrypoint"
            }), ": Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "entrypoint: [\"sh\"]"
            }), " to service config temporarily"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Debug with interactive shell\nservices:\n  api:\n    entrypoint: [\"tail\", \"-f\", \"/dev/null\"]  # keeps container alive\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "then-exec-into-it",
              children: "Then exec into it"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker compose exec api bash"
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
      "data-qid": "docker-s02-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is the difference between docker-compose (v1) and docker compose (v2)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "docker-compose"
          }), " (v1) was a standalone Python tool. It is now deprecated and being phased out."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "docker compose"
          }), " (v2) is a Docker CLI plugin written in Go. Key differences:"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integrated into Docker CLI (no separate install)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Faster performance (Go vs Python)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compose Specification (not tied to version)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Better support for profiles, GPU resources, and buildkit"
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker compose"
            }), " (space, not hyphen) as the command"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The Compose file format is largely compatible between v1 and v2. Always use the new ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker compose"
          }), " command for new projects."]
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
      "data-qid": "docker-s02-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you set resource limits for services in Docker Compose?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Resource limits are set under the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "deploy.resources"
          }), " key:"]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "services:\n  api:\n    deploy:\n      resources:\n        limits:\n          cpus: \"0.5\"      # half a CPU core\n          memory: \"512M\"    # 512 MB RAM\n        reservations:\n          cpus: \"0.25\"\n          memory: \"256M\""
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU limits"
          }), ": Can be fractional (0.5 = half core) or integer. Docker uses Completely Fair Scheduler (CFS) quotas for enforcement."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory limits"
          }), ": Set in bytes (b, k, m, g). Exceeding memory causes the container to be OOM-killed."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU access"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "services:\n  train:\n    image: pytorch/pytorch:latest\n    deploy:\n      resources:\n        reservations:\n          devices:\n            - driver: nvidia\n              count: 1\n              capabilities: [gpu]"
          })
        }), "\n  "]
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
      }), ": Which command starts all services defined in a docker-compose.yml file in detached mode?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose run"
      }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose start"
      }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose up -d"
      }), "\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose launch"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s02-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) docker compose up -d"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "up"
          }), " command creates and starts containers; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-d"
          }), " runs them in detached mode."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": How do services discover each other in a Docker Compose application?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) By IP address\nb) By container ID\nc) By service name\nd) By port number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s02-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) By service name"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Compose's embedded DNS resolves service names to container IPs automatically."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose down -v"
      }), " do that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose down"
      }), " does not?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Force stops containers\nb) Removes volumes\nc) Removes images\nd) Deletes the compose file"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s02-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Removes volumes"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-v"
          }), " flag removes named volumes declared in the compose file, permanently deleting persistent data."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which Compose configuration ensures a service only starts after its database is accepting connections?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "depends_on: - db"
      }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "depends_on: db: condition: service_healthy"
      }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "links: - db"
      }), "\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "needs: db"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s02-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) depends_on with condition: service_healthy"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "This waits for the database's health check to pass before starting the dependent service."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": How can you scale a service to 3 replicas using Docker Compose?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose scale api=3"
      }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose up --scale api=3"
      }), "\nc) Edit the compose file to add replicas: 3\nd) Both b and c"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "docker-s02-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: d) Both b and c"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can scale at runtime with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--scale"
          }), " or define replicas in the compose file under deploy.replicas."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a docker-compose.yml that runs Nginx on port 8080 with a custom HTML page served from a bind-mounted host directory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write a Compose file for a FastAPI application with PostgreSQL and Redis. Include health checks for the database, proper depends_on, and persistent volumes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a development Compose setup with two profiles: \"dev\" (with hot-reload and debug mode) and \"prod\" (optimized, no bind mounts, resource limits)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a multi-service ML inference pipeline with three services: a FastAPI inference API, a Redis message queue, and a worker service that processes inference requests from the queue. Include proper health checks, scaling configuration, and resource limits."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Debug and fix a broken docker-compose.yml that has port conflicts, incorrect depends_on, missing volume declarations, and invalid YAML syntax. Document each issue found and the fix applied."]
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
            children: "Explain the core idea of Docker Compose — Multi-Container Orchestration in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Docker Compose — Multi-Container Orchestration."
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
            children: "Describe a production bug caused by misunderstanding Docker Compose — Multi-Container Orchestration. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Docker Compose — Multi-Container Orchestration from 10 users to 10 million?"
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
            children: "Compare Docker Compose — Multi-Container Orchestration with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Docker Compose — Multi-Container Orchestration."
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
            children: "How does Docker Compose — Multi-Container Orchestration behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Docker Compose — Multi-Container Orchestration run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Docker Compose — Multi-Container Orchestration that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Docker Compose — Multi-Container Orchestration explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Docker Compose — Multi-Container Orchestration\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Docker Compose — Multi-Container Orchestration to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Docker Compose — Multi-Container Orchestration (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Docker Compose — Multi-Container Orchestration and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Docker Compose — Multi-Container Orchestration-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Docker Compose — Multi-Container Orchestration interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Docker Compose — Multi-Container Orchestration in production today?"
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
        }), " Docker Compose — Multi-Container Orchestration builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Docker Compose — Multi-Container Orchestration before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Docker Compose — Multi-Container Orchestration is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Docker Compose — Multi-Container Orchestration in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Docker Compose — Multi-Container Orchestration chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Docker Compose — Multi-Container Orchestration is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Docker Compose — Multi-Container Orchestration is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Docker Compose — Multi-Container Orchestration is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Docker Compose — Multi-Container Orchestration issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Docker Compose — Multi-Container Orchestration in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Docker Compose — Multi-Container Orchestration that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Docker Compose — Multi-Container Orchestration is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Docker Compose — Multi-Container Orchestration in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Docker Compose — Multi-Container Orchestration and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Docker Compose — Multi-Container Orchestration on an empty input?"
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
            children: "Complete Medium exercises, explain Docker Compose — Multi-Container Orchestration to someone else"
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
        children: "Always write a one-line example of Docker Compose — Multi-Container Orchestration from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Docker Compose — Multi-Container Orchestration when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Docker Compose — Multi-Container Orchestration twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Docker Compose — Multi-Container Orchestration snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Docker Compose — Multi-Container Orchestration listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Docker Compose — Multi-Container Orchestration to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Docker Compose — Multi-Container Orchestration by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Docker Compose — Multi-Container Orchestration to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Docker Compose — Multi-Container Orchestration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Docker Compose — Multi-Container Orchestration (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Docker Compose — Multi-Container Orchestration problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Docker Compose — Multi-Container Orchestration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Docker Compose — Multi-Container Orchestration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Docker Compose — Multi-Container Orchestration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Docker Compose — Multi-Container Orchestration fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Docker Compose — Multi-Container Orchestration is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Docker Compose — Multi-Container Orchestration is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Docker Compose — Multi-Container Orchestration, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Docker Compose — Multi-Container Orchestration asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose — Multi-Container Orchestration is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Docker Compose — Multi-Container Orchestration."
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
        children: "Docker Compose — Multi-Container Orchestration emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Docker Compose — Multi-Container Orchestration today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Docker Compose — Multi-Container Orchestration — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Docker Compose — Multi-Container Orchestration changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Docker Compose — Multi-Container Orchestration."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose — Multi-Container Orchestration appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Docker Compose — Multi-Container Orchestration helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Docker Compose — Multi-Container Orchestration concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Docker Compose — Multi-Container Orchestration skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Docker Compose — Multi-Container Orchestration to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker Compose — Multi-Container Orchestration is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Docker Compose — Multi-Container Orchestration skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-02dockercompose-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which command starts all services defined in a docker-compose.yml file in detached mode?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) docker compose up -d"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-02dockercompose-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How do services discover each other in a Docker Compose application?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) By service name"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-02dockercompose-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does docker compose down -v do that docker compose down does not?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Removes volumes"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-02dockercompose-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which Compose configuration ensures a service only starts after its database is accepting connections?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) depends_on with condition: service_healthy"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-02dockercompose-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How can you scale a service to 3 replicas using Docker Compose?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "d) Both b and c"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Docker Compose — Multi-Container Orchestration (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Docker Compose — Multi-Container Orchestration (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Docker Compose — Multi-Container Orchestration-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Docker Compose — Multi-Container Orchestration in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Docker Compose — Multi-Container Orchestration code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Docker Compose — Multi-Container Orchestration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Docker Compose — Multi-Container Orchestration code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the Docker Compose — Multi-Container Orchestration example code."]
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
        children: "Explain Docker Compose — Multi-Container Orchestration in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Docker Compose — Multi-Container Orchestration."
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
        children: "Tell me about a time you debugged a Docker Compose — Multi-Container Orchestration problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Docker Compose — Multi-Container Orchestration is used at scale?"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Docker Compose — Multi-Container Orchestration."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Docker Compose — Multi-Container Orchestration logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
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
            children: "Explain Docker Compose — Multi-Container Orchestration without notes"
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
          children: "Startup"
        }), ": a small team uses Docker Compose — Multi-Container Orchestration daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Docker Compose — Multi-Container Orchestration patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Docker Compose — Multi-Container Orchestration principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Docker Compose — Multi-Container Orchestration shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Docker Compose — Multi-Container Orchestration to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices",
        children: "Docker Best Practices — Security, Optimization, and Production Readiness"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose — Multi-Container Orchestration, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Docker Compose — Multi-Container Orchestration depends on input size and distribution — always benchmark for your own data."
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