"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[65306],{

/***/ 74661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_03_build_tools_md_038_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-03-build-tools-md-038.json
const site_docs_courses_devops_03_build_tools_md_038_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/03-build-tools","title":"Chapter 3: Build Tools","description":"Prev: Version Control","source":"@site/docs/courses/devops/03-build-tools.md","sourceDirName":"courses/devops","slug":"/devops/03-build-tools","permalink":"/ai-engineering-journey/devops/03-build-tools","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"03-build-tools","slug":"/devops/03-build-tools","title":"Chapter 3: Build Tools","sidebar_label":"Chapter 3: Build Tools","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 2: Linux Basics for DevOps","permalink":"/ai-engineering-journey/devops/02-linux-basics"},"next":{"title":"Chapter 3: Version Control","permalink":"/ai-engineering-journey/devops/03-version-control"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/03-build-tools.md


const frontMatter = {
	id: '03-build-tools',
	slug: '/devops/03-build-tools',
	title: 'Chapter 3: Build Tools',
	sidebar_label: 'Chapter 3: Build Tools',
	sidebar_position: 4
};
const contentTitle = 'Chapter 3: Build Tools';

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
  "value": "The Build Process",
  "id": "the-build-process",
  "level": 3
}, {
  "value": "Package Managers",
  "id": "package-managers",
  "level": 3
}, {
  "value": "TypeScript Build Configuration",
  "id": "typescript-build-configuration",
  "level": 3
}, {
  "value": "Module Bundlers",
  "id": "module-bundlers",
  "level": 3
}, {
  "value": "Build Caching Strategies",
  "id": "build-caching-strategies",
  "level": 3
}, {
  "value": "Dependency Management",
  "id": "dependency-management",
  "level": 3
}, {
  "value": "Build Optimization",
  "id": "build-optimization",
  "level": 3
}, {
  "value": "npm Scripts and Task Running",
  "id": "npm-scripts-and-task-running",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Custom Build Pipeline",
  "id": "example-1-custom-build-pipeline",
  "level": 3
}, {
  "value": "Example 2: Dependency Audit Script",
  "id": "example-2-dependency-audit-script",
  "level": 3
}, {
  "value": "Example 3: Monorepo Build Orchestrator",
  "id": "example-3-monorepo-build-orchestrator",
  "level": 3
}, {
  "value": "Build Artifact Analyzer and Size Budget Tracker",
  "id": "build-artifact-analyzer-and-size-budget-tracker",
  "level": 3
}, {
  "value": "Dependency Cache Optimization Engine",
  "id": "dependency-cache-optimization-engine",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    br: "br",
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
        id: "chapter-3-build-tools",
        children: "Chapter 3: Build Tools"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/03-version-control",
          children: "Version Control"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/04-cicd",
          children: "CI/CD"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the role of build tools in the DevOps pipeline."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between build automation tools, dependency managers, and task runners."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master TypeScript/JavaScript build tools: npm, yarn, tsc, esbuild, webpack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure build scripts for CI/CD pipelines."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage dependencies, versioning, and lock files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement caching strategies for faster builds."
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
        href: "../../assets/images/lessons/devops/03-build-tools/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/03-build-tools/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/03-build-tools/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/03-build-tools/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/03-build-tools/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/03-build-tools/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Build Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile, bundle, minify, optimize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every CI/CD pipeline starts with a build step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package Managers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependencies, lock files, registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock files ensure reproducible builds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module Bundlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle for browser or Node.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose esbuild for speed, webpack for features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript Compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking and transpilation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tsc --noEmit"
            }), " in CI for type safety"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid rebuilding unchanged code"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cache ", (0,jsx_runtime.jsx)(_components.code, {
              children: "node_modules"
            }), " and build output in CI"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task Runners"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate lint, test, build sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use npm scripts for simplicity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code splitting, tree shaking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce bundle size for faster deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monorepo Builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nx, Turborepo, Lerna"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel builds across packages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Source Code] --> B[Package Manager]\n    B --> C[Dependency Resolution]\n    C --> D[Lock File]\n    A --> E[Transpiler]\n    A --> F[Bundler]\n    E & F --> G[Build Artifact]\n    G --> H[Optimization]\n    H --> I[Minification]\n    H --> J[Code Splitting]\n    H --> K[Tree Shaking]\n    I & J & K --> L[Deployable Output]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-build-process",
      children: "The Build Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The build process transforms source code into deployable artifacts. In a DevOps pipeline, the build stage is the first automated gate:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Source] --> B[Lint]\n    B --> C[Type Check]\n    C --> D[Compile]\n    D --> E[Bundle]\n    E --> F[Minify]\n    F --> G[Test]\n    G --> H[Package]\n    H --> I[Artifact]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-managers",
      children: "Package Managers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm (Node Package Manager):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default package manager for Node.js"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " defines dependencies and scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "package-lock.json"
        }), " ensures deterministic installs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules"
        }), " holds installed packages"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "npm init          # Create package.json\nnpm install       # Install all dependencies\nnpm install express  # Install and save to dependencies\nnpm install -D typescript  # Dev dependency\nnpm ci            # Clean install (CI-friendly, uses lock file)\nnpm audit         # Check for known vulnerabilities\nnpm outdated      # Check for outdated packages\nnpm update        # Update packages within semver range\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "yarn:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faster alternative to npm with better caching"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "yarn.lock"
        }), " for deterministic installs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Plug'n'Play (PnP) mode avoids ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "yarn add express       # Install and save dependency\nyarn add -D typescript # Dev dependency\nyarn install --frozen-lockfile  # CI install\nyarn upgrade-interactive        # Interactive upgrade\nyarn why typescript             # Why is this dependency needed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "pnpm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disk-efficient with content-addressable storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strict dependency isolation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fastest installs for large projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-build-configuration",
      children: "TypeScript Build Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript compilation via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tsconfig.json"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"commonjs\",\n    \"lib\": [\"ES2022\"],\n    \"outDir\": \"./dist\",\n    \"rootDir\": \"./src\",\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"skipLibCheck\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"resolveJsonModule\": true,\n    \"declaration\": true,\n    \"declarationMap\": true,\n    \"sourceMap\": true\n  },\n  \"include\": [\"src/**/*\"],\n  \"exclude\": [\"node_modules\", \"dist\", \"**/*.test.ts\"]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "module-bundlers",
      children: "Module Bundlers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "esbuild (fastest):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Written in Go, 10-100x faster than JavaScript bundlers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in TypeScript, JSX, CSS support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ideal for rapid development and CI/CD"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "esbuild src/index.ts --bundle --outfile=dist/bundle.js --minify\nesbuild src/index.ts --bundle --platform=node --outfile=dist/server.js\nesbuild --watch src/index.ts --outfile=dist/bundle.js\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "webpack (most feature-rich):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code splitting, lazy loading, asset management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extensive plugin ecosystem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex configuration for large applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// webpack.config.js\nmodule.exports = {\n  entry: './src/index.ts',\n  output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js' },\n  resolve: { extensions: ['.ts', '.js'] },\n  module: {\n    rules: [\n      { test: /\\.ts$/, use: 'ts-loader', exclude: /node_modules/ },\n    ],\n  },\n  optimization: {\n    splitChunks: { chunks: 'all' },\n    minimize: true,\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build speed comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time (100 files)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Features"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popularity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "esbuild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript, JSX, CSS, minify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tsc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full type checking only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webpack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code splitting, plugins, loaders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Popular"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rollup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree shaking, ES modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Libraries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parcel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero config, fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rust-based, TypeScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bun"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in bundler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emerging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-caching-strategies",
      children: "Build Caching Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI build caching:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# GitHub Actions cache example\n- uses: actions/cache@v3\n  with:\n    path: |\n      ~/.npm\n      .eslintcache\n      dist/\n    key: ${{ runner.os }}-build-${{ hashFiles('**/package-lock.json') }}\n    restore-keys: |\n      ${{ runner.os }}-build-\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node modules caching in CI:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cache ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.npm"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm install"
        }), ") for deterministic installs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Invalidate cache when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package-lock.json"
        }), " changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build output caching:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache compiled output (dist/, build/)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use incremental compilation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "tsc --incremental"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leverage esbuild's native speed (often no caching needed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-management",
      children: "Dependency Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic versioning in dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"dependencies\": {\n    \"express\": \"^4.18.0\",     // Compatible with 4.x\n    \"lodash\": \"~4.17.0\",      // Compatible with 4.17.x\n    \"typescript\": \"5.0.0\",    // Exact version\n    \"react\": \">=17.0.0\",      // Minimum version\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Lock files (", (0,jsx_runtime.jsx)(_components.code, {
          children: "package-lock.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yarn.lock"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pin exact versions of all transitive dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure reproducible installs across environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be committed to version control"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " (CI) vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm install"
        }), " (development)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monorepo dependency management:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "my-project/\n+-- package.json          # Root package with workspaces\n+-- packages/\n¦   +-- core/\n¦   ¦   +-- package.json  # Depends on shared\n¦   ¦   +-- src/\n¦   +-- api/\n¦   ¦   +-- package.json  # Depends on core\n¦   ¦   +-- src/\n¦   +-- web/\n¦       +-- package.json  # Depends on core\n¦       +-- src/\n+-- package-lock.json     # Single lock file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-optimization",
      children: "Build Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree shaking (dead code elimination):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove unused exports from bundled output"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ES module syntax (", (0,jsx_runtime.jsx)(_components.code, {
          children: "import"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "export"
        }), ") for static analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Side-effect-free declarations in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"sideEffects\": false,\n  \"sideEffects\": [\"*.css\"]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code splitting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split bundle into smaller chunks loaded on demand"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route-based splitting for SPAs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vendor chunk for stable third-party libraries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Dynamic import for code splitting\nconst AdminModule = await import('./modules/admin');\n// Webpack/parcel automatically creates separate chunk\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Minification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove whitespace, rename variables, optimize syntax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "esbuild: built-in minifier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Terser: standard for webpack"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "npm-scripts-and-task-running",
      children: "npm Scripts and Task Running"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"scripts\": {\n    \"build\": \"tsc\",\n    \"build:watch\": \"tsc --watch\",\n    \"build:prod\": \"tsc && esbuild src/index.ts --bundle --minify --outfile=dist/bundle.js\",\n    \"lint\": \"eslint src/\",\n    \"lint:fix\": \"eslint src/ --fix\",\n    \"format\": \"prettier --write src/\",\n    \"format:check\": \"prettier --check src/\",\n    \"test\": \"jest\",\n    \"test:coverage\": \"jest --coverage\",\n    \"test:watch\": \"jest --watch\",\n    \"clean\": \"rm -rf dist/\",\n    \"prebuild\": \"npm run clean && npm run lint\",\n    \"postbuild\": \"npm run test\",\n    \"start\": \"node dist/index.js\",\n    \"dev\": \"ts-node-dev --respawn src/index.ts\",\n    \"ci\": \"npm ci && npm run lint && npm run build && npm run test\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-custom-build-pipeline",
      children: "Example 1: Custom Build Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { execSync } from 'child_process';\nimport { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';\nimport { tmpdir } from 'os';\nimport { join } from 'path';\n\ninterface BuildConfig {\n  entry: string;\n  outDir: string;\n  minify: boolean;\n  sourceMaps: boolean;\n  platform: 'browser' | 'node';\n  env: Record<string, string>;\n}\n\nclass BuildPipeline {\n  private config: BuildConfig;\n  private startTime: number = 0;\n\n  constructor(config: BuildConfig) {\n    this.config = config;\n  }\n\n  async run(): Promise<void> {\n    this.startTime = Date.now();\n    console.log('?? Starting build pipeline...\\n');\n\n    this.ensureOutputDir();\n    this.validateEntry();\n    this.setEnvironmentVariables();\n    this.runTypeCheck();\n    this.bundleWithEsbuild();\n    this.copyStaticAssets();\n    this.generateBuildInfo();\n    this.printSummary();\n  }\n\n  private ensureOutputDir(): void {\n    if (!existsSync(this.config.outDir)) {\n      mkdirSync(this.config.outDir, { recursive: true });\n      console.log(`?? Created output directory: ${this.config.outDir}`);\n    }\n  }\n\n  private validateEntry(): void {\n    if (!existsSync(this.config.entry)) {\n      throw new Error(`Entry point not found: ${this.config.entry}`);\n    }\n    console.log(`? Entry point validated: ${this.config.entry}`);\n  }\n\n  private setEnvironmentVariables(): void {\n    Object.entries(this.config.env).forEach(([key, value]) => {\n      process.env[key] = value;\n    });\n    console.log(`??  Environment variables set (${Object.keys(this.config.env).length})`);\n  }\n\n  private runTypeCheck(): void {\n    console.log('?? Running TypeScript type check...');\n    try {\n      execSync('npx tsc --noEmit', { stdio: 'inherit' });\n      console.log('? TypeScript type check passed');\n    } catch {\n      throw new Error('TypeScript type check failed');\n    }\n  }\n\n  private bundleWithEsbuild(): void {\n    console.log('?? Bundling with esbuild...');\n    const args = [\n      this.config.entry,\n      `--outdir=${this.config.outDir}`,\n      `--platform=${this.config.platform}`,\n      '--format=cjs',\n      '--target=es2022',\n      '--bundle',\n    ];\n\n    if (this.config.minify) args.push('--minify');\n    if (this.config.sourceMaps) args.push('--sourcemap');\n\n    try {\n      execSync(`npx esbuild ${args.join(' ')}`, { stdio: 'inherit' });\n      console.log('? Bundle complete');\n    } catch {\n      throw new Error('Bundle failed');\n    }\n  }\n\n  private copyStaticAssets(): void {\n    console.log('?? Copying static assets...');\n    try {\n      execSync('cp -r src/public/* dist/ 2>/dev/null; true', { stdio: 'inherit' });\n    } catch {\n      // No public dir, skip\n    }\n  }\n\n  private generateBuildInfo(): void {\n    const buildInfo = {\n      buildTime: new Date().toISOString(),\n      duration: Date.now() - this.startTime,\n      entry: this.config.entry,\n      env: this.config.env.NODE_ENV,\n      minified: this.config.minify,\n      sourceMaps: this.config.sourceMaps,\n    };\n    writeFileSync(\n      join(this.config.outDir, 'build-info.json'),\n      JSON.stringify(buildInfo, null, 2),\n    );\n    console.log('?? Build info generated');\n  }\n\n  private printSummary(): void {\n    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);\n    const outSize = this.getOutputSize();\n    console.log(`\\n? Build complete in ${duration}s`);\n    console.log(`?? Output size: ${outSize}`);\n  }\n\n  private getOutputSize(): string {\n    try {\n      const result = execSync(`du -sh ${this.config.outDir}`, { encoding: 'utf-8' });\n      return result.split('\\t')[0];\n    } catch {\n      return 'unknown';\n    }\n  }\n}\n\n// Usage\nconst pipeline = new BuildPipeline({\n  entry: 'src/index.ts',\n  outDir: 'dist',\n  minify: true,\n  sourceMaps: true,\n  platform: 'node',\n  env: { NODE_ENV: 'production', API_VERSION: '1.0.0' },\n});\n\npipeline.run().catch(err => {\n  console.error('? Build failed:', err.message);\n  process.exit(1);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-dependency-audit-script",
      children: "Example 2: Dependency Audit Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { readFileSync } from 'fs';\n\ninterface Dependency {\n  name: string;\n  version: string;\n  type: 'dependency' | 'devDependency' | 'peerDependency';\n  hasVulnerability: boolean;\n}\n\nclass DependencyAuditor {\n  private packageJson: any;\n\n  constructor(packageJsonPath: string) {\n    this.packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));\n  }\n\n  listDependencies(): Dependency[] {\n    const deps: Dependency[] = [];\n\n    if (this.packageJson.dependencies) {\n      for (const [name, version] of Object.entries(this.packageJson.dependencies)) {\n        deps.push({ name, version: version as string, type: 'dependency', hasVulnerability: false });\n      }\n    }\n\n    if (this.packageJson.devDependencies) {\n      for (const [name, version] of Object.entries(this.packageJson.devDependencies)) {\n        deps.push({ name, version: version as string, type: 'devDependency', hasVulnerability: false });\n      }\n    }\n\n    if (this.packageJson.peerDependencies) {\n      for (const [name, version] of Object.entries(this.packageJson.peerDependencies)) {\n        deps.push({ name, version: version as string, type: 'peerDependency', hasVulnerability: false });\n      }\n    }\n\n    return deps;\n  }\n\n  analyzeConsistency(): string[] {\n    const issues: string[] = [];\n    const deps = this.listDependencies();\n    const depMap = new Map<string, Dependency[]>();\n\n    for (const dep of deps) {\n      const existing = depMap.get(dep.name) || [];\n      existing.push(dep);\n      depMap.set(dep.name, existing);\n    }\n\n    for (const [name, versions] of depMap.entries()) {\n      const uniqueVersions = new Set(versions.map(v => v.version));\n      if (uniqueVersions.size > 1) {\n        issues.push(`${name} appears at ${uniqueVersions.size} different versions: ${[...uniqueVersions].join(', ')}`);\n      }\n    }\n\n    return issues;\n  }\n\n  generateReport(): string {\n    const deps = this.listDependencies();\n    const inconsistencies = this.analyzeConsistency();\n\n    let report = '# Dependency Audit Report\\n\\n';\n    report += `\n// build tools\n// cicd-infrastructure-automation implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'build tools', data: { topic: 'cicd-infrastructure-automation' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\\n\\n`;\n    report += `- **Total dependencies:** ${deps.length}\\n`;\n    report += `- **Production:** ${deps.filter(d => d.type === 'dependency').length}\\n`;\n    report += `- **Development:** ${deps.filter(d => d.type === 'devDependency').length}\\n`;\n    report += `- **Peer:** ${deps.filter(d => d.type === 'peerDependency').length}\\n\\n`;\n\n    if (inconsistencies.length > 0) {\n      report += `## Inconsistencies\\n\\n`;\n      inconsistencies.forEach(i => report += `- ${i}\\n`);\n    } else {\n      report += '? No version inconsistencies found\\n';\n    }\n\n    return report;\n  }\n}\n\nconst auditor = new DependencyAuditor('./package.json');\nconsole.log(auditor.generateReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-monorepo-build-orchestrator",
      children: "Example 3: Monorepo Build Orchestrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PackageConfig {\n  name: string;\n  path: string;\n  dependencies: string[];\n  buildTime: number;\n  lastBuild: string | null;\n}\n\nclass MonorepoBuildOrchestrator {\n  private packages: Map<string, PackageConfig> = new Map();\n\n  addPackage(config: PackageConfig): void {\n    this.packages.set(config.name, config);\n  }\n\n  getBuildOrder(): string[] {\n    const visited = new Set<string>();\n    const order: string[] = [];\n\n    const visit = (name: string): void => {\n      if (visited.has(name)) return;\n      visited.add(name);\n\n      const pkg = this.packages.get(name);\n      if (!pkg) return;\n\n      // Visit and build dependencies first\n      for (const dep of pkg.dependencies) {\n        visit(dep);\n      }\n\n      order.push(name);\n    };\n\n    for (const name of this.packages.keys()) {\n      visit(name);\n    }\n\n    return order;\n  }\n\n  async buildAll(parallel: boolean = true): Promise<void> {\n    const order = this.getBuildOrder();\n    console.log(`Build order: ${order.join(' ? ')}\\n`);\n\n    if (parallel) {\n      const batches = this.batchParallel(order);\n      for (const batch of batches) {\n        console.log(`Building batch: ${batch.join(', ')}`);\n        await Promise.all(batch.map(name => this.buildPackage(name)));\n      }\n    } else {\n      for (const name of order) {\n        await this.buildPackage(name);\n      }\n    }\n  }\n\n  private batchParallel(order: string[]): string[][] {\n    const batches: string[][] = [];\n    const inDegree = new Map<string, number>();\n    const adjList = new Map<string, string[]>();\n\n    for (const name of order) {\n      inDegree.set(name, 0);\n      adjList.set(name, []);\n    }\n\n    for (const name of order) {\n      const pkg = this.packages.get(name)!;\n      for (const dep of pkg.dependencies) {\n        adjList.get(dep)?.push(name);\n        inDegree.set(name, (inDegree.get(name) || 0) + 1);\n      }\n    }\n\n    const queue: string[] = [];\n    for (const [name, degree] of inDegree) {\n      if (degree === 0) queue.push(name);\n    }\n\n    while (queue.length > 0) {\n      batches.push([...queue]);\n      const size = queue.length;\n      for (let i = 0; i < size; i++) {\n        const node = queue.shift()!;\n        for (const neighbor of adjList.get(node) || []) {\n          const newDegree = (inDegree.get(neighbor) || 1) - 1;\n          inDegree.set(neighbor, newDegree);\n          if (newDegree === 0) queue.push(neighbor);\n        }\n      }\n    }\n\n    return batches;\n  }\n\n  private async buildPackage(name: string): Promise<void> {\n    const pkg = this.packages.get(name)!;\n    console.log(`  Building ${name}...`);\n    await new Promise(resolve => setTimeout(resolve, pkg.buildTime));\n    pkg.lastBuild = new Date().toISOString();\n    console.log(`  ? ${name} built`);\n  }\n}\n\nconst orchestrator = new MonorepoBuildOrchestrator();\norchestrator.addPackage({ name: 'shared', path: './packages/shared', dependencies: [], buildTime: 200, lastBuild: null });\norchestrator.addPackage({ name: 'core', path: './packages/core', dependencies: ['shared'], buildTime: 500, lastBuild: null });\norchestrator.addPackage({ name: 'api', path: './packages/api', dependencies: ['core'], buildTime: 800, lastBuild: null });\norchestrator.addPackage({ name: 'web', path: './packages/web', dependencies: ['core'], buildTime: 1200, lastBuild: null });\n\norchestrator.buildAll(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-artifact-analyzer-and-size-budget-tracker",
      children: "Build Artifact Analyzer and Size Budget Tracker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tracking build artifact sizes over time prevents bloat and enforces performance budgets. The following tool analyzes bundles, tracks historical sizes, and alerts when budgets are exceeded."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// artifact-analyzer.ts\n// Track build artifact sizes and enforce budgets\n\ninterface Artifact {\n  name: string;\n  path: string;\n  sizeBytes: number;\n  type: 'js' | 'css' | 'image' | 'wasm' | 'other';\n}\n\ninterface ArtifactBudget {\n  name: string;\n  maxSizeBytes: number;\n  warnThresholdPercent: number;\n}\n\ninterface ArtifactRecord {\n  artifact: Artifact;\n  budget: ArtifactBudget | null;\n  status: 'ok' | 'warning' | 'over_budget';\n  currentVsBudget: number;\n}\n\ninterface ChangeAnalysis {\n  records: ArtifactRecord[];\n  totalSizeBytes: number;\n  totalBudgetBytes: number;\n  percentOverBudget: number;\n  recommendations: string[];\n}\n\nclass BuildAnalyzer {\n  private readonly budgets: ArtifactBudget[] = [];\n\n  constructor(budgets: ArtifactBudget[]) {\n    this.budgets = budgets;\n  }\n\n  analyze(artifacts: Artifact[]): ChangeAnalysis {\n    const records = artifacts.map(artifact => {\n      const budget = this.budgets.find(b => b.name === artifact.name);\n      let status: 'ok' | 'warning' | 'over_budget' = 'ok';\n\n      if (budget && artifact.sizeBytes > budget.maxSizeBytes) {\n        status = 'over_budget';\n      } else if (budget && artifact.sizeBytes > budget.maxSizeBytes * budget.warnThresholdPercent) {\n        status = 'warning';\n      }\n\n      return {\n        artifact,\n        budget,\n        status,\n        currentVsBudget: budget ? (artifact.sizeBytes / budget.maxSizeBytes) * 100 : 0,\n      };\n    });\n\n    const totalSizeBytes = artifacts.reduce((s, a) => s + a.sizeBytes, 0);\n    const totalBudgetBytes = records\n      .filter(r => r.budget)\n      .reduce((s, r) => s + r.budget!.maxSizeBytes, 0);\n\n    const overBudget = records.filter(r => r.status === 'over_budget');\n    const recommendations: string[] = [];\n\n    if (overBudget.length > 0) {\n      recommendations.push(\n        `${overBudget.length} artifact(s) over budget. Largest offender: ${overBudget.sort((a, b) =>\n          b.currentVsBudget - a.currentVsBudget)[0].artifact.name} (${overBudget[0].currentVsBudget.toFixed(0)}% of budget).`\n      );\n    }\n\n    const largeArtifacts = artifacts.filter(a => a.sizeBytes > 500_000);\n    if (largeArtifacts.length > 0) {\n      recommendations.push(`${largeArtifacts.length} artifact(s) exceed 500KB. Consider code splitting.`);\n    }\n\n    return { records, totalSizeBytes, totalBudgetBytes, percentOverBudget: totalBudgetBytes > 0 ? (totalSizeBytes / totalBudgetBytes) * 100 : 0, recommendations };\n  }\n\n  formatBytes(bytes: number): string {\n    if (bytes > 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;\n    if (bytes > 1_000) return `${(bytes / 1_000).toFixed(1)} KB`;\n    return `${bytes} B`;\n  }\n\n  generateReport(analysis: ChangeAnalysis): string {\n    return `## Build Artifact Analysis\\n\\n` +\n      `| Artifact | Size | Budget | Status |\\n` +\n      `|----------|------|--------|--------|\\n` +\n      analysis.records.map(r =>\n        `| ${r.artifact.name} | ${this.formatBytes(r.artifact.sizeBytes)} | ${r.budget ? this.formatBytes(r.budget.maxSizeBytes) : '—'} | ${r.status === 'ok' ? '?' : r.status === 'warning' ? '??' : '?'} |`\n      ).join('\\n') + '\\n\\n' +\n      `**Total:** ${this.formatBytes(analysis.totalSizeBytes)} / ${this.formatBytes(analysis.totalBudgetBytes)} (${analysis.percentOverBudget.toFixed(1)}%)` +\n      (analysis.recommendations.length > 0 ? '\\n\\n**Recommendations:**\\n' + analysis.recommendations.map(r => `- ${r}`).join('\\n') : '');\n  }\n}\n\nconst analyzer = new BuildAnalyzer([\n  { name: 'main.js', maxSizeBytes: 250_000, warnThresholdPercent: 0.8 },\n  { name: 'vendor.js', maxSizeBytes: 500_000, warnThresholdPercent: 0.85 },\n  { name: 'styles.css', maxSizeBytes: 50_000, warnThresholdPercent: 0.9 },\n]);\n\nconst artifacts: Artifact[] = [\n  { name: 'main.js', path: 'dist/main.js', sizeBytes: 320_000, type: 'js' },\n  { name: 'vendor.js', path: 'dist/vendor.js', sizeBytes: 480_000, type: 'js' },\n  { name: 'styles.css', path: 'dist/styles.css', sizeBytes: 45_000, type: 'css' },\n  { name: 'logo.svg', path: 'dist/logo.svg', sizeBytes: 12_000, type: 'image' },\n];\n\nconsole.log(analyzer.generateReport(analyzer.analyze(artifacts)));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated artifact size analysis with budget enforcement prevents bundle bloat, enforces performance budgets, and generates actionable recommendations for optimization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-cache-optimization-engine",
      children: "Dependency Cache Optimization Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build caching is critical for fast CI pipelines. The following tool analyzes dependency graphs, identifies cache opportunities, and computes optimal cache strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// cache-optimizer.ts\n// Optimize dependency caching strategies for CI builds\n\ninterface CacheCandidate {\n  key: string;\n  paths: string[];\n  hashSource: string;\n  estimatedSizeMB: number;\n  restoreTimeMs: number;\n  missTimeMs: number;\n  frequency: number;\n}\n\ninterface CachePlan {\n  candidates: CacheCandidate[];\n  totalCacheSizeMB: number;\n  estimatedSavingsPercent: number;\n  recommendations: string[];\n  tierOrder: string[];\n}\n\nclass CacheOptimizer {\n  readonly TIERS = { lockfile: 1, nodeModules: 2, dist: 3, global: 4 };\n\n  computePlan(deps: { name: string; version: string; installTimeMs: number }[]): CachePlan {\n    const totalInstallTime = deps.reduce((s, d) => s + d.installTimeMs, 0);\n    const uniqueDeps = new Set(deps.map(d => d.name)).size;\n\n    const candidates: CacheCandidate[] = [\n      {\n        key: 'lockfile-hash',\n        paths: ['package-lock.json'],\n        hashSource: 'package-lock.json',\n        estimatedSizeMB: 0.1,\n        restoreTimeMs: 200,\n        missTimeMs: totalInstallTime,\n        frequency: 1.0,\n      },\n      {\n        key: `node-modules-${process.platform}`,\n        paths: ['node_modules'],\n        hashSource: 'package-lock.json + os',\n        estimatedSizeMB: Math.round(uniqueDeps * 1.5),\n        restoreTimeMs: 10_000,\n        missTimeMs: totalInstallTime,\n        frequency: 0.95,\n      },\n      {\n        key: 'dist-cache',\n        paths: ['dist', '.next', '.cache'],\n        hashSource: 'src/ checksums',\n        estimatedSizeMB: 50,\n        restoreTimeMs: 5_000,\n        missTimeMs: 60_000,\n        frequency: 0.7,\n      },\n    ];\n\n    const totalCacheSizeMB = candidates.reduce((s, c) => s + c.estimatedSizeMB, 0);\n    const savings = (totalInstallTime - 15_000) / totalInstallTime * 100;\n\n    return {\n      candidates,\n      totalCacheSizeMB: Math.round(totalCacheSizeMB),\n      estimatedSavingsPercent: Math.round(savings),\n      recommendations: [\n        `Cache node_modules with lockfile hash key (saves ~${Math.round(savings)}% install time)`,\n        candidates.filter(c => c.estimatedSizeMB > 100).length > 0\n          ? 'Large caches detected — consider splitting into per-package caches'\n          : 'Cache sizes within reasonable range',\n      ],\n      tierOrder: ['lockfile', 'node_modules', 'dist'],\n    };\n  }\n\n  scoreExistingCache(hits: number, misses: number): number {\n    const total = hits + misses;\n    const hitRate = total > 0 ? hits / total : 0;\n    return Math.round(hitRate * 100);\n  }\n}\n\nconst optimizer = new CacheOptimizer();\nconst deps = Array.from({ length: 50 }, (_, i) => ({\n  name: `dep-${i}`,\n  version: `${Math.floor(Math.random() * 5)}.0.0`,\n  installTimeMs: Math.random() * 2000 + 500,\n}));\n\nconst plan = optimizer.computePlan(deps);\nconsole.log(`Cache Plan: ${plan.totalCacheSizeMB}MB total, ~${plan.estimatedSavingsPercent}% savings`);\nconsole.log(`Hit Rate Score: ${optimizer.scoreExistingCache(85, 15)}%`);\nplan.recommendations.forEach(r => console.log(`- ${r}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Strategic dependency caching analysis identifies the most impactful cache targets, computes size-constrained optimization plans, and accelerates CI pipelines by reducing redundant dependency installation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "npm ci"
          }), " in CI pipelines, never ", (0,jsx_runtime.jsx)(_components.code, {
            children: "npm install"
          }), "."]
        }), " It respects the lock file and fails if there's a mismatch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Cache ", (0,jsx_runtime.jsx)(_components.code, {
            children: "node_modules"
          }), " in CI."]
        }), " Use hash of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package-lock.json"
        }), " as cache key for fast restores."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tsc --noEmit"
          }), " before bundling."]
        }), " Type checking catches errors early, then esbuild handles fast bundling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit lock files."
        }), " They ensure deterministic builds across all environments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoid large dependency trees."
        }), " Audit regularly with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm audit"
        }), " and prune unused packages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use workspace tools for monorepos."
        }), " They handle cross-package dependency resolution automatically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: Which build tool is fastest for TypeScript bundling?"
      }), "**A)** webpack", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** tsc", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** esbuild", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** rollup", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: C)** esbuild</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What is the purpose of a lock file (package-lock.json)?"
        }), "**A)** Lock the package version range", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Pin exact versions of all transitive dependencies", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Encrypt the package contents", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Prevent accidental deletion", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Pin exact versions of all transitive dependencies</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What does tree shaking do?"
          }), "**A)** Organize code into trees", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Remove unused exports from the bundle", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Shake the build tree for errors", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Split code into chunks", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Remove unused exports from the bundle</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: In CI pipelines, should you use `npm install` or `npm ci`?"
            }), "**A)** `npm install` — it's faster", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** `npm ci` — it respects the lock file and is deterministic", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Both work the same way", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Neither — use `yarn` instead", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** `npm ci` — it respects the lock file and is deterministic</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What does the caret `^` in `\"express\": \"^4.18.0\"` mean?"
              }), "**A)** Compatible with version 4.x", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Compatible with only 4.18.x", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Compatible with 4.18.0 exactly", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Compatible with any version", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: A)** Compatible with version 4.x</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Build tools transform source code into deployable artifacts as the first automated stage of CI/CD."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Package managers (npm, yarn, pnpm) manage dependencies with lock files ensuring reproducibility."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "TypeScript compilation with strict settings catches type errors at build time."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "esbuild offers the fastest bundling; webpack provides the richest feature set."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Tree shaking and code splitting reduce bundle size for faster deployments."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Build caching in CI (node_modules, dist/) dramatically speeds up pipeline execution."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Monorepos require orchestrators (Nx, Turborepo) for efficient parallel builds."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Dependency hygiene involves regular auditing, pruning, and avoiding unnecessary packages."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "npm install"
                  }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "npm ci"
                  }), "?"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does tree shaking work and what module syntax does it require?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What are the advantages of esbuild over webpack? When would you choose webpack instead?"
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["Why should you commit ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "package-lock.json"
                  }), " to version control?"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does incremental TypeScript compilation improve build performance?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a build pipeline script that runs TypeScript type check, bundles with esbuild, minifies, generates source maps, and writes build metadata."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure a monorepo with three packages (shared, server, client) using npm workspaces."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Write an npm script to audit all dependencies, check for outdated packages, and generate a report."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Implement a CI build cache strategy for a TypeScript project using GitHub Actions."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Design and implement a complete build system for a microservices monorepo with 10 TypeScript services. Include: shared TypeScript configuration, incremental compilation for all packages, parallel build scheduling respecting dependency DAG, bundle size analysis and optimization, automated dependency upgrade PRs, vulnerability scanning as a build gate, and build artifact versioning with git commit hash."
                }), "\n"]
              }), "\n"]
            })]
          })]
        })]
      })]
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