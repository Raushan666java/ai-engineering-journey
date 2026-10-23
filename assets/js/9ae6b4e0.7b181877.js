"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6105],{

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
const site_docs_courses_web_development_12_deployment_md_9ae_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/12-deployment","title":"Chapter 12: Deployment and DevOps","description":"Previous 13-security","source":"@site/docs/courses/web-development/12-deployment.md","sourceDirName":"courses/web-development","slug":"/web-development/12-deployment","permalink":"/ai-engineering-journey/web-development/12-deployment","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-deployment","slug":"/web-development/12-deployment","title":"Chapter 12: Deployment and DevOps","sidebar_label":"Chapter 12: Deployment and DevOps","sidebar_position":12},"sidebar":"course-web-development","previous":{"title":"Chapter 11: Databases in Web Applications","permalink":"/ai-engineering-journey/web-development/11-databases-web"},"next":{"title":"Chapter 13: Web Security","permalink":"/ai-engineering-journey/web-development/13-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    mermaid: "mermaid",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    A[Build Process Configuration]\r\n    B[Environment Variable Management]\r\n    A --> B\r\n    C[\"Vercel Deployment (Next.js)\"]\r\n    B --> C\r\n    D[\"Railway Deployment (Backend)\"]\r\n    C --> D\r\n    E[Docker Multi-Stage Builds]\r\n    D --> E\r\n    F[Docker Compose]\r\n    E --> F\r\n    G[CI/CD with GitHub Actions]\r\n    F --> G\r\n    H[Monitoring & Health Checks]\r\n    G --> H"
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
        children: "{\r\n  \"scripts\": {\r\n    \"dev\": \"next dev\",\r\n    \"build\": \"next build\",\r\n    \"start\": \"next start\",\r\n    \"lint\": \"next lint\",\r\n    \"type-check\": \"tsc --noEmit\"\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "environment-variables",
      children: "Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# .env.local - Development (not committed)\r\nDATABASE_URL=postgresql://localhost:5432/mydb\r\nJWT_SECRET=local_dev_secret\r\nAPI_URL=http://localhost:4000\r\n\r\n# .env.production - Production values set in hosting platform\r\nNEXT_PUBLIC_API_URL=https://api.example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Runtime validation with Zod\r\nimport { z } from \"zod\";\r\n\r\nconst envSchema = z.object({\r\n  DATABASE_URL: z.string().url(),\r\n  JWT_SECRET: z.string().min(32),\r\n  NODE_ENV: z.enum([\"development\", \"production\", \"test\"]),\r\n  REDIS_URL: z.string().url().optional(),\r\n  PORT: z.coerce.number().default(4000),\r\n});\r\n\r\nconst env = envSchema.parse(process.env);\r\nexport default env;\n"
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
        children: "# Install Vercel CLI\r\nnpm i -g vercel\r\n\r\n# Deploy\r\nvercel --prod\r\n\r\n# Set environment variables\r\nvercel env add DATABASE_URL production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verceljson",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vercel.json"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"framework\": \"nextjs\",\r\n  \"buildCommand\": \"npm run build\",\r\n  \"outputDirectory\": \".next\",\r\n  \"installCommand\": \"npm ci\",\r\n  \"env\": {\r\n    \"NEXT_PUBLIC_API_URL\": \"@api_url\"\r\n  },\r\n  \"headers\": [\r\n    {\r\n      \"source\": \"/(.*)\",\r\n      \"headers\": [\r\n        { \"key\": \"X-Frame-Options\", \"value\": \"DENY\" },\r\n        { \"key\": \"X-Content-Type-Options\", \"value\": \"nosniff\" },\r\n        { \"key\": \"Referrer-Policy\", \"value\": \"strict-origin-when-cross-origin\" }\r\n      ]\r\n    }\r\n  ]\r\n}\n"
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
        children: "# Install Railway CLI\r\nnpm i -g @railway/cli\r\n\r\n# Initialize\r\nrailway init\r\n\r\n# Deploy\r\nrailway up\r\n\r\n# Open logs\r\nrailway logs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "railwayjson",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "railway.json"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"build\": {\r\n    \"builder\": \"DOCKERFILE\",\r\n    \"dockerfilePath\": \"Dockerfile\"\r\n  },\r\n  \"deploy\": {\r\n    \"restartPolicyType\": \"ON_FAILURE\",\r\n    \"restartPolicyMaxRetries\": 10\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-docker-deployment",
      children: "12.4 Docker Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Multi-stage build for Node.js API\r\nFROM node:22-alpine AS deps\r\nWORKDIR /app\r\nCOPY package.json package-lock.json ./\r\nRUN npm ci --only=production\r\n\r\nFROM node:22-alpine AS builder\r\nWORKDIR /app\r\nCOPY package.json package-lock.json ./\r\nRUN npm ci\r\nCOPY . .\r\nRUN npm run build\r\n\r\nFROM node:22-alpine AS runner\r\nWORKDIR /app\r\nRUN addgroup --system --gid 1001 nodejs\r\nRUN adduser --system --uid 1001 appuser\r\nCOPY --from=builder /app/dist ./dist\r\nCOPY --from=deps /app/node_modules ./node_modules\r\nCOPY --from=builder /app/package.json ./\r\nUSER appuser\r\nEXPOSE 4000\r\nENV NODE_ENV=production\r\nCMD [\"node\", \"dist/index.js\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.yml for production-like environment\r\nversion: \"3.8\"\r\nservices:\r\n  app:\r\n    build: .\r\n    ports:\r\n      - \"4000:4000\"\r\n    environment:\r\n      - DATABASE_URL=postgresql://user:pass@db:5432/mydb\r\n      - REDIS_URL=redis://redis:6379\r\n    depends_on:\r\n      - db\r\n      - redis\r\n    restart: unless-stopped\r\n\r\n  db:\r\n    image: postgres:16-alpine\r\n    volumes:\r\n      - postgres_data:/var/lib/postgresql/data\r\n    environment:\r\n      - POSTGRES_USER=user\r\n      - POSTGRES_PASSWORD=pass\r\n      - POSTGRES_DB=mydb\r\n\r\n  redis:\r\n    image: redis:7-alpine\r\n    volumes:\r\n      - redis_data:/data\r\n\r\nvolumes:\r\n  postgres_data:\r\n  redis_data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-cicd-with-github-actions",
      children: "12.5 CI/CD with GitHub Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: CI/CD Pipeline\r\n\r\non:\r\n  push:\r\n    branches: [main]\r\n  pull_request:\r\n    branches: [main]\r\n\r\njobs:\r\n  quality:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-node@v4\r\n        with:\r\n          node-version: 22\r\n          cache: \"npm\"\r\n      - run: npm ci\r\n      - run: npm run type-check\r\n      - run: npm run lint\r\n      - run: npm run build\r\n\r\n  test:\r\n    needs: quality\r\n    runs-on: ubuntu-latest\r\n    services:\r\n      postgres:\r\n        image: postgres:16-alpine\r\n        env:\r\n          POSTGRES_PASSWORD: test\r\n        options: >-\r\n          --health-cmd pg_isready\r\n          --health-interval 10s\r\n          --health-timeout 5s\r\n          --health-retries 5\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-node@v4\r\n        with:\r\n          node-version: 22\r\n      - run: npm ci\r\n      - run: npx prisma migrate deploy\r\n        env:\r\n          DATABASE_URL: postgresql://postgres:test@localhost:5432/postgres\r\n      - run: npm test\r\n        env:\r\n          DATABASE_URL: postgresql://postgres:test@localhost:5432/postgres\r\n\r\n  deploy:\r\n    needs: test\r\n    if: github.ref == 'refs/heads/main'\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - name: Deploy to Railway\r\n        run: npx railway up --service my-api\r\n        env:\r\n          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-environment-specific-configuration",
      children: "12.6 Environment-Specific Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// config/index.ts\r\nimport { z } from \"zod\";\r\n\r\nconst envSchema = z.object({\r\n  NODE_ENV: z.enum([\"development\", \"staging\", \"production\", \"test\"]),\r\n  DATABASE_URL: z.string().url(),\r\n  REDIS_URL: z.string().url().optional(),\r\n  JWT_SECRET: z.string().min(32),\r\n  LOG_LEVEL: z.enum([\"debug\", \"info\", \"warn\", \"error\"]).default(\"info\"),\r\n  PORT: z.coerce.number().default(4000),\r\n  CORS_ORIGIN: z.string().default(\"http://localhost:3000\"),\r\n  SENTRY_DSN: z.string().url().optional(),\r\n});\r\n\r\nconst env = envSchema.parse(process.env);\r\nexport default env;\r\n\r\n// config/deploy.ts\r\ninterface DeployConfig {\r\n  environment: string;\r\n  domain: string;\r\n  scale: { min: number; max: number };\r\n  features: { maintenance: boolean; beta: boolean };\r\n}\r\n\r\nconst deployConfigs: Record<string, DeployConfig> = {\r\n  development: {\r\n    environment: \"dev\",\r\n    domain: \"localhost:3000\",\r\n    scale: { min: 1, max: 1 },\r\n    features: { maintenance: false, beta: true },\r\n  },\r\n  staging: {\r\n    environment: \"stg\",\r\n    domain: \"staging.example.com\",\r\n    scale: { min: 1, max: 2 },\r\n    features: { maintenance: false, beta: true },\r\n  },\r\n  production: {\r\n    environment: \"prd\",\r\n    domain: \"example.com\",\r\n    scale: { min: 2, max: 10 },\r\n    features: { maintenance: false, beta: false },\r\n  },\r\n};\r\n\r\nexport function getDeployConfig(env: string): DeployConfig {\r\n  return deployConfigs[env] ?? deployConfigs.development;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-monitoring-and-logging",
      children: "12.7 Monitoring and Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import pino from \"pino\";\r\n\r\nconst logger = pino({\r\n  level: process.env.LOG_LEVEL ?? \"info\",\r\n  transport:\r\n    process.env.NODE_ENV === \"development\"\r\n      ? { target: \"pino-pretty\" }\r\n      : undefined,\r\n  redact: [\"req.headers.authorization\", \"req.body.password\"],\r\n});\r\n\r\n// Express middleware\r\napp.use((req, res, next) => {\r\n  const start = Date.now();\r\n  res.on(\"finish\", () => {\r\n    logger.info({\r\n      method: req.method,\r\n      url: req.url,\r\n      status: res.statusCode,\r\n      duration: Date.now() - start,\r\n    });\r\n  });\r\n  next();\r\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-pipeline-architecture",
      children: "Deployment Pipeline Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph LR\r\n    A[Git Push] --> B[GitHub Actions]\r\n    B --> C{Lint & Type Check}\r\n    C -->|Pass| D[Run Tests]\r\n    D -->|Pass| E[Build]\r\n    E --> F[Deploy to Staging]\r\n    F --> G[Smoke Tests]\r\n    G -->|Pass| H[Deploy to Production]\r\n    H --> I[Health Check Monitor]\r\n    I -->|Healthy| J[Done]\r\n    I -->|Unhealthy| K[Rollback]\r\n    K --> L[Previous Version]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-check-endpoint",
      children: "Health Check Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "app.get(\"/api/health\", async (req, res) => {\r\n  const checks = {\r\n    database: false,\r\n    redis: false,\r\n    uptime: process.uptime(),\r\n    timestamp: new Date().toISOString(),\r\n  };\r\n\r\n  try {\r\n    await prisma.$queryRaw`SELECT 1`;\r\n    checks.database = true;\r\n  } catch {}\r\n\r\n  try {\r\n    await redis.ping();\r\n    checks.redis = true;\r\n  } catch {}\r\n\r\n  const healthy = Object.values(checks).every((v) => v === true || typeof v === \"number\");\r\n  res.status(healthy ? 200 : 503).json({ status: healthy ? \"healthy\" : \"degraded\", checks });\r\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!TIP]\r\nAlways validate environment variables at startup with a Zod schema. A startup failure is far easier to debug than a mysterious runtime crash from a missing variable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\r\nNever commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env.local"
        }), " files. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env.example"
        }), " with placeholder values as a template that is committed to the repository."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\r\nMulti-stage Docker builds keep production images small by separating build dependencies from runtime dependencies. The final stage should only contain what is needed to run the application."
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
        children: "class CICDPipeline {\r\n  readonly stages: string[] = [];\r\n  private results: Map<string, boolean> = new Map();\r\n\r\n  addStage(name: string): void { this.stages.push(name); }\r\n  async run(): Promise<boolean> {\r\n    for (const stage of this.stages) {\r\n      console.log(`Running stage: ${stage}...`);\r\n      const success = await this.executeStage(stage);\r\n      this.results.set(stage, success);\r\n      if (!success) { console.log(`FAILED at: ${stage}`); return false; }\r\n    }\r\n    return true;\r\n  }\r\n  private async executeStage(stage: string): Promise<boolean> {\r\n    await new Promise(r => setTimeout(r, 50));\r\n    return !stage.includes(\"fail\");\r\n  }\r\n}\r\n\r\nclass HealthChecker {\r\n  static async check(url: string, timeout: number = 5000): Promise<{ status: number; latency: number; healthy: boolean }> {\r\n    const start = Date.now();\r\n    try {\r\n      const res = await fetch(url, { signal: AbortSignal.timeout(timeout) });\r\n      return { status: res.status, latency: Date.now() - start, healthy: res.status < 500 };\r\n    } catch { return { status: 0, latency: Date.now() - start, healthy: false }; }\r\n  }\r\n}\r\n\r\nclass DockerComposeGenerator {\r\n  static compose(services: Array<{ name: string; image: string; port?: number; env?: Record<string, string> }>): string {\r\n    const svcs = services.map(s => `  ${s.name}:\\n    image: ${s.image}${s.port ? `\\n    ports:\\n      - \"${s.port}:${s.port}\"` : \"\"}${s.env ? `\\n    environment:\\n${Object.entries(s.env).map(([k, v]) => `      ${k}=${v}`).join(\"\\n\")}` : \"\"}`);\r\n    return `version: \"3.8\"\\nservices:\\n${svcs.join(\"\\n\")}`;\r\n  }\r\n}\r\n\r\nconst pipe = new CICDPipeline();\r\npipe.addStage(\"lint\"); pipe.addStage(\"test\"); pipe.addStage(\"build\");\r\nconsole.log(\"Pipeline:\", pipe.stages.join(\" -> \"));\r\nconsole.log(\"Docker:\", DockerComposeGenerator.compose([{ name: \"app\", image: \"node:18\", port: 3000 }]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-dockerfile-generator-nginx-config-validator-ci-pipeline-writer",
      children: "TypeScript Implementation: Dockerfile Generator, Nginx Config Validator, CI Pipeline Writer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DockerfileGenerator {\r\n    static node(baseImage: string = \"node:20-alpine\", options?: {\r\n        port?: number; workdir?: string; buildCmd?: string; startCmd?: string;\r\n        env?: Record<string, string>; extraSteps?: string[]\r\n    }): string {\r\n        const opts = options || {};\r\n        const lines: string[] = [\r\n            `FROM ${baseImage}`,\r\n            `WORKDIR ${opts.workdir || \"/app\"}`,\r\n        ];\r\n        if (opts.env) {\r\n            for (const [k, v] of Object.entries(opts.env)) lines.push(`ENV ${k}=${v}`);\r\n        }\r\n        lines.push(\r\n            `COPY package*.json ./`,\r\n            `RUN npm ci --only=production`,\r\n            `COPY . .`,\r\n        );\r\n        if (opts.buildCmd) lines.push(`RUN ${opts.buildCmd}`);\r\n        if (opts.extraSteps) lines.push(...opts.extraSteps);\r\n        lines.push(`EXPOSE ${opts.port || 3000}`);\r\n        lines.push(`CMD [\"${(opts.startCmd || \"node index.js\").split(\" \").join('\", \"')}\"]`);\r\n        return lines.join(\"\\n\");\r\n    }\r\n\r\n    static multiStage(nodeVersion: string = \"20\"): string {\r\n        return `\r\nFROM node:${nodeVersion}-alpine AS builder\r\nWORKDIR /build\r\nCOPY package*.json ./\r\nRUN npm ci\r\nCOPY . .\r\nRUN npm run build\r\n\r\nFROM node:${nodeVersion}-alpine AS runner\r\nWORKDIR /app\r\nCOPY --from=builder /build/dist ./dist\r\nCOPY --from=builder /build/node_modules ./node_modules\r\nCOPY package*.json ./\r\nEXPOSE 3000\r\nCMD [\"node\", \"dist/index.js\"]\r\n`.trim();\r\n    }\r\n\r\n    static dockerignore(): string {\r\n        return `node_modules\\n.git\\n.env\\n*.md\\ndist\\ncoverage\\n.gitignore\\n.DS_Store\\n`;\r\n    }\r\n}\r\n\r\nclass NginxConfigValidator {\r\n    static validate(config: string): { valid: boolean; errors: string[]; warnings: string[] } {\r\n        const errors: string[] = []; const warnings: string[] = [];\r\n        const lines = config.split(\"\\n\");\r\n\r\n        let hasServer = false; let hasListen = false; let braceCount = 0;\r\n        let inLocation = false; let hasProxyPass = false;\r\n\r\n        for (let i = 0; i < lines.length; i++) {\r\n            const line = lines[i].trim();\r\n            if (line.startsWith(\"#\") || line === \"\") continue;\r\n\r\n            if (line.includes(\"{\")) braceCount++;\r\n            if (line.includes(\"}\")) braceCount--;\r\n            if (line.includes(\"server {\")) hasServer = true;\r\n            if (line.startsWith(\"listen\")) { hasListen = true; if (line.includes(\"80\") && !line.includes(\"443\")) warnings.push(`Line ${i+1}: HTTP only (port 80), consider HTTPS`); }\r\n            if (line.startsWith(\"location\")) inLocation = true;\r\n            if (line.includes(\"proxy_pass\")) hasProxyPass = true;\r\n            if (line.includes(\"ssl_certificate\") && !line.includes(\".pem\") && !line.includes(\".crt\")) errors.push(`Line ${i+1}: SSL certificate path may be invalid`);\r\n            if (line.match(/server_name\\s+_/)) warnings.push(`Line ${i+1}: Catch-all server_name _ may cause routing issues`);\r\n        }\r\n\r\n        if (braceCount !== 0) errors.push(`Unmatched braces (${braceCount > 0 ? \"excess open\" : \"excess close\"})`);\r\n        if (!hasServer) errors.push(\"No server block defined\");\r\n        if (!hasListen) errors.push(\"No listen directive\");\r\n        if (inLocation && !hasProxyPass) warnings.push(\"Location blocks exist but no proxy_pass found\");\r\n\r\n        return { valid: errors.length === 0, errors, warnings };\r\n    }\r\n\r\n    static generateReverseProxy(domain: string, upstreamPort: number, ssl: boolean = true): string {\r\n        return `\r\nserver {\r\n    listen ${ssl ? \"443 ssl\" : \"80\"};\r\n    server_name ${domain};\r\n    ${ssl ? `ssl_certificate /etc/ssl/certs/${domain}.pem;\\n    ssl_certificate_key /etc/ssl/private/${domain}.key;` : \"\"}\r\n    location / {\r\n        proxy_pass http://localhost:${upstreamPort};\r\n        proxy_set_header Host $host;\r\n        proxy_set_header X-Real-IP $remote_addr;\r\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\r\n        proxy_set_header X-Forwarded-Proto $scheme;\r\n    }\r\n    location /static/ {\r\n        root /var/www;\r\n        expires 30d;\r\n        add_header Cache-Control \"public, immutable\";\r\n    }\r\n}\r\n`.trim();\r\n    }\r\n}\r\n\r\nclass CIPipelineWriter {\r\n    static githubActions(config: { name: string; nodeVersion?: string; testCmd?: string; buildCmd?: string; deploy?: boolean }): string {\r\n        return `\r\nname: ${config.name}\r\n\r\non:\r\n  push: { branches: [main] }\r\n  pull_request: { branches: [main] }\r\n\r\njobs:\r\n  quality:\r\n    runs-on: ubuntu-latest\r\n    strategy:\r\n      matrix:\r\n        node-version: [${config.nodeVersion || \"20\"}]\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-node@v4\r\n        with: { node-version: \\${{ matrix.node-version }} }\r\n      - run: npm ci\r\n      - run: ${config.testCmd || \"npm test\"}\r\n      - run: ${config.buildCmd || \"npm run build\"}\r\n      ${config.deploy ? `\\n  deploy:\\n    needs: quality\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: actions/checkout@v4\\n      - run: echo \"Deploy step here\"` : \"\"}\r\n`.trim();\r\n    }\r\n\r\n    static gitlabCI(config: { image?: string; stages?: string[]; commands?: Record<string, string> }): string {\r\n        const stages = config.stages || [\"test\", \"build\", \"deploy\"];\r\n        return `\r\nimage: ${config.image || \"node:20-alpine\"}\r\n\r\nstages:${stages.map(s => `\\n  - ${s}`).join(\"\")}\r\n\r\n${stages.map(stage => `\r\n${stage}:\r\n  stage: ${stage}\r\n  script:\r\n    - ${(config.commands?.[stage] || `echo \"${stage} step\"`)}\r\n`).join(\"\")}\r\n`.trim();\r\n    }\r\n}\r\n\r\n// Demo\r\nconsole.log(\"Dockerfile:\\n\", DockerfileGenerator.node(\"node:20-alpine\", { port: 3000, startCmd: \"npm start\", buildCmd: \"npm run build\", env: { NODE_ENV: \"production\" } }));\r\nconsole.log(\"\\nNginx config:\\n\", NginxConfigValidator.generateReverseProxy(\"example.com\", 3000, false));\r\nconst nginxConfig = NginxConfigValidator.generateReverseProxy(\"example.com\", 3000, true);\r\nconsole.log(\"Nginx validation:\", JSON.stringify(NginxConfigValidator.validate(nginxConfig).errors));\r\nconsole.log(\"\\nCI Pipeline:\\n\", CIPipelineWriter.githubActions({ name: \"CI\", testCmd: \"npm test\", buildCmd: \"npm run build\", deploy: true }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// deployment\r\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\r\nclass Processor {\r\nprivate tasks: Task[] = []\r\nprivate maxConcurrency: number\r\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\r\nasync add(task: Omit<Task, \"status\">): Promise<void> {\r\nthis.tasks.push({ ...task, status: \"pending\" })\r\n}\r\nasync runAll(): Promise<void> {\r\nconst running: Promise<void>[] = []\r\nfor (const t of this.tasks) {\r\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\r\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\r\nrunning.push(p)\r\n}\r\nawait Promise.all(running)\r\n}\r\nprivate async execute(t: Task): Promise<void> {\r\nt.status = \"running\"\r\nawait new Promise(r => setTimeout(r, 10))\r\nt.status = \"done\"\r\n}\r\ngetResults(): Task[] { return this.tasks }\r\ngetStats(): { done: number; pending: number; running: number } {\r\nconst done = this.tasks.filter(t => t.status === \"done\").length\r\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\r\nconst running = this.tasks.filter(t => t.status === \"running\").length\r\nreturn { done, pending, running }\r\n}\r\n}\r\nasync function main() {\r\nconst proc = new Processor(2)\r\nawait proc.add({ id: '1', name: 'deployment', data: { topic: 'fullstack-frontend-backend' } })\r\nawait proc.runAll()\r\nconsole.log('Stats:', proc.getStats())\r\n}\r\nmain().catch(console.error)\r\nexport { Processor, Task }"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph LR\r\n    A[Deploy v2.0] --> B{Health Check}\r\n    B -->|Pass| C[Gradual Traffic Shift]\r\n    B -->|Fail| D[Rollback to v1.0]\r\n    C --> E{Monitor 15min}\r\n    E -->|OK| F[Keep v2.0]\r\n    E -->|Errors| D"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Database rollback with migration reversal\r\n// package.json script\r\n{\r\n  \"migrate:up\": \"prisma migrate deploy\",\r\n  \"migrate:down\": \"prisma migrate resolve --rolled-back\",\r\n  \"rollback\": \"npm run migrate:down && git revert HEAD --no-edit && git push\"\r\n}\r\n\r\n// Feature flag gated — disable feature without redeploy\r\nasync function getPricingPage() {\r\n  if (await featureFlags.isEnabled(\"new-pricing-v2\")) {\r\n    return renderNewPricing();\r\n  }\r\n  return renderLegacyPricing();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-flags-with-launchdarkly-pattern",
      children: "Feature Flags with LaunchDarkly Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feature flags decouple deployment from release — ship code dark and enable when ready."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Feature flag manager (LaunchDarkly-like pattern)\r\nclass FeatureFlags {\r\n  private store = new Map<string, boolean>();\r\n\r\n  async isEnabled(flag: string, userId?: string): Promise<boolean> {\r\n    // Check DB/Redis cache (1s TTL)\r\n    return this.store.get(flag) ?? false;\r\n  }\r\n\r\n  // Kill switch — disable immediately without redeploy\r\n  async setFlag(flag: string, enabled: boolean) {\r\n    await redis.set(`flag:${flag}`, enabled ? \"1\" : \"0\", \"EX\", 3600);\r\n    this.store.set(flag, enabled);\r\n  }\r\n}\r\n\r\n// Usage\r\nconst flags = new FeatureFlags();\r\n\r\nrouter.get(\"/checkout\", async (req, res) => {\r\n  if (await flags.isEnabled(\"new-checkout-ui\")) {\r\n    return res.render(\"checkout-v2\");\r\n  }\r\n  return res.render(\"checkout-v1\");\r\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canary-deployment",
      children: "Canary Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canary deployments route a small percentage of traffic to a new version."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.canary.yml\r\nservices:\r\n  app-stable:\r\n    image: myapp:v1.0\r\n    ports: [\"3001:3000\"]\r\n    environment:\r\n      - VERSION=stable\r\n\r\n  app-canary:\r\n    image: myapp:v2.0-canary\r\n    ports: [\"3002:3000\"]\r\n    environment:\r\n      - VERSION=canary\r\n\r\n# nginx — route 5% to canary\r\n# upstream app { server app-stable:3001 weight=95; server app-canary:3002 weight=5; }\n"
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



/***/ }

}]);