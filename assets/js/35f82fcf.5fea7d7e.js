"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4178],{

/***/ 62327
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_02_phase_1_python_fastapi_async_md_35f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-02-phase-1-python-fastapi-async-md-35f.json
const site_docs_courses_ai_agent_engineer_02_phase_1_python_fastapi_async_md_35f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/02-phase1-python-fastapi-async","title":"Phase 1 — Python + FastAPI + AsyncIO","description":"Duration: Weeks 2-3, ~30 hours","source":"@site/docs/courses/ai-agent-engineer/02-phase1-python-fastapi-async.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/02-phase1-python-fastapi-async","permalink":"/ai-engineering-journey/ai-agent-engineer/02-phase1-python-fastapi-async","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"02-phase1-python-fastapi-async","slug":"/ai-agent-engineer/02-phase1-python-fastapi-async","title":"Phase 1 — Python + FastAPI + AsyncIO","sidebar_label":"Phase 1 — Python + FastAPI + AsyncIO","sidebar_position":3},"sidebar":"course-ai-agent-engineer","previous":{"title":"Phase 0 — Compressed Backend Hardening","permalink":"/ai-engineering-journey/ai-agent-engineer/01-phase0-backend-hardening"},"next":{"title":"Phase 2 — LLM Fundamentals + RAG Theory","permalink":"/ai-engineering-journey/ai-agent-engineer/03-phase2-llm-rag-theory"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/02-phase1-python-fastapi-async.md


const frontMatter = {
	id: '02-phase1-python-fastapi-async',
	slug: '/ai-agent-engineer/02-phase1-python-fastapi-async',
	title: 'Phase 1 — Python + FastAPI + AsyncIO',
	sidebar_label: 'Phase 1 — Python + FastAPI + AsyncIO',
	sidebar_position: 3
};
const contentTitle = 'Phase 1 — Python + FastAPI + AsyncIO';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "1.1 Python Type Hints",
  "id": "11-python-type-hints",
  "level": 2
}, {
  "value": "Basics",
  "id": "basics",
  "level": 3
}, {
  "value": "Generics",
  "id": "generics",
  "level": 3
}, {
  "value": "Complex nested types",
  "id": "complex-nested-types",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise",
  "level": 3
}, {
  "value": "1.2 Dataclasses vs Pydantic Models",
  "id": "12-dataclasses-vs-pydantic-models",
  "level": 2
}, {
  "value": "When to use dataclasses",
  "id": "when-to-use-dataclasses",
  "level": 3
}, {
  "value": "When to use Pydantic",
  "id": "when-to-use-pydantic",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-1",
  "level": 3
}, {
  "value": "1.3 Context Managers",
  "id": "13-context-managers",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-2",
  "level": 3
}, {
  "value": "1.4 Comprehensions",
  "id": "14-comprehensions",
  "level": 2
}, {
  "value": "List comprehension",
  "id": "list-comprehension",
  "level": 3
}, {
  "value": "Dict comprehension",
  "id": "dict-comprehension",
  "level": 3
}, {
  "value": "Generator expression (memory efficient)",
  "id": "generator-expression-memory-efficient",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-3",
  "level": 3
}, {
  "value": "1.5 Decorators",
  "id": "15-decorators",
  "level": 2
}, {
  "value": "<code>@retry(times=3)</code> — the one you&#39;ll actually reuse",
  "id": "retrytimes3--the-one-youll-actually-reuse",
  "level": 3
}, {
  "value": "<code>@log_duration</code>",
  "id": "log_duration",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-4",
  "level": 3
}, {
  "value": "1.6 FastAPI: Params and Validation",
  "id": "16-fastapi-params-and-validation",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-5",
  "level": 3
}, {
  "value": "1.7 FastAPI Dependency Injection",
  "id": "17-fastapi-dependency-injection",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-6",
  "level": 3
}, {
  "value": "1.8 FastAPI Middleware",
  "id": "18-fastapi-middleware",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-7",
  "level": 3
}, {
  "value": "1.9 Background Tasks vs External Queue",
  "id": "19-background-tasks-vs-external-queue",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-8",
  "level": 3
}, {
  "value": "1.10 Pydantic v2: Validators",
  "id": "110-pydantic-v2-validators",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-9",
  "level": 3
}, {
  "value": "1.11 Pydantic Settings",
  "id": "111-pydantic-settings",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-10",
  "level": 3
}, {
  "value": "1.12 AsyncIO Fundamentals",
  "id": "112-asyncio-fundamentals",
  "level": 2
}, {
  "value": "The key insight",
  "id": "the-key-insight",
  "level": 3
}, {
  "value": "What <code>await</code> actually does",
  "id": "what-await-actually-does",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-11",
  "level": 3
}, {
  "value": "1.13 <code>asyncio.gather</code> vs Sequential",
  "id": "113-asynciogather-vs-sequential",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-12",
  "level": 3
}, {
  "value": "1.14 Async HTTP with httpx",
  "id": "114-async-http-with-httpx",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-13",
  "level": 3
}, {
  "value": "1.15 Common Async Pitfalls",
  "id": "115-common-async-pitfalls",
  "level": 2
}, {
  "value": "Pitfall 1: Sync call inside async function",
  "id": "pitfall-1-sync-call-inside-async-function",
  "level": 3
}, {
  "value": "Pitfall 2: Sync database driver in async route",
  "id": "pitfall-2-sync-database-driver-in-async-route",
  "level": 3
}, {
  "value": "Pitfall 3: CPU-bound work in async function",
  "id": "pitfall-3-cpu-bound-work-in-async-function",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-14",
  "level": 3
}, {
  "value": "Phase 1 Project: Port Real Estate Booking Module to FastAPI",
  "id": "phase-1-project-port-real-estate-booking-module-to-fastapi",
  "level": 2
}, {
  "value": "Spec",
  "id": "spec",
  "level": 3
}, {
  "value": "Constraints",
  "id": "constraints",
  "level": 3
}, {
  "value": "Done checkpoint",
  "id": "done-checkpoint",
  "level": 3
}, {
  "value": "Comparison README template",
  "id": "comparison-readme-template",
  "level": 3
}, {
  "value": "1.16 pytest for FastAPI: Fixtures, DI, httpx",
  "id": "116-pytest-for-fastapi-fixtures-di-httpx",
  "level": 2
}, {
  "value": "Basic FastAPI test",
  "id": "basic-fastapi-test",
  "level": 3
}, {
  "value": "Mocking dependencies",
  "id": "mocking-dependencies",
  "level": 3
}, {
  "value": "Async tests with httpx",
  "id": "async-tests-with-httpx",
  "level": 3
}, {
  "value": "Test fixtures for database",
  "id": "test-fixtures-for-database",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-15",
  "level": 3
}, {
  "value": "1.17 Alembic Migrations",
  "id": "117-alembic-migrations",
  "level": 2
}, {
  "value": "Setup",
  "id": "setup",
  "level": 3
}, {
  "value": "Creating a migration",
  "id": "creating-a-migration",
  "level": 3
}, {
  "value": "Applying and rolling back",
  "id": "applying-and-rolling-back",
  "level": 3
}, {
  "value": "Best practices",
  "id": "best-practices",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-16",
  "level": 3
}, {
  "value": "Phase 1 Done Checkpoint",
  "id": "phase-1-done-checkpoint",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    input: "input",
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
        id: "phase-1--python--fastapi--asyncio",
        children: "Phase 1 — Python + FastAPI + AsyncIO"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " Weeks 2-3, ~30 hours\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Write production Python with type hints, build FastAPI endpoints with proper DI and validation, understand asyncIO well enough to explain it in an interview."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/ai-agent-engineer/02-phase1-python-fastapi-async/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/02-phase1-python-fastapi-async/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/02-phase1-python-fastapi-async/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/02-phase1-python-fastapi-async/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/02-phase1-python-fastapi-async/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/02-phase1-python-fastapi-async/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-table",
      children: "Topic Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subtopic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Done checkpoint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Python type hints, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Optional"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Union"
            }), ", generics"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can annotate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "list[dict[str, int]]"
            }), " without checking syntax"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dataclasses vs Pydantic models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can explain why Pydantic wins for API I/O, dataclasses for internal structs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context managers (", (0,jsx_runtime.jsx)(_components.code, {
              children: "with"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__enter__"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "__exit__"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can write a custom DB-connection context manager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List/dict comprehensions, generator expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can convert a 5-line for-loop into a one-line comprehension on first try"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decorators (writing your own)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can write ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@retry(times=3)"
            }), " from scratch"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FastAPI path/query/body params, validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can build a CRUD endpoint with correct param types without docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FastAPI DI (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Depends"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can write ", (0,jsx_runtime.jsx)(_components.code, {
              children: "get_current_user"
            }), " + DB-session dependencies"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FastAPI middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can add custom request-duration logging middleware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Background tasks vs external queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can explain why BackgroundTasks aren't durable across restarts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pydantic v2: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BaseModel"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Field"
            }), ", validators"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can write model-level validator (start_date < end_date)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pydantic settings (", (0,jsx_runtime.jsx)(_components.code, {
              children: "pydantic-settings"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Load typed config from ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".env"
            }), " instead of scattered ", (0,jsx_runtime.jsx)(_components.code, {
              children: "os.environ"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncIO fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Explain ", (0,jsx_runtime.jsx)(_components.code, {
              children: "await"
            }), " in terms of Node's event loop"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "asyncio.gather"
            }), " vs sequential awaits"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewrite 3 sequential calls as concurrent, measure speedup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Async HTTP with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "httpx.AsyncClient"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make concurrent outbound API calls without blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common async pitfalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Identify why ", (0,jsx_runtime.jsx)(_components.code, {
              children: "requests.get()"
            }), " inside ", (0,jsx_runtime.jsx)(_components.code, {
              children: "async def"
            }), " kills concurrency"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest for FastAPI (fixtures, DI, httpx)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write 3 tests with mocked dependencies that pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alembic migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init migration, autogenerate, apply and roll back"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-python-type-hints",
      children: "1.1 Python Type Hints"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basics",
      children: "Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Optional, Union, Any\r\nfrom collections.abc import Sequence\r\n\r\ndef process_items(\r\n    items: list[str],\r\n    threshold: float = 0.5,\r\n) -> dict[str, float]:\r\n    return {item: len(item) * threshold for item in items}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generics",
      children: "Generics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import TypeVar\r\n\r\nT = TypeVar(\"T\")\r\n\r\ndef first(items: list[T]) -> T | None:\r\n    return items[0] if items else None\r\n\r\n# Usage\r\nfirst([1, 2, 3])      # int | None\r\nfirst([\"a\", \"b\"])      # str | None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complex-nested-types",
      children: "Complex nested types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel\r\n\r\nclass Chunk(BaseModel):\r\n    text: str\r\n    score: float\r\n    metadata: dict[str, str | int | float]\r\n\r\nclass QueryResponse(BaseModel):\r\n    answer: str\r\n    sources: list[Chunk]\r\n    total_tokens: int\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write 10 annotated function signatures without checking syntax. Cover: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Union"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list[dict[str, int]]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Callable[[int], str]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TypeVar"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Generator[int, None, None]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-dataclasses-vs-pydantic-models",
      children: "1.2 Dataclasses vs Pydantic Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom pydantic import BaseModel\r\n\r\n@dataclass\r\nclass InternalConfig:\r\n    \"\"\"Internal-only — no validation, no serialization needed.\"\"\"\r\n    host: str\r\n    port: int\r\n    debug: bool\r\n\r\nclass APIRequest(BaseModel):\r\n    \"\"\"API boundary — validation, serialization, OpenAPI generation needed.\"\"\"\r\n    name: str\r\n    age: int\r\n\r\n    model_config = {\"extra\": \"forbid\"}  # Reject unknown fields\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-dataclasses",
      children: "When to use dataclasses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal data structures that never cross an API boundary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration objects loaded from code, not user input"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You need mutable fields or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__slots__"
        }), " for memory efficiency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-pydantic",
      children: "When to use Pydantic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API request/response models (validation + OpenAPI generation)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Settings loaded from ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any data coming from external sources (user input, third-party APIs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Take a dataclass from existing code and convert it to Pydantic. Note what you gain: validation, serialization, schema generation. Note what you lose: mutability (Pydantic defaults to frozen via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "model_config = {\"frozen\": True}"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-context-managers",
      children: "1.3 Context Managers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from contextlib import contextmanager\r\n\r\n@contextmanager\r\ndef db_session():\r\n    session = create_session()\r\n    try:\r\n        yield session\r\n        session.commit()\r\n    except Exception:\r\n        session.rollback()\r\n        raise\r\n    finally:\r\n        session.close()\r\n\r\n# Usage\r\nwith db_session() as session:\r\n    user = session.query(User).first()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a context manager that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Opens a file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wraps writes in a try/except"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Closes the file in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finally"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@contextmanager\r\ndef safe_write(path: str):\r\n    f = open(path, \"w\")\r\n    try:\r\n        yield f\r\n        f.close()\r\n    except Exception as e:\r\n        f.close()\r\n        print(f\"Write failed: {e}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-comprehensions",
      children: "1.4 Comprehensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "list-comprehension",
      children: "List comprehension"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Instead of:\r\nsquares = []\r\nfor i in range(10):\r\n    squares.append(i * i)\r\n\r\n# Do:\r\nsquares = [i * i for i in range(10)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dict-comprehension",
      children: "Dict comprehension"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "chunks = [\"first\", \"second\", \"third\"]\r\nchunk_map = {c: len(c) for c in chunks}\r\n# {\"first\": 5, \"second\": 6, \"third\": 5}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generator-expression-memory-efficient",
      children: "Generator expression (memory efficient)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# List — all in memory\r\nall_scores = [compute_score(c) for c in huge_list]\r\n\r\n# Generator — one at a time\r\nscore_gen = (compute_score(c) for c in huge_list)\r\nfor score in score_gen:\r\n    process(score)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take 5 for-loops from your existing Python code or tutorials and rewrite them as comprehensions. Time both versions if the data is large enough."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-decorators",
      children: "1.5 Decorators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You've used ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@app.get()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@limiter.limit()"
      }), ". Now write your own."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "retrytimes3--the-one-youll-actually-reuse",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@retry(times=3)"
      }), " — the one you'll actually reuse"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom functools import wraps\r\n\r\ndef retry(times: int = 3, delay: float = 1.0):\r\n    def decorator(func):\r\n        @wraps(func)\r\n        def wrapper(*args, **kwargs):\r\n            last_error = None\r\n            for attempt in range(times):\r\n                try:\r\n                    return func(*args, **kwargs)\r\n                except Exception as e:\r\n                    last_error = e\r\n                    if attempt < times - 1:\r\n                        time.sleep(delay * (attempt + 1))  # exponential backoff\r\n            raise last_error\r\n        return wrapper\r\n    return decorator\r\n\r\n@retry(times=3, delay=0.5)\r\ndef call_ace_step(prompt: str) -> str:\r\n    response = requests.post(ACE_STEP_URL, json={\"prompt\": prompt})\r\n    response.raise_for_status()\r\n    return response.json()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log_duration",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@log_duration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport logging\r\n\r\nlogger = logging.getLogger(__name__)\r\n\r\ndef log_duration(func):\r\n    @wraps(func)\r\n    def wrapper(*args, **kwargs):\r\n        start = time.perf_counter()\r\n        result = func(*args, **kwargs)\r\n        duration = time.perf_counter() - start\r\n        logger.info(f\"{func.__name__} took {duration:.2f}s\")\r\n        return result\r\n    return wrapper\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@retry(times=3)"
      }), " from scratch without looking at this file. Then write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@log_duration"
      }), ". Both will be reused in the Phase 2 and Phase 3 projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-fastapi-params-and-validation",
      children: "1.6 FastAPI: Params and Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Path, Query, Body, HTTPException\r\nfrom pydantic import BaseModel, Field\r\n\r\napp = FastAPI()\r\n\r\nclass BookingCreate(BaseModel):\r\n    lead_id: int = Field(..., gt=0)\r\n    amount: float = Field(..., gt=0, le=1_000_000)\r\n    payment_method: str = Field(..., pattern=r\"^(upi|cash|card|cheque)$\")\r\n\r\n@app.post(\"/bookings\")\r\nasync def create_booking(\r\n    booking: BookingCreate,                                    # Body\r\n    discount_code: str | None = Query(None, max_length=20),   # Query param\r\n    x_user_id: str = Header(alias=\"X-User-ID\"),               # Header\r\n):\r\n    return {\"booking\": booking, \"discount\": discount_code, \"user\": x_user_id}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Scaffold a FastAPI app in your project repo with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /leads"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /leads/{id}"
      }), ". Use proper Pydantic schemas with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Field(..., description=...)"
      }), " on every field. Verify the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/docs"
      }), " page shows everything correctly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-fastapi-dependency-injection",
      children: "1.7 FastAPI Dependency Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependencies are how FastAPI handles shared logic — authentication, DB sessions, rate limiting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import Depends, HTTPException, status\r\nfrom fastapi.security import HTTPBearer, HTTPAuthorizationCredentials\r\n\r\nsecurity = HTTPBearer()\r\n\r\nasync def get_current_user(\r\n    credentials: HTTPAuthorizationCredentials = Depends(security),\r\n) -> str:\r\n    token = credentials.credentials\r\n    user_id = await verify_token(token)\r\n    if not user_id:\r\n        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)\r\n    return user_id\r\n\r\nasync def get_db():\r\n    db = SessionLocal()\r\n    try:\r\n        yield db\r\n        db.commit()\r\n    except Exception:\r\n        db.rollback()\r\n        raise\r\n    finally:\r\n        db.close()\r\n\r\n@app.get(\"/bookings/{id}\")\r\nasync def get_booking(\r\n    id: int,\r\n    user_id: str = Depends(get_current_user),\r\n    db: Session = Depends(get_db),\r\n):\r\n    booking = db.query(Booking).filter(Booking.id == id).first()\r\n    if not booking:\r\n        raise HTTPException(status_code=404)\r\n    return booking\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_db_session"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_current_user"
      }), " dependencies for your real project. Wire them into 3 endpoints. Verify that an unauthenticated request gets a 401, not a 500."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-fastapi-middleware",
      children: "1.8 FastAPI Middleware"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport logging\r\nfrom fastapi import FastAPI, Request\r\n\r\nlogger = logging.getLogger(__name__)\r\n\r\napp = FastAPI()\r\n\r\n@app.middleware(\"http\")\r\nasync def log_requests(request: Request, call_next):\r\n    start = time.perf_counter()\r\n    response = await call_next(request)\r\n    duration = time.perf_counter() - start\r\n    logger.info(f\"{request.method} {request.url.path} ? {response.status_code} in {duration:.3f}s\")\r\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add this middleware to your project. Send a few requests, verify the logs appear. Then add a correlation ID (UUID generated per request, added to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "request.state"
      }), ", emitted in every log line)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-background-tasks-vs-external-queue",
      children: "1.9 Background Tasks vs External Queue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import BackgroundTasks\r\n\r\ndef send_welcome_email(user_id: str):\r\n    time.sleep(2)  # Simulate email API call\r\n    print(f\"Welcome email sent to {user_id}\")\r\n\r\n@app.post(\"/users\")\r\nasync def create_user(task: BackgroundTasks):\r\n    user_id = create_user_in_db()\r\n    task.add_task(send_welcome_email, user_id)\r\n    return {\"user_id\": user_id, \"status\": \"created, email pending\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What breaks:"
      }), " If the server restarts between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_user_in_db()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "send_welcome_email()"
      }), ", the email is lost. The user exists in DB but never gets the welcome email."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use a queue instead:"
      }), " When losing the task is unacceptable (payments, document processing, media generation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add a slow fake task to an endpoint with BackgroundTasks. Restart the server while it's processing. Verify the task is lost. Then replace with RQ and verify it survives restart (RQ stores jobs in Redis)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "110-pydantic-v2-validators",
      children: "1.10 Pydantic v2: Validators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel, Field, field_validator, model_validator\r\n\r\nclass BookingCreate(BaseModel):\r\n    lead_id: int\r\n    amount: float\r\n    check_in: str\r\n    check_out: str\r\n\r\n    @field_validator(\"amount\")\r\n    @classmethod\r\n    def amount_must_be_positive(cls, v: float) -> float:\r\n        if v <= 0:\r\n            raise ValueError(\"Amount must be positive\")\r\n        return v\r\n\r\n    @model_validator(mode=\"after\")\r\n    def check_dates(self):\r\n        if self.check_in >= self.check_out:\r\n            raise ValueError(\"check_in must be before check_out\")\r\n        return self\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add a custom field validator (phone number format) and a model-level validator (start_date < end_date) to your project's booking schema."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-pydantic-settings",
      children: "1.11 Pydantic Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# config.py\r\nfrom pydantic_settings import BaseSettings\r\n\r\nclass Settings(BaseSettings):\r\n    app_name: str = \"RAG Demo API\"\r\n    database_url: str\r\n    redis_url: str = \"redis://localhost:6379\"\r\n    openai_api_key: str\r\n    chroma_persist_dir: str = \"./chroma_data\"\r\n    rate_limit_per_minute: int = 10\r\n\r\n    model_config = {\"env_file\": \".env\", \"env_file_encoding\": \"utf-8\"}\r\n\r\nsettings = Settings()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "os.environ.get(\"DATABASE_URL\")"
      }), " scattered across 5 files. Pydantic also:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates types (typo in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " won't silently become a string)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autocompletes in your IDE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracks which settings are used (a single import)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refactor your project to use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pydantic-settings"
      }), ". Move everything from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "os.environ"
      }), " into one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Settings"
      }), " class. Verify the app starts without ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " and errors with a clear message about missing fields."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-asyncio-fundamentals",
      children: "1.12 AsyncIO Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-key-insight",
      children: "The key insight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node.js uses an event loop. Python's asyncio uses an event loop. They are conceptually the same thing:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node.js"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "async function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "async def"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "await"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "await"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event loop (hidden)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "asyncio.run()"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "asyncio.get_event_loop()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microtask queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback queue"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "what-await-actually-does",
      children: ["What ", (0,jsx_runtime.jsx)(_components.code, {
        children: "await"
      }), " actually does"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "await some_async_fn()"
      }), ", Python:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pauses the current coroutine at this line"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Yields control back to the event loop"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The event loop runs other tasks while waiting"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
          children: "some_async_fn()"
        }), " completes, the event loop resumes this coroutine"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The common misunderstanding:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "await"
      }), " does NOT block. It yields. A blocking call inside an async function (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "time.sleep(2)"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requests.get()"
      }), ") blocks the event loop because it never yields control back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\n\r\nasync def task(name: str, delay: float):\r\n    print(f\"{name}: start\")\r\n    await asyncio.sleep(delay)  # Correct — yields to event loop\r\n    print(f\"{name}: end\")\r\n\r\nasync def main():\r\n    # Sequential — takes 3 seconds\r\n    await task(\"A\", 1)\r\n    await task(\"B\", 2)\r\n\r\n    # Concurrent — takes 2 seconds\r\n    await asyncio.gather(\r\n        task(\"C\", 1),\r\n        task(\"D\", 2),\r\n    )\r\n\r\nasyncio.run(main())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-11",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write 3 async functions with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.sleep(1)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.sleep(2)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.sleep(3)"
      }), ". Run them sequentially with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "await"
      }), ", time it. Run them concurrently with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.gather"
      }), ", time it. Confirm the speedup is ~3x."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "113-asynciogather-vs-sequential",
      children: ["1.13 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.gather"
      }), " vs Sequential"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nimport httpx\r\n\r\nasync def fetch_embedding(text: str) -> list[float]:\r\n    async with httpx.AsyncClient() as client:\r\n        resp = await client.post(\r\n            \"https://api.openai.com/v1/embeddings\",\r\n            json={\"input\": text, \"model\": \"text-embedding-3-small\"},\r\n        )\r\n        return resp.json()[\"data\"][0][\"embedding\"]\r\n\r\nasync def main():\r\n    texts = [\"cat\", \"dog\", \"car\"]\r\n\r\n    # Sequential — 3 * latency = ~1.5s\r\n    results_seq = []\r\n    for t in texts:\r\n        results_seq.append(await fetch_embedding(t))\r\n\r\n    # Concurrent — 1 * latency = ~0.5s\r\n    results_con = await asyncio.gather(*[fetch_embedding(t) for t in texts])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-12",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Take 3 outbound API calls (OpenAI, or any free public API). Run them sequentially and with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.gather"
      }), ". Time both. The speedup is your actual latency improvement — write it down, it's an interview talking point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-async-http-with-httpx",
      children: "1.14 Async HTTP with httpx"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nimport httpx\r\n\r\nasync def call_llm(prompt: str, client: httpx.AsyncClient) -> str:\r\n    resp = await client.post(\r\n        \"https://api.anthropic.com/v1/messages\",\r\n        json={\r\n            \"model\": \"claude-3-haiku-20240307\",\r\n            \"messages\": [{\"role\": \"user\", \"content\": prompt}],\r\n            \"max_tokens\": 100,\r\n        },\r\n        headers={\"x-api-key\": \"sk-...\"},\r\n    )\r\n    return resp.json()[\"content\"][0][\"text\"]\r\n\r\nasync def main():\r\n    prompts = [\"Write a haiku\", \"Write a limerick\", \"Write a tanka\"]\r\n    async with httpx.AsyncClient() as client:\r\n        # 3 concurrent LLM calls — ~3x faster than sequential\r\n        results = await asyncio.gather(*[call_llm(p, client) for p in prompts])\r\n        print(results)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-13",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Make 3 concurrent outbound API calls — one to OpenAI, one to a weather API, one to a free joke API — without blocking each other. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "httpx.AsyncClient"
      }), " as a context manager."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-common-async-pitfalls",
      children: "1.15 Common Async Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-1-sync-call-inside-async-function",
      children: "Pitfall 1: Sync call inside async function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import requests\r\n\r\nasync def bad_route():\r\n    # BAD: requests.get() is synchronous — blocks the entire event loop\r\n    resp = requests.get(\"https://api.example.com/data\")\r\n    return resp.json()\r\n\r\nasync def good_route():\r\n    # GOOD: httpx.AsyncClient is async — yields to event loop\r\n    async with httpx.AsyncClient() as client:\r\n        resp = await client.get(\"https://api.example.com/data\")\r\n        return resp.json()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-2-sync-database-driver-in-async-route",
      children: "Pitfall 2: Sync database driver in async route"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import psycopg2  # Sync — blocks\r\n\r\nasync def bad_query():\r\n    conn = psycopg2.connect(\"...\")\r\n    cur = conn.cursor()\r\n    cur.execute(\"SELECT * FROM users\")  # Blocks event loop\r\n    return cur.fetchall()\r\n\r\n# Use asyncpg or SQLAlchemy 2.0 async instead\r\nimport asyncpg\r\n\r\nasync def good_query():\r\n    conn = await asyncpg.connect(\"...\")\r\n    rows = await conn.fetch(\"SELECT * FROM users\")\r\n    await conn.close()\r\n    return rows\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-3-cpu-bound-work-in-async-function",
      children: "Pitfall 3: CPU-bound work in async function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "async def compute_something_heavy():\r\n    # BAD: CPU-bound, blocks event loop for the duration\r\n    result = expensive_calculation()\r\n\r\n    # GOOD: offload to thread pool\r\n    result = await asyncio.to_thread(expensive_calculation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-14",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a FastAPI route that deliberately calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "time.sleep(3)"
      }), " inside an async function. Hit it 3 times in parallel — observe it takes 9 seconds. Replace with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "await asyncio.sleep(3)"
      }), " — observe it takes 3 seconds. This is the single lesson that makes async click permanently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-1-project-port-real-estate-booking-module-to-fastapi",
      children: "Phase 1 Project: Port Real Estate Booking Module to FastAPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spec",
      children: "Spec"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take your existing real estate Booking/Payment/Document module (leads, demand letters, PDC, NOC, allotment letters, role/permission controls) and rebuild the core endpoints:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST   /leads                    Create lead\r\nPOST   /bookings                 Create booking from lead\r\nPOST   /bookings/{id}/payments   Record payment\r\nGET    /bookings/{id}            Get booking details with documents\r\nGET    /bookings/{id}/documents  List documents for a booking\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constraints",
      children: "Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use SQLAlchemy 2.0 async ORM (not sync)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All endpoints gated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Depends(get_current_user)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Role-based permissions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "admin"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "agent"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "customer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pydantic schemas with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Field(description=...)"
        }), " on every field"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " config via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pydantic-settings"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@retry(times=3)"
        }), " decorator on at least one endpoint"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "done-checkpoint",
      children: "Done checkpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " All 5 endpoints work against real Postgres"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Role/permission checks enforced (agent cannot create bookings for another agent's lead)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Every async/await placement is explainable (\"this is async because it waits on DB I/O; this is not because it's CPU-bound\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/docs"
        }), " page renders with clear schemas and examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Laravel-vs-FastAPI comparison README written"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-readme-template",
      children: "Comparison README template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Laravel (Eloquent) vs FastAPI (SQLAlchemy 2.0)\r\n\r\n| Concern | Laravel | FastAPI |\r\n|---------|---------|---------|\r\n| DB queries | Eloquent ORM, lazy loading by default | SQLAlchemy 2.0 async, explicit eager loading |\r\n| Migrations | Built-in, `php artisan migrate` | Alembic, `alembic revision --autogenerate` |\r\n| Validation | Form Request classes | Pydantic `BaseModel` with `Field` constraints |\r\n| Auth middleware | `auth:api` guard | FastAPI `Depends(get_current_user)` |\r\n| Async support | Laravel Octane (optional) | Native async/await, first-class citizen |\r\n| Serialization | Eloquent API Resources | Pydantic `model_dump()` or `response_model` |\r\n\r\n**Key insight:** Laravel's lazy-loading Eloquent makes rapid prototyping faster. FastAPI's explicit async + Pydantic makes production correctness higher. Each tradeoff makes sense in its context.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "116-pytest-for-fastapi-fixtures-di-httpx",
      children: "1.16 pytest for FastAPI: Fixtures, DI, httpx"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing FastAPI requires more than unit tests — you need to test endpoints with real request/response cycles."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-fastapi-test",
      children: "Basic FastAPI test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi.testclient import TestClient\r\n\r\nfrom app.main import app\r\n\r\nclient = TestClient(app)\r\n\r\ndef test_healthz():\r\n    response = client.get(\"/healthz\")\r\n    assert response.status_code == 200\r\n    assert response.json() == {\"status\": \"ok\"}\r\n\r\ndef test_create_item():\r\n    response = client.post(\r\n        \"/items\",\r\n        json={\"name\": \"test\", \"price\": 10.0},\r\n    )\r\n    assert response.status_code == 201\r\n    data = response.json()\r\n    assert data[\"name\"] == \"test\"\r\n    assert \"id\" in data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mocking-dependencies",
      children: "Mocking dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pytest\r\nfrom fastapi.testclient import TestClient\r\n\r\nfrom app.deps import get_current_user\r\nfrom app.main import app\r\nfrom app.schemas import User\r\n\r\ndef mock_user():\r\n    return User(id=\"test-123\", email=\"test@example.com\", name=\"Test\")\r\n\r\n# Override DI at the app level\r\napp.dependency_overrides[get_current_user] = mock_user\r\n\r\ndef test_protected_endpoint():\r\n    client = TestClient(app)\r\n    response = client.get(\"/me\")\r\n    assert response.status_code == 200\r\n    assert response.json()[\"email\"] == \"test@example.com\"\r\n\r\n# Clean up after test\r\napp.dependency_overrides.clear()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "async-tests-with-httpx",
      children: "Async tests with httpx"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pytest\r\nfrom httpx import AsyncClient, ASGITransport\r\n\r\nfrom app.main import app\r\n\r\n@pytest.mark.anyio\r\nasync def test_async_endpoint():\r\n    transport = ASGITransport(app=app)\r\n    async with AsyncClient(transport=transport, base_url=\"http://test\") as ac:\r\n        response = await ac.post(\r\n            \"/v1/collections\",\r\n            json={\"name\": \"test-collection\"},\r\n        )\r\n    assert response.status_code == 200\r\n    assert response.json()[\"name\"] == \"test-collection\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-fixtures-for-database",
      children: "Test fixtures for database"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pytest\r\nfrom sqlalchemy import create_engine\r\nfrom sqlalchemy.orm import sessionmaker\r\nfrom app.database import Base, get_db\r\nfrom app.main import app\r\n\r\nTEST_DATABASE_URL = \"sqlite:///./test.db\"\r\nengine = create_engine(TEST_DATABASE_URL)\r\nTestingSessionLocal = sessionmaker(bind=engine)\r\n\r\n@pytest.fixture\r\ndef db_session():\r\n    Base.metadata.create_all(bind=engine)\r\n    session = TestingSessionLocal()\r\n    yield session\r\n    session.close()\r\n    Base.metadata.drop_all(bind=engine)\r\n\r\n@pytest.fixture\r\ndef client(db_session):\r\n    def override_get_db():\r\n        yield db_session\r\n    app.dependency_overrides[get_db] = override_get_db\r\n    yield TestClient(app)\r\n    app.dependency_overrides.clear()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-15",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write tests for your booking module:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test healthz returns 200"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test creating a booking with valid data returns 201"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test creating a booking with missing fields returns 422"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test creating a booking with overlapping dates returns 409"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test an endpoint that requires auth returns 401 without token"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pytest -v"
      }), " and get all green."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "117-alembic-migrations",
      children: "1.17 Alembic Migrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alembic is the SQLAlchemy equivalent of Laravel's migrations. You use it whenever your schema changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install alembic\r\nalembic init alembic\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Edit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "alembic/env.py"
      }), " to point at your models:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from app.models import Base  # your SQLAlchemy Base\r\nfrom app.config import settings\r\n\r\ntarget_metadata = Base.metadata\r\n\r\nconfig.set_main_option(\"sqlalchemy.url\", settings.database_url)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-migration",
      children: "Creating a migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "alembic revision --autogenerate -m \"add bookings table\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This compares your current models against the database and generates a migration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"add bookings table\r\n\r\nRevision ID: a1b2c3d4e5f6\r\n\"\"\"\r\nfrom alembic import op\r\nimport sqlalchemy as sa\r\n\r\ndef upgrade():\r\n    op.create_table(\r\n        \"bookings\",\r\n        sa.Column(\"id\", sa.Integer(), nullable=False),\r\n        sa.Column(\"property_id\", sa.Integer(), nullable=False),\r\n        sa.Column(\"guest_name\", sa.String(length=255), nullable=False),\r\n        sa.Column(\"check_in\", sa.Date(), nullable=False),\r\n        sa.Column(\"check_out\", sa.Date(), nullable=False),\r\n        sa.Column(\"status\", sa.String(length=50), nullable=False),\r\n        sa.PrimaryKeyConstraint(\"id\"),\r\n    )\r\n\r\ndef downgrade():\r\n    op.drop_table(\"bookings\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applying-and-rolling-back",
      children: "Applying and rolling back"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "alembic upgrade head   # Apply all pending\r\nalembic downgrade -1   # Roll back one step\r\nalembic history        # View migration history\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "Best practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always review autogenerated migrations"
        }), " — Alembic misses some changes (table renames, column type changes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never edit a migration that's already been applied"
        }), " — create a new one"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test both upgrade and downgrade"
        }), " before deploying"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit migration files to git"
        }), " — they're part of your schema history"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-16",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "phone_number"
      }), " column to your bookings table. Create a migration with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--autogenerate"
      }), ". Apply it. Verify the column exists. Roll it back. Apply it again. Commit the migration file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Document { id: string; content: string; metadata: Record&lt;string,unknown&gt;; embedding?: number[] }\r\ninterface Chunk { text: string; tokens: number }\r\nclass Chunker { constructor(private maxTokens: number = 512) {}\r\n  chunk(text: string): Chunk[] { const words = text.split(/\\s+/); const chunks: Chunk[] = []; let current: string[] = []\r\n    for(const w of words) { current.push(w); if(current.join(\" \").length >= this.maxTokens) { chunks.push({text:current.join(\" \"),tokens:current.length}); current=[] }}\r\n    if(current.length) chunks.push({text:current.join(\" \"),tokens:current.length})\r\n    return chunks\r\n  }\r\n}\r\nclass VectorStore {\r\n  private store: Map&lt;string,number[]&gt; = new Map()\r\n  add(id: string, embedding: number[]): void { this.store.set(id, embedding) }\r\n  search(query: number[], k: number): string[] {\r\n    const scores: [string,number][] = []\r\n    this.store.forEach((emb, id) => { const sim = cosineSimilarity(query, emb); scores.push([id, sim]) })\r\n    return scores.sort((a,b) => b[1]-a[1]).slice(0,k).map(([id]) => id)\r\n  }\r\n}\r\nfunction cosineSimilarity(a: number[], b: number[]): number {\r\n  const dot = a.reduce((s,v,i) => s+v*b[i]!, 0)\r\n  const na = Math.sqrt(a.reduce((s,v) => s+v*v,0)), nb = Math.sqrt(b.reduce((s,v) => s+v*v,0))\r\n  return dot/(na*nb)\r\n}\r\nclass RAGPipeline {\r\n  constructor(private chunker: Chunker, private store: VectorStore, private llm: (prompt:string) => Promise&lt;string&gt;) {}\r\n  async ingest(doc: Document): Promise&lt;void&gt; {\r\n    const chunks = this.chunker.chunk(doc.content)\r\n    for(let i=0;i&lt;chunks.length;i++) { const emb = await this.embed(chunks[i].text); this.store.add(`${doc.id}:${i}`, emb) }\r\n  }\r\n  async query(q: string): Promise&lt;string&gt; {\r\n    const qEmb = await this.embed(q); const ids = this.store.search(qEmb, 3)\r\n    const ctx = ids.join(\"\\n\"); return this.llm(`Context:\\n${ctx}\\n\\nQuestion: ${q}`)\r\n  }\r\n  private async embed(text: string): Promise&lt;number[]&gt; { return text.split(\"\").map(c => c.charCodeAt(0)/255) }\r\n}\r\nexport { Chunker, VectorStore, RAGPipeline, cosineSimilarity }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-1-done-checkpoint",
      children: "Phase 1 Done Checkpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before moving to Phase 2, you should be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Annotate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "list[dict[str, int]]"
        }), " without checking syntax"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@retry(times=3)"
        }), " from scratch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Build a FastAPI CRUD endpoint without looking at docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Wire ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Depends(get_current_user)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Depends(get_db)"
        }), " on 3 endpoints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Explain why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "time.sleep()"
        }), " in an async function is wrong and what happens instead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "asyncio.gather"
        }), " to speed up 3 concurrent API calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Add a Pydantic model-level validator (start_date < end_date)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Load typed settings from ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pydantic-settings"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write 3 FastAPI tests with mocked dependencies that all pass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Create an Alembic migration from scratch, apply and roll back"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated time to checkpoint:"
      }), " 28-34 hours over 2 weeks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-agent-engineer/03-phase2-llm-rag-theory",
        children: "Next: Phase 2 — LLM Fundamentals + RAG Theory"
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