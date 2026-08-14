"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46787],{

/***/ 24874
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_03_blade_frontend_md_153_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-03-blade-frontend-md-153.json
const site_docs_courses_laravel_03_blade_frontend_md_153_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/03-blade-frontend","title":"Chapter 3: Blade Templating, Components & Frontend","description":"Previous Eloquent ORM, Database & Migrations","source":"@site/docs/courses/laravel/03-blade-frontend.md","sourceDirName":"courses/laravel","slug":"/laravel/03-blade-frontend","permalink":"/ai-engineering-journey/laravel/03-blade-frontend","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-blade-frontend","slug":"/laravel/03-blade-frontend","title":"Chapter 3: Blade Templating, Components & Frontend","sidebar_label":"Chapter 3: Blade Templating, Components & Frontend","sidebar_position":3},"sidebar":"course-laravel","previous":{"title":"Chapter 2: Architecture, Routing, Middleware & Controllers","permalink":"/ai-engineering-journey/laravel/02-architecture-routing"},"next":{"title":"Chapter 4: Eloquent ORM, Database & Migrations","permalink":"/ai-engineering-journey/laravel/04-eloquent-database"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/03-blade-frontend.md


const frontMatter = {
	id: '03-blade-frontend',
	slug: '/laravel/03-blade-frontend',
	title: 'Chapter 3: Blade Templating, Components & Frontend',
	sidebar_label: 'Chapter 3: Blade Templating, Components & Frontend',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Blade Templating, Components & Frontend';

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
  "value": "3.1 Blade Syntax",
  "id": "31-blade-syntax",
  "level": 3
}, {
  "value": "Echo Syntax",
  "id": "echo-syntax",
  "level": 4
}, {
  "value": "Conditionals",
  "id": "conditionals",
  "level": 4
}, {
  "value": "Loops",
  "id": "loops",
  "level": 4
}, {
  "value": "The <code>$loop</code> Variable",
  "id": "the-loop-variable",
  "level": 4
}, {
  "value": "Raw PHP",
  "id": "raw-php",
  "level": 4
}, {
  "value": "3.2 Template Inheritance",
  "id": "32-template-inheritance",
  "level": 3
}, {
  "value": "3.3 Components",
  "id": "33-components",
  "level": 3
}, {
  "value": "Creating Components",
  "id": "creating-components",
  "level": 4
}, {
  "value": "Class-Based Component",
  "id": "class-based-component",
  "level": 4
}, {
  "value": "Anonymous Components",
  "id": "anonymous-components",
  "level": 4
}, {
  "value": "The <code>$attributes</code> Bag",
  "id": "the-attributes-bag",
  "level": 4
}, {
  "value": "Named Slots",
  "id": "named-slots",
  "level": 4
}, {
  "value": "3.4 Blade with Vite",
  "id": "34-blade-with-vite",
  "level": 3
}, {
  "value": "3.5 Layouts: Inheritance vs Components",
  "id": "35-layouts-inheritance-vs-components",
  "level": 3
}, {
  "value": "3.6 Forms and CSRF",
  "id": "36-forms-and-csrf",
  "level": 3
}, {
  "value": "3.7 Push, Stack, and One-Time Includes",
  "id": "37-push-stack-and-one-time-includes",
  "level": 3
}, {
  "value": "3.8 Complete Form with Validation Errors",
  "id": "38-complete-form-with-validation-errors",
  "level": 3
}, {
  "value": "3.9 Form Partials with <code>@each</code>",
  "id": "39-form-partials-with-each",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Blade Directives",
  "id": "quick-reference--blade-directives",
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
        id: "chapter-3-blade-templating-components--frontend",
        children: "Chapter 3: Blade Templating, Components & Frontend"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./02-architecture-routing",
          children: "Architecture & Routing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./04-eloquent-database",
          children: "Eloquent ORM, Database & Migrations"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write Blade templates using control structures, echo syntax, and raw output"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement template inheritance with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@extends"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@section"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@yield"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build class-based and anonymous Blade components with slots and attributes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Integrate Vite with Blade using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@vite()"
        }), " directive"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish layout inheritance from component-based composition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create forms with CSRF protection, method spoofing, and validation error display"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Organize reusable partials with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@include"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@each"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@push"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@stack"
        })]
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
        href: "../../assets/images/lessons/laravel/03-blade-frontend/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/03-blade-frontend/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/03-blade-frontend/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/03-blade-frontend/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/03-blade-frontend/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/03-blade-frontend/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Blade Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Echo syntax, conditionals, loops, raw PHP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@extends, @section, @yield, @parent, @stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class-based, anonymous, slots, attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vite Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@vite(), HMR, production builds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forms & CSRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF protection, method spoofing, old() helper"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Blade Syntax] --> B[Template Inheritance]\n    B --> C[Blade Components]\n    C --> D[Vite Integration]\n    C --> E[Forms & CSRF]\n    D --> F[Layout Strategies]\n    E --> F\n    F --> G[Real-World Patterns]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Blade compiles to cached PHP and provides expressive template constructs with zero runtime overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-blade-syntax",
      children: "3.1 Blade Syntax"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Blade's echo syntax automatically escapes output, preventing XSS while offering clean conditional and loop constructs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blade compiles templates to cached PHP. It adds zero overhead in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/03-blade-frontend.png",
        alt: "Blade Templating Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "echo-syntax",
      children: "Echo Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Escaped by htmlspecialchars --}}\n{{ $name }}\n{{ $user->email }}\n{{ config('app.name') }}\n{{ $name ?? 'Guest' }}\n\n{{-- Unescaped (only for trusted HTML) --}}\n{!! $pageContent !!}\n\n{{-- Comments (not rendered in HTML) --}}\n{{-- This is a Blade comment --}}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conditionals",
      children: "Conditionals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@if ($score >= 90)\n    <span>A</span>\n@elseif ($score >= 70)\n    <span>B</span>\n@else\n    <span>F</span>\n@endif\n\n@unless ($user->isBanned)\n    <p>Welcome back!</p>\n@endunless\n\n@isset($settings['maintenance_mode'])\n    <div class=\"alert\">Maintenance active.</div>\n@endisset\n\n@empty($posts)\n    <p>No posts found.</p>\n@endempty\n\n@auth <p>Logged in</p> @endauth\n@guest <p>Please log in</p> @endguest\n@production <script src=\"{{ mix('js/app.js') }}\"></script> @endproduction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "loops",
      children: "Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@for ($i = 0; $i < 10; $i++)\n    {{ $i }}\n@endfor\n\n@foreach ($users as $user)\n    <p>{{ $user->name }}</p>\n@endforeach\n\n@forelse ($posts as $post)\n    <article><h2>{{ $post->title }}</h2></article>\n@empty\n    <p>No posts.</p>\n@endforelse\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "the-loop-variable",
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop"
      }), " Variable"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$loop->parent"
        }), " property is invaluable when rendering nested collections — it lets you access the outer loop's iteration count from within an inner loop without passing additional variables."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@foreach"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@forelse"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@while"
      }), ", Blade exposes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@foreach ($users as $user)\n    <tr class=\"{{ $loop->first ? 'font-bold' : '' }}\n               {{ $loop->last ? 'border-b-0' : '' }}\">\n        <td>{{ $loop->iteration }}</td>\n        <td>{{ $user->name }}</td>\n        <td>{{ $loop->remaining }} remaining</td>\n    </tr>\n@endforeach\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Properties: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->index"
      }), " (0-based), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->iteration"
      }), " (1-based), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->remaining"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->count"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->first"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->last"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->even"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->odd"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->depth"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$loop->parent"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@foreach ($categories as $category)\n    <h2>{{ $category->name }}</h2>\n    @foreach ($category->items as $item)\n        <p>Cat {{ $loop->parent->iteration }} / Item {{ $loop->iteration }}</p>\n    @endforeach\n@endforeach\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "raw-php",
      children: "Raw PHP"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@php\n    $total = array_reduce($items, fn($sum, $i) => $sum + $i->price * $i->quantity, 0);\n@endphp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-template-inheritance",
      children: "3.2 Template Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Template inheritance via @extends/@section/@yield provides a clean parent-child layout hierarchy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parent layout"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/layouts/app.blade.php"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>@yield('title', config('app.name'))</title>\n    @stack('styles')\n</head>\n<body>\n    <nav>\n        <a href=\"/\">Home</a>\n        <a href=\"/about\">About</a>\n    </nav>\n    <main>@yield('content')</main>\n    <footer>&copy; {{ date('Y') }}</footer>\n    @stack('scripts')\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Child template"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@extends('layouts.app')\n\n@section('title', $post->title)\n\n@section('content')\n    <article>\n        <h1>{{ $post->title }}</h1>\n        <div>{!! $post->body !!}</div>\n    </article>\n    @include('posts.partials.comments', ['comments' => $post->comments])\n@endsection\n\n@push('styles')\n    <link href=\"{{ asset('css/posts.css') }}\" rel=\"stylesheet\">\n@endpush\n\n@push('scripts')\n    <script src=\"{{ asset('js/comments.js') }}\" defer></script>\n@endpush\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key directives:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@extends('layouts.app')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declares inheritance from a parent layout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@section('name', 'value')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short form for simple string content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@section('name')...@endsection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block form for multi-line content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@yield('name')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renders the child's section content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@parent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renders the parent's section content from within a child"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@stack('name')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renders all pushed content in order"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@include"
        }), " variants"]
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@include('shared.errors')\n@includeIf('custom.sidebar')                         // Only if view exists\n@includeWhen($user->isAdmin(), 'admin.sidebar')       // Conditional\n@includeUnless($user->isBanned(), 'shared.banner')    // Conditional\n@each('shared.card', $posts, 'item', 'shared.empty')  // Collection render\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-components",
      children: "3.3 Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Blade components offer encapsulated, reusable UI elements with slots and attribute bags, superseding @include for most use cases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Blade components are the modern, encapsulated alternative to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@include"
      }), " partials."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-components",
      children: "Creating Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan make:component Alert               # Class-based\nphp artisan make:component forms.input --view  # Anonymous (Blade-only)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "class-based-component",
      children: "Class-Based Component"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Component class"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/View/Components/Alert.php"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Alert extends Component\n{\n    public function __construct(\n        public string $type = 'info',\n        public ?string $dismissible = null,\n    ) {}\n\n    public function render(): View|Closure|string\n    {\n        return view('components.alert');\n    }\n\n    public function typeClass(): string\n    {\n        return match ($this->type) {\n            'success' => 'bg-green-100 border-green-400',\n            'danger'  => 'bg-red-100 border-red-400',\n            default   => 'bg-blue-100 border-blue-400',\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Component template"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/components/alert.blade.php"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div {{ $attributes->merge(['class' => 'alert p-4 ' . $typeClass()]) }}\n     role=\"alert\"\n     x-data=\"{ show: true }\"\n     x-show=\"show\">\n    <div class=\"flex items-start\">\n        <div class=\"flex-1\">{{ $slot }}</div>\n        @if ($dismissible)\n            <button @click=\"show = false\" class=\"ml-4\">&times;</button>\n        @endif\n    </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<x-alert type=\"success\" dismissible>\n    Profile updated successfully!\n</x-alert>\n\n<x-alert type=\"danger\">\n    <strong>Error:</strong> Correct the fields below.\n</x-alert>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "anonymous-components",
      children: "Anonymous Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Anonymous components use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@props()"
        }), " to declare their attributes instead of a PHP constructor. They are ideal for simple, stateless presentational components like form inputs or buttons."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No PHP class → all logic lives in the template:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/components/forms/input.blade.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@props(['name', 'label' => null, 'type' => 'text', 'value' => null, 'required' => false])\n\n<div class=\"mb-4\">\n    @if ($label)\n        <label for=\"{{ $name }}\" class=\"block text-sm font-medium mb-1\">\n            {{ $label }}@if ($required)<span class=\"text-red-500\">*</span>@endif\n        </label>\n    @endif\n    <input type=\"{{ $type }}\" name=\"{{ $name }}\" id=\"{{ $name }}\"\n           value=\"{{ old($name, $value) }}\"\n           {{ $required ? 'required' : '' }}\n           {{ $attributes->class(['border-red-500' => $errors->has($name)])\n                ->merge(['class' => 'w-full rounded border-gray-300']) }}>\n    @error($name)\n        <p class=\"text-red-600 text-sm mt-1\">{{ $message }}</p>\n    @enderror\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<x-forms.input name=\"email\" label=\"Email\" type=\"email\" required />\n<x-forms.input name=\"phone\" label=\"Phone\" type=\"tel\" value=\"+1-555-0123\" />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "the-attributes-bag",
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$attributes"
      }), " Bag"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$attributes->merge()"
        }), " method merges classes, not replaces them. To override a class, provide it after the default — Laravel deduplicates automatically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Merge: original + override --}}\n<div {{ $attributes->merge(['class' => 'p-4 bg-white', 'id' => 'default']) }}>\n    {{ $slot }}\n</div>\n{{-- Usage: <x-card class=\"bg-gray-100\" id=\"custom\" /> --}}\n{{-- Result: <div class=\"p-4 bg-white bg-gray-100\" id=\"custom\"> --}}\n\n{{-- Filter --}}\n<div {{ $attributes->whereDoesntStartWith('wire:') }}></div>\n\n{{-- Check --}}\n@if ($attributes->has('class')) @endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "named-slots",
      children: "Named Slots"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/components/card.blade.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div {{ $attributes->merge(['class' => 'card border rounded shadow-sm']) }}>\n    @if ($heading)\n        <div class=\"card-header border-b bg-gray-50 px-4 py-3\">{{ $heading }}</div>\n    @endif\n    <div class=\"card-body px-4 py-4\">{{ $slot }}</div>\n    @if ($footer)\n        <div class=\"card-footer border-t bg-gray-50 px-4 py-3\">{{ $footer }}</div>\n    @endif\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<x-card>\n    <x-slot:heading><h2 class=\"text-lg font-semibold\">User Profile</h2></x-slot:heading>\n    <p><strong>Name:</strong> {{ $user->name }}</p>\n    <p><strong>Email:</strong> {{ $user->email }}</p>\n    <x-slot:footer>\n        <a href=\"/users/{{ $user->id }}/edit\">Edit</a>\n    </x-slot:footer>\n</x-card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-blade-with-vite",
      children: "3.4 Blade with Vite"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Vite integration delivers HMR in development and versioned asset bundles in production through the @vite() directive."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel uses Vite as the default bundler."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "vite.config.js"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "import { defineConfig } from 'vite';\nimport laravel from 'laravel-vite-plugin';\n\nexport default defineConfig({\n    plugins: [\n        laravel({\n            input: ['resources/css/app.css', 'resources/js/app.js'],\n            refresh: true,\n        }),\n    ],\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blade usage"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@vite(['resources/css/app.css', 'resources/js/app.js'])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In development (", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run dev"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@vite()"
      }), " generates HMR module script tags pointing to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost:5173"
      }), ". Save a file and the browser updates without a full reload. In production (", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), "), it generates versioned asset links with content hashes for cache busting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-layouts-inheritance-vs-components",
      children: "3.5 Layouts: Inheritance vs Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Use inheritance for single-layout sites and components for multi-layout flexibility."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inheritance"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@extends"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "@section"
      }), "): Best for single-layout sites. Child views fill pre-defined sections in a parent layout. Simple and explicit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Components"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "<x-layout>"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{{ $slot }}"
      }), "): Best for multi-layout sites (public, admin, print). Components compose; inheritance extends. Composition is more flexible for nested layouts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example component-based layout:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/components/layouts/app.blade.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>{{ $title ?? config('app.name') }}</title>\n    @vite(['resources/css/app.js'])\n    @stack('styles')\n</head>\n<body class=\"min-h-screen flex flex-col\">\n    <x-navigation />\n    @isset($header)\n        <header class=\"bg-white shadow\">\n            <div class=\"max-w-7xl mx-auto py-6 px-4\">{{ $header }}</div>\n        </header>\n    @endisset\n    <main class=\"flex-1\">\n        <div class=\"max-w-7xl mx-auto py-6 px-4\">\n            @if (session('success'))\n                <x-alert type=\"success\" dismissible>{{ session('success') }}</x-alert>\n            @endif\n            {{ $slot }}\n        </div>\n    </main>\n    <x-footer />\n    @vite(['resources/js/app.js'])\n    @stack('scripts')\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<x-layouts.app title=\"Dashboard\">\n    <x-slot:header><h1 class=\"text-2xl font-bold\">Dashboard</h1></x-slot:header>\n    <div class=\"grid grid-cols-4 gap-6\">\n        <x-stat-card label=\"Users\" value=\"{{ $count }}\" />\n    </div>\n</x-layouts.app>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-forms-and-csrf",
      children: "3.6 Forms and CSRF"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CSRF protection is automatic with @csrf, and method spoofing via @method enables PUT/PATCH/DELETE in HTML forms."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic form"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<form method=\"POST\" action=\"{{ route('posts.store') }}\">\n    @csrf\n    <input type=\"text\" name=\"title\" value=\"{{ old('title') }}\"\n           class=\"@error('title') border-red-500 @enderror\">\n    @error('title') <p class=\"text-red-500\">{{ $message }}</p> @enderror\n    <button type=\"submit\">Create</button>\n</form>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Method spoofing"
      }), ": HTML only supports GET and POST. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@method"
      }), " for PUT, PATCH, DELETE:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<form method=\"POST\" action=\"{{ route('posts.update', $post) }}\">\n    @csrf\n    @method('PUT')\n    <input type=\"text\" name=\"title\" value=\"{{ old('title', $post->title) }}\">\n    <button type=\"submit\">Update</button>\n</form>\n\n<form method=\"POST\" action=\"{{ route('posts.destroy', $post) }}\">\n    @csrf\n    @method('DELETE')\n    <button type=\"submit\" onclick=\"return confirm('Sure?')\">Delete</button>\n</form>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "old()"
        }), " helper"]
      }), ": Returns the previously submitted value after a validation failure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<input name=\"email\" value=\"{{ old('email') }}\">\n<input name=\"email\" value=\"{{ old('email', $user->email) }}\">\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-push-stack-and-one-time-includes",
      children: "3.7 Push, Stack, and One-Time Includes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " @push and @stack enable deferred injection of scripts and styles from child to parent layouts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@push"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@stack"
        })]
      }), ": Push content from child views to a named stack rendered in the layout:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Child view --}}\n@push('scripts')\n    <script src=\"{{ asset('js/chart.js') }}\" defer></script>\n@endpush\n\n@prepend('scripts')\n    <script>window.App = { csrf: '{{ csrf_token() }}' }</script>\n@endprepend\n\n{{-- Layout --}}\n<head>@stack('styles')</head>\n<body>@stack('scripts')</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@once"
        })
      }), ": Renders content only once per rendered template, regardless of how many times the directive appears:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@foreach ($users as $user)\n    @once\n        <style>.card { border: 1px solid #ddd; }</style>\n    @endonce\n    <div class=\"card\">{{ $user->name }}</div>\n@endforeach\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-complete-form-with-validation-errors",
      children: "3.8 Complete Form with Validation Errors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/posts/create.blade.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<x-layouts.app title=\"Create Post\">\n    <x-slot:header><h1 class=\"text-2xl font-bold\">Create Post</h1></x-slot:header>\n\n    @if ($errors->any())\n        <x-alert type=\"danger\" class=\"mb-6\">\n            <strong>Please fix these errors:</strong>\n            <ul class=\"mt-2 list-disc list-inside\">\n                @foreach ($errors->all() as $error)\n                    <li>{{ $error }}</li>\n                @endforeach\n            </ul>\n        </x-alert>\n    @endif\n\n    <form method=\"POST\" action=\"{{ route('posts.store') }}\" enctype=\"multipart/form-data\">\n        @csrf\n        <x-card>\n            <x-slot:heading>Post Details</x-slot:heading>\n            <div class=\"space-y-6\">\n                <x-forms.input name=\"title\" label=\"Title\" required :value=\"old('title')\" />\n\n                <x-forms.select name=\"category_id\" label=\"Category\" required\n                    :options=\"$categories->pluck('name', 'id')\"\n                    :selected=\"old('category_id')\" />\n\n                <div class=\"mb-4\">\n                    <label for=\"body\" class=\"block text-sm font-medium mb-1\">Content</label>\n                    <textarea name=\"body\" id=\"body\" rows=\"15\"\n                        class=\"w-full rounded border @error('body') border-red-500 @else border-gray-300 @enderror\">{{ old('body') }}</textarea>\n                    @error('body')<p class=\"text-red-600 text-sm mt-1\">{{ $message }}</p>@enderror\n                </div>\n\n                <x-forms.file name=\"featured_image\" label=\"Featured Image\" accept=\"image/*\" />\n            </div>\n            <x-slot:footer>\n                <div class=\"flex justify-end space-x-4\">\n                    <a href=\"{{ route('posts.index') }}\" class=\"text-gray-600\">Cancel</a>\n                    <button type=\"submit\"\n                        class=\"bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700\">\n                        Publish\n                    </button>\n                </div>\n            </x-slot:footer>\n        </x-card>\n    </form>\n</x-layouts.app>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "39-form-partials-with-each",
      children: ["3.9 Form Partials with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@each"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For sub-resources like invoice line items, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@each"
      }), " with partials keeps forms DRY:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/invoices/partials/line-item.blade.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<div class=\"line-item flex space-x-4 items-end border-b pb-4 mb-4\">\n    <div class=\"flex-1\">\n        <x-forms.input name=\"items[{{ $index }}][description]\" label=\"Description\"\n            value=\"{{ old(\"items.{$index}.description\", $item['description'] ?? '') }}\" />\n    </div>\n    <div class=\"w-32\">\n        <x-forms.input name=\"items[{{ $index }}][quantity]\" label=\"Qty\" type=\"number\" min=\"1\"\n            value=\"{{ old(\"items.{$index}.quantity\", $item['quantity'] ?? 1) }}\" />\n    </div>\n    <div class=\"w-40\">\n        <x-forms.input name=\"items[{{ $index }}][unit_price]\" label=\"Unit Price\" type=\"number\" step=\"0.01\"\n            value=\"{{ old(\"items.{$index}.unit_price\", $item['unit_price'] ?? '0.00') }}\" />\n    </div>\n    <div class=\"w-24 pt-7\">\n        <button type=\"button\" class=\"text-red-600 text-sm\"\n            onclick=\"this.closest('.line-item').remove()\">Remove</button>\n    </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<form method=\"POST\" action=\"{{ route('invoices.store') }}\">\n    @csrf\n    <div id=\"line-items\">\n        @each('invoices.partials.line-item', old('items', [['description' => '']]), 'item', 'invoices.partials.line-item-empty')\n    </div>\n    <button type=\"button\" onclick=\"addLineItem()\" class=\"text-indigo-600 text-sm\">\n        + Add Line Item\n    </button>\n    <button type=\"submit\">Create Invoice</button>\n</form>\n\n<script>\nlet idx = {{ count(old('items', [['description' => '']])) }};\nfunction addLineItem() {\n    const tpl = document.querySelector('.line-item-template').innerHTML.replace(/\\{\\{index\\}\\}/g, idx++);\n    document.getElementById('line-items').insertAdjacentHTML('beforeend', tpl);\n}\n</script>\n"
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
            children: "Template Inheritance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blade Components"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent-child layout hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulated, composable units"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-layout sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-layout, complex UIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@section / @yield"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slots (default + named)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$attributes bag with merge, class, filter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reusability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly reusable across views"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller provides data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class methods + @props()"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--blade-directives",
      children: "Quick Reference — Blade Directives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{{ }}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Escaped output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{{ $user->name }}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{!! !!}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{!! $html !!}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@if/@elseif/@else"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditionals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@if ($score > 90) A @endif"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@unless"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@unless ($user->banned)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@forelse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop with empty state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@forelse ($posts as $p) ... @empty ... @endforelse"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@csrf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF token field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@csrf"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP method spoofing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@method('PUT')"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@push/@stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@push('scripts') ... @endpush"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@vite()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@vite(['css/app.css'])"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blog"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E-Commerce"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SaaS Dashboard"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@extends/@section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blog layout with sidebar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product page with filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin layout with nav"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blade Components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert, Card, Button"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ProductCard, CartItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DataTable, ChartWidget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Named Slots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Card header/footer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modal with title/body/actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panel with toolbar/content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forms + @csrf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comment form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings form"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@push/@stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page-specific scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkout JS bundle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chart library per page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vite @vite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blog CSS/JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product gallery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard bundle"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which Blade directive renders escaped output?"
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
          children: "@echo"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. How do you declare a named slot in a component template?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@slot('name')"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["b) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{{ $name }}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["c) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{{ $slot->name }}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["d) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{{ $name ?? $slot }}"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["3. What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$attributes->merge(['class' => 'p-4'])"
        }), " do?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Replaces all existing classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Appends 'p-4' to any existing classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Overwrites the class attribute entirely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Throws an error if class exists"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which directive must appear in every HTML form that sends POST requests?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@method"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["b) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@csrf"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["c) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@push"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["d) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@vite"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-b, 2-a, 3-b, 4-b"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blade compiles to cached PHP with zero runtime overhead"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{{ }}"
        }), " escapes output; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{!! !!}"
        }), " outputs raw HTML (use only with trusted content)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Control structures (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@if"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@unless"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@isset"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@forelse"
        }), ") provide clean syntax"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$loop"
        }), " exposes iteration metadata including index, depth, and nesting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Template inheritance uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@extends"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@section"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@yield"
        }), " for layout hierarchies"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Components offer encapsulated logic with slots and attribute bags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Named slots support multiple content areas in a single component"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vite via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@vite()"
        }), " provides HMR in development and versioned assets in production"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Forms require ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@csrf"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@method()"
        }), " for PUT/PATCH/DELETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@push"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@stack"
        }), " enable deferred script and style injection from child templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "old()"
        }), " retains form input across validation failure redirects"]
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
          children: ["Compare ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@extends"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "@section"
          }), " inheritance with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<x-layout>"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "{{ $slot }}"
          }), " components. When would you choose each?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$attributes"
          }), " bag work? Explain ", (0,jsx_runtime.jsx)(_components.code, {
            children: "merge()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "class()"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whereDoesntStartWith()"
          }), " with examples."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why does Blade use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{{ }}"
          }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<?= ?>"
          }), "? What vulnerability does escaping prevent?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@push"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@stack"
          }), ". How do they differ from placing a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<script>"
          }), " tag directly in the layout?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@vite()"
          }), " determine whether to load HMR scripts or production build links?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Component-Based Form Builder"
          }), ": Create ", (0,jsx_runtime.jsx)(_components.code, {
            children: "forms.input"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "forms.select"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "forms.textarea"
          }), " anonymous components that share validation error display. Each must accept ", (0,jsx_runtime.jsx)(_components.code, {
            children: "name"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "label"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "required"
          }), ", display old input, show per-field errors, and merge additional attributes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dashboard Layout with Named Slots"
          }), ": Build a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "layouts.dashboard"
          }), " component with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "header"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sidebar"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "content"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "footer"
          }), " slots. The sidebar collapses via Alpine.js. Include ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@stack('styles')"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@stack('scripts')"
          }), ". Create a child view using all four slots."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic Invoice Form"
          }), ": Build an invoice creation form with dynamic line items using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@each"
          }), " and a partial. The partial must handle old input after validation failure and include JavaScript for adding and removing items."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete Blog CMS Templating System"
      }), ": Build a full Blade templating system for a blog:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Layout component"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "layouts.app"
          }), " with named slots for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "title"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "header"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sidebar"
          }), " (optional), and default content. Include Vite directives, CSRF meta, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@stack"
          }), " for styles/scripts. Show flash messages via an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<x-alert>"
          }), " component."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Navigation component"
          }), " with responsive mobile toggle using Alpine.js ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x-data"
          }), ". Show Home, Blog, Categories. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x-nav-link"
          }), " components with ", (0,jsx_runtime.jsx)(_components.code, {
            children: ":active"
          }), " route detection. Show Login/Register for guests, Dashboard/Logout for auth users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Blog index"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "posts.index"
          }), " using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@each"
          }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "posts.card"
          }), " partial (featured image, title, excerpt, author, date) and pagination."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Blog show"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "posts.show"
          }), " with full body (", (0,jsx_runtime.jsx)(_components.code, {
            children: "{!! !!}"
          }), "), author bio sidebar, comments section, comment form, and related posts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Admin create"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "posts.create"
          }), " with validation summary alert plus per-field errors. Include title, slug (auto-generated via JS), category select, body textarea, featured image upload with preview, tags input, and publish checkbox. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@csrf"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@method"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "old()"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Form partial"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "posts.partials.form"
          }), " reusable across create and edit. Accept ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$post"
          }), " (null for create, model for edit) and populate ", (0,jsx_runtime.jsx)(_components.code, {
            children: "old()"
          }), " with model values as fallback."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Admin index"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "posts.admin-index"
          }), " with a table, checkboxes for bulk selection, dropdown for bulk actions (delete, publish, unpublish), and individual edit/delete buttons. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@push"
          }), " for a confirmation modal and bulk selection JavaScript."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All views must be fully functional Blade → every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@error"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@csrf"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@method"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@push"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@stack"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "old()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@each"
      }), " present with correct syntax."]
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