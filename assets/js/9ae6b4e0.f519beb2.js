"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46105],{

/***/ 3124
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_12_deployment_md_9ae_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-12-deployment-md-9ae.json
const site_docs_courses_web_development_12_deployment_md_9ae_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/12-deployment","title":"Chapter 12: Deployment and DevOps","description":"Previous 13-security","source":"@site/docs/courses/web-development/12-deployment.md","sourceDirName":"courses/web-development","slug":"/web-development/12-deployment","permalink":"/ai-engineering-journey/web-development/12-deployment","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-deployment","slug":"/web-development/12-deployment","title":"Chapter 12: Deployment and DevOps","sidebar_label":"Chapter 12: Deployment and DevOps","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Chapter 11: Databases in Web Applications","permalink":"/ai-engineering-journey/web-development/11-databases-web"},"next":{"title":"Chapter 13: Web Security","permalink":"/ai-engineering-journey/web-development/13-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/12-deployment.md


const frontMatter = {
	id: '12-deployment',
	slug: '/web-development/12-deployment',
	title: 'Chapter 12: Deployment and DevOps',
	sidebar_label: 'Chapter 12: Deployment and DevOps',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Deployment and DevOps';

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
  "value": "12.1 Build Process",
  "id": "121-build-process",
  "level": 2
}, {
  "value": "Environment Variables",
  "id": "environment-variables",
  "level": 3
}, {
  "value": "12.2 Vercel Deployment (Next.js)",
  "id": "122-vercel-deployment-nextjs",
  "level": 2
}, {
  "value": "<code>vercel.json</code>",
  "id": "verceljson",
  "level": 3
}, {
  "value": "12.3 Railway Deployment (Backend)",
  "id": "123-railway-deployment-backend",
  "level": 2
}, {
  "value": "<code>railway.json</code>",
  "id": "railwayjson",
  "level": 3
}, {
  "value": "12.4 Docker Deployment",
  "id": "124-docker-deployment",
  "level": 2
}, {
  "value": "12.5 CI/CD with GitHub Actions",
  "id": "125-cicd-with-github-actions",
  "level": 2
}, {
  "value": "12.6 Environment-Specific Configuration",
  "id": "126-environment-specific-configuration",
  "level": 2
}, {
  "value": "12.7 Monitoring and Logging",
  "id": "127-monitoring-and-logging",
  "level": 2
}, {
  "value": "Deployment Pipeline Architecture",
  "id": "deployment-pipeline-architecture",
  "level": 3
}, {
  "value": "Health Check Endpoint",
  "id": "health-check-endpoint",
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
  "value": "TypeScript: CI/CD Pipeline Simulator &amp; Health Checker",
  "id": "typescript-cicd-pipeline-simulator--health-checker",
  "level": 3
}, {
  "value": "TypeScript Implementation: Dockerfile Generator, Nginx Config Validator, CI Pipeline Writer",
  "id": "typescript-implementation-dockerfile-generator-nginx-config-validator-ci-pipeline-writer",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Rollback Strategies",
  "id": "rollback-strategies",
  "level": 3
}, {
  "value": "Feature Flags with LaunchDarkly Pattern",
  "id": "feature-flags-with-launchdarkly-pattern",
  "level": 3
}, {
  "value": "Canary Deployment",
  "id": "canary-deployment",
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
  "value": "Application Projects",
  "id": "application-projects",
  "level": 3
}, {
  "value": "Challenge Project",
  "id": "challenge-project",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-12-deployment-and-devops",
        children: "Chapter 12: Deployment and DevOps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/11-databases-web",
          children: "11-databases-web"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/13-security",
          children: "13-security"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Build processes transpile, bundle, and optimize code for production deployment."]
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
        href: "../../assets/images/lessons/web-development/12-deployment/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/12-deployment/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/12-deployment/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/12-deployment/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/12-deployment/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/12-deployment/visual-explanation.png",
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
        }), " Environment variables separate configuration from code and keep secrets out of version control."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Build Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transpile TypeScript, bundle assets, optimize output"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci"
            }), " for reproducible CI builds, validate env vars at startup with Zod"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-environment variables keep secrets out of source control"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".env.local"
            }), " for dev, platform env vars for production, validate with Zod schemas"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Platform Deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vercel (Next.js), Railway (backend), Netlify (static sites)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match the platform to the framework — Vercel for Next.js, Railway for Express APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containerize apps with multi-stage builds for minimal production images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Alpine base images, separate build and run stages, run as non-root user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions automate testing and deployment on every push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run type-checking, linting, and testing in parallel before deploying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured logging (pino), health checks, uptime tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log in JSON format for machine parsing, include request IDs for traceability"
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
        }), " Vercel excels at Next.js deployments while Railway simplifies backend API hosting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Build Process Configuration]\n    B[Environment Variable Management]\n    A --> B\n    C[Vercel Deployment (Next.js)]\n    B --> C\n    D[Railway Deployment (Backend)]\n    C --> D\n    E[Docker Multi-Stage Builds]\n    D --> E\n    F[Docker Compose]\n    E --> F\n    G[CI/CD with GitHub Actions]\n    F --> G\n    H[Monitoring & Health Checks]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up build processes for frontend and backend applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage environment variables across deployment environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy applications to Vercel, Netlify, Railway, and AWS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure custom domains and SSL certificates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement CI/CD pipelines with GitHub Actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor production applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "121-build-process",
      children: "12.1 Build Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Docker containers ensure consistent environments from development through production."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/12-deployment.png",
        alt: "Deployment and DevOps Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    \"start\": \"next start\",\n    \"lint\": \"next lint\",\n    \"type-check\": \"tsc --noEmit\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "environment-variables",
      children: "Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# .env.local - Development (not committed)\nDATABASE_URL=postgresql://localhost:5432/mydb\nJWT_SECRET=local_dev_secret\nAPI_URL=http://localhost:4000\n\n# .env.production - Production values set in hosting platform\nNEXT_PUBLIC_API_URL=https://api.example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Runtime validation with Zod\nimport { z } from \"zod\";\n\nconst envSchema = z.object({\n  DATABASE_URL: z.string().url(),\n  JWT_SECRET: z.string().min(32),\n  NODE_ENV: z.enum([\"development\", \"production\", \"test\"]),\n  REDIS_URL: z.string().url().optional(),\n  PORT: z.coerce.number().default(4000),\n});\n\nconst env = envSchema.parse(process.env);\nexport default env;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-vercel-deployment-nextjs",
      children: "12.2 Vercel Deployment (Next.js)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CI/CD pipelines automate quality checks and deployment, reducing human error."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Vercel CLI\nnpm i -g vercel\n\n# Deploy\nvercel --prod\n\n# Set environment variables\nvercel env add DATABASE_URL production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verceljson",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vercel.json"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"framework\": \"nextjs\",\n  \"buildCommand\": \"npm run build\",\n  \"outputDirectory\": \".next\",\n  \"installCommand\": \"npm ci\",\n  \"env\": {\n    \"NEXT_PUBLIC_API_URL\": \"@api_url\"\n  },\n  \"headers\": [\n    {\n      \"source\": \"/(.*)\",\n      \"headers\": [\n        { \"key\": \"X-Frame-Options\", \"value\": \"DENY\" },\n        { \"key\": \"X-Content-Type-Options\", \"value\": \"nosniff\" },\n        { \"key\": \"Referrer-Policy\", \"value\": \"strict-origin-when-cross-origin\" }\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-railway-deployment-backend",
      children: "12.3 Railway Deployment (Backend)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Structured logging and health check endpoints enable production monitoring and debugging."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Railway CLI\nnpm i -g @railway/cli\n\n# Initialize\nrailway init\n\n# Deploy\nrailway up\n\n# Open logs\nrailway logs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "railwayjson",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "railway.json"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"build\": {\n    \"builder\": \"DOCKERFILE\",\n    \"dockerfilePath\": \"Dockerfile\"\n  },\n  \"deploy\": {\n    \"restartPolicyType\": \"ON_FAILURE\",\n    \"restartPolicyMaxRetries\": 10\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-docker-deployment",
      children: "12.4 Docker Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Multi-stage build for Node.js API\nFROM node:22-alpine AS deps\nWORKDIR /app\nCOPY package.json package-lock.json ./\nRUN npm ci --only=production\n\nFROM node:22-alpine AS builder\nWORKDIR /app\nCOPY package.json package-lock.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:22-alpine AS runner\nWORKDIR /app\nRUN addgroup --system --gid 1001 nodejs\nRUN adduser --system --uid 1001 appuser\nCOPY --from=builder /app/dist ./dist\nCOPY --from=deps /app/node_modules ./node_modules\nCOPY --from=builder /app/package.json ./\nUSER appuser\nEXPOSE 4000\nENV NODE_ENV=production\nCMD [\"node\", \"dist/index.js\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.yml for production-like environment\nversion: \"3.8\"\nservices:\n  app:\n    build: .\n    ports:\n      - \"4000:4000\"\n    environment:\n      - DATABASE_URL=postgresql://user:pass@db:5432/mydb\n      - REDIS_URL=redis://redis:6379\n    depends_on:\n      - db\n      - redis\n    restart: unless-stopped\n\n  db:\n    image: postgres:16-alpine\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n    environment:\n      - POSTGRES_USER=user\n      - POSTGRES_PASSWORD=pass\n      - POSTGRES_DB=mydb\n\n  redis:\n    image: redis:7-alpine\n    volumes:\n      - redis_data:/data\n\nvolumes:\n  postgres_data:\n  redis_data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-cicd-with-github-actions",
      children: "12.5 CI/CD with GitHub Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: CI/CD Pipeline\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  quality:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n          cache: \"npm\"\n      - run: npm ci\n      - run: npm run type-check\n      - run: npm run lint\n      - run: npm run build\n\n  test:\n    needs: quality\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16-alpine\n        env:\n          POSTGRES_PASSWORD: test\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n      - run: npm ci\n      - run: npx prisma migrate deploy\n        env:\n          DATABASE_URL: postgresql://postgres:test@localhost:5432/postgres\n      - run: npm test\n        env:\n          DATABASE_URL: postgresql://postgres:test@localhost:5432/postgres\n\n  deploy:\n    needs: test\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Deploy to Railway\n        run: npx railway up --service my-api\n        env:\n          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-environment-specific-configuration",
      children: "12.6 Environment-Specific Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// config/index.ts\nimport { z } from \"zod\";\n\nconst envSchema = z.object({\n  NODE_ENV: z.enum([\"development\", \"staging\", \"production\", \"test\"]),\n  DATABASE_URL: z.string().url(),\n  REDIS_URL: z.string().url().optional(),\n  JWT_SECRET: z.string().min(32),\n  LOG_LEVEL: z.enum([\"debug\", \"info\", \"warn\", \"error\"]).default(\"info\"),\n  PORT: z.coerce.number().default(4000),\n  CORS_ORIGIN: z.string().default(\"http://localhost:3000\"),\n  SENTRY_DSN: z.string().url().optional(),\n});\n\nconst env = envSchema.parse(process.env);\nexport default env;\n\n// config/deploy.ts\ninterface DeployConfig {\n  environment: string;\n  domain: string;\n  scale: { min: number; max: number };\n  features: { maintenance: boolean; beta: boolean };\n}\n\nconst deployConfigs: Record<string, DeployConfig> = {\n  development: {\n    environment: \"dev\",\n    domain: \"localhost:3000\",\n    scale: { min: 1, max: 1 },\n    features: { maintenance: false, beta: true },\n  },\n  staging: {\n    environment: \"stg\",\n    domain: \"staging.example.com\",\n    scale: { min: 1, max: 2 },\n    features: { maintenance: false, beta: true },\n  },\n  production: {\n    environment: \"prd\",\n    domain: \"example.com\",\n    scale: { min: 2, max: 10 },\n    features: { maintenance: false, beta: false },\n  },\n};\n\nexport function getDeployConfig(env: string): DeployConfig {\n  return deployConfigs[env] ?? deployConfigs.development;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-monitoring-and-logging",
      children: "12.7 Monitoring and Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import pino from \"pino\";\n\nconst logger = pino({\n  level: process.env.LOG_LEVEL ?? \"info\",\n  transport:\n    process.env.NODE_ENV === \"development\"\n      ? { target: \"pino-pretty\" }\n      : undefined,\n  redact: [\"req.headers.authorization\", \"req.body.password\"],\n});\n\n// Express middleware\napp.use((req, res, next) => {\n  const start = Date.now();\n  res.on(\"finish\", () => {\n    logger.info({\n      method: req.method,\n      url: req.url,\n      status: res.statusCode,\n      duration: Date.now() - start,\n    });\n  });\n  next();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-pipeline-architecture",
      children: "Deployment Pipeline Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    A[Git Push] --> B[GitHub Actions]\n    B --> C{Lint & Type Check}\n    C -->|Pass| D[Run Tests]\n    D -->|Pass| E[Build]\n    E --> F[Deploy to Staging]\n    F --> G[Smoke Tests]\n    G -->|Pass| H[Deploy to Production]\n    H --> I[Health Check Monitor]\n    I -->|Healthy| J[Done]\n    I -->|Unhealthy| K[Rollback]\n    K --> L[Previous Version]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-check-endpoint",
      children: "Health Check Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "app.get(\"/api/health\", async (req, res) => {\n  const checks = {\n    database: false,\n    redis: false,\n    uptime: process.uptime(),\n    timestamp: new Date().toISOString(),\n  };\n\n  try {\n    await prisma.$queryRaw`SELECT 1`;\n    checks.database = true;\n  } catch {}\n\n  try {\n    await redis.ping();\n    checks.redis = true;\n  } catch {}\n\n  const healthy = Object.values(checks).every((v) => v === true || typeof v === \"number\");\n  res.status(healthy ? 200 : 503).json({ status: healthy ? \"healthy\" : \"degraded\", checks });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!TIP]\nAlways validate environment variables at startup with a Zod schema. A startup failure is far easier to debug than a mysterious runtime crash from a missing variable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\nNever commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env.local"
        }), " files. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env.example"
        }), " with placeholder values as a template that is committed to the repository."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nMulti-stage Docker builds keep production images small by separating build dependencies from runtime dependencies. The final stage should only contain what is needed to run the application."
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
            children: "Vercel vs Railway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend-optimized, Next.js native, edge functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backend-focused, database hosting, Docker support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker vs VM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process-level isolation, shares host kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full OS virtualization, heavier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm install"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses lockfile, deletes node_modules, faster in CI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updates lockfile, slower, can drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structured vs Unstructured Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON format, queryable, machine-readable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free text, human-readable only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health Check vs Full Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick liveness check, no dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thorough, full test suite"
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
            children: "Env Files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".env.local (dev secret), .env.production (prod template), .env.example (documented)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dockerfile Stages"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AS deps"
            }), " (prod deps), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AS builder"
            }), " (build), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AS runner"
            }), " (minimal production)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "actions/checkout"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "actions/setup-node"
            }), ", service containers, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "needs"
            }), " for pipeline stages"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "X-Frame-Options: DENY"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X-Content-Type-Options: nosniff"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Referrer-Policy"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Compose"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "services:"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build:"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ports:"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "environment:"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "depends_on:"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "volumes:"
            })]
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
            children: "Blog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vercel + Next.js deploy with ISR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant global CDN with automatic revalidation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Backend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Railway + Docker with PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed database and auto-scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD with staging and production environments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe deploys with automated testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static Site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Netlify with Git-based continuous deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free hosting with form handling and serverless functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Compose on VPS with monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control over infrastructure and costs"
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
        children: "Q1. What is the advantage of multi-stage Docker builds?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They build faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The final image only contains runtime dependencies, keeping it small"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) They require fewer Docker commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They work without a Dockerfile"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Multi-stage builds use separate stages for dependencies, building, and running. The final stage copies only the compiled output and production dependencies, resulting in a minimal image."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. Why should you validate environment variables at startup?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To improve performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To fail fast with a clear error if configuration is missing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To encrypt the environment variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To log them for debugging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Startup validation catches misconfiguration immediately with a clear error message, rather than causing cryptic runtime failures when the missing variable is first accessed."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q3. What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm install"
        }), " in CI?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " is slower but more thorough"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " installs from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package-lock.json"
        }), " exactly, ensuring reproducible builds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " also runs tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " skips devDependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci"
            }), " uses the lockfile to install exact versions, deletes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "node_modules"
            }), " first, and fails if the lockfile is out of sync with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "package.json"
            }), " — ensuring deterministic builds."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. What does a health check endpoint typically verify?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Application uptime only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Connectivity to critical dependencies (database, cache, external services)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) User authentication status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) API documentation availability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Health checks verify that the application and its critical dependencies (database, Redis, external APIs) are reachable and responsive, returning a 200 or 503 status accordingly."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-cicd-pipeline-simulator--health-checker",
      children: "TypeScript: CI/CD Pipeline Simulator & Health Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CICDPipeline {\n  readonly stages: string[] = [];\n  private results: Map<string, boolean> = new Map();\n\n  addStage(name: string): void { this.stages.push(name); }\n  async run(): Promise<boolean> {\n    for (const stage of this.stages) {\n      console.log(`Running stage: ${stage}...`);\n      const success = await this.executeStage(stage);\n      this.results.set(stage, success);\n      if (!success) { console.log(`FAILED at: ${stage}`); return false; }\n    }\n    return true;\n  }\n  private async executeStage(stage: string): Promise<boolean> {\n    await new Promise(r => setTimeout(r, 50));\n    return !stage.includes(\"fail\");\n  }\n}\n\nclass HealthChecker {\n  static async check(url: string, timeout: number = 5000): Promise<{ status: number; latency: number; healthy: boolean }> {\n    const start = Date.now();\n    try {\n      const res = await fetch(url, { signal: AbortSignal.timeout(timeout) });\n      return { status: res.status, latency: Date.now() - start, healthy: res.status < 500 };\n    } catch { return { status: 0, latency: Date.now() - start, healthy: false }; }\n  }\n}\n\nclass DockerComposeGenerator {\n  static compose(services: Array<{ name: string; image: string; port?: number; env?: Record<string, string> }>): string {\n    const svcs = services.map(s => `  ${s.name}:\\n    image: ${s.image}${s.port ? `\\n    ports:\\n      - \"${s.port}:${s.port}\"` : \"\"}${s.env ? `\\n    environment:\\n${Object.entries(s.env).map(([k, v]) => `      ${k}=${v}`).join(\"\\n\")}` : \"\"}`);\n    return `version: \"3.8\"\\nservices:\\n${svcs.join(\"\\n\")}`;\n  }\n}\n\nconst pipe = new CICDPipeline();\npipe.addStage(\"lint\"); pipe.addStage(\"test\"); pipe.addStage(\"build\");\nconsole.log(\"Pipeline:\", pipe.stages.join(\" -> \"));\nconsole.log(\"Docker:\", DockerComposeGenerator.compose([{ name: \"app\", image: \"node:18\", port: 3000 }]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-dockerfile-generator-nginx-config-validator-ci-pipeline-writer",
      children: "TypeScript Implementation: Dockerfile Generator, Nginx Config Validator, CI Pipeline Writer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DockerfileGenerator {\n    static node(baseImage: string = \"node:20-alpine\", options?: {\n        port?: number; workdir?: string; buildCmd?: string; startCmd?: string;\n        env?: Record<string, string>; extraSteps?: string[]\n    }): string {\n        const opts = options || {};\n        const lines: string[] = [\n            `FROM ${baseImage}`,\n            `WORKDIR ${opts.workdir || \"/app\"}`,\n        ];\n        if (opts.env) {\n            for (const [k, v] of Object.entries(opts.env)) lines.push(`ENV ${k}=${v}`);\n        }\n        lines.push(\n            `COPY package*.json ./`,\n            `RUN npm ci --only=production`,\n            `COPY . .`,\n        );\n        if (opts.buildCmd) lines.push(`RUN ${opts.buildCmd}`);\n        if (opts.extraSteps) lines.push(...opts.extraSteps);\n        lines.push(`EXPOSE ${opts.port || 3000}`);\n        lines.push(`CMD [\"${(opts.startCmd || \"node index.js\").split(\" \").join('\", \"')}\"]`);\n        return lines.join(\"\\n\");\n    }\n\n    static multiStage(nodeVersion: string = \"20\"): string {\n        return `\nFROM node:${nodeVersion}-alpine AS builder\nWORKDIR /build\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:${nodeVersion}-alpine AS runner\nWORKDIR /app\nCOPY --from=builder /build/dist ./dist\nCOPY --from=builder /build/node_modules ./node_modules\nCOPY package*.json ./\nEXPOSE 3000\nCMD [\"node\", \"dist/index.js\"]\n`.trim();\n    }\n\n    static dockerignore(): string {\n        return `node_modules\\n.git\\n.env\\n*.md\\ndist\\ncoverage\\n.gitignore\\n.DS_Store\\n`;\n    }\n}\n\nclass NginxConfigValidator {\n    static validate(config: string): { valid: boolean; errors: string[]; warnings: string[] } {\n        const errors: string[] = []; const warnings: string[] = [];\n        const lines = config.split(\"\\n\");\n\n        let hasServer = false; let hasListen = false; let braceCount = 0;\n        let inLocation = false; let hasProxyPass = false;\n\n        for (let i = 0; i < lines.length; i++) {\n            const line = lines[i].trim();\n            if (line.startsWith(\"#\") || line === \"\") continue;\n\n            if (line.includes(\"{\")) braceCount++;\n            if (line.includes(\"}\")) braceCount--;\n            if (line.includes(\"server {\")) hasServer = true;\n            if (line.startsWith(\"listen\")) { hasListen = true; if (line.includes(\"80\") && !line.includes(\"443\")) warnings.push(`Line ${i+1}: HTTP only (port 80), consider HTTPS`); }\n            if (line.startsWith(\"location\")) inLocation = true;\n            if (line.includes(\"proxy_pass\")) hasProxyPass = true;\n            if (line.includes(\"ssl_certificate\") && !line.includes(\".pem\") && !line.includes(\".crt\")) errors.push(`Line ${i+1}: SSL certificate path may be invalid`);\n            if (line.match(/server_name\\s+_/)) warnings.push(`Line ${i+1}: Catch-all server_name _ may cause routing issues`);\n        }\n\n        if (braceCount !== 0) errors.push(`Unmatched braces (${braceCount > 0 ? \"excess open\" : \"excess close\"})`);\n        if (!hasServer) errors.push(\"No server block defined\");\n        if (!hasListen) errors.push(\"No listen directive\");\n        if (inLocation && !hasProxyPass) warnings.push(\"Location blocks exist but no proxy_pass found\");\n\n        return { valid: errors.length === 0, errors, warnings };\n    }\n\n    static generateReverseProxy(domain: string, upstreamPort: number, ssl: boolean = true): string {\n        return `\nserver {\n    listen ${ssl ? \"443 ssl\" : \"80\"};\n    server_name ${domain};\n    ${ssl ? `ssl_certificate /etc/ssl/certs/${domain}.pem;\\n    ssl_certificate_key /etc/ssl/private/${domain}.key;` : \"\"}\n    location / {\n        proxy_pass http://localhost:${upstreamPort};\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n    location /static/ {\n        root /var/www;\n        expires 30d;\n        add_header Cache-Control \"public, immutable\";\n    }\n}\n`.trim();\n    }\n}\n\nclass CIPipelineWriter {\n    static githubActions(config: { name: string; nodeVersion?: string; testCmd?: string; buildCmd?: string; deploy?: boolean }): string {\n        return `\nname: ${config.name}\n\non:\n  push: { branches: [main] }\n  pull_request: { branches: [main] }\n\njobs:\n  quality:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [${config.nodeVersion || \"20\"}]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: \\${{ matrix.node-version }} }\n      - run: npm ci\n      - run: ${config.testCmd || \"npm test\"}\n      - run: ${config.buildCmd || \"npm run build\"}\n      ${config.deploy ? `\\n  deploy:\\n    needs: quality\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: actions/checkout@v4\\n      - run: echo \"Deploy step here\"` : \"\"}\n`.trim();\n    }\n\n    static gitlabCI(config: { image?: string; stages?: string[]; commands?: Record<string, string> }): string {\n        const stages = config.stages || [\"test\", \"build\", \"deploy\"];\n        return `\nimage: ${config.image || \"node:20-alpine\"}\n\nstages:${stages.map(s => `\\n  - ${s}`).join(\"\")}\n\n${stages.map(stage => `\n${stage}:\n  stage: ${stage}\n  script:\n    - ${(config.commands?.[stage] || `echo \"${stage} step\"`)}\n`).join(\"\")}\n`.trim();\n    }\n}\n\n// Demo\nconsole.log(\"Dockerfile:\\n\", DockerfileGenerator.node(\"node:20-alpine\", { port: 3000, startCmd: \"npm start\", buildCmd: \"npm run build\", env: { NODE_ENV: \"production\" } }));\nconsole.log(\"\\nNginx config:\\n\", NginxConfigValidator.generateReverseProxy(\"example.com\", 3000, false));\nconst nginxConfig = NginxConfigValidator.generateReverseProxy(\"example.com\", 3000, true);\nconsole.log(\"Nginx validation:\", JSON.stringify(NginxConfigValidator.validate(nginxConfig).errors));\nconsole.log(\"\\nCI Pipeline:\\n\", CIPipelineWriter.githubActions({ name: \"CI\", testCmd: \"npm test\", buildCmd: \"npm run build\", deploy: true }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// deployment\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'deployment', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deployment transforms development code into production services. Modern platforms like Vercel, Netlify, and Railway abstract infrastructure management. Docker containerizes applications for consistent deployment across environments. CI/CD pipelines automate testing and deployment. Monitoring with structured logging and health checks ensures production reliability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rollback-strategies",
      children: "Rollback Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rollbacks restore a previous known-good version when a deployment causes issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    A[Deploy v2.0] --> B{Health Check}\n    B -->|Pass| C[Gradual Traffic Shift]\n    B -->|Fail| D[Rollback to v1.0]\n    C --> E{Monitor 15min}\n    E -->|OK| F[Keep v2.0]\n    E -->|Errors| D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Database rollback with migration reversal\n// package.json script\n{\n  \"migrate:up\": \"prisma migrate deploy\",\n  \"migrate:down\": \"prisma migrate resolve --rolled-back\",\n  \"rollback\": \"npm run migrate:down && git revert HEAD --no-edit && git push\"\n}\n\n// Feature flag gated — disable feature without redeploy\nasync function getPricingPage() {\n  if (await featureFlags.isEnabled(\"new-pricing-v2\")) {\n    return renderNewPricing();\n  }\n  return renderLegacyPricing();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-flags-with-launchdarkly-pattern",
      children: "Feature Flags with LaunchDarkly Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feature flags decouple deployment from release — ship code dark and enable when ready."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Feature flag manager (LaunchDarkly-like pattern)\nclass FeatureFlags {\n  private store = new Map<string, boolean>();\n\n  async isEnabled(flag: string, userId?: string): Promise<boolean> {\n    // Check DB/Redis cache (1s TTL)\n    return this.store.get(flag) ?? false;\n  }\n\n  // Kill switch — disable immediately without redeploy\n  async setFlag(flag: string, enabled: boolean) {\n    await redis.set(`flag:${flag}`, enabled ? \"1\" : \"0\", \"EX\", 3600);\n    this.store.set(flag, enabled);\n  }\n}\n\n// Usage\nconst flags = new FeatureFlags();\n\nrouter.get(\"/checkout\", async (req, res) => {\n  if (await flags.isEnabled(\"new-checkout-ui\")) {\n    return res.render(\"checkout-v2\");\n  }\n  return res.render(\"checkout-v1\");\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canary-deployment",
      children: "Canary Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canary deployments route a small percentage of traffic to a new version."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.canary.yml\nservices:\n  app-stable:\n    image: myapp:v1.0\n    ports: [\"3001:3000\"]\n    environment:\n      - VERSION=stable\n\n  app-canary:\n    image: myapp:v2.0-canary\n    ports: [\"3002:3000\"]\n    environment:\n      - VERSION=canary\n\n# nginx — route 5% to canary\n# upstream app { server app-stable:3001 weight=95; server app-canary:3002 weight=5; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of multi-stage Docker builds?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do environment variables differ between development and production?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why should CI pipelines include type-checking and linting steps?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add a staging environment with its own database and domain"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement blue-green deployment strategy"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set up Sentry error tracking in production"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement environment-specific configuration with Zod validation per environment (development, staging, production)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set up a GitHub Actions workflow that deploys to a staging environment and runs smoke tests before promoting to production."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a feature flag system backed by Redis that allows toggling a dark-mode feature without redeploying."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a rollback script that reverts the last deployment by restoring the previous Docker image tag and reversing database migrations."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deploy a full-stack application (Next.js frontend + Express API + PostgreSQL) using Docker Compose on a VPS with custom domain, SSL via Let's Encrypt, automated backups, monitoring dashboard with Grafana, and CI/CD with GitHub Actions. Add canary deployment support that routes 5% of traffic to a new version, monitors error rates, and automatically rollbacks if the error rate exceeds 1%."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate env vars at startup"
        }), " — use Zod to validate all environment variables when the app boots. A startup crash is far easier to debug than a runtime failure from a missing variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use multi-stage Docker builds"
        }), " — separate deps, build, and runner stages keep production images minimal and secure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pin dependency versions in CI"
        }), " — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm install"
        }), ") for reproducible builds that match the lockfile exactly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layer caches"
        }), " — CDN for static assets, browser cache for API responses, service worker for offline fallback. Each layer reduces load on the next."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor with health checks"
        }), " — every service should expose a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/health"
        }), " endpoint that verifies connectivity to its critical dependencies (database, cache, external APIs)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature flags decouple deploy from release"
        }), " — ship code dark, enable when ready. A kill switch lets you disable broken features without rolling back."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canary deployments reduce blast radius"
        }), " — route 5% of traffic to new versions, monitor for 15-30 minutes, then promote or rollback."]
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