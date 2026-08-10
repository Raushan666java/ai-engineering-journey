"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[23443],{

/***/ 14627
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_18_fullstack_project_md_ae0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-18-fullstack-project-md-ae0.json
const site_docs_courses_web_development_18_fullstack_project_md_ae0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/18-fullstack-project","title":"Chapter 18: Building a Full-Stack Application","description":"Previous: 17-performance","source":"@site/docs/courses/web-development/18-fullstack-project.md","sourceDirName":"courses/web-development","slug":"/web-development/18-fullstack-project","permalink":"/ai-engineering-journey/web-development/18-fullstack-project","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"18-fullstack-project","slug":"/web-development/18-fullstack-project","title":"Chapter 18: Building a Full-Stack Application","sidebar_label":"Chapter 18: Building a Full-Stack Application","sidebar_position":18},"sidebar":"coursesSidebar","previous":{"title":"Chapter 17: Performance Optimization","permalink":"/ai-engineering-journey/web-development/17-performance"},"next":{"title":"Database Management Systems — Complete Textbook","permalink":"/ai-engineering-journey/database-management-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/18-fullstack-project.md


const frontMatter = {
	id: '18-fullstack-project',
	slug: '/web-development/18-fullstack-project',
	title: 'Chapter 18: Building a Full-Stack Application',
	sidebar_label: 'Chapter 18: Building a Full-Stack Application',
	sidebar_position: 18
};
const contentTitle = 'Chapter 18: Building a Full-Stack Application';

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
  "value": "18.1 Project Overview: TaskFlow",
  "id": "181-project-overview-taskflow",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 3
}, {
  "value": "18.2 Setting Up the Monorepo",
  "id": "182-setting-up-the-monorepo",
  "level": 2
}, {
  "value": "Shared TypeScript Configuration",
  "id": "shared-typescript-configuration",
  "level": 3
}, {
  "value": "18.3 Shared Types Package",
  "id": "183-shared-types-package",
  "level": 2
}, {
  "value": "18.4 Backend: Express API",
  "id": "184-backend-express-api",
  "level": 2
}, {
  "value": "Project Setup",
  "id": "project-setup",
  "level": 3
}, {
  "value": "Prisma Schema",
  "id": "prisma-schema",
  "level": 3
}, {
  "value": "Express Application Entry Point",
  "id": "express-application-entry-point",
  "level": 3
}, {
  "value": "Authentication Route",
  "id": "authentication-route",
  "level": 3
}, {
  "value": "Auth Middleware",
  "id": "auth-middleware",
  "level": 3
}, {
  "value": "Tasks Route with Full CRUD",
  "id": "tasks-route-with-full-crud",
  "level": 3
}, {
  "value": "Global Error Handler",
  "id": "global-error-handler",
  "level": 3
}, {
  "value": "18.5 Frontend: Next.js Application",
  "id": "185-frontend-nextjs-application",
  "level": 2
}, {
  "value": "Project Setup",
  "id": "project-setup-1",
  "level": 3
}, {
  "value": "Authentication Context",
  "id": "authentication-context",
  "level": 3
}, {
  "value": "Custom Hook for API Calls",
  "id": "custom-hook-for-api-calls",
  "level": 3
}, {
  "value": "Main Task Board Page",
  "id": "main-task-board-page",
  "level": 3
}, {
  "value": "Task Card Component",
  "id": "task-card-component",
  "level": 3
}, {
  "value": "Create Task Modal",
  "id": "create-task-modal",
  "level": 3
}, {
  "value": "18.6 Database Setup with Docker Compose",
  "id": "186-database-setup-with-docker-compose",
  "level": 2
}, {
  "value": "18.7 Deployment",
  "id": "187-deployment",
  "level": 2
}, {
  "value": "Dockerfile for API",
  "id": "dockerfile-for-api",
  "level": 3
}, {
  "value": "CI/CD with GitHub Actions",
  "id": "cicd-with-github-actions",
  "level": 3
}, {
  "value": "18.8 Testing the Full Stack",
  "id": "188-testing-the-full-stack",
  "level": 2
}, {
  "value": "API Integration Test",
  "id": "api-integration-test",
  "level": 3
}, {
  "value": "End-to-End Test with Playwright",
  "id": "end-to-end-test-with-playwright",
  "level": 3
}, {
  "value": "18.9 Performance Optimization",
  "id": "189-performance-optimization",
  "level": 2
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
  "value": "TypeScript Implementation: Full-Stack Project Scaffolding, API Route Tree, Error Boundary Generator",
  "id": "typescript-implementation-full-stack-project-scaffolding-api-route-tree-error-boundary-generator",
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
  "value": "Application Projects",
  "id": "application-projects",
  "level": 3
}, {
  "value": "Challenge Project",
  "id": "challenge-project",
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
        id: "chapter-18-building-a-full-stack-application",
        children: "Chapter 18: Building a Full-Stack Application"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/17-performance",
          children: "17-performance"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Monorepo with shared types package ensures type consistency across frontend and backend."]
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
        href: "../../assets/images/lessons/web-development/18-fullstack-project/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/18-fullstack-project/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/18-fullstack-project/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/18-fullstack-project/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/18-fullstack-project/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/18-fullstack-project/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Express API with Prisma provides type-safe database access and RESTful CRUD endpoints."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Monorepo Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "npm workspaces manage shared packages alongside frontend and backend apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Turborepo for task orchestration — it caches build outputs and runs tasks in parallel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A packages/shared directory holds types consumed by both frontend and backend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define all API contracts (request/response shapes) in the shared package to prevent drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Express API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full REST API with Prisma, JWT auth, Zod validation, and error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structure routes by resource (auth, projects, tasks) with middleware for cross-cutting concerns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next.js Frontend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App Router with auth context, API hooks, and component-based UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate data fetching hooks from presentation components for testability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT tokens managed via localStorage with automatic refresh on 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement the AuthProvider at the app root, useApi hook for all authenticated requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration tests for API, E2E tests for user flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test the complete user journey (register ? login ? create task) as a single E2E test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker & CI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Compose for local dev, GitHub Actions for CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use service containers in CI for PostgreSQL — no need for separate infrastructure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " JWT authentication with access and refresh tokens is implemented at the API gateway layer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Project Architecture & Stack]\n    B[Monorepo with npm Workspaces]\n    A --> B\n    C[Shared TypeScript Types]\n    B --> C\n    D[Express API with Prisma]\n    C --> D\n    E[Auth Middleware & JWT]\n    D --> E\n    F[CRUD Task Routes]\n    E --> F\n    G[Next.js Frontend Setup]\n    F --> G\n    H[Auth Context & API Hooks]\n    G --> H\n    I[Components & Modals]\n    H --> I\n    J[Docker Compose]\n    I --> J\n    K[CI/CD Pipeline]\n    J --> K\n    L[Testing]\n    K --> L\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and architect a full-stack web application from scratch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up a monorepo with shared TypeScript types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a RESTful API with Express and Prisma"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a React frontend with Next.js"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement authentication and authorization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy the complete application to production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply testing and performance optimization strategies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "181-project-overview-taskflow",
      children: "18.1 Project Overview: TaskFlow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Next.js frontend uses the App Router with client components for interactive task management."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/18-fullstack-project.png",
        alt: "Full-Stack Architecture Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Throughout this chapter, we will build ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TaskFlow"
      }), ", a full-stack task management application. TaskFlow allows users to create projects, add tasks, assign team members, set priorities, and track progress in real time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TaskFlow follows a modern three-tier architecture:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend"
        }), ": Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend"
        }), ": Express.js REST API with TypeScript"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database"
        }), ": PostgreSQL with Prisma ORM"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The monorepo structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "taskflow/\n├── apps/\n│   ├── web/          # Next.js frontend\n│   └── api/          # Express backend\n├── packages/\n│   └── shared/       # Shared TypeScript types\n├── docker-compose.yml\n├── package.json\n└── tsconfig.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "182-setting-up-the-monorepo",
      children: "18.2 Setting Up the Monorepo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Docker Compose manages local development infrastructure (PostgreSQL, Redis)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We use npm workspaces to manage the monorepo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"name\": \"taskflow\",\n  \"private\": true,\n  \"workspaces\": [\"apps/*\", \"packages/*\"],\n  \"scripts\": {\n    \"dev\": \"concurrently \\\"npm run dev -w apps/api\\\" \\\"npm run dev -w apps/web\\\"\",\n    \"build\": \"npm run build -w packages/shared && npm run build -w apps/api && npm run build -w apps/web\",\n    \"lint\": \"turbo run lint\",\n    \"test\": \"turbo run test\"\n  },\n  \"devDependencies\": {\n    \"concurrently\": \"^9.0.0\",\n    \"turbo\": \"^2.0.0\",\n    \"typescript\": \"^5.5.0\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shared-typescript-configuration",
      children: "Shared TypeScript Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Root ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tsconfig.json"
      }), " establishes base settings:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"ESNext\",\n    \"moduleResolution\": \"bundler\",\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"skipLibCheck\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"declaration\": true,\n    \"declarationMap\": true,\n    \"sourceMap\": true\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "183-shared-types-package",
      children: "18.3 Shared Types Package"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CI/CD with GitHub Actions automates testing and deployment to production."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/shared"
      }), " directory defines types used by both frontend and backend:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// packages/shared/src/index.ts\nexport interface Project {\n  id: string;\n  name: string;\n  description: string;\n  createdAt: Date;\n  updatedAt: Date;\n  ownerId: string;\n}\n\nexport interface Task {\n  id: string;\n  title: string;\n  description?: string;\n  status: TaskStatus;\n  priority: Priority;\n  dueDate?: Date;\n  projectId: string;\n  assigneeId?: string;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\nexport enum TaskStatus {\n  Backlog = \"BACKLOG\",\n  Todo = \"TODO\",\n  InProgress = \"IN_PROGRESS\",\n  Review = \"REVIEW\",\n  Done = \"DONE\",\n}\n\nexport enum Priority {\n  Low = \"LOW\",\n  Medium = \"MEDIUM\",\n  High = \"HIGH\",\n  Critical = \"CRITICAL\",\n}\n\nexport interface CreateTaskInput {\n  title: string;\n  description?: string;\n  priority?: Priority;\n  dueDate?: string;\n  projectId: string;\n  assigneeId?: string;\n}\n\nexport interface UpdateTaskInput {\n  title?: string;\n  description?: string;\n  status?: TaskStatus;\n  priority?: Priority;\n  dueDate?: string;\n  assigneeId?: string;\n}\n\nexport interface ApiResponse<T> {\n  data: T;\n  message?: string;\n}\n\nexport interface PaginatedResponse<T> {\n  data: T[];\n  total: number;\n  page: number;\n  pageSize: number;\n  totalPages: number;\n}\n\nexport interface User {\n  id: string;\n  email: string;\n  name: string;\n  avatar?: string;\n}\n\nexport interface AuthTokens {\n  accessToken: string;\n  refreshToken: string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "184-backend-express-api",
      children: "18.4 Backend: Express API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-setup",
      children: "Project Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The API application uses Express with TypeScript, Prisma, and JWT authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"name\": \"@taskflow/api\",\n  \"dependencies\": {\n    \"@prisma/client\": \"^6.0.0\",\n    \"bcryptjs\": \"^2.4.3\",\n    \"cors\": \"^2.8.5\",\n    \"express\": \"^4.21.0\",\n    \"express-rate-limit\": \"^7.4.0\",\n    \"helmet\": \"^8.0.0\",\n    \"jsonwebtoken\": \"^9.0.0\",\n    \"zod\": \"^3.23.0\"\n  },\n  \"devDependencies\": {\n    \"@types/bcryptjs\": \"^2.4.6\",\n    \"@types/cors\": \"^2.8.17\",\n    \"@types/express\": \"^5.0.0\",\n    \"@types/jsonwebtoken\": \"^9.0.7\",\n    \"prisma\": \"^6.0.0\",\n    \"tsx\": \"^4.19.0\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prisma-schema",
      children: "Prisma Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-prisma",
        children: "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n}\n\nmodel User {\n  id           String   @id @default(cuid())\n  email        String   @unique\n  passwordHash String\n  name         String\n  avatar       String?\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  projects Project[]\n  tasks    Task[]\n}\n\nmodel Project {\n  id          String   @id @default(cuid())\n  name        String\n  description String\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  owner   User   @relation(fields: [ownerId], references: [id])\n  ownerId String\n  tasks   Task[]\n}\n\nmodel Task {\n  id          String   @id @default(cuid())\n  title       String\n  description String?\n  status      String   @default(\"BACKLOG\")\n  priority    String   @default(\"MEDIUM\")\n  dueDate     DateTime?\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  project   Project @relation(fields: [projectId], references: [id])\n  projectId String\n  assignee  User?   @relation(fields: [assigneeId], references: [id])\n  assigneeId String?\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "express-application-entry-point",
      children: "Express Application Entry Point"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/api/src/index.ts\nimport express from \"express\";\nimport cors from \"cors\";\nimport helmet from \"helmet\";\nimport rateLimit from \"express-rate-limit\";\nimport { authRouter } from \"./routes/auth\";\nimport { projectRouter } from \"./routes/projects\";\nimport { taskRouter } from \"./routes/tasks\";\nimport { errorHandler } from \"./middleware/errorHandler\";\nimport { authenticate } from \"./middleware/auth\";\n\nconst app = express();\nconst PORT = process.env.PORT ?? 4000;\n\napp.use(helmet());\napp.use(cors({ origin: process.env.FRONTEND_URL ?? \"http://localhost:3000\" }));\napp.use(express.json());\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 100,\n  standardHeaders: true,\n  legacyHeaders: false,\n});\napp.use(limiter);\n\napp.use(\"/api/auth\", authRouter);\napp.use(\"/api/projects\", authenticate, projectRouter);\napp.use(\"/api/tasks\", authenticate, taskRouter);\n\napp.use(errorHandler);\n\napp.listen(PORT, () => {\n  console.log(`TaskFlow API running on port ${PORT}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authentication-route",
      children: "Authentication Route"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/api/src/routes/auth.ts\nimport { Router } from \"express\";\nimport bcrypt from \"bcryptjs\";\nimport jwt from \"jsonwebtoken\";\nimport { z } from \"zod\";\nimport { PrismaClient } from \"@prisma/client\";\n\nconst router = Router();\nconst prisma = new PrismaClient();\n\nconst registerSchema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8),\n  name: z.string().min(1),\n});\n\nconst loginSchema = z.object({\n  email: z.string().email(),\n  password: z.string(),\n});\n\nrouter.post(\"/register\", async (req, res, next) => {\n  try {\n    const { email, password, name } = registerSchema.parse(req.body);\n    const existing = await prisma.user.findUnique({ where: { email } });\n    if (existing) {\n      return res.status(409).json({ message: \"Email already registered\" });\n    }\n    const passwordHash = await bcrypt.hash(password, 12);\n    const user = await prisma.user.create({\n      data: { email, passwordHash, name },\n    });\n    const accessToken = jwt.sign(\n      { userId: user.id },\n      process.env.JWT_SECRET!,\n      { expiresIn: \"15m\" }\n    );\n    const refreshToken = jwt.sign(\n      { userId: user.id },\n      process.env.JWT_REFRESH_SECRET!,\n      { expiresIn: \"7d\" }\n    );\n    res.status(201).json({\n      data: { user: { id: user.id, email: user.email, name: user.name } },\n      tokens: { accessToken, refreshToken },\n    });\n  } catch (err) {\n    next(err);\n  }\n});\n\nrouter.post(\"/login\", async (req, res, next) => {\n  try {\n    const { email, password } = loginSchema.parse(req.body);\n    const user = await prisma.user.findUnique({ where: { email } });\n    if (!user) {\n      return res.status(401).json({ message: \"Invalid credentials\" });\n    }\n    const valid = await bcrypt.compare(password, user.passwordHash);\n    if (!valid) {\n      return res.status(401).json({ message: \"Invalid credentials\" });\n    }\n    const accessToken = jwt.sign(\n      { userId: user.id },\n      process.env.JWT_SECRET!,\n      { expiresIn: \"15m\" }\n    );\n    const refreshToken = jwt.sign(\n      { userId: user.id },\n      process.env.JWT_REFRESH_SECRET!,\n      { expiresIn: \"7d\" }\n    );\n    res.json({\n      data: { user: { id: user.id, email: user.email, name: user.name } },\n      tokens: { accessToken, refreshToken },\n    });\n  } catch (err) {\n    next(err);\n  }\n});\n\nrouter.post(\"/refresh\", async (req, res, next) => {\n  try {\n    const { refreshToken } = req.body;\n    const payload = jwt.verify(\n      refreshToken,\n      process.env.JWT_REFRESH_SECRET!\n    ) as { userId: string };\n    const user = await prisma.user.findUnique({\n      where: { id: payload.userId },\n    });\n    if (!user) {\n      return res.status(401).json({ message: \"Invalid refresh token\" });\n    }\n    const newAccessToken = jwt.sign(\n      { userId: user.id },\n      process.env.JWT_SECRET!,\n      { expiresIn: \"15m\" }\n    );\n    res.json({ data: { accessToken: newAccessToken } });\n  } catch (err) {\n    next(err);\n  }\n});\n\nexport { router as authRouter };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "auth-middleware",
      children: "Auth Middleware"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/api/src/middleware/auth.ts\nimport { Request, Response, NextFunction } from \"express\";\nimport jwt from \"jsonwebtoken\";\n\nexport interface AuthenticatedRequest extends Request {\n  userId?: string;\n}\n\nexport function authenticate(\n  req: AuthenticatedRequest,\n  res: Response,\n  next: NextFunction\n) {\n  const header = req.headers.authorization;\n  if (!header?.startsWith(\"Bearer \")) {\n    return res.status(401).json({ message: \"Missing authorization header\" });\n  }\n  const token = header.slice(7);\n  try {\n    const payload = jwt.verify(token, process.env.JWT_SECRET!) as {\n      userId: string;\n    };\n    req.userId = payload.userId;\n    next();\n  } catch {\n    res.status(401).json({ message: \"Invalid or expired token\" });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tasks-route-with-full-crud",
      children: "Tasks Route with Full CRUD"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/api/src/routes/tasks.ts\nimport { Router } from \"express\";\nimport { z } from \"zod\";\nimport { PrismaClient } from \"@prisma/client\";\nimport { AuthenticatedRequest } from \"../middleware/auth\";\n\nconst router = Router();\nconst prisma = new PrismaClient();\n\nconst createTaskSchema = z.object({\n  title: z.string().min(1).max(200),\n  description: z.string().max(2000).optional(),\n  priority: z.enum([\"LOW\", \"MEDIUM\", \"HIGH\", \"CRITICAL\"]).optional(),\n  dueDate: z.string().datetime().optional(),\n  projectId: z.string(),\n  assigneeId: z.string().optional(),\n});\n\nconst updateTaskSchema = z.object({\n  title: z.string().min(1).max(200).optional(),\n  description: z.string().max(2000).optional(),\n  status: z\n    .enum([\"BACKLOG\", \"TODO\", \"IN_PROGRESS\", \"REVIEW\", \"DONE\"])\n    .optional(),\n  priority: z.enum([\"LOW\", \"MEDIUM\", \"HIGH\", \"CRITICAL\"]).optional(),\n  dueDate: z.string().datetime().optional(),\n  assigneeId: z.string().nullable().optional(),\n});\n\n// GET /api/tasks?projectId=xxx&status=TODO&page=1&pageSize=20\nrouter.get(\"/\", async (req: AuthenticatedRequest, res, next) => {\n  try {\n    const page = parseInt(req.query.page as string) || 1;\n    const pageSize = parseInt(req.query.pageSize as string) || 20;\n    const skip = (page - 1) * pageSize;\n\n    const where: any = {\n      project: { ownerId: req.userId },\n    };\n    if (req.query.projectId) where.projectId = req.query.projectId;\n    if (req.query.status) where.status = req.query.status;\n    if (req.query.priority) where.priority = req.query.priority;\n\n    const [tasks, total] = await Promise.all([\n      prisma.task.findMany({\n        where,\n        include: { assignee: { select: { id: true, name: true, email: true } } },\n        skip,\n        take: pageSize,\n        orderBy: { createdAt: \"desc\" },\n      }),\n      prisma.task.count({ where }),\n    ]);\n\n    res.json({\n      data: tasks,\n      total,\n      page,\n      pageSize,\n      totalPages: Math.ceil(total / pageSize),\n    });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// GET /api/tasks/:id\nrouter.get(\"/:id\", async (req: AuthenticatedRequest, res, next) => {\n  try {\n    const task = await prisma.task.findFirst({\n      where: {\n        id: req.params.id,\n        project: { ownerId: req.userId },\n      },\n      include: { assignee: { select: { id: true, name: true, email: true } } },\n    });\n    if (!task) {\n      return res.status(404).json({ message: \"Task not found\" });\n    }\n    res.json({ data: task });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// POST /api/tasks\nrouter.post(\"/\", async (req: AuthenticatedRequest, res, next) => {\n  try {\n    const input = createTaskSchema.parse(req.body);\n    const project = await prisma.project.findFirst({\n      where: { id: input.projectId, ownerId: req.userId },\n    });\n    if (!project) {\n      return res.status(404).json({ message: \"Project not found\" });\n    }\n    const task = await prisma.task.create({\n      data: {\n        title: input.title,\n        description: input.description,\n        priority: input.priority ?? \"MEDIUM\",\n        dueDate: input.dueDate ? new Date(input.dueDate) : undefined,\n        projectId: input.projectId,\n        assigneeId: input.assigneeId,\n      },\n      include: { assignee: { select: { id: true, name: true, email: true } } },\n    });\n    res.status(201).json({ data: task });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// PUT /api/tasks/:id\nrouter.put(\"/:id\", async (req: AuthenticatedRequest, res, next) => {\n  try {\n    const input = updateTaskSchema.parse(req.body);\n    const existing = await prisma.task.findFirst({\n      where: { id: req.params.id, project: { ownerId: req.userId } },\n    });\n    if (!existing) {\n      return res.status(404).json({ message: \"Task not found\" });\n    }\n    const task = await prisma.task.update({\n      where: { id: req.params.id },\n      data: {\n        ...input,\n        dueDate: input.dueDate ? new Date(input.dueDate) : undefined,\n      },\n      include: { assignee: { select: { id: true, name: true, email: true } } },\n    });\n    res.json({ data: task });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// DELETE /api/tasks/:id\nrouter.delete(\"/:id\", async (req: AuthenticatedRequest, res, next) => {\n  try {\n    const existing = await prisma.task.findFirst({\n      where: { id: req.params.id, project: { ownerId: req.userId } },\n    });\n    if (!existing) {\n      return res.status(404).json({ message: \"Task not found\" });\n    }\n    await prisma.task.delete({ where: { id: req.params.id } });\n    res.status(204).send();\n  } catch (err) {\n    next(err);\n  }\n});\n\nexport { router as taskRouter };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "global-error-handler",
      children: "Global Error Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/api/src/middleware/errorHandler.ts\nimport { Request, Response, NextFunction } from \"express\";\nimport { ZodError } from \"zod\";\n\nexport function errorHandler(\n  err: Error,\n  _req: Request,\n  res: Response,\n  _next: NextFunction\n) {\n  if (err instanceof ZodError) {\n    return res.status(400).json({\n      message: \"Validation error\",\n      errors: err.errors.map((e) => ({\n        field: e.path.join(\".\"),\n        message: e.message,\n      })),\n    });\n  }\n  console.error(\"Unhandled error:\", err);\n  res.status(500).json({ message: \"Internal server error\" });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "185-frontend-nextjs-application",
      children: "18.5 Frontend: Next.js Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-setup-1",
      children: "Project Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"name\": \"@taskflow/web\",\n  \"dependencies\": {\n    \"next\": \"^15.0.0\",\n    \"react\": \"^19.0.0\",\n    \"react-dom\": \"^19.0.0\",\n    \"@taskflow/shared\": \"*\",\n    \"lucide-react\": \"^0.450.0\",\n    \"tailwindcss\": \"^4.0.0\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authentication-context",
      children: "Authentication Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/web/src/lib/AuthContext.tsx\n\"use client\";\nimport {\n  createContext,\n  useContext,\n  useState,\n  useEffect,\n  ReactNode,\n} from \"react\";\n\ninterface AuthUser {\n  id: string;\n  email: string;\n  name: string;\n}\n\ninterface AuthContextType {\n  user: AuthUser | null;\n  login: (email: string, password: string) => Promise<void>;\n  register: (email: string, password: string, name: string) => Promise<void>;\n  logout: () => void;\n  isLoading: boolean;\n}\n\nconst AuthContext = createContext<AuthContextType | null>(null);\n\nconst API_URL = process.env.NEXT_PUBLIC_API_URL ?? \"http://localhost:4000\";\n\nexport function AuthProvider({ children }: { children: ReactNode }) {\n  const [user, setUser] = useState<AuthUser | null>(null);\n  const [isLoading, setIsLoading] = useState(true);\n\n  useEffect(() => {\n    const token = localStorage.getItem(\"accessToken\");\n    if (token) {\n      try {\n        const payload = JSON.parse(atob(token.split(\".\")[1]));\n        setUser({ id: payload.userId, email: \"\", name: \"\" });\n      } catch {\n        localStorage.removeItem(\"accessToken\");\n      }\n    }\n    setIsLoading(false);\n  }, []);\n\n  const login = async (email: string, password: string) => {\n    const res = await fetch(`${API_URL}/api/auth/login`, {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\" },\n      body: JSON.stringify({ email, password }),\n    });\n    if (!res.ok) {\n      const err = await res.json();\n      throw new Error(err.message);\n    }\n    const json = await res.json();\n    localStorage.setItem(\"accessToken\", json.tokens.accessToken);\n    localStorage.setItem(\"refreshToken\", json.tokens.refreshToken);\n    setUser(json.data.user);\n  };\n\n  const register = async (email: string, password: string, name: string) => {\n    const res = await fetch(`${API_URL}/api/auth/register`, {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\" },\n      body: JSON.stringify({ email, password, name }),\n    });\n    if (!res.ok) {\n      const err = await res.json();\n      throw new Error(err.message);\n    }\n    const json = await res.json();\n    localStorage.setItem(\"accessToken\", json.tokens.accessToken);\n    localStorage.setItem(\"refreshToken\", json.tokens.refreshToken);\n    setUser(json.data.user);\n  };\n\n  const logout = () => {\n    localStorage.removeItem(\"accessToken\");\n    localStorage.removeItem(\"refreshToken\");\n    setUser(null);\n  };\n\n  return (\n    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\nexport function useAuth() {\n  const ctx = useContext(AuthContext);\n  if (!ctx) throw new Error(\"useAuth must be used within AuthProvider\");\n  return ctx;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-hook-for-api-calls",
      children: "Custom Hook for API Calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/web/src/lib/useApi.ts\nimport { useState, useCallback } from \"react\";\n\nasync function refreshAccessToken(): Promise<string | null> {\n  const refreshToken = localStorage.getItem(\"refreshToken\");\n  if (!refreshToken) return null;\n  try {\n    const res = await fetch(\n      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,\n      {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        body: JSON.stringify({ refreshToken }),\n      }\n    );\n    if (!res.ok) return null;\n    const json = await res.json();\n    localStorage.setItem(\"accessToken\", json.data.accessToken);\n    return json.data.accessToken;\n  } catch {\n    return null;\n  }\n}\n\nexport function useApi() {\n  const [isLoading, setIsLoading] = useState(false);\n  const [error, setError] = useState<string | null>(null);\n\n  const fetchApi = useCallback(\n    async <T>(\n      path: string,\n      options: RequestInit = {}\n    ): Promise<T | null> => {\n      setIsLoading(true);\n      setError(null);\n      const token = localStorage.getItem(\"accessToken\");\n      try {\n        let res = await fetch(\n          `${process.env.NEXT_PUBLIC_API_URL}${path}`,\n          {\n            ...options,\n            headers: {\n              \"Content-Type\": \"application/json\",\n              ...(token ? { Authorization: `Bearer ${token}` } : {}),\n              ...options.headers,\n            },\n          }\n        );\n        if (res.status === 401) {\n          const newToken = await refreshAccessToken();\n          if (newToken) {\n            res = await fetch(\n              `${process.env.NEXT_PUBLIC_API_URL}${path}`,\n              {\n                ...options,\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                  Authorization: `Bearer ${newToken}`,\n                  ...options.headers,\n                },\n              }\n            );\n          } else {\n            localStorage.removeItem(\"accessToken\");\n            localStorage.removeItem(\"refreshToken\");\n            window.location.href = \"/login\";\n            return null;\n          }\n        }\n        if (!res.ok) {\n          const err = await res.json();\n          throw new Error(err.message ?? \"API request failed\");\n        }\n        if (res.status === 204) return null;\n        return await res.json();\n      } catch (err) {\n        const message =\n          err instanceof Error ? err.message : \"An error occurred\";\n        setError(message);\n        return null;\n      } finally {\n        setIsLoading(false);\n      }\n    },\n    []\n  );\n\n  return { fetchApi, isLoading, error };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "main-task-board-page",
      children: "Main Task Board Page"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/web/src/app/dashboard/page.tsx\n\"use client\";\nimport { useEffect, useState } from \"react\";\nimport { useApi } from \"@/lib/useApi\";\nimport { TaskCard } from \"@/components/TaskCard\";\nimport { CreateTaskModal } from \"@/components/CreateTaskModal\";\nimport { Plus } from \"lucide-react\";\n\ninterface Task {\n  id: string;\n  title: string;\n  status: string;\n  priority: string;\n  dueDate?: string;\n  assignee?: { id: string; name: string; email: string };\n}\n\nconst COLUMNS = [\n  { key: \"BACKLOG\", label: \"Backlog\" },\n  { key: \"TODO\", label: \"To Do\" },\n  { key: \"IN_PROGRESS\", label: \"In Progress\" },\n  { key: \"REVIEW\", label: \"Review\" },\n  { key: \"DONE\", label: \"Done\" },\n];\n\nexport default function DashboardPage() {\n  const { fetchApi } = useApi();\n  const [tasks, setTasks] = useState<Task[]>([]);\n  const [showCreateModal, setShowCreateModal] = useState(false);\n\n  useEffect(() => {\n    fetchApi<{ data: Task[] }>(\"/api/tasks?pageSize=100\").then((res) => {\n      if (res) setTasks(res.data);\n    });\n  }, [fetchApi]);\n\n  const grouped = COLUMNS.map((col) => ({\n    ...col,\n    tasks: tasks.filter((t) => t.status === col.key),\n  }));\n\n  return (\n    <div className=\"p-6\">\n      <div className=\"flex justify-between items-center mb-6\">\n        <h1 className=\"text-2xl font-bold\">Task Board</h1>\n        <button\n          onClick={() => setShowCreateModal(true)}\n          className=\"flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition\"\n        >\n          <Plus size={20} />\n          Add Task\n        </button>\n      </div>\n\n      <div className=\"flex gap-4 overflow-x-auto pb-4\">\n        {grouped.map((column) => (\n          <div\n            key={column.key}\n            className=\"flex-shrink-0 w-72 bg-gray-50 rounded-lg p-4\"\n          >\n            <h2 className=\"font-semibold text-gray-700 mb-3\">\n              {column.label}\n              <span className=\"ml-2 text-sm text-gray-400\">\n                ({column.tasks.length})\n              </span>\n            </h2>\n            <div className=\"space-y-3\">\n              {column.tasks.map((task) => (\n                <TaskCard key={task.id} task={task} />\n              ))}\n            </div>\n          </div>\n        ))}\n      </div>\n\n      {showCreateModal && (\n        <CreateTaskModal\n          onClose={() => setShowCreateModal(false)}\n          onCreated={(task) => {\n            setTasks((prev) => [...prev, task]);\n            setShowCreateModal(false);\n          }}\n        />\n      )}\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-card-component",
      children: "Task Card Component"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/web/src/components/TaskCard.tsx\nimport { Calendar, User } from \"lucide-react\";\n\ninterface TaskCardProps {\n  task: {\n    id: string;\n    title: string;\n    priority: string;\n    dueDate?: string;\n    assignee?: { name: string; email: string };\n  };\n}\n\nconst priorityColors: Record<string, string> = {\n  LOW: \"bg-gray-100 text-gray-600\",\n  MEDIUM: \"bg-blue-100 text-blue-600\",\n  HIGH: \"bg-orange-100 text-orange-600\",\n  CRITICAL: \"bg-red-100 text-red-600\",\n};\n\nexport function TaskCard({ task }: TaskCardProps) {\n  return (\n    <div className=\"bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition cursor-pointer\">\n      <div className=\"flex items-start justify-between mb-2\">\n        <h3 className=\"font-medium text-gray-900\">{task.title}</h3>\n        <span\n          className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[task.priority]}`}\n        >\n          {task.priority}\n        </span>\n      </div>\n      <div className=\"flex items-center gap-4 text-sm text-gray-500\">\n        {task.dueDate && (\n          <span className=\"flex items-center gap-1\">\n            <Calendar size={14} />\n            {new Date(task.dueDate).toLocaleDateString()}\n          </span>\n        )}\n        {task.assignee && (\n          <span className=\"flex items-center gap-1\">\n            <User size={14} />\n            {task.assignee.name}\n          </span>\n        )}\n      </div>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-task-modal",
      children: "Create Task Modal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/web/src/components/CreateTaskModal.tsx\nimport { useState } from \"react\";\nimport { useApi } from \"@/lib/useApi\";\nimport { X } from \"lucide-react\";\n\ninterface CreateTaskModalProps {\n  onClose: () => void;\n  onCreated: (task: any) => void;\n}\n\nconst PRIORITIES = [\"LOW\", \"MEDIUM\", \"HIGH\", \"CRITICAL\"];\nconst PROJECT_ID = \"default\";\n\nexport function CreateTaskModal({ onClose, onCreated }: CreateTaskModalProps) {\n  const { fetchApi, isLoading } = useApi();\n  const [title, setTitle] = useState(\"\");\n  const [description, setDescription] = useState(\"\");\n  const [priority, setPriority] = useState(\"MEDIUM\");\n  const [dueDate, setDueDate] = useState(\"\");\n\n  const handleSubmit = async (e: React.FormEvent) => {\n    e.preventDefault();\n    const result = await fetchApi<{ data: any }>(\"/api/tasks\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        title,\n        description,\n        priority,\n        dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,\n        projectId: PROJECT_ID,\n      }),\n    });\n    if (result) onCreated(result.data);\n  };\n\n  return (\n    <div className=\"fixed inset-0 bg-black/50 flex items-center justify-center z-50\">\n      <div className=\"bg-white rounded-xl shadow-xl p-6 w-full max-w-md\">\n        <div className=\"flex justify-between items-center mb-4\">\n          <h2 className=\"text-lg font-semibold\">Create Task</h2>\n          <button onClick={onClose} className=\"text-gray-400 hover:text-gray-600\">\n            <X size={20} />\n          </button>\n        </div>\n\n        <form onSubmit={handleSubmit} className=\"space-y-4\">\n          <div>\n            <label className=\"block text-sm font-medium text-gray-700 mb-1\">Title</label>\n            <input\n              type=\"text\"\n              value={title}\n              onChange={(e) => setTitle(e.target.value)}\n              className=\"w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none\"\n              required\n            />\n          </div>\n\n          <div>\n            <label className=\"block text-sm font-medium text-gray-700 mb-1\">Description</label>\n            <textarea\n              value={description}\n              onChange={(e) => setDescription(e.target.value)}\n              rows={3}\n              className=\"w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none\"\n            />\n          </div>\n\n          <div className=\"flex gap-4\">\n            <div className=\"flex-1\">\n              <label className=\"block text-sm font-medium text-gray-700 mb-1\">Priority</label>\n              <select\n                value={priority}\n                onChange={(e) => setPriority(e.target.value)}\n                className=\"w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none\"\n              >\n                {PRIORITIES.map((p) => (\n                  <option key={p} value={p}>{p}</option>\n                ))}\n              </select>\n            </div>\n            <div className=\"flex-1\">\n              <label className=\"block text-sm font-medium text-gray-700 mb-1\">Due Date</label>\n              <input\n                type=\"date\"\n                value={dueDate}\n                onChange={(e) => setDueDate(e.target.value)}\n                className=\"w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none\"\n              />\n            </div>\n          </div>\n\n          <div className=\"flex justify-end gap-3 pt-2\">\n            <button type=\"button\" onClick={onClose} className=\"px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition\">Cancel</button>\n            <button type=\"submit\" disabled={isLoading} className=\"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition\">\n              {isLoading ? \"Creating...\" : \"Create Task\"}\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "186-database-setup-with-docker-compose",
      children: "18.6 Database Setup with Docker Compose"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"3.8\"\nservices:\n  postgres:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_USER: taskflow\n      POSTGRES_PASSWORD: taskflow_secret\n      POSTGRES_DB: taskflow_dev\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\n  redis:\n    image: redis:7-alpine\n    ports:\n      - \"6379:6379\"\n\nvolumes:\n  pgdata:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "187-deployment",
      children: "18.7 Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dockerfile-for-api",
      children: "Dockerfile for API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM node:22-alpine AS builder\nWORKDIR /app\nCOPY package.json .\nRUN npm ci\nCOPY . .\nRUN npm run build -w packages/shared && npm run build -w apps/api\n\nFROM node:22-alpine\nWORKDIR /app\nCOPY --from=builder /app/apps/api/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY --from=builder /app/apps/api/package.json .\nEXPOSE 4000\nCMD [\"node\", \"dist/index.js\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-with-github-actions",
      children: "CI/CD with GitHub Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Deploy TaskFlow\n\non:\n  push:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16-alpine\n        env:\n          POSTGRES_PASSWORD: test\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n      - run: npm ci\n      - run: npm run build\n      - run: npm test\n\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Deploy to Railway\n        run: npx railway up --service taskflow-api\n        env:\n          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "188-testing-the-full-stack",
      children: "18.8 Testing the Full Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-integration-test",
      children: "API Integration Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/api/src/__tests__/tasks.test.ts\nimport { describe, it, expect, beforeAll } from \"vitest\";\nimport { PrismaClient } from \"@prisma/client\";\n\nconst prisma = new PrismaClient();\nconst API = \"http://localhost:4000\";\n\nlet token: string;\nlet projectId: string;\nlet taskId: string;\n\ndescribe(\"Tasks API\", () => {\n  beforeAll(async () => {\n    const res = await fetch(`${API}/api/auth/register`, {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\" },\n      body: JSON.stringify({\n        email: \"test@example.com\",\n        password: \"password123\",\n        name: \"Test User\",\n      }),\n    });\n    const json = await res.json();\n    token = json.tokens.accessToken;\n\n    const projectRes = await fetch(`${API}/api/projects`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: `Bearer ${token}`,\n      },\n      body: JSON.stringify({ name: \"Test Project\", description: \"A test project\" }),\n    });\n    const projectJson = await projectRes.json();\n    projectId = projectJson.data.id;\n  });\n\n  it(\"creates a task\", async () => {\n    const res = await fetch(`${API}/api/tasks`, {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\", Authorization: `Bearer ${token}` },\n      body: JSON.stringify({ title: \"Write tests\", priority: \"HIGH\", projectId }),\n    });\n    expect(res.status).toBe(201);\n    const json = await res.json();\n    expect(json.data.title).toBe(\"Write tests\");\n    expect(json.data.priority).toBe(\"HIGH\");\n    taskId = json.data.id;\n  });\n\n  it(\"lists tasks for a project\", async () => {\n    const res = await fetch(`${API}/api/tasks?projectId=${projectId}`, {\n      headers: { Authorization: `Bearer ${token}` },\n    });\n    expect(res.status).toBe(200);\n    const json = await res.json();\n    expect(json.data.length).toBeGreaterThan(0);\n    expect(json.total).toBeGreaterThan(0);\n  });\n\n  it(\"updates a task status\", async () => {\n    const res = await fetch(`${API}/api/tasks/${taskId}`, {\n      method: \"PUT\",\n      headers: { \"Content-Type\": \"application/json\", Authorization: `Bearer ${token}` },\n      body: JSON.stringify({ status: \"IN_PROGRESS\" }),\n    });\n    expect(res.status).toBe(200);\n    const json = await res.json();\n    expect(json.data.status).toBe(\"IN_PROGRESS\");\n  });\n\n  it(\"deletes a task\", async () => {\n    const res = await fetch(`${API}/api/tasks/${taskId}`, {\n      method: \"DELETE\",\n      headers: { Authorization: `Bearer ${token}` },\n    });\n    expect(res.status).toBe(204);\n  });\n\n  afterAll(async () => {\n    await prisma.task.deleteMany();\n    await prisma.project.deleteMany();\n    await prisma.user.deleteMany();\n    await prisma.$disconnect();\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "end-to-end-test-with-playwright",
      children: "End-to-End Test with Playwright"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/web/e2e/auth.spec.ts\nimport { test, expect } from \"@playwright/test\";\n\ntest(\"user can register, login, and create a task\", async ({ page }) => {\n  const testEmail = `test-${Date.now()}@example.com`;\n\n  await page.goto(\"/register\");\n  await expect(page.locator(\"h1\")).toContainText(\"Create Account\");\n\n  await page.fill('input[name=\"name\"]', \"Test User\");\n  await page.fill('input[name=\"email\"]', testEmail);\n  await page.fill('input[name=\"password\"]', \"password123\");\n  await page.click('button[type=\"submit\"]');\n\n  await expect(page).toHaveURL(/\\/dashboard/);\n  await expect(page.locator(\"h1\")).toContainText(\"Task Board\");\n\n  await page.click('text=Add Task');\n  await page.fill('input[type=\"text\"]', \"My first task\");\n  await page.click('text=Create Task');\n\n  await expect(page.locator(\"text=My first task\")).toBeVisible();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "189-performance-optimization",
      children: "18.9 Performance Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/api/src/middleware/cache.ts\nimport { Request, Response, NextFunction } from \"express\";\nimport { createClient } from \"redis\";\n\nconst redis = createClient({ url: process.env.REDIS_URL ?? \"redis://localhost:6379\" });\nawait redis.connect();\n\nexport function cache(durationSeconds: number) {\n  return async (req: Request, res: Response, next: NextFunction) => {\n    if (req.method !== \"GET\") return next();\n    const key = `cache:${req.originalUrl}`;\n    const cached = await redis.get(key);\n    if (cached) {\n      return res.json(JSON.parse(cached));\n    }\n    const originalJson = res.json.bind(res);\n    res.json = (body: any) => {\n      redis.setEx(key, durationSeconds, JSON.stringify(body));\n      return originalJson(body);\n    };\n    next();\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "concurrently"
        }), " in the root package.json to start both frontend and backend with a single ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run dev"
        }), " command — it significantly improves developer experience."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nThe GitHub Actions service container for PostgreSQL uses a test password. Never use the CI test database credentials in production — always rotate secrets between environments."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nThis full-stack project ties together every chapter in the course. If something feels unclear, revisit the specific chapter — REST APIs (ch9), Auth (ch10), Databases (ch11), Deployment (ch12), Security (ch13), TypeScript (ch14), Next.js (ch15), Testing (ch16), and Performance (ch17)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monorepo vs Multi-repo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared types, single CI, atomic commits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent deploy cycles, separate issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "npm Workspaces vs Turborepo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workspace resolution, hoisting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task orchestration, caching, parallel execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API with Prisma vs without"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe queries, auto-migrations, relation handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual SQL, raw queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next.js vs SPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSR, ISR, file-based routing, image optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-only rendering, requires separate backend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Compose vs cloud DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local dev, reproducible setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed, scalable, production-ready"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project Structure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "apps/web"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "apps/api"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/shared"
            }), ", root ", (0,jsx_runtime.jsx)(_components.code, {
              children: "package.json"
            }), " with workspaces"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next.js 15 + React 19 + TypeScript + Express + Prisma + PostgreSQL + Redis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Dependencies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lucide-react"
            }), " (icons), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tailwindcss"
            }), " (styling), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bcryptjs"
            }), " (hashing), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "jsonwebtoken"
            }), " (JWT), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "zod"
            }), " (validation), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "helmet"
            }), " (security), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cors"
            }), " (CORS)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register/Login ? JWT (15min) + Refresh Token (7d) ? 401 triggers refresh ? auto-retry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "quality (type-check + lint + build) ? test (with postgres service) ? deploy (Railway)"
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
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TaskFlow (this project)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-stack task manager with projects and teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete reference implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce Platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same stack but with products, cart, orders, payments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proven architecture scales to any domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant with organization-based data isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add orgId to every query, nested layouts per org"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content Platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISR for public pages, SSR for authenticated creator dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance + personalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time features with WebSockets or SSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extend with push notifications and live feeds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. What is the advantage of a monorepo for full-stack development?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It is simpler than multi-repo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Shared types between frontend and backend prevent API contract drift"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It reduces server costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It eliminates the need for TypeScript"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) A monorepo with a shared types package ensures that the frontend and backend always agree on data shapes. Changing an API response type in the shared package immediately surfaces type errors in both codebases."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. How does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useApi"
        }), " hook handle expired access tokens?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It logs the user out immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It catches the 401, attempts a token refresh using the refresh token, and retries the original request"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It re-fetches from the server"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It throws an error for the component to handle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) When the API returns 401, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useApi"
            }), " calls the refresh endpoint with the stored refresh token. If successful, it retries the original request with the new access token. If refresh also fails, the user is redirected to login."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q3. What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuthenticatedRequest"
        }), " interface?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To define the request body schema"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) To extend Express Request with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "userId"
        }), " property added by the auth middleware"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To validate authentication headers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To type the API response"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AuthenticatedRequest"
            }), " interface extends Express ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Request"
            }), " with an optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "userId"
            }), " property. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "authenticate"
            }), " middleware sets this property after verifying the JWT, and route handlers access it to scope queries to the authenticated user."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. Which Docker service does the TaskFlow application depend on for local development?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) MySQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) MongoDB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) PostgreSQL and Redis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) SQLite"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["C) The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker-compose.yml"
            }), " defines PostgreSQL (main database) and Redis (caching) services. The Express API connects to both for data persistence and caching."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-full-stack-project-scaffolding-api-route-tree-error-boundary-generator",
      children: "TypeScript Implementation: Full-Stack Project Scaffolding, API Route Tree, Error Boundary Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ProjectScaffoldConfig {\n    name: string;\n    withAuth: boolean;\n    withDb: boolean;\n    withTests: boolean;\n    withDocker: boolean;\n    frontend: \"react\" | \"nextjs\" | \"none\";\n    backend: \"express\" | \"hono\" | \"none\";\n    database: \"postgres\" | \"sqlite\" | \"none\";\n}\n\nclass FullStackScaffolder {\n    static generate(config: ProjectScaffoldConfig): Record<string, string> {\n        const files: Record<string, string> = {};\n\n        files[\"package.json\"] = JSON.stringify({\n            name: config.name, version: \"1.0.0\", private: true,\n            scripts: {\n                ...(config.frontend !== \"none\" ? { dev: \"npm run dev --workspace=apps/web\", build: \"npm run build --workspace=apps/web\" } : {}),\n                ...(config.backend !== \"none\" ? { \"dev:api\": \"npm run dev --workspace=apps/api\" } : {}),\n                test: \"npm run test --workspaces\"\n            },\n            workspaces: [\"apps/*\", \"packages/*\"]\n        }, null, 2);\n\n        if (config.withDocker) {\n            files[\"docker-compose.yml\"] = `version: \"3.9\"\\nservices:\\n  db:\\n    image: ${config.database === \"postgres\" ? \"postgres:16\" : \"postgres:16-alpine\"}\\n    environment:\\n      POSTGRES_DB: ${config.name}\\n      POSTGRES_PASSWORD: devpassword\\n    ports:\\n      - \"5432:5432\"\\n  redis:\\n    image: redis:7-alpine\\n    ports:\\n      - \"6379:6379\"`;\n            files[\"Dockerfile\"] = \"FROM node:20-alpine\\nWORKDIR /app\\nCOPY package*.json ./\\nRUN npm ci\\nCOPY . .\\nRUN npm run build\\nEXPOSE 3000\\nCMD [\\\"node\\\", \\\"dist/index.js\\\"]\";\n        }\n\n        if (config.withTests) {\n            files[\"vitest.config.ts\"] = `import { defineConfig } from \"vitest/config\";\\nexport default defineConfig({ test: { globals: true, environment: \"node\", coverage: { reporter: [\"text\", \"json\"] } } });`;\n        }\n\n        return files;\n    }\n}\n\nclass APIRouteTreeBuilder {\n    static buildTree(routes: { method: string; path: string; handler: string }[]): Record<string, any> {\n        const root: Record<string, any> = {};\n        for (const route of routes) {\n            const parts = route.path.split(\"/\").filter(Boolean);\n            let current = root;\n            for (let i = 0; i < parts.length; i++) {\n                const isParam = parts[i].startsWith(\":\");\n                const key = isParam ? `{${parts[i].slice(1)}}` : parts[i];\n                if (!current[key]) current[key] = {};\n                if (i === parts.length - 1) {\n                    current[key].$method = route.method.toUpperCase();\n                    current[key].$handler = route.handler;\n                }\n                current = current[key];\n            }\n        }\n        return root;\n    }\n\n    static generateRouterCode(tree: Record<string, any>, indent: string = \"\"): string {\n        let code = \"\";\n        for (const [key, value] of Object.entries(tree)) {\n            if (key === \"$method\" || key === \"$handler\") continue;\n            const isParam = key.startsWith(\"{\") && key.endsWith(\"}\");\n            code += `${indent}// ${isParam ? `:${key.slice(1, -1)}` : `/${key}`}\\n`;\n            if (value.$method) code += `${indent}router.${value.$method.toLowerCase()}(\"${isParam ? \":\" + key.slice(1, -1) : \"/\" + key}\", ${value.$handler});\\n`;\n            code += this.generateRouterCode(value, indent + \"  \");\n        }\n        return code;\n    }\n}\n\nclass ErrorBoundaryGenerator {\n    static react(): string {\n        return `import React, { Component, ErrorInfo, ReactNode } from \"react\";\n\ninterface Props { children: ReactNode; fallback?: ReactNode; onError?: (error: Error, info: ErrorInfo) => void; }\ninterface State { hasError: boolean; error: Error | null; }\n\nclass ErrorBoundary extends Component<Props, State> {\n  state: State = { hasError: false, error: null };\n\n  static getDerivedStateFromError(error: Error): State { return { hasError: true, error }; }\n\n  componentDidCatch(error: Error, info: ErrorInfo) { this.props.onError?.(error, info); }\n\n  render() {\n    if (this.state.hasError) return this.props.fallback || <div><h2>Something went wrong</h2><p>{this.state.error?.message}</p></div>;\n    return this.props.children;\n  }\n}\n\nexport default ErrorBoundary;`;\n    }\n\n    static api(): string {\n        return `import { Request, Response, NextFunction } from \"express\";\n\nexport function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {\n  console.error(\"Unhandled error:\", err.message);\n  res.status(500).json({ error: \"Internal server error\", message: process.env.NODE_ENV === \"development\" ? err.message : undefined });\n}\n\nexport function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {\n  return (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch(next);\n}`;\n    }\n}\n\n// Demo\nconst scaffold = FullStackScaffolder.generate({ name: \"my-app\", withAuth: true, withDb: true, withTests: true, withDocker: true, frontend: \"nextjs\", backend: \"express\", database: \"postgres\" });\nconsole.log(\"Scaffold files:\", Object.keys(scaffold).join(\", \"));\nconst tree = APIRouteTreeBuilder.buildTree([\n    { method: \"GET\", path: \"/api/users\", handler: \"getUsers\" },\n    { method: \"POST\", path: \"/api/users\", handler: \"createUser\" },\n    { method: \"GET\", path: \"/api/users/:id\", handler: \"getUserById\" },\n    { method: \"DELETE\", path: \"/api/users/:id\", handler: \"deleteUser\" },\n]);\nconsole.log(\"Route tree:\\n\", APIRouteTreeBuilder.generateRouterCode(tree));\nconsole.log(\"Error boundary:\\n\", ErrorBoundaryGenerator.react().slice(0, 200) + \"...\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// fullstack project\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'fullstack project', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Building a full-stack application requires integrating all the concepts from previous chapters into a cohesive system. In this chapter, we constructed TaskFlow, a complete task management application:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monorepo structure"
        }), " with shared types ensures type safety across the entire stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Express API"
        }), " with Prisma provides type-safe database access and RESTful endpoints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JWT authentication"
        }), " with refresh tokens keeps the API secure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next.js frontend"
        }), " with the App Router delivers a modern, performant user experience"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker Compose"
        }), " simplifies local development with PostgreSQL and Redis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD pipeline"
        }), " automates testing and deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration and E2E tests"
        }), " verify the system works end-to-end"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redis caching"
        }), " improves API response times for frequently accessed data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the advantages of a monorepo structure for full-stack applications?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the shared types package prevent inconsistencies between frontend and backend?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the token refresh flow implemented in the authentication system."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add task drag-and-drop"
        }), ": Implement drag-and-drop functionality to move tasks between status columns using the HTML Drag and Drop API, with optimistic UI updates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time collaboration"
        }), ": Integrate Server-Sent Events (SSE) or WebSocket to broadcast task updates to all connected clients in real time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File attachments"
        }), ": Add the ability to upload file attachments to tasks using multipart form data and cloud storage (S3 or similar)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Management Dashboard"
      }), " that extends TaskFlow with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sprint planning"
        }), ": Group tasks into sprints with start/end dates and velocity tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time tracking"
        }), ": Log hours worked on each task with weekly summaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analytics"
        }), ": Burndown charts, cycle time, and throughput metrics using Chart.js or Recharts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notifications"
        }), ": Email notifications when tasks are assigned or due dates approach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Team management"
        }), ": Invite team members, assign roles (Admin/Member/Viewer), and manage permissions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit log"
        }), ": Record all changes to tasks and projects with timestamps and user attribution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deploy the complete application to a cloud platform (Vercel + Railway or AWS) and configure a custom domain with HTTPS."
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