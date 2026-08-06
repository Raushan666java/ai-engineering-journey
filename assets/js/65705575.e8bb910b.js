"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[65715],{

/***/ 78269
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_09_rest_apis_md_657_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-09-rest-apis-md-657.json
const site_docs_courses_web_development_09_rest_apis_md_657_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/09-rest-apis","title":"Chapter 9: REST APIs and API Design","description":"Previous 10-auth","source":"@site/docs/courses/web-development/09-rest-apis.md","sourceDirName":"courses/web-development","slug":"/web-development/09-rest-apis","permalink":"/ai-engineering-journey/web-development/09-rest-apis","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-rest-apis","slug":"/web-development/09-rest-apis","title":"Chapter 9: REST APIs and API Design","sidebar_label":"Chapter 9: REST APIs and API Design","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Chapter 8 → Node.js and Express","permalink":"/ai-engineering-journey/web-development/08-node-express"},"next":{"title":"Chapter 10: Authentication and Authorization","permalink":"/ai-engineering-journey/web-development/10-auth"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/09-rest-apis.md


const frontMatter = {
	id: '09-rest-apis',
	slug: '/web-development/09-rest-apis',
	title: 'Chapter 9: REST APIs and API Design',
	sidebar_label: 'Chapter 9: REST APIs and API Design',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: REST APIs and API Design';

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
  "value": "9.1 Principles of REST",
  "id": "91-principles-of-rest",
  "level": 2
}, {
  "value": "Core Constraints",
  "id": "core-constraints",
  "level": 3
}, {
  "value": "Resource Naming",
  "id": "resource-naming",
  "level": 3
}, {
  "value": "9.2 Express REST API Implementation",
  "id": "92-express-rest-api-implementation",
  "level": 2
}, {
  "value": "9.3 OpenAPI Documentation",
  "id": "93-openapi-documentation",
  "level": 2
}, {
  "value": "9.4 API Versioning Strategies",
  "id": "94-api-versioning-strategies",
  "level": 2
}, {
  "value": "9.5 Bulk Operations",
  "id": "95-bulk-operations",
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
  "value": "Pagination Best Practices",
  "id": "pagination-best-practices",
  "level": 3
}, {
  "value": "Error Handling API Pattern",
  "id": "error-handling-api-pattern",
  "level": 3
}, {
  "value": "TypeScript: REST API Client Builder &amp; Endpoint Tester",
  "id": "typescript-rest-api-client-builder--endpoint-tester",
  "level": 3
}, {
  "value": "TypeScript Implementation: Route Table Generator, OpenAPI Validator, HATEOAS Link Builder",
  "id": "typescript-implementation-route-table-generator-openapi-validator-hateoas-link-builder",
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
        id: "chapter-9-rest-apis-and-api-design",
        children: "Chapter 9: REST APIs and API Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/08-node-express",
          children: "08-node-express"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/10-auth",
          children: "10-auth"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " REST APIs organize endpoints around resources identified by URIs and manipulated via HTTP methods."]
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
        href: "../../assets/images/lessons/web-development/09-rest-apis/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/09-rest-apis/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/09-rest-apis/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/09-rest-apis/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/09-rest-apis/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/09-rest-apis/visual-explanation.png",
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
        }), " Plural noun resource names with consistent URL hierarchy create intuitive, self-documenting APIs."]
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
            children: "REST Principles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Six constraints including stateless, cacheable, uniform interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use plural nouns for resources, HTTP methods for actions, nested URIs for relations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps HTTP methods + URL patterns to handler functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep resource names plural, use params for IDs, query params for filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zod schemas parse and validate request bodies and query params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate at the boundary — parse input before it reaches business logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured error responses with code, message, and details fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use consistent error shape across all endpoints for client-side handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI/Swagger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML/JSON specification documents the entire API surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-generate client SDKs and interactive docs from the spec file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URI, header, or query-parameter strategies for backward compat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefer URI versioning ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/v1/"
            }), " for simplicity; header versioning for cleaner URLs"]
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
        }), " Input validation at the boundary using Zod catches malformed data before business logic runs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[REST Constraints]\n    B[Resource Naming Conventions]\n    A --> B\n    C[Express Route Implementation]\n    B --> C\n    D[Input Validation with Zod]\n    C --> D\n    E[Structured Error Handling]\n    D --> E\n    F[Pagination & Filtering]\n    E --> F\n    G[OpenAPI Documentation]\n    F --> G\n    H[Versioning & Bulk Operations]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design RESTful APIs following resource-oriented principles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement proper URI naming conventions and HTTP method usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle request validation, pagination, filtering, and sorting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement error handling with appropriate HTTP status codes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document APIs using OpenAPI/Swagger specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test APIs with automated integration tests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-principles-of-rest",
      children: "9.1 Principles of REST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Structured error responses with codes and details enable robust client-side error handling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/09-rest-apis.png",
        alt: "REST APIs Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs are built around resources, which are identified by URIs and manipulated through standard HTTP methods."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-constraints",
      children: "Core Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateless"
        }), ": Each request contains all information needed to process it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client-Server"
        }), ": Separation of concerns between frontend and backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cacheable"
        }), ": Responses must define themselves as cacheable or not"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layered System"
        }), ": Intermediate servers can improve scalability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Uniform Interface"
        }), ": Consistent interaction between components"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-naming",
      children: "Resource Naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Good - plural nouns, consistent hierarchy\nGET    /api/users\nGET    /api/users/:id\nPOST   /api/users\nPUT    /api/users/:id\nDELETE /api/users/:id\n\n// Nested resources\nGET    /api/users/:id/posts\nPOST   /api/users/:id/posts\nGET    /api/posts/:id/comments\n\n// Bad - verbs in URLs, inconsistent conventions\nGET    /api/getUsers\nPOST   /api/createUser\nGET    /api/userInfo\nPUT    /api/update_user\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-express-rest-api-implementation",
      children: "9.2 Express REST API Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " OpenAPI specifications generate documentation, client SDKs, and automated test suites."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import express, { Request, Response, NextFunction } from \"express\";\nimport { z } from \"zod\";\n\nconst app = express();\napp.use(express.json());\n\n// --- Type Definitions ---\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n  createdAt: Date;\n}\n\n// In-memory store (replace with database in production)\nconst users: User[] = [];\n\n// --- Validation Schemas ---\nconst createUserSchema = z.object({\n  name: z.string().min(1).max(100),\n  email: z.string().email(),\n});\n\nconst updateUserSchema = z.object({\n  name: z.string().min(1).max(100).optional(),\n  email: z.string().email().optional(),\n});\n\nconst querySchema = z.object({\n  page: z.coerce.number().int().positive().default(1),\n  pageSize: z.coerce.number().int().positive().max(100).default(20),\n  sort: z.enum([\"name\", \"email\", \"createdAt\"]).default(\"createdAt\"),\n  order: z.enum([\"asc\", \"desc\"]).default(\"asc\"),\n  search: z.string().optional(),\n});\n\n// --- Routes ---\n\n// POST /api/users - Create a user\napp.post(\"/api/users\", (req: Request, res: Response, next: NextFunction) => {\n  try {\n    const input = createUserSchema.parse(req.body);\n    const existing = users.find((u) => u.email === input.email);\n    if (existing) {\n      return res.status(409).json({\n        error: {\n          code: \"CONFLICT\",\n          message: \"A user with this email already exists\",\n        },\n      });\n    }\n    const user: User = {\n      id: crypto.randomUUID(),\n      ...input,\n      createdAt: new Date(),\n    };\n    users.push(user);\n    res.status(201).json({ data: user });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// GET /api/users - List users with pagination, filtering, sorting\napp.get(\"/api/users\", (req: Request, res: Response, next: NextFunction) => {\n  try {\n    const query = querySchema.parse(req.query);\n    let filtered = [...users];\n\n    if (query.search) {\n      const term = query.search.toLowerCase();\n      filtered = filtered.filter(\n        (u) =>\n          u.name.toLowerCase().includes(term) ||\n          u.email.toLowerCase().includes(term)\n      );\n    }\n\n    const total = filtered.length;\n\n    filtered.sort((a, b) => {\n      const aVal = a[query.sort];\n      const bVal = b[query.sort];\n      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;\n      return query.order === \"desc\" ? -cmp : cmp;\n    });\n\n    const skip = (query.page - 1) * query.pageSize;\n    const paginated = filtered.slice(skip, skip + query.pageSize);\n\n    res.json({\n      data: paginated,\n      pagination: {\n        page: query.page,\n        pageSize: query.pageSize,\n        total,\n        totalPages: Math.ceil(total / query.pageSize),\n      },\n    });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// GET /api/users/:id - Get a single user\napp.get(\"/api/users/:id\", (req: Request, res: Response, next: NextFunction) => {\n  try {\n    const user = users.find((u) => u.id === req.params.id);\n    if (!user) {\n      return res.status(404).json({\n        error: { code: \"NOT_FOUND\", message: \"User not found\" },\n      });\n    }\n    res.json({ data: user });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// PUT /api/users/:id - Full update\napp.put(\"/api/users/:id\", (req: Request, res: Response, next: NextFunction) => {\n  try {\n    const input = updateUserSchema.parse(req.body);\n    const index = users.findIndex((u) => u.id === req.params.id);\n    if (index === -1) {\n      return res.status(404).json({\n        error: { code: \"NOT_FOUND\", message: \"User not found\" },\n      });\n    }\n    users[index] = { ...users[index], ...input };\n    res.json({ data: users[index] });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// PATCH /api/users/:id - Partial update\napp.patch(\"/api/users/:id\", (req: Request, res: Response, next: NextFunction) => {\n  try {\n    const input = updateUserSchema.parse(req.body);\n    const index = users.findIndex((u) => u.id === req.params.id);\n    if (index === -1) {\n      return res.status(404).json({\n        error: { code: \"NOT_FOUND\", message: \"User not found\" },\n      });\n    }\n    Object.assign(users[index], input);\n    res.json({ data: users[index] });\n  } catch (err) {\n    next(err);\n  }\n});\n\n// DELETE /api/users/:id\napp.delete(\"/api/users/:id\", (req: Request, res: Response, next: NextFunction) => {\n  try {\n    const index = users.findIndex((u) => u.id === req.params.id);\n    if (index === -1) {\n      return res.status(404).json({\n        error: { code: \"NOT_FOUND\", message: \"User not found\" },\n      });\n    }\n    users.splice(index, 1);\n    res.status(204).send();\n  } catch (err) {\n    next(err);\n  }\n});\n\n// --- Error Handling Middleware ---\napp.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {\n  if (err instanceof z.ZodError) {\n    return res.status(400).json({\n      error: {\n        code: \"VALIDATION_ERROR\",\n        message: \"Invalid request data\",\n        details: err.errors.map((e) => ({\n          field: e.path.join(\".\"),\n          message: e.message,\n        })),\n      },\n    });\n  }\n  console.error(\"Unhandled error:\", err);\n  res.status(500).json({\n    error: { code: \"INTERNAL_ERROR\", message: \"An unexpected error occurred\" },\n  });\n});\n\napp.listen(3000, () => console.log(\"API running on port 3000\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-openapi-documentation",
      children: "9.3 OpenAPI Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " API versioning ensures backward compatibility as the API evolves over time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "openapi: 3.1.0\ninfo:\n  title: TaskFlow API\n  version: 1.0.0\n  description: API for TaskFlow task management application\n\nservers:\n  - url: https://api.taskflow.com/v1\n    description: Production server\n  - url: http://localhost:4000\n    description: Development server\n\npaths:\n  /users:\n    get:\n      summary: List all users\n      parameters:\n        - name: page\n          in: query\n          schema: { type: integer, default: 1 }\n        - name: pageSize\n          in: query\n          schema: { type: integer, default: 20 }\n        - name: sort\n          in: query\n          schema:\n            type: string\n            enum: [name, email, createdAt]\n        - name: search\n          in: query\n          schema: { type: string }\n      responses:\n        \"200\":\n          description: Paginated list of users\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  data:\n                    type: array\n                    items:\n                      $ref: \"#/components/schemas/User\"\n                  pagination:\n                    $ref: \"#/components/schemas/Pagination\"\n\n    post:\n      summary: Create a new user\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: \"#/components/schemas/CreateUserInput\"\n      responses:\n        \"201\":\n          description: User created\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  data:\n                    $ref: \"#/components/schemas/User\"\n        \"409\":\n          description: Email conflict\n\ncomponents:\n  schemas:\n    User:\n      type: object\n      properties:\n        id:\n          type: string\n          format: uuid\n        name:\n          type: string\n        email:\n          type: string\n          format: email\n        createdAt:\n          type: string\n          format: date-time\n    CreateUserInput:\n      type: object\n      required: [name, email]\n      properties:\n        name:\n          type: string\n          minLength: 1\n          maxLength: 100\n        email:\n          type: string\n          format: email\n    Pagination:\n      type: object\n      properties:\n        page: { type: integer }\n        pageSize: { type: integer }\n        total: { type: integer }\n        totalPages: { type: integer }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-api-versioning-strategies",
      children: "9.4 API Versioning Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Strategy 1: URI versioning (most common)\napp.use(\"/api/v1/users\", v1UserRouter);\napp.use(\"/api/v2/users\", v2UserRouter);\n\n// Strategy 2: Header versioning\napp.use(\"/api/users\", (req, res, next) => {\n  const version = req.headers[\"accept-version\"];\n  if (version === \"2\") return v2UserRouter(req, res, next);\n  return v1UserRouter(req, res, next);\n});\n\n// Strategy 3: Query parameter versioning\napp.use(\"/api/users\", (req, res, next) => {\n  const version = req.query.apiVersion;\n  if (version === \"2\") return v2UserRouter(req, res, next);\n  return v1UserRouter(req, res, next);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-bulk-operations",
      children: "9.5 Bulk Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// POST /api/users/bulk - Create multiple users\napp.post(\"/api/users/bulk\", async (req, res, next) => {\n  try {\n    const input = z.array(createUserSchema).parse(req.body);\n    const created = await Promise.all(\n      input.map(async (u) => {\n        const user = await db.user.create({ data: u });\n        return user;\n      })\n    );\n    res.status(201).json({ data: created, count: created.length });\n  } catch (err) {\n    next(err);\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z.coerce.number()"
        }), " to automatically convert query string values to numbers in Zod schemas — query params are always strings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nNever expose internal IDs like database primary keys in API responses. Use UUIDs or slugs for public resource identifiers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nPUT replaces the entire resource while PATCH applies partial modifications. Clients should know which one your API expects."
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
            children: "PUT vs PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full resource replacement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URI vs Header versioning"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Simple ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/v1/"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "/v2/"
            }), " in the path"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Clean URLs, client sets ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Accept-Version"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Offset vs Cursor pagination"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?page=1&limit=20"
            }), ", random access"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?cursor=abc"
            }), ", stable under writes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zod vs manual validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative schemas, type inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error-prone, verbose, no types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSON API vs REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict spec, compound documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose guidelines, resource-oriented"
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
            children: "REST Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless, Client-Server, Cacheable, Layered System, Uniform Interface, Code on Demand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Status Code Ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2xx Success, 3xx Redirection, 4xx Client Error, 5xx Server Error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common Codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable, 429 Rate Limited, 500 Server Error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zod Methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".parse()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".safeParse()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".coerce."
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".optional()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".default()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".refine()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI Fields"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "openapi"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "info"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "servers"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "paths"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "components"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "schemas"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "parameters"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "requestBody"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "responses"
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
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTful product, cart, order endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized CRUD operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested post/comment/like resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural resource hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pagination, filtering, sorting on list endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient data browsing at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile Backend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI spec generates mobile client SDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe mobile API consumption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioned endpoints for service-to-service calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe parallel evolution of services"
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
        children: "Q1. Which HTTP method should be used to partially update a resource?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) PUT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) POST"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) PATCH"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) UPDATE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "C) PATCH applies partial modifications to a resource. PUT replaces the entire resource."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. What HTTP status code indicates a resource was successfully created?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 200"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 201"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 202"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 204"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) 201 Created is returned after successfully creating a resource via POST."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q3. What is the purpose of Zod's ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".parse()"
        }), " method?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Transform data into a different format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Validate input and return typed data or throw"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Parse JSON strings into objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Generate API documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".parse()"
            }), " validates the input against the schema and returns the typed data, or throws a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ZodError"
            }), " with validation details."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. When should you use cursor-based pagination over offset-based?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) When the data set is small"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When items are frequently added or removed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When using SQL databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) When building a mobile app"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Cursor-based pagination is stable when items are inserted or deleted between page requests, unlike offset pagination which can skip or duplicate items."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pagination-best-practices",
      children: "Pagination Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Cursor-based pagination (stable with insertions/deletions)\ninterface CursorPage<T> {\n  data: T[];\n  nextCursor: string | null;\n  hasMore: boolean;\n}\n\nasync function paginatePosts(cursor?: string, limit = 20): Promise<CursorPage<Post>> {\n  const posts = await prisma.post.findMany({\n    take: limit + 1, // fetch one extra to check hasMore\n    ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),\n    orderBy: { createdAt: \"desc\" },\n  });\n\n  const hasMore = posts.length > limit;\n  const data = hasMore ? posts.slice(0, limit) : posts;\n\n  return {\n    data,\n    nextCursor: hasMore ? data[data.length - 1].id : null,\n    hasMore,\n  };\n}\n\n// Offset-based pagination (simpler, unstable with mutations)\ninterface OffsetPage<T> {\n  data: T[];\n  page: number;\n  totalPages: number;\n  total: number;\n  hasNext: boolean;\n  hasPrev: boolean;\n}\n\napp.get(\"/api/posts\", async (req, res) => {\n  const page = Math.max(1, Number(req.query.page) || 1);\n  const limit = Math.min(100, Number(req.query.limit) || 20);\n  const skip = (page - 1) * limit;\n\n  const [data, total] = await Promise.all([\n    prisma.post.findMany({ skip, take: limit }),\n    prisma.post.count(),\n  ]);\n\n  res.json({\n    data,\n    page,\n    totalPages: Math.ceil(total / limit),\n    total,\n    hasNext: page * limit < total,\n    hasPrev: page > 1,\n  } satisfies OffsetPage<Post>);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-handling-api-pattern",
      children: "Error Handling API Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Standardized API error shape\ninterface ApiError {\n  status: number;\n  code: string;\n  message: string;\n  details?: Record<string, string[]>;\n  requestId?: string;\n}\n\n// Error class hierarchy\nclass AppError extends Error {\n  constructor(\n    public statusCode: number,\n    public code: string,\n    message: string,\n    public details?: Record<string, string[]>\n  ) {\n    super(message);\n  }\n}\n\nclass NotFoundError extends AppError {\n  constructor(resource: string, id: string) {\n    super(404, \"NOT_FOUND\", `${resource} with id ${id} not found`);\n  }\n}\n\nclass ValidationError extends AppError {\n  constructor(details: Record<string, string[]>) {\n    super(400, \"VALIDATION_ERROR\", \"Input validation failed\", details);\n  }\n}\n\n// Centralized error handler\napp.use((err: Error, req: Request, res: Response, next: NextFunction) => {\n  if (err instanceof AppError) {\n    return res.status(err.statusCode).json({\n      status: err.statusCode,\n      code: err.code,\n      message: err.message,\n      ...(err.details && { details: err.details }),\n      requestId: req.id,\n    } satisfies ApiError);\n  }\n\n  // Unexpected error\n  console.error(\"Unhandled error:\", err);\n  res.status(500).json({\n    status: 500,\n    code: \"INTERNAL_ERROR\",\n    message: \"An unexpected error occurred\",\n    requestId: req.id,\n  } satisfies ApiError);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-rest-api-client-builder--endpoint-tester",
      children: "TypeScript: REST API Client Builder & Endpoint Tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type HttpMethod = \"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\";\ninterface ApiRequest<T = any> { method: HttpMethod; path: string; body?: T; headers?: Record<string, string>; query?: Record<string, string>; }\ninterface ApiResponse<T = any> { status: number; data: T; headers: Record<string, string>; }\n\nclass APIClient {\n  private baseUrl: string;\n  constructor(base: string) { this.baseUrl = base; }\n  async request<T>(req: ApiRequest): Promise<ApiResponse<T>> {\n    const url = new URL(this.baseUrl + req.path);\n    if (req.query) Object.entries(req.query).forEach(([k, v]) => url.searchParams.set(k, v));\n    const res = await fetch(url.toString(), {\n      method: req.method, headers: { \"Content-Type\": \"application/json\", ...req.headers },\n      body: req.body ? JSON.stringify(req.body) : undefined,\n    });\n    const data = await res.json();\n    const headers: Record<string, string> = {};\n    res.headers.forEach((v, k) => headers[k] = v);\n    return { status: res.status, data, headers };\n  }\n  get<T>(path: string, query?: Record<string, string>) { return this.request<T>({ method: \"GET\", path, query }); }\n  post<T>(path: string, body?: any) { return this.request<T>({ method: \"POST\", path, body }); }\n}\n\nclass PaginationHelper {\n  static metadata(total: number, page: number, limit: number): { total: number; page: number; limit: number; pages: number; hasNext: boolean; hasPrev: boolean } {\n    return { total, page, limit, pages: Math.ceil(total / limit), hasNext: page * limit < total, hasPrev: page > 1 };\n  }\n}\n\nconsole.log(\"Pagination:\", PaginationHelper.metadata(100, 2, 10));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-route-table-generator-openapi-validator-hateoas-link-builder",
      children: "TypeScript Implementation: Route Table Generator, OpenAPI Validator, HATEOAS Link Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RouteDefinition {\n    method: \"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\";\n    path: string;\n    summary: string;\n    tags: string[];\n    params?: Record<string, string>;\n    query?: Record<string, string>;\n    body?: Record<string, any>;\n    responses: Record<number, { description: string; schema?: any }>;\n}\n\nclass RouteTableGenerator {\n    static generate(definitions: RouteDefinition[]): string {\n        let table = \"| Method | Path | Description |\\n|--------|------|-------------|\\n\";\n        for (const def of definitions.sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method))) {\n            table += `| ${def.method.padEnd(6)} | \\`${def.path}\\` | ${def.summary} |\\n`;\n        }\n        return table;\n    }\n\n    static tree(definitions: RouteDefinition[]): Record<string, any> {\n        const root: Record<string, any> = {};\n        for (const def of definitions) {\n            const parts = def.path.split(\"/\").filter(Boolean);\n            let current = root;\n            for (let i = 0; i < parts.length; i++) {\n                const isParam = parts[i].startsWith(\":\");\n                const key = isParam ? \":param\" : parts[i];\n                if (!current[key]) current[key] = {};\n                if (i === parts.length - 1) {\n                    current[key][\"$\" + def.method.toLowerCase()] = { summary: def.summary };\n                }\n                current = current[key];\n            }\n        }\n        return root;\n    }\n}\n\nclass OpenAPISpecValidator {\n    static validate(spec: any): { valid: boolean; errors: string[] } {\n        const errors: string[] = [];\n\n        if (!spec.openapi) errors.push(\"Missing openapi version field\");\n        if (!spec.info) errors.push(\"Missing info section\");\n        if (!spec.info?.title) errors.push(\"Missing info.title\");\n        if (!spec.info?.version) errors.push(\"Missing info.version\");\n        if (!spec.paths || Object.keys(spec.paths).length === 0) errors.push(\"No paths defined\");\n\n        if (spec.paths) {\n            for (const [path, methods] of Object.entries(spec.paths) as [string, any][]) {\n                if (!path.startsWith(\"/\")) errors.push(`Path \"${path}\" must start with /`);\n                for (const [method, op] of Object.entries(methods) as [string, any][]) {\n                    if (![\"get\", \"post\", \"put\", \"patch\", \"delete\", \"options\", \"head\"].includes(method)) {\n                        errors.push(`Invalid method \"${method}\" in path \"${path}\"`);\n                    }\n                    if (op.operationId && op.operationId.includes(\" \")) {\n                        errors.push(`operationId \"${op.operationId}\" should not contain spaces`);\n                    }\n                    if (op.parameters) {\n                        for (const param of op.parameters) {\n                            if (!param.name) errors.push(`Parameter missing name in ${path}.${method}`);\n                            if (!param.in) errors.push(`Parameter missing 'in' field in ${path}.${method}`);\n                        }\n                    }\n                }\n            }\n        }\n\n        if (!spec.components?.schemas) {}\n        return { valid: errors.length === 0, errors };\n    }\n\n    static generateTemplate(title: string, version: string): any {\n        return {\n            openapi: \"3.1.0\",\n            info: { title, version, description: `API specification for ${title}` },\n            servers: [{ url: \"http://localhost:3000/api\" }],\n            paths: {},\n            components: { schemas: {} }\n        };\n    }\n}\n\nclass HATEOASLinkBuilder {\n    static link(rel: string, href: string, method: string = \"GET\", title?: string): { rel: string; href: string; method: string; title?: string } {\n        return { rel, href, method, ...(title ? { title } : {}) };\n    }\n\n    static collection(baseUrl: string, page: number, total: number, pageSize: number): { data: any[]; _links: Record<string, any> } {\n        const totalPages = Math.ceil(total / pageSize);\n        const links: Record<string, any> = {\n            self: this.link(\"self\", `${baseUrl}?page=${page}&size=${pageSize}`),\n            first: this.link(\"first\", `${baseUrl}?page=1&size=${pageSize}`),\n            last: this.link(\"last\", `${baseUrl}?page=${totalPages}&size=${pageSize}`),\n        };\n        if (page > 1) links.prev = this.link(\"prev\", `${baseUrl}?page=${page - 1}&size=${pageSize}`);\n        if (page < totalPages) links.next = this.link(\"next\", `${baseUrl}?page=${page + 1}&size=${pageSize}`);\n        return { data: [], _links: links };\n    }\n\n    static resource(baseUrl: string, id: string | number): { _links: Record<string, any> } {\n        return {\n            _links: {\n                self: this.link(\"self\", `${baseUrl}/${id}`),\n                update: this.link(\"update\", `${baseUrl}/${id}`, \"PUT\"),\n                delete: this.link(\"delete\", `${baseUrl}/${id}`, \"DELETE\"),\n                collection: this.link(\"collection\", baseUrl)\n            }\n        };\n    }\n}\n\n// Demo\nconst routes: RouteDefinition[] = [\n    { method: \"GET\", path: \"/users\", summary: \"List all users\", tags: [\"users\"], responses: { 200: { description: \"User list\" } } },\n    { method: \"POST\", path: \"/users\", summary: \"Create a user\", tags: [\"users\"], responses: { 201: { description: \"Created\" } } },\n    { method: \"GET\", path: \"/users/:id\", summary: \"Get user by ID\", tags: [\"users\"], responses: { 200: { description: \"User\" }, 404: { description: \"Not found\" } } },\n    { method: \"PUT\", path: \"/users/:id\", summary: \"Update user\", tags: [\"users\"], responses: { 200: { description: \"Updated\" } } },\n    { method: \"DELETE\", path: \"/users/:id\", summary: \"Delete user\", tags: [\"users\"], responses: { 204: { description: \"Deleted\" } } },\n];\n\nconsole.log(RouteTableGenerator.generate(routes));\nconsole.log(\"Route tree:\", JSON.stringify(RouteTableGenerator.tree(routes), null, 2));\nconst spec = OpenAPISpecValidator.generateTemplate(\"Users API\", \"1.0.0\");\nconsole.log(\"Spec validation:\", JSON.stringify(OpenAPISpecValidator.validate(spec)));\nconsole.log(\"HATEOAS:\", JSON.stringify(HATEOASLinkBuilder.collection(\"/api/users\", 2, 50, 10)._links, null, 2));\nconsole.log(\"Resource:\", JSON.stringify(HATEOASLinkBuilder.resource(\"/api/users\", \"42\")._links, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// rest apis\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'rest apis', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REST API design follows resource-oriented principles with consistent URI naming, proper HTTP method usage, and appropriate status codes. Key practices include input validation with Zod, structured error responses, pagination, filtering, sorting, and comprehensive documentation with OpenAPI. Versioning strategies ensure backward compatibility as APIs evolve."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the six constraints of REST architecture?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why should URIs use plural nouns instead of verbs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What HTTP status codes indicate success, client error, and server error?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add query parameter filtering for multiple fields to the users API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement cursor-based pagination instead of offset pagination"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add support for sparse fieldsets (", (0,jsx_runtime.jsx)(_components.code, {
          children: "?fields=id,name,email"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a RESTful API for a blogging platform that includes posts, comments, tags, and authors, with full OpenAPI documentation and automated integration tests."
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