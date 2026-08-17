"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[49364],{

/***/ 65625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_08_node_express_md_2a8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-08-node-express-md-2a8.json
const site_docs_courses_web_development_08_node_express_md_2a8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/08-node-express","title":"Chapter 8 → Node.js and Express","description":"Previous 09-rest-apis","source":"@site/docs/courses/web-development/08-node-express.md","sourceDirName":"courses/web-development","slug":"/web-development/08-node-express","permalink":"/ai-engineering-journey/web-development/08-node-express","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-node-express","slug":"/web-development/08-node-express","title":"Chapter 8 → Node.js and Express","sidebar_label":"Chapter 8 → Node.js and Express","sidebar_position":8},"sidebar":"course-web-development","previous":{"title":"Chapter 7 → React Advanced","permalink":"/ai-engineering-journey/web-development/07-react-advanced"},"next":{"title":"Chapter 9: REST APIs and API Design","permalink":"/ai-engineering-journey/web-development/09-rest-apis"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/08-node-express.md


const frontMatter = {
	id: '08-node-express',
	slug: '/web-development/08-node-express',
	title: 'Chapter 8 → Node.js and Express',
	sidebar_label: 'Chapter 8 → Node.js and Express',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8 → Node.js and Express';

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
  "value": "8.1 Node.js Overview",
  "id": "81-nodejs-overview",
  "level": 3
}, {
  "value": "8.2 Node.js Modules",
  "id": "82-nodejs-modules",
  "level": 3
}, {
  "value": "8.3 npm",
  "id": "83-npm",
  "level": 3
}, {
  "value": "8.4 Express Fundamentals",
  "id": "84-express-fundamentals",
  "level": 3
}, {
  "value": "8.5 HTTP Methods and Routes",
  "id": "85-http-methods-and-routes",
  "level": 3
}, {
  "value": "8.6 Request and Response Objects",
  "id": "86-request-and-response-objects",
  "level": 3
}, {
  "value": "8.7 Middleware",
  "id": "87-middleware",
  "level": 3
}, {
  "value": "8.8 Static Files",
  "id": "88-static-files",
  "level": 3
}, {
  "value": "8.9 Template Engines",
  "id": "89-template-engines",
  "level": 3
}, {
  "value": "8.10 Testing with curl",
  "id": "810-testing-with-curl",
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
  "value": "TypeScript: Middleware Chain Simulator &amp; Route Tester",
  "id": "typescript-middleware-chain-simulator--route-tester",
  "level": 3
}, {
  "value": "TypeScript Implementation: HTTP Server Router, Middleware Chain, Stream Pipeline Builder",
  "id": "typescript-implementation-http-server-router-middleware-chain-stream-pipeline-builder",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Middleware Patterns in Practice",
  "id": "middleware-patterns-in-practice",
  "level": 3
}, {
  "value": "Environment Configuration with Validation",
  "id": "environment-configuration-with-validation",
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
        id: "chapter-8--nodejs-and-express",
        children: "Chapter 8 → Node.js and Express"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/07-react-advanced",
          children: "07-react-advanced"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/09-rest-apis",
          children: "09-rest-apis"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Node.js uses a single-threaded event loop with six phases for async I/O processing."]
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
        }), " CommonJS uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "require()"
        }), " synchronously while ES modules use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import"
        }), " statically and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import()"
        }), " dynamically."]
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
            children: "Event Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-threaded, non-blocking I/O with six phases"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "process.nextTick"
            }), " runs before Promise microtasks, which run before timer callbacks"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node Modules"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CommonJS (", (0,jsx_runtime.jsx)(_components.code, {
              children: "require"
            }), ") and ES modules (", (0,jsx_runtime.jsx)(_components.code, {
              children: "import"
            }), ") are both supported"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".mjs"
            }), " extension or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "type: module"
            }), " in package.json for ESM"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "npm"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dependency management with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "package.json"
            }), ", scripts, and semantic versioning"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pin critical dependencies with exact versions; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci"
            }), " for CI builds"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Express Routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map HTTP methods and URL paths to handler functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always validate request parameters and return appropriate status codes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions that process requests in a chain before the final handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order matters — error-handling middleware must have 4 parameters and be last"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static Files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Express serves files from a directory with optional virtual path prefix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "express.static()"
            }), " with caching headers for production assets"]
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
        }), " npm manages project dependencies through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dependencies"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "devDependencies"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Node.js Event Loop]\n    B[CommonJS & ES Modules]\n    A --> B\n    C[npm & package.json]\n    B --> C\n    D[Express Fundamentals]\n    C --> D\n    E[HTTP Methods & Routes]\n    D --> E\n    F[Middleware Chain]\n    E --> F\n    G[Static Files & Templates]\n    F --> G\n    H[Testing with curl]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Node.js event loop, its phases, and how asynchronous I/O works."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organize code using CommonJS and ES modules in Node.js."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage project dependencies using npm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create an Express web server with routing, middleware, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serve static files and render dynamic templates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test HTTP endpoints using Postman, curl, or a browser."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Express maps HTTP methods and URL paths to handler functions with route parameters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-nodejs-overview",
      children: "8.1 Node.js Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/08-node-express.png",
        alt: "Request-Response Cycle Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It provides an event-driven, non-blocking I/O model that makes it efficient for data-intensive real-time applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Event Loop:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node.js processes JavaScript on a single thread using an event loop. The loop has six phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timers"
        }), " → executes callbacks scheduled by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setTimeout"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setInterval"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pending callbacks"
        }), " → executes I/O callbacks deferred to the next iteration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idle, prepare"
        }), " → internal use."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poll"
        }), " → retrieves new I/O events; blocks if no timers are due."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check"
        }), " → executes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setImmediate"
        }), " callbacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Close callbacks"
        }), " → executes close event handlers (e.g., socket ", (0,jsx_runtime.jsx)(_components.code, {
          children: "close"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "console.log('1: Start');\n\nsetTimeout(() => console.log('2: Timeout'), 0);\nsetImmediate(() => console.log('3: Immediate'));\nprocess.nextTick(() => console.log('4: NextTick'));\n\nPromise.resolve().then(() => console.log('5: Promise'));\n\nconsole.log('6: End');\n\n// Output: 1, 6, 4, 5, 2 or 3, 2 or 3\n// nextTick runs before Promise microtasks, which run before timer phase\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-nodejs-modules",
      children: "8.2 Node.js Modules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CommonJS"
      }), " (default, ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".js"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cjs"
      }), " extension):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// math.js\nconst PI = 3.14159;\nfunction square(x) { return x * x; }\nmodule.exports = { PI, square };\nmodule.exports.default = { PI, square };\n\n// app.js → synchronous require\nconst math = require('./math.js');\nconsole.log(math.PI); // 3.14159\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ES Modules"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".mjs"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"type\": \"module\""
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "// package.json\n{\n  \"type\": \"module\",\n  \"engines\": { \"node\": \">=22\" }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// math.mjs\nexport const PI = 3.14159;\nexport function square(x) { return x * x; }\n\n// app.mjs → static import\nimport { PI, square } from './math.mjs';\n\n// Dynamic import\nconst module = await import('./heavy-module.mjs');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-npm",
      children: "8.3 npm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize a project\nnpm init -y\n\n# Install dependencies\nnpm install express\nnpm install --save-dev nodemon typescript\n\n# Install globally\nnpm install -g nodemon\n\n# Run scripts\nnpm run dev\nnpm test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "package.json scripts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"scripts\": {\n    \"start\": \"node src/server.js\",\n    \"dev\": \"nodemon src/server.js\",\n    \"lint\": \"eslint src/\",\n    \"test\": \"vitest run\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-express-fundamentals",
      children: "8.4 Express Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Express is a minimal, flexible web application framework for Node.js."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "import express from 'express';\n\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Middleware → runs for every request\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\n// Routes\napp.get('/', (req, res) => {\n  res.json({ message: 'Hello, World!' });\n});\n\n// Start server\napp.listen(PORT, () => {\n  console.log(`Server running on http://localhost:${PORT}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-http-methods-and-routes",
      children: "8.5 HTTP Methods and Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Express routes map HTTP methods and URL paths to handler functions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// GET → Retrieve resources\napp.get('/api/users', (req, res) => {\n  res.json(users);\n});\n\n// GET with route parameter\napp.get('/api/users/:id', (req, res) => {\n  const user = users.find((u) => u.id === parseInt(req.params.id));\n  if (!user) return res.status(404).json({ error: 'User not found' });\n  res.json(user);\n});\n\n// POST → Create resource\napp.post('/api/users', (req, res) => {\n  const { name, email } = req.body;\n  if (!name || !email) {\n    return res.status(400).json({ error: 'Name and email are required' });\n  }\n  const newUser = { id: users.length + 1, name, email, createdAt: new Date() };\n  users.push(newUser);\n  res.status(201).json(newUser);\n});\n\n// PUT → Replace resource\napp.put('/api/users/:id', (req, res) => {\n  const index = users.findIndex((u) => u.id === parseInt(req.params.id));\n  if (index === -1) return res.status(404).json({ error: 'User not found' });\n  users[index] = { ...users[index], ...req.body };\n  res.json(users[index]);\n});\n\n// PATCH → Partial update\napp.patch('/api/users/:id', (req, res) => {\n  const user = users.find((u) => u.id === parseInt(req.params.id));\n  if (!user) return res.status(404).json({ error: 'User not found' });\n  Object.assign(user, req.body);\n  res.json(user);\n});\n\n// DELETE → Remove resource\napp.delete('/api/users/:id', (req, res) => {\n  const index = users.findIndex((u) => u.id === parseInt(req.params.id));\n  if (index === -1) return res.status(404).json({ error: 'User not found' });\n  users.splice(index, 1);\n  res.status(204).send();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-request-and-response-objects",
      children: "8.6 Request and Response Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Request (", (0,jsx_runtime.jsx)(_components.code, {
          children: "req"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "app.use((req, res, next) => {\n  console.log({\n    method: req.method,\n    url: req.url,\n    path: req.path,\n    params: req.params,\n    query: req.query,\n    body: req.body,\n    headers: req.headers,\n    ip: req.ip,\n  });\n  next();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Response (", (0,jsx_runtime.jsx)(_components.code, {
          children: "res"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "app.get('/example', (req, res) => {\n  // Status\n  res.status(200);\n\n  // JSON\n  res.json({ success: true });\n\n  // Send raw string\n  res.send('OK');\n\n  // Send file\n  res.sendFile('/path/to/file.pdf');\n\n  // Redirect\n  res.redirect('/new-url');\n\n  // Set headers\n  res.set('X-Custom-Header', 'value');\n  res.set({\n    'Cache-Control': 'no-cache',\n    'X-Powered-By': 'Express',\n  });\n\n  // Chain\n  res.status(201).location('/api/users/123').json({ id: 123 });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-middleware",
      children: "8.7 Middleware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Middleware functions are functions that have access to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "req"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "res"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "next"
      }), ". They can execute code, modify request/response objects, end the request cycle, or call the next middleware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "import morgan from 'morgan';\nimport helmet from 'helmet';\nimport cors from 'cors';\n\n// Third-party middleware\napp.use(morgan('dev'));\napp.use(helmet());\napp.use(cors());\n\n// Application-level middleware\napp.use((req, res, next) => {\n  req.requestTime = Date.now();\n  next();\n});\n\n// Route-specific middleware\nfunction requireAuth(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) {\n    return res.status(401).json({ error: 'Authentication required' });\n  }\n  try {\n    req.user = verifyToken(token);\n    next();\n  } catch {\n    res.status(403).json({ error: 'Invalid token' });\n  }\n}\n\napp.get('/api/profile', requireAuth, (req, res) => {\n  res.json(req.user);\n});\n\n// Error-handling middleware (4 parameters)\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({\n    error: process.env.NODE_ENV === 'production'\n      ? 'Internal server error'\n      : err.message,\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-static-files",
      children: "8.8 Static Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Express serves static files from a directory:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Serve files from the 'public' directory\napp.use(express.static('public'));\n\n// Requests to /styles/main.css map to ./public/styles/main.css\n\n// Virtual path prefix\napp.use('/assets', express.static('public/assets'));\n\n// Multiple directories\napp.use(express.static('public'));\napp.use(express.static('uploads'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "89-template-engines",
      children: "8.9 Template Engines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Express supports template engines for server-side rendering:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Setup EJS\napp.set('view engine', 'ejs');\napp.set('views', './views');\n\n// Route renders template\napp.get('/profile', (req, res) => {\n  res.render('profile', {\n    user: { name: 'Alice', email: 'alice@example.com' },\n    pageTitle: 'User Profile',\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- views/profile.ejs -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title><%= pageTitle %></title>\n</head>\n<body>\n  <h1><%= user.name %></h1>\n  <p><%= user.email %></p>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "810-testing-with-curl",
      children: "8.10 Testing with curl"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# GET\ncurl http://localhost:3000/api/users\n\n# GET with parameter\ncurl http://localhost:3000/api/users/1\n\n# POST with JSON body\ncurl -X POST http://localhost:3000/api/users \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"name\": \"Bob\", \"email\": \"bob@example.com\"}'\n\n# PUT\ncurl -X PUT http://localhost:3000/api/users/1 \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"name\": \"Robert\"}'\n\n# DELETE\ncurl -X DELETE http://localhost:3000/api/users/1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nodemon"
        }), " in development for auto-restart: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nodemon src/server.js"
        }), " watches for file changes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nAlways place error-handling middleware (4 parameters) LAST in the middleware chain, after all routes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!REMEMBER]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "process.nextTick"
        }), " runs before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise.then()"
        }), " callbacks, which run before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setTimeout(fn, 0)"
        }), " — this microtask priority is critical for understanding execution order."]
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
            children: "CommonJS vs ESM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "require()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "module.exports"
            }), ", synchronous"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "import"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "export"
            }), ", static analysis, dynamic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "import()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "process.nextTick"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "setImmediate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs before I/O, in current phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs after I/O, in check phase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app.use()"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "app.get()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs for all HTTP methods on matching path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs only for GET requests on matching path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route param vs Query param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/users/:id"
            }), " ? ", (0,jsx_runtime.jsx)(_components.code, {
              children: "req.params.id"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/users?id=5"
            }), " ? ", (0,jsx_runtime.jsx)(_components.code, {
              children: "req.query.id"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3-param vs 4-param middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error-handling middleware (err, req, res, next)"
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
            children: "Event Loop Phases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "timers ? I/O callbacks ? poll ? check (setImmediate) ? close"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module Systems"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cjs"
            }), " (CommonJS), ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".mjs"
            }), " (ESM), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "type: module"
            }), " in package.json"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Express Methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app.get()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".post()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".put()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".patch()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".delete()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".use()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".all()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response Methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "res.json()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".send()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".status()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".redirect()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".sendFile()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".render()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Status Codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error"
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
            children: "REST API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Express routes with CRUD handlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean, testable HTTP endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-Stack App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Express backend + React frontend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns with API layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple Express apps communicating via HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent deployable services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "express.static for serving built frontend assets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple static hosting without a web server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFF (Backend for Frontend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Express as a thin API layer aggregating downstream services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized data shapes for specific frontend needs"
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
        children: "Q1. What is the correct order of execution for Node.js async operations?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) setTimeout ? Promise ? process.nextTick"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) process.nextTick ? Promise ? setTimeout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Promise ? process.nextTick ? setTimeout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) setTimeout ? nextTick ? Promise"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "process.nextTick"
            }), " runs before Promise microtasks, which run before the timer phase (setTimeout)."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. How does Express middleware ordering affect request processing?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Middleware runs in alphabetical order"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) Middleware runs in the order it is registered with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.use()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Middleware runs from last to first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The order does not matter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Express middleware executes in the order it is registered. Place route-specific middleware before routes and error middleware last."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. What distinguishes error-handling middleware from normal middleware?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) It uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async/await"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) It has four parameters: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(err, req, res, next)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) It is registered with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.error()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It runs before route handlers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) Error-handling middleware has exactly four parameters. Express identifies it by checking ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fn.length === 4"
            }), "."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q4. What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "express.json()"
        }), " middleware do?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) Parses JSON request bodies and populates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "req.body"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Sends JSON responses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Validates JSON schemas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Compresses JSON responses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "express.json()"
            }), " parses incoming requests with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Content-Type: application/json"
            }), " and makes the parsed data available on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "req.body"
            }), "."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-middleware-chain-simulator--route-tester",
      children: "TypeScript: Middleware Chain Simulator & Route Tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MiddlewareChain {\n  private middlewares: Array<(req: any, res: any, next: () => void) => void> = [];\n\n  use(fn: (req: any, res: any, next: () => void) => void): void {\n    this.middlewares.push(fn);\n  }\n  async run(req: any, res: any): Promise<void> {\n    let idx = 0;\n    const next = async () => {\n      if (idx < this.middlewares.length) await this.middlewares[idx++](req, res, next);\n    };\n    await next();\n  }\n}\n\nclass RouteTester {\n  static testRoute(method: string, path: string): { match: boolean; params: Record<string, string> } {\n    const routeRegex = /:(\\w+)/g;\n    const paramNames: string[] = [];\n    let pattern = \"^\" + path.replace(routeRegex, (_, name) => { paramNames.push(name); return \"([^/]+)\"; }) + \"$\";\n    return { match: new RegExp(pattern).test(method.toLowerCase()), params: {} };\n  }\n}\n\nclass EventLoopSimulator {\n  static async simulate(tasks: Array<() => Promise<any>>): Promise<any[]> {\n    const results: any[] = [];\n    for (const task of tasks) results.push(await task());\n    return results;\n  }\n  static async parallel<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {\n    return Promise.all(tasks.map(t => t()));\n  }\n}\n\nconsole.log(\"Chain sim:\", new MiddlewareChain().use((req, res, n) => n()));\nconsole.log(\"Route:\", RouteTester.testRoute(\"get\", \"/users/:id\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-http-server-router-middleware-chain-stream-pipeline-builder",
      children: "TypeScript Implementation: HTTP Server Router, Middleware Chain, Stream Pipeline Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type RequestHandler = (req: any, res: any, next: (err?: any) => void) => void;\n\nclass HTTPServerRouter {\n    private routes: Map<string, Map<string, RequestHandler>> = new Map();\n\n    private addRoute(method: string, path: string, handler: RequestHandler): void {\n        if (!this.routes.has(method)) this.routes.set(method, new Map());\n        this.routes.get(method)!.set(path, handler);\n    }\n\n    get(path: string, handler: RequestHandler): void { this.addRoute(\"GET\", path, handler); }\n    post(path: string, handler: RequestHandler): void { this.addRoute(\"POST\", path, handler); }\n    put(path: string, handler: RequestHandler): void { this.addRoute(\"PUT\", path, handler); }\n    delete(path: string, handler: RequestHandler): void { this.addRoute(\"DELETE\", path, handler); }\n\n    match(method: string, url: string): { handler: RequestHandler | null; params: Record<string, string> } {\n        const routes = this.routes.get(method);\n        if (!routes) return { handler: null, params: {} };\n        const urlParts = url.split(\"/\").filter(Boolean);\n        for (const [pattern, handler] of routes) {\n            const patternParts = pattern.split(\"/\").filter(Boolean);\n            if (patternParts.length !== urlParts.length) continue;\n            const params: Record<string, string> = {};\n            let match = true;\n            for (let i = 0; i < patternParts.length; i++) {\n                if (patternParts[i].startsWith(\":\")) {\n                    params[patternParts[i].slice(1)] = urlParts[i];\n                } else if (patternParts[i] !== urlParts[i]) {\n                    match = false; break;\n                }\n            }\n            if (match) return { handler, params };\n        }\n        return { handler: null, params: {} };\n    }\n\n    routeTable(): { method: string; path: string }[] {\n        const table: { method: string; path: string }[] = [];\n        for (const [method, routes] of this.routes) {\n            for (const path of routes.keys()) table.push({ method, path });\n        }\n        return table.sort((a, b) => a.method.localeCompare(b.method));\n    }\n}\n\nclass MiddlewareChain {\n    private middlewares: RequestHandler[] = [];\n\n    use(fn: RequestHandler): MiddlewareChain {\n        this.middlewares.push(fn);\n        return this;\n    }\n\n    execute(req: any, res: any, finalHandler: RequestHandler): void {\n        let idx = 0;\n        const next = (err?: any) => {\n            if (err) {\n                console.error(\"Middleware error:\", err);\n                res.statusCode = 500;\n                res.end(\"Internal Server Error\");\n                return;\n            }\n            if (idx < this.middlewares.length) {\n                this.middlewares[idx++](req, res, next);\n            } else {\n                finalHandler(req, res, () => {});\n            }\n        };\n        next();\n    }\n\n    static compose(...middlewares: RequestHandler[]): RequestHandler {\n        return (req, res, next) => {\n            let idx = 0;\n            const dispatch = (err?: any) => {\n                if (err) return next(err);\n                if (idx >= middlewares.length) return next();\n                return middlewares[idx++](req, res, dispatch);\n            };\n            dispatch();\n        };\n    }\n}\n\nclass StreamPipelineBuilder {\n    static pipeline<T>(...transforms: ((data: T) => T)[]): (data: T) => T {\n        return (data: T) => transforms.reduce((acc, fn) => fn(acc), data);\n    }\n\n    static buffer(stream: { on: (ev: string, cb: (...args: any[]) => void) => void }): Promise<Buffer> {\n        return new Promise((resolve, reject) => {\n            const chunks: Buffer[] = [];\n            stream.on(\"data\", (chunk: Buffer) => chunks.push(chunk));\n            stream.on(\"end\", () => resolve(Buffer.concat(chunks)));\n            stream.on(\"error\", reject);\n        });\n    }\n\n    static transformStream(size: number): { write: (chunk: string) => string[]; end: () => string } {\n        const buffer: string[] = [];\n        return {\n            write: (chunk: string) => {\n                buffer.push(chunk);\n                const lines: string[] = [];\n                let remaining = buffer.join(\"\");\n                const idx = remaining.lastIndexOf(\"\\n\");\n                if (idx >= 0) {\n                    lines.push(...remaining.slice(0, idx).split(\"\\n\"));\n                    buffer.length = 0;\n                    buffer.push(remaining.slice(idx + 1));\n                }\n                return lines;\n            },\n            end: () => buffer.join(\"\")\n        };\n    }\n\n    static async batch<T>(items: T[], batchSize: number, fn: (item: T) => Promise<any>): Promise<any[]> {\n        const results: any[] = [];\n        for (let i = 0; i < items.length; i += batchSize) {\n            const batch = items.slice(i, i + batchSize);\n            const batchResults = await Promise.all(batch.map(fn));\n            results.push(...batchResults);\n        }\n        return results;\n    }\n}\n\n// Demo\nconst router = new HTTPServerRouter();\nrouter.get(\"/users\", (req, res, next) => {});\nrouter.get(\"/users/:id\", (req, res, next) => {});\nrouter.post(\"/users\", (req, res, next) => {});\nrouter.put(\"/users/:id\", (req, res, next) => {});\nrouter.delete(\"/users/:id\", (req, res, next) => {});\n\nconst match = router.match(\"GET\", \"/users/42\");\nconsole.log(\"Route match:\", match.params);\n\nconst chain = new MiddlewareChain();\nchain.use((req, res, next) => { console.log(\"Logger\"); next(); });\nchain.use((req, res, next) => { console.log(\"Auth\"); next(); });\nchain.execute({}, { statusCode: 200, end: (msg: string) => {} }, (req, res) => console.log(\"Handler\"));\nconsole.log(\"Pipeline:\", StreamPipelineBuilder.pipeline(\n    (s: number) => s * 2, (s: number) => s + 1\n)(5));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// node express\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'node express', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Middleware functions process requests in order and can modify request/response objects."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node.js uses a single-threaded event loop with phases for timers, I/O polling, and callbacks."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modules may use CommonJS (", (0,jsx_runtime.jsx)(_components.code, {
          children: "require"
        }), ") or ES modules (", (0,jsx_runtime.jsx)(_components.code, {
          children: "import"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "export"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["npm manages dependencies with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Express provides routing, middleware chains, and request/response abstractions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Middleware can be application-level, route-specific, or error-handling (four parameters)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static files and template engines enable full-stack applications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP endpoints are testable with curl, Postman, or HTTPie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "middleware-patterns-in-practice",
      children: "Middleware Patterns in Practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Rate limiter\nimport rateLimit from \"express-rate-limit\";\nconst apiLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 100,\n  message: { error: \"Too many requests\" },\n});\napp.use(\"/api/\", apiLimiter);\n\n// Security headers\nimport helmet from \"helmet\";\napp.use(helmet());\n\n// CORS configuration\nimport cors from \"cors\";\napp.use(cors({\n  origin: [\"https://example.com\"],\n  credentials: true,\n}));\n\n// Conditional logging\nif (process.env.NODE_ENV === \"development\") {\n  const morgan = require(\"morgan\");\n  app.use(morgan(\"dev\"));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "environment-configuration-with-validation",
      children: "Environment Configuration with Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { z } from \"zod\";\n\nconst envSchema = z.object({\n  NODE_ENV: z.enum([\"development\", \"staging\", \"production\"]),\n  PORT: z.coerce.number().default(3000),\n  DATABASE_URL: z.string().url(),\n  JWT_SECRET: z.string().min(32),\n});\n\nconst parsed = envSchema.safeParse(process.env);\nif (!parsed.success) {\n  console.error(\"Invalid env:\", parsed.error.flatten());\n  process.exit(1);\n}\n\nexport const config = {\n  port: parsed.data.PORT,\n  isDev: parsed.data.NODE_ENV === \"development\",\n} as const;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Express serves static files and supports template engines for server-side rendering."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "process.nextTick"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setImmediate"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Express middleware ordering affect request processing?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "express.json()"
        }), " middleware?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why should error-handling middleware have four parameters?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build an Express server with routes for a todo API: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /todos"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /todos/:id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /todos"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PUT /todos/:id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DELETE /todos/:id"
        }), ". Store todos in memory. Each todo should have ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "completed"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "createdAt"
        }), ". Return appropriate status codes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement request logging middleware that records the HTTP method, URL, status code, and response time for every request."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a middleware function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validateResource(schema)"
        }), " that validates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "req.body"
        }), " against a plain-object schema and returns 400 with error details on validation failure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a complete RESTful blog API server with:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GET /api/posts"
            }), " → list posts with pagination (", (0,jsx_runtime.jsx)(_components.code, {
              children: "?page=1&limit=10"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GET /api/posts/:id"
            }), " → single post with author details"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "POST /api/posts"
            }), " → create post (requires auth middleware)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PUT /api/posts/:id"
            }), " → update post (only by author)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DELETE /api/posts/:id"
            }), " → soft-delete post (sets ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deletedAt"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GET /api/posts/:id/comments"
            }), " → nested comments"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "POST /api/posts/:id/comments"
            }), " → add comment"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DELETE /api/comments/:id"
            }), " → delete comment (only by author)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom middleware for: request logging, auth (Bearer token), error handling, 404 catch-all"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test coverage with curl commands in a README"
          }), "\n"]
        }), "\n"]
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