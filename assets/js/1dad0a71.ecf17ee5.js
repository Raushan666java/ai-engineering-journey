"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[60542],{

/***/ 89432
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_06_docker_compose_md_1da_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-06-docker-compose-md-1da.json
const site_docs_courses_devops_06_docker_compose_md_1da_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/06-docker-compose","title":"Chapter 6: Docker Compose","description":"Prev: Docker","source":"@site/docs/courses/devops/06-docker-compose.md","sourceDirName":"courses/devops","slug":"/devops/06-docker-compose","permalink":"/ai-engineering-journey/devops/06-docker-compose","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"06-docker-compose","slug":"/devops/06-docker-compose","title":"Chapter 6: Docker Compose","sidebar_label":"Chapter 6: Docker Compose","sidebar_position":10},"sidebar":"coursesSidebar","previous":{"title":"Chapter 5: Docker","permalink":"/ai-engineering-journey/devops/05-docker"},"next":{"title":"Chapter 6: Orchestration","permalink":"/ai-engineering-journey/devops/06-orchestration"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/06-docker-compose.md


const frontMatter = {
	id: '06-docker-compose',
	slug: '/devops/06-docker-compose',
	title: 'Chapter 6: Docker Compose',
	sidebar_label: 'Chapter 6: Docker Compose',
	sidebar_position: 10
};
const contentTitle = 'Chapter 6: Docker Compose';

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
  "value": "Compose File Structure",
  "id": "compose-file-structure",
  "level": 3
}, {
  "value": "Service Configuration Reference",
  "id": "service-configuration-reference",
  "level": 3
}, {
  "value": "Networking in Compose",
  "id": "networking-in-compose",
  "level": 3
}, {
  "value": "Dependency Ordering",
  "id": "dependency-ordering",
  "level": 3
}, {
  "value": "Profiles",
  "id": "profiles",
  "level": 3
}, {
  "value": "Compose Override Files",
  "id": "compose-override-files",
  "level": 3
}, {
  "value": "Environment Variables",
  "id": "environment-variables",
  "level": 3
}, {
  "value": "Resource Management",
  "id": "resource-management",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Full-Stack Application Compose File",
  "id": "example-1-full-stack-application-compose-file",
  "level": 3
}, {
  "value": "Example 2: Development Compose Override",
  "id": "example-2-development-compose-override",
  "level": 3
}, {
  "value": "Example 3: TypeScript Compose Validator",
  "id": "example-3-typescript-compose-validator",
  "level": 3
}, {
  "value": "Service Dependency Graph Analyzer",
  "id": "service-dependency-graph-analyzer",
  "level": 3
}, {
  "value": "Compose Config Generator from TypeScript Types",
  "id": "compose-config-generator-from-typescript-types",
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
  "value": "Compose Debugging and Troubleshooting",
  "id": "compose-debugging-and-troubleshooting",
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
        id: "chapter-6-docker-compose",
        children: "Chapter 6: Docker Compose"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/05-docker",
          children: "Docker"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/06-orchestration",
          children: "Orchestration"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Docker Compose for defining and running multi-container applications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure compose files with services, networks, and volumes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables, configs, and secrets in Compose."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement health checks, dependency ordering, and resource limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Compose for development, testing, and production environments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend and override compose files for different environments."
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
        href: "../../assets/images/lessons/devops/06-docker-compose/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/06-docker-compose/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/06-docker-compose/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/06-docker-compose/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/06-docker-compose/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/06-docker-compose/visual-explanation.png",
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
            children: "Compose File Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Services, networks, volumes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The three YAML top-level keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image, build, ports, env, volumes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define each container's full configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic DNS resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Services communicate by service name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Volume Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named volumes and bind mounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named volumes survive container restarts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitute variables in compose"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".env"
            }), " file for environment-specific values"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health Checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency ordering with depends_on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for dependencies before starting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group services for specific scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activate services with --profile flag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse common configurations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid duplication across compose files"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[docker-compose.yml] --> B[Services]\n    A --> C[Networks]\n    A --> D[Volumes]\n    E[.env] --> A\n    B --> F[Container 1]\n    B --> G[Container 2]\n    B --> H[Container 3]\n    F --> C\n    G --> C\n    H --> C\n    F --> D\n    G --> D\n    H --> D\n    I[Health Checks] --> J[depends_on]\n    J --> K[Startup Order]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compose-file-structure",
      children: "Compose File Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Docker Compose file has three top-level keys:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: '3.8'\n\nservices:\n  # Define each container here\n\nnetworks:\n  # Define custom networks here\n\nvolumes:\n  # Define named volumes here\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-configuration-reference",
      children: "Service Configuration Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  app:\n    build:                      # Build from Dockerfile\n      context: .\n      dockerfile: Dockerfile\n      args:\n        - BUILD_ENV=production\n    image: myapp:latest         # Or use pre-built image\n    container_name: myapp\n    ports:\n      - \"3000:3000\"             # host:container\n      - \"443:443\"\n    expose:\n      - \"3000\"                  # Internal port only\n    environment:                # Environment variables\n      NODE_ENV: production\n      DB_HOST: db\n    env_file: ./config/app.env # Or load from file\n    volumes:\n      - app_data:/app/data      # Named volume\n      - ./src:/app/src          # Bind mount (dev)\n      - /tmp:/tmp               # Host path\n    depends_on:\n      - db\n      - redis\n    healthcheck:\n      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:3000/health\"]\n      interval: 30s\n      timeout: 10s\n      retries: 3\n      start_period: 10s\n    restart: unless-stopped\n    deploy:\n      replicas: 3\n      resources:\n        limits:\n          cpus: '0.5'\n          memory: 512M\n        reservations:\n          cpus: '0.25'\n          memory: 256M\n    networks:\n      - frontend\n      - backend\n    dns:\n      - 8.8.8.8\n    extra_hosts:\n      - \"host.docker.internal:host-gateway\"\n    user: \"node\"\n    working_dir: /app\n    command: node dist/index.js\n    entrypoint: [\"/entrypoint.sh\"]\n    labels:\n      - \"app.name=myapp\"\n      - \"app.environment=production\"\n    logging:\n      driver: json-file\n      options:\n        max-size: \"10m\"\n        max-file: \"3\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networking-in-compose",
      children: "Networking in Compose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By default, Compose creates a single network for all services. Each service can reach others by service name:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "networks:\n  frontend:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.20.0.0/16\n  backend:\n    driver: bridge\n    internal: true   # No external access\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS resolution:"
      }), " Services resolve to their container IP by service name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://api:3000"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-ordering",
      children: "Dependency Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "depends_on"
      }), " controls startup order. With health checks, Compose waits for the dependency to be healthy:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  app:\n    depends_on:\n      db:\n        condition: service_healthy\n      redis:\n        condition: service_started\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "profiles",
      children: "Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profiles enable conditional service activation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  app:\n    image: myapp\n    profiles: [\"dev\"]         # Only starts with --profile dev\n\n  db:\n    image: postgres:16\n    # No profile — always starts\n\n  mailhog:\n    image: mailhog/mailhog\n    profiles: [\"dev\", \"test\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose --profile dev up"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compose-override-files",
      children: "Compose Override Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Split configuration across files for different environments:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.yml"
        }), " — Base configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.override.yml"
        }), " — Development overrides (auto-loaded)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.prod.yml"
        }), " — Production overrides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.test.yml"
        }), " — Test overrides"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Development (override auto-loaded)\ndocker compose up\n\n# Production\ndocker compose -f docker-compose.yml -f docker-compose.prod.yml up\n\n# Test\ndocker compose -f docker-compose.yml -f docker-compose.test.yml run test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "environment-variables",
      children: "Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variable substitution in compose file:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_DB: ${DB_NAME:-myapp}\n      POSTGRES_USER: ${DB_USER}\n      POSTGRES_PASSWORD: ${DB_PASSWORD}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " file (auto-loaded):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "DB_NAME=myapp\nDB_USER=admin\nDB_PASSWORD=secret123\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variable precedence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shell environment variables (highest)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compose file defaults (", (0,jsx_runtime.jsx)(_components.code, {
          children: ":-"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Empty (lowest)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-management",
      children: "Resource Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CPU and memory limits:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  app:\n    deploy:\n      resources:\n        limits:\n          cpus: '0.50'       # 50% of one CPU\n          memory: 256M\n        reservations:\n          cpus: '0.25'\n          memory: 128M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-full-stack-application-compose-file",
      children: "Example 1: Full-Stack Application Compose File"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: '3.8'\n\nname: myapp\n\nservices:\n  postgres:\n    image: postgres:16-alpine\n    container_name: myapp-db\n    environment:\n      POSTGRES_DB: ${DB_NAME:-myapp}\n      POSTGRES_USER: ${DB_USER:-myapp}\n      POSTGRES_PASSWORD: ${DB_PASSWORD:?error}\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n      - ./db/init:/docker-entrypoint-initdb.d\n    ports:\n      - \"${DB_PORT:-5432}:5432\"\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U ${DB_USER:-myapp} -d ${DB_NAME:-myapp}\"]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n      start_period: 10s\n    networks:\n      - backend\n    restart: unless-stopped\n\n  redis:\n    image: redis:7-alpine\n    container_name: myapp-redis\n    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}\n    volumes:\n      - redisdata:/data\n    healthcheck:\n      test: [\"CMD\", \"redis-cli\", \"ping\"]\n      interval: 5s\n      timeout: 3s\n      retries: 5\n    networks:\n      - backend\n    restart: unless-stopped\n\n  api:\n    build:\n      context: ./api\n      dockerfile: Dockerfile\n      target: production\n    container_name: myapp-api\n    environment:\n      NODE_ENV: production\n      DB_HOST: postgres\n      DB_PORT: 5432\n      DB_NAME: ${DB_NAME:-myapp}\n      DB_USER: ${DB_USER:-myapp}\n      DB_PASSWORD: ${DB_PASSWORD}\n      REDIS_HOST: redis\n      REDIS_PASSWORD: ${REDIS_PASSWORD}\n      JWT_SECRET: ${JWT_SECRET}\n    depends_on:\n      postgres:\n        condition: service_healthy\n      redis:\n        condition: service_healthy\n    ports:\n      - \"${API_PORT:-3000}:3000\"\n    networks:\n      - frontend\n      - backend\n    restart: unless-stopped\n    deploy:\n      resources:\n        limits:\n          cpus: '0.5'\n          memory: 256M\n\n  web:\n    build:\n      context: ./web\n      dockerfile: Dockerfile\n      target: production\n    container_name: myapp-web\n    environment:\n      API_URL: http://api:3000\n    depends_on:\n      - api\n    ports:\n      - \"${WEB_PORT:-80}:80\"\n    networks:\n      - frontend\n    restart: unless-stopped\n\n  nginx:\n    image: nginx:alpine\n    container_name: myapp-nginx\n    volumes:\n      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro\n      - ./nginx/ssl:/etc/nginx/ssl:ro\n    ports:\n      - \"80:80\"\n      - \"443:443\"\n    depends_on:\n      - web\n      - api\n    networks:\n      - frontend\n    restart: unless-stopped\n\nnetworks:\n  frontend:\n    driver: bridge\n  backend:\n    driver: bridge\n    internal: true\n\nvolumes:\n  pgdata:\n  redisdata:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-development-compose-override",
      children: "Example 2: Development Compose Override"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.override.yml\nversion: '3.8'\n\nservices:\n  api:\n    build:\n      target: development\n    volumes:\n      - ./api/src:/app/src:ro\n      - ./api/package.json:/app/package.json\n      - ./api/tsconfig.json:/app/tsconfig.json\n    environment:\n      NODE_ENV: development\n    command: npm run dev\n\n  web:\n    build:\n      target: development\n    volumes:\n      - ./web/src:/app/src:ro\n    environment:\n      NODE_ENV: development\n    command: npm run dev\n\n  mailhog:\n    image: mailhog/mailhog\n    ports:\n      - \"8025:8025\"    # Web UI\n      - \"1025:1025\"    # SMTP\n    networks:\n      - backend\n\n  adminer:\n    image: adminer\n    ports:\n      - \"8080:8080\"\n    networks:\n      - backend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-typescript-compose-validator",
      children: "Example 3: TypeScript Compose Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { readFileSync } from 'fs';\nimport { parse } from 'yaml';\n\ninterface ComposeService {\n  image?: string;\n  build?: any;\n  ports?: string[];\n  environment?: Record<string, string>;\n  depends_on?: Record<string, { condition: string }> | string[];\n  volumes?: string[];\n  healthcheck?: any;\n  restart?: string;\n}\n\ninterface ComposeFile {\n  version: string;\n  services: Record<string, ComposeService>;\n  networks?: Record<string, any>;\n  volumes?: Record<string, any>;\n}\n\nclass ComposeValidator {\n  private errors: string[] = [];\n  private warnings: string[] = [];\n\n  validate(content: string): boolean {\n    let compose: ComposeFile;\n    try {\n      compose = parse(content) as ComposeFile;\n    } catch {\n      this.errors.push('Invalid YAML syntax');\n      return false;\n    }\n\n    if (!compose.services) {\n      this.errors.push('No services defined');\n      return false;\n    }\n\n    for (const [name, service] of Object.entries(compose.services)) {\n      this.validateService(name, service, compose.services);\n    }\n\n    this.printReport();\n    return this.errors.length === 0;\n  }\n\n  private validateService(\n    name: string,\n    service: ComposeService,\n    allServices: Record<string, ComposeService>,\n  ): void {\n    if (!service.image && !service.build) {\n      this.errors.push(`Service \"${name}\": must specify image or build`);\n    }\n\n    if (service.restart && !['no', 'always', 'on-failure', 'unless-stopped'].includes(service.restart)) {\n      this.errors.push(`Service \"${name}\": invalid restart policy \"${service.restart}\"`);\n    }\n\n    if (service.ports) {\n      for (const port of service.ports) {\n        const match = port.match(/^(\\d+):(\\d+)$/);\n        if (!match) {\n          this.warnings.push(`Service \"${name}\": port mapping \"${port}\" is unusual`);\n        }\n      }\n    }\n\n    if (service.depends_on) {\n      const deps = Array.isArray(service.depends_on)\n        ? service.depends_on\n        : Object.keys(service.depends_on);\n\n      for (const dep of deps) {\n        if (!allServices[dep]) {\n          this.errors.push(`Service \"${name}\": depends_on \"${dep}\" not defined`);\n        }\n      }\n    }\n\n    if (service.volumes) {\n      for (const vol of service.volumes) {\n        if (vol.includes(':') && !vol.startsWith('.') && !vol.startsWith('/')) {\n          this.warnings.push(`Service \"${name}\": volume \"${vol}\" uses a named volume — ensure it is declared`);\n        }\n      }\n    }\n  }\n\n  private printReport(): void {\n    if (this.errors.length > 0) {\n      console.log('? Validation failed:\\n');\n      this.errors.forEach(e => console.log(`  ERROR: ${e}`));\n    }\n    if (this.warnings.length > 0) {\n      console.log('\\n??  Warnings:\\n');\n      this.warnings.forEach(w => console.log(`  WARNING: ${w}`));\n    }\n    if (this.errors.length === 0) {\n      console.log('? Compose file is valid');\n    }\n  }\n}\n\nconst validator = new ComposeValidator();\nconst composeContent = readFileSync('docker-compose.yml', 'utf-8');\nvalidator.validate(composeContent);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-dependency-graph-analyzer",
      children: "Service Dependency Graph Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker Compose applications often have complex inter-service dependencies. The following tool visualizes and validates the service dependency graph, detecting circular dependencies and identifying critical paths."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ComposeService {\n  name: string;\n  dependsOn: string[];\n  ports: string[];\n  volumes: string[];\n  healthcheck?: HealthCheckConfig;\n}\n\ninterface HealthCheckConfig {\n  test: string[];\n  interval: string;\n  timeout: string;\n  retries: number;\n}\n\ninterface DependencyAnalysis {\n  services: ComposeService[];\n  circularDependencies: string[][];\n  criticalPath: string[];\n  startOrder: string[];\n}\n\nclass DependencyAnalyzer {\n  analyze(services: ComposeService[]): DependencyAnalysis {\n    const depMap = new Map<string, string[]>();\n    services.forEach(s => depMap.set(s.name, s.dependsOn));\n\n    const circularDependencies = this.findCircular(depMap);\n    const startOrder = this.topologicalSort(depMap);\n    const criticalPath = this.findCriticalPath(services, depMap);\n\n    return { services, circularDependencies, criticalPath, startOrder };\n  }\n\n  private findCircular(depMap: Map<string, string[]>): string[][] {\n    const cycles: string[][] = [];\n    const visited = new Set<string>();\n    const recStack = new Set<string>();\n\n    const dfs = (node: string, path: string[]) => {\n      visited.add(node);\n      recStack.add(node);\n      for (const dep of depMap.get(node) || []) {\n        if (!visited.has(dep)) dfs(dep, [...path, dep]);\n        else if (recStack.has(dep)) cycles.push([...path.slice(path.indexOf(dep)), dep]);\n      }\n      recStack.delete(node);\n    };\n\n    depMap.forEach((_, node) => { if (!visited.has(node)) dfs(node, [node]); });\n    return cycles;\n  }\n\n  private topologicalSort(depMap: Map<string, string[]>): string[] {\n    const visited = new Set<string>();\n    const order: string[] = [];\n\n    const visit = (node: string) => {\n      if (visited.has(node)) return;\n      visited.add(node);\n      for (const dep of depMap.get(node) || []) visit(dep);\n      order.push(node);\n    };\n\n    depMap.forEach((_, node) => visit(node));\n    return order;\n  }\n\n  private findCriticalPath(services: ComposeService[], depMap: Map<string, string[]>): string[] {\n    const depths = new Map<string, number>();\n\n    const computeDepth = (node: string): number => {\n      if (depths.has(node)) return depths.get(node)!;\n      const deps = depMap.get(node) || [];\n      const maxDepth = deps.length === 0 ? 0 : Math.max(...deps.map(d => computeDepth(d))) + 1;\n      depths.set(node, maxDepth);\n      return maxDepth;\n    };\n\n    services.forEach(s => computeDepth(s.name));\n\n    const maxDepth = Math.max(...depths.values(), 0);\n    return [...depths.entries()].filter(([, d]) => d === maxDepth).map(([n]) => n);\n  }\n}\n\nconst analyzer = new DependencyAnalyzer();\nconst services: ComposeService[] = [\n  { name: 'traefik', dependsOn: [], ports: ['80:80', '443:443'], volumes: ['/var/run/docker.sock'] },\n  { name: 'postgres', dependsOn: [], ports: ['5432:5432'], volumes: ['pgdata:/var/lib/postgresql/data'] },\n  { name: 'redis', dependsOn: [], ports: ['6379:6379'], volumes: [] },\n  { name: 'api', dependsOn: ['postgres', 'redis'], ports: ['3000:3000'], volumes: [] },\n  { name: 'frontend', dependsOn: ['api'], ports: ['80:80'], volumes: [] },\n];\n\nconst analysis = analyzer.analyze(services);\nconsole.log('Start order:', analysis.startOrder.join(' -> '));\nconsole.log('Critical path:', analysis.criticalPath.join(' -> '));\nconsole.log('Circular deps:', analysis.circularDependencies.length > 0 ? analysis.circularDependencies : 'none');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Dependency graph analysis ensures correct service startup order, identifies blocking paths, and prevents circular dependency issues in multi-service Compose applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compose-config-generator-from-typescript-types",
      children: "Compose Config Generator from TypeScript Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generating Docker Compose configurations programmatically from TypeScript type definitions ensures consistency across environments and reduces manual YAML editing errors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// compose-config-gen.ts\n// Generate Docker Compose YAML from TypeScript types\n\ninterface ComposeServiceConfig {\n  name: string;\n  image: string;\n  build?: { context: string; dockerfile: string; args?: Record<string, string> };\n  ports?: string[];\n  environment?: Record<string, string>;\n  envFile?: string;\n  volumes?: string[];\n  dependsOn?: { service: string; condition?: 'service_started' | 'service_healthy' }[];\n  healthcheck?: { test: string[]; interval: string; timeout: string; retries: number; startPeriod: string };\n  networks?: string[];\n  restart?: 'always' | 'unless-stopped' | 'on-failure' | 'no';\n  deploy?: { replicas?: number; resources?: { limits?: { cpus?: string; memory?: string }; reservations?: { cpus?: string; memory?: string } } };\n  profiles?: string[];\n}\n\ninterface ComposeNetworkConfig {\n  name: string;\n  driver?: 'bridge' | 'overlay' | 'host' | 'none';\n  internal?: boolean;\n  external?: boolean;\n}\n\ninterface ComposeVolumeConfig {\n  name: string;\n  driver?: 'local' | 'nfs';\n  external?: boolean;\n}\n\ninterface ComposeProject {\n  name: string;\n  version: string;\n  services: ComposeServiceConfig[];\n  networks?: ComposeNetworkConfig[];\n  volumes?: ComposeVolumeConfig[];\n}\n\nclass ComposeConfigGenerator {\n  generate(project: ComposeProject): string {\n    let yaml = `name: ${project.name}\\n\\nservices:\\n`;\n\n    for (const svc of project.services) {\n      yaml += `  ${svc.name}:\\n`;\n      yaml += `    image: ${svc.image}\\n`;\n      if (svc.build) {\n        yaml += `    build:\\n      context: ${svc.build.context}\\n`;\n        yaml += `      dockerfile: ${svc.build.dockerfile}\\n`;\n        if (svc.build.args) {\n          yaml += '      args:\\n';\n          for (const [k, v] of Object.entries(svc.build.args)) yaml += `        ${k}: \"${v}\"\\n`;\n        }\n      }\n      if (svc.ports && svc.ports.length > 0) {\n        yaml += '    ports:\\n';\n        svc.ports.forEach(p => yaml += `      - \"${p}\"\\n`);\n      }\n      if (svc.environment && Object.keys(svc.environment).length > 0) {\n        yaml += '    environment:\\n';\n        for (const [k, v] of Object.entries(svc.environment)) yaml += `      ${k}: \"${v}\"\\n`;\n      }\n      if (svc.envFile) yaml += `    env_file: ${svc.envFile}\\n`;\n      if (svc.volumes && svc.volumes.length > 0) {\n        yaml += '    volumes:\\n';\n        svc.volumes.forEach(v => yaml += `      - ${v}\\n`);\n      }\n      if (svc.dependsOn && svc.dependsOn.length > 0) {\n        yaml += '    depends_on:\\n';\n        for (const dep of svc.dependsOn) {\n          if (dep.condition) yaml += `      ${dep.service}:\\n        condition: ${dep.condition}\\n`;\n          else yaml += `      - ${dep.service}\\n`;\n        }\n      }\n      if (svc.healthcheck) {\n        yaml += '    healthcheck:\\n';\n        yaml += `      test: ${JSON.stringify(svc.healthcheck.test)}\\n`;\n        yaml += `      interval: ${svc.healthcheck.interval}\\n`;\n        yaml += `      timeout: ${svc.healthcheck.timeout}\\n`;\n        yaml += `      retries: ${svc.healthcheck.retries}\\n`;\n        yaml += `      start_period: ${svc.healthcheck.startPeriod}\\n`;\n      }\n      if (svc.restart) yaml += `    restart: ${svc.restart}\\n`;\n      if (svc.deploy) {\n        yaml += '    deploy:\\n';\n        if (svc.deploy.replicas) yaml += `      replicas: ${svc.deploy.replicas}\\n`;\n        if (svc.deploy.resources) {\n          yaml += '      resources:\\n';\n          if (svc.deploy.resources.limits) {\n            yaml += '        limits:\\n';\n            if (svc.deploy.resources.limits.cpus) yaml += `          cpus: \"${svc.deploy.resources.limits.cpus}\"\\n`;\n            if (svc.deploy.resources.limits.memory) yaml += `          memory: \"${svc.deploy.resources.limits.memory}\"\\n`;\n          }\n          if (svc.deploy.resources.reservations) {\n            yaml += '        reservations:\\n';\n            if (svc.deploy.resources.reservations.cpus) yaml += `          cpus: \"${svc.deploy.resources.reservations.cpus}\"\\n`;\n            if (svc.deploy.resources.reservations.memory) yaml += `          memory: \"${svc.deploy.resources.reservations.memory}\"\\n`;\n          }\n        }\n      }\n      if (svc.profiles && svc.profiles.length > 0) yaml += `    profiles: [${svc.profiles.join(', ')}]\\n`;\n      yaml += '\\n';\n    }\n\n    if (project.networks && project.networks.length > 0) {\n      yaml += 'networks:\\n';\n      for (const net of project.networks) {\n        yaml += `  ${net.name}:\\n`;\n        if (net.driver) yaml += `    driver: ${net.driver}\\n`;\n        if (net.internal !== undefined) yaml += `    internal: ${net.internal}\\n`;\n        if (net.external !== undefined) yaml += `    external: ${net.external}\\n`;\n      }\n    }\n\n    if (project.volumes && project.volumes.length > 0) {\n      yaml += 'volumes:\\n';\n      for (const vol of project.volumes) {\n        yaml += `  ${vol.name}:\\n`;\n        if (vol.driver) yaml += `    driver: ${vol.driver}\\n`;\n      }\n    }\n\n    return yaml;\n  }\n\n  generateProductionConfig(): ComposeProject {\n    return {\n      name: 'myapp-prod', version: '3.8',\n      services: [\n        {\n          name: 'api', image: 'myapp/api:latest',\n          ports: ['3000:3000'],\n          environment: { NODE_ENV: 'production', DB_HOST: 'postgres', REDIS_HOST: 'redis' },\n          dependsOn: [{ service: 'postgres', condition: 'service_healthy' }, { service: 'redis', condition: 'service_started' }],\n          healthcheck: { test: ['CMD', 'curl', '-f', 'http://localhost:3000/health'], interval: '30s', timeout: '10s', retries: 3, startPeriod: '15s' },\n          restart: 'unless-stopped', networks: ['frontend', 'backend'],\n          deploy: { replicas: 3, resources: { limits: { cpus: '0.5', memory: '512M' }, reservations: { cpus: '0.25', memory: '256M' } } },\n        },\n        {\n          name: 'postgres', image: 'postgres:16-alpine',\n          environment: { POSTGRES_DB: 'myapp', POSTGRES_PASSWORD: '${DB_PASSWORD}' },\n          volumes: ['pgdata:/var/lib/postgresql/data'],\n          healthcheck: { test: ['CMD-SHELL', 'pg_isready -U myapp'], interval: '10s', timeout: '5s', retries: 5, startPeriod: '30s' },\n          restart: 'always', networks: ['backend'],\n        },\n        {\n          name: 'redis', image: 'redis:7-alpine',\n          volumes: ['redisdata:/data'],\n          healthcheck: { test: ['CMD', 'redis-cli', 'ping'], interval: '10s', timeout: '5s', retries: 5, startPeriod: '10s' },\n          restart: 'always', networks: ['backend'],\n        },\n      ],\n      networks: [\n        { name: 'frontend', driver: 'bridge' },\n        { name: 'backend', driver: 'bridge', internal: true },\n      ],\n      volumes: [{ name: 'pgdata' }, { name: 'redisdata' }],\n    };\n  }\n\n  generateDevConfig(base: ComposeProject): ComposeProject {\n    return {\n      ...base, name: `${base.name}-dev`,\n      services: base.services.map(s => ({\n        ...s,\n        ports: s.ports?.map(p => p.replace(':3000', ':3001')),\n        environment: { ...s.environment, NODE_ENV: 'development', DEBUG: 'true' },\n        volumes: [...(s.volumes || []), './src:/app/src'],\n        deploy: undefined,\n        profiles: ['dev'],\n      })),\n    };\n  }\n}\n\nconst gen = new ComposeConfigGenerator();\nconst prod = gen.generateProductionConfig();\nconsole.log('=== Production Config ===\\n' + gen.generate(prod));\nconsole.log('=== Dev Override ===\\n' + gen.generate(gen.generateDevConfig(prod)));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Programmatic Compose config generation ensures type-safe, consistent, and well-documented Docker Compose configurations across development and production environments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".env"
          }), " files for environment-specific values."]
        }), " Never hardcode secrets in compose files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define health checks on all services."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "depends_on"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "condition: service_healthy"
        }), " ensures reliable startup order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use override files for environments."
        }), " Base + override pattern avoids duplication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal networks for backend services."
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "internal: true"
        }), " for database and cache networks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set resource limits."
        }), " Prevent containers from consuming all host resources."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name your Compose project."
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name: myproject"
        }), " for predictable container naming."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: How do services in a Compose file resolve each other?"
      }), "**A)** By IP address only", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** By service name (DNS)", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** By container ID", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** By hostname in environment variables", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** By service name (DNS)</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What is the purpose of `depends_on` with `condition: service_healthy`?"
        }), "**A)** To start services in alphabetical order", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** To wait until the dependency's health check passes before starting", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** To share health status across services", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** To restart unhealthy services", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** To wait until the dependency's health check passes before starting</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: How do you load the `.env` file in Docker Compose?"
          }), "**A)** It must be explicitly loaded with `--env-file`", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** It is auto-loaded from the project directory", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Environment variables cannot be used in Compose", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** It must be sourced in the shell first", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** It is auto-loaded from the project directory</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What does the `internal: true` network option do?"
            }), "**A)** Makes the network faster", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Prevents external network access, providing isolation for backend services", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Enables IPv6", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Connects to the host network", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Prevents external network access, providing isolation for backend services</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: How do you start only specific services from a compose file?"
              }), "**A)** `docker compose start service1 service2`", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** `docker compose up --profile dev`", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** `docker compose run service1`", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** All of the above", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: D)** All of the above</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// docker compose\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'docker compose', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Docker Compose defines multi-container applications in YAML with services, networks, and volumes."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Services communicate by name within Compose networks."
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "depends_on"
                  }), " with health check conditions ensures correct startup ordering."]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Profiles enable conditional service activation for different scenarios."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Override files extend base configuration for environment-specific needs."
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Environment variables are auto-loaded from ", (0,jsx_runtime.jsx)(_components.code, {
                    children: ".env"
                  }), " files."]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Resource limits prevent containers from exhausting host resources."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Health checks provide startup dependencies and runtime monitoring."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "compose-debugging-and-troubleshooting",
                children: "Compose Debugging and Troubleshooting"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Common Docker Compose debugging techniques:"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "# View service logs in real-time\ndocker compose logs -f api\n\n# Check container resource usage\ndocker compose stats\n\n# Debug inside a running service\ndocker compose exec api sh\n\n# Rebuild without cache for stubborn build issues\ndocker compose build --no-cache api\n\n# Validate compose file syntax\ndocker compose config\n\n# Check port mappings\ndocker compose port api 3000\n\n# Visualize the dependency graph\ndocker compose config --services\n\n# Force recreate containers (not reuse)\ndocker compose up --force-recreate\n\n# Tear down completely (including volumes)\ndocker compose down -v\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Common issues and fixes:"
                })
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "Problem"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "Symptom"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "Solution"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Port conflict"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "port already allocated"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Change host port or stop conflicting container"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Volume permission"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "Permission denied"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Ensure container user matches host UID"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "DNS resolution"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "Service name not found"
                      })
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Ensure services share a network ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "docker compose network"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Health check timeout"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Service never healthy"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Increase ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "start_period"
                      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "interval"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Cache invalidation"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Stale build"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "docker compose build --no-cache"
                      })
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "Environment missing"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "$VAR undefined"
                      })
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
                        children: ".env"
                      }), " file location and variable names"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What are the three top-level keys in a Docker Compose file?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How do you ensure a service waits for its database to be ready?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between a base compose file and an override file?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How do profiles work in Docker Compose?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How can you restrict a service to use at most 256MB of memory?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write a Docker Compose file for a Node.js API with PostgreSQL and Redis, including health checks."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a development override that enables hot reload and a debug port."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure separate frontend and backend networks with different isolation levels."
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Implement a profile-based setup where only core services run in production, but dev tools (adminer, mailhog) are available with ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "--profile dev"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design a complete Docker Compose architecture for a 6-service e-commerce platform including: an API gateway (Traefik/Nginx with SSL), a TypeScript API service with hot-reload in dev, PostgreSQL with automated backup init script, Redis for caching and session storage, a React frontend served through Nginx, a background worker for async job processing, a shared network architecture (public DMZ, internal App, private Data networks), a configurable profile system (minimal: api+db only, standard: everything, dev: +hot-reload+tools), and a CI validation step that lints and validates the compose files."
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