"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[70270],{

/***/ 73985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_02_architecture_routing_md_309_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-02-architecture-routing-md-309.json
const site_docs_courses_laravel_02_architecture_routing_md_309_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/02-architecture-routing","title":"Chapter 2: Architecture, Routing, Middleware & Controllers","description":"Previous Blade Templating, Components & Frontend","source":"@site/docs/courses/laravel/02-architecture-routing.md","sourceDirName":"courses/laravel","slug":"/laravel/02-architecture-routing","permalink":"/ai-engineering-journey/laravel/02-architecture-routing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-architecture-routing","slug":"/laravel/02-architecture-routing","title":"Chapter 2: Architecture, Routing, Middleware & Controllers","sidebar_label":"Chapter 2: Architecture, Routing, Middleware & Controllers","sidebar_position":2},"sidebar":"course-laravel","previous":{"title":"Chapter 1: Introduction to Laravel 13","permalink":"/ai-engineering-journey/laravel/01-introduction"},"next":{"title":"Chapter 3: Blade Templating, Components & Frontend","permalink":"/ai-engineering-journey/laravel/03-blade-frontend"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/02-architecture-routing.md


const frontMatter = {
	id: '02-architecture-routing',
	slug: '/laravel/02-architecture-routing',
	title: 'Chapter 2: Architecture, Routing, Middleware & Controllers',
	sidebar_label: 'Chapter 2: Architecture, Routing, Middleware & Controllers',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Architecture, Routing, Middleware & Controllers';

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
  "value": "2.1 Request Lifecycle",
  "id": "21-request-lifecycle",
  "level": 3
}, {
  "value": "2.2 Service Container",
  "id": "22-service-container",
  "level": 3
}, {
  "value": "2.3 Routing",
  "id": "23-routing",
  "level": 3
}, {
  "value": "2.4 Middleware",
  "id": "24-middleware",
  "level": 3
}, {
  "value": "2.5 Controllers",
  "id": "25-controllers",
  "level": 3
}, {
  "value": "2.6 Route Model Binding",
  "id": "26-route-model-binding",
  "level": 3
}, {
  "value": "2.7 Request and Response",
  "id": "27-request-and-response",
  "level": 3
}, {
  "value": "2.8 CSRF Protection",
  "id": "28-csrf-protection",
  "level": 3
}, {
  "value": "2.9 Full CRUD Example",
  "id": "29-full-crud-example",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
        id: "chapter-2-architecture-routing-middleware--controllers",
        children: "Chapter 2: Architecture, Routing, Middleware & Controllers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/01-introduction",
          children: "Introduction to Laravel 13"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/03-blade-frontend",
          children: "Blade Templating, Components & Frontend"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trace the complete HTTP request lifecycle from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public/index.php"
        }), " to the Response"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the service container's role in automatic dependency resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define routes with parameters, constraints, names, and groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and register middleware for request filtering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build resource controllers, single-action controllers, and controllers with dependency injection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement route model binding for automatic Eloquent model resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protect routes with CSRF and handle various response types"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Request Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request flows: index.php → kernel → router → middleware → controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding lifecycle helps debug performance and ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-resolves dependencies via type-hints and providers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use container — never use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "new"
            }), " for services manually"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes support params, constraints, names, and groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use route naming with ->name() for clean URL generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filters HTTP requests before controllers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global for all, group for web/api, named for specific routes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organize route logic into classes with DI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource controllers map to 7 RESTful actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Model Binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-resolves Eloquent models from route params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use explicit binding for custom resolution logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF & Responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF auto for web; views, JSON, redirects, files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exclude CSRF for API routes and webhooks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[HTTP Request] --> B[public/index.php]\n    B --> C[bootstrap/app.php]\n    C --> D[HTTP Kernel]\n    D --> E[Global Middleware]\n    E --> F[Route Matching]\n    F --> G[Route Middleware]\n    G --> H[Controller]\n    H --> I[Response]\n    I --> J[Send to Browser]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The request lifecycle follows a precise 8-step path from entry point to response delivery"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-request-lifecycle",
      children: "2.1 Request Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every HTTP request follows a precise path through the framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/02-architecture-routing.png",
        alt: "Laravel Request Lifecycle"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Step 1 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public/index.php"
        })]
      }), ": This single entry point (configured in Nginx or Apache) records the start time, loads Composer's autoloader, bootstraps the application via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bootstrap/app.php"
      }), ", and handles the request:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$app = require_once __DIR__.'/../bootstrap/app.php';\n$kernel = $app->make(Illuminate\\Contracts\\Http\\Kernel::class);\n$response = $kernel->handle($request = Request::capture())->send();\n$kernel->terminate($request, $response);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Step 2 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bootstrap/app.php"
        })]
      }), ": Creates the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Illuminate\\Foundation\\Application"
      }), " instance (the service container) and registers three core contracts as singletons: the HTTP kernel, console kernel, and exception handler."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Kernel"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Http\\Kernel"
      }), " defines global middleware (runs on all requests), middleware groups (", (0,jsx_runtime.jsx)(_components.code, {
        children: "web"
      }), " for session/CSRF routes, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api"
      }), " for stateless routes), and named route middleware:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "protected $middlewareGroups = [\n\n> **Remember:** Middleware order matters. `SubstituteBindings` must come after `StartSession`.\n\n    'web' => [\n        \\App\\Http\\Middleware\\EncryptCookies::class,\n        \\Illuminate\\Session\\Middleware\\StartSession::class,\n        \\App\\Http\\Middleware\\VerifyCsrfToken::class,\n        \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n    ],\n    'api' => [\n        \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class.':api',\n        \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Service Providers"
      }), ": The kernel boots the application, registering and booting all providers in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/app.php"
      }), ". Each provider has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register()"
      }), " (called first) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boot()"
      }), " (called after all providers register). This deferral ensures that when one provider's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boot()"
      }), " depends on another's bindings, those bindings exist."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5 → Router"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RouteServiceProvider"
      }), " loads route files. Laravel matches the incoming URI and HTTP method against registered routes → first match wins."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6 → Middleware Pipeline"
      }), ": The request passes through the middleware stack like an onion. Each middleware can inspect, modify, or reject the request before it reaches the controller, and can modify the response on the way back out."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7 → Controller"
      }), ": The controller method returns a Response, which travels back through the middleware in reverse order, gets sent to the browser, and the kernel runs terminable middleware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-service-container",
      children: "2.2 Service Container"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The service container is Laravel's dependency injection engine:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Auto-resolution (zero config)\n$calculator = app()->make(CalculatorService::class);\n\n// Interface binding\napp()->bind(PaymentGateway::class, StripeGateway::class);\n\n// Singleton → same instance per request\napp()->singleton(CartService::class, fn() => new CartService(session()->getId()));\n\n// Primitive binding\napp()->when(ReportController::class)->needs('$resultsPerPage')->give(50);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic injection"
      }), ": When a type-hinted dependency appears in a constructor or controller method, the container resolves it recursively:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class InvoiceController extends Controller\n{\n    public function __construct(\n        protected InvoiceService $invoices,\n    ) {}\n\n    public function index()\n    {\n        return $this->invoices->all();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No binding needed. The container reflects on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvoiceService"
      }), ", resolves its own dependencies, and returns a fully constructed object. Any class that does not depend on interface bindings or unresolved primitives can be auto-resolved."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-routing",
      children: "2.3 Routing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic routes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Route;\nuse App\\Http\\Controllers\\UserController;\n\nRoute::get('/users', [UserController::class, 'index']);\nRoute::post('/users', [UserController::class, 'store']);\nRoute::put('/users/{id}', [UserController::class, 'update']);\nRoute::patch('/users/{id}', [UserController::class, 'patch']);\nRoute::delete('/users/{id}', [UserController::class, 'destroy']);\nRoute::options('/users', fn() => response()->json(['methods' => 'GET, POST, PUT, DELETE']));\nRoute::match(['GET', 'POST'], '/users/batch', [UserController::class, 'batch']);\nRoute::any('/users/fallback', [UserController::class, 'fallback']);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Route parameters"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Required\nRoute::get('/users/{id}', fn(string $id) => \"User {$id}\");\n\n// Optional (with default)\nRoute::get('/users/{category?}', fn(?string $category = null) => $category ?? 'All');\n\n// Regex constraint\nRoute::get('/users/{id}', fn(string $id) => \"...\")->where('id', '[0-9]+');\nRoute::get('/posts/{slug}/{locale}', fn(...) => \"...\")\n    ->where(['slug' => '[a-z-]+', 'locale' => '[a-z]{2}']);\n\n// Global pattern (in AppServiceProvider)\npublic function boot(): void\n{\n    Route::pattern('id', '[0-9]+');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Named routes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::get('/users/profile', [ProfileController::class, 'show'])->name('profile.show');\n\n$url = route('profile.show');\n$url = route('profile.show', ['page' => 2]);\nreturn redirect()->route('profile.show');\n\nif (request()->route()->named('profile.*')) {\n    // Matches profile.show, profile.edit, etc.\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Route groups"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Prefix\nRoute::prefix('admin')->group(function () {\n    Route::get('/users', [UserController::class, 'index']);       // /admin/users\n    Route::get('/settings', [SettingsController::class, 'index']); // /admin/settings\n});\n\n// Middleware\nRoute::middleware(['auth', 'verified'])->group(function () {\n    Route::get('/dashboard', [DashboardController::class, 'index']);\n});\n\n// Name prefix\nRoute::name('admin.')->group(function () {\n    Route::get('/users', [UserController::class, 'index'])->name('users.index');\n    // Generated name: 'admin.users.index'\n});\n\n// Subdomain\nRoute::domain('{account}.example.com')->group(function () {\n    Route::get('/users', [UserController::class, 'index']);\n    // Matches acme.example.com/users\n});\n\n// Nested\nRoute::prefix('admin')->middleware('auth')->group(function () {\n    Route::prefix('users')->group(function () {\n        Route::get('/', [UserController::class, 'index']);   // /admin/users\n        Route::get('/{user}', [UserController::class, 'show']); // /admin/users/5\n    });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-middleware",
      children: "2.4 Middleware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Middleware filters HTTP requests entering and responses leaving your application."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Creating middleware"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan make:middleware LogRequests\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class LogRequests\n{\n    public function handle(Request $request, Closure $next): Response\n    {\n        Log::info('Incoming request', [\n            'url' => $request->fullUrl(),\n            'method' => $request->method(),\n        ]);\n        return $next($request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Registering"
      }), ": Add to global middleware, a group, or named middleware in the Kernel:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Named\nprotected $routeMiddleware = [\n    'log.requests' => \\App\\Http\\Middleware\\LogRequests::class,\n];\n\n// Or attach directly\nRoute::get('/admin', fn() => \"...\")->middleware('auth');\nRoute::get('/admin', fn() => \"...\")->middleware(['auth', 'verified']);\nRoute::middleware('throttle:10,1')->group(function () {\n    Route::get('/api/users', [UserController::class, 'index']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Middleware with parameters"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class EnsureRole\n{\n    public function handle(Request $request, Closure $next, string $role): Response\n    {\n        if (! $request->user()?->hasRole($role)) {\n            abort(403);\n        }\n        return $next($request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Register: 'role' => \\App\\Http\\Middleware\\EnsureRole::class\nRoute::get('/admin', fn() => \"...\")->middleware('role:admin');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Terminable middleware"
      }), ": Runs after the response is sent → ideal for logging, analytics, and webhooks that the user should not wait for:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class TerminateAfterResponse\n{\n    public function handle(Request $request, Closure $next): Response\n    {\n        return $next($request);\n    }\n\n    public function terminate(Request $request, Response $response): void\n    {\n        // Response already sent → safe to do slow work here\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-controllers",
      children: "2.5 Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controllers group related route handling into organized classes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Creating controllers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan make:controller UserController\nphp artisan make:controller UserController --resource        # 7 RESTful actions\nphp artisan make:controller UserController --api             # Excludes create/edit\nphp artisan make:controller ShowProfile --invokable          # Single action\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource controller"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class UserController extends Controller\n{\n    public function index()     { /* GET /users */ }\n    public function create()    { /* GET /users/create */ }\n    public function store(Request $request) { /* POST /users */ }\n    public function show(User $user) { /* GET /users/{id} */ }\n    public function edit(User $user) { /* GET /users/{id}/edit */ }\n    public function update(Request $request, User $user) { /* PUT/PATCH /users/{id} */ }\n    public function destroy(User $user) { /* DELETE /users/{id} */ }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::resource('users', UserController::class);\nRoute::resource('users', UserController::class)->only(['index', 'show']);\nRoute::resource('users', UserController::class)->except(['create', 'edit']);\nRoute::apiResource('users', UserController::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Single-action controller"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ShowDashboard extends Controller\n{\n    public function __invoke()\n    {\n        return view('dashboard', [\n            'stats' => ['users' => User::count(), 'orders' => Order::today()->count()],\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::get('/dashboard', ShowDashboard::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency injection in controllers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class UserController extends Controller\n{\n    public function __construct(\n        protected UserRepository $users,\n        protected MetricsService $metrics,\n    ) {}\n\n    public function index(Request $request)\n    {\n        $this->metrics->increment('users.visited');\n        return view('users.index', [\n            'users' => $this->users->paginate($request->integer('per_page', 15)),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-route-model-binding",
      children: "2.6 Route Model Binding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Route model binding automatically fetches Eloquent models from route parameters."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implicit binding"
      }), ": Type-hint the model and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " is resolved automatically:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::get('/users/{user}', [UserController::class, 'show']);\n\npublic function show(User $user)\n{\n    return view('users.show', compact('user'));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "/users/42"
      }), " executes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "User::findOrFail(42)"
      }), " automatically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom column"
      }), ": Override ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getRouteKeyName()"
      }), " on the model:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User extends Model\n{\n    public function getRouteKeyName(): string\n    {\n        return 'username';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/users/john"
      }), " binds to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "User::where('username', 'john')->firstOrFail()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Explicit binding"
      }), ": Register custom logic in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RouteServiceProvider"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::bind('user', function (string $value) {\n    return User::where('username', $value)\n        ->orWhere('email', $value)\n        ->firstOrFail();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Soft deleted models"
      }), ": Include trashed records using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withTrashed()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::get('/users/{user}', [UserController::class, 'show'])->withTrashed();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-request-and-response",
      children: "2.7 Request and Response"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Request object"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function store(Request $request)\n{\n    $all = $request->all();                              // All input\n    $name = $request->input('name', 'Guest');            // Single value\n    $data = $request->only(['name', 'email']);           // Specific keys\n    $data = $request->except(['_token']);                // Exclude keys\n    $notify = $request->boolean('notify');                // Checkbox/boolean\n    $request->has('email');                              // Key exists?\n    $request->filled('email');                           // Key exists and not empty?\n    $request->hasFile('avatar');                         // File upload?\n\n    $request->flash();                                   // Flash input to session\n    // or return redirect()->back()->withInput();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Response types"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// String (auto-wrapped)\nRoute::get('/hello', fn() => 'Hello World');\n\n// View\nRoute::get('/dashboard', fn() => view('dashboard', ['user' => $user]));\n\n// JSON\nRoute::get('/api/users', fn() => response()->json([\n    'data' => User::all(), 'meta' => ['total' => User::count()],\n]));\n\n// Redirect\nRoute::get('/old-page', fn() => redirect('/new-page'));\nRoute::get('/old-page', fn() => redirect()->route('home'));\nRoute::get('/old-page', fn() => redirect()->back()->with('status', 'Saved!'));\n\n// File download\nRoute::get('/download/report', fn() => response()->download(storage_path('app/report.pdf')));\n\n// Stream (for large data)\nRoute::get('/stream/users', function () {\n    return response()->stream(function () {\n        echo json_encode(['users' => User::all()]);\n    }, 200, ['Content-Type' => 'application/json']);\n});\n\n// Custom status and headers\nRoute::get('/custom', fn() => response('Not Found', 404)\n    ->header('X-Custom', 'value'));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Macroable requests/responses"
      }), ": Add methods at runtime in a service provider:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Request::macro('isAdminPath', function () {\n    return str_starts_with($this->path(), 'admin');\n});\n\nResponse::macro('apiError', function (string $message, int $status = 400) {\n    return response()->json(['error' => true, 'message' => $message], $status);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-csrf-protection",
      children: "2.8 CSRF Protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel automatically protects state-changing requests (POST, PUT, PATCH, DELETE) against cross-site request forgery. Every form must include the CSRF token:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<form method=\"POST\" action=\"/users\">\n    @csrf\n    <input type=\"text\" name=\"name\">\n    <button type=\"submit\">Create</button>\n</form>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For JavaScript SPA applications, include the token in a meta tag and configure Axios:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<meta name=\"csrf-token\" content=\"{{ csrf_token() }}\">\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "axios.defaults.headers.common['X-CSRF-TOKEN'] =\n    document.querySelector('meta[name=\"csrf-token\"]').content;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Excluding URIs"
      }), ": Third-party webhooks (Stripe, GitHub) cannot send CSRF tokens. Exclude them in the Kernel:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "protected $except = [\n    '/webhooks/stripe',\n    '/api/*',\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-full-crud-example",
      children: "2.9 Full CRUD Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PostController extends Controller\n{\n    public function __construct()\n    {\n        $this->middleware('auth')->except(['index', 'show']);\n    }\n\n    public function index()\n    {\n        return view('posts.index', [\n            'posts' => Post::with('author')->latest()->paginate(12),\n        ]);\n    }\n\n    public function create()\n    {\n        return view('posts.create');\n    }\n\n    public function store(StorePostRequest $request)\n    {\n        $post = $request->user()->posts()->create($request->validated());\n        return redirect()->route('posts.show', $post)\n            ->with('success', 'Post created.');\n    }\n\n    public function show(Post $post)\n    {\n        return view('posts.show', ['post' => $post->load('comments.author')]);\n    }\n\n    public function edit(Post $post)\n    {\n        $this->authorize('update', $post);\n        return view('posts.edit', compact('post'));\n    }\n\n    public function update(UpdatePostRequest $request, Post $post)\n    {\n        $this->authorize('update', $post);\n        $post->update($request->validated());\n        return redirect()->route('posts.show', $post)\n            ->with('success', 'Post updated.');\n    }\n\n    public function destroy(Post $post)\n    {\n        $this->authorize('delete', $post);\n        $post->delete();\n        return redirect()->route('posts.index')\n            ->with('success', 'Post deleted.');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::resource('posts', PostController::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Implicit vs Explicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit: {user} → User; Explicit: custom resolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use implicit for id lookups, explicit for composite keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web vs API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web: session+CSRF; API: stateless+rate-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web for browser, API for mobile/clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource vs Single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource: 7 methods; Single: __invoke only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource for CRUD, single for dashboards"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command / Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan make:controller UserController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add --resource for CRUD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan make:middleware CheckAge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register in Kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "View routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan route:list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter with --path=/api"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Named route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "route('users.show', $user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must match ->name()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inject request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "public function store(Request $request)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-injected by container"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Integration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blade-rendered apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web middleware group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTful services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API middleware group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin Panels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom role middleware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ziggy for frontend routes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these questions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " First file executed during request?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) routes/web.php"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) public/index.php"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) app/Http/Kernel.php"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) bootstrap/app.php\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " B"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Which group includes CSRF?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) api"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) web"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) global"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) custom\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " B"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " What does implicit binding do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Validates data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Resolves model from route param"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Applies CSRF"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) Creates migrations\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " B"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " Resource controller methods count?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 7"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) 8\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " C"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The HTTP request lifecycle follows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.php"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bootstrap/app.php"
        }), " → Kernel → Service Providers → Router → Middleware → Controller → Response"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The service container provides automatic dependency injection with zero configuration for most classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Routes support all HTTP verbs, required and optional parameters, regex constraints, and naming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route groups share prefixes, middleware, names, and domains across multiple routes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Middleware can be global, grouped, or assigned to individual routes with parameters"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resource controllers map to seven RESTful actions with a single ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Route::resource()"
        }), " call"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route model binding automatically resolves Eloquent models from route parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Request object provides methods for all input retrieval scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Responses support views, JSON, redirects, file downloads, streaming, and macros"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CSRF protection is automatic for web routes and can be excluded for APIs and webhooks"
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
          children: ["Trace an HTTP request to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/users/42"
          }), " from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "public/index.php"
          }), " through to the controller. Name every middleware that executes for a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "web"
          }), " route."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does the service container resolve ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InvoiceController"
          }), " when its constructor type-hints ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InvoiceService"
          }), "? What happens if ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InvoiceService"
          }), " itself has dependencies?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between implicit and explicit route model binding? When would you use explicit binding over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getRouteKeyName()"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between global middleware, middleware groups, and route-specific middleware. In what order do they execute?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why does CSRF protection not apply to GET requests? Why must every HTML form include ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@csrf"
          }), "?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Route Group Architecture"
          }), ": Design routes for a multi-tenant SaaS with public routes, authenticated user routes (dashboard, profile, billing), admin routes under ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/admin"
          }), ", and API routes under ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/api/v1"
          }), ". Implement nested groups with middleware, name prefixes, and one subdomain route for custom domains."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Middleware with Parameters"
          }), ": Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CheckPermission"
          }), " middleware that accepts a permission string and verifies the authenticated user has it via a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "can()"
          }), " method. Return 401 JSON for API routes or redirect for web routes. Register and demonstrate on three routes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced Request Handling"
          }), ": Write an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderController@store"
          }), " that handles file upload (proof of payment), JSON order items, conditional billing/shipping address, and returns an appropriate response using the Request methods from this chapter."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Manager REST API"
      }), ": Build a complete API for a Task Manager. Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EnsureTokenIsValid"
      }), " middleware checking an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-API-Key"
      }), " header against the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api_tokens"
      }), " table. Apply rate limiting (60 req/min authenticated, 10 req/min unauthenticated) using named limiters. Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TaskController"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProjectController"
      }), " as API resource controllers. Tasks are scoped under projects and bound by ULID (", (0,jsx_runtime.jsx)(_components.code, {
        children: "projects/{project:ulid}/tasks/{task:ulid}"
      }), "). Include soft-delete support with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withTrashed()"
      }), " for 30 days. Create form request classes for validation. Define ", (0,jsx_runtime.jsx)(_components.code, {
        children: "apiSuccess($data)"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "apiError($message)"
      }), " response macros in a service provider. Show all files."]
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