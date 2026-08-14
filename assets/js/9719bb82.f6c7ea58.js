"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77579],{

/***/ 16824
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_04_eloquent_database_md_971_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-04-eloquent-database-md-971.json
const site_docs_courses_laravel_04_eloquent_database_md_971_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/04-eloquent-database","title":"Chapter 4: Eloquent ORM, Database & Migrations","description":"Previous Authentication, Authorization & Security","source":"@site/docs/courses/laravel/04-eloquent-database.md","sourceDirName":"courses/laravel","slug":"/laravel/04-eloquent-database","permalink":"/ai-engineering-journey/laravel/04-eloquent-database","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-eloquent-database","slug":"/laravel/04-eloquent-database","title":"Chapter 4: Eloquent ORM, Database & Migrations","sidebar_label":"Chapter 4: Eloquent ORM, Database & Migrations","sidebar_position":4},"sidebar":"course-laravel","previous":{"title":"Chapter 3: Blade Templating, Components & Frontend","permalink":"/ai-engineering-journey/laravel/03-blade-frontend"},"next":{"title":"Chapter 5: Authentication, Authorization & Security","permalink":"/ai-engineering-journey/laravel/05-auth-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/04-eloquent-database.md


const frontMatter = {
	id: '04-eloquent-database',
	slug: '/laravel/04-eloquent-database',
	title: 'Chapter 4: Eloquent ORM, Database & Migrations',
	sidebar_label: 'Chapter 4: Eloquent ORM, Database & Migrations',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Eloquent ORM, Database & Migrations';

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
  "value": "Migration System",
  "id": "migration-system",
  "level": 3
}, {
  "value": "Creating Migrations",
  "id": "creating-migrations",
  "level": 4
}, {
  "value": "Migration Structure",
  "id": "migration-structure",
  "level": 4
}, {
  "value": "Running Migrations",
  "id": "running-migrations",
  "level": 4
}, {
  "value": "Migration Squashing",
  "id": "migration-squashing",
  "level": 4
}, {
  "value": "Schema Builder",
  "id": "schema-builder",
  "level": 3
}, {
  "value": "Creating and Modifying Tables",
  "id": "creating-and-modifying-tables",
  "level": 4
}, {
  "value": "Column Types",
  "id": "column-types",
  "level": 4
}, {
  "value": "Column Modifiers",
  "id": "column-modifiers",
  "level": 4
}, {
  "value": "Indexes",
  "id": "indexes",
  "level": 4
}, {
  "value": "Foreign Key Constraints",
  "id": "foreign-key-constraints",
  "level": 4
}, {
  "value": "Seeders &amp; Factories",
  "id": "seeders--factories",
  "level": 3
}, {
  "value": "Seeders",
  "id": "seeders",
  "level": 4
}, {
  "value": "Model Factories",
  "id": "model-factories",
  "level": 4
}, {
  "value": "Factory States",
  "id": "factory-states",
  "level": 4
}, {
  "value": "Factory Sequences",
  "id": "factory-sequences",
  "level": 4
}, {
  "value": "Using Factories",
  "id": "using-factories",
  "level": 4
}, {
  "value": "Eloquent Models",
  "id": "eloquent-models",
  "level": 3
}, {
  "value": "Creating Models",
  "id": "creating-models",
  "level": 4
}, {
  "value": "Model Conventions",
  "id": "model-conventions",
  "level": 4
}, {
  "value": "Fillable / Guarded",
  "id": "fillable--guarded",
  "level": 4
}, {
  "value": "Casts",
  "id": "casts",
  "level": 4
}, {
  "value": "Custom Casts",
  "id": "custom-casts",
  "level": 4
}, {
  "value": "Soft Deletes",
  "id": "soft-deletes",
  "level": 4
}, {
  "value": "Global Scopes",
  "id": "global-scopes",
  "level": 4
}, {
  "value": "Anonymous Global Scopes",
  "id": "anonymous-global-scopes",
  "level": 4
}, {
  "value": "Relationships",
  "id": "relationships",
  "level": 3
}, {
  "value": "One-to-One",
  "id": "one-to-one",
  "level": 4
}, {
  "value": "One-to-Many",
  "id": "one-to-many",
  "level": 4
}, {
  "value": "Has-Many-Through",
  "id": "has-many-through",
  "level": 4
}, {
  "value": "Many-to-Many",
  "id": "many-to-many",
  "level": 4
}, {
  "value": "Pivot Table Convention",
  "id": "pivot-table-convention",
  "level": 4
}, {
  "value": "Polymorphic",
  "id": "polymorphic",
  "level": 4
}, {
  "value": "Many-to-Many Polymorphic",
  "id": "many-to-many-polymorphic",
  "level": 4
}, {
  "value": "Eager Loading",
  "id": "eager-loading",
  "level": 3
}, {
  "value": "Basic Eager Loading",
  "id": "basic-eager-loading",
  "level": 4
}, {
  "value": "Nested Eager Loading",
  "id": "nested-eager-loading",
  "level": 4
}, {
  "value": "Constraining Eager Loads",
  "id": "constraining-eager-loads",
  "level": 4
}, {
  "value": "Lazy Eager Loading",
  "id": "lazy-eager-loading",
  "level": 4
}, {
  "value": "Counting Related Models",
  "id": "counting-related-models",
  "level": 4
}, {
  "value": "N+1 Problem",
  "id": "n1-problem",
  "level": 3
}, {
  "value": "Detection",
  "id": "detection",
  "level": 4
}, {
  "value": "Accessors, Mutators, and Casts",
  "id": "accessors-mutators-and-casts",
  "level": 3
}, {
  "value": "Defining Accessors (Laravel 9+ Style)",
  "id": "defining-accessors-laravel-9-style",
  "level": 4
}, {
  "value": "Defining Mutators",
  "id": "defining-mutators",
  "level": 4
}, {
  "value": "Legacy Accessor/Mutator Style (Pre-Laravel 9)",
  "id": "legacy-accessormutator-style-pre-laravel-9",
  "level": 4
}, {
  "value": "Eloquent Collections",
  "id": "eloquent-collections",
  "level": 3
}, {
  "value": "Custom Collection Methods",
  "id": "custom-collection-methods",
  "level": 4
}, {
  "value": "Local Scopes",
  "id": "local-scopes",
  "level": 3
}, {
  "value": "Model Events &amp; Observers",
  "id": "model-events--observers",
  "level": 3
}, {
  "value": "Event Types",
  "id": "event-types",
  "level": 4
}, {
  "value": "Observers",
  "id": "observers",
  "level": 4
}, {
  "value": "Registering Observers",
  "id": "registering-observers",
  "level": 4
}, {
  "value": "Events in Closure (Without Observer)",
  "id": "events-in-closure-without-observer",
  "level": 4
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Artisan Commands",
  "id": "quick-reference--artisan-commands",
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
        id: "chapter-4-eloquent-orm-database--migrations",
        children: "Chapter 4: Eloquent ORM, Database & Migrations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./03-blade-frontend",
          children: "Blade Templating, Components & Frontend"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./05-auth-security",
          children: "Authentication, Authorization & Security"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and execute database migrations using Laravel's Schema Builder with columns, modifiers, and indexes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement seeders and factories to generate realistic test data with states and sequences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build Eloquent models with proper fillable/guarded protection, casts, and soft deletes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and query all Eloquent relationship types including polymorphic variants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and eliminate the N+1 query problem using eager loading techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create accessors, mutators, global scopes, and observers to encapsulate model behavior"
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
        href: "../../assets/images/lessons/laravel/04-eloquent-database/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/04-eloquent-database/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/04-eloquent-database/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/04-eloquent-database/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/04-eloquent-database/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/04-eloquent-database/visual-explanation.png",
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
            children: "Migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema Builder, columns, modifiers, indexes, foreign keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seeders & Factories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faker data, factory states, sequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eloquent Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fillable/guarded, casts, soft deletes, global scopes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-one, one-to-many, many-to-many, polymorphic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eager Loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N+1 prevention, lazy loading, constrained loads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accessors & Mutators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute transformation, custom casts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eloquent collection methods, custom collections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events & Observers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model lifecycle hooks, observer classes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Migrations & Schema] --> B[Seeders & Factories]\n    B --> C[Eloquent Models]\n    C --> D[Relationships]\n    D --> E[Eager Loading]\n    C --> F[Accessors/Mutators]\n    F --> G[Collections]\n    C --> H[Events & Observers]\n    E --> I[N+1 Prevention]\n    H --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel's database layer provides version-controlled migrations, expressive schema definitions, and a powerful ORM for data interaction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-system",
      children: "Migration System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Migrations act as version control for your database schema, with reversible up()/down() methods for deterministic team collaboration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Migrations are Laravel's version control for your database schema. They allow you to define and share database changes using PHP code rather than raw SQL, making team collaboration deterministic across environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-migrations",
      children: "Creating Migrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Create a migration attached to a model\nphp artisan make:migration create_posts_table\n\n// Create a migration for modifying an existing table\nphp artisan make:migration add_category_id_to_posts_table\n\n// Create with a specific table target (Laravel auto-detects)\nphp artisan make:migration create_posts_table --create=posts\nphp artisan make:migration add_category_id_to_posts_table --table=posts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-structure",
      children: "Migration Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every migration contains two methods: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "up()"
      }), " (apply the change) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "down()"
      }), " (reverse the change)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('posts', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('user_id')->constrained();\n            $table->string('title', 255);\n            $table->text('content');\n            $table->string('status')->default('draft');\n            $table->timestamp('published_at')->nullable();\n            $table->timestamps();\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('posts');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "running-migrations",
      children: "Running Migrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan migrate              // Run pending migrations\nphp artisan migrate:rollback      // Rollback last batch\nphp artisan migrate:refresh       // Rollback and re-run all\nphp artisan migrate:fresh         // Drop all tables and re-run\nphp artisan migrate:status        // Show migration status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-squashing",
      children: "Migration Squashing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For applications with hundreds of migrations, squashing compiles all completed migrations into a single SQL file for faster deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan schema:dump\n// Creates database/schema/{connection}-schema.mysql.dump\n\nphp artisan schema:dump --prune\n// Dumps and prunes all existing migration files\n\n> **Pro Tip:** Use `schema:dump --prune` in CI/CD pipelines to dramatically speed up deployments. Laravel loads the schema dump first, then runs only new individual migrations — this can reduce deployment time from minutes to seconds on large projects.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When squashed migrations exist, Laravel loads the schema dump first, then runs any remaining individual migrations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schema-builder",
      children: "Schema Builder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The Schema Builder offers a fluent interface for defining column types, modifiers, indexes, and foreign key constraints across all supported databases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Schema Builder provides a fluent interface for defining database tables and columns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-and-modifying-tables",
      children: "Creating and Modifying Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('books', function (Blueprint $table) {\n    $table->id();\n    $table->timestamps();\n});\n\nSchema::table('books', function (Blueprint $table) {\n    $table->string('isbn', 13)->after('id');\n});\n\nSchema::rename('books', 'volumes');\n\nSchema::dropIfExists('volumes');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "column-types",
      children: "Column Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('products', function (Blueprint $table) {\n    // Numeric\n    $table->id();                              // BIGINT UNSIGNED AUTO_INCREMENT\n    $table->bigIncrements('id');               // Explicit bigIncrements\n    $table->integer('quantity')->unsigned();   // INT with unsigned\n    $table->tinyInteger('rating');             // TINYINT\n    $table->float('price', 8, 2);              // FLOAT with precision\n    $table->decimal('tax', 10, 2);             // DECIMAL with precision\n\n    // Strings & Text\n    $table->string('sku', 50);                 // VARCHAR with length\n    $table->char('country_code', 2);           // CHAR\n    $table->text('description');               // TEXT\n    $table->longText('full_specs');            // LONGTEXT\n\n    // Dates & Times\n    $table->date('release_date');              // DATE\n    $table->time('opens_at');                  // TIME\n    $table->year('manufactured_year');         // YEAR\n    $table->timestamp('published_at');         // TIMESTAMP\n    $table->timestamps();                      // created_at + updated_at\n    $table->softDeletes();                     // deleted_at\n\n    // UUIDs & ULIDs (Laravel 9+)\n    $table->uuid('uuid')->unique();            // UUID column\n    $table->ulid('ulid')->unique();            // ULID column (shorter, sortable)\n\n    // JSON\n    $table->json('metadata');                  // JSON column\n    $table->jsonb('settings');                 // JSONB (PostgreSQL only)\n\n    // Enums\n    $table->string('status')->default('active');\n    // Laravel 11+ native enum support:\n    // $table->string('status')->default(ProductStatus::Active);\n    $table->enum('size', ['small', 'medium', 'large']);\n\n    // Foreign IDs\n    $table->foreignId('user_id')->constrained();\n    $table->foreignIdFor(User::class);         // Same as above via model\n    $table->foreignUuid('team_uuid');          // UUID foreign key\n\n    // Misc\n    $table->boolean('is_active')->default(true);\n    $table->ipAddress('visitor_ip');\n    $table->macAddress('device_mac');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "column-modifiers",
      children: "Column Modifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::table('posts', function (Blueprint $table) {\n    $table->string('slug')->after('title');                 // Position after column\n    $table->string('subtitle')->nullable();                 // Allow NULL\n    $table->integer('comment_count')->default(0);           // Default value\n    $table->integer('position')->unsigned();                // Unsigned (positive only)\n    $table->text('bio')->charset('utf8mb4');                // Custom charset\n    $table->string('meta_title')->comment('SEO title');     // Column comment\n\n    // Laravel 11+ modifiers\n    $table->string('legacy_field')->virtualAs('concat(title, slug)');\n    $table->string('hash')->storedAs('sha2(title, 256)');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "indexes",
      children: "Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::table('posts', function (Blueprint $table) {\n    // Basic indexes\n    $table->index('status');                    // Single column\n    $table->index(['status', 'user_id']);       // Composite index\n    $table->unique('slug');                     // Unique constraint\n    $table->primary('id');                      // Primary key (usually via id())\n    $table->fullText('content');                // Full-text index (MySQL/PostgreSQL)\n\n    // Vector index (pgvector on PostgreSQL)\n    // $table->vector('embedding', 1536);       // In Laravel 11+ with pgvector\n    // $table->index('embedding', 'embedding_idx', 'hnsw');\n\n    // Dropping indexes\n    $table->dropIndex(['status']);              // By columns\n    $table->dropIndex('posts_status_index');    // By explicit name\n    $table->dropUnique(['slug']);\n    $table->dropPrimary();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "foreign-key-constraints",
      children: "Foreign Key Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('comments', function (Blueprint $table) {\n    $table->id();\n\n    // Standard foreign key\n    $table->foreignId('user_id')\n          ->constrained()\n          ->onDelete('cascade')\n          ->onUpdate('cascade');\n\n    // Custom table and column name\n    $table->unsignedBigInteger('author_id');\n    $table->foreign('author_id')\n          ->references('id')\n          ->on('users')\n          ->onDelete('set null');\n\n    // Composite foreign key\n    $table->foreignId('team_id')->constrained();\n    $table->foreign(['team_id', 'user_id'])\n          ->references(['id', 'team_id'])\n          ->on('team_user');\n});\n\n// Dropping foreign keys\nSchema::table('comments', function (Blueprint $table) {\n    $table->dropForeign(['user_id']);\n    $table->dropConstrainedForeignId('user_id'); // drop + foreign drop\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "seeders--factories",
      children: "Seeders & Factories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Factories with Faker generate realistic test data; states and sequences enable fine-grained variation for comprehensive testing scenarios."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "seeders",
      children: "Seeders"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seeders populate your database with initial or test data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Create a seeder\nphp artisan make:seeder BookSeeder\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Database\\Seeders;\n\nuse App\\Models\\Book;\nuse Illuminate\\Database\\Seeder;\n\nclass BookSeeder extends Seeder\n{\n    public function run(): void\n    {\n        Book::create(['title' => 'The Great Gatsby', 'isbn' => '9780743273565']);\n        Book::create(['title' => '1984', 'isbn' => '9780451524935']);\n        Book::factory(50)->create();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Calling seeders from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DatabaseSeeder.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Seeder;\n\nclass DatabaseSeeder extends Seeder\n{\n    public function run(): void\n    {\n        $this->call([\n            UserSeeder::class,\n            BookSeeder::class,\n            ReviewSeeder::class,\n        ]);\n\n        // Or chain-style (Laravel 10+)\n        // $this->call([UserSeeder::class])->call(BookSeeder::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan db:seed                    // Run DatabaseSeeder\nphp artisan db:seed --class=BookSeeder // Run specific seeder\nphp artisan migrate:fresh --seed       // Fresh migrate + seed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "model-factories",
      children: "Model Factories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Factories generate realistic Eloquent model instances using Faker data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:factory BookFactory --model=Book\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Database\\Factories;\n\nuse App\\Models\\Book;\nuse Illuminate\\Database\\Eloquent\\Factories\\Factory;\n\nclass BookFactory extends Factory\n{\n    protected $model = Book::class;\n\n    public function definition(): array\n    {\n        return [\n            'title' => fake()->sentence(4),\n            'isbn' => fake()->isbn13(),\n            'description' => fake()->paragraphs(3, true),\n            'price' => fake()->randomFloat(2, 5, 100),\n            'published_at' => fake()->dateTimeBetween('-5 years'),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "factory-states",
      children: "Factory States"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "States allow you to apply discrete modifications to the default factory state."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace Database\\Factories;\n\nuse App\\Models\\Book;\nuse Illuminate\\Database\\Eloquent\\Factories\\Factory;\n\nclass BookFactory extends Factory\n{\n    public function definition(): array\n    {\n        return [\n            'title' => fake()->sentence(4),\n            'price' => fake()->randomFloat(2, 5, 100),\n            'status' => 'draft',\n        ];\n    }\n\n    // Named state\n    public function published(): static\n    {\n        return $this->state(fn (array $attributes) => [\n            'status' => 'published',\n            'published_at' => now(),\n        ]);\n    }\n\n    public function premium(): static\n    {\n        return $this->state(fn (array $attributes) => [\n            'price' => fake()->randomFloat(2, 50, 200),\n        ]);\n    }\n}\n\n// Usage\nBook::factory()->published()->create();\nBook::factory()->published()->premium()->count(5)->create();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "factory-sequences",
      children: "Factory Sequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequences cycle through a set of values, one per created record."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Database\\Eloquent\\Factories\\Sequence;\n\nBook::factory(5)->state(new Sequence(\n    ['status' => 'draft'],\n    ['status' => 'review'],\n    ['status' => 'published'],\n))->create();\n\n// Sequence with callbacks\nBook::factory(3)->state(new Sequence(\n    fn (Sequence $sequence) => ['position' => $sequence->index],\n))->create();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "using-factories",
      children: "Using Factories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Creating models\nBook::factory()->create();                  // Persist one\nBook::factory(10)->create();                // Persist ten\n$book = Book::factory()->make();            // Make without persisting\n$book = Book::factory()->make(['title' => 'Custom Title']);\n\n// Relationships via factories\n$book = Book::factory()\n    ->has(Review::factory(3))               // Create 3 reviews\n    ->create();\n\n$user = User::factory()\n    ->hasBooks(5)                           // Uses hasBooks method\n    ->create();\n\n// Magic factory methods\nBook::factory()->count(20)->hasReviews(3)->create();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eloquent-models",
      children: "Eloquent Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Eloquent follows convention-over-configuration for table names and primary keys, with fillable/guarded protection against mass-assignment vulnerabilities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-models",
      children: "Creating Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:model Post                          // Basic model\nphp artisan make:model Post -m                       // With migration\nphp artisan make:model Post -mfsc                    // With migration, factory, seeder, controller\nphp artisan make:model Post --all                    // Everything (-a)\nphp artisan make:model Post --policy                 // With policy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Post extends Model\n{\n    // A minimal Eloquent model - convention over configuration\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "model-conventions",
      children: "Model Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\nuse Illuminate\\Database\\Eloquent\\SoftDeletes;\n\nclass Post extends Model\n{\n    // Table name (default: snake_case plural of class name, i.e., 'posts')\n    protected $table = 'blog_posts';\n\n    // Primary key (default: 'id')\n    protected $primaryKey = 'uuid';\n\n    // If primary key is non-incrementing\n    public $incrementing = false;\n\n    // Primary key type (default: 'int')\n    protected $keyType = 'string';\n\n    // Timestamps (default: true)\n    public $timestamps = true;\n\n    // Connection name (default: default DB connection)\n    protected $connection = 'mysql';\n\n    use SoftDeletes; // Adds deleted_at column\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fillable--guarded",
      children: "Fillable / Guarded"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mass assignment protection prevents unintended column assignment."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Post extends Model\n{\n    // Whitelist approach (safer - explicit)\n    protected $fillable = [\n        'title',\n        'content',\n        'status',\n        'user_id',\n    ];\n\n    // Blacklist approach\n    // protected $guarded = ['is_admin'];\n    // protected $guarded = []; // Allow ALL columns (use with caution)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Mass assignment works\nPost::create(['title' => 'Hello', 'content' => '...']);\n\n// Individual assignment always works\n$post = new Post();\n$post->title = 'Hello';\n\n// Protected attributes cannot be mass-assigned\n// Post::create(['is_admin' => true]); // Throws MassAssignmentException\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "casts",
      children: "Casts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Casts transform attributes between their database representation and PHP types."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    protected $casts = [\n        'is_admin' => 'boolean',                  // PHP bool\n        'last_login_at' => 'datetime',            // Carbon instance\n        'last_login_at' => 'datetime:Y-m-d',      // Custom format\n        'salary' => 'decimal:2',                  // Decimal with precision\n        'age' => 'integer',                       // PHP int\n        'config' => 'array',                      // JSON to PHP array\n        'settings' => 'json',                     // JSON to PHP array (identical)\n        'metadata' => 'object',                   // JSON to stdClass\n        'encrypted_field' => 'encrypted',         // Auto-encrypt/decrypt\n        'crypto_key' => 'encrypted:string',       // Encrypted, cast to string\n        'price' => 'float',                       // PHP float\n        'display_price' => 'string',              // PHP string\n    ];\n\n    // Laravel 10+ native typing\n    protected function casts(): array\n    {\n        return [\n            'is_admin' => 'boolean',\n            'config' => 'array',\n        ];\n    }\n}\n\n// Usage\n$isAdmin = $user->is_admin; // Returns true/false (bool), not 0/1\n$config = $user->config;    // Returns array, not JSON string\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-casts",
      children: "Custom Casts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Casts;\n\nuse Illuminate\\Contracts\\Database\\Eloquent\\CastsAttributes;\n\nclass CurrencyCast implements CastsAttributes\n{\n    public function get(Model $model, string $key, mixed $value, array $attributes): string\n    {\n        return '$' . number_format($value / 100, 2);\n    }\n\n    public function set(Model $model, string $key, mixed $value, array $attributes): int\n    {\n        return (int) (preg_replace('/[^0-9.]/', '', $value) * 100);\n    }\n}\n\n// In model\nprotected $casts = [\n    'price' => CurrencyCast::class . ':USD',\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "soft-deletes",
      children: "Soft Deletes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Soft deletes mark records as deleted without removing them from the database."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Database\\Eloquent\\SoftDeletes;\n\nclass Post extends Model\n{\n    use SoftDeletes;\n\n    // deleted_at column is managed automatically\n}\n\n// Normal queries exclude soft-deleted records\n$posts = Post::all();\n\n// Include soft-deleted records\n$posts = Post::withTrashed()->get();\n\n// Only soft-deleted records\n$trashed = Post::onlyTrashed()->get();\n\n// Restore a soft-deleted record\n$post->restore();\n\n// Force delete (permanent removal)\n$post->forceDelete();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "global-scopes",
      children: "Global Scopes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Global scopes add constraints to every query on a model."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models\\Scopes;\n\nuse Illuminate\\Database\\Eloquent\\Builder;\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Scope;\n\nclass PublishedScope implements Scope\n{\n    public function apply(Builder $builder, Model $model): void\n    {\n        $builder->where('status', 'published');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Applying globally to a model:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use App\\Models\\Scopes\\PublishedScope;\nuse Illuminate\\Database\\Eloquent\\Attributes\\ScopedBy;\n\n#[ScopedBy([PublishedScope::class])] // Laravel 11+ attribute syntax\nclass Post extends Model\n{\n    protected static function booted(): void\n    {\n        static::addGlobalScope(new PublishedScope);\n    }\n}\n\n// Removing a global scope\nPost::withoutGlobalScope(PublishedScope::class)->get();\nPost::withoutGlobalScopes()->get(); // Remove all\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "anonymous-global-scopes",
      children: "Anonymous Global Scopes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "protected static function booted(): void\n{\n    static::addGlobalScope('active', function (Builder $builder) {\n        $builder->where('active', true);\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relationships",
      children: "Relationships"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel supports six relationship types including polymorphic variants, with clean fluent syntax for defining and querying related models."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/04-eloquent-database.png",
        alt: "Eloquent Relationships"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "one-to-one",
      children: "One-to-One"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User extends Model\n{\n    public function profile(): HasOne\n    {\n        return $this->hasOne(Profile::class);\n        // SELECT * FROM profiles WHERE user_id = ?\n    }\n\n    public function profileWithConstraints(): HasOne\n    {\n        return $this->hasOne(Profile::class)\n                    ->where('status', 'active');\n    }\n}\n\nclass Profile extends Model\n{\n    public function user(): BelongsTo\n    {\n        return $this->belongsTo(User::class);\n        // SELECT * FROM users WHERE id = ?\n    }\n}\n\n// Usage\n$profile = $user->profile;\n$user = $profile->user;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "one-to-many",
      children: "One-to-Many"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User extends Model\n{\n    public function posts(): HasMany\n    {\n        return $this->hasMany(Post::class);\n        // SELECT * FROM posts WHERE user_id = ?\n    }\n}\n\nclass Post extends Model\n{\n    public function user(): BelongsTo\n    {\n        return $this->belongsTo(User::class);\n        // SELECT * FROM users WHERE id = ?\n    }\n}\n\n// Usage\n$posts = User::find(1)->posts()->where('status', 'published')->get();\n$user = Post::find(1)->user;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "has-many-through",
      children: "Has-Many-Through"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Access distant relations through an intermediate model."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// countries -> users -> posts\nclass Country extends Model\n{\n    public function posts(): HasManyThrough\n    {\n        return $this->hasManyThrough(\n            Post::class,\n            User::class,\n            'country_id',   // Foreign key on users table\n            'user_id',      // Foreign key on posts table\n            'id',           // Local key on countries table\n            'id'            // Local key on users table\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "many-to-many",
      children: "Many-to-Many"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User extends Model\n{\n    public function roles(): BelongsToMany\n    {\n        return $this->belongsToMany(Role::class)\n                    ->withPivot('expires_at', 'granted_by')\n                    ->withTimestamps();\n    }\n}\n\nclass Role extends Model\n{\n    public function users(): BelongsToMany\n    {\n        return $this->belongsToMany(User::class);\n    }\n}\n\n// Usage\n$user->roles()->attach($roleId, ['expires_at' => now()->addYear()]);\n$user->roles()->detach($roleId);\n$user->roles()->sync([1, 2, 3]);\n$user->roles()->syncWithPivotValues([1, 2], ['granted_by' => Auth::id()]);\n\n// Accessing pivot data\nforeach ($user->roles as $role) {\n    echo $role->pivot->expires_at;\n    echo $role->pivot->granted_by;\n}\n\n// Filtering by pivot\n$admins = User::whereHas('roles', function ($query) {\n    $query->where('role_id', 1);\n})->get();\n\n// Aggregating pivot\n$roles = User::withCount('roles')->get(); // returns $user->roles_count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pivot-table-convention",
      children: "Pivot Table Convention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// For User and Role, the pivot table is 'role_user'\n// Columns: user_id, role_id\n\nphp artisan make:migration create_role_user_table\n\nSchema::create('role_user', function (Blueprint $table) {\n    $table->id();\n    $table->foreignId('user_id')->constrained()->cascadeOnDelete();\n    $table->foreignId('role_id')->constrained()->cascadeOnDelete();\n    $table->timestamp('expires_at')->nullable();\n    $table->timestamps();\n\n    $table->unique(['user_id', 'role_id']);\n\n> **Warning:** Always add a unique composite index on pivot tables to prevent duplicate relationships. Without it, `attach()` could create duplicate rows unless you're deliberately allowing multiple same-type relationships.\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "polymorphic",
      children: "Polymorphic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Comment"
      }), " model can belong to both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Post"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Video"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('comments', function (Blueprint $table) {\n    $table->id();\n    $table->text('body');\n    $table->morphs('commentable'); // commentable_id (BIGINT) + commentable_type (STRING)\n    $table->timestamps();\n});\n\nclass Comment extends Model\n{\n    public function commentable(): MorphTo\n    {\n        return $this->morphTo();\n    }\n}\n\nclass Post extends Model\n{\n    public function comments(): MorphMany\n    {\n        return $this->morphMany(Comment::class, 'commentable');\n    }\n}\n\nclass Video extends Model\n{\n    public function comments(): MorphMany\n    {\n        return $this->morphMany(Comment::class, 'commentable');\n    }\n}\n\n// Usage\n$post->comments()->create(['body' => 'Great post!']);\n$video->comments; // All comments on this video\n$comment->commentable; // The parent model (Post or Video)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "many-to-many-polymorphic",
      children: "Many-to-Many Polymorphic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tags can attach to multiple model types."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('taggables', function (Blueprint $table) {\n    $table->id();\n    $table->foreignId('tag_id')->constrained();\n    $table->morphs('taggable'); // taggable_id + taggable_type\n    $table->timestamps();\n});\n\nclass Tag extends Model\n{\n    public function posts(): MorphToMany\n    {\n        return $this->morphedByMany(Post::class, 'taggable');\n    }\n\n    public function videos(): MorphToMany\n    {\n        return $this->morphedByMany(Video::class, 'taggable');\n    }\n}\n\nclass Post extends Model\n{\n    public function tags(): MorphToMany\n    {\n        return $this->morphToMany(Tag::class, 'taggable');\n    }\n}\n\n// Usage\n$post->tags()->attach($tagId);\n$tag->posts; // All posts with this tag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eager-loading",
      children: "Eager Loading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Eager loading via with() eliminates the N+1 query problem, reducing database queries from 1+N to just 2 for parent-child relationship loops."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic-eager-loading",
      children: "Basic Eager Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// N+1 problem (BAD):\n$posts = Post::all();\nforeach ($posts as $post) {\n    echo $post->user->name; // Executes N queries!\n}\n\n// Eager loaded (GOOD):\n$posts = Post::with('user')->get();\nforeach ($posts as $post) {\n    echo $post->user->name; // Only 2 queries total\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nested-eager-loading",
      children: "Nested Eager Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$posts = Post::with(['user', 'comments.user', 'tags'])->get();\n\n// Nested using dot notation\n$posts = Post::with('user.profile.address')->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "constraining-eager-loads",
      children: "Constraining Eager Loads"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$users = User::with(['posts' => function (Builder $query) {\n    $query->where('status', 'published')\n          ->orderBy('published_at', 'desc')\n          ->limit(5);\n}])->get();\n\n// Constrain with a condition (Laravel 11+)\n$users = User::withWhereHas('posts', function (Builder $query) {\n    $query->where('status', 'published');\n})->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lazy-eager-loading",
      children: "Lazy Eager Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Load relationships after the initial query when needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$books = Book::all();\n\nif ($someCondition) {\n    $books->load('author.profile');\n}\n\n// Conditional loading\n$books->loadWhereHas('reviews', fn ($q) => $q->where('rating', '>=', 4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "counting-related-models",
      children: "Counting Related Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$users = User::withCount('posts')->get();\necho $users->first()->posts_count;\n\n// Multiple counts\n$users = User::withCount(['posts', 'comments'])->get();\n\n// Constrained counts\n$users = User::withCount(['posts' => function (Builder $q) {\n    $q->where('status', 'published');\n}])->get();\n\n// loadCount for lazy loading\n$user->loadCount('posts');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "n1-problem",
      children: "N+1 Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The N+1 problem occurs when you fetch a collection of N records, then access a relationship on each one, producing 1 query for the parent collection + N queries for the relationship."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// N+1 in action:\n$authors = User::all(); // 1 query: SELECT * FROM users\n\nforeach ($authors as $author) {\n    echo $author->books->count(); // N queries: SELECT * FROM books WHERE user_id = ?\n}\n\n// Total: 1 + N queries (devastating at scale)\n\n// Fixed with eager loading:\n$authors = User::with('books')->get(); // 2 queries total\nforeach ($authors as $author) {\n    echo $author->books->count();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detection",
      children: "Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable the N+1 query detection in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AppServiceProvider"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// In boot() of AppServiceProvider (development only)\nModel::preventLazyLoading(!$this->app->isProduction());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel 10+ also supports:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Model::handleLazyLoadingViolationUsing(function ($model, $relation) {\n\n> **Remember:** Enable `Model::preventLazyLoading(!$this->app->isProduction())` in your AppServiceProvider during development. It detects N+1 issues immediately rather than discovering them under production load.\n    Log::warning(\"Lazy loading detected: {$relation} on \" . get_class($model));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accessors-mutators-and-casts",
      children: "Accessors, Mutators, and Casts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Modern Laravel uses Attribute::make with explicit get/set closures for transforming attribute values between database and PHP representations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "defining-accessors-laravel-9-style",
      children: "Defining Accessors (Laravel 9+ Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Casts\\Attribute;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    // Laravel 9+ preferred syntax\n    protected function fullName(): Attribute\n    {\n        return Attribute::make(\n            get: fn (mixed $value, array $attributes) => ucfirst($attributes['first_name']) . ' ' . ucfirst($attributes['last_name']),\n        );\n    }\n\n    protected function formattedPrice(): Attribute\n    {\n        return Attribute::make(\n            get: fn (mixed $value) => '$' . number_format($this->price, 2),\n        );\n    }\n}\n\n// Usage\necho $user->full_name; // \"John Doe\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "defining-mutators",
      children: "Defining Mutators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Casts\\Attribute;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    protected function password(): Attribute\n    {\n        return Attribute::make(\n            set: fn (string $value) => bcrypt($value),\n        );\n    }\n\n    // Both get and set\n    protected function displayName(): Attribute\n    {\n        return Attribute::make(\n            get: fn (mixed $value, array $attributes) => $attributes['name'] ?? $attributes['email'],\n            set: fn (string $value) => ['name' => trim($value)],\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "legacy-accessormutator-style-pre-laravel-9",
      children: "Legacy Accessor/Mutator Style (Pre-Laravel 9)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Accessor\npublic function getNameAttribute($value)\n{\n    return ucfirst($value);\n}\n\n// Mutator\npublic function setNameAttribute($value)\n{\n    $this->attributes['name'] = strtolower($value);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eloquent-collections",
      children: "Eloquent Collections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Eloquent returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Illuminate\\Database\\Eloquent\\Collection"
      }), " instances, which extend Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Support\\Collection"
      }), " with extra methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$users = User::where('active', true)->get();\n\n// Transformation\n$names = $users->pluck('name');                        // Extract single column\n$pairs = $users->pluck('name', 'id');                  // Key-value pairs\n$emails = $users->map(fn ($user) => $user->email);    // Transform each item\n$filtered = $users->filter(fn ($user) => $user->age > 18);\n\n// Filtering\n$active = $users->where('status', 'active');           // Simple key-value filter\n$first = $users->firstWhere('is_admin', true);         // First match\n$contains = $users->contains('email', 'john@example.com'); // Check existence\n\n// Aggregation\n$grouped = $users->groupBy('role');                    // Group by attribute\n$counts = $users->countBy('role');                     // Count per group\n\n// Reduction\n$total = $users->reduce(fn ($carry, $user) => $carry + $user->points, 0);\n\n// Sorting\n$sorted = $users->sortBy('name');\n$sortedDesc = $users->sortByDesc('created_at');\n\n// Retrieval\n$first = $users->first();\n$last = $users->last();\n\n// Side effects\n$users->each(fn ($user) => $user->sendWelcomeEmail());\n$users->tap(function ($collection) {\n    Log::info('Processing ' . $collection->count() . ' users');\n});\n\n// Piping\n$result = $users->pipe(fn ($collection) => $collection->sum('salary'));\n$through = $users->pipeThrough([\n    fn ($c) => $c->where('active', true),\n    fn ($c) => $c->sortBy('name'),\n    fn ($c) => $c->values(),\n]);\n\n// Partition\n[$admins, $users] = User::all()->partition(fn ($u) => $u->is_admin);\n\n// Unique\n$uniqueCountries = $users->unique('country');\n\n// To array / json\n$array = $users->toArray();\n$json = $users->toJson();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-collection-methods",
      children: "Custom Collection Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Collection;\n\nclass UserCollection extends Collection\n{\n    public function active(): self\n    {\n        return $this->filter(fn ($user) => $user->is_active);\n    }\n\n    public function admins(): self\n    {\n        return $this->filter(fn ($user) => $user->is_admin);\n    }\n}\n\n// Register in model\nclass User extends Model\n{\n    public function newCollection(array $models = []): UserCollection\n    {\n        return new UserCollection($models);\n    }\n}\n\n// Usage\n$users->active()->admins();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "local-scopes",
      children: "Local Scopes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local scopes allow you to define reusable query constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Builder;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Post extends Model\n{\n    // Scope method must be prefixed with 'scope'\n    public function scopePopular(Builder $query, int $minViews = 100): Builder\n    {\n        return $query->where('views', '>=', $minViews);\n    }\n\n    public function scopePublished(Builder $query): Builder\n    {\n        return $query->whereNotNull('published_at');\n    }\n\n    public function scopeOfCategory(Builder $query, string $category): Builder\n    {\n        return $query->whereHas('category', fn ($q) => $q->where('slug', $category));\n    }\n\n    // Dynamic (named) scope\n    public function scopeWhereRelation(Builder $query, string $relation, string $column, string $operator, mixed $value): Builder\n    {\n        return $query->whereHas($relation, fn ($q) => $q->where($column, $operator, $value));\n    }\n}\n\n// Usage\n$popularPosts = Post::popular(500)->published()->get();\n$recentPopular = Post::popular()->where('created_at', '>=', now()->subWeek())->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-events--observers",
      children: "Model Events & Observers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Observers centralize model lifecycle logic into single classes, keeping controllers clean and ensuring consistent behavior across all model interactions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-types",
      children: "Event Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eloquent models fire several events throughout their lifecycle:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "retrieved"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "creating"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "updating"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updated"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "saving"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "saved"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "deleting"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deleted"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "trashed"
        }), " (soft delete)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "restoring"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restored"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "forceDeleting"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "forceDeleted"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "observers",
      children: "Observers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Observers group all event listeners into a single class."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:observer PostObserver --model=Post\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Observers;\n\nuse App\\Models\\Post;\n\nclass PostObserver\n{\n    public function creating(Post $post): void\n    {\n        // Before create - set defaults\n        $post->slug ??= str($post->title)->slug();\n    }\n\n    public function created(Post $post): void\n    {\n        // After create - log, notify, etc.\n        Log::info(\"Post created: {$post->title}\");\n        ActivityLog::create(['action' => 'post_created', 'post_id' => $post->id]);\n    }\n\n    public function updating(Post $post): void\n    {\n        if ($post->isDirty('content')) {\n            $post->edited_at = now();\n        }\n    }\n\n    public function updated(Post $post): void\n    {\n        if ($post->wasChanged('status') && $post->status === 'published') {\n            Mail::to($post->user)->queue(new PostPublishedMail($post));\n        }\n    }\n\n    public function saving(Post $post): void\n    {\n        $post->search_index = strip_tags($post->content);\n    }\n\n    public function deleted(Post $post): void\n    {\n        $post->comments()->delete();\n        Cache::forget(\"post.{$post->id}\");\n    }\n\n    public function restoring(Post $post): void\n    {\n        if ($post->user->trashed()) {\n            return false; // Cancel the restore\n        }\n    }\n\n    public function restored(Post $post): void\n    {\n        $post->comments()->restore();\n    }\n\n    public function forceDeleted(Post $post): void\n    {\n        Storage::delete($post->featured_image);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "registering-observers",
      children: "Registering Observers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse App\\Models\\Post;\nuse App\\Observers\\PostObserver;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass AppServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        // Register observer\n        Post::observe(PostObserver::class);\n    }\n}\n\n// Or using EventServiceProvider (Laravel 10+)\nprotected $observers = [\n    Post::class => [PostObserver::class],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-in-closure-without-observer",
      children: "Events in Closure (Without Observer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Post extends Model\n{\n    protected static function booted(): void\n    {\n        static::creating(function (Post $post) {\n            $post->uuid = (string) str()->uuid();\n        });\n\n        static::saved(function (Post $post) {\n            Cache::forget(\"post_stats\");\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Eloquent ORM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Query Builder"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raw SQL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ORM with relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent query construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String SQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented (parameter binding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented (parameter binding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer responsibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (6 types)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual JOINs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual JOINs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hydration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eloquent model instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StdClass objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StdClass objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mass Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protected via fillable/guarded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex domain logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple CRUD, reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom database features"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--artisan-commands",
      children: "Quick Reference — Artisan Commands"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:migration create_posts_table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan migrate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run pending migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan migrate:fresh --seed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drop all tables, migrate, seed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:model Post -mfsc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model with migration, factory, seeder, controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:factory PostFactory --model=Post"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create factory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:observer PostObserver --model=Post"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create observer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan schema:dump --prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Squash migrations"
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
            children: "Migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "posts, comments tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "products, orders, inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tenants, subscriptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comments on posts/videos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reviews on products/orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notifications per entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eager Loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post + author + comments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order + items + product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant + users + plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Soft Deletes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archived posts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cancelled orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deactivated tenants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global Scopes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Published only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active products only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant scoping"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which Eloquent relationship type uses a morphs() column pair?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) HasManyThrough"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) BelongsToMany"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) MorphMany"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) HasOne"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What is the purpose of the $fillable property on an Eloquent model?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Define which columns are nullable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Whitelist attributes for mass assignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Specify the table name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Declare relationship methods"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. How does eager loading solve the N+1 problem?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) It caches all queries in memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) It loads related data in a single additional query"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) It limits results to N records"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) It disables lazy loading globally"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What does the SoftDeletes trait add to a model?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Automatic timestamps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) A deleted_at column for soft deletion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Cascade delete behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Force delete protection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-c, 2-b, 3-b, 4-b"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migrations act as version control for database schemas; the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "up()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "down()"
        }), " pattern ensures all changes are reversible"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Schema Builder provides fluent methods for every major column type, modifier, and index across all supported databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Factories paired with Faker generate realistic test data; states and sequences enable fine-grained variation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Eloquent models follow convention-over-configuration for table names, primary keys, and timestamps, with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fillable"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "guarded"
        }), " preventing mass assignment vulnerabilities"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel supports all major relationship types (one-to-one, one-to-many, many-to-many, has-many-through, polymorphic) with clean fluent syntax"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Eager loading via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "with()"
        }), " eliminates the N+1 query problem, critical for any application displaying related data in loops"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Accessors and mutators encapsulate attribute transformation; Laravel 9+ uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Attribute::make"
        }), " with explicit get/set closures"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Global scopes add persistent query constraints; local scopes provide reusable, chainable query methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observers centralize model lifecycle logic, keeping controllers clean and ensuring consistent behavior across all model interactions"
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
            children: "fillable"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "guarded"
          }), " in Eloquent models, and why is mass-assignment protection important?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the N+1 query problem. Write an example of code that triggers it and show how to fix it with eager loading."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does a polymorphic relationship differ from a standard one-to-many relationship? Provide a real-world scenario where you would use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "morphMany"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a pivot table, and when is one needed? How do you access pivot data in a many-to-many relationship?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compare the legacy accessor/mutator convention (", (0,jsx_runtime.jsx)(_components.code, {
            children: "getNameAttribute"
          }), ") with the modern ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Attribute::make"
          }), " approach. What advantages does the latter provide?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a Migration & Model for an E-Commerce Platform"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create the migration and Eloquent model for an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Order"
          }), " table that includes: an auto-incrementing ID, a foreign key to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "users"
          }), ", a UUID for public reference, a JSON field for line items, a string status with a default of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pending"
          }), ", monetary fields for subtotal/tax/total stored as integers (cents), timestamps, and soft deletes. Define the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$fillable"
          }), " array and a cast for the monetary fields."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Factory with States and Relationships"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a factory for a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Course"
          }), " model that has a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "status"
          }), " field (", (0,jsx_runtime.jsx)(_components.code, {
            children: "draft"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "published"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "archived"
          }), "). Create states for each status. Generate 10 published courses, each with 3 related ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Lesson"
          }), " models. Use a sequence to assign a unique ", (0,jsx_runtime.jsx)(_components.code, {
            children: "position"
          }), " integer to each lesson within its course."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Observer for Cache Invalidation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProductObserver"
          }), " that clears the cached product list whenever a product is created, updated, or deleted. Use the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "saved"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "deleted"
          }), " events. Show the observer class and its registration in a service provider."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build a Multi-Model Tagging System with Scopes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Design a complete polymorphic many-to-many tagging system where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Post"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Video"
      }), " models can be tagged. Implement:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tags"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "taggables"
        }), " migration schemas"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tag"
        }), " model with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "posts()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "videos()"
        }), " relationship methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Post"
        }), " model with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tags()"
        }), " relationship, a local scope ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withAllTags(array $tagNames)"
        }), " that returns posts having all specified tags, and a global scope that excludes posts tagged ", (0,jsx_runtime.jsx)(_components.code, {
          children: "archived"
        }), " unless explicitly requested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TagObserver"
        }), " that prevents deletion of tags attached to more than 10 models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An accessor on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tag"
        }), " that returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$tag->usage_count"
        }), " from a cached query"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Demonstrate the query chain: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Post::withoutGlobalScope('exclude_archived')->withAllTags(['laravel', 'eloquent'])->get()"
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