"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32607],{

/***/ 86749
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_09_container_packages_md_742_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-09-container-packages-md-742.json
const site_docs_courses_laravel_09_container_packages_md_742_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/09-container-packages","title":"Chapter 9: Service Container, Facades & Package Development","description":"Previous Testing, Debugging & Observability","source":"@site/docs/courses/laravel/09-container-packages.md","sourceDirName":"courses/laravel","slug":"/laravel/09-container-packages","permalink":"/ai-engineering-journey/laravel/09-container-packages","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-container-packages","slug":"/laravel/09-container-packages","title":"Chapter 9: Service Container, Facades & Package Development","sidebar_label":"Chapter 9: Service Container, Facades & Package Development","sidebar_position":9},"sidebar":"course-laravel","previous":{"title":"Chapter 8: Broadcasting, Events & Real-Time Features","permalink":"/ai-engineering-journey/laravel/08-broadcasting-realtime"},"next":{"title":"Chapter 10: Testing, Debugging & Observability","permalink":"/ai-engineering-journey/laravel/10-testing-observability"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/09-container-packages.md


const frontMatter = {
	id: '09-container-packages',
	slug: '/laravel/09-container-packages',
	title: 'Chapter 9: Service Container, Facades & Package Development',
	sidebar_label: 'Chapter 9: Service Container, Facades & Package Development',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Service Container, Facades & Package Development';

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
  "value": "Service Container Deep Dive",
  "id": "service-container-deep-dive",
  "level": 3
}, {
  "value": "Service Providers",
  "id": "service-providers",
  "level": 3
}, {
  "value": "Facades",
  "id": "facades",
  "level": 3
}, {
  "value": "Package Development",
  "id": "package-development",
  "level": 3
}, {
  "value": "Custom Artisan Commands",
  "id": "custom-artisan-commands",
  "level": 3
}, {
  "value": "Scheduled Tasks",
  "id": "scheduled-tasks",
  "level": 3
}, {
  "value": "Process &amp; Concurrency",
  "id": "process--concurrency",
  "level": 3
}, {
  "value": "Example: Custom Analytics Package",
  "id": "example-custom-analytics-package",
  "level": 3
}, {
  "value": "Example: Custom Report Generation Command",
  "id": "example-custom-report-generation-command",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Container Methods",
  "id": "quick-reference--container-methods",
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
        id: "chapter-9-service-container-facades--package-development",
        children: "Chapter 9: Service Container, Facades & Package Development"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./08-broadcasting-realtime",
          children: "Broadcasting, Events & Real-Time Features"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./10-testing-observability",
          children: "Testing, Debugging & Observability"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the Laravel service container for dependency injection, interface binding, contextual resolution, and extension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement service providers with proper registration, booting, deferral, and ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand facade architecture, real-time facades, and the trade-offs between facades and dependency injection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build distributable Laravel packages with config publishing, migrations, views, routes, and Artisan commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create custom Artisan commands with complex input, output formatting, and progress feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule tasks, manage overlapping prevention, and leverage Laravel's concurrency primitives"
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
        href: "../../assets/images/lessons/laravel/09-container-packages/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/09-container-packages/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/09-container-packages/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/09-container-packages/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/09-container-packages/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/09-container-packages/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Service Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bind, singleton, contextual, extend, tagged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registration, booting, deferral"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Facades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static proxies, real-time facades, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery, publishing, service providers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan Commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature, input, output, progress bars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled Tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequencies, hooks, overlapping prevention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process facade, pools, Concurrency::run"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Service Container] --> B[Service Providers]\n    B --> C[Facades]\n    C --> D[Package Development]\n    D --> E[Artisan Commands]\n    E --> F[Scheduled Tasks]\n    F --> G[Concurrency & Processes]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The service container manages class dependencies and performs automatic resolution, serving as the foundation of Laravel's IoC architecture."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/09-container-packages.png",
        alt: "Service Container and Packages"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-container-deep-dive",
      children: "Service Container Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " bind() creates new instances on each resolution, singleton() returns the same instance, and contextual binding provides different implementations per consumer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The service container manages class dependencies and performs automatic resolution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "bind()"
        })
      }), " registers a concrete implementation; every resolution creates a new instance:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->app->bind(PaymentGateway::class, StripePaymentGateway::class);\n\n$this->app->bind(PaymentGateway::class, function (Application $app) {\n    return new StripePaymentGateway(config('services.stripe.secret'));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "singleton()"
        })
      }), " returns the same instance on every resolution:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->app->singleton(PaymentGateway::class, StripePaymentGateway::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "instance()"
        })
      }), " registers a pre-built object:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->app->instance(PaymentGateway::class, $gateway);\n// Useful in tests:\n$this->app->instance(PaymentGateway::class, $mockGateway);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tagged binding"
      }), " groups multiple bindings:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->app->tag([ReportPdfGenerator::class, ReportCsvGenerator::class], 'report-generators');\n\n$this->app->tagged('report-generators')->each(function (ReportGenerator $gen) {\n    $gen->setFormat($format);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Contextual binding"
      }), " provides different implementations per class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->app->when(PhotoController::class)\n    ->needs(FileStorage::class)\n    ->give(fn() => new S3Storage(config('filesystems.disks.s3')));\n\n$this->app->when(UserAvatarController::class)\n    ->needs(FileStorage::class)\n    ->give(fn() => new LocalStorage(storage_path('app/avatars')));\n\n$this->app->when(ReportGenerator::class)\n    ->needs('$maxRetries')\n    ->give(3);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "extend()"
        })
      }), " wraps a resolved instance with a decorator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->app->extend(PaymentGateway::class, function (PaymentGateway $gateway, Application $app) {\n    return new LoggingPaymentGateway($gateway);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Container events"
      }), " fire during resolution:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$this->app->resolving(PaymentGateway::class, function ($gateway, $app) { /* ... */ });\n$this->app->afterResolving(PaymentGateway::class, function ($gateway, $app) { /* ... */ });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-providers",
      children: "Service Providers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Providers follow register() for container bindings and boot() for using registered services; deferrable providers load only when their services are requested."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Providers bootstrap all framework components through two phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "register()"
          })
        }), " → Only container bindings. Never use events, routes, or middleware here."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "boot()"
          })
        }), " → Runs after all providers are registered. Safe to use registered services."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PaymentServiceProvider extends ServiceProvider\n{\n    public function register(): void\n    {\n        $this->app->singleton(PaymentGateway::class, fn($app) => new StripePaymentGateway(config('services.stripe.secret')));\n    }\n\n    public function boot(): void\n    {\n        RateLimiter::for('payments', fn() => Limit::perMinute(30));\n\n> **Remember:** Never resolve services from the container in the `register()` method. Only bind interfaces to implementations there. Service resolution belongs in `boot()` after all providers have registered their bindings.\n    }\n\n    public function provides(): array\n    {\n        return [PaymentGateway::class];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deferrable providers"
      }), " load only when their services are requested:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PaymentServiceProvider extends ServiceProvider implements DeferrableProvider\n{\n    public function register(): void\n    {\n        $this->app->singleton(PaymentGateway::class, StripePaymentGateway::class);\n    }\n\n    public function provides(): array\n    {\n        return [PaymentGateway::class];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "facades",
      children: "Facades"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Facades provide static-like proxies to container bindings; real-time facades use the Facades prefix for any class without creating a facade class."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Facades provide a static-like interface to container bindings."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How they work:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Cache extends Facade\n{\n    protected static function getFacadeAccessor(): string\n    {\n        return 'cache';\n    }\n}\n\n// Cache::get('key') resolves to:\n$resolved = app('cache');\n$resolved->get('key');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-time facades"
      }), " turn any class into a facade by prefixing with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Facades\\"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Facades\\App\\Services\\PaymentService;\n\n> **Pro Tip:** Real-time facades (prefixing any class with Facades) are excellent for prototyping. But for production, create explicit facades — they provide better IDE support and are more discoverable by other developers.\n\nPaymentService::charge(5000);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Facade vs DI trade-offs:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Facade"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dependency Injection"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Facade::shouldReceive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock via container swap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDE support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited without IDE helper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full autocomplete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit constructor param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convenience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires manual wiring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use facades for framework utilities (Cache, Log, Redis). Use DI for custom domain services."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common facades:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Route"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DB"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Redis"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Queue"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Bus"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Event"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Log"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mail"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Notification"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Auth"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Storage"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Validator"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "File"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-development",
      children: "Package Development"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel packages use Composer's extra.laravel section for auto-discovery and provide helpers for publishing config, migrations, assets, and routes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package discovery"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"name\": \"vendor/analytics-package\",\n    \"extra\": {\n        \"laravel\": {\n            \"providers\": [\"Vendor\\\\Analytics\\\\AnalyticsServiceProvider\"],\n            \"aliases\": { \"Analytics\": \"Vendor\\\\Analytics\\\\AnalyticsFacade\" }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service provider for packages:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AnalyticsServiceProvider extends ServiceProvider\n{\n    public function register(): void\n    {\n        $this->mergeConfigFrom(__DIR__.'/../config/analytics.php', 'analytics');\n        $this->app->singleton(Analytics::class, fn($app) => new Analytics($app['config']['analytics']));\n    }\n\n    public function boot(): void\n    {\n        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');\n        $this->loadViewsFrom(__DIR__.'/../resources/views', 'analytics');\n        $this->loadRoutesFrom(__DIR__.'/../routes/api.php');\n\n        if ($this->app->runningInConsole()) {\n            $this->publishes([\n                __DIR__.'/../config/analytics.php' => config_path('analytics.php'),\n            ], 'analytics-config');\n\n            $this->publishes([\n                __DIR__.'/../database/migrations/' => database_path('migrations'),\n            ], 'analytics-migrations');\n\n            $this->publishes([\n                __DIR__.'/../resources/lang' => $this->app->langPath('vendor/analytics'),\n            ], 'analytics-lang');\n\n            $this->publishes([\n                __DIR__.'/../public' => public_path('vendor/analytics'),\n            ], 'analytics-assets');\n\n            $this->commands([Console\\AnalyticsReport::class]);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Publishing commands:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan vendor:publish --tag=analytics-config\nphp artisan vendor:publish --tag=analytics-migrations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-artisan-commands",
      children: "Custom Artisan Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan make:command GenerateReport\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class GenerateReport extends Command\n{\n    protected $signature = 'report:generate\n                            {type : Report type}\n                            {--days=30 : Lookback period}\n                            {--format=csv : Output format}\n                            {--email : Send via email}';\n\n    protected $description = 'Generate a business report';\n\n    public function handle(): int\n    {\n        $type = $this->argument('type');\n        $this->info(\"Generating {$type} report...\");\n\n        $report = ReportGenerator::for($type)->days($this->option('days'))->generate();\n\n        $this->table(['Metric', 'Value'], [['Total', $report->total]]);\n\n        if ($this->option('email')) {\n            Notification::route('mail', 'admin@example.com')->notify(new ReportMail($report));\n        }\n\n        return Command::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input methods:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->argument('name')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->option('name')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->ask('Question?')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->secret('Password?')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->confirm('Proceed?')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->anticipate('Size?', ['s','m','l'])"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->choice('Role?', ['admin','user'], 0)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output methods:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->info('text')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->error('text')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->warn('text')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->line('text')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->alert('text')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->table($headers, $rows)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->newLine($n)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Progress bars:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$bar = $this->output->createProgressBar(count($users));\n$bar->start();\nforeach ($users as $user) { $user->process(); $bar->advance(); }\n$bar->finish();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Command closures"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routes/console.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Artisan::command('app:cleanup', function () {\n    DB::table('sessions')->where('last_activity', '<', now()->subDays(7)->getTimestamp())->delete();\n    $this->info('Cleanup complete.');\n})->purpose('Remove old session data');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scheduled-tasks",
      children: "Scheduled Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The task scheduler offers 20+ frequency methods with hooks, overlapping prevention via cache locks, and single-server execution semantics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Console\\Kernel::schedule()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "protected function schedule(Schedule $schedule): void\n{\n    $schedule->command('report:generate revenue --email')\n        ->dailyAt('06:00')\n        ->timezone('America/New_York')\n        ->environments(['production']);\n\n    $schedule->command('analytics:sync')\n        ->hourly()\n        ->withoutOverlapping(60)\n\n> **Warning:** Always use `withoutOverlapping()` for tasks that could exceed their scheduled interval. Without this, overlapping task instances can cause race conditions, duplicate processing, and database contention.\n        ->onOneServer();\n\n    $schedule->call(function () {\n        User::whereNull('last_active')->where('created_at', '<', now()->subYear())->delete();\n    })->weeklyOn(1, '02:00');\n\n    $schedule->exec('node health.js')\n        ->everyFiveMinutes()\n        ->sendOutputTo(storage_path('logs/health.log'))\n        ->emailOutputTo('admin@example.com');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequencies:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->cron('* * * * *')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->everyMinute()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->everyFiveMinutes()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->hourly()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->hourlyAt(15)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->daily()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->dailyAt('13:00')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->twiceDaily(1, 13)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->weekly()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->weeklyOn(1, '08:00')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->monthly()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->monthlyOn(15, '09:00')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->weekdays()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->weekends()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task hooks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$schedule->command('emails:send')\n    ->hourly()\n    ->before(function () { /* starting */ })\n    ->after(function () { /* completed */ })\n    ->onSuccess(function () { /* exit code 0 */ })\n    ->onFailure(function () { /* non-zero exit */ })\n    ->pingBefore($url)\n    ->thenPing($url);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overlapping prevention"
      }), " uses a cache lock:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$schedule->command('analytics:sync')->everyMinute()->withoutOverlapping(60);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Single-server execution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$schedule->command('reports:cleanup')->daily()->onOneServer();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requires a shared cache driver (Redis, Memcached, database)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process--concurrency",
      children: "Process & Concurrency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process facade:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Process;\n\n$result = Process::run('php artisan report:generate');\n\n$process = Process::start('php artisan queue:work --once');\nsleep(2);\nif ($process->running()) { $process->signal(SIGTERM); }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Process pools"
      }), " for parallel execution:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$results = Process::pool(function (Pool $pool) {\n    $pool->command('php artisan report:generate --type=users');\n    $pool->command('php artisan report:generate --type=orders');\n    $pool->command('php artisan report:generate --type=revenue');\n})->start()->wait();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Piping processes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$result = Process::pipe(function (Pipe $pipe) {\n    $pipe->command('cat log.txt');\n    $pipe->command('grep -i \"error\"');\n    $pipe->command('head -50');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Concurrency facade"
      }), " runs callables in parallel:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Concurrency;\n\n[$userCount, $orderTotal] = Concurrency::run([\n    fn() => User::count(),\n    fn() => Order::whereDate('created_at', today())->sum('total'),\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Concurrency::defer()"
        })
      }), " runs callbacks after the HTTP response is sent:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Concurrency::defer(function () {\n    Log::info('Runs after response is sent');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-custom-analytics-package",
      children: "Example: Custom Analytics Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package class:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Analytics\n{\n    public function __construct(protected readonly array $config) {}\n\n    public function track(string $event, array $properties = []): void\n    {\n        DB::table('analytics_events')->insert([\n            'event' => $event,\n            'properties' => json_encode($properties),\n            'user_id' => auth()->id(),\n            'ip_address' => request()->ip(),\n            'created_at' => now(),\n        ]);\n    }\n\n    public function summary(string $event): array\n    {\n        return [\n            'total' => DB::table('analytics_events')->where('event', $event)->count(),\n            'today' => DB::table('analytics_events')->where('event', $event)->whereDate('created_at', today())->count(),\n            'unique_users' => DB::table('analytics_events')->where('event', $event)->distinct('user_id')->count('user_id'),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Facade:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AnalyticsFacade extends Facade\n{\n    protected static function getFacadeAccessor(): string { return Analytics::class; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Artisan command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AnalyticsReport extends Command\n{\n    protected $signature = 'analytics:report {event : Event name} {--days=30} {--format=table}';\n\n    public function handle(Analytics $analytics): int\n    {\n        $summary = $analytics->summary($this->argument('event'));\n\n        $this->table(['Metric', 'Value'], [\n            ['Total', $summary['total']],\n            ['Today', $summary['today']],\n            ['Unique Users', $summary['unique_users']],\n        ]);\n\n        return Command::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-custom-report-generation-command",
      children: "Example: Custom Report Generation Command"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class GenerateDailyReport extends Command\n{\n    protected $signature = 'report:daily\n                            {--email= : Email address}\n                            {--section=* : Sections (users, orders, revenue)}\n                            {--format=csv}';\n\n    public function handle(): int\n    {\n        $sections = $this->option('section') ?: ['users', 'orders', 'revenue'];\n\n        $report = [];\n        if (in_array('users', $sections)) $report['new_users'] = User::whereDate('created_at', today())->count();\n        if (in_array('orders', $sections)) $report['total_orders'] = Order::whereDate('created_at', today())->count();\n        if (in_array('revenue', $sections)) $report['revenue'] = Order::whereDate('created_at', today())->where('status', 'completed')->sum('total');\n\n        $this->table(['Metric', 'Value'], collect($report)->map(fn($v, $k) => [$k, $v])->toArray());\n\n        if ($email = $this->option('email')) {\n            Notification::route('mail', $email)->notify(new DailyReport($report));\n        }\n\n        return Command::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Schedule it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$schedule->command('report:daily --email=admin@example.com')\n    ->dailyAt('23:59')\n    ->onOneServer();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "bind()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "singleton()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "instance()"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New instance each time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same instance every time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-built object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy Loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (resolved on first access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (object must exist)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very easy (direct mock)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful services, config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-configured objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (multiple instances)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (shared instance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as singleton"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--container-methods",
      children: "Quick Reference — Container Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$app->bind(Abstract, Concrete)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$app->singleton(Abstract, Concrete)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$app->instance(Abstract, $object)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register existing object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$app->when(Class)->needs(Interface)->give(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contextual binding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$app->tag([...], 'tag')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group bindings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$app->tagged('tag')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolve tagged group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$app->extend(Abstract, Closure)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decorate resolved instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$app->resolving(Abstract, Closure)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution event hook"
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
            children: "Container Bindings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markdown parser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PaymentGateway interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TenantResolver"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BlogServiceProvider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PaymentServiceProvider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MultiTenantProvider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Facades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blog::"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cart::"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant::"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled Tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily report at 6AM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hourly billing sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan Commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "blog:status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reports:generate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tenants:purge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. What is the difference between bind() and singleton()?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) bind() creates a new instance each resolution; singleton() reuses the same instance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) bind() is for interfaces; singleton() is for classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) singleton() is faster than bind()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) bind() requires a closure; singleton() requires a class name"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What phase should container bindings be registered in a service provider?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) boot()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) register()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) provides()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) constructor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. How does a real-time facade work?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) By extending the Facade class"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) By prefixing any class with Facades"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) By implementing FacadeInterface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) By adding a @Facade annotation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What does ->withoutOverlapping() prevent?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Duplicate cron job executions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Concurrent PHP processes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Cache stampede"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Memory leaks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-a, 2-b, 3-b, 4-a"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The service container uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bind()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "singleton()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "instance()"
        }), ", tagged binding, contextual binding with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "when...needs...give"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extend()"
        }), " for decorators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Service providers follow ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register()"
        }), " for bindings and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boot()"
        }), " for using registered services; deferrable providers load on demand"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Facades proxy static calls to container instances; real-time facades use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Facades\\"
        }), " prefix for any class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package development leverages Composer's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extra.laravel"
        }), " section and provides helpers for publishing config, migrations, assets, views, and routes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom Artisan commands define input via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$signature"
        }), ", logic in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "handle()"
        }), ", and output via rich I/O methods"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The task scheduler offers 20+ frequency methods with hooks, overlapping prevention, and single-server locking"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Process"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Concurrency"
        }), " facades enable parallel process execution and concurrent callable execution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bind()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "singleton()"
        }), ". When would you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "instance()"
        }), " instead?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why should bindings go in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register()"
        }), " and not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boot()"
        }), "? What happens if another provider tries to resolve in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Describe the execution path from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cache::get('key')"
        }), " to the method call on the underlying class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extra.laravel"
        }), " section in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "composer.json"
        }), " used for?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Concurrency::run()"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Process::pool()"
        }), ". When would you use each?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Contextual Payment Resolution"
          }), ": Configure ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InvoiceController"
          }), " → Stripe, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RefundController"
          }), " → Braintree, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PayoutController"
          }), " → PayPal through the same ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PaymentGateway"
          }), " interface, with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "extend()"
          }), " adding logging to all calls."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Feature Flag Package"
          }), ": Create a package with config, migration, facade, Artisan command to toggle flags, and Blade directive to check them. Use automatic provider discovery."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Step Artisan Wizard"
          }), ": Build an interactive command that guides deployment setup: server credentials, service selection, environment configuration, progress bars."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Build a Complete Notification Channel Package"
      }), ": Implement a Slack webhook notification channel package including:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DeferrableProvider"
        }), " registering the channel with merged config"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SlackWebhookChannel"
        }), " implementing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SlackWebhookMessage"
        }), " value object for structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SlackWebhook"
        }), " facade for standalone messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "slack:test"
        }), " Artisan command"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config publishing with timeout, retry, channel defaults"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduled task for daily report delivery via the channel"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Real-time facade variant (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Facades\\App\\Services\\SlackWebhook"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Contextual binding: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AlertController"
        }), " uses high-priority channel, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LogController"
        }), " uses low-priority"]
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