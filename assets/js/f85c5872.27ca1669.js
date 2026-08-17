"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59841],{

/***/ 28963
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_05_auth_security_md_f85_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-05-auth-security-md-f85.json
const site_docs_courses_laravel_05_auth_security_md_f85_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/05-auth-security","title":"Chapter 5: Authentication, Authorization & Security","description":"Previous Queues, Jobs, Notifications & Mail","source":"@site/docs/courses/laravel/05-auth-security.md","sourceDirName":"courses/laravel","slug":"/laravel/05-auth-security","permalink":"/ai-engineering-journey/laravel/05-auth-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-auth-security","slug":"/laravel/05-auth-security","title":"Chapter 5: Authentication, Authorization & Security","sidebar_label":"Chapter 5: Authentication, Authorization & Security","sidebar_position":5},"sidebar":"course-laravel","previous":{"title":"Chapter 4: Eloquent ORM, Database & Migrations","permalink":"/ai-engineering-journey/laravel/04-eloquent-database"},"next":{"title":"Chapter 6: Queues, Jobs, Notifications & Mail","permalink":"/ai-engineering-journey/laravel/06-queues-notifications"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/05-auth-security.md


const frontMatter = {
	id: '05-auth-security',
	slug: '/laravel/05-auth-security',
	title: 'Chapter 5: Authentication, Authorization & Security',
	sidebar_label: 'Chapter 5: Authentication, Authorization & Security',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Authentication, Authorization & Security';

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
  "value": "Authentication Starter Kits",
  "id": "authentication-starter-kits",
  "level": 3
}, {
  "value": "Laravel Breeze",
  "id": "laravel-breeze",
  "level": 4
}, {
  "value": "Laravel Jetstream",
  "id": "laravel-jetstream",
  "level": 4
}, {
  "value": "Laravel Bootcamp",
  "id": "laravel-bootcamp",
  "level": 4
}, {
  "value": "Legacy: Laravel UI",
  "id": "legacy-laravel-ui",
  "level": 4
}, {
  "value": "Session-Based Authentication",
  "id": "session-based-authentication",
  "level": 3
}, {
  "value": "Login Flow",
  "id": "login-flow",
  "level": 4
}, {
  "value": "Remember-Me Token",
  "id": "remember-me-token",
  "level": 4
}, {
  "value": "Authentication Guards",
  "id": "authentication-guards",
  "level": 4
}, {
  "value": "Authentication Providers",
  "id": "authentication-providers",
  "level": 4
}, {
  "value": "Custom Guard Usage",
  "id": "custom-guard-usage",
  "level": 4
}, {
  "value": "API Authentication with Sanctum",
  "id": "api-authentication-with-sanctum",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation",
  "level": 4
}, {
  "value": "Token-Based Authentication",
  "id": "token-based-authentication",
  "level": 4
}, {
  "value": "Managing Tokens",
  "id": "managing-tokens",
  "level": 4
}, {
  "value": "Sanctum SPA Authentication",
  "id": "sanctum-spa-authentication",
  "level": 4
}, {
  "value": "Protecting API Routes",
  "id": "protecting-api-routes",
  "level": 4
}, {
  "value": "Authorization",
  "id": "authorization",
  "level": 3
}, {
  "value": "Gates",
  "id": "gates",
  "level": 4
}, {
  "value": "Using Gates",
  "id": "using-gates",
  "level": 4
}, {
  "value": "Policies",
  "id": "policies",
  "level": 4
}, {
  "value": "Policy Auto-Discovery",
  "id": "policy-auto-discovery",
  "level": 4
}, {
  "value": "Authorizing Actions",
  "id": "authorizing-actions",
  "level": 4
}, {
  "value": "Blade Authorization",
  "id": "blade-authorization",
  "level": 3
}, {
  "value": "Form Requests &amp; Validation",
  "id": "form-requests--validation",
  "level": 3
}, {
  "value": "Creating Form Requests",
  "id": "creating-form-requests",
  "level": 4
}, {
  "value": "Using Form Requests",
  "id": "using-form-requests",
  "level": 4
}, {
  "value": "Custom Validation Rules",
  "id": "custom-validation-rules",
  "level": 4
}, {
  "value": "Common Rule Objects",
  "id": "common-rule-objects",
  "level": 4
}, {
  "value": "Validation Error Messages",
  "id": "validation-error-messages",
  "level": 4
}, {
  "value": "Security",
  "id": "security",
  "level": 3
}, {
  "value": "CSRF Protection",
  "id": "csrf-protection",
  "level": 4
}, {
  "value": "XSS Prevention",
  "id": "xss-prevention",
  "level": 4
}, {
  "value": "SQL Injection Prevention",
  "id": "sql-injection-prevention",
  "level": 4
}, {
  "value": "Rate Limiting",
  "id": "rate-limiting",
  "level": 4
}, {
  "value": "Password Management",
  "id": "password-management",
  "level": 3
}, {
  "value": "Hashing",
  "id": "hashing",
  "level": 4
}, {
  "value": "Password Validation Rules",
  "id": "password-validation-rules",
  "level": 4
}, {
  "value": "Password Confirmation",
  "id": "password-confirmation",
  "level": 4
}, {
  "value": "Password Reset Flow",
  "id": "password-reset-flow",
  "level": 4
}, {
  "value": "Email Verification",
  "id": "email-verification",
  "level": 3
}, {
  "value": "MustVerifyEmail Interface",
  "id": "mustverifyemail-interface",
  "level": 4
}, {
  "value": "Verification Routes",
  "id": "verification-routes",
  "level": 4
}, {
  "value": "Protecting Routes",
  "id": "protecting-routes",
  "level": 4
}, {
  "value": "Signed Routes",
  "id": "signed-routes",
  "level": 4
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Auth Middleware",
  "id": "quick-reference--auth-middleware",
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
        id: "chapter-5-authentication-authorization--security",
        children: "Chapter 5: Authentication, Authorization & Security"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./04-eloquent-database",
          children: "Eloquent ORM, Database & Migrations"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./06-queues-notifications",
          children: "Queues, Jobs, Notifications & Mail"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement session-based authentication and configure guards and providers for different user types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue and validate API tokens using Laravel Sanctum for both SPA and mobile clients"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define authorization logic using Gates and Policies with proper auto-discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build custom form requests with validation rules, after-validation hooks, and custom rule objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Laravel's security protections against CSRF, XSS, SQL injection, and mass assignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement password management, email verification, and rate limiting in a production application"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Starter Kits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breeze, Jetstream, Bootcamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session Auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Login flow, guards, providers, remember-me"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sanctum tokens, SPA auth, abilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gates, Policies, auto-discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Form Requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation rules, after hooks, custom rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF, XSS, SQL injection, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password Mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hashing, validation rules, reset flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MustVerifyEmail, signed routes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Starter Kits] --> B[Session Auth]\n    B --> C[Sanctum API Auth]\n    C --> D[Authorization Gates/Policies]\n    D --> E[Form Requests & Validation]\n    E --> F[Security Protections]\n    F --> G[Password & Email Verification]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel provides comprehensive authentication and authorization tooling from starter kits to fine-grained policy control."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authentication-starter-kits",
      children: "Authentication Starter Kits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Breeze offers minimal auth scaffolding while Jetstream adds teams, two-factor auth, and API token management."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel provides several starter kits that scaffold a complete authentication system, saving hours of boilerplate."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-breeze",
      children: "Laravel Breeze"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Breeze is the minimal, modern starter kit. It uses Blade with Alpine.js and Tailwind CSS, with an Inertia.js option."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "composer require laravel/breeze --dev\n\n// Blade + Alpine + Tailwind\nphp artisan breeze:install blade\n\n// With Inertia (Vue or React)\nphp artisan breeze:install inertia --vue\nphp artisan breeze:install inertia --react\n\n// With Livewire (volt)\nphp artisan breeze:install livewire --dark\n\n// API-only (no frontend)\nphp artisan breeze:install api\n\nnpm install && npm run dev\nphp artisan migrate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Breeze installs controllers, views, routes, and middleware for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Login (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/login"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Registration (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/register"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Password confirmation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/user/confirm-password"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Password reset (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/forgot-password"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/reset-password"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Email verification (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/verify-email"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Profile management (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/user/profile"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-jetstream",
      children: "Laravel Jetstream"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jetstream is a more feature-rich starter kit with teams, session management, two-factor authentication, and API support."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "composer require laravel/jetstream\n\nphp artisan jetstream:install livewire\nphp artisan jetstream:install inertia\n\nnpm install && npm run dev\nphp artisan migrate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jetstream adds:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team management with role-based permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two-factor authentication via TOTP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser sessions management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API token management (Sanctum)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-bootcamp",
      children: "Laravel Bootcamp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Bootcamp is not a starter kit but an interactive tutorial that walks through building a full application from scratch. It demonstrates the same app using both Blade and Inertia stacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "legacy-laravel-ui",
      children: "Legacy: Laravel UI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "laravel/ui"
      }), " is deprecated in Laravel 11+ but still available for Bootstrap-based scaffolding. It is not recommended for new projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-based-authentication",
      children: "Session-Based Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Auth::attempt() with session regeneration prevents session fixation, and remember-me tokens provide persistent login across sessions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "login-flow",
      children: "Login Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Auth;\n\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Auth;\nuse Illuminate\\Validation\\ValidationException;\n\nclass LoginController extends Controller\n{\n    public function store(Request $request)\n    {\n        $credentials = $request->validate([\n            'email' => 'required|email',\n            'password' => 'required|string',\n        ]);\n\n        // Attempt authentication\n        if (! Auth::attempt($credentials, $request->boolean('remember'))) {\n            throw ValidationException::withMessages([\n\n> **Remember:** Always call `$request->session()->regenerate()` after successful login. This prevents session fixation attacks where an attacker forces a known session ID on a victim.\n                'email' => __('auth.failed'),\n            ]);\n        }\n\n        // Regenerate session to prevent session fixation\n        $request->session()->regenerate();\n\n        return redirect()->intended('/dashboard');\n    }\n\n    public function destroy(Request $request)\n    {\n        Auth::logout();\n\n        $request->session()->invalidate();\n        $request->session()->regenerateToken();\n\n        return redirect('/');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "remember-me-token",
      children: "Remember-Me Token"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Auth::attempt($credentials, true)"
      }), " is called, Laravel generates a remember token (stored as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remember_token"
      }), " on the user record) and sets an encrypted cookie. On subsequent visits, if the session is expired, Laravel uses this token to re-authenticate the user transparently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remember_token"
      }), " column must exist on the users table:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::table('users', function (Blueprint $table) {\n    $table->rememberToken();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "authentication-guards",
      children: "Authentication Guards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Guards define how users are authenticated for each request. Configured in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/auth.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'guards' => [\n    'web' => [\n        'driver' => 'session',\n        'provider' => 'users',\n    ],\n\n    'api' => [\n        'driver' => 'sanctum',  // Changed from 'token' in modern Laravel\n        'provider' => 'users',\n    ],\n\n    // Custom guard for admins\n    'admin' => [\n        'driver' => 'session',\n        'provider' => 'admins',\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "authentication-providers",
      children: "Authentication Providers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Providers define how users are retrieved from storage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'providers' => [\n    'users' => [\n        'driver' => 'eloquent',\n        'model' => App\\Models\\User::class,\n    ],\n\n    'admins' => [\n        'driver' => 'eloquent',\n        'model' => App\\Models\\Admin::class,\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-guard-usage",
      children: "Custom Guard Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Using a specific guard\nif (Auth::guard('admin')->attempt($credentials)) {\n    // Admin authenticated\n}\n\n// Helper\nauth()->guard('admin')->user();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-authentication-with-sanctum",
      children: "API Authentication with Sanctum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Sanctum provides both token-based API auth for mobile/third-party clients and cookie-based SPA auth for first-party frontends."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sanctum provides two authentication modes: token-based (for mobile/SPA) and cookie-based session (for first-party SPA)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan install:api\n// Installs Sanctum, publishes config, creates API routes file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "token-based-authentication",
      children: "Token-Based Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use App\\Models\\User;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Hash;\nuse Illuminate\\Validation\\ValidationException;\n\n// Issue token\nRoute::post('/sanctum/token', function (Request $request) {\n    $request->validate([\n        'email' => 'required|email',\n        'password' => 'required',\n        'device_name' => 'required|string',\n    ]);\n\n    $user = User::where('email', $request->email)->first();\n\n    if (! $user || ! Hash::check($request->password, $user->password)) {\n        throw ValidationException::withMessages([\n            'email' => ['The provided credentials are incorrect.'],\n        ]);\n    }\n\n    return $user->createToken($request->device_name)->plainTextToken;\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "managing-tokens",
      children: "Managing Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Create a token with abilities\n$token = $user->createToken('mobile-app', ['posts:read', 'posts:write']);\n\n// Retrieve all user tokens\n$tokens = $user->tokens();\n\n// Current access token\n$token = $request->user()->currentAccessToken();\n\n// Check token abilities\nif ($request->user()->tokenCan('posts:write')) {\n    // Can write posts\n}\n\n// Delete tokens (revoke)\n$user->tokens()->delete();          // Revoke all tokens\n$user->tokens()->where('id', $id)->delete(); // Revoke specific\n\n// Token expiry (Laravel 11+)\nuse Laravel\\Sanctum\\HasApiTokens;\n\nclass User extends Authenticatable\n{\n    use HasApiTokens;\n\n    // Token expires in 7 days\n    protected function expiresAt(): ?Carbon\n    {\n        return now()->addDays(7);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sanctum-spa-authentication",
      children: "Sanctum SPA Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For SPAs on the same domain, Sanctum uses cookie-based session authentication."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/sanctum.php\n'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost,localhost:3000')),\n\n// Frontend Axios setup\naxios.defaults.withCredentials = true;\naxios.defaults.baseURL = 'http://localhost:8000';\n\n// CSRF cookie first\nawait axios.get('/sanctum/csrf-cookie');\n\n// Then login\nawait axios.post('/login', {\n    email: 'user@example.com',\n    password: 'password',\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "protecting-api-routes",
      children: "Protecting API Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// api.php - Token-authenticated\nRoute::middleware('auth:sanctum')->group(function () {\n    Route::get('/user', fn (Request $r) => $r->user());\n    Route::apiResource('posts', PostController::class);\n});\n\n// Check abilities on route\nRoute::post('/posts', function () {\n    // ...\n})->middleware(['auth:sanctum', 'abilities:posts:write']);\n\n// Check ability in controller\npublic function store(Request $request)\n{\n    if (! $request->user()->tokenCan('posts:write')) {\n        return response()->json(['message' => 'Forbidden'], 403);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authorization",
      children: "Authorization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Gates define simple closures for authorization checks, while Policies organize per-model authorization logic with auto-discovery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "gates",
      children: "Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gates are closures that determine if a user can perform an action."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse App\\Models\\Post;\nuse App\\Models\\User;\nuse Illuminate\\Support\\Facades\\Gate;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass AuthServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        // Define a gate\n        Gate::define('update-post', function (User $user, Post $post) {\n            return $user->id === $post->user_id;\n        });\n\n        // Gate with no model (admin check)\n        Gate::define('admin', function (User $user) {\n            return $user->is_admin;\n        });\n\n        // Gate using a callback class\n        Gate::define('delete-post', [PostGate::class, 'delete']);\n\n        // Resource gates (index, view, create, update, delete)\n        Gate::resource('posts', PostGate::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "using-gates",
      children: "Using Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// In controllers\nif (Gate::allows('update-post', $post)) {\n    // Update the post\n}\n\nif (Gate::denies('update-post', $post)) {\n    abort(403);\n}\n\n// Gate::authorize throws AuthorizationException (returns 403)\nGate::authorize('update-post', $post);\n\n// For non-user contexts (guests)\nif (Gate::allows('admin')) { }\nif (Gate::check('admin', $post)) { }\n\n// Any / none / all\nGate::any(['update-post', 'delete-post'], $post);\nGate::none(['update-post', 'delete-post'], $post);\n\n// Before hooks (run before any gate check)\nGate::before(function (User $user, string $ability) {\n    if ($user->is_super_admin) return true;\n});\n\n// After hooks\nGate::after(function (User $user, string $ability, bool|null $result, mixed $arguments) {\n    Log::info(\"Gate check: {$ability} - \" . ($result ? 'allowed' : 'denied'));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "policies",
      children: "Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Policies are classes that organize authorization logic around a specific model or resource."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:policy PostPolicy\nphp artisan make:policy PostPolicy --model=Post // Auto-generates CRUD methods\n\n> **Pro Tip:** Use `php artisan make:policy PostPolicy --model=Post` to auto-generate CRUD policy methods (viewAny, view, create, update, delete, restore, forceDelete) — this saves significant boilerplate.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Policies;\n\nuse App\\Models\\Post;\nuse App\\Models\\User;\n\nclass PostPolicy\n{\n    // Optional: before hook takes priority over all methods\n    public function before(User $user, string $ability): bool|null\n    {\n        if ($user->is_super_admin) return true;\n        return null; // Null passes control to the specific method\n    }\n\n    public function viewAny(User $user): bool\n    {\n        return true; // Anyone can view the list\n    }\n\n    public function view(User $user, Post $post): bool\n    {\n        return $user->id === $post->user_id || $post->status === 'published';\n    }\n\n    public function create(User $user): bool\n    {\n        return $user->hasVerifiedEmail();\n    }\n\n    public function update(User $user, Post $post): bool\n    {\n        return $user->id === $post->user_id;\n    }\n\n    public function delete(User $user, Post $post): bool\n    {\n        return $user->id === $post->user_id && $post->comments()->count() === 0;\n    }\n\n    public function restore(User $user, Post $post): bool\n    {\n        return $user->id === $post->user_id;\n    }\n\n    public function forceDelete(User $user, Post $post): bool\n    {\n        return $user->is_admin;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "policy-auto-discovery",
      children: "Policy Auto-Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel auto-discovers policies when the model and policy follow naming conventions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "App\\Models\\Post"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "App\\Policies\\PostPolicy"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "App\\Models\\User"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "App\\Policies\\UserPolicy"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Auto-discovery is configured in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthServiceProvider"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "protected $policies = [\n    Post::class => PostPolicy::class, // Explicit registration (optional)\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Disable auto-discovery in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AppServiceProvider"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Gate::guessPolicyNamesUsing(function (string $modelClass) {\n    // Return custom policy class name\n    return str_replace('Models', 'Policies', $modelClass) . 'Policy';\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "authorizing-actions",
      children: "Authorizing Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Via the User model\n$user->can('update', $post);\n$user->cannot('delete', $post);\n\n// Via Gate facade\nGate::authorize('update', $post); // Throws AuthorizationException on failure\n\n// Via the controller helper\n$this->authorize('update', $post);\n\n// Authorize resource controller\n$this->authorizeResource(Post::class, 'post');\n\n// Via middleware\nRoute::put('/posts/{post}', function (Post $post) {\n    // ...\n})->middleware('can:update,post');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blade-authorization",
      children: "Blade Authorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- @can / @cannot --}}\n@can('update', $post)\n    <a href=\"{{ route('posts.edit', $post) }}\">Edit</a>\n@endcan\n\n@cannot('update', $post)\n    <span>Read-only</span>\n@endcannot\n\n{{-- @canany (any of the abilities) --}}\n@canany(['update', 'delete'], $post)\n    <div class=\"actions\">...</div>\n@endcanany\n\n{{-- @else --}}\n@can('update', $post)\n    <a href=\"#\">Edit</a>\n@elsecan('delete', $post)\n    <a href=\"#\">Delete</a>\n@else\n    <span>No actions available</span>\n@endcan\n\n{{-- With Spatie/laravel-permission (third-party) --}}\n@role('admin')\n    <span>Admin panel</span>\n@endrole\n\n@unlessrole('subscriber')\n    <span>Upgrade your plan</span>\n@endunlessrole\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "form-requests--validation",
      children: "Form Requests & Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Form requests encapsulate validation and authorization into single classes with after-validation hooks and custom rule objects."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-form-requests",
      children: "Creating Form Requests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:request StorePostRequest\nphp artisan make:request UpdatePostRequest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Requests;\n\nuse App\\Models\\Post;\nuse Illuminate\\Foundation\\Http\\FormRequest;\nuse Illuminate\\Validation\\Rule;\n\nclass StorePostRequest extends FormRequest\n{\n    // Authorization check within the form request\n    public function authorize(): bool\n    {\n        // Gate check\n        return $this->user()->can('create', Post::class);\n\n        // Or simple boolean\n        // return true;\n    }\n\n    // Validation rules\n    public function rules(): array\n    {\n        return [\n            'title' => [\n                'required',\n                'string',\n                'max:255',\n                Rule::unique('posts')->where(fn ($q) => $q->where('user_id', $this->user()->id)),\n            ],\n            'content' => 'required|string|min:100',\n            'status' => ['required', Rule::in(['draft', 'published', 'archived'])],\n            'category_id' => ['required', Rule::exists('categories', 'id')],\n            'tags' => 'nullable|array',\n            'tags.*' => 'exists:tags,id',\n            'publish_at' => 'nullable|date|after:today',\n        ];\n    }\n\n    // Custom error messages\n    public function messages(): array\n    {\n        return [\n            'title.unique' => 'You already have a post with this title.',\n            'content.min' => 'Your post must be at least 100 characters.',\n        ];\n    }\n\n    // Custom attribute names for error messages\n    public function attributes(): array\n    {\n        return [\n            'category_id' => 'category',\n            'publish_at' => 'publish date',\n        ];\n    }\n\n    // Prepare input before validation\n    protected function prepareForValidation(): void\n    {\n        $this->merge([\n            'slug' => str($this->title)->slug(),\n        ]);\n    }\n\n    // After validation hook (Laravel 11+)\n    public function after(): array\n    {\n        return [\n            function ($validator) {\n                // Business logic validation\n                if ($this->user()->posts()->count() >= 10) {\n                    $validator->errors()->add(\n                        'title',\n                        'You have reached the maximum number of posts.'\n                    );\n                }\n            },\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "using-form-requests",
      children: "Using Form Requests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Controller\nuse App\\Http\\Requests\\StorePostRequest;\n\npublic function store(StorePostRequest $request)\n{\n    // Already validated and authorized\n    $post = Post::create($request->validated());\n\n    // Access validated-only data\n    $validated = $request->safe()->only(['title', 'content', 'status']);\n    $allValidated = $request->safe()->all();\n\n    return redirect()->route('posts.show', $post);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-validation-rules",
      children: "Custom Validation Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:rule Uppercase\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Rules;\n\nuse Closure;\nuse Illuminate\\Contracts\\Validation\\ValidationRule;\n\nclass Uppercase implements ValidationRule\n{\n    // Laravel 10+ interface\n    public function validate(string $attribute, mixed $value, Closure $fail): void\n    {\n        if (strtoupper($value) !== $value) {\n            $fail('The :attribute must be uppercase.');\n        }\n    }\n}\n\n// Usage\n'code' => ['required', new Uppercase, 'string', 'max:10'];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "common-rule-objects",
      children: "Common Rule Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Validation\\Rule;\n\n// Unique (with ignored ID for updates)\n$rules = [\n    'email' => [\n        'required',\n        'email',\n        Rule::unique('users', 'email')->ignore($user->id)->where(fn ($q) => $q->whereNull('deleted_at')),\n    ],\n\n    // Exists\n    'category_id' => [\n        'required',\n        Rule::exists('categories', 'id')->where('active', true),\n    ],\n\n    // In / NotIn\n    'status' => Rule::in(['draft', 'published', 'archived']),\n    'excluded' => Rule::notIn([1, 2, 3]),\n\n    // RequiredIf / RequiredUnless / RequiredWith / RequiredWithout\n    'discount' => Rule::requiredIf(fn () => $this->input('coupon') !== null),\n];\n\n// Conditional validation (after construction)\n$validator = Validator::make($request->all(), [\n    'email' => 'required|email',\n]);\n\n$validator->sometimes('reason', 'required|max:500', function ($input) {\n    return $input->status === 'rejected';\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "validation-error-messages",
      children: "Validation Error Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Customizing error messages per rule\n$request->validate([\n    'email' => 'required|email',\n], [\n    'email.required' => 'We need your email address.',\n    'email.email' => 'That does not look like a valid email.',\n]);\n\n// Or with form request\npublic function messages(): array\n{\n    return [\n        'email.required' => 'We need your email address.',\n        'email.email' => 'That does not look like a valid email.',\n        'tags.*.exists' => 'One or more selected tags do not exist.',\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security",
      children: "Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel provides automatic CSRF protection, Blade XSS escaping, parameter-bound SQL queries, and fillable/guarded mass-assignment protection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/05-auth-security.png",
        alt: "Auth Guards, Gates & Security"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "csrf-protection",
      children: "CSRF Protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cross-Site Request Forgery (CSRF) attacks trick authenticated users into executing unwanted actions. Laravel automatically protects every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PUT"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PATCH"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DELETE"
      }), " request with a CSRF token."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- In every form --}}\n<form method=\"POST\" action=\"/posts\">\n    @csrf\n    <input name=\"title\">\n</form>\n\n{{-- For SPA Axios requests --}}\n<meta name=\"csrf-token\" content=\"{{ csrf_token() }}\">\n\n<script>\n    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name=\"csrf-token\"]').content;\n</script>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VerifyCsrfToken"
      }), " middleware (now ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PreventRequestForgery"
      }), " in recent Laravel versions) automatically checks the token:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Middleware;\n\nuse Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance;\n\n// Excluding URIs from CSRF protection\nclass PreventRequestForgery extends Middleware\n{\n    protected $except = [\n        'stripe/*',      // Webhooks (Stripe sends POST without token)\n        'api/webhook',\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "xss-prevention",
      children: "XSS Prevention"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Blade's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{{ }}"
      }), " syntax automatically escapes output using PHP's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "htmlspecialchars"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Safe: All HTML/JS is escaped --}}\n{{ $user->bio }}\n\n{{-- DANGEROUS: Raw output -- no escaping --}}\n{!! $user->bio !!}\n\n{{-- Only use {!! !!} with trusted content (e.g., Markdown-parsed HTML) --}}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Additional XSS prevention patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Filter input\n$clean = strip_tags($request->input('content'), '<p><br><strong><em><a>');\n\n// Or use HTML purifier (spatie/htmlpurifier)\n$clean = htmlpurifier($request->input('content'));\n\n// Content-Security-Policy header\npublic function boot(): void\n{\n    HeaderPolicy::define('Content-Security-Policy', \"default-src 'self'; script-src 'self'\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-injection-prevention",
      children: "SQL Injection Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eloquent's parameter binding prevents SQL injection. Always use the query builder or Eloquent instead of raw queries:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// SAFE: Eloquent\n$users = User::where('email', $request->email)->get();\n\n// SAFE: Query builder (parameter binding)\n$users = DB::table('users')->where('email', $request->email)->get();\n\n// DANGEROUS: Raw string interpolation\nDB::select(\"SELECT * FROM users WHERE email = '{$request->email}'\")\n\n> **Warning:** Never interpolate user input directly into SQL strings. Always use Eloquent, the query builder, or parameterized raw queries. String interpolation is the most common cause of SQL injection vulnerabilities.;\n\n// CONDITIONALLY SAFE: Raw with parameter binding\nDB::select('SELECT * FROM users WHERE email = ?', [$request->email]);\n\n// CONDITIONALLY SAFE: whereRaw with binding\nUser::whereRaw('email = ?', [$request->email])->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rate-limiting",
      children: "Rate Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Cache\\RateLimiting\\Limit;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\RateLimiter;\n\n// Define in AppServiceProvider\nprotected function configureRateLimiting(): void\n{\n    // API rate limit: 60 requests per minute per user\n    RateLimiter::for('api', function (Request $request) {\n        return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());\n    });\n\n    // Login rate limit: 5 attempts per minute per IP\n    RateLimiter::for('login', function (Request $request) {\n        return Limit::perMinute(5)\n            ->by($request->input('email') . '|' . $request->ip())\n            ->response(function () {\n                return response()->json(['message' => 'Too many login attempts.'], 429);\n            });\n    });\n\n    // Global rate limit\n    RateLimiter::for('global', function (Request $request) {\n        return Limit::none(); // No limit\n    });\n}\n\n// Applying to routes\nRoute::middleware('throttle:api')->group(function () {\n    Route::get('/user', ...);\n});\n\nRoute::middleware('throttle:login')->post('/login', ...);\n\n// Dynamic rate limits\nRateLimiter::for('uploads', function (Request $request) {\n    return $request->user()->isPremium()\n        ? Limit::perHour(100)\n        : Limit::perHour(10);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "password-management",
      children: "Password Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hashing",
      children: "Hashing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Hash;\n\n// Hashing a password\n$hashed = Hash::make('plain-text-password');\n\n// Using bcrypt helper\n$hashed = bcrypt('plain-text-password');\n\n// Verifying against a hash\nif (Hash::check('plain-text-password', $hashed)) {\n    // Password matches\n}\n\n// Checking if rehash is needed\nif (Hash::needsRehash($hashed)) {\n    $hashed = Hash::make('plain-text-password');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "password-validation-rules",
      children: "Password Validation Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Validation\\Rules\\Password;\n\n$request->validate([\n    'password' => [\n        'required',\n        'confirmed', // Must have password_confirmation field\n        Password::min(8)\n            ->letters()\n            ->mixedCase()\n            ->numbers()\n            ->symbols()\n            ->uncompromised(), // Check against known data breaches (haveibeenpwned)\n    ],\n\n    // Default password rule (configurable)\n    'password' => Password::defaults(),\n]);\n\n// Configure defaults in a service provider\npublic function boot(): void\n{\n    Password::defaults(function () {\n        $rule = Password::min(8);\n\n        return $this->app->isProduction()\n            ? $rule->mixedCase()->uncompromised()\n            : $rule;\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "password-confirmation",
      children: "Password Confirmation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "password.confirm"
      }), " middleware prompts users to re-enter their password before accessing sensitive areas:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::get('/settings/billing', function () {\n    // ...\n})->middleware(['auth', 'password.confirm']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "password-reset-flow",
      children: "Password Reset Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel provides a complete password reset flow out of the box with Breeze or Jetstream:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Password;\n\n// Send reset link\n$status = Password::sendResetLink(\n    $request->only('email')\n);\n\n// Handle response\nreturn $status === Password::RESET_LINK_SENT\n    ? back()->with(['status' => __($status)])\n    : back()->withErrors(['email' => __($status)]);\n\n// Reset password (via controller)\n$status = Password::reset(\n    $request->only('email', 'password', 'password_confirmation', 'token'),\n    function (User $user, string $password) {\n        $user->forceFill([\n            'password' => Hash::make($password),\n        ])->setRememberToken(Str::random(60));\n\n        $user->save();\n\n        event(new PasswordReset($user));\n    }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "email-verification",
      children: "Email Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mustverifyemail-interface",
      children: "MustVerifyEmail Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Contracts\\Auth\\MustVerifyEmail;\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\nuse Illuminate\\Notifications\\Notifiable;\n\nclass User extends Authenticatable implements MustVerifyEmail\n{\n    use Notifiable;\n\n    // The trait provides:\n    // - hasVerifiedEmail()\n    // - markEmailAsVerified()\n    // - sendEmailVerificationNotification()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verification-routes",
      children: "Verification Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Breeze/Jetstream registers these automatically:\n\n// GET /email/verify - Show verification notice\n// GET /email/verify/{id}/{hash} - Verify email (signed route)\n// POST /email/verification-notification - Resend verification link\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "protecting-routes",
      children: "Protecting Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Via middleware\nRoute::get('/dashboard', function () {\n    // Only accessible to verified users\n})->middleware(['auth', 'verified']);\n\n// With redirect customization\nRoute::get('/dashboard', function () {\n    // ...\n})->middleware(['auth', 'verified:admin.verification.notice']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "signed-routes",
      children: "Signed Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Email verification URLs use signed routes to prevent tampering:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\URL;\n\n// Generate a signed URL\n$url = URL::signedRoute('verification.verify', [\n    'id' => $user->id,\n    'hash' => sha1($user->getEmailForVerification()),\n]);\n\n// Temporary signed URL (expires in 30 minutes)\n$url = URL::temporarySignedRoute(\n    'verification.verify',\n    now()->addMinutes(30),\n    ['id' => $user->id, 'hash' => sha1($user->getEmailForVerification())]\n);\n\n// Verify signed request\nRoute::get('/email/verify/{id}/{hash}', function (Request $request) {\n    if (! $request->hasValidSignature()) {\n        abort(401);\n    }\n\n    // ...\n})->name('verification.verify');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Policies"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General abilities (view, admin)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-model CRUD operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closure in AuthServiceProvider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class with method per ability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual registration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic by naming convention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouped by ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouped by model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex, multi-ability logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin checks, feature flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model resource authorization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--auth-middleware",
      children: "Quick Reference — Auth Middleware"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require authenticated user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "guest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only unauthenticated users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "verified"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require email verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "password.confirm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-prompt password confirmation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "can:update,post"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorize via policy or gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "throttle:api"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auth:sanctum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sanctum API token auth"
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
            children: "SaaS Admin"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth Guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "web (session)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "web + sanctum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "web + sanctum + admin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostPolicy (owner-only edit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OrderPolicy (buyer/viewer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TeamPolicy (role-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate comments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approve refunds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage billing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Login 5/min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout 3/min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API 100/min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for payouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for admins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which trait must a User model use for Sanctum API token authentication?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) HasApiTokens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) MustVerifyEmail"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Notifiable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) SoftDeletes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What is the purpose of $request->session()->regenerate() after login?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Log out old sessions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Prevent session fixation attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Speed up the login process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Encrypt session data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. How does Policy auto-discovery work?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) By scanning the app directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Convention: App\\Models\\Post \\u2192 App\\Policies\\PostPolicy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) By listing policies in a config file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) By implementing an interface"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which Blade syntax automatically escapes output to prevent XSS?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{!! !!}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["b) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{{ }}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["c) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@raw"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["d) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@escape"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-a, 2-b, 3-b, 4-b"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel's authentication starter kits (Breeze, Jetstream) scaffold complete auth systems; Breeze is minimal while Jetstream adds teams and two-factor auth"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Session-based authentication uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Auth::attempt()"
        }), ", session regeneration on login, and remember-me tokens for persistent sessions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sanctum provides both token-based API authentication (mobile/third-party) and cookie-based SPA authentication with CSRF protection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gates define simple authorization closures; Policies organize authorization logic per model with auto-discovery"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Form requests encapsulate validation and authorization into single classes with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rules()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "authorize()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "after()"
        }), " hooks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Laravel protects against CSRF (automatic tokens in forms), XSS (Blade auto-escaping), SQL injection (parameter binding), and mass assignment (", (0,jsx_runtime.jsx)(_components.code, {
          children: "fillable"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "guarded"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rate limiting via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RateLimiter::for()"
        }), " and the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throttle"
        }), " middleware prevents brute force and abuse"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Password hashing uses bcrypt; password validation rules support mixed case, symbols, and breach checking via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uncompromised()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Email verification through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MustVerifyEmail"
        }), " and signed routes ensures user identities are confirmed before accessing sensitive features"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between Laravel Breeze and Laravel Jetstream? When would you choose one over the other?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain how Sanctum's SPA authentication differs from its token-based API authentication. What role does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sanctum/csrf-cookie"
          }), " endpoint play?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does Laravel's session regeneration in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Auth::attempt()"
          }), " protect against session fixation attacks?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare Gates and Policies. When is it appropriate to use a Gate instead of a Policy, and how does auto-discovery work for policies?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the five primary security protections Laravel provides out of the box? Give a concrete example of each."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Form Request with Conditional Validation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "StoreInvoiceRequest"
          }), " that authorizes only users with the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "billing"
          }), " role, validates the invoice total (required, numeric, min:0), line items (required array, min 1 item), each line item requires a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "product_id"
          }), " (exists in products) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "quantity"
          }), " (integer, min:1), and applies an after-validation hook that checks if the user's account balance covers the total, adding a custom error if insufficient."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Policy for a Multi-Tenant Application"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProjectPolicy"
          }), " for a multi-tenant application where:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A user can view any project within their team"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A user can update a project only if they own it"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A user can delete a project only if they own it AND the project has no tasks"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Admins can bypass all checks via a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "before"
            }), " hook"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Register the policy and demonstrate usage in a controller"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sanctum Token with Abilities"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement an API token system with Sanctum for a reading app. Define three token abilities: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "books:read"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "books:write"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "books:delete"
          }), ". Create a login endpoint that issues a token with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "books:read"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "books:write"
          }), ". Create a middleware-protected route for deleting books that requires ", (0,jsx_runtime.jsx)(_components.code, {
            children: "books:delete"
          }), ". Show how to revoke all tokens for a user when they change their password."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build a Complete Auth + Authorization System for a Blog"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a full blog authentication and authorization system that includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A custom form request ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StorePostRequest"
        }), " with: title uniqueness scoped to the user, a slug auto-generated via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prepareForValidation"
        }), ", a minimum content length of 500 characters for published posts (conditional rule), and an after hook that prevents publishing more than 5 posts per day"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PostPolicy"
        }), " with: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update"
        }), " requiring ownership, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "delete"
        }), " requiring ownership and no comments, a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "publish"
        }), " ability that checks email verification + admin approval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rate limiting configuration: login (5 attempts/minute), API (100 requests/minute for authenticated, 20 for guests), and a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "publishing"
        }), " limiter (3 posts/hr per user)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sanctum integration for the blogging API: issue tokens with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "posts:read"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "posts:write"
        }), " abilities, a separate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "posts:publish"
        }), " ability for the publish action, and SPA-based auth for the frontend dashboard"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Email verification enforced for all write operations, password confirmation for the publish action"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Blade directives throughout the frontend checking ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@can('update', $post)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@can('publish', $post)"
        })]
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