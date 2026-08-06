"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[39633],{

/***/ 46204
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_10_testing_observability_md_aee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-10-testing-observability-md-aee.json
const site_docs_courses_laravel_10_testing_observability_md_aee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/10-testing-observability","title":"Chapter 10: Testing, Debugging & Observability","description":"Previous Caching, Performance & Octane","source":"@site/docs/courses/laravel/10-testing-observability.md","sourceDirName":"courses/laravel","slug":"/laravel/10-testing-observability","permalink":"/ai-engineering-journey/laravel/10-testing-observability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-testing-observability","slug":"/laravel/10-testing-observability","title":"Chapter 10: Testing, Debugging & Observability","sidebar_label":"Chapter 10: Testing, Debugging & Observability","sidebar_position":10},"sidebar":"coursesSidebar","previous":{"title":"Chapter 9: Service Container, Facades & Package Development","permalink":"/ai-engineering-journey/laravel/09-container-packages"},"next":{"title":"Chapter 11: Caching, Performance & Octane","permalink":"/ai-engineering-journey/laravel/11-caching-performance"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/10-testing-observability.md


const frontMatter = {
	id: '10-testing-observability',
	slug: '/laravel/10-testing-observability',
	title: 'Chapter 10: Testing, Debugging & Observability',
	sidebar_label: 'Chapter 10: Testing, Debugging & Observability',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Testing, Debugging & Observability';

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
  "value": "10.1 PHPUnit in Laravel",
  "id": "101-phpunit-in-laravel",
  "level": 3
}, {
  "value": "Test Directory Structure",
  "id": "test-directory-structure",
  "level": 4
}, {
  "value": "The Artisan Test Runner",
  "id": "the-artisan-test-runner",
  "level": 4
}, {
  "value": "setUp / tearDown",
  "id": "setup--teardown",
  "level": 4
}, {
  "value": "Database Migration Traits",
  "id": "database-migration-traits",
  "level": 4
}, {
  "value": "10.2 PEST",
  "id": "102-pest",
  "level": 3
}, {
  "value": "Basic Structure",
  "id": "basic-structure",
  "level": 4
}, {
  "value": "PEST Expectations",
  "id": "pest-expectations",
  "level": 4
}, {
  "value": "Higher-Order Tests",
  "id": "higher-order-tests",
  "level": 4
}, {
  "value": "Arch Tests",
  "id": "arch-tests",
  "level": 4
}, {
  "value": "10.3 HTTP Tests",
  "id": "103-http-tests",
  "level": 3
}, {
  "value": "Making Requests",
  "id": "making-requests",
  "level": 4
}, {
  "value": "Headers, Tokens, Sessions",
  "id": "headers-tokens-sessions",
  "level": 4
}, {
  "value": "Authentication in Tests",
  "id": "authentication-in-tests",
  "level": 4
}, {
  "value": "Response Assertions",
  "id": "response-assertions",
  "level": 4
}, {
  "value": "JSON Assertions",
  "id": "json-assertions",
  "level": 4
}, {
  "value": "Session &amp; Database Assertions",
  "id": "session--database-assertions",
  "level": 4
}, {
  "value": "10.4 Database Tests",
  "id": "104-database-tests",
  "level": 3
}, {
  "value": "Model Factories",
  "id": "model-factories",
  "level": 4
}, {
  "value": "State Modifiers",
  "id": "state-modifiers",
  "level": 4
}, {
  "value": "Sequences",
  "id": "sequences",
  "level": 4
}, {
  "value": "Faker Locale",
  "id": "faker-locale",
  "level": 4
}, {
  "value": "Full Database Test Example",
  "id": "full-database-test-example",
  "level": 4
}, {
  "value": "10.5 Feature vs. Unit Tests",
  "id": "105-feature-vs-unit-tests",
  "level": 3
}, {
  "value": "Decision Guide",
  "id": "decision-guide",
  "level": 4
}, {
  "value": "10.6 Mocks &amp; Fakes",
  "id": "106-mocks--fakes",
  "level": 3
}, {
  "value": "Mockery",
  "id": "mockery",
  "level": 4
}, {
  "value": "Bus Fake",
  "id": "bus-fake",
  "level": 4
}, {
  "value": "Event Fake",
  "id": "event-fake",
  "level": 4
}, {
  "value": "Mail Fake",
  "id": "mail-fake",
  "level": 4
}, {
  "value": "Notification Fake",
  "id": "notification-fake",
  "level": 4
}, {
  "value": "Queue Fake",
  "id": "queue-fake",
  "level": 4
}, {
  "value": "Storage Fake",
  "id": "storage-fake",
  "level": 4
}, {
  "value": "Http Fake",
  "id": "http-fake",
  "level": 4
}, {
  "value": "10.7 Browser Tests with Dusk",
  "id": "107-browser-tests-with-dusk",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation",
  "level": 4
}, {
  "value": "Writing Dusk Tests",
  "id": "writing-dusk-tests",
  "level": 4
}, {
  "value": "Element Interaction",
  "id": "element-interaction",
  "level": 4
}, {
  "value": "Dusk Assertions",
  "id": "dusk-assertions",
  "level": 4
}, {
  "value": "Dusk Page Objects",
  "id": "dusk-page-objects",
  "level": 4
}, {
  "value": "Dusk Component Objects",
  "id": "dusk-component-objects",
  "level": 4
}, {
  "value": "10.8 Laravel Telescope",
  "id": "108-laravel-telescope",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation-1",
  "level": 4
}, {
  "value": "Dashboard Tabs",
  "id": "dashboard-tabs",
  "level": 4
}, {
  "value": "Filtering",
  "id": "filtering",
  "level": 4
}, {
  "value": "Tagging",
  "id": "tagging",
  "level": 4
}, {
  "value": "Customization",
  "id": "customization",
  "level": 4
}, {
  "value": "10.9 Laravel Pulse",
  "id": "109-laravel-pulse",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation-2",
  "level": 4
}, {
  "value": "Dashboard Cards",
  "id": "dashboard-cards",
  "level": 4
}, {
  "value": "Custom Cards",
  "id": "custom-cards",
  "level": 4
}, {
  "value": "Recording Entries",
  "id": "recording-entries",
  "level": 4
}, {
  "value": "10.10 Debugging Tools",
  "id": "1010-debugging-tools",
  "level": 3
}, {
  "value": "dd() vs dump()",
  "id": "dd-vs-dump",
  "level": 4
}, {
  "value": "Ray PHP Debugger",
  "id": "ray-php-debugger",
  "level": 4
}, {
  "value": "Laravel Debugbar",
  "id": "laravel-debugbar",
  "level": 4
}, {
  "value": "Ignition",
  "id": "ignition",
  "level": 4
}, {
  "value": "10.11 Complete Example: API Test Suite",
  "id": "1011-complete-example-api-test-suite",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Test Assertions",
  "id": "quick-reference--test-assertions",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-10-testing-debugging--observability",
        children: "Chapter 10: Testing, Debugging & Observability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./09-container-packages",
          children: "Service Container, Facades & Package Development"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./11-caching-performance",
          children: "Caching, Performance & Octane"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure PHPUnit and PEST testing frameworks within a Laravel application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write and execute HTTP, database, feature, and unit tests using both PHPUnit and PEST syntax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement mock objects, fakes, and stubs to isolate test concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build browser-level test suites with Laravel Dusk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install and configure Laravel Telescope and Pulse for observability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug application issues using Laravel's debugging toolchain"
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
        href: "../../assets/images/lessons/laravel/10-testing-observability/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/10-testing-observability/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/10-testing-observability/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/10-testing-observability/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/10-testing-observability/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/10-testing-observability/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHPUnit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration, test directory structure, artisan test runner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent syntax, expectations, arch tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request simulation, response assertions, auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factories, states, sequences, assertions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature vs Unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope, speed, decision guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mocks & Fakes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus, Event, Mail, Notification, Queue, Storage, Http"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dusk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser testing, page objects, components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telescope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug dashboard, filtering, tagging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pulse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production monitoring, custom cards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dd(), Ray, Debugbar, Ignition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[PHPUnit Config] --> B[PEST Syntax]\n    B --> C[HTTP Tests]\n    B --> D[Database Tests]\n    C --> E[Feature Tests]\n    C --> F[Unit Tests]\n    E --> G[Mocks & Fakes]\n    F --> G\n    G --> H[Dusk Browser Tests]\n    H --> I[Telescope]\n    I --> J[Pulse]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel provides a comprehensive testing ecosystem from unit tests through browser tests with deep observability tooling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/10-testing-observability.png",
        alt: "Testing and Observability"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-phpunit-in-laravel",
      children: "10.1 PHPUnit in Laravel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel ships with PHPUnit configured via phpunit.xml.dist, supporting parallel testing and multiple database migration traits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel ships with PHPUnit as its default testing framework. PHPUnit's configuration is managed through either ", (0,jsx_runtime.jsx)(_components.code, {
        children: "phpunit.xml"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "phpunit.xml.dist"
      }), " at the project root. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".dist"
      }), " variant is committed to version control as the canonical configuration, while a local ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".xml"
      }), " file (gitignored) can override settings per-environment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<phpunit xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:noNamespaceSchemaLocation=\"vendor/phpunit/phpunit/phpunit.xsd\"\n         bootstrap=\"vendor/autoload.php\"\n         colors=\"true\"\n         cacheDirectory=\".phpunit.cache\"\n         displayDetailsOnTestsThatTriggerWarnings=\"true\"\n         failOnDeprecation=\"true\"\n         failOnPhpDeprecation=\"true\">\n    <testsuites>\n        <testsuite name=\"Unit\">\n            <directory>tests/Unit</directory>\n        </testsuite>\n        <testsuite name=\"Feature\">\n            <directory>tests/Feature</directory>\n        </testsuite>\n    </testsuites>\n    <source>\n        <include>\n            <directory>app</directory>\n        </include>\n    </source>\n    <php>\n        <env name=\"APP_ENV\" value=\"testing\"/>\n        <env name=\"DB_CONNECTION\" value=\"sqlite\"/>\n        <env name=\"DB_DATABASE\" value=\":memory:\"/>\n        <env name=\"MAIL_MAILER\" value=\"array\"/>\n        <env name=\"QUEUE_CONNECTION\" value=\"sync\"/>\n        <env name=\"SESSION_DRIVER\" value=\"array\"/>\n    </php>\n</phpunit>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "test-directory-structure",
      children: "Test Directory Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/"
      }), " directory is organized into:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tests/Unit/"
          })
        }), " → Tests that focus on a single class in isolation. No database, no HTTP request cycle. Fast execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tests/Feature/"
          })
        }), " → Tests that exercise a full request/response cycle. These typically touch the database, middleware, routing, and controllers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/\n├── Feature/\n│   ├── Auth/\n│   │   └── AuthenticationTest.php\n│   ├── Api/\n│   │   └── PostControllerTest.php\n│   └── ExampleTest.php\n├── Unit/\n│   ├── Services/\n│   │   └── PaymentGatewayTest.php\n│   └── ExampleTest.php\n└── TestCase.php\n        └── DuskTestCase.php\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-artisan-test-runner",
      children: "The Artisan Test Runner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan test"
      }), " to run tests. This provides a more colorful, filtered experience than bare ", (0,jsx_runtime.jsx)(_components.code, {
        children: "./vendor/bin/phpunit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run all tests\nphp artisan test\n\n# Run only tests in a directory\nphp artisan test --testsuite=Feature\n\n# Run a specific file\nphp artisan test tests/Feature/PostControllerTest.php\n\n> **Pro Tip:** Use `php artisan test --parallel` (Laravel 11+) to run tests across multiple worker processes. Combined with `RefreshDatabase`, this can cut CI test suite time by 60-80% with zero configuration.\n\n# Run tests matching a name\nphp artisan test --filter=can_create_post\n\n# Run tests in parallel (Laravel 11+)\nphp artisan test --parallel\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Parallel testing spawns multiple worker processes, each running a subset of test classes. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RefreshDatabase"
      }), " trait automatically handles database isolation per worker."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "setup--teardown",
      children: "setUp / tearDown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setUp"
      }), " method runs before each test method; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tearDown"
      }), " runs after. Always call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parent::setUp()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Tests\\Unit;\n\nuse PHPUnit\\Framework\\TestCase;\nuse App\\Services\\Calculator;\n\nclass CalculatorTest extends TestCase\n{\n    protected Calculator $calculator;\n\n    protected function setUp(): void\n    {\n        parent::setUp();\n        $this->calculator = new Calculator();\n    }\n\n    public function test_addition(): void\n    {\n        $this->assertEquals(4, $this->calculator->add(2, 2));\n    }\n\n    protected function tearDown(): void\n    {\n        // cleanup resources\n        parent::tearDown();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "database-migration-traits",
      children: "Database Migration Traits"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel provides three traits for managing database state between tests:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RefreshDatabase"
      }), " → Migrates the database before the first test and wraps every test in a database transaction that is rolled back after each test. Best for SQLite in-memory and PostgreSQL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Tests\\Feature;\n\nuse Tests\\TestCase;\nuse Illuminate\\Foundation\\Testing\\RefreshDatabase;\nuse App\\Models\\User;\n\nclass UserControllerTest extends TestCase\n{\n    use RefreshDatabase;\n\n    public function test_can_list_users(): void\n    {\n        User::factory()->count(3)->create();\n\n        $response = $this->getJson('/api/users');\n\n        $response->assertOk();\n        $response->assertJsonCount(3, 'data');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DatabaseMigrations"
      }), " → Runs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan migrate:fresh"
      }), " before each test. Slower than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RefreshDatabase"
      }), " but useful for databases that do not support transactional rollback (some cloud DBAAS setups)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DatabaseTruncation"
      }), " → Truncates all tables before each test. Faster than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DatabaseMigrations"
      }), " but slower than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RefreshDatabase"
      }), ". Specify tables to exclude via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$except"
      }), " property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Foundation\\Testing\\DatabaseTruncation;\n\nclass TeamControllerTest extends TestCase\n{\n    use DatabaseTruncation;\n\n    protected array $exceptFromTruncation = ['countries'];\n\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-pest",
      children: "10.2 PEST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " PEST provides expressive testing syntax with it(), describe(), expectations, higher-order tests, and architectural constraint enforcement."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PEST is a test framework built on top of PHPUnit that provides a more expressive, fluent syntax. It ships with Laravel by default. PEST functions replace PHPUnit's class-and-method structure with standalone functions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic-structure",
      children: "Basic Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Models\\User;\nuse function Pest\\Laravel\\get;\n\n// it() → describe what the test does\nit('has a welcome page', function () {\n    $response = get('/');\n\n    $response->assertStatus(200);\n});\n\n// test() → alias for it()\ntest('guests are redirected to login', function () {\n    $response = get('/dashboard');\n\n    $response->assertRedirect('/login');\n});\n\n// describe() → groups related tests\ndescribe('authentication', function () {\n    it('requires an email', function () {\n        // ...\n    });\n\n    it('requires a password', function () {\n        // ...\n    });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pest-expectations",
      children: "PEST Expectations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PEST includes a standalone expectation API (", (0,jsx_runtime.jsx)(_components.code, {
        children: "expect()"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('demonstrates expectations', function () {\n    expect(true)->toBeTrue();\n    expect(false)->toBeFalse();\n    expect([1, 2, 3])->toContain(2);\n    expect([])->toBeEmpty();\n    expect(10)->toEqual(10);\n    expect(42)->toBeGreaterThan(10);\n    expect([1, 2, 3])->toHaveCount(3);\n    expect('hello world')->toContain('world');\n    expect($user->name)->toBeString();\n    expect($user->age)->toBeInt();\n    expect(null)->toBeNull();\n    expect($exception)->toThrow(\\InvalidArgumentException::class);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "higher-order-tests",
      children: "Higher-Order Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PEST allows chaining methods on test subjects without wrapping them in closures:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('has a name')\n    ->expect(fn () => new User(['name' => 'John']))\n    ->name->toEqual('John');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "arch-tests",
      children: "Arch Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PEST arch tests enforce architectural rules across your codebase:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "arch('globals')\n    ->expect(['dd', 'dump', 'ray', 'var_dump'])\n    ->not->toBeUsed();\n\narch('strict types')\n    ->expect('App')\n    ->toUseStrictTypes();\n\narch('services')\n    ->expect('App\\Services')\n    ->toExtendNothing()\n    ->toOnlyBeUsedIn(['App\\Http\\Controllers', 'App\\Services']);\n\narch('controllers')\n    ->expect('App\\Http\\Controllers')\n    ->toHaveMethod('__invoke');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-http-tests",
      children: "10.3 HTTP Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " HTTP test helpers simulate the full request/response cycle with rich assertion methods for status codes, JSON, sessions, and database state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP tests simulate full HTTP requests against your application. Use Laravel's built-in test helpers to call routes and assert against responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "making-requests",
      children: "Making Requests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse function Pest\\Laravel\\get;\nuse function Pest\\Laravel\\post;\nuse function Pest\\Laravel\\put;\nuse function Pest\\Laravel\\patch;\nuse function Pest\\Laravel\\delete;\n\nit('fetches all posts', function () {\n    get('/api/posts')->assertOk();\n});\n\nit('creates a post', function () {\n    post('/api/posts', [\n        'title' => 'New Post',\n        'body' => 'Content here',\n    ])->assertCreated();\n});\n\nit('updates a post', function () {\n    put('/api/posts/1', ['title' => 'Updated'])->assertOk();\n});\n\nit('partially updates a post', function () {\n    patch('/api/posts/1', ['title' => 'Partially Updated'])->assertOk();\n});\n\nit('deletes a post', function () {\n    delete('/api/posts/1')->assertNoContent();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "headers-tokens-sessions",
      children: "Headers, Tokens, Sessions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('requires an API token', function () {\n    get('/api/user')\n        ->assertStatus(401);\n});\n\nit('accepts requests with a token', function () {\n    get('/api/user', [\n        'Authorization' => 'Bearer ' . $token,\n    ])->assertOk();\n\n    // or using withToken()\n    get('/api/user')\n        ->withToken($token)\n        ->assertOk();\n});\n\nit('can set custom headers', function () {\n    get('/api/posts')\n        ->withHeaders([\n            'X-Request-Id' => 'abc-123',\n            'Accept-Language' => 'fr',\n        ])\n        ->assertOk();\n});\n\nit('can set session data', function () {\n    get('/dashboard')\n        ->withSession(['locale' => 'fr'])\n        ->assertOk();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "authentication-in-tests",
      children: "Authentication in Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('can access own profile', function () {\n    $user = User::factory()->create();\n\n    actingAs($user)->get('/api/user')->assertOk();\n});\n\nit('can filter posts by authenticated user', function () {\n    $user = User::factory()->create();\n\n    actingAs($user)->getJson('/api/posts?mine=true')\n        ->assertOk()\n        ->assertJsonCount(0, 'data');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "response-assertions",
      children: "Response Assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('asserts response details', function () {\n    $response = get('/posts/1');\n\n    $response\n        ->assertStatus(200)\n        ->assertOk()\n        ->assertCreated()       // 201\n        ->assertNoContent()     // 204\n        ->assertRedirect('/login')\n        ->assertViewHas('post')\n        ->assertSee('Post Title');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "json-assertions",
      children: "JSON Assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('asserts json response structure', function () {\n    $response = getJson('/api/posts/1');\n\n    $response\n        ->assertJson([\n            'id' => 1,\n            'title' => 'some title',\n        ])\n        ->assertJsonStructure([\n            'id',\n            'title',\n            'body',\n            'author' => ['id', 'name'],\n        ])\n        ->assertJsonPath('author.name', 'John Doe')\n        ->assertJsonFragment(['tag' => 'laravel'])\n        ->assertJsonCount(3, 'comments');\n});\n\nit('asserts exact json match', function () {\n    getJson('/api/posts')\n        ->assertExactJson([\n            'data' => [\n                'id' => 1,\n                'title' => 'Exact Title',\n            ],\n        ]);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "session--database-assertions",
      children: "Session & Database Assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('stores data in session', function () {\n    post('/login', ['email' => 'test@example.com'])\n        ->assertSessionHas('status', 'logged-in')\n        ->assertSessionHasNoErrors();\n});\n\nit('persists records to database', function () {\n    post('/posts', ['title' => 'Test Post'])\n        ->assertDatabaseHas('posts', ['title' => 'Test Post'])\n        ->assertDatabaseMissing('posts', ['title' => 'Nonexistent']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-database-tests",
      children: "10.4 Database Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "model-factories",
      children: "Model Factories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Factories generate test data. Define them in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "database/factories/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PostFactory extends Factory\n{\n    protected $model = Post::class;\n\n    public function definition(): array\n    {\n        return [\n            'title' => fake()->sentence(),\n            'body' => fake()->paragraphs(3, true),\n            'published_at' => fake()->optional()->dateTime(),\n            'user_id' => User::factory(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "state-modifiers",
      children: "State Modifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PostFactory extends Factory\n{\n    public function published(): static\n    {\n        return $this->state(fn (array $attributes) => [\n            'published_at' => now(),\n        ]);\n    }\n\n    public function draft(): static\n    {\n        return $this->state(fn (array $attributes) => [\n            'published_at' => null,\n        ]);\n    }\n}\n\n// Usage\nPost::factory()->published()->count(10)->create();\nPost::factory()->draft()->count(3)->create();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sequences",
      children: "Sequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Post::factory()->count(4)\n    ->sequence(\n        ['published_at' => now()->subDays(3)],\n        ['published_at' => now()->subDays(2)],\n        ['published_at' => now()->subDays(1)],\n        ['published_at' => now()],\n    )\n    ->create();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "faker-locale",
      children: "Faker Locale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/app.php\n'faker_locale' => 'en_US',\n\n// Or per-factory\npublic function definition(): array\n{\n    return [\n        'name' => fake('fr_FR')->name(),\n        'address' => fake('de_DE')->address(),\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-database-test-example",
      children: "Full Database Test Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Models\\Post;\nuse App\\Models\\User;\nuse function Pest\\Laravel\\actingAs;\nuse function Pest\\Laravel\\assertDatabaseHas;\nuse function Pest\\Laravel\\assertDatabaseMissing;\nuse function Pest\\Laravel\\postJson;\n\nuses(\\Illuminate\\Foundation\\Testing\\RefreshDatabase::class);\n\nit('creates a post as authenticated user', function () {\n    $user = User::factory()->create();\n\n    actingAs($user)\n        ->postJson('/api/posts', [\n            'title' => 'My First Post',\n            'body' => 'This is the body content',\n        ])\n        ->assertCreated()\n        ->assertJsonPath('data.title', 'My First Post');\n\n    assertDatabaseHas('posts', [\n        'title' => 'My First Post',\n        'user_id' => $user->id,\n    ]);\n});\n\nit('prevents unauthenticated creation', function () {\n    postJson('/api/posts', [\n        'title' => 'Hacked Post',\n    ])->assertUnauthorized();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-feature-vs-unit-tests",
      children: "10.5 Feature vs. Unit Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Feature tests exercise the full stack while unit tests isolate single classes; the choice depends on whether you need integration confidence or fast feedback."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feature Tests"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unit Tests"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full request/response cycle, middleware, routing, controller, database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single class or method in isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (boot app, hit database, run middleware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, typically with RefreshDatabase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (mock/stub dependencies)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → tests the system as a user would"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate → verifies unit logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers, API endpoints, full workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Services, helpers, value objects, formatters"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "decision-guide",
      children: "Decision Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Feature tests"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing an HTTP endpoint end-to-end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validating authentication, authorization, or middleware behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifying database side effects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing API contract and JSON structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unit tests"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing a pure business logic class (service, calculator, validator)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The class has no external dependencies, or dependencies are easily mocked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need fast feedback during TDD cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You are testing edge cases in algorithmic logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// Unit Test → pure logic, no Laravel boot\nnamespace Tests\\Unit;\n\nuse PHPUnit\\Framework\\TestCase;\nuse App\\Services\\ShippingCalculator;\n\nclass ShippingCalculatorTest extends TestCase\n{\n    public function test_calculates_standard_shipping(): void\n    {\n        $calculator = new ShippingCalculator();\n\n        $cost = $calculator->calculate(weight: 2.5, destination: 'US');\n\n        $this->assertEquals(12.99, $cost);\n    }\n\n    public function test_negative_weight_throws_exception(): void\n    {\n        $this->expectException(\\InvalidArgumentException::class);\n\n        $calculator = new ShippingCalculator();\n        $calculator->calculate(weight: -1, destination: 'US');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-mocks--fakes",
      children: "10.6 Mocks & Fakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel's system of fakes (Bus, Event, Mail, Notification, Http, Storage, Queue) prevents side effects and enables precise assertions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mockery",
      children: "Mockery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel integrates Mockery for creating mock objects. Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->mock()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->partialMock()"
      }), " on the test base class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Tests\\Feature;\n\nuse Tests\\TestCase;\nuse App\\Services\\PaymentGateway;\n\nclass PaymentControllerTest extends TestCase\n{\n    public function test_processes_payment(): void\n    {\n        $this->mock(PaymentGateway::class, function ($mock) {\n            $mock->shouldReceive('charge')\n                ->once()\n                ->with(50.00, 'tok_visa')\n                ->andReturn(['status' => 'success', 'id' => 'ch_123']);\n        });\n\n        $response = $this->postJson('/api/payments', [\n            'amount' => 50.00,\n            'token' => 'tok_visa',\n        ]);\n\n        $response->assertOk();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partial mocks"
      }), " allow some methods to work normally while others are stubbed:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->partialMock(NotificationService::class, function ($mock) {\n    $mock->shouldReceive('sendSms')->once();\n    // sendEmail() still works normally\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bus-fake",
      children: "Bus Fake"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Bus;\n\nit('dispatches a job', function () {\n    Bus::fake();\n\n    post('/api/import', ['csv' => $csv]);\n\n    Bus::assertDispatched(ImportCsvJob::class);\n    Bus::assertNotDispatched(ExportPdfJob::class);\n    Bus::assertDispatched(function (ImportCsvJob $job) use ($user) {\n        return $job->user->id === $user->id;\n    });\n    Bus::assertDispatchedTimes(ImportCsvJob::class, 1);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-fake",
      children: "Event Fake"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Event;\n\nit('fires an event on registration', function () {\n    Event::fake();\n    Event::fake([UserRegistered::class]);\n\n    post('/register', $validData);\n\n    Event::assertDispatched(UserRegistered::class);\n    Event::assertDispatched(function (UserRegistered $event) use ($user) {\n        return $event->user->email === 'test@example.com';\n    });\n    Event::assertNotDispatched(AdminNotification::class);\n    Event::assertDispatchedTimes(UserRegistered::class, 1);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mail-fake",
      children: "Mail Fake"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Mail;\n\nit('sends welcome email', function () {\n    Mail::fake();\n\n    post('/register', $validData);\n\n    Mail::assertSent(WelcomeMail::class);\n    Mail::assertSent(WelcomeMail::class, function (WelcomeMail $mail) {\n        return $mail->hasTo('test@example.com');\n    });\n    Mail::assertSentCount(1);\n    Mail::assertNotSent(AdminAlertMail::class);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "notification-fake",
      children: "Notification Fake"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Notification;\n\nit('notifies user on payment', function () {\n    Notification::fake();\n\n    post('/payments', $validData);\n\n    Notification::assertSentTo(\n        $user,\n        PaymentReceivedNotification::class\n    );\n\n    Notification::assertSentTo(\n        [$user, $admin],\n        PaymentReceivedNotification::class\n    );\n\n    Notification::assertNotSentTo(\n        $user,\n        PaymentFailedNotification::class\n    );\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "queue-fake",
      children: "Queue Fake"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Queue;\n\nit('pushes a job to the queue', function () {\n    Queue::fake();\n\n    post('/api/resize', ['image' => $image]);\n\n    Queue::assertPushed(ResizeImage::class);\n    Queue::assertPushedOn('images', ResizeImage::class);\n    Queue::assertNotPushed(DeleteImage::class);\n    Queue::assertPushedTimes(ResizeImage::class, 1);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "storage-fake",
      children: "Storage Fake"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Storage;\n\nit('uploads a file', function () {\n    Storage::fake('s3');\n\n    post('/api/avatar', ['avatar' => $file]);\n\n    Storage::disk('s3')->assertExists('avatars/' . $file->hashName());\n    Storage::disk('s3')->assertMissing('avatars/evil.exe');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "http-fake",
      children: "Http Fake"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Http;\n\nit('fetches external weather data', function () {\n    Http::fake([\n        'api.weather.com/*' => Http::response([\n            'temp' => 22.5,\n            'unit' => 'celsius',\n        ], 200),\n    ]);\n\n    $response = getJson('/api/weather?city=London');\n\n    $response->assertJsonPath('temp', 22.5);\n});\n\nit('asserts exact requests were sent', function () {\n    Http::fake();\n\n    post('/api/weather-report', ['city' => 'Paris']);\n\n    Http::assertSent(function (\\Illuminate\\Http\\Client\\Request $request) {\n        return $request->url() === 'https://api.weather.com/current' &&\n               $request['city'] === 'Paris';\n    });\n\n    Http::assertSentCount(1);\n    Http::assertNothingSent(); // no unmatched requests\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-browser-tests-with-dusk",
      children: "10.7 Browser Tests with Dusk"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Dusk provides browser-level testing with element interaction, page objects, and component objects driven by a real Chrome instance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel Dusk provides browser testing using a real Chrome instance. It does not require JDK or Selenium → just Chrome and the ChromeDriver."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require laravel/dusk --dev\nphp artisan dusk:install\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This publishes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/Browser/DuskTestCase.php"
      }), " and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/Browser/"
      }), " directory. The ChromeDriver binary is managed via:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan dusk:chrome-driver\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "writing-dusk-tests",
      children: "Writing Dusk Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Tests\\Browser;\n\nuse App\\Models\\User;\nuse Tests\\DuskTestCase;\nuse Laravel\\Dusk\\Browser;\n\nclass LoginTest extends DuskTestCase\n{\n    public function test_user_can_login(): void\n    {\n        $user = User::factory()->create([\n            'email' => 'user@example.com',\n            'password' => bcrypt('password'),\n        ]);\n\n        $this->browse(function (Browser $browser) use ($user) {\n            $browser->visit('/login')\n                ->type('email', $user->email)\n                ->type('password', 'password')\n                ->press('Login')\n                ->assertPathIs('/dashboard')\n                ->assertSee('Welcome back!');\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "element-interaction",
      children: "Element Interaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$browser->click('.selector')\n\n> **Remember:** Dusk tests run in a real Chrome instance. Use `->screenshot('name')` during test development to capture the browser state when tests fail — it's invaluable for debugging failing selectors or assertions.\n    ->clickLink('Read More')\n    ->click('#submit-btn')\n    ->type('input[name=\"email\"]', 'test@example.com')\n    ->append('textarea', ' additional text')\n    ->clear('input[name=\"search\"]')\n    ->select('country', 'US')\n    ->check('terms')\n    ->uncheck('newsletter')\n    ->radio('plan', 'premium')\n    ->attach('photo', __DIR__ . '/stubs/photo.jpg')\n    ->pause(500)\n    ->waitForText('Processing')\n    ->waitUntilMissing('.spinner')\n    ->waitForLocation('/dashboard')\n    ->waitForRoute('dashboard')\n    ->waitForReload();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dusk-assertions",
      children: "Dusk Assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$browser->assertSee('Welcome')\n    ->assertDontSee('Error')\n    ->assertSeeIn('.title', 'Post Title')\n    ->assertSeeLink('Learn More')\n    ->assertAttribute('#submit', 'disabled', 'true')\n    ->assertSelected('country', 'US')\n    ->assertChecked('terms')\n    ->assertNotChecked('marketing')\n    ->assertRadioSelected('plan', 'premium')\n    ->assertInputValue('email', 'test@example.com')\n    ->assertVisible('.nav-bar')\n    ->assertMissing('.error-message')\n    ->assertVue('user.name', 'John', '@user-profile')\n    ->assertPresent('.modal')\n    ->assertFocused('#email')\n    ->assertUrlIs('https://example.com/login')\n    ->assertQueryStringHas('ref', 'homepage');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dusk-page-objects",
      children: "Dusk Page Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Page objects encapsulate selectors and behavior for a page:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan dusk:page Login\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Tests\\Browser\\Pages;\n\nuse Laravel\\Dusk\\Browser;\n\nclass LoginPage extends Page\n{\n    public function url(): string\n    {\n        return '/login';\n    }\n\n    public function login(Browser $browser, string $email, string $password): void\n    {\n        $browser->type('@email', $email)\n            ->type('@password', $password)\n            ->press('@login-button');\n    }\n\n    public function elements(): array\n    {\n        return [\n            '@email' => 'input[name=\"email\"]',\n            '@password' => 'input[name=\"password\"]',\n            '@login-button' => 'button[type=\"submit\"]',\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->browse(function (Browser $browser) use ($user) {\n    $browser->visit(new LoginPage)\n        ->login($user->email, 'password')\n        ->assertPathIs('/dashboard');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dusk-component-objects",
      children: "Dusk Component Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Components represent reusable UI elements:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan dusk:component DatePicker\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Tests\\Browser\\Components;\n\nuse Laravel\\Dusk\\Browser;\nuse Laravel\\Dusk\\Component;\n\nclass DatePicker extends Component\n{\n    public function selector(): string\n    {\n        return '.date-picker';\n    }\n\n    public function selectDate(Browser $browser, int $day): void\n    {\n        $browser->click('.date-picker-trigger')\n            ->waitFor('.calendar')\n            ->click(\".calendar-day[data-day='{$day}']\");\n    }\n\n    public function elements(): array\n    {\n        return [\n            '@trigger' => '.date-picker-trigger',\n            '@calendar' => '.calendar',\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "108-laravel-telescope",
      children: "10.8 Laravel Telescope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Telescope offers deep development-time observability across requests, queries, jobs, mail, and cache with filtering and tagging."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Telescope provides deep insight into every aspect of your application during local development."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation-1",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require laravel/telescope --dev\nphp artisan telescope:install\nphp artisan migrate\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Access Telescope at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/telescope"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dashboard-tabs",
      children: "Dashboard Tabs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requests"
        }), " → Every HTTP request with status, duration, SQL queries, view data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commands"
        }), " → Artisan commands with arguments, output, timing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduled Tasks"
        }), " → Cron task execution details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jobs"
        }), " → Queued job lifecycle (dispatched, processing, failed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exceptions"
        }), " → Stack traces, request context, user context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logs"
        }), " → Log channel output, searchable and filterable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dumps"
        }), " → Captures ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dump()"
        }), " output for later review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Queries"
        }), " → Slow query warnings, N+1 detection, full SQL bindings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Models"
        }), " → Model hydration counts, watched model events"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mail"
        }), " → Rendered mail preview, attachments, headers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notifications"
        }), " → Notification delivery and content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache"
        }), " → Cache hits/misses, keys, TTL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redis"
        }), " → Redis command monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "filtering",
      children: "Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use App\\Models\\User;\nuse Laravel\\Telescope\\Telescope;\nuse Laravel\\Telescope\\IncomingEntry;\n\n// In App\\Providers\\TelescopeServiceProvider\nprotected function gate(): void\n{\n    Gate::define('viewTelescope', function (?User $user) {\n\n> **Warning:** Never deploy Telescope with the default access gate in production. Always restrict access to admin users only, and consider using Pulse instead for production monitoring — Telescope is designed for local development.\n        return $user?->isAdmin() ?? false;\n    });\n}\n\nTelescope::filter(function (IncomingEntry $entry) {\n    if ($this->app->isLocal()) {\n        return true;\n    }\n\n    return $entry->isReportableException() ||\n           $entry->isFailedJob() ||\n           $entry->isScheduledTask() ||\n           $entry->isSlowRequest();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tagging",
      children: "Tagging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Telescope::tag(function (IncomingEntry $entry) {\n    if ($entry->type === 'request') {\n        return [\n            'status:' . $entry->content['response_status'],\n            'method:' . $entry->content['method'],\n        ];\n    }\n\n    return [];\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "customization",
      children: "Customization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch entries for performance:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/telescope.php\n'batch' => env('TELESCOPE_BATCH', 100),\n\n// Storage driver\n'storage' => [\n    'driver' => env('TELESCOPE_STORAGE', 'database'),\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-laravel-pulse",
      children: "10.9 Laravel Pulse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Pulse delivers real-time production monitoring via dashboard cards for servers, slow queries, jobs, exceptions, and cache performance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pulse is a real-time application monitoring dashboard for production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation-2",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require laravel/pulse\nphp artisan vendor:publish --provider=\"Laravel\\Pulse\\PulseServiceProvider\"\nphp artisan migrate\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Access Pulse at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/pulse"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dashboard-cards",
      children: "Dashboard Cards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Servers"
        }), " → CPU, memory, disk, network usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application Health"
        }), " → Application uptime and health check results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow Queries"
        }), " → Top queries by execution time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow Jobs"
        }), " → Queued jobs exceeding thresholds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow Requests"
        }), " → Slowest HTTP requests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Usage"
        }), " → Top users, routes, countries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exceptions"
        }), " → Exception frequency grouped by class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache"
        }), " → Cache hit/miss ratio"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-cards",
      children: "Custom Cards"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan pulse:card AnalyticsCard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Livewire\\Pulse;\n\nuse Laravel\\Pulse\\Livewire\\Card;\n\nclass AnalyticsCard extends Card\n{\n    public function render()\n    {\n        return view('livewire.pulse.analytics-card', [\n            'users' => User::count(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Register in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/pulse.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'cards' => [\n    \\App\\Livewire\\Pulse\\AnalyticsCard::class,\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "recording-entries",
      children: "Recording Entries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Laravel\\Pulse\\Facades\\Pulse;\n\nPulse::record('user_signups', $count)\n    ->count()\n    ->avg()\n    ->max();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1010-debugging-tools",
      children: "10.10 Debugging Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dd-vs-dump",
      children: "dd() vs dump()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Dump and die → halts execution\ndd($user, $request->all(), 'debug point');\n\n// Dump → continues execution\ndump($user);\n\n// Multi-user debugging → only dumps for specific users\ndd()->where(auth()->user());\ndd()->where(request()->ip() === '192.168.1.1');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "dd()->where()"
      }), " is invaluable in production-like environments where you need to debug a specific user without disrupting others. The condition determines when output appears; all other requests proceed normally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ray-php-debugger",
      children: "Ray PHP Debugger"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require spatie/ray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "ray($user);\nray()->queries();       // show all SQL queries\nray()->count('items');  // count occurrences in a loop\nray()->measure();       // execution time measurement\nray()->json($data);     // pretty-print JSON\nray()->newScreen();     // clear Ray screen\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-debugbar",
      children: "Laravel Debugbar"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require barryvdh/laravel-debugbar --dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provides an in-browser toolbar showing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route information and middleware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All SQL queries with bindings and execution time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory usage and peak memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Loaded views and their data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logged messages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ignition",
      children: "Ignition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel's default error page with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executable code snippets at the error line"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Environment and request context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route, controller, and view details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI-powered solution suggestions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shareable error report URLs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom tabs for Telescope, Log entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1011-complete-example-api-test-suite",
      children: "10.11 Complete Example: API Test Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is a full test suite for a blog API using PEST and HTTP tests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Models\\Post;\nuse App\\Models\\User;\nuse App\\Models\\Comment;\nuse Illuminate\\Support\\Str;\nuse function Pest\\Laravel\\actingAs;\nuse function Pest\\Laravel\\assertDatabaseHas;\nuse function Pest\\Laravel\\assertDatabaseMissing;\nuse function Pest\\Laravel\\getJson;\nuse function Pest\\Laravel\\postJson;\nuse function Pest\\Laravel\\putJson;\nuse function Pest\\Laravel\\deleteJson;\n\nuses(\\Illuminate\\Foundation\\Testing\\RefreshDatabase::class);\n\n// ─── List Posts ───────────────────────────────────────────────\n\ndescribe('GET /api/posts', function () {\n    it('returns paginated posts', function () {\n        Post::factory()->count(15)->create();\n\n        $response = getJson('/api/posts');\n\n        $response->assertOk()\n            ->assertJsonStructure([\n                'data' => [\n                    '*' => ['id', 'title', 'body', 'published_at', 'author'],\n                ],\n                'meta' => ['current_page', 'last_page', 'total'],\n            ])\n            ->assertJsonCount(10, 'data')\n            ->assertJsonPath('meta.total', 15);\n    });\n\n    it('only returns published posts by default', function () {\n        Post::factory()->published()->count(3)->create();\n        Post::factory()->draft()->count(2)->create();\n\n        $response = getJson('/api/posts');\n\n        $response->assertOk()\n            ->assertJsonCount(3, 'data');\n    });\n});\n\n// ─── Create Post ──────────────────────────────────────────────\n\ndescribe('POST /api/posts', function () {\n    it('creates a post when authenticated', function () {\n        $user = User::factory()->create();\n\n        $response = actingAs($user)->postJson('/api/posts', [\n            'title' => 'My New Post',\n            'body' => 'Detailed body content here.',\n        ]);\n\n        $response->assertCreated()\n            ->assertJsonPath('data.title', 'My New Post')\n            ->assertJsonStructure(['data' => ['id', 'title', 'body', 'author']]);\n\n        assertDatabaseHas('posts', [\n            'title' => 'My New Post',\n            'user_id' => $user->id,\n        ]);\n    });\n\n    it('rejects unauthenticated requests', function () {\n        postJson('/api/posts', [\n            'title' => 'Hacked Post',\n        ])->assertUnauthorized();\n    });\n\n    it('validates required fields', function () {\n        $user = User::factory()->create();\n\n        actingAs($user)\n            ->postJson('/api/posts', [])\n            ->assertUnprocessable()\n            ->assertJsonValidationErrors(['title', 'body']);\n    });\n\n    it('rejects titles longer than 255 characters', function () {\n        $user = User::factory()->create();\n\n        actingAs($user)->postJson('/api/posts', [\n            'title' => Str::repeat('A', 256),\n            'body' => 'Valid body',\n        ])->assertUnprocessable()\n            ->assertJsonValidationErrorFor('title');\n    });\n});\n\n// ─── Show Post ────────────────────────────────────────────────\n\ndescribe('GET /api/posts/{post}', function () {\n    it('returns a single post with comments', function () {\n        $post = Post::factory()\n            ->published()\n            ->has(Comment::factory()->count(3))\n            ->create();\n\n        $response = getJson(\"/api/posts/{$post->id}\");\n\n        $response->assertOk()\n            ->assertJsonPath('data.id', $post->id)\n            ->assertJsonCount(3, 'data.comments');\n    });\n\n    it('returns 404 for draft posts', function () {\n        $post = Post::factory()->draft()->create();\n\n        getJson(\"/api/posts/{$post->id}\")->assertNotFound();\n    });\n});\n\n// ─── Update Post ──────────────────────────────────────────────\n\ndescribe('PUT /api/posts/{post}', function () {\n    it('updates own post', function () {\n        $user = User::factory()->create();\n        $post = Post::factory()->for($user)->create();\n\n        actingAs($user)\n            ->putJson(\"/api/posts/{$post->id}\", [\n                'title' => 'Updated Title',\n            ])\n            ->assertOk()\n            ->assertJsonPath('data.title', 'Updated Title');\n\n        assertDatabaseHas('posts', [\n            'id' => $post->id,\n            'title' => 'Updated Title',\n        ]);\n    });\n\n    it('forbids updating another user post', function () {\n        $owner = User::factory()->create();\n        $intruder = User::factory()->create();\n        $post = Post::factory()->for($owner)->create();\n\n        actingAs($intruder)\n            ->putJson(\"/api/posts/{$post->id}\", [\n                'title' => 'Hacked',\n            ])\n            ->assertForbidden();\n    });\n});\n\n// ─── Delete Post ──────────────────────────────────────────────\n\ndescribe('DELETE /api/posts/{post}', function () {\n    it('deletes own post', function () {\n        $user = User::factory()->create();\n        $post = Post::factory()->for($user)->create();\n\n        actingAs($user)\n            ->deleteJson(\"/api/posts/{$post->id}\")\n            ->assertNoContent();\n\n        assertDatabaseMissing('posts', ['id' => $post->id]);\n    });\n\n    it('returns 404 for already deleted post', function () {\n        $user = User::factory()->create();\n        $post = Post::factory()->for($user)->create();\n\n        actingAs($user);\n        deleteJson(\"/api/posts/{$post->id}\")->assertNoContent();\n        deleteJson(\"/api/posts/{$post->id}\")->assertNotFound();\n    });\n});\n\n// ─── Arch rules ───────────────────────────────────────────────\n\narch('debug functions')\n    ->expect(['dd', 'dump', 'var_dump', 'ray'])\n    ->not->toBeUsed();\n\narch('controllers')\n    ->expect('App\\Http\\Controllers')\n    ->toHaveMethod('__invoke');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feature Tests"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unit Tests"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full request/response cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single class in isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (app boot, DB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (RefreshDatabase)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (mock/stub)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (system as user would)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (unit logic only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers, API, workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Services, helpers, formatters"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--test-assertions",
      children: "Quick Reference — Test Assertions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Assertion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertOk()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status 200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertCreated()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status 201"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertNoContent()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status 204"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertUnauthorized()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status 401"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertForbidden()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status 403"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertNotFound()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status 404"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertJsonPath('key', value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific JSON value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertDatabaseHas('table', [...])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database record exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertSessionHas('key')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session has value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blog"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E-Commerce"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SaaS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature + Unit mix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit-heavy + Integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fakes Used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mail, Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http, Queue, Mail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http, Notification, Queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dusk Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comment flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Onboarding flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telescope Focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query N+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant scoping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pulse Cards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Popular posts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-tier usage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. What is the difference between RefreshDatabase and DatabaseMigrations?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) RefreshDatabase wraps tests in transactions; DatabaseMigrations runs migrate:fresh before each test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) RefreshDatabase is for MySQL; DatabaseMigrations is for PostgreSQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) There is no difference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) RefreshDatabase is faster; DatabaseMigrations is more reliable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Which PEST feature enforces that dd() and dump() are not used in production code?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) it() blocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) describe() groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Arch tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Higher-order tests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. What does Bus::fake() do?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Prevents jobs from being dispatched"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Catches dispatched jobs for assertion without executing them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Fakes the queue connection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Creates fake job data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which tool is designed for production monitoring, not local development?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Telescope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Debugbar"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Pulse"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Ray"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-a, 2-c, 3-b, 4-c"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Laravel uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "phpunit.xml.dist"
        }), " for test configuration and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "php artisan test"
        }), " as the primary test runner, supporting parallel execution across multiple workers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PEST provides a more expressive testing syntax with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "it()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "describe()"
        }), ", expectations, higher-order tests, and architectural constraint enforcement."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP test helpers simulate the full request/response cycle, offering rich assertion methods for status codes, JSON structures, session data, and database state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model factories with state modifiers, sequences, and faker locale support generate realistic test data efficiently."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature tests exercise the full stack; unit tests isolate single classes. The choice depends on whether you need integration confidence or fast, focused feedback."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Laravel's fake system (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Bus::fake"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Event::fake"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Mail::fake"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Notification::fake"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Http::fake"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Storage::fake"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Queue::fake"
        }), ") prevents side effects and enables assertion of dispatched jobs, events, mail, and HTTP calls."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dusk provides browser-level testing with element interaction, assertions, page objects, and component objects, all driven by a real Chrome instance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Telescope offers deep development-time observability across requests, queries, jobs, mail, cache, and more, with filtering and tagging support."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pulse delivers real-time production monitoring via dashboard cards for servers, slow queries, slow jobs, exceptions, and cache performance."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The debugging toolchain includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dd()"
        }), " with conditional filtering, Ray, Debugbar, and Ignition error pages for rapid issue diagnosis."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RefreshDatabase"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DatabaseMigrations"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DatabaseTruncation"
          }), " traits? When would you choose each one?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a PEST arch test differ from a traditional unit test, and what architectural constraints can arch tests enforce?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the relationship between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Bus::fake()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Queue::fake()"
          }), ", and the actual queue worker. What happens if you dispatch a job without faking the bus?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When would you use a partial mock over a full mock in Mockery? Provide a concrete scenario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does Telescope's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Telescope::filter()"
          }), " method differ from its ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Telescope::tag()"
          }), " method in terms of purpose and API?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Write a PEST test suite for a team management API."
          }), " The API has endpoints:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GET /api/teams"
            }), " (list teams)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "POST /api/teams"
            }), " (create team)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PUT /api/teams/{team}"
            }), " (update team)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DELETE /api/teams/{team}"
            }), " (delete team)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "POST /api/teams/{team}/members"
            }), " (add member)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Teams have a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "name"
          }), " (required, unique), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "description"
          }), " (optional), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "owner_id"
          }), ". Only the owner can update or delete a team. Use factories, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RefreshDatabase"
          }), ", and test every validation rule. Include arch tests that forbid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dd()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dump()"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a notification test using fakes."
          }), " Create a test that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Registers a user via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "POST /api/register"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Asserts a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WelcomeNotification"
            }), " was sent to the new user"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Asserts the notification contains the user's name"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Asserts an admin was also notified via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NewRegistrationNotification"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Notification::fake()"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Mail::fake()"
            }), " simultaneously"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a Dusk page object for an order checkout flow."
          }), " The flow has three steps: cart review, shipping address, payment. Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CheckoutPage"
          }), " that exposes methods like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "reviewCart()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "enterShipping()"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "submitPayment()"
          }), ". Write a test that completes a full purchase with a fake credit card number and asserts the order confirmation page loads."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Telescope filtering for a production-like staging environment."
          }), " Write a service provider that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Restricts Telescope access to users with the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "admin"
            }), " role"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Only records entries with status >= 500, failed jobs, and scheduled task output"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tags request entries with the authenticated user's email and the response status code"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build a complete testing and observability pipeline for a multi-tenant SaaS application."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your application serves multiple organizations with shared database (scoped by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tenant_id"
      }), "). Implement the following:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Infrastructure:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TenantTestCase"
            }), " base class that sets ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tenant_id"
            }), " on every request via a custom middleware"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write a custom PEST helper ", (0,jsx_runtime.jsx)(_components.code, {
              children: "asTenantUser()"
            }), " that creates both a tenant and a user within that tenant"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TenantFactory"
            }), " state that generates unique subdomains for each tenant"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write arch tests ensuring no controller directly accesses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "request()->user()"
            }), " without tenant scoping"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Full API Test Suite:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write PEST tests for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /api/{tenant}/invoices"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "POST /api/{tenant}/invoices"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PUT /api/{tenant}/invoices/{invoice}"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Invoices must be scoped to the tenant; users from Tenant A must never see Tenant B's invoices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test that SoftDeletes work correctly across tenant boundaries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use sequences to create invoices with different statuses (draft, sent, paid, overdue)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Test reporting endpoint ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /api/{tenant}/invoices/report"
            }), " that aggregates totals by status"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assert cache entries are tagged by tenant ID"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Observability Configuration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure Pulse to show per-tenant cache hit ratios and slow queries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a Telescope custom watcher that tracks tenant-level authentication failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement a Debugbar data collector that shows the current tenant ID and subscription plan"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a custom Pulse card displaying the top 5 tenants by API request volume"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Browser Tests:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a Dusk test that logs in as Tenant A admin, navigates to the invoice creation page, fills a WYSIWYG editor, attaches a PDF, submits, and asserts the invoice appears in the list"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use Dusk page objects for the login flow, invoice form, and invoice list"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use Dusk component objects for the date picker and the WYSIWYG editor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assert that switching tenants in the UI correctly renders only that tenant's data"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance & Stress Testing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write a unit test that benchmarks invoice calculation for 10,000 line items (use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "withDataFaker"
            }), " for realistic data)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a performance test that hits the invoice listing endpoint 100 times in sequence and asserts p95 response time under 200ms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement a cache warmup strategy in your test bootstrap so that subsequent tests hit cache, not database"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Document all test coverage"
          }), " in a CI-ready format. The test suite must produce a JUnit XML report, an HTML coverage report, and a text summary of slowest tests (top 5 by duration). Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "phpunit.xml.dist"
          }), " environment variables to toggle between SQLite in-memory for CI and MySQL for local full-stack runs."]
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