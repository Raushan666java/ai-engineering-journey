"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[961],{

/***/ 25606
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_19_architecture_patterns_md_18a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-19-architecture-patterns-md-18a.json
const site_docs_courses_laravel_19_architecture_patterns_md_18a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/19-architecture-patterns","title":"Chapter 19: Laravel Application Architecture Patterns","description":"Previous Scaling Laravel","source":"@site/docs/courses/laravel/19-architecture-patterns.md","sourceDirName":"courses/laravel","slug":"/laravel/19-architecture-patterns","permalink":"/ai-engineering-journey/laravel/19-architecture-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"id":"19-architecture-patterns","slug":"/laravel/19-architecture-patterns","title":"Chapter 19: Laravel Application Architecture Patterns","sidebar_label":"Chapter 19: Laravel Application Architecture Patterns","sidebar_position":19},"sidebar":"course-laravel","previous":{"title":"Chapter 18: Automation Patterns & Workflows","permalink":"/ai-engineering-journey/laravel/18-automation-patterns"},"next":{"title":"Chapter 20: Scaling Laravel","permalink":"/ai-engineering-journey/laravel/20-scaling-laravel"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/19-architecture-patterns.md


const frontMatter = {
	id: '19-architecture-patterns',
	slug: '/laravel/19-architecture-patterns',
	title: 'Chapter 19: Laravel Application Architecture Patterns',
	sidebar_label: 'Chapter 19: Laravel Application Architecture Patterns',
	sidebar_position: 19
};
const contentTitle = 'Chapter 19: Laravel Application Architecture Patterns';

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
  "value": "1. The Service Layer Pattern",
  "id": "1-the-service-layer-pattern",
  "level": 3
}, {
  "value": "Service Classes and Constructor Injection",
  "id": "service-classes-and-constructor-injection",
  "level": 4
}, {
  "value": "Single-Responsibility Services",
  "id": "single-responsibility-services",
  "level": 4
}, {
  "value": "Service Providers for Service Registration",
  "id": "service-providers-for-service-registration",
  "level": 4
}, {
  "value": "2. The Repository Pattern",
  "id": "2-the-repository-pattern",
  "level": 3
}, {
  "value": "Repository Interface and Implementation",
  "id": "repository-interface-and-implementation",
  "level": 4
}, {
  "value": "Dependency Injection in Controllers",
  "id": "dependency-injection-in-controllers",
  "level": 4
}, {
  "value": "Repository Testing with Fakes",
  "id": "repository-testing-with-fakes",
  "level": 4
}, {
  "value": "3. Action Classes",
  "id": "3-action-classes",
  "level": 3
}, {
  "value": "Single-Action Classes",
  "id": "single-action-classes",
  "level": 4
}, {
  "value": "Command Bus Pattern",
  "id": "command-bus-pattern",
  "level": 4
}, {
  "value": "Organizing Actions by Feature",
  "id": "organizing-actions-by-feature",
  "level": 4
}, {
  "value": "4. Data Transfer Objects (DTOs)",
  "id": "4-data-transfer-objects-dtos",
  "level": 3
}, {
  "value": "Immutable Value Objects",
  "id": "immutable-value-objects",
  "level": 4
}, {
  "value": "fromArray() Factory",
  "id": "fromarray-factory",
  "level": 4
}, {
  "value": "Spatie Data Package",
  "id": "spatie-data-package",
  "level": 4
}, {
  "value": "5. Domain-Driven Design in Laravel",
  "id": "5-domain-driven-design-in-laravel",
  "level": 3
}, {
  "value": "Bounded Contexts as Module Directories",
  "id": "bounded-contexts-as-module-directories",
  "level": 4
}, {
  "value": "Aggregates",
  "id": "aggregates",
  "level": 4
}, {
  "value": "Domain Events",
  "id": "domain-events",
  "level": 4
}, {
  "value": "Value Objects vs Eloquent Attributes",
  "id": "value-objects-vs-eloquent-attributes",
  "level": 4
}, {
  "value": "6. Hexagonal Architecture (Ports and Adapters)",
  "id": "6-hexagonal-architecture-ports-and-adapters",
  "level": 3
}, {
  "value": "Repository Interfaces as Ports",
  "id": "repository-interfaces-as-ports",
  "level": 4
}, {
  "value": "Adapters as Implementations",
  "id": "adapters-as-implementations",
  "level": 4
}, {
  "value": "Dependency Inversion",
  "id": "dependency-inversion",
  "level": 4
}, {
  "value": "7. Event Sourcing &amp; CQRS",
  "id": "7-event-sourcing--cqrs",
  "level": 3
}, {
  "value": "Event Store Table Design",
  "id": "event-store-table-design",
  "level": 4
}, {
  "value": "AggregateRoot Trait",
  "id": "aggregateroot-trait",
  "level": 4
}, {
  "value": "Projecting Events to Read Models",
  "id": "projecting-events-to-read-models",
  "level": 4
}, {
  "value": "CQRS Command and Query Buses",
  "id": "cqrs-command-and-query-buses",
  "level": 4
}, {
  "value": "8. Multi-Tenancy",
  "id": "8-multi-tenancy",
  "level": 3
}, {
  "value": "Single Database (Tenant ID Column)",
  "id": "single-database-tenant-id-column",
  "level": 4
}, {
  "value": "Separate Database per Tenant",
  "id": "separate-database-per-tenant",
  "level": 4
}, {
  "value": "Tenant-Aware Caching and Queues",
  "id": "tenant-aware-caching-and-queues",
  "level": 4
}, {
  "value": "Stancl Tenancy Package (Feature Summary)",
  "id": "stancl-tenancy-package-feature-summary",
  "level": 4
}, {
  "value": "9. The Modular Monolith",
  "id": "9-the-modular-monolith",
  "level": 3
}, {
  "value": "Module Directory Structure",
  "id": "module-directory-structure",
  "level": 4
}, {
  "value": "Module Service Providers",
  "id": "module-service-providers",
  "level": 4
}, {
  "value": "Inter-Module Communication",
  "id": "inter-module-communication",
  "level": 4
}, {
  "value": "Modular vs Microservices Trade-off",
  "id": "modular-vs-microservices-trade-off",
  "level": 4
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
    details: "details",
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
        id: "chapter-19-laravel-application-architecture-patterns",
        children: "Chapter 19: Laravel Application Architecture Patterns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/18-automation-patterns",
          children: "Automation Patterns"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/20-scaling-laravel",
          children: "Scaling Laravel"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a service layer that separates business logic from HTTP concerns with constructor injection and single-responsibility services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design repository abstractions using interfaces and implementations that support swapping Eloquent, cache, and fake backends"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build single-action classes with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__invoke()"
        }), " pattern and organize actions by feature or domain boundary"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct immutable Data Transfer Objects with typed properties, named arguments, and factory methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Domain-Driven Design tactical patterns within Laravel including bounded contexts, aggregates, domain events, and value objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architect hexagonal applications with ports and adapters, dependency inversion, and framework-independent core logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate and implement event sourcing with CQRS using event stores, projections, and separate read/write models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design multi-tenant applications using single-database, separate-database, and hybrid strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure a modular monolith with self-contained modules that can later graduate to microservices"
      }), "\n"]
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
        href: "../../assets/images/lessons/laravel/19-architecture-patterns/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/19-architecture-patterns/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/19-architecture-patterns/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/19-architecture-patterns/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/19-architecture-patterns/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/19-architecture-patterns/visual-explanation.png",
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
            children: "Service Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulates business logic away from controllers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create dedicated service classes for complex operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repository Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstracts data access behind interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap Eloquent for other data sources without changing business code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Action Classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-purpose classes for specific operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for one-action flows like registration or checkout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed objects for data transfer between layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use readonly properties for immutable DTOs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain-driven design with entities, value objects, aggregates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply where business logic complexity justifies the overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hexagonal Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separates core logic from infrastructure via ports/adapters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapters implement interfaces at the boundary"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Controller] --> B[Service Layer]\n    B --> C[Repository]\n    B --> D[Action Class]\n    C --> E[Eloquent Model]\n    D --> F[DTO]\n    B --> G[Domain Logic]\n    G --> H[Infrastructure]\n    H --> I[Ports/Adapters]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/19-architecture-patterns.png",
        alt: "Laravel Architecture Patterns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-service-layer-pattern",
      children: "1. The Service Layer Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The service layer extracts business logic from controllers into dedicated non-framework classes with constructor injection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As Laravel applications grow, controllers accumulate business logic that belongs elsewhere. The service layer extracts this logic into dedicated classes, leaving controllers to handle only HTTP concerns — request validation, response transformation, and status codes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "service-classes-and-constructor-injection",
      children: "Service Classes and Constructor Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A service class is a plain PHP class with no framework inheritance, grouped by domain concern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Services;\n\nuse App\\Models\\Subscription;\nuse App\\Repositories\\SubscriptionRepository;\nuse App\\Notifications\\TrialExpiring;\nuse Illuminate\\Support\\Facades\\Notification;\n\nclass SubscriptionService\n{\n    public function __construct(\n        private SubscriptionRepository $subscriptions,\n        private PaymentGateway $gateway\n    ) {}\n\n    public function startTrial(User $user, Plan $plan): Subscription\n    {\n        $subscription = $this->subscriptions->create([\n            'user_id' => $user->id,\n            'plan_id' => $plan->id,\n            'status' => 'trialing',\n            'trial_ends_at' => now()->addDays(14),\n        ]);\n\n        return $subscription;\n    }\n\n    public function cancel(Subscription $subscription): void\n    {\n        $subscription->update(['status' => 'canceled']);\n\n        $this->gateway->cancelSubscription($subscription->gateway_id);\n\n        $subscription->user->notify(\n            new SubscriptionCanceled($subscription)\n        );\n    }\n\n    public function handleExpiringTrials(): int\n    {\n        $expiring = $this->subscriptions\n            ->getExpiringTrials(now()->addDays(1));\n\n        foreach ($expiring as $subscription) {\n            Notification::send(\n                $subscription->user,\n                new TrialExpiring($subscription)\n            );\n        }\n\n        return $expiring->count();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The controller becomes a thin adapter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Http\\Controllers\\Api;\n\nuse App\\Http\\Controllers\\Controller;\nuse App\\Http\\Requests\\StartTrialRequest;\nuse App\\Services\\SubscriptionService;\n\nclass SubscriptionController extends Controller\n{\n    public function __construct(\n        private SubscriptionService $subscriptions\n    ) {}\n\n    public function startTrial(StartTrialRequest $request)\n    {\n        $subscription = $this->subscriptions->startTrial(\n            $request->user(),\n            $request->getPlan()\n        );\n\n        return response()->json($subscription, 201);\n    }\n\n    public function cancel(Subscription $subscription)\n    {\n        $this->authorize('cancel', $subscription);\n\n        $this->subscriptions->cancel($subscription);\n\n        return response()->noContent();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "single-responsibility-services",
      children: "Single-Responsibility Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each service owns one domain concern. A violation — \"God service\" — looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Anti-pattern: one service does everything\nclass GodService {\n    public function createOrder() {}\n    public function handlePayment() {}\n    public function sendInvoice() {}\n    public function generateReport() {}\n    public function syncInventory() {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refactored to single-responsibility:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Services\\Orders;\n\nclass OrderCreationService { /* creates orders */ }\nclass OrderPaymentService { /* processes payments */ }\nclass OrderFulfillmentService { /* inventory + shipping */ }\nclass OrderReportingService { /* analytics and exports */ }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor injection only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependencies visible, testable, swappable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No framework inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy unit testing without Laravel setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single public method per operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low cognitive load, high cohesion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domain terminology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business experts understand the code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "service-providers-for-service-registration",
      children: "Service Providers for Service Registration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bind services in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AppServiceProvider"
      }), " or dedicated providers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function register(): void\n{\n    $this->app->singleton(SubscriptionService::class, function ($app) {\n        return new SubscriptionService(\n            $app->make(SubscriptionRepository::class),\n            $app->make(PaymentGateway::class)\n        );\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Inject services through the controller's constructor. This makes the dependency explicit and simplifies testing with mock services."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-the-repository-pattern",
      children: "2. The Repository Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Repositories abstract data access behind interfaces, enabling backend swaps without changing business code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The repository pattern introduces an abstraction between the data source and the business logic. Controllers and services depend on interfaces, not Eloquent models directly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "repository-interface-and-implementation",
      children: "Repository Interface and Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Repositories\\Contracts;\n\nuse App\\Models\\Subscription;\nuse Illuminate\\Support\\Collection;\n\ninterface SubscriptionRepository\n{\n    public function find(int $id): ?Subscription;\n    public function findByUser(int $userId): Collection;\n    public function getExpiringTrials(\\Carbon\\Carbon $date): Collection;\n    public function create(array $data): Subscription;\n    public function update(int $id, array $data): bool;\n    public function delete(int $id): bool;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eloquent implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Repositories\\Eloquent;\n\nuse App\\Models\\Subscription;\nuse App\\Repositories\\Contracts\\SubscriptionRepository;\nuse Illuminate\\Support\\Collection;\n\nclass EloquentSubscriptionRepository implements SubscriptionRepository\n{\n    public function find(int $id): ?Subscription\n    {\n        return Subscription::find($id);\n    }\n\n    public function findByUser(int $userId): Collection\n    {\n        return Subscription::where('user_id', $userId)->get();\n    }\n\n    public function getExpiringTrials(\\Carbon\\Carbon $date): Collection\n    {\n        return Subscription::where('status', 'trialing')\n            ->where('trial_ends_at', '<=', $date)\n            ->get();\n    }\n\n    public function create(array $data): Subscription\n    {\n        return Subscription::create($data);\n    }\n\n    public function update(int $id, array $data): bool\n    {\n        return Subscription::where('id', $id)->update($data);\n    }\n\n    public function delete(int $id): bool\n    {\n        return Subscription::destroy($id) > 0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache-backed implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Repositories\\Cached;\n\nuse App\\Repositories\\Contracts\\SubscriptionRepository;\nuse Illuminate\\Contracts\\Cache\\Repository as Cache;\nuse App\\Models\\Subscription;\nuse Illuminate\\Support\\Collection;\n\nclass CachedSubscriptionRepository implements SubscriptionRepository\n{\n    private const TTL = 3600;\n\n    public function __construct(\n        private SubscriptionRepository $inner,\n        private Cache $cache\n    ) {}\n\n    public function find(int $id): ?Subscription\n    {\n        return $this->cache->remember(\"subscription.{$id}\", self::TTL, function () use ($id) {\n            return $this->inner->find($id);\n        });\n    }\n\n    public function findByUser(int $userId): Collection\n    {\n        return $this->cache->remember(\"subscriptions.user.{$userId}\", self::TTL, function () use ($userId) {\n            return $this->inner->findByUser($userId);\n        });\n    }\n\n    public function create(array $data): Subscription\n    {\n        $subscription = $this->inner->create($data);\n        $this->cache->put(\"subscription.{$subscription->id}\", $subscription, self::TTL);\n\n        return $subscription;\n    }\n\n    public function update(int $id, array $data): bool\n    {\n        $result = $this->inner->update($id, $data);\n        $this->cache->forget(\"subscription.{$id}\");\n\n        return $result;\n    }\n\n    public function delete(int $id): bool\n    {\n        $result = $this->inner->delete($id);\n        $this->cache->forget(\"subscription.{$id}\");\n\n        return $result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dependency-injection-in-controllers",
      children: "Dependency Injection in Controllers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bind the interface to the desired implementation in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AppServiceProvider"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function register(): void\n{\n    $this->app->bind(\n        SubscriptionRepository::class,\n        EloquentSubscriptionRepository::class\n    );\n}\n\n// Swap for cached version in production\npublic function register(): void\n{\n    $this->app->singleton(SubscriptionRepository::class, function ($app) {\n        $eloquent = new EloquentSubscriptionRepository();\n\n        if ($this->app->environment('production')) {\n            return new CachedSubscriptionRepository(\n                $eloquent,\n                $app->make('cache.store')\n            );\n        }\n\n        return $eloquent;\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controllers then type-hint the interface:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SubscriptionController extends Controller\n{\n    public function __construct(\n        private SubscriptionRepository $subscriptions\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "repository-testing-with-fakes",
      children: "Repository Testing with Fakes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace Tests\\Fakes;\n\nuse App\\Models\\Subscription;\nuse App\\Repositories\\Contracts\\SubscriptionRepository;\nuse Illuminate\\Support\\Collection;\n\nclass FakeSubscriptionRepository implements SubscriptionRepository\n{\n    private array $subscriptions = [];\n\n    public function hydrate(array $data): void\n    {\n        foreach ($data as $attributes) {\n            $subscription = new Subscription($attributes);\n            $subscription->id = $attributes['id'] ?? array_key_last($this->subscriptions) + 1;\n            $this->subscriptions[$subscription->id] = $subscription;\n        }\n    }\n\n    public function find(int $id): ?Subscription\n    {\n        return $this->subscriptions[$id] ?? null;\n    }\n\n    public function findByUser(int $userId): Collection\n    {\n        return collect($this->subscriptions)\n            ->where('user_id', $userId)\n            ->values();\n    }\n\n    public function getExpiringTrials(\\Carbon\\Carbon $date): Collection\n    {\n        return collect($this->subscriptions)\n            ->where('status', 'trialing')\n            ->filter(fn ($s) => $s->trial_ends_at <= $date)\n            ->values();\n    }\n\n    public function create(array $data): Subscription\n    {\n        $subscription = new Subscription($data);\n        $subscription->id = count($this->subscriptions) + 1;\n        $this->subscriptions[$subscription->id] = $subscription;\n\n        return $subscription;\n    }\n\n    public function update(int $id, array $data): bool\n    {\n        if (!isset($this->subscriptions[$id])) {\n            return false;\n        }\n\n        foreach ($data as $key => $value) {\n            $this->subscriptions[$id]->$key = $value;\n        }\n\n        return true;\n    }\n\n    public function delete(int $id): bool\n    {\n        if (!isset($this->subscriptions[$id])) {\n            return false;\n        }\n\n        unset($this->subscriptions[$id]);\n\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// In a test\nuse Tests\\Fakes\\FakeSubscriptionRepository;\n\nclass SubscriptionServiceTest extends TestCase\n{\n    private FakeSubscriptionRepository $repo;\n\n    protected function setUp(): void\n    {\n        parent::setUp();\n\n        $this->repo = new FakeSubscriptionRepository();\n        $this->repo->hydrate([\n            ['id' => 1, 'user_id' => 1, 'status' => 'trialing', 'trial_ends_at' => now()->addDays(1)],\n            ['id' => 2, 'user_id' => 2, 'status' => 'active', 'trial_ends_at' => null],\n        ]);\n\n        $this->app->instance(SubscriptionRepository::class, $this->repo);\n    }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interface + implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More files, clear boundaries, exchangeable backend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Eloquent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster to write, coupled to ORM, hard to test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cached decorator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent caching, requires decorator discipline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fake for tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No database needed, fast, may drift from real behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-action-classes",
      children: "3. Action Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Single-action classes with __invoke are ideal for registering a user, processing a payment, or any one-action flow."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An action class encapsulates a single use case behind an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__invoke()"
      }), " method. This pattern works well for operations that don't fit neatly into CRUD."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "single-action-classes",
      children: "Single-Action Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Actions\\Subscriptions;\n\nuse App\\Models\\Subscription;\nuse App\\Models\\Plan;\nuse App\\Models\\User;\nuse App\\Services\\PaymentGateway;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass StartTrialAction\n{\n    public function __construct(\n        private PaymentGateway $gateway\n    ) {}\n\n    public function __invoke(User $user, Plan $plan): Subscription\n    {\n        return DB::transaction(function () use ($user, $plan) {\n            $customer = $this->gateway->createCustomer($user);\n            $gatewaySubscription = $this->gateway->createTrial($customer, $plan);\n\n            return Subscription::create([\n                'user_id' => $user->id,\n                'plan_id' => $plan->id,\n                'gateway_id' => $gatewaySubscription->id,\n                'status' => 'trialing',\n                'trial_ends_at' => now()->addDays(14),\n            ]);\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Registered as a singleton and invoked from controllers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Controller\npublic function startTrial(StartTrialRequest $request, StartTrialAction $action)\n{\n    $subscription = $action($request->user(), $request->getPlan());\n\n    return response()->json($subscription, 201);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "command-bus-pattern",
      children: "Command Bus Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For operations with input/output separation, use a command class and a dedicated handler:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Commands\\Subscriptions;\n\nclass StartTrialCommand\n{\n    public function __construct(\n        public readonly User $user,\n        public readonly Plan $plan,\n        public readonly ?string $couponCode = null,\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Commands\\Subscriptions\\Handlers;\n\nuse App\\Actions\\Subscriptions\\StartTrialAction;\nuse App\\Commands\\Subscriptions\\StartTrialCommand;\n\nclass StartTrialHandler\n{\n    public function __construct(\n        private StartTrialAction $action\n    ) {}\n\n    public function handle(StartTrialCommand $command)\n    {\n        return $this->action($command->user, $command->plan);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dispatch via a simple bus:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Infrastructure\\Bus;\n\nclass CommandBus\n{\n    private array $handlers = [];\n\n    public function register(string $commandClass, string $handlerClass): void\n    {\n        $this->handlers[$commandClass] = $handlerClass;\n    }\n\n    public function dispatch(object $command): mixed\n    {\n        $handlerClass = $this->handlers[$command::class]\n            ?? throw new \\RuntimeException(\"No handler for \" . $command::class);\n\n        $handler = app($handlerClass);\n\n        return $handler->handle($command);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Registered in a service provider:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function boot(CommandBus $bus): void\n{\n    $bus->register(StartTrialCommand::class, StartTrialHandler::class);\n    $bus->register(CancelSubscriptionCommand::class, CancelSubscriptionHandler::class);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "organizing-actions-by-feature",
      children: "Organizing Actions by Feature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Actions/\n├── Auth/\n│   ├── RegisterUserAction.php\n│   ├── LoginAction.php\n│   └── VerifyEmailAction.php\n├── Subscriptions/\n│   ├── StartTrialAction.php\n│   ├── CancelSubscriptionAction.php\n│   ├── UpgradePlanAction.php\n│   └── HandleFailedPaymentAction.php\n├── Orders/\n│   ├── PlaceOrderAction.php\n│   ├── CalculateShippingAction.php\n│   └── ApplyDiscountAction.php\n└── Reports/\n    ├── GenerateRevenueReportAction.php\n    └── ExportSubscribersAction.php\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-data-transfer-objects-dtos",
      children: "4. Data Transfer Objects (DTOs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Immutable DTOs with typed readonly properties enforce data contracts across application layers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DTOs carry data between subsystems without exposing Eloquent models to contexts where they don't belong."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "immutable-value-objects",
      children: "Immutable Value Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\DTOs;\n\nuse Carbon\\Carbon;\n\nclass SubscriptionData\n{\n    public function __construct(\n        public readonly int $userId,\n        public readonly int $planId,\n        public readonly string $paymentMethodId,\n        public readonly ?string $couponCode = null,\n        public readonly ?Carbon $trialEndsAt = null,\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHP 8 named arguments make construction readable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$data = new SubscriptionData(\n    userId: $user->id,\n    planId: $plan->id,\n    paymentMethodId: $request->input('payment_method_id'),\n    couponCode: $request->input('coupon_code'),\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fromarray-factory",
      children: "fromArray() Factory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SubscriptionData\n{\n    // ... constructor same as above ...\n\n    public static function fromArray(array $data): self\n    {\n        return new self(\n            userId: (int) $data['user_id'],\n            planId: (int) $data['plan_id'],\n            paymentMethodId: (string) $data['payment_method_id'],\n            couponCode: isset($data['coupon_code']) ? (string) $data['coupon_code'] : null,\n            trialEndsAt: isset($data['trial_ends_at'])\n                ? Carbon::parse($data['trial_ends_at'])\n                : null,\n        );\n    }\n\n    public function toArray(): array\n    {\n        return array_filter([\n            'user_id' => $this->userId,\n            'plan_id' => $this->planId,\n            'payment_method_id' => $this->paymentMethodId,\n            'coupon_code' => $this->couponCode,\n            'trial_ends_at' => $this->trialEndsAt?->toDateTimeString(),\n        ], fn ($value) => $value !== null);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "spatie-data-package",
      children: "Spatie Data Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For advanced DTO needs — validation, transformation, nesting:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Spatie\\LaravelData\\Data;\nuse Spatie\\LaravelData\\Attributes\\Validation\\Exists;\nuse Spatie\\LaravelData\\Attributes\\Validation\\IntegerType;\nuse Spatie\\LaravelData\\Optional;\n\nclass StartTrialData extends Data\n{\n    public function __construct(\n        #[IntegerType, Exists('users', 'id')]\n        public int $userId,\n\n        #[IntegerType, Exists('plans', 'id')]\n        public int $planId,\n\n        public string $paymentMethodId,\n\n        public string|Optional $couponCode,\n    ) {}\n\n    public static function fromRequest(StartTrialRequest $request): self\n    {\n        return new self(\n            userId: $request->user()->id,\n            planId: (int) $request->input('plan_id'),\n            paymentMethodId: $request->input('payment_method_id'),\n            couponCode: $request->input('coupon_code', Optional::create()),\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Controller\npublic function startTrial(StartTrialRequest $request, StartTrialAction $action)\n{\n    $data = StartTrialData::fromRequest($request);\n\n    $subscription = $action($data);\n\n    return response()->json($subscription, 201);\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lines"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Validation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serialization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nesting"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plain readonly class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fromArray()"
            }), " factory"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toArray()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spatie Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$dto->toArray()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-domain-driven-design-in-laravel",
      children: "5. Domain-Driven Design in Laravel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " DDD tactical patterns include entities with identity, value objects, aggregates, domain events, and bounded contexts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DDD tactical patterns map naturally to Laravel when you organize by bounded context rather than by technical layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bounded-contexts-as-module-directories",
      children: "Bounded Contexts as Module Directories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Domain/\n├── Billing/\n│   ├── Models/\n│   │   ├── Subscription.php\n│   │   ├── Invoice.php\n│   │   └── PaymentMethod.php\n│   ├── Actions/\n│   │   ├── StartTrialAction.php\n│   │   └── CancelSubscriptionAction.php\n│   ├── DomainEvents/\n│   │   ├── SubscriptionStarted.php\n│   │   ├── SubscriptionCanceled.php\n│   │   └── PaymentFailed.php\n│   ├── Repositories/\n│   │   ├── SubscriptionRepository.php (interface)\n│   │   └── EloquentSubscriptionRepository.php\n│   ├── ValueObjects/\n│   │   ├── Money.php\n│   │   ├── BillingPeriod.php\n│   │   └── SubscriptionStatus.php\n│   └── DomainServices/\n│       ├── SubscriptionRenewalService.php\n│       └── DunningService.php\n├── Inventory/\n│   ├── Models/\n│   │   ├── Product.php\n│   │   └── StockMovement.php\n│   ├── Actions/\n│   │   ├── ReserveStockAction.php\n│   │   └── ReleaseStockAction.php\n│   ├── DomainEvents/\n│   │   └── StockDepleted.php\n│   ├── Repositories/\n│   │   └── ProductRepository.php\n│   └── ValueObjects/\n│       ├── SKU.php\n│       └── StockQuantity.php\n└── Shared/\n    ├── ValueObjects/\n    │   ├── Email.php\n    │   └── Address.php\n    └── Bus/\n        └── DomainEventBus.php\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aggregates",
      children: "Aggregates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An aggregate is a cluster of domain objects treated as a single unit:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Domain\\Billing\\Aggregates;\n\nuse App\\Domain\\Billing\\Models\\Subscription;\nuse App\\Domain\\Billing\\Models\\Invoice;\nuse App\\Domain\\Billing\\ValueObjects\\Money;\nuse App\\Domain\\Billing\\DomainEvents\\SubscriptionStarted;\nuse App\\Domain\\Billing\\DomainEvents\\PaymentReceived;\nuse Illuminate\\Support\\Collection;\n\nclass SubscriptionAggregate\n{\n    private Collection $recordedEvents;\n\n    public function __construct(\n        private Subscription $subscription,\n        private Collection $invoices,\n    ) {\n        $this->recordedEvents = collect();\n    }\n\n    public static function start(\n        int $userId,\n        int $planId,\n        Money $amount,\n        \\Carbon\\Carbon $trialEndsAt\n    ): self {\n        $subscription = new Subscription([\n            'user_id' => $userId,\n            'plan_id' => $planId,\n            'status' => 'trialing',\n            'trial_ends_at' => $trialEndsAt,\n        ]);\n\n        $aggregate = new self($subscription, collect());\n        $aggregate->recordThat(new SubscriptionStarted($subscription));\n\n        return $aggregate;\n    }\n\n    public function recordPayment(Money $amount, string $gatewayTransactionId): void\n    {\n        $invoice = new Invoice([\n            'subscription_id' => $this->subscription->id,\n            'amount' => $amount->toCents(),\n            'currency' => $amount->currency,\n            'gateway_transaction_id' => $gatewayTransactionId,\n            'status' => 'paid',\n        ]);\n\n        $this->invoices->push($invoice);\n        $this->recordThat(new PaymentReceived($invoice));\n    }\n\n    private function recordThat(object $event): void\n    {\n        $this->recordedEvents->push($event);\n    }\n\n    public function releaseEvents(): Collection\n    {\n        $events = $this->recordedEvents;\n        $this->recordedEvents = collect();\n\n        return $events;\n    }\n\n    public function subscription(): Subscription\n    {\n        return $this->subscription;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "domain-events",
      children: "Domain Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Domain\\Billing\\DomainEvents;\n\nuse App\\Domain\\Billing\\Models\\Subscription;\n\nclass SubscriptionStarted\n{\n    public function __construct(\n        public readonly Subscription $subscription,\n        public readonly \\Carbon\\Carbon $occurredAt,\n    ) {\n        $this->occurredAt = now();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dispatch and handle with Laravel's event system:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Foundation\\Events\\Dispatchable;\n\nclass SubscriptionStarted\n{\n    use Dispatchable;\n\n    // ... constructor ...\n}\n\n// Listener\nclass SendWelcomeEmail\n{\n    public function handle(SubscriptionStarted $event): void\n    {\n        $event->subscription->user->notify(\n            new WelcomeToPro($event->subscription)\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "value-objects-vs-eloquent-attributes",
      children: "Value Objects vs Eloquent Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eloquent models use accessors for value objects:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Domain\\Billing\\Models;\n\nuse App\\Domain\\Billing\\ValueObjects\\Money;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Invoice extends Model\n{\n    protected $casts = [\n        'paid_at' => 'datetime',\n    ];\n\n    public function amount(): Money\n    {\n        return new Money(\n            (int) $this->amount_cents,\n            $this->currency,\n        );\n    }\n\n    public function setAmount(Money $money): void\n    {\n        $this->amount_cents = $money->toCents();\n        $this->currency = $money->currency;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " DDD adds significant overhead. Only apply it when the business logic is complex enough to justify bounded contexts, aggregates, and domain events."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-hexagonal-architecture-ports-and-adapters",
      children: "6. Hexagonal Architecture (Ports and Adapters)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Hexagonal architecture keeps core domain logic framework-independent by placing infrastructure at the boundary."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hexagonal pattern places business logic at the center, with \"ports\" (interfaces) on the boundary and \"adapters\" (implementations) outside."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────┐\n│           Application Core              │\n│  ┌───────────────────────────────────┐   │\n│  │         Domain Services           │   │\n│  │  ┌─────┐  ┌─────┐  ┌─────┐      │   │\n│  │  │Sub  │  │Ord  │  │Inv  │      │   │\n│  │  │Svc  │  │Svc  │  │Svc  │      │   │\n│  │  └──┬──┘  └──┬──┘  └──┬──┘      │   │\n│  │     │         │        │         │   │\n│  │  ┌──┴─────────┴────────┴──┐      │   │\n│  │  │     Port Interfaces    │      │   │\n│  │  │ (RepositoryInterface)  │      │   │\n│  │  └───────────┬────────────┘      │   │\n│  └──────────────│────────────────────┘   │\n│                 │                        │\n│  ┌──────────────│────────────────────┐   │\n│  │    Adapters  │                    │   │\n│  │         ┌────┴────┐              │   │\n│  │         │ Eloquent│  ┌────────┐  │   │\n│  │         │  Repo   │  │ Cache  │  │   │\n│  │         └─────────┘  │ Adapter│  │   │\n│  │                      └────────┘  │   │\n│  │  ┌──────────┐  ┌──────────────┐  │   │\n│  │  │ HTTP     │  │ CLI/Artisan  │  │   │\n│  │  │ Controller│  │ Command      │  │   │\n│  │  └──────────┘  └──────────────┘  │   │\n│  └──────────────────────────────────┘   │\n└─────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "repository-interfaces-as-ports",
      children: "Repository Interfaces as Ports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Port interfaces live in the domain, not in the infrastructure layer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Domain\\Billing\\Ports;\n\nuse App\\Domain\\Billing\\Models\\Subscription;\n\ninterface SubscriptionRepositoryPort\n{\n    public function find(int $id): ?Subscription;\n    public function findByUser(int $userId): array;\n    public function save(Subscription $subscription): void;\n    public function delete(int $id): void;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "adapters-as-implementations",
      children: "Adapters as Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Infrastructure\\Persistence\\Eloquent;\n\nuse App\\Domain\\Billing\\Models\\Subscription;\nuse App\\Domain\\Billing\\Ports\\SubscriptionRepositoryPort;\n\nclass EloquentSubscriptionAdapter implements SubscriptionRepositoryPort\n{\n    public function find(int $id): ?Subscription\n    {\n        return Subscription::find($id);\n    }\n\n    public function findByUser(int $userId): array\n    {\n        return Subscription::where('user_id', $userId)->get()->all();\n    }\n\n    public function save(Subscription $subscription): void\n    {\n        $subscription->save();\n    }\n\n    public function delete(int $id): void\n    {\n        Subscription::destroy($id);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dependency-inversion",
      children: "Dependency Inversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "High-level modules (domain services) define the interfaces; low-level modules (infrastructure) implement them:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Domain service depends on the PORT interface\nnamespace App\\Domain\\Billing\\Services;\n\nuse App\\Domain\\Billing\\Ports\\SubscriptionRepositoryPort;\n\nclass RenewalService\n{\n    public function __construct(\n        private SubscriptionRepositoryPort $subscriptions\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bootstrap wiring:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function register(): void\n{\n    $this->app->bind(\n        SubscriptionRepositoryPort::class,\n        EloquentSubscriptionAdapter::class,\n    );\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Laravel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hexagonal Laravel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repository location"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app/Repositories/"
            }), " (infrastructure)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app/Domain/*/Ports/"
            }), " (domain)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller → Repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain defines port, infra implements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Framework coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (extends Eloquent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (plain PHP in domain)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires database setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fakes on port interface"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-event-sourcing--cqrs",
      children: "7. Event Sourcing & CQRS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Event sourcing stores state changes as an append-only event log; CQRS separates read and write models."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Event sourcing stores state changes as an append-only log. CQRS separates read and write models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-store-table-design",
      children: "Event Store Table Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('event_store', function (Blueprint $table) {\n            $table->id();\n            $table->string('aggregate_type', 100);\n            $table->unsignedBigInteger('aggregate_id');\n            $table->unsignedInteger('version');\n            $table->string('event_type', 200);\n            $table->json('event_data');\n            $table->json('metadata')->nullable();\n            $table->timestamp('occurred_at')->useCurrent();\n\n            $table->unique(['aggregate_type', 'aggregate_id', 'version']);\n            $table->index(['aggregate_type', 'aggregate_id']);\n            $table->index('event_type');\n        });\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aggregateroot-trait",
      children: "AggregateRoot Trait"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Domain\\Common\\Concerns;\n\nuse Illuminate\\Support\\Collection;\nuse Illuminate\\Support\\Facades\\DB;\n\ntrait AggregateRoot\n{\n    private Collection $recordedEvents;\n    private int $currentVersion = 0;\n\n    public function initializeAggregateRoot(): void\n    {\n        $this->recordedEvents = collect();\n    }\n\n    protected function recordThat(object $event): void\n    {\n        $this->recordedEvents->push($event);\n        $this->apply($event);\n    }\n\n    abstract protected function apply(object $event): void;\n\n    public function getRecordedEvents(): Collection\n    {\n        return $this->recordedEvents;\n    }\n\n    public function persistToEventStore(string $aggregateType): void\n    {\n        $events = $this->recordedEvents->map(function ($event, $index) use ($aggregateType) {\n            return [\n                'aggregate_type' => $aggregateType,\n                'aggregate_id' => $this->id,\n                'version' => $this->currentVersion + $index + 1,\n                'event_type' => get_class($event),\n                'event_data' => json_encode($event),\n                'occurred_at' => now(),\n            ];\n        });\n\n        DB::table('event_store')->insert($events->all());\n        $this->recordedEvents = collect();\n    }\n\n    public static function reconstituteFromEvents(string $aggregateType, int $aggregateId): static\n    {\n        $rows = DB::table('event_store')\n            ->where('aggregate_type', $aggregateType)\n            ->where('aggregate_id', $aggregateId)\n            ->orderBy('version')\n            ->get();\n\n        $instance = new static();\n        $instance->currentVersion = $rows->count();\n\n        foreach ($rows as $row) {\n            $event = unserialize($row->event_data);\n            $instance->apply($event);\n        }\n\n        return $instance;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "projecting-events-to-read-models",
      children: "Projecting Events to Read Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Domain\\Billing\\Projectors;\n\nuse App\\Domain\\Billing\\DomainEvents\\SubscriptionStarted;\nuse App\\Domain\\Billing\\DomainEvents\\PaymentReceived;\nuse App\\Domain\\Billing\\DomainEvents\\SubscriptionCanceled;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass SubscriptionProjector\n{\n    public function onSubscriptionStarted(SubscriptionStarted $event): void\n    {\n        DB::table('subscription_read_model')->insert([\n            'subscription_id' => $event->subscriptionId,\n            'user_id' => $event->userId,\n            'plan_id' => $event->planId,\n            'status' => 'trialing',\n            'total_paid_cents' => 0,\n            'created_at' => $event->occurredAt,\n            'updated_at' => $event->occurredAt,\n        ]);\n    }\n\n    public function onPaymentReceived(PaymentReceived $event): void\n    {\n        DB::table('subscription_read_model')\n            ->where('subscription_id', $event->subscriptionId)\n            ->increment('total_paid_cents', $event->amountCents);\n    }\n\n    public function onSubscriptionCanceled(SubscriptionCanceled $event): void\n    {\n        DB::table('subscription_read_model')\n            ->where('subscription_id', $event->subscriptionId)\n            ->update([\n                'status' => 'canceled',\n                'canceled_at' => $event->occurredAt,\n            ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cqrs-command-and-query-buses",
      children: "CQRS Command and Query Buses"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Infrastructure\\CQRS;\n\nclass CommandBus\n{\n    private array $handlers = [];\n\n    public function register(string $command, string $handler): void\n    {\n        $this->handlers[$command] = $handler;\n    }\n\n    public function dispatch(object $command): mixed\n    {\n        $handler = app($this->handlers[$command::class]);\n        return $handler->handle($command);\n    }\n}\n\nclass QueryBus\n{\n    private array $handlers = [];\n\n    public function register(string $query, string $handler): void\n    {\n        $this->handlers[$query] = $handler;\n    }\n\n    public function ask(object $query): mixed\n    {\n        $handler = app($this->handlers[$query::class]);\n        return $handler->handle($query);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Separate read/write databases in configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/database.php\n'connections' => [\n    'mysql' => [\n        'driver' => 'mysql',\n        'host' => env('DB_HOST', '127.0.0.1'),\n        'database' => env('DB_DATABASE', 'forge'),\n        // ...\n    ],\n    'mysql_read' => [\n        'driver' => 'mysql',\n        'host' => env('DB_READ_HOST', env('DB_HOST', '127.0.0.1')),\n        'database' => env('DB_DATABASE', 'forge'),\n        // ...\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Write model uses default connection\nclass Subscription extends Model\n{\n    protected $connection = 'mysql';\n}\n\n// Read model uses read connection\nclass SubscriptionReadModel extends Model\n{\n    protected $connection = 'mysql_read';\n    protected $table = 'subscription_read_model';\n    public $timestamps = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-multi-tenancy",
      children: "8. Multi-Tenancy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Multi-tenancy strategies range from single-database with tenant_id to separate databases per tenant."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel supports multiple multi-tenancy strategies depending on isolation requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "single-database-tenant-id-column",
      children: "Single Database (Tenant ID Column)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('subscriptions', function (Blueprint $table) {\n    $table->id();\n    $table->foreignId('tenant_id')->constrained()->index();\n    $table->foreignId('user_id');\n    $table->string('plan');\n    $table->string('status');\n    $table->timestamps();\n\n    $table->index(['tenant_id', 'status']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Global scopes enforce isolation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Models\\Scopes;\n\nuse Illuminate\\Database\\Eloquent\\Builder;\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Scope;\n\nclass TenantScope implements Scope\n{\n    public function apply(Builder $builder, Model $model): void\n    {\n        $tenantId = tenant()->id;\n\n        $builder->where('tenant_id', $tenantId);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Models\\Concerns;\n\ntrait BelongsToTenant\n{\n    public static function bootBelongsToTenant(): void\n    {\n        static::addGlobalScope(new TenantScope());\n\n        static::creating(function ($model) {\n            if (empty($model->tenant_id)) {\n                $model->tenant_id = tenant()->id;\n            }\n        });\n    }\n\n    public function tenant()\n    {\n        return $this->belongsTo(Tenant::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "separate-database-per-tenant",
      children: "Separate Database per Tenant"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each tenant gets their own database with identical schema:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Providers;\n\nuse Illuminate\\Support\\ServiceProvider;\nuse Illuminate\\Support\\Facades\\Config;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass TenancyServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        $this->app->singleton('tenant', function () {\n            if ($tenantId = request()->header('X-Tenant-Id')) {\n                return Tenant::findOrFail($tenantId);\n            }\n            return null;\n        });\n    }\n\n    public static function configureForTenant(Tenant $tenant): void\n    {\n        Config::set('database.connections.tenant', [\n            'driver' => 'mysql',\n            'host' => $tenant->db_host ?? config('database.connections.mysql.host'),\n            'port' => $tenant->db_port ?? config('database.connections.mysql.port'),\n            'database' => \"tenant_{$tenant->id}\",\n            'username' => $tenant->db_username ?? config('database.connections.mysql.username'),\n            'password' => $tenant->db_password ?? config('database.connections.mysql.password'),\n            'charset' => 'utf8mb4',\n        ]);\n\n        DB::purge('mysql');\n        Config::set('database.default', 'tenant');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tenant-aware-caching-and-queues",
      children: "Tenant-Aware Caching and Queues"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Cache prefix per tenant\nCache::tags([\"tenant_{$tenantId}\"])->put($key, $value, $ttl);\n\n// Queue per tenant\ndispatch(new ProcessSubscription($subscription))\n    ->onQueue(\"tenant_{$tenantId}\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "stancl-tenancy-package-feature-summary",
      children: "Stancl Tenancy Package (Feature Summary)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domain identification"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mytenant.yourapp.com"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Tenant"
            }), " model lookup"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each tenant gets isolated database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefixes all cache keys with tenant ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate storage directories per tenant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate queue per tenant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan commands"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan tenants:run migrate"
            }), " across all tenants"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both row-level and database-level strategies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-the-modular-monolith",
      children: "9. The Modular Monolith"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Modular monoliths organize code into self-contained modules that can later graduate to microservices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A modular monolith organizes code into modules that can later graduate to microservices. Each module is self-contained with its own routes, controllers, migrations, models, and tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "module-directory-structure",
      children: "Module Directory Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Modules/\n├── Sales/\n│   ├── app/\n│   │   ├── Controllers/\n│   │   │   ├── OrderController.php\n│   │   │   └── InvoiceController.php\n│   │   ├── Models/\n│   │   │   ├── Order.php\n│   │   │   └── Invoice.php\n│   │   ├── Actions/\n│   │   │   ├── PlaceOrderAction.php\n│   │   │   └── GenerateInvoiceAction.php\n│   │   ├── Events/\n│   │   │   └── OrderPlaced.php\n│   │   ├── Listeners/\n│   │   │   └── NotifySalesTeam.php\n│   │   └── Providers/\n│   │       └── SalesServiceProvider.php\n│   ├── database/\n│   │   ├── migrations/\n│   │   │   ├── 2025_01_01_000001_create_orders_table.php\n│   │   │   └── 2025_01_01_000002_create_invoices_table.php\n│   │   └── seeders/\n│   │       └── SalesDatabaseSeeder.php\n│   ├── routes/\n│   │   └── api.php\n│   └── tests/\n│       ├── Feature/\n│       ├── Unit/\n│       └── PestTest.php\n├── Inventory/\n│   ├── app/\n│   │   ├── Controllers/\n│   │   │   └── ProductController.php\n│   │   ├── Models/\n│   │   │   └── Product.php\n│   │   ├── Actions/\n│   │   │   ├── ReserveStockAction.php\n│   │   │   └── ReorderStockAction.php\n│   │   ├── Events/\n│   │   │   └── StockReserved.php\n│   │   └── Providers/\n│   │       └── InventoryServiceProvider.php\n│   ├── database/\n│   │   ├── migrations/\n│   │   └── seeders/\n│   ├── routes/\n│   │   └── api.php\n│   └── tests/\n├── Billing/\n│   ├── app/\n│   │   ├── Controllers/\n│   │   ├── Models/\n│   │   ├── Actions/\n│   │   ├── Events/\n│   │   └── Providers/\n│   ├── database/\n│   ├── routes/\n│   └── tests/\n└── Notifications/\n    ├── app/\n    ├── database/\n    ├── routes/\n    └── tests/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "module-service-providers",
      children: "Module Service Providers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each module registers its own bindings, events, and routes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace Modules\\Sales\\Providers;\n\nuse Illuminate\\Support\\ServiceProvider;\nuse Illuminate\\Support\\Facades\\Route;\n\nclass SalesServiceProvider extends ServiceProvider\n{\n    public function register(): void\n    {\n        // Module-specific bindings\n        $this->app->bind(\n            \\Modules\\Sales\\Contracts\\OrderRepository::class,\n            \\Modules\\Sales\\Repositories\\EloquentOrderRepository::class\n        );\n    }\n\n    public function boot(): void\n    {\n        $this->registerRoutes();\n        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');\n    }\n\n    protected function registerRoutes(): void\n    {\n        Route::prefix('api/sales')\n            ->middleware('api')\n            ->group(__DIR__ . '/../../routes/api.php');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Register in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bootstrap/providers.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "return [\n    App\\Providers\\AppServiceProvider::class,\n    Modules\\Sales\\Providers\\SalesServiceProvider::class,\n    Modules\\Inventory\\Providers\\InventoryServiceProvider::class,\n    Modules\\Billing\\Providers\\BillingServiceProvider::class,\n    Modules\\Notifications\\Providers\\NotificationServiceProvider::class,\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "inter-module-communication",
      children: "Inter-Module Communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modules communicate through contracts and events, never through direct class references:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace Modules\\Sales\\Contracts;\n\ninterface StockService\n{\n    public function reserve(int $productId, int $quantity): bool;\n    public function release(int $productId, int $quantity): void;\n    public function isAvailable(int $productId, int $quantity): bool;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inventory implements the contract:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace Modules\\Inventory\\Services;\n\nuse Modules\\Sales\\Contracts\\StockService;\n\nclass StockServiceImpl implements StockService\n{\n    public function reserve(int $productId, int $quantity): bool\n    {\n        return Product::where('id', $productId)\n            ->where('stock', '>=', $quantity)\n            ->decrement('stock', $quantity) > 0;\n    }\n\n    public function release(int $productId, int $quantity): void\n    {\n        Product::where('id', $productId)->increment('stock', $quantity);\n    }\n\n    public function isAvailable(int $productId, int $quantity): bool\n    {\n        return Product::where('id', $productId)\n            ->where('stock', '>=', $quantity)\n            ->exists();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "modular-vs-microservices-trade-off",
      children: "Modular vs Microservices Trade-off"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modular Monolith"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microservices"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent deploys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared (or per-module schema)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-service database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-module calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-process method calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network RPC (HTTP/gRPC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single app bootstrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service contract tests + integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct class reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared libraries / packages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Team autonomy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared codebase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-team codebase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operational complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (monitoring, tracing, CI/CD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical + limited horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-service horizontal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The modular monolith is the recommended starting point. Extract to microservices only when team coordination or independent scaling demands it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business logic encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers stay thin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra class per domain concern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data access abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swapable backends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds interface/impl boilerplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Action Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-use-case class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero decision, immediately clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proliferates for CRUD operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable data transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type safety across layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boilerplate for simple transfers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex domain modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ubiquitous language, bounded contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High overhead for CRUD apps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Method/Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App\\Services*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business logic extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App\\Repositories*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data access abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Action Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "__invoke()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single use case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTO"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eadonly properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-layer data transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AggregateRoot, ValueObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex domain logic"
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
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Report generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testable without HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra indirection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-source data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap DB/cache/API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface per entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User registration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single responsibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many small files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payment processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable amount/currency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mapping overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Billing domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ubiquitous language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the main purpose of the service layer pattern?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Handle HTTP requests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Encapsulate business logic away from controllers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Manage database connections"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Render views"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The service layer extracts business logic from controllers, keeping HTTP concerns separate."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is a key characteristic of DTOs?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Mutable state"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Framework inheritance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Immutable readonly properties"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Database relationships"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** DTOs are immutable objects with typed properties for safe cross-layer data transfer."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When should you apply Domain-Driven Design in a Laravel application?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Always, for every project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Never, it is outdated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) When business logic complexity justifies bounded contexts and aggregates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only for API development"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** DDD adds overhead. Apply it only when the domain is complex enough to warrant the tactical patterns."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the recommended starting architecture for most Laravel applications?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Microservices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Modular monolith"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Serverless functions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Hexagonal architecture from day one"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Start with a modular monolith. Extract microservices only when independent scaling or deployment needs arise."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The service layer extracts business logic from controllers into dedicated, injectable classes with single-responsibility boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository interfaces decouple data access from business logic, supporting Eloquent, cache, and fake implementations that are swappable via Laravel's service container"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Action classes encapsulate single use cases behind ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__invoke()"
        }), ", and can be organized with a command bus for structured input/output handling"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DTOs provide immutable, typed data carriers that keep Eloquent models isolated from command handlers and HTTP contexts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DDD tactical patterns — bounded contexts, aggregates, domain events, value objects — map naturally to Laravel's directory structure and service container"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hexagonal architecture places domain ports at the center, with infrastructure adapters on the boundary, enforcing dependency inversion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Event sourcing captures every state change as an append-only event, while CQRS separates read and write concerns for optimized query models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-tenancy strategies range from simple tenant_id column scoping to isolated databases per tenant, each with distinct trade-offs for isolation and complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The modular monolith organizes code into self-contained feature modules that can graduate to microservices when operational demands justify the extraction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Start with a modular monolith. Extract to microservices only when you have a clear bounded context with independent scaling or deployment requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the difference between a service layer class and a repository class. When would you choose to use each pattern in a Laravel application?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain how the command bus pattern improves upon calling action classes directly from controllers. What are the trade-offs of introducing a bus abstraction?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why should DTOs be immutable? Provide an example of a bug that could occur if a mutable data object is shared between multiple handlers."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare the single-database (tenant_id column) and separate-database multi-tenancy strategies in terms of isolation, performance, backup complexity, and cross-tenant queries."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a modular monolith differ from both a traditional Laravel application and a full microservices architecture? What criteria would justify graduating a module to a standalone service?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Refactor a fat controller"
          }), ": Given a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SubscriptionController"
          }), " with 250 lines containing billing logic, email notifications, inventory reservation, and audit logging, extract these concerns into a service layer, a repository, and appropriate action classes. Show the final controller, service, and at least one action class."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a CQRS flow"
          }), ": A reporting dashboard needs to show (a) total revenue per plan per month, (b) churn rate over time, and (c) active subscriber counts. Design an event-sourced write model and a projected read model. Include the event classes, the projector, and the read model table schema."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Module boundaries exercise"
          }), ": Given the following features — user authentication, product catalog, shopping cart, order management, payment processing, shipping, reviews, recommendations, and customer support tickets — draw the bounded context boundaries and write the contract interfaces for inter-module communication between at least three modules."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a full hexagonal architecture for a loan application system. The system must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive loan applications from a web form, a mobile API, and a batch CSV import"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run credit checks through two external providers (Experian and Equifax) with automatic failover"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store applications in a PostgreSQL database with an audit trail of all status changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify applicants via email and SMS at each status milestone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expose a read-only API for internal dashboards with pre-computed aggregate statistics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Produce the port interfaces (directory structure and interface definitions), adapter implementations for at least two infrastructure concerns, the service container wiring, and demonstrate dependency inversion by writing a test that swaps the credit check adapter for a fake."
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