"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2518],{

/***/ 72649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_05_fastapi_backend_04_dependency_injection_md_03d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-05-fastapi-backend-04-dependency-injection-md-03d.json
const site_docs_courses_ai_engineering_placement_05_fastapi_backend_04_dependency_injection_md_03d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fastapi-backend/04-dependency-injection","title":"Dependency Injection — Reusable Components and FastAPI DI System","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/05-fastapi-backend/04-dependency-injection.md","sourceDirName":"courses/ai-engineering-placement/05-fastapi-backend","slug":"/ai-engineering-placement/05-fastapi-backend/04-dependency-injection","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/04-dependency-injection","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":72,"frontMatter":{"id":"04-dependency-injection","slug":"/ai-engineering-placement/05-fastapi-backend/04-dependency-injection","title":"Dependency Injection — Reusable Components and FastAPI DI System","sidebar_label":"Dependency Injection — Reusable Components and FastAPI DI System","sidebar_position":72},"sidebar":"placementSidebar","previous":{"title":"Pydantic and Validation — Data Modeling and Schema Management","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/03-pydantic-and-validation"},"next":{"title":"Authentication and Authorization — JWT, OAuth2, and RBAC","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/05-fastapi-backend/04-dependency-injection.md


const frontMatter = {
	id: '04-dependency-injection',
	slug: '/ai-engineering-placement/05-fastapi-backend/04-dependency-injection',
	title: 'Dependency Injection — Reusable Components and FastAPI DI System',
	sidebar_label: 'Dependency Injection — Reusable Components and FastAPI DI System',
	sidebar_position: 72
};
const contentTitle = 'Dependency Injection — Reusable Components and FastAPI DI System';

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
  "value": "4.1 Dependency Injection Fundamentals",
  "id": "41-dependency-injection-fundamentals",
  "level": 2
}, {
  "value": "4.2 FastAPI Depends",
  "id": "42-fastapi-depends",
  "level": 2
}, {
  "value": "4.3 Class-based Dependencies",
  "id": "43-class-based-dependencies",
  "level": 2
}, {
  "value": "4.4 Generator Dependencies",
  "id": "44-generator-dependencies",
  "level": 2
}, {
  "value": "4.5 Parameterized Dependencies",
  "id": "45-parameterized-dependencies",
  "level": 2
}, {
  "value": "4.6 Sub-dependencies",
  "id": "46-sub-dependencies",
  "level": 2
}, {
  "value": "4.7 Global Dependencies",
  "id": "47-global-dependencies",
  "level": 2
}, {
  "value": "4.8 Testing with Overrides",
  "id": "48-testing-with-overrides",
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
        id: "dependency-injection--reusable-components-and-fastapi-di-system",
        children: "Dependency Injection — Reusable Components and FastAPI DI System"
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
            children: "Understand dependency injection principles and FastAPI's DI system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create reusable dependency functions for database sessions, auth, and config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use dependency scoping (callable, class, generator) for resource management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement parameterized dependencies with factory patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine and override dependencies for testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply global dependencies with include_router and app-wide DI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastAPI is the modern Python framework for building AI APIs. Its async support, automatic documentation, and type safety make it ideal for serving ML models at scale. This module covers production-grade API development."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding dependency injection is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how dependency injection works in practice."
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DI Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inversion of control, dependency injection benefits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FastAPI Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Depends() function, callable dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class-based Dependencies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stateful dependencies, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "init"
            }), " pattern"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generator Dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource lifecycle with yield"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterized Dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory functions, configurable dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency chains, DI graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global Dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router-level and app-level dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing with Overrides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Override dependencies for unit tests"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[DI Concepts] --> B[Depends() function]\r\n    B --> C[Class Dependencies]\r\n    C --> D[Generator Dependencies]\r\n    D --> E[Parameterized DI]\r\n    E --> F[Sub-dependencies]\r\n    F --> G[Global DI]\r\n    G --> H[Testing Overrides]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-dependency-injection-fundamentals",
      children: "4.1 Dependency Injection Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependency injection (DI) is a design pattern where objects receive their dependencies from an external source rather than creating them internally."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testability"
        }), ": Replace real dependencies with mocks in tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reusability"
        }), ": Share database sessions, auth logic across endpoints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separation"
        }), ": Business logic separated from infrastructure concerns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lifecycle management"
        }), ": Automatic setup/cleanup of resources"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Without DI — hard to test, tightly coupled\r\ndef get_user(user_id: int):\r\n    db = Database()  # Created inside — cannot mock\r\n    return db.query(\"SELECT * FROM users WHERE id = ?\", user_id)\r\n\r\n## With DI — dependencies injected\r\ndef get_user(user_id: int, db: Database = Depends(get_db)):\r\n    return db.query(\"SELECT * FROM users WHERE id = ?\", user_id)\r\n\r\n## db is injected — can be replaced with mock in tests\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IoC principle"
      }), ": Instead of components creating their dependencies, an external injector (FastAPI's DI system) provides them. This inverts the control flow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-fastapi-depends",
      children: "4.2 FastAPI Depends"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Depends()"
      }), " function declares a dependency in a path operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends, Header, HTTPException\r\nfrom typing import Optional\r\n\r\napp = FastAPI()\r\n\r\n## Simple dependency — a callable\r\nasync def common_parameters(\r\n    skip: int = 0,\r\n    limit: int = 100,\r\n):\r\n    return {\"skip\": skip, \"limit\": limit}\r\n\r\n@app.get(\"/items\")\r\nasync def list_items(params: dict = Depends(common_parameters)):\r\n    return {\"items\": [{\"id\": 1}], **params}\r\n\r\n@app.get(\"/users\")\r\nasync def list_users(params: dict = Depends(common_parameters)):\r\n    return {\"users\": [{\"id\": 1}], **params}\r\n\r\n## Dependency as a function with its own dependencies\r\nasync def get_token_header(x_token: str = Header(...)):\r\n    if x_token != \"secret-token\":\r\n        raise HTTPException(status_code=403, detail=\"Invalid token\")\r\n    return x_token\r\n\r\n@app.get(\"/protected\")\r\nasync def protected_route(token: str = Depends(get_token_header)):\r\n    return {\"message\": \"Access granted\", \"token\": token}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How Depends works"
      }), ": FastAPI calls the dependency function before the path operation, injects the return value as the parameter, and handles exceptions from the dependency. If a dependency raises HTTPException, FastAPI returns it without executing the endpoint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-class-based-dependencies",
      children: "4.3 Class-based Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use classes for stateful dependencies that need initialization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends\r\nfrom typing import Optional\r\n\r\napp = FastAPI()\r\n\r\nclass PaginationParams:\r\n    def __init__(self, skip: int = 0, limit: int = 100):\r\n        self.skip = skip\r\n        self.limit = limit\r\n\r\n    @property\r\n    def offset(self) -> int:\r\n        return self.skip\r\n\r\nclass AuthChecker:\r\n    def __init__(self, required_role: Optional[str] = None):\r\n        self.required_role = required_role\r\n\r\n    async def __call__(self, authorization: str = Depends(get_token_header)):\r\n        # __call__ makes the class instance usable with Depends()\r\n        if self.required_role == \"admin\" and \"admin\" not in authorization:\r\n            raise HTTPException(status_code=403, detail=\"Admin access required\")\r\n        return authorization\r\n\r\n@app.get(\"/items\")\r\nasync def list_items(pagination: PaginationParams = Depends(PaginationParams)):\r\n    return {\"offset\": pagination.offset, \"limit\": pagination.limit}\r\n\r\n## Class with __call__ — instance can be used as dependency\r\nadmin_checker = AuthChecker(required_role=\"admin\")\r\n\r\n@app.get(\"/admin/data\")\r\nasync def admin_data(auth: str = Depends(admin_checker)):\r\n    return {\"secret\": \"admin data\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use class dependencies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need to initialize from configuration or parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency has complex internal state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want to encapsulate related logic in a single unit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need the same dependency configured differently for different routes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-generator-dependencies",
      children: "4.4 Generator Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generator dependencies use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " to separate setup from cleanup — perfect for database sessions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends\r\nfrom sqlalchemy import create_engine\r\nfrom sqlalchemy.orm import Session, sessionmaker\r\nfrom typing import Generator\r\n\r\nDATABASE_URL = \"sqlite:///./test.db\"\r\nengine = create_engine(DATABASE_URL)\r\nSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)\r\n\r\napp = FastAPI()\r\n\r\n## Generator dependency — yields the resource, cleans up after\r\ndef get_db() -> Generator[Session, None, None]:\r\n    db = SessionLocal()\r\n    try:\r\n        yield db\r\n    finally:\r\n        db.close()\r\n\r\n@app.get(\"/users\")\r\nasync def list_users(db: Session = Depends(get_db)):\r\n    # db is available here\r\n    users = db.execute(\"SELECT * FROM users\").fetchall()\r\n    return {\"users\": users}\r\n\r\n## After response, db.close() is called automatically\r\n\r\n## Multiple resources\r\nasync def get_redis():\r\n    redis = await create_redis_connection()\r\n    try:\r\n        yield redis\r\n    finally:\r\n        await redis.close()\r\n\r\n@app.get(\"/cache/{key}\")\r\nasync def get_cache(key: str, redis=Depends(get_redis)):\r\n    value = await redis.get(key)\r\n    return {\"key\": key, \"value\": value}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle"
      }), ": The code before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " runs on request, the value is injected into the endpoint, and the code after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " runs after the response is sent. Exceptions in the endpoint also trigger cleanup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-parameterized-dependencies",
      children: "4.5 Parameterized Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create dependency factories that accept parameters."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends, HTTPException, Query\r\nfrom typing import Optional, Callable\r\n\r\napp = FastAPI()\r\n\r\n## Factory function that returns a dependency\r\ndef get_pagination(\r\n    default_limit: int = 100,\r\n    max_limit: int = 1000\r\n) -> Callable:\r\n    async def pagination_dependency(\r\n        skip: int = Query(0, ge=0),\r\n        limit: int = Query(default_limit, ge=1, le=max_limit),\r\n    ):\r\n        return {\"skip\": skip, \"limit\": limit}\r\n    return pagination_dependency\r\n\r\n## Create configured dependencies\r\nsmall_pagination = get_pagination(default_limit=10, max_limit=50)\r\nlarge_pagination = get_pagination(default_limit=100, max_limit=5000)\r\n\r\n@app.get(\"/items\")\r\nasync def list_items(pagination: dict = Depends(small_pagination)):\r\n    return pagination\r\n\r\n@app.get(\"/logs\")\r\nasync def list_logs(pagination: dict = Depends(large_pagination)):\r\n    return pagination\r\n\r\n## Dependency with role-based access control\r\ndef require_role(role: str):\r\n    async def role_dependency(user: dict = Depends(get_current_user)):\r\n        if user.get(\"role\") != role:\r\n            raise HTTPException(status_code=403, detail=f\"{role} role required\")\r\n        return user\r\n    return role_dependency\r\n\r\n@app.get(\"/admin\")\r\nasync def admin_dashboard(user: dict = Depends(require_role(\"admin\"))):\r\n    return {\"dashboard\": \"admin\", \"user\": user}\r\n\r\n@app.get(\"/moderator\")\r\nasync def mod_dashboard(user: dict = Depends(require_role(\"moderator\"))):\r\n    return {\"dashboard\": \"moderator\", \"user\": user}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases for parameterized dependencies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pagination with different limits per endpoint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Role-based access control with specific roles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database session with different configurations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature flag checks per endpoint group"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-sub-dependencies",
      children: "4.6 Sub-dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependencies can depend on other dependencies — FastAPI resolves the entire graph."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends, HTTPException, Header\r\nfrom typing import Optional\r\n\r\napp = FastAPI()\r\n\r\n## Level 1: Database\r\ndef get_db():\r\n    db = Database()\r\n    try:\r\n        yield db\r\n    finally:\r\n        db.close()\r\n\r\n## Level 2: Current user (depends on db)\r\nasync def get_current_user(\r\n    db = Depends(get_db),\r\n    authorization: str = Header(None)\r\n):\r\n    if not authorization:\r\n        raise HTTPException(status_code=401, detail=\"Missing authorization\")\r\n    token = authorization.replace(\"Bearer \", \"\")\r\n    user = await db.query(\"SELECT * FROM users WHERE token = ?\", token)\r\n    if not user:\r\n        raise HTTPException(status_code=401, detail=\"Invalid token\")\r\n    return user\r\n\r\n## Level 3: Admin user (depends on current user)\r\nasync def get_admin_user(\r\n    user: dict = Depends(get_current_user)\r\n):\r\n    if user.get(\"role\") != \"admin\":\r\n        raise HTTPException(status_code=403, detail=\"Admin access required\")\r\n    return user\r\n\r\n## Endpoint — only needs the final dependency\r\n@app.get(\"/admin/users\")\r\nasync def admin_list_users(admin: dict = Depends(get_admin_user)):\r\n    # admin comes from get_admin_user -> get_current_user -> get_db\r\n    return {\"admin\": admin[\"name\"], \"users\": [{\"id\": 1}]}\r\n\r\n## Trace the dependency chain:\r\n\r\n## /admin/users -> get_admin_user(Depends(get_current_user(Depends(get_db))))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency graph resolution"
      }), ": FastAPI builds the dependency graph and calls each dependency in order. Results are cached within a request — if two dependencies both depend on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_db"
      }), ", it is called only once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-global-dependencies",
      children: "4.7 Global Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply dependencies to entire routers or the whole application."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends, APIRouter, HTTPException, Header\r\n\r\napp = FastAPI()\r\n\r\n## Router-level dependencies\r\nrouter = APIRouter(\r\n    prefix=\"/api/v1\",\r\n    tags=[\"API\"],\r\n    dependencies=[Depends(verify_api_key)]\r\n)\r\n\r\n@router.get(\"/users\")\r\nasync def list_users():\r\n    return {\"users\": [{\"id\": 1}]}\r\n\r\n@router.get(\"/items\")\r\nasync def list_items():\r\n    return {\"items\": [{\"id\": 1}]}\r\n\r\n## App-level dependencies\r\napp = FastAPI(dependencies=[Depends(add_request_id)])\r\n\r\nasync def add_request_id(request: Request, call_next):\r\n    request_id = str(uuid.uuid4())\r\n    response = await call_next(request)\r\n    response.headers[\"X-Request-ID\"] = request_id\r\n    return response\r\n\r\n## Conditional dependencies\r\nclass FeatureFlag:\r\n    def __init__(self, feature_name: str):\r\n        self.feature_name = feature_name\r\n\r\n    async def __call__(self):\r\n        if not is_feature_enabled(self.feature_name):\r\n            raise HTTPException(status_code=404, detail=\"Feature not found\")\r\n        return True\r\n\r\nnew_feature = FeatureFlag(\"new_dashboard\")\r\n\r\n@app.get(\"/new-dashboard\", dependencies=[Depends(new_feature)])\r\nasync def new_dashboard():\r\n    return {\"message\": \"New dashboard — feature flagged\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Global dependency scope options"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applies To"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Depends()"
            }), " in function signature"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "APIRouter(dependencies=[...])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All router endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FastAPI(dependencies=[...])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All application endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom logic in dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Based on runtime conditions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "48-testing-with-overrides",
      children: "4.8 Testing with Overrides"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastAPI allows overriding dependencies in tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Depends\r\nfrom fastapi.testclient import TestClient\r\nimport pytest\r\n\r\napp = FastAPI()\r\n\r\n## Real dependency\r\nasync def get_db():\r\n    db = RealDatabase()\r\n    try:\r\n        yield db\r\n    finally:\r\n        db.close()\r\n\r\n@app.get(\"/users\")\r\nasync def list_users(db = Depends(get_db)):\r\n    return db.query(\"SELECT * FROM users\")\r\n\r\n## Test setup with override\r\n@pytest.fixture\r\ndef test_app():\r\n    app.dependency_overrides[get_db] = get_test_db\r\n    yield app\r\n    app.dependency_overrides.clear()\r\n\r\n@pytest.fixture\r\ndef client(test_app):\r\n    return TestClient(test_app)\r\n\r\ndef test_list_users(client):\r\n    response = client.get(\"/users\")\r\n    assert response.status_code == 200\r\n    assert len(response.json()) == 2  # Test data\r\n\r\n## Isolated override using context\r\nfrom contextlib import contextmanager\r\n\r\n@contextmanager\r\ndef override_dependency(original, mock):\r\n    app.dependency_overrides[original] = mock\r\n    try:\r\n        yield\r\n    finally:\r\n        del app.dependency_overrides[original]\r\n\r\ndef test_specific_override():\r\n    mock_db = MockDatabase()\r\n    with override_dependency(get_db, lambda: mock_db):\r\n        client = TestClient(app)\r\n        response = client.get(\"/users\")\r\n        assert response.status_code == 200\r\n\r\n## Override with different return types\r\nasync def get_mock_user():\r\n    return {\"id\": 1, \"name\": \"Test User\", \"role\": \"admin\"}\r\n\r\napp.dependency_overrides[get_current_user] = get_mock_user\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing best practices"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always clear overrides after each test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use fixtures for consistent override setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Override only the dependencies that need mocking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with both real and mocked dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import express from \"express\";\r\n\r\ninterface Database {\r\n  query(sql: string): Promise<any[]>;\r\n}\r\n\r\n// Dependency injection container\r\nclass DIContainer {\r\n  private registry = new Map<string, any>();\r\n\r\n  register<T>(name: string, factory: (...args: any[]) => T): void {\r\n    this.registry.set(name, factory);\r\n  }\r\n\r\n  resolve<T>(name: string): T {\r\n    const factory = this.registry.get(name);\r\n    if (!factory) throw new Error(`Dependency ${name} not found`);\r\n    return factory();\r\n  }\r\n}\r\n\r\nconst container = new DIContainer();\r\ncontainer.register<Database>(\"db\", () => new RealDatabase());\r\n\r\n// Route handler with injected dependency\r\napp.get(\"/users\", async (req, res) => {\r\n  const db = container.resolve<Database>(\"db\");\r\n  const users = await db.query(\"SELECT * FROM users\");\r\n  res.json(users);\r\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency injection inverts control — components receive dependencies externally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FastAPI's Depends() automatically resolves and injects dependency return values"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Class-based dependencies use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), " for configuration and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "call"
        }), " for processing"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generator dependencies (yield) manage resource lifecycle with automatic cleanup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parameterized dependencies expose factory functions for reusable, configurable DI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sub-dependencies form chains — FastAPI resolves the entire graph efficiently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Global dependencies apply to routers or entire app for cross-cutting concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency overrides enable easy testing with mock resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies are cached per request — same dependency called once even if multiple endpoints use it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raise HTTPException in dependencies for automatic auth/validation error handling"
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
            children: "Database sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generator dependency with yield/close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual session management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency that returns user object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth logic in each endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pagination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterized pagination dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicating pagination code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dependency_overrides for mocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration tests only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class dependency with config injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generator dependency (yield pattern)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual cleanup in each endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-cutting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router-level dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding to every endpoint"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q1: What is dependency injection and why use it?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Dependency injection is a pattern where objects receive their dependencies from an external source. Benefits: improved testability (replace with mocks), reusability (share logic across endpoints), separation of concerns (business vs infrastructure), and automatic lifecycle management (setup/cleanup)."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q2: How does the generator dependency pattern work?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The dependency function uses yield instead of return. Code before yield runs on request start (setup), the yielded value is injected into the endpoint,.\nand code after yield runs after response is sent (cleanup). The finally block ensures cleanup even on exceptions. Perfect for database sessions where you need to close after each request."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q3: How do you override dependencies for testing?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use app.dependency_overrides dictionary: app.dependency_overrides[original_function] = mock_function. Always clear after each test: app.dependency_overrides.clear(). Use fixtures to manage overrides consistently. This replaces real dependencies (database, auth) with mocks without changing endpoint code."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q4: What is a sub-dependency?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "A dependency that itself depends on other dependencies. FastAPI resolves the dependency graph automatically. Example: get_admin_user depends on get_current_user which depends on get_db. The graph is resolved depth-first, and each unique dependency is called only once per request."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q5: How do you add dependencies to all routes in a router?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Pass the dependencies parameter to APIRouter: router = APIRouter(dependencies=[Depends(verify_api_key)]). This applies to all routes in that router. You can also use app = FastAPI(dependencies=[...]) for app-wide dependencies applied to every endpoint."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q6: When would you use a class-based dependency?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "When you need configuration (constructor parameters), state (internal counters/caches), or encapsulation of complex logic. Class dependencies are initialized once (singleton per app) or per request. Use __call__ method for the dependency to be invoked per request."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q7: How does FastAPI cache dependencies within a request?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "FastAPI uses a dependency cache per request. If multiple endpoints or sub-dependencies depend on the same function, it is called only once. The cached result is reused throughout that request. This prevents duplicate database connections or duplicate user lookups."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q8: Can a dependency modify the request or response?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Yes. Dependencies can read request headers, cookies, or path parameters and raise HTTPException to reject requests. For response modification, use middleware instead. Dependencies are primarily for providing computed values (user objects, db sessions) and enforcing preconditions (auth, rate limiting)."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q9: What happens if a dependency raises an exception?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "If a dependency raises HTTPException, FastAPI returns that error response immediately without executing the endpoint. If it raises any other exception, FastAPI returns a 500 Internal Server Error (or custom exception handler). Dependencies are perfect for auth validation — raise 401/403 and the endpoint never executes."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q10: How do you create a dependency that requires parameters?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use a factory function that takes parameters and returns a dependency callable. Example: def require_role(role: str): async def check_role(user=Depends(get_current_user)): ...; return check_role. Then use: Depends(require_role(\"admin\")). The factory is evaluated at definition time, not per request."
        })
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
      }), ": What function declares a dependency in FastAPI?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Inject()\r\nb) Depends()\r\nc) Dependency()\r\nd) Provide()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Depends()"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which dependency pattern manages resource cleanup?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Class-based\r\nb) Generator (yield)\r\nc) Sub-dependency\r\nd) Global dependency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Generator (yield)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": How do you override a dependency in tests?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) app.override()\r\nb) app.dependency_overrides[func] = mock\r\nc) app.test_mode = True\r\nd) mock_dependency()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) app.dependency_overrides[func] = mock"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Are dependencies cached within a single request?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Yes, same dependency called once\r\nb) No, called every time\r\nc) Only for async dependencies\r\nd) Only for generator dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) Yes, same dependency called once"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What applies a dependency to all routes in a router?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) @router.use()\r\nb) APIRouter(dependencies=[...])\r\nc) @router.middleware()\r\nd) Router.dependencies()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s04-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) APIRouter(dependencies=[...])"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a dependency that extracts and validates a pagination parameters (skip, limit, sort) from query parameters. Use it in three different endpoints."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a generator dependency for SQLAlchemy database sessions. Create endpoints that use the session and verify automatic cleanup on both success and exceptions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a role-based auth system with dependencies: get_current_user (extracts user from JWT), require_role(\"admin\") (factory that checks role), and get_organization (extracts org from user context). Chain them in an admin endpoint."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Create a full DI system for a multi-tenant SaaS API: TenantResolver dependency (extracts tenant from subdomain/header), DatabaseSession (returns tenant-specific DB connection), RateLimiter (per-tenant rate limits). Test with dependency overrides."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a caching dependency: Cache(ttl=300) that checks Redis before executing the endpoint, and cache the response after. Use generator pattern for the cache connection lifecycle. Test with mock Redis."]
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
            children: "Explain the core idea of Dependency Injection — Reusable Components and FastAPI DI System in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — Reusable Components and FastAPI DI System."
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
            children: "Describe a production bug caused by misunderstanding this technique — Reusable Components and FastAPI DI System. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Reusable Components and FastAPI DI System from 10 users to 10 million?"
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
            children: "Compare Dependency Injection — Reusable Components and FastAPI DI System with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — Reusable Components and FastAPI DI System."
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
            children: "How does Dependency Injection — Reusable Components and FastAPI DI System behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — Reusable Components and FastAPI DI System run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Reusable Components and FastAPI DI System that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Dependency Injection — Reusable Components and FastAPI DI System explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Dependency Injection — Reusable Components and FastAPI DI System\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Dependency Injection — Reusable Components and FastAPI DI System to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Dependency Injection — Reusable Components and FastAPI DI System (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Dependency Injection — Reusable Components and FastAPI DI System and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Dependency Injection — Reusable Components and FastAPI DI System-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Dependency Injection — Reusable Components and FastAPI DI System interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Dependency Injection — Reusable Components and FastAPI DI System in production today?"
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
        }), " Dependency Injection — Reusable Components and FastAPI DI System builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Dependency Injection — Reusable Components and FastAPI DI System before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Dependency Injection — Reusable Components and FastAPI DI System is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Dependency Injection — Reusable Components and FastAPI DI System in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Dependency Injection — Reusable Components and FastAPI DI System chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Dependency Injection — Reusable Components and FastAPI DI System is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 04 Dependency Injection is ___. — Answer: O(1) per request with async I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 04 Dependency Injection is ___. — Answer: validation errors, missing auth, unhandled exceptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Dependency Injection — Reusable Components and FastAPI DI System issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Dependency Injection — Reusable Components and FastAPI DI System in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Dependency Injection — Reusable Components and FastAPI DI System that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Reusable Components and FastAPI DI System is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Dependency Injection — Reusable Components and FastAPI DI System in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Dependency Injection — Reusable Components and FastAPI DI System and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Reusable Components and FastAPI DI System on an empty input?"
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
            children: "Complete Medium exercises, explain Dependency Injection — Reusable Components and FastAPI DI System to someone else"
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
        children: "Always write a one-line example of Dependency Injection — Reusable Components and FastAPI DI System from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Dependency Injection — Reusable Components and FastAPI DI System when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Dependency Injection — Reusable Components and FastAPI DI System twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Dependency Injection — Reusable Components and FastAPI DI System snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Dependency Injection — Reusable Components and FastAPI DI System listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Dependency Injection — Reusable Components and FastAPI DI System to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Dependency Injection — Reusable Components and FastAPI DI System by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Dependency Injection — Reusable Components and FastAPI DI System to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Injection — Reusable Components and FastAPI DI System"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 05 — builds the foundation for 04 Dependency Injection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 04 Dependency Injection with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 04 Dependency Injection fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 04 Dependency Injection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 04 Dependency Injection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 04 Dependency Injection?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 04 Dependency Injection?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 04 Dependency Injection asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 04 Dependency Injection?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency Injection — Reusable Components and FastAPI DI System is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Dependency Injection — Reusable Components and FastAPI DI System."
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
        children: "Dependency Injection — Reusable Components and FastAPI DI System emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Dependency Injection — Reusable Components and FastAPI DI System today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Dependency Injection — Reusable Components and FastAPI DI System — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Dependency Injection — Reusable Components and FastAPI DI System changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "04 Dependency Injection is like a GPS navigation system"
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
          }), " — this chapter contributes the Dependency Injection — Reusable Components and FastAPI DI System skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-04dependencyinjection-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What function declares a dependency in FastAPI?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Depends()"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-04dependencyinjection-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which dependency pattern manages resource cleanup?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Generator (yield)"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-04dependencyinjection-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How do you override a dependency in tests?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) app.dependency_overrides[func] = mock"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-04dependencyinjection-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Are dependencies cached within a single request?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) Yes, same dependency called once"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-04dependencyinjection-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What applies a dependency to all routes in a router?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) APIRouter(dependencies=[...])"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Dependency Injection — Reusable Components and FastAPI DI System (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Dependency Injection — Reusable Components and FastAPI DI System (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Dependency Injection — Reusable Components and FastAPI DI System-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Dependency Injection — Reusable Components and FastAPI DI System in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Injection — Reusable Components and FastAPI DI System"
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
        }), ": Add structured logging at each stage of the 04 Dependency Injection pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Dependency Injection — Reusable Components and FastAPI DI System in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Dependency Injection — Reusable Components and FastAPI DI System."
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
        children: "Tell me about a time you debugged a Dependency Injection — Reusable Components and FastAPI DI System problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Dependency Injection — Reusable Components and FastAPI DI System is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_04_dependency_injection(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 04 Dependency Injection.\r\n\r\n    Key concepts: routes, Pydantic models, dependency injection, async\r\n    Complexity: O(1) per request with async I/O\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 04 Dependency Injection here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Dependency Injection — Reusable Components and FastAPI DI System without notes"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz",
        children: "Authentication and Authorization — JWT, OAuth2, and RBAC"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency Injection — Reusable Components and FastAPI DI System, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Dependency Injection — Reusable Components and FastAPI DI System depends on input size and distribution — always benchmark for your own data."
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