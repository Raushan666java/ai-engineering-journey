"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4105],{

/***/ 17801
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_16_testing_web_md_491_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-16-testing-web-md-491.json
const site_docs_courses_web_development_16_testing_web_md_491_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/16-testing-web","title":"Chapter 16: Testing","description":"Previous 17-performance","source":"@site/docs/courses/web-development/16-testing-web.md","sourceDirName":"courses/web-development","slug":"/web-development/16-testing-web","permalink":"/ai-engineering-journey/web-development/16-testing-web","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-testing-web","slug":"/web-development/16-testing-web","title":"Chapter 16: Testing","sidebar_label":"Chapter 16: Testing","sidebar_position":16},"sidebar":"course-web-development","previous":{"title":"Chapter 15: Next.js","permalink":"/ai-engineering-journey/web-development/15-nextjs"},"next":{"title":"Chapter 17: Performance Optimization","permalink":"/ai-engineering-journey/web-development/17-performance"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/16-testing-web.md


const frontMatter = {
	id: '16-testing-web',
	slug: '/web-development/16-testing-web',
	title: 'Chapter 16: Testing',
	sidebar_label: 'Chapter 16: Testing',
	sidebar_position: 16
};
const contentTitle = 'Chapter 16: Testing';

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
  "value": "16.1 Testing Pyramid",
  "id": "161-testing-pyramid",
  "level": 2
}, {
  "value": "16.2 Unit Testing with Vitest",
  "id": "162-unit-testing-with-vitest",
  "level": 2
}, {
  "value": "16.3 React Component Testing",
  "id": "163-react-component-testing",
  "level": 2
}, {
  "value": "Custom Hook Testing",
  "id": "custom-hook-testing",
  "level": 3
}, {
  "value": "16.4 API Integration Tests",
  "id": "164-api-integration-tests",
  "level": 2
}, {
  "value": "16.5 End-to-End Testing with Playwright",
  "id": "165-end-to-end-testing-with-playwright",
  "level": 2
}, {
  "value": "16.6 Snapshot Testing",
  "id": "166-snapshot-testing",
  "level": 2
}, {
  "value": "16.7 Mocking with MSW",
  "id": "167-mocking-with-msw",
  "level": 2
}, {
  "value": "16.9 Code Coverage Configuration",
  "id": "169-code-coverage-configuration",
  "level": 2
}, {
  "value": "Accessibility Testing with axe-core",
  "id": "accessibility-testing-with-axe-core",
  "level": 3
}, {
  "value": "Test-Driven Development (TDD) Workflow",
  "id": "test-driven-development-tdd-workflow",
  "level": 3
}, {
  "value": "Debugging Flaky Tests",
  "id": "debugging-flaky-tests",
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
  "value": "TypeScript: Test Generator &amp; Mock Factory",
  "id": "typescript-test-generator--mock-factory",
  "level": 3
}, {
  "value": "TypeScript Implementation: Unit Test Generator, Mock/Stub Factory, Coverage Analyzer, Snapshot Diff",
  "id": "typescript-implementation-unit-test-generator-mockstub-factory-coverage-analyzer-snapshot-diff",
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
        id: "chapter-16-testing",
        children: "Chapter 16: Testing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/15-nextjs",
          children: "15-nextjs"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
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
        }), " The testing pyramid recommends many fast unit tests, fewer integration tests, and minimal E2E tests."]
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
        href: "../../assets/images/lessons/web-development/16-testing-web/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/16-testing-web/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/16-testing-web/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/16-testing-web/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/16-testing-web/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/16-testing-web/visual-explanation.png",
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
        }), " Vitest provides fast, parallel test execution with a Jest-compatible API and native Vite integration."]
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
            children: "Testing Pyramid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many unit tests, some integration tests, few E2E tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit tests should be fast and isolated; E2E tests should cover critical user journeys only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vitest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, Vite-native test runner with Jest-compatible API"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "describe"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "it"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "expect"
            }), " for structure — Vitest runs tests in parallel by default"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing Library tests components from the user's perspective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query by accessible roles and text, not implementation details like class names or state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test API endpoints end-to-end with a real or test database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spin up the server in beforeAll, clean data between tests, use test-specific environment variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Playwright E2E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser automation testing real user flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use data-testid attributes for selectors, test user registration through task completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSW Mocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock Service Worker intercepts HTTP requests at the network level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define handlers for each endpoint, set up in beforeAll, reset between tests"
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
        }), " Testing Library encourages testing components by user-visible behavior, not implementation details."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Testing Pyramid]\n    B[Unit Testing with Vitest]\n    A --> B\n    C[React Component Testing]\n    B --> C\n    D[Custom Hook Testing]\n    C --> D\n    E[API Integration Tests]\n    D --> E\n    F[End-to-End Testing with Playwright]\n    E --> F\n    G[MSW Mocking]\n    F --> G\n    H[Code Coverage]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write unit tests with Vitest for functions and components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test React components with Testing Library"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement API integration tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write end-to-end tests with Playwright"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mock network requests with MSW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure and enforce code coverage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "161-testing-pyramid",
      children: "16.1 Testing Pyramid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Integration tests verify API endpoints against a real database with setup and teardown in lifecycle hooks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/16-testing.png",
        alt: "Testing Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "       /\\\n      /E2E\\         Few: Critical user flows\n     /------\\\n    /Integr. \\      Some: API and component integration\n   /----------\\\n  /  Unit      \\    Many: Isolated functions and logic\n /--------------\\\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "162-unit-testing-with-vitest",
      children: "16.2 Unit Testing with Vitest"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Playwright automates real browsers for end-to-end user flow testing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// utils/format.test.ts\nimport { describe, it, expect } from \"vitest\";\nimport { formatDate, capitalize, truncate } from \"./format\";\n\ndescribe(\"formatDate\", () => {\n  it(\"formats a date correctly\", () => {\n    const date = new Date(\"2024-01-15\");\n    expect(formatDate(date, \"short\")).toBe(\"Jan 15, 2024\");\n  });\n\n  it(\"handles invalid dates\", () => {\n    expect(() => formatDate(new Date(\"invalid\"))).toThrow(\"Invalid date\");\n  });\n});\n\ndescribe(\"capitalize\", () => {\n  it(\"capitalizes the first letter\", () => {\n    expect(capitalize(\"hello\")).toBe(\"Hello\");\n  });\n\n  it(\"handles empty strings\", () => {\n    expect(capitalize(\"\")).toBe(\"\");\n  });\n\n  it(\"handles already capitalized strings\", () => {\n    expect(capitalize(\"Hello\")).toBe(\"Hello\");\n  });\n});\n\ndescribe(\"truncate\", () => {\n  it(\"truncates strings longer than max length\", () => {\n    expect(truncate(\"Hello world\", 5)).toBe(\"Hello...\");\n  });\n\n  it(\"returns the full string if under max length\", () => {\n    expect(truncate(\"Hi\", 5)).toBe(\"Hi\");\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "163-react-component-testing",
      children: "16.3 React Component Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " MSW mocks HTTP requests at the network level, enabling reliable, fast tests without a running backend."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// components/TaskCard.test.tsx\nimport { describe, it, expect, vi } from \"vitest\";\nimport { render, screen, fireEvent } from \"@testing-library/react\";\nimport { TaskCard } from \"./TaskCard\";\n\nconst mockTask = {\n  id: \"1\",\n  title: \"Write tests\",\n  priority: \"HIGH\",\n  dueDate: \"2024-02-01T00:00:00Z\",\n  assignee: { name: \"Alice\", email: \"alice@test.com\" },\n};\n\ndescribe(\"TaskCard\", () => {\n  it(\"renders task title\", () => {\n    render(<TaskCard task={mockTask} />);\n    expect(screen.getByText(\"Write tests\")).toBeInTheDocument();\n  });\n\n  it(\"renders priority badge\", () => {\n    render(<TaskCard task={mockTask} />);\n    expect(screen.getByText(\"HIGH\")).toBeInTheDocument();\n  });\n\n  it(\"renders assignee name\", () => {\n    render(<TaskCard task={mockTask} />);\n    expect(screen.getByText(\"Alice\")).toBeInTheDocument();\n  });\n\n  it(\"calls onClick when clicked\", () => {\n    const onClick = vi.fn();\n    render(<TaskCard task={mockTask} onClick={onClick} />);\n    fireEvent.click(screen.getByText(\"Write tests\"));\n    expect(onClick).toHaveBeenCalledTimes(1);\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-hook-testing",
      children: "Custom Hook Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// hooks/useLocalStorage.test.ts\nimport { renderHook, act } from \"@testing-library/react\";\nimport { useLocalStorage } from \"./useLocalStorage\";\n\ndescribe(\"useLocalStorage\", () => {\n  beforeEach(() => {\n    localStorage.clear();\n  });\n\n  it(\"returns initial value when empty\", () => {\n    const { result } = renderHook(() => useLocalStorage(\"key\", \"default\"));\n    expect(result.current[0]).toBe(\"default\");\n  });\n\n  it(\"stores and retrieves values\", () => {\n    const { result } = renderHook(() => useLocalStorage(\"key\", \"\"));\n    act(() => {\n      result.current[1](\"stored value\");\n    });\n    expect(result.current[0]).toBe(\"stored value\");\n    expect(localStorage.getItem(\"key\")).toBe('\"stored value\"');\n  });\n\n  it(\"reads existing localStorage values\", () => {\n    localStorage.setItem(\"key\", '\"existing\"');\n    const { result } = renderHook(() => useLocalStorage(\"key\", \"default\"));\n    expect(result.current[0]).toBe(\"existing\");\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "164-api-integration-tests",
      children: "16.4 API Integration Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// apps/api/src/__tests__/tasks.test.ts\nimport { describe, it, expect, beforeAll, afterAll } from \"vitest\";\nimport { PrismaClient } from \"@prisma/client\";\nimport { app } from \"../index\";\n\nconst prisma = new PrismaClient();\nlet server: any;\nlet token: string;\nlet projectId: string;\n\nbeforeAll(async () => {\n  server = app.listen(4001);\n\n  // Register and get token\n  const res = await fetch(\"http://localhost:4001/api/auth/register\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({\n      email: \"test@test.com\",\n      password: \"password123\",\n      name: \"Test\",\n    }),\n  });\n  const { tokens } = await res.json();\n  token = tokens.accessToken;\n});\n\nafterAll(async () => {\n  await prisma.task.deleteMany();\n  await prisma.project.deleteMany();\n  await prisma.user.deleteMany();\n  await prisma.$disconnect();\n  server.close();\n});\n\ndescribe(\"Task API\", () => {\n  it(\"creates a task\", async () => {\n    const res = await fetch(\"http://localhost:4001/api/tasks\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: `Bearer ${token}`,\n      },\n      body: JSON.stringify({\n        title: \"Integration test\",\n        priority: \"HIGH\",\n      }),\n    });\n    expect(res.status).toBe(201);\n    const { data } = await res.json();\n    expect(data.title).toBe(\"Integration test\");\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "165-end-to-end-testing-with-playwright",
      children: "16.5 End-to-End Testing with Playwright"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// tests/e2e/auth.spec.ts\nimport { test, expect } from \"@playwright/test\";\n\ntest.describe(\"Authentication\", () => {\n  test(\"user can register and login\", async ({ page }) => {\n    const email = `user-${Date.now()}@test.com`;\n\n    await page.goto(\"/register\");\n    await page.fill(\"[name=name]\", \"Test User\");\n    await page.fill(\"[name=email]\", email);\n    await page.fill(\"[name=password]\", \"SecurePass123!\");\n    await page.click(\"button[type=submit]\");\n\n    await expect(page).toHaveURL(/\\/dashboard/);\n    await expect(page.locator(\"h1\")).toContainText(\"Task Board\");\n  });\n\n  test(\"shows error on invalid login\", async ({ page }) => {\n    await page.goto(\"/login\");\n    await page.fill(\"[name=email]\", \"wrong@test.com\");\n    await page.fill(\"[name=password]\", \"wrong\");\n    await page.click(\"button[type=submit]\");\n    await expect(page.locator(\".error-message\")).toBeVisible();\n  });\n});\n\ntest.describe(\"Task Management\", () => {\n  test.beforeEach(async ({ page }) => {\n    // Login before each test\n    await page.goto(\"/login\");\n    await page.fill(\"[name=email]\", \"test@test.com\");\n    await page.fill(\"[name=password]\", \"SecurePass123!\");\n    await page.click(\"button[type=submit]\");\n    await expect(page).toHaveURL(/\\/dashboard/);\n  });\n\n  test(\"create and complete a task\", async ({ page }) => {\n    await page.click(\"text=Add Task\");\n    await page.fill(\"[name=title]\", \"E2E test task\");\n    await page.click(\"text=Create Task\");\n    await expect(page.locator(\"text=E2E test task\")).toBeVisible();\n\n    // Drag task to Done column\n    const taskCard = page.locator(\"text=E2E test task\").first();\n    const doneColumn = page.locator(\"text=Done\").last();\n    await taskCard.dragTo(doneColumn);\n    await expect(page.locator(\"text=E2E test task\")).toBeVisible();\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "166-snapshot-testing",
      children: "16.6 Snapshot Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Snapshot tests capture the rendered output of a component and flag unexpected changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { describe, it, expect } from \"vitest\";\nimport { render } from \"@testing-library/react\";\nimport { TaskCard } from \"./TaskCard\";\n\ndescribe(\"TaskCard snapshot\", () => {\n  it(\"matches snapshot for a high-priority task\", () => {\n    const { container } = render(\n      <TaskCard\n        task={{\n          id: \"1\",\n          title: \"Write tests\",\n          priority: \"HIGH\",\n          dueDate: \"2024-02-01T00:00:00Z\",\n        }}\n      />\n    );\n    expect(container).toMatchSnapshot();\n  });\n\n  it(\"matches snapshot for a completed task\", () => {\n    const { container } = render(\n      <TaskCard\n        task={{\n          id: \"2\",\n          title: \"Completed task\",\n          priority: \"LOW\",\n          dueDate: null,\n          completedAt: \"2024-01-15T00:00:00Z\",\n        }}\n      />\n    );\n    expect(container).toMatchSnapshot();\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "167-mocking-with-msw",
      children: "16.7 Mocking with MSW"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// mocks/handlers.ts\nimport { http, HttpResponse } from \"msw\";\n\nexport const handlers = [\n  http.get(\"/api/tasks\", () => {\n    return HttpResponse.json({\n      data: [\n        { id: \"1\", title: \"Mock task\", status: \"TODO\", priority: \"HIGH\" },\n      ],\n      total: 1,\n    });\n  }),\n\n  http.post(\"/api/tasks\", async ({ request }) => {\n    const body = await request.json();\n    return HttpResponse.json(\n      { data: { id: \"2\", ...(body as object), status: \"TODO\" } },\n      { status: 201 }\n    );\n  }),\n\n  http.delete(\"/api/tasks/:id\", () => {\n    return new HttpResponse(null, { status: 204 });\n  }),\n];\n\n// setup.ts\nimport { setupServer } from \"msw/node\";\nimport { handlers } from \"./handlers\";\n\nexport const server = setupServer(...handlers);\n\nbeforeAll(() => server.listen());\nafterEach(() => server.resetHandlers());\nafterAll(() => server.close());\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "screen.getByRole()"
        }), " as the primary Testing Library query — it best reflects how assistive technologies and real users find elements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nTesting implementation details (component state, internal methods, class names) creates brittle tests that break on refactoring. Test behavior, not implementation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nMSW intercepts at the network level, not the module level. This means your code runs exactly as it would in production, with no mocking framework leaks in your application code — unlike mocking fetch or axios directly."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "169-code-coverage-configuration",
      children: "16.9 Code Coverage Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// vitest.config.ts\nimport { defineConfig } from \"vitest/config\";\n\nexport default defineConfig({\n  test: {\n    coverage: {\n      provider: \"v8\",\n      reporter: [\"text\", \"json\", \"html\"],\n      thresholds: {\n        branches: 80,\n        functions: 80,\n        lines: 80,\n        statements: 80,\n      },\n      exclude: [\"**/*.config.ts\", \"**/*.d.ts\", \"**/types/**\"],\n    },\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accessibility-testing-with-axe-core",
      children: "Accessibility Testing with axe-core"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automated accessibility testing catches common WCAG violations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// vitest-setup.ts\nimport { toHaveNoViolations } from \"jest-axe\";\nexpect.extend(toHaveNoViolations);\n\n// Component test with axe\nimport { render } from \"@testing-library/react\";\nimport axe from \"axe-core\";\n\nit(\"has no accessibility violations\", async () => {\n  const { container } = render(<Navigation />);\n  const results = await axe.run(container);\n  expect(results.violations).toHaveLength(0);\n});\n\n// Playwright a11y check\nimport { injectAxe, checkA11y } from \"axe-playwright\";\n\ntest(\"dashboard page is accessible\", async ({ page }) => {\n  await page.goto(\"/dashboard\");\n  await injectAxe(page);\n  await checkA11y(page, null, {\n    includedImpacts: [\"critical\", \"serious\"],\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-driven-development-tdd-workflow",
      children: "Test-Driven Development (TDD) Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    A[Write Failing Test] --> B[Write Minimum Code]\n    B --> C[Run Tests]\n    C -->|Pass| D[Refactor]\n    D --> E[Write Next Test]\n    C -->|Fail| B\n    E --> A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debugging-flaky-tests",
      children: "Debugging Flaky Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { describe, it, expect, retry } from \"vitest\";\n\n// Retry flaky tests\ndescribe(\"flaky integration\", () => {\n  it(\"retries on failure\", { retry: 3 }, async () => {\n    const response = await fetch(\"http://localhost:4001/api/status\");\n    expect(response.ok).toBe(true);\n  });\n});\n\n// Isolate test with .only\nit.only(\"only this test runs\", () => {\n  expect(true).toBe(true);\n});\n\n// Skip slow tests\nit.skip(\"slow e2e test\", async () => {\n  // ...\n});\n"
      })
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
            children: "Unit vs Integration Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests isolated functions, no dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests API endpoints with real database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vitest vs Jest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster, native Vite, ESM-native, better TypeScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower, requires config for ESM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing Library vs Enzyme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavior-focused, no implementation access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-focused, state/shallow access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Playwright vs Cypress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-browser, native ESM, network control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-process, limited to Chromium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSW vs nock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network-level, works in browser and Node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module-level, Node only"
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
            children: "Vitest API"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "describe()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "it()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "expect()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vi.fn()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vi.mock()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "beforeAll()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "afterEach()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing Library"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "render()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "screen.getByRole()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".getByText()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".getByTestId()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fireEvent()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "waitFor()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Playwright API"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "page.goto()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".fill()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".click()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".locator()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "expect().toBeVisible()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".toHaveURL()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSW API"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "http.get()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "http.post()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HttpResponse.json()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "setupServer()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "server.listen()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--coverage"
            }), " flag, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "istanbul"
            }), " reporter, coverage thresholds in vitest.config"]
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
            children: "Todo App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit test utility functions, E2E test CRUD flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidence in logic and user experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration test checkout API, E2E test purchase flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment correctness and cart reliability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component tests for chart rendering, MSW for data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual and data correctness assurance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit test token logic, E2E test login/register flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical auth flows fully validated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration test all CRUD endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contract verified against real database"
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
        children: "Q1. What is the main advantage of MSW over mocking the fetch function directly?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) MSW is faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) MSW intercepts at the network level, so application code remains unmodified and tests run as in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) MSW requires less setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) MSW supports GraphQL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) MSW intercepts HTTP requests at the network level using Service Worker API (browser) or protocol-level interception (Node). Application code uses real fetch — no mocks leak into production code."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. Why should tests use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByRole"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByTestId"
        }), "?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByRole"
        }), " is faster"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByRole"
        }), " queries elements by their accessible role, promoting inclusive design and testing real user interactions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByRole"
        }), " does not require the element to be in the DOM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByTestId"
        }), " is deprecated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getByRole"
            }), " queries elements by their accessibility role, testing how assistive technologies and keyboard users experience the component. It also encourages adding proper ARIA roles."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. What is the correct way to test a custom React hook?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Render a component that uses the hook"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "renderHook"
        }), " from Testing Library, which creates a test component wrapper"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Call the hook directly in the test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Mock the hook entirely"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "renderHook"
            }), " from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@testing-library/react"
            }), " creates a minimal wrapper component to test hooks in isolation, providing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "act"
            }), " for assertions and updates."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q4. What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "describe"
        }), " block in Vitest?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To enable parallel execution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) To group related tests for better organization and shared setup via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "beforeEach"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To skip tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To mark tests as slow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "describe"
            }), " blocks organize tests into logical groups, allowing shared ", (0,jsx_runtime.jsx)(_components.code, {
              children: "beforeAll"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "beforeEach"
            }), " setup and producing cleaner test output with hierarchical naming."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-test-generator--mock-factory",
      children: "TypeScript: Test Generator & Mock Factory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TestCase { name: string; input: any; expected: any; }\nclass TestGenerator {\n  static generate<T>(fnName: string, cases: TestCase[]): string {\n    return `import { describe, it, expect } from \"vitest\";\nimport { ${fnName} } from \"./module\";\n\ndescribe(\"${fnName}\", () => {\n${cases.map(c => `  it(\"${c.name}\", () => {\n    expect(${fnName}(${JSON.stringify(c.input)})).toEqual(${JSON.stringify(c.expected)});\n  });`).join(\"\\n\")}\n});`;\n  }\n  static edgeCases<T>(fn: (input: any) => T): TestCase[] {\n    return [\n      { name: \"handles null\", input: null, expected: fn(null) },\n      { name: \"handles undefined\", input: undefined, expected: fn(undefined) },\n      { name: \"handles empty string\", input: \"\", expected: fn(\"\") },\n    ];\n  }\n}\n\nclass MockFactory {\n  static apiResponse<T>(data: T, status: number = 200, ok: boolean = true): Response {\n    return { ok, status, json: async () => data, text: async () => JSON.stringify(data) } as Response;\n  }\n  static request(options?: Partial<Request>): Request {\n    return { method: \"GET\", url: \"http://test.com\", headers: new Headers(), ...options } as Request;\n  }\n}\n\nclass PlaywrightGenerator {\n  static test(component: string, interactions: string[]): string {\n    return `import { test, expect } from \"@playwright/test\";\n\ntest(\"${component} interactions\", async ({ page }) => {\n  await page.goto(\"/${component.toLowerCase()}\");\n${interactions.map(i => `  await ${i};`).join(\"\\n\")}\n});`;\n  }\n}\n\nconsole.log(TestGenerator.generate(\"add\", [{ name: \"adds numbers\", input: [1, 2], expected: 3 }]));\nconsole.log(\"Mock:\", MockFactory.apiResponse({ ok: true }, 200));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-unit-test-generator-mockstub-factory-coverage-analyzer-snapshot-diff",
      children: "TypeScript Implementation: Unit Test Generator, Mock/Stub Factory, Coverage Analyzer, Snapshot Diff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TestCase {\n    name: string;\n    input: any[];\n    expected: any;\n    description?: string;\n}\n\nclass UnitTestGenerator {\n    static generate(functionName: string, cases: TestCase[], framework: \"vitest\" | \"jest\" = \"vitest\"): string {\n        const testFn = framework === \"vitest\" ? \"it\" : \"it\";\n        const describe = framework === \"vitest\" ? \"describe\" : \"describe\";\n        const expect = \"expect\";\n\n        const tests = cases.map(c =>\n            `  ${testFn}(\"${c.name}\", () => {\\n` +\n            `    const result = ${functionName}(${c.input.map((x: any) => JSON.stringify(x)).join(\", \")});\\n` +\n            `    ${this.assertion(\"result\", c.expected)}\\n` +\n            `  });`\n        ).join(\"\\n\\n\");\n\n        return `import { ${describe}, ${testFn}, ${expect} } from \"${framework}\";\\nimport { ${functionName} } from \"./${functionName}\";\\n\\n${describe}(\"${functionName}\", () => {\\n${tests}\\n});\\n`;\n    }\n\n    private static assertion(result: string, expected: any): string {\n        if (typeof expected === \"number\") return `${expect}(${result}).toBe(${expected});`;\n        if (typeof expected === \"boolean\") return `${expect}(${result}).toBe(${expected});`;\n        if (typeof expected === \"string\") return `${expect}(${result}).toBe(\"${expected}\");`;\n        if (expected === null) return `${expect}(${result}).toBeNull();`;\n        if (Array.isArray(expected)) return `${expect}(${result}).toEqual(${JSON.stringify(expected)});`;\n        if (typeof expected === \"object\") return `${expect}(${result}).toMatchObject(${JSON.stringify(expected)});`;\n        return `${expect}(${result}).toBe(${JSON.stringify(expected)});`;\n    }\n}\n\nclass MockFactory {\n    static apiResponse(data: any, status: number = 200, headers?: Record<string, string>): any {\n        return {\n            ok: status >= 200 && status < 300,\n            status,\n            headers: { get: (name: string) => (headers || {})[name] || null, ...(headers || {}) },\n            json: () => Promise.resolve(data),\n            text: () => Promise.resolve(JSON.stringify(data)),\n        };\n    }\n\n    static dbQuery(rows: any[] = []): any {\n        return { rows, rowCount: rows.length, command: \"SELECT\" };\n    }\n\n    static expressReq(overrides: Record<string, any> = {}): any {\n        return {\n            params: {}, query: {}, body: {}, headers: {},\n            cookies: {}, ip: \"127.0.0.1\", method: \"GET\", url: \"/\",\n            ...overrides\n        };\n    }\n\n    static expressRes(): any {\n        const res: any = {};\n        res.status = (code: number) => { res.statusCode = code; return res; };\n        res.json = (data: any) => { res.body = data; return res; };\n        res.send = (data: any) => { res.body = data; return res; };\n        res.end = () => {};\n        res.setHeader = () => {};\n        return res;\n    }\n\n    static reactComponent(name: string): any {\n        return {\n            displayName: name,\n            $$typeof: Symbol.for(\"react.element\"),\n            type: name,\n            props: {},\n            __esModule: true,\n            default: () => null\n        };\n    }\n}\n\nclass CoverageReportAnalyzer {\n    static analyze(json: { lines?: { total: number; covered: number }; branches?: { total: number; covered: number }; functions?: { total: number; covered: number }; statements?: { total: number; covered: number } }): {\n        lineCoverage: string; branchCoverage: string; functionCoverage: string; overall: string; grade: \"A\" | \"B\" | \"C\" | \"D\" | \"F\"\n    } {\n        const linePct = json.lines ? (json.lines.covered / json.lines.total) * 100 : 0;\n        const branchPct = json.branches ? (json.branches.covered / json.branches.total) * 100 : 0;\n        const funcPct = json.functions ? (json.functions.covered / json.functions.total) * 100 : 0;\n        const overall = (linePct + branchPct + funcPct) / 3;\n\n        let grade: \"A\" | \"B\" | \"C\" | \"D\" | \"F\";\n        if (overall >= 90) grade = \"A\";\n        else if (overall >= 80) grade = \"B\";\n        else if (overall >= 70) grade = \"C\";\n        else if (overall >= 60) grade = \"D\";\n        else grade = \"F\";\n\n        return {\n            lineCoverage: `${linePct.toFixed(1)}%`,\n            branchCoverage: `${branchPct.toFixed(1)}%`,\n            functionCoverage: `${funcPct.toFixed(1)}%`,\n            overall: `${overall.toFixed(1)}%`,\n            grade\n        };\n    }\n}\n\nclass SnapshotDiffTool {\n    static diff(oldSnapshot: string, newSnapshot: string): { changed: boolean; additions: number; removals: number; diff: string } {\n        const oldLines = oldSnapshot.split(\"\\n\");\n        const newLines = newSnapshot.split(\"\\n\");\n        const oldSet = new Set(oldLines);\n        const newSet = new Set(newLines);\n\n        const additions = newLines.filter(l => !oldSet.has(l));\n        const removals = oldLines.filter(l => !newSet.has(l));\n\n        let diff = \"\";\n        let oi = 0, ni = 0;\n        while (oi < oldLines.length || ni < newLines.length) {\n            if (oi < oldLines.length && ni < newLines.length && oldLines[oi] === newLines[ni]) {\n                diff += `  ${oldLines[oi]}\\n`; oi++; ni++;\n            } else if (ni < newLines.length && (oi >= oldLines.length || oldLines[oi] !== newLines[ni])) {\n                diff += `+ ${newLines[ni]}\\n`; ni++;\n            } else {\n                diff += `- ${oldLines[oi]}\\n`; oi++;\n            }\n        }\n\n        return { changed: additions.length > 0 || removals.length > 0, additions: additions.length, removals: removals.length, diff };\n    }\n}\n\n// Demo\nconst testCases: TestCase[] = [\n    { name: \"adds positive numbers\", input: [1, 2], expected: 3 },\n    { name: \"adds negative numbers\", input: [-1, -2], expected: -3 },\n    { name: \"adds zero\", input: [0, 5], expected: 5 },\n];\nconsole.log(UnitTestGenerator.generate(\"add\", testCases));\n\nconst mockRes = MockFactory.expressRes();\nmockRes.status(200).json({ ok: true });\nconsole.log(\"Mock response:\", JSON.stringify(mockRes.body));\n\nconst coverage = CoverageReportAnalyzer.analyze({ lines: { total: 100, covered: 85 }, branches: { total: 50, covered: 35 }, functions: { total: 30, covered: 25 } });\nconsole.log(\"Coverage grade:\", coverage.grade, \"overall:\", coverage.overall);\n\nconst diff = SnapshotDiffTool.diff(\"hello\\nworld\\n\", \"hello\\nuniverse\\n\");\nconsole.log(\"Snapshot diff:\\n\", diff.diff);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// testing web\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'testing web', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing follows the pyramid model: many unit tests for isolated logic, some integration tests for API behavior, and few E2E tests for critical user flows. Vitest provides fast unit testing, Testing Library tests React components by user interaction, Playwright automates browser testing, and MSW mocks HTTP requests for reliable test environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the testing pyramid structured the way it is?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between unit and integration tests?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does MSW improve test reliability over real API calls?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add snapshot testing for a React component"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write integration tests for all CRUD endpoints of an API"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set up visual regression tests with Playwright"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set up code coverage thresholds that fail the build if coverage drops below 80%."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a Playwright test that verifies form validation messages appear when required fields are empty."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add axe-core accessibility testing to an existing component test suite, asserting zero critical or serious violations across all component states."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a TDD cycle for a form validation function: write tests first for email format, password strength, and required field validation before implementing the logic."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Achieve 90%+ code coverage on a web application with unit tests for utility functions, component tests with all states (loading, empty, error, populated), integration tests for all API routes, and E2E tests covering the complete user journey from registration to task completion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test behavior, not implementation"
        }), " — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByRole"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByText"
        }), " over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByTestId"
        }), " to test what users actually experience."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use MSW for network mocking"
        }), " — it intercepts at the network level so application code runs unchanged, unlike mocking ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fetch"
        }), " directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure tests with the AAA pattern"
        }), " — Arrange (set up), Act (perform action), Assert (check result) makes tests readable and maintainable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run E2E tests sparingly"
        }), " — E2E tests are slow and brittle. Cover critical user journeys only. Use unit and integration tests for everything else."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enforce coverage thresholds"
        }), " — set minimum coverage percentages in CI to prevent regressions from being merged."]
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