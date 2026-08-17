"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[79205],{

/***/ 39542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_01_introduction_md_3ed_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-01-introduction-md-3ed.json
const site_docs_courses_laravel_01_introduction_md_3ed_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/01-introduction","title":"Chapter 1: Introduction to Laravel 13","description":"Next: Architecture, Routing, Middleware & Controllers","source":"@site/docs/courses/laravel/01-introduction.md","sourceDirName":"courses/laravel","slug":"/laravel/01-introduction","permalink":"/ai-engineering-journey/laravel/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/laravel/01-introduction","title":"Chapter 1: Introduction to Laravel 13","sidebar_label":"Chapter 1: Introduction to Laravel 13","sidebar_position":1},"sidebar":"course-laravel","next":{"title":"Chapter 2: Architecture, Routing, Middleware & Controllers","permalink":"/ai-engineering-journey/laravel/02-architecture-routing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/laravel/01-introduction',
	title: 'Chapter 1: Introduction to Laravel 13',
	sidebar_label: 'Chapter 1: Introduction to Laravel 13',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Laravel 13';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-1",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-1",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1.1 What is Laravel?",
  "id": "11-what-is-laravel",
  "level": 3
}, {
  "value": "1.2 Laravel 13 Specifics",
  "id": "12-laravel-13-specifics",
  "level": 3
}, {
  "value": "1.3 Creating Laravel Applications",
  "id": "13-creating-laravel-applications",
  "level": 3
}, {
  "value": "Laravel Installer",
  "id": "laravel-installer",
  "level": 4
}, {
  "value": "Laravel Herd",
  "id": "laravel-herd",
  "level": 4
}, {
  "value": "Laravel Sail",
  "id": "laravel-sail",
  "level": 4
}, {
  "value": "Composer Create-Project",
  "id": "composer-create-project",
  "level": 4
}, {
  "value": "1.4 Directory Structure",
  "id": "14-directory-structure",
  "level": 3
}, {
  "value": "Root Level",
  "id": "root-level",
  "level": 4
}, {
  "value": "Inside <code>app/</code>",
  "id": "inside-app",
  "level": 4
}, {
  "value": "1.5 Artisan CLI",
  "id": "15-artisan-cli",
  "level": 3
}, {
  "value": "1.6 Environment Configuration",
  "id": "16-environment-configuration",
  "level": 3
}, {
  "value": "The <code>.env</code> File",
  "id": "the-env-file",
  "level": 4
}, {
  "value": "The <code>config/</code> Directory",
  "id": "the-config-directory",
  "level": 4
}, {
  "value": "Retrieving Configuration at Runtime",
  "id": "retrieving-configuration-at-runtime",
  "level": 4
}, {
  "value": "Environment Detection",
  "id": "environment-detection",
  "level": 4
}, {
  "value": "1.7 Laravel and AI",
  "id": "17-laravel-and-ai",
  "level": 3
}, {
  "value": "1.8 Hello World → Complete Walkthrough",
  "id": "18-hello-world--complete-walkthrough",
  "level": 3
}, {
  "value": "Version 1: Route Closure",
  "id": "version-1-route-closure",
  "level": 4
}, {
  "value": "Version 2: Route to Controller",
  "id": "version-2-route-to-controller",
  "level": 4
}, {
  "value": "Version 3: Route to Controller to View",
  "id": "version-3-route-to-controller-to-view",
  "level": 4
}, {
  "value": "1.9 Package Ecosystem Overview",
  "id": "19-package-ecosystem-overview",
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
  "value": "Concept Comparison",
  "id": "concept-comparison-1",
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
  "value": "1.10 Development Workflow",
  "id": "110-development-workflow",
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
    em: "em",
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
        id: "chapter-1-introduction-to-laravel-13",
        children: "Chapter 1: Introduction to Laravel 13"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/laravel/02-architecture-routing",
        children: "Architecture, Routing, Middleware & Controllers"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/laravel/02-architecture-routing",
        children: "Architecture, Routing, Middleware & Controllers"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the history and philosophy behind the Laravel framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify Laravel 13's specific requirements and new capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create new Laravel applications using the installer, Herd, Sail, and Composer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigate and explain Laravel's directory structure with confidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Artisan CLI for common development tasks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure environment settings using ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " and the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config/"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a complete \"Hello World\" application using routes, controllers, and Blade views"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Framework Philosophy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel offers elegant syntax, expressive code, and convention over configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Laravel when you need rapid development with clean, maintainable code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel 13 Features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP 8.3 minimum, annual release cadence, AI-native workflows, minimal breaking changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrade planning should start 3 months before each August release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four methods: Installer, Herd, Sail, and Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Herd for local dev, Sail for team consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVC-based layout with app/, config/, database/, resources/, routes/ as core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow Laravel conventions — AI tools find files predictably"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI for scaffolding, migrations, and queue commands"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:"
            }), " for all scaffolding"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".env + config/ for environment-specific settings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store secrets in .env, defaults in config/"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Chapter Start] --> B[What is Laravel?]\n    B --> C[Laravel 13 Specifics]\n    C --> D[Creating Laravel Apps]\n    D --> E[Directory Structure]\n    E --> F[Artisan CLI]\n    F --> G[Configuration & Environment]\n    G --> H[Hello World Application]\n    H --> I[Summary & Exercises]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
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
            children: "Framework Philosophy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel offers elegant syntax, expressive code, and convention over configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Laravel when you need rapid development with clean, maintainable code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel 13 Features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP 8.3 minimum, annual release cadence, AI-native workflows, minimal breaking changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrade planning should start 3 months before each August release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Application Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four methods: Installer, Herd, Sail (Docker), and Composer create-project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Laravel Herd for local dev, Sail for team consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVC-based layout with app/, config/, database/, resources/, routes/ as core directories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow Laravel conventions — AI tools and team members will find files predictably"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI tool for scaffolding, migrations, queue work, and custom commands"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:"
            }), " commands to scaffold controllers, models, migrations, and more"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".env file + config/ directory for environment-specific settings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store secrets in .env, configuration defaults in config/ files"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-1",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Chapter Start] --> B[What is Laravel?]\n    B --> C[Laravel 13 Specifics]\n    C --> D[Creating Laravel Applications]\n    D --> E[Directory Structure]\n    E --> F[Artisan CLI]\n    F --> G[Configuration & Environment]\n    G --> H[Hello World Application]\n    H --> I[Summary & Exercises]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel combines elegant PHP syntax with powerful defaults to make web development productive and enjoyable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel combines elegant syntax with powerful defaults to make web development productive and enjoyable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/01-introduction.png",
        alt: "Introduction to Laravel"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-what-is-laravel",
      children: "1.1 What is Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel's progressive nature lets you start small and scale up by adopting only the features you need"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel is an open-source PHP web framework created by Taylor Otwell in June 2011. Otwell, a web developer from Arkansas, had been building applications with CodeIgniter and saw an opportunity to create something better → a framework that combined the best ideas from Ruby on Rails, ASP.NET MVC, and existing PHP frameworks into a cohesive, elegant package. The first beta of Laravel 1.0 was released on GitHub on June 9, 2011, and immediately resonated with developers who were frustrated with PHP's fragmented ecosystem."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At the time, PHP frameworks fell into two camps: lightweight but underpowered (CodeIgniter, CakePHP) or powerful but overly complex (Symfony). Laravel struck a balance. It offered modern features like routing, ORM, authentication, and templating, but wrapped them in what Otwell called \"developer ergonomics\" → clean syntax, intuitive method names, and sensible defaults."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Laravel ships with sensible defaults. You do not need to configure a database, view renderer, or mailer before they work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core philosophy rests on three pillars:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elegant Syntax"
        }), ": Laravel code reads like well-written prose. Database queries are expressed fluently. Relationships read naturally. Method chains are predictable. The goal is to minimize the distance between what you think and what you type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expressive"
        }), ": Common web development tasks → database queries, email delivery, authentication, caching, file storage → are expressed in as few lines as possible without sacrificing clarity. A simple contact form submission might be five lines of controller code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convention over Configuration"
        }), ": Laravel ships with sensible defaults. You do not need to write a configuration file to render a view, connect to a database, or send email. When you need to override conventions, the escape hatch is always there → but you rarely need it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Laravel ships with sensible defaults. You do not need to configure a database, view renderer, or mailer before they work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel also brands itself as a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "progressive framework"
      }), ". You can adopt only the parts you need for your task. Want Eloquent for database queries but not Blade for templating? That is fine. Want the router but not the service container? Also fine. You can start with a single route file and gradually adopt more pieces as your application grows. This makes Laravel equally suitable for a five-route microservice and a multi-tenant SaaS platform."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-laravel-13-specifics",
      children: "1.2 Laravel 13 Specifics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " With PHP 8.3 minimum and AI-native workflows, Laravel 13 is designed for modern, agent-assisted development"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel follows an annual major release cadence, shipping each August. Laravel 13 continues this tradition with several defining characteristics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PHP 8.3 Minimum"
      }), ": Laravel 13 requires PHP 8.3 or higher. This gives the framework access to language features like typed class constants, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "json_validate()"
      }), " function, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mb_str_pad()"
      }), ", and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#[Override]"
      }), " attribute. The framework's core uses these features for better type safety, performance, and self-documentation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Verify your PHP version before upgrading. Laravel 13 drops support for PHP 8.2 and below."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Verify your PHP version before upgrading. Laravel 13 drops support for PHP 8.2 and below — run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "php -v"
        }), " first."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Annual Release Cadence"
      }), ": The predictable August release schedule allows teams to plan upgrades. Each major version receives 18 months of bug fixes and two years of security fixes. The upgrade path between consecutive versions is designed to be minimal → Laravel's core team treats breaking changes as a last resort."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimal Breaking Changes Philosophy"
      }), ": When a breaking change is unavoidable, Laravel provides comprehensive upgrade guides, automation via Laravel Shift (a paid service that rewrites your code for the new version), and deprecation warnings that span multiple versions. Most applications upgrade from N-1 to N in under an hour."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AI-Native Workflows"
      }), ": Laravel 13 introduces first-class support for AI-assisted development. The framework's conventions are designed to be predictable for AI coding agents. Method signatures follow consistent naming patterns. Service providers always have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boot()"
      }), ". Middleware always uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), ". This predictability means an AI agent can scaffold an entire feature with near-100% accuracy on file paths and wiring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-creating-laravel-applications",
      children: "1.3 Creating Laravel Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel Herd provides instant local PHP environments while Sail ensures Docker-consistent team setups"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are four primary ways to bootstrap a new Laravel application."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "laravel new app"
        }), " via the Laravel Installer for the fastest setup. Herd is ideal for local dev without Docker."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "laravel new app"
        }), " via the Laravel Installer for the fastest setup. Herd is ideal for local development without Docker overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-installer",
      children: "Laravel Installer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The recommended approach. Install the installer globally via Composer, then create applications with a single command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer global require laravel/installer\nlaravel new my-app\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This command scaffolds a fresh Laravel 13 skeleton, installs Composer dependencies, and prompts you to select optional starter kits (Laravel Breeze for simple auth scaffolding, Laravel Jetstream for team-based authentication with Livewire or Inertia) and your testing framework (Pest or PHPUnit). The installer is the fastest path to a running application."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-herd",
      children: "Laravel Herd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Herd is Laravel's native PHP development environment for macOS and Windows. It bundles PHP 8.3+, Nginx, and a DNS proxy into a single desktop application:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Herd is installed from https://herd.laravel.com\n# Once installed, creating an app is one command:\nherd create my-app\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Herd automatically serves projects from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/Herd/"
      }), " at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{folder}.test"
      }), " with HTTPS. It provides a GUI for managing PHP versions (you can set different PHP versions per project), controlling services like MySQL and Redis, and accessing logs. No configuration files, no Docker overhead → it just works."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-sail",
      children: "Laravel Sail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sail is a Docker-based development environment that wraps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose"
      }), " with a thin CLI:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create with Sail preset\nlaravel new my-app --with-sail\ncd my-app\n./vendor/bin/sail up\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sail comes pre-configured with PHP, MySQL, Redis, Meilisearch, and Mailpit. All commands run through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sail"
      }), " binary:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "./vendor/bin/sail artisan make:model Product -mc\n./vendor/bin/sail composer require laravel/cashier\n./vendor/bin/sail npm run dev\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can customize the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yml"
      }), " to add services like PostgreSQL, Selenium, or MinIO."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "composer-create-project",
      children: "Composer Create-Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The traditional method, useful when you want a specific version or lack the installer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer create-project laravel/laravel my-app\ncomposer create-project laravel/laravel:^13.0 my-app\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This downloads the latest skeleton, installs dependencies, and copies ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env.example"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-directory-structure",
      children: "1.4 Directory Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel's predictable directory layout makes every file findable without documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A fresh Laravel application follows a consistent, well-documented layout."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "root-level",
      children: "Root Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directory / File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core application code → models, controllers, middleware, providers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bootstrap/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework bootstrapping files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration files, one per system concern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "database/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migrations, factories, seeders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Web server document root; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "index.php"
            }), " is the single entry point"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "resources/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blade views, raw CSS/JS assets, language files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "routes/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Route definitions: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "web.php"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "api.php"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "console.php"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "storage/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiled Blade templates, logs, sessions, cached views"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit and feature tests (Pest or PHPUnit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "vendor/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composer dependencies (not committed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "inside-app",
      children: ["Inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Console/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan commands and scheduled task definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Exceptions/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom exception handler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Http/Controllers/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Http/Middleware/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP middleware for request filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Http/Requests/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Form request validation classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Models/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eloquent model classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Providers/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service providers → the bootstrapping logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Models"
      }), " directory is notable. Models live under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Models/"
      }), " by convention rather than directly in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/"
      }), ". This keeps the namespace clean and predictable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-artisan-cli",
      children: "1.5 Artisan CLI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Artisan is your Swiss Army knife — from scaffolding to migrations to custom commands, it handles everything"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Artisan is Laravel's command-line interface. It is your daily companion for development."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all available commands\nphp artisan list\n\n# Create a model with migration and controller\nphp artisan make:model Product -mc\n\n# Start the built-in PHP development server\nphp artisan serve\n# Output: Server running on [http://127.0.0.1:8000]\n\n# Interactive REPL for testing code\nphp artisan tinker\n# In tinker:\n# >>> User::count();\n# => 42\n# >>> User::first()->name;\n# => \"Alice\"\n\n# Create a database migration\nphp artisan make:migration create_products_table\n\n# View all registered routes with middleware\nphp artisan route:list\n\n# Clear application caches\nphp artisan optimize:clear\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scaffold Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "make:model Product           # Model file\nmake:controller Product      # Controller\nmake:middleware LogRequests   # Middleware\nmake:request StoreProduct    # Form request\nmake:seeder ProductSeeder    # Database seeder\nmake:factory ProductFactory  # Model factory\nmake:migration create_X      # Migration\nmake:command ProcessReports  # Artisan command\nmake:event OrderPlaced        # Event class\nmake:listener SendConfirmation # Listener\nmake:notification OrderShipped # Notification\nmake:job ProcessImage        # Queued job\nmake:mail OrderConfirmation  # Mailable\nmake:rule ValidCurrency      # Validation rule\nmake:provider ReportService  # Service provider\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each scaffolded file follows the correct namespace, imports framework base classes, and includes PHPDoc stubs. This saves minutes per feature and enforces consistency across the codebase."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-environment-configuration",
      children: "1.6 Environment Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel separates configuration from code to support different environments without modifying application files."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "the-env-file",
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " File"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Located at the project root. It is listed in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitignore"
      }), " and is never committed:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-env",
        children: "APP_NAME=Laravel\nAPP_ENV=local\nAPP_DEBUG=true\nAPP_URL=http://localhost\n\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=my_app\nDB_USERNAME=root\nDB_PASSWORD=\n\nSESSION_DRIVER=file\nLOG_CHANNEL=stack\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "the-config-directory",
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/"
      }), " Directory"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each file in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/"
      }), " returns an array and uses the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "env()"
      }), " helper to read from ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/app.php\nreturn [\n    'name' => env('APP_NAME', 'Laravel'),\n    'env' => env('APP_ENV', 'production'),\n    'debug' => (bool) env('APP_DEBUG', false),\n    'url' => env('APP_URL', 'http://localhost'),\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The second argument to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "env()"
      }), " is the default value used when the environment variable is not set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "retrieving-configuration-at-runtime",
      children: "Retrieving Configuration at Runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// The env() helper should only be used inside config files\n$name = env('APP_NAME'); // works but not recommended outside config/\n\n// The config() helper works anywhere\n$name = config('app.name');\n$dbHost = config('database.connections.mysql.host');\n$debug = config('app.debug');\n\n// Set a value at runtime for the current request only\nconfig(['app.debug' => true]);\n\n// Get all configuration\n$all = config()->all();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "environment-detection",
      children: "Environment Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$env = app()->environment(); // 'local', 'staging', 'production'\n\nif (app()->environment('local')) {\n    // Only in local\n}\n\nif (app()->environment('local', 'testing')) {\n    // In local or testing\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The golden rule: never hardcode sensitive values. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " in development and server-level environment variables in production (set via Forge, Vapor, or your deployment platform)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-laravel-and-ai",
      children: "1.7 Laravel and AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel 13 is explicitly designed to work well with AI coding assistants. This influences the framework in concrete ways."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Predicable Conventions"
      }), ": An AI agent can reliably predict that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:controller ProductController --resource"
      }), " creates seven methods with specific names and signatures. It knows Eloquent models are in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Models/"
      }), ", form requests in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Http/Requests/"
      }), ", and middleware in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Http/Middleware/"
      }), ". This deterministic structure dramatically reduces ambiguity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistent Method Signatures"
      }), ": Controllers always follow the same pattern. Middleware always uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle(Request, Closure)"
      }), ". Service providers always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boot()"
      }), ". AI agents trained on Laravel code can generate accurate code because the patterns are uniform across the framework."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Laravel for Agents"
      }), ": The ecosystem publishes guidelines for AI coding tools. These guidelines recommend using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "artisan make"
      }), " commands over manual file creation, defining routes explicitly rather than relying on magic, and writing tests first. They also document file path conventions, namespace rules, and naming patterns that AI agents should follow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-hello-world--complete-walkthrough",
      children: "1.8 Hello World → Complete Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We will build \"Hello World\" three ways, each demonstrating a deeper layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "version-1-route-closure",
      children: "Version 1: Route Closure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routes/web.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/', function () {\n    return 'Hello, World!';\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Start the server with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan serve"
      }), " and visit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8000"
      }), ". The response is a bare string. Laravel wraps it in an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Illuminate\\Http\\Response"
      }), " object internally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "version-2-route-to-controller",
      children: "Version 2: Route to Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create the controller:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan make:controller HelloController\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "app/Http/Controllers/HelloController.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\n\nclass HelloController extends Controller\n{\n    public function index(): string\n    {\n        return 'Hello from a controller!';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register the route:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use App\\Http\\Controllers\\HelloController;\n\nRoute::get('/', [HelloController::class, 'index']);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This separates routing logic from response logic. The route decides ", (0,jsx_runtime.jsx)(_components.em, {
        children: "when"
      }), " and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "with what parameters"
      }), "; the controller decides ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "version-3-route-to-controller-to-view",
      children: "Version 3: Route to Controller to View"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/hello.blade.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Hello World</title>\n    <style>\n        body {\n            font-family: system-ui, sans-serif;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background: #f5f5f5;\n            margin: 0;\n        }\n        .card {\n            background: white;\n            padding: 2rem 3rem;\n            border-radius: 12px;\n            box-shadow: 0 2px 12px rgba(0,0,0,0.1);\n            text-align: center;\n        }\n        h1 { color: #ff2d20; margin-bottom: 0.5rem; }\n        p { color: #666; }\n    </style>\n</head>\n<body>\n    <div class=\"card\">\n        <h1>{{ $greeting }}</h1>\n        <p>Welcome to Laravel {{ date('Y') }}.</p>\n    </div>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update the controller:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\n\nclass HelloController extends Controller\n{\n    public function index()\n    {\n        $greeting = 'Hello, World!';\n        return view('hello', compact('greeting'));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The route stays the same. Now visiting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), " renders a styled HTML page. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$greeting"
      }), " variable is passed from the controller to the Blade template using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "view()"
      }), " helper. The view file name (", (0,jsx_runtime.jsx)(_components.code, {
        children: "hello"
      }), ") resolves to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/hello.blade.php"
      }), " by convention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the classic Model-View-Controller pattern in action: the route delegates to the controller, the controller prepares data, and the view renders it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-package-ecosystem-overview",
      children: "1.9 Package Ecosystem Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel's first-party ecosystem is one of its greatest strengths. These packages solve common production concerns:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server provisioning and management on AWS, DigitalOcean, Linode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vapor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless deployment on AWS Lambda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Laravel platform (successor to Vapor)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nova"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource management, metrics, dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Horizon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis queue dashboard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Telescope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request/query/exception inspector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pulse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production health (slow queries, users, queues)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sanctum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API token auth for SPAs and mobile apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Socialite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth → GitHub, Google, Facebook, Twitter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cashier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Billing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscription management (Stripe, Paddle)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search (Meilisearch, Algolia)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker development environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opinionated PHP code style fixer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Envoyer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-downtime deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reverb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Echo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript WebSocket client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query caching and optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MCP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Context Protocol tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI SDK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI, Anthropic, and local model SDK"
          })]
        })]
      })]
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
            children: "Installer vs Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Installer is faster; Composer create-project is the universal fallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use installer day-to-day, Composer in CI/container builds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Herd vs Sail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Herd is a native macOS app; Sail is Docker-based cross-platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Herd for solo dev, Sail for team environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan vs Tinker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan runs CLI commands; Tinker is an interactive REPL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Artisan for scaffolding, Tinker for ad-hoc testing"
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
            children: "Create project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "laravel new app or composer create-project laravel/laravel app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Installer is faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Run dev server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan serve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses PHP built-in server on port 8000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "List Artisan commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over 200 built-in commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generate encryption key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan key:generate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required after fresh install"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "View .env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat .env or php artisan env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never commit .env to version control"
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
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any Laravel app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVC architecture, routing, Blade templating, Eloquent ORM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTful APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API routes, resource controllers, Sanctum auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLI Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom commands, scheduler, queue worker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time Apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSockets, events, Laravel Reverb"
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
      }), " Who created Laravel?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Taylor Otwell"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Rasmus Lerdorf"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Fabien Potencier"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) Taylor Otwell\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Which PHP version does Laravel 13 require?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) PHP 8.0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) PHP 8.2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) PHP 8.3"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) PHP 8.1\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " C"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " What command creates a new Laravel project?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) npm init laravel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) laravel new"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) php artisan new"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) create-laravel\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " B"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " Which directory handles HTTP controllers?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) resources/"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) routes/"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) app/Http/Controllers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) database/\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " C"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-1",
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
            children: "Installer vs Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installer: fast; Composer: universal fallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use installer day-to-day, Composer in CI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Herd vs Sail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Herd: native macOS; Sail: Docker cross-platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Herd for solo dev, Sail for team"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan vs Tinker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan: CLI commands; Tinker: interactive REPL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan for scaffolding, Tinker for testing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
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
            children: "Create project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "laravel new app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Installer is faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Run dev server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan serve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 8000 by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "List commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200+ built-in commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generate key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan key:generate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required after fresh install"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "View env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat .env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never commit .env"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
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
            children: "Any Laravel app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVC, routing, Blade, Eloquent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTful services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API routes, Sanctum auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLI Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artisan commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom commands, scheduler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSockets, Laravel Reverb"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these questions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Who created Laravel?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Taylor Otwell"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Rasmus Lerdorf"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Fabien Potencier"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) Taylor Otwell\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Laravel 13 requires which PHP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) PHP 8.0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) PHP 8.2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) PHP 8.3"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) PHP 8.1\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " C"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " What creates a new Laravel project?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) npm init laravel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) laravel new"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) php artisan new"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) create-laravel\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " B"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " Which directory has controllers?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) resources/"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) routes/"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) app/Http/Controllers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) database/\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " C"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel was created by Taylor Otwell in 2011 as a modern, elegant alternative to PHP's existing frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The philosophy centers on elegant syntax, expressive code, and convention over configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel 13 requires PHP 8.3+ and follows an annual August release cadence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes are minimized with long deprecation periods and automated upgrade tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four installation methods exist: Laravel Installer (recommended), Herd (native), Sail (Docker), and Composer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The directory structure cleanly separates application code, configuration, routes, views, and storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Artisan CLI provides scaffolding commands for models, controllers, migrations, and middleware"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Environment configuration uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " files and a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config/"
        }), " directory with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "env()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config()"
        }), " helpers"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The framework is designed for AI-assisted development with predictable, agent-friendly conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hello World can be built at three depth levels → closure, controller, or full MVC with Blade"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The first-party ecosystem spans deployment, monitoring, admin, search, billing, real-time, and AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-development-workflow",
      children: "1.10 Development Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A typical Laravel development session follows this rhythm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaffold"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "laravel new project"
        }), " or an existing repository"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure"
        }), ": Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " values for your database and services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model"
        }), ": Create models with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "php artisan make:model Product -m"
        }), " (the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-m"
        }), " flag also creates the migration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migrate"
        }), ": Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "php artisan migrate"
        }), " to create database tables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route"
        }), ": Define endpoints in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "routes/web.php"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "routes/api.php"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Controller"
        }), ": Create controllers with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "php artisan make:controller ProductController --resource"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "View"
        }), ": Build Blade templates in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resources/views/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test"
        }), ": Write tests with Pest or PHPUnit in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterate"
        }), ": Artisan commands, Tinker REPL, and Telescope debugging support rapid iteration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This workflow is intentionally linear and predictable → another reason AI agents excel at Laravel development. Each step has a clear entry point and a known output location."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What problem did Taylor Otwell identify in the PHP ecosystem that led him to create Laravel? Explain how Laravel's \"convention over configuration\" philosophy addresses this."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare and contrast the four methods of creating a new Laravel application. Under what circumstances would you choose each one?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the relationship between the ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".env"
          }), " file and the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "config/"
          }), " directory. Why is it a security risk to commit ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".env"
          }), " to version control, and what is the production alternative?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What makes Laravel 13 an \"agent-ready\" framework? Name three specific design decisions that make the framework predictable for AI coding assistants."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "php artisan make:model Product -mc"
          }), " create three files? What are they and what is the relationship between them?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Environment Configuration"
          }), ": Create a configuration file ", (0,jsx_runtime.jsx)(_components.code, {
            children: "config/referral.php"
          }), " that reads the following environment variables with defaults: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REFERRAL_BONUS_AMOUNT"
          }), " (25.00), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REFERRAL_BONUS_CURRENCY"
          }), " (USD), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REFERRAL_MAX_PER_MONTH"
          }), " (10), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REFERRAL_EXPIRY_DAYS"
          }), " (30). Then write a code snippet that retrieves each value using the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "config()"
          }), " helper and displays them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Artisan Command"
          }), ": Create an Artisan command called ", (0,jsx_runtime.jsx)(_components.code, {
            children: "app:status"
          }), " that displays the application name, environment, debug mode status, and database connection name. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "php artisan make:command"
          }), " to scaffold it, then implement the logic using the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "config()"
          }), " helper. Output a formatted table."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Directory Structure Navigation"
          }), ": Starting from a fresh Laravel installation, trace the full path from an incoming HTTP request entering through ", (0,jsx_runtime.jsx)(_components.code, {
            children: "public/index.php"
          }), " to the point where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "routes/web.php"
          }), " is loaded. List every PHP file that is touched along the way, in order, and explain what each file contributes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Developer Application Setup"
      }), ": Create a Laravel 13 application configured for a team of five developers with the following requirements:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Laravel Sail with Docker for consistent environments across Windows, macOS, and Linux"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include MySQL, Redis, and Meilisearch services in the Sail configuration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " so each developer can use their own database name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app_jane"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app_john"
        }), ") without editing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.yml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a custom Artisan command ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app:doctor"
        }), " that validates the environment by checking that the database connection works (run a simple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT 1"
        }), "), Redis responds to a ping, and required environment variables (", (0,jsx_runtime.jsx)(_components.code, {
          children: "APP_KEY"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DB_DATABASE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAIL_MAILER"
        }), ") are all set"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app:doctor"
        }), " output must be a color-coded ASCII table with columns for Check, Status (PASS/FAIL/SKIP), and Detail"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a Blade view at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resources/views/welcome-custom.blade.php"
        }), " that displays the application name from ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), ", the current PHP version, and a list of enabled services read from a config file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement every piece: the Docker additions, the config file, the complete ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app:doctor"
      }), " command, the Blade view, and the route pointing to a controller that renders the view."]
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