"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85391],{

/***/ 89305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_18_automation_patterns_md_901_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-18-automation-patterns-md-901.json
const site_docs_courses_laravel_18_automation_patterns_md_901_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/18-automation-patterns","title":"Chapter 18: Automation Patterns & Workflows","description":"Previous Architecture Patterns","source":"@site/docs/courses/laravel/18-automation-patterns.md","sourceDirName":"courses/laravel","slug":"/laravel/18-automation-patterns","permalink":"/ai-engineering-journey/laravel/18-automation-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"18-automation-patterns","slug":"/laravel/18-automation-patterns","title":"Chapter 18: Automation Patterns & Workflows","sidebar_label":"Chapter 18: Automation Patterns & Workflows","sidebar_position":18},"sidebar":"course-laravel","previous":{"title":"Chapter 17: Laravel Boost — AI-Assisted Development","permalink":"/ai-engineering-journey/laravel/17-boost"},"next":{"title":"Chapter 19: Laravel Application Architecture Patterns","permalink":"/ai-engineering-journey/laravel/19-architecture-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/18-automation-patterns.md


const frontMatter = {
	id: '18-automation-patterns',
	slug: '/laravel/18-automation-patterns',
	title: 'Chapter 18: Automation Patterns & Workflows',
	sidebar_label: 'Chapter 18: Automation Patterns & Workflows',
	sidebar_position: 18
};
const contentTitle = 'Chapter 18: Automation Patterns & Workflows';

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
  "value": "18.1 Event-Driven Automation",
  "id": "181-event-driven-automation",
  "level": 3
}, {
  "value": "18.2 Queue-Based Pipeline Patterns",
  "id": "182-queue-based-pipeline-patterns",
  "level": 3
}, {
  "value": "18.3 AI Agent Automation",
  "id": "183-ai-agent-automation",
  "level": 3
}, {
  "value": "18.4 Scheduled Task Automation",
  "id": "184-scheduled-task-automation",
  "level": 3
}, {
  "value": "18.5 Webhook-Driven Automation",
  "id": "185-webhook-driven-automation",
  "level": 3
}, {
  "value": "18.6 CI/CD Integration",
  "id": "186-cicd-integration",
  "level": 3
}, {
  "value": "18.7 Monitoring Alerts",
  "id": "187-monitoring-alerts",
  "level": 3
}, {
  "value": "18.8 Business Process Automation",
  "id": "188-business-process-automation",
  "level": 3
}, {
  "value": "18.9 Complete Example: Automated Document Processing Pipeline",
  "id": "189-complete-example-automated-document-processing-pipeline",
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
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table-1",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
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
        id: "chapter-18-automation-patterns--workflows",
        children: "Chapter 18: Automation Patterns & Workflows"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/17-boost",
          children: "Laravel Boost"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/19-architecture-patterns",
          children: "Architecture Patterns"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build event-driven automation systems using Laravel's event and listener architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement queue-based pipelines with job chaining, batching, and middleware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design AI agent automation for background processing and real-time updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create scheduled task automation with overlapping prevention and multi-server support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build webhook-driven workflows with signature verification and payload processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement monitoring alerts and business process automation pipelines"
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
        href: "../../assets/images/lessons/laravel/18-automation-patterns/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/18-automation-patterns/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/18-automation-patterns/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/18-automation-patterns/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/18-automation-patterns/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/18-automation-patterns/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "``mermaid\nflowchart LR\nT[Trigger] --> B{Event Type}\nB --> E[Event]\nB --> S[Schedule]\nB --> W[Webhook]\nE --> C[Job Chain]\nS --> C\nW --> C"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " h"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C --> Q[Queue Worker]\nQ --> M[Monitor]\nM --> A[Alert]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "``"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/18-automation-patterns.png",
        alt: "Automation Patterns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "181-event-driven-automation",
      children: "18.1 Event-Driven Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel's event system is the backbone of decoupled automation. An event is a simple data class that describes something that happened. A listener reacts to that event. This separation lets you add new automation behaviors without touching existing code."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define an event:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Events;\n\nuse App\\Models\\Order;\nuse Illuminate\\Foundation\\Events\\Dispatchable;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass OrderShipped\n{\n    use Dispatchable, SerializesModels;\n\n    public function __construct(\n        public Order $order,\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define its listener:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nuse App\\Events\\OrderShipped;\nuse App\\Notifications\\ShipmentConfirmation;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass SendShipmentNotification\n{\n    public function handle(OrderShipped $event): void\n    {\n        $order = $event->order;\n\n        Log::info('Processing shipment notification', [\n            'order_id' => $order->id,\n            'customer_email' => $order->user->email,\n        ]);\n\n        $order->user->notify(\n            new ShipmentConfirmation($order)\n        );\n\n        // Alert the warehouse system via webhook\n        if ($order->requires_cold_shipping) {\n            $this->notifyColdStorageTeam($order);\n        }\n    }\n\n    private function notifyColdStorageTeam(Order $order): void\n    {\n        Http::post(config('services.warehouse.cold_storage_webhook'), [\n            'order_id' => $order->id,\n            'temperature_required' => $order->product->storage_temperature,\n            'estimated_arrival' => $order->shipped_at->addHours(24)->toIso8601String(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Register the mapping in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AppServiceProvider"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse App\\Events\\OrderShipped;\nuse App\\Listeners\\SendShipmentNotification;\nuse App\\Events\\OrderCancelled;\nuse App\\Listeners\\ProcessRefund;\nuse App\\Listeners\\ReleaseInventory;\nuse Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;\n\nclass EventServiceProvider extends ServiceProvider\n{\n    protected $listen = [\n        OrderShipped::class => [\n            SendShipmentNotification::class,\n            UpdateInventoryCount::class,\n            UpdateOrderStatusIndex::class,\n        ],\n        OrderCancelled::class => [\n            ProcessRefund::class,\n            ReleaseInventory::class,\n            NotifyFulfillmentTeam::class,\n        ],\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For complex event handling, use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "event subscribers"
      }), " — classes that subscribe to multiple events:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nuse App\\Events\\OrderShipped;\nuse App\\Events\\OrderCancelled;\nuse App\\Events\\OrderRefunded;\n\nclass OrderEventSubscriber\n{\n    public function handleOrderShipped(OrderShipped $event): void\n    {\n        $this->logOrderActivity($event->order, 'shipped');\n    }\n\n    public function handleOrderCancelled(OrderCancelled $event): void\n    {\n        $this->logOrderActivity($event->order, 'cancelled');\n    }\n\n    public function handleOrderRefunded(OrderRefunded $event): void\n    {\n        $this->logOrderActivity($event->order, 'refunded');\n    }\n\n    private function logOrderActivity($order, string $status): void\n    {\n        activity()\n            ->performedOn($order)\n            ->log(\"Order {$status}\");\n    }\n\n    public function subscribe(Dispatcher $events): array\n    {\n        return [\n            OrderShipped::class => 'handleOrderShipped',\n            OrderCancelled::class => 'handleOrderCancelled',\n            OrderRefunded::class => 'handleOrderRefunded',\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Events can also be dispatched with a delay for scheduled automation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "OrderShipped::dispatch($order)->delay(now()->addHours(24));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "182-queue-based-pipeline-patterns",
      children: "18.2 Queue-Based Pipeline Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queues are essential for non-blocking automation. Laravel provides several patterns for composing work:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Job Chaining"
      }), " — Run jobs sequentially, stopping if any fails:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Order;\nuse App\\Jobs\\ProcessPayment;\nuse App\\Jobs\\GenerateInvoice;\nuse App\\Jobs\\SendConfirmationEmail;\nuse App\\Jobs\\UpdateInventory;\nuse Illuminate\\Support\\Facades\\Bus;\nuse Illuminate\\Http\\Request;\n\nclass CheckoutController extends Controller\n{\n    public function store(Request $request): Order\n    {\n        $order = Order::create($request->validated());\n\n        Bus::chain([\n            new ProcessPayment($order),\n            new GenerateInvoice($order),\n            new SendConfirmationEmail($order),\n            new UpdateInventory($order),\n        ])->dispatch();\n\n        return $order;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each job in the chain receives the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$order"
      }), " instance. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProcessPayment"
      }), " throws an exception, none of the subsequent jobs run."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Job Batching"
      }), " — Run jobs in parallel and react when the batch completes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Order;\nuse App\\Imports\\OrderRowImporter;\nuse Illuminate\\Bus\\Batchable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Support\\Facades\\Bus;\nuse Illuminate\\Support\\Facades\\Log;\nuse Throwable;\n\nclass ProcessBulkOrders implements ShouldQueue\n{\n    use Batchable;\n\n    public function __construct(\n        public string $importFilePath,\n    ) {}\n\n    public function handle(): void\n    {\n        $rows = array_map('str_getcsv', file($this->importFilePath));\n\n        $header = array_shift($rows);\n\n        $jobs = collect($rows)->map(function ($row) use ($header) {\n            $data = array_combine($header, $row);\n            return new ProcessOrderRow($data);\n        });\n\n        $batch = Bus::batch($jobs)\n            ->then(function () {\n                Log::info('All orders processed successfully.');\n            })\n            ->catch(function (Throwable $e) {\n                Log::error('Batch processing failed.', [\n                    'error' => $e->getMessage(),\n                ]);\n            })\n            ->finally(function () {\n                unlink($this->importFilePath);\n            })\n            ->dispatch();\n\n        session()->flash('batch_id', $batch->id);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checking batch progress from a controller:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Support\\Facades\\Bus;\nuse Illuminate\\Http\\Request;\n\nclass BatchProgressController extends Controller\n{\n    public function show(Request $request, string $batchId)\n    {\n        $batch = Bus::findBatch($batchId);\n\n        if (! $batch) {\n            return response()->json(['error' => 'Batch not found.'], 404);\n        }\n\n        return response()->json([\n            'id' => $batch->id,\n            'name' => $batch->name,\n            'total_jobs' => $batch->totalJobs,\n            'pending_jobs' => $batch->pendingJobs,\n            'failed_jobs' => $batch->failedJobs,\n            'processed_jobs' => $batch->processedJobs(),\n            'progress' => $batch->progress(),\n            'finished' => $batch->finished(),\n            'cancelled' => $batch->cancelled(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unique Jobs"
      }), " — Prevent duplicate instances of the same job in the queue:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\User;\nuse Illuminate\\Contracts\\Queue\\ShouldBeUnique;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\n\nclass SyncUserToCrm implements ShouldQueue, ShouldBeUnique\n{\n    use InteractsWithQueue;\n\n    public function __construct(\n        public User $user,\n    ) {}\n\n    public function uniqueId(): string\n    {\n        return 'sync-user-' . $this->user->id;\n    }\n\n    public function uniqueFor(): int\n    {\n        return 300;\n    }\n\n    public function handle(): void\n    {\n        Http::withToken(config('services.crm.api_key'))\n            ->post(config('services.crm.endpoint') . '/contacts', [\n                'email' => $this->user->email,\n                'name' => $this->user->name,\n                'external_id' => (string) $this->user->id,\n            ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Job Middleware"
      }), " — Add rate limiting or throttling to jobs:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\User;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Support\\Facades\\Redis;\nuse Illuminate\\Queue\\Middleware\\RateLimited;\n\nclass ProcessEmailCampaign implements ShouldQueue\n{\n    public function __construct(\n        public User $user,\n        public string $campaignSlug,\n    ) {}\n\n    public function middleware(): array\n    {\n        return [\n            (new RateLimited('email-campaign'))\n                ->dontRelease(),\n        ];\n    }\n\n    public function handle(): void\n    {\n        $emailJob = (new SendCampaignEmail(\n            user: $this->user,\n            campaignSlug: $this->campaignSlug,\n        ));\n\n        dispatch($emailJob);\n    }\n\n    public function tags(): array\n    {\n        return ['campaign:' . $this->campaignSlug, 'user:' . $this->user->id];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define the rate limiter in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AppServiceProvider"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Cache\\RateLimiting\\Limit;\nuse Illuminate\\Support\\Facades\\RateLimiter;\n\nRateLimiter::for('email-campaign', function () {\n    return Limit::perMinute(10);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Job Events for Monitoring"
      }), " — Hook into the job lifecycle:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse Illuminate\\Queue\\Events\\JobProcessed;\nuse Illuminate\\Queue\\Events\\JobProcessing;\nuse Illuminate\\Queue\\Events\\JobFailed;\nuse Illuminate\\Support\\Facades\\Queue;\nuse Illuminate\\Support\\Facades\\Log;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass AppServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        Queue::before(function (JobProcessing $event) {\n            Log::info('Job started', [\n                'connection' => $event->connectionName,\n                'job' => $event->job->resolveName(),\n                'queue' => $event->job->getQueue(),\n            ]);\n        });\n\n        Queue::after(function (JobProcessed $event) {\n            Log::info('Job completed', [\n                'job' => $event->job->resolveName(),\n                'attempts' => $event->job->attempts(),\n            ]);\n        });\n\n        Queue::failing(function (JobFailed $event) {\n            Log::error('Job failed', [\n                'job' => $event->job->resolveName(),\n                'exception' => $event->exception->getMessage(),\n                'trace' => $event->exception->getTraceAsString(),\n            ]);\n\n            // Notify the team\n            Notification::route('slack', config('services.slack.jobs_channel'))\n                ->notify(new JobFailedNotification($event));\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "183-ai-agent-automation",
      children: "18.3 AI Agent Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI agents can serve as automated processors within your pipeline. They receive tasks, use tools to interact with your application, and produce structured output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\SupportTicket;\nuse App\\Services\\AiAgent;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass ClassifySupportTicket implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public function __construct(\n        public SupportTicket $ticket,\n    ) {}\n\n    public function handle(AiAgent $agent): void\n    {\n        $result = $agent->classify(\n            systemPrompt: 'You are a support ticket classifier. '\n                . 'Classify tickets into: billing, technical, feature_request, or other. '\n                . 'Output a JSON object with category, confidence, and summary.',\n            input: [\n                'subject' => $this->ticket->subject,\n                'description' => $this->ticket->description,\n                'user_email' => $this->ticket->user->email,\n            ],\n        );\n\n        $this->ticket->update([\n            'category' => $result['category'],\n            'confidence' => $result['confidence'],\n            'ai_summary' => $result['summary'],\n        ]);\n\n        if ($result['category'] === 'billing' && $result['confidence'] > 0.8) {\n            PrioritizeTicket::dispatch($this->ticket, 'high');\n        }\n\n        Log::info('Ticket classified', [\n            'ticket_id' => $this->ticket->id,\n            'category' => $result['category'],\n            'confidence' => $result['confidence'],\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents can be queued for background processing, then broadcast results via WebSockets:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Report;\nuse App\\Jobs\\GenerateAiReport;\nuse App\\Events\\ReportGenerated;\nuse Illuminate\\Http\\Request;\n\nclass ReportController extends Controller\n{\n    public function generate(Request $request): Report\n    {\n        $validated = $request->validate([\n            'type' => ['required', 'string', 'in:quarterly,monthly,weekly'],\n            'date_range' => ['required', 'array', 'size:2'],\n        ]);\n\n        $report = Report::create([\n            'user_id' => $request->user()->id,\n            'type' => $validated['type'],\n            'date_from' => $validated['date_range'][0],\n            'date_to' => $validated['date_range'][1],\n            'status' => 'processing',\n        ]);\n\n        GenerateAiReport::dispatch($report)\n            ->onQueue('ai-processing');\n\n        return $report;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Report;\nuse App\\Events\\ReportGenerated;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Support\\Facades\\App;\n\nclass GenerateAiReport implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public function __construct(\n        public Report $report,\n    ) {}\n\n    public function handle(): void\n    {\n        $agent = App::make(\\App\\Services\\ReportAgent::class);\n\n        $result = $agent->analyze(\n            query: \"Generate a {$this->report->type} analysis for \"\n                . \"{$this->report->date_from} to {$this->report->date_to}.\",\n        );\n\n        $this->report->update([\n            'content' => $result['analysis'],\n            'chart_data' => $result['charts'] ?? [],\n            'key_findings' => $result['findings'] ?? [],\n            'status' => 'completed',\n            'completed_at' => now(),\n        ]);\n\n        ReportGenerated::dispatch($this->report);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "184-scheduled-task-automation",
      children: "18.4 Scheduled Task Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The schedule in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Console\\Kernel"
      }), " is the central timer for all periodic tasks:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console;\n\nuse App\\Console\\Commands\\GenerateDailyReport;\nuse App\\Jobs\\SyncInventoryWithWarehouse;\nuse App\\Jobs\\CleanExpiredSessions;\nuse App\\Jobs\\BackupDatabase;\nuse App\\Jobs\\SendDigestEmails;\nuse Illuminate\\Console\\Scheduling\\Schedule;\nuse Illuminate\\Foundation\\Console\\Kernel as ConsoleKernel;\n\nclass Kernel extends ConsoleKernel\n{\n    protected function schedule(Schedule $schedule): void\n    {\n        // Run daily maintenance between 2-4 AM\n        $schedule->job(new CleanExpiredSessions())\n            ->dailyAt('02:00')\n            ->withoutOverlapping(60)\n            ->description('Clean expired sessions');\n\n        $schedule->job(new BackupDatabase())\n            ->dailyAt('03:00')\n            ->onOneServer()\n            ->description('Full database backup');\n\n        // Hourly sync\n        $schedule->job(new SyncInventoryWithWarehouse())\n            ->hourly()\n            ->between('6:00', '23:00')\n            ->description('Sync inventory with warehouse');\n\n        // Weekly digest every Monday at 8 AM\n        $schedule->job(new SendDigestEmails())\n            ->weeklyOn(1, '08:00')\n            ->onOneServer()\n            ->description('Send weekly digest emails');\n\n        // Generate daily report at 7 PM\n        $schedule->command('report:daily')\n            ->dailyAt('19:00')\n            ->environments('production')\n            ->thenWithOutput(function ($output) {\n                Notification::route('slack', '#reports')\n                    ->notify(new ReportReadyNotification($output));\n            });\n\n        // Health checks every five minutes\n        $schedule->command('monitor:queue-health')\n            ->everyFiveMinutes()\n            ->withoutOverlapping()\n            ->description('Monitor queue health');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overlapping prevention"
      }), " stops a task from running if the previous instance is still executing:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$schedule->command('backup:database')\n    ->daily()\n    ->withoutOverlapping(120);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "120"
      }), " parameter is the number of minutes before the lock expires. If the job crashes without releasing the lock, it will be available again after this timeout."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "On-one-server"
      }), " ensures the task runs on only one server in a multi-server deployment:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$schedule->command('report:daily')\n    ->dailyAt('06:00')\n    ->onOneServer();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This uses the shared cache (Redis, Memcached, or database) to acquire a distributed lock."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance mode handling"
      }), " prevents scheduled tasks from running while the application is down for deployment:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$schedule->command('emails:send-digest')\n    ->dailyAt('08:00')\n    ->evenInMaintenanceMode(); // Override for critical tasks\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, scheduled tasks skip when maintenance mode is active. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "evenInMaintenanceMode()"
      }), " only for tasks that must run regardless."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "185-webhook-driven-automation",
      children: "18.5 Webhook-Driven Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Webhooks let external systems trigger automation in your application. Receive them with a dedicated controller:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Webhooks;\n\nuse App\\Jobs\\ProcessStripeEvent;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Http\\Response;\n\nclass StripeWebhookController extends Controller\n{\n    public function __invoke(Request $request): Response\n    {\n        $payload = $request->getContent();\n        $signature = $request->header('Stripe-Signature');\n\n        try {\n            $event = \\Stripe\\Webhook::constructEvent(\n                $payload,\n                $signature,\n                config('services.stripe.webhook_secret')\n            );\n        } catch (\\UnexpectedValueException $e) {\n            return response('Invalid payload', 400);\n        } catch (\\Stripe\\Exception\\SignatureVerificationException $e) {\n            return response('Invalid signature', 400);\n        }\n\n        ProcessStripeEvent::dispatch($event->toArray());\n\n        return response('', 200);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payload processing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Payment;\nuse App\\Models\\Subscription;\nuse App\\Notifications\\PaymentFailedNotice;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass ProcessStripeEvent implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public function __construct(\n        public array $eventData,\n    ) {}\n\n    public function handle(): void\n    {\n        $type = $this->eventData['type'] ?? 'unknown';\n\n        match ($type) {\n            'invoice.payment_succeeded' => $this->handlePaymentSucceeded(),\n            'invoice.payment_failed' => $this->handlePaymentFailed(),\n            'customer.subscription.deleted' => $this->handleSubscriptionDeleted(),\n            'charge.refunded' => $this->handleRefund(),\n            default => Log::info('Unhandled Stripe event', ['type' => $type]),\n        };\n    }\n\n    protected function handlePaymentSucceeded(): void\n    {\n        $invoiceData = $this->eventData['data']['object'];\n        $stripeInvoiceId = $invoiceData['id'];\n\n        Payment::where('stripe_invoice_id', $stripeInvoiceId)\n            ->update(['status' => 'paid', 'paid_at' => now()]);\n    }\n\n    protected function handlePaymentFailed(): void\n    {\n        $invoiceData = $this->eventData['data']['object'];\n        $customerId = $invoiceData['customer'];\n\n        $subscription = Subscription::where('stripe_id', $customerId)->first();\n\n        if ($subscription && $subscription->user) {\n            $subscription->user->notify(new PaymentFailedNotice($invoiceData));\n        }\n    }\n\n    protected function handleSubscriptionDeleted(): void\n    {\n        $subscriptionData = $this->eventData['data']['object'];\n        $stripeSubscriptionId = $subscriptionData['id'];\n\n        Subscription::where('stripe_id', $stripeSubscriptionId)\n            ->update(['status' => 'cancelled']);\n    }\n\n    protected function handleRefund(): void\n    {\n        $chargeData = $this->eventData['data']['object'];\n        $chargeId = $chargeData['id'];\n\n        Payment::where('stripe_charge_id', $chargeId)\n            ->update(['status' => 'refunded']);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For outgoing webhooks that notify external systems:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nuse App\\Events\\OrderShipped;\nuse App\\Jobs\\DeliverWebhook;\nuse Illuminate\\Support\\Facades\\Event;\n\nclass NotifyExternalSystems\n{\n    public function handle(OrderShipped $event): void\n    {\n        $payload = [\n            'event' => 'order.shipped',\n            'timestamp' => now()->toIso8601String(),\n            'data' => [\n                'order_id' => $event->order->id,\n                'tracking_number' => $event->order->tracking_number,\n                'carrier' => $event->order->carrier,\n                'shipped_at' => $event->order->shipped_at->toIso8601String(),\n            ],\n        ];\n\n        foreach (config('services.webhooks.subscribers') as $subscriber) {\n            DeliverWebhook::dispatch($subscriber['url'], $subscriber['secret'], $payload);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Support\\Facades\\Http;\n\nclass DeliverWebhook implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public int $tries = 5;\n\n    public int $backoff = 30;\n\n    public function __construct(\n        public string $url,\n        public string $secret,\n        public array $payload,\n    ) {}\n\n    public function handle(): void\n    {\n        $signature = hash_hmac('sha256', json_encode($this->payload), $this->secret);\n\n        $response = Http::withHeaders([\n            'X-Webhook-Signature' => $signature,\n            'X-Webhook-Timestamp' => (string) now()->timestamp,\n        ])->timeout(10)->post($this->url, $this->payload);\n\n        if ($response->failed()) {\n            $this->release(60);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "186-cicd-integration",
      children: "18.6 CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tests run automatically as part of CI. For Laravel, this typically uses PHPUnit or PEST within a GitHub Actions workflow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/tests.yml\nname: Tests\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  laravel-tests:\n    runs-on: ubuntu-latest\n\n    services:\n      postgres:\n        image: postgres:17\n        env:\n          POSTGRES_DB: testing\n          POSTGRES_USER: test\n          POSTGRES_PASSWORD: test\n        ports:\n          - 5432:5432\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5\n\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup PHP\n        uses: shivammathur/setup-php@v2\n        with:\n          php-version: 8.4\n          extensions: pgsql, pdo_pgsql\n\n      - name: Install dependencies\n        run: composer install --prefer-dist --no-interaction\n\n      - name: Environment setup\n        run: |\n          cp .env.example .env\n          php artisan key:generate\n\n      - name: Run migrations\n        run: php artisan migrate --force\n        env:\n          DB_CONNECTION: pgsql\n          DB_HOST: localhost\n          DB_PORT: 5432\n          DB_DATABASE: testing\n          DB_USERNAME: test\n          DB_PASSWORD: test\n\n      - name: Run tests\n        run: php artisan test --parallel\n        env:\n          DB_CONNECTION: pgsql\n          DB_HOST: localhost\n          DB_PORT: 5432\n          DB_DATABASE: testing\n          DB_USERNAME: test\n          DB_PASSWORD: test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deployment automation with Forge, Vapor, or Envoyer follows the same pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Forge deployment script (simplified)\n$ git pull origin main\n$ composer install --no-interaction --prefer-dist --optimize-autoloader\n$ php artisan migrate --force\n$ php artisan optimize\n$ php artisan queue:restart\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zero-downtime deployments ensure users never see errors during updates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Envoyer deployment hooks\n// Activation hook:\nphp artisan down --retry=60\nphp artisan migrate --force\nphp artisan up\n\n// Deploy failed hook:\nphp artisan up\ngit reset --hard HEAD~1\ncomposer install --no-interaction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rollback strategy for failed deployments:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Rollback script\nphp artisan down\ngit revert HEAD --no-edit\ncomposer install --no-interaction --prefer-dist\nphp artisan migrate:rollback --step=1\nphp artisan optimize\nphp artisan up\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "187-monitoring-alerts",
      children: "18.7 Monitoring Alerts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proactive monitoring prevents failures before they affect users. Configure Pulse or Telescope alerts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console\\Commands;\n\nuse Illuminate\\Console\\Command;\nuse Illuminate\\Support\\Facades\\Cache;\nuse Illuminate\\Support\\Facades\\Notification;\nuse App\\Notifications\\QueueHealthAlert;\n\nclass MonitorQueueHealth extends Command\n{\n    protected $signature = 'monitor:queue-health';\n    protected $description = 'Monitor queue health and alert on failures';\n\n    public function handle(): int\n    {\n        $queueName = 'default';\n        $failedCount = Cache::get(\"queue.{$queueName}.failed_count\", 0);\n        $recentJobs = Cache::get(\"queue.{$queueName}.processed_last_minute\", 0);\n\n        $this->info(\"Queue [{$queueName}]: {$failedCount} failed, {$recentJobs} recent\");\n\n        if ($failedCount > 5) {\n            Notification::route('slack', config('services.slack.alerts_channel'))\n                ->route('mail', config('app.admin_email'))\n                ->notify(new QueueHealthAlert($queueName, $failedCount, $recentJobs));\n        }\n\n        if ($recentJobs === 0) {\n            Notification::route('slack', config('services.slack.alerts_channel'))\n                ->notify(new QueueHealthAlert($queueName, $failedCount, $recentJobs));\n        }\n\n        $this->checkCacheHitRatio();\n\n        return Command::SUCCESS;\n    }\n\n    protected function checkCacheHitRatio(): void\n    {\n        $hits = Cache::get('cache_hits', 0);\n        $misses = Cache::get('cache_misses', 0);\n        $total = $hits + $misses;\n\n        if ($total > 0) {\n            $hitRatio = ($hits / $total) * 100;\n\n            $this->info(\"Cache hit ratio: {$hitRatio}%\");\n\n            if ($hitRatio < 60) {\n                Notification::route('slack', config('services.slack.alerts_channel'))\n                    ->notify(new LowCacheHitAlert($hitRatio));\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "188-business-process-automation",
      children: "18.8 Business Process Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approval workflows automate multi-step business processes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\ExpenseReport;\nuse App\\Models\\User;\nuse App\\Notifications\\ExpenseApprovalRequest;\nuse App\\Notifications\\ExpenseApproved;\nuse App\\Notifications\\ExpenseRejected;\nuse Illuminate\\Support\\Facades\\Notification;\n\nclass ExpenseApprovalWorkflow\n{\n    public function submit(ExpenseReport $report): void\n    {\n        $report->update(['status' => 'pending_approval']);\n\n        $approver = $this->determineApprover($report);\n\n        Notification::route('mail', $approver->email)\n            ->notify(new ExpenseApprovalRequest($report));\n    }\n\n    public function approve(ExpenseReport $report, User $approver): void\n    {\n        $report->update([\n            'status' => 'approved',\n            'approved_by' => $approver->id,\n            'approved_at' => now(),\n        ]);\n\n        if ($report->total > 5000) {\n            $this->escalateToFinance($report);\n        } else {\n            $report->user->notify(new ExpenseApproved($report));\n            ProcessReimbursement::dispatch($report);\n        }\n    }\n\n    public function reject(ExpenseReport $report, User $approver, string $reason): void\n    {\n        $report->update([\n            'status' => 'rejected',\n            'approved_by' => $approver->id,\n            'rejection_reason' => $reason,\n        ]);\n\n        $report->user->notify(new ExpenseRejected($report, $reason));\n    }\n\n    private function determineApprover(ExpenseReport $report): User\n    {\n        return $report->user->department->manager ?? User::where('role', 'admin')->first();\n    }\n\n    private function escalateToFinance(ExpenseReport $report): void\n    {\n        $financeTeam = User::where('department', 'finance')->get();\n\n        Notification::route('mail', $financeTeam->pluck('email')->toArray())\n            ->notify(new FinanceApprovalRequest($report));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-step document processing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\Document;\nuse App\\Jobs\\ConvertDocumentToPdf;\nuse App\\Jobs\\ExtractDocumentText;\nuse App\\Jobs\\ClassifyDocument;\nuse App\\Jobs\\StoreDocumentInArchive;\nuse App\\Jobs\\NotifyUserDocumentReady;\nuse Illuminate\\Support\\Facades\\Bus;\n\nclass DocumentProcessingPipeline\n{\n    public function process(Document $document): void\n    {\n        Bus::chain([\n            new ConvertDocumentToPdf($document),\n            new ExtractDocumentText($document),\n            new ClassifyDocument($document),\n            new StoreDocumentInArchive($document),\n            new NotifyUserDocumentReady($document),\n        ])->catch(function (\\Throwable $e) use ($document) {\n            $document->update([\n                'status' => 'failed',\n                'error_message' => $e->getMessage(),\n            ]);\n\n            Notification::route('mail', $document->user->email)\n                ->notify(new DocumentProcessingFailed($document, $e->getMessage()));\n        })->dispatch();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scheduled report generation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\Models\\Report;\nuse App\\Jobs\\GenerateSalesReport;\nuse App\\Jobs\\GenerateInventoryReport;\nuse App\\Jobs\\EmailReportToStakeholders;\nuse Illuminate\\Console\\Command;\n\nclass GenerateDailyReports extends Command\n{\n    protected $signature = 'reports:daily';\n    protected $description = 'Generate and distribute daily reports';\n\n    public function handle(): int\n    {\n        $this->info('Generating daily reports...');\n\n        $salesReport = Report::create([\n            'type' => 'daily_sales',\n            'date_from' => now()->subDay()->startOfDay(),\n            'date_to' => now()->subDay()->endOfDay(),\n            'status' => 'pending',\n        ]);\n\n        $inventoryReport = Report::create([\n            'type' => 'daily_inventory',\n            'date_from' => now()->subDay()->startOfDay(),\n            'date_to' => now()->subDay()->endOfDay(),\n            'status' => 'pending',\n        ]);\n\n        Bus::chain([\n            new GenerateSalesReport($salesReport),\n            new GenerateInventoryReport($inventoryReport),\n            new EmailReportToStakeholders($salesReport, $inventoryReport),\n        ])->dispatch();\n\n        $this->info('Reports queued for generation.');\n\n        return Command::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "189-complete-example-automated-document-processing-pipeline",
      children: "18.9 Complete Example: Automated Document Processing Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example ties all the automation patterns together into a complete document processing system:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// File: app/Http/Controllers/DocumentController.php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Document;\nuse App\\Jobs\\ProcessUploadedDocument;\nuse App\\Events\\DocumentUploaded;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Storage;\n\nclass DocumentController extends Controller\n{\n    public function upload(Request $request): Document\n    {\n        $validated = $request->validate([\n            'file' => ['required', 'file', 'max:102400', 'mimes:pdf,docx,txt,csv'],\n            'title' => ['nullable', 'string', 'max:255'],\n        ]);\n\n        $path = $request->file('file')->store('documents/' . auth()->id(), 's3');\n\n        $document = Document::create([\n            'user_id' => auth()->id(),\n            'title' => $validated['title'] ?? $request->file('file')->getClientOriginalName(),\n            'original_filename' => $request->file('file')->getClientOriginalName(),\n            'mime_type' => $request->file('file')->getMimeType(),\n            'size_bytes' => $request->file('file')->getSize(),\n            'storage_path' => $path,\n            'storage_disk' => 's3',\n            'status' => 'uploaded',\n        ]);\n\n        DocumentUploaded::dispatch($document);\n\n        return $document;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nuse App\\Events\\DocumentUploaded;\nuse App\\Jobs\\ProcessUploadedDocument;\nuse Illuminate\\Support\\Facades\\Bus;\n\nclass QueueDocumentProcessing\n{\n    public function handle(DocumentUploaded $event): void\n    {\n        ProcessUploadedDocument::dispatch($event->document);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Document;\nuse App\\Jobs\\ConvertDocumentToText;\nuse App\\Jobs\\AnalyzeWithAi;\nuse App\\Jobs\\StoreAnalysisResults;\nuse App\\Jobs\\NotifyUserOfResults;\nuse App\\Events\\DocumentProcessingComplete;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Support\\Facades\\Bus;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass ProcessUploadedDocument implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public int $timeout = 600;\n\n    public function __construct(\n        public Document $document,\n    ) {}\n\n    public function handle(): void\n    {\n        $this->document->update(['status' => 'processing']);\n\n        Bus::chain([\n            new ConvertDocumentToText($this->document),\n            new AnalyzeWithAi($this->document),\n            new StoreAnalysisResults($this->document),\n            new NotifyUserOfResults($this->document),\n        ])->catch(function (\\Throwable $e) {\n            $this->document->update([\n                'status' => 'failed',\n                'error_message' => $e->getMessage(),\n            ]);\n\n            Log::error('Document processing failed', [\n                'document_id' => $this->document->id,\n                'error' => $e->getMessage(),\n            ]);\n        })->dispatch();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Document;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Support\\Facades\\Storage;\n\nclass ConvertDocumentToText implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public function __construct(\n        public Document $document,\n    ) {}\n\n    public function handle(): void\n    {\n        $disk = Storage::disk($this->document->storage_disk);\n        $content = $disk->get($this->document->storage_path);\n\n        $plainText = match ($this->document->mime_type) {\n            'application/pdf' => $this->extractTextFromPdf($content),\n            'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => $this->extractTextFromDocx($content),\n            'text/plain', 'text/csv' => $content,\n            default => throw new \\RuntimeException('Unsupported file type: ' . $this->document->mime_type),\n        };\n\n        $processedPath = 'documents/' . $this->document->id . '/extracted-text.txt';\n        $disk->put($processedPath, $plainText);\n\n        $this->document->update([\n            'extracted_text_path' => $processedPath,\n            'extracted_text_length' => strlen($plainText),\n        ]);\n    }\n\n    private function extractTextFromPdf(string $content): string\n    {\n        $temporaryPath = tempnam(sys_get_temp_dir(), 'pdf_');\n        file_put_contents($temporaryPath, $content);\n\n        $output = shell_exec(\"pdftotext \\\"{$temporaryPath}\\\" -\");\n\n        unlink($temporaryPath);\n\n        return $output ?? '';\n    }\n\n    private function extractTextFromDocx(string $content): string\n    {\n        $zip = new \\ZipArchive();\n        $temporaryPath = tempnam(sys_get_temp_dir(), 'docx_');\n        file_put_contents($temporaryPath, $content);\n\n        $text = '';\n\n        if ($zip->open($temporaryPath) === true) {\n            $xmlContent = $zip->getFromName('word/document.xml');\n            if ($xmlContent !== false) {\n                $xml = simplexml_load_string($xmlContent);\n                $namespaces = $xml->getNamespaces(true);\n                $body = $xml->children($namespaces['w'])->body ?? null;\n                if ($body) {\n                    foreach ($body->children($namespaces['w'])->p as $paragraph) {\n                        foreach ($paragraph->children($namespaces['w'])->r as $run) {\n                            $text .= (string) $run->children($namespaces['w'])->t;\n                        }\n                        $text .= \"\\n\";\n                    }\n                }\n            }\n            $zip->close();\n        }\n\n        unlink($temporaryPath);\n\n        return $text;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Document;\nuse App\\Services\\AiAgent;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\n\nclass AnalyzeWithAi implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public function __construct(\n        public Document $document,\n    ) {}\n\n    public function handle(AiAgent $agent): void\n    {\n        $disk = \\Illuminate\\Support\\Facades\\Storage::disk($this->document->storage_disk);\n        $text = $disk->get($this->document->extracted_text_path);\n\n        $result = $agent->analyze(\n            systemPrompt: 'You are a document analysis assistant. Extract key information from the provided text.',\n            input: [\n                'title' => $this->document->title,\n                'content' => $text,\n            ],\n            expects: [\n                'summary' => 'string',\n                'keywords' => 'array',\n                'sentiment' => 'string',\n                'entities' => 'array',\n                'suggested_category' => 'string',\n                'confidence_score' => 'float',\n            ],\n        );\n\n        $this->document->update([\n            'ai_summary' => $result['summary'],\n            'ai_keywords' => $result['keywords'],\n            'ai_sentiment' => $result['sentiment'],\n            'ai_entities' => $result['entities'],\n            'suggested_category' => $result['suggested_category'],\n            'ai_confidence' => $result['confidence_score'],\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Document;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Support\\Facades\\Storage;\n\nclass StoreAnalysisResults implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public function __construct(\n        public Document $document,\n    ) {}\n\n    public function handle(): void\n    {\n        $results = [\n            'document_id' => $this->document->id,\n            'title' => $this->document->title,\n            'summary' => $this->document->ai_summary,\n            'keywords' => $this->document->ai_keywords,\n            'sentiment' => $this->document->ai_sentiment,\n            'entities' => $this->document->ai_entities,\n            'category' => $this->document->suggested_category,\n            'confidence' => $this->document->ai_confidence,\n            'analyzed_at' => now()->toIso8601String(),\n        ];\n\n        Storage::disk('s3')->put(\n            \"documents/{$this->document->id}/analysis.json\",\n            json_encode($results, JSON_PRETTY_PRINT)\n        );\n\n        $this->document->update([\n            'status' => 'completed',\n            'completed_at' => now(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Document;\nuse App\\Events\\DocumentAnalysisComplete;\nuse App\\Notifications\\DocumentReady;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Queue\\InteractsWithQueue;\n\nclass NotifyUserOfResults implements ShouldQueue\n{\n    use InteractsWithQueue;\n\n    public function __construct(\n        public Document $document,\n    ) {}\n\n    public function handle(): void\n    {\n        $this->document->user->notify(\n            new DocumentReady($this->document)\n        );\n\n        DocumentAnalysisComplete::dispatch($this->document);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// File: routes/web.php\n\nuse App\\Http\\Controllers\\DocumentController;\nuse App\\Http\\Controllers\\DocumentViewController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::middleware('auth')->group(function () {\n    Route::post('/documents/upload', [DocumentController::class, 'upload'])\n        ->name('documents.upload');\n\n    Route::get('/documents/{document}', DocumentViewController::class)\n        ->name('documents.show');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\n// File: app/Http/Controllers/DocumentViewController.php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Document;\nuse App\\Events\\DocumentAnalysisComplete;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\View\\View;\n\nclass DocumentViewController extends Controller\n{\n    public function __invoke(Document $document, Request $request): View\n    {\n        $this->authorize('view', $document);\n\n        return view('documents.show', [\n            'document' => $document,\n            'analysis' => json_decode(\n                \\Illuminate\\Support\\Facades\\Storage::disk('s3')\n                    ->get(\"documents/{$document->id}/analysis.json\") ?? '{}',\n                true\n            ),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
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
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding of Automation Patterns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What method creates an ordered sequence of queued jobs?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Bus::batch()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Bus::chain()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Queue::sequence()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Queue::pipeline()"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Bus::chain() creates ordered sequences; Bus::batch() creates parallel groups."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which scheduler method prevents overlapping task execution?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) ->runOnce()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) ->withoutOverlapping()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ->exclusive()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) ->singleton()"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** ->withoutOverlapping() prevents the same task from running if the previous instance is still executing."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How should webhook handlers acknowledge receipt?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Process synchronously and return 200"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Return 202 immediately and dispatch a queued job"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Return 201 and wait for processing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Return 204 with no response body"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Return HTTP 202 Accepted and dispatch a queued job for async processing."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which Laravel package provides a real-time queue dashboard?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Telescope"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Horizon"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Pulse"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**D)** Horizon provides queue monitoring, Pulse provides metrics, Telescope provides debugging."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table-1",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
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
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What method creates an ordered sequence of queued jobs?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Bus::batch()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Bus::chain()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Queue::sequence()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Queue::pipeline()"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Bus::chain() creates ordered sequences; Bus::batch() creates parallel groups."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which scheduler method prevents overlapping task execution?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) ->runOnce()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) ->withoutOverlapping()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ->exclusive()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) ->singleton()"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** ->withoutOverlapping() prevents the same task from running if the previous instance is still executing."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How should webhook handlers acknowledge receipt?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Process synchronously and return 200"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Return 202 immediately and dispatch a queued job"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Return 201 and wait"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Return 204 with no body"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Return HTTP 202 Accepted and dispatch a queued job for async processing."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which Laravel package provides a real-time queue dashboard?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Telescope"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Horizon"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Pulse"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**D)** Horizon provides queue monitoring, Pulse provides metrics, Telescope provides debugging."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Events and listeners provide decoupled automation with the ability to dispatch delayed events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Job chaining runs tasks sequentially; job batching runs tasks in parallel with completion callbacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unique jobs prevent duplicate queue entries; job middleware adds rate limiting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI agents can be queued as automated processors with structured output and broadcasting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduled tasks support overlapping prevention, on-one-server execution, and maintenance mode awareness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Webhook automation requires signature verification and asynchronous payload processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration runs tests and deployments with zero-downtime and rollback strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitoring alerts track queue health, cache hit ratios, and job failures through custom notification channels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business process automation handles approval workflows, document pipelines, and scheduled report generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The complete document processing example demonstrates event → job chain → AI analysis → notification → broadcast"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between job chaining and job batching? When would you use each?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withoutOverlapping()"
        }), " method prevent scheduled tasks from running simultaneously?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of a webhook signature in verifying incoming webhook payloads."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens to the remaining jobs in a chain when one job fails? How can you handle this?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onOneServer()"
        }), " ensure a scheduled task runs only once in a multi-server environment?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UserRegistered"
        }), " event with two listeners: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SendWelcomeEmail"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateDefaultWorkspace"
        }), ". Ensure the workspace is created before the email is sent."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a batched job that processes 10,000 CSV rows in parallel, dispatches 100 jobs at a time, and sends a Slack notification when the entire batch completes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a scheduled task that generates a weekly sales summary report every Monday at 9 AM, prevents overlapping, and runs on only one server."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a complete order fulfillment automation system:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OrderCreated"
        }), " event triggers a job chain: authorize payment → check inventory → allocate stock → generate packing slip → update shipping provider"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If inventory is insufficient, the chain catches the failure, notifies the warehouse team, and marks the order as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backordered"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A scheduled task runs hourly to check backordered orders against restocked inventory and dispatches fulfillment when stock is available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A webhook endpoint receives shipping carrier updates (delivered, delayed, returned) and updates the order status accordingly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A Pulse or Telescope monitor alerts when order fulfillment takes longer than 24 hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include a real-time broadcast so the user sees their order status update without refreshing the page"
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